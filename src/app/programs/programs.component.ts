import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-programs',
    templateUrl: './programs.component.html',
    styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

    constructor() {
    }

    myWorker: Worker;
    currentCurrency: string;
    prices;

    form = new FormGroup({
        currencySelect: new FormControl
    })



    ngOnInit() {
        if (typeof (Worker) != undefined) {
            this.myWorker = new Worker("../assets/worker.js");
            this.myWorker.addEventListener("message", this.workerMessage, true);
        }

        this.prices = [, "20000.00", "21000.00", "21000.00", "13000.00", "13500.00"];

        this.fillCanvas();
        this.calculatePrices();
    }



    fillCanvas() {
        var canvas, ctx;
        var canvasText1 = ["Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Economics", "Humanities"];
        var canvasText2 = ["4", "4", "4", "2", "2"];
        var canvasText3 = ["ME 11 abc. Thermal Science", "EE 1. The Science of Data, Signals, and Information",
            "Ch/ChE 9. Chemical Synthesis and Characterization for Chemical Engineering", "Ec 11. Introduction to Economics",
            "Hum/H 1. American History"];
        var canvasText4 = ["ME 12 abc. Mechanics", "EE 13. Electronic System Prototyping", "ChE 10. Introduction to Chemical Engineering",
            "Ec 97. Undergraduate Research.", "Hum/H 3. The United States in the Twentieth Century"];
        var canvasText5 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Pellentesque tristique libero et tortor sagittis, ut sodales nisi.",
            "Donec rutrum elit eu risus tempor, sed vulputate tortor egestas.",
            "Nulla tempus odio nec justo dignissim, ac eleifend felis dictum.",
            "Vestibulum suscipit augue sit amet elementum venenatis."];
        var canvasText6 = ["Donec pretium neque id enim iaculis faucibus.",
            "Maecenas eleifend orci at varius imperdiet.",
            "Nunc eu risus ornare, convallis ligula at, sagittis arcu.",
            "Suspendisse finibus quam at condimentum tincidunt.",
            "Sed placerat massa ut dui varius vehicula."]

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#000000";

        ctx.font = "bold 19px Terbuchet MS";
        ctx.textAlign = "left";
        ctx.fillText("Campus Programs", 15, 40);

        var y = 80;
        for (var i = 1; i <= 3; i++) {
            ctx.font = "bold 17px Terbuchet MS";
            ctx.fillText(canvasText1[i - 1], 20, y);

            ctx.font = "normal 15px Terbuchet MS";
            ctx.fillText("Course length: " + canvasText2[i - 1] + " years", 30, y + 20);
            ctx.fillText(canvasText3[i - 1], 30, y + 40);
            ctx.fillText(canvasText4[i - 1], 30, y + 60);
            ctx.fillText(canvasText5[i - 1], 30, y + 80);
            ctx.fillText(canvasText6[i - 1], 30, y + 100);

            y += 140;
        }

        y += 40;
        ctx.font = "bold 19px Terbuchet MS";
        ctx.textAlign = "left";
        ctx.fillText("Online Programs", 15, y);

        y += 40;
        for (var i = 4; i <= 5; i++) {
            ctx.font = "bold 17px Terbuchet MS";
            ctx.fillText(canvasText1[i - 1], 20, y);

            ctx.font = "normal 15px Terbuchet MS";
            ctx.fillText("Course length: " + canvasText2[i - 1] + " years", 30, y + 20);
            ctx.fillText(canvasText3[i - 1], 30, y + 40);
            ctx.fillText(canvasText4[i - 1], 30, y + 60);
            ctx.fillText(canvasText5[i - 1], 30, y + 80);
            ctx.fillText(canvasText6[i - 1], 30, y + 100);

            y += 140;
        }
    }

    calculatePrices() {
        var curr = "1";
        for (let i = 1; i <= 5; i++) {
            let temp = "$" + this.prices[i];
            document.getElementById("price" + i).innerText = temp;
        }
    }

    workerMessage(e) {
        console.log("Data received")
        var rate = parseFloat(e.data.rate);
        var updatedPrice, temp;
        var prices = [, "20000.00", "21000.00", "21000.00", "13000.00", "13500.00"];
        var curr = e.data.currency;

        function symbol(cur) {
            switch (cur) {
                case "1":
                    return "$";
                case "2":
                    return "€";
                case "3":
                    return "CAD ";
                default:
                    return "";
            }
        }

        for (var i = 1; i <= 5; i++) {
            updatedPrice = parseFloat(prices[i]) * rate;
            document.getElementById("price" + i).innerText = symbol(curr) + updatedPrice.toFixed(2);
        }
    }

    selectHandler(form: any) {
        var data = form.controls["currencySelect"].value;

        this.myWorker.postMessage(data);
        console.log("Message posted to Worker")

        this.currentCurrency = data;
    }
}
