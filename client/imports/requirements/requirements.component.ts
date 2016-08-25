import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

import template from './requirements.html';
@Component({
  selector:'requirements',
  template,
  styleUrls:['styles/requirements.css'],
  directives:[NgClass]
})

export class RequirementsComponent implements OnInit{
  inductionSteps:Array<StepCard>;
  nelaSteps:Array<StepCard>;
  flipCard:boolean = false; 
  
  constructor(){}

  ngOnInit(){
    var InductionStep1 = new StepCard('induction1', false,'images/induction/orientation.png' ,'orientation day', 'attend 1 orientation day event', 'Orientation Day introduces you to what this Chapter is all about. Aside of meeting your fellow members and Chapter leaders, you get a peak into the values and expectations that the socity uphelds. Furthermore, the steps towards induction are introduced. This is the moment in which you get to have your questions answered.');
    var InductionStep2 = new StepCard('induction2', false,'images/induction/ltd.png', 'leadership training day', 'attend 1 leadership training day event', 'Leadership Training Day is an important event in your requirements towards induction. During this event you discover your leadership values and skills. You learn ways in which to improve them in order to communicate with different types of individuals. Furthermore, you get to form your SNT group.');
    var InductionStep3 = new StepCard('induction3', false,'images/induction/broadcast.png', 'speaker broadcast', 'attend 3 speaker broadcast events', 'Speaker Broadcast are interviews of celebrities about what their path to success was. The hardships that they faced in order to achieve their success. You get to see how their leadership skills affected their success in their corresponding fields.');
    var InductionStep4 = new StepCard('induction4', false,'images/induction/snt.png', 'success networking team', 'attend 3 success networking team meetings', 'Success Networking Team Meetings are held on your own time. You group of 4 to 6 people is formed during your LTD event. During SNT meetings, your group members set a reasonable goal that they want to accomplish within a certain time frame. With every meeting, group members discuss the hardships or success that they have faced while trying to achieve their goal.');
    this.inductionSteps = [InductionStep1, InductionStep2, InductionStep3, InductionStep4];


    var NelaStep1 = new StepCard('nela1', false,'images/induction/broadcast.png', 'Speaker Broadcasts', 'attend 3 additional speaker broadcasts', 'Complete 3 additional Speaker Broadcasts (6 in total, counting those of induction) ');
    var NelaStep2 = new StepCard('nela2', false,'images/induction/snt.png', 'Success Networking Team Meetings', 'attend 3 additional SNT meetings', 'Complete 3 additional SNT Meetings (6 in total, counting those of induction) ');
    var NelaStep3 = new StepCard('nela3', false,'images/induction/community.png', 'Community Service', '5 hours of community service', 'Complete 5 hours of community service. You can volunteer at any organization that you wish. Just make sure to get your hours documented.');
    this.nelaSteps = [NelaStep1, NelaStep2, NelaStep3];
  }

  cardMotion(card:string, flip:boolean){
    // Look in induction steps
    for(var i =0 ; i < this.inductionSteps.length; i++){
      if(this.inductionSteps[i].step == card){
        this.inductionSteps[i].flip = !this.inductionSteps[i].flip; 
      }
    }
    // Look in Nela steps
    for(var i =0 ; i < this.nelaSteps.length; i++){
      if(this.nelaSteps[i].step == card){
        this.nelaSteps[i].flip = !this.nelaSteps[i].flip; 
      }
    }
  }

}    

class StepCard{
  constructor(public step:string, public flip:boolean, public image:string, public title:string, public requirement:string, public description:string){}
}