import {Component} from '@angular/core';
import {Input} from '../../models/input';
import {Years} from '../../data/years';
import {marhalaInputs} from '../../data/marhalas';
import {Router} from '@angular/router';
import {MixinFormComponent} from '../../mixins/MixinFormComponent';

@Component({
  selector: 'app-individual-form',
  templateUrl: './individual-form.component.html'
})
export class IndividualFormComponent extends MixinFormComponent {
  constructor(router: Router) {
    super(router);
  }

  inputs: Input[] = [
    Years, marhalaInputs,
    new Input('রোল', 'number')
  ];

  get url() {
    return `students/${this.inputs[0].model}/${this.inputs[1].model}/${this.inputs[2].model}`;
  }
}
