
const creditCards = require ('../controller/cards')
const app = require('../app');
const mockData = require('./mockdata.json');
creditCards.create = jest.fn();

const endpointURl = "/";


describe(endpointURl, () => {
    it("post" + endpointURl, async () => {
      const response = await request(app)
          .post(endpointURl)
          .send(mockData);
      expect(response.body.name).toBe(mockData.name);
      expect(response.body.card_number).toBe(mockData.card_number);
      expect(response.body.balance).toBe(mockData.balance);
      expect(response.body.limit).toBe(mockData.limit);
    })

});


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