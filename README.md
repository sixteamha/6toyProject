## 팀 민버지 , 은버지, 소머니 , 민머니 정답을 알려줘

---

FrontEnd ( 6조 )

김민승 , 이소현 , 박민지, 최은석

## 개요

---

<aside>
💡 자바스크립트와 CSS , HTML 의 구조를 이해하고
자바스크립트 알고리즘을 더욱 이해하기 위해 게임을 1인 1게임 제작하여 페이지 배포

</aside>

### 프로젝트 일정 📅

---

| 일정      | 내용                                                  |
| --------- | ----------------------------------------------------- |
| 6.5 ~ 6.5 | 프로젝트 기획                                         |
| 6.6 ~ 6.6 | 도메인 설계, 개발환경 세팅                            |
| 6.6 ~ 6.8 | 개발 시작 및 각 작업 branch → develop branch 로 merge |
| 6.8 ~ 6.9 | 발표 및 코드리뷰                                      |

### 프로젝트 기획

---

게임페이지

- 게임1 민승→ 초성 맞추기
  - 게임설명
    ### 초성맞추기(훈민정음)
      <aside>
      💡 - 입력 키워드는 ㄱ-ㅎ 랜덤으로해서 출제
      - 정답은 API나 정적으로 , 데이터 베이스나 등으로 정답을 모아둠
      - 틀릴때까지 계속 순서가 돌아감 정확히는 목숨이 없어질때까지
      
      </aside>

- 게임2 은석→ 카드뒤집기 게임
  - 카드 뒤집기
    ### 카드 뒤집기
      <aside>
      💡 1. 카드뒤집기 게임
      
      -카드 개수 지정 12장 , 16장 20장 
      - 그림전체 보여주기 버튼 (옵션)
      - 첫째 사람부터 맞추기
      - 짝을 맞추지 못한 마지막사람이 탈락!
      - 다시하기버튼
      
      </aside>

- 게임3 소현→ 라이어 게임
  - 게임설명
    ### 라이어게임
      <aside>
      💡 1.라이어 게임 
      -분류 적어도 3개 예) 음식, 운동 , 인물 , 동물
      -인원수 선택
      -버튼클릭하면 라이어 , 단어가 보이게 → 다음으로 넘기기전에 버튼클릭해서 까만화면
      -1바퀴가 지났습니다 , 2바퀴가 지났습니다. 라이어를 선택하시겠습니까 
      -라이어 찾음버튼 → 분류페이지
      
      </aside>

- 게임4 민지→ 베스킨라빈스 31 ,
  - 게임설명
    ### 베스킨라빈스31
      <aside>
      💡 1.베스킨라빈스 31 = 사용자지정
      3개만 입력할수있게 < > 최대 3번까지
      **조건**
      -전에사람이랑 같은 숫자는 안됨 → 전에사람이랑 같은 숫자를 할시 탈락
      -31 = 사용자지정 이 처음 나오는 사람은 탈락
      -버튼 클릭횟수 다음사람한테 안보여주게
      - 전체숫자 화면에 크게 띄워지게
      
      </aside>


## 개발환경 세팅

---

[sixteamha](https://github.com/sixteamha)

- 민승님이 프로젝트를 만들고
- 6toy프로젝트를 만든후 각 브렌치에서 작업
- 각 작업 완료후 Develop 브런치에 merge
- Develop 브런치에서 Main으로 merge후 배포

## 다이어그램

---

라이어게임
![라이어게임](https://github.com/sixteamha/6toyProject/assets/85878391/b33e3a47-6782-4f38-bf4d-913a65611cfe)
베스킨라빈스

![베스킨라빈스](https://github.com/sixteamha/6toyProject/assets/85878391/0fdca55a-0fd6-47bc-abe7-bd962ceb0175)
초성맞추기 게임

![초성맞추기 게임](https://github.com/sixteamha/6toyProject/assets/85878391/2d6bcb1e-a24a-4ea9-8bea-c8f1029a8f8d)
카드뒤집기게임

![카드뒤집기게임](https://github.com/sixteamha/6toyProject/assets/85878391/9a5c82b9-8914-4bb8-8a3e-04cb6b361f1a)

## 시연

---

[6조(민버지,은버지,소머니,민머니 정답을 알려줘)](https://www.youtube.com/watch?v=B9_XwX1CBZs)

시연영상

## 트러블 슈팅 ❗

---

1. **민승**
   - **행성 에니매이션 작업** : 처음에 행성 에니메이션 작업을 js 에서 함수로 처리했는데 행성이 많아짐에 따라 코드의 가독성이 떨어지고 행성 하나하나에 부여해야할 특징들이 많아지면서 클래스를 이용해서 해당 문제를 해결했다.
   - **초성 맞추기 게임 open api 가져오기** : 처음에 초성 맞추기 게임 open api를 어떻게 가져올 것인지에 대해 정말 막막했는데 저희 팀원들의 도움으로 해당 문제를 해결함( 해당 문제를 해결하는데 너무 어려웠음…)
     - 처음에 naver 사전 open api를 사용할려고 함
     - 하지만 naver 사전 open api 문서가 어려웠기에 우리말 낱말 백과사전을 이용할력고 생각함
     - 그래서 우리말 낱말 백과사전 open api 신청을 함 ( 내가 사용하고 있는 localhost ip주소를 넣어서 신청을 함)
     - 배포 후에 내가 사용하고 있는 localhost ip 주소가 아니라 내가 배포한 사이트 주소로 바꿈
     - Open api 를 flask에서 해당 단어가 있는지 없는지를 try,except구문을 통해서 로직을 작성함
     - 그리고 그 결과를 fetch를 통해서 받았어 그 결과를 이용함
2. **은석**
   - **알고리즘 짜기** 기획했던대로 머리속에서 그려진대로 개발을 진행중에 생각치도 못했던 변수들이 너무나도 많이 나왔다.
     카드를 너무 빨리 눌러서 애니메이션이 진행되는동안 다른 카드가 돌아가 문제가생김
     → lock : boolean 변수를 주어서 해결
     똑같은 카드를 두번 누르면 인식이 되는것
     → 뒤집은 카드가 담겨있는 배열을 만들어서 배열자체를 비교해 진행하였다.
3. **민지**
   - 기획: 온라인으로 게임을 제작하다보니 초기에 단순하게 생각했던 것과 다르게 디테일한 기획이 필요했고 조원들과 의견을 나누며 해결해나갔습니다.
   - **동작구현: 제가 생각했던 것보다 js를 많이 사용해야 했는데 js를 많이 알고 있지 않아 팀원들과 해결하는 부분도 있지만 혼자 코드를 적어보는 시간을 가져 실제로 숫자를 증가시키는 함수를 만들어보고 실행시켰습니다.**
4. **소현**
   - 쿼리스트링사용 - template 재활용을 위해 쿼리스트링을 사용하였는데 쿼리스트링을 이용해 보는것이 처음이라 너무 해맸다. 구글검색으로 쿼리스트링을에 대해 공부하면서 플젝을 제작하였다
   - 로컬스토리지 사용 - 백엔드 사용을 배제하기 위해 로컬스토리를 적극적으로 사용하였는데 로컬스토리지에서 값을 가져올때 string형식으로 되어있다는 사실을 자꾸 잊어먹어 값을 사용하는데 애를 먹었다 콘솔로 type을 계속 찍어보며 로컬스토리지 사용 개념을 이해하니 잘 사용할 수 있게 되었다
   - 수많은 templates - 라이어게임을 만들려다보니 많은 페이지를 많들어야 해서 최대한 재활용 하는 방법을 찾고 싶었다. 팀원들과 대화를 통해 재활용하는 여러 방법이 있다는 것을 알게 되었고 그 중 쿼리스트링을 이용하여 중복된 페이지나 재활용이 가능한 페이지들을 재활용 하여 template의 개수를 줄였다

## 아쉬웠던점 😂

---

1. **민승**

   초성맞추기 게임을 하면서 아쉬웠던 점

   - 초성 맞추기 게임을 만들면서 가장 많이 들었던 생각은 바로 클래스였다.
     왜냐하면 게임 캐릭터 마다의 특징이 다르고 각각의 프로퍼티와 메소드가 있기 때문이다.
     하지만 초성맞추기 게임을 하면서 행성에는 클래스를 구현했지만 이를 **완벽하게 사용하지 못한 점이 아쉬웠다.**
   - 처음에는 네이버 사전을 크롤링해서 가져올려고 했는데 크롤링에서 오류가 발생해서 크롤링 대신 사전 open api를 통해서 해결했다.
     하지만 크롤링을 하지 못했다는 점이 아쉬웠다.

   html에서 불필요한 요소들을 많이 넣은 거 같아서 나중에는 코드의 가독성을 위해 html에서 필요한 요소들을 사용할 것이고 그렇기 위해서는 웹 사이트의 구조를 잡아야 한다고 생각했다.

2. **은석**

   - 추상클래스 미사용
     - 그저 눈에 보이는 알고리즘 짜기 바빠 좀더 가독성있고 객체지향적인 코드를 생각을 못하였다 앞으로 어떻게 짤것인가 미리 계획하는 시간을 좀 더 많이 투자를 해야겠다

   시간이 여유가 있었다면 class형태로 컴포넌트 형태로 짜보고싶었다. 잘 모르는 영역이여서 공부해서 적용하기엔 애매한 시간이었기도 하고 기회가 된다면 바닐라 스크립트로 웹 컴포넌트형태로 리팩토링을 해봐야겠다.

3. **민지**

   - **생각나는 대로 코드를 적다보니 html에서 div로만 문단을 나누는 등 한정적인 요소들을 이용해 구조를 짠 거 같아 나중에는 코드의 가독성을 위해 html에서 필요한 요소들을 사용할 것이고 그렇기 위해서는 웹 사이트의 구조를 잡아야 한다고 생각했다.**

4. 소현
   - 게임을 완성하고 나서 보니 template의 개수도 더 재활용 가능할 것 같고 코드도 더 깔끔하게 만들 수 있었는데 시간이 부족해서 아쉽다
     template 안에 내용도 복잡하고 정리가 안되어 있어서 부족한점이 너무 많았다
     팀원분들과 코드리뷰를 하며 defer 속성의 사용과 fetch할때 await을 잘 사용하는 것 함수용 컴포넌트 사용하기 등의 조언을 받았는데 **시간이 더 있다면 이러한 점을 추가하여 더 나은 프로젝트를 만들고 싶다**

## 코드리뷰 진행

---

<aside>
💡 간단한 진행을 위해서 이런코드도 잘 되겠지만 이런 코드로 지향하는게 좋겠다! 싶은것들 위주로 리뷰를 했습니다.

</aside>

**은석** :

- **전역변수관리를 let 으로 하는것보다 추상 class 를 하나만들어서 상태관리를 하는방법으로 가보자**

```jsx
let cards = [];
let choices = [];
let collectCard = [];
let cardItemsEl = [];
let flippedCards = [];
let lock = false;
let players;
let loser = {};
```

- html script 태그에 defer라는 속성을 넣으면 외부 스크립트를 로드한 후 스크립트를 불러온다 꼭 넣어주자
- 특별한 로직이 없는경우 js 내부에 함수 실행은 최대한 나중에 → **(html 랜더가 다된후 적용시켜야될 수 있어서)**
- 함수 하나에 하나의 로직 → **함수 하나에 여러 기능을 때려박는것은 지양하자 로직이 꼬일우려도 있고 재사용의 가능성이 거의 없다**

**민승** :

- **var 변수를 최대한 사용하지 말기
  이유 : var를 쓰면 변수 중복이 될 수 있으며 나온지 오래되었기에 쓰는 것을 사용하지 말기**
- **화살표 함수나 function() => {} 등을 통일하는 식으로 진행하기
  이유 : 코드의 가독성을 위해서 통일 시키는 방향으로 가는 것이 좋음**

```jsx
//DOM elements get ready to rendering
document.addEventListener("DOMContentLoaded", function () {
  letterTitleBox.innerHTML = gameData.playLetters;
  //set removeCnt to LocalStorage
  localStorage.setItem("removeCnt", 0);
  //set timer to LocalStorage
  localStorage.setItem("time", 10);
});
```

**소현**:

- html script 태그에 defer라는 속성을 넣으면 외부 스크립트를 로드한 후 스크립트를 불러온다 꼭 넣어주자
  →**html 파일이 위에 있음 js가 나중에 되어 속도가 느려짐 defer을 하면 속도가 빨라짐**
- fetch할때 await을 잘 쓰렴 내가 하는 answer이 console이 안찍히는 그것을 고칠수 있음

```jsx
fetch("/liarGame/api/answer")
  .then((res) => res.json())
  .then((data) => {
    let answer = data["data"][0][btnValue][Math.floor(Math.random() * 10)];
    window.localStorage.setItem("answer", answer);
  });
```

- 함수형 컴포넌트 잘 사용해 보기
- 스크립트 따로 빼기 → **코드 가독성 향상**
  ~~민지:
  민지님 사랑해요~~
  ~~도영:
  잘 모르겠음~~
  ~~나영:
  나영님 감사하다~~

**민지**:

- **숫자변수지정, js 자주 쓰는 걸 공통js로 뺀 거 잘한 일**
- **코드편집기 정리필요 → 본인 코드 생산성 향상 (format on save, prettier 등 알아보기)**
- **html 파일하나로 js 파일 여러페이지 만들 수 있음. - js로 html안에 넣는 방법을 숙지해야겠습니다. → 바닐라스크립트로 많이 연습해보기**

### **Q&A**
