import { Injectable } from '@angular/core';
import { Request } from '../CLASSES/request';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  allRequests: Request[] = [];
  constructor() {}
  newRequest = (request: Request): boolean => {
    this.allRequests.push(request);
    return true;
  };
  getAll() {
    return this.allRequests;
  }

  findUserById(requestId) {
    return this.allRequests.filter(request => request._id === requestId);
  }
  blockRequest(requestId) {
    this.allRequests = this.allRequests.map(request => {
      if (request._id === requestId) {
        request.status = 'blocked';
      }
      return request;
    });
    console.log(this.allRequests);
  }
  grantRequest(requestId) {
    this.allRequests = this.allRequests.map(request => {
      if (request._id === requestId) {
        request.status = 'granted';
      }
      return request;
    });
    console.log(this.allRequests);
  }
}
