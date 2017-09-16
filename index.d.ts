/**
 * Create mock instance of given class or function constructor
 * 
 * @param classConstructor Class constructor
 * @returns New instance of given class constructor with all methods being mocked
 */
export function createMockInstance<T>(classConstructor: { new(...args: any[]): T } | { (): T }): jest.Mocked<T>;
/**
 * Create mock instance of given class or function constructor
 * 
 * @param classConstructor Class constructor
 * @returns New instance of given class constructor with all methods being mocked
 */
export function createMockInstance<T>(classConstructor: Function): jest.Mocked<T>;

export default createMockInstance;