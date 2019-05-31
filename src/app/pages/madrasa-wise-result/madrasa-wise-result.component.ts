import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  subjectCount: number;
  preparePrint: (event: KeyboardEvent) => void;
  @ViewChild('elm') elm: ElementRef<HTMLDivElement>;

  constructor(public router: ActivatedRoute) {
    super();

    this.preparePrint = (event) => {
      if (event.key === 'p' && event.ctrlKey) {
        event.preventDefault();
        this.print();
      }
    };
  }

  print() {
    const container = document.getElementById('main-elm');
    const parent = this.elm.nativeElement.parentElement;
    const sibling = this.elm.nativeElement.nextElementSibling;
    const elm = document.adoptNode(this.elm.nativeElement);

    container.style.display = 'none';
    document.body.insertBefore(elm, document.body.firstElementChild);
    window.print();
    document.body.removeChild(elm);
    parent.insertBefore(elm, sibling);
    container.style.display = 'block';
  }

  async ngOnInit() {
    super.ngOnInit();
    const params = this.router.snapshot.params;

    const result = await this.getData(`http://${location.hostname}:5000/madrasas/${params.elhaq}/${params.year}/${params.classId}`);
    this.marhala = getMarhala(Number(params.classId));
    this.year = params.year;
    this.result = result;
    this.subjectCount = result.subjects.length;
    const style = document.createElement('style');
    style.innerHTML = `
    @page {
  size: landscape;}
    `;
    document.head.appendChild(style);
    window.addEventListener('keydown', this.preparePrint);
  }
}
