describe('name for test', function() {
   it('this is the label for this test', function() {
       expect(test).toBeDefined(false);
       });
       it('to be', function() {
          expect(test).toBe(true);
   });
   it('not to be', function() {
       expect(test).not.toBe(false);
   });
});

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

describe('sayHello', function() {
   it('should be a defined function', function () {
      expect(typeof sayHello).toBe('function');
   });
   it('should return a string', function() {
      expect(typeof sayHello()).toBe("string");
   });
   it('should return Hello, name!', function () {
      expect(sayHello("name")).toBe("Hello, name!")
   });
});

describe('isFive', function () {
   it('should be a defined function', function () {
      expect(typeof isFive).toBe('function')
   });
   it('should return a boolean value', function() {
      expect(typeof isFive(5)).toBe('boolean');
   });
   it('should return true when passed 5', function () {
       expect(isFive(5)).toBe(true);
   });
    it('should return false when 5 is passed as a string', function () {
       expect(isFive("5")).toBe(false);
    });
    it('should be false with a random string', function () {
       expect(isFive(randomString)).toBe(false);
    });
});