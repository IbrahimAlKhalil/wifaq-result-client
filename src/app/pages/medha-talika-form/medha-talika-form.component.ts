import {Component} from '@angular/core';
import {Input} from '../../models/input';
import {Years} from '../../data/years';
import {marhalaInputs} from '../../data/marhalas';
import {Router} from '@angular/router';
import {MixinFormComponent} from '../../mixins/MixinFormComponent';

@Component({
  selector: 'app-medha-talika-form',
  templateUrl: './medha-talika-form.component.html'
})
export class MedhaTalikaFormComponent extends MixinFormComponent {
  constructor(router: Router) {
    super(router);
  }

  inputs: Input[] = [
    Years, marhalaInputs,
    new Input('লিঙ্গ', 'select', [
      {
        id: 1,
        name: 'পুরুষ'
      },
      {
        id: 0,
        name: 'মহিলা'
      }
    ])
  ];

  get url() {
    return `/medha-talika/${this.inputs[0].model}/${this.inputs[1].model}/${this.inputs[2].model}`;
  }
}
