class CalculadoraRPN {

    evaluate(expression) {
        const stack = [];
        const tokens = expression.trim().split(/\s+/);
        const operadoresValidos = ['+', '-', '*', '/'];
    
        for (let token of tokens) {
          if (!isNaN(token)) {
            stack.push(Number(token));
          } else if (operadoresValidos.includes(token)) {
            const b = stack.pop();
            const a = stack.pop();
    
            if (a === undefined || b === undefined) {
              throw new Error("Expresión inválida: operandos insuficientes");
            }
    
            switch (token) {
              case '+':
                stack.push(a + b);
                break;
              case '-':
                stack.push(a - b);
                break;
              case '*':
                stack.push(a * b);
                break;
              case '/':
                if (b === 0) {
                  throw new Error("División por cero");
                }
                stack.push(a / b);
                break;
            }
          } else {
            throw new Error(`Operación inválida: ${token}`);
          }
        }
    
        if (stack.length !== 1) {
          throw new Error("Expresión inválida: demasiados operandos");
        }
    
        return stack[0];
      }
    }
  
  export default CalculadoraRPN;