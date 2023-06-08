from flask import Blueprint, render_template,request,jsonify,session,redirect,url_for

root = Blueprint('root', __name__)

@root.route('/',methods=['GET'])
def main():
    return render_template('index.html')

@root.route('/baskin/main',methods=['GET'])
def gameMainGetMethod():
    return render_template('./baskin/main/main.html')
@root.route('/baskin/gamestart',methods=['GET'])
def gameStartGetMethod():
    return render_template('./baskin/gamestart/start.html')
@root.route('/baskin/exp',methods=['GET'])
def gameExpGetMethod():
    return render_template('./baskin/exp/explanation.html')
@root.route('/baskin/gameover',methods=['GET'])
def gameOverGetMethod():
    return render_template('./baskin/end/fail.html')