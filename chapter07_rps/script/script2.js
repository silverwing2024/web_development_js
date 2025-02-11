//가위 버튼에 적용할 click handler

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

function onScissorsClick(){ // 버튼 클릭했습니다. -> userInput prompt 필요없습니다. 
  let comInput; // 즉 지역변수로 처리하는 중입니다. 
  let randomNum = Math.random();

  if(randomNum < 0.33)comInput = SCISSORS;
  else if(randomNum < 0.66) comInput = ROCK; 
  else comInput = PAPER; 

  if(comInput===SCISSORS){
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
  }else if(comInput === ROCK){
    alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다. `)
  }else {
    alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다. `)
  }
}

//onRockClick()
function onRockClick(){
  let comInput; // 즉 지역변수로 처리하는 중입니다. 
  let randomNum = Math.random();

  if(randomNum < 0.33)comInput = SCISSORS;
  else if(randomNum < 0.66) comInput = ROCK; 
  else comInput = PAPER; 

  if(comInput===SCISSORS){
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
  }else if(comInput === ROCK){
    alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다. `)
  }else {
    alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다. `)
  }

}


//onPaperClick() 정의하고 index.html에 대입하고 최종 결론을 내세요.
function onPaperClick(){
  let comInput; // 즉 지역변수로 처리하는 중입니다. 
  let randomNum = Math.random();

  if(randomNum < 0.33)comInput = SCISSORS;
  else if(randomNum < 0.66) comInput = ROCK; 
  else comInput = PAPER; 

  if(comInput===SCISSORS){
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
  }else if(comInput === ROCK){
    alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다. `)
  }else {
    alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다. `)
  }

}


function onButtonClick(userInput){ 
  let comInput; // 즉 지역변수로 처리하는 중입니다. 
  let randomNum = Math.random();

  if(randomNum < 0.33)comInput = SCISSORS;
  else if(randomNum < 0.66) comInput = ROCK; 
  else comInput = PAPER; 

  //출력문 리팩토링 파트
  let result = `컴퓨터 : ${comInput}`

  console.log(userInput)
  console.log(comInput)

  if(userInput==='가위')
  { //conInput 비교
    if(comInput==='가위'){
      //비긴 경우
      result += '-비겼습니다. ';
    }
    else if(comInput==='바위'){
      //사용자가 진 경우
      result += '-졌습니다. ';
    }
    
    else{
      //사용자가 이긴 경우
      result += '-이겼습니다. ';
    }
    
  }
  else if(userInput==='바위')
  { //conInput 비교
    if(comInput==='가위'){
      //이긴 경우
      result += '-이겼습니다. ';
    }
    
    else if(comInput==='바위'){
      //비긴 경우
      result += '-비겼습니다. ';               
    }
    else{
      //사용자가 이긴 경우
      result += '-졌습니다. ';
    }
    
  }
  else{

    if(comInput==='가위'){
      //이긴 경우
      
      result += '-졌습니다. ';
    
    }
    else if(comInput==='바위'){
      //사용자가 진 경우
      result += '-이겼습니다. ';
    
    }
    else{
      //사용자가 이긴 경우
      
      result += '-비겼습니다. ';
    }
    
  }
  
  alert(result);

}