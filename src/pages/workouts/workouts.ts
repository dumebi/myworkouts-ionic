import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {
  workoutService;
  workouts;
  navParams;
  nav;

  static get parameters(){
    return [[NavController], [NavParams], [WorkoutService]];
  }

  constructor(nav, navParams, workoutService) {
    this.nav = nav;
    this.navParams = navParams;
    this.workoutService = workoutService;

    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout){
    this.nav.push(WorkoutDetailsPage, {
      workout:workout
    });
  }
}
