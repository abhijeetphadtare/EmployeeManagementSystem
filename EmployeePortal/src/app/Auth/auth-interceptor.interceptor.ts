import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    // private userService:UserService,
    // private toaster: ToastrService,
    // private utilityService: UtilityService,
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let token = this.userService.userRolePermission.authToken;
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    req = req.clone({
      // headers: req.headers.set("Authorization", "Bearer " + token),
    });
 
    var urlInLowerCase = req.url.toLocaleLowerCase()
    // if (!this.sessionUrlService.sessionExcludedURL.includes(urlInLowerCase)) {
    //   var userId = -1;
    //   var permissions = JSON.parse(sessionStorage.getItem('userInfo'));
    //   if (permissions == null)
    //     permissions = {};

    //   if (Object.keys(permissions).length > 0) {
    //     token = permissions.authToken;
    //     userId = permissions.id;
    //   } else if (Object.keys(this.userService.userRolePermission).length > 0) {
    //     token = this.userService.userRolePermission.authToken;
    //     userId = this.userService.userRolePermission.id;
    //   } else {
    //     sessionStorage.removeItem('userInfo');
    //     this.userService.userRolePermission = {};
    //     this.utilityService.showConfirmationMessageWithRedirectURL("SESSION EXPIRED!",
    //       "Your session is expired. Click 'OK' to return to Login Page.", "warning", "/login");
    //     console.clear();
    //     this.spinner.hide();
    //   }


    //   req = req.clone({ headers: req.headers.set('Token', token) });
    //   //req = req.clone({ headers: req.headers.set('UserId', userId.toString()) });
    // }

    return next.handle(req).pipe(tap(
        (event:any) => {
            if (event instanceof HttpResponse) {
      
              if (event.body["statusCode"] == 401) {
                sessionStorage.removeItem('userInfo');
                // this.userService.userRolePermission = {};
                // this.utilityService.showErrorMessage("Your session is expired.");
                console.clear();
                this.router.navigate(['/login']);
              }
      
              // var eventUrl = event.url;
              // if (eventUrl.includes(this.configuration.server))
              //   this.spinner.hide();
            }
          }, (err: any) => {
            if (err.status === 401) {
              sessionStorage.removeItem('userInfo');
              // this.userService.userRolePermission = {};
              // this.utilityService.showErrorMessage("Your session is expired.");
              this.router.navigate(['/login']);
              // console.clear();
            }
          }
    ));
  }
}
