import test from 'ava';

import * as structural from '../../lib/asserts/structural';

test('isNull', (t) => {
  t.notThrows(() => structural.isNull(null));
  t.throws(() => structural.isNull(undefined));
  t.throws(() => structural.isNull(0));
  t.throws(() => structural.isNull(false));
});

test('isFunction', (t) => {
  t.throws(() => structural.isFunction({}));
  t.throws(() => structural.isFunction(new (class C {})()));
  t.notThrows(() => structural.isFunction(new Function()));
  t.throws(() => structural.isFunction(new Map()));
  t.throws(() => structural.isFunction(new Set()));
  t.throws(() => structural.isFunction(new WeakMap()));
  t.throws(() => structural.isFunction(new WeakSet()));
  t.throws(() => structural.isFunction(new Date()));
  t.notThrows(() => structural.isFunction(() => {}));
  t.notThrows(() => structural.isFunction(function () {}));
  t.notThrows(() => structural.isFunction(class C {}));
  t.notThrows(() => structural.isFunction(parseInt));
  t.throws(() => structural.isFunction(null));
  t.throws(() => structural.isFunction(undefined));
  t.throws(() => structural.isFunction('str'));
  t.throws(() => structural.isFunction(42));
  t.throws(() => structural.isFunction([]));
  t.throws(() => structural.isFunction(Symbol('symbol')));
});

test('isObject', (t) => {
  t.notThrows(() => structural.isObject({}));
  t.notThrows(() => structural.isObject(new (class C {})()));
  t.throws(() => structural.isObject(new Function()));
  t.notThrows(() => structural.isObject(new Map()));
  t.notThrows(() => structural.isObject(new Set()));
  t.notThrows(() => structural.isObject(new WeakMap()));
  t.notThrows(() => structural.isObject(new WeakSet()));
  t.notThrows(() => structural.isObject(new Date()));
  t.throws(() => structural.isObject(() => {}));
  t.throws(() => structural.isObject(function () {}));
  t.throws(() => structural.isObject(class C {}));
  t.throws(() => structural.isObject(parseInt));
  t.throws(() => structural.isObject(null));
  t.throws(() => structural.isObject(undefined));
  t.throws(() => structural.isObject('str'));
  t.throws(() => structural.isObject(42));
  t.notThrows(() => structural.isObject([]));
  t.throws(() => structural.isObject(Symbol('symbol')));
});

test('isArray', (t) => {
  t.notThrows(() => structural.isArray([]));
  t.throws(() => structural.isArray(class C {}));
  t.throws(() => structural.isArray(new Map()));
  t.throws(() => structural.isArray(new Set()));
  t.throws(() => structural.isArray(new WeakMap()));
  t.throws(() => structural.isArray(new WeakSet()));
  t.throws(() => structural.isArray(new Date()));
  t.throws(() => structural.isArray(() => {}));
  t.throws(() => structural.isArray(function () {}));
  t.throws(() => structural.isArray(class C {}));
  t.throws(() => structural.isArray(parseInt));
  t.throws(() => structural.isArray(null));
  t.throws(() => structural.isArray(undefined));
  t.throws(() => structural.isArray('str'));
  t.throws(() => structural.isArray(42));
  t.throws(() => structural.isArray(Symbol('symbol')));
});

test('isMap', (t) => {
  t.throws(() => structural.isMap({}));
  t.throws(() => structural.isMap(new (class C {})()));
  t.notThrows(() => structural.isMap(new Map()));
  t.throws(() => structural.isMap(new Set()));
  t.throws(() => structural.isMap(new WeakMap()));
  t.throws(() => structural.isMap(new WeakSet()));
  t.throws(() => structural.isMap(new Date()));
  t.throws(() => structural.isMap(() => {}));
  t.throws(() => structural.isMap(function () {}));
  t.throws(() => structural.isMap(class C {}));
  t.throws(() => structural.isMap(parseInt));
  t.throws(() => structural.isMap(null));
  t.throws(() => structural.isMap(undefined));
  t.throws(() => structural.isMap('str'));
  t.throws(() => structural.isMap(42));
  t.throws(() => structural.isMap([]));
  t.throws(() => structural.isMap(Symbol('symbol')));
});

test('isSet', (t) => {
  t.throws(() => structural.isSet({}));
  t.throws(() => structural.isSet(new (class C {})()));
  t.throws(() => structural.isSet(new Map()));
  t.notThrows(() => structural.isSet(new Set()));
  t.throws(() => structural.isSet(new WeakMap()));
  t.throws(() => structural.isSet(new WeakSet()));
  t.throws(() => structural.isSet(new Date()));
  t.throws(() => structural.isSet(() => {}));
  t.throws(() => structural.isSet(function () {}));
  t.throws(() => structural.isSet(class C {}));
  t.throws(() => structural.isSet(parseInt));
  t.throws(() => structural.isSet(null));
  t.throws(() => structural.isSet(undefined));
  t.throws(() => structural.isSet('str'));
  t.throws(() => structural.isSet(42));
  t.throws(() => structural.isSet([]));
  t.throws(() => structural.isSet(Symbol('symbol')));
});

test('isWeakMap', (t) => {
  t.throws(() => structural.isWeakMap({}));
  t.throws(() => structural.isWeakMap(new (class C {})()));
  t.throws(() => structural.isWeakMap(new Map()));
  t.throws(() => structural.isWeakMap(new Set()));
  t.notThrows(() => structural.isWeakMap(new WeakMap()));
  t.throws(() => structural.isWeakMap(new WeakSet()));
  t.throws(() => structural.isWeakMap(new Date()));
  t.throws(() => structural.isWeakMap(() => {}));
  t.throws(() => structural.isWeakMap(function () {}));
  t.throws(() => structural.isWeakMap(class C {}));
  t.throws(() => structural.isWeakMap(parseInt));
  t.throws(() => structural.isWeakMap(null));
  t.throws(() => structural.isWeakMap(undefined));
  t.throws(() => structural.isWeakMap('str'));
  t.throws(() => structural.isWeakMap(42));
  t.throws(() => structural.isWeakMap([]));
  t.throws(() => structural.isWeakMap(Symbol('symbol')));
});

test('isWeakSet', (t) => {
  t.throws(() => structural.isWeakSet({}));
  t.throws(() => structural.isWeakSet(new (class C {})()));
  t.throws(() => structural.isWeakSet(new Map()));
  t.throws(() => structural.isWeakSet(new Set()));
  t.throws(() => structural.isWeakSet(new WeakMap()));
  t.notThrows(() => structural.isWeakSet(new WeakSet()));
  t.throws(() => structural.isWeakSet(new Date()));
  t.throws(() => structural.isWeakSet(() => {}));
  t.throws(() => structural.isWeakSet(function () {}));
  t.throws(() => structural.isWeakSet(class C {}));
  t.throws(() => structural.isWeakSet(parseInt));
  t.throws(() => structural.isWeakSet(null));
  t.throws(() => structural.isWeakSet(undefined));
  t.throws(() => structural.isWeakSet('str'));
  t.throws(() => structural.isWeakSet(42));
  t.throws(() => structural.isWeakSet([]));
  t.throws(() => structural.isWeakSet(Symbol('symbol')));
});

test('isDate', (t) => {
  t.throws(() => structural.isDate({}));
  t.throws(() => structural.isDate(new (class C {})()));
  t.throws(() => structural.isDate(new Map()));
  t.throws(() => structural.isDate(new Set()));
  t.throws(() => structural.isDate(new WeakMap()));
  t.throws(() => structural.isDate(new WeakSet()));
  t.notThrows(() => structural.isDate(new Date()));
  t.throws(() => structural.isDate(() => {}));
  t.throws(() => structural.isDate(function () {}));
  t.throws(() => structural.isDate(class C {}));
  t.throws(() => structural.isDate(parseInt));
  t.throws(() => structural.isDate(null));
  t.throws(() => structural.isDate(undefined));
  t.throws(() => structural.isDate('str'));
  t.throws(() => structural.isDate(42));
  t.throws(() => structural.isDate([]));
  t.throws(() => structural.isDate(Symbol('symbol')));
});
