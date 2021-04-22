const Engineer = require("../team/Engineer");

test("Can set GitHUb account via constructor", () => {
const testValue = "GitHubUser";
const tester = new Engineer("Dana", 1, "test@test.com", testValue);
expect(tester.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
const testValue = "Engineer";
const tester = new Engineer("Dana", 1, "test@test.com", "GitHubUser");
expect(tester.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
const testValue = "GitHubUser";
const tester = new Engineer("Dana", 1, "test@test.com", testValue);
expect(tester.getGithub()).toBe(testValue);
});
