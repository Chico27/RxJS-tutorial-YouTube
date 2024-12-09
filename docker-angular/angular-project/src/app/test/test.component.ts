import { Component, OnInit } from '@angular/core';
import { of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { retry, catchError, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  ngOnInit() {
    const apiRequest$ = ajax('https://pokeapi.co/api/v2/pokem2on/1');

    apiRequest$
      .pipe(
        retry({
          count: 3, // 最大3回まで再試行
          delay: (error, retryCount) => {
            console.log(`Retrying... Attempt: ${retryCount}`);
            return timer(2000); // 2秒待って再試行
          }
        }),
        catchError(err => {
          console.error('API Error:', err);
          return of({ data: [] }); // 空のデータを返す
        })
      )
      .subscribe(response => console.log('API Response:', response));
  }
}
