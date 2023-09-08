const workshopInfo = require("../models/WorkshopInfo.js");
const carsinfos = require("../models/CarsInfo.js");
const workOrderInfo = require("../models/WorkOrders.js");
const usersInfo = require("../models/usersInfo.js");

const getSummary = async (req, res) => {
  try {
    const [
      totalWorkshop,
      totalCars,
      totalUsers,
      totalWorkOrder,
      approvedWorkshop,
      totalPendingWorkshop,
      totalDisabledWorkshop,
      approvedOrder,
      pendingOrder,
    ] = await Promise.all([
      workshopInfo.estimatedDocumentCount(),
      carsinfos.estimatedDocumentCount(),
      usersInfo.estimatedDocumentCount(),
      workOrderInfo.estimatedDocumentCount(),
      workshopInfo.countDocuments({ status: "approved" }),
      workshopInfo.countDocuments({ status: "pending" }),
      workshopInfo.countDocuments({ status: "disabled" }),
      workOrderInfo.countDocuments({ status: "approved" }),
      workOrderInfo.countDocuments({ status: "pending" }),
    ]);

    res.send({
      totalWorkshop,
      totalCars,
      totalWorkOrder,
      approvedWorkshop,
      totalPendingWorkshop,
      totalDisabledWorkshop,
      totalUsers,
      approvedOrder,
      pendingOrder,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getWorkshopSummary = async (req, res) => {
  try {
    const email = req.params.email;

    const query = { workshop_email: email };

    const [
      totalWorkOrder,
      completeOrder,
      pendingOrder,
      totalPostponOrder,
      approvedOrder,
    ] = await Promise.all([
      workOrderInfo.countDocuments({ status: "approved", ...query }),
      workOrderInfo.countDocuments({ status: "complete", ...query }),
      workOrderInfo.countDocuments({ status: "pending", ...query }),
      workOrderInfo.countDocuments({ status: "postponed", ...query }),
      workOrderInfo.countDocuments({ status: "approved", ...query }),
    ]);

    res.send({
      totalWorkOrder,
      completeOrder,
      pendingOrder,
      totalPostponOrder,
      approvedOrder,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUsersSummary = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const [
      totalWorkOrder,
      totalSuccessOrder,
      pendingOrder,
      totalPostponOrder,
      approvedOrder,
    ] = await Promise.all([
      workOrderInfo.countDocuments(query),
      workOrderInfo.countDocuments({ status: "success", ...query }),
      workOrderInfo.countDocuments({ status: "pending", ...query }),
      workOrderInfo.countDocuments({ status: "postponed", ...query }),
      workOrderInfo.countDocuments({ status: "approved", ...query }),
    ]);

    res.send({
      totalWorkOrder,
      totalSuccessOrder,
      pendingOrder,
      totalPostponOrder,
      approvedOrder,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getSummary, getWorkshopSummary, getUsersSummary };
