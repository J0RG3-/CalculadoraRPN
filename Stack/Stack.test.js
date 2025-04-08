import Stack from './Stack';

test('Comprobamos que la pila esté vacía', () => {
  const stack = new Stack();
  expect(stack.isEmpty(stack)).toBe(true);
});

test('comprobar que la pila NO esté vacía', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

test('Devolver el último elemento agregado al Stack', () => {
  const stack = new Stack();
  stack.push(10);
  expect(stack.checkLast()).toBe(10);
  expect(stack.isEmpty()).toBe(false);
});

test('Eliminar el último elemento agregado', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toBe(2);
});

test('Vaciar la pila', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});
