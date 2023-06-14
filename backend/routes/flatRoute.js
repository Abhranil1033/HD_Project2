const express = require("express");

const {getAllFlats,createItem,flatDetails,updateDetails,deleteItem} = require("../controllers/flatController");

const router = express.Router();

router.route("/flats").get(getAllFlats);
router.route("/flats/new").post(createItem);
router.route("/flats/:id").get(flatDetails).put(updateDetails).delete(deleteItem);


module.exports = router;