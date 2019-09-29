import { Person } from "./model/Person";

const app = function () {  
    let Jane = new Person("Jane", 21);
    Jane.getName();
};

export {app};