from flask import Flask, request

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    try:
        username = request.form.get('user')
        password = request.form.get('password')

        if username and password:
            print(f'Username: {username}')
            print(f'Password: {password}')
            return 'Login successful'

        return 'Username and password are required', 400

    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)