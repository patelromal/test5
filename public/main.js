(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_subproduct_subproduct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/subproduct/subproduct.component */ "./src/app/components/subproduct/subproduct.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'index', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aboutus', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'contactus', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'product', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
    //{ path: 'subproduct', component: SubproductComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'details/:id', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"] },
    // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        children: [
            { path: 'manageproduct', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
            { path: 'managesubproduct', component: _components_subproduct_subproduct_component__WEBPACK_IMPORTED_MODULE_10__["SubproductComponent"] },
        ]
    },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { LocationStrategy } from "@angular/common";
//import { EnvironmentService } from "./common/services/environment.service";
//import { ModalService } from "./common/services/modal.service";
//import { ErrorService } from "./common/services/error.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.error = { message: "" };
    }
    //  constructor(
    //          private url: LocationStrategy,
    //          private router: Router,
    //          private errorService: ErrorService,
    //          public modalService: ModalService,
    //          public envService: EnvironmentService
    //  ) { }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: "AIzaSyAEA55kvhmDdzVvrzzp6ICHqrHZCN3nOPs",
            authDomain: "sspjiims-c3f70.firebaseapp.com"
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/index.js");
/* harmony import */ var _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/page-action/page-action.component */ "./src/app/common/components/page-action/page-action.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _common_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/services/modal.service */ "./src/app/common/services/modal.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_homebody_homebody_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/homebody/homebody.component */ "./src/app/components/homebody/homebody.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_head_head_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin-header/admin-header.component */ "./src/app/components/admin-header/admin-header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components//register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var _common_services_alert1_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./common/services/alert1.service */ "./src/app/common/services/alert1.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _common_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./common/pipes/filter.pipe */ "./src/app/common/pipes/filter.pipe.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _components_subproduct_subproduct_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/subproduct/subproduct.component */ "./src/app/components/subproduct/subproduct.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _services_subproduct_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/subproduct.service */ "./src/app/services/subproduct.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__["AboutUsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__["ContactUsComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _components_head_head_component__WEBPACK_IMPORTED_MODULE_22__["HeadComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_23__["MenuComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
                _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_25__["AdminHeaderComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_9__["PageActionComponent"],
                _components_homebody_homebody_component__WEBPACK_IMPORTED_MODULE_15__["HomebodyComponent"],
                _common_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterPipe"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__["FileSelectDirective"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_35__["DetailsComponent"],
                _components_subproduct_subproduct_component__WEBPACK_IMPORTED_MODULE_37__["SubproductComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_38__["ProductComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_41__["CompanyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__["NgSelectModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_8__["CollapsibleModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_10__["SmuCommonModule"].forRoot(),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__["NgxSmartModalModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                ngx_toasta__WEBPACK_IMPORTED_MODULE_30__["ToastaModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__["MDBBootstrapModule"].forRoot()
            ],
            exports: [
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__["NgxSmartModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"]
            ],
            providers: [_common_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbActiveModal"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_28__["SessionService"], _common_services_alert1_service__WEBPACK_IMPORTED_MODULE_31__["Alert1Service"], _services_product_service__WEBPACK_IMPORTED_MODULE_40__["ProductService"], _services_subproduct_service__WEBPACK_IMPORTED_MODULE_39__["SubproductService"]],
            entryComponents: [
                _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_9__["PageActionComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: SmuCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmuCommonModule", function() { return SmuCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-action/page-action.component */ "./src/app/common/components/page-action/page-action.component.ts");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/confirmation-dialog.service */ "./src/app/common/services/confirmation-dialog.service.ts");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "./src/app/common/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/common/services/alert.service.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/common/components/alert/alert.component.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/common/services/modal.service.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/common/components/modal/modal.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/common/services/loader.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/must-match.directive */ "./src/app/common/directives/must-match.directive.ts");
/* harmony import */ var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/custom-button/custom-button.component */ "./src/app/common/components/custom-button/custom-button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { HttpInterceptor } from '../services/http-interceptor';


var SmuCommonModule = /** @class */ (function () {
    function SmuCommonModule() {
    }
    SmuCommonModule_1 = SmuCommonModule;
    SmuCommonModule.forRoot = function () {
        return {
            ngModule: SmuCommonModule_1,
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"],
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"],
                _services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
            ]
        };
    };
    var SmuCommonModule_1;
    SmuCommonModule = SmuCommonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            entryComponents: [_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_1__["PageActionComponent"], _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_13__["CustomButtonComponent"]],
            declarations: [
                _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_12__["MustMatchDirective"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_13__["CustomButtonComponent"]
            ],
            exports: []
        })
    ], SmuCommonModule);
    return SmuCommonModule;
}());



/***/ }),

/***/ "./src/app/common/components/alert/alert.component.css":
/*!*************************************************************!*\
  !*** ./src/app/common/components/alert/alert.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#alert {\n    position: fixed;\n    top: 10px;\n    left: 50%;\n    width: 45%;\n    transform: translate(-50%, 0);\n    padding: 10px 15px 10px 15px;\n    border-radius: 5px;\n    z-index: 9999;\n    font-weight: bold;\n}\n\n#alert button {\n    padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2FsZXJ0IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/components/alert/alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/common/components/alert/alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.isActive = false;
        this.addExtraClass = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        // this.alertService.getAlert().subscribe((alert) => {
        //     this.alert = alert;
        //     if (this.alert.message == "") {
        //         this.isActive = false;
        //     } else {
        //         this.isActive = true;
        //     }
        // });
    };
    AlertComponent.prototype.closeAlert = function () {
        this.isActive = false;
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "alert",
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/common/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/common/components/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/common/components/confirmation-dialog/confirmation-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/common/components/confirmation-dialog/confirmation-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n<h4 class=\"modal-title\">{{ title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  {{ message }}\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"decline()\">{{ btnCancelText }}</button>\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"accept()\">{{ btnOkText }}</button>\n</div>"

/***/ }),

/***/ "./src/app/common/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/common/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/common/components/confirmation-dialog/confirmation-dialog.component.html"),
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/components/custom-button/custom-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/custom-button/custom-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomButtonComponent", function() { return CustomButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomButtonComponent = /** @class */ (function () {
    function CustomButtonComponent() {
        this.text = 'Custom Button';
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.totalClicks = 0;
    }
    CustomButtonComponent.prototype.ngOnInit = function () {
    };
    CustomButtonComponent.prototype.countClicks = function () {
        this.totalClicks++;
        this.countChanged.emit(this.totalClicks);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomButtonComponent.prototype, "countChanged", void 0);
    CustomButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-button',
            template: "<button type=\"button\" class=\"btn\" (click)=\"countClicks()\">{{text}}</button>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Native,
            styles: [" \n    .btn {\n      display: inline-block;\n      font-weight: 400;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      border: 1px solid transparent;\n      padding: .375rem .75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      border-radius: .25rem;\n      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n      color: #fff;\n      background-color: #28a745;\n      border-color: #28a745;\n    }\n    .btn:hover {\n      color: #fff;\n      background-color: #218838;\n      border-color: #1e7e34;\n      cursor: pointer;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], CustomButtonComponent);
    return CustomButtonComponent;
}());



/***/ }),

/***/ "./src/app/common/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/common/services/modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        // this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        // this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/common/components/page-action/page-action.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/page-action/page-action.component.ts ***!
  \************************************************************************/
/*! exports provided: PageActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageActionComponent", function() { return PageActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageActionComponent = /** @class */ (function () {
    function PageActionComponent() {
    }
    PageActionComponent.prototype.agInit = function (params) {
        this.params = params;
        this.pageAction = params.pageAction;
    };
    PageActionComponent.prototype.refresh = function (params) {
        this.params = params;
        return true;
    };
    PageActionComponent.prototype.save = function () {
        this.params.api.gridOptions.context.componentParent.save(this.params.data);
    };
    PageActionComponent.prototype.edit = function (ev) {
        this.params.api.gridOptions.context.componentParent.edit(this.params.data);
        ev.stopPropagation();
    };
    PageActionComponent.prototype.open = function () {
        this.params.api.gridOptions.context.componentParent.open(this.params);
    };
    PageActionComponent.prototype.delete = function () {
        this.params.api.gridOptions.context.componentParent.delete(this.params.data);
    };
    PageActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'page-action',
            template: "\n        <button *ngIf=\"pageAction === 'edit'\" class='no-style' (click)='edit($event)'\n        tooltip=\"Edit\">\n            <i class='fa fa-pencil text-primary' style=\"transform: scale(1.2)\"></i>\n        </button>\n        <button *ngIf=\"pageAction === 'save'\" class='no-style' (click)='save($event)'\n        tooltip=\"Save\">\n            <i class='fa fa-save text-primary' style=\"transform: scale(1.2)\"></i>\n        </button>\n        <button *ngIf=\"pageAction === 'open'\" class='no-style' (click)='open($event)'\n        tooltip=\"Open\">\n            <i class='fa fa-openid text-primary' style=\"transform: scale(1.2)\"></i>\n        </button>\n        <button *ngIf=\"pageAction === 'delete'\" class='no-style' (click)='delete($event)'\n        tooltip=\"Save\">\n            <i class='fa fa-trash text-danger' style=\"transform: scale(1.2)\"></i>\n        </button>\n        <button *ngIf=\"pageAction === 'notes'\" class='no-style'\n        tooltip=\"Notes\">\n            <span class=\"fa-stack\">\n                <span class=\"fa fa-sticky-note text-warning fa-stack-2x\"></span>\n                <strong class=\"fa-stack\" style=\"font-family:Roboto; font-size:xx-small\">\n                    {{params.data.notes}}</strong>\n            </span>\n        </button>\n    ",
        })
    ], PageActionComponent);
    return PageActionComponent;
}());



/***/ }),

/***/ "./src/app/common/directives/must-match.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/directives/must-match.directive.ts ***!
  \***********************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MustMatch } from './must-match.validator';
var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (formGroup) {
        return this.MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    MustMatchDirective.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            // return null if controls haven't initialised yet
            if (!control || !matchingControl) {
                return null;
            }
            // return null if another validator has already found an error on the matchingControl
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                console.log('return null working');
                return null;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    var MustMatchDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mustMatch'),
        __metadata("design:type", Array)
    ], MustMatchDirective.prototype, "mustMatch", void 0);
    MustMatchDirective = MustMatchDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mustMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
}());



/***/ }),

/***/ "./src/app/common/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/common/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        console.log('items : ' + items);
        return term ? items.filter(function (item) { return item.course.indexOf(term) !== -1; }) : items;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/common/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(snackBar) {
        this.snackBar = snackBar;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //message: string = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = true;
        this.setAutoHide = true;
        // autoHide: number = 2000;
        this.horizontalPosition = 'center';
    }
    AlertService.prototype.showSuccessMessage = function (message, verticalPosition, autoHide) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? autoHide : 0;
        config.panelClass = 'success';
        this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    };
    AlertService.prototype.openSnackBar = function (message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className],
            verticalPosition: 'top'
        });
    };
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.warning = function (errorConfig) {
        this.alert("warning", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    };
    AlertService.prototype.danger = function (errorConfig) {
        this.alert("danger", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    };
    AlertService.prototype.info = function (errorConfig) {
        this.alert("info", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    };
    AlertService.prototype.success = function (errorConfig) {
        this.alert("success", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    };
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService.prototype.alert = function (alertType, message, timed, closeable) {
        var _this = this;
        this.subject.next({
            alertType: alertType,
            message: message,
            closeable: closeable,
        });
        if (timed) {
            rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].timer(2000).subscribe(function () {
                _this.subject.next({});
            });
        }
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/common/services/alert1.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/alert1.service.ts ***!
  \***************************************************/
/*! exports provided: Alert1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert1Service", function() { return Alert1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alert1Service = /** @class */ (function () {
    function Alert1Service(toastaService) {
        this.toastaService = toastaService;
        this.toastaService.default('Hi there');
        var toastOptions = {
            title: "My title",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastaService.info(toastOptions);
        this.toastaService.success(toastOptions);
        this.toastaService.wait(toastOptions);
        this.toastaService.error(toastOptions);
        this.toastaService.warning(toastOptions);
    }
    Alert1Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toasta__WEBPACK_IMPORTED_MODULE_1__["ToastaService"]])
    ], Alert1Service);
    return Alert1Service;
}());



/***/ }),

/***/ "./src/app/common/services/confirmation-dialog.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/services/confirmation-dialog.service.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/confirmation-dialog/confirmation-dialog.component */ "./src/app/common/components/confirmation-dialog/confirmation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationDialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        var modalRef = this.modalService.open(_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"]);
        modalRef.componentInstance.dialogSize = dialogSize;
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        modalRef.componentInstance.backdropClass = 'light-blue-backdrop';
        return modalRef.result;
    };
    ConfirmationDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ConfirmationDialogService);
    return ConfirmationDialogService;
}());



/***/ }),

/***/ "./src/app/common/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderState$.asObservable();
        // Track the number of outstanding AJAX requests.  Cannot use a boolean here
        // because during overlapping requests, the first request to return will update
        // the state to false.
        this.inProgress = 0;
        this.subscriptions = [];
    }
    LoaderService.prototype.start = function () {
        var _this = this;
        // The loading animation should only appear if the request has been outstanding
        // for 200ms or more to avoid flickering.
        this.subscriptions.push(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].timer(200).subscribe(function () {
            _this.inProgress += 1;
            _this.loaderState$.next(_this.inProgress);
        }));
    };
    LoaderService.prototype.end = function () {
        if (this.inProgress > 0) {
            this.inProgress -= 1;
        }
        this.loaderState$.next(this.inProgress);
        var subscription = this.subscriptions.pop();
        subscription.unsubscribe();
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/common/services/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ModalService.prototype.getModalStatus = function () {
        return this.subject.asObservable();
    };
    ModalService.prototype.show = function (id) {
        this.subject.next({ elemId: id, shown: true });
    };
    ModalService.prototype.hide = function (id) {
        this.subject.next({ elemId: id, shown: false });
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-heading a:after {\n    font-family:'Glyphicons Halflings';\n    content:\"\\e114\";\n    float: right;\n    color: grey;\n}\n.panel-heading a.collapsed:after {\n    content:\"\\e080\";\n}\n.card-header {\n  padding-top: 0;\n  margin-bottom: 0;\n  background-color: #4D0B27 !important;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  height: 25px !important;\n  font-weight: bold !important;\n  color: #fff; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtaGVhZGluZyBhOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTonR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xuICAgIGNvbnRlbnQ6XCJcXGUxMTRcIjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IGdyZXk7XG59XG4ucGFuZWwtaGVhZGluZyBhLmNvbGxhcHNlZDphZnRlciB7XG4gICAgY29udGVudDpcIlxcZTA4MFwiO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREMEIyNyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjsgXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n<div class=\"icon-bar\">\n  <a href=\"https://www.facebook.com\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a> \n  <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a> \n  <a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a> \n  <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n  <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a> \n</div>\n\n  <div class=\"milestones\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n                        <div class=\"col\">\n\n                          <div class=\"home_content text-center\">\n<!--                           \t<img src=\"../../assets/images/slides1.jpg\"/> -->\n<!-- \t\t\t\t\t\t\t<div class=\"home_title\">About us</div> -->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\n\t\t\t\t\t\t\t\t\t  <ul class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  <!-- The slideshow -->\n\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/slides1.jpg\" alt=\"Los Angeles\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/slides2.jpg\" alt=\"Chicago\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/slides3.jpg\" alt=\"New York\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\n\t\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\"></span>\n\t\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\"></span>\n\t\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\n                          </div>\n            \n                        </div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  <div id=\"wrapper\">\n\n    <!-- start header -->\n   \t<app-header></app-header>\n    <!-- end header -->\n\n    <app-menu></app-menu>\n\n\t\t<section id=\"content\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<mdb-card class=\"w-100\" borderColor=\"border-success\"> \n\t\t\t\t\t\t<mdb-card-header>Welcome to  UMIYA INDUSTRIES LLC, USA</mdb-card-header>\n\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\tUMIYA INDUSTRIES LLC is registered company in New Jersey, USA. \n\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\n\t\t\t\t\t<mdb-card class=\"w-100\" borderColor=\"border-success\"> \n\t\t\t\t\t\t<mdb-card-header>Purpose of UMIYA INDUSTRIES LLC, USA</mdb-card-header>\n\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\tTrading of Plastic (LDPE, HDPE Granule) and Paper products.<br />\n\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\n\t\t\t\t\t<mdb-card class=\"w-100\" borderColor=\"border-success\"> \n\t\t\t\t\t\t<mdb-card-header>Materials Sell/Buy</mdb-card-header>\n\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\tWe buy and sell LDPE Granule, HDPE Granule, OCC #11 and #12 Paper.\n\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\n\t\t\t\t\t<mdb-card class=\"w-100\" borderColor=\"border-success\"> \n\t\t\t\t\t\t<mdb-card-header>Business Hourse</mdb-card-header>\n\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\tOur normal business hours are 8 AM to 4 PM, Monday through Friday.\n\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t&nbsp;\n\t\t</div>\n\n\t<app-footer></app-footer>\n    \n  </div>\n  <a href=\"#\" class=\"scrollup\"><i class=\"icon-angle-up icon-square icon-bglight icon-2x active\"></i></a>\n\n\n</body>\n\n</html>\n\n\n<!-- <mdb-card class=\"w-100\" borderColor=\"border-success\" > -->\n<!-- \t\t  <mdb-card-header>Header</mdb-card-header> -->\n<!-- \t\t  <mdb-card-body> -->\n<!-- \t\t    <mdb-card-title> -->\n<!-- \t\t      <h5>Success Panel title</h5> -->\n<!-- \t\t    </mdb-card-title> -->\n<!-- \t\t    <mdb-card-text>Some quick example text to build on the panel title and make up the bulk of the -->\n<!-- \t\t      panel's content.</mdb-card-text> -->\n<!-- \t\t  </mdb-card-body> -->\n<!-- \t\t</mdb-card> -->"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-header/admin-header.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin-header/admin-header.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin-header/admin-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-header/admin-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n     <div class=\"col\">\n      <nav class=\"main_nav_contaner\">\n            <ul class=\"main_nav\">\n            <li [routerLinkActive]=\"['active']\"><a routerLink=\"manageproduct\">Manage Product</a></li>\n            <li [routerLinkActive]=\"['active']\"><a routerLink=\"managesubproduct\">Manage Course</a></li>\n            </ul>\n      </nav>\n      </div>\n      </div>\n</div>\n<div class=\"col-md-7\">\n   <router-outlet></router-outlet>\n </div>\n"

/***/ }),

/***/ "./src/app/components/admin-header/admin-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-header/admin-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(router, route) {
        this.router = router;
        this.route = route;
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        //        this.recipes = this.recipeService.getRecipes();
    };
    AdminHeaderComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
    };
    AdminHeaderComponent.prototype.onManageCourse = function () {
        this.router.navigate(['managecourse'], { relativeTo: this.route });
    };
    AdminHeaderComponent.prototype.onManageStudent = function () {
        this.router.navigate(['managestudent'], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminHeaderComponent.prototype, "featureSelected", void 0);
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-header',
            template: __webpack_require__(/*! ./admin-header.component.html */ "./src/app/components/admin-header/admin-header.component.html"),
            styles: [__webpack_require__(/*! ./admin-header.component.css */ "./src/app/components/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<!-- Head -->\n<app-head></app-head>\n\n<body>\n\n<div class=\"super_container\">\n\n\t<!-- Header -->\n\t<app-header></app-header>\n\n\t<!-- Menu -->\n\t<app-menu></app-menu>\n  \n    <div class=\"milestones\">\n\t\t<!-- Background image artis https://unsplash.com/@thepootphotographer -->\n\t\t<div class=\"parallax_background parallax-window\" data-parallax=\"scroll\" style=\"background-image: url(../../assets/images/about.jpg);\" data-speed=\"0.8\"></div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n                        <div class=\"col\">\n\n                          <div class=\"home_content text-center\">\n\t\t\t\t\t\t\t<div class=\"home_title\">Welcome Admin</div>\n                          </div>\n            \n                        </div>\n\n\t\t\t</div>\n\t\t</div>\n  </div>\n  \n    <div class=\"container\">\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n\t<div class=\"row\">\n     <div class=\"col\">\n                <app-admin-header (featureSelected)=\"onNavigate($event)\"></app-admin-header>\n          </div>\n        </div>\n        <div class=\"row\"><br></div><div class=\"row\"><br></div>\n\t</div>\n\n\t<!-- Footer -->\n    <app-footer></app-footer>\n\t\n</div>\n\n</body>\n\n</html>\n\n\n<!-- <!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n  <div id=\"wrapper\">\n\n   \t<app-header></app-header>\n\n    <section id=\"inner-headline\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"span12\">\n            <div class=\"inner-heading\">\n              <ul class=\"breadcrumb\">\n                <li><a href=\"index.html\">Home</a> <i class=\"icon-angle-right\"></i></li>\n                <li><a href=\"#\">Pages</a> <i class=\"icon-angle-right\"></i></li>\n                <li class=\"active\">Admin</li>\n              </ul>\n              <h2>Welcome Admin</h2>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n   <app-admin-header (featureSelected)=\"onNavigate($event)\"></app-admin-header>\n\n   <app-footer></app-footer>\n    \n  </div>\n  <a href=\"#\" class=\"scrollup\"><i class=\"icon-angle-up icon-square icon-bglight icon-2x active\"></i></a>\n\n</body>\n\n</html> -->\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.loadedFeature = 'managecourse';
    }
    AdminComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n  <div class=\"milestones\">\n  \t\t<div class=\"row\"><br></div><div class=\"row\"><br></div>\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n      <div class=\"row\"><br></div><div class=\"row\"><br></div>\n\t\t<!-- Background image artis https://unsplash.com/@thepootphotographer -->\n\t\t<div class=\"parallax_background parallax-window\" data-parallax=\"scroll\" style=\"background-image: url(../../assets/images/contact.jpg);\" data-speed=\"0.8\"></div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n                        <div class=\"col\">\n\n                          <div class=\"home_content text-center\">\n\t\t\t\t\t\t\t<div class=\"home_title\">Contact us</div>\n                          </div>\n            \n                        </div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  <div id=\"wrapper\">\n\n    <!-- start header -->\n   \t<app-header></app-header>\n    <!-- end header -->\n\n    <app-menu></app-menu>\n\n    <section id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <br>\n        </div>\n        <div class=\"row\">\n          <div class=\"column w-50\">\n\n            <form id=\"contact-form\" method=\"post\" action=\"#\" role=\"form\">\n\n                  <div class=\"messages\"></div>\n\n                  <div class=\"controls\">\n\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"form_name\">Firstname *</label>\n                                  <input id=\"form_name\" type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Please enter your firstname *\" required=\"required\" data-error=\"Firstname is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"form_lastname\">Lastname *</label>\n                                  <input id=\"form_lastname\" type=\"text\" name=\"surname\" class=\"form-control\" placeholder=\"Please enter your lastname *\" required=\"required\" data-error=\"Lastname is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"form_email\">Email *</label>\n                                  <input id=\"form_email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Please enter your email *\" required=\"required\" data-error=\"Valid email is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"form_need\">Please specify your need *</label>\n                                  <select id=\"form_need\" name=\"need\" class=\"form-control\" required=\"required\" data-error=\"Please specify your need.\">\n                                      <option value=\"\"></option>\n                                      <option value=\"Request quotation\">Request Product Information</option>\n                                      <option value=\"Other\">Other</option>\n                                  </select>\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <label for=\"form_message\">Message *</label>\n                                  <textarea id=\"form_message\" name=\"message\" class=\"form-control\" placeholder=\"Message for me *\" rows=\"4\" required=\"required\" data-error=\"Please, leave us a message.\"></textarea>\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <input type=\"submit\" class=\"btn btn-success btn-send\" value=\"Send message\">\n                          </div>\n                      </div>\n                  </div>\n              </form>\n\n          </div>\n          <div style=\"margin-left: 200px;margin-top: 100px;\" >\n          \n          \t<div class=\"row\">UMIYA INDUSTRIES LLC</div>\n\t\t\t\n<!-- \t\t\t\t<div class=\"row\">Mailing Address:</div> -->\n\t\t\t\t<div class=\"row\">44 CENTER GROVE RD</div>\n<!-- \t\t\t\t<div class=\"row\">APT F-32, RANDOLPH</div> -->\n\t\t\t\t<div class=\"row\">NEW JERSEY-07869, USA\n\t\t\t</div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <app-footer></app-footer>\n    \n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/components/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/details/details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".even { \n\tcolor: black;\n}\n.odd { \n\tcolor: black;\n}\n.card-product .img-wrap {\n    border-radius: 3px 3px 0 0;\n    overflow: hidden;\n    position: relative;\n    height: 220px;\n    text-align: center;\n}\n.card-product .img-wrap img {\n    max-height: 100%;\n    max-width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.card-product .info-wrap {\n    overflow: hidden;\n    padding: 15px;\n    border-top: 1px solid #eee;\n}\n.card-product .bottom-wrap {\n    padding: 15px;\n    border-top: 1px solid #eee;\n}\n.label-rating { margin-right:10px;\n    color: #333;\n    display: inline-block;\n    vertical-align: middle;\n}\n.card-product .price-old {\n    color: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBRUEsZ0JBQWdCLGlCQUFpQjtJQUM3QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVuIHsgXG5cdGNvbG9yOiBibGFjaztcbn1cbi5vZGQgeyBcblx0Y29sb3I6IGJsYWNrO1xufVxuLmNhcmQtcHJvZHVjdCAuaW1nLXdyYXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtcHJvZHVjdCAuaW1nLXdyYXAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jYXJkLXByb2R1Y3QgLmluZm8td3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuLmNhcmQtcHJvZHVjdCAuYm90dG9tLXdyYXAge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5sYWJlbC1yYXRpbmcgeyBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNhcmQtcHJvZHVjdCAucHJpY2Utb2xkIHtcbiAgICBjb2xvcjogIzk5OTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n\t<div class=\"icon-bar\">\n\t\t<a href=\"https://www.facebook.com\" class=\"facebook\"><i\n\t\t\tclass=\"fa fa-facebook\"></i></a> <a href=\"#\" class=\"twitter\"><i\n\t\t\tclass=\"fa fa-twitter\"></i></a> <a href=\"#\" class=\"google\"><i\n\t\t\tclass=\"fa fa-google\"></i></a> <a href=\"#\" class=\"linkedin\"><i\n\t\t\tclass=\"fa fa-linkedin\"></i></a> <a href=\"#\" class=\"youtube\"><i\n\t\t\tclass=\"fa fa-youtube\"></i></a>\n\t</div>\n\n\t<div class=\"milestones\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col\">\n\n\t\t\t\t\t<div class=\"home_content text-center\">\n\t\t\t\t\t\t<!--                           \t<img src=\"../../assets/images/slides1.jpg\"/> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<div class=\"home_title\">About us</div> -->\n\n\t\t\t\t\t\t<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n\t\t\t\t\t\t\t<!-- Indicators -->\n\t\t\t\t\t\t\t<ul class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t<li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t<li data-target=\"#demo\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t<li data-target=\"#demo\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<!-- The slideshow -->\n\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/slides1.jpg\" alt=\"Los Angeles\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/slides2.jpg\" alt=\"Chicago\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/slides3.jpg\" alt=\"New York\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- Left and right controls -->\n\t\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\"></span>\n\t\t\t\t\t\t\t</a> <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\"></span>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"wrapper\">\n\n\t\t<!-- start header -->\n\t\t<app-header></app-header>\n\t\t<!-- end header -->\n\n\t\t<app-menu></app-menu>\n\n\t\t<section id=\"content\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<mdb-card class=\"w-100\" borderColor=\"border-success\"> \n\t\t\t\t\t\t<mdb-card-header><p class=\"font-weight-bold text-success\">Sub Course Details</p></mdb-card-header>\n\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\t<div *ngFor=\"let course of subCourseList\">\n<!-- \t\t\t\t\t\t\t\t{{course.name}} -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t  <ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t\t\t\t    <li class=\"nav-item\">\n\t\t\t\t\t\t\t\t      <a class=\"nav-link active font-weight-bold text-danger\" data-toggle=\"tab\" href=\"#home\">{{course.name}}</a>\n\t\t\t\t\t\t\t\t    </li>\n<!-- \t\t\t\t\t\t\t\t    <li class=\"nav-item\"> -->\n<!-- \t\t\t\t\t\t\t\t      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Menu 1</a> -->\n<!-- \t\t\t\t\t\t\t\t    </li> -->\n<!-- \t\t\t\t\t\t\t\t    <li class=\"nav-item\"> -->\n<!-- \t\t\t\t\t\t\t\t      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Menu 2</a> -->\n<!-- \t\t\t\t\t\t\t\t    </li> -->\n\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t  <!-- Tab panes -->\n\t\t\t\t\t\t\t\t  <div class=\"tab-content\">\n\t\t\t\t\t\t\t\t    <div id=\"home\" class=\"container tab-pane active\">\n\t\t\t\t\t\t\t\t      \t<div class=\"row\">\n<!-- \t\t\t\t\t\t\t\t\t\t  <div class=\"col-3\">image</div> -->\n\t\t\t\t\t\t\t\t\t      <div class=\"col-5\">\n\t\t\t\t\t\t\t\t\t      \t<div *ngFor=\"let items of course.items; let odd=odd; let even=even;\"  [ngClass]=\"{ odd: odd, even: even }\">\t\n\t\t\t\t\t\t\t\t\t\t      \t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col font-weight-bold text-info\" align=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  \t{{items.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  \t{{items.description}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t      <div class=\"col text-justify\">{{course.details}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n  \n\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t</mdb-card>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n\t\t<div class=\"row\">&nbsp;</div>\n\n\t\t<app-footer></app-footer>\n\n\t</div>\n\t<a href=\"#\" class=\"scrollup\"><i\n\t\tclass=\"icon-angle-up icon-square icon-bglight icon-2x active\"></i></a>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subproduct_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/subproduct.service */ "./src/app/services/subproduct.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, subproductservice) {
        this.route = route;
        this.subproductservice = subproductservice;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getSubCourseDetails();
        });
    };
    DetailsComponent.prototype.getSubCourseDetails = function () {
        var _this = this;
        this.subproductservice.findOne(this.id).subscribe(function (res) {
            _this.subProductList = res;
            console.log(res);
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/components/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_subproduct_service__WEBPACK_IMPORTED_MODULE_2__["SubproductService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- About -->\n      <div class=\"col-lg-3 footer_col\">\n        <div class=\"footer_about\">\n          <div class=\"logo_container\">\n            <a href=\"#\">\n              <div class=\"logo_content d-flex flex-row align-items-end justify-content-start\">\n                <div class=\"logo_img\"><img src=\"../../assets/images/logo.png\" alt=\"\"></div>\n                <div class=\"logo_text\">learn</div>\n              </div>\n            </a>\n          </div>\n          <div class=\"footer_about_text\">\n            <p  style=\"color: #fff !important\">UMIYA INDUSTRIES LLC known as Global Traders.</p>\n          </div>\n          <div class=\"footer_social\">\n            <ul>\n              <li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n            </ul>\n          </div>\n          <div class=\"copyright\"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved. | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://umiyaind.com\" target=\"_blank\">Umiyaind</a>\n                      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 footer_col\">\n        <div class=\"footer_links\">\n          <div class=\"footer_title\">Quick menu</div>\n          <ul class=\"footer_list\">\n            <li><a class=\"nav-link\" routerLink=\"/index\">Home</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/product\">Product</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 footer_col\">\n        <div class=\"footer_links\">\n          <div class=\"footer_title\">Useful Links</div>\n          <ul class=\"footer_list\">\n            <li><a class=\"nav-link\" routerLink=\"/index\">Home</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/product\">Product</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a></li>\n            <li><a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 footer_col\">\n        <div class=\"footer_contact\">\n          <div class=\"footer_title\">Contact Us</div>\n          <div class=\"footer_contact_info\">\n            <div class=\"footer_contact_item\">\n              <div class=\"footer_contact_title\">Address:</div>\n              <div class=\"footer_contact_line\">UMIYA INDUSTRIES LLC, RANDOLPH,\n              NEW JERSEY-07869, USA</div>\n            </div>\n            <div class=\"footer_contact_item\">\n              <div class=\"footer_contact_title\">Phone:</div>\n              <div class=\"footer_contact_line\">+1 - 862-803-4216</div>\n            </div>\n            <div class=\"footer_contact_item\">\n              <div class=\"footer_contact_title\">Email:</div>\n              <div class=\"footer_contact_line\">info@umiyaind.com</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/head/head.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/head/head.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9oZWFkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/head/head.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/head/head.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n<title>Umiya Industries LLC, USA</title>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"description\" content=\"Elearn project\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>"

/***/ }),

/***/ "./src/app/components/head/head.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/head/head.component.ts ***!
  \***************************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
    }
    HeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/components/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/components/head/head.component.css")]
        })
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n\n/* html, body { height: 100%; } */\n\n/* body { margin: 0; font-family: 'Roboto', sans-serif; } */\n\n.card-header {\n  padding-top: 0;\n  margin-bottom: 0;\n  background-color: #4D0B27 !important;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  height: 25px !important;\n  font-weight: bold !important;\n  color: #fff; \n}\n\n.icon-bar {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  size: 10px;\n}\n\n.icon-bar a {\n  display: block;\n  text-align: center;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 20px;\n}\n\n.icon-bar a:hover {\n  background-color: #000;\n}\n\n.facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.twitter {\n  background: #55ACEE;\n  color: white;\n}\n\n.google {\n  background: #dd4b39;\n  color: white;\n}\n\n.linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.youtube {\n  background: #bb0000;\n  color: white;\n}\n\n.content {\n  margin-left: 75px;\n  font-size: 30px;\n}\n\n.navbar-custom {\n    background-color: #7F462C;\n    color: #fff;\n    font-family: \"Times New Roman\", Times, serif;\n}\n\n/* change the brand and text color */\n\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n/*     color: rgba(255,255,255,.8); */\n    color: #fff;\n}\n\n/* change the link color */\n\n.navbar-custom .navbar-nav .nav-link {\n/*     color: rgba(255,255,255,.5); */\n    color: #fff;\n}\n\n/* change the color of active or hovered links */\n\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n    color: #000;\n    background-color: #FFA07A;\n}\n\n/* for dropdown only - change the color of droodown */\n\n.navbar-custom .dropdown-menu {\n    background-color: #74DF00;\n}\n\n.navbar-custom .dropdown-item {\n    color: #ffffff;\n}\n\n.navbar-custom .dropdown-item:hover,\n.navbar-custom .dropdown-item:focus {\n    color: #333333;\n    background-color: #74DF00;\n}\n\n.dropdown:hover>.dropdown-menu {\n  display: block;\n}\n\n.dropdown>.dropdown-toggle:active {\n  /*Without this, clicking will make it sticky*/\n    pointer-events: none;\n}\n\n.fa {\n  padding: 10px;\n  font-size: 30px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa-twitter {\n  background: #55ACEE;\n  color: white;\n}\n\n.fa-google {\n  background: #dd4b39;\n  color: white;\n}\n\n.fa-linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.fa-youtube {\n  background: #bb0000;\n  color: white;\n}\n\n.fa-instagram {\n  background: #125688;\n  color: white;\n}\n\n.fa-pinterest {\n  background: #cb2027;\n  color: white;\n}\n\n.fa-snapchat-ghost {\n  background: #fffc00;\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n\n.fa-skype {\n  background: #00aff0;\n  color: white;\n}\n\n.fa-android {\n  background: #a4c639;\n  color: white;\n}\n\n.fa-dribbble {\n  background: #ea4c89;\n  color: white;\n}\n\n.fa-vimeo {\n  background: #45bbff;\n  color: white;\n}\n\n.fa-tumblr {\n  background: #2c4762;\n  color: white;\n}\n\n.fa-vine {\n  background: #00b489;\n  color: white;\n}\n\n.fa-foursquare {\n  background: #45bbff;\n  color: white;\n}\n\n.fa-stumbleupon {\n  background: #eb4924;\n  color: white;\n}\n\n.fa-flickr {\n  background: #f40083;\n  color: white;\n}\n\n.fa-yahoo {\n  background: #430297;\n  color: white;\n}\n\n.fa-soundcloud {\n  background: #ff5500;\n  color: white;\n}\n\n.fa-reddit {\n  background: #ff5700;\n  color: white;\n}\n\n.fa-rss {\n  background: #ff6600;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RSxpQ0FBaUM7O0FBQ2pDLDJEQUEyRDs7QUFFM0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUdSLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQSxvQ0FBb0M7O0FBQ3BDOztBQUVBLHFDQUFxQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUEsMEJBQTBCOztBQUMxQjtBQUNBLHFDQUFxQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUEsZ0RBQWdEOztBQUNoRDs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBLHFEQUFxRDs7QUFDckQ7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBOztJQUVJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkNBQTZDO0lBQzNDLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vKiBodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9ICovXG4vKiBib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH0gKi9cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDBCMjcgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7IFxufVxuXG4uaWNvbi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBzaXplOiAxMHB4O1xufVxuXG4uaWNvbi1iYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWNvbi1iYXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm5hdmJhci1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RjQ2MkM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLyogY2hhbmdlIHRoZSBicmFuZCBhbmQgdGV4dCBjb2xvciAqL1xuLm5hdmJhci1jdXN0b20gLm5hdmJhci1icmFuZCxcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XG4vKiAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpOyAqL1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBjaGFuZ2UgdGhlIGxpbmsgY29sb3IgKi9cbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4vKiAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpOyAqL1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGFjdGl2ZSBvciBob3ZlcmVkIGxpbmtzICovXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayxcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkEwN0E7XG59XG5cbi8qIGZvciBkcm9wZG93biBvbmx5IC0gY2hhbmdlIHRoZSBjb2xvciBvZiBkcm9vZG93biAqL1xuLm5hdmJhci1jdXN0b20gLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NERGMDA7XG59XG4ubmF2YmFyLWN1c3RvbSAuZHJvcGRvd24taXRlbSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4ubmF2YmFyLWN1c3RvbSAuZHJvcGRvd24taXRlbTpob3Zlcixcbi5uYXZiYXItY3VzdG9tIC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzRERjAwO1xufVxuXG4uZHJvcGRvd246aG92ZXI+LmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duPi5kcm9wZG93bi10b2dnbGU6YWN0aXZlIHtcbiAgLypXaXRob3V0IHRoaXMsIGNsaWNraW5nIHdpbGwgbWFrZSBpdCBzdGlja3kqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZmEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDVweCAycHg7XG59XG5cbi5mYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uZmEtZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS15b3V0dWJlIHtcbiAgYmFja2dyb3VuZDogI2JiMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZDogIzEyNTY4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtcGludGVyZXN0IHtcbiAgYmFja2dyb3VuZDogI2NiMjAyNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtc25hcGNoYXQtZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmYzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xufVxuXG4uZmEtc2t5cGUge1xuICBiYWNrZ3JvdW5kOiAjMDBhZmYwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1hbmRyb2lkIHtcbiAgYmFja2dyb3VuZDogI2E0YzYzOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZHJpYmJibGUge1xuICBiYWNrZ3JvdW5kOiAjZWE0Yzg5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS12aW1lbyB7XG4gIGJhY2tncm91bmQ6ICM0NWJiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXR1bWJsciB7XG4gIGJhY2tncm91bmQ6ICMyYzQ3NjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXZpbmUge1xuICBiYWNrZ3JvdW5kOiAjMDBiNDg5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1mb3Vyc3F1YXJlIHtcbiAgYmFja2dyb3VuZDogIzQ1YmJmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtc3R1bWJsZXVwb24ge1xuICBiYWNrZ3JvdW5kOiAjZWI0OTI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1mbGlja3Ige1xuICBiYWNrZ3JvdW5kOiAjZjQwMDgzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS15YWhvbyB7XG4gIGJhY2tncm91bmQ6ICM0MzAyOTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXNvdW5kY2xvdWQge1xuICBiYWNrZ3JvdW5kOiAjZmY1NTAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1yZWRkaXQge1xuICBiYWNrZ3JvdW5kOiAjZmY1NzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1yc3Mge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"icon-bar\"> -->\n<!--   <a href=\"https://www.facebook.com\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>  -->\n<!--   <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>  -->\n<!--   <a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a>  -->\n<!--   <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a> -->\n<!--   <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a>  -->\n<!-- </div> -->\n\n<header class=\"header\">\n\t\t\t\n  <!-- Top Bar -->\n  <div class=\"top_bar\">\n    <div class=\"top_bar_container\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"top_bar_content d-flex flex-row align-items-center justify-content-start\">\n              <ul class=\"top_bar_contact_list\">\n                <li><div class=\"question\">Call Us: +1 862-803-4216</div></li>\n                <li>\n                  <div>Contact Us: info@umiyaind.com</div>\n                </li>\n              </ul>\n<!--               <div class=\"top_bar_login ml-auto\"> -->\n<!--                 <ul> -->\n<!--                   <li><a routerLink=\"/register\">Register</a></li> -->\n<!--                   <li *ngIf=\"loginService.currentUserValue == null\"><a (click)=\"onLogin();\" style=\"color: white;\">Login</a></li> -->\n<!--                   <li *ngIf=\"loginService.currentUserValue != null\"><a (click)=\"onLogout();\" style=\"color: white;\">Logout</a></li> -->\n<!--                 </ul> -->\n<!--               </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\t\t\t\t\n  </div>\n\n  <!-- Header Content -->\n  <div class=\"header_container\">\n<!--     <div class=\"container\"> -->\n<!--       <div class=\"row\"> -->\n<!--         <div class=\"col\"> -->\n<!--         \t<div class=\"logo_container\"> -->\n        \t<a routerLink=\"/index\">\n<!--         \t\t<div class=\"logo_content d-flex flex-row align-items-end justify-content-start\"> -->\n<!--                   <div class=\"logo_img\"> -->\n                  \t<img src=\"../../assets/images/logo/1.jpg\" alt=\"\" style=\"height: 90px;width: 30%\">\n<!--                   </div> -->\n<!--                 </div> -->\n            </a>\n<!--             </div> -->\n<!--         </div> -->\n<!--         </div>\t -->\n<!--       <div class=\"row\"> -->\n<!--         <div class=\"col\"> -->\n\n\t\t\t\t<nav class=\"navbar navbar-expand-sm navbar-custom\">\n<!--     <a href=\"/\" class=\"navbar-brand\">Custom</a> -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCustom\">\n        <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbarCustom\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/index\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" routerLink=\"/product\">Product</a>\n<!--                 <a class=\"nav-link dropdown-toggle\" routerLink=\"/product\"  -->\n<!--                 \tid=\"navbarDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> -->\n<!--                   Product -->\n<!--                 </a> -->\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" \n                \t*ngFor=\"let product of productList\">\t\n          \t\t\t<a class=\"dropdown-item\" [routerLink]=\"['/details', product._id]\">{{product.name}}</a>\n\t\t\t    </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/admin\">Admin</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<!--           \t\t<nav class=\"navbar navbar-expand-sm navbar-custom\" style=\"height: 40px;width: 100%\"> -->\n<!-- \t\t\t\t  <a class=\"navbar-brand\" href=\"#\"></a> -->\n<!-- \t\t\t\t  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"  -->\n<!-- \t\t\t\t  \tdata-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"  -->\n<!-- \t\t\t\t  \taria-expanded=\"false\" aria-label=\"Toggle navigation\"> -->\n<!-- \t\t\t\t    <span class=\"navbar-toggler-icon\"></span> -->\n<!-- \t\t\t\t  </button> -->\n\t\t\t\t\n<!-- \t\t\t\t  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"> -->\n<!-- \t\t\t\t    <ul class=\"navbar-nav mr-auto\"> -->\n<!-- \t\t\t\t      <li class=\"nav-item active\"> -->\n<!-- \t\t\t\t        <a class=\"nav-link\" routerLink=\"/index\">Home <span class=\"sr-only\">(current)</span></a> -->\n<!-- \t\t\t\t      </li> -->\n<!-- \t\t\t\t      <li class=\"nav-item\"> -->\n<!-- \t\t\t\t        <a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a> -->\n<!-- \t\t\t\t      </li> -->\n<!-- \t\t\t\t\t <li class=\"nav-item\"> -->\n<!-- \t\t\t\t        <a class=\"nav-link\" routerLink=\"/product\">Product</a> -->\n<!-- \t\t\t\t      </li> -->\n\t\t\t\t      \n\t\t\t\t      \n<!-- \t\t\t\t        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> -->\n<!-- \t\t\t\t          <div *ngFor=\"let product of productList\">\t -->\n<!-- \t\t\t\t          \t\t<a class=\"dropdown-item\" [routerLink]=\"['/details', product._id]\">{{product.name}}</a> -->\n<!-- \t\t\t\t\t\t  </div> -->\n<!-- \t\t\t\t        </div> -->\n\n\n<!-- \t\t\t\t      <li class=\"nav-item\"> -->\n<!-- \t\t\t\t        <a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a> -->\n<!-- \t\t\t\t      </li> -->\n<!-- \t\t\t\t    </ul> -->\n<!-- \t\t\t\t  </div> -->\n<!-- \t\t\t\t  <nav class=\"navbar navbar-expand-sm navbar-custom\"> -->\n<!-- \t\t\t\t      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"height: 40px;\"> -->\n<!-- \t\t\t\t      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" style=\"height: 40px;\">Search</button> -->\n<!-- \t\t\t\t  </nav> -->\n<!-- \t\t\t\t</nav> -->\n  </div>\n\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, productService, loginService) {
        this.modalService = modalService;
        this.productService = productService;
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    HeaderComponent.prototype.getProductList = function () {
        var _this = this;
        this.productService.get().subscribe(function (res) {
            _this.productList = res;
        });
    };
    HeaderComponent.prototype.onLogin = function () {
        this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]);
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item > img {\n  width:100%;\n  height:300px;\n}\n\n.card-header {\n  padding-top: 0;\n  margin-bottom: 0;\n  background-color: #4D0B27 !important;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  height: 25px !important;\n  font-weight: bold !important;\n  color: #fff;\n  \n}\n\n.cta-100 {\n  margin-top: 100px;\n  padding-left: 8%;\n  padding-top: 7%;\n}\n\n.col-md-4{\n    padding-bottom:20px;\n}\n\n.white {\n  color: #fff !important;\n}\n\n.mt{float: left;margin-top: -20px;padding-top: 20px;}\n\n.bg-blue-ui {\n  background-color: #4D0B27 !important;\n}\n\nfigure img{\n\twidth:300px;\n\theight: 300px;\n}\n\n#blogCarousel {\n  padding-bottom: 100px;\n}\n\n.blog .carousel-indicators {\n  left: 0;\n  top: -50px;\n  height: 50%;\n}\n\n/* The colour of the indicators */\n\n.blog .carousel-indicators li {\n  background: #708198;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n}\n\n.blog .carousel-indicators .active {\n  background: #0fc9af;\n}\n\n.item-carousel-blog-block {\n  outline: medium none;\n  padding: 15px;\n}\n\n.item-box-blog {\n  border: 1px solid #dadada;\n  text-align: center;\n  z-index: 4;\n  padding: 20px;\n}\n\n.item-box-blog-image {\n  position: relative;\n}\n\n.item-box-blog-image figure img {\n  width: 270px;\n  height: 270px;\n}\n\n.item-box-blog-date {\n  position: absolute;\n  z-index: 5;\n  padding: 4px 20px;\n  top: -20px;\n  right: 8px;\n  background-color: #41cb52;\n}\n\n.item-box-blog-date span {\n  color: #fff;\n  display: block;\n  text-align: center;\n  line-height: 1.2;\n}\n\n.item-box-blog-date span.mon {\n  font-size: 18px;\n}\n\n.item-box-blog-date span.day {\n  font-size: 16px;\n}\n\n.item-box-blog-body {\n  padding: 10px;\n}\n\n.item-heading-blog a h5 {\n  margin: 0;\n  line-height: 1;\n  text-decoration:none;\n  transition: color 0.3s;\n}\n\n.item-box-blog-heading a {\n    text-decoration: none;\n}\n\n.item-box-blog-data p {\n  font-size: 13px;\n}\n\n.item-box-blog-data p i {\n  font-size: 12px;\n}\n\n.item-box-blog-text {\n/*   max-height: 100%; */\n  overflow: auto;\n}\n\n.mt-10 {\n  float: left;\n  margin-top: -10px;\n  padding-top: 10px;\n}\n\n.btn.bg-blue-ui.white.read {\n  cursor: pointer;\n  padding: 4px 20px;\n  float: left;\n  margin-top: 10px;\n}\n\n.btn.bg-blue-ui.white.read:hover {\n  box-shadow: 0px 5px 15px inset #4d5f77;\n}\n\n.sidebar1 {\n    background: #F17153;\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(#F17153, #F58D63, #f1ab53);\n    /* Standard syntax */\n    padding: 0px;\n    min-height: 100%;\n}\n\n.logo {\n    max-height: 130px;\n}\n\n.logo>img {\n    margin-top: 30px;\n    padding: 3px;\n    border: 3px solid white;\n    border-radius: 100%;\n}\n\n.list {\n    color: #fff;\n    list-style: none;\n    padding-left: 0px;\n}\n\n.list::first-line {\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.list> li, h5 {\n    padding: 5px 0px 5px 40px;\n}\n\n.list>li:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-left: 5px solid white;\n    color: white;\n    font-weight: bolder;\n    padding-left: 35px;\n}\n\n.main-content{\ntext-align:center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixXQUFXOztBQUViOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDOztBQUNwRDtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFHQSxpQ0FBaUM7O0FBRWpDO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUtBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7QUFDQSx3QkFBd0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLCtDQUErQztJQUUvQywwQkFBMEI7SUFFMUIsMkJBQTJCO0lBRTNCLDBCQUEwQjtJQUMxQixzREFBc0Q7SUFDdEQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBQUM7QUFDRCxpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzAwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQwQjI3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBcbn1cblxuLmN0YS0xMDAge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDclO1xufVxuLmNvbC1tZC00e1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubXR7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogLTIwcHg7cGFkZGluZy10b3A6IDIwcHg7fVxuLmJnLWJsdWUtdWkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQwQjI3ICFpbXBvcnRhbnQ7XG59XG5maWd1cmUgaW1ne1xuXHR3aWR0aDozMDBweDtcblx0aGVpZ2h0OiAzMDBweDtcbn1cblxuI2Jsb2dDYXJvdXNlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmJsb2cgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBsZWZ0OiAwO1xuICB0b3A6IC01MHB4O1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuXG4vKiBUaGUgY29sb3VyIG9mIHRoZSBpbmRpY2F0b3JzICovXG5cbi5ibG9nIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYmFja2dyb3VuZDogIzcwODE5ODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLmJsb2cgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwZmM5YWY7XG59XG5cblxuXG5cbi5pdGVtLWNhcm91c2VsLWJsb2ctYmxvY2sge1xuICBvdXRsaW5lOiBtZWRpdW0gbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLml0ZW0tYm94LWJsb2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pdGVtLWJveC1ibG9nLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXRlbS1ib3gtYmxvZy1pbWFnZSBmaWd1cmUgaW1nIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDI3MHB4O1xufVxuXG4uaXRlbS1ib3gtYmxvZy1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgdG9wOiAtMjBweDtcbiAgcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxY2I1Mjtcbn1cblxuLml0ZW0tYm94LWJsb2ctZGF0ZSBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5pdGVtLWJveC1ibG9nLWRhdGUgc3Bhbi5tb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pdGVtLWJveC1ibG9nLWRhdGUgc3Bhbi5kYXkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pdGVtLWJveC1ibG9nLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbS1oZWFkaW5nLWJsb2cgYSBoNSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuXG4uaXRlbS1ib3gtYmxvZy1oZWFkaW5nIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLml0ZW0tYm94LWJsb2ctZGF0YSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXRlbS1ib3gtYmxvZy1kYXRhIHAgaSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW0tYm94LWJsb2ctdGV4dCB7XG4vKiAgIG1heC1oZWlnaHQ6IDEwMCU7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubXQtMTAge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYnRuLmJnLWJsdWUtdWkud2hpdGUucmVhZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuLmJnLWJsdWUtdWkud2hpdGUucmVhZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCBpbnNldCAjNGQ1Zjc3O1xufVxuXG5cblxuLnNpZGViYXIxIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjE3MTUzO1xuICAgIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNGMTcxNTMsICNGNThENjMsICNmMWFiNTMpO1xuICAgIC8qIEZvciBTYWZhcmkgNS4xIHRvIDYuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjRjE3MTUzLCAjRjU4RDYzLCAjZjFhYjUzKTtcbiAgICAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoI0YxNzE1MywgI0Y1OEQ2MywgI2YxYWI1Myk7XG4gICAgLyogRm9yIEZpcmVmb3ggMy42IHRvIDE1ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGMTcxNTMsICNGNThENjMsICNmMWFiNTMpO1xuICAgIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmxvZ28ge1xuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xufVxuLmxvZ28+aW1nIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmxpc3Qge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ubGlzdDo6Zmlyc3QtbGluZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5saXN0PiBsaSwgaDUge1xuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDQwcHg7XG59XG4ubGlzdD5saTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xufS5tYWluLWNvbnRlbnR7XG50ZXh0LWFsaWduOmNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n  <div class=\"milestones\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n                        <div class=\"col\">\n\n                          <div class=\"home_content text-center\">\n<!--                           \t<img src=\"../../assets/images/slides1.jpg\"/> -->\n<!-- \t\t\t\t\t\t\t<div class=\"home_title\">About us</div> -->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\n\t\t\t\t\t\t\t\t\t  <ul class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n\t\t\t\t\t\t\t\t\t    <li data-target=\"#demo\" data-slide-to=\"4\"></li>\n\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  <!-- The slideshow -->\n\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/occ/1.jpg\" alt=\"Los Angeles\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/hdpe/1.jpg\" alt=\"Chicago\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/occ/3.jpg\" alt=\"New York\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/office/office1.jpg\" alt=\"New York\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t      <img src=\"../../assets/images/occ/docc.jpg\" alt=\"New York\">\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\n\t\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\"></span>\n\t\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\"></span>\n\t\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\n                          </div>\n            \n                        </div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  <div id=\"wrapper\">\n\n    <!-- start header -->\n   \t<app-header></app-header>\n    <!-- end header -->\n\n    <app-menu></app-menu>\n\n\t\t<section id=\"content\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"column w-100\">\n\t\t\t\t\n\t\t\t\t\t\t<mdb-card borderColor=\"border-success\"> \n\t\t\t\t\t\t\t<mdb-card-header>Welcome to UMIYA INDUSTRIES LLC, USA</mdb-card-header>\n\t\t\t\t\t\t\t<mdb-card-body> \n\t\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\t\tUMIYA INDUSTRIES LLC is a US based trading company specializing in the purchase,\n\t\t\t\t\t\t\t\t\tsale and distribution of plastic (LDPE, HDPE, PVC), Paper (OCC 11 and 12).\n\t\t\t\t\t\t\t\t\tWe buy and sell these materials in all their different forms such as Granule.\n\t\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mdb-card-text>\n\t\t\t\t\t\t\t\t\tUMIYA INDUSTRIES LLC Sales is a Exporter of Plastic (LDPE, HDPE Granule) and papers in the global market.\n\t\t\t\t\t\t\t\t</mdb-card-text>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t</section>\n\t\t\n<!-- \t\t<div class=\"container cta-100 \"> -->\n<!--         <div class=\"container\"> -->\n<!--           <div class=\"row blog\"> -->\n<!--             <div class=\"col-md-12\"> -->\n<!--               <div id=\"blogCarousel\" class=\"carousel slide container-blog\" data-ride=\"carousel\"> -->\n<!--                 <ol class=\"carousel-indicators\"> -->\n<!--                   <li data-target=\"#blogCarousel\" data-slide-to=\"0\" class=\"active\"></li> -->\n<!--                   <li data-target=\"#blogCarousel\" data-slide-to=\"1\"></li> -->\n<!--                 </ol> -->\n                <!-- Carousel items -->\n<!--                 <div class=\"carousel-inner\"> -->\n<!--                   <div class=\"carousel-item active\"> -->\n<!--                     <div class=\"row\"> -->\n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"http://spendbridge.com/wp-content/uploads/2017/10/College-Student-300-wide.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"https://www.phdstudent.com/images/How_to_Stand_Out_in_a_Class_of_300.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"https://www.irishtimes.com/polopoly_fs/1.1865017.1405284336!/image/image.jpg_gen/derivatives/box_620_330/image.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n<!--                     </div> -->\n<!--                     .row -->\n<!--                   </div> -->\n<!--                   .item -->\n<!--                   <div class=\"carousel-item \"> -->\n<!--                     <div class=\"row\"> -->\n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"https://image.shutterstock.com/image-photo/multiracial-students-walking-university-hall-450w-685407757.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n                      \n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"https://image.shutterstock.com/image-photo/student-450w-374128723.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n                      \n<!--                       <div class=\"col-md-4\" > -->\n<!--                         <div class=\"item-box-blog\"> -->\n<!--                           <div class=\"item-box-blog-image\"> -->\n<!--                             Date -->\n<!-- <!--                             <div class=\"item-box-blog-date bg-blue-ui white\"> <span class=\"mon\">Augu 01</span> </div> -->\n<!--                             Image -->\n<!--                             <figure> <img alt=\"\" src=\"https://image.shutterstock.com/image-photo/happy-young-university-students-studying-450w-522554425.jpg\"> </figure> -->\n<!--                           </div> -->\n<!--                           <div class=\"item-box-blog-body\"> -->\n<!--                             Heading -->\n<!--                             <div class=\"item-box-blog-heading\"> -->\n<!--                               <a href=\"#\" tabindex=\"0\"> -->\n<!--                                 <h5>News Title</h5> -->\n<!--                               </a> -->\n<!--                             </div> -->\n<!--                             Text -->\n<!--                             <div class=\"item-box-blog-text\"> -->\n<!--                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p> -->\n<!--                             </div> -->\n<!--                             <div class=\"mt\"> <a href=\"#\" tabindex=\"0\" class=\"btn bg-blue-ui white read\">read more</a> </div> -->\n<!--                             Read More Button -->\n<!--                           </div> -->\n<!--                         </div> -->\n<!--                       </div> -->\n                      \n                     \n<!--                     </div> -->\n<!--                     .row -->\n<!--                   </div> -->\n                  \n                  \n<!--                 </div> -->\n                <!--.carousel-inner-->\n<!--               </div> -->\n              <!--.Carousel-->\n<!--             </div> -->\n<!--           </div> -->\n<!--         </div> -->\n<!--       </div> -->\n      \n\n\t<app-footer></app-footer>\n    \n  </div>\n  <a href=\"#\" class=\"scrollup\"><i class=\"icon-angle-up icon-square icon-bglight icon-2x active\"></i></a>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        localStorage.removeItem('currentUser');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/homebody/homebody.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homebody/homebody.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZWJvZHkvaG9tZWJvZHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/homebody/homebody.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homebody/homebody.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"home_slider_container\">\n    \n    <!-- Home Slider -->\n    <div class=\"owl-carousel owl-theme home_slider\">\n      \n      <!-- Slider Item -->\n      <div class=\"owl-item\">\n        <!-- Background image artist https://unsplash.com/@benwhitephotography -->\n        <div class=\"home_slider_background\" style=\"background-image:url(../../assets/images/index.jpg)\"></div>\n        <div class=\"home_container\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"home_content text-center\">\n                  <div class=\"home_logo\"><img src=\"../../assets/images/home_logo.png\" alt=\"\"></div>\n                  <div class=\"home_text\">\n                    <div class=\"home_title\">Register Online</div>\n                    <div class=\"home_subtitle\">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>\n                  </div>\n                  <div class=\"home_buttons\">\n                    <div class=\"button home_button\"><a href=\"#\">learn more<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                    <div class=\"button home_button\"><a href=\"#\">see all courses<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Slider Item -->\n      <div class=\"owl-item\">\n        <!-- Background image artist https://unsplash.com/@benwhitephotography -->\n        <div class=\"home_slider_background\" style=\"background-image:url(../../assets/images/index.jpg)\"></div>\n        <div class=\"home_container\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"home_content text-center\">\n                  <div class=\"home_logo\"><img src=\"../../assets/images/home_logo.png\" alt=\"\"></div>\n                  <div class=\"home_text\">\n                    <div class=\"home_title\">Complete Courses Details</div>\n                    <div class=\"home_subtitle\">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>\n                  </div>\n                  <div class=\"home_buttons\">\n                    <div class=\"button home_button\"><a href=\"#\">learn more<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                    <div class=\"button home_button\"><a href=\"#\">see all courses<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Slider Item -->\n      <div class=\"owl-item\">\n        <!-- Background image artist https://unsplash.com/@benwhitephotography -->\n        <div class=\"home_slider_background\" style=\"background-image:url(../../assets/images/index.jpg)\"></div>\n        <div class=\"home_container\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"home_content text-center\">\n                  <div class=\"home_logo\"><img src=\"../../assets/images/home_logo.png\" alt=\"\"></div>\n                  <div class=\"home_text\">\n                    <div class=\"home_title\">Complete Online Courses</div>\n                    <div class=\"home_subtitle\">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>\n                  </div>\n                  <div class=\"home_buttons\">\n                    <div class=\"button home_button\"><a href=\"#\">learn more<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                    <div class=\"button home_button\"><a href=\"#\">see all courses<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Featured Course -->\n\n<div class=\"featured\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <!-- Home Slider Nav -->\n        <div class=\"home_slider_nav_container d-flex flex-row align-items-start justify-content-between\">\n          <div class=\"home_slider_nav home_slider_prev trans_200\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></div>\n          <div class=\"home_slider_nav home_slider_next trans_200\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n        </div>\n        <div class=\"featured_container\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 featured_col\">\n              <div class=\"featured_content\">\n                <div class=\"featured_header d-flex flex-row align-items-center justify-content-start\">\n                  <div class=\"featured_tag\"><a href=\"#\">Featured</a></div>\n                  <div class=\"featured_price ml-auto\">Price: <span>$35</span></div>\n                </div>\n                <div class=\"featured_title\"><h3><a href=\"courses.html\">Online Literature Course</a></h3></div>\n                <div class=\"featured_text\">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Donec vehicula efficitur nibh, in pretium nulla interdum non.</div>\n                <div class=\"featured_footer d-flex align-items-center justify-content-start\">\n                  <div class=\"featured_author_image\"><img src=\"../../assets/images/featured_author.jpg\" alt=\"\"></div>\n                  <div class=\"featured_author_name\">By <a href=\"#\">James S. Morrison</a></div>\n                  <div class=\"featured_sales ml-auto\"><span>352</span> Sales</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 featured_col\">\n              <!-- Background image artist https://unsplash.com/@jtylernix -->\n              <div class=\"featured_background\" style=\"background-image:url(../../assets/images/featured.jpg)\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Courses -->\n\n<div class=\"courses\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-10 offset-lg-1\">\n        <div class=\"section_title text-center\"><h2>Choose your course</h2></div>\n        <div class=\"section_subtitle\">Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut</div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"course_search\">\n          <form action=\"#\" class=\"course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between\">\n            <div><input type=\"text\" class=\"course_input\" placeholder=\"Course\" required=\"required\"></div>\n            <div><input type=\"text\" class=\"course_input\" placeholder=\"Level\" required=\"required\"></div>\n            <button class=\"course_button\"><span>search course</span><span class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span></button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        \n        <!-- Courses Slider -->\n        <div class=\"courses_slider_container\">\n          <div class=\"owl-carousel owl-theme courses_slider\">\n            \n            <!-- Slider Item -->\n            <div class=\"owl-item\">\n              <div class=\"course\">\n                <div class=\"course_image\"><img src=\"../../assets/images/course_1.jpg\" alt=\"\"></div>\n                <div class=\"course_body\">\n                  <div class=\"course_header d-flex flex-row align-items-center justify-content-start\">\n                    <div class=\"course_tag\"><a href=\"#\">Featured</a></div>\n                    <div class=\"course_price ml-auto\">Price: <span>$35</span></div>\n                  </div>\n                  <div class=\"course_title\"><h3><a href=\"courses.html\">Online Literature Course</a></h3></div>\n                  <div class=\"course_text\">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>\n                  <div class=\"course_footer d-flex align-items-center justify-content-start\">\n                    <div class=\"course_author_image\"><img src=\"../../assets/images/featured_author.jpg\" alt=\"https://unsplash.com/@anthonytran\"></div>\n                    <div class=\"course_author_name\">By <a href=\"#\">James S. Morrison</a></div>\n                    <div class=\"course_sales ml-auto\"><span>352</span> Sales</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Slider Item -->\n            <div class=\"owl-item\">\n              <div class=\"course\">\n                <div class=\"course_image\"><img src=\"../../assets/images/course_2.jpg\" alt=\"\"></div>\n                <div class=\"course_body\">\n                  <div class=\"course_header d-flex flex-row align-items-center justify-content-start\">\n                    <div class=\"course_tag\"><a href=\"#\">New</a></div>\n                    <div class=\"course_price ml-auto\">Price: <span>$35</span></div>\n                  </div>\n                  <div class=\"course_title\"><h3><a href=\"courses.html\">Social Media Course</a></h3></div>\n                  <div class=\"course_text\">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>\n                  <div class=\"course_footer d-flex align-items-center justify-content-start\">\n                    <div class=\"course_author_image\"><img src=\"../../assets/images/course_author_2.jpg\" alt=\"\"></div>\n                    <div class=\"course_author_name\">By <a href=\"#\">Mark Smith</a></div>\n                    <div class=\"course_sales ml-auto\"><span>352</span> Sales</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Slider Item -->\n            <div class=\"owl-item\">\n              <div class=\"course\">\n                <div class=\"course_image\"><img src=\"../../assets/images/course_3.jpg\" alt=\"https://unsplash.com/@annademy\"></div>\n                <div class=\"course_body\">\n                  <div class=\"course_header d-flex flex-row align-items-center justify-content-start\">\n                    <div class=\"course_tag\"><a href=\"#\">Featured</a></div>\n                    <div class=\"course_price ml-auto\">Price: <span>$35</span></div>\n                  </div>\n                  <div class=\"course_title\"><h3><a href=\"courses.html\">Marketing Course</a></h3></div>\n                  <div class=\"course_text\">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>\n                  <div class=\"course_footer d-flex align-items-center justify-content-start\">\n                    <div class=\"course_author_image\"><img src=\"../../assets/images/course_author_3.jpg\" alt=\"\"></div>\n                    <div class=\"course_author_name\">By <a href=\"#\">Julia Williams</a></div>\n                    <div class=\"course_sales ml-auto\"><span>352</span> Sales</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          \n          <!-- Courses Slider Nav -->\n          <div class=\"courses_slider_nav courses_slider_prev trans_200\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></div>\n          <div class=\"courses_slider_nav courses_slider_next trans_200\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Milestones -->\n\n<div class=\"milestones\">\n  <!-- Background image artis https://unsplash.com/@thepootphotographer -->\n  <div class=\"parallax_background parallax-window\" data-parallax=\"scroll\" style=\"background-image:  url(../../assets/images/milestones.jpg)\" data-speed=\"0.8\"></div>\n  <div class=\"container\">\n    <div class=\"row milestones_container\">\n            \n      <!-- Milestone -->\n      <div class=\"col-lg-3 milestone_col\">\n        <div class=\"milestone text-center\">\n          <div class=\"milestone_icon\"><img src=\"../../assets/images/milestone_1.svg\" alt=\"\"></div>\n          <div class=\"milestone_counter\" data-end-value=\"1548\">0</div>\n          <div class=\"milestone_text\">Online Courses</div>\n        </div>\n      </div>\n\n      <!-- Milestone -->\n      <div class=\"col-lg-3 milestone_col\">\n        <div class=\"milestone text-center\">\n          <div class=\"milestone_icon\"><img src=\"../../assets/images/milestone_2.svg\" alt=\"\"></div>\n          <div class=\"milestone_counter\" data-end-value=\"7286\">0</div>\n          <div class=\"milestone_text\">Students</div>\n        </div>\n      </div>\n\n      <!-- Milestone -->\n      <div class=\"col-lg-3 milestone_col\">\n        <div class=\"milestone text-center\">\n          <div class=\"milestone_icon\"><img src=\"../../assets/images/milestone_3.svg\" alt=\"\"></div>\n          <div class=\"milestone_counter\" data-end-value=\"257\">0</div>\n          <div class=\"milestone_text\">Teachers</div>\n        </div>\n      </div>\n\n      <!-- Milestone -->\n      <div class=\"col-lg-3 milestone_col\">\n        <div class=\"milestone text-center\">\n          <div class=\"milestone_icon\"><img src=\"../../assets/images/milestone_4.svg\" alt=\"\"></div>\n          <div class=\"milestone_counter\" data-end-value=\"39\">0</div>\n          <div class=\"milestone_text\">Countries</div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Sections -->\n\n<div class=\"grouped_sections\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Why Choose Us -->\n\n      <div class=\"col-lg-4 grouped_col\">\n        <div class=\"grouped_title\">Why Choose Us?</div>\n        <div class=\"accordions\">\n\n          <div class=\"accordion_container\">\n            <div class=\"accordion d-flex flex-row align-items-center active\"><div>Mauris vehicula nisi congue?</div></div>\n            <div class=\"accordion_panel\">\n              <div>\n                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"accordion_container\">\n            <div class=\"accordion d-flex flex-row align-items-center\"><div>Vehicula nisi congue, blandit?</div></div>\n            <div class=\"accordion_panel\">\n              <div>\n                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"accordion_container\">\n            <div class=\"accordion d-flex flex-row align-items-center\"><div>Mauris vehicula nisi congue?</div></div>\n            <div class=\"accordion_panel\">\n              <div>\n                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"accordion_container\">\n            <div class=\"accordion d-flex flex-row align-items-center\"><div>Nisi congue, blandit purus sed?</div></div>\n            <div class=\"accordion_panel\">\n              <div>\n                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- Events -->\n\n      <div class=\"col-lg-4 grouped_col\">\n        <div class=\"grouped_title\">Upcoming Events</div>\n        <div class=\"events\">\n\n          <!-- Event -->\n          <div class=\"event d-flex flex-row align-items-start justify-content-start\">\n            <div>\n              <div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n                <div class=\"event_day\">20</div>\n                <div class=\"event_month\">April</div>\n              </div>\n            </div>\n            <div class=\"event_body\">\n              <div class=\"event_title\"><a href=\"#\">New Marketing Course Release</a></div>\n              <div class=\"event_subtitle\">Location: Online Platform</div>\n            </div>\n          </div>\n\n          <!-- Event -->\n          <div class=\"event d-flex flex-row align-items-start justify-content-start\">\n            <div>\n              <div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n                <div class=\"event_day\">23</div>\n                <div class=\"event_month\">April</div>\n              </div>\n            </div>\n            <div class=\"event_body\">\n              <div class=\"event_title\"><a href=\"#\">Students Art Workshop</a></div>\n              <div class=\"event_subtitle\">Location: Online Platform</div>\n            </div>\n          </div>\n\n          <!-- Event -->\n          <div class=\"event d-flex flex-row align-items-start justify-content-start\">\n            <div>\n              <div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n                <div class=\"event_day\">25</div>\n                <div class=\"event_month\">April</div>\n              </div>\n            </div>\n            <div class=\"event_body\">\n              <div class=\"event_title\"><a href=\"#\">Launch Party for a new Platform</a></div>\n              <div class=\"event_subtitle\">Location: Online Platform</div>\n            </div>\n          </div>\n\n          <!-- Event -->\n          <div class=\"event d-flex flex-row align-items-start justify-content-start\">\n            <div>\n              <div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n                <div class=\"event_day\">27</div>\n                <div class=\"event_month\">April</div>\n              </div>\n            </div>\n            <div class=\"event_body\">\n              <div class=\"event_title\"><a href=\"#\">New Marketing Course</a></div>\n              <div class=\"event_subtitle\">Location: Online Platform</div>\n            </div>\n          </div>\n\n          <!-- Event -->\n          <div class=\"event d-flex flex-row align-items-start justify-content-start\">\n            <div>\n              <div class=\"event_date d-flex flex-column align-items-center justify-content-center\">\n                <div class=\"event_day\">29</div>\n                <div class=\"event_month\">April</div>\n              </div>\n            </div>\n            <div class=\"event_body\">\n              <div class=\"event_title\"><a href=\"#\">New Marketing Course</a></div>\n              <div class=\"event_subtitle\">Location: Online Platform</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- News -->\n\n      <div class=\"col-lg-4 grouped_col\">\n        <div class=\"grouped_title\">Latest News</div>\n        <div class=\"news\">\n          \n          <!-- News Post -->\n          <div class=\"news_post d-flex flex-row align-items-start justify-content-start\">\n            <div><div class=\"news_post_image\"><img src=\"../../assets/images/news_1.jpg\" alt=\"https://unsplash.com/@beccatapert\"></div></div>\n            <div class=\"news_post_body\">\n              <div class=\"news_post_date\">April 02, 2018</div>\n              <div class=\"news_post_title\"><a href=\"news.html\">Why Choose online education?</a></div>\n              <div class=\"news_post_author\">By <a href=\"#\">William Smith</a></div>\n            </div>\n          </div>\n\n          <!-- News Post -->\n          <div class=\"news_post d-flex flex-row align-items-start justify-content-start\">\n            <div><div class=\"news_post_image\"><img src=\"../../assets/images/news_2.jpg\" alt=\"https://unsplash.com/@nbb_photos\"></div></div>\n            <div class=\"news_post_body\">\n              <div class=\"news_post_date\">April 02, 2018</div>\n              <div class=\"news_post_title\"><a href=\"news.html\">Books, Kindle or tablet?</a></div>\n              <div class=\"news_post_author\">By <a href=\"#\">William Smith</a></div>\n            </div>\n          </div>\n\n          <!-- News Post -->\n          <div class=\"news_post d-flex flex-row align-items-start justify-content-start\">\n            <div><div class=\"news_post_image\"><img src=\"../../assets/images/news_3.jpg\" alt=\"https://unsplash.com/@rawpixel\"></div></div>\n            <div class=\"news_post_body\">\n              <div class=\"news_post_date\">April 02, 2018</div>\n              <div class=\"news_post_title\"><a href=\"news.html\">Why Choose online education?</a></div>\n              <div class=\"news_post_author\">By <a href=\"#\">William Smith</a></div>\n            </div>\n          </div>\n\n          <!-- News Post -->\n          <div class=\"news_post d-flex flex-row align-items-start justify-content-start\">\n            <div><div class=\"news_post_image\"><img src=\"../../assets/images/news_4.jpg\" alt=\"https://unsplash.com/@jtylernix\"></div></div>\n            <div class=\"news_post_body\">\n              <div class=\"news_post_date\">April 02, 2018</div>\n              <div class=\"news_post_title\"><a href=\"news.html\">Books, Kindle or tablet?</a></div>\n              <div class=\"news_post_author\">By <a href=\"#\">William Smith</a></div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Video -->\n\n<div class=\"video\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"video_container_outer\">\n          <div class=\"video_container\">\n            <!-- Video poster image artist: https://unsplash.com/@annademy -->\n            <!-- <video id=\"vid1\" class=\"video-js vjs-default-skin\" controls data-setup='{ \"poster\": \"../../assets/images/video.jpg\", \"techOrder\": [\"youtube\"], \"sources\": [{ \"type\": \"video/youtube\", \"src\": \"https://youtu.be/5_MRXyYjHDk\"}], \"youtube\": { \"iv_load_policy\": 1 } }'> -->\n            <!-- </video> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Join -->\n\n<div class=\"join\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-10 offset-lg-1\">\n        <div class=\"section_title text-center\"><h2>Join Our Course Today</h2></div>\n        <div class=\"section_subtitle\">Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"button join_button\"><a href=\"#\">register now<div class=\"button_arrow\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div></a></div>\n</div>"

/***/ }),

/***/ "./src/app/components/homebody/homebody.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homebody/homebody.component.ts ***!
  \***********************************************************/
/*! exports provided: HomebodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomebodyComponent", function() { return HomebodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomebodyComponent = /** @class */ (function () {
    function HomebodyComponent() {
    }
    HomebodyComponent.prototype.ngOnInit = function () {
    };
    HomebodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homebody',
            template: __webpack_require__(/*! ./homebody.component.html */ "./src/app/components/homebody/homebody.component.html"),
            styles: [__webpack_require__(/*! ./homebody.component.css */ "./src/app/components/homebody/homebody.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomebodyComponent);
    return HomebodyComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Log In</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form [formGroup]='loginForm' #loginForm1>\n\t<div class=\"modal-body\">\n\t  <div class=\"container\">\n\t\t<div *ngIf=\"!isValid\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t{{ errorMessage }}\n\t\t</div>\t\n\t    <div class=\"form-group\">\n\t      <label for=\"username\">Username</label>\n\t      <input id=\"username\" type=\"text\" class=\"form-control\" />\n\t    </div>\n\t    <div class=\"form-group\">\n\t      <label for=\"password\">Password</label>\n\t      <input id=\"password\" type=\"text\" class=\"form-control\">\n\t    </div>\n\t  </div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t  <button id=\"student-cancel-btn\" type=\"submit\" class=\"btn btn-danger btn-sm\" \n    \t\t  (click)=\"close()\">Cancel</button>\n\t  <button id=\"student-submit-btn\" type=\"button\" \n\t    class=\"btn btn-primary btn-sm\" (click)=\"onSignin(loginForm1)\">Login</button>\n\t    \n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, activatedRoute, activeModal, loginService, router) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.activeModal = activeModal;
        this.loginService = loginService;
        this.router = router;
        this.isValid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
        console.log('this.returnUrl : ' + this.returnUrl);
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSignin = function (form) {
        //      this.authenticationService.login(form.username.value,form.password.value);
        //      console.log('return url : ' + this.returnUrl);
        //      this.activeModal.close(this.dataForm.value);
        var _this = this;
        this.loginService.login(form.username.value, form.password.value).subscribe(function (res) {
            if (res != null) {
                console.log('res : ' + res);
                if (_this.close()) {
                    _this.isValid = true;
                    if (res != null) {
                        setTimeout(function () {
                            _this.router.navigate(['/admin/managestudent']);
                        }, 1000);
                    }
                    if (localStorage.getItem('currenturl') == '/admin') {
                        setTimeout(function () {
                            _this.router.navigate(['/admin/managestudent']);
                        }, 500);
                    }
                }
            }
            else {
                _this.isValid = false;
                _this.errorMessage = 'Username or password is incorrect';
            }
        }, function (error) {
            _this.isValid = false;
            _this.errorMessage = 'Service Fail while login users. Please try again.';
            console.log('error >>>> ' + error);
        });
    };
    LoginComponent.prototype.close = function () {
        this.activeModal.close(this.loginForm.value);
        return true;
    };
    LoginComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    min-width: 500px;\n}\n \nth.mat-header-cell {\n    text-align: left;\n    max-width: 300px;\n}\n \n/* .example-container { */\n \n/*   display: flex; */\n \n/*   flex-direction: column; */\n \n/*   min-width: 300px; */\n \n/* } */\n \n/* .example-header { */\n \n/*   min-height: 64px; */\n \n/*   padding: 8px 24px 0; */\n \n/* } */\n \n/* .mat-form-field { */\n \n/*   font-size: 14px; */\n \n/*   width: 100%; */\n \n/* } */\n \n/* .mat-table { */\n \n/*   overflow: auto; */\n \n/*   max-height: 500px; */\n \n/* } */\n \n/* table { */\n \n/* \twidth: 100%; */\n \n/*     overflow-x: auto; */\n \n/*     overflow-y: hidden; */\n \n/*     min-width: 500px; */\n \n/* } */\n \n/* th.mat-header-cell { */\n \n/*     text-align: left; */\n \n/*     max-width: 300px; */\n \n/* } */\n \n/* .example-container { */\n \n/*   display: flex; */\n \n/*   flex-direction: column; */\n \n/*   min-width: 300px; */\n \n/* } */\n \n/* .example-header { */\n \n/*   min-height: 64px; */\n \n/*   padding: 8px 24px 0; */\n \n/* } */\n \n/* .mat-form-field { */\n \n/*   font-size: 14px; */\n \n/*   width: 100%; */\n \n/* } */\n \n/* .mat-table { */\n \n/*   overflow: auto; */\n \n/*   max-height: 500px; */\n \n/* } */\n \n/* .carousel-item > img { */\n \n/*   width:100%; */\n \n/*   height:300px; */\n \n/* } */\n \n/* .slider_info > img { */\n \n/*   width:100px; */\n \n/*   height:100px; */\n \n/* } */\n \n/* .col-md-4{ */\n \n/*   display: inline-block; */\n \n/*   margin-left:-10px; */\n \n/* } */\n \n/* .col-md-4 img{ */\n \n/*   width:100%; */\n \n/*   height:auto; */\n \n/* } */\n \n/* body .carousel-control-prev-icon, */\n \n/* body .carousel-indicators li, */\n \n/* body .carousel-control-next-icon{ */\n \n/*   background-color:#000; */\n \n/* } */\n \n/* span.carousel-control-prev-icon { */\n \n/*  position: relative; */\n \n/*  bottom: 40px; */\n \n/*  right: 40px; */\n \n/* } */\n \n/* span.carousel-control-next-icon { */\n \n/*  position: relative; */\n \n/*  bottom: 40px; */\n \n/* } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUN6QixxQkFBcUI7O0FBQ3JCLDhCQUE4Qjs7QUFDOUIsd0JBQXdCOztBQUN4QixNQUFNOztBQUVOLHNCQUFzQjs7QUFDdEIsd0JBQXdCOztBQUN4QiwyQkFBMkI7O0FBQzNCLE1BQU07O0FBRU4sc0JBQXNCOztBQUN0Qix1QkFBdUI7O0FBQ3ZCLG1CQUFtQjs7QUFDbkIsTUFBTTs7QUFFTixpQkFBaUI7O0FBQ2pCLHNCQUFzQjs7QUFDdEIseUJBQXlCOztBQUN6QixNQUFNOztBQUdOLFlBQVk7O0FBQ1osa0JBQWtCOztBQUNsQiwwQkFBMEI7O0FBQzFCLDRCQUE0Qjs7QUFDNUIsMEJBQTBCOztBQUMxQixNQUFNOztBQUVOLHlCQUF5Qjs7QUFDekIsMEJBQTBCOztBQUMxQiwwQkFBMEI7O0FBQzFCLE1BQU07O0FBRU4seUJBQXlCOztBQUN6QixxQkFBcUI7O0FBQ3JCLDhCQUE4Qjs7QUFDOUIsd0JBQXdCOztBQUN4QixNQUFNOztBQUNOLHNCQUFzQjs7QUFDdEIsd0JBQXdCOztBQUN4QiwyQkFBMkI7O0FBQzNCLE1BQU07O0FBRU4sc0JBQXNCOztBQUN0Qix1QkFBdUI7O0FBQ3ZCLG1CQUFtQjs7QUFDbkIsTUFBTTs7QUFFTixpQkFBaUI7O0FBQ2pCLHNCQUFzQjs7QUFDdEIseUJBQXlCOztBQUN6QixNQUFNOztBQUVOLDJCQUEyQjs7QUFDM0Isa0JBQWtCOztBQUNsQixvQkFBb0I7O0FBQ3BCLE1BQU07O0FBRU4seUJBQXlCOztBQUN6QixtQkFBbUI7O0FBQ25CLG9CQUFvQjs7QUFDcEIsTUFBTTs7QUFHTixlQUFlOztBQUNmLDZCQUE2Qjs7QUFDN0IseUJBQXlCOztBQUN6QixNQUFNOztBQUNOLG1CQUFtQjs7QUFDbkIsa0JBQWtCOztBQUNsQixtQkFBbUI7O0FBQ25CLE1BQU07O0FBRU4sc0NBQXNDOztBQUN0QyxrQ0FBa0M7O0FBQ2xDLHNDQUFzQzs7QUFDdEMsNkJBQTZCOztBQUM3QixNQUFNOztBQUVOLHNDQUFzQzs7QUFDdEMseUJBQXlCOztBQUN6QixtQkFBbUI7O0FBQ25CLGtCQUFrQjs7QUFDbEIsTUFBTTs7QUFFTixzQ0FBc0M7O0FBQ3RDLHlCQUF5Qjs7QUFDekIsbUJBQW1COztBQUNuQixNQUFNIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xufVxuIFxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi8qIC5leGFtcGxlLWNvbnRhaW5lciB7ICovXG4vKiAgIGRpc3BsYXk6IGZsZXg7ICovXG4vKiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4vKiAgIG1pbi13aWR0aDogMzAwcHg7ICovXG4vKiB9ICovXG5cbi8qIC5leGFtcGxlLWhlYWRlciB7ICovXG4vKiAgIG1pbi1oZWlnaHQ6IDY0cHg7ICovXG4vKiAgIHBhZGRpbmc6IDhweCAyNHB4IDA7ICovXG4vKiB9ICovXG5cbi8qIC5tYXQtZm9ybS1maWVsZCB7ICovXG4vKiAgIGZvbnQtc2l6ZTogMTRweDsgKi9cbi8qICAgd2lkdGg6IDEwMCU7ICovXG4vKiB9ICovXG5cbi8qIC5tYXQtdGFibGUgeyAqL1xuLyogICBvdmVyZmxvdzogYXV0bzsgKi9cbi8qICAgbWF4LWhlaWdodDogNTAwcHg7ICovXG4vKiB9ICovXG5cblxuLyogdGFibGUgeyAqL1xuLyogXHR3aWR0aDogMTAwJTsgKi9cbi8qICAgICBvdmVyZmxvdy14OiBhdXRvOyAqL1xuLyogICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cbi8qICAgICBtaW4td2lkdGg6IDUwMHB4OyAqL1xuLyogfSAqL1xuXG4vKiB0aC5tYXQtaGVhZGVyLWNlbGwgeyAqL1xuLyogICAgIHRleHQtYWxpZ246IGxlZnQ7ICovXG4vKiAgICAgbWF4LXdpZHRoOiAzMDBweDsgKi9cbi8qIH0gKi9cblxuLyogLmV4YW1wbGUtY29udGFpbmVyIHsgKi9cbi8qICAgZGlzcGxheTogZmxleDsgKi9cbi8qICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbi8qICAgbWluLXdpZHRoOiAzMDBweDsgKi9cbi8qIH0gKi9cbi8qIC5leGFtcGxlLWhlYWRlciB7ICovXG4vKiAgIG1pbi1oZWlnaHQ6IDY0cHg7ICovXG4vKiAgIHBhZGRpbmc6IDhweCAyNHB4IDA7ICovXG4vKiB9ICovXG5cbi8qIC5tYXQtZm9ybS1maWVsZCB7ICovXG4vKiAgIGZvbnQtc2l6ZTogMTRweDsgKi9cbi8qICAgd2lkdGg6IDEwMCU7ICovXG4vKiB9ICovXG5cbi8qIC5tYXQtdGFibGUgeyAqL1xuLyogICBvdmVyZmxvdzogYXV0bzsgKi9cbi8qICAgbWF4LWhlaWdodDogNTAwcHg7ICovXG4vKiB9ICovXG5cbi8qIC5jYXJvdXNlbC1pdGVtID4gaW1nIHsgKi9cbi8qICAgd2lkdGg6MTAwJTsgKi9cbi8qICAgaGVpZ2h0OjMwMHB4OyAqL1xuLyogfSAqL1xuXG4vKiAuc2xpZGVyX2luZm8gPiBpbWcgeyAqL1xuLyogICB3aWR0aDoxMDBweDsgKi9cbi8qICAgaGVpZ2h0OjEwMHB4OyAqL1xuLyogfSAqL1xuXG5cbi8qIC5jb2wtbWQtNHsgKi9cbi8qICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuLyogICBtYXJnaW4tbGVmdDotMTBweDsgKi9cbi8qIH0gKi9cbi8qIC5jb2wtbWQtNCBpbWd7ICovXG4vKiAgIHdpZHRoOjEwMCU7ICovXG4vKiAgIGhlaWdodDphdXRvOyAqL1xuLyogfSAqL1xuICBcbi8qIGJvZHkgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLCAqL1xuLyogYm9keSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSwgKi9cbi8qIGJvZHkgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29ueyAqL1xuLyogICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ICovXG4vKiB9ICovXG5cbi8qIHNwYW4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24geyAqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbi8qICBib3R0b206IDQwcHg7ICovXG4vKiAgcmlnaHQ6IDQwcHg7ICovXG4vKiB9ICovXG5cbi8qIHNwYW4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24geyAqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbi8qICBib3R0b206IDQwcHg7ICovXG4vKiB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #dataModal let-modal>\n\t<div class=\"modal-header\" style=\"position: relative;z-index: 1;\">\n\t  <h4 class=\"modal-title\">Product Add/Update Form</h4>\n\t</div>\n\t<form [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"editSubmit(dataForm)\">\n\t  <div class=\"modal-boy\">\n\t    <div class=\"container\">\n\t      <div class=\"form-group\">\n\t        <label for=\"name\">Product Name</label>\n\t        <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\" />\n\t      </div>\n\t      <div class=\"form-group\">\n\t        <label for=\"details\">Details</label>\n\t        <input id=\"details\" type=\"text\" class=\"form-control\" formControlName=\"details\">\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"modal-footer\">\n\t    <button id=\"data-cancel-btn\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"closeModal()\">Cancel</button>\n\t\t<button id=\"data-submit-btn\" type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!dataForm.valid\">Submit</button>\n\t  </div>\n\t</form>\n</ng-template>\n\n<!-- <div class=\"container\"> -->\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal()\">New Product</button>\n\t<custom-button [text]=\"'click me!'\" (countChanged)=\"handleCountChanged($event)\"></custom-button>\n  \n\t\t<div class=\"example-container mat-elevation-z8\">\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\t\t  <ng-container matColumnDef=\"name\">\n\t\t    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n\t\t    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n\t\t  </ng-container>\n\t\t  \n\t\t  <ng-container matColumnDef=\"detail\">\n\t\t     <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n\t\t     <td mat-cell *matCellDef=\"let row\"> {{row.details}} </td>\n<!-- \t\t    <td mat-cell *matCellDef=\"let row\"> -->\n<!-- \t\t      <button mat-icon-button color=\"primary\" (click)=\"redirectToDetails(row.id)\"> -->\n<!-- \t\t          <mat-icon class=\"mat-18\">reorder</mat-icon> -->\n<!-- \t\t      </button> -->\n<!-- \t\t    </td> -->\n\t\t  </ng-container>\n\t\t  \n\t\t  <ng-container matColumnDef=\"update\">\n\t\t      <th mat-header-cell *matHeaderCellDef> Update </th>\n\t\t      <td mat-cell *matCellDef=\"let row\">\n\t\t        <button mat-icon-button color=\"accent\" (click)=\"edit(row)\">\n\t\t            <mat-icon class=\"mat-18\">system_update</mat-icon>\n\t\t        </button>\n\t\t      </td>\n\t\t    </ng-container>\n\t\t \n\t\t    <ng-container matColumnDef=\"delete\">\n\t\t        <th mat-header-cell *matHeaderCellDef> Delete </th>\n\t\t        <td mat-cell *matCellDef=\"let row\">\n\t\t          <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n\t\t              <mat-icon class=\"mat-18\">delete</mat-icon>\n\t\t          </button>\n\t\t        </td>\n\t\t      </ng-container>\n\t\t \n\t\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n\n  <mat-paginator [pageSizeOptions]=\"[2, 4, 5, 100]\"></mat-paginator>\n</div>\n    \n<!-- \t\t<div class=\"container\"> -->\n<!-- \t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<ag-grid-angular -->\n<!-- \t\t\t\t\t\t\t#agGrid -->\n<!-- \t\t\t\t\t\t\tid=\"myGrid\" -->\n<!-- \t\t\t\t\t\t\tstyle=\"width: 480px; height: 400px;\" -->\n<!-- \t\t\t\t\t\t\tclass=\"ag-theme-balham\" -->\n<!-- \t\t\t\t\t\t\t[enableSorting]=\"true\" -->\n<!-- \t\t\t\t\t\t\t[enableFilter]=\"true\" -->\n<!-- \t\t\t\t\t\t\t[rowData]=\"rowData\" -->\n<!-- \t\t\t\t\t\t\trowSelection='multiple' -->\n<!-- \t\t\t\t\t\t\t(gridReady)=\"onGridReady($event)\" -->\n<!-- \t\t\t\t\t\t\t[columnDefs]=\"columnDefs\"> -->\n<!-- \t\t\t\t\t</ag-grid-angular> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/page-action/page-action.component */ "./src/app/common/components/page-action/page-action.component.ts");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/alert.service */ "./src/app/common/services/alert.service.ts");
/* harmony import */ var _common_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/confirmation-dialog.service */ "./src/app/common/services/confirmation-dialog.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts
//https://code-maze.com/angular-material-table/
//https://www.gistia.com/custom-elements-angular-modularization-html5/
var ProductComponent = /** @class */ (function () {
    function ProductComponent(fb, productService, modalService, confirmationDialogService, alertService) {
        this.fb = fb;
        this.productService = productService;
        this.modalService = modalService;
        this.confirmationDialogService = confirmationDialogService;
        this.alertService = alertService;
        this.displayedColumns = ['name', 'detail', 'update', 'delete'];
        this.count = null;
        this.createForm();
    }
    ProductComponent.prototype.handleCountChanged = function ($event) {
        this.count = $event;
        console.log('count: ' + this.count);
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.getData();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.rowData);
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProductComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ProductComponent.prototype.createForm = function () {
        this.dataForm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            details: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    };
    ProductComponent.prototype.getData = function () {
        var _this = this;
        this.productService.get().subscribe(function (res) {
            _this.rowData = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.rowData);
        });
    };
    ProductComponent.prototype.onGridReady = function (params) {
        this.columnDefs = [
            { headerName: 'Name', field: 'name' },
            { headerName: 'Details', field: 'details' },
            { cellRendererFramework: _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_1__["PageActionComponent"],
                cellRendererParams: { pageAction: 'edit' },
                width: 40, tooltip: function () { return 'Edit'; } },
            { cellRendererFramework: _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_1__["PageActionComponent"],
                cellRendererParams: { pageAction: 'delete' },
                width: 40, tooltip: function () { return 'Delete'; } },
        ];
        this.gridOptions = {
            rowData: this.rowData,
            rowHeight: 36,
            context: { componentParent: this }
        };
        this.gridApi = params.api;
        this.gridApi.gridOptions = this.gridOptions;
    };
    ProductComponent.prototype.openModal = function () {
        this.dataForm.reset();
        this.modalRef = this.modalService.open(this.dataModal);
    };
    ProductComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    ProductComponent.prototype.edit = function (selectedData) {
        this.dataForm.setValue({
            id: selectedData._id,
            name: selectedData.name,
            details: selectedData.details
        });
        this.modalRef = this.modalService.open(this.dataModal);
    };
    ProductComponent.prototype.editSubmit = function (dataForm) {
        var formData = dataForm.value;
        if (formData.id !== null) {
            this.update(formData);
            this.closeModal();
            this.alertService.openSnackBar('succesfully updated product information ' + formData.name, '', 'success');
        }
        else {
            this.create(formData);
            this.alertService.showSuccessMessage('succesfully Addedd product information', 'top', 2000);
        }
    };
    ProductComponent.prototype.update = function (formData) {
        var _this = this;
        this.productService.update(formData).subscribe(function () {
            _this.getData();
        });
    };
    ProductComponent.prototype.create = function (formData) {
        var _this = this;
        this.productService.create(formData).subscribe(function (res) {
            _this.closeModal();
            _this.getData();
        }, function (error) {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
    };
    ProductComponent.prototype.delete = function (selectedRow) {
        var _this = this;
        this.confirmationDialogService.confirm('Please confirm..', 'Do you want to delete this product information ... ? ' + selectedRow.name, 'Ok', 'Cancel', 'sm')
            .then(function (confirmed) {
            if (confirmed) {
                _this.productService.delete(selectedRow._id).subscribe(function () {
                    _this.getData();
                    _this.alertService.showSuccessMessage('Successfully deleted product information ' + selectedRow.name, 'top', 2000);
                });
            }
        })
            .catch(function () { return console.log('User dismissed the confirm delete dialog....'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ProductComponent.prototype, "dataModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], ProductComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], ProductComponent.prototype, "sort", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _common_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"],
            _common_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<app-head></app-head>\n\n<body>\n\n  <div class=\"milestones\">\n\t\t<!-- Background image artis https://unsplash.com/@thepootphotographer -->\n\t\t<div class=\"parallax_background parallax-window\" data-parallax=\"scroll\" style=\"background-image: url(../../assets/images/contact.jpg);\" data-speed=\"0.8\"></div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n                        <div class=\"col\">\n\n                          <div class=\"home_content text-center\">\n\t\t\t\t\t\t\t<div class=\"home_title\">User Register</div>\n                          </div>\n            \n                        </div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  <div id=\"wrapper\">\n\n    <!-- start header -->\n   \t<app-header></app-header>\n    <!-- end header -->\n\n    <app-menu></app-menu>\n\n    <section id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n\n            <form id=\"registerForm\" [formGroup]=\"registerForm\" (ngSubmit)=\"create(registerForm)\"\n                  mustMatch=\"['password', 'confirmPassword']\">\n\n                  <div *ngIf=\"!isValid && message != null\" class=\"alert alert-danger\" role=\"alert\">\n                    {{ message }}\n                  </div>\n                  <div *ngIf=\"isValid && message != null\" class=\"alert alert-success\" role=\"alert\">\n                    {{ message }}\n                  </div>\t\n\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"fname\">Firstname *</label>\n                                  <input id=\"fname\" name=\"fname\" type=\"text\" class=\"form-control\" \n                                  ng-pattern=\"[a-zA-Z]\" formControlName=\"fname\" placeholder=\"Please enter your firstname *\" \n                                  data-error=\"Firstname is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"lname\">Lastname *</label>\n                                  <input id=\"lname\" type=\"text\" class=\"form-control\" \n                                  ng-pattern=\"[a-zA-Z]\" formControlName=\"lname\" placeholder=\"Please enter your lastname *\" \n                                  data-error=\"Lastname is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"username\">Username *</label>\n                                  <input id=\"username\" type=\"text\" class=\"form-control\" \n                                  formControlName=\"username\" placeholder=\"Please enter your username *\" \n                                  data-error=\"Firstname is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"password\">password *</label>\n                                  <input id=\"password\" type=\"text\" class=\"form-control\" \n                                  formControlName=\"password\" placeholder=\"Please enter your password *\"\n                                  data-error=\"password is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          </div>\n                          <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"email\">Email *</label>\n                                  <input id=\"email\" type=\"email\" class=\"form-control\" \n                                  formControlName=\"email\" placeholder=\"Please enter your email *\" \n                                  data-error=\"Valid email is required.\">\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          </div>\n                          <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"subcourse\">Course *</label>\n                                  <select formControlName=\"course\" class=\"form-control inputstl\"\n                                          (change)=\"onChangeCourse($event.target.value)\">\n                                    <option *ngFor=\"let course of courses\" value=\"{{course._id}}\">\n                                        {{course.name}}\n                                    </option>\n                                  </select>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"subcourse\">Sub Course *</label>\n                                   <select formControlName=\"subcourse\" class=\"form-control inputstl\">\n                                    <option *ngFor=\"let subCourse of subCourses | filter : selectedCourse\" \n                                            value=\"{{subCourse._id}}\">\n                                        {{subCourse.name}}\n                                    </option>\n                                  </select>\n                              </div>\n                          </div>\n                          </div>\n                          <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <label for=\"address\">Address</label>\n                                  <textarea id=\"address\" class=\"form-control\" \n                                  formControlName=\"address\" placeholder=\"Please enter your address\" rows=\"4\" data-error=\"Please, leave us a message.\"></textarea>\n                                  <div class=\"help-block with-errors\"></div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                             <button id=\"data-cancel-btn\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"reset()\">Cancel</button>\n                             <button id=\"student-submit-btn\" type=\"submit\" \n                             class=\"btn btn-primary btn-sm\" [disabled]=\"!registerForm.valid\">Submit</button>\n                          </div>\n                      </div>\n              </form>\n\n          </div>\n          <div class=\"col\">\n\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <app-footer></app-footer>\n    \n  </div>\n\n</body>\n\n</html>\n\n\n                          <!-- <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"subcourse\">Course *</label>\n                                  <input formControlName=\"searchText\" \n                                  [(ngModel)]=\"searchText\"\n                                  placeholder=\"search text goes here\">\n                              <ul>\n                                <li *ngFor=\"let c of courses | filter : searchText\">\n                                    {{c.name}}\n                                </li>\n                            </ul>\n                              </div>\n                          </div>\n                          </div> -->"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_subproduct_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/subproduct.service */ "./src/app/services/subproduct.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService, subproductService, productService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.subproductService = subproductService;
        this.productService = productService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getProducts();
        this.getSubProducts('');
    };
    RegisterComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.get().subscribe(function (res) {
            _this.products = res;
        });
    };
    RegisterComponent.prototype.getSubProducts = function (productId) {
        var _this = this;
        this.subproductService.findOne(productId).subscribe(function (res) {
            _this.subProducts = res;
        });
    };
    RegisterComponent.prototype.onChangeProduct = function (selectedProduct) {
        this.selectedProduct = selectedProduct;
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            fname: [''],
            lname: [''],
            email: [''],
            username: [''],
            password: [''],
            address: [''],
            product: [''],
            subproduct: [''],
            selectedProduct: [''],
            searchText: ['']
        });
    };
    RegisterComponent.prototype.create = function (formData) {
        var _this = this;
        var formData = this.registerForm.value;
        this.userService.create(formData).subscribe(function (res) {
            _this.message = 'successfully registered.';
            _this.isValid = true;
            _this.reset();
        }, function (error) {
            _this.message = 'Faile while register. Please try again.';
            _this.isValid = false;
        });
    };
    RegisterComponent.prototype.reset = function () {
        this.registerForm.reset();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_subproduct_service__WEBPACK_IMPORTED_MODULE_4__["SubproductService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/subproduct/subproduct.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/subproduct/subproduct.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VicHJvZHVjdC9zdWJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/subproduct/subproduct.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/subproduct/subproduct.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  subproduct works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/subproduct/subproduct.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/subproduct/subproduct.component.ts ***!
  \***************************************************************/
/*! exports provided: SubproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubproductComponent", function() { return SubproductComponent; });
/* harmony import */ var _services_subproduct_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/subproduct.service */ "./src/app/services/subproduct.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/page-action/page-action.component */ "./src/app/common/components/page-action/page-action.component.ts");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/alert.service */ "./src/app/common/services/alert.service.ts");
/* harmony import */ var _common_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/confirmation-dialog.service */ "./src/app/common/services/confirmation-dialog.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { saveAs } from "file-saver";
//import { FileItem } from "ng2-file-upload/file-upload/file-item.class";

var URL = 'http://localhost:4000/api/upload';
var SubproductComponent = /** @class */ (function () {
    function SubproductComponent(fb, subProductService, productService, modalService, confirmationDialogService, alertService) {
        this.fb = fb;
        this.subProductService = subProductService;
        this.productService = productService;
        this.modalService = modalService;
        this.confirmationDialogService = confirmationDialogService;
        this.alertService = alertService;
        this.modalContent = 'margin-left: 20px !important';
        this.show = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    SubproductComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getData();
        this.getProducts();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
    };
    SubproductComponent.prototype.createForm = function () {
        this.dataForm = this.fb.group({
            id: '',
            name: '',
            product: '',
            details: '',
            items: this.fb.array([])
        });
    };
    SubproductComponent.prototype.addItem = function () {
        this.items = this.dataForm.get('items');
        this.items.push(this.createItem());
    };
    SubproductComponent.prototype.createItem = function () {
        return this.fb.group({
            id: '',
            label: '',
            description: ''
        });
    };
    SubproductComponent.prototype.setItems = function (items) {
        var _this = this;
        var control = this.dataForm.controls.items;
        items.forEach(function (x) {
            control.push(_this.fb.group({
                label: x.label,
                description: x.description
            }));
        });
    };
    SubproductComponent.prototype.edit = function (selectedData) {
        console.log('------------------');
        var element = document.getElementById('pills-profile-tab');
        element.click();
        this.show = true;
        console.log('selectedData._id : ' + selectedData._id);
        this.dataForm.patchValue({
            id: selectedData._id,
            name: selectedData.name,
            product: selectedData.product._id,
            details: selectedData.details
        });
        this.setItems(selectedData.items);
    };
    SubproductComponent.prototype.deleteFieldValue = function (index) {
        this.items.removeAt(index);
    };
    SubproductComponent.prototype.getData = function () {
        var _this = this;
        this.subProductService.get().subscribe(function (res) {
            _this.rowData = res;
        });
    };
    SubproductComponent.prototype.create = function (formData) {
        var _this = this;
        //      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        //      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //         console.log('ImageUpload:uploaded:', item, status, response);
        //         alert('File uploaded successfully');
        //    };
        if (formData.id !== null) {
            this.subProductService.create(formData).subscribe(function (res) {
                _this.getData();
            }, function (error) {
                // this.errorMessage = error;
                // console.log('this.errorMessage : ' + error);
                // this.alertService.showError(error);
                // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
            });
        }
        else {
            this.subProductService.update(formData).subscribe(function (res) {
                _this.getData();
            }, function (error) {
                // this.errorMessage = error;
                // console.log('this.errorMessage : ' + error);
                // this.alertService.showError(error);
                // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
            });
        }
    };
    SubproductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.get().subscribe(function (res) {
            _this.products = res;
        });
    };
    SubproductComponent.prototype.delete = function (selectedRow) {
        var _this = this;
        this.confirmationDialogService.confirm('Please confirm..', 'Do you want to delete this product information ... ? ' + selectedRow.name, 'Ok', 'Cancel', 'sm')
            .then(function (confirmed) {
            if (confirmed) {
                _this.subProductService.delete(selectedRow._id).subscribe(function () {
                    _this.getData();
                    _this.alertService.showSuccessMessage('succesfully deleted product information ' + selectedRow.name, 'top', 2000);
                });
            }
        })
            .catch(function () { return console.log('User dismissed the confirm delete dialog....'); });
    };
    SubproductComponent.prototype.onGridReady = function (params) {
        this.columnDefs = [
            { headerName: 'Product', field: 'product.name' },
            { headerName: 'Sub Product', field: 'name' },
            { cellRendererFramework: _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_4__["PageActionComponent"],
                cellRendererParams: { pageAction: 'edit' },
                width: 40, tooltip: function () { return 'Edit'; } },
            { cellRendererFramework: _common_components_page_action_page_action_component__WEBPACK_IMPORTED_MODULE_4__["PageActionComponent"],
                cellRendererParams: { pageAction: 'delete' },
                width: 40, tooltip: function () { return 'Delete'; } },
        ];
        this.gridOptions = {
            rowData: this.rowData,
            rowHeight: 36,
            context: { componentParent: this }
        };
        this.gridApi = params.api;
        this.gridApi.gridOptions = this.gridOptions;
    };
    SubproductComponent.prototype.editSubmit = function (dataForm) {
        var formData = dataForm.value;
        console.log('formData ' + formData.items);
        //    for (let i = 0; i < dataForm.controls.items.controls.length; i++) {
        //      console.log(dataForm.controls.items.controls[i].controls.label.value);
        //      console.log(dataForm.controls.items.controls[i].controls.description.value);
        //    }
        //      const formData = dataForm.value;
        //      if (formData.id !== null) {
        //          this.update(formData);
        //          this.closeModal();
        //          this.alertService.openSnackBar('succesfully updated product information ' + formData.name,'','success');
        //      } else {
        this.create(formData);
        this.alertService.showSuccessMessage('succesfully Addedd student information', 'top', 2000);
        //      }
    };
    SubproductComponent.prototype.update = function (formData) {
        var _this = this;
        this.subProductService.update(formData).subscribe(function () {
            _this.getData();
        });
    };
    SubproductComponent.prototype.openModal = function () {
        this.dataForm.reset();
        this.modalRef = this.modalService.open(this.dataModal);
    };
    SubproductComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], SubproductComponent.prototype, "dataModal", void 0);
    SubproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-subproduct',
            template: __webpack_require__(/*! ./subproduct.component.html */ "./src/app/components/subproduct/subproduct.component.html"),
            styles: [__webpack_require__(/*! ./subproduct.component.css */ "./src/app/components/subproduct/subproduct.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_subproduct_service__WEBPACK_IMPORTED_MODULE_0__["SubproductService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _common_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"],
            _common_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], SubproductComponent);
    return SubproductComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, modalService, loginService) {
        this.router = router;
        this.modalService = modalService;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.loginService.currentUserValue;
        if (currentUser) {
            return true;
        }
        else {
            localStorage.setItem('currenturl', state.url);
            // not logged in so redirect to login page with the return url
            this.modalService.open(_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
            // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        console.log('window.location.origin' + window.location.origin);
        if (window.location.origin == 'http://localhost:4000' || window.location.origin == 'http://localhost:4200') {
            this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }
        else {
            this.apiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["prodEnvironment"].apiUrl;
        }
        console.log('this.apiUrl : ' + this.apiUrl);
    }
    DataService.prototype.post = function (uri, formData) {
        console.log('DataService url ' + formData.id);
        return this.http.post(this.apiUrl + uri, formData).map(function (res) {
            console.log('res ' + res);
            return res;
        });
    };
    DataService.prototype.get = function (uri, populate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("populate", populate);
        var localUri = this.apiUrl + uri;
        return this.http.get(localUri).map(function (res) {
            return res;
        });
    };
    DataService.prototype.findOne = function (uri, id, populate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("populate", populate);
        var localUri = this.apiUrl + uri;
        return this.http.get(localUri + id, { params: params }).map(function (res) {
            return res;
        });
    };
    DataService.prototype.put = function (uri, formData) {
        var localUri = this.apiUrl + uri;
        return this.http.put(localUri + formData.id, formData).map(function (res) {
            return res;
        });
    };
    DataService.prototype.delete = function (uri) {
        return this.http.delete(this.apiUrl + uri).map(function (res) {
            return res;
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(dataService) {
        this.dataService = dataService;
        this.uri = 'authenticate/users/';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        return this.dataService.post(this.uri, {
            username: username,
            password: password
        }).map(function (res) {
            if (res != null) {
                _this.user = res;
                localStorage.setItem('currentUser', _this.user.username);
                _this.currentUserSubject.next(_this.user.username);
                return res;
            }
            else {
                return null;
            }
        });
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.currentUserSubject.asObservable();
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        // this.router.navigate(["/"]);
    };
    Object.defineProperty(LoginService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.getAuthToken = function () {
        return ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("currentUser");
    };
    LoginService.prototype.isAuthenticated = function () {
        return this.getAuthToken() != null;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(dataService) {
        this.dataService = dataService;
        this.uri = 'product/';
    }
    ProductService.prototype.create = function (formData) {
        return this.dataService.post(this.uri, formData);
    };
    ProductService.prototype.get = function () {
        return this.dataService.get(this.uri, '');
    };
    ProductService.prototype.edit = function (id) {
        return this.dataService.get(this.uri, id).map(function (res) {
            return res;
        });
    };
    ProductService.prototype.update = function (formData) {
        return this.dataService.put(this.uri, formData).map(function (res) {
            return res;
        });
    };
    ProductService.prototype.delete = function (id) {
        return this.dataService.delete(this.uri + id).map(function (res) {
            return res;
        });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = /** @class */ (function () {
    function SessionService() {
        this.login = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SessionService.prototype.isLogin = function () {
        return this.login;
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/subproduct.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/subproduct.service.ts ***!
  \************************************************/
/*! exports provided: SubproductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubproductService", function() { return SubproductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubproductService = /** @class */ (function () {
    function SubproductService(dataService) {
        this.dataService = dataService;
        this.uri = 'subproducts/';
    }
    SubproductService.prototype.create = function (formData) {
        return this.dataService.post(this.uri, formData).map(function (res) {
            return res;
        });
    };
    SubproductService.prototype.get = function () {
        return this.dataService.get(this.uri, 'product');
    };
    SubproductService.prototype.findOne = function (id) {
        return this.dataService.findOne(this.uri, id, 'product');
    };
    SubproductService.prototype.edit = function (id) {
        return this.dataService.get(this.uri, id).map(function (res) {
            return res;
        });
    };
    SubproductService.prototype.update = function (formData) {
        return this.dataService.put(this.uri, formData).map(function (res) {
            return res;
        });
    };
    SubproductService.prototype.delete = function (id) {
        return this.dataService.delete(this.uri + id).map(function (res) {
            return res;
        });
    };
    SubproductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SubproductService);
    return SubproductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(dataService) {
        this.dataService = dataService;
        this.uri = 'users/';
    }
    UserService.prototype.create = function (formData) {
        return this.dataService.post(this.uri, formData).map(function (res) {
            return res;
        });
    };
    UserService.prototype.get = function () {
        return this.dataService.get(this.uri, '');
    };
    UserService.prototype.edit = function (id) {
        return this.dataService.get(this.uri, id).map(function (res) {
            return res;
        });
    };
    UserService.prototype.update = function (formData) {
        return this.dataService.put(this.uri, formData).map(function (res) {
            return res;
        });
    };
    UserService.prototype.delete = function (id) {
        return this.dataService.delete(this.uri + id).map(function (res) {
            return res;
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: prodEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEnvironment", function() { return prodEnvironment; });
var prodEnvironment = {
    production: true,
    apiUrl: "https://safe-springs-95526.herokuapp.com/api/"
};
//apiUrl: "https://stark-journey-22743.herokuapp.com/api/"


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:4000/api/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/skapale/Development/dev/test5/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map