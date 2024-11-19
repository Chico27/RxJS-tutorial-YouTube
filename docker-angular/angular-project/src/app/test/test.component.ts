import { Component, OnInit } from '@angular/core';
import { Observable, of, from, Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  ngOnInit() {
    const customObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    });
    customObservable.subscribe(value => console.log(value));

    const numbers = of(1, 2, 3, 4, 5);
    numbers.subscribe(value => console.log(value));

    const array = from([10, 20, 30]);
    array.subscribe(value => console.log(value));

    const cold = from([1, 2, 3]);
    cold.subscribe(value => console.log('Subscriber 1:', value));
    cold.subscribe(value => console.log('Subscriber 2:', value));

    const hot = new Subject();
    hot.subscribe(value => console.log('Subscriber 1:', value));
    hot.subscribe(value => console.log('Subscriber 2:', value));
    hot.next(1);
    hot.next(2);
  }
}
