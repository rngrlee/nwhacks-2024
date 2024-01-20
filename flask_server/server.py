from flask import Flask, request, jsonify
from community import Community

app = Flask(__name__)

#PATH CLI: source /etc/profile``

@app.route('/create_community', methods=['POST'])
def create_community():
    try:
        # Get the data from the request
        data = request.get_json()
        name = data.get('name')

        if not communityID or not name:
            return jsonify({'error': 'communityID and name are required'}), 400

        # Connect to the SQLite database
        conn = sqlite3.connect('communities.db')
        cursor = conn.cursor()

        # Insert the data into the communities table
        cursor.execute("INSERT INTO communities (communityID, name) VALUES (?, ?)", (communityID, name))

        # Commit the changes and close the connection
        conn.commit()
        conn.close()

        return jsonify({'message': 'Community created successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/create_user', methods=['POST'])
def create_user():
    try:
        # Get the data from the request
        data = request.get_json()
        first = data.get('first')
        last = data.get('last')
        email = data.get('email')
        password = data.get('password')

        if not communityID or not name:
            return jsonify({'error': 'communityID and name are required'}), 400

        # Connect to the SQLite database
        conn = sqlite3.connect('communities.db')
        cursor = conn.cursor()

        # Insert the data into the communities table
        cursor.execute("INSERT INTO communities (communityID, name) VALUES (?, ?)", (communityID, name))

        # Commit the changes and close the connection
        conn.commit()
        conn.close()

        return jsonify({'message': 'Community created successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)