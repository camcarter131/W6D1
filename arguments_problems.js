// ----------------------- sum ----------------------- //

const sum = function() {
    let args = Array.from(arguments);
    let sum = 0;
    args.forEach((num) => {
        sum += num;
    });
    return sum;
}

// console.log(sum(1,2,3,4,5));
// console.log(sum());


const sum2 = function(...args) {
    let sum = 0;
    args.forEach( (num) => {
        sum += num;
    })

    return sum;
}

// console.log(sum2(1, 2, 3, 4, 5));
// console.log(sum2());



// ----------------------- bind ----------------------- //

Function.prototype.myBind = function(context) {
    let outer_args = Array.from(arguments).slice(1);
    let that = this;
    return function() {
        let inner_args = Array.from(arguments);
        that.apply(context, outer_args.concat(inner_args));
    }
}

Function.prototype.myBindPhat = function (context) {
    let outer_args = Array.from(arguments).slice(1);
    let that = this;
    return () => {
        let inner_args = Array.from(arguments);
        this.apply(context, outer_args.concat(inner_args));
    }
}

Function.prototype.myBind2 = function (context, ...args) {
    let that = this;
    return function (...inner_args) {
        that.apply(context, args.concat(inner_args));
    }
}

Function.prototype.myBindFat = function (context, ...args) {
    return (...inner_args) => {
        this.apply(context, args.concat(inner_args));
    }
}

// TEST CASES
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");

// markov.says.myBindPhat(pavlov, "meow", "Kush")();
// markov.says.myBindPhat(pavlov)("meow", "a tree");
// markov.says.myBindPhat(pavlov, "meow")("Markov");


// ---------------------------------------------------------- //
// ----------------------- curriedSum ----------------------- //
// ---------------------------------------------------------- //

function curriedSum (numArgs) {
    const numbers = [];
    return function _curriedSum (num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach( (n) => {
                sum += n;
            });
            return sum;
        } else {
            return _curriedSum;
        }
    }
};

// console.log(curriedSum(4)(5)(30)(20)(1)); // 56
// console.log(curriedSum(3)(4)(20)(6)); // 30

Function.prototype.curry = function (numArgs) {
    const args = [];
    const that = this;
    return function curried(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that(args);
        } else {
            return curried;
        }
    }
};

// TEST
function summer (nums) {
    let sum = 0;
    nums.forEach((n) => {
        sum += n;
    });
    return sum;
};

console.log(summer.curry(4)(5)(30)(20)(1)); // 56
console.log(summer.curry(3)(4)(20)(6)); // 30
