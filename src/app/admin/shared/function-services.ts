import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FunctionService {
    constructor(
        private http: Http, ) { }
    GetPreviousDate(days:number) {
        var todayDate = new Date()
        todayDate.setDate(todayDate.getDate() - days)
        var convertDay = todayDate.getDate(),
            convertMonth = todayDate.getMonth() + 1,
            convertYear = todayDate.getFullYear(),
            fullDate = convertDay + '/' + convertMonth + '/' + convertYear;
        return fullDate
    }
}