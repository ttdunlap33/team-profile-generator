const Employee = require("../team/Employee");

test("incorporate Employee instance", () => {
    const tester = new Employee();
    expect(typeof(tester)).toBe("object");
    });

test("set name via constructor arguments", () => {
    const name = "Olimar";
    const tester = new Employee(name);
    expect(tester.name).toBe(name);
    });

test("set id via constructor argument", () => {
    const testValue = 100;
    const tester = new Employee("Dana", testValue);
    expect(tester.id).toBe(testValue);
});

test("set email via constructor argument", () => {
    const testValue = "test@test.com";
    const tester = new Employee("Dana", 1, testValue);
    expect(tester.email).toBe(testValue);
    });

test("get name via getName()", () => {
    const testValue = "Olimar";
    const tester = new Employee(testValue);
    expect(tester.getName()).toBe(testValue);
    });

test("get id via getId()", () => {
    const testValue = 100;
    const tester = new Employee("Dana", testValue);
    expect(tester.getId()).toBe(testValue);
    });

test("get email via getEmail()", () => {
    const testValue = "test@test.com";
    const tester = new Employee("Dana", 1, testValue);
    expect(tester.getEmail()).toBe(testValue);
    });

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const tester = new Employee("Olimar", 1, "test@test.com");
    expect(tester.getRole()).toBe(testValue);
    });