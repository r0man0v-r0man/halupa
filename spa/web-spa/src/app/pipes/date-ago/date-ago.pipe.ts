import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      
      
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'только что';
      
      const intervals = {
          'год': 31536000,
          'месяц': 2592000,
          'неделя': 604800,
          'день': 86400,
          'час': 3600,
          'минута': 60,
          'секунда': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          
          if (counter > 0){
            console.info('counter: ', counter, 'seconds: ', seconds, 'interval: ', i);
            
            if (counter === 1) {
              return counter + ' ' + i + ' назад'; // singular (1 day ago)
            } else {
                return counter + ' ' + i + 's назад'; // plural (2 days ago)
            }
          }
            

              
      }
    }
    return value;
  }

}
