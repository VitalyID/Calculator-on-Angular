import { Component } from '@angular/core';

class ArrInput {
  symbol: string = '';
  getLastSign() {
    return [
      this.symbol.slice(-1),
      this.symbol.slice(0, -1),
      true
        ? this.symbol.slice(-1) === '+' ||
          this.symbol.slice(-1) === '-' ||
          this.symbol.slice(-1) === '*' ||
          this.symbol.slice(-1) === '/'
        : false,
    ];
  }
}

@Component({
  selector: 'app-simple-calc',
  standalone: false,

  templateUrl: './simple-calc.component.html',
  styleUrl: './simple-calc.component.scss',
})
export class SimpleCalcComponent {
  public tmp: string = '';
  public first: number = 0;
  public second: number = 0;
  public operation: string = '';
  public result: number = 0;

  inputUser(event: Event) {
    let item = new ArrInput();
    item.symbol = (<HTMLInputElement>event.target).value;
    // console.log(item);
    let arrData = item.getLastSign();
    console.log(arrData);
    if (arrData[2] === true) {
      console.log(this.first, ' ', typeof this.first);
      if (this.first !== 0) {
        // если значение first уже есть(второй раз нажимают на символ операции), то производится расчет и результат сохраняется в first
        // this.first = Number(this.tmp);
        // this.tmp = '';
        // this.counting();
        // document.querySelector('input')?.focus();
        // document.querySelector('input')?.select();
      } else {
        this.first = Number(arrData[1]);
        this.operation = String(arrData[0]);
        this.tmp = '';
        console.log(
          'Сохранено: Первое значение - ',
          this.first,
          ' операция - ',
          this.operation
        );
        document.querySelector('input')?.focus();
        document.querySelector('input')?.select();
      }
    }
  }

  clickOperation(event: Event) {
    let itemFromMouse = new ArrInput();
    itemFromMouse.symbol =
      this.tmp + (<HTMLInputElement>event.target).textContent;
    // console.log(this.tmp);

    let arrData = itemFromMouse.getLastSign();
    if (arrData[2] === true) {
      this.first = Number(arrData[1]);
      this.operation = String(arrData[0]);
      this.tmp = '';
      console.log(
        'Сохранено: Первое значение - ',
        this.first,
        ' операция - ',
        this.operation
      );
      document.querySelector('input')?.focus();
      document.querySelector('input')?.select();
    }
  }

  counting() {
    console.log('start counting');
    console.log(this.tmp);
    this.second = Number(this.tmp);

    console.log(this.second);
    switch (this.operation) {
      case '+': {
        this.tmp = String(this.first + this.second);
        break;
        // return (this.tmp = String(this.result));
      }
      case '-': {
        this.tmp = String(this.first - this.second);

        // this.result = this.first - this.second;
        break;
      }
      case '*': {
        this.tmp = String(this.first * this.second);

        // this.result = this.first * this.second;
        break;
      }
      case '/': {
        this.tmp = String(this.first / this.second);

        // this.result = this.first / this.second;
        break;
      }
    }
    // console.log(this.result);
    // this.tmp = String(this.result);
  }

  inputUserCount() {
    this.counting();
  }
}
