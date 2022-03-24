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
// var calcBTN = document.querySelector("#dday_calc");
// var resetBTN = document.querySelector("#dday_reset"); --> 쓸모 없음

// 추가1. form 요소를 선택한다.
var ddayFORM = document.querySelector("#ddayForm")


// 계산하기 버튼 클릭하면 ddayCalc 기록한 일 처리

// calcBTN.addEventListener("click", ddayCalc);

// 추가3. ddayFORM에서 DOM 선택
// 사실 리셋버튼은 아무것도 안해도 됨..
var resetBTN = ddayFORM.querySelector("#dday_reset");

// 추가4. submit 이벤트는 최종적으로 ddayFORM이 감지
ddayFORM.addEventListener("submit", ddayCalc);


// (누르면) 할일 목록...여러개
function ddayCalc(e){
    e.preventDefault(); // 화면 새로고침 방지
    // 년도 input의 값을 알아오고,
    // 월 input의 값도 알아오고,
    // 일 inpuit의 값을 알아와서
    var userYear = document.querySelector("#user_year").value;
    var userMonth = document.querySelector("#user_month").value;
    var userDate = document.querySelector("#user_date").value;

    // console.log(user_year, user_month, user_date);
    // console.log(typeof user_year, typeof user_month, typeof user_date);

    var today = new Date();
    // console.log("날짜객체에서 받아온 월 : "+nowMonth);
    var theDate = new Date(userYear,userMonth-1,userDate);

    var diffDate = theDate.getTime() - today.getTime();

    // 공식 1000x60x60x24 로 나눠주고
    // 소수점 이하 Math.ceil() 적용해서 정수로 반환하고 result에 담고
    var result = Math.ceil(diffDate / (1000*60*60*24));

    // 시간, 날짜 객체를 생성해주고 (오늘기준)
    // 알아온 input의 값으로 알아내야하는 시간,날짜를 생성
    // 그리고 나서 두 시간,날짜 차이를 계산 .getTime()
    // 공식 1000x60x60x24 으로 나눠주고
    // 소수점 이하 Math.ceil() 적용해서 정수로 반환하고
    
    // alert("D-day :"+result); // 알려줘
    // 팝업형태로 알려주려면 UI 설계, result를 그 내부에 .innerText로
    
    var ddayPOP = document.querySelector("#result_pop");
    var ddayTEXT = ddayPOP.querySelector("#d_day");
    ddayTEXT.innerHTML = `<strong>${result}</strong> 일`
    ddayPOP.classList.remove("d-none");

}