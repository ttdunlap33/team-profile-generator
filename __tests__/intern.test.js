const Intern = require("../team/Intern");

test("Can set school via constructor", () => {
const testValue = "WVU";
const tester = new Intern("Dana", 1, "test@test.com", testValue);
expect(tester.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
const testValue = "Intern";
const tester = new Intern("Dana", 1, "test@test.com", "WVU");
expect(tester.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
const testValue = "WVU";
const tester = new Intern("Dana", 1, "test@test.com", testValue);
expect(tester.getSchool()).toBe(testValue);
});