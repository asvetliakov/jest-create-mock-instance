const { createMockInstance, default: otherCreateInstance } = require("./index");

const babelLike = _interopRequireDefault(require("./index"));
const thirdCreateInstance = babelLike.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("Creates mock instance for class", () => {
    class Test {
        a() { }
        b() { }
    }

    const mock = createMockInstance(Test);
    const mock2 = otherCreateInstance(Test);
    const mock3 = thirdCreateInstance(Test);
    mock.a();
    mock.b("test");
    mock2.a();
    mock3.b();
    expect(mock.a.mock.calls.length).toBe(1);
    expect(mock.a).toBeCalled();
    expect(mock.b).toBeCalledWith("test");
    expect(mock2.a).toBeCalled();
    expect(mock3.b).toBeCalled();
});

it("Creates mock instance for function", () => {
    function F() { }
    F.prototype.a = function () { };
    F.prototype.b = function () { };

    const mock = createMockInstance(F);
    const mock2 = otherCreateInstance(F);
    const mock3 = thirdCreateInstance(F);
    mock.a();
    expect(mock.a.mock.calls.length).toBe(1);
    mock.b("test");
    expect(mock.a).toBeCalled();
    expect(mock.b).toBeCalledWith("test");
    mock2.a();
    mock3.b();
    expect(mock2.a).toBeCalled();
    expect(mock3.b).toBeCalled();
});