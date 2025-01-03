using EmployeeManagementSystem.Models;

namespace EmployeeManagementSystem.Repository
{
    public interface IEmployeeRepository
    {
        public Task<List<Employee>> GetAllEmployees();
        public Task SaveEmployee(Employee emp);
        public Task UpdateEmployee(Employee emp);
        public Task RemoveEmployee(int id);
    }
}
