// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when passed the string 'Jane'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when passed the string 'Alex'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when passed the string 'Pat'", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when called without passing any name", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World' when boolean of true is passed to the function", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World' when boolean of false is passed to the function", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World' when null is passed to the function", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World' when an empty string is passed to the function", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World' when an object  is passed to the function", function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should return a defined function named 'isFive'", function(){
       expect(typeof isFive).toBe('function');
    });
    it("should return true if the number 5 is passed as an argument", function(){
       expect(isFive(5)).toBe(true);
    });
    it("should return false if any number but 5 is passed as an argument", function(){
       expect(isFive()).toBe(false);
    });
    it("should return false if the string of 5 is passed as an argument", function(){
       expect(isFive("5")).toBe(false);
    });
});

describe("isEven", function() {
    it("should return a defined function named 'isEven'", function() {
        expect(typeof isEven).toBe('function');
    });
    it("should return true if the number passed as an argument is even", function() {
        expect(isEven(10)).toBe(true);
    });
    it("should return false if the number passed as an argument is odd", function() {
        expect(isEven(9)).toBe(false);
    });
    it("should return false if anything but a number is passed as an argument", function() {
        expect(isEven("Banana")).toBe(false);
    });
    it("should return false if a 'boolean' passed as an argument", function() {
        expect(isEven('boolean')).toBe(false);
    });
    it("should return false if an empty string is passed as an argument", function() {
        expect(isEven('')).toBe(false);
    });
    it("should return false if no argument is passed", function() {
        expect(isEven()).toBe(false);
    });
    it("should return false if 'Infinity' is passed as an argument", function() {
        expect(isEven(Infinity)).toBe(false);
    });
});
