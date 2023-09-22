const SSLCommerzPayment = require("sslcommerz-lts");
const mongoose = require("mongoose");
const WorkOrdersInfo = require("../models/WorkOrders.js");
const confirmOrderCollection = require("../models/confirmOrderCollection.js");
const store_passwd = process.env.STORE_PASS;
const store_id = process.env.STORE_ID;
const { ObjectId } = mongoose.Types;
const is_live = false;

const initiatePayment = async (req, res) => {
  try {
    const totalPaymentBDT = req.body.totalPaymentBDT;
    const order = req.body;

    const tran_id = new ObjectId().toString();

    const data = {
      total_amount: totalPaymentBDT,
      currency: order.currency,
      tran_id: tran_id,
      success_url: `https://fya-backend.vercel.app/api/v1/auth/payment/success/${tran_id}`,
      fail_url: `https://fya-backend.vercel.app/api/v1/auth/payment/fail/${tran_id}`,
      cancel_url: "https://fya-backend.vercel.app/api/v1/auth/payment/cancel",
      ipn_url: "https://fya-backend.vercel.app/api/v1/auth/ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_id: order?.productID || "0",
      product_category: "machinery",
      product_profile: "general",
      cus_name: order?.customerName,
      cus_email: order?.customerEmail,
      cus_add1: order?.address,
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: order?.phone || "00",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
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
    await WorkOrdersInfo.deleteMany({ user_email: user_email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
};

// Handle payment success callback
const paymentSuccess = async (req, res) => {
  try {
    const tranId = req.params.tranId;
    const query = { transactionId: tranId };
    const result = await confirmOrderCollection.updateOne(
      { transactionId: tranId },
      {
        $set: { paidStatus: "paid" },
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect(
        `https://fix-your-motoro.vercel.app/dashboard/user/user_add_to_card/checkout/success/${tranId}`
      );
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment processing failed" });
  }
};

// Handle payment failure callback
const paymentFailure = async (req, res) => {
  try {
    const tranId = req.params.tranId;

    await confirmOrderCollection.deleteOne({ transactionId: tranId });

    res.redirect(
      `https://fix-your-motoro.vercel.app/dashboard/user/user_add_to_card/checkout/fail/${tranId}`
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment processing failed" });
  }
};

// Handle payment cancellation callback
const paymentCancel = async (req, res) => {
  try {
    // You can handle any necessary cleanup or logging here.
    res.redirect(`URL for cancellation page`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment cancellation processing failed" });
  }
};

// Handle IPN (Instant Payment Notification) callback
const ipnCallback = async (req, res) => {
  try {
    res.status(200).send("IPN received and processed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "IPN processing failed" });
  }
};

module.exports = {
  paymentFailure,
  paymentSuccess,
  initiatePayment,
  paymentCancel,
  ipnCallback,
};
