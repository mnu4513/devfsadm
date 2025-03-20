import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const ArithmeticOperations = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Arithmetic Operations in Shell Scripting`} />

      <Text text={`Arithmetic operations are essential in shell scripting for performing calculations. Shell scripting supports various arithmetic operations, including addition, subtraction, multiplication, and division.`} />
      
      <Line />
      
      <Subheading text={`Performing Basic Arithmetic`} />

      <Supersubheading text={`Using expr Command`} />
      <Text text={`The \`expr\` command is one way to perform arithmetic in shell scripting. It evaluates expressions and returns the result.`} />
      <TerminalOutput content={`num1=10
num2=5
echo "Sum: $(expr $num1 + $num2)"`} />
      <Text text={`In this example, \`expr\` is used to add two numbers.`} />
      
      <Supersubheading text={`Using Double Parentheses $(( ))`} />
      <Text text={`The double parentheses \`$(( ))\` provide a more efficient way to perform arithmetic operations.`} />
      <TerminalOutput content={`num1=10
num2=5
echo "Sum: $((num1 + num2))"`} />
      <Text text={`This method allows for cleaner syntax and direct mathematical operations.`} />
      
      <Supersubheading text={`Using let Keyword`} />
      <Text text={`The \`let\` command allows arithmetic evaluation without the need for dollar signs.`} />
      <TerminalOutput content={`num=10
let num+=5
echo "Updated num: $num"`} />
      <Text text={`Here, the variable \`num\` is incremented by 5 using \`let\`.`} />

      <Line />
      
      <Subheading text={`Arithmetic Operations Examples`} />
      
      <Supersubheading text={`Addition and Subtraction`} />
      <TerminalOutput content={`num1=15
num2=5
echo "Addition: $((num1 + num2))"
echo "Subtraction: $((num1 - num2))"`} />
      <Text text={`This script performs addition and subtraction using \`$(( ))\`.`} />
      
      <Supersubheading text={`Multiplication and Division`} />
      <TerminalOutput content={`num1=10
num2=2
echo "Multiplication: $((num1 * num2))"
echo "Division: $((num1 / num2))"`} />
      <Text text={`Multiplication is performed using the \`*\` operator, and division using the \`/\` operator.`} />
      
      <Supersubheading text={`Modulus (Remainder) Operator`} />
      <TerminalOutput content={`num1=10
num2=3
echo "Remainder: $((num1 % num2))"`} />
      <Text text={`The modulus operator \`%\` returns the remainder of a division operation.`} />
      
      <Supersubheading text={`Incrementing and Decrementing`} />
      <TerminalOutput content={`num=5
((num++))
echo "Incremented: $num"
((num--))
echo "Decremented: $num"`} />
      <Text text={`\`((num++))\` increments the value, while \`((num--))\` decrements it.`} />
      
      <Line />
   
      <Text text={`Understanding arithmetic operations in shell scripting is crucial for handling numerical data. The methods shown above provide different ways to perform calculations efficiently.`} />
    </div>
  );
};

export default ArithmeticOperations;