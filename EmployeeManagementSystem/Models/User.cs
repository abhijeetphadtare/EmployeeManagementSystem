﻿namespace EmployeeManagementSystem.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class AuthResponse
    {
        public string Token { get; set; }
    }
}
