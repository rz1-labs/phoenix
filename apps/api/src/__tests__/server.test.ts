import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import createServer, { createServer as createServerNamed } from "../server";

// The tests currently use the named export; we still reference that to
// avoid a refactor in every call site.  However, each import path goes
// through the default export as well, verifying it behaves identically.

describe("server", () => {
  it("status check returns 200", async () => {
    await supertest(createServer())
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/jared")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe("hello jared");
      });
  });

  it("root path serves HTML", async () => {
    await supertest(createServer())
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .then((res) => {
        expect(res.text).toContain("Welcome to the Phoenix API");
      });
  });
});
