const Manager = require("../team/Manager");
const Employee = require("../team/Employee");

test("set office number via constructor argument", () => {
const testValue = 100;
const tester = new Manager("Dana", 1, "test@test.com", testValue);
expect(tester.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
const testValue = "Manager";
const tester = new Manager("Dana", 1, "test@test.com", 100);
expect(tester.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
const testValue = 100;
const tester = new Manager("Dana", 1, "test@test.com", testValue);
expect(tester.getOfficeNumber()).toBe(testValue);
});
