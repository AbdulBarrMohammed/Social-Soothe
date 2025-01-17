const {Router} = require("express");
const flowerController = require("../controllers/flowerController");

const router = Router();

router.get("/api/tree/flowers/:email", flowerController.displayFlowers);
router.post("/api/flowers/create", flowerController.createFlowerPost)
router.get("/api/flowers/flower/:id", flowerController.getSelectedFlower)
router.get("/api/flowers/flower/delete/:id", flowerController.deleteFlower)
router.post("/api/flowers/flower/update/:id", flowerController.editFlowerPost);
router.post("/api/flowers/flower/color/update/:id", flowerController.editFlowerPostColor);
router.post("/api/flowers/flower/check/update/:id", flowerController.editFlowerPostChecked);
router.post("/api/flowers/flower/questionSeven/update/:id", flowerController.editFlowerQuestionSeven);

module.exports = router;
