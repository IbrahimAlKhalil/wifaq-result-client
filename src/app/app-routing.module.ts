import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {IndividualFormComponent} from './pages/individual-form/individual-form.component';
import {MadrasaWiseFormComponent} from './pages/madrasa-wise-form/madrasa-wise-form.component';
import {MedhaTalikaFormComponent} from './pages/medha-talika-form/medha-talika-form.component';
import {MadrasaStatFormComponent} from './pages/madrasa-stat-form/madrasa-stat-form.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualFormComponent
  },

  {
    path: 'madrasas/:elhaq/:year/:classId',
    component: MadrasaWiseFormComponent
  },

  {
    path: 'medha-talika/:year/:classId/:gender',
    component: MedhaTalikaFormComponent
  },

  {
    path: 'madrasas/:elhaq/stat',
    component: MadrasaStatFormComponent
  },

  {
    path: 'statistics',
    component: StatisticsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [RouterModule],
  declarations: [IndividualFormComponent, MadrasaWiseFormComponent, MedhaTalikaFormComponent, MadrasaStatFormComponent, StatisticsComponent]
})
export class AppRoutingModule {
}
