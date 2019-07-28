const faker = require('faker');
const express = require('express');
const router = express.Router();

const routes = {
  AUDIENCES: '/audiences',
  BRANDS: '/brands',
  PARTNERS: '/partners',
};

router.get('/', (req, res) => {
  const message = `Welcome to Nikhil's Sample Express API. Currently available paths are: ${Object.values(
    routes,
  )
    .map(
      r =>
        `GET ${req.protocol}://${req.hostname}:${
          process.env.NODE_ENV === 'development' ? '3000' : ''
        }${req.originalUrl}${r}`,
    )
    .join(' | ')}`;
  return res.status(200).send({
    message,
  });
});

router.get(routes.AUDIENCES, (req, res) =>
  setTimeout(() => {
    res.status(200).send(faker.lorem.paragraphs(2));
  }, 2000),
);
router.get(routes.BRANDS, (req, res) =>
  setTimeout(() => {
    res.status(200).send(faker.lorem.paragraphs(3));
  }, 2000),
);
router.get(routes.PARTNERS, (req, res) =>
  setTimeout(() => {
    res.status(200).send(faker.lorem.paragraphs(1));
  }, 2000),
);

router.get('*', (req, res) =>
  setTimeout(() => {
    res.status(404).send({ message: 'Invalid Route' });
  }, 2000),
);

module.exports = router;
