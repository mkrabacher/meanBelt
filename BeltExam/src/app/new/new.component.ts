import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newPet;
    errorMsg;
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) {
        this.newPet = {
            name: '',
            type: '',
            description: '',
            skills: ['', '', ''],
        };
    }

    ngOnInit() {
    }

    addThroughService() {
        console.log('adding pet');
        const observable = this._httpService.add(this.newPet);
        observable.subscribe(data => {
            console.log('added', data);
            if (data['error']) {
                this.errorMsg = 'we already have a pet with this name in our shelter. sorry you pet cant come in.';
            } else {
                this._router.navigate(['/dashboard']);
            }
        });
    }

}
