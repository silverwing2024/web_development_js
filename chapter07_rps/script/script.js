//let userInput()

//console.log(Math.random());

let comInput;
let randomNum = Math.random();

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

userInput = prompt('가위, 바위, 보')

// 0 이상은 0.33 미만은 가위, 0.33 이상 0.66 미만은 바위, 0.66이상 1 미만은 보로 comInput에 대입

// if(randomNum < (0.33)){
//   comInput = SCISSORS;
// } 
// else if(randomNum < (0.66)){
//   comInput = ROCK;
// } 
// else{
//   comInput = PAPER;
// }

// console.log(comInput);

// userInput = prompt('가위, 바위, 보')
//console.log(userInput);

//입력한 값이 가위, 바위, 보 중 하나라면 통과하는데 잘못된 철자나 묵, 찌, 빠 등이라면 '가위 바위 보' 중 하나를 입력해야 합니다. 를 출력하는 alert를 나올 수 있도록 조건문을 작성하시오. 

// if (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) 
// {
//   console.log('가위 바위 보 중 하나를 입력해야 합니다!');
// }
// else 
// {
//   // 이 부분이 유효성 검사를 통과한 부분이니
//   // 나머지 정상 실행된 로직을 작성하도록 하는 편(읽기 편하므로)
//   if(randomNum < (0.33)){
//     comInput = SCISSORS;
//   } 
//   else if(randomNum < (0.66)){
//     comInput = ROCK;
//   } 
//   else{
//     comInput = PAPER;
//   }

//   console.log(comInput);

//   if(userInput==='가위')
//   { //conInput 비교
//     if(comInput==='가위'){
//       //비긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`);
//     }
//     else if(comInput==='바위'){
//       //사용자가 진 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`);
//     }
//     else{
//       //사용자가 이긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`);
//     }
//   }
//   else if(userInput==='바위')
//   { //conInput 비교
//     if(comInput==='가위'){
//       //이긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`);
//     }
//     else if(comInput==='바위'){
//       //사용자가 진 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`);
//     }
//     else{
//       //사용자가 이긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`);
//     }
//   }
//   else{

//     if(comInput==='가위'){
//       //이긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`);
//     }
//     else if(comInput==='바위'){
//       //사용자가 진 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`);
//     }
//     else{
//       //사용자가 이긴 경우
//       alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`);
//     }
//   }
// };

//개선안: 상수를 활용 ctrl + h 
if(randomNum < (0.33)){
  comInput = SCISSORS;
} 
else if(randomNum < (0.66)){
  comInput = ROCK;
} 
else{
  comInput = PAPER;
}

console.log(comInput);

switch(userInput){
  case SCISSORS:
    switch(comInput){
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다. `);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다. `);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다. `);
        break;
    }
  
  case ROCK:
    switch(comInput){
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다. `);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다. `);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다. `);
        break;
    }

    case PAPER:
      switch(comInput){
        case SCISSORS:
          alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다. `);
          break;
        case ROCK:
          alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다. `);
          break;
        case PAPER:
          alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다. `);
          break;
      }

    default:
      alert('가위 바위 보 중에서 선택하세요!');
      break;
}