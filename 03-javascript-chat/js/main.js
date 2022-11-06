import { v4 as uuidv4 } from 'uuid';
import { sayHello, name } from "./hello";
import calculate from "./calculate";

sayHello();
console.log(name)
console.log(calculate(3,4));
console.log(uuidv4());