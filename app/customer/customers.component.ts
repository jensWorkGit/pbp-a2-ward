import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    customers:Observable<any[]>;
    //customers: any[];

    constructor(private _customerService:CustomerService) {
    }

    ngOnInit() {
        // Rx observable version with subscribe function to a customer array
        this._customerService.getCustomers_RxObservable()
            .subscribe(// it worked
                (customers) => this.customers = customers, // error
                (err) => {
                    console.log(err);
                });
    
    }
}
