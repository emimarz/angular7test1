import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: [
        './app.component.css'
    ],
    //encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    constructor(private router: Router) {
        let path: string;
        console.log(path);
        /*path = window.location.pathname.toString();
        if (path != '/') {
            this.router.navigate(path.substring(1));
        }*/
    }
}