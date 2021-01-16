import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      
      if (seconds < 59) // less than 30 seconds ago will show as 'Just now'
          return 'только что';
      
      const intervals = {
          'год': 31536000,
          'месяц': 2592000,
          'неделя': 604800,
          'день': 86400,
          'час': 3600,
          'минута': 60
      };
      let counter;
      for (const interval in intervals) {
        counter = Math.floor(seconds / intervals[interval]);
        if (counter > 0){
          if(interval === 'год'){
            if(counter === 1)return counter + ' год назад';
            if(counter === 2 || counter === 3)return counter + ' года назад';
            if(counter > 3)return 'очень давно';
          }
          if(interval === 'месяц'){
            if(counter === 1)return 'месяц назад';
            if(counter >= 2 && counter <=4 )return counter + ' месяца назад';
            if(counter > 4)return counter + ' месяцев назад';
          }
          if(interval === 'неделя'){
            if(counter === 1)return 'неделю назад';
            if(counter === 2 || counter === 3 || counter === 4)return counter + ' недели назад';
          }
          if(interval === 'день'){
            if(counter === 1)return 'вчера';
            if(counter === 2 || counter === 3 || counter === 4)return counter + ' дня назад';
            if(counter > 4)return counter + ' дней назад';
          }
          if(interval === 'час'){
            if(counter === 1) return 'час назад';
            if(counter === 2 || counter === 3 || counter === 4)return counter + ' часа назад';
            if(counter > 4 && counter <= 20)return counter + ' часов назад';
            if(counter === 21)return counter + ' час назад';
            if(counter > 21)return counter + ' часа назад';
          }
          if(interval === 'минута'){
            if(counter === 1) return 'минуту назад';
            if(counter >= 2 && counter <= 4) return counter + ' минуты назад';
            if(counter > 4 && counter <=20)return counter + ' минут назад';
            if(counter === 21)return counter + ' минуту назад';
            if(counter >= 22 && counter <= 24)return counter + ' минуты назад';
            if(counter >= 25 && counter <=30)return counter + ' минут назад';
            if(counter === 31)return counter + ' минуту назад';
            if(counter >= 32 && counter <= 34)return counter + ' минуты назад';
            if(counter >= 35 && counter <=40)return counter + ' минут назад';
            if(counter === 41)return counter + ' минуту назад';
            if(counter >= 42 && counter <= 44)return counter + ' минуты назад';
            if(counter >= 45 && counter <=50)return counter + ' минут назад';
            if(counter === 51)return counter + ' минуту назад';
            if(counter >= 52 && counter <= 54)return counter + ' минуты назад';
            if(counter >= 55 && counter <=60)return counter + ' минут назад';
          }
        }      
      }
    }
    return value;
  }

}
