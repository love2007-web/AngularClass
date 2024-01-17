import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public username = 'Daniel';
  public details: any = [];
  public showInput = false;
  public carName = '';
  public infoToBeUpdated: any;
  public updatedInfo: any;
  public updated1: any;
  public isUpdated = false;
  public updatedCarName: any = '';
  public updatedPrice: any;
  public updatedQuantity: any;
  public price = '';
  public quantity = '';
  public name = '';
  public panelOpenState = false;
  public slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOninit() {
    alert('hello');
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
  }

  submitForm() {
    let data = {
      name: this.carName,
      price: this.price,
      quantity: this.quantity,
    };
    this.details.push(data);
    console.log(this.details);
  }
  del(i: any) {
    this.details.splice(i, 1);
  }
  edit(i: any) {
    this.showInput = true;
    this.infoToBeUpdated = this.details[i];
    this.updated1 = i;
    console.log(this.infoToBeUpdated);
    if (this.isUpdated == true) {
      this.details[i] = this.updatedInfo;
    }
  }
  update(updated1: number) {
    let updated = {
      name: this.updatedCarName,
      price: this.updatedPrice,
      quantity: this.updatedQuantity,
    };
    this.updatedInfo = updated;
    console.log(this.updatedInfo);
    this.isUpdated = true;
    this.details.splice(updated1, 1, updated);
    console.log(this.details);
    this.showInput = false;
  }
  saveName() {
    const existingName = window.localStorage.getItem('name');
    if (existingName) {
      window.localStorage.setItem('name', existingName + ', ' + this.name);
    } else {
      window.localStorage.setItem('name', this.name);
    }
  }
  getName() {
    window.localStorage.getItem('name');
  }
}
