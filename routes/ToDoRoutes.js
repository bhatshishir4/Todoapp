const {Router} = require ("express");
const { getToDo, saveToDo, deleteToDo,  updateToDo} = require("../controllers/ToDocontroller.js");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.delete('/delete', deleteToDo)
router.post('/update', updateToDo)

module.exports = router;