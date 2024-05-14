/**
 *@author 小孩子能有什么烦恼呢？
 * @param {string} num1  字符串类型的大整数
 * @param {string} num2  字符串类型的大整数
 * @returns  {string}  num1 和num2 想加后的字符串类型的大整数
 */
export function numAdd(num1: string, num2: string): string {
  if (!isNumber(num1) || !isNumber(num2))
    return "num1 or num2 is not a BigInteger";
  const len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");

  let carry = 0;
  let result = "";
  for (let i = len - 1; i >= 0; i--) {
    const sum = +num1[i] + +num2[i] + carry;
    const r = sum % 10;

    carry = Math.floor(sum / 10);
    result = r + result;
  }

  return result;
}
function isNumber(value: number | any) {
  let val = Number(value);
  return typeof val === "number" && !isNaN(val);
}

export default numAdd;
