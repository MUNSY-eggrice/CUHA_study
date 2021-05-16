var userChoice = prompt("가위바위보 게임입니다. 가위,바위 또는 보를 입력해주세요.");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice,computerChoice);// 함수 호출!

function compare(choice1, choice2)// 함수 정의
{
    if(choice1===choice2)
    {
        alert("비겼습니다!");
    }
    else if(choice1==="주먹")
    {
        if(choice2==="scissors")
        {
            alert("이겼습니다!");
        }
        else
        {
            alert("졌습니다...");
        }
    }
    else if(choice1==="보")
    {
        if(choice2==="rock")
        {
            alert("이겼습니다!");
            
        }
        else
        {
            alert("졌습니다...");
        }
    }
    else if(choice1==="가위")
    {
        if(choice2==="rock")
        {
            alert("졌습니다...");
            
        }
        else
        {
            alert("이겼습니다!");
        }
    }
}