import { HttpClient } from '@angular/common/http';


interface User{
 
        firstName:string,
        lastName:string,
        email:string,
        password:string  

}

export class SignupService {




  constructor(private http: HttpClient) { }


  AddUser(user:User) {
     return this.http.post<any>('http://localhost:8080/api/addusers', user)
  }

}

