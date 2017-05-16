import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'page-add-workout ',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
title;
note;
type;
workoutService;
result;
nav;

  static get parameters(){
      return [[NavController], [WorkoutService]];
  }

  constructor(nav, workoutService, public navCtrl: NavController) {
    this.nav = nav;
    this.workoutService = workoutService;
  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    // Add Workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    }, err => console.log(err), () => console.log('Workout Added'));

    this.nav.setRoot(WorkoutsPage);
  }

}
