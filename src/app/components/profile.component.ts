import { Component } from '@angular/core';
import { GithubServcies } from '../services/github.service'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    private user: any;
    private repos:any[];
    private userName: string;


    constructor(private _githubServcie: GithubServcies) {
        this.user = false;
    }
    searchUser(){
        this._githubServcie.updateUser(this.userName);
        
        this._githubServcie.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this._githubServcie.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
} 