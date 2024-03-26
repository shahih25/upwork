import request from "supertest";
import app from "../server/app";

describe('GET hello world', () => {
    it("should return a response", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    })
})

describe("GET API doesn't exist", () => {
    it("should return a bad response", async () => {
        const res = await request(app).get("/sample");
        expect(res.statusCode).toBe(404);
    })
})