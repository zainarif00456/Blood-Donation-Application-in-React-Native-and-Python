import pyodbc
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker

import Models

# With SQLALCHEMY

server = 'ZAIN-UL-ABDEEN'
database = 'Blood'
username = 'sa'
password = '1234567890'

engine = db.create_engine(f'mssql+pyodbc://{username}:{password}@{server}/{database}?driver=SQL+Server')

Session = sessionmaker(bind=engine)

session = Session()


def createAccount(payload):
    user = Models.Users()
    for key, value in payload.items():
        setattr(user, key, value)
    user.Latitude = 213.231
    user.Longitude = 213.23231
    user.IsActive = True
    user.User_Status = 0
    session.add(user)
    session.commit()
    print(f"User Name: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> {user.User_Name}")
    return True

#
# def getUserForAuthentication(payload):
#     user = Models.Users()
#     user.User_Name = payload['username']
#     user.Password = payload['password']
#     query = f"select * from Users where User_Name='{user.User_Name}' and User_Password='{user.Password}' and IsActive=1"
#     try:
#         data = pd.read_sql(query, conn).to_dict()
#         # data = cursor.fetchone()
#         if data is not None:
#             print(data)
#             return dict(data)
#         else:
#             print(data)
#             return None
#     except Exception as e:
#         print(e)
#         return None
