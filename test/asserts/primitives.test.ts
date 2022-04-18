import test from 'ava';

import * as primitives from '../../lib/asserts/primitives';

const getUndefined = () => {
  return undefined;
};

const getBoolean = () => {
  const values = [true, false, Boolean(0), Boolean(1)];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getNumber = () => {
  const values = [42, 3.14, Infinity, Number('42')];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getString = () => {
  const values = ['str', String(42)];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getBigInt = () => {
  const values = [42n, BigInt('42')];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getSymbol = () => {
  return Symbol('symbol');
};

test('isUndefined', (t) => {
  t.notThrows(() => primitives.isUndefined(getUndefined()));
  t.throws(() => primitives.isUndefined(getBoolean()));
  t.throws(() => primitives.isUndefined(getNumber()));
  t.throws(() => primitives.isUndefined(getString()));
  t.throws(() => primitives.isUndefined(getBigInt()));
  t.throws(() => primitives.isUndefined(getSymbol()));
});

test('isBoolean', (t) => {
  t.throws(() => primitives.isBoolean(getUndefined()));
  t.notThrows(() => primitives.isBoolean(getBoolean()));
  t.throws(() => primitives.isBoolean(getNumber()));
  t.throws(() => primitives.isBoolean(getString()));
  t.throws(() => primitives.isBoolean(getBigInt()));
  t.throws(() => primitives.isBoolean(getSymbol()));
});

test('isNumber', (t) => {
  t.throws(() => primitives.isNumber(getUndefined()));
  t.throws(() => primitives.isNumber(getBoolean()));
  t.notThrows(() => primitives.isNumber(getNumber()));
  t.throws(() => primitives.isNumber(getString()));
  t.throws(() => primitives.isNumber(getBigInt()));
  t.throws(() => primitives.isNumber(getSymbol()));
});

test('isString', (t) => {
  t.throws(() => primitives.isString(getUndefined()));
  t.throws(() => primitives.isString(getBoolean()));
  t.throws(() => primitives.isString(getNumber()));
  t.notThrows(() => primitives.isString(getString()));
  t.throws(() => primitives.isString(getBigInt()));
  t.throws(() => primitives.isString(getSymbol()));
});

test('isBigInt', (t) => {
  t.throws(() => primitives.isBigInt(getUndefined()));
  t.throws(() => primitives.isBigInt(getBoolean()));
  t.throws(() => primitives.isBigInt(getNumber()));
  t.throws(() => primitives.isBigInt(getString()));
  t.notThrows(() => primitives.isBigInt(getBigInt()));
  t.throws(() => primitives.isBigInt(getSymbol()));
});

test('isSymbol', (t) => {
  t.throws(() => primitives.isSymbol(getUndefined()));
  t.throws(() => primitives.isSymbol(getBoolean()));
  t.throws(() => primitives.isSymbol(getNumber()));
  t.throws(() => primitives.isSymbol(getString()));
  t.throws(() => primitives.isSymbol(getBigInt()));
  t.notThrows(() => primitives.isSymbol(getSymbol()));
});
