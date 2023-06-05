from flask import Blueprint, render_template,request,jsonify,session,redirect,url_for

root = Blueprint('root', __name__)

@root.route('/',methods=['GET'])
def main():
    return render_template('index.html')