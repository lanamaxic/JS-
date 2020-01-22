 ternary = (operator, operand1, operand) => {
   return (operator === 'add' ? operand1 + operand : operator === 'subtract' ? operand1 - operand : operator === 'multiply' ? operand1 * operand : operator === 'divide' ? operand1 / operand : '')
 }
 


console.log(ternary('add', 4, 5))