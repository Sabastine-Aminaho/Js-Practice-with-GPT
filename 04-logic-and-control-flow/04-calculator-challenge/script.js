function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  
    default:
      result = 'Invalid Operator';
      console.error('error , please check the operator');
      break;
  }

  console.log(result);
  return result;
}

calculator(10, 2, '-');

