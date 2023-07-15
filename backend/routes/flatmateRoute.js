const express = require("express");

const {getAllFlatmates,createItem,flatmateDetails,updateDetails,deleteItem, createFlatmateReview, getAllFlatmateReviews, deleteFlatmateReview} = require("../controllers/flatmateController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/flatmates").get(getAllFlatmates);
router.route("/flatmates/new").post(isAuthenticatedUser,authorizeRoles("admin"),createItem);
router.route("/flatmate/:id").get(flatmateDetails).put(isAuthenticatedUser,authorizeRoles("admin"),updateDetails).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteItem);
router.route("/flatmate/review").put(isAuthenticatedUser,createFlatmateReview);
router.route("/flatmate/reviews").get(getAllFlatmateReviews).delete(deleteFlatmateReview);

module.exports = router;