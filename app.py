from flask import Flask
from server import server
import os
import dotenv

dotenv.load_dotenv()
app = Flask(__name__)


#라우팅 분리 작업 (루트 폴더로 경로 설정)
app.register_blueprint(server.root,url_prefix = '/')

if __name__ == '__main__':
    app.run('0.0.0.0', port=os.getenv("PORT"), debug=True)