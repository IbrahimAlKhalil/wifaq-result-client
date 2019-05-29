import {OnInit} from '@angular/core';
import {store} from '../store';
import {Router} from '@angular/router';
import {Input} from '../models/input';

export class MixinFormComponent implements OnInit {
  inputs: Input[];
  url: string;

  constructor(public router: Router) {
  }

  get disabled() {
    return this.inputs.some(input => input.model === undefined || input.model === '');
  }

  async submit() {
    await this.router.navigateByUrl(this.url);
  }

  entered(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.submit();
    }
  }

  ngOnInit(): void {
    store.commit({
      isDrawer: true
    });
  }
}
