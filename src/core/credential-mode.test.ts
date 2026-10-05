import { afterEach, describe, expect, it } from "vitest";
import { credentialMode } from "./api.js";

describe("credentialMode (Bayside fork)", () => {
  const saved = { ...process.env };
  afterEach(() => { process.env = { ...saved }; });

  it("logs in by default", () => {
    delete process.env.MAGNUS_AUTH; delete process.env.MAGNUS_API_KEY;
    expect(credentialMode()).toBe("login");
  });
  it("uses an API key when MAGNUS_API_KEY is set", () => {
    delete process.env.MAGNUS_AUTH; process.env.MAGNUS_API_KEY = "test-key";
    expect(credentialMode()).toBe("apiKey");
  });
  it("sends nothing when a proxy authenticates, even with a key set", () => {
    process.env.MAGNUS_AUTH = "proxy"; process.env.MAGNUS_API_KEY = "test-key";
    expect(credentialMode()).toBe("proxy");
  });
});
