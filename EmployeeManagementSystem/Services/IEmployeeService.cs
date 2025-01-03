using EmployeeManagementSystem.Repository;
using EmployeeManagementSystem.Models;

namespace EmployeeManagementSystem.Services
{
    public interface IEmployeeService
    {
        public Task<List<Employee>> GetAllEmployees();
        public Task SaveEmployee(Employee emp);
        public Task UpdateEmployee(Employee emp);
        public Task RemoveEmployee(int id);
    }
}
