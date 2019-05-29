import {Component} from '@angular/core';
import {Input} from '../../models/input';
import {Years} from '../../data/years';
import {marhalaInputs} from '../../data/marhalas';
import {Router} from '@angular/router';
import {MixinFormComponent} from '../../mixins/MixinFormComponent';

@Component({
  selector: 'app-madrasa-wise-form',
  templateUrl: './madrasa-wise-form.component.html'
})
export class MadrasaWiseFormComponent extends MixinFormComponent {
  constructor(router: Router) {
    super(router);
  }

  inputs: Input[] = [
    Years, marhalaInputs,
    new Input('ইলহাক', 'text')
  ];

  get url() {
    return `madrasas/${this.inputs[2].model.replace(/\//gm, '@')}/${this.inputs[0].model}/${this.inputs[1].model}`;
  }
}
