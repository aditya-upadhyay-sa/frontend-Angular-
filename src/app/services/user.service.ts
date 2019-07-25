import { HttpClient, HttpHeaders } from '@angular/common/http';



// @Injectable({
//   providedIn: 'root'
// })
export class UserService {



  constructor(private http: HttpClient) {


  }

  getUsers(): any {
    return this.http.get('http://localhost:8080/api/getusers', { responseType: 'json' })
  }


  authenticateuser(email: string, password: string) {

    return this.http.post<any>('http://localhost:8080/api/afterlogin', { email: email, password: password })  
    

  }
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
      
  }



}