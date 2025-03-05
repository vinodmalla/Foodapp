import Sum  from "../Sum"; 
test("sum of numbers", () => {
    const result = Sum(3, 9);
    expect(result).toBe(12); 
});
