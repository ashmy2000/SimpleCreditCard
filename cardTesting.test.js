
const creditCards = require ('../controller/cards')
const app = require('../app');
const request = require('supertest');
const mockData = require('./mockdata.json');
creditCards.create = jest.fn();

const endpointURl = "/";




describe('200 status code', () => {
    test('should return 404 and a message for invalid routes', async () => {
      const response = await request(app).post('/').send({
        name: "PUTPostman",
        card_number: "6250 9410 0652 8599",
        balance:20,
        limit: 1000
      })
  
      expect(response.status).toBe(200);
      });
    });








// describe(endpointURl, () => {
//     let db;
  
//     beforeAll(async () => {
//       db = await dbConnection();
//     });
  
//     afterAll(async () => {
//       await db.close();
//     });

//     it("post" + endpointURl, async () => {
//       const response = await request(app)
//           .post(endpointURl)
//           .send(mockData);
//       expect(response.body.name).toBe(mockData.name);
//       expect(response.body.card_number).toBe(mockData.card_number);
//       expect(response.body.balance).toBe(mockData.balance);
//       expect(response.body.limit).toBe(mockData.limit);
//     })

// });


// describe('getAllCards', () => {
//     let db;
  
//     beforeAll(async () => {
//       db = await dbConnection();
//     });
  
//     afterAll(async () => {
//       await db.close();
//     });
  
//     it('should return an array of cards', async () => {
//       const response = await request(app).get('/');
//       expect(response.status).toBe(200);
//       expect(response.body).toBeInstanceOf(Array);
//     });
  
//     it('should return all cards in the database', async () => {
//       const cards = await db.collection('CreditCard').find({}).toArray();
//       const response = await request(app).get('/');
//       expect(response.body).toEqual(cards);
//     });
//   });