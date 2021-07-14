const express = require('express');
const app = express();

const { swaggerUi, specs } = require('./modules/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//hi
app.listen(3000);
