import CalculadoraRPN from './CalculadoraRPN';

test('Prueba de suma "3 2 +"', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("3 2 +")).toBe(5);
});

test('Prueba de resta "3 2 -"', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("3 2 -")).toBe(1);
});

test('Prueba de multiplicación "3 2 *"', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("3 2 *")).toBe(6);
});

test('Prueba de división "6 3 /"', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("6 3 /")).toBe(2);
});

test('Prueba de operación con decimales: "5.5 2 +" => 7.5', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("5.5 2 +")).toBeCloseTo(7.5);
});

test('Prueba de operaciones inválidas', () => {
  const calculator = new CalculadoraRPN();
  expect(() => calculator.evaluate("3 2 &")).toThrow("Operación inválida: &");
});

test('Prueba de operación con números grandes: "4000000000 2 *" => 8000000000', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("4000000000 2 *")).toBe(8000000000);
});

test('Prueba de operación con números muy pequeños: "0.0001 2 *" => 0.0002', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("0.0001 2 *")).toBeCloseTo(0.0002);
});

test('Prueba de división por cero', () => {
  const calculator = new CalculadoraRPN();
  expect(() => calculator.evaluate("5 0 /")).toThrow("División por cero");
});

test('Prueba con caracteres no numéricos ni operadores', () => {
  const calculator = new CalculadoraRPN();
  expect(() => calculator.evaluate("5 a +")).toThrow("Operación inválida: a");
});

test('Prueba de operación con una expresión compleja "5 1 2 + 4 * + 3 -"', () => {
  const calculator = new CalculadoraRPN();
  expect(calculator.evaluate("5 1 2 + 4 * + 3 -")).toBe(14);
});


  