import { Component } from '@angular/core';
class DataFromInput {
  symbol: string = '';
  getValueFromInput() {
    // Reading the input und gettin array groups, separated between self by operation sigh

    // console.log(this.symbol, typeof this.symbol);
    let arrFromString = this.symbol.split('');
    // console.log(arrFromString);

    const middleResult: string[] = [];
    let currentNumber = '';

    for (const char of arrFromString) {
      if (/[0-9]/.test(char)) {
        // Если символ - цифра, добавляем ее к текущему числу
        currentNumber += char;
      } else {
        // Если символ не цифра
        if (currentNumber !== '') {
          middleResult.push(currentNumber); // Добавляем накопленное число в результат
          currentNumber = ''; // сбрасываем накопленное число
        }
        middleResult.push(char); // Добавляем нецифровой символ в результат
      }
    }

    if (currentNumber !== '') {
      middleResult.push(currentNumber); // Добавляем последнее накопленное число если оно есть
    }

    return middleResult;
  }
}

@Component({
  selector: 'app-simple-calc',
  standalone: false,

  templateUrl: './simple-calc.component.html',
  styleUrl: './simple-calc.component.scss',
})
export class SimpleCalcComponent {
  public tmp: string = '0';
  private result: number = 0;
  private newData: string = '0';
  private getArrOfLineFromInput: string[] = [];
  private indexes: number = 0;
  private count: number = 0;

  inputUser(event: Event) {
    let newData = new DataFromInput();
    // console.log(event.type);

    if (event.type === 'click') {
      // console.log('click');
      newData.symbol = this.tmp;
      this.getArrOfLineFromInput = newData.getValueFromInput();
      // console.log(this.getArrOfLineFromInput);
    } else {
      newData.symbol = (<HTMLInputElement>event.target).value;
      this.getArrOfLineFromInput = newData.getValueFromInput();
      // console.log(this.getArrOfLineFromInput);
    }

    // Производим все умножения в данных с импута
    while (true) {
      this.indexes = this.getArrOfLineFromInput.indexOf('*');
      // console.log('индекс умножения: ', this.indexes);
      if (this.indexes === -1) {
        break;
      }

      let multiply: number =
        Number(this.getArrOfLineFromInput[this.indexes - 1]) *
        Number(this.getArrOfLineFromInput[this.indexes + 1]);
      this.getArrOfLineFromInput.splice(this.indexes - 1, 3, String(multiply));
      // console.log(this.getArrOfLineFromInput);
    }
    // Производим все деления в данных с импута
    while (true) {
      this.indexes = this.getArrOfLineFromInput.indexOf('/');
      // console.log('индекс деления: ', this.indexes);
      if (this.indexes === -1) {
        break;
      }

      let multiply: number =
        Number(this.getArrOfLineFromInput[this.indexes - 1]) /
        Number(this.getArrOfLineFromInput[this.indexes + 1]);
      this.getArrOfLineFromInput.splice(this.indexes - 1, 3, String(multiply));
      // console.log(this.getArrOfLineFromInput);
    }
    // Производим все сложения в данных с импута
    while (true) {
      this.indexes = this.getArrOfLineFromInput.indexOf('+');
      // console.log('индекс сложения: ', this.indexes);
      if (this.indexes === -1) {
        break;
      }

      let multiply: number =
        Number(this.getArrOfLineFromInput[this.indexes - 1]) +
        Number(this.getArrOfLineFromInput[this.indexes + 1]);
      this.getArrOfLineFromInput.splice(this.indexes - 1, 3, String(multiply));
      // console.log(this.getArrOfLineFromInput);
    }
    // Производим все вычитания в данных с импута
    while (true) {
      this.indexes = this.getArrOfLineFromInput.indexOf('-');
      // console.log('индекс деления: ', this.indexes);
      if (this.indexes === -1) {
        break;
      }

      let multiply: number =
        Number(this.getArrOfLineFromInput[this.indexes - 1]) -
        Number(this.getArrOfLineFromInput[this.indexes + 1]);
      this.getArrOfLineFromInput.splice(this.indexes - 1, 3, String(multiply));
      // console.log(this.getArrOfLineFromInput);
    }
    if (this.getArrOfLineFromInput.length > 1) {
      this.tmp = 'Error. We have a lot of elements in result array';
    } else {
      this.tmp = this.getArrOfLineFromInput[0];
    }
  }

  private dataLine: string = '0';
  clickOnBtnOperation(event: Event) {
    this.dataLine = this.tmp;
    // console.log((<HTMLInputElement>event.target).textContent);
    this.dataLine =
      this.dataLine + String((<HTMLInputElement>event.target).textContent);
    this.tmp = this.dataLine;
    document.querySelector('input')?.focus();
    document.querySelector('input')?.select();
  }
}
