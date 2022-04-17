export const isObjectOrNull = <T extends object, U>(
  term: T | U,
): asserts term is T => {
  if (typeof term !== 'object') {
    throw new TypeError();
  }
};

export const isNonEmptyArray = <T, U>(
  term: Array<T> | U,
): asserts term is Array<T> => {
  if (!Array.isArray(term) || term.length === 0) {
    throw new TypeError();
  }
};

export const isNonEmptyString = <U>(
  term: string | U,
): asserts term is string => {
  if (typeof term !== 'string' || term.length == 0) {
    throw new TypeError();
  }
};

export const isNumberOrNaN = <U>(term: number | U): asserts term is number => {
  if (typeof term !== 'number') {
    throw new TypeError();
  }
};

const _isInteger = <U>(term: number | U): term is number => {
  return (
    typeof term === 'number' && !Number.isNaN(term) && Number.isInteger(term)
  );
};

export const isInteger = <U>(term: number | U): asserts term is number => {
  if (!_isInteger(term)) {
    throw new TypeError();
  }
};

export const isPositiveInteger = <U>(
  term: number | U,
): asserts term is number => {
  if (!_isInteger(term) || term <= 0) {
    throw new TypeError();
  }
};

export const isNonNegativeInteger = <U>(
  term: number | U,
): asserts term is number => {
  if (!_isInteger(term) || term < 0) {
    throw new TypeError();
  }
};

export const isNegativeInteger = <U>(
  term: number | U,
): asserts term is number => {
  if (!_isInteger(term) || term >= 0) {
    throw new TypeError();
  }
};
