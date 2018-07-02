// Create your own Event Tracker system:
//
// 1. create an `EventTracker` object
//    • it should accept a name when constructed
const EventTracker = function (name) {
  this.name = name;
  this._events = [];
  this._notify = [];

// 2. extend the `EventTracker` prototype with:
//    • an `on` method
//    • a `notify` method
//    • a `trigger` method
};
EventTracker.prototype.on = function (event, callback) {
    if (this._events[event] == undefined) {
        this._events[event] = [];
    }
    this._events[event].push(callback);
};
EventTracker.prototype.notify = function (obj, event) {
    if (this._notify[event] == undefined) {
        this._notify[event] = [];
    }
    this._notify[event].push(obj);
};
EventTracker.prototype.trigger = function (event, data) {
    var allCallBacks = this._events[event] || 0;
    var allNotifications = this._notify[event] || 0;
    var i;

    for (i = 0; i < allCallBacks.length; i++) {
        allCallBacks[i].call(this, data);
    }

    for (i = 0; i < allNotifications.length; i++) {
        allNotifications[i].trigger(event, data);
    }
};



//
// EXAMPLE:
function purchase(item) { console.log( 'purchasing ' + item); }
function celebrate() { console.log( this.name + ' says birthday parties are awesome!' ); }

var nephewParties = new EventTracker( 'nephews ');
var richard = new EventTracker( 'Richard' );

nephewParties.on( 'mainEvent', purchase );
richard.on( 'mainEvent', celebrate );
nephewParties.notify( richard, 'mainEvent' );

nephewParties.trigger( 'mainEvent', 'ice cream' );
