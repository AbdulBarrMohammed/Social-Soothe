const {Router} = require("express");
const journalController = require("../controllers/journalController");

const router = Router();

router.get("/api/journals/:email", journalController.displayJournals);
router.post("/api/journals/create", journalController.createJournalPost)
router.get("/api/journals/journal/:id", journalController.getSelectedJournal)
router.get("/api/journals/journal/delete/:id", journalController.deleteJournal)
router.post("/api/journals/journal/update/:id", journalController.editJournalPost);
router.get("/api/search/:query/:email", journalController.searchGet);

module.exports = router;
