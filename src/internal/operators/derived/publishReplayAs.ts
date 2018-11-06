import { multicastAs } from 'rxjs/internal/operators/multicastAs';
import { Observable } from 'rxjs/internal/Observable';
import { OperatorFunction, ObservableInput } from 'rxjs/internal/types';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

export function publishReplayAs<T, R>(project: (published: Observable<T>) => ObservableInput<R>): OperatorFunction<T, R>;
export function publishReplayAs<T, R>(bufferSize: number, project: (published: Observable<T>) => ObservableInput<R>): OperatorFunction<T, R>;
export function publishReplayAs<T, R>(bufferSize: number, windowTime: number, project: (published: Observable<T>) => ObservableInput<R>): OperatorFunction<T, R>;
export function publishReplayAs<T, R>(arg1: any, arg2?: any, arg3?: any): OperatorFunction<T, R> {
  const project = arguments[arguments.length - 1];
  const bufferSize = arguments.length >= 2 ? arg1 : Number.POSITIVE_INFINITY;
  const windowTime = arguments.length >= 3 ? arg2 : Number.POSITIVE_INFINITY;
  return multicastAs(new ReplaySubject(bufferSize, windowTime), project);
}