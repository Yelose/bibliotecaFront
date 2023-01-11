import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookService } from './book.service';


@Injectable({
  providedIn: 'root',
})
export class MainService {
  public URL: string;

  constructor(
    public http: HttpClient,
    public book: BookService,
  ) {
    this.book.service = this;
    this.URL = 'http://localhost:8080/api';
  }

  public async HttpGet<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};
      let httpParams = new HttpParams();
      for (let param in params) {
        if (params[param] != null) {
          httpParams = httpParams.append(param, params[param].toString());
        } else {
          httpParams = httpParams.append(param, '');
        }
      }

      const options = {
        headers,
        params: httpParams,
      };

      this.http.get<T>(this.URL + url, options).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          let errorMessage =
            'Se ha producido un error, ni su padre lo entiende';
          reject(new Error(errorMessage));
        }
      );
    });
  }

  public async HttpPost<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};

      const options = {
        headers,
      };

      this.http
        .post<T>(this.URL + url, JSON.stringify(params), options)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            let errorMessage =
              'Se ha producido un error, ni su padre lo entiende';
            reject(new Error(errorMessage));
          }
        );
    });
  }

  public async HttpPut<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};

      const options = {
        headers,
      };

      this.http
        .put<T>(this.URL + url, JSON.stringify(params), options)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            let errorMessage =
              'Se ha producido un error, ni su padre lo entiende';
            reject(new Error(errorMessage));
          }
        );
    });
  }

  public async HttpDelete<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};
      let httpParams = new HttpParams();
      for (let param in params) {
        if (params[param] != null) {
          httpParams = httpParams.append(param, params[param].toString());
        } else {
          httpParams = httpParams.append(param, '');
        }
      }

      const options = {
        headers,
        params: httpParams,
      };

      this.http.delete<T>(this.URL + url, options).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          let errorMessage =
            'Se ha producido un error, ni su padre lo entiende';
          reject(new Error(errorMessage));
        }
      );
    });
  }
}