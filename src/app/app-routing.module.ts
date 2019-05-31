import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
import {IndividualFormComponent} from './pages/individual-form/individual-form.component';
import {MadrasaWiseFormComponent} from './pages/madrasa-wise-form/madrasa-wise-form.component';
import {MedhaTalikaFormComponent} from './pages/medha-talika-form/medha-talika-form.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {IndividualResultComponent} from './pages/individual-result/individual-result.component';
import {ToBnPipe} from './pipes/to-bn.pipe';
import {MadrasaWiseResultComponent} from './pages/madrasa-wise-result/madrasa-wise-result.component';
import {MedhaTalikaComponent} from './pages/medha-talika/medha-talika.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualFormComponent
  },

  {
    path: 'madrasas',
    component: MadrasaWiseFormComponent
  },

  {
    path: 'medha-talika',
    component: MedhaTalikaFormComponent
  },


  {
    path: 'students/:year/:classId/:roll',
    component: IndividualResultComponent
  },

  {
    path: 'madrasas/:elhaq/:year/:classId',
    component: MadrasaWiseResultComponent
  },

  {
    path: 'medha-talika/:year/:classId/:gender',
    component: MedhaTalikaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatCardModule, MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    MatProgressBarModule, MatIconModule
  ],
  exports: [RouterModule],
  declarations: [
    IndividualFormComponent,
    MadrasaWiseFormComponent,
    MedhaTalikaFormComponent,
    IndividualResultComponent,
    ToBnPipe,
    MadrasaWiseResultComponent,
    MedhaTalikaComponent
  ]
})
export class AppRoutingModule {
}
