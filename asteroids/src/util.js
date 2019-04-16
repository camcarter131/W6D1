
const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() {};
        parentClass.prototype = Surrogate.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    }

}

module.exports = Util;