from flask import Flask, request, jsonify, render_template

app = Flask(__name__)



def authenticate_api_key(api_key):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(request.headers.get('key'))
            if request.headers.get('key') == api_key:
                print(f"CHECK {api_key}")
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
    return {
        'status': 0,
        'response': 'Zain'
    }


@app.route('/click-me')
def Clicked():
    return render_template('demo.html')


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
