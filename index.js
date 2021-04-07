function Employee(name, title, id, email, tel) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email;
    this.tel = tel;
    this.employeeList = () => {
        console.log(`Employee Name: ${this.name}, Employee Job Title: ${this.title}, Employee ID No.${this.id}, Employee eMail:${this.email}, Employee Telephone:${this.tel}`);
    }
}

const jim = new Employee('Jim Mama', 'Manager', 1, 'jim@jim.com', '555-555-1212');
const joe = new Employee('Joe Mama', 'Director', 2, 'joe@joe.com', '555-555-1213');
const jane = new Employee('Jane Doe', 'Lead Programmer', 3, 'jane@jane.com', '555-555-1214');
const suzy = new Employee('Suzy Jones', 'Programmer', 4, 'suzy@suzy.com', '555-555-1215');

jim.employeeList();
joe.employeeList();
jane.employeeList();
suzy.employeeList();
