import { Component } from '@angular/core';
import { EmployeeDetailsServiceService } from './employee-details-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
    constructor( private dataService: EmployeeDetailsServiceService ){

    }

    login() {
      var processFields = {

      }
      this.dataService.add("user/newlogin", processFields).subscribe(
        (data: any) =>{
          
        }
        );
    }
}
