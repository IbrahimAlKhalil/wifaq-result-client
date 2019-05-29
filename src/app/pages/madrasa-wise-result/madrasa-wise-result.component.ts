import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {store} from '../../store';
import {getMarhala} from '../../helpers';
import {MixinResult} from '../../mixins/MixinResult';

@Component({
  selector: 'app-madrasa-wise-result',
  templateUrl: './madrasa-wise-result.component.html',
  styleUrls: ['./madrasa-wise-result.component.scss']
})
export class MadrasaWiseResultComponent extends MixinResult implements OnInit {
  year: string;
  marhala: string;
  result: any = null;

  constructor(public router: ActivatedRoute) {
    super();
  }

  async ngOnInit() {
    super.ngOnInit();
    const params = this.router.snapshot.params;

    const result = await this.getData(`http://${location.hostname}:5000/madrasas/${params.elhaq}/${params.year}/${params.classId}`);
    this.marhala = getMarhala(Number(params.classId));
    this.year = params.year;
    this.result = result;
  }
}
