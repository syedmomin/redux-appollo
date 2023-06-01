import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  subComponent = [
    {
      name:'Array Compare',
      url: '/compare',
    },
    {
      name:'Object Compare',
      url: '/compare/compare-object',
    }
  ]
  
}
