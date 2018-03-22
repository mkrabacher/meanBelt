import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient) { }

    add(newPet) {
        console.log('adding pet in service');
        return this._http.post('/addPet', newPet);
    }

    getPets() {
        console.log('getting pets in service');
        return this._http.get('/allPets');
    }

    getPet(id) {
        console.log('getting pet in service', id);
        return this._http.post('/getPet', {_id: id});
    }

    likePet(pet) {
        console.log('likeing pet in service', pet);
        return this._http.post('/likePet', pet);
    }

    update(editPet) {
        console.log('updateing pet in service');
        return this._http.post('/updatePet', editPet);
    }

    deletePet(pet) {
        console.log('deleteing pet in service');
        return this._http.post('/deletePet', pet);
    }
}
