// import request from "supertest";
// import appServer from "../index.js";
// import * as userController from "../controller/userController.js";

// const app = appServer();
// request(app)
//   .get("/api/v1/auth/users")
//   .expect("Content-Type", /json/)
//   .expect("Content-Length", "15")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

// describe("user", () => {
//   // user registration

//   describe("user registration", () => {
//     describe("given the username and password are valid", () => {
//       it("should return the user payload", async () => {
//         const createUserServiceMock = jest.spyOn(userController, "appServer");

//         const { statusCode, body } = await supertest(app)
//           .post("/api/v1/auth/users/:email")
//           .send({});

//         expect(statusCode).toBe(200);

//         expect(body).toEqual(userPayload);

//         expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
//       });
//     });
//   });
// });
