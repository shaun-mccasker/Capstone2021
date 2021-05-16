// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"../../../../../../../react => React.external":[function(require,module,exports) {
module.exports=React;
},{}],"../node_modules/@atlaskit/theme/dist/esm/utils/getTheme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTheme;
// ideally this would be fetched from ../constants but that causes a
// circular dep loop. This will be refactored as part of a breaking
// change in the future.
var DEFAULT_THEME_MODE = 'light';
var THEME_MODES = ['light', 'dark']; // Resolves the different types of theme objects in the current API

function getTheme(props) {
  if (props && props.theme) {
    // Theme is the global Atlaskit theme
    if ('__ATLASKIT_THEME__' in props.theme) {
      return props.theme.__ATLASKIT_THEME__;
    } // User has provided alternative modes
    else if ('mode' in props.theme && THEME_MODES.includes(props.theme.mode)) {
        return props.theme;
      }
  } // If format not supported (or no theme provided), return standard theme


  return {
    mode: DEFAULT_THEME_MODE
  };
}
},{}],"../node_modules/@atlaskit/theme/dist/esm/utils/themed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = themed;

var _getTheme = _interopRequireDefault(require("./getTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
// Unpack custom variants, and get correct value for the current theme
function themedVariants(variantProp, variants) {
  return function (props) {
    var theme = (0, _getTheme.default)(props);

    if (props && props[variantProp] && variants) {
      var modes = variants[props[variantProp]];

      if (modes && modes[theme.mode]) {
        var value = modes[theme.mode];

        if (value) {
          return value;
        } // TS believes value can be undefined

      }
    }

    return '';
  };
}

function themed(modesOrVariant, variantModes) {
  if (typeof modesOrVariant === 'string') {
    return themedVariants(modesOrVariant, variantModes);
  }

  var modes = modesOrVariant;
  return function (props) {
    // Get theme from the user's props
    var theme = (0, _getTheme.default)(props); // User isn't required to provide both light and dark values

    if (theme.mode in modes) {
      var value = modes[theme.mode]; // TS believes value can be undefined

      if (value) {
        return value;
      }
    }

    return '';
  };
}
},{"./getTheme":"../node_modules/@atlaskit/theme/dist/esm/utils/getTheme.js"}],"../node_modules/react-is/cjs/react-is.development.js":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
},{}],"../node_modules/react-is/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}
},{"./cjs/react-is.development.js":"../node_modules/react-is/cjs/react-is.development.js"}],"../node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"../node_modules/prop-types/lib/ReactPropTypesSecret.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"../node_modules/prop-types/checkPropTypes.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var printWarning = function () {};

if ("development" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if ("development" !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
},{"./lib/ReactPropTypesSecret":"../node_modules/prop-types/lib/ReactPropTypesSecret.js"}],"../node_modules/prop-types/factoryWithTypeCheckers.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var ReactIs = require('react-is');

var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

var checkPropTypes = require('./checkPropTypes');

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

if ("development" !== 'production') {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("development" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if ("development" !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "development" !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
},{"react-is":"../node_modules/react-is/index.js","object-assign":"../node_modules/object-assign/index.js","./lib/ReactPropTypesSecret":"../node_modules/prop-types/lib/ReactPropTypesSecret.js","./checkPropTypes":"../node_modules/prop-types/checkPropTypes.js"}],"../node_modules/prop-types/index.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("development" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"react-is":"../node_modules/react-is/index.js","./factoryWithTypeCheckers":"../node_modules/prop-types/factoryWithTypeCheckers.js"}],"../node_modules/shallowequal/index.js":[function(require,module,exports) {
//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

},{}],"../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var _default = stylis_min;
exports.default = _default;
},{}],"../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var _default = unitlessKeys;
exports.default = _default;
},{}],"../node_modules/@emotion/memoize/dist/memoize.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var _default = memoize;
exports.default = _default;
},{}],"../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _memoize = _interopRequireDefault(require("@emotion/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0, _memoize.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
var _default = index;
exports.default = _default;
},{"@emotion/memoize":"../node_modules/@emotion/memoize/dist/memoize.browser.esm.js"}],"../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":[function(require,module,exports) {
'use strict';

var reactIs = require('react-is');

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

},{"react-is":"../node_modules/react-is/index.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/styled-components/dist/styled-components.browser.esm.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheetManager = le;
exports.ThemeProvider = Be;
exports.createGlobalStyle = Ye;
exports.css = Se;
exports.isStyledComponent = _;
exports.keyframes = We;
exports.withTheme = exports.version = exports.useTheme = exports.__PRIVATE__ = exports.ThemeContext = exports.ThemeConsumer = exports.StyleSheetContext = exports.StyleSheetConsumer = exports.ServerStyleSheet = exports.default = void 0;

var _reactIs = require("react-is");

var _react = _interopRequireWildcard(require("react"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _stylis = _interopRequireDefault(require("@emotion/stylis"));

var _unitless = _interopRequireDefault(require("@emotion/unitless"));

var _isPropValid = _interopRequireDefault(require("@emotion/is-prop-valid"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function v() {
  return (v = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }

    return e;
  }).apply(this, arguments);
}

var g = function g(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) {
    n.push(t[r], e[r + 1]);
  }

  return n;
},
    S = function S(t) {
  return null !== t && "object" == _typeof(t) && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, _reactIs.typeOf)(t);
},
    w = Object.freeze([]),
    b = Object.freeze({});

function N(e) {
  return "function" == typeof e;
}

function E(e) {
  return "production" !== "development" && "string" == typeof e && e || e.displayName || e.name || "Component";
}

function _(e) {
  return e && "string" == typeof e.styledComponentId;
}

var I = "undefined" != typeof process && (undefined || undefined) || "data-styled",
    C = "5.2.0",
    A = "undefined" != typeof window && "HTMLElement" in window,
    O = "boolean" == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY || "undefined" != typeof process && (undefined || undefined) || "production" !== "development",
    P = {},
    R = function R() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
},
    j = "production" !== "development" ? {
  1: "Cannot create styled-component for component: %s.\n\n",
  2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
  8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
  9: "Missing document `<head>`\n\n",
  10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  14: 'ThemeProvider: "theme" prop is required.\n\n',
  15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
} : {};

exports.version = C;

function T() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) {
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  }

  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}

function D(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  throw "production" === "development" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(T.apply(void 0, [j[e]].concat(n)).trim());
}

var k = function k(e) {
  var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
    for (var t = e.childNodes, n = t.length; n >= 0; n--) {
      var r = t[n];
      if (r && 1 === r.nodeType && r.hasAttribute(I)) return r;
    }
  }(n),
      i = void 0 !== o ? o.nextSibling : null;

  r.setAttribute(I, "active"), r.setAttribute("data-styled-version", "5.2.0");
  var s = R();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
},
    x = function () {
  function e(e) {
    var t = this.element = k(e);
    t.appendChild(document.createTextNode("")), this.sheet = function (e) {
      if (e.sheet) return e.sheet;

      for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        if (o.ownerNode === e) return o;
      }

      D(17);
    }(t), this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    try {
      return this.sheet.insertRule(t, e), this.length++, !0;
    } catch (e) {
      return !1;
    }
  }, t.deleteRule = function (e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.getRule = function (e) {
    var t = this.sheet.cssRules[e];
    return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
  }, e;
}(),
    V = function () {
  function e(e) {
    var t = this.element = k(e);
    this.nodes = t.childNodes, this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(t),
          r = this.nodes[e];
      return this.element.insertBefore(n, r || null), this.length++, !0;
    }

    return !1;
  }, t.deleteRule = function (e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, e;
}(),
    M = function () {
  function e(e) {
    this.rules = [], this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
  }, t.deleteRule = function (e) {
    this.rules.splice(e, 1), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.rules[e] : "";
  }, e;
}(),
    z = function () {
  function e(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }

  var t = e.prototype;
  return t.indexOfGroup = function (e) {
    for (var t = 0, n = 0; n < e; n++) {
      t += this.groupSizes[n];
    }

    return t;
  }, t.insertRules = function (e, t) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e >= o;) {
        (o <<= 1) < 0 && D(16, "" + e);
      }

      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;

      for (var i = r; i < o; i++) {
        this.groupSizes[i] = 0;
      }
    }

    for (var s = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) {
      this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
    }
  }, t.clearGroup = function (e) {
    if (e < this.length) {
      var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
      this.groupSizes[e] = 0;

      for (var o = n; o < r; o++) {
        this.tag.deleteRule(n);
      }
    }
  }, t.getGroup = function (e) {
    var t = "";
    if (e >= this.length || 0 === this.groupSizes[e]) return t;

    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r; i < o; i++) {
      t += this.tag.getRule(i) + "/*!sc*/\n";
    }

    return t;
  }, e;
}(),
    G = new Map(),
    F = new Map(),
    B = 1,
    L = function L(e) {
  if (G.has(e)) return G.get(e);
  var t = B++;
  return "production" !== "development" && ((0 | t) < 0 || t > 1 << 30) && D(16, "" + t), G.set(e, t), F.set(t, e), t;
},
    q = function q(e) {
  return F.get(e);
},
    H = function H(e, t) {
  t >= B && (B = t + 1), G.set(e, t), F.set(t, e);
},
    $ = "style[" + I + '][data-styled-version="5.2.0"]',
    Y = new RegExp("^" + I + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    W = function W(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) {
    (r = o[i]) && e.registerName(t, r);
  }
},
    U = function U(e, t) {
  for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++) {
    var s = n[o].trim();

    if (s) {
      var a = s.match(Y);

      if (a) {
        var c = 0 | parseInt(a[1], 10),
            u = a[2];
        0 !== c && (H(u, c), W(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else r.push(s);
    }
  }
},
    J = A,
    X = {
  isServer: !A,
  useCSSOMInjection: !O
},
    Z = function () {
  function e(e, t, n) {
    void 0 === e && (e = X), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), !this.options.isServer && A && J && (J = !1, function (e) {
      for (var t = document.querySelectorAll($), n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        o && "active" !== o.getAttribute(I) && (U(e, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }

  e.registerId = function (e) {
    return L(e);
  };

  var t = e.prototype;
  return t.reconstructWithOptions = function (t, n) {
    return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function (e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.getTag = function () {
    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new M(o) : r ? new x(o) : new V(o), new z(e)));
    var e, t, n, r, o;
  }, t.hasNameForId = function (e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, t.registerName = function (e, t) {
    if (L(e), this.names.has(e)) this.names.get(e).add(t);else {
      var n = new Set();
      n.add(t), this.names.set(e, n);
    }
  }, t.insertRules = function (e, t, n) {
    this.registerName(e, t), this.getTag().insertRules(L(e), n);
  }, t.clearNames = function (e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.clearRules = function (e) {
    this.getTag().clearGroup(L(e)), this.clearNames(e);
  }, t.clearTag = function () {
    this.tag = void 0;
  }, t.toString = function () {
    return function (e) {
      for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
        var i = q(o);

        if (void 0 !== i) {
          var s = e.names.get(i),
              a = t.getGroup(o);

          if (void 0 !== s && 0 !== a.length) {
            var c = I + ".g" + o + '[id="' + i + '"]',
                u = "";
            void 0 !== s && s.forEach(function (e) {
              e.length > 0 && (u += e + ",");
            }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
          }
        }
      }

      return r;
    }(this);
  }, e;
}(),
    K = function K(e, t) {
  for (var n = t.length; n;) {
    e = 33 * e ^ t.charCodeAt(--n);
  }

  return e;
},
    Q = function Q(e) {
  return K(5381, e);
},
    ee = /^\s*\/\/.*$/gm,
    te = [":", "[", ".", "#"];

function ne(e) {
  var t,
      n,
      r,
      o,
      i = void 0 === e ? b : e,
      s = i.options,
      a = void 0 === s ? b : s,
      c = i.plugins,
      u = void 0 === c ? w : c,
      l = new _stylis.default(a),
      d = [],
      h = function (e) {
    function t(t) {
      if (t) try {
        e(t + "}");
      } catch (e) {}
    }

    return function (n, r, o, i, s, a, c, u, l, d) {
      switch (n) {
        case 1:
          if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
          break;

        case 2:
          if (0 === u) return r + "/*|*/";
          break;

        case 3:
          switch (u) {
            case 102:
            case 112:
              return e(o[0] + r), "";

            default:
              return r + (0 === d ? "/*|*/" : "");
          }

        case -2:
          r.split("/*|*/}").forEach(t);
      }
    };
  }(function (e) {
    d.push(e);
  }),
      f = function f(e, r, i) {
    return 0 === r && te.includes(i[n.length]) || i.match(o) ? e : "." + t;
  };

  function m(e, i, s, a) {
    void 0 === a && (a = "&");
    var c = e.replace(ee, ""),
        u = i && s ? s + " " + i + " { " + c + " }" : c;
    return t = a, n = i, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(s || !i ? "" : i, u);
  }

  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, h, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || D(15), K(e, t.name);
  }, 5381).toString() : "", m;
}

var re = _react.default.createContext(),
    oe = re.Consumer,
    ie = _react.default.createContext(),
    se = (ie.Consumer, new Z()),
    ae = ne();

exports.StyleSheetConsumer = oe;
exports.StyleSheetContext = re;

function ce() {
  return (0, _react.useContext)(re) || se;
}

function ue() {
  return (0, _react.useContext)(ie) || ae;
}

function le(e) {
  var t = (0, _react.useState)(e.stylisPlugins),
      n = t[0],
      i = t[1],
      c = ce(),
      u = (0, _react.useMemo)(function () {
    var t = c;
    return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
      target: e.target
    }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
      useCSSOMInjection: !1
    })), t;
  }, [e.disableCSSOMInjection, e.sheet, e.target]),
      l = (0, _react.useMemo)(function () {
    return ne({
      options: {
        prefix: !e.disableVendorPrefixes
      },
      plugins: n
    });
  }, [e.disableVendorPrefixes, n]);
  return (0, _react.useEffect)(function () {
    (0, _shallowequal.default)(n, e.stylisPlugins) || i(e.stylisPlugins);
  }, [e.stylisPlugins]), _react.default.createElement(re.Provider, {
    value: u
  }, _react.default.createElement(ie.Provider, {
    value: l
  }, "production" !== "development" ? _react.default.Children.only(e.children) : e.children));
}

var de = function () {
  function e(e, t) {
    var n = this;
    this.inject = function (e, t) {
      void 0 === t && (t = ae);
      var r = n.name + t.hash;
      e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
    }, this.toString = function () {
      return D(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
  }

  return e.prototype.getName = function (e) {
    return void 0 === e && (e = ae), this.name + e.hash;
  }, e;
}(),
    he = /([A-Z])/,
    pe = new RegExp(he, "g"),
    fe = /^ms-/,
    me = function me(e) {
  return "-" + e.toLowerCase();
};

function ye(e) {
  return he.test(e) ? e.replace(pe, me).replace(fe, "-ms-") : e;
}

var ve = function ve(e) {
  return null == e || !1 === e || "" === e;
};

function ge(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var i, s = [], a = 0, c = e.length; a < c; a += 1) {
      "" !== (i = ge(e[a], n, r, o)) && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    }

    return s;
  }

  if (ve(e)) return "";
  if (_(e)) return "." + e.styledComponentId;

  if (N(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return "production" !== "development" && (0, _reactIs.isElement)(u) && console.warn(E(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ge(u, n, r, o);
  }

  var l;
  return e instanceof de ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
    var r,
        o,
        i = [];

    for (var s in t) {
      t.hasOwnProperty(s) && !ve(t[s]) && (S(t[s]) ? i.push.apply(i, e(t[s], s)) : N(t[s]) ? i.push(ye(s) + ":", t[s], ";") : i.push(ye(s) + ": " + (r = s, null == (o = t[s]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in _unitless.default ? String(o).trim() : o + "px") + ";"));
    }

    return n ? [n + " {"].concat(i, ["}"]) : i;
  }(e) : e.toString();
}

function Se(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  return N(e) || S(e) ? ge(g(w, [e].concat(n))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : ge(g(e, n));
}

var we = function we(e) {
  return "function" == typeof e || "object" == _typeof(e) && null !== e && !Array.isArray(e);
},
    be = function be(e) {
  return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
};

function Ne(e, t, n) {
  var r = e[n];
  we(t) && we(r) ? Ee(r, t) : e[n] = t;
}

function Ee(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (we(s)) for (var a in s) {
      be(a) && Ne(e, s[a], a);
    }
  }

  return e;
}

var _e = /(a)(d)/gi,
    Ie = function Ie(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};

function Ce(e) {
  var t,
      n = "";

  for (t = Math.abs(e); t > 52; t = t / 52 | 0) {
    n = Ie(t % 52) + n;
  }

  return (Ie(t % 52) + n).replace(_e, "$1-$2");
}

function Ae(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (N(n) && !_(n)) return !1;
  }

  return !0;
}

var Oe = Q("5.2.0"),
    Pe = function () {
  function e(e, t, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = "production" === "development" && (void 0 === n || n.isStatic) && Ae(e), this.componentId = t, this.baseHash = K(Oe, t), this.baseStyle = n, Z.registerId(t);
  }

  return e.prototype.generateAndInjectStyles = function (e, t, n) {
    var r = this.componentId,
        o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
        var i = ge(this.rules, e, t, n).join(""),
            s = Ce(K(this.baseHash, i.length) >>> 0);

        if (!t.hasNameForId(r, s)) {
          var a = n(i, "." + s, void 0, r);
          t.insertRules(r, s, a);
        }

        o.push(s), this.staticRulesId = s;
      }
    } else {
      for (var c = this.rules.length, u = K(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if ("string" == typeof h) l += h, "production" !== "development" && (u = K(u, h + d));else if (h) {
          var p = ge(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
          u = K(u, f + d), l += f;
        }
      }

      if (l) {
        var m = Ce(u >>> 0);

        if (!t.hasNameForId(r, m)) {
          var y = n(l, "." + m, void 0, r);
          t.insertRules(r, m, y);
        }

        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(),
    Re = /invalid hook call/i,
    je = new Set(),
    Te = function Te(e, t) {
  if ("production" !== "development") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";

    try {
      (0, _react.useRef)(), je.has(n) || (console.warn(n), je.add(n));
    } catch (e) {
      Re.test(e.message) && je.delete(n);
    }
  }
},
    De = function De(e, t, n) {
  return void 0 === n && (n = b), e.theme !== n.theme && e.theme || t || n.theme;
},
    ke = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    xe = /(^-|-$)/g;

function Ve(e) {
  return e.replace(ke, "-").replace(xe, "");
}

function Me(e) {
  return "string" == typeof e && ("production" === "development" || e.charAt(0) === e.charAt(0).toLowerCase());
}

var ze = function ze(e) {
  return Ce(Q(e) >>> 0);
},
    Ge = _react.default.createContext(),
    Fe = Ge.Consumer;

exports.ThemeConsumer = Fe;
exports.ThemeContext = Ge;

function Be(e) {
  var t = (0, _react.useContext)(Ge),
      n = (0, _react.useMemo)(function () {
    return function (e, t) {
      if (!e) return D(14);

      if (N(e)) {
        var n = e(t);
        return "production" === "development" || null !== n && !Array.isArray(n) && "object" == _typeof(n) ? n : D(7);
      }

      return Array.isArray(e) || "object" != _typeof(e) ? D(8) : t ? v({}, t, {}, e) : e;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? _react.default.createElement(Ge.Provider, {
    value: n
  }, e.children) : null;
}

var Le = {};

function qe(e, t, n) {
  var o = _(e),
      s = !Me(e),
      a = t.displayName,
      c = void 0 === a ? function (e) {
    return Me(e) ? "styled." + e : "Styled(" + E(e) + ")";
  }(e) : a,
      d = t.componentId,
      h = void 0 === d ? function (e, t) {
    var n = "string" != typeof e ? "sc" : Ve(e);
    Le[n] = (Le[n] || 0) + 1;
    var r = n + "-" + ze("5.2.0" + n + Le[n]);
    return t ? t + "-" + r : r;
  }(t.displayName, t.parentComponentId) : d,
      p = t.attrs,
      f = void 0 === p ? w : p,
      g = t.displayName && t.componentId ? Ve(t.displayName) + "-" + t.componentId : t.componentId || h,
      S = o && e.attrs ? Array.prototype.concat(e.attrs, f).filter(Boolean) : f,
      I = t.shouldForwardProp;

  o && e.shouldForwardProp && (I = I ? function (n, r) {
    return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
  } : e.shouldForwardProp);

  var C,
      A = new Pe(n, g, o ? e.componentStyle : void 0),
      O = function O(e, t) {
    return function (e, t, n) {
      var r = e.attrs,
          o = e.componentStyle,
          s = e.defaultProps,
          a = e.foldedComponentIds,
          c = e.shouldForwardProp,
          d = e.styledComponentId,
          h = e.target;
      "production" !== "development" && (0, _react.useDebugValue)(d);

      var p = function (e, t, n) {
        void 0 === e && (e = b);
        var r = v({}, t, {
          theme: e
        }),
            o = {};
        return n.forEach(function (e) {
          var t,
              n,
              i,
              s = e;

          for (t in N(s) && (s = s(r)), s) {
            r[t] = o[t] = "className" === t ? (n = o[t], i = s[t], n && i ? n + " " + i : n || i) : s[t];
          }
        }), [r, o];
      }(De(t, (0, _react.useContext)(Ge), s) || b, t, r),
          f = p[0],
          y = p[1],
          g = function (e, t, n, r) {
        var o = ce(),
            i = ue(),
            s = e.isStatic && !t,
            a = s ? e.generateAndInjectStyles(b, o, i) : e.generateAndInjectStyles(n, o, i);
        return "production" !== "development" && (0, _react.useDebugValue)(a), "production" !== "development" && !s && r && r(a), a;
      }(o, r.length > 0, f, "production" !== "development" ? e.warnTooManyClasses : void 0),
          S = n,
          w = y.$as || t.$as || y.as || t.as || h,
          E = Me(w),
          _ = y !== t ? v({}, t, {}, y) : t,
          I = c || E && _isPropValid.default,
          C = {};

      for (var A in _) {
        "$" !== A[0] && "as" !== A && ("forwardedAs" === A ? C.as = _[A] : I && !I(A, _isPropValid.default) || (C[A] = _[A]));
      }

      return t.style && y.style !== t.style && (C.style = v({}, t.style, {}, y.style)), C.className = Array.prototype.concat(a, d, g !== d ? g : null, t.className, y.className).filter(Boolean).join(" "), C.ref = S, (0, _react.createElement)(w, C);
    }(C, e, t);
  };

  return O.displayName = c, (C = _react.default.forwardRef(O)).attrs = S, C.componentStyle = A, C.displayName = c, C.shouldForwardProp = I, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
    var r = t.componentId,
        o = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          o = {},
          i = Object.keys(e);

      for (r = 0; r < i.length; r++) {
        n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      }

      return o;
    }(t, ["componentId"]),
        i = r && r + "-" + (Me(e) ? e : Ve(E(e)));

    return qe(e, v({}, o, {
      attrs: S,
      componentId: i
    }), n);
  }, Object.defineProperty(C, "defaultProps", {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(t) {
      this._foldedDefaultProps = o ? Ee({}, e.defaultProps, t) : t;
    }
  }), "production" !== "development" && (Te(c, g), C.warnTooManyClasses = function (e, t) {
    var n = {},
        r = !1;
    return function (o) {
      if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
        var i = t ? ' with the id of "' + t + '"' : "";
        console.warn("Over 200 classes were generated for component " + e + i + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
      }
    };
  }(c, g)), C.toString = function () {
    return "." + C.styledComponentId;
  }, s && (0, _hoistNonReactStatics.default)(C, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    self: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), C;
}

var He = function He(e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = b), !(0, _reactIs.isValidElementType)(r)) return D(1, String(r));

    var i = function i() {
      return t(r, o, Se.apply(void 0, arguments));
    };

    return i.withConfig = function (n) {
      return e(t, r, v({}, o, {}, n));
    }, i.attrs = function (n) {
      return e(t, r, v({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, i;
  }(qe, e);
};

["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function (e) {
  He[e] = He(e);
});

var $e = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = Ae(e), Z.registerId(this.componentId + 1);
  }

  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(ge(this.rules, t, n, r).join(""), ""),
        i = this.componentId + e;
    n.insertRules(i, i, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();

function Ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
    n[o - 1] = arguments[o];
  }

  var s = Se.apply(void 0, [e].concat(n)),
      a = "sc-global-" + ze(JSON.stringify(s)),
      u = new $e(s, a);

  function l(e) {
    var t = ce(),
        n = ue(),
        o = (0, _react.useContext)(Ge),
        l = (0, _react.useRef)(t.allocateGSInstance(a)).current;
    return "production" !== "development" && _react.default.Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), "production" !== "development" && s.some(function (e) {
      return "string" == typeof e && -1 !== e.indexOf("@import");
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (0, _react.useLayoutEffect)(function () {
      return h(l, e, t, o, n), function () {
        return u.removeStyles(l, t);
      };
    }, [l, e, t, o, n]), null;
  }

  function h(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, P, n, o);else {
      var i = v({}, t, {
        theme: De(t, r, l.defaultProps)
      });
      u.renderStyles(e, i, n, o);
    }
  }

  return "production" !== "development" && Te(a), _react.default.memo(l);
}

function We(e) {
  "production" !== "development" && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");

  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  var o = Se.apply(void 0, [e].concat(n)).join(""),
      i = ze(o);
  return new de(i, o);
}

var Ue = function () {
  function e() {
    var e = this;
    this._emitSheetCSS = function () {
      var t = e.instance.toString(),
          n = R();
      return "<style " + [n && 'nonce="' + n + '"', I + '="true"', 'data-styled-version="5.2.0"'].filter(Boolean).join(" ") + ">" + t + "</style>";
    }, this.getStyleTags = function () {
      return e.sealed ? D(2) : e._emitSheetCSS();
    }, this.getStyleElement = function () {
      var t;
      if (e.sealed) return D(2);
      var n = ((t = {})[I] = "", t["data-styled-version"] = "5.2.0", t.dangerouslySetInnerHTML = {
        __html: e.instance.toString()
      }, t),
          o = R();
      return o && (n.nonce = o), [_react.default.createElement("style", v({}, n, {
        key: "sc-0-0"
      }))];
    }, this.seal = function () {
      e.sealed = !0;
    }, this.instance = new Z({
      isServer: !0
    }), this.sealed = !1;
  }

  var t = e.prototype;
  return t.collectStyles = function (e) {
    return this.sealed ? D(2) : _react.default.createElement(le, {
      sheet: this.instance
    }, e);
  }, t.interleaveWithNodeStream = function (e) {
    return D(3);
  }, e;
}(),
    Je = function Je(e) {
  var t = _react.default.forwardRef(function (t, n) {
    var o = (0, _react.useContext)(Ge),
        s = e.defaultProps,
        a = De(t, o, s);
    return "production" !== "development" && void 0 === a && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + E(e) + '"'), _react.default.createElement(e, v({}, t, {
      theme: a,
      ref: n
    }));
  });

  return (0, _hoistNonReactStatics.default)(t, e), t.displayName = "WithTheme(" + E(e) + ")", t;
},
    Xe = function Xe() {
  return (0, _react.useContext)(Ge);
},
    Ze = {
  StyleSheet: Z,
  masterSheet: se
};

exports.__PRIVATE__ = Ze;
exports.useTheme = Xe;
exports.withTheme = Je;
exports.ServerStyleSheet = Ue;
"production" !== "development" && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "production" !== "development" && "test" !== "development" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles not rendering properly, errors happening during rehydration process, missing theme prop, and makes your application bigger without a good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var _default = He;
exports.default = _default;
},{"react-is":"../node_modules/react-is/index.js","react":"../../../../../../../react => React.external","shallowequal":"../node_modules/shallowequal/index.js","@emotion/stylis":"../node_modules/@emotion/stylis/dist/stylis.browser.esm.js","@emotion/unitless":"../node_modules/@emotion/unitless/dist/unitless.browser.esm.js","@emotion/is-prop-valid":"../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js","hoist-non-react-statics":"../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","process":"../node_modules/process/browser.js"}],"../node_modules/exenv/index.js":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function () {
			return ExecutionEnvironment;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());

},{}],"../node_modules/@atlaskit/theme/dist/esm/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DN600A = exports.DN700A = exports.DN800A = exports.DN0 = exports.DN10 = exports.DN20 = exports.DN30 = exports.DN40 = exports.DN50 = exports.DN60 = exports.DN70 = exports.DN80 = exports.DN90 = exports.DN100 = exports.DN200 = exports.DN300 = exports.DN400 = exports.DN500 = exports.DN600 = exports.DN700 = exports.DN800 = exports.DN900 = exports.N800A = exports.N700A = exports.N600A = exports.N500A = exports.N400A = exports.N300A = exports.N200A = exports.N100A = exports.N90A = exports.N80A = exports.N70A = exports.N60A = exports.N50A = exports.N40A = exports.N30A = exports.N20A = exports.N10A = exports.N900 = exports.N800 = exports.N700 = exports.N600 = exports.N500 = exports.N400 = exports.N300 = exports.N200 = exports.N100 = exports.N90 = exports.N80 = exports.N70 = exports.N60 = exports.N50 = exports.N40 = exports.N30 = exports.N20 = exports.N10 = exports.N0 = exports.T500 = exports.T400 = exports.T300 = exports.T200 = exports.T100 = exports.T75 = exports.T50 = exports.P500 = exports.P400 = exports.P300 = exports.P200 = exports.P100 = exports.P75 = exports.P50 = exports.B500 = exports.B400 = exports.B300 = exports.B200 = exports.B100 = exports.B75 = exports.B50 = exports.G500 = exports.G400 = exports.G300 = exports.G200 = exports.G100 = exports.G75 = exports.G50 = exports.Y500 = exports.Y400 = exports.Y300 = exports.Y200 = exports.Y100 = exports.Y75 = exports.Y50 = exports.R500 = exports.R400 = exports.R300 = exports.R200 = exports.R100 = exports.R75 = exports.R50 = void 0;
exports.skeleton = exports.green = exports.yellow = exports.red = exports.purple = exports.teal = exports.blue = exports.primary = exports.linkOutline = exports.linkActive = exports.linkHover = exports.link = exports.codeBlock = exports.subtleHeading = exports.heading = exports.placeholderText = exports.subtleText = exports.textActive = exports.textHover = exports.text = exports.backgroundOnLayer = exports.backgroundHover = exports.backgroundActive = exports.background = exports.DN10A = exports.DN20A = exports.DN30A = exports.DN40A = exports.DN50A = exports.DN60A = exports.DN70A = exports.DN80A = exports.DN90A = exports.DN100A = exports.DN200A = exports.DN300A = exports.DN400A = exports.DN500A = void 0;

var _themed = _interopRequireDefault(require("./utils/themed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reds
var R50 = '#FFEBE6';
exports.R50 = R50;
var R75 = '#FFBDAD';
exports.R75 = R75;
var R100 = '#FF8F73';
exports.R100 = R100;
var R200 = '#FF7452';
exports.R200 = R200;
var R300 = '#FF5630';
exports.R300 = R300;
var R400 = '#DE350B';
exports.R400 = R400;
var R500 = '#BF2600'; // Yellows

exports.R500 = R500;
var Y50 = '#FFFAE6';
exports.Y50 = Y50;
var Y75 = '#FFF0B3';
exports.Y75 = Y75;
var Y100 = '#FFE380';
exports.Y100 = Y100;
var Y200 = '#FFC400';
exports.Y200 = Y200;
var Y300 = '#FFAB00';
exports.Y300 = Y300;
var Y400 = '#FF991F';
exports.Y400 = Y400;
var Y500 = '#FF8B00'; // Greens

exports.Y500 = Y500;
var G50 = '#E3FCEF';
exports.G50 = G50;
var G75 = '#ABF5D1';
exports.G75 = G75;
var G100 = '#79F2C0';
exports.G100 = G100;
var G200 = '#57D9A3';
exports.G200 = G200;
var G300 = '#36B37E';
exports.G300 = G300;
var G400 = '#00875A';
exports.G400 = G400;
var G500 = '#006644'; // Blues

exports.G500 = G500;
var B50 = '#DEEBFF';
exports.B50 = B50;
var B75 = '#B3D4FF';
exports.B75 = B75;
var B100 = '#4C9AFF';
exports.B100 = B100;
var B200 = '#2684FF';
exports.B200 = B200;
var B300 = '#0065FF';
exports.B300 = B300;
var B400 = '#0052CC';
exports.B400 = B400;
var B500 = '#0747A6'; // Purples

exports.B500 = B500;
var P50 = '#EAE6FF';
exports.P50 = P50;
var P75 = '#C0B6F2';
exports.P75 = P75;
var P100 = '#998DD9';
exports.P100 = P100;
var P200 = '#8777D9';
exports.P200 = P200;
var P300 = '#6554C0';
exports.P300 = P300;
var P400 = '#5243AA';
exports.P400 = P400;
var P500 = '#403294'; // Teals

exports.P500 = P500;
var T50 = '#E6FCFF';
exports.T50 = T50;
var T75 = '#B3F5FF';
exports.T75 = T75;
var T100 = '#79E2F2';
exports.T100 = T100;
var T200 = '#00C7E6';
exports.T200 = T200;
var T300 = '#00B8D9';
exports.T300 = T300;
var T400 = '#00A3BF';
exports.T400 = T400;
var T500 = '#008DA6'; // Neutrals

exports.T500 = T500;
var N0 = '#FFFFFF';
exports.N0 = N0;
var N10 = '#FAFBFC';
exports.N10 = N10;
var N20 = '#F4F5F7';
exports.N20 = N20;
var N30 = '#EBECF0';
exports.N30 = N30;
var N40 = '#DFE1E6';
exports.N40 = N40;
var N50 = '#C1C7D0';
exports.N50 = N50;
var N60 = '#B3BAC5';
exports.N60 = N60;
var N70 = '#A5ADBA';
exports.N70 = N70;
var N80 = '#97A0AF';
exports.N80 = N80;
var N90 = '#8993A4';
exports.N90 = N90;
var N100 = '#7A869A';
exports.N100 = N100;
var N200 = '#6B778C';
exports.N200 = N200;
var N300 = '#5E6C84';
exports.N300 = N300;
var N400 = '#505F79';
exports.N400 = N400;
var N500 = '#42526E';
exports.N500 = N500;
var N600 = '#344563';
exports.N600 = N600;
var N700 = '#253858';
exports.N700 = N700;
var N800 = '#172B4D'; // ATTENTION: update the tints if you update this

exports.N800 = N800;
var N900 = '#091E42'; // Each tint is made of N900 and an alpha channel

exports.N900 = N900;
var N10A = 'rgba(9, 30, 66, 0.02)';
exports.N10A = N10A;
var N20A = 'rgba(9, 30, 66, 0.04)';
exports.N20A = N20A;
var N30A = 'rgba(9, 30, 66, 0.08)';
exports.N30A = N30A;
var N40A = 'rgba(9, 30, 66, 0.13)';
exports.N40A = N40A;
var N50A = 'rgba(9, 30, 66, 0.25)';
exports.N50A = N50A;
var N60A = 'rgba(9, 30, 66, 0.31)';
exports.N60A = N60A;
var N70A = 'rgba(9, 30, 66, 0.36)';
exports.N70A = N70A;
var N80A = 'rgba(9, 30, 66, 0.42)';
exports.N80A = N80A;
var N90A = 'rgba(9, 30, 66, 0.48)';
exports.N90A = N90A;
var N100A = 'rgba(9, 30, 66, 0.54)';
exports.N100A = N100A;
var N200A = 'rgba(9, 30, 66, 0.60)';
exports.N200A = N200A;
var N300A = 'rgba(9, 30, 66, 0.66)';
exports.N300A = N300A;
var N400A = 'rgba(9, 30, 66, 0.71)';
exports.N400A = N400A;
var N500A = 'rgba(9, 30, 66, 0.77)';
exports.N500A = N500A;
var N600A = 'rgba(9, 30, 66, 0.82)';
exports.N600A = N600A;
var N700A = 'rgba(9, 30, 66, 0.89)';
exports.N700A = N700A;
var N800A = 'rgba(9, 30, 66, 0.95)'; // Dark Mode Neutrals

exports.N800A = N800A;
var DN900 = '#E6EDFA';
exports.DN900 = DN900;
var DN800 = '#DCE5F5';
exports.DN800 = DN800;
var DN700 = '#CED9EB';
exports.DN700 = DN700;
var DN600 = '#B8C7E0';
exports.DN600 = DN600;
var DN500 = '#ABBBD6';
exports.DN500 = DN500;
var DN400 = '#9FB0CC';
exports.DN400 = DN400;
var DN300 = '#8C9CB8';
exports.DN300 = DN300;
var DN200 = '#7988A3';
exports.DN200 = DN200;
var DN100 = '#67758F';
exports.DN100 = DN100;
var DN90 = '#56637A';
exports.DN90 = DN90;
var DN80 = '#455166';
exports.DN80 = DN80;
var DN70 = '#3B475C';
exports.DN70 = DN70;
var DN60 = '#313D52';
exports.DN60 = DN60;
var DN50 = '#283447';
exports.DN50 = DN50;
var DN40 = '#202B3D';
exports.DN40 = DN40;
var DN30 = '#1B2638';
exports.DN30 = DN30;
var DN20 = '#121A29';
exports.DN20 = DN20;
var DN10 = '#0E1624'; // ATTENTION: update the tints if you update this

exports.DN10 = DN10;
var DN0 = '#0D1424'; // Each dark tint is made of DN0 and an alpha channel

exports.DN0 = DN0;
var DN800A = 'rgba(13, 20, 36, 0.06)';
exports.DN800A = DN800A;
var DN700A = 'rgba(13, 20, 36, 0.14)';
exports.DN700A = DN700A;
var DN600A = 'rgba(13, 20, 36, 0.18)';
exports.DN600A = DN600A;
var DN500A = 'rgba(13, 20, 36, 0.29)';
exports.DN500A = DN500A;
var DN400A = 'rgba(13, 20, 36, 0.36)';
exports.DN400A = DN400A;
var DN300A = 'rgba(13, 20, 36, 0.40)';
exports.DN300A = DN300A;
var DN200A = 'rgba(13, 20, 36, 0.47)';
exports.DN200A = DN200A;
var DN100A = 'rgba(13, 20, 36, 0.53)';
exports.DN100A = DN100A;
var DN90A = 'rgba(13, 20, 36, 0.63)';
exports.DN90A = DN90A;
var DN80A = 'rgba(13, 20, 36, 0.73)';
exports.DN80A = DN80A;
var DN70A = 'rgba(13, 20, 36, 0.78)';
exports.DN70A = DN70A;
var DN60A = 'rgba(13, 20, 36, 0.81)';
exports.DN60A = DN60A;
var DN50A = 'rgba(13, 20, 36, 0.85)';
exports.DN50A = DN50A;
var DN40A = 'rgba(13, 20, 36, 0.89)';
exports.DN40A = DN40A;
var DN30A = 'rgba(13, 20, 36, 0.92)';
exports.DN30A = DN30A;
var DN20A = 'rgba(13, 20, 36, 0.95)';
exports.DN20A = DN20A;
var DN10A = 'rgba(13, 20, 36, 0.97)'; // Themed colors

exports.DN10A = DN10A;
var background = (0, _themed.default)({
  light: N0,
  dark: DN30
});
exports.background = background;
var backgroundActive = (0, _themed.default)({
  light: B50,
  dark: B75
});
exports.backgroundActive = backgroundActive;
var backgroundHover = (0, _themed.default)({
  light: N30,
  dark: DN70
});
exports.backgroundHover = backgroundHover;
var backgroundOnLayer = (0, _themed.default)({
  light: N0,
  dark: DN50
});
exports.backgroundOnLayer = backgroundOnLayer;
var text = (0, _themed.default)({
  light: N900,
  dark: DN600
});
exports.text = text;
var textHover = (0, _themed.default)({
  light: N800,
  dark: DN600
});
exports.textHover = textHover;
var textActive = (0, _themed.default)({
  light: B400,
  dark: B400
});
exports.textActive = textActive;
var subtleText = (0, _themed.default)({
  light: N200,
  dark: DN300
});
exports.subtleText = subtleText;
var placeholderText = (0, _themed.default)({
  light: N100,
  dark: DN200
});
exports.placeholderText = placeholderText;
var heading = (0, _themed.default)({
  light: N800,
  dark: DN600
});
exports.heading = heading;
var subtleHeading = (0, _themed.default)({
  light: N200,
  dark: DN300
});
exports.subtleHeading = subtleHeading;
var codeBlock = (0, _themed.default)({
  light: N20,
  dark: DN50
});
exports.codeBlock = codeBlock;
var link = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.link = link;
var linkHover = (0, _themed.default)({
  light: B300,
  dark: B200
});
exports.linkHover = linkHover;
var linkActive = (0, _themed.default)({
  light: B500,
  dark: B100
});
exports.linkActive = linkActive;
var linkOutline = (0, _themed.default)({
  light: B100,
  dark: B200
});
exports.linkOutline = linkOutline;
var primary = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.primary = primary;
var blue = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.blue = blue;
var teal = (0, _themed.default)({
  light: T300,
  dark: T200
});
exports.teal = teal;
var purple = (0, _themed.default)({
  light: P300,
  dark: P100
});
exports.purple = purple;
var red = (0, _themed.default)({
  light: R300,
  dark: R300
});
exports.red = red;
var yellow = (0, _themed.default)({
  light: Y300,
  dark: Y300
});
exports.yellow = yellow;
var green = (0, _themed.default)({
  light: G300,
  dark: G300
});
exports.green = green;

var skeleton = function () {
  return N20A;
};

exports.skeleton = skeleton;
},{"./utils/themed":"../node_modules/@atlaskit/theme/dist/esm/utils/themed.js"}],"../node_modules/@atlaskit/theme/dist/esm/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonShimmer = exports.assistive = exports.visuallyHidden = exports.layers = exports.noFocusRing = exports.focusRing = exports.codeFontFamily = exports.fontFamily = exports.fontSizeSmall = exports.fontSize = exports.gridSize = exports.borderRadius = exports.THEME_MODES = exports.DEFAULT_THEME_MODE = exports.CHANNEL = exports.FLATTENED = void 0;

var _tslib = require("tslib");

var _styledComponents = require("styled-components");

var _colors = require("./colors");

var FLATTENED = '__FLATTENED__';
exports.FLATTENED = FLATTENED;
var CHANNEL = '__ATLASKIT_THEME__';
exports.CHANNEL = CHANNEL;
var DEFAULT_THEME_MODE = 'light';
exports.DEFAULT_THEME_MODE = DEFAULT_THEME_MODE;
var THEME_MODES = ['light', 'dark'];
/*
  These theme values are expressed as functions so that if we decide to make
  them dependent on props in the future, it wouldn't require a significant
  refactor everywhere they are being used.
*/

exports.THEME_MODES = THEME_MODES;

var borderRadius = function () {
  return 3;
};

exports.borderRadius = borderRadius;

var gridSize = function () {
  return 8;
};

exports.gridSize = gridSize;

var fontSize = function () {
  return 14;
};

exports.fontSize = fontSize;

var fontSizeSmall = function () {
  return 11;
};

exports.fontSizeSmall = fontSizeSmall;

var fontFamily = function () {
  return "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
};

exports.fontFamily = fontFamily;

var codeFontFamily = function () {
  return "'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace";
};

exports.codeFontFamily = codeFontFamily;

var focusRing = function (color, outlineWidth) {
  if (color === void 0) {
    color = _colors.B100;
  }

  if (outlineWidth === void 0) {
    outlineWidth = gridSize() / 4;
  }

  return "\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 0px " + outlineWidth + "px " + color + ";\n  }\n";
};

exports.focusRing = focusRing;

var noFocusRing = function () {
  return "\n  box-shadow: none;\n";
};

exports.noFocusRing = noFocusRing;
var layers = {
  card: function () {
    return 100;
  },
  dialog: function () {
    return 300;
  },
  navigation: function () {
    return 200;
  },
  layer: function () {
    return 400;
  },
  blanket: function () {
    return 500;
  },
  modal: function () {
    return 510;
  },
  flag: function () {
    return 600;
  },
  spotlight: function () {
    return 700;
  },
  tooltip: function () {
    return 800;
  }
};
exports.layers = layers;

var visuallyHidden = function () {
  return {
    border: '0 !important',
    clip: 'rect(1px, 1px, 1px, 1px) !important',
    height: '1px !important',
    overflow: 'hidden !important',
    padding: '0 !important',
    position: 'absolute !important',
    width: '1px !important',
    whiteSpace: 'nowrap !important'
  };
};
/**
 * Deprecated Styled Components mixin.
 * Use visuallyHidden instead.
 * @deprecated
 */


exports.visuallyHidden = visuallyHidden;

var assistive = function () {
  return (0, _styledComponents.css)(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n"], ["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n"])));
};

exports.assistive = assistive;

var skeletonShimmer = function () {
  return {
    css: {
      backgroundColor: (0, _colors.skeleton)(),
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDirection: 'alternate'
    },
    keyframes: {
      from: {
        backgroundColor: (0, _colors.skeleton)()
      },
      to: {
        backgroundColor: _colors.N30A
      }
    }
  };
};

exports.skeletonShimmer = skeletonShimmer;
var templateObject_1;
},{"tslib":"../node_modules/tslib/tslib.es6.js","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","./colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js"}],"../node_modules/@atlaskit/theme/dist/esm/utils/createTheme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
createTheme is used to create a set of Providers and Consumers for theming components.
- Takes a default theme function; this theme function gets a set of props, and returns tokens
   based on those props. An example of this default theme function is one that produces the standard
   appearance of the component
- Returns two things - a Provider that allow for additional themes to be applied, and a Consumer
   that can get the current theme and fetch it.
*/
function createTheme(defaultGetTokens) {
  var emptyThemeFn = function (getTokens, props) {
    return getTokens(props);
  };
  /* Internally, Theme uses React Context, with internal providers and consumers.
     The React Context passes only a function that gets props, and turns them into tokens. This
        function gets mixed as more Providers with their own themes are added. This mixed function
        is ultimately picked up by Consumers, which implement a context consumer internally to fetch
        the theme. */


  var ThemeContext = (0, _react.createContext)(defaultGetTokens); // The Theme Consumer takes a function as its child - this function takes tokens, and the
  // return value is generally a set of nodes with the tokens applied appropriately.

  function Consumer(props) {
    var children = props.children,
        themeProps = (0, _tslib.__rest)(props, ["children"]);
    var theme = (0, _react.useContext)(ThemeContext);
    var themeFn = theme || emptyThemeFn; // @ts-ignore See issue for more info: https://github.com/Microsoft/TypeScript/issues/10727
    // Argument of type 'Pick<ThemeProps & { children: (tokens: ThemeTokens) => ReactNode; }, Exclude<keyof ThemeProps, "children">>' is not assignable to parameter of type 'ThemeProps'.ts(2345)

    var tokens = themeFn(themeProps); // We add a fragment to ensure we don't break people upgrading.
    // Previously they may have been able to pass in undefined without things blowing up.

    return _react.default.createElement(_react.default.Fragment, null, children(tokens));
  }
  /* The Theme Provider takes regular nodes as its child, but also takes a *theme function*
     - The theme function takes a set of props, as well as a function (getTokens) that can
        turn props into tokens.
     - The getTokens function isn't called immediately - instead the props are passed
        through a mix of parent theming functions
     Children of this provider will receive this mixed theme
  */


  function Provider(props) {
    var themeFn = (0, _react.useContext)(ThemeContext);
    var valueFn = props.value || emptyThemeFn;
    var mixedFn = (0, _react.useCallback)(function (themeProps) {
      return valueFn(themeFn, themeProps);
    }, [themeFn, valueFn]);
    return _react.default.createElement(ThemeContext.Provider, {
      value: mixedFn
    }, props.children);
  }

  return {
    Consumer: Consumer,
    Provider: Provider
  };
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external"}],"../node_modules/@atlaskit/theme/dist/esm/components/Theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createTheme = require("../utils/createTheme");

// Create default global light theme
var _default = (0, _createTheme.createTheme)(function () {
  return {
    mode: 'light'
  };
});

exports.default = _default;
},{"../utils/createTheme":"../node_modules/@atlaskit/theme/dist/esm/utils/createTheme.js"}],"../node_modules/@atlaskit/theme/dist/esm/components/AtlaskitThemeProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exenv = _interopRequireDefault(require("exenv"));

var colors = _interopRequireWildcard(require("../colors"));

var _constants = require("../constants");

var _Theme = _interopRequireDefault(require("./Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// For forward-compat until everything is upgraded.
function getStylesheetResetCSS(backgroundColor) {
  return "\n    body { background: " + backgroundColor + "; }\n  ";
}

function buildThemeState(mode) {
  var _a;

  return {
    theme: (_a = {}, _a[_constants.CHANNEL] = {
      mode: mode
    }, _a)
  };
}

var LegacyReset = _styledComponents.default.div(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n  background-color: ", ";\n  color: ", ";\n\n  a {\n    color: ", ";\n  }\n  a:hover {\n    color: ", ";\n  }\n  a:active {\n    color: ", ";\n  }\n  a:focus {\n    outline-color: ", ";\n  }\n  h1 {\n    color: ", ";\n  }\n  h2 {\n    color: ", ";\n  }\n  h3 {\n    color: ", ";\n  }\n  h4 {\n    color: ", ";\n  }\n  h5 {\n    color: ", ";\n  }\n  h6 {\n    color: ", ";\n  }\n  small {\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n\n  a {\n    color: ", ";\n  }\n  a:hover {\n    color: ", ";\n  }\n  a:active {\n    color: ", ";\n  }\n  a:focus {\n    outline-color: ", ";\n  }\n  h1 {\n    color: ", ";\n  }\n  h2 {\n    color: ", ";\n  }\n  h3 {\n    color: ", ";\n  }\n  h4 {\n    color: ", ";\n  }\n  h5 {\n    color: ", ";\n  }\n  h6 {\n    color: ", ";\n  }\n  small {\n    color: ", ";\n  }\n"])), function (p) {
  return p.background;
}, colors.text, colors.link, colors.linkHover, colors.linkActive, colors.linkOutline, colors.heading, colors.heading, colors.heading, colors.heading, colors.heading, colors.subtleHeading, colors.subtleText);

var AtlaskitThemeProvider =
/** @class */
function (_super) {
  (0, _tslib.__extends)(AtlaskitThemeProvider, _super);

  function AtlaskitThemeProvider(props) {
    var _this = _super.call(this, props) || this;
    /**
     * This function never changes its reference because it accesses
     * `this` in the function call - thereby sidestepping the need for
     * creating a new reference everytime theme state changes.
     * NOTE: When moving to hooks watch out for this regressing.
     */


    _this.getThemeMode = function () {
      return {
        mode: _this.state.theme[_constants.CHANNEL].mode
      };
    };

    _this.state = buildThemeState(props.mode);
    return _this;
  }

  AtlaskitThemeProvider.prototype.getChildContext = function () {
    return {
      hasAtlaskitThemeProvider: true
    };
  };

  AtlaskitThemeProvider.prototype.UNSAFE_componentWillMount = function () {
    if (!this.context.hasAtlaskitThemeProvider && _exenv.default.canUseDOM) {
      var css = getStylesheetResetCSS(this.props.background(this.state));
      this.stylesheet = document.createElement('style');
      this.stylesheet.type = 'text/css';
      this.stylesheet.innerHTML = css;

      if (document && document.head) {
        document.head.appendChild(this.stylesheet);
      }
    }
  };

  AtlaskitThemeProvider.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    if (newProps.mode !== this.props.mode) {
      var newThemeState = buildThemeState(newProps.mode);

      if (this.stylesheet) {
        var css = getStylesheetResetCSS(newProps.background(newThemeState));
        this.stylesheet.innerHTML = css;
      }

      this.setState(newThemeState);
    }
  };

  AtlaskitThemeProvider.prototype.componentWillUnmount = function () {
    if (this.stylesheet && document && document.head) {
      document.head.removeChild(this.stylesheet);
      delete this.stylesheet;
    }
  };

  AtlaskitThemeProvider.prototype.render = function () {
    var children = this.props.children;
    var theme = this.state.theme;
    return (
      /* Wrapping the new provider around the old one provides forward
      compatibility when using the old provider for styled components. This
      allows us to use components converted to use the new API with consumers
      using the old provider along side components that may still be using the
      old theming API. */
      _react.default.createElement(_Theme.default.Provider, {
        value: this.getThemeMode
      }, _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react.default.createElement(LegacyReset, {
        background: this.props.background
      }, children)))
    );
  };

  AtlaskitThemeProvider.defaultProps = {
    mode: _constants.DEFAULT_THEME_MODE,
    background: colors.background
  };
  AtlaskitThemeProvider.childContextTypes = {
    hasAtlaskitThemeProvider: _propTypes.default.bool
  };
  AtlaskitThemeProvider.contextTypes = {
    hasAtlaskitThemeProvider: _propTypes.default.bool
  };
  return AtlaskitThemeProvider;
}(_react.Component);

var _default = AtlaskitThemeProvider;
exports.default = _default;
var templateObject_1;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","prop-types":"../node_modules/prop-types/index.js","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","exenv":"../node_modules/exenv/index.js","../colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","../constants":"../node_modules/@atlaskit/theme/dist/esm/constants.js","./Theme":"../node_modules/@atlaskit/theme/dist/esm/components/Theme.js"}],"../node_modules/@atlaskit/theme/dist/esm/components/Appearance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _default = function _default(_a) {
  var children = _a.children,
      props = _a.props,
      theme = _a.theme;
  var appearance = typeof props === 'object' ? 'default' : props;
  var merged = typeof props === 'object' ? (0, _tslib.__assign)({}, props) : {};
  Object.keys(theme).forEach(function (key) {
    if (!(key in merged)) {
      merged[key] = theme[key]({
        appearance: appearance
      });
    }
  });
  return children(merged);
};

exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@atlaskit/theme/dist/esm/components/Reset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reset = Reset;
exports.ResetTheme = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var colors = _interopRequireWildcard(require("../colors"));

var _createTheme = require("../utils/createTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orTextColor = function (preferred) {
  return function (p) {
    return p[preferred] || p.textColor;
  };
};

var Div = _styledComponents.default.div(templateObject_2 || (templateObject_2 = (0, _tslib.__makeTemplateObject)(["\n  ", ";\n"], ["\n  ", ";\n"])), function (p) {
  return (0, _styledComponents.css)(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n    background-color: ", ";\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n    a:hover {\n      color: ", ";\n    }\n    a:active {\n      color: ", ";\n    }\n    a:focus {\n      outline-color: ", ";\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      color: ", ";\n    }\n    h6 {\n      color: ", ";\n    }\n    small {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n    a:hover {\n      color: ", ";\n    }\n    a:active {\n      color: ", ";\n    }\n    a:focus {\n      outline-color: ", ";\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      color: ", ";\n    }\n    h6 {\n      color: ", ";\n    }\n    small {\n      color: ", ";\n    }\n  "])), p.backgroundColor, p.textColor, orTextColor('linkColor'), orTextColor('linkColorHover'), orTextColor('linkColorActive'), orTextColor('linkColorOutline'), orTextColor('headingColor'), orTextColor('subtleHeadingColor'), orTextColor('subtleTextColor'));
});

var ResetTheme = (0, _createTheme.createTheme)(function () {
  return {
    backgroundColor: colors.N0,
    linkColor: colors.B400,
    linkColorHover: colors.B300,
    linkColorActive: colors.B500,
    linkColorOutline: colors.B100,
    headingColor: colors.N800,
    subtleHeadingColor: colors.N200,
    subtleTextColor: colors.N200,
    textColor: colors.N900
  };
});
exports.ResetTheme = ResetTheme;

function Reset(props) {
  return _react.default.createElement(ResetTheme.Provider, {
    value: props.theme
  }, _react.default.createElement(ResetTheme.Consumer, null, function (tokens) {
    return _react.default.createElement(Div, (0, _tslib.__assign)({}, (0, _tslib.__assign)((0, _tslib.__assign)({}, tokens), {
      mode: undefined
    }), props), props.children);
  }));
}

var templateObject_1, templateObject_2;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","../colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","../utils/createTheme":"../node_modules/@atlaskit/theme/dist/esm/utils/createTheme.js"}],"../node_modules/@atlaskit/theme/dist/esm/hoc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = withTheme;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _Theme = _interopRequireDefault(require("./components/Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pre-executes the (global) theme and passes it as a prop to the supplied component.
// This is useful for ensuring that the current theme is accessible as props
// in styled-components.
function withTheme(InnerComponent) {
  return function ComponentWithTheme(props) {
    return _react.default.createElement(_Theme.default.Consumer, null, function (tokens) {
      return _react.default.createElement(InnerComponent, (0, _tslib.__assign)({}, props, {
        theme: tokens
      }));
    });
  };
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","./components/Theme":"../node_modules/@atlaskit/theme/dist/esm/components/Theme.js"}],"../node_modules/@atlaskit/theme/dist/esm/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getTheme", {
  enumerable: true,
  get: function () {
    return _getTheme.default;
  }
});
Object.defineProperty(exports, "themed", {
  enumerable: true,
  get: function () {
    return _themed.default;
  }
});
Object.defineProperty(exports, "AtlaskitThemeProvider", {
  enumerable: true,
  get: function () {
    return _AtlaskitThemeProvider.default;
  }
});
Object.defineProperty(exports, "Appearance", {
  enumerable: true,
  get: function () {
    return _Appearance.default;
  }
});
Object.defineProperty(exports, "ResetTheme", {
  enumerable: true,
  get: function () {
    return _Reset.ResetTheme;
  }
});
Object.defineProperty(exports, "Reset", {
  enumerable: true,
  get: function () {
    return _Reset.Reset;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Theme.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function () {
    return _hoc.withTheme;
  }
});
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function () {
    return _createTheme.createTheme;
  }
});

var _getTheme = _interopRequireDefault(require("./utils/getTheme"));

var _themed = _interopRequireDefault(require("./utils/themed"));

var _AtlaskitThemeProvider = _interopRequireDefault(require("./components/AtlaskitThemeProvider"));

var _Appearance = _interopRequireDefault(require("./components/Appearance"));

var _Reset = require("./components/Reset");

var _Theme = _interopRequireDefault(require("./components/Theme"));

var _hoc = require("./hoc");

var _createTheme = require("./utils/createTheme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./utils/getTheme":"../node_modules/@atlaskit/theme/dist/esm/utils/getTheme.js","./utils/themed":"../node_modules/@atlaskit/theme/dist/esm/utils/themed.js","./components/AtlaskitThemeProvider":"../node_modules/@atlaskit/theme/dist/esm/components/AtlaskitThemeProvider.js","./components/Appearance":"../node_modules/@atlaskit/theme/dist/esm/components/Appearance.js","./components/Reset":"../node_modules/@atlaskit/theme/dist/esm/components/Reset.js","./components/Theme":"../node_modules/@atlaskit/theme/dist/esm/components/Theme.js","./hoc":"../node_modules/@atlaskit/theme/dist/esm/hoc.js","./utils/createTheme":"../node_modules/@atlaskit/theme/dist/esm/utils/createTheme.js"}],"../node_modules/@babel/runtime/helpers/inheritsLoose.js":[function(require,module,exports) {
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;
},{}],"../node_modules/@emotion/sheet/dist/sheet.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = void 0;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if ("development" !== 'production') {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

exports.StyleSheet = StyleSheet;
},{}],"../node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var _default = weakMemoize;
exports.default = _default;
},{}],"../node_modules/@emotion/cache/dist/cache.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sheet = require("@emotion/sheet");

var _stylis = _interopRequireDefault(require("@emotion/stylis"));

require("@emotion/weak-memoize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};

var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _stylis.default(stylisOptions);

  if ("development" !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ("development" !== 'production' && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if ("development" !== 'production') {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _sheet.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

var _default = createCache;
exports.default = _default;
},{"@emotion/sheet":"../node_modules/@emotion/sheet/dist/sheet.browser.esm.js","@emotion/stylis":"../node_modules/@emotion/stylis/dist/stylis.browser.esm.js","@emotion/weak-memoize":"../node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js"}],"../node_modules/@emotion/utils/dist/utils.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegisteredStyles = getRegisteredStyles;
exports.insertStyles = void 0;
var isBrowser = "object" !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}

var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
      current = current.next;
    } while (current !== undefined);
  }
};

exports.insertStyles = insertStyles;
},{}],"../node_modules/@emotion/hash/dist/hash.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var _default = murmur2;
exports.default = _default;
},{}],"../node_modules/@emotion/serialize/dist/serialize.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeStyles = void 0;

var _hash = _interopRequireDefault(require("@emotion/hash"));

var _unitless = _interopRequireDefault(require("@emotion/unitless"));

var _memoize = _interopRequireDefault(require("@emotion/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = (0, _memoize.default)(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_unitless.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if ("development" !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ("development" !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ("development" !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if ("development" !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if ("development" !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ("development" !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ("development" !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if ("development" !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;

var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ("development" !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ("development" !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if ("development" !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0, _hash.default)(styles) + identifierName;

  if ("development" !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

exports.serializeStyles = serializeStyles;
},{"@emotion/hash":"../node_modules/@emotion/hash/dist/hash.browser.esm.js","@emotion/unitless":"../node_modules/@emotion/unitless/dist/unitless.browser.esm.js","@emotion/memoize":"../node_modules/@emotion/memoize/dist/memoize.browser.esm.js"}],"../node_modules/@emotion/css/dist/css.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _serialize = require("@emotion/serialize");

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _serialize.serializeStyles)(args);
}

var _default = css;
exports.default = _default;
},{"@emotion/serialize":"../node_modules/@emotion/serialize/dist/serialize.browser.esm.js"}],"../node_modules/@emotion/core/dist/core.browser.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "css", {
  enumerable: true,
  get: function () {
    return _css.default;
  }
});
exports.withEmotionCache = exports.keyframes = exports.jsx = exports.ThemeContext = exports.Global = exports.ClassNames = exports.CacheProvider = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _cache = _interopRequireDefault(require("@emotion/cache"));

var _utils = require("@emotion/utils");

var _serialize = require("@emotion/serialize");

var _sheet = require("@emotion/sheet");

var _css = _interopRequireDefault(require("@emotion/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmotionCacheContext = (0, _react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? (0, _cache.default)() : null);
var ThemeContext = (0, _react.createContext)({});
exports.ThemeContext = ThemeContext;
var CacheProvider = EmotionCacheContext.Provider;
exports.CacheProvider = CacheProvider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return (0, _react.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return (0, _react.forwardRef)(render);
}; // thus we only need to replace what is a valid character for JS, but not for CSS


exports.withEmotionCache = withEmotionCache;

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0, _utils.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0, _serialize.serializeStyles)(registeredStyles);

  if ("development" !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0, _serialize.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = (0, _utils.insertStyles)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("development" === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = (0, _react.createElement)(type, newProps);
  return ele;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return (0, _react.createElement)(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if ("development" !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return _react.createElement.apply(undefined, args);
  }

  if ("development" !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if ("development" !== 'production') {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)jsx.*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return _react.createElement.apply(null, createElementArgArray);
};

exports.jsx = jsx;
var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if ("development" !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return (0, _react.createElement)(ThemeContext.Consumer, null, function (theme) {
      var serialized = (0, _serialize.serializeStyles)([styles(theme)]);
      return (0, _react.createElement)(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = (0, _serialize.serializeStyles)([styles]);
  return (0, _react.createElement)(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
}); // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

exports.Global = Global;

var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _sheet.StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      (0, _utils.insertStyles)(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    return null;
  };

  return InnerGlobal;
}(_react.Component);

var keyframes = function keyframes() {
  var insertable = _css.default.apply(void 0, arguments);

  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

exports.keyframes = keyframes;

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0, _utils.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return (0, _react.createElement)(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = (0, _serialize.serializeStyles)(args, context.registered);
      {
        (0, _utils.insertStyles)(context, serialized, false);
      }
      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    return ele;
  });
});
exports.ClassNames = ClassNames;
},{"@babel/runtime/helpers/inheritsLoose":"../node_modules/@babel/runtime/helpers/inheritsLoose.js","react":"../../../../../../../react => React.external","@emotion/cache":"../node_modules/@emotion/cache/dist/cache.browser.esm.js","@emotion/utils":"../node_modules/@emotion/utils/dist/utils.browser.esm.js","@emotion/serialize":"../node_modules/@emotion/serialize/dist/serialize.browser.esm.js","@emotion/sheet":"../node_modules/@emotion/sheet/dist/sheet.browser.esm.js","@emotion/css":"../node_modules/@emotion/css/dist/css.browser.esm.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/events/AnalyticsEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var AnalyticsEvent =
/** @class */
function () {
  function AnalyticsEvent(props) {
    var _this = this;

    this.clone = function () {
      // just a shallow clone, don't change sub refs unless you want to
      // affect the original's too
      var payload = (0, _tslib.__assign)({}, _this.payload);
      return new AnalyticsEvent({
        payload: payload
      });
    };

    this.payload = props.payload;
  }

  AnalyticsEvent.prototype.update = function (updater) {
    if (typeof updater === 'function') {
      this.payload = updater(this.payload);
    }

    if (typeof updater === 'object') {
      this.payload = (0, _tslib.__assign)((0, _tslib.__assign)({}, this.payload), updater);
    }

    return this;
  };

  return AnalyticsEvent;
}();

var _default = AnalyticsEvent;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/events/UIAnalyticsEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _AnalyticsEvent = _interopRequireDefault(require("./AnalyticsEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UIAnalyticsEvent =
/** @class */
function (_super) {
  (0, _tslib.__extends)(UIAnalyticsEvent, _super);

  function UIAnalyticsEvent(props) {
    var _this = _super.call(this, props) || this;

    _this.clone = function () {
      if (_this.hasFired) {
        if ("development" !== 'production' && !undefined) {
          // eslint-disable-next-line no-console
          console.warn("Cannot clone an event after it's been fired.");
        }

        return null;
      }

      var context = (0, _tslib.__spread)(_this.context);
      var handlers = (0, _tslib.__spread)(_this.handlers);
      /**
       * A hacky "deep clone" of the object. This is limited in that it wont
       * support functions, regexs, Maps, Sets, etc, but none of those need to
       * be represented in our payload.
       */

      var payload = JSON.parse(JSON.stringify(_this.payload));
      return new UIAnalyticsEvent({
        context: context,
        handlers: handlers,
        payload: payload
      });
    };

    _this.fire = function (channel) {
      if (_this.hasFired) {
        if ("development" !== 'production' && !undefined) {
          // eslint-disable-next-line no-console
          console.warn('Cannot fire an event twice.');
        }

        return;
      }

      _this.handlers.forEach(function (handler) {
        return handler(_this, channel);
      });

      _this.hasFired = true;
    };

    _this.context = props.context || [];
    _this.handlers = props.handlers || [];
    _this.hasFired = false;
    return _this;
  }

  UIAnalyticsEvent.prototype.update = function (updater) {
    if (this.hasFired) {
      if ("development" !== 'production' && !undefined) {
        // eslint-disable-next-line no-console
        console.warn("Cannot update an event after it's been fired.");
      }

      return this;
    }

    return _super.prototype.update.call(this, updater);
  };

  return UIAnalyticsEvent;
}(_AnalyticsEvent.default);

var _default = UIAnalyticsEvent;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./AnalyticsEvent":"../node_modules/@atlaskit/analytics-next/dist/esm/events/AnalyticsEvent.js"}],"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var AnalyticsNextContext = (0, _react.createContext)({
  getAtlaskitAnalyticsContext: function () {
    return [];
  },
  getAtlaskitAnalyticsEventHandlers: function () {
    return [];
  }
});
var _default = AnalyticsNextContext;
exports.default = _default;
},{"react":"../../../../../../../react => React.external"}],"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _context.default;
exports.default = _default;
},{"./context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/context.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/LegacyAnalyticsListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ContextTypes = {
  getAtlaskitAnalyticsEventHandlers: _propTypes.default.func,
  getAtlaskitAnalyticsContext: _propTypes.default.func
};

var noop = function () {
  return [];
}; // eslint-disable-next-line @repo/internal/react/no-class-components


var AnalyticsListener =
/** @class */
function (_super) {
  (0, _tslib.__extends)(AnalyticsListener, _super);

  function AnalyticsListener(props) {
    var _this = _super.call(this, props) || this;

    _this.getChildContext = function () {
      return {
        getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers,
        getAtlaskitAnalyticsContext: _this.getAtlaskitAnalyticsContext
      };
    };

    _this.getAnalyticsEventHandlers = function () {
      var _a = _this.props,
          channel = _a.channel,
          onEvent = _a.onEvent;
      var _b = _this.context.getAtlaskitAnalyticsEventHandlers,
          getAtlaskitAnalyticsEventHandlers = _b === void 0 ? noop : _b;

      var handler = function (event, eventChannel) {
        if (channel === '*' || channel === eventChannel) {
          onEvent(event, eventChannel);
        }
      };

      return (0, _tslib.__spread)([handler], getAtlaskitAnalyticsEventHandlers());
    };

    _this.getAtlaskitAnalyticsContext = function () {
      var _a = _this.context.getAtlaskitAnalyticsContext,
          getAtlaskitAnalyticsContext = _a === void 0 ? noop : _a;
      return getAtlaskitAnalyticsContext();
    };

    _this.contextValue = {
      getAtlaskitAnalyticsContext: _this.getAtlaskitAnalyticsContext,
      getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers
    };
    return _this;
  }

  AnalyticsListener.prototype.render = function () {
    var children = this.props.children;
    return _react.default.createElement(_analyticsNextStableReactContext.default.Provider, {
      value: this.contextValue
    }, children);
  };

  AnalyticsListener.contextTypes = ContextTypes;
  AnalyticsListener.childContextTypes = ContextTypes;
  return AnalyticsListener;
}(_react.Component);

var _default = AnalyticsListener;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","prop-types":"../node_modules/prop-types/index.js","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnalyticsContext = void 0;

var _react = require("react");

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useAnalyticsContext = function () {
  return (0, _react.useContext)(_analyticsNextStableReactContext.default);
};

exports.useAnalyticsContext = useAnalyticsContext;
},{"react":"../../../../../../../react => React.external","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useTrackedRef.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTrackedRef = void 0;

var _react = require("react");

var useTrackedRef = function (value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
};

exports.useTrackedRef = useTrackedRef;
},{"react":"../../../../../../../react => React.external"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/ModernAnalyticsListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

var _useAnalyticsContext = require("../../hooks/useAnalyticsContext");

var _useTrackedRef = require("../../hooks/useTrackedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AnalyticsListener = function (_a) {
  var children = _a.children,
      channel = _a.channel,
      onEvent = _a.onEvent;
  var analyticsContext = (0, _useAnalyticsContext.useAnalyticsContext)();
  var onEventRef = (0, _useTrackedRef.useTrackedRef)(onEvent);
  var channelRef = (0, _useTrackedRef.useTrackedRef)(channel);
  var getAtlaskitAnalyticsEventHandlers = (0, _react.useCallback)(function () {
    var thisHandler = function (event, eventChannel) {
      if (channelRef.current === '*' || channelRef.current === eventChannel) {
        onEventRef.current(event, eventChannel);
      }
    };

    return (0, _tslib.__spread)(analyticsContext.getAtlaskitAnalyticsEventHandlers(), [thisHandler]);
  }, [analyticsContext, channelRef, onEventRef]);
  var value = (0, _react.useMemo)(function () {
    return {
      getAtlaskitAnalyticsEventHandlers: getAtlaskitAnalyticsEventHandlers,
      getAtlaskitAnalyticsContext: analyticsContext.getAtlaskitAnalyticsContext
    };
  }, [analyticsContext, getAtlaskitAnalyticsEventHandlers]);
  return _react.default.createElement(_analyticsNextStableReactContext.default.Provider, {
    value: value
  }, children);
};

var _default = AnalyticsListener;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js","../../hooks/useAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsContext.js","../../hooks/useTrackedRef":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useTrackedRef.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LegacyAnalyticsListener = _interopRequireDefault(require("./LegacyAnalyticsListener"));

var _ModernAnalyticsListener = _interopRequireDefault(require("./ModernAnalyticsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExportedAnalyticsListener;

if (undefined) {
  ExportedAnalyticsListener = _ModernAnalyticsListener.default;
} else {
  ExportedAnalyticsListener = _LegacyAnalyticsListener.default;
}

var _default = ExportedAnalyticsListener;
exports.default = _default;
},{"./LegacyAnalyticsListener":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/LegacyAnalyticsListener.js","./ModernAnalyticsListener":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/ModernAnalyticsListener.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/LegacyAnalyticsContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ContextTypes = {
  getAtlaskitAnalyticsContext: _propTypes.default.func,
  getAtlaskitAnalyticsEventHandlers: _propTypes.default.func
};

var noop = function () {
  return [];
}; // eslint-disable-next-line @repo/internal/react/no-class-components


var AnalyticsContext =
/** @class */
function (_super) {
  (0, _tslib.__extends)(AnalyticsContext, _super);

  function AnalyticsContext(props) {
    var _this = _super.call(this, props) || this;

    _this.getChildContext = function () {
      return {
        getAtlaskitAnalyticsContext: _this.getAnalyticsContext
      };
    };

    _this.getAnalyticsContext = function () {
      var data = _this.props.data;
      var _a = _this.context.getAtlaskitAnalyticsContext,
          getAtlaskitAnalyticsContext = _a === void 0 ? noop : _a;
      return (0, _tslib.__spread)(getAtlaskitAnalyticsContext(), [data]);
    };

    _this.getAnalyticsEventHandlers = function () {
      var _a = _this.context.getAtlaskitAnalyticsEventHandlers,
          getAtlaskitAnalyticsEventHandlers = _a === void 0 ? noop : _a;
      return getAtlaskitAnalyticsEventHandlers();
    };

    _this.contextValue = {
      getAtlaskitAnalyticsContext: _this.getAnalyticsContext,
      getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers
    };
    return _this;
  }

  AnalyticsContext.prototype.render = function () {
    var children = this.props.children;
    return _react.default.createElement(_analyticsNextStableReactContext.default.Provider, {
      value: this.contextValue
    }, children);
  };

  AnalyticsContext.contextTypes = ContextTypes;
  AnalyticsContext.childContextTypes = ContextTypes;
  return AnalyticsContext;
}(_react.Component);

var _default = AnalyticsContext;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","prop-types":"../node_modules/prop-types/index.js","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/ModernAnalyticsContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

var _useAnalyticsContext = require("../../hooks/useAnalyticsContext");

var _useTrackedRef = require("../../hooks/useTrackedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AnalyticsContext = function (_a) {
  var data = _a.data,
      children = _a.children;
  var dataRef = (0, _useTrackedRef.useTrackedRef)(data);
  var analyticsContext = (0, _useAnalyticsContext.useAnalyticsContext)();
  var getAtlaskitAnalyticsContext = (0, _react.useCallback)(function () {
    return (0, _tslib.__spread)(analyticsContext.getAtlaskitAnalyticsContext(), [dataRef.current]);
  }, [analyticsContext, dataRef]);
  var value = (0, _react.useMemo)(function () {
    return {
      getAtlaskitAnalyticsContext: getAtlaskitAnalyticsContext,
      getAtlaskitAnalyticsEventHandlers: analyticsContext.getAtlaskitAnalyticsEventHandlers
    };
  }, [analyticsContext, getAtlaskitAnalyticsContext]);
  return _react.default.createElement(_analyticsNextStableReactContext.default.Provider, {
    value: value
  }, children);
};

var _default = AnalyticsContext;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js","../../hooks/useAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsContext.js","../../hooks/useTrackedRef":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useTrackedRef.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LegacyAnalyticsContext = _interopRequireDefault(require("./LegacyAnalyticsContext"));

var _ModernAnalyticsContext = _interopRequireDefault(require("./ModernAnalyticsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExportedAnalyticsContext;

if (undefined) {
  ExportedAnalyticsContext = _ModernAnalyticsContext.default;
} else {
  ExportedAnalyticsContext = _LegacyAnalyticsContext.default;
}

var _default = ExportedAnalyticsContext;
exports.default = _default;
},{"./LegacyAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/LegacyAnalyticsContext.js","./ModernAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/ModernAnalyticsContext.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hocs/withAnalyticsContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _AnalyticsContext = _interopRequireDefault(require("../components/AnalyticsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var withAnalyticsContext = function (defaultData) {
  return function (WrappedComponent) {
    var WithAnalyticsContext = (0, _react.forwardRef)(function (_a, ref) {
      var analyticsContext = _a.analyticsContext,
          rest = (0, _tslib.__rest)(_a, ["analyticsContext"]);
      var analyticsData = (0, _react.useMemo)(function () {
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, defaultData), analyticsContext);
      }, [analyticsContext]);
      return _react.default.createElement(_AnalyticsContext.default, {
        data: analyticsData
      }, _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, rest, {
        ref: ref
      })));
    }); // @ts-ignore

    WithAnalyticsContext.displayName = "WithAnalyticsContext(" + ( // @ts-ignore disneyName doesn't exist on type
    WrappedComponent.displayName || WrappedComponent.name) + ")";
    return WithAnalyticsContext;
  };
};

var _default = withAnalyticsContext;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","../components/AnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/index.js"}],"../node_modules/use-memo-one/dist/use-memo-one.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallbackOne = useCallbackOne;
exports.useMemoOne = useMemoOne;
exports.useMemo = exports.useCallback = void 0;

var _react = require("react");

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0, _react.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var committed = (0, _react.useRef)(initial);
  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = isInputMatch ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0, _react.useEffect)(function () {
    committed.current = cache;
  }, [cache]);
  return cache.result;
}

function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}

var useMemo = useMemoOne;
exports.useMemo = useMemo;
var useCallback = useCallbackOne;
exports.useCallback = useCallback;
},{"react":"../../../../../../../react => React.external"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnalyticsEvents = useAnalyticsEvents;

var _useMemoOne = require("use-memo-one");

var _UIAnalyticsEvent = _interopRequireDefault(require("../events/UIAnalyticsEvent"));

var _useAnalyticsContext = require("./useAnalyticsContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useAnalyticsEvents() {
  var analyticsContext = (0, _useAnalyticsContext.useAnalyticsContext)();
  var createAnalyticsEvent = (0, _useMemoOne.useCallbackOne)(function (payload) {
    return new _UIAnalyticsEvent.default({
      context: analyticsContext.getAtlaskitAnalyticsContext(),
      handlers: analyticsContext.getAtlaskitAnalyticsEventHandlers(),
      payload: payload
    });
  }, [analyticsContext]);
  return {
    createAnalyticsEvent: createAnalyticsEvent
  };
}
},{"use-memo-one":"../node_modules/use-memo-one/dist/use-memo-one.esm.js","../events/UIAnalyticsEvent":"../node_modules/@atlaskit/analytics-next/dist/esm/events/UIAnalyticsEvent.js","./useAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsContext.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/usePatchedProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePatchedProps = usePatchedProps;

var _tslib = require("tslib");

var _react = require("react");

var _useAnalyticsEvents = require("./useAnalyticsEvents");

function usePatchedProps(createEventMap, wrappedComponentProps) {
  if (createEventMap === void 0) {
    createEventMap = {};
  }

  var createAnalyticsEvent = (0, _useAnalyticsEvents.useAnalyticsEvents)().createAnalyticsEvent;
  var patchedProps = (0, _react.useMemo)(function () {
    return Object.keys(createEventMap).reduce(function (p, k) {
      var _a;

      var eventCreator = createEventMap[k];

      if (!['object', 'function'].includes(typeof eventCreator)) {
        return p;
      }

      var propValue = wrappedComponentProps[k];

      var wrappedCallback = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var analyticsEvent = typeof eventCreator === 'function' ? eventCreator(createAnalyticsEvent, wrappedComponentProps) : createAnalyticsEvent(eventCreator);

        if (propValue && typeof propValue === 'function') {
          propValue.apply(void 0, (0, _tslib.__spread)(args, [analyticsEvent]));
        }
      };

      return wrappedCallback ? (0, _tslib.__assign)((0, _tslib.__assign)({}, p), (_a = {}, _a[k] = wrappedCallback, _a)) : p;
    }, {});
  }, [createEventMap, wrappedComponentProps, createAnalyticsEvent]);
  return {
    patchedEventProps: patchedProps
  };
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","./useAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hocs/withAnalyticsEvents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _useAnalyticsEvents = require("../hooks/useAnalyticsEvents");

var _usePatchedProps = require("../hooks/usePatchedProps");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var withAnalyticsEvents = function (createEventMap) {
  if (createEventMap === void 0) {
    createEventMap = {};
  }

  return function (WrappedComponent) {
    var WithAnalyticsEvents = (0, _react.forwardRef)(function (props, ref) {
      var patchedEventProps = (0, _usePatchedProps.usePatchedProps)(createEventMap, props).patchedEventProps;
      var createAnalyticsEvent = (0, _useAnalyticsEvents.useAnalyticsEvents)().createAnalyticsEvent;
      return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, patchedEventProps, {
        createAnalyticsEvent: createAnalyticsEvent,
        ref: ref
      }));
    }); // @ts-ignore

    WithAnalyticsEvents.displayName = "WithAnalyticsEvents(" + ( // @ts-ignore disneyName doesn't exist on type
    WrappedComponent.displayName || WrappedComponent.name) + ")";
    return WithAnalyticsEvents;
  };
};

var _default = withAnalyticsEvents;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","../hooks/useAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js","../hooks/usePatchedProps":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/usePatchedProps.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsErrorBoundary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseAnalyticsErrorBoundary = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _withAnalyticsEvents = _interopRequireDefault(require("../hocs/withAnalyticsEvents"));

var _LegacyAnalyticsContext = _interopRequireDefault(require("./AnalyticsContext/LegacyAnalyticsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line @repo/internal/react/no-class-components
var BaseAnalyticsErrorBoundary =
/** @class */
function (_super) {
  (0, _tslib.__extends)(BaseAnalyticsErrorBoundary, _super);

  function BaseAnalyticsErrorBoundary() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.fireAnalytics = function (analyticsErrorPayload) {
      var _a = _this.props,
          createAnalyticsEvent = _a.createAnalyticsEvent,
          channel = _a.channel,
          data = _a.data;
      createAnalyticsEvent({
        action: 'UnhandledError',
        eventType: 'ui',
        attributes: (0, _tslib.__assign)((0, _tslib.__assign)({
          browserInfo: window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : 'unknown'
        }, data), analyticsErrorPayload)
      }).fire(channel);
    };

    return _this;
  }

  BaseAnalyticsErrorBoundary.prototype.componentDidCatch = function (error, info) {
    var payload = {
      error: error,
      info: info
    };
    this.fireAnalytics(payload);
  };

  BaseAnalyticsErrorBoundary.prototype.render = function () {
    var _a = this.props,
        data = _a.data,
        children = _a.children;
    return _react.default.createElement(_LegacyAnalyticsContext.default, {
      data: data
    }, children);
  };

  return BaseAnalyticsErrorBoundary;
}(_react.Component);

exports.BaseAnalyticsErrorBoundary = BaseAnalyticsErrorBoundary;
var AnalyticsErrorBoundary = (0, _withAnalyticsEvents.default)()(BaseAnalyticsErrorBoundary);
var _default = AnalyticsErrorBoundary;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","../hocs/withAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hocs/withAnalyticsEvents.js","./AnalyticsContext/LegacyAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/LegacyAnalyticsContext.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useCallbackWithAnalytics.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallbackWithAnalytics = void 0;

var _tslib = require("tslib");

var _react = require("react");

var _useAnalyticsEvents = require("./useAnalyticsEvents");

var _useTrackedRef = require("./useTrackedRef");

var useCallbackWithAnalytics = function (method, payload, channel) {
  var createAnalyticsEvent = (0, _useAnalyticsEvents.useAnalyticsEvents)().createAnalyticsEvent;
  var methodRef = (0, _useTrackedRef.useTrackedRef)(method);
  var payloadRef = (0, _useTrackedRef.useTrackedRef)(payload);
  return (0, _react.useCallback)(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var pload = typeof payloadRef.current === 'function' ? payloadRef.current.apply(payloadRef, (0, _tslib.__spread)(args)) : payloadRef.current;
    createAnalyticsEvent(pload).fire(channel);
    methodRef.current.apply(methodRef, (0, _tslib.__spread)(args));
  }, [createAnalyticsEvent, methodRef, payloadRef, channel]);
};

exports.useCallbackWithAnalytics = useCallbackWithAnalytics;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","./useAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js","./useTrackedRef":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useTrackedRef.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/usePlatformLeafEventHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlatformLeafEventHandler = usePlatformLeafEventHandler;

var _tslib = require("tslib");

var _react = require("react");

var _useAnalyticsEvents = require("./useAnalyticsEvents");

var _useTrackedRef = require("./useTrackedRef");

// WARNING: This hook will only function correctly for leaf node components - as in
// no children inside the component will require analytics themselves.
// Ignoring this warning will mean the analytics context of child components will not
// include the context of this component, .e.g, lost data.
// If you are going to have child components that require analytics use withAnalytics
// or AnalyticsContext component instead.
function usePlatformLeafEventHandler(_a) {
  var fn = _a.fn,
      action = _a.action,
      componentName = _a.componentName,
      packageName = _a.packageName,
      packageVersion = _a.packageVersion,
      analyticsData = _a.analyticsData;
  var createAnalyticsEvent = (0, _useAnalyticsEvents.useAnalyticsEvents)().createAnalyticsEvent; // We put analyticsData and fn in a ref so that we don't need to break
  // memoization.
  // Generally these could be defined by consumers inline
  // and so we do this to avoid breaking memoization of useCallback

  var dataRef = (0, _useTrackedRef.useTrackedRef)(analyticsData);
  var fnRef = (0, _useTrackedRef.useTrackedRef)(fn);
  var handler = (0, _react.useCallback)(function (value) {
    var analyticsEvent = createAnalyticsEvent({
      action: action,
      actionSubject: componentName,
      attributes: {
        componentName: componentName,
        packageName: packageName,
        packageVersion: packageVersion
      }
    }); // To avoid wrapping this component in AnalyticsContext we manually
    // push the parent context's meta data into the context.
    // Note: this new 'context'

    var context = (0, _tslib.__assign)({
      componentName: componentName,
      packageName: packageName,
      packageVersion: packageVersion
    }, dataRef.current);
    analyticsEvent.context.push(context); // fire an event on the atlaskit channel

    var clone = analyticsEvent.clone();

    if (clone) {
      clone.fire('atlaskit');
    }

    fnRef.current(value, analyticsEvent);
  }, [// These are strings and won't change
  action, componentName, packageName, packageVersion, // This function is memoized in the context
  createAnalyticsEvent, // these are a stable ref because of the useTrackedRef hook
  dataRef, fnRef]);
  return handler;
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","./useAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js","./useTrackedRef":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useTrackedRef.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/utils/createAndFireEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(channel) {
  return function (payload) {
    return function (createAnalyticsEvent) {
      var consumerEvent = createAnalyticsEvent(payload);
      var clonedEvent = consumerEvent.clone();

      if (clonedEvent) {
        clonedEvent.fire(channel);
      }

      return consumerEvent;
    };
  };
};

exports.default = _default;
},{}],"../node_modules/@atlaskit/analytics-next/dist/esm/utils/cleanProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanProps;

var _tslib = require("tslib");

function cleanProps(props) {
  var createAnalyticsEvent = props.createAnalyticsEvent,
      cleanedProps = (0, _tslib.__rest)(props, ["createAnalyticsEvent"]);
  return cleanedProps;
}
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@atlaskit/analytics-next/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AnalyticsEvent", {
  enumerable: true,
  get: function () {
    return _AnalyticsEvent.default;
  }
});
Object.defineProperty(exports, "UIAnalyticsEvent", {
  enumerable: true,
  get: function () {
    return _UIAnalyticsEvent.default;
  }
});
Object.defineProperty(exports, "AnalyticsListener", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "AnalyticsContext", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
Object.defineProperty(exports, "withAnalyticsContext", {
  enumerable: true,
  get: function () {
    return _withAnalyticsContext.default;
  }
});
Object.defineProperty(exports, "AnalyticsErrorBoundary", {
  enumerable: true,
  get: function () {
    return _AnalyticsErrorBoundary.default;
  }
});
Object.defineProperty(exports, "withAnalyticsEvents", {
  enumerable: true,
  get: function () {
    return _withAnalyticsEvents.default;
  }
});
Object.defineProperty(exports, "AnalyticsReactContext", {
  enumerable: true,
  get: function () {
    return _analyticsNextStableReactContext.default;
  }
});
Object.defineProperty(exports, "useAnalyticsEvents", {
  enumerable: true,
  get: function () {
    return _useAnalyticsEvents.useAnalyticsEvents;
  }
});
Object.defineProperty(exports, "useCallbackWithAnalytics", {
  enumerable: true,
  get: function () {
    return _useCallbackWithAnalytics.useCallbackWithAnalytics;
  }
});
Object.defineProperty(exports, "usePlatformLeafEventHandler", {
  enumerable: true,
  get: function () {
    return _usePlatformLeafEventHandler.usePlatformLeafEventHandler;
  }
});
Object.defineProperty(exports, "createAndFireEvent", {
  enumerable: true,
  get: function () {
    return _createAndFireEvent.default;
  }
});
Object.defineProperty(exports, "cleanProps", {
  enumerable: true,
  get: function () {
    return _cleanProps.default;
  }
});

var _AnalyticsEvent = _interopRequireDefault(require("./events/AnalyticsEvent"));

var _UIAnalyticsEvent = _interopRequireDefault(require("./events/UIAnalyticsEvent"));

var _index = _interopRequireDefault(require("./components/AnalyticsListener/index"));

var _index2 = _interopRequireDefault(require("./components/AnalyticsContext/index"));

var _withAnalyticsContext = _interopRequireDefault(require("./hocs/withAnalyticsContext"));

var _AnalyticsErrorBoundary = _interopRequireDefault(require("./components/AnalyticsErrorBoundary"));

var _withAnalyticsEvents = _interopRequireDefault(require("./hocs/withAnalyticsEvents"));

var _analyticsNextStableReactContext = _interopRequireDefault(require("@atlaskit/analytics-next-stable-react-context"));

var _useAnalyticsEvents = require("./hooks/useAnalyticsEvents");

var _useCallbackWithAnalytics = require("./hooks/useCallbackWithAnalytics");

var _usePlatformLeafEventHandler = require("./hooks/usePlatformLeafEventHandler");

var _createAndFireEvent = _interopRequireDefault(require("./utils/createAndFireEvent"));

var _cleanProps = _interopRequireDefault(require("./utils/cleanProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./events/AnalyticsEvent":"../node_modules/@atlaskit/analytics-next/dist/esm/events/AnalyticsEvent.js","./events/UIAnalyticsEvent":"../node_modules/@atlaskit/analytics-next/dist/esm/events/UIAnalyticsEvent.js","./components/AnalyticsListener/index":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsListener/index.js","./components/AnalyticsContext/index":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsContext/index.js","./hocs/withAnalyticsContext":"../node_modules/@atlaskit/analytics-next/dist/esm/hocs/withAnalyticsContext.js","./components/AnalyticsErrorBoundary":"../node_modules/@atlaskit/analytics-next/dist/esm/components/AnalyticsErrorBoundary.js","./hocs/withAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hocs/withAnalyticsEvents.js","@atlaskit/analytics-next-stable-react-context":"../node_modules/@atlaskit/analytics-next-stable-react-context/dist/esm/index.js","./hooks/useAnalyticsEvents":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useAnalyticsEvents.js","./hooks/useCallbackWithAnalytics":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/useCallbackWithAnalytics.js","./hooks/usePlatformLeafEventHandler":"../node_modules/@atlaskit/analytics-next/dist/esm/hooks/usePlatformLeafEventHandler.js","./utils/createAndFireEvent":"../node_modules/@atlaskit/analytics-next/dist/esm/utils/createAndFireEvent.js","./utils/cleanProps":"../node_modules/@atlaskit/analytics-next/dist/esm/utils/cleanProps.js"}],"../node_modules/@atlaskit/button/dist/esm/version.json":[function(require,module,exports) {
module.exports = {
	"name": "@atlaskit/button",
	"version": "15.0.0",
	"sideEffects": false
}
;
},{}],"../node_modules/@atlaskit/button/dist/esm/shared/block-events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockEvents;

function abort(event) {
  event.preventDefault();
  event.stopPropagation();
}

var tabKeyCode = 9;

function onKey(event) {
  // Allowing tab so that a user can move focus away
  if (event.keyCode === tabKeyCode) {
    return;
  }

  abort(event);
}

var block = {
  onMouseDownCapture: abort,
  onMouseUpCapture: abort,
  // because we have tabIndex = -1 when disabled,
  // keyboard events can only occur when there is an overlay
  onKeyDownCapture: onKey,
  onKeyUpCapture: onKey,
  onTouchStartCapture: abort,
  onTouchEndCapture: abort,
  onPointerDownCapture: abort,
  onPointerUpCapture: abort,
  onClickCapture: abort,
  // Just smashing the existing onClick for good measure
  onClick: abort
};
var doNotBlock = {};

function blockEvents(_a) {
  var isInteractive = _a.isInteractive;
  return isInteractive ? doNotBlock : block;
}
},{}],"../node_modules/@atlaskit/button/dist/esm/shared/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Hard coding the active rgba color value rather than using a helper to convert it
// With helper it would be: hex2rgba(colors.B75, 0.6)
var fadedB75 = 'rgba(179, 212, 255, 0.6)';
var values = {
  // Default appearance
  background: {
    default: {
      default: {
        light: colors.N20A,
        dark: colors.DN70
      },
      hover: {
        light: colors.N30A,
        dark: colors.DN60
      },
      active: {
        light: fadedB75,
        dark: colors.B75
      },
      disabled: {
        light: colors.N20A,
        dark: colors.DN70
      },
      selected: {
        light: colors.N700,
        dark: colors.DN0
      },
      focusSelected: {
        light: colors.N700,
        dark: colors.DN0
      }
    },
    primary: {
      default: {
        light: colors.B400,
        dark: colors.B100
      },
      hover: {
        light: colors.B300,
        dark: colors.B75
      },
      active: {
        light: colors.B500,
        dark: colors.B200
      },
      disabled: {
        light: colors.N20A,
        dark: colors.DN70
      },
      selected: {
        light: colors.N700,
        dark: colors.DN0
      },
      focusSelected: {
        light: colors.N700,
        dark: colors.DN0
      }
    },
    warning: {
      default: {
        light: colors.Y300,
        dark: colors.Y300
      },
      hover: {
        light: colors.Y200,
        dark: colors.Y200
      },
      active: {
        light: colors.Y400,
        dark: colors.Y400
      },
      disabled: {
        light: colors.N20A,
        dark: colors.DN70
      },
      selected: {
        light: colors.Y400,
        dark: colors.Y400
      },
      focusSelected: {
        light: colors.Y400,
        dark: colors.Y400
      }
    },
    danger: {
      default: {
        light: colors.R400,
        dark: colors.R400
      },
      hover: {
        light: colors.R300,
        dark: colors.R300
      },
      active: {
        light: colors.R500,
        dark: colors.R500
      },
      disabled: {
        light: colors.N20A,
        dark: colors.DN70
      },
      selected: {
        light: colors.R500,
        dark: colors.R500
      },
      focusSelected: {
        light: colors.R500,
        dark: colors.R500
      }
    },
    link: {
      default: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: colors.N700,
        dark: colors.N20
      },
      focusSelected: {
        light: colors.N700,
        dark: colors.N20
      }
    },
    subtle: {
      default: {
        light: 'none',
        dark: 'none'
      },
      hover: {
        light: colors.N30A,
        dark: colors.DN60
      },
      active: {
        light: fadedB75,
        dark: colors.B75
      },
      disabled: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: colors.N700,
        dark: colors.DN0
      },
      focusSelected: {
        light: colors.N700,
        dark: colors.DN0
      }
    },
    'subtle-link': {
      default: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: colors.N700,
        dark: colors.N20
      },
      focusSelected: {
        light: colors.N700,
        dark: colors.N20
      }
    }
  },
  boxShadowColor: {
    default: {
      focus: {
        light: colors.B100,
        dark: colors.B75
      },
      focusSelected: {
        light: colors.B100,
        dark: colors.B75
      }
    },
    primary: {
      focus: {
        light: colors.B100,
        dark: colors.B75
      },
      focusSelected: {
        light: colors.B100,
        dark: colors.B75
      }
    },
    warning: {
      focus: {
        light: colors.Y500,
        dark: colors.Y500
      },
      focusSelected: {
        light: colors.Y500,
        dark: colors.Y500
      }
    },
    danger: {
      focus: {
        light: colors.R100,
        dark: colors.R100
      },
      focusSelected: {
        light: colors.R100,
        dark: colors.R100
      }
    },
    link: {
      focus: {
        light: colors.B100,
        dark: colors.B75
      },
      focusSelected: {
        light: colors.B100,
        dark: colors.B75
      }
    },
    subtle: {
      focus: {
        light: colors.B100,
        dark: colors.B75
      },
      focusSelected: {
        light: colors.B100,
        dark: colors.B75
      }
    },
    'subtle-link': {
      focus: {
        light: colors.B100,
        dark: colors.B75
      },
      focusSelected: {
        light: colors.B100,
        dark: colors.B75
      }
    }
  },
  color: {
    default: {
      default: {
        light: colors.N500,
        dark: colors.DN400
      },
      active: {
        light: colors.B400,
        dark: colors.B400
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN30
      },
      selected: {
        light: colors.N20,
        dark: colors.DN400
      },
      focusSelected: {
        light: colors.N20,
        dark: colors.DN400
      }
    },
    primary: {
      default: {
        light: colors.N0,
        dark: colors.DN30
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN30
      },
      selected: {
        light: colors.N20,
        dark: colors.DN400
      },
      focusSelected: {
        light: colors.N20,
        dark: colors.DN400
      }
    },
    warning: {
      default: {
        light: colors.N800,
        dark: colors.N800
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN30
      },
      selected: {
        light: colors.N800,
        dark: colors.N800
      },
      focusSelected: {
        light: colors.N800,
        dark: colors.N800
      }
    },
    danger: {
      default: {
        light: colors.N0,
        dark: colors.N0
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN30
      },
      selected: {
        light: colors.N0,
        dark: colors.N0
      },
      focusSelected: {
        light: colors.N0,
        dark: colors.N0
      }
    },
    link: {
      default: {
        light: colors.B400,
        dark: colors.B100
      },
      hover: {
        light: colors.B300,
        dark: colors.B75
      },
      active: {
        light: colors.B500,
        dark: colors.B200
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN100
      },
      selected: {
        light: colors.N20,
        dark: colors.N700
      },
      focusSelected: {
        light: colors.N20,
        dark: colors.N700
      }
    },
    subtle: {
      default: {
        light: colors.N500,
        dark: colors.DN400
      },
      active: {
        light: colors.B400,
        dark: colors.B400
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN100
      },
      selected: {
        light: colors.N20,
        dark: colors.DN400
      },
      focusSelected: {
        light: colors.N20,
        dark: colors.DN400
      }
    },
    'subtle-link': {
      default: {
        light: colors.N200,
        dark: colors.DN400
      },
      hover: {
        light: colors.N90,
        dark: colors.B50
      },
      active: {
        light: colors.N400,
        dark: colors.DN300
      },
      disabled: {
        light: colors.N70,
        dark: colors.DN100
      },
      selected: {
        light: colors.N20,
        dark: colors.DN400
      },
      focusSelected: {
        light: colors.N20,
        dark: colors.DN400
      }
    }
  }
};
var _default = values;
exports.default = _default;
},{"@atlaskit/theme/colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js"}],"../node_modules/@atlaskit/button/dist/esm/shared/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCss = getCss;
exports.getIconStyle = getIconStyle;
exports.getContentStyle = getContentStyle;
exports.getFadingCss = getFadingCss;
exports.overlayCss = void 0;

var _tslib = require("tslib");

var _constants = require("@atlaskit/theme/constants");

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderRadius = (0, _constants.borderRadius)();
var gridSize = (0, _constants.gridSize)();
var fontSize = (0, _constants.fontSize)(); // ## Button layout
//
// /------------------------------------------------------------------------------------------------------------------\
// |       →  |  ←      |          |      →  |  ←      |           |      →  |  ←      |         |      →  |  ←       |
// |  10px →  |  ← 2px  |   icon   |  2px →  |  ← 2px  |           |  2px →  |  ← 2px  |  icon   |  2px →  |  ← 10px  |
// |  padding |  margin |  before  |  margin |  margin |  content  |  margin |  margin |  after  |  margin |  padding |
// |    (12px total)    |          |    (4px total)    |           |    (4px total)    |         |    (12px total)    |
// |       →  |  ←      |          |      →  |  ←      |           |      →  |  ←      |         |      →  |  ←       |
// \------------------------------------------------------------------------------------------------------------------/
//                                           ↑                               ↑
//                                        Margins don't collapse with inline-flex
//

var heights = {
  default: gridSize * 4 / fontSize + "em",
  compact: gridSize * 3 / fontSize + "em",
  none: 'auto'
};
var lineHeights = {
  default: heights.default,
  compact: heights.compact,
  none: 'inherit'
};
var padding = {
  // 10px gutter
  default: "0 " + (gridSize + gridSize / 4) + "px",
  compact: "0 " + (gridSize + gridSize / 4) + "px",
  none: '0'
};
var singleIconPadding = {
  // 2px gutter
  compact: "0 " + gridSize / 4 + "px",
  default: "0 " + gridSize / 4 + "px",
  none: '0'
};
var verticalAlign = {
  default: 'middle',
  compact: 'middle',
  none: 'baseline'
};
var innerMargin = {
  content: "0 " + gridSize / 4 + "px",
  icon: "0 " + gridSize / 4 + "px"
};

function getColor(_a) {
  var group = _a.group,
      key = _a.key,
      mode = _a.mode;
  var rule = group[key] || group.default;
  return rule[mode];
}

function getColors(_a) {
  var appearance = _a.appearance,
      key = _a.key,
      mode = _a.mode;
  return {
    background: getColor({
      group: _colors.default.background[appearance],
      key: key,
      mode: mode
    }),
    // Needing to add !important to overcome specificity issue caused by deprecated AtlaskitThemeProvider
    color: getColor({
      group: _colors.default.color[appearance],
      key: key,
      mode: mode
    }) + " !important"
  };
}

function getCss(_a) {
  var appearance = _a.appearance,
      spacing = _a.spacing,
      mode = _a.mode,
      isSelected = _a.isSelected,
      shouldFitContainer = _a.shouldFitContainer,
      isOnlySingleIcon = _a.isOnlySingleIcon;
  var baseColors = getColors({
    appearance: appearance,
    key: isSelected ? 'selected' : 'default',
    mode: mode
  });
  return (0, _tslib.__assign)((0, _tslib.__assign)({
    alignItems: 'baseline',
    borderWidth: 0,
    borderRadius: borderRadius,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontStyle: 'normal',
    // Chrome recently changed button so that they use 'arial' as the font family
    fontFamily: 'inherit',
    fontWeight: 500,
    maxWidth: '100%',
    // Needed to position overlay
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)',
    whiteSpace: 'nowrap'
  }, baseColors), {
    cursor: 'pointer',
    height: heights[spacing],
    lineHeight: lineHeights[spacing],
    padding: isOnlySingleIcon ? singleIconPadding[spacing] : padding[spacing],
    verticalAlign: verticalAlign[spacing],
    width: shouldFitContainer ? '100%' : 'auto',
    // justifyContent required for shouldFitContainer buttons with an icon inside
    justifyContent: 'center',
    // Note: we cannot disable pointer events when there is an overlay.
    // That would be easy for styling, but it would start letting events through on disabled buttons
    // Disabling visited styles (just using the base colors)
    '&:visited': (0, _tslib.__assign)({}, baseColors),
    '&:hover': (0, _tslib.__assign)((0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'hover',
      mode: mode
    })), {
      textDecoration: !isSelected && (appearance === 'link' || appearance === 'subtle-link') ? 'underline' : 'inherit',
      // background, box-shadow
      transitionDuration: '0s, 0.15s'
    }),
    '&:focus': (0, _tslib.__assign)((0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: isSelected ? 'focusSelected' : 'focus',
      mode: mode
    })), {
      boxShadow: "0 0 0 2px " + _colors.default.boxShadowColor[appearance].focus[mode],
      // background, box-shadow
      transitionDuration: '0s, 0.2s',
      // disabling browser focus outline
      outline: 'none'
    }),
    // giving active styles preference by listing them after focus
    '&:active': (0, _tslib.__assign)((0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'active',
      mode: mode
    })), {
      // background, box-shadow
      transitionDuration: '0s, 0s'
    }),
    // preventDefault prevents regular active styles from applying in Firefox
    '&[data-firefox-is-active="true"]': (0, _tslib.__assign)((0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'active',
      mode: mode
    })), {
      // background, box-shadow
      transitionDuration: '0s, 0s'
    }),
    // Giving disabled styles preference over active by listing them after.
    // Not using '&:disabled' because :disabled is not a valid state for all element types
    // so we are targeting the attribute
    // Attributes have the same specificity a pesudo classes so we are overriding :disabled here
    '&[disabled]': (0, _tslib.__assign)((0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: 'disabled',
      mode: mode
    })), {
      cursor: 'not-allowed',
      textDecoration: 'none'
    }),
    '&[data-has-overlay="true"]': {
      cursor: 'default',
      textDecoration: 'none'
    },
    // disabling hover and active color changes when there is an overlay, but the button is not disabled
    '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active': (0, _tslib.__assign)({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'default',
      mode: mode
    })),
    '&::-moz-focus-inner': {
      border: 0,
      margin: 0,
      padding: 0
    }
  });
} // inline-flex child


function getIconStyle(_a) {
  var spacing = _a.spacing;
  return {
    alignSelf: 'center',
    display: 'flex',
    // icon size cannot grow and shrink
    flexGrow: 0,
    flexShrink: 0,
    lineHeight: 0,
    fontSize: 0,
    userSelect: 'none',
    margin: spacing === 'none' ? 0 : innerMargin.icon
  };
} // inline-flex child


function getContentStyle(_a) {
  var spacing = _a.spacing;
  return {
    margin: spacing === 'none' ? 0 : innerMargin.content,
    // content can grow and shrink
    flexGrow: 1,
    flexShrink: 1,
    // ellipsis for overflow text
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
}

function getFadingCss(_a) {
  var hasOverlay = _a.hasOverlay;
  return {
    transition: 'opacity 0.3s',
    opacity: hasOverlay ? 0 : 1
  };
}

var overlayCss = {
  // stretching to full width / height of button
  // this is important as we need it to still block
  // event if clicking in the button's own padding
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  // Putting all children in the center
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
exports.overlayCss = overlayCss;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@atlaskit/theme/constants":"../node_modules/@atlaskit/theme/dist/esm/constants.js","./colors":"../node_modules/@atlaskit/button/dist/esm/shared/colors.js"}],"../node_modules/@atlaskit/button/dist/esm/shared/use-auto-focus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAutoFocus;

var _react = require("react");

// Autofocus is only applicable to initial load
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus
function useAutoFocus(ref, autoFocus) {
  var initialAutoFocus = (0, _react.useState)(autoFocus)[0];
  (0, _react.useEffect)(function onMount() {
    if (initialAutoFocus && ref.current) {
      ref.current.focus();
    }
  }, [initialAutoFocus, ref]);
}
},{"react":"../../../../../../../react => React.external"}],"../node_modules/@atlaskit/button/dist/esm/shared/button-base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _analyticsNext = require("@atlaskit/analytics-next");

var _version = require("../version.json");

var _blockEvents = _interopRequireDefault(require("./block-events"));

var _css = require("./css");

var _useAutoFocus = _interopRequireDefault(require("./use-auto-focus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** @jsx jsx */
function noop() {} // Disabled buttons will still publish events for nested elements in webkit.
// We are disabling pointer events on child elements so that
// the button will always be the target of events
// Note: firefox does not have this behaviour for child elements


var noPointerEventsOnChildrenCss = {
  '> *': {
    pointerEvents: 'none'
  }
};

var _default = _react.default.forwardRef(function ButtonBase(props, ref) {
  var _a = props.appearance,
      appearance = _a === void 0 ? 'default' : _a,
      buttonCss = props.buttonCss,
      _b = props.spacing,
      spacing = _b === void 0 ? 'default' : _b,
      _c = props.autoFocus,
      autoFocus = _c === void 0 ? false : _c,
      _d = props.isDisabled,
      isDisabled = _d === void 0 ? false : _d,
      _e = props.shouldFitContainer,
      shouldFitContainer = _e === void 0 ? false : _e,
      _f = props.isSelected,
      isSelected = _f === void 0 ? false : _f,
      iconBefore = props.iconBefore,
      iconAfter = props.iconAfter,
      children = props.children,
      className = props.className,
      href = props.href,
      overlay = props.overlay,
      _g = props.tabIndex,
      tabIndex = _g === void 0 ? 0 : _g,
      _h = props.type,
      type = _h === void 0 ? !href ? 'button' : undefined : _h,
      _j = props.onMouseDown,
      providedOnMouseDown = _j === void 0 ? noop : _j,
      _k = props.onClick,
      providedOnClick = _k === void 0 ? noop : _k,
      // use the provided component prop,
  // else default to anchor if there is a href, and button if there is no href
  _l = props.component,
      // use the provided component prop,
  // else default to anchor if there is a href, and button if there is no href
  Component = _l === void 0 ? href ? 'a' : 'button' : _l,
      testId = props.testId,
      // I don't think this should be in button, but for now it is
  analyticsContext = props.analyticsContext,
      rest = (0, _tslib.__rest)(props, ["appearance", "buttonCss", "spacing", "autoFocus", "isDisabled", "shouldFitContainer", "isSelected", "iconBefore", "iconAfter", "children", "className", "href", "overlay", "tabIndex", "type", "onMouseDown", "onClick", "component", "testId", "analyticsContext"]);
  var ourRef = (0, _react.useRef)();
  var setRef = (0, _react.useCallback)(function (node) {
    ourRef.current = node;

    if (ref == null) {
      return;
    }

    if (typeof ref === 'function') {
      ref(node);
      return;
    } // @ts-ignore


    ref.current = node;
  }, [ourRef, ref]); // Cross browser auto focusing is pretty broken, so we are doing it ourselves

  (0, _useAutoFocus.default)(ourRef, autoFocus);
  var onClick = (0, _analyticsNext.usePlatformLeafEventHandler)({
    fn: providedOnClick,
    action: 'clicked',
    componentName: 'button',
    packageName: _version.name,
    packageVersion: _version.version,
    analyticsData: analyticsContext
  }); // Button currently calls preventDefault, which is not standard button behaviour

  var onMouseDown = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    providedOnMouseDown(event);
  }, [providedOnMouseDown]); // Lose focus when becoming disabled (standard button behaviour)

  (0, _react.useEffect)(function () {
    var el = ourRef.current;

    if (isDisabled && el && el === document.activeElement) {
      el.blur();
    }
  }, [isDisabled]); // we are 'disabling' input with a button when there is an overlay

  var hasOverlay = Boolean(overlay);
  var fadeCss = (0, _css.getFadingCss)({
    hasOverlay: hasOverlay
  });
  var isInteractive = !isDisabled && !hasOverlay;
  return (0, _core.jsx)(Component, (0, _tslib.__assign)({}, rest, {
    css: [buttonCss, isInteractive ? null : noPointerEventsOnChildrenCss],
    className: className,
    ref: setRef,
    onClick: onClick,
    onMouseDown: onMouseDown,
    disabled: isDisabled,
    href: isInteractive ? href : undefined,
    "data-has-overlay": hasOverlay ? true : undefined,
    "data-testid": testId,
    type: type,
    // Adding a tab index so element is always focusable, even when not a <button> or <a>
    // Disabling focus via keyboard navigation when disabled
    // as this is standard button behaviour
    tabIndex: isDisabled ? -1 : tabIndex
  }, (0, _blockEvents.default)({
    isInteractive: isInteractive
  })), iconBefore ? (0, _core.jsx)("span", {
    css: [fadeCss, (0, _css.getIconStyle)({
      spacing: spacing
    })]
  }, iconBefore) : null, children ? (0, _core.jsx)("span", {
    css: [fadeCss, (0, _css.getContentStyle)({
      spacing: spacing
    })]
  }, children) : null, iconAfter ? (0, _core.jsx)("span", {
    css: [fadeCss, (0, _css.getIconStyle)({
      spacing: spacing
    })]
  }, iconAfter) : null, overlay ? (0, _core.jsx)("span", {
    css: _css.overlayCss
  }, overlay) : null);
});

exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@emotion/core":"../node_modules/@emotion/core/dist/core.browser.esm.js","@atlaskit/analytics-next":"../node_modules/@atlaskit/analytics-next/dist/esm/index.js","../version.json":"../node_modules/@atlaskit/button/dist/esm/version.json","./block-events":"../node_modules/@atlaskit/button/dist/esm/shared/block-events.js","./css":"../node_modules/@atlaskit/button/dist/esm/shared/css.js","./use-auto-focus":"../node_modules/@atlaskit/button/dist/esm/shared/use-auto-focus.js"}],"../node_modules/@atlaskit/button/dist/esm/shared/get-is-only-single-icon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIsOnlySingleIcon;

function getIsOnlySingleIcon(_a) {
  var children = _a.children,
      iconBefore = _a.iconBefore,
      iconAfter = _a.iconAfter;

  if (children) {
    return false;
  }

  if (iconBefore && !iconAfter) {
    return true;
  }

  if (!iconBefore && iconAfter) {
    return true;
  }

  return false;
}
},{}],"../node_modules/@atlaskit/spinner/dist/esm/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presetSizes = void 0;
var presetSizes = {
  xsmall: 8,
  small: 16,
  medium: 24,
  large: 48,
  xlarge: 96
};
exports.presetSizes = presetSizes;
},{}],"../node_modules/@atlaskit/spinner/dist/esm/spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _colors = require("@atlaskit/theme/colors");

var _components = _interopRequireDefault(require("@atlaskit/theme/components"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx jsx */
var rotate = (0, _core.keyframes)(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n  to { transform: rotate(360deg); }\n"], ["\n  to { transform: rotate(360deg); }\n"]))); // There are three parts to the load in animation:
// 1. Fade in
// 2. Accelerated spin
// 3. Stretch the spinner line

var loadIn = (0, _core.keyframes)(templateObject_2 || (templateObject_2 = (0, _tslib.__makeTemplateObject)(["\n  from {\n    transform: rotate(50deg);\n    opacity: 0;\n    stroke-dashoffset: 60;\n  }\n  to {\n    transform: rotate(230deg);\n    opacity: 1;\n    stroke-dashoffset: 50;\n  }\n"], ["\n  from {\n    transform: rotate(50deg);\n    opacity: 0;\n    stroke-dashoffset: 60;\n  }\n  to {\n    transform: rotate(230deg);\n    opacity: 1;\n    stroke-dashoffset: 50;\n  }\n"])));

function getStrokeColor(_a) {
  var mode = _a.mode,
      appearance = _a.appearance;

  if (mode === 'light') {
    return appearance === 'inherit' ? _colors.N500 : _colors.N0;
  } // Dark mode: colours provided by Jake Miller


  return appearance === 'inherit' ? _colors.DN900 : _colors.DN500;
}

var _default = _react.default.memo(_react.default.forwardRef(function Spinner(_a, ref) {
  var testId = _a.testId,
      _b = _a.appearance,
      appearance = _b === void 0 ? 'inherit' : _b,
      _c = _a.delay,
      delay = _c === void 0 ? 0 : _c,
      _d = _a.size,
      providedSize = _d === void 0 ? 'medium' : _d;
  var size = typeof providedSize === 'number' ? providedSize : _constants.presetSizes[providedSize];
  return (0, _core.jsx)(_components.default.Consumer, null, function (tokens) {
    var strokeColor = getStrokeColor({
      mode: tokens.mode,
      appearance: appearance
    }); // The Spinner animation uses a combination of two
    // css animations on two separate elements.

    return (0, _core.jsx)("svg", {
      focusable: "false",
      height: size,
      width: size,
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      "data-testid": testId,
      ref: ref,
      css: (0, _core.css)(templateObject_3 || (templateObject_3 = (0, _tslib.__makeTemplateObject)(["\n                /* align better inline with text */\n                vertical-align: middle;\n                /* We are going to animate this in */\n                opacity: 0;\n\n                animation: ", " 1s ease-in-out;\n                /* When the animation completes, stay at the last frame of the animation */\n                animation-fill-mode: forwards;\n                animation-delay: ", "ms;\n              "], ["\n                /* align better inline with text */\n                vertical-align: middle;\n                /* We are going to animate this in */\n                opacity: 0;\n\n                animation: ", " 1s ease-in-out;\n                /* When the animation completes, stay at the last frame of the animation */\n                animation-fill-mode: forwards;\n                animation-delay: ", "ms;\n              "])), loadIn, delay)
    }, (0, _core.jsx)("circle", {
      cx: "8",
      cy: "8",
      r: "7",
      css: (0, _core.css)(templateObject_4 || (templateObject_4 = (0, _tslib.__makeTemplateObject)(["\n                  fill: none;\n                  stroke: ", ";\n                  stroke-width: 1.5;\n                  stroke-linecap: round;\n                  stroke-dasharray: 60;\n                  stroke-dashoffset: inherit;\n                  transform-origin: center;\n                  animation: ", " 0.86s infinite;\n                  animation-delay: ", "ms;\n                  animation-timing-function: cubic-bezier(0.4, 0.15, 0.6, 0.85);\n                "], ["\n                  fill: none;\n                  stroke: ", ";\n                  stroke-width: 1.5;\n                  stroke-linecap: round;\n                  stroke-dasharray: 60;\n                  stroke-dashoffset: inherit;\n                  transform-origin: center;\n                  animation: ", " 0.86s infinite;\n                  animation-delay: ", "ms;\n                  animation-timing-function: cubic-bezier(0.4, 0.15, 0.6, 0.85);\n                "])), strokeColor, rotate, delay)
    }));
  });
}));

exports.default = _default;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@emotion/core":"../node_modules/@emotion/core/dist/core.browser.esm.js","@atlaskit/theme/colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","@atlaskit/theme/components":"../node_modules/@atlaskit/theme/dist/esm/components.js","./constants":"../node_modules/@atlaskit/spinner/dist/esm/constants.js"}],"../node_modules/@atlaskit/spinner/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _spinner.default;
  }
});

var _spinner = _interopRequireDefault(require("./spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./spinner":"../node_modules/@atlaskit/spinner/dist/esm/spinner.js"}],"../node_modules/@atlaskit/button/dist/esm/shared/loading-spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingSpinner;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSpinnerAppearance(_a) {
  var appearance = _a.appearance,
      isDisabled = _a.isDisabled,
      isSelected = _a.isSelected;

  if (isDisabled) {
    return 'inherit';
  }

  if (isSelected) {
    return 'invert';
  }

  if (appearance === 'primary' || appearance === 'danger') {
    return 'invert';
  }

  return 'inherit';
}

function LoadingSpinner(_a) {
  var _b = _a.spacing,
      spacing = _b === void 0 ? 'default' : _b,
      rest = (0, _tslib.__rest)(_a, ["spacing"]);
  var size = spacing === 'default' ? 'medium' : 'small';
  return _react.default.createElement(_spinner.default, {
    size: size,
    appearance: getSpinnerAppearance(rest)
  });
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@atlaskit/spinner":"../node_modules/@atlaskit/spinner/dist/esm/index.js"}],"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomCss = getCustomCss;
exports.getSpecifiers = getSpecifiers;
exports.defaultThemeFn = defaultThemeFn;
exports.default = void 0;

var _tslib = require("tslib");

var _components = require("@atlaskit/theme/components");

var _css = require("../shared/css");

var stateToSelectorMap = {
  focus: '&:focus',
  focusSelected: '&:focus',
  hover: '&:hover',
  active: '&:active',
  disabled: '&[disabled]'
}; // Mapping the new clean css back to the legacy theme format.
// The legacy theme format has all styles at the top level (no nested selectors)
// and uses `getSpecifiers()` to apply the style to all psudeo states

function getCustomCss(_a) {
  var _b = _a.appearance,
      appearance = _b === void 0 ? 'default' : _b,
      _c = _a.spacing,
      spacing = _c === void 0 ? 'default' : _c,
      _d = _a.mode,
      mode = _d === void 0 ? 'light' : _d,
      _e = _a.isSelected,
      isSelected = _e === void 0 ? false : _e,
      _f = _a.shouldFitContainer,
      shouldFitContainer = _f === void 0 ? false : _f,
      _g = _a.iconIsOnlyChild,
      iconIsOnlyChild = _g === void 0 ? false : _g,
      _h = _a.isLoading,
      isLoading = _h === void 0 ? false : _h,
      state = _a.state;
  var result = (0, _css.getCss)({
    appearance: appearance,
    spacing: spacing,
    mode: mode,
    isSelected: isSelected,
    shouldFitContainer: shouldFitContainer,
    isOnlySingleIcon: iconIsOnlyChild
  }); // we need to disable the default browser focus styles always
  // this is because we are not expressing that we can have two pesduo states at a time

  result.outline = 'none'; // Pulling relevant styles up to the top level

  var selector = stateToSelectorMap[state];

  if (selector) {
    result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), result[selector]);
  }

  if (isLoading) {
    result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), result['&[data-has-overlay="true"]']);
  } // Delete all selectors and just keep root styles


  Object.keys(result).forEach(function (key) {
    // want to keep this one
    if (key === '&::-moz-focus-inner') {
      return;
    } // Not using .startsWith for ie11


    if (key.indexOf('&') === 0) {
      delete result[key];
    }
  });
  return result;
} // This styling approach works by generating a 'style' and applying with maximum specificity
// To do this we are overwriting all psuedo selectors


function getSpecifiers(styles) {
  return {
    '&, &:hover, &:active, &:focus, &:visited, &:disabled, &[disabled]': styles
  };
}

function defaultThemeFn(current, values) {
  return current(values);
}

var Theme = (0, _components.createTheme)(function (themeProps) {
  return {
    buttonStyles: getCustomCss(themeProps),
    // No styles being applied directly to spinner by default
    // Keeping this for legacy compat. We could remove it, but given
    // that we are changing theme soon there is no point
    spinnerStyles: {}
  };
});
var _default = Theme;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@atlaskit/theme/components":"../node_modules/@atlaskit/theme/dist/esm/components.js","../shared/css":"../node_modules/@atlaskit/button/dist/esm/shared/css.js"}],"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/custom-theme-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _components = _interopRequireDefault(require("@atlaskit/theme/components"));

var _buttonBase = _interopRequireDefault(require("../shared/button-base"));

var _getIsOnlySingleIcon = _interopRequireDefault(require("../shared/get-is-only-single-icon"));

var _loadingSpinner = _interopRequireDefault(require("../shared/loading-spinner"));

var _theme = _interopRequireWildcard(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getInteractionState(_a) {
  var _b = _a.isDisabled,
      isDisabled = _b === void 0 ? false : _b,
      _c = _a.isActive,
      isActive = _c === void 0 ? false : _c,
      _d = _a.isFocus,
      isFocus = _d === void 0 ? false : _d,
      _e = _a.isHover,
      isHover = _e === void 0 ? false : _e,
      _f = _a.isSelected,
      isSelected = _f === void 0 ? false : _f,
      _g = _a.isLoading,
      isLoading = _g === void 0 ? false : _g;

  if (isDisabled) {
    return 'disabled';
  }

  if (isSelected && isFocus) {
    return 'focusSelected';
  }

  if (isSelected) {
    return 'selected';
  } // not allowing active or focus style changes while loading


  if (!isLoading && isActive) {
    return 'active';
  }

  if (!isLoading && isHover) {
    return 'hover';
  }

  if (isFocus) {
    return 'focus';
  }

  return 'default';
}

var initial = {
  isHover: false,
  isActive: false,
  isFocus: false
};

var CustomThemeButton = _react.default.memo(_react.default.forwardRef(function CustomThemeButton(_a, ref) {
  var // Calculate default props for use in custom themes
  _b = _a.appearance,
      // Calculate default props for use in custom themes
  appearance = _b === void 0 ? 'default' : _b,
      _c = _a.autoFocus,
      autoFocus = _c === void 0 ? false : _c,
      _d = _a.isDisabled,
      isDisabled = _d === void 0 ? false : _d,
      _e = _a.isSelected,
      isSelected = _e === void 0 ? false : _e,
      _f = _a.shouldFitContainer,
      shouldFitContainer = _f === void 0 ? false : _f,
      _g = _a.spacing,
      spacing = _g === void 0 ? 'default' : _g,
      _h = _a.isLoading,
      isLoading = _h === void 0 ? false : _h,
      providedOnMouseEnter = _a.onMouseEnter,
      providedOnMouseLeave = _a.onMouseLeave,
      providedOnMouseDown = _a.onMouseDown,
      providedOnMouseUp = _a.onMouseUp,
      providedOnFocus = _a.onFocus,
      providedOnBlur = _a.onBlur,
      _j = _a.theme,
      theme = _j === void 0 ? _theme.defaultThemeFn : _j,
      rest = (0, _tslib.__rest)(_a, ["appearance", "autoFocus", "isDisabled", "isSelected", "shouldFitContainer", "spacing", "isLoading", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "theme"]); // TODO is there a nicer way to do this?
  // Add default props back into object for spreading

  var restProps = (0, _tslib.__assign)({
    appearance: appearance,
    autoFocus: autoFocus,
    isDisabled: isDisabled,
    isSelected: isSelected,
    shouldFitContainer: shouldFitContainer,
    spacing: spacing
  }, rest);

  var _k = (0, _tslib.__read)((0, _react.useState)(initial), 2),
      state = _k[0],
      setState = _k[1];

  var onMouseEnter = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isHover: true
      });
    });

    if (providedOnMouseEnter) {
      providedOnMouseEnter(event);
    }
  }, [providedOnMouseEnter]);
  var onMouseLeave = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isHover: false,
        isActive: false
      });
    });

    if (providedOnMouseLeave) {
      providedOnMouseLeave(event);
    }
  }, [providedOnMouseLeave]);
  var onMouseDown = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isActive: true
      });
    });

    if (providedOnMouseDown) {
      providedOnMouseDown(event);
    }
  }, [providedOnMouseDown]);
  var onMouseUp = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isActive: false
      });
    });

    if (providedOnMouseUp) {
      providedOnMouseUp(event);
    }
  }, [providedOnMouseUp]);
  var onFocus = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isFocus: true
      });
    });

    if (providedOnFocus) {
      providedOnFocus(event);
    }
  }, [providedOnFocus]);
  var onBlur = (0, _react.useCallback)(function (event) {
    setState(function (current) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, current), {
        isFocus: false
      });
    });

    if (providedOnBlur) {
      providedOnBlur(event);
    }
  }, [providedOnBlur]);
  return _react.default.createElement(_theme.default.Provider, {
    value: theme
  }, _react.default.createElement(_components.default.Consumer, null, function (_a) {
    var mode = _a.mode;
    return _react.default.createElement(_theme.default.Consumer, (0, _tslib.__assign)({
      mode: mode,
      state: getInteractionState((0, _tslib.__assign)((0, _tslib.__assign)({}, state), {
        isLoading: isLoading,
        isSelected: restProps.isSelected,
        isDisabled: restProps.isDisabled
      })),
      iconIsOnlyChild: (0, _getIsOnlySingleIcon.default)(restProps),
      isLoading: isLoading
    }, restProps), function (_a) {
      var buttonStyles = _a.buttonStyles;
      return _react.default.createElement(_buttonBase.default, (0, _tslib.__assign)({}, restProps, {
        ref: ref,
        overlay: isLoading ? _react.default.createElement(_loadingSpinner.default, (0, _tslib.__assign)({}, restProps)) : null,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onFocus: onFocus,
        onBlur: onBlur,
        buttonCss: (0, _theme.getSpecifiers)(buttonStyles)
      }));
    });
  }));
})); // Tools including enzyme rely on components having a display name


CustomThemeButton.displayName = 'CustomThemeButton';
var _default = CustomThemeButton;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@atlaskit/theme/components":"../node_modules/@atlaskit/theme/dist/esm/components.js","../shared/button-base":"../node_modules/@atlaskit/button/dist/esm/shared/button-base.js","../shared/get-is-only-single-icon":"../node_modules/@atlaskit/button/dist/esm/shared/get-is-only-single-icon.js","../shared/loading-spinner":"../node_modules/@atlaskit/button/dist/esm/shared/loading-spinner.js","./theme":"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/theme.js"}],"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _customThemeButton.default;
  }
});
Object.defineProperty(exports, "Theme", {
  enumerable: true,
  get: function () {
    return _theme.default;
  }
});

var _customThemeButton = _interopRequireDefault(require("./custom-theme-button"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./custom-theme-button":"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/custom-theme-button.js","./theme":"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/theme.js"}],"../node_modules/@atlaskit/button/dist/esm/entry-points/custom-theme-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _customThemeButton.default;
  }
});
Object.defineProperty(exports, "Theme", {
  enumerable: true,
  get: function () {
    return _customThemeButton.Theme;
  }
});

var _customThemeButton = _interopRequireWildcard(require("../custom-theme-button"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"../custom-theme-button":"../node_modules/@atlaskit/button/dist/esm/custom-theme-button/index.js"}],"../node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"../node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;

},{}],"../node_modules/uuid/v1.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/rng":"../node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../node_modules/uuid/lib/bytesToUuid.js"}],"../node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"../node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../node_modules/uuid/lib/bytesToUuid.js"}],"../node_modules/uuid/index.js":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":"../node_modules/uuid/v1.js","./v4":"../node_modules/uuid/v4.js"}],"../node_modules/@atlaskit/icon/cjs/constants.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizes = {
    small: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
};
exports.sizeMap = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
};

},{}],"../node_modules/@atlaskit/icon/cjs/components/Icon.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var uuid_1 = tslib_1.__importDefault(require("uuid"));
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("../constants");
var getSize = function (_a) {
    var size = _a.size;
    return size ? "height: " + constants_1.sizes[size] + "; width: " + constants_1.sizes[size] + ";" : null;
};
exports.IconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", ";\n    max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n\n  /**\n   * Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"], ["\n  ", ";\n  color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", ";\n    max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n\n  /**\n   * Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"])), getSize, function (p) { return p.primaryColor || 'currentColor'; }, function (p) { return p.secondaryColor || colors_1.background; }, getSize);
/**
 * Icons need unique gradient IDs across instances for different gradient definitions to work
 * correctly.
 * A step in the icon build process replaces linear gradient IDs and their references in paths
 * to a placeholder string so we can replace them with a dynamic ID here.
 * Replacing the original IDs with placeholders in the build process is more robust than not
 * using placeholders as we do not have to rely on regular expressions to find specific element
 * to replace.
 */
function insertDynamicGradientID(svgStr, label) {
    var id = uuid_1.default();
    var replacedSvgStr = svgStr
        .replace(/id="([^"]+)-idPlaceholder"/g, "id=$1-" + id)
        .replace(/fill="url\(#([^"]+)-idPlaceholder\)"/g, "fill=\"url(#$1-" + id + ")\"");
    return replacedSvgStr;
}
var Icon = function (props) {
    var Glyph = props.glyph, dangerouslySetGlyph = props.dangerouslySetGlyph, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, size = props.size, testId = props.testId, label = props.label;
    var glyphProps = dangerouslySetGlyph
        ? {
            dangerouslySetInnerHTML: {
                __html: insertDynamicGradientID(dangerouslySetGlyph, label),
            },
        }
        : { children: Glyph ? react_1.default.createElement(Glyph, { role: "presentation" }) : null };
    return (react_1.default.createElement(exports.IconWrapper, tslib_1.__assign({ primaryColor: primaryColor, secondaryColor: secondaryColor, size: size, "data-testid": testId, role: label ? 'img' : 'presentation', "aria-label": label ? label : undefined }, glyphProps)));
};
exports.default = Icon;
var templateObject_1;

},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","uuid":"../node_modules/uuid/index.js","@atlaskit/theme/colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","../constants":"../node_modules/@atlaskit/icon/cjs/constants.js"}],"../node_modules/@atlaskit/icon/glyph/check-circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CheckCircleIcon = function CheckCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

CheckCircleIcon.displayName = 'CheckCircleIcon';
var _default = CheckCircleIcon;
exports.default = _default;
},{"react":"../../../../../../../react => React.external","../cjs/components/Icon":"../node_modules/@atlaskit/icon/cjs/components/Icon.js"}],"../node_modules/@atlaskit/icon/glyph/error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ErrorIcon = function ErrorIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><path d=\"M13.416 4.417a2.002 2.002 0 0 0-2.832 0l-6.168 6.167a2.002 2.002 0 0 0 0 2.833l6.168 6.167a2.002 2.002 0 0 0 2.832 0l6.168-6.167a2.002 2.002 0 0 0 0-2.833l-6.168-6.167z\" fill=\"currentColor\"/><path d=\"M12 14a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2\" fill=\"inherit\"/></g></svg>"
  }, props));
};

ErrorIcon.displayName = 'ErrorIcon';
var _default = ErrorIcon;
exports.default = _default;
},{"react":"../../../../../../../react => React.external","../cjs/components/Icon":"../node_modules/@atlaskit/icon/cjs/components/Icon.js"}],"../node_modules/@atlaskit/icon/glyph/info.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InfoIcon = function InfoIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><path d=\"M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z\" fill=\"currentColor\"/><rect fill=\"inherit\" x=\"11\" y=\"10\" width=\"2\" height=\"7\" rx=\"1\"/><circle fill=\"inherit\" cx=\"12\" cy=\"8\" r=\"1\"/></g></svg>"
  }, props));
};

InfoIcon.displayName = 'InfoIcon';
var _default = InfoIcon;
exports.default = _default;
},{"react":"../../../../../../../react => React.external","../cjs/components/Icon":"../node_modules/@atlaskit/icon/cjs/components/Icon.js"}],"../node_modules/@atlaskit/icon/glyph/question-circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var QuestionCircleIcon = function QuestionCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"inherit\" cx=\"12\" cy=\"18\" r=\"1\"/><path d=\"M15.89 9.05a3.975 3.975 0 0 0-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 0 0 .982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 0 1 4.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 0 0-1 .987v2.014a1.001 1.001 0 0 0 2.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0 0 15.89 9.05\" fill=\"inherit\"/></g></svg>"
  }, props));
};

QuestionCircleIcon.displayName = 'QuestionCircleIcon';
var _default = QuestionCircleIcon;
exports.default = _default;
},{"react":"../../../../../../../react => React.external","../cjs/components/Icon":"../node_modules/@atlaskit/icon/cjs/components/Icon.js"}],"../node_modules/@atlaskit/icon/glyph/warning.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WarningIcon = function WarningIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><path d=\"M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z\" fill=\"currentColor\"/><path d=\"M12 15a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2\" fill=\"inherit\"/></g></svg>"
  }, props));
};

WarningIcon.displayName = 'WarningIcon';
var _default = WarningIcon;
exports.default = _default;
},{"react":"../../../../../../../react => React.external","../cjs/components/Icon":"../node_modules/@atlaskit/icon/cjs/components/Icon.js"}],"../node_modules/@atlaskit/section-message/dist/esm/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseAppearanceObj = void 0;

var _checkCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/check-circle"));

var _error = _interopRequireDefault(require("@atlaskit/icon/glyph/error"));

var _info = _interopRequireDefault(require("@atlaskit/icon/glyph/info"));

var _questionCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/question-circle"));

var _warning = _interopRequireDefault(require("@atlaskit/icon/glyph/warning"));

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseAppearanceObj = {
  info: {
    backgroundColor: colors.B50,
    Icon: _info.default,
    primaryIconColor: colors.B500
  },
  warning: {
    backgroundColor: colors.Y50,
    Icon: _warning.default,
    primaryIconColor: colors.Y500
  },
  error: {
    backgroundColor: colors.R50,
    Icon: _error.default,
    primaryIconColor: colors.R500
  },
  confirmation: {
    backgroundColor: colors.G50,
    Icon: _checkCircle.default,
    primaryIconColor: colors.G500
  },
  change: {
    backgroundColor: colors.P50,
    Icon: _questionCircle.default,
    primaryIconColor: colors.P500
  }
};
exports.baseAppearanceObj = baseAppearanceObj;
},{"@atlaskit/icon/glyph/check-circle":"../node_modules/@atlaskit/icon/glyph/check-circle.js","@atlaskit/icon/glyph/error":"../node_modules/@atlaskit/icon/glyph/error.js","@atlaskit/icon/glyph/info":"../node_modules/@atlaskit/icon/glyph/info.js","@atlaskit/icon/glyph/question-circle":"../node_modules/@atlaskit/icon/glyph/question-circle.js","@atlaskit/icon/glyph/warning":"../node_modules/@atlaskit/icon/glyph/warning.js","@atlaskit/theme/colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js"}],"../node_modules/@atlaskit/theme/dist/esm/typography.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h100 = exports.h200 = exports.h300 = exports.h400 = exports.h500 = exports.h600 = exports.h700 = exports.h800 = exports.h900 = exports.headingSizes = void 0;

var _tslib = require("tslib");

var _styledComponents = require("styled-components");

var colors = _interopRequireWildcard(require("./colors"));

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var baseHeading = function (size, lineHeight) {
  return "\n  font-size: " + size / (0, _constants.fontSize)() + "em;\n  font-style: inherit;\n  line-height: " + lineHeight / size + ";\n";
};

var headingSizes = {
  h900: {
    size: 35,
    lineHeight: 40
  },
  h800: {
    size: 29,
    lineHeight: 32
  },
  h700: {
    size: 24,
    lineHeight: 28
  },
  h600: {
    size: 20,
    lineHeight: 24
  },
  h500: {
    size: 16,
    lineHeight: 20
  },
  h400: {
    size: 14,
    lineHeight: 16
  },
  h300: {
    size: 12,
    lineHeight: 16
  },
  h200: {
    size: 12,
    lineHeight: 16
  },
  h100: {
    size: 11,
    lineHeight: 16
  }
};
exports.headingSizes = headingSizes;

var h900 = function () {
  return (0, _styledComponents.css)(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h900.size, headingSizes.h900.lineHeight), colors.heading, (0, _constants.gridSize)() * 6.5);
};

exports.h900 = h900;

var h800 = function () {
  return (0, _styledComponents.css)(templateObject_2 || (templateObject_2 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h800.size, headingSizes.h800.lineHeight), colors.heading, (0, _constants.gridSize)() * 5);
};

exports.h800 = h800;

var h700 = function () {
  return (0, _styledComponents.css)(templateObject_3 || (templateObject_3 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h700.size, headingSizes.h700.lineHeight), colors.heading, (0, _constants.gridSize)() * 5);
};

exports.h700 = h700;

var h600 = function () {
  return (0, _styledComponents.css)(templateObject_4 || (templateObject_4 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h600.size, headingSizes.h600.lineHeight), colors.heading, (0, _constants.gridSize)() * 3.5);
};

exports.h600 = h600;

var h500 = function () {
  return (0, _styledComponents.css)(templateObject_5 || (templateObject_5 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h500.size, headingSizes.h500.lineHeight), colors.heading, (0, _constants.gridSize)() * 3);
};

exports.h500 = h500;

var h400 = function () {
  return (0, _styledComponents.css)(templateObject_6 || (templateObject_6 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h400.size, headingSizes.h400.lineHeight), colors.heading, (0, _constants.gridSize)() * 2);
};

exports.h400 = h400;

var h300 = function () {
  return (0, _styledComponents.css)(templateObject_7 || (templateObject_7 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n"])), baseHeading(headingSizes.h300.size, headingSizes.h300.lineHeight), colors.heading, (0, _constants.gridSize)() * 2.5);
};

exports.h300 = h300;

var h200 = function () {
  return (0, _styledComponents.css)(templateObject_8 || (templateObject_8 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h200.size, headingSizes.h200.lineHeight), colors.subtleHeading, (0, _constants.gridSize)() * 2);
};

exports.h200 = h200;

var h100 = function () {
  return (0, _styledComponents.css)(templateObject_9 || (templateObject_9 = (0, _tslib.__makeTemplateObject)(["\n  ", "\n  color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n"], ["\n  ", "\n  color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n"])), baseHeading(headingSizes.h100.size, headingSizes.h100.lineHeight), colors.subtleHeading, (0, _constants.gridSize)() * 2);
};

exports.h100 = h100;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
},{"tslib":"../node_modules/tslib/tslib.es6.js","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","./colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","./constants":"../node_modules/@atlaskit/theme/dist/esm/constants.js"}],"../node_modules/@atlaskit/section-message/dist/esm/components/styled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = exports.Action = exports.Actions = exports.Description = exports.Title = exports.ContentContainer = exports.Container = void 0;

var _tslib = require("tslib");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("@atlaskit/theme/colors");

var _constants = require("@atlaskit/theme/constants");

var _typography = require("@atlaskit/theme/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.section(templateObject_1 || (templateObject_1 = (0, _tslib.__makeTemplateObject)(["\n  display: flex;\n  border-radius: ", "px;\n  background-color: ", ";\n  padding: ", "px;\n"], ["\n  display: flex;\n  border-radius: ", "px;\n  background-color: ", ";\n  padding: ", "px;\n"])), _constants.borderRadius, function (_a) {
  var backgroundColor = _a.backgroundColor;
  return backgroundColor;
}, (0, _constants.gridSize)() * 2);

exports.Container = Container;

var ContentContainer = _styledComponents.default.div(templateObject_2 || (templateObject_2 = (0, _tslib.__makeTemplateObject)(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));

exports.ContentContainer = ContentContainer;

var Title = _styledComponents.default.h1(templateObject_3 || (templateObject_3 = (0, _tslib.__makeTemplateObject)(["\n  margin: 0;\n  ", ";\n"], ["\n  margin: 0;\n  ", ";\n"])), _typography.h500);

exports.Title = Title;

var Description = _styledComponents.default.div(templateObject_4 || (templateObject_4 = (0, _tslib.__makeTemplateObject)(["\n  * + & {\n    margin-top: 8px;\n  }\n"], ["\n  * + & {\n    margin-top: 8px;\n  }\n"])));

exports.Description = Description;

var Actions = _styledComponents.default.ul(templateObject_5 || (templateObject_5 = (0, _tslib.__makeTemplateObject)(["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  * + & {\n    margin-top: 8px;\n  }\n"], ["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  * + & {\n    margin-top: 8px;\n  }\n"])));

exports.Actions = Actions;

var Action = _styledComponents.default.li(templateObject_6 || (templateObject_6 = (0, _tslib.__makeTemplateObject)(["\n  align-items: center;\n  display: flex;\n  margin: 0;\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n  margin: 0;\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"])), _colors.N500, (0, _constants.gridSize)() * 2); // If the icon is not wrapped in a div with a width, and we instead use margin or
// padding, the icon is shrunk by the padding.
// Since the icons will have a consistent size, we can treat them as pre-calculated
// space.


exports.Action = Action;

var IconWrapper = _styledComponents.default.div(templateObject_7 || (templateObject_7 = (0, _tslib.__makeTemplateObject)(["\n  flex: 0 0 auto;\n  width: ", "px;\n  > span {\n    margin: -2px 0;\n    vertical-align: top;\n  }\n"], ["\n  flex: 0 0 auto;\n  width: ", "px;\n  > span {\n    margin: -2px 0;\n    vertical-align: top;\n  }\n"])), (0, _constants.gridSize)() * 5);

exports.IconWrapper = IconWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
},{"tslib":"../node_modules/tslib/tslib.es6.js","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","@atlaskit/theme/colors":"../node_modules/@atlaskit/theme/dist/esm/colors.js","@atlaskit/theme/constants":"../node_modules/@atlaskit/theme/dist/esm/constants.js","@atlaskit/theme/typography":"../node_modules/@atlaskit/theme/dist/esm/typography.js"}],"../node_modules/@atlaskit/section-message/dist/esm/components/SectionMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _customThemeButton = _interopRequireDefault(require("@atlaskit/button/custom-theme-button"));

var _theme = require("../theme");

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionMessage =
/** @class */
function (_super) {
  (0, _tslib.__extends)(SectionMessage, _super);

  function SectionMessage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.renderAction = function (action, linkComponent) {
      var href = action.href,
          key = action.key,
          onClick = action.onClick,
          text = action.text,
          testId = action.testId;
      return _react.default.createElement(_styled.Action, {
        key: key,
        "data-testid": testId
      }, onClick || href ? _react.default.createElement(_customThemeButton.default, {
        appearance: "link",
        spacing: "none",
        onClick: onClick,
        href: href,
        component: linkComponent
      }, text) : text);
    };

    return _this;
  }

  SectionMessage.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        children = _a.children,
        title = _a.title,
        actions = _a.actions,
        appearance = _a.appearance,
        icon = _a.icon,
        linkComponent = _a.linkComponent,
        testId = _a.testId; //needs typecasting because TS is not recognising default props :(

    var appearanceObj = _theme.baseAppearanceObj[appearance] || _theme.baseAppearanceObj.info;
    var Icon = icon || appearanceObj.Icon;
    return _react.default.createElement(_styled.Container, {
      backgroundColor: appearanceObj.backgroundColor,
      "data-testid": testId
    }, _react.default.createElement(_styled.IconWrapper, null, _react.default.createElement(Icon, {
      primaryColor: appearanceObj.primaryIconColor,
      secondaryColor: appearanceObj.backgroundColor
    })), _react.default.createElement(_styled.ContentContainer, null, title ? _react.default.createElement(_styled.Title, null, title) : null, children ? _react.default.createElement(_styled.Description, null, children) : null, actions && actions.length ? _react.default.createElement(_styled.Actions, null, actions.map(function (action) {
      return _this.renderAction(action, linkComponent);
    })) : null));
  };

  SectionMessage.defaultProps = {
    appearance: 'info'
  };
  return SectionMessage;
}(_react.default.Component);

var _default = SectionMessage;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","react":"../../../../../../../react => React.external","@atlaskit/button/custom-theme-button":"../node_modules/@atlaskit/button/dist/esm/entry-points/custom-theme-button.js","../theme":"../node_modules/@atlaskit/section-message/dist/esm/theme.js","./styled":"../node_modules/@atlaskit/section-message/dist/esm/components/styled.js"}],"../node_modules/@atlaskit/section-message/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _SectionMessage.default;
  }
});

var _SectionMessage = _interopRequireDefault(require("./components/SectionMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./components/SectionMessage":"../node_modules/@atlaskit/section-message/dist/esm/components/SectionMessage.js"}],"agile-roadmap.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HelloWorld;

var _sectionMessage = _interopRequireDefault(require("@atlaskit/section-message"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function HelloWorld() {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      excitementLevel = _React$useState2[0],
      setExcitementLevel = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_sectionMessage.default, {
    title: "hello",
    actions: [{
      key: '1',
      onClick: function test() {
        setExcitementLevel(excitementLevel + 1);
        API_test();
        console.log("text");
      },
      text: 'test'
    }]
  }, /*#__PURE__*/_react.default.createElement("p", null, "Congratulations! You have successfully created an Atlassian Connect app using the ", /*#__PURE__*/_react.default.createElement("a", {
    href: 'https://bitbucket.org/atlassian/atlassian-connect-express'
  }, "atlassian-connect-express"), " client library."));
}
},{"@atlaskit/section-message":"../node_modules/@atlaskit/section-message/dist/esm/index.js","react":"../../../../../../../react => React.external"}]},{},["agile-roadmap.jsx"], "__root_component")
//# sourceMappingURL=/agile-roadmap.js.map