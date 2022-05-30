const router = require("express").Router();

const generalController = require("../controller/general");

router.get("/", generalController.iscilerGetir);
router.post("/isci-elave", generalController.iscilerElave);
router.get("/isci-sil/:id", generalController.iscilerSil);

module.exports = router;