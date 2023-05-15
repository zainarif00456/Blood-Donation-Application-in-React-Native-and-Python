from flask import Flask, request, jsonify, render_template
import dboperations2 as db

app = Flask(__name__)


def authenticate_api_key(api_key):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(request.headers.get('key'))
            if request.headers.get('key') == api_key:
                #print(f"CHECK {api_key}")
                return func(*args, **kwargs)
            else:
                return jsonify({'message': 'Invalid API key. Access denied.'}), 401

        wrapper.__name__ = func.__name__
        return wrapper

    return decorator


api_key = 'UNIQUEKEYFORAUTHENTICATIONFORBLOODDONATIONAPPLICATIONANDAVERYVERYLOGNLOGNKEY'


@app.route('/index', methods=['GET'])
@authenticate_api_key(api_key)
def index():
    return {
        'response': 'Zain Ul Abdeen',
        'status': 0
    }


@app.route('/createaccount', methods=["POST"])
@authenticate_api_key(api_key)
def createAccount():
    payload = request.get_json()
    print(payload)
    if payload is not None:
        response = db.createAccount(payload)
        if response:
            return {
                'status': 0,
                'response': 'success'
            }
        else:
            return {"status": 1, 'response': 'Failed'}, 400
    return {"status": 1, 'response': 'Failed'}, 400


@app.route('/login', methods=['POST'])
@authenticate_api_key(api_key)
def login():
    payload = request.get_json()
    print(payload)
    response = db.getUserForAuthentication(payload)
    print(response)
    if response is not None:
        return jsonify({
            "status": 0,
            "response": response
        })
    else:
        print("INVALID USERNAME OR PASSWORD")
        return jsonify({
            "status": 1,
            "response": response
        })


@app.route('/click-me')
def Clicked():
    return render_template('demo.html')


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
