"use strict";

import express from 'express';
import renderer from './helpers/renderer.js';
import helmet from 'helmet';

const app = express();

app.use(helmet())
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
