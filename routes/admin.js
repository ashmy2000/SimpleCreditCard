const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Ref to controller
const cardController = require("../controller/cards");

//mini express app with the other express.
const router = express.Router();
router.use(bodyParser.json());

//SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API Documentation",
        version: "1.0.0",
        description: "Documentation for my Credit Card API",
      },
      servers: [
        {
          url: "http://localhost:7000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  
  router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
//SWAGGER

/***
 * @swagger
 *  components:
 *      schema:
 *          cards:
 *              type: object
 *              properties: 
 *                  name:
 *                      type: string
 *                  card_number:
 *                      type: string
 *                  balance:
 *                      type: integer
 *                  limit:
 *                      type: integer
 */




  /**
   * @swagger
   * /:
   *   get:
   *     summary: API will get all the Credit Cards from MongoDB
   *     description: This API will get all the  credit cards from MongoDB
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                   $ref: '#components/schema/cards'
   */
//GET Req -> /
router.get("/", cardController.getAllCards);

;




//Adds new credit card with Luhn 10 validation
router.post("/", cardController.addCard);

//Update db using postman body
router.put("/", cardController.putCard);

//Delete Card using ID
router.delete("/:id", cardController.deleteCard);

module.exports = router;
