import datetime
import pandas as pd
import pyodbc, Models


try:
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=ZAIN-UL-ABDEEN;"
        "Database=Blood;"
        "uid=sa;"
        "pwd=1234567890;"
    )
    print("Connection successful")
except Exception as error:
    print("Can't Connect to Database...")
    print("ERROR: ", error)


def createAccount(payload):
    user = Models.Users()
    for key, value in payload.items():
        setattr(user, key, value)
    print(user.User_Name)
    query = "insert into Users (FullName, CNIC, BloodGroup, Date_of_Birth, Phone_No, Home_Address, Email_Address, Latitude, Longitude, User_Status, User_Name, User_Password) values (?,?,?,?,?,?,?,?,?,?,?,?)"
    try:
        cursor = conn.cursor()
        cursor.execute(query, user.Full_Name, user.CNIC, user.Blood_Group, datetime.datetime.now(), user.Phone_No, user.Home_Address, user.Email_Address,
                       321.23, 231.2, 0, user.User_Name, user.User_Password)
        cursor.commit()
        return True
    except Exception as e:
        print(e)
        return False


def getUserForAuthentication(payload):
    user = Models.Users()
    user.User_Name = payload['username']
    user.Password = payload['password']
    query = f"select * from Users where User_Name='{user.User_Name}' and User_Password='{user.Password}' and IsActive=1"
    try:
        data = pd.read_sql_query(query, conn)
        print(data)
        data.drop(index=0)
        print(data)
        data = data.to_dict()
        # data = cursor.fetchone()
        if data is not None:
            print(data)
            return dict(data)
        else:
            print(data)
            return None
    except Exception as e:
        print(e)
        return None


