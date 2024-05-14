/**
 * 数组去重
 * 两个相同的对象也认为是 相同项，需要去重
 * @author 小孩子能有什么烦恼呢？
 * @param {Array} Array
 * @param {number} type 1 - 两个相同的对象认为是相同项，需要去重 2 - 两个相同的不对象认为是相同项，不需要去重 默认 1
 * @return {Array}
 */

export function uniqueArray<T>(Array: T[], type: number = 1): T[] {
  if (type === 2) {
    return [...new Set(Array)];
  }
  const _result: T[] = [];
  outer: for (const item of Array) {
    for (const _item of _result) {
      if (equals(item, _item)) {
        continue outer;
      }
    }
    _result.push(item);
  }
  return _result;
}

function isPrimitive(value: any) {
  return value !== Object(value);
  //   return (
  //     value === null ||
  //     value === undefined ||
  //     (typeof value !== "object" && typeof value !== "function")
  //   );
}
function equals(value1: any, value2: any) {
  if (isPrimitive(value1) || isPrimitive(value2)) {
    return Object.is(value1, value2);
  }
  const entries1 = Object.entries(value1);
  const entries2 = Object.entries(value2);
  if (entries1.length !== entries2.length) {
    return false;
  }
  for (const [key, value] of entries1) {
    if (!value2.hasOwnProperty(key) || !equals(value, value2[key])) {
      return false;
    }
  }
  return true;
}

const arr = [
  { a: 1, b: 1 },
  { a: 1, c: 1 },
];

console.log("====================================");
console.log(uniqueArray<obj>(arr, 1));
console.log("====================================");

type obj = {
  a: number;
  b?: number;
  c?: number;
};

export default uniqueArray;
