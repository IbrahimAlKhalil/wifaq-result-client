import {OnDestroy, OnInit} from '@angular/core';
import {store} from '../store';

export class MixinResult implements OnInit, OnDestroy {
  request: XMLHttpRequest;

  getData(url: string): Promise<any> {
    return new Promise(resolve => {
      const request = this.request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => {
        store.commit({
          loading: false
        });

        resolve(JSON.parse(request.responseText));
      };

      request.send();
    });
  }

  ngOnInit(): void {
    store.commit({
      isDrawer: false,
      loading: true
    });
  }

  ngOnDestroy(): void {
    this.request.abort();
    store.commit({
      loading: false
    });
  }
}
