import { sum } from "../sum";
test("sum function should return addition of two numbers",()=>{
    const result=sum(3,2);
    expect(result).toBe(5);

})