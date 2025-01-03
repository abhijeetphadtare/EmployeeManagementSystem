import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsServiceService {

  private actionUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.actionUrl = "";
   }

   public getAll<T>(actionURL: string, processField: any): Observable<T> {
    var processFields = JSON.stringify(processField);
    return this.http.get<T>(this.actionUrl + actionURL, {
      params: {
        processFields,
      },
    });
  }

  public getAllWithoutSpinner<T>(actionURL: string, processField: any): Observable<T> {
    var processFields = JSON.stringify(processField);
    return this.http.get<T>(this.actionUrl + actionURL, {
      params: {
        processFields,
      },
    });
  }

  public getBanks<T>(actionURL: string, processField: any): Observable<T> {
    var processFields = JSON.stringify(processField);
    console.log("processFields", processFields);
    return this.http.get<T>(this.actionUrl + actionURL, {
      params: {
        processFields,
      },
    });
  }

  public get<T>(actionURL: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + actionURL);
  }

  public getSingle<T>(actionURL: string, id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + actionURL + id);
  }

  public getAllById<T>(actionURL: string, processField: any): Observable<T> {
    var processFields = JSON.stringify(processField);
    return this.http.get<T>(this.actionUrl + actionURL, {
      params: {
        processFields,
      },
    });
  }

  public getAllByProcessFields<T>(
    actionURL: string,
    processField: any
  ): Observable<T> {
    var processFields = JSON.stringify(processField);
    return this.http.get<T>(this.actionUrl + actionURL, {
      params: {
        processFields,
      },
    });
  }

  public add<T>(actionURL: string, itemToAdd: any): Observable<T> {
    return this.http.post<T>(this.actionUrl + actionURL, itemToAdd);
  }


  public addWithoutSpinner<T>(
    actionURL: string,
    itemToAdd: any
  ): Observable<T> {
    return this.http.post<T>(this.actionUrl + actionURL, itemToAdd);
  }

  public update<T>(
    actionURL: string,
    id: number,
    itemToUpdate: any
  ): Observable<T> {
    return this.http.put<T>(this.actionUrl + actionURL + id, itemToUpdate);
  }

  public delete<T>(actionURL: string, id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + actionURL + id);
  }

  public deleteByProcessFields<T>(
    actionURL: string,
    processField: any
  ): Observable<T> {
    return this.http.post<T>(this.actionUrl + actionURL, processField);
  }

  //by BR
  public updateStatus<T>(actionURL: string, processField: any): Observable<T> {
    return this.http.post<T>(this.actionUrl + actionURL, processField);
  }

  private sub = new Subject();
  subj$ = this.sub.asObservable();
}
