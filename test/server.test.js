import request from "supertest";
import app from "../server/app";

describe('GET /', () => {
    it("should return a response", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    })
})