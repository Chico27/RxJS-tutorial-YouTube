import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  ngOnInit() {
    const apiRequest$ = ajax('https://pokeapi.co/api/v2/pokemon/1');

    apiRequest$
      .pipe(
        retry(2), // 最大2回まで再試行
        catchError(err => {
          console.error('API Error:', err);
          return of({ data: [] }); // 空のデータを返す
        })
      )
      .subscribe(response => console.log('API Response:', response));
  }
}
