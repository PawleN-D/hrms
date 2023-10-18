export default interface LeaveRequest {
    id: string;
    startDate: string;
    endDate: string;
    type: string;
    status: string;
}
  
export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
}
  
export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
}
  
export default interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    bio: string;
    twitterHandle: string;
    favorite: boolean;
    leaveDays: number;
    startDate: string;
    leaveRequests: LeaveRequest[];
    tasks: Task[];
    messages: Message[];
    position: string;
    role: string;
    department: string;
    salary: number;
    hourlyRate: number;
    employeeImage: string;
    email: string;
    password: string;
}

