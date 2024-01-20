import sqlite3
from community import Community

conn = sqlite3.connect('community.db')

c = conn.cursor()

'''
CREATES TABLE
c.execute("""CREATE TABLE communities (
          communityID integer,
          name text,
          members integer
)""")
'''

'''
POSSIBLE c COMMANDS

c.execute("INSERT INTO communities VALUES ('1', 'UBC', 1)")

c.execute("SELECT * FROM communities WHERE name='UBC") #from all communities, selects row with name='UBC'

c.fetchone() #returns next row, if no next row then returns NONE

c.fetchmany(5) #returns 5 rows as a list (if no rows, return empty list)

c.fetchall() #returns everything as a list
'''

c.execute("INSERT INTO communities VALUES ('1', 'UBC', 1)")

c.execute("SELECT * FROM communities WHERE communityID=1")

print(c.fetchone())

conn.commit() #commit changes to database

conn.close() #close connection to database