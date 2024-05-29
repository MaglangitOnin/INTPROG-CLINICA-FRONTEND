import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    account: any;

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        // Initialize the account property in the ngOnInit lifecycle hook
        this.account = this.accountService.accountValue;
    }
}
