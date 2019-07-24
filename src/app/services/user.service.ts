import { HttpClient,HttpHeaders } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
export class UserService {




  constructor(private http:HttpClient) {



   }

   getUsers():any{
     this.http.get('http://localhost:8000/api/getusers',{responseType: 'json'}).subscribe((resdata)=>

     
              console.log(resdata)
     
     )
   }


   authenticateuser(email:string,password:string){
     this.http.post('http://localhost:8000/api/afterlogin',{email:email,password:password}).subscribe((resdata)=>
     {
       console.log(resdata);
     }
     )

   }


  
  }