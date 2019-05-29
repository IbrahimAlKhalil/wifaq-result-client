export type Subscriber = (state: any) => void;

export class NoRxJS {
  private subscribers: Subscriber[] = [];

  constructor(public currentState: any) {
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  commit(state: any) {
    setTimeout(() => {
      this.currentState = {...this.currentState, ...state};
      this.subscribers.forEach(subscriber => {
        subscriber(this.currentState);
      });
    }, 1);
  }
}
