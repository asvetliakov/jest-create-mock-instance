var jestMock = require("jest-mock");

/**
 * Create mock instance of given class or function constructor
 *
 * @param cl Class constructor
 * @returns New mocked instance of given constructor with all methods mocked
 */
function createMockInstance(cl) {
    var mocker = jestMock;

    // jest-mock 27 doesn't export an instance of ModuleMocker anymore.
    if (jestMock.ModuleMocker) {
        mocker = new jestMock.ModuleMocker(global);
    }
    var Mock = mocker.generateFromMetadata(mocker.getMetadata(cl));
    return new Mock();
}

exports.default = exports.createMockInstance = createMockInstance;
Object.defineProperty(exports, "__esModule", { value: true });