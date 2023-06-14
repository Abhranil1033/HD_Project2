const express = require("express");

const {getAllFlats,createItem,flatDetails,updateDetails,deleteItem} = require("../controllers/flatmateController");

const router = express.Router();

router.route("/flatmates").get(getAllFlats);
router.route("/flatmates/new").post(createItem);
router.route("/flatmates/:id").get(flatDetails).put(updateDetails).delete(deleteItem);


module.exports = router;