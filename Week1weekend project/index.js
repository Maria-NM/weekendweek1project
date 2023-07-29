// Create a constructor function for the Event object
function Event(title, date, location) {
  this.title = title;
  this.date = date;
  this.location = location;
  this.attendees = new Set();
}

// Function to add attendees to an event
Event.prototype.addAttendee = function (attendee) {
  this.attendees.add(attendee);
};

// Create an array to store the events
const events = [];

// Create Event objects and add them to the events array
const event1 = new Event("Conference", new Date("2023-08-15"), "Convention Center");
event1.addAttendee("John");
event1.addAttendee("Alice");
events.push(event1);

const event2 = new Event("Workshop", new Date("2023-09-02"), "Office Meeting Room");
event2.addAttendee("Bob");
event2.addAttendee("Eva");
event2.addAttendee("David");
events.push(event2);

const event3 = new Event("Seminar", new Date("2023-10-20"), "University Auditorium");
event3.addAttendee("Sophia");
event3.addAttendee("Michael");
events.push(event3);

// You can add more events as needed

// Print the array of events
console.log(events);
