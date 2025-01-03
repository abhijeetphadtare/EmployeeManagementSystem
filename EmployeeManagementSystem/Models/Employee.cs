using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagementSystem.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Mobile { get; set; }
        public int Age { get; set; }
        public double Salary { get; set; }
        public bool Status { get; set; }
        public int? DepartmentId { get; set; }
    }
}