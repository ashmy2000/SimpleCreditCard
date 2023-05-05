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
 *          addcards:
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


/***
 * @swagger
 *  components:
 *      schema:
 *          deletecards:
 *              type: object
 *              properties: 
 *                  _id:
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
   *                   $ref: '#components/schema/addcards'
   */
//GET Req -> /
router.get("/", cardController.getAllCards);

;



  /**
   * @swagger
   * /:
   *   post:
   *     summary: Insert data into MongoDB
   *     description: This API will insert data into MongoDB
   *     requestBody:
   *        required: true
   *        content:
   *            application/json:
   *                schema:
   *                    $ref: '#components/schema/addcards'
   *     responses:
   *       200:
   *         description: acknowledged 
   */
//Adds new credit card with Luhn 10 validation
router.post("/:id", cardController.addCard);







//Update db using postman body
router.put("/:id", cardController.putCard);






  /**
   * @swagger
   * /{id}:
   *   delete:
   *     summary: Delete Card details using default _id from mongoDB
   *     description: add the _id from database 
   *     parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: INT ID required.
   *          schema:
   *            type: integer         
   * 
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                   $ref: '#components/schema/deletecards'
   */
//Delete Card using ID
router.delete("/:id", cardController.deleteCard);



module.exports = router;
