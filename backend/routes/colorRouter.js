const {Router} = require("express");
const colorController = require("../controllers/colorsController");

const router = Router();

router.get("/api/colors/:email", colorController.displayColors);
router.post("/api/colors/create", colorController.createColorPost)


module.exports = router;
