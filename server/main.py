from flask import Flask

app = Flask(__name__)


@app.route('/index', methods=['GET'])
def index():
    return {
        'response': 'Zain Ul Abdeen',
        'status': 0
    }


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
