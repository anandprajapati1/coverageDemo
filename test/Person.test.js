/* eslint-disable no-undef */
import {Person  } from "../src/model/Person";
test("person", ()=>{
    let p= new Person("jane",21);
    expect(p.getAge()).toBeGreaterThan(0);
    expect(p.getAge()).toBeGreaterThan(0);
});