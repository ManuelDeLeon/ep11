Session.setDefault("date", new Date());

Tracker.autorun(function () {
  var date = Session.get("date");
  console.log(date);
});

Template.body.events({
  'click button': function() {
    Session.set("date", new Date());
  }
});