const express = require("express");

const {getAllFlats,createItem,flatDetails,updateDetails,deleteItem, createFlatReview, getAllFlatReviews, deleteFlatReview} = require("../controllers/flatController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/flats").get(getAllFlats);
router.route("/flats/new").post(isAuthenticatedUser,authorizeRoles("admin"),createItem);
router.route("/flat/:id").get(flatDetails).put(isAuthenticatedUser,authorizeRoles("admin"),updateDetails).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteItem);
router.route("/flat/review").put(isAuthenticatedUser,createFlatReview);
router.route("/flat/reviews").get(getAllFlatReviews).delete(deleteFlatReview);


module.exports = router;