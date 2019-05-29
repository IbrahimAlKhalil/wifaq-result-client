type Handler = (payload: any) => void;

export class EventRepo {
  private handlers = {} as {
    [index: string]: Handler[]
  };

  emit(event, payload?: any): void {
    if (!this.handlers.hasOwnProperty(event)) {
      return;
    }

    for (const handler of this.handlers[event]) {
      handler(payload);
    }
  }

  on(event: string, handler: Handler): void {
    if (this.handlers.hasOwnProperty(event)) {
      this.handlers[event].push(handler);
      return;
    }

    this.handlers[event] = [handler];
  }
}

export const eventRepo = new EventRepo();
