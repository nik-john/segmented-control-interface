const faker = require("faker");
const express = require("express");
const router = express.Router();

const routes = {
  AUDIENCES: '/audiences',
  BRANDS: '/brands',
  PARTNERS: '/partners',
}

router.get("/", function (req, res) {
  const message = `Welcome to Nikhil\'s Sample Express API. Currently available paths are: ${Object.values(routes).map(r => `${req.protocol}://${req.hostname}:${process.env.NODE_ENV === 'development' ?  '3000' : ''}${req.originalUrl}${r} `)}`;

  return res.status(200).send({
    message,
  });
});

router.get(routes.AUDIENCES, function (req, res) {
  return res.status(200).send(faker.lorem.paragraphs(2));
});
router.get(routes.BRANDS, function (req, res) {
  return res.status(200).send(faker.lorem.paragraphs(3));
});
router.get(routes.PARTNERS, function (req, res) {
  return res.status(200).send(faker.lorem.paragraphs(1));
});

module.exports = router;
