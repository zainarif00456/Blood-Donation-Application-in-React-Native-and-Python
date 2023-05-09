from sqlalchemy import Column, String, Float, Boolean, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Users(Base):
    __tablename__ = 'Users'
    ID = Column(Integer, primary_key=True)
    Full_Name = Column(String)
    CNIC = Column(String)
    Blood_Group = Column(String)
    Date_of_Birth = Column(String)
    Phone_No = Column(String)
    Home_Address = Column(String)
    Email_Address = Column(String)
    User_Name = Column(String)
    User_Password = Column(String)
    Latitude = Column(Float)
    Longitude = Column(Float)
    IsActive = Column(Boolean)
    User_Status = Column(Integer)  # Donor = 0 &&&& Patient/Recipient = 1
