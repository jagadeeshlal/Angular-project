import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var config = {
  "link": "https://www.factweavers.com:7777/mailer/sendMail/",
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  title: string = "Angular _version"
  constructor(private http: HttpClient) { }

  sendEmailService(params) {
    return this.http.post<any>(config.link, params).pipe(map(response => {
      return response
    }))
  }
}
