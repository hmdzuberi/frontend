import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        if (window.localStorage.getItem("name")) {
            document.getElementById("table1").setAttribute("hidden", "true");
            document.getElementById("salut").removeAttribute("hidden");
            document.getElementById("btn2").removeAttribute("hidden");

            document.getElementById("salutspan").innerHTML = window.localStorage.getItem("course");
            document.getElementById("userGreet").innerHTML = "Welcome, " + window.localStorage.getItem("name");
        }

    }

    form = new FormGroup({
        course: new FormControl(),
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });

    validation(form: any) {
        var courseV = form.controls["course"].value;
        var nameV = form.controls["name"].value;
        var emailV = form.controls["email"].value;
        var phoneV = form.controls["phone"].value;

        var errorElements = document.getElementsByClassName("error");
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].innerHTML = "";
        }

        if (courseV == "") {
            errorElements[0].innerHTML = "Please select a course";
            return false;
        }

        if (nameV == "") {
            errorElements[1].innerHTML = "Please enter your name";
            return false;
        }

        if (emailV == "") {
            errorElements[2].innerHTML = "Please enter your email address";
            return false;
        } else if (!this.form.controls["email"].valid) {
            errorElements[2].innerHTML = "Please enter a valid email address";
            return false;
        }

        if (phoneV == "") {
            errorElements[3].innerHTML = "Please enter your phone number";
            return false;
        } else {
            var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
            var validPhone = regex.test(phoneV);
            if (!validPhone) {
                errorElements[3].innerHTML = "Please enter a valid phone number";
                return false;
            }
        }

        return true;
    }

    registerHandler(form: any) {
        if (this.validation(form)) {
            var courseV = form.controls["course"].value;
            var nameV = form.controls["name"].value;

            window.localStorage.setItem("name", nameV);
            window.localStorage.setItem("course", courseV);

            document.getElementById("userGreet").innerHTML = "Welcome, " + nameV;
            document.getElementById("salutspan").innerHTML = courseV;
            document.getElementById("table1").setAttribute("hidden", "true");
            document.getElementById("salut").removeAttribute("hidden");
            document.getElementById("btn2").removeAttribute("hidden");
        }

    }

    anotherCourse(form: any) {
        form.patchValue({
            course: "",
            name: "",
            email: "",
            phone: ""
        });

        document.getElementById("table1").removeAttribute("hidden");
        document.getElementById("salut").setAttribute("hidden", "true");
        document.getElementById("btn2").setAttribute("hidden", "true");
    }

}
