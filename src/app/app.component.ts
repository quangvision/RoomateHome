import { getItem, getSession, removeSession, setSession } from '../x/storage/storage';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    /**
     *
     */
    constructor(
    ) {

    }
    public ngOnInit(): void {
        
    }

    public ngOnDestroy(): void {
        // console.log(getItem('user'))
        // removeSession()
    }
}