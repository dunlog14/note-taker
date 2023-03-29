const router = require('express').Router();
const notesRoutes = require('./routes.js');

router.use(notesRoutes);

module.exports = router;
