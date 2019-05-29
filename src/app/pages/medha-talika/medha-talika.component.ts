import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {store} from '../../store';
import {getMarhala} from '../../helpers';

interface Student {
  madrasa: string;
  name: string;
  position: number;
  roll: number;
  total: number;
}

@Component({
  selector: 'app-medha-talika',
  templateUrl: './medha-talika.component.html',
  styleUrls: ['./medha-talika.component.scss']
})
export class MedhaTalikaComponent implements OnInit, OnDestroy {
  request: XMLHttpRequest;
  year: string;
  marhala: string;
  madrasas: {
    [index: string]: string
  };
  students: Student[];

  constructor(public router: ActivatedRoute) {
  }

  ngOnInit() {
    store.commit({
      isDrawer: false,
      loading: true
    });

    const params = this.router.snapshot.params;

    const request = this.request = new XMLHttpRequest();
    request.open('GET', `http://${location.hostname}:5000/medha-talika/${params.year}/${params.classId}/${params.gender}`);
    request.onload = () => {
      store.commit({
        loading: false
      });

      this.marhala = getMarhala(Number(params.classId));
      this.year = params.year;
      const result = JSON.parse(request.responseText);
      this.madrasas = {};


      result.madrasas.forEach(madrasa => {
        this.madrasas[madrasa._id] = madrasa.name;
      });
      this.students = result.students;
    };
    request.send();
  }

  ngOnDestroy(): void {
    this.request.abort();
  }
}
