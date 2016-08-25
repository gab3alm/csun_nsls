import {Component} from '@angular/core';
import {SliderComponent} from './slider.component';
import {Valuecard} from '../../../both/classes/valuecard';
import {ValuecardComponent} from './value-card.component';


import template from './welcome.html';
@Component({
  selector:'welcome',
  template,
  directives:[SliderComponent, ValuecardComponent]
})

export class WelcomeComponent{
  valuecard1:Valuecard;
  valuecard2:Valuecard;
  valuecard3:Valuecard;
  valuecard4:Valuecard;

  constructor(){
    this.valuecard1 = new Valuecard('discover', 'images/values/discover.svg', 'Discover what kind of leader you are. Take a DISC assessment and find out your strengths', 'https://www.societyleadership.org/members/disc');
    this.valuecard2 = new Valuecard('learn', 'images/values/learning.svg', 'Learn new leadership skills. Discover how to communicate with different types of people.', 'https://www.societyleadership.org/sites/default/files/resources/LTD_Participant_Workbook_Final.pdf');
    this.valuecard3 = new Valuecard('practice', 'images/values/practice.svg', 'Sharpen your new found skills. Hone them to reach your maximum potential. Join our Eboard!', 'https://www.societyleadership.org/members/run-chapter/executive-board/videos');
    this.valuecard4 = new Valuecard('achieve', 'images/values/achieve.svg', 'You are now ready to accomplish any goal that you set yourself to achieve. Go out there and turn them into reality.', 'https://societyleadership-csm.symplicity.com/students/index.php?signin_tab=0');
  }
}



