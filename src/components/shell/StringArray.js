import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line, Video } from '../utils/Comps';

const StringsAndArrays = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Strings and Arrays in Shell Scripting`} />
      
      <Text text={`Strings and arrays are fundamental to shell scripting, enabling efficient data manipulation, storage, and retrieval. Understanding how to work with them is crucial for writing powerful scripts.`} />
      <Line />
      <Video videoSrc={`itdMpRZ4gKc`}/>
      <Line/>

      <Subheading text={`String Operations`} />
      <Text text={`Strings in shell scripting are sequences of characters used for text processing. Here are some common string operations:`} />
      
      <Supersubheading text={`Concatenation`} />
      <Text text={`String concatenation is the process of joining two or more strings together.`} />
      <TerminalOutput content={`str1="Hello"
str2="World"
str3="$str1 $str2"
echo "$str3"`} />
      <Text text={`This script creates two string variables, concatenates them using a space, and prints the result.`} />

      <Supersubheading text={`Finding String Length`} />
      <TerminalOutput content={`str="Hello India!"
echo "Length: \${#str}"`} />
      <Text text={`The \${#var} syntax returns the length of a string. In this case, the length of "Hello India!" is calculated.`} />

      <Supersubheading text={`Changing Case`} />
      <TerminalOutput content={`str="Hello India!"
echo "Uppercase: \${str^^}"
echo "Lowercase: \${str,,}"`} />
      <Text text={`The \${var^^} converts all characters to uppercase, while \${var,,} converts them to lowercase.`} />

      <Supersubheading text={`Extracting Substrings`} />
      <TerminalOutput content={`str="Hello India!"
echo "Substring: \${str:6:5}"`} />
      <Text text={`The \${var:start:length} syntax extracts a substring from a string. Here, it extracts 5 characters starting from index 6, resulting in "India".`} />

      <Line />
      
      <Subheading text={`Arrays`} />
      <Text text={`An array is a collection of values stored in a single variable. Arrays in shell scripting can store multiple data types, including numbers, strings, and booleans.`} />

      <Supersubheading text={`Defining an Array`} />
      <TerminalOutput content={`array=(1 2 3 4 5 6 seven eight "john doe")`} />
      <Text text={`Arrays are defined using parentheses, with each element separated by spaces.`} />

      <Supersubheading text={`Accessing Elements`} />
      <TerminalOutput content={`echo "First element: \${array[0]}"
echo "Second element: \${array[1]}"`} />
      <Text text={`Elements in an array are accessed using an index, which starts at 0.`} />

      <Supersubheading text={`Getting the Length of an Array`} />
      <TerminalOutput content={`echo "Total elements: \${#array[*]}"`} />
      <Text text={`The \${#array[*]} syntax returns the total number of elements in the array.`} />

      <Supersubheading text={`Adding Elements to an Array`} />
      <TerminalOutput content={`array+=(Hi "Hello World!" nine 10)
echo "Updated array: \${array[*]}"`} />
      <Text text={`Elements can be appended to an existing array using the += operator.`} />

      <Supersubheading text={`Looping Through an Array`} />
      <TerminalOutput content={`fruits=("Apple" "Banana" "Cherry")
for fruit in "\${fruits[@]}"; do
  echo "$fruit"
done`} />
      <Text text={`The \${fruits[@]} syntax expands all elements of an array, allowing iteration using a loop.`} />

      <Line />
      
      <Subheading text={`Associative Arrays (Key-Value Pairs)`} />
      <Text text={`Associative arrays allow storing data in key-value pairs, providing a way to access elements using custom keys instead of numerical indices.`} />

      <Supersubheading text={`Defining and Using Associative Arrays`} />
      <TerminalOutput content={`declare -A myArray
myArray=( [name]=paul [age]=25 )
echo "Name: \${myArray[name]}"
echo "Age: \${myArray[age]}"`} />
      <Text text={`The declare -A command is used to create an associative array, where elements are accessed using keys instead of indexes.`} />

      <Line />
      <Text text={`Mastering string manipulation and arrays in shell scripting enhances script efficiency, enabling dynamic data handling and automation.`} />
    </div>
  );
};

export default StringsAndArrays;
