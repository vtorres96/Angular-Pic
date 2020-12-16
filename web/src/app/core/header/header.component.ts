import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

    public user$: Observable<User>;

    constructor(private userService: UserService,
                private router: Router) {
        this.user$ = this.userService.getUser();
    }

    ngOnInit() {
    }

    public logout(): void {
        this.userService.logout();
        this.router.navigate([ '' ]);
    }

}
