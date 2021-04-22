const Employee = require("../team/Employee");

test("incorporate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
    });

test("set name via constructor arguments", () => {
    const name = "Olimar";
    const e = new Employee(name);
    expect(e.name).toBe(name);
    });

test("set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Dana", testValue);
    expect(e.id).toBe(testValue);
});

test("set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Dana", 1, testValue);
    expect(e.email).toBe(testValue);
    });

test("get name via getName()", () => {
    const testValue = "Olimar";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
    });

test("get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Dana", testValue);
    expect(e.getId()).toBe(testValue);
    });

test("get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Dana", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
    });

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Olimar", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
    });