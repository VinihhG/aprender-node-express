const express = require('express');
const app = express();

const router = require('./routes/routes');
router.router(app);

app.listen(8080);