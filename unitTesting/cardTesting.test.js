// const mongoose = require("mongoose");
// const CreditCard = require("../models/cardModels");
// const { mockModel } = require("jest-mock-extended");

// describe("CreditCard model", () => {
//   let mockConnection;
//   let mockModelInstance;

//   beforeAll(() => {
//     mockConnection = mongoose.createConnection();
//     mockModelInstance = mockModel<CreditCard>(mockConnection);
//   });

//   afterAll(() => {
//     mockConnection.close();
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe("schema", () => {
//     test("should require name field", () => {
//       const card = new mockModelInstance({
//         card_number: "1234567890123456",
//         balance: 1000,
//         limit: 5000,
//       });
//       const error = card.validateSync();
//       expect(error.errors["name"]).toBeDefined();
//     });

//     test("should require card_number field", () => {
//       const card = new mockModelInstance({
//         name: "John Doe",
//         balance: 1000,
//         limit: 5000,
//       });
//       const error = card.validateSync();
//       expect(error.errors["card_number"]).toBeDefined();
//     });

//     test("should require balance field", () => {
//       const card = new mockModelInstance({
//         name: "John Doe",
//         card_number: "1234567890123456",
//         limit: 5000,
//       });
//       const error = card.validateSync();
//       expect(error.errors["balance"]).toBeDefined();
//     });

//     test("should require limit field", () => {
//       const card = new mockModelInstance({
//         name: "John Doe",
//         card_number: "1234567890123456",
//         balance: 1000,
//       });
//       const error = card.validateSync();
//       expect(error.errors["limit"]).toBeDefined();
//     });

//     test("should create document with default balance value", () => {
//       const card = new mockModelInstance({
//         name: "John Doe",
//         card_number: "1234567890123456",
//         limit: 5000,
//       });
//       expect(card.balance).toEqual(0);
//     });

//     test("should create document with correct values", () => {
//       const card = new mockModelInstance({
//         name: "John Doe",
//         card_number: "1234567890123456",
//         balance: 1000,
//         limit: 5000,
//       });
//       expect(card.name).toEqual("John Doe");
//       expect(card.card_number).toEqual("1234567890123456");
//       expect(card.balance).toEqual(1000);
//       expect(card.limit).toEqual(5000);
//     });
//   });
// });