const { createMockInstance } = require("./index");

it("Creates mock instance for class", () => {
    class Test {
        a() { }
        b() { }
    }

    const mock = createMockInstance(Test);
    mock.a();
    mock.b("test");
    expect(mock.a.mock.calls.length).toBe(1);
    expect(mock.a).toBeCalled();
    expect(mock.b).toBeCalledWith("test");
});

it("Creates mock instance for function", () => {
    function F() { }
    F.prototype.a = function () { };
    F.prototype.b = function () { };

    const mock = createMockInstance(F);
    mock.a();
    expect(mock.a.mock.calls.length).toBe(1);
    mock.b("test");
    expect(mock.a).toBeCalled();
    expect(mock.b).toBeCalledWith("test");
});