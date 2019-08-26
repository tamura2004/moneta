import { show, date, yen } from "~/plugins/filters";

describe("plugins/filters", () => {
  test("date", () => {
    const timestamp = {
      toDate: () => new Date(Date.UTC(96, 0, 2, 3, 4, 5)),
    };
    expect(date(timestamp)).toBe("1996-01-02 03:04:05");
  });
  test("yen", () => {
    expect(yen(1234567)).toBe("￥1,234,567-");
  });
  test("show", () => {
    expect(show("name")({ name: "太郎" })).toBe("太郎");
    expect(show("name")({ age: 19 })).toBe("----");
    expect(show("name")(undefined)).toBe("----");
    expect(show("name")(null)).toBe("----");
  });
});
