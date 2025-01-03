using EmployeeManagementSystem.Data;
using EmployeeManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementSystem.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext db;
        public EmployeeRepository(AppDbContext DbContext)
        {
            this.db = DbContext;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await db.Employees.ToListAsync();
        }

        public async Task SaveEmployee(Employee emp)
        {
            await db.Employees.AddAsync(emp);
            await db.SaveChangesAsync();
        }

        public async Task UpdateEmployee(Employee emp)
        {
            var employee = await db.Employees.FirstOrDefaultAsync(x => x.Id == emp.Id);

            if (employee == null)
            {
                throw new Exception("Employee is not found");
            }

            employee.Id = emp.Id;
            employee.Name = emp.Name;
            employee.Email = emp.Email;
            employee.Salary = emp.Salary;
            employee.Mobile = emp.Mobile;
            employee.Age = emp.Age;

            await db.SaveChangesAsync();
        }

        public async Task RemoveEmployee(int id)
        {
            var emp = await db.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (emp == null)
            {
                throw new Exception("Employee Not Found");
            }
            db.Employees.Remove(emp);
            await db.SaveChangesAsync();
        }
    }
}
