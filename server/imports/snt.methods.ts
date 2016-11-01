import {Meteor} from 'meteor/meteor';
import {SNTgroups} from '../../both/collections/snt';
import {sntGroupModel} from '../../both/models/snt_group_model';
import {snt_member} from '../../both/classes/snt_member'
import {Email} from 'meteor/email';

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

  // send groups message to group's members
  sendGroupMessageEmail: function(auth_code:string, members:snt_member[], message:string){
    // Check if auth_code is legit
    for(var i =0 ; i < members.length; i++){
      // If code is legit, then we start sending messages to everyone's emails
      if(members[i].auth_Code == auth_code){
        for(var j = 0; j < members.length; j++){
          this.unblock();
          Email.send({
            to: members[j].email,
            from: members[i].firstname + " " + members[i].lastname,
            subject: 'SNT Group Message',
            text: message
          });
        }
      }
    }
  }
});