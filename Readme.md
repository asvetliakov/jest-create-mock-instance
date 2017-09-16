## Description

This library uses ```jest-mock``` internal package to automatically create & instantiate mock for given class/function constructor.

I've been always fan of using ```sinon.createStubInstance()``` in my tests. Unfortunately, Jest doesn't expose similar API to create new mocked instance for given class constructor. Using ```jest.fn()``` or jest's module mocks is not very convienment for various cases, take an example of these classes and unit test:


food.js
```js
export class Food {
    consume() {}
}

```

cat.js
```js
export class Cat {
    constructor(food) {
        this.food = food;
    }
    eat() {
        this.food.consume();
    }
}
```

and test:

cat.spec.js
```js
import { Food } from "../food";
import { Cat } from "../cat";

let cat;
let food;
beforeEach(() => {
    food = new Food();
    cat = new Cat(food);
});

it("Must eat", () => {
    cat.eat();
    expect(food.consume).toBeCalled();
});
```

By using jest module mocks you must mock your module before and instantiate ```Food``` directly:

```js
jest.mock("../food");
import { Food } from "../food";

beforeEach(() => {
    food = new Food();
})
```

This is very ugly when have many modules to mock (and you don't want automock by default) and when using typescript:

```ts
jest.mock("../food1");
jest.mock("../food2");
jest.mock("../food3");
import { Food1 } from "../food1";
import { Food2 } from "../food2";
import { Food3 } from "../food3";

let food1: jest.Mocked<Food1>;
let food2: jest.Mocked<Food2>;
let food3: jest.Mocked<Food3>;
beforeEach(() => {
    // Food constructors may have other required parameters so often necessary cast them to any
    food1 = new (Food1 as any)() as any;
    food2 = new (Food2 as any)() as any;
    food3 = new (Food3 as any)() as any;
});
```

**Instead you can just write:**

```ts
import createMockInstance from "jest-create-mock-instance";
import { Food } from "../food";

let food: jest.Mocked<Food>;
beforeEach(() => {
    food = createMockInstance(Food);
});
```


## Install

```npm install jest-create-mock-instance --save-dev```

## Typescript

```createMockInstance``` returns ```jest.Mocked<T>``` object. Don't forget to install ```@types/jest``` package.