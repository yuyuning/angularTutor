import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meatCounter = {'beef': 0, 'pork' : 0, 'chicken': 0, 'lamb': 0};
  vegetableCounter = {'cabbage': 0, 'cucumber': 0, 'potato': 0, 'green pepper': 0};
  isMade = false;
  meatSelected = false;
  vegetableSelected = false;
  meat = 0;
  vegetable = 0;
  food = {'beef': 0, 'pork': 1, 'chicken': 2, 'cabbage': 0, 'cucumber': 1, 'potato': 2};
  count1 = 0;
  count2 = 0;
  foodOrder = [[false, false, false], [false, false, false], [false, false, false]];
  foodList = [['黃瓜炒牛肉', '土豆燉牛肉', '青椒炒牛肉'], ['黃瓜炒雞肉', '白菜炒雞肉', '青椒炒豬肉'], ['黃瓜炒牛肉', '土豆燉牛肉', '炒土豆']];

  meatPlus(i) {
    this.meatSelected = true;
    this.meatCounter[i] ++;
  }

  meatMinus(i) {
    this.meatSelected = true;
    this.meatCounter[i] --;
  }

  meatReset(i) {
    this.meatSelected = false;
    this.meatCounter[i] = 0;
  }

  vegetablePlus(i) {
    this.vegetableSelected = true;
    this.vegetableCounter[i] ++;
  }

  vegetableMinus(i) {
    this.vegetableSelected = true;
    this.vegetableCounter[i] --;
  }

  vegetableReset(i) {
    this.vegetableSelected = false;
    this.vegetableCounter[i] = 0;
  }
  made() {
    this.isMade = true;
  }
  foodMaker() {
    if (this.vegetableSelected === true && this.meatSelected === true && this.isMade === true) {
      return 'right';

    }

  }
}
