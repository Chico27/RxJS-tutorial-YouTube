import { Component, OnInit } from '@angular/core';
import { interval, of, fromEvent, combineLatest, from } from 'rxjs';
import { filter, tap, first, last, take } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  ngOnInit() {
    // const numbers$ = of(1, 2, 3, 4, 5);

    // numbers$
    //   .pipe(filter(value => value % 2 === 0)) // 偶数のみ通過
    //   .subscribe(result => console.log(`Filtered value: ${result}`));

    // const numbers$ = of(1, 2, 3, 4, 5);

    // numbers$
    //   .pipe(take(3)) // 最初の3つの値を取得
    //   .subscribe(result => console.log(`Taken value: ${result}`));

    // const numbers$ = of(1, 2, 3, 4, 5);

    // numbers$
    //   .pipe(first(value => value > 2)) // 最初に条件を満たす値
    //   .subscribe(result => console.log(`First value: ${result}`));

    // const numbers$ = of(1, 2, 3, 4, 5);

    // numbers$
    //   .pipe(last(value => value % 2 !== 1)) // 最後に条件を満たす値
    //   .subscribe(result => console.log(`Last value: ${result}`));

    // const apiData$ = from([
    //   { id: 1, name: 'Alice' },
    //   { id: 2, name: 'Bob' },
    //   { id: 3, name: 'Charlie' }
    // ]);
    
    // apiData$
    //   .pipe(filter(user => user.id > 1)) // IDが1より大きいデータのみ取得
    //   .subscribe(result => console.log(result));

    // const button = document.getElementById('myButton')!;

    // fromEvent(button, 'click')
    //   .pipe(take(1)) // 最初のクリックだけ取得
    //   .subscribe(() => console.log('Button clicked!'));
  
  }
}
