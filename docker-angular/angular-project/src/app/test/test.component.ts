import { Component, OnInit } from '@angular/core';
import { interval, of, fromEvent, combineLatest, take } from 'rxjs';
import { map, filter, tap, mergeMap, switchMap, delay, concatMap, debounceTime } from 'rxjs/operators';

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
      //   .pipe(map(value => value * 2))
      //   .subscribe(result => console.log(`Mapped value: ${result}`));


      // const numbers$ = of(1, 2, 3);

      // numbers$
      //   .pipe(mergeMap(value => of(`${value}: processed`)))
      //   .subscribe(result => console.log(result));

      // const numbers$ = of(1, 2, 3);

      // numbers$
      //   .pipe(switchMap(value => of(`Processed: ${value}`).pipe(delay(1000))))
      //   .subscribe(result => console.log(result));

      // const numbers$ = of(1, 2, 3);

      // numbers$
      //   .pipe(concatMap(value => of(`Processed: ${value}`).pipe(delay(1000))))
      //   .subscribe(result => console.log(result));


      // if (typeof document !== 'undefined') {
      //   const searchInput = document.getElementById('search')!;

      //   fromEvent(searchInput, 'input')
      //     .pipe(
      //       debounceTime(1000), // 入力の遅延
      //       switchMap(event => {
      //         const query = (event.target as HTMLInputElement)!.value;
      //         return of(`Searching for: ${query}`); // モック検索結果
      //       })
      //     )
      //     .subscribe(result => console.log(result));
      // }

      // const numbers$ = of(1, 2, 3);

      // numbers$
      //   .pipe(
      //     mergeMap(value =>
      //       of(`Processed: ${value}`).pipe(
      //         delay(Math.random() * 1000) // 処理時間をランダム化
      //       )
      //     )
      //   )
      //   .subscribe(result => console.log(result));

      // const numbers$ = of(1, 2, 3);

      // numbers$
      //   .pipe(
      //     concatMap(value =>
      //       of(`Processed: ${value}`).pipe(
      //         delay(Math.random() * 1000) // 処理時間をランダム化
      //       )
      //     )
      //   )
      //   .subscribe(result => console.log(result));

  }
}
