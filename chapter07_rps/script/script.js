//let userInput()

//console.log(Math.random());

let comInput;
let randomNum = Math.random();

// 0 이상은 0.33 미만은 가위, 0.33 이상 0.66 미만은 바위, 0.66이상 1 미만은 보로 comInput에 대입

if(randomNum < (0.33)){
  comInput = "가위"
} 
else if(randomNum < (0.66)){
  comInput = "바위"
} 
else{
  comInput = "보"
}

console.log(comInput);

userInput = prompt('가위, 바위, 보')

//입력한 값이 가위, 바위, 보 중 하나라면 통과하는데 잘못된 철자나 묵, 찌, 빠 등이라면 '가위 바위 보' 중 하나를 입력해야 합니다. 를 출력하는 alert를 나올 수 있도록 조건문을 작성하시오. 

let pass = false;
if (userInput === '가위' || userInput === '바위' || userInput === '보')
{
  console.log(userInput);
}
else 
{
  pass=false
  alert('가위 바위 보 중 하나를 입력해야 합니다.');
};

