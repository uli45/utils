/**
 * 获取可选属性
 * @author 小孩子能有什么烦恼呢？
 * @param {T} T 需要处理的类型
 * @return {GetOptionalProperties<T>} 返回可选项
 * @example 
 * type T = {
 *  a: number;
 *  b?: string;
 *  c?: string;
 }
 * type T1 = GetOptionalRequired<T>;
 */
export type GetOptionalProperties<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

/**
 * 获取必选属性
 * @author 小孩子能有什么烦恼呢？
 * @param {T} T 需要处理的类型
 * @return {GetOptionalRequired<T>} 返回必填项
 * @example
 * type T = {
 *  a: number;
 *  b?: string;
 *  c?: string;
 }
 * type T1 = GetOptionalRequired<T>;
 */
export type GetOptionalRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
