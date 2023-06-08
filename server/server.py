import requests
import json
from flask import Blueprint, render_template,request,jsonify,session,redirect,url_for
root = Blueprint('root', __name__)

@root.route('/',methods=['GET'])
def main():
    return render_template('index.html')

@root.route('/WordFindGame/main',methods=['GET'])
def gameWordGameMainGetMethod():
    return render_template('./WordFindGame/main.html')

@root.route('/WordFindGame/game',methods=['GET'])
def gameWordFindGameGetMethod():
    return render_template('./WordFindGame/game.html')

@root.route('/WordFindGame/exp',methods=['GET'])
def gameWordFindGameExpGetMethod():
    return render_template('./WordFindGame/exp.html')

@root.route('/liarGame/main',methods=['GET'])
def gameMainGetMethod():
    return render_template('./liarGame/main.html')

@root.route('/liarGame/exp',methods=['GET'])
def gameExpGetMethod():
    return render_template('./liarGame/exp.html')

@root.route('/liarGame/gameSelect',methods=['GET'])
def gameSelectGetMethod():
    return render_template('./liarGame/gameSelect.html')

@root.route('/liarGame/dark',methods=['GET'])
def gameDarkGetMethod():
    return render_template('./liarGame/dark.html')

@root.route('/liarGame/liar',methods=['GET'])
def gameLiarGetMethod():
    return render_template('./liarGame/liar.html')

@root.route('/liarGame/notLiar',methods=['GET'])
def gameNotLiarGetMethod():
    return render_template('./liarGame/notLiar.html')

@root.route('/liarGame/turn',methods=['GET'])
def gameTurnGetMethod():
    return render_template('./liarGame/turn.html')

@root.route('/liarGame/liarSelect',methods=['GET'])
def gameLiarSelectGetMethod():
    return render_template('./liarGame/liarSelect.html')

@root.route('/liarGame/answer',methods=['GET'])
def gameAnswerGetMethod():
    return render_template('./liarGame/answer.html')

@root.route('/liarGame/api/answer',methods=['GET'])
def gameApiAnswerGetMethod():
    return jsonify({"data":answer})

@root.route('/CardFilpCame/start',methods=['GET'])
def gameGardFilpCameStartMethod():
    return render_template('./CardFilpCame/start.html')

@root.route('/CardFilpCame/main',methods=['GET'])
def gameGardFilpCameMainMethod():
    return render_template('./CardFilpCame/main.html')
@root.route('/CardFilpCame/game',methods=['GET'])
def gameGardFilpCameGameMethod():
    return render_template('./CardFilpCame/game.html')


answer = {
    "과일": [
      "오렌지",
      "키위",
      "딸기",
      "수박",
      "바나나",
      "두리안",
      "용과",
      "망고",
      "납작복숭아",
      "라임",
    ],
    "인물": [
      "이효리",
      "유재석",
      "박보검",
      "박명수",
      "홍진호",
      "수지",
      "로버트다우니주니어",
      "마동석",
      "지코(우지호)",
      "민버지",
    ],
    "동물": [
      "팬더",
      "호랑이",
      "사자",
      "개미햝기",
      "고양이",
      "개",
      "쿼카",
      "얼룩말",
      "카피바라",
      "래새팬더",
    ],
    "음료": [
      "소주",
      "맥주",
      "아메리카노",
      "카푸치노",
      "에이드",
      "라떼",
      "프라페",
      "주스",
      "우유",
      "물",
    ],
    "직업": [
      "가수",
      "배우",
      "선생님",
      "개발자",
      "판사",
      "경찰",
      "공무원",
      "간호사",
      "승무원",
      "회사원",
    ]
  },
