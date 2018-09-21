import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Hamaad';

    ngOnInit() {
        if (window.localStorage.getItem("name")) {
            document.getElementById("userGreet").innerHTML = "Welcome, " + window.localStorage.getItem("name");
        }
    }

}
