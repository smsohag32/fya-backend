const workshopInfo = require("../models/WorkshopInfo.js")
const carsinfos = require("../models/CarsInfo.js");
const workOrderInfo = require("../models/WorkOrders.js")
const usersInfo = require("../models/usersInfo.js")

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
            pendingOrder
        ] = await Promise.all([
            workshopInfo.estimatedDocumentCount(),
            carsinfos.estimatedDocumentCount(),
            usersInfo.estimatedDocumentCount(),
            workOrderInfo.estimatedDocumentCount(),
            workshopInfo.countDocuments({ status: 'approved' }),
            workshopInfo.countDocuments({ status: 'pending' }),
            workshopInfo.countDocuments({ status: 'disabled' }),
            workOrderInfo.countDocuments({ status: 'approved' }),
            workOrderInfo.countDocuments({ status: 'pending' })
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
            pendingOrder
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports =  {getSummary}