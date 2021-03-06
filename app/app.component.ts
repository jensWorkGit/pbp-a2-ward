import { Component } from 'angular2/core';

// import { CustomerService } from './customer/customer.service';
// import { CustomersComponent } from './customer/customers.component';

// here is my barrel // future i would just import './customer'
import { CustomersComponent, CustomerService } from './customer/index';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [CustomersComponent],
  providers: [CustomerService]
})
export class AppComponent {
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
