// Hey Iron Yard Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// Only add code to *THIS* section!

// creating function that's passed an object, creating the Dog object
function Dog(obj) {
  // checking to see if an object was passed
  if (obj) {
    // if the object passed in has any of these properties, set this object's properties
    // to those. Otherwise, set to default
    if (obj.hasOwnProperty('status')) {
      this.status = obj.status
    } else {
      this.status = 'normal'
    }

    if (obj.hasOwnProperty('color')) {
      this.color = obj.color
    } else {
      this.color = 'grey'
    }

    if (obj.hasOwnProperty('hungry')) {
      this.hungry = obj.hungry
    } else {
      this.hungry = true
    }

    if (obj.hasOwnProperty('owner')) {
      this.owner = obj.owner
    } else {
      this.owner = undefined
    }
  } else {
    // if no object was passed in, assign all these to defaults
    this.status = 'normal'
    this.color = 'grey'
    this.hungry = true
    this.owner = undefined
  }
}

function Human(obj) {
  // Human needs two functions to change properties in Dog
  // Hard sets them regardless of what they were before
  this.pet = function(name) {
    name.status = 'happy'
  }

  this.feed = function(name) {
    name.hungry = false
  }

  // If Human was passed an object, and if that object has cool defined, use that
  // Otherwise (in both cases) they are uncool
  if (obj) {
    if (obj.hasOwnProperty('cool')) {
      this.cool = obj.cool
    } else {
      this.cool = false
    }
  } else {
    this.cool = false    
  }
}

//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

var sadie = new Dog({
  color: "black",
  hungry: false
});

var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

var mason = new Human();

var julia = new Human({
  cool: true
});


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});