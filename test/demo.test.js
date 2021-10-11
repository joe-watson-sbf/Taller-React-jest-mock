import * as app from "../src/App";
import * as math from "../src/Math";

/*

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();

*/

/*
jest.mock("../src/Math");



test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply", () => {
    app.doMultiply(4, 5);
    expect(math.multiply).toHaveBeenCalledWith(4, 5);
});

test("call math.divide", () => {
    app.doDivide(40, 10);
    expect(math.divide).toHaveBeenCalledWith(40, 10);
});

*/


/*

test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    const addMock = jest.spyOn(math, "subtract");
    expect(app.doSubtract(15, 5)).toEqual(10);
    expect(addMock).toHaveBeenCalledWith(15, 5);
});

test("calls math.multiply", () => {
    const addMock = jest.spyOn(math, "multiply");
    expect(app.doMultiply(4, 5)).toEqual(20);
    expect(addMock).toHaveBeenCalledWith(4, 5);
});

test("call math.divide", () => {
    const addMock = jest.spyOn(math, "divide");
    expect(app.doDivide(40, 10)).toEqual(4);
    expect(addMock).toHaveBeenCalledWith(40, 10);
});

*/


/*

test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});

test("calls math.subtract", () => {
    const addMock = jest.spyOn(math, "subtract");
    addMock.mockImplementation(() => "mock");
    expect(app.doSubtract(15, 5)).toEqual("mock");
    addMock.mockRestore();
    expect(app.doSubtract(15, 5)).toEqual(10);
});

test("calls math.multiply", () => {
    const addMock = jest.spyOn(math, "multiply");
    addMock.mockImplementation(() => "mock");
    expect(app.doMultiply(4, 5)).toEqual("mock");
    addMock.mockRestore();
    expect(app.doMultiply(4, 5)).toEqual(20);
});

test("calls math.divide", () => {
    const addMock = jest.spyOn(math, "divide");
    addMock.mockImplementation(() => "mock");
    expect(app.doDivide(40, 10)).toEqual("mock");
    addMock.mockRestore();
    expect(app.doDivide(40, 10)).toEqual(4);
});

*/




test("calls math.add", () => {
    const originalAdd = math.add;
    math.add = jest.fn(originalAdd);
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);
    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
});

test("calls math.subtract", () => {
    const originalSubtract = math.subtract;
    math.subtract = jest.fn(originalSubtract);
    expect(app.doSubtract(15, 5)).toEqual(10);
    expect(math.subtract).toHaveBeenCalledWith(15, 5);
    math.subtract.mockImplementation(() => "mock");
    expect(app.doSubtract(15, 5)).toEqual("mock");
    expect(math.subtract).toHaveBeenCalledWith(15, 5);
    math.subtract = originalSubtract;
    expect(app.doSubtract(15, 5)).toEqual(10);
});

test("calls math.multiply", () => {
    const originalMultiply = math.multiply;
    math.multiply = jest.fn(originalMultiply);
    expect(app.doMultiply(4, 5)).toEqual(20);
    expect(math.multiply).toHaveBeenCalledWith(4, 5);
    math.multiply.mockImplementation(() => "mock");
    expect(app.doMultiply(4, 5)).toEqual("mock");
    expect(math.multiply).toHaveBeenCalledWith(4, 5);
    math.multiply = originalMultiply;
    expect(app.doMultiply(4, 5)).toEqual(20);
});

test("calls math.divide", () => {
    const originalDivide = math.divide;
    math.divide = jest.fn(originalDivide);
    expect(app.doDivide(40, 10)).toEqual(4);
    expect(math.divide).toHaveBeenCalledWith(40, 10);
    math.divide.mockImplementation(() => "mock");
    expect(app.doDivide(40, 10)).toEqual("mock");
    expect(math.divide).toHaveBeenCalledWith(40, 10);
    math.divide = originalDivide;
    expect(app.doDivide(40, 10)).toEqual(4);
});

