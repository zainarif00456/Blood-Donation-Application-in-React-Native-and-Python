create database Blood
use Blood


create table Users (
					ID int PRIMARY KEY IDENTITY(1, 1),
					FullName varchar(max),
					CNIC varchar(20) UNIQUE,
					BloodGroup nvarchar(5),
					Date_of_Birth date,
					Phone_No nvarchar(20),
					Home_Address nvarchar(max),
					Email_Address nvarchar(200) UNIQUE,
					Latitude float,
					Longitude float,
					User_Status int,			--- 0 for Donor ---- 1 for Patient/Recipent
					User_Name nvarchar(100) UNIQUE,
					User_Password nvarchar(max),
					IsActive bit DEFAULT 1,
					Account_Creation_Date datetime DEFAULT CURRENT_TIMESTAMP
)
























