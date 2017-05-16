import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from "../workouts/workouts";


@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [WorkoutService]
})
export class WorkoutDetailsPage {
  workout;
  navParams;
  nav;
  result;
  workoutService;

  static get parameters(){
    return [[NavController], [NavParams], [WorkoutService]];
  }

  constructor(nav, navParams, workoutService) {
      this.workoutService = workoutService;
      this.nav = nav;
      this.navParams = navParams;
      this.workout = this.navParams.get('workout');

  }

  deleteWorkout(id){
    this.workoutService.deleteWorkout(id).subscribe(data => {
      this.result = data;
    }, err => console.log(err), () => console.log('Workout Deleted'));

    this.nav.setRoot(WorkoutsPage);
  }


}
