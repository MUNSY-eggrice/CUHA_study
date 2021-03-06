const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with express',
    },
    host: 'localhost:3300',
    basePath: '/',
  },
  apis: ['./schemas/*.js', './swagger/*'],
};
const specs = swaggereJsdoc(options);
module.exports = { swaggerUi, specs };

//Don't forget commit. if you don't U must be falling down
