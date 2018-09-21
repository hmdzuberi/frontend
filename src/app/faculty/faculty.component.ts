import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faculty',
    templateUrl: './faculty.component.html',
    styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

	displayFacultyDetails(x: number) {
        var details = document.getElementById("details");

        switch (x) {
            case 1:
                details.innerHTML = `<h3 id="name">Yaser S. Abu-Mostafa</h3>
            <p id="desig">Professor of Electrical Engineering</p>
            <h4>Degrees and Appointments</h4>
            <p>B.Sc., Cairo University, 1979; M.S.E.E., Georgia Institute of Technology, 1981; Ph.D., Caltech, 1983. Garrett
                Research Fellow in Electrical Engineering, 1983; Assistant Professor, 1983-89; Associate Professor, 1989-94;
                Professor, 1994-2018
            </p>
            <h4>Assistant(s)</h4>
            <p>
                Research Group Matters
                <br>Lucinda Acosta
                <br>150 Moore Laboratory
                <br>626-395-4843
                <br>lucinda@rockford.edu
            </p>
            <h4>Research Overview</h4>
            <p>
                Machine learning applies to any situation where there is data that we are trying to make sense of, and a target function
                that we cannot mathematically pin down. The spectrum of applications is huge, going from financial forecasting
                to medical diagnosis to industrial inspection to recommendation systems, to name a few. The field encompasses
                neural networks, statistical inference, and data mining.
            </p>
            <h4>List of Research Areas</h4>
            <p>
                machine learning, learning theory, computational learning, pattern recognition, neural networks, computational finance, probability
                and statistics
            </p><br>`;
                break;
            case 2:
                details.innerHTML = `<h3 id="name">Jess F. Adkins</h3>
            <p id="desig">Professor of Chemical Engineering</p>
            <h4> Degrees and Appointments</h4>
            <p>
                B.S., Haverford College, 1990; Ph.D., Massachusetts Institute of Technology,
                1998. Assistant Professor, Caltech, 2000-06; Associate Professor, 2006-10; Professor, 2010-16; Smits
                Professor, 2017-18; Rockford University, Head of Environmental Department, 2018-.
            </p>
            <h4>Research Overview</h4>
            <p>
                Professor Adkins focuses on geochemical investigations of past climates using corals, sediments and their interstitial waters;
                Rate of deep ocean circulation and its relation to mechanisms of rapid climate changes; Metals as tracers
                of environmental processes; Radiocarbon and U-series chronology. Chemical oceanography.
            </p>
            <h4>List of Research Areas</h4>
            <p>
                geochemical investigations of past climates using corals, sediments and their interstitial waters, rate of deep ocean circulation
                and its relation to mechanisms of rapid climate changes, metals as tracers of environmental processes,
                radiocarbon and U-series chronology, chemical oceanography
            </p><br>`;
                break;
            case 3:
                details.innerHTML = `<h3 id="name">Aaron Ames</h3>
            <p id="desig">Professor of Mechanical Engineering</p>
            <h4> Degrees and Appointments</h4>
            <p>B.S., University of St. Thomas, 2001; B.A., University of St. Thomas, 2001; M.A., University of California,
                Berkeley, 2006; Ph.D., 2006. Lecturer, Caltech, 2007; Professor, 2017; Bren Professor, 2017-.
            </p>
            <h4>Assistant(s)</h4>
            <p>
                Research Group Matters
                <br>Sonya Lincoln
                <br>250 Gates-Thomas Laboratory
                <br>626-395-3385
                <br>lincolns@caltech.edu
            </p>
            <h4>Research Overview</h4>
            <p>
                Professor Ames’ research interests center on robotics, nonlinear control, hybrid systems and cyber-physical systems, with
                special emphasis on foundational theory and experimental realization on robotic systems; his lab designs,
                builds and tests novel bipedal robots and prosthesis with the goal of achieving human-like bipedal robotic
                walking and translating these capabilities to robotic assistive devices.
            </p><br>`;
                break;
            case 4:
                details.innerHTML = `<h3 id="name">José E. Andrade</h3>
            <p id="desig">Professor of Mechanical Engineering
            </p>
            <h4> Degrees and Appointments</h4>
            <p>B.S., Florida Institute of Technology, 2001; M.S., Stanford University, 2003; PhD, 2006. Assistant Professor,
                Caltech, 2010; Associate Professor, 2010-13; Professor, 2013-17; Housner Professor, 2017-; Drinkward
                Leadership Chair, Department of Mechanical and Civil Engineering, 2017-; Executive Officer, 2016-.
            </p>
            <h4>Assistant(s)</h4>
            <p>
                Research Group Matters
                <br>Jennifer Campbell
                <br>350 Gates-Thomas Laboratory
                <br>626-395-3389
                <br>jenni@caltech.edu
            </p>
            <h4>Research Overview</h4>
            <p>
                Professor Andrade's research focuses on developing a fundamental understanding of the multiscale and multiphysical behaviors
                of porous materials—everything from soils, rocks, and concrete to bone. He also studies the behavior
                of granular materials like sand, snow, and even grain stored in silos. His research has particular applications
                to geologic and engineering infrastructure materials, as well as to the petroleum industry.
            </p>
            <h4>List of Research Areas</h4>
            <p>
                granular materials, geomechanics, carbon sequestration, multiscale modeling
            </p><br>`;
                break;
            case 5:
                details.innerHTML = `<h3 id="name">Domniki Asimaki</h3>
            <p id="desig">
                Professor of Mechanical Engineering
            </p>
            <h4> Degrees and Appointments</h4>
            <p>
                Dipl., National Technical University of Athens, 1998; M.S., Massachusetts Institute of Technology, 2000; Ph.D., 2004. Caltech,
                2014-.
            </p>
            <h4>Assistant(s)</h4>
            <p>
                Research Group Matters
                <br>Carolina Oseguera
                <br>362 Gates-Thomas Laboratory
                <br>626-395-4271
                <br>susta@caltech.edu
            </p>
            <h4>Research Overview</h4>
            <p>
                Professor Asimaki's research combines geotechnical engineering, computational mechanics and structural dynamics to study
                natural ground surface features and man-made geotechnical systems --such as ridges, valleys, dams, tunnels,
                building foundations and offshore structures. One of her research areas is the development of predictive
                models of soil and foundation response to seismic loading, another area is the engineering of 'green'
                foundation solutions for offshore wind farms, which are subjected to complex dynamic loading from wind,
                waves, currents and the cyclical motion of the turbine rotor itself.
            </p>
            <h4>List of Research Areas</h4>
            <p>
                granular materials, geomechanics, carbon sequestration, multiscale modeling
            </p><br>`;
                break;
            default:
                details.innerHTML = "";
        }
    }

}
