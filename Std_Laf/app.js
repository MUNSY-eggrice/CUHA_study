const express = require("express"); //자바 스크립트에서 외부 패키지를 임포트하는 방법이다.
const ejs = require("ejs");
const path = require("path");//기본적으로 지원하는 path 패키지

const app = express(); // app을 객체화 하는 코드

app.use(express.static(path.join(__dirname, "public"))); //파일 접근 권한을 입력된 디렉토리에 허용해준다, express전용
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//HTTP 메소드 get(read) post(Create) put(update) delete(delete)
//function(a,b){} == (a,b) =>{ }
// "/" 반환자.
app.get("/", (req,res) => {
    res.render('index'); // 랜더는 파일을 불러올 수 있다. send는 텍스트를 보낼 수 있다.
});
app.get("/login", (req,res) => {
    res.render('login.ejs');
});
app.get("/join", (req,res) => {
    res.render('join.ejs');//ejs생략가능, set에서 설정을 했기때문
});

app.listen(4000);
//json JS object notation
//npm node package manager
//packagejson에 dependencies항목이 존재하면 패키지 파일을 다 지워도 npm i 커맨드 하나도 다시 설치 할 수 있다.
