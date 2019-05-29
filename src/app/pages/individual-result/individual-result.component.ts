import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {getMarhala} from '../../helpers';
import {MixinResult} from '../../mixins/MixinResult';
import {eventRepo} from '../../event-repo';

@Component({
  selector: 'app-individual-result',
  templateUrl: './individual-result.component.html',
  styleUrls: ['./individual-result.component.scss']
})
export class IndividualResultComponent extends MixinResult implements OnInit {
  student: any = null;
  marhala: string;
  year: number;
  roll: string;

  constructor(public route: ActivatedRoute, public router: Router) {
    super();
  }

  async ngOnInit() {
    super.ngOnInit();

    const params = this.route.snapshot.params;
    const student = await this.getData(`http://${location.hostname}:5000/students/${params.year}/${params.classId}/${params.roll}`);

    if (student.status === 404) {
      eventRepo.emit('no-result');
      return this.router.navigateByUrl('/');
    }

    this.marhala = getMarhala(Number(params.classId));
    this.student = student;
    this.year = params.year;
    this.roll = params.roll;
  }
}
