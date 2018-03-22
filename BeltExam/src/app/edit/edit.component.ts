import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    editPet;
    errorMsg;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log('pet id :', params['id']);
            this.getPetThroughService(params['id']);
        });
    }

    updateThroughService() {
        console.log('updating pet');
        const observable = this._httpService.update(this.editPet);
        observable.subscribe(data => {
            console.log('updated', data);
            if (data['err']) {
                this.errorMsg = 'we already have a pet with this name in our shelter. sorry you pet cant come in.';
            } else {
                console.log(data['pet']['_id']);
                this._router.navigate([`/details/${data['pet']}`]);
            }
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
            this.editPet = data['pet'];
        });
    }

}
