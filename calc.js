const textBox = document.getElementById("userInput");


function addToText(num){
  textBox.value += num;
}

function clearInput(){
  document.getElementById("userInput").value = "";
}

function calculate(){
  console.log(textBox.value);

  var boxLength = textBox.value.length;
  var sign = findOperatorIndex()

  var num1 = textBox.value.substring(0, textBox.value.indexOf(sign));
  var num2 = textBox.value.substring(textBox.value.indexOf(sign) + 1, boxLength + 1);


  num1 = parseInt(num1);
  num2 = parseInt(num2);

  console.log("Sign:", sign);
  console.log("Num1:", num1);
  console.log("Num2:", num2);

  switch(sign){
    case '+':
      textBox.value = num1 + num2;
      break;
    case '-':
      textBox.value = num1 - num2;
      console.log(num1 - num2);
      break;
    case '*':
      textBox.value = num1 * num2;
      break;
    case '/':
      textBox.value = num1 / num2;
      break;
    default:
      textBox.value = 'NaN';
  }
}

function findOperatorIndex(){
  if (textBox.value.indexOf('+') != -1){
    return '+';
  }

  else if (textBox.value.indexOf('-') != -1){
    return '-';
  }

  else if(textBox.value.indexOf('*') != -1){
    return '*';
  }

  else if (textBox.value.indexOf('/') != -1){
    return '/';
  }

  else {
    return -1;
  }
}