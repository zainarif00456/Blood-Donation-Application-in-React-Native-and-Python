import pymongo as db

client = db.MongoClient("mongodb://localhost:27017")  # Connection String for connecting to MongoDB database
database = client['Blood']  # Connection OR Creation with database.


def createAccount(payload):
    collection = database["Users"]
    try:
        if collection.insert_one(payload) is not None:  # Inserting into database
            return True
        else:
            return False
    except Exception as e:
        print("ERROR >>>>>>>>>>>>>>> ", e)
        return False

def getUserForAuthentication(payload):
    try:
        collection = database['Users']
        data = collection.find_one(payload)
        print(payload)
        if data is not None:
            return data
        else:
            print(data)
            return None
    except Exception as e:
        print(e)
        return None
