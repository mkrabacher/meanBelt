import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    pets;
    constructor(private _httpService: HttpService) {
        this.pets = [];
    }

    ngOnInit() {
        this.getPetsThroughService();
    }

    getPetsThroughService() {
        console.log('getting pets');
        const observable = this._httpService.getPets();
        observable.subscribe(data => {
            console.log('pets', data);
            this.pets = data['pets'];
        });
    }
}
