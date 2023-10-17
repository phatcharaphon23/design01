import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  async POST(URL: string, BODY: any, OPTIONS: string) {
    return await new Promise((resolve, reject) => {
      let options = {};

      switch (OPTIONS) {
        case 'none':
          options = {
            headers: new HttpHeaders().set(
              'Content-Type',
              'application/x-www-form-urlencoded'
            ),
          };
          break;
        case 'json':
          options = {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
          };
          break;
        default: {
          break;
        }
      }

      this.httpClient.post(URL, BODY, options).subscribe({
        next: (data: any) => {
          if (data && data.success) {
            resolve(data.message);
          } else {
            reject(data && data.message);
          }
        },
        error: (error) => {
          console.log(error);
          let error_description =
            error.error != null
              ? ' [' + error.error.error_description + ']'
              : '';
          reject(error.status + ' ' + error.statusText + error_description);
        },
      });
    });
  }
}
