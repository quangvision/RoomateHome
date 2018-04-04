import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class I18NService {
    i18nSubject = new Subject<string>()
    constructor() { 
        console.log('i18n service init')        
    }
    changeLanguage(language :string) {
        this.i18nSubject.next(language)
    }
}