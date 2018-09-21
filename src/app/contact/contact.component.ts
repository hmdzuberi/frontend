import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor() { }
    
    //run 'npm i --save @types/googlemaps' on command prompt
    ngOnInit() {
        var mapCanvas = document.getElementById("map_canvas");
        if (navigator.geolocation) {
            var coords = new google.maps.LatLng(42.268339, -89.018673);
            var mapOptions = {
                zoom: 10,
                center: coords,
                mapTypeControl: false,
                //navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                title: "Rockford University"
            });
        }
        else {
            mapCanvas.setAttribute("hidden", "true");
        }
    }

}
