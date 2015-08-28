var reactiveDate = function (date) {
  if (!this._dep) {
    this._dep = new Tracker.Dependency();
  }

  if (arguments.length) {
    if (date !== this._value) {
      this._value = date;
      this._dep.changed();
    }
  } else {
    this._dep.depend();
  }
  return this._value;
};

Tracker.autorun(function () {
  var date = reactiveDate();
  console.log(date);
});

Template.body.events({
  'click button': function() {
    reactiveDate(new Date());
  }
});