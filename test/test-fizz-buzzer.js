'use strict';
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz if divisible by 15', function () {
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'}
    ];
      // for each set of inputs (a, b), `adder` should
      // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should return error', function () {
    expect(function () {fizzBuzzer('string');}).to.throw(Error);
  });
});