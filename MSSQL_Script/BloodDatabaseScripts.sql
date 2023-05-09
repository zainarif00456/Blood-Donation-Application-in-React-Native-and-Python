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

select * from Users


create table Donation(
							ID int PRIMARY KEY IDENTITY(1, 1),
							Donated_By_CNIC varchar(20),
							Donated_To_CNIC varchar(20),
							Donated_By_Name varchar(max),
							Donated_To_Name varchar(max),
							Blood_Group varchar(5),
							Date_of_Donation datetime DEFAULT CURRENT_TIMESTAMP,
)


drop table Donation

create table Post(
					ID int PRIMARY KEY IDENTITY(1, 1),
					CNIC varchar(20),
					Blood_Group varchar(5),
					Request_Description varchar(max),
					Latitude float,
					Longitude float,
					Posting_Date datetime DEFAULT CURRENT_TIMESTAMP
)
























