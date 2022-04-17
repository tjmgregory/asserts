// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

export const isUndefined = <T>(
  term: T | undefined,
): asserts term is undefined => {
  if (typeof term !== 'undefined') {
    throw new TypeError();
  }
};

export const isBoolean = <U>(term: boolean | U): asserts term is boolean => {
  if (typeof term !== 'boolean') {
    throw new TypeError();
  }
};

export const isNumber = <U>(term: number | U): asserts term is number => {
  if (typeof term !== 'number' || Number.isNaN(term)) {
    throw new TypeError();
  }
};

export const isString = <U>(term: string | U): asserts term is string => {
  if (typeof term !== 'string') {
    throw new TypeError();
  }
};

export const isBigInt = <U>(term: bigint | U): asserts term is bigint => {
  if (typeof term !== 'bigint') {
    throw new TypeError();
  }
};

export const isSymbol = <U>(term: symbol | U): asserts term is symbol => {
  if (typeof term !== 'symbol') {
    throw new TypeError();
  }
};
