-- Create the HRMS database
CREATE DATABASE HRMS;

-- Use the HRMS database
USE HRMS;

-- Create the Users table
CREATE TABLE Users (
    userId INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    company VARCHAR(100),
    bio TEXT,
    twitterHandle VARCHAR(50),
    favorite BOOLEAN,
    leaveDays INT,
    startDate DATE,
    position VARCHAR(50),
    role ENUM('superadmin', 'admin', 'employee'),
    employeeImage VARCHAR(255),
    email VARCHAR(100),
    password VARCHAR(255) -- Hashed and salted password
);

-- Create the SuperAdmins table with a foreign key relationship to Users
CREATE TABLE SuperAdmins (
    superAdminId INT PRIMARY KEY,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

-- Create the Admins table with a foreign key relationship to Users
CREATE TABLE Admins (
    adminId INT PRIMARY KEY,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

-- Create the Departments table
CREATE TABLE Departments (
    departmentId INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Create the Employees table with a foreign key relationship to Users and Departments
CREATE TABLE Employees (
    employeeId INT PRIMARY KEY,
    userId INT,
    departmentId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (departmentId) REFERENCES Departments(departmentId)
);

-- Create the Clients table with a foreign key relationship to Employees
CREATE TABLE Clients (
    clientId INT PRIMARY KEY,
    name VARCHAR(100),
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId)
);

-- Create the LeaveTypes table
CREATE TABLE LeaveTypes (
    leaveTypeId INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Create the LeaveTracking table with foreign key relationships to Employees and LeaveTypes
CREATE TABLE LeaveTracking (
    leaveId INT PRIMARY KEY,
    employeeId INT,
    leaveTypeId INT,
    startDate DATE,
    endDate DATE,
    status ENUM('Approved', 'Pending', 'Denied'),
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId),
    FOREIGN KEY (leaveTypeId) REFERENCES LeaveTypes(leaveTypeId)
);

-- Create the Tasks table with a foreign key relationship to Employees and Projects (if applicable)
CREATE TABLE Tasks (
    taskId INT PRIMARY KEY,
    employeeId INT,
    projectId INT, -- Foreign key to Projects (if applicable)
    title VARCHAR(100),
    description TEXT,
    status ENUM('In Progress', 'Completed', 'Not Started'),
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId)
);

-- Create the Projects table
CREATE TABLE Projects (
    projectId INT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    startDate DATE,
    endDate DATE
);

-- Create the Approvals table with foreign key relationships to Employees, Clients (if applicable), and LeaveTracking
CREATE TABLE Approvals (
    approvalId INT PRIMARY KEY,
    employeeId INT,
    clientId INT, -- Foreign key to Clients (if applicable)
    leaveId INT, -- Foreign key to LeaveTracking
    status ENUM('Approved', 'Denied'),
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId),
    FOREIGN KEY (leaveId) REFERENCES LeaveTracking(leaveId)
);

-- Create the SalaryWages table with a foreign key relationship to Employees
CREATE TABLE SalaryWages (
    salaryWagesId INT PRIMARY KEY,
    employeeId INT,
    salary DECIMAL(10, 2),
    hourlyRate DECIMAL(10, 2)
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId)
);

-- Create the PermissionGroups table with a many-to-many relationship to Users
CREATE TABLE PermissionGroups (
    permissionGroupId INT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

-- Create a join table for the many-to-many relationship between PermissionGroups and Users
CREATE TABLE UserPermissionGroups (
    userId INT,
    permissionGroupId INT,
    PRIMARY KEY (userId, permissionGroupId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (permissionGroupId) REFERENCES PermissionGroups(permissionGroupId)
);

-- Create the Attendance table with a foreign key relationship to Employees
CREATE TABLE Attendance (
    attendanceId INT PRIMARY KEY,
    employeeId INT,
    date DATE,
    status ENUM('In Office', 'Out of Office'),
    FOREIGN KEY (employeeId) REFERENCES Employees(employeeId)
);

-- Create the Calendar table with a foreign key relationship to Users
CREATE TABLE Calendar (
    calendarId INT PRIMARY KEY,
    userId INT,
    date DATE,
    event VARCHAR(100), -- Event can be a holiday, important date, etc.
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

-- Create the LeaveRequests table with a foreign key relationship to Users (Employees)
CREATE TABLE LeaveRequests (
    leaveRequestId INT PRIMARY KEY,
    userId INT,
    startDate DATE,
    endDate DATE,
    type VARCHAR(50),
    status ENUM('Approved', 'Pending', 'Denied'),
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

-- Create the Messages table with a foreign key relationship to Users (Employees)
CREATE TABLE Messages (
    messageId INT PRIMARY KEY,
    sender VARCHAR(100),
    content TEXT,
    timestamp DATETIME,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);
