const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    {id: 3, name: 'Bob Jhonson', age: 35, department: 'Finance', salary: 60000 },
    
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
const totalEmployees = employees
.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
.join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSaleries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: &&{totalSalaries}`);
}