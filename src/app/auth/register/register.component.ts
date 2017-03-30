import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    providers: [],
    template: require('./register.component.html'),
    directives: [ ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private userService: UserService
        ) { }

    register() {
        // this.loading = true;
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
