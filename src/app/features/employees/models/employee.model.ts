export type Country = 'India' | 'USA' | 'UK' | 'Other';

export interface Employee {
  id: string;
  name: string;
  Country: Country;
  Salary: number;
  Status: 'Active' | 'Inactive';
  Department: string;
  Role: string;
  Email: string;
  Phone: string;
  Location: string;
  WorkLocation: 'Office' | 'Remote' | 'Hybrid';
  JoiningDate: string;
  Manager: string;
  EmploymentType: 'Full-time' | 'Part-time' | 'Contract';
}
export const employees: Employee[] = [
  {
    id: '1',
    name: 'Ankit Kumar',
    Country: 'India',
    Salary: 2400000,
    Status: 'Active',
    Department: 'IT',
    Role: 'Software Engineer',
    Email: 'ankit.kumar@globalpay.com',
    Phone: '+91 98765 43210',
    Location: 'Mumbai, India',
    WorkLocation: 'Hybrid',
    JoiningDate: '2022-04-18',
    Manager: 'Rahul Sharma',
    EmploymentType: 'Full-time'
  },
  {
    id: '2',
    name: 'John Smith',
    Country: 'USA',
    Salary: 95000,
    Status: 'Active',
    Department: 'Finance',
    Role: 'Accountant',
    Email: 'john.smith@globalpay.com',
    Phone: '+1 415 555 0198',
    Location: 'New York, USA',
    WorkLocation: 'Office',
    JoiningDate: '2021-08-09',
    Manager: 'Michael Johnson',
    EmploymentType: 'Full-time'
  },
  {
    id: '3',
    name: 'David Brown',
    Country: 'UK',
    Salary: 72000,
    Status: 'Active',
    Department: 'Finance',
    Role: 'Software Engineer',
    Email: 'david.brown@globalpay.com',
    Phone: '+44 7700 900123',
    Location: 'London, UK',
    WorkLocation: 'Remote',
    JoiningDate: '2023-01-16',
    Manager: 'James Wilson',
    EmploymentType: 'Full-time'
  }
];