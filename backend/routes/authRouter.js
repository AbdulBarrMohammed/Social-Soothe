const {Router} = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/api/signup", authController.signUpPost);
router.post("/api/login", authController.logInPost);
router.get("/api/user/:email", authController.getUserInfo);
router.post("/api/user/update", authController.updateCoin);
router.post("/api/user/sound/update", authController.updateSound);
router.post("/api/user/color/update", authController.updateColor);
router.get("/api/user/delete/:id", authController.deleteUser)


module.exports = router;
