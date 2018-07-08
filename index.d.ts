/**
 * Create mock instance of given class or function constructor
 *
 * @param classConstructor Class constructor
 * @returns New instance of given class constructor with all methods being mocked
 */
export function createMockInstance<T>(classConstructor: { new(...args: any[]): T } | { (...args: any[]): T }): jest.Mocked<T>;

export default createMockInstance;