import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutsPage;
  tab2Root = AddWorkoutPage ;
  tab3Root = AboutPage;

  constructor() {

  }
}
