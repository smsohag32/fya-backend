const SSLCommerzPayment = require('sslcommerz-lts');
const ObjectId = require('mongoose').Types.ObjectId;
const orderCollection = require('../models/orderModel'); 
const confirmOrderCollection = require('../models/confirmOrderModel'); 
const WorkOrdersInfo = require('../models/WorkOrders.js')
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;



const initiatePayment = async (req, res) => {
  try {
    const totalPaymentBDT = req.body.totalPaymentBDT;
    const order = req.body;
    const productId = req.body.itemDetails[0].productID;

    // Generate a unique transaction ID
    const tran_id = new ObjectId().toString();

    const data = {
      // Payment data
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);

    // Redirect the user to the payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // Save payment information to the "confirm order" collection
    const finalOrder = {
      order,
      paidStatus: "unpaid",
      transactionId: tran_id,
    };

    await confirmOrderCollection.create(finalOrder);

    // Remove previous order information for the user's email
    const user_email = order.customerEmail;
    await WorkOrdersInfo.deleteMany({ "user_email": user_email });

    console.log("Redirecting to: ", GatewayPageURL);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
};

// Handle payment success callback
const paymentSuccess = async (req, res) => {
  try {
    const tranId = req.params.tranId;

    const result = await confirmOrderCollection.updateOne(
      { transactionId: tranId },
      {
        $set: { paidStatus: "paid" },
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect(`URL for success page`);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};

// Handle payment failure callback
const paymentFailure = async (req, res) => {
  try {
    const tranId = req.params.tranId;

    await confirmOrderCollection.deleteOne({ transactionId: tranId });

    res.redirect(`URL for failure page`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};

module.exports = { paymentFailure, paymentSuccess, initiatePayment };
