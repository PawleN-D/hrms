-- Dummy data for Users table
INSERT INTO Users (userId, firstName, lastName, email, password, role)
VALUES
    (1, 'Super', 'Admin', 'superadmin@example.com', 'hashed_superadmin_password', 'superadmin'),
    (2, 'Admin', '1', 'admin1@example.com', 'hashed_admin_password', 'admin'),
    (3, 'Admin', '2', 'admin2@example.com', 'hashed_admin_password', 'admin'),
    (4, 'Employee', '1', 'employee1@example.com', 'hashed_employee_password', 'employee'),
    (5, 'Employee', '2', 'employee2@example.com', 'hashed_employee_password', 'employee'),
    (6, 'Employee', '3', 'employee3@example.com', 'hashed_employee_password', 'employee');

-- Dummy data for SuperAdmins
INSERT INTO SuperAdmins (superAdminId, userId)
VALUES
    (1, 1);

-- Dummy data for Admins
INSERT INTO Admins (adminId, userId)
VALUES
    (2, 2),
    (3, 3);

-- Dummy data for Employees
INSERT INTO Employees (employeeId, userId, departmentId)
VALUES
    (1, 4, 1),
    (2, 5, 1),
    (3, 6, 2);

-- Dummy data for Clients
INSERT INTO Clients (clientId, name, employeeId)
VALUES
    (1, 'Client A', 1),
    (2, 'Client B', 2),
    (3, 'Client C', 3),
    (4, 'Client D', 2);

-- Dummy data for LeaveRequests
INSERT INTO LeaveRequests (leaveRequestId, userId, startDate, endDate, type, status)
VALUES
    (1, 4, '2023-01-10', '2023-01-15', 'Vacation', 'Approved'),
    (2, 5, '2023-01-20', '2023-01-25', 'Sick Leave', 'Pending'),
    (3, 6, '2023-02-05', '2023-02-10', 'Annual Leave', 'Approved');

-- Dummy data for Messages
INSERT INTO Messages (messageId, sender, content, timestamp, userId)
VALUES
    (1, 'John Doe', 'Meeting at 2 PM today.', '2023-01-12 14:00:00', 4),
    (2, 'Jane Smith', 'Project update meeting tomorrow.', '2023-01-13 10:30:00', 5),
    (3, 'David Johnson', 'Team lunch on Friday.', '2023-01-14 12:15:00', 6);
