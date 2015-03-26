<!-- This file is a part of the example you can delete it anytime your good to go ...-->

if(Meteor.isClient){

  Session.setDefault('counter', 0);

  Template.ExampleMsg.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.ExampleMsg.events({
    'click button': function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
