var date = new Date();

var dateDependency = new Tracker.Dependency();

Tracker.autorun(function () {
  dateDependency.depend();
  console.log(date);
});

Template.body.events({
  'click button': function() {
    date = new Date();
    dateDependency.changed();
  }
});