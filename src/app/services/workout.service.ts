import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()


export class WorkoutService{
  apiKey = '';
  workoutsUrl = '';
  http;

  static get parameters(){
    return [Http];
  }

  constructor(http){
    this.http = http;
    this.apiKey = 'WviwxQT-0xndGkl_BGXo7ZpiN00s1X4h';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/workout/collections/workouts';

  }

  getWorkouts(){
      return this.http.get(this.workoutsUrl+"?apiKey="+this.apiKey).map(res => res.json());
  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers:headers }).map(res => res.json);
  }

  deleteWorkout(id){
    return this.http.delete(this.workoutsUrl+"/"+id+"?apiKey="+this.apiKey).map(res => res.json());
  }
}
