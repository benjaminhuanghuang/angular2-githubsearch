import { Component } from '@angular/core';
import { GithubServcies } from '../services/github.service'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    private user: any[];

    constructor(private _githubServcie: GithubServcies) {
        this._githubServcie.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });
    }
} 