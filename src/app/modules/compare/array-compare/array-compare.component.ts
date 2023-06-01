import { Component } from '@angular/core';

@Component({
  selector: 'app-array-compare',
  templateUrl: './array-compare.component.html',
  styleUrls: ['./array-compare.component.scss'],
})
export class ArrayCompareComponent {
  checkValidation:any
  constructor() {}

  notEmpty(event: any) {
    let errorBox = document.getElementById(`error${event.id}`);
    if (event.value == '') {
      event.style.border = '2px solid #ff2929';
      return;
    } else {
      event.style.border = '1px solid white';
      this.checkValidation = this.validateInput(event.value);
      if (this.checkValidation) {
        (errorBox as HTMLTextAreaElement).innerText = "";
      } else {
        (errorBox as HTMLTextAreaElement).innerText = `invalid Content in ${event.id}`;
      }
    }
  }

  validateInput(input: any) {
    try {
      const parsedInput = JSON.parse(input);
      if (Array.isArray(parsedInput)) {
        return true;
      } else if (typeof parsedInput === 'object') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  compareData(){

  }

}
