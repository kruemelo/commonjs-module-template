/*
  # CommonJs module template
*/

/*
  ## dependencies
*/
var ClassXY = require('class-xy');


var Module = function () {

  var instance;


  /*
    ## private instance methods
    
  */

  /*
  ### noop()
  */
  function noop () {}


  /*
    ### MyClass()
    constructor
  */
  function MyClass () {


    // call super constructor
    Module.ClassXY.call(this, ..arguments);

    // use this.* here to access instance properties

  }   // MyClass


  // extends ClassXY
  MyClass.prototype = Object.create(ClassXY.prototype);
  MyClass.prototype.constructor = MyClass;  

  /*
    ### expose MyClass ctor 

    ```
    var MyClass = require('my-class.js');

    var x = new MyClass();

    x instanceof MyClass;         // false!

    x instanceof MyClass.MyClass; // true
    ```
  */
  Module.MyClass = MyClass;


  /*
    ## public instance methods
  */

  /*
    ### xy()
  */
  MyClass.prototype.xy = function () {

    // use instance.* to access properties (no need for `var self = this;`)
  };


  instance = new MyClass();

  return instance;
};



/*
  ## static methods
*/

/*
  ### xyz()
*/
Module.xyz = function () {

};


/*
  ## static properties
*/


/*
  ### expose dependency ClassXY
*/
Module.ClassXY = ClassXY;


module.exports = Module;
