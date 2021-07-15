const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index.ctrl');

const authRouter = require('./auth');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// routes
router.get('/', controllers.getIndexPage);
router.get('/wargame', controllers.getWargameIndexPage);
router.get('/wargame/create', controllers.getWargameCreatePage);
router.get('/wargame/:id', controllers.getWargameViewPage);

router.post('/wargame/create', controllers.postWargameCreate);

router.use('/auth', authRouter);

module.exports = router;
