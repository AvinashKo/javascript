function isUndefined(a) {
  return a === null || a === undefined;
}

function add(a, b) {
  if (isUndefined(a) || isUndefined(b)) return undefined;
  return a + b;
}

module.exports = add;
