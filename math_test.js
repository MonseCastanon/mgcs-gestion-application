const multiplicar = require("./math");

test("Multiplicar 3 por 4 y el resultado es 12", () => {
    expect(multiplicar(3, 4)).toBe(12);
});