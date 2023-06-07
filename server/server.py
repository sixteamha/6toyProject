import requests
import json
from flask import Blueprint, render_template,request,jsonify,session,redirect,url_for
root = Blueprint('root', __name__)

@root.route('/',methods=['GET'])
def main():
    return render_template('index.html')

@root.route('/WordFindGame/main',methods=['GET'])
def gameMainGetMethod():
    return render_template('./WordFindGame/main.html')

@root.route('/WordFindGame/exp',methods=['GET'])
def gameExpGetMethod():
    return render_template('./WordFindGame/exp.html')

@root.route('/WordFindGame/game',methods=['GET'])
def gamePlayGetMethod():
    return render_template('./WordFindGame/game.html')

@root.route('/WordFindGame/v1/dict',methods=['POST'])
def gameApiPostMethod():
    inputData = request.form.get('inputData')

    # request to open dict api and get the response
    URL = "https://stdict.korean.go.kr/api/search.do?certkey_no=5464&key=97BB254C6D796831EB58F2E2721AB936&type_search=search&req_type=json&q=" + inputData
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    response = requests.get(URL,headers=headers)

    # if input data is correct handler
    try:
        data = json.loads(response.content)
        print(data)
        return jsonify({"status" : "success"})
    # if input data is not correct handler
    except:
        return jsonify({"status" : "LETTER_ERROR","msg" : "해당 단어는 사전에 없는 단어입니다."})
