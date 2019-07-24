import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/models/users.model';
import { map } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();


  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getUsers(): any {
    this.http.get('http://localhost:8000/api/getusers', { responseType: 'json' }).subscribe((resdata) =>


      console.log(resdata)

    )
  }


  authenticateuser(email: string, password: string) {

    return this.http.post<any>('http://localhost:8000/api/afterlogin', { email: email, password: password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));

  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }



}