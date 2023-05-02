import datetime

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
    query = "insert into Users (FullName, CNIC, BloodGroup, Date_of_Birth, Phone_No, Home_Address, Email_Address, Latitude, Longitude, User_Status, User_Name, User_Password) values (?,?,?,?,?,?,?,?,?,?,?,?)"
    cursor = conn.cursor()
    cursor.execute(query, payload['fullname'], payload['cnic'], payload['blood'], datetime.datetime.now(), payload['phone'], payload['address'], payload['email'],
                   321.23, 231.2, 0, payload['username'], payload['password'])
    cursor.commit()
    return "account created successfully."

