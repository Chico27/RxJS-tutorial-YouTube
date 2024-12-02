import { Component, OnInit } from '@angular/core';
import { interval, of, fromEvent, combineLatest } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  ngOnInit() {
        // const timer$ = interval(1000); // 1秒ごとに数値を発行するObservable
        // timer$.subscribe(value => console.log(`Timer tick: ${value}`));


        // const numbers$ = of(1, 2, 3, 4, 5); // 配列をObservableに変換

        // numbers$
        //   .pipe(map(value => value * 2)) // 各値に2を掛ける
        //   .subscribe(result => console.log(`Mapped value: ${result}`));


        // const numbers$ = of(1, 2, 3, 4, 5);

        // numbers$
        //   .pipe(filter(value => value % 2 === 0)) // 偶数のみ通過
        //   .subscribe(result => console.log(`Filtered value: ${result}`));


        // const clicks$ = of('Mock Click'); // モックされたクリックイベント
        // const timer$ = interval(1000); // 1秒ごとのタイマー

        // combineLatest([clicks$, timer$])
        //   .subscribe(([click, timer]) => {
        //     console.log(`Click event:`, click);
        //     console.log(`Timer value: ${timer}`);
        //   });

        // const numbers$ = of(1, 2, 3, 4, 5);

        // numbers$
        //   .pipe(
        //     tap(value => console.log(`Before map: ${value}`)), // デバッグログ
        //     map(value => value * 2), // 値を変換
        //     tap(value => console.log(`After map: ${value}`))  // デバッグログ
        //   )
        //   .subscribe(result => console.log(`Final value: ${result}`));
    }
}
