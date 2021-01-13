(() => {
  const person = {
    name: {
      first: 'Paul',
      last: 'Alex'
    },
    roles: ['admin'],
    isActive: true
  }

  function printPersonOne(person) {
    const {roles, name: {first, last}} = person

    console.log(`[roles]--${roles}`);
    console.log(`[roles.length]--${roles.length}`);
    console.log(`[first]--${first}`);
    console.log(`[last]--${last}`);
  }

/**
 * to deconstruct something without creating a new constant 
 * we can just simply put the deconstruct syntax as an argument
 */
function printPersonTwo({roles, name: {first, last}}) {
  console.log(`[roles]---${roles}`)
}

const point = {x: 1, y: 24};
function translate({x, y}, amount) {
  return {x: x + amount, y: y + amount};
}
console.log(translate(point, 20));
const {x, y} = translate(point, 10);

printPersonTwo(person);

/**
 * DEFAULTS
 * the way to do default parameters when deconstructing things
 */
function getTrack() {
  return {title: "track 1", lengthInSeconds: 30};
}

const {title, lengthInSeconds, descriptor = "No desc found"} = getTrack();

/**
 * Array Deconstruction
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstName, secondName, thirdName] = array;
const [a, b,,d] = array; // use the comma notation to skip elements
const [head1, head2, ... rest] = array;

/**
 * everything after head1 and head2 will be put in the rest array
 * this way you can only retrieve the first elements of the array 
 * and also keep the rest of the array
 * NOTE - do not add arguments after rest because it is gong 
 * to break
 */

 /**
  * DEFAULT parameters
  */ 
  function withDefaults(person, output="name", options={verbose: true}) {
    console.log([person, output, options]);
  }

  withDefaults(person);
  withDefaults(person, 'isActive', {debug: true});
})();