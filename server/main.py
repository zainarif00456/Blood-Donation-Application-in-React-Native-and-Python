from flask import Flask, request

app = Flask(__name__)


@app.route('/index', methods=['GET'])
def index():
    return {
        'response': 'Zain Ul Abdeen',
        'status': 0
    }

@app.route('/createaccount', methods=["POST"])
def createAccount():
    payload = request.get_json()
    print(payload)
    return {
        'status': 0,
        'response': 'Zain'
    }


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
