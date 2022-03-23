// DOM 요소 선택(대상)
var startBTN = document.querySelector("#calc")

// 계산하기 버튼 클릭하면 changeScene에 기록한 일 처리
startBTN.addEventListener("click", changeScene);

// (누르면) 할일 목록...여러개
function changeScene(){
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

// Scene 2.
// DOM 선택
var calcBTN = document.querySelector("#dday_calc");
var resetBTN = document.querySelector("#dday_reset");

// 계산하기 버튼 클릭하면 ddayCalc 기록한 일 처리

calcBTN.addEventListener("click", ddayCalc);

// (누르면) 할일 목록...여러개
function ddayCalc(e){
    e.preventDefault(); // 화면 새로고침 방지
    // 년도 input의 값을 알아오고,
    // 월 input의 값도 알아오고,
    // 일 inpuit의 값을 알아와서
    var user_year = document.querySelector("#user_year").Value;
    var user_year = document.querySelector("#user_month").Value;
    var user_year = document.querySelector("#user_date").Value;

    console.log(user_year, user_month, user_date);

    // 시간, 날짜 객체를 생성해주고 (오늘기준)
    // 알아온 input의 값으로 알아내야하는 시간,날짜를 생성
    // 그리고 나서 두 시간,날짜 차이를 계산 .getTime()
    // 공식 1000x60x60x24 으로 나눠주고
    // 소수점 이하 Math.ceil() 적용해서 정수로 반환하고
    // alert() 알려줘
}