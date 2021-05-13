import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class HttpHelperService {

  private appendHeadersOrParams(params: object = {}, data: HttpParams | HttpHeaders): HttpParams | HttpHeaders {
    if (params) {
      Object.keys(params).forEach((key) => {
        data = data.append(key, params[key]);
      });
    }
    return data;
  }

  public createRequestHeaders(data: any): HttpHeaders {
    return this.appendHeadersOrParams(data, new HttpHeaders()) as HttpHeaders;
  }

  public createRequestParams(data: any): HttpParams {
    return this.appendHeadersOrParams(data, new HttpParams()) as HttpParams;
  }

}
