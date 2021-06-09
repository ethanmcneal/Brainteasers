//https://www.codewars.com/kata/58905bfa1decb981da00009e/train/javascript

// 3KYU

// Rules
// Lift Rules
// The Lift only goes up or down!
// Each floor has both UP and DOWN Lift-call buttons (except top and ground floors which have only DOWN and UP respectively)
// The Lift never changes direction until there are no more people wanting to get on/off in the direction it is already travelling
// When empty the Lift tries to be smart. For example,
// If it was going up then it may continue up to collect the highest floor person wanting to go down
// If it was going down then it may continue down to collect the lowest floor person wanting to go up
// The Lift has a maximum capacity of people
// When called, the Lift will stop at a floor even if it is full, although unless somebody gets off nobody else can get on!
// If the lift is empty, and no people are waiting, then it will return to the ground floor
// People Rules
// People are in "queues" that represent their order of arrival to wait for the Lift
// All people can press the UP/DOWN Lift-call buttons
// Only people going the same direction as the Lift may enter it
// Entry is according to the "queue" order, but those unable to enter do not block those behind them that can
// If a person is unable to enter a full Lift, they will press the UP/DOWN Lift-call button again after it has departed without them


var theLift = function(queues, capacity) {
    // Your code here!
    return [999]
  }

console.log(theLift())