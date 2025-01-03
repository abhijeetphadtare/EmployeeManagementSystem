using EmployeeManagementSystem.Repository;
using EmployeeManagementSystem.Models;

namespace EmployeeManagementSystem.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository employee;

        public EmployeeService(IEmployeeRepository _employee)
        {
            employee = _employee;
        }
        public Task<List<Employee>> GetAllEmployees()
        {
           return employee.GetAllEmployees();
        }

        public Task RemoveEmployee(int id)
        {
            return employee.RemoveEmployee(id);
        }

        public Task SaveEmployee(Employee emp)
        {
            return employee.SaveEmployee(emp);
        }

        public Task UpdateEmployee(Employee emp)
        {
            return employee.UpdateEmployee(emp);
        }
    }
}