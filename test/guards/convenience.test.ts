import test from 'ava';

import * as convenience from '../../lib/guards/convenience';

test('isObjectOrNull', (t) => {
  t.notThrows(() => convenience.isObjectOrNull({}));
  t.notThrows(() => convenience.isObjectOrNull(null));
  t.notThrows(() => convenience.isObjectOrNull(new Set()));
  t.throws(() => convenience.isObjectOrNull(() => {}));
  t.throws(() => convenience.isObjectOrNull(new Function()));
});

test('isNonEmptyArray', (t) => {
  t.notThrows(() => convenience.isNonEmptyArray([1, 2]));
  t.notThrows(() => convenience.isNonEmptyArray([1]));
  t.throws(() => convenience.isNonEmptyArray([]));
});

test('isNonEmptyString', (t) => {
  t.notThrows(() => convenience.isNonEmptyString('a'));
  t.throws(() => convenience.isNonEmptyString(''));
});

test('isNumberOrNaN', (t) => {
  t.notThrows(() => convenience.isNumberOrNaN(0));
  t.notThrows(() => convenience.isNumberOrNaN(42));
  t.notThrows(() => convenience.isNumberOrNaN(-42));
  t.notThrows(() => convenience.isNumberOrNaN(3.14));
  t.notThrows(() => convenience.isNumberOrNaN(-3.14));
  t.notThrows(() => convenience.isNumberOrNaN(Infinity));
  t.notThrows(() => convenience.isNumberOrNaN(-Infinity));
  t.notThrows(() => convenience.isNumberOrNaN(Number.MAX_SAFE_INTEGER));
  t.notThrows(() => convenience.isNumberOrNaN(-Number.MAX_SAFE_INTEGER));
  t.notThrows(() => convenience.isNumberOrNaN(NaN));
  t.throws(() => convenience.isNumberOrNaN(BigInt(0)));
});

test('isInteger', (t) => {
  t.notThrows(() => convenience.isInteger(0));
  t.notThrows(() => convenience.isInteger(42));
  t.notThrows(() => convenience.isInteger(-42));
  t.throws(() => convenience.isInteger(3.14));
  t.throws(() => convenience.isInteger(-3.14));
  t.throws(() => convenience.isInteger(Infinity));
  t.throws(() => convenience.isInteger(-Infinity));
  t.notThrows(() => convenience.isInteger(Number.MAX_SAFE_INTEGER));
  t.notThrows(() => convenience.isInteger(-Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isInteger(NaN));
});

test('isPositiveInteger', (t) => {
  t.throws(() => convenience.isPositiveInteger(0));
  t.notThrows(() => convenience.isPositiveInteger(42));
  t.throws(() => convenience.isPositiveInteger(-42));
  t.throws(() => convenience.isPositiveInteger(3.14));
  t.throws(() => convenience.isPositiveInteger(-3.14));
  t.throws(() => convenience.isPositiveInteger(Infinity));
  t.throws(() => convenience.isPositiveInteger(-Infinity));
  t.notThrows(() => convenience.isPositiveInteger(Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isPositiveInteger(-Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isPositiveInteger(NaN));
});

test('isNonNegativeInteger', (t) => {
  t.notThrows(() => convenience.isNonNegativeInteger(0));
  t.notThrows(() => convenience.isNonNegativeInteger(42));
  t.throws(() => convenience.isNonNegativeInteger(-42));
  t.throws(() => convenience.isNonNegativeInteger(3.14));
  t.throws(() => convenience.isNonNegativeInteger(-3.14));
  t.throws(() => convenience.isNonNegativeInteger(Infinity));
  t.throws(() => convenience.isNonNegativeInteger(-Infinity));
  t.notThrows(() => convenience.isNonNegativeInteger(Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isNonNegativeInteger(-Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isNonNegativeInteger(NaN));
});

test('isNegativeInteger', (t) => {
  t.throws(() => convenience.isNegativeInteger(0));
  t.throws(() => convenience.isNegativeInteger(42));
  t.notThrows(() => convenience.isNegativeInteger(-42));
  t.throws(() => convenience.isNegativeInteger(3.14));
  t.throws(() => convenience.isNegativeInteger(-3.14));
  t.throws(() => convenience.isNegativeInteger(Infinity));
  t.throws(() => convenience.isNegativeInteger(-Infinity));
  t.throws(() => convenience.isNegativeInteger(Number.MAX_SAFE_INTEGER));
  t.notThrows(() => convenience.isNegativeInteger(-Number.MAX_SAFE_INTEGER));
  t.throws(() => convenience.isNegativeInteger(NaN));
});
