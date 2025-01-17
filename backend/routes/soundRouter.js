const {Router} = require("express");
const soundController = require("../controllers/soundsController");

const router = Router();

router.get("/api/sounds/:email", soundController.displaySounds);
router.post("/api/sounds/create", soundController.createSoundPost)
router.get("/api/sounds/sound/:id", soundController.getSelectedSound)



module.exports = router;
