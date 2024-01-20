from flask import Flask, request, jsonify

app = Flask(__name__)

#PATH CLI: source /etc/profile``

community = Community(1, "test")
person = Person(1, "Ranger")

'''
Routes are endpoints or "locations" on our API 
where you can get some kind of data
'''
@app.route('/create_community', methods=['POST'])
def create_community():
    try:
        # Get the data from the request
        data = request.get_json()
        communityID = data.get('communityID')
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

'''
Methods include:
- GET: Request data from a specified resource
- POST: Create a resource
- PUT: Update a resource
- DELETE: Delete a resource
'''


if __name__ == "__main__":
    app.run(debug=True)