const express = require("express"); //자바 스크립트에서 외부 패키지를 임포트하는 방법이다.
const ejs = require("ejs");
const path = require("path"); //기본적으로 지원하는 path 패키지
const cookieParser = require("cookie-parser"); //
const session = require("express-session"); //
const dotenv = require("dotenv");

const app = express(); // app을 객체화 하는 코드

dotenv.config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //ejs는 템플릿엔진이다.
//템플릿엔진은 값을 불러올 땐 <%= %>, 제어흐름은 <% %>

app.use(express.static(path.join(__dirname, "public"))); //파일 접근 권한을 입력된 디렉토리에 허용해준다, express전용 앞에는 /가 생략되어 있다
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

//HTTP 메소드 get(read) post(Create) put(update) delete(delete)
//function(a,b){} == (a,b) =>{ }
// "/" 반환자.
//request가 들어오면 reponse를 해야한다.
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.get("/", (req, res) => {
  res.render("index"); // 랜더는 파일을 불러올 수 있다. send는 텍스트를 보낼 수 있다.
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

const users = [
  { username: "k", password: "123", nickname: "senpai" },
  { username: "t", password: "456", nickname: "Fubuki" },
  { username: "h", password: "789", nickname: "shirai" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let logged = false;

  for (let i = 0; i < users.length; ++i) {
    if (username === users[i].username) {
      if (password === users[i].password) {
        req.session.user = users[i];
        logged = !logged;
        break;
      }
    }
  }
  if (logged) {
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.post("/join", (req, res) => {
  const { username, password, nickname } = req.body;
  let joined = true;
  for (let i = 0; i < users.length; ++i) {
    if (username === users[i].username) {
      joined = false;
      break;
    }
  }
  if (joined) {
    const user = { username, password, nickname }; //key와 value값이 같으면 생략가능
    users.push(user);
    res.send(
      '<script>alert("회원가입 성공"); location.href="/login";</script>'
    );
  } else {
    res.send('<script>alert("회원가입 실패"); location.href="/join";</script>');
  }

  res.redirect("/login");
});

app.get("/join", (req, res) => {
  res.render("join.ejs"); //ejs생략가능, set에서 설정을 했기때문
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

const posts = [
  { title: "HI", content: "hello" },
  { title: "GOod", content: "ok" },
];

app.get("/board", (req, res) => {
  res.render("board", { posts: posts }); //ejs생략가능, set에서 설정을 했기때문,   자료를 {} 객체형식으로 넘겨줄수 있다. 생략가능.
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res) => {
  const { title, content } = req.body;
  const poster = { title, content };
  posts.push(poster);
  res.send(
    '<script>alert("게시글이 등록되었습니다."); location.href="/board";</script>'
  );
});

app.get("/view/:id", (req, res) => {
  const { id } = req.params; //:a 콜론 뒤 값은 req.params.a로 접근한다. 구조분해 할당을 사용했다.
  const post = posts[id - 1];
  res.render("view", { post });
});
app.listen(4000);
//json JS object notation
//npm node package manager
//packagejson에 dependencies항목이 존재하면 패키지 파일을 다 지워도 npm i 커맨드 하나도 다시 설치 할 수 있다.
