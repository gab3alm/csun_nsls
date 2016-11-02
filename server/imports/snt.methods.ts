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
    sendAuthCodeNotification(founder);
  },

  //add member to SNT group
  addToSntGroup: function(id:string, member:snt_member){
    SNTgroups.update({'_id':id}, {$addToSet : 
      { 'members' : member} 
    });
    sendAuthCodeNotification(member);
    newSntMemberNotification(id, member, "A new member has joined your Success Networking Team!");  
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
            text: message + " SENT BY - " + members[i].firstname + " " + members[i].lastname,
          });
        }
      }
    }
  }
});


// send email to entire team when new member joins their SNT group.
function newSntMemberNotification(group_id:string, member:snt_member, email_subject:string){
  // get members of the group
  var members = SNTgroups.find({'_id':group_id}).fetch()[0].members;
  for(var i =0; i < members.length; i++){
    // send email to member that is not the current addition to the group
    if(members[i].auth_Code != member.auth_Code){
      Email.send({
        to:members[i].email,
        from:'csun-nsls',
        subject:email_subject,
        text: "Name: " + member.firstname + " " + member.lastname + " has joined your Success Networking Team, please contact your new member at their email address " + member.email
      });    
    }
  }
}

// send email containing Auth Code to new member
function sendAuthCodeNotification(member:snt_member){
  Email.send({
    to:member.email,
    from:'csun-nsls',
    subject:"Success Networking Team Auth Code",
    text: "Hello " + member.firstname + ", We are so happy to see that you have joined/created a Success Networking Team. Here is your Auth Code, " + member.auth_Code + ". With this code, you will be able to send emails to your entire SNT group within the csun-nsls website, please keep in mind that this code will also allow you to remove your information from this SNT group if at some point you decide to leave. We hope you have a wonderful time in your SNT group."
  });
}