import {Meteor} from 'meteor/meteor';
import {SNTgroups} from '../../both/collections/snt';
import {sntGroupModel} from '../../both/models/snt_group_model';
import {snt_member} from '../../both/classes/snt_member'

Meteor.methods({
  // Create new SNT group
  createSntGroup: function(group_name:string, auth_code:string, founder:snt_member){
    var date = new Date().toString();
    SNTgroups.insert({
      'group_name': group_name,
      'createdAt': date,
      'group_size': 1,
      'auth_code': auth_code,
      'members':[founder]
    });
  },

  //add member to SNT group
  addToSntGroup: function(id:string, member:snt_member){
    SNTgroups.update({'_id':id}, {$addToSet : 
      { 'members' : member} 
    });  
  },
});