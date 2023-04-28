import pyodbc


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


