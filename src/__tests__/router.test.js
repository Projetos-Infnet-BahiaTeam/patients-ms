import request from "supertest";
import app from "../app";

test("GET /patients 200 OK", async () => {
    const response = await request(app).get("/api/Patients/");
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeTruthy();
  });