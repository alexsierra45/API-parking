const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/network/routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.listen(port, () => console.log(`App listening from port ${port}`));