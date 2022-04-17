// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

export const isNull = <T>(term: T | null): asserts term is null => {
  if (term !== null) {
    throw new TypeError();
  }
};

export const isFunction = <T extends Function, U>(
  term: T | U,
): asserts term is T => {
  if (typeof term !== 'function') {
    throw new TypeError();
  }
};

export const isObject = <T extends object, U>(
  term: T | U,
): asserts term is NonNullable<T> => {
  if (term === null || typeof term !== 'object') {
    throw new TypeError();
  }
};

export const isArray = <T, U>(term: Array<T> | U): asserts term is Array<T> => {
  if (!Array.isArray(term)) {
    throw new TypeError();
  }
};

export const isMap = <K, V, U>(
  term: Map<K, V> | U,
): asserts term is Map<K, V> => {
  if (!(term instanceof Map)) {
    throw new TypeError();
  }
};

export const isSet = <T, U>(term: Set<T> | U): asserts term is Set<T> => {
  if (!(term instanceof Set)) {
    throw new TypeError();
  }
};

export const isWeakMap = <K extends object, V, U>(
  term: WeakMap<K, V> | U,
): asserts term is WeakMap<K, V> => {
  if (!(term instanceof WeakMap)) {
    throw new TypeError();
  }
};

export const isWeakSet = <T extends object, U>(
  term: WeakSet<T> | U,
): asserts term is WeakSet<T> => {
  if (!(term instanceof WeakSet)) {
    throw new TypeError();
  }
};

export const isDate = <U>(term: Date | U): asserts term is Date => {
  if (!(term instanceof Date)) {
    throw new TypeError();
  }
};
