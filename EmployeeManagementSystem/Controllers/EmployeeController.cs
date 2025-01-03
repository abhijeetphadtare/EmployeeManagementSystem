using EmployeeManagementSystem.Models;
using EmployeeManagementSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService employeeService;
        public EmployeeController(IEmployeeService _employeeService) { 
         
            this.employeeService = _employeeService;
        }

        [HttpGet]
        [Route("getallemployee")]
        public async Task<ActionResult<IList<Employee>>> GetAllEmployees()
        {
            var result = employeeService.GetAllEmployees();
            return Ok(result);
        }

        [HttpPost]
        [Route("savemployee")]
        public async Task<IActionResult> SaveEmployee([FromBody] Employee emp)
        {
            employeeService.SaveEmployee(emp);
            return Ok("saved");
        }

        [HttpPut]
        [Route("updateemployee")]
        public async Task<IActionResult> UpdateEmployee([FromBody] Employee emp)
        {
            employeeService.UpdateEmployee(emp);
            return Ok("Updated");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveEmployee(int id)
        {
            employeeService.RemoveEmployee(id);
            return Ok("Removed Sucessfully");
        }
    }
}