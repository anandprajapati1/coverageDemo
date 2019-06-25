import { app } from "../src";

/* eslint-disable no-undef */

test('test1', () => {
  app();
  expect(1+2).toBe(3);
});

// test('app test', ()=>{
//   expect(app()).toBeTruthy();
// });
