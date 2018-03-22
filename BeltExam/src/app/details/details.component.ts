import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    pet;
    liked;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.liked = false;
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log('pet id :', params['id']);
            this.getPetThroughService(params['id']);
        });
    }

    getPetThroughService(id) {
        console.log('getting pet');
        const observable = this._httpService.getPet(id);
        observable.subscribe(data => {
            console.log(data);
            if (data['errorMsg']) {
                this._router.navigate([`/dashboard`]);
            }
            this.pet = data['pet'];
        });
    }

    likePetThroughService() {
        console.log('likeing pet');
        const observable = this._httpService.likePet(this.pet);
        observable.subscribe(data => {
            console.log(data);
            this.liked = true;
            this.getPetThroughService(data['pet']);
        });
    }

    deletePetThroughService() {
        console.log('deleteing pet');
        const observable = this._httpService.deletePet(this.pet);
        observable.subscribe(data => {
            console.log(data);
            this._router.navigate([`/dashboard`]);
        });
    }
}
