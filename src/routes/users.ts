import express from 'express';
var router = express.Router();

/* GET users listing. */
export const usersRouter = router.get('/', function (req, res, next) {
  res.send('respond with a ');
});
