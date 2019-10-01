import { app } from "../src";

/* eslint-disable no-undef */

test('test1', () => {
  expect(1+2).toBe(3);
});

test("app test", ()=>{
  expect(app().print()).toBe('hi');
  expect(app().cond(0)).toBeFalsy();
  expect(app().cond(12)).toBeTruthy();
});