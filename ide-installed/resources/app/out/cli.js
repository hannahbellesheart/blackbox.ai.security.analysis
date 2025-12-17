/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*//******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

export function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

export var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

export function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

export function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

export function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

export function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

export function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

export function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

export function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

export function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

export function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

export function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

export var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

export function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

export function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

export function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
export function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
export function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

export function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

export function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

export function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

export function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

export function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

export function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

export function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

export function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

export function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

export function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

export function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

export function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

export function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

export default {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// out-build/vs/base/common/collections.js
function groupBy(data, groupFn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const element of data) {
    const key = groupFn(element);
    let target = result[key];
    if (!target) {
      target = result[key] = [];
    }
    target.push(element);
  }
  return result;
}
var _a, SetWithKey;
var init_collections = __esm({
  "out-build/vs/base/common/collections.js"() {
    "use strict";
    SetWithKey = class {
      static {
        _a = Symbol.toStringTag;
      }
      constructor(values, toKey) {
        this.toKey = toKey;
        this._map = /* @__PURE__ */ new Map();
        this[_a] = "SetWithKey";
        for (const value of values) {
          this.add(value);
        }
      }
      get size() {
        return this._map.size;
      }
      add(value) {
        const key = this.toKey(value);
        this._map.set(key, value);
        return this;
      }
      delete(value) {
        return this._map.delete(this.toKey(value));
      }
      has(value) {
        return this._map.has(this.toKey(value));
      }
      *entries() {
        for (const entry of this._map.values()) {
          yield [entry, entry];
        }
      }
      keys() {
        return this.values();
      }
      *values() {
        for (const entry of this._map.values()) {
          yield entry;
        }
      }
      clear() {
        this._map.clear();
      }
      forEach(callbackfn, thisArg) {
        this._map.forEach((entry) => callbackfn.call(thisArg, entry, entry, this));
      }
      [Symbol.iterator]() {
        return this.values();
      }
    };
  }
});

// out-build/vs/base/common/errors.js
function onUnexpectedError(e) {
  if (!isCancellationError(e)) {
    errorHandler.onUnexpectedError(e);
  }
  return void 0;
}
function isCancellationError(error) {
  if (error instanceof CancellationError) {
    return true;
  }
  return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
var ErrorHandler, errorHandler, canceledName, CancellationError, ErrorNoTelemetry;
var init_errors = __esm({
  "out-build/vs/base/common/errors.js"() {
    "use strict";
    ErrorHandler = class {
      constructor() {
        this.listeners = [];
        this.unexpectedErrorHandler = function(e) {
          setTimeout(() => {
            if (e.stack) {
              if (ErrorNoTelemetry.isErrorNoTelemetry(e)) {
                throw new ErrorNoTelemetry(e.message + "\n\n" + e.stack);
              }
              throw new Error(e.message + "\n\n" + e.stack);
            }
            throw e;
          }, 0);
        };
      }
      addListener(listener) {
        this.listeners.push(listener);
        return () => {
          this._removeListener(listener);
        };
      }
      emit(e) {
        this.listeners.forEach((listener) => {
          listener(e);
        });
      }
      _removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
      }
      setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
        this.unexpectedErrorHandler = newUnexpectedErrorHandler;
      }
      getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
      }
      onUnexpectedError(e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
      }
      // For external errors, we don't want the listeners to be called
      onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
      }
    };
    errorHandler = new ErrorHandler();
    canceledName = "Canceled";
    CancellationError = class extends Error {
      constructor() {
        super(canceledName);
        this.name = this.message;
      }
    };
    ErrorNoTelemetry = class _ErrorNoTelemetry extends Error {
      constructor(msg) {
        super(msg);
        this.name = "CodeExpectedError";
      }
      static fromError(err) {
        if (err instanceof _ErrorNoTelemetry) {
          return err;
        }
        const result = new _ErrorNoTelemetry();
        result.message = err.message;
        result.stack = err.stack;
        return result;
      }
      static isErrorNoTelemetry(err) {
        return err.name === "CodeExpectedError";
      }
    };
  }
});

// out-build/vs/base/common/functional.js
function createSingleCallFunction(fn, fnDidRunCallback) {
  const _this = this;
  let didCall = false;
  let result;
  return function() {
    if (didCall) {
      return result;
    }
    didCall = true;
    if (fnDidRunCallback) {
      try {
        result = fn.apply(_this, arguments);
      } finally {
        fnDidRunCallback();
      }
    } else {
      result = fn.apply(_this, arguments);
    }
    return result;
  };
}
var init_functional = __esm({
  "out-build/vs/base/common/functional.js"() {
    "use strict";
  }
});

// out-build/vs/base/common/arraysFind.js
function findLastIdxMonotonous(array, predicate, startIdx = 0, endIdxEx = array.length) {
  let i = startIdx;
  let j = endIdxEx;
  while (i < j) {
    const k = Math.floor((i + j) / 2);
    if (predicate(array[k])) {
      i = k + 1;
    } else {
      j = k;
    }
  }
  return i - 1;
}
var MonotonousArray;
var init_arraysFind = __esm({
  "out-build/vs/base/common/arraysFind.js"() {
    "use strict";
    MonotonousArray = class _MonotonousArray {
      static {
        this.assertInvariants = false;
      }
      constructor(_array) {
        this._array = _array;
        this._findLastMonotonousLastIdx = 0;
      }
      /**
       * The predicate must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
       * For subsequent calls, current predicate must be weaker than (or equal to) the previous predicate, i.e. more entries must be `true`.
       */
      findLastMonotonous(predicate) {
        if (_MonotonousArray.assertInvariants) {
          if (this._prevFindLastPredicate) {
            for (const item of this._array) {
              if (this._prevFindLastPredicate(item) && !predicate(item)) {
                throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
              }
            }
          }
          this._prevFindLastPredicate = predicate;
        }
        const idx = findLastIdxMonotonous(this._array, predicate, this._findLastMonotonousLastIdx);
        this._findLastMonotonousLastIdx = idx + 1;
        return idx === -1 ? void 0 : this._array[idx];
      }
    };
  }
});

// out-build/vs/base/common/arrays.js
function shuffle(array, _seed) {
  let rand;
  if (typeof _seed === "number") {
    let seed = _seed;
    rand = () => {
      const x = Math.sin(seed++) * 179426549;
      return x - Math.floor(x);
    };
  } else {
    rand = Math.random;
  }
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
function compareBy(selector, comparator) {
  return (a, b) => comparator(selector(a), selector(b));
}
var CompareResult, numberComparator, CallbackIterable;
var init_arrays = __esm({
  "out-build/vs/base/common/arrays.js"() {
    "use strict";
    init_arraysFind();
    init_errors();
    (function(CompareResult2) {
      function isLessThan(result) {
        return result < 0;
      }
      CompareResult2.isLessThan = isLessThan;
      function isLessThanOrEqual(result) {
        return result <= 0;
      }
      CompareResult2.isLessThanOrEqual = isLessThanOrEqual;
      function isGreaterThan(result) {
        return result > 0;
      }
      CompareResult2.isGreaterThan = isGreaterThan;
      function isNeitherLessOrGreaterThan(result) {
        return result === 0;
      }
      CompareResult2.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
      CompareResult2.greaterThan = 1;
      CompareResult2.lessThan = -1;
      CompareResult2.neitherLessOrGreaterThan = 0;
    })(CompareResult || (CompareResult = {}));
    numberComparator = (a, b) => a - b;
    CallbackIterable = class _CallbackIterable {
      static {
        this.empty = new _CallbackIterable((_callback) => {
        });
      }
      constructor(iterate) {
        this.iterate = iterate;
      }
      forEach(handler) {
        this.iterate((item) => {
          handler(item);
          return true;
        });
      }
      toArray() {
        const result = [];
        this.iterate((item) => {
          result.push(item);
          return true;
        });
        return result;
      }
      filter(predicate) {
        return new _CallbackIterable((cb) => this.iterate((item) => predicate(item) ? cb(item) : true));
      }
      map(mapFn) {
        return new _CallbackIterable((cb) => this.iterate((item) => cb(mapFn(item))));
      }
      some(predicate) {
        let result = false;
        this.iterate((item) => {
          result = predicate(item);
          return !result;
        });
        return result;
      }
      findFirst(predicate) {
        let result;
        this.iterate((item) => {
          if (predicate(item)) {
            result = item;
            return false;
          }
          return true;
        });
        return result;
      }
      findLast(predicate) {
        let result;
        this.iterate((item) => {
          if (predicate(item)) {
            result = item;
          }
          return true;
        });
        return result;
      }
      findLastMaxBy(comparator) {
        let result;
        let first = true;
        this.iterate((item) => {
          if (first || CompareResult.isGreaterThan(comparator(item, result))) {
            first = false;
            result = item;
          }
          return true;
        });
        return result;
      }
    };
  }
});

// out-build/vs/base/common/map.js
function isEntries(arg) {
  return Array.isArray(arg);
}
var _a2, _b, _c, ResourceMapEntry, ResourceMap, ResourceSet, Touch, LinkedMap, Cache, LRUCache, SetMap;
var init_map = __esm({
  "out-build/vs/base/common/map.js"() {
    "use strict";
    ResourceMapEntry = class {
      constructor(uri, value) {
        this.uri = uri;
        this.value = value;
      }
    };
    ResourceMap = class _ResourceMap {
      static {
        this.defaultToKey = (resource) => resource.toString();
      }
      constructor(arg, toKey) {
        this[_a2] = "ResourceMap";
        if (arg instanceof _ResourceMap) {
          this.map = new Map(arg.map);
          this.toKey = toKey ?? _ResourceMap.defaultToKey;
        } else if (isEntries(arg)) {
          this.map = /* @__PURE__ */ new Map();
          this.toKey = toKey ?? _ResourceMap.defaultToKey;
          for (const [resource, value] of arg) {
            this.set(resource, value);
          }
        } else {
          this.map = /* @__PURE__ */ new Map();
          this.toKey = arg ?? _ResourceMap.defaultToKey;
        }
      }
      set(resource, value) {
        this.map.set(this.toKey(resource), new ResourceMapEntry(resource, value));
        return this;
      }
      get(resource) {
        return this.map.get(this.toKey(resource))?.value;
      }
      has(resource) {
        return this.map.has(this.toKey(resource));
      }
      get size() {
        return this.map.size;
      }
      clear() {
        this.map.clear();
      }
      delete(resource) {
        return this.map.delete(this.toKey(resource));
      }
      forEach(clb, thisArg) {
        if (typeof thisArg !== "undefined") {
          clb = clb.bind(thisArg);
        }
        for (const [_, entry] of this.map) {
          clb(entry.value, entry.uri, this);
        }
      }
      *values() {
        for (const entry of this.map.values()) {
          yield entry.value;
        }
      }
      *keys() {
        for (const entry of this.map.values()) {
          yield entry.uri;
        }
      }
      *entries() {
        for (const entry of this.map.values()) {
          yield [entry.uri, entry.value];
        }
      }
      *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, entry] of this.map) {
          yield [entry.uri, entry.value];
        }
      }
    };
    ResourceSet = class {
      constructor(entriesOrKey, toKey) {
        this[_b] = "ResourceSet";
        if (!entriesOrKey || typeof entriesOrKey === "function") {
          this._map = new ResourceMap(entriesOrKey);
        } else {
          this._map = new ResourceMap(toKey);
          entriesOrKey.forEach(this.add, this);
        }
      }
      get size() {
        return this._map.size;
      }
      add(value) {
        this._map.set(value, value);
        return this;
      }
      clear() {
        this._map.clear();
      }
      delete(value) {
        return this._map.delete(value);
      }
      forEach(callbackfn, thisArg) {
        this._map.forEach((_value, key) => callbackfn.call(thisArg, key, key, this));
      }
      has(value) {
        return this._map.has(value);
      }
      entries() {
        return this._map.entries();
      }
      keys() {
        return this._map.keys();
      }
      values() {
        return this._map.keys();
      }
      [(_b = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
      }
    };
    (function(Touch2) {
      Touch2[Touch2["None"] = 0] = "None";
      Touch2[Touch2["AsOld"] = 1] = "AsOld";
      Touch2[Touch2["AsNew"] = 2] = "AsNew";
    })(Touch || (Touch = {}));
    LinkedMap = class {
      constructor() {
        this[_c] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch2 = 0) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch2 !== 0) {
          this.touch(item, touch2);
        }
        return item.value;
      }
      set(key, value, touch2 = 0) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch2 !== 0) {
            this.touch(item, touch2);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch2) {
            case 0:
              this.addItemLast(item);
              break;
            case 1:
              this.addItemFirst(item);
              break;
            case 2:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]() {
            return iterator;
          },
          next() {
            if (map._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]() {
            return iterator;
          },
          next() {
            if (map._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]() {
            return iterator;
          },
          next() {
            if (map._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_c = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      trimNew(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._tail;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.previous;
          currentSize--;
        }
        this._tail = current;
        this._size = currentSize;
        if (current) {
          current.next = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch2) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch2 !== 1 && touch2 !== 2) {
          return;
        }
        if (touch2 === 1) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch2 === 2) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    Cache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch2 = 2) {
        return super.get(key, touch2);
      }
      peek(key) {
        return super.get(
          key,
          0
          /* Touch.None */
        );
      }
      set(key, value) {
        super.set(
          key,
          value,
          2
          /* Touch.AsNew */
        );
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trim(Math.round(this._limit * this._ratio));
        }
      }
    };
    LRUCache = class extends Cache {
      constructor(limit, ratio = 1) {
        super(limit, ratio);
      }
      trim(newSize) {
        this.trimOld(newSize);
      }
      set(key, value) {
        super.set(key, value);
        this.checkTrim();
        return this;
      }
    };
    SetMap = class {
      constructor() {
        this.map = /* @__PURE__ */ new Map();
      }
      add(key, value) {
        let values = this.map.get(key);
        if (!values) {
          values = /* @__PURE__ */ new Set();
          this.map.set(key, values);
        }
        values.add(value);
      }
      delete(key, value) {
        const values = this.map.get(key);
        if (!values) {
          return;
        }
        values.delete(value);
        if (values.size === 0) {
          this.map.delete(key);
        }
      }
      forEach(key, fn) {
        const values = this.map.get(key);
        if (!values) {
          return;
        }
        values.forEach(fn);
      }
      get(key) {
        const values = this.map.get(key);
        if (!values) {
          return /* @__PURE__ */ new Set();
        }
        return values;
      }
    };
  }
});

// out-build/vs/base/common/assert.js
var init_assert = __esm({
  "out-build/vs/base/common/assert.js"() {
    "use strict";
    init_errors();
  }
});

// out-build/vs/base/common/types.js
function isNumber(obj) {
  return typeof obj === "number" && !isNaN(obj);
}
function isIterable(obj) {
  return !!obj && typeof obj[Symbol.iterator] === "function";
}
var init_types = __esm({
  "out-build/vs/base/common/types.js"() {
    "use strict";
    init_assert();
  }
});

// out-build/vs/base/common/iterator.js
var Iterable;
var init_iterator = __esm({
  "out-build/vs/base/common/iterator.js"() {
    "use strict";
    init_types();
    (function(Iterable2) {
      function is(thing) {
        return thing && typeof thing === "object" && typeof thing[Symbol.iterator] === "function";
      }
      Iterable2.is = is;
      const _empty2 = Object.freeze([]);
      function empty() {
        return _empty2;
      }
      Iterable2.empty = empty;
      function* single(element) {
        yield element;
      }
      Iterable2.single = single;
      function wrap(iterableOrElement) {
        if (is(iterableOrElement)) {
          return iterableOrElement;
        } else {
          return single(iterableOrElement);
        }
      }
      Iterable2.wrap = wrap;
      function from(iterable) {
        return iterable || _empty2;
      }
      Iterable2.from = from;
      function* reverse(array) {
        for (let i = array.length - 1; i >= 0; i--) {
          yield array[i];
        }
      }
      Iterable2.reverse = reverse;
      function isEmpty(iterable) {
        return !iterable || iterable[Symbol.iterator]().next().done === true;
      }
      Iterable2.isEmpty = isEmpty;
      function first(iterable) {
        return iterable[Symbol.iterator]().next().value;
      }
      Iterable2.first = first;
      function some(iterable, predicate) {
        let i = 0;
        for (const element of iterable) {
          if (predicate(element, i++)) {
            return true;
          }
        }
        return false;
      }
      Iterable2.some = some;
      function find(iterable, predicate) {
        for (const element of iterable) {
          if (predicate(element)) {
            return element;
          }
        }
        return void 0;
      }
      Iterable2.find = find;
      function* filter(iterable, predicate) {
        for (const element of iterable) {
          if (predicate(element)) {
            yield element;
          }
        }
      }
      Iterable2.filter = filter;
      function* map(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
          yield fn(element, index++);
        }
      }
      Iterable2.map = map;
      function* flatMap(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
          yield* fn(element, index++);
        }
      }
      Iterable2.flatMap = flatMap;
      function* concat(...iterables) {
        for (const item of iterables) {
          if (isIterable(item)) {
            yield* item;
          } else {
            yield item;
          }
        }
      }
      Iterable2.concat = concat;
      function reduce(iterable, reducer, initialValue) {
        let value = initialValue;
        for (const element of iterable) {
          value = reducer(value, element);
        }
        return value;
      }
      Iterable2.reduce = reduce;
      function* slice(arr, from2, to = arr.length) {
        if (from2 < -arr.length) {
          from2 = 0;
        }
        if (from2 < 0) {
          from2 += arr.length;
        }
        if (to < 0) {
          to += arr.length;
        } else if (to > arr.length) {
          to = arr.length;
        }
        for (; from2 < to; from2++) {
          yield arr[from2];
        }
      }
      Iterable2.slice = slice;
      function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
        const consumed = [];
        if (atMost === 0) {
          return [consumed, iterable];
        }
        const iterator = iterable[Symbol.iterator]();
        for (let i = 0; i < atMost; i++) {
          const next = iterator.next();
          if (next.done) {
            return [consumed, Iterable2.empty()];
          }
          consumed.push(next.value);
        }
        return [consumed, { [Symbol.iterator]() {
          return iterator;
        } }];
      }
      Iterable2.consume = consume;
      async function asyncToArray(iterable) {
        const result = [];
        for await (const item of iterable) {
          result.push(item);
        }
        return Promise.resolve(result);
      }
      Iterable2.asyncToArray = asyncToArray;
    })(Iterable || (Iterable = {}));
  }
});

// out-build/vs/base/common/lifecycle.js
function setDisposableTracker(tracker) {
  disposableTracker = tracker;
}
function trackDisposable(x) {
  disposableTracker?.trackDisposable(x);
  return x;
}
function markAsDisposed(disposable) {
  disposableTracker?.markAsDisposed(disposable);
}
function setParentOfDisposable(child, parent) {
  disposableTracker?.setParent(child, parent);
}
function setParentOfDisposables(children, parent) {
  if (!disposableTracker) {
    return;
  }
  for (const child of children) {
    disposableTracker.setParent(child, parent);
  }
}
function dispose(arg) {
  if (Iterable.is(arg)) {
    const errors = [];
    for (const d of arg) {
      if (d) {
        try {
          d.dispose();
        } catch (e) {
          errors.push(e);
        }
      }
    }
    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      throw new AggregateError(errors, "Encountered errors while disposing of store");
    }
    return Array.isArray(arg) ? [] : arg;
  } else if (arg) {
    arg.dispose();
    return arg;
  }
}
function combinedDisposable(...disposables) {
  const parent = toDisposable(() => dispose(disposables));
  setParentOfDisposables(disposables, parent);
  return parent;
}
function toDisposable(fn) {
  const self = trackDisposable({
    dispose: createSingleCallFunction(() => {
      markAsDisposed(self);
      fn();
    })
  });
  return self;
}
var TRACK_DISPOSABLES, disposableTracker, DisposableTracker, DisposableStore, Disposable, MutableDisposable, DisposableMap;
var init_lifecycle = __esm({
  "out-build/vs/base/common/lifecycle.js"() {
    "use strict";
    init_arrays();
    init_collections();
    init_map();
    init_functional();
    init_iterator();
    TRACK_DISPOSABLES = false;
    disposableTracker = null;
    DisposableTracker = class _DisposableTracker {
      constructor() {
        this.livingDisposables = /* @__PURE__ */ new Map();
      }
      static {
        this.idx = 0;
      }
      getDisposableData(d) {
        let val = this.livingDisposables.get(d);
        if (!val) {
          val = { parent: null, source: null, isSingleton: false, value: d, idx: _DisposableTracker.idx++ };
          this.livingDisposables.set(d, val);
        }
        return val;
      }
      trackDisposable(d) {
        const data = this.getDisposableData(d);
        if (!data.source) {
          data.source = new Error().stack;
        }
      }
      setParent(child, parent) {
        const data = this.getDisposableData(child);
        data.parent = parent;
      }
      markAsDisposed(x) {
        this.livingDisposables.delete(x);
      }
      markAsSingleton(disposable) {
        this.getDisposableData(disposable).isSingleton = true;
      }
      getRootParent(data, cache) {
        const cacheValue = cache.get(data);
        if (cacheValue) {
          return cacheValue;
        }
        const result = data.parent ? this.getRootParent(this.getDisposableData(data.parent), cache) : data;
        cache.set(data, result);
        return result;
      }
      getTrackedDisposables() {
        const rootParentCache = /* @__PURE__ */ new Map();
        const leaking = [...this.livingDisposables.entries()].filter(([, v]) => v.source !== null && !this.getRootParent(v, rootParentCache).isSingleton).flatMap(([k]) => k);
        return leaking;
      }
      computeLeakingDisposables(maxReported = 10, preComputedLeaks) {
        let uncoveredLeakingObjs;
        if (preComputedLeaks) {
          uncoveredLeakingObjs = preComputedLeaks;
        } else {
          const rootParentCache = /* @__PURE__ */ new Map();
          const leakingObjects = [...this.livingDisposables.values()].filter((info) => info.source !== null && !this.getRootParent(info, rootParentCache).isSingleton);
          if (leakingObjects.length === 0) {
            return;
          }
          const leakingObjsSet = new Set(leakingObjects.map((o) => o.value));
          uncoveredLeakingObjs = leakingObjects.filter((l) => {
            return !(l.parent && leakingObjsSet.has(l.parent));
          });
          if (uncoveredLeakingObjs.length === 0) {
            throw new Error("There are cyclic diposable chains!");
          }
        }
        if (!uncoveredLeakingObjs) {
          return void 0;
        }
        function getStackTracePath(leaking) {
          function removePrefix(array, linesToRemove) {
            while (array.length > 0 && linesToRemove.some((regexp) => typeof regexp === "string" ? regexp === array[0] : array[0].match(regexp))) {
              array.shift();
            }
          }
          const lines = leaking.source.split("\n").map((p) => p.trim().replace("at ", "")).filter((l) => l !== "");
          removePrefix(lines, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]);
          return lines.reverse();
        }
        const stackTraceStarts = new SetMap();
        for (const leaking of uncoveredLeakingObjs) {
          const stackTracePath = getStackTracePath(leaking);
          for (let i2 = 0; i2 <= stackTracePath.length; i2++) {
            stackTraceStarts.add(stackTracePath.slice(0, i2).join("\n"), leaking);
          }
        }
        uncoveredLeakingObjs.sort(compareBy((l) => l.idx, numberComparator));
        let message = "";
        let i = 0;
        for (const leaking of uncoveredLeakingObjs.slice(0, maxReported)) {
          i++;
          const stackTracePath = getStackTracePath(leaking);
          const stackTraceFormattedLines = [];
          for (let i2 = 0; i2 < stackTracePath.length; i2++) {
            let line = stackTracePath[i2];
            const starts = stackTraceStarts.get(stackTracePath.slice(0, i2 + 1).join("\n"));
            line = `(shared with ${starts.size}/${uncoveredLeakingObjs.length} leaks) at ${line}`;
            const prevStarts = stackTraceStarts.get(stackTracePath.slice(0, i2).join("\n"));
            const continuations = groupBy([...prevStarts].map((d) => getStackTracePath(d)[i2]), (v) => v);
            delete continuations[stackTracePath[i2]];
            for (const [cont, set] of Object.entries(continuations)) {
              stackTraceFormattedLines.unshift(`    - stacktraces of ${set.length} other leaks continue with ${cont}`);
            }
            stackTraceFormattedLines.unshift(line);
          }
          message += `


==================== Leaking disposable ${i}/${uncoveredLeakingObjs.length}: ${leaking.value.constructor.name} ====================
${stackTraceFormattedLines.join("\n")}
============================================================

`;
        }
        if (uncoveredLeakingObjs.length > maxReported) {
          message += `


... and ${uncoveredLeakingObjs.length - maxReported} more leaking disposables

`;
        }
        return { leaks: uncoveredLeakingObjs, details: message };
      }
    };
    if (TRACK_DISPOSABLES) {
      const __is_disposable_tracked__ = "__is_disposable_tracked__";
      setDisposableTracker(new class {
        trackDisposable(x) {
          const stack = new Error("Potentially leaked disposable").stack;
          setTimeout(() => {
            if (!x[__is_disposable_tracked__]) {
              console.log(stack);
            }
          }, 3e3);
        }
        setParent(child, parent) {
          if (child && child !== Disposable.None) {
            try {
              child[__is_disposable_tracked__] = true;
            } catch {
            }
          }
        }
        markAsDisposed(disposable) {
          if (disposable && disposable !== Disposable.None) {
            try {
              disposable[__is_disposable_tracked__] = true;
            } catch {
            }
          }
        }
        markAsSingleton(disposable) {
        }
      }());
    }
    DisposableStore = class _DisposableStore {
      static {
        this.DISABLE_DISPOSED_WARNING = false;
      }
      constructor() {
        this._toDispose = /* @__PURE__ */ new Set();
        this._isDisposed = false;
        trackDisposable(this);
      }
      /**
       * Dispose of all registered disposables and mark this object as disposed.
       *
       * Any future disposables added to this object will be disposed of on `add`.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        markAsDisposed(this);
        this._isDisposed = true;
        this.clear();
      }
      /**
       * @return `true` if this object has been disposed of.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of all registered disposables but do not mark this object as disposed.
       */
      clear() {
        if (this._toDispose.size === 0) {
          return;
        }
        try {
          dispose(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
      }
      /**
       * Add a new {@link IDisposable disposable} to the collection.
       */
      add(o) {
        if (!o) {
          return o;
        }
        if (o === this) {
          throw new Error("Cannot register a disposable on itself!");
        }
        setParentOfDisposable(o, this);
        if (this._isDisposed) {
          if (!_DisposableStore.DISABLE_DISPOSED_WARNING) {
            console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack);
          }
        } else {
          this._toDispose.add(o);
        }
        return o;
      }
      /**
       * Deletes a disposable from store and disposes of it. This will not throw or warn and proceed to dispose the
       * disposable even when the disposable is not part in the store.
       */
      delete(o) {
        if (!o) {
          return;
        }
        if (o === this) {
          throw new Error("Cannot dispose a disposable on itself!");
        }
        this._toDispose.delete(o);
        o.dispose();
      }
      /**
       * Deletes the value from the store, but does not dispose it.
       */
      deleteAndLeak(o) {
        if (!o) {
          return;
        }
        if (this._toDispose.has(o)) {
          this._toDispose.delete(o);
          setParentOfDisposable(o, null);
        }
      }
    };
    Disposable = class {
      static {
        this.None = Object.freeze({ dispose() {
        } });
      }
      constructor() {
        this._store = new DisposableStore();
        trackDisposable(this);
        setParentOfDisposable(this._store, this);
      }
      dispose() {
        markAsDisposed(this);
        this._store.dispose();
      }
      /**
       * Adds `o` to the collection of disposables managed by this object.
       */
      _register(o) {
        if (o === this) {
          throw new Error("Cannot register a disposable on itself!");
        }
        return this._store.add(o);
      }
    };
    MutableDisposable = class {
      constructor() {
        this._isDisposed = false;
        trackDisposable(this);
      }
      get value() {
        return this._isDisposed ? void 0 : this._value;
      }
      set value(value) {
        if (this._isDisposed || value === this._value) {
          return;
        }
        this._value?.dispose();
        if (value) {
          setParentOfDisposable(value, this);
        }
        this._value = value;
      }
      /**
       * Resets the stored value and disposed of the previously stored value.
       */
      clear() {
        this.value = void 0;
      }
      dispose() {
        this._isDisposed = true;
        markAsDisposed(this);
        this._value?.dispose();
        this._value = void 0;
      }
      /**
       * Clears the value, but does not dispose it.
       * The old value is returned.
      */
      clearAndLeak() {
        const oldValue = this._value;
        this._value = void 0;
        if (oldValue) {
          setParentOfDisposable(oldValue, null);
        }
        return oldValue;
      }
    };
    DisposableMap = class {
      constructor() {
        this._store = /* @__PURE__ */ new Map();
        this._isDisposed = false;
        trackDisposable(this);
      }
      /**
       * Disposes of all stored values and mark this object as disposed.
       *
       * Trying to use this object after it has been disposed of is an error.
       */
      dispose() {
        markAsDisposed(this);
        this._isDisposed = true;
        this.clearAndDisposeAll();
      }
      /**
       * Disposes of all stored values and clear the map, but DO NOT mark this object as disposed.
       */
      clearAndDisposeAll() {
        if (!this._store.size) {
          return;
        }
        try {
          dispose(this._store.values());
        } finally {
          this._store.clear();
        }
      }
      has(key) {
        return this._store.has(key);
      }
      get size() {
        return this._store.size;
      }
      get(key) {
        return this._store.get(key);
      }
      set(key, value, skipDisposeOnOverwrite = false) {
        if (this._isDisposed) {
          console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack);
        }
        if (!skipDisposeOnOverwrite) {
          this._store.get(key)?.dispose();
        }
        this._store.set(key, value);
      }
      /**
       * Delete the value stored for `key` from this map and also dispose of it.
       */
      deleteAndDispose(key) {
        this._store.get(key)?.dispose();
        this._store.delete(key);
      }
      /**
       * Delete the value stored for `key` from this map but return it. The caller is
       * responsible for disposing of the value.
       */
      deleteAndLeak(key) {
        const value = this._store.get(key);
        this._store.delete(key);
        return value;
      }
      keys() {
        return this._store.keys();
      }
      values() {
        return this._store.values();
      }
      [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
      }
    };
  }
});

// out-build/vs/base/common/linkedList.js
var Node;
var init_linkedList = __esm({
  "out-build/vs/base/common/linkedList.js"() {
    "use strict";
    Node = class _Node {
      static {
        this.Undefined = new _Node(void 0);
      }
      constructor(element) {
        this.element = element;
        this.next = _Node.Undefined;
        this.prev = _Node.Undefined;
      }
    };
  }
});

// out-build/vs/base/common/stopwatch.js
var hasPerformanceNow, StopWatch;
var init_stopwatch = __esm({
  "out-build/vs/base/common/stopwatch.js"() {
    "use strict";
    hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now === "function";
    StopWatch = class _StopWatch {
      static create(highResolution) {
        return new _StopWatch(highResolution);
      }
      constructor(highResolution) {
        this._now = hasPerformanceNow && highResolution === false ? Date.now : globalThis.performance.now.bind(globalThis.performance);
        this._startTime = this._now();
        this._stopTime = -1;
      }
      stop() {
        this._stopTime = this._now();
      }
      reset() {
        this._startTime = this._now();
        this._stopTime = -1;
      }
      elapsed() {
        if (this._stopTime !== -1) {
          return this._stopTime - this._startTime;
        }
        return this._now() - this._startTime;
      }
    };
  }
});

// out-build/vs/base/common/event.js
var _enableDisposeWithListenerWarning, _enableSnapshotPotentialLeakWarning, Event, EventProfiling, _globalLeakWarningThreshold, LeakageMonitor, Stacktrace, ListenerLeakError, ListenerRefusalError, id, UniqueContainer, compactionThreshold, forEachListener, Emitter, EventDeliveryQueuePrivate;
var init_event = __esm({
  "out-build/vs/base/common/event.js"() {
    "use strict";
    init_collections();
    init_errors();
    init_functional();
    init_lifecycle();
    init_linkedList();
    init_stopwatch();
    _enableDisposeWithListenerWarning = false;
    _enableSnapshotPotentialLeakWarning = false;
    (function(Event2) {
      Event2.None = () => Disposable.None;
      function _addLeakageTraceLogic(options) {
        if (_enableSnapshotPotentialLeakWarning) {
          const { onDidAddListener: origListenerDidAdd } = options;
          const stack = Stacktrace.create();
          let count = 0;
          options.onDidAddListener = () => {
            if (++count === 2) {
              console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here");
              stack.print();
            }
            origListenerDidAdd?.();
          };
        }
      }
      function defer(event, disposable) {
        return debounce(event, () => void 0, 0, void 0, true, void 0, disposable);
      }
      Event2.defer = defer;
      function once(event) {
        return (listener, thisArgs = null, disposables) => {
          let didFire = false;
          let result = void 0;
          result = event((e) => {
            if (didFire) {
              return;
            } else if (result) {
              result.dispose();
            } else {
              didFire = true;
            }
            return listener.call(thisArgs, e);
          }, null, disposables);
          if (didFire) {
            result.dispose();
          }
          return result;
        };
      }
      Event2.once = once;
      function onceIf(event, condition) {
        return Event2.once(Event2.filter(event, condition));
      }
      Event2.onceIf = onceIf;
      function map(event, map2, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event((i) => listener.call(thisArgs, map2(i)), null, disposables), disposable);
      }
      Event2.map = map;
      function forEach(event, each, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event((i) => {
          each(i);
          listener.call(thisArgs, i);
        }, null, disposables), disposable);
      }
      Event2.forEach = forEach;
      function filter(event, filter2, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event((e) => filter2(e) && listener.call(thisArgs, e), null, disposables), disposable);
      }
      Event2.filter = filter;
      function signal(event) {
        return event;
      }
      Event2.signal = signal;
      function any(...events) {
        return (listener, thisArgs = null, disposables) => {
          const disposable = combinedDisposable(...events.map((event) => event((e) => listener.call(thisArgs, e))));
          return addAndReturnDisposable(disposable, disposables);
        };
      }
      Event2.any = any;
      function reduce(event, merge, initial, disposable) {
        let output = initial;
        return map(event, (e) => {
          output = merge(output, e);
          return output;
        }, disposable);
      }
      Event2.reduce = reduce;
      function snapshot(event, disposable) {
        let listener;
        const options = {
          onWillAddFirstListener() {
            listener = event(emitter.fire, emitter);
          },
          onDidRemoveLastListener() {
            listener?.dispose();
          }
        };
        if (!disposable) {
          _addLeakageTraceLogic(options);
        }
        const emitter = new Emitter(options);
        disposable?.add(emitter);
        return emitter.event;
      }
      function addAndReturnDisposable(d, store) {
        if (store instanceof Array) {
          store.push(d);
        } else if (store) {
          store.add(d);
        }
        return d;
      }
      function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
        let subscription;
        let output = void 0;
        let handle = void 0;
        let numDebouncedCalls = 0;
        let doFire;
        const options = {
          leakWarningThreshold,
          onWillAddFirstListener() {
            subscription = event((cur) => {
              numDebouncedCalls++;
              output = merge(output, cur);
              if (leading && !handle) {
                emitter.fire(output);
                output = void 0;
              }
              doFire = () => {
                const _output = output;
                output = void 0;
                handle = void 0;
                if (!leading || numDebouncedCalls > 1) {
                  emitter.fire(_output);
                }
                numDebouncedCalls = 0;
              };
              if (typeof delay === "number") {
                clearTimeout(handle);
                handle = setTimeout(doFire, delay);
              } else {
                if (handle === void 0) {
                  handle = 0;
                  queueMicrotask(doFire);
                }
              }
            });
          },
          onWillRemoveListener() {
            if (flushOnListenerRemove && numDebouncedCalls > 0) {
              doFire?.();
            }
          },
          onDidRemoveLastListener() {
            doFire = void 0;
            subscription.dispose();
          }
        };
        if (!disposable) {
          _addLeakageTraceLogic(options);
        }
        const emitter = new Emitter(options);
        disposable?.add(emitter);
        return emitter.event;
      }
      Event2.debounce = debounce;
      function accumulate(event, delay = 0, disposable) {
        return Event2.debounce(event, (last, e) => {
          if (!last) {
            return [e];
          }
          last.push(e);
          return last;
        }, delay, void 0, true, void 0, disposable);
      }
      Event2.accumulate = accumulate;
      function latch(event, equals2 = (a, b) => a === b, disposable) {
        let firstCall = true;
        let cache;
        return filter(event, (value) => {
          const shouldEmit = firstCall || !equals2(value, cache);
          firstCall = false;
          cache = value;
          return shouldEmit;
        }, disposable);
      }
      Event2.latch = latch;
      function split(event, isT, disposable) {
        return [
          Event2.filter(event, isT, disposable),
          Event2.filter(event, (e) => !isT(e), disposable)
        ];
      }
      Event2.split = split;
      function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
        let buffer2 = _buffer.slice();
        let listener = event((e) => {
          if (buffer2) {
            buffer2.push(e);
          } else {
            emitter.fire(e);
          }
        });
        if (disposable) {
          disposable.add(listener);
        }
        const flush = () => {
          buffer2?.forEach((e) => emitter.fire(e));
          buffer2 = null;
        };
        const emitter = new Emitter({
          onWillAddFirstListener() {
            if (!listener) {
              listener = event((e) => emitter.fire(e));
              if (disposable) {
                disposable.add(listener);
              }
            }
          },
          onDidAddFirstListener() {
            if (buffer2) {
              if (flushAfterTimeout) {
                setTimeout(flush);
              } else {
                flush();
              }
            }
          },
          onDidRemoveLastListener() {
            if (listener) {
              listener.dispose();
            }
            listener = null;
          }
        });
        if (disposable) {
          disposable.add(emitter);
        }
        return emitter.event;
      }
      Event2.buffer = buffer;
      function chain(event, sythensize) {
        const fn = (listener, thisArgs, disposables) => {
          const cs = sythensize(new ChainableSynthesis());
          return event(function(value) {
            const result = cs.evaluate(value);
            if (result !== HaltChainable) {
              listener.call(thisArgs, result);
            }
          }, void 0, disposables);
        };
        return fn;
      }
      Event2.chain = chain;
      const HaltChainable = Symbol("HaltChainable");
      class ChainableSynthesis {
        constructor() {
          this.steps = [];
        }
        map(fn) {
          this.steps.push(fn);
          return this;
        }
        forEach(fn) {
          this.steps.push((v) => {
            fn(v);
            return v;
          });
          return this;
        }
        filter(fn) {
          this.steps.push((v) => fn(v) ? v : HaltChainable);
          return this;
        }
        reduce(merge, initial) {
          let last = initial;
          this.steps.push((v) => {
            last = merge(last, v);
            return last;
          });
          return this;
        }
        latch(equals2 = (a, b) => a === b) {
          let firstCall = true;
          let cache;
          this.steps.push((value) => {
            const shouldEmit = firstCall || !equals2(value, cache);
            firstCall = false;
            cache = value;
            return shouldEmit ? value : HaltChainable;
          });
          return this;
        }
        evaluate(value) {
          for (const step of this.steps) {
            value = step(value);
            if (value === HaltChainable) {
              break;
            }
          }
          return value;
        }
      }
      function fromNodeEventEmitter(emitter, eventName, map2 = (id2) => id2) {
        const fn = (...args) => result.fire(map2(...args));
        const onFirstListenerAdd = () => emitter.on(eventName, fn);
        const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
        const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
        return result.event;
      }
      Event2.fromNodeEventEmitter = fromNodeEventEmitter;
      function fromDOMEventEmitter(emitter, eventName, map2 = (id2) => id2) {
        const fn = (...args) => result.fire(map2(...args));
        const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
        const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
        const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
        return result.event;
      }
      Event2.fromDOMEventEmitter = fromDOMEventEmitter;
      function toPromise(event, disposables) {
        return new Promise((resolve2) => once(event)(resolve2, null, disposables));
      }
      Event2.toPromise = toPromise;
      function fromPromise(promise) {
        const result = new Emitter();
        promise.then((res) => {
          result.fire(res);
        }, () => {
          result.fire(void 0);
        }).finally(() => {
          result.dispose();
        });
        return result.event;
      }
      Event2.fromPromise = fromPromise;
      function forward(from, to) {
        return from((e) => to.fire(e));
      }
      Event2.forward = forward;
      function runAndSubscribe(event, handler, initial) {
        handler(initial);
        return event((e) => handler(e));
      }
      Event2.runAndSubscribe = runAndSubscribe;
      class EmitterObserver {
        constructor(_observable, store) {
          this._observable = _observable;
          this._counter = 0;
          this._hasChanged = false;
          const options = {
            onWillAddFirstListener: () => {
              _observable.addObserver(this);
              this._observable.reportChanges();
            },
            onDidRemoveLastListener: () => {
              _observable.removeObserver(this);
            }
          };
          if (!store) {
            _addLeakageTraceLogic(options);
          }
          this.emitter = new Emitter(options);
          if (store) {
            store.add(this.emitter);
          }
        }
        beginUpdate(_observable) {
          this._counter++;
        }
        handlePossibleChange(_observable) {
        }
        handleChange(_observable, _change) {
          this._hasChanged = true;
        }
        endUpdate(_observable) {
          this._counter--;
          if (this._counter === 0) {
            this._observable.reportChanges();
            if (this._hasChanged) {
              this._hasChanged = false;
              this.emitter.fire(this._observable.get());
            }
          }
        }
      }
      function fromObservable(obs, store) {
        const observer = new EmitterObserver(obs, store);
        return observer.emitter.event;
      }
      Event2.fromObservable = fromObservable;
      function fromObservableLight(observable) {
        return (listener, thisArgs, disposables) => {
          let count = 0;
          let didChange = false;
          const observer = {
            beginUpdate() {
              count++;
            },
            endUpdate() {
              count--;
              if (count === 0) {
                observable.reportChanges();
                if (didChange) {
                  didChange = false;
                  listener.call(thisArgs);
                }
              }
            },
            handlePossibleChange() {
            },
            handleChange() {
              didChange = true;
            }
          };
          observable.addObserver(observer);
          observable.reportChanges();
          const disposable = {
            dispose() {
              observable.removeObserver(observer);
            }
          };
          if (disposables instanceof DisposableStore) {
            disposables.add(disposable);
          } else if (Array.isArray(disposables)) {
            disposables.push(disposable);
          }
          return disposable;
        };
      }
      Event2.fromObservableLight = fromObservableLight;
    })(Event || (Event = {}));
    EventProfiling = class _EventProfiling {
      static {
        this.all = /* @__PURE__ */ new Set();
      }
      static {
        this._idPool = 0;
      }
      constructor(name) {
        this.listenerCount = 0;
        this.invocationCount = 0;
        this.elapsedOverall = 0;
        this.durations = [];
        this.name = `${name}_${_EventProfiling._idPool++}`;
        _EventProfiling.all.add(this);
      }
      start(listenerCount) {
        this._stopWatch = new StopWatch();
        this.listenerCount = listenerCount;
      }
      stop() {
        if (this._stopWatch) {
          const elapsed = this._stopWatch.elapsed();
          this.durations.push(elapsed);
          this.elapsedOverall += elapsed;
          this.invocationCount += 1;
          this._stopWatch = void 0;
        }
      }
    };
    _globalLeakWarningThreshold = -1;
    LeakageMonitor = class _LeakageMonitor {
      static {
        this._idPool = 1;
      }
      constructor(_errorHandler, threshold, name = (_LeakageMonitor._idPool++).toString(16).padStart(3, "0")) {
        this._errorHandler = _errorHandler;
        this.threshold = threshold;
        this.name = name;
        this._warnCountdown = 0;
      }
      dispose() {
        this._stacks?.clear();
      }
      check(stack, listenerCount) {
        const threshold = this.threshold;
        if (threshold <= 0 || listenerCount < threshold) {
          return void 0;
        }
        if (!this._stacks) {
          this._stacks = /* @__PURE__ */ new Map();
        }
        const count = this._stacks.get(stack.value) || 0;
        this._stacks.set(stack.value, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
          this._warnCountdown = threshold * 0.5;
          const [topStack, topCount] = this.getMostFrequentStack();
          const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
          console.warn(message);
          console.warn(topStack);
          const error = new ListenerLeakError(message, topStack);
          this._errorHandler(error);
        }
        return () => {
          const count2 = this._stacks.get(stack.value) || 0;
          this._stacks.set(stack.value, count2 - 1);
        };
      }
      getMostFrequentStack() {
        if (!this._stacks) {
          return void 0;
        }
        let topStack;
        let topCount = 0;
        for (const [stack, count] of this._stacks) {
          if (!topStack || topCount < count) {
            topStack = [stack, count];
            topCount = count;
          }
        }
        return topStack;
      }
    };
    Stacktrace = class _Stacktrace {
      static create() {
        const err = new Error();
        return new _Stacktrace(err.stack ?? "");
      }
      constructor(value) {
        this.value = value;
      }
      print() {
        console.warn(this.value.split("\n").slice(2).join("\n"));
      }
    };
    ListenerLeakError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.name = "ListenerLeakError";
        this.stack = stack;
      }
    };
    ListenerRefusalError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.name = "ListenerRefusalError";
        this.stack = stack;
      }
    };
    id = 0;
    UniqueContainer = class {
      constructor(value) {
        this.value = value;
        this.id = id++;
      }
    };
    compactionThreshold = 2;
    forEachListener = (listeners, fn) => {
      if (listeners instanceof UniqueContainer) {
        fn(listeners);
      } else {
        for (let i = 0; i < listeners.length; i++) {
          const l = listeners[i];
          if (l) {
            fn(l);
          }
        }
      }
    };
    Emitter = class {
      constructor(options) {
        this._size = 0;
        this._options = options;
        this._leakageMon = _globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold ? new LeakageMonitor(options?.onListenerError ?? onUnexpectedError, this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold) : void 0;
        this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0;
        this._deliveryQueue = this._options?.deliveryQueue;
      }
      dispose() {
        if (!this._disposed) {
          this._disposed = true;
          if (this._deliveryQueue?.current === this) {
            this._deliveryQueue.reset();
          }
          if (this._listeners) {
            if (_enableDisposeWithListenerWarning) {
              const listeners = this._listeners;
              queueMicrotask(() => {
                forEachListener(listeners, (l) => l.stack?.print());
              });
            }
            this._listeners = void 0;
            this._size = 0;
          }
          this._options?.onDidRemoveLastListener?.();
          this._leakageMon?.dispose();
        }
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        this._event ??= (callback, thisArgs, disposables) => {
          if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
            const message = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
            console.warn(message);
            const tuple = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1];
            const error = new ListenerRefusalError(`${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`, tuple[0]);
            const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
            errorHandler2(error);
            return Disposable.None;
          }
          if (this._disposed) {
            return Disposable.None;
          }
          if (thisArgs) {
            callback = callback.bind(thisArgs);
          }
          const contained = new UniqueContainer(callback);
          let removeMonitor;
          let stack;
          if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
            contained.stack = Stacktrace.create();
            removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
          }
          if (_enableDisposeWithListenerWarning) {
            contained.stack = stack ?? Stacktrace.create();
          }
          if (!this._listeners) {
            this._options?.onWillAddFirstListener?.(this);
            this._listeners = contained;
            this._options?.onDidAddFirstListener?.(this);
          } else if (this._listeners instanceof UniqueContainer) {
            this._deliveryQueue ??= new EventDeliveryQueuePrivate();
            this._listeners = [this._listeners, contained];
          } else {
            this._listeners.push(contained);
          }
          this._options?.onDidAddListener?.(this);
          this._size++;
          const result = toDisposable(() => {
            removeMonitor?.();
            this._removeListener(contained);
          });
          if (disposables instanceof DisposableStore) {
            disposables.add(result);
          } else if (Array.isArray(disposables)) {
            disposables.push(result);
          }
          return result;
        };
        return this._event;
      }
      _removeListener(listener) {
        this._options?.onWillRemoveListener?.(this);
        if (!this._listeners) {
          return;
        }
        if (this._size === 1) {
          this._listeners = void 0;
          this._options?.onDidRemoveLastListener?.(this);
          this._size = 0;
          return;
        }
        const listeners = this._listeners;
        const index = listeners.indexOf(listener);
        if (index === -1) {
          console.log("disposed?", this._disposed);
          console.log("size?", this._size);
          console.log("arr?", JSON.stringify(this._listeners));
          throw new Error("Attempted to dispose unknown listener");
        }
        this._size--;
        listeners[index] = void 0;
        const adjustDeliveryQueue = this._deliveryQueue.current === this;
        if (this._size * compactionThreshold <= listeners.length) {
          let n = 0;
          for (let i = 0; i < listeners.length; i++) {
            if (listeners[i]) {
              listeners[n++] = listeners[i];
            } else if (adjustDeliveryQueue && n < this._deliveryQueue.end) {
              this._deliveryQueue.end--;
              if (n < this._deliveryQueue.i) {
                this._deliveryQueue.i--;
              }
            }
          }
          listeners.length = n;
        }
      }
      _deliver(listener, value) {
        if (!listener) {
          return;
        }
        const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
        if (!errorHandler2) {
          listener.value(value);
          return;
        }
        try {
          listener.value(value);
        } catch (e) {
          errorHandler2(e);
        }
      }
      /** Delivers items in the queue. Assumes the queue is ready to go. */
      _deliverQueue(dq) {
        const listeners = dq.current._listeners;
        while (dq.i < dq.end) {
          this._deliver(listeners[dq.i++], dq.value);
        }
        dq.reset();
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._deliveryQueue?.current) {
          this._deliverQueue(this._deliveryQueue);
          this._perfMon?.stop();
        }
        this._perfMon?.start(this._size);
        if (!this._listeners) {
        } else if (this._listeners instanceof UniqueContainer) {
          this._deliver(this._listeners, event);
        } else {
          const dq = this._deliveryQueue;
          dq.enqueue(this, event, this._listeners.length);
          this._deliverQueue(dq);
        }
        this._perfMon?.stop();
      }
      hasListeners() {
        return this._size > 0;
      }
    };
    EventDeliveryQueuePrivate = class {
      constructor() {
        this.i = -1;
        this.end = 0;
      }
      enqueue(emitter, value, end) {
        this.i = 0;
        this.end = end;
        this.current = emitter;
        this.value = value;
      }
      reset() {
        this.i = this.end;
        this.current = void 0;
        this.value = void 0;
      }
    };
  }
});

// out-build/vs/nls.messages.js
function getNLSMessages() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var init_nls_messages = __esm({
  "out-build/vs/nls.messages.js"() {
    "use strict";
  }
});

// out-build/vs/nls.js
function _format(message, args) {
  let result;
  if (args.length === 0) {
    result = message;
  } else {
    result = message.replace(/\{(\d+)\}/g, (match, rest) => {
      const index = rest[0];
      const arg = args[index];
      let result2 = match;
      if (typeof arg === "string") {
        result2 = arg;
      } else if (typeof arg === "number" || typeof arg === "boolean" || arg === void 0 || arg === null) {
        result2 = String(arg);
      }
      return result2;
    });
  }
  if (isPseudo) {
    result = "\uFF3B" + result.replace(/[aouei]/g, "$&$&") + "\uFF3D";
  }
  return result;
}
function localize(data, message, ...args) {
  if (typeof data === "number") {
    return _format(lookupMessage(data, message), args);
  }
  return _format(message, args);
}
function lookupMessage(index, fallback) {
  const message = getNLSMessages()?.[index];
  if (typeof message !== "string") {
    if (typeof fallback === "string") {
      return fallback;
    }
    throw new Error(`!!! NLS MISSING: ${index} !!!`);
  }
  return message;
}
var isPseudo;
var init_nls = __esm({
  "out-build/vs/nls.js"() {
    "use strict";
    init_nls_messages();
    init_nls_messages();
    isPseudo = getNLSLanguage() === "pseudo" || typeof document !== "undefined" && document.location && typeof document.location.hash === "string" && document.location.hash.indexOf("pseudo=true") >= 0;
  }
});

// out-build/vs/base/common/platform.js
var LANGUAGE_DEFAULT, _isWindows, _isMacintosh, _isLinux, _isLinuxSnap, _isNative, _isWeb, _isElectron, _isIOS, _isCI, _isMobile, _locale, _language, _platformLocale, _translationsConfigFile, _userAgent, $globalThis, nodeProcess, isElectronProcess, isElectronRenderer, Platform, _platform, isWindows2, isMacintosh, isLinux, isNative, isWeb, isWebWorker, webWorkerOrigin, userAgent, language, Language, setTimeout0IsFaster, setTimeout0, OperatingSystem, isChrome, isFirefox, isSafari, isEdge, isAndroid;
var init_platform = __esm({
  "out-build/vs/base/common/platform.js"() {
    "use strict";
    init_nls();
    LANGUAGE_DEFAULT = "en";
    _isWindows = false;
    _isMacintosh = false;
    _isLinux = false;
    _isLinuxSnap = false;
    _isNative = false;
    _isWeb = false;
    _isElectron = false;
    _isIOS = false;
    _isCI = false;
    _isMobile = false;
    _locale = void 0;
    _language = LANGUAGE_DEFAULT;
    _platformLocale = LANGUAGE_DEFAULT;
    _translationsConfigFile = void 0;
    _userAgent = void 0;
    $globalThis = globalThis;
    nodeProcess = void 0;
    if (typeof $globalThis.vscode !== "undefined" && typeof $globalThis.vscode.process !== "undefined") {
      nodeProcess = $globalThis.vscode.process;
    } else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
      nodeProcess = process;
    }
    isElectronProcess = typeof nodeProcess?.versions?.electron === "string";
    isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
    if (typeof nodeProcess === "object") {
      _isWindows = nodeProcess.platform === "win32";
      _isMacintosh = nodeProcess.platform === "darwin";
      _isLinux = nodeProcess.platform === "linux";
      _isLinuxSnap = _isLinux && !!nodeProcess.env["SNAP"] && !!nodeProcess.env["SNAP_REVISION"];
      _isElectron = isElectronProcess;
      _isCI = !!nodeProcess.env["CI"] || !!nodeProcess.env["BUILD_ARTIFACTSTAGINGDIRECTORY"];
      _locale = LANGUAGE_DEFAULT;
      _language = LANGUAGE_DEFAULT;
      const rawNlsConfig = nodeProcess.env["VSCODE_NLS_CONFIG"];
      if (rawNlsConfig) {
        try {
          const nlsConfig = JSON.parse(rawNlsConfig);
          _locale = nlsConfig.userLocale;
          _platformLocale = nlsConfig.osLocale;
          _language = nlsConfig.resolvedLanguage || LANGUAGE_DEFAULT;
          _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
        } catch (e) {
        }
      }
      _isNative = true;
    } else if (typeof navigator === "object" && !isElectronRenderer) {
      _userAgent = navigator.userAgent;
      _isWindows = _userAgent.indexOf("Windows") >= 0;
      _isMacintosh = _userAgent.indexOf("Macintosh") >= 0;
      _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
      _isLinux = _userAgent.indexOf("Linux") >= 0;
      _isMobile = _userAgent?.indexOf("Mobi") >= 0;
      _isWeb = true;
      _language = getNLSLanguage() || LANGUAGE_DEFAULT;
      _locale = navigator.language.toLowerCase();
      _platformLocale = _locale;
    } else {
      console.error("Unable to resolve platform.");
    }
    (function(Platform2) {
      Platform2[Platform2["Web"] = 0] = "Web";
      Platform2[Platform2["Mac"] = 1] = "Mac";
      Platform2[Platform2["Linux"] = 2] = "Linux";
      Platform2[Platform2["Windows"] = 3] = "Windows";
    })(Platform || (Platform = {}));
    _platform = 0;
    if (_isMacintosh) {
      _platform = 1;
    } else if (_isWindows) {
      _platform = 3;
    } else if (_isLinux) {
      _platform = 2;
    }
    isWindows2 = _isWindows;
    isMacintosh = _isMacintosh;
    isLinux = _isLinux;
    isNative = _isNative;
    isWeb = _isWeb;
    isWebWorker = _isWeb && typeof $globalThis.importScripts === "function";
    webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0;
    userAgent = _userAgent;
    language = _language;
    (function(Language2) {
      function value() {
        return language;
      }
      Language2.value = value;
      function isDefaultVariant() {
        if (language.length === 2) {
          return language === "en";
        } else if (language.length >= 3) {
          return language[0] === "e" && language[1] === "n" && language[2] === "-";
        } else {
          return false;
        }
      }
      Language2.isDefaultVariant = isDefaultVariant;
      function isDefault() {
        return language === "en";
      }
      Language2.isDefault = isDefault;
    })(Language || (Language = {}));
    setTimeout0IsFaster = typeof $globalThis.postMessage === "function" && !$globalThis.importScripts;
    setTimeout0 = (() => {
      if (setTimeout0IsFaster) {
        const pending = [];
        $globalThis.addEventListener("message", (e) => {
          if (e.data && e.data.vscodeScheduleAsyncWork) {
            for (let i = 0, len = pending.length; i < len; i++) {
              const candidate = pending[i];
              if (candidate.id === e.data.vscodeScheduleAsyncWork) {
                pending.splice(i, 1);
                candidate.callback();
                return;
              }
            }
          }
        });
        let lastId = 0;
        return (callback) => {
          const myId = ++lastId;
          pending.push({
            id: myId,
            callback
          });
          $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, "*");
        };
      }
      return (callback) => setTimeout(callback);
    })();
    (function(OperatingSystem2) {
      OperatingSystem2[OperatingSystem2["Windows"] = 1] = "Windows";
      OperatingSystem2[OperatingSystem2["Macintosh"] = 2] = "Macintosh";
      OperatingSystem2[OperatingSystem2["Linux"] = 3] = "Linux";
    })(OperatingSystem || (OperatingSystem = {}));
    isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0);
    isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0);
    isSafari = !!(!isChrome && (userAgent && userAgent.indexOf("Safari") >= 0));
    isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0);
    isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0);
  }
});

// out-build/vs/base/common/process.js
var safeProcess, vscodeGlobal, cwd, env, platform, arch;
var init_process = __esm({
  "out-build/vs/base/common/process.js"() {
    "use strict";
    init_platform();
    vscodeGlobal = globalThis.vscode;
    if (typeof vscodeGlobal !== "undefined" && typeof vscodeGlobal.process !== "undefined") {
      const sandboxProcess = vscodeGlobal.process;
      safeProcess = {
        get platform() {
          return sandboxProcess.platform;
        },
        get arch() {
          return sandboxProcess.arch;
        },
        get env() {
          return sandboxProcess.env;
        },
        cwd() {
          return sandboxProcess.cwd();
        }
      };
    } else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
      safeProcess = {
        get platform() {
          return process.platform;
        },
        get arch() {
          return process.arch;
        },
        get env() {
          return process.env;
        },
        cwd() {
          return process.env["VSCODE_CWD"] || process.cwd();
        }
      };
    } else {
      safeProcess = {
        // Supported
        get platform() {
          return isWindows2 ? "win32" : isMacintosh ? "darwin" : "linux";
        },
        get arch() {
          return void 0;
        },
        // Unsupported
        get env() {
          return {};
        },
        cwd() {
          return "/";
        }
      };
    }
    cwd = safeProcess.cwd;
    env = safeProcess.env;
    platform = safeProcess.platform;
    arch = safeProcess.arch;
  }
});

// out-build/vs/base/common/path.js
function validateObject(pathObject, name) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new ErrorInvalidArgType(name, "Object", pathObject);
  }
}
function validateString(value, name) {
  if (typeof value !== "string") {
    throw new ErrorInvalidArgType(name, "string", value);
  }
}
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
function normalizeString(path4, allowAboveRoot, separator, isPathSeparator3) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path4.length; ++i) {
    if (i < path4.length) {
      code = path4.charCodeAt(i);
    } else if (isPathSeparator3(code)) {
      break;
    } else {
      code = CHAR_FORWARD_SLASH;
    }
    if (isPathSeparator3(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `${separator}${path4.slice(lastSlash + 1, i)}`;
        } else {
          res = path4.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function formatExt(ext) {
  return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
}
function _format2(sep2, pathObject) {
  validateObject(pathObject, "pathObject");
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
  if (!dir) {
    return base;
  }
  return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep2}${base}`;
}
var CHAR_UPPERCASE_A, CHAR_LOWERCASE_A, CHAR_UPPERCASE_Z, CHAR_LOWERCASE_Z, CHAR_DOT, CHAR_FORWARD_SLASH, CHAR_BACKWARD_SLASH, CHAR_COLON, CHAR_QUESTION_MARK, ErrorInvalidArgType, platformIsWin32, win32, posixCwd, posix, normalize, isAbsolute, join3, resolve, relative2, dirname3, basename, extname, format, parse, toNamespacedPath, sep, delimiter;
var init_path = __esm({
  "out-build/vs/base/common/path.js"() {
    "use strict";
    init_process();
    CHAR_UPPERCASE_A = 65;
    CHAR_LOWERCASE_A = 97;
    CHAR_UPPERCASE_Z = 90;
    CHAR_LOWERCASE_Z = 122;
    CHAR_DOT = 46;
    CHAR_FORWARD_SLASH = 47;
    CHAR_BACKWARD_SLASH = 92;
    CHAR_COLON = 58;
    CHAR_QUESTION_MARK = 63;
    ErrorInvalidArgType = class extends Error {
      constructor(name, expected, actual) {
        let determiner;
        if (typeof expected === "string" && expected.indexOf("not ") === 0) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        const type = name.indexOf(".") !== -1 ? "property" : "argument";
        let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
        msg += `. Received type ${typeof actual}`;
        super(msg);
        this.code = "ERR_INVALID_ARG_TYPE";
      }
    };
    platformIsWin32 = platform === "win32";
    win32 = {
      // path.resolve([from ...], to)
      resolve(...pathSegments) {
        let resolvedDevice = "";
        let resolvedTail = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1; i--) {
          let path4;
          if (i >= 0) {
            path4 = pathSegments[i];
            validateString(path4, `paths[${i}]`);
            if (path4.length === 0) {
              continue;
            }
          } else if (resolvedDevice.length === 0) {
            path4 = cwd();
          } else {
            path4 = env[`=${resolvedDevice}`] || cwd();
            if (path4 === void 0 || path4.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path4.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
              path4 = `${resolvedDevice}\\`;
            }
          }
          const len = path4.length;
          let rootEnd = 0;
          let device = "";
          let isAbsolute2 = false;
          const code = path4.charCodeAt(0);
          if (len === 1) {
            if (isPathSeparator(code)) {
              rootEnd = 1;
              isAbsolute2 = true;
            }
          } else if (isPathSeparator(code)) {
            isAbsolute2 = true;
            if (isPathSeparator(path4.charCodeAt(1))) {
              let j = 2;
              let last = j;
              while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                const firstPart = path4.slice(last, j);
                last = j;
                while (j < len && isPathSeparator(path4.charCodeAt(j))) {
                  j++;
                }
                if (j < len && j !== last) {
                  last = j;
                  while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
                    j++;
                  }
                  if (j === len || j !== last) {
                    device = `\\\\${firstPart}\\${path4.slice(last, j)}`;
                    rootEnd = j;
                  }
                }
              }
            } else {
              rootEnd = 1;
            }
          } else if (isWindowsDeviceRoot(code) && path4.charCodeAt(1) === CHAR_COLON) {
            device = path4.slice(0, 2);
            rootEnd = 2;
            if (len > 2 && isPathSeparator(path4.charCodeAt(2))) {
              isAbsolute2 = true;
              rootEnd = 3;
            }
          }
          if (device.length > 0) {
            if (resolvedDevice.length > 0) {
              if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                continue;
              }
            } else {
              resolvedDevice = device;
            }
          }
          if (resolvedAbsolute) {
            if (resolvedDevice.length > 0) {
              break;
            }
          } else {
            resolvedTail = `${path4.slice(rootEnd)}\\${resolvedTail}`;
            resolvedAbsolute = isAbsolute2;
            if (isAbsolute2 && resolvedDevice.length > 0) {
              break;
            }
          }
        }
        resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
        return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
      },
      normalize(path4) {
        validateString(path4, "path");
        const len = path4.length;
        if (len === 0) {
          return ".";
        }
        let rootEnd = 0;
        let device;
        let isAbsolute2 = false;
        const code = path4.charCodeAt(0);
        if (len === 1) {
          return isPosixPathSeparator(code) ? "\\" : path4;
        }
        if (isPathSeparator(code)) {
          isAbsolute2 = true;
          if (isPathSeparator(path4.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              const firstPart = path4.slice(last, j);
              last = j;
              while (j < len && isPathSeparator(path4.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  return `\\\\${firstPart}\\${path4.slice(last)}\\`;
                }
                if (j !== last) {
                  device = `\\\\${firstPart}\\${path4.slice(last, j)}`;
                  rootEnd = j;
                }
              }
            }
          } else {
            rootEnd = 1;
          }
        } else if (isWindowsDeviceRoot(code) && path4.charCodeAt(1) === CHAR_COLON) {
          device = path4.slice(0, 2);
          rootEnd = 2;
          if (len > 2 && isPathSeparator(path4.charCodeAt(2))) {
            isAbsolute2 = true;
            rootEnd = 3;
          }
        }
        let tail = rootEnd < len ? normalizeString(path4.slice(rootEnd), !isAbsolute2, "\\", isPathSeparator) : "";
        if (tail.length === 0 && !isAbsolute2) {
          tail = ".";
        }
        if (tail.length > 0 && isPathSeparator(path4.charCodeAt(len - 1))) {
          tail += "\\";
        }
        if (!isAbsolute2 && device === void 0 && path4.includes(":")) {
          if (tail.length >= 2 && isWindowsDeviceRoot(tail.charCodeAt(0)) && tail.charCodeAt(1) === CHAR_COLON) {
            return `.\\${tail}`;
          }
          let index = path4.indexOf(":");
          do {
            if (index === len - 1 || isPathSeparator(path4.charCodeAt(index + 1))) {
              return `.\\${tail}`;
            }
          } while ((index = path4.indexOf(":", index + 1)) !== -1);
        }
        if (device === void 0) {
          return isAbsolute2 ? `\\${tail}` : tail;
        }
        return isAbsolute2 ? `${device}\\${tail}` : `${device}${tail}`;
      },
      isAbsolute(path4) {
        validateString(path4, "path");
        const len = path4.length;
        if (len === 0) {
          return false;
        }
        const code = path4.charCodeAt(0);
        return isPathSeparator(code) || // Possible device root
        len > 2 && isWindowsDeviceRoot(code) && path4.charCodeAt(1) === CHAR_COLON && isPathSeparator(path4.charCodeAt(2));
      },
      join(...paths) {
        if (paths.length === 0) {
          return ".";
        }
        let joined;
        let firstPart;
        for (let i = 0; i < paths.length; ++i) {
          const arg = paths[i];
          validateString(arg, "path");
          if (arg.length > 0) {
            if (joined === void 0) {
              joined = firstPart = arg;
            } else {
              joined += `\\${arg}`;
            }
          }
        }
        if (joined === void 0) {
          return ".";
        }
        let needsReplace = true;
        let slashCount = 0;
        if (typeof firstPart === "string" && isPathSeparator(firstPart.charCodeAt(0))) {
          ++slashCount;
          const firstLen = firstPart.length;
          if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
            ++slashCount;
            if (firstLen > 2) {
              if (isPathSeparator(firstPart.charCodeAt(2))) {
                ++slashCount;
              } else {
                needsReplace = false;
              }
            }
          }
        }
        if (needsReplace) {
          while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
            slashCount++;
          }
          if (slashCount >= 2) {
            joined = `\\${joined.slice(slashCount)}`;
          }
        }
        return win32.normalize(joined);
      },
      // It will solve the relative path from `from` to `to`, for instance:
      //  from = 'C:\\orandea\\test\\aaa'
      //  to = 'C:\\orandea\\impl\\bbb'
      // The output of the function should be: '..\\..\\impl\\bbb'
      relative(from, to) {
        validateString(from, "from");
        validateString(to, "to");
        if (from === to) {
          return "";
        }
        const fromOrig = win32.resolve(from);
        const toOrig = win32.resolve(to);
        if (fromOrig === toOrig) {
          return "";
        }
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to) {
          return "";
        }
        if (fromOrig.length !== from.length || toOrig.length !== to.length) {
          const fromSplit = fromOrig.split("\\");
          const toSplit = toOrig.split("\\");
          if (fromSplit[fromSplit.length - 1] === "") {
            fromSplit.pop();
          }
          if (toSplit[toSplit.length - 1] === "") {
            toSplit.pop();
          }
          const fromLen2 = fromSplit.length;
          const toLen2 = toSplit.length;
          const length2 = fromLen2 < toLen2 ? fromLen2 : toLen2;
          let i2;
          for (i2 = 0; i2 < length2; i2++) {
            if (fromSplit[i2].toLowerCase() !== toSplit[i2].toLowerCase()) {
              break;
            }
          }
          if (i2 === 0) {
            return toOrig;
          } else if (i2 === length2) {
            if (toLen2 > length2) {
              return toSplit.slice(i2).join("\\");
            }
            if (fromLen2 > length2) {
              return "..\\".repeat(fromLen2 - 1 - i2) + "..";
            }
            return "";
          }
          return "..\\".repeat(fromLen2 - i2) + toSplit.slice(i2).join("\\");
        }
        let fromStart = 0;
        while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
          fromStart++;
        }
        let fromEnd = from.length;
        while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
          fromEnd--;
        }
        const fromLen = fromEnd - fromStart;
        let toStart = 0;
        while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
          toStart++;
        }
        let toEnd = to.length;
        while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
          toEnd--;
        }
        const toLen = toEnd - toStart;
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
          const fromCode = from.charCodeAt(fromStart + i);
          if (fromCode !== to.charCodeAt(toStart + i)) {
            break;
          } else if (fromCode === CHAR_BACKWARD_SLASH) {
            lastCommonSep = i;
          }
        }
        if (i !== length) {
          if (lastCommonSep === -1) {
            return toOrig;
          }
        } else {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
              return toOrig.slice(toStart + i + 1);
            }
            if (i === 2) {
              return toOrig.slice(toStart + i);
            }
          }
          if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
              lastCommonSep = i;
            } else if (i === 2) {
              lastCommonSep = 3;
            }
          }
          if (lastCommonSep === -1) {
            lastCommonSep = 0;
          }
        }
        let out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
            out += out.length === 0 ? ".." : "\\..";
          }
        }
        toStart += lastCommonSep;
        if (out.length > 0) {
          return `${out}${toOrig.slice(toStart, toEnd)}`;
        }
        if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
          ++toStart;
        }
        return toOrig.slice(toStart, toEnd);
      },
      toNamespacedPath(path4) {
        if (typeof path4 !== "string" || path4.length === 0) {
          return path4;
        }
        const resolvedPath = win32.resolve(path4);
        if (resolvedPath.length <= 2) {
          return path4;
        }
        if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
          if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
            const code = resolvedPath.charCodeAt(2);
            if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
              return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
            }
          }
        } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          return `\\\\?\\${resolvedPath}`;
        }
        return resolvedPath;
      },
      dirname(path4) {
        validateString(path4, "path");
        const len = path4.length;
        if (len === 0) {
          return ".";
        }
        let rootEnd = -1;
        let offset = 0;
        const code = path4.charCodeAt(0);
        if (len === 1) {
          return isPathSeparator(code) ? path4 : ".";
        }
        if (isPathSeparator(code)) {
          rootEnd = offset = 1;
          if (isPathSeparator(path4.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && isPathSeparator(path4.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  return path4;
                }
                if (j !== last) {
                  rootEnd = offset = j + 1;
                }
              }
            }
          }
        } else if (isWindowsDeviceRoot(code) && path4.charCodeAt(1) === CHAR_COLON) {
          rootEnd = len > 2 && isPathSeparator(path4.charCodeAt(2)) ? 3 : 2;
          offset = rootEnd;
        }
        let end = -1;
        let matchedSlash = true;
        for (let i = len - 1; i >= offset; --i) {
          if (isPathSeparator(path4.charCodeAt(i))) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) {
          if (rootEnd === -1) {
            return ".";
          }
          end = rootEnd;
        }
        return path4.slice(0, end);
      },
      basename(path4, suffix) {
        if (suffix !== void 0) {
          validateString(suffix, "suffix");
        }
        validateString(path4, "path");
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (path4.length >= 2 && isWindowsDeviceRoot(path4.charCodeAt(0)) && path4.charCodeAt(1) === CHAR_COLON) {
          start = 2;
        }
        if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path4.length) {
          if (suffix === path4) {
            return "";
          }
          let extIdx = suffix.length - 1;
          let firstNonSlashEnd = -1;
          for (i = path4.length - 1; i >= start; --i) {
            const code = path4.charCodeAt(i);
            if (isPathSeparator(code)) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === suffix.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) {
            end = firstNonSlashEnd;
          } else if (end === -1) {
            end = path4.length;
          }
          return path4.slice(start, end);
        }
        for (i = path4.length - 1; i >= start; --i) {
          if (isPathSeparator(path4.charCodeAt(i))) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) {
          return "";
        }
        return path4.slice(start, end);
      },
      extname(path4) {
        validateString(path4, "path");
        let start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        if (path4.length >= 2 && path4.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path4.charCodeAt(0))) {
          start = startPart = 2;
        }
        for (let i = path4.length - 1; i >= start; --i) {
          const code = path4.charCodeAt(i);
          if (isPathSeparator(code)) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path4.slice(startDot, end);
      },
      format: _format2.bind(null, "\\"),
      parse(path4) {
        validateString(path4, "path");
        const ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path4.length === 0) {
          return ret;
        }
        const len = path4.length;
        let rootEnd = 0;
        let code = path4.charCodeAt(0);
        if (len === 1) {
          if (isPathSeparator(code)) {
            ret.root = ret.dir = path4;
            return ret;
          }
          ret.base = ret.name = path4;
          return ret;
        }
        if (isPathSeparator(code)) {
          rootEnd = 1;
          if (isPathSeparator(path4.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && isPathSeparator(path4.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path4.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  rootEnd = j;
                } else if (j !== last) {
                  rootEnd = j + 1;
                }
              }
            }
          }
        } else if (isWindowsDeviceRoot(code) && path4.charCodeAt(1) === CHAR_COLON) {
          if (len <= 2) {
            ret.root = ret.dir = path4;
            return ret;
          }
          rootEnd = 2;
          if (isPathSeparator(path4.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path4;
              return ret;
            }
            rootEnd = 3;
          }
        }
        if (rootEnd > 0) {
          ret.root = path4.slice(0, rootEnd);
        }
        let startDot = -1;
        let startPart = rootEnd;
        let end = -1;
        let matchedSlash = true;
        let i = path4.length - 1;
        let preDotState = 0;
        for (; i >= rootEnd; --i) {
          code = path4.charCodeAt(i);
          if (isPathSeparator(code)) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (end !== -1) {
          if (startDot === -1 || // We saw a non-dot character immediately before the dot
          preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
          preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            ret.base = ret.name = path4.slice(startPart, end);
          } else {
            ret.name = path4.slice(startPart, startDot);
            ret.base = path4.slice(startPart, end);
            ret.ext = path4.slice(startDot, end);
          }
        }
        if (startPart > 0 && startPart !== rootEnd) {
          ret.dir = path4.slice(0, startPart - 1);
        } else {
          ret.dir = ret.root;
        }
        return ret;
      },
      sep: "\\",
      delimiter: ";",
      win32: null,
      posix: null
    };
    posixCwd = (() => {
      if (platformIsWin32) {
        const regexp = /\\/g;
        return () => {
          const cwd2 = cwd().replace(regexp, "/");
          return cwd2.slice(cwd2.indexOf("/"));
        };
      }
      return () => cwd();
    })();
    posix = {
      // path.resolve([from ...], to)
      resolve(...pathSegments) {
        let resolvedPath = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
          const path4 = pathSegments[i];
          validateString(path4, `paths[${i}]`);
          if (path4.length === 0) {
            continue;
          }
          resolvedPath = `${path4}/${resolvedPath}`;
          resolvedAbsolute = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        if (!resolvedAbsolute) {
          const cwd2 = posixCwd();
          resolvedPath = `${cwd2}/${resolvedPath}`;
          resolvedAbsolute = cwd2.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
        if (resolvedAbsolute) {
          return `/${resolvedPath}`;
        }
        return resolvedPath.length > 0 ? resolvedPath : ".";
      },
      normalize(path4) {
        validateString(path4, "path");
        if (path4.length === 0) {
          return ".";
        }
        const isAbsolute2 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
        const trailingSeparator = path4.charCodeAt(path4.length - 1) === CHAR_FORWARD_SLASH;
        path4 = normalizeString(path4, !isAbsolute2, "/", isPosixPathSeparator);
        if (path4.length === 0) {
          if (isAbsolute2) {
            return "/";
          }
          return trailingSeparator ? "./" : ".";
        }
        if (trailingSeparator) {
          path4 += "/";
        }
        return isAbsolute2 ? `/${path4}` : path4;
      },
      isAbsolute(path4) {
        validateString(path4, "path");
        return path4.length > 0 && path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
      },
      join(...paths) {
        if (paths.length === 0) {
          return ".";
        }
        const path4 = [];
        for (let i = 0; i < paths.length; ++i) {
          const arg = paths[i];
          validateString(arg, "path");
          if (arg.length > 0) {
            path4.push(arg);
          }
        }
        if (path4.length === 0) {
          return ".";
        }
        return posix.normalize(path4.join("/"));
      },
      relative(from, to) {
        validateString(from, "from");
        validateString(to, "to");
        if (from === to) {
          return "";
        }
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) {
          return "";
        }
        const fromStart = 1;
        const fromEnd = from.length;
        const fromLen = fromEnd - fromStart;
        const toStart = 1;
        const toLen = to.length - toStart;
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
          const fromCode = from.charCodeAt(fromStart + i);
          if (fromCode !== to.charCodeAt(toStart + i)) {
            break;
          } else if (fromCode === CHAR_FORWARD_SLASH) {
            lastCommonSep = i;
          }
        }
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
              return to.slice(toStart + i + 1);
            }
            if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
        }
        let out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            out += out.length === 0 ? ".." : "/..";
          }
        }
        return `${out}${to.slice(toStart + lastCommonSep)}`;
      },
      toNamespacedPath(path4) {
        return path4;
      },
      dirname(path4) {
        validateString(path4, "path");
        if (path4.length === 0) {
          return ".";
        }
        const hasRoot = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let end = -1;
        let matchedSlash = true;
        for (let i = path4.length - 1; i >= 1; --i) {
          if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) {
          return hasRoot ? "/" : ".";
        }
        if (hasRoot && end === 1) {
          return "//";
        }
        return path4.slice(0, end);
      },
      basename(path4, suffix) {
        if (suffix !== void 0) {
          validateString(suffix, "suffix");
        }
        validateString(path4, "path");
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path4.length) {
          if (suffix === path4) {
            return "";
          }
          let extIdx = suffix.length - 1;
          let firstNonSlashEnd = -1;
          for (i = path4.length - 1; i >= 0; --i) {
            const code = path4.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === suffix.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) {
            end = firstNonSlashEnd;
          } else if (end === -1) {
            end = path4.length;
          }
          return path4.slice(start, end);
        }
        for (i = path4.length - 1; i >= 0; --i) {
          if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) {
          return "";
        }
        return path4.slice(start, end);
      },
      extname(path4) {
        validateString(path4, "path");
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        for (let i = path4.length - 1; i >= 0; --i) {
          const char = path4[i];
          if (char === "/") {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (char === ".") {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path4.slice(startDot, end);
      },
      format: _format2.bind(null, "/"),
      parse(path4) {
        validateString(path4, "path");
        const ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path4.length === 0) {
          return ret;
        }
        const isAbsolute2 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let start;
        if (isAbsolute2) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path4.length - 1;
        let preDotState = 0;
        for (; i >= start; --i) {
          const code = path4.charCodeAt(i);
          if (code === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (end !== -1) {
          const start2 = startPart === 0 && isAbsolute2 ? 1 : startPart;
          if (startDot === -1 || // We saw a non-dot character immediately before the dot
          preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
          preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            ret.base = ret.name = path4.slice(start2, end);
          } else {
            ret.name = path4.slice(start2, startDot);
            ret.base = path4.slice(start2, end);
            ret.ext = path4.slice(startDot, end);
          }
        }
        if (startPart > 0) {
          ret.dir = path4.slice(0, startPart - 1);
        } else if (isAbsolute2) {
          ret.dir = "/";
        }
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.win32 = win32.win32 = win32;
    posix.posix = win32.posix = posix;
    normalize = platformIsWin32 ? win32.normalize : posix.normalize;
    isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute;
    join3 = platformIsWin32 ? win32.join : posix.join;
    resolve = platformIsWin32 ? win32.resolve : posix.resolve;
    relative2 = platformIsWin32 ? win32.relative : posix.relative;
    dirname3 = platformIsWin32 ? win32.dirname : posix.dirname;
    basename = platformIsWin32 ? win32.basename : posix.basename;
    extname = platformIsWin32 ? win32.extname : posix.extname;
    format = platformIsWin32 ? win32.format : posix.format;
    parse = platformIsWin32 ? win32.parse : posix.parse;
    toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath;
    sep = platformIsWin32 ? win32.sep : posix.sep;
    delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter;
  }
});

// out-build/vs/base/common/ports.js
function randomPort() {
  const min = 1025;
  const max = 65535;
  return min + Math.floor((max - min) * Math.random());
}
var init_ports = __esm({
  "out-build/vs/base/common/ports.js"() {
    "use strict";
  }
});

// out-build/vs/base/common/cancellation.js
var shortcutEvent, CancellationToken, MutableToken, CancellationTokenSource;
var init_cancellation = __esm({
  "out-build/vs/base/common/cancellation.js"() {
    "use strict";
    init_event();
    shortcutEvent = Object.freeze(function(callback, context) {
      const handle = setTimeout(callback.bind(context), 0);
      return { dispose() {
        clearTimeout(handle);
      } };
    });
    (function(CancellationToken2) {
      function isCancellationToken(thing) {
        if (thing === CancellationToken2.None || thing === CancellationToken2.Cancelled) {
          return true;
        }
        if (thing instanceof MutableToken) {
          return true;
        }
        if (!thing || typeof thing !== "object") {
          return false;
        }
        return typeof thing.isCancellationRequested === "boolean" && typeof thing.onCancellationRequested === "function";
      }
      CancellationToken2.isCancellationToken = isCancellationToken;
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
      });
    })(CancellationToken || (CancellationToken = {}));
    MutableToken = class {
      constructor() {
        this._isCancelled = false;
        this._emitter = null;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = null;
        }
      }
    };
    CancellationTokenSource = class {
      constructor(parent) {
        this._token = void 0;
        this._parentListener = void 0;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
      }
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else if (this._token instanceof MutableToken) {
          this._token.cancel();
        }
      }
      dispose(cancel = false) {
        if (cancel) {
          this.cancel();
        }
        this._parentListener?.dispose();
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
  }
});

// out-build/vs/base/common/cache.js
function identity(t) {
  return t;
}
var LRUCachedFunction;
var init_cache = __esm({
  "out-build/vs/base/common/cache.js"() {
    "use strict";
    init_cancellation();
    LRUCachedFunction = class {
      constructor(arg1, arg2) {
        this.lastCache = void 0;
        this.lastArgKey = void 0;
        if (typeof arg1 === "function") {
          this._fn = arg1;
          this._computeKey = identity;
        } else {
          this._fn = arg2;
          this._computeKey = arg1.getCacheKey;
        }
      }
      get(arg) {
        const key = this._computeKey(arg);
        if (this.lastArgKey !== key) {
          this.lastArgKey = key;
          this.lastCache = this._fn(arg);
        }
        return this.lastCache;
      }
    };
  }
});

// out-build/vs/base/common/lazy.js
var Lazy;
var init_lazy = __esm({
  "out-build/vs/base/common/lazy.js"() {
    "use strict";
    Lazy = class {
      constructor(executor) {
        this.executor = executor;
        this._didRun = false;
      }
      /**
       * True if the lazy value has been resolved.
       */
      get hasValue() {
        return this._didRun;
      }
      /**
       * Get the wrapped value.
       *
       * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
       * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
       */
      get value() {
        if (!this._didRun) {
          try {
            this._value = this.executor();
          } catch (err) {
            this._error = err;
          } finally {
            this._didRun = true;
          }
        }
        if (this._error) {
          throw this._error;
        }
        return this._value;
      }
      /**
       * Get the wrapped value without forcing evaluation.
       */
      get rawValue() {
        return this._value;
      }
    };
  }
});

// out-build/vs/base/common/strings.js
function escapeRegExpCharacters(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function ltrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length;
  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }
  let offset = 0;
  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }
  return haystack.substring(offset);
}
function rtrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length, haystackLen = haystack.length;
  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }
  let offset = haystackLen, idx = -1;
  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);
    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }
    if (idx === 0) {
      return "";
    }
    offset = idx;
  }
  return haystack.substring(0, offset);
}
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function compareSubstring(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    const codeA = a.charCodeAt(aStart);
    const codeB = b.charCodeAt(bStart);
    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function compareIgnoreCase(a, b) {
  return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
function compareSubstringIgnoreCase(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);
    if (codeA === codeB) {
      continue;
    }
    if (codeA >= 128 || codeB >= 128) {
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }
    if (isLowerAsciiLetter(codeA)) {
      codeA -= 32;
    }
    if (isLowerAsciiLetter(codeB)) {
      codeB -= 32;
    }
    const diff = codeA - codeB;
    if (diff === 0) {
      continue;
    }
    return diff;
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function isLowerAsciiLetter(code) {
  return code >= 97 && code <= 122;
}
function equalsIgnoreCase(a, b) {
  return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}
function startsWithIgnoreCase(str, candidate) {
  const candidateLength = candidate.length;
  if (candidate.length > str.length) {
    return false;
  }
  return compareSubstringIgnoreCase(str, candidate, 0, candidateLength) === 0;
}
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var UTF8_BOM_CHARACTER, GraphemeBreakType, GraphemeBreakTree, CodePoint, AmbiguousCharacters, InvisibleCharacters;
var init_strings = __esm({
  "out-build/vs/base/common/strings.js"() {
    "use strict";
    init_cache();
    init_lazy();
    UTF8_BOM_CHARACTER = String.fromCharCode(
      65279
      /* CharCode.UTF8_BOM */
    );
    (function(GraphemeBreakType2) {
      GraphemeBreakType2[GraphemeBreakType2["Other"] = 0] = "Other";
      GraphemeBreakType2[GraphemeBreakType2["Prepend"] = 1] = "Prepend";
      GraphemeBreakType2[GraphemeBreakType2["CR"] = 2] = "CR";
      GraphemeBreakType2[GraphemeBreakType2["LF"] = 3] = "LF";
      GraphemeBreakType2[GraphemeBreakType2["Control"] = 4] = "Control";
      GraphemeBreakType2[GraphemeBreakType2["Extend"] = 5] = "Extend";
      GraphemeBreakType2[GraphemeBreakType2["Regional_Indicator"] = 6] = "Regional_Indicator";
      GraphemeBreakType2[GraphemeBreakType2["SpacingMark"] = 7] = "SpacingMark";
      GraphemeBreakType2[GraphemeBreakType2["L"] = 8] = "L";
      GraphemeBreakType2[GraphemeBreakType2["V"] = 9] = "V";
      GraphemeBreakType2[GraphemeBreakType2["T"] = 10] = "T";
      GraphemeBreakType2[GraphemeBreakType2["LV"] = 11] = "LV";
      GraphemeBreakType2[GraphemeBreakType2["LVT"] = 12] = "LVT";
      GraphemeBreakType2[GraphemeBreakType2["ZWJ"] = 13] = "ZWJ";
      GraphemeBreakType2[GraphemeBreakType2["Extended_Pictographic"] = 14] = "Extended_Pictographic";
    })(GraphemeBreakType || (GraphemeBreakType = {}));
    GraphemeBreakTree = class _GraphemeBreakTree {
      static {
        this._INSTANCE = null;
      }
      static getInstance() {
        if (!_GraphemeBreakTree._INSTANCE) {
          _GraphemeBreakTree._INSTANCE = new _GraphemeBreakTree();
        }
        return _GraphemeBreakTree._INSTANCE;
      }
      constructor() {
        this._data = getGraphemeBreakRawData();
      }
      getGraphemeBreakType(codePoint) {
        if (codePoint < 32) {
          if (codePoint === 10) {
            return 3;
          }
          if (codePoint === 13) {
            return 2;
          }
          return 4;
        }
        if (codePoint < 127) {
          return 0;
        }
        const data = this._data;
        const nodeCount = data.length / 3;
        let nodeIndex = 1;
        while (nodeIndex <= nodeCount) {
          if (codePoint < data[3 * nodeIndex]) {
            nodeIndex = 2 * nodeIndex;
          } else if (codePoint > data[3 * nodeIndex + 1]) {
            nodeIndex = 2 * nodeIndex + 1;
          } else {
            return data[3 * nodeIndex + 2];
          }
        }
        return 0;
      }
    };
    (function(CodePoint2) {
      CodePoint2[CodePoint2["zwj"] = 8205] = "zwj";
      CodePoint2[CodePoint2["emojiVariantSelector"] = 65039] = "emojiVariantSelector";
      CodePoint2[CodePoint2["enclosingKeyCap"] = 8419] = "enclosingKeyCap";
      CodePoint2[CodePoint2["space"] = 32] = "space";
    })(CodePoint || (CodePoint = {}));
    AmbiguousCharacters = class _AmbiguousCharacters {
      static {
        this.ambiguousCharacterData = new Lazy(() => {
          return JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}');
        });
      }
      static {
        this.cache = new LRUCachedFunction({ getCacheKey: JSON.stringify }, (locales) => {
          function arrayToMap(arr) {
            const result = /* @__PURE__ */ new Map();
            for (let i = 0; i < arr.length; i += 2) {
              result.set(arr[i], arr[i + 1]);
            }
            return result;
          }
          function mergeMaps(map1, map2) {
            const result = new Map(map1);
            for (const [key, value] of map2) {
              result.set(key, value);
            }
            return result;
          }
          function intersectMaps(map1, map2) {
            if (!map1) {
              return map2;
            }
            const result = /* @__PURE__ */ new Map();
            for (const [key, value] of map1) {
              if (map2.has(key)) {
                result.set(key, value);
              }
            }
            return result;
          }
          const data = this.ambiguousCharacterData.value;
          let filteredLocales = locales.filter((l) => !l.startsWith("_") && l in data);
          if (filteredLocales.length === 0) {
            filteredLocales = ["_default"];
          }
          let languageSpecificMap = void 0;
          for (const locale of filteredLocales) {
            const map2 = arrayToMap(data[locale]);
            languageSpecificMap = intersectMaps(languageSpecificMap, map2);
          }
          const commonMap = arrayToMap(data["_common"]);
          const map = mergeMaps(commonMap, languageSpecificMap);
          return new _AmbiguousCharacters(map);
        });
      }
      static getInstance(locales) {
        return _AmbiguousCharacters.cache.get(Array.from(locales));
      }
      static {
        this._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((k) => !k.startsWith("_")));
      }
      static getLocales() {
        return _AmbiguousCharacters._locales.value;
      }
      constructor(confusableDictionary) {
        this.confusableDictionary = confusableDictionary;
      }
      isAmbiguous(codePoint) {
        return this.confusableDictionary.has(codePoint);
      }
      containsAmbiguousCharacter(str) {
        for (let i = 0; i < str.length; i++) {
          const codePoint = str.codePointAt(i);
          if (typeof codePoint === "number" && this.isAmbiguous(codePoint)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Returns the non basic ASCII code point that the given code point can be confused,
       * or undefined if such code point does note exist.
       */
      getPrimaryConfusable(codePoint) {
        return this.confusableDictionary.get(codePoint);
      }
      getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys());
      }
    };
    InvisibleCharacters = class _InvisibleCharacters {
      static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
      }
      static {
        this._data = void 0;
      }
      static getData() {
        if (!this._data) {
          this._data = new Set([...Object.values(_InvisibleCharacters.getRawData())].flat());
        }
        return this._data;
      }
      static isInvisibleCharacter(codePoint) {
        return _InvisibleCharacters.getData().has(codePoint);
      }
      static containsInvisibleCharacter(str) {
        for (let i = 0; i < str.length; i++) {
          const codePoint = str.codePointAt(i);
          if (typeof codePoint === "number" && (_InvisibleCharacters.isInvisibleCharacter(codePoint) || codePoint === 32)) {
            return true;
          }
        }
        return false;
      }
      static get codePoints() {
        return _InvisibleCharacters.getData();
      }
    };
  }
});

// out-build/vs/base/common/extpath.js
function isPathSeparator2(code) {
  return code === 47 || code === 92;
}
function toSlashes(osPath) {
  return osPath.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(osPath) {
  if (osPath.indexOf("/") === -1) {
    osPath = toSlashes(osPath);
  }
  if (/^[a-zA-Z]:(\/|$)/.test(osPath)) {
    osPath = "/" + osPath;
  }
  return osPath;
}
function getRoot(path4, sep2 = posix.sep) {
  if (!path4) {
    return "";
  }
  const len = path4.length;
  const firstLetter = path4.charCodeAt(0);
  if (isPathSeparator2(firstLetter)) {
    if (isPathSeparator2(path4.charCodeAt(1))) {
      if (!isPathSeparator2(path4.charCodeAt(2))) {
        let pos2 = 3;
        const start = pos2;
        for (; pos2 < len; pos2++) {
          if (isPathSeparator2(path4.charCodeAt(pos2))) {
            break;
          }
        }
        if (start !== pos2 && !isPathSeparator2(path4.charCodeAt(pos2 + 1))) {
          pos2 += 1;
          for (; pos2 < len; pos2++) {
            if (isPathSeparator2(path4.charCodeAt(pos2))) {
              return path4.slice(0, pos2 + 1).replace(/[\\/]/g, sep2);
            }
          }
        }
      }
    }
    return sep2;
  } else if (isWindowsDriveLetter(firstLetter)) {
    if (path4.charCodeAt(1) === 58) {
      if (isPathSeparator2(path4.charCodeAt(2))) {
        return path4.slice(0, 2) + sep2;
      } else {
        return path4.slice(0, 2);
      }
    }
  }
  let pos = path4.indexOf("://");
  if (pos !== -1) {
    pos += 3;
    for (; pos < len; pos++) {
      if (isPathSeparator2(path4.charCodeAt(pos))) {
        return path4.slice(0, pos + 1);
      }
    }
  }
  return "";
}
function isUNC(path4) {
  if (!isWindows2) {
    return false;
  }
  if (!path4 || path4.length < 5) {
    return false;
  }
  let code = path4.charCodeAt(0);
  if (code !== 92) {
    return false;
  }
  code = path4.charCodeAt(1);
  if (code !== 92) {
    return false;
  }
  let pos = 2;
  const start = pos;
  for (; pos < path4.length; pos++) {
    code = path4.charCodeAt(pos);
    if (code === 92) {
      break;
    }
  }
  if (start === pos) {
    return false;
  }
  code = path4.charCodeAt(pos + 1);
  if (isNaN(code) || code === 92) {
    return false;
  }
  return true;
}
function isEqual(pathA, pathB, ignoreCase) {
  const identityEquals = pathA === pathB;
  if (!ignoreCase || identityEquals) {
    return identityEquals;
  }
  if (!pathA || !pathB) {
    return false;
  }
  return equalsIgnoreCase(pathA, pathB);
}
function isEqualOrParent(base, parentCandidate, ignoreCase, separator = sep) {
  if (base === parentCandidate) {
    return true;
  }
  if (!base || !parentCandidate) {
    return false;
  }
  if (parentCandidate.length > base.length) {
    return false;
  }
  if (ignoreCase) {
    const beginsWith = startsWithIgnoreCase(base, parentCandidate);
    if (!beginsWith) {
      return false;
    }
    if (parentCandidate.length === base.length) {
      return true;
    }
    let sepOffset = parentCandidate.length;
    if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
      sepOffset--;
    }
    return base.charAt(sepOffset) === separator;
  }
  if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
    parentCandidate += separator;
  }
  return base.indexOf(parentCandidate) === 0;
}
function isWindowsDriveLetter(char0) {
  return char0 >= 65 && char0 <= 90 || char0 >= 97 && char0 <= 122;
}
function isRootOrDriveLetter(path4) {
  const pathNormalized = normalize(path4);
  if (isWindows2) {
    if (path4.length > 3) {
      return false;
    }
    return hasDriveLetter(pathNormalized) && (path4.length === 2 || pathNormalized.charCodeAt(2) === 92);
  }
  return pathNormalized === posix.sep;
}
function hasDriveLetter(path4, isWindowsOS = isWindows2) {
  if (isWindowsOS) {
    return isWindowsDriveLetter(path4.charCodeAt(0)) && path4.charCodeAt(1) === 58;
  }
  return false;
}
function randomPath(parent, prefix, randomLength = 8) {
  let suffix = "";
  for (let i = 0; i < randomLength; i++) {
    let pathCharsTouse;
    if (i === 0 && isWindows2 && !prefix && (randomLength === 3 || randomLength === 4)) {
      pathCharsTouse = windowsSafePathFirstChars;
    } else {
      pathCharsTouse = pathChars;
    }
    suffix += pathCharsTouse.charAt(Math.floor(Math.random() * pathCharsTouse.length));
  }
  let randomFileName;
  if (prefix) {
    randomFileName = `${prefix}-${suffix}`;
  } else {
    randomFileName = suffix;
  }
  if (parent) {
    return join3(parent, randomFileName);
  }
  return randomFileName;
}
var pathChars, windowsSafePathFirstChars;
var init_extpath = __esm({
  "out-build/vs/base/common/extpath.js"() {
    "use strict";
    init_path();
    init_platform();
    init_strings();
    init_types();
    pathChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    windowsSafePathFirstChars = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
  }
});

// out-build/vs/base/common/uri.js
function _validateUri(ret, _strict) {
  if (!ret.scheme && _strict) {
    throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
  }
  if (ret.scheme && !_schemePattern.test(ret.scheme)) {
    throw new Error("[UriError]: Scheme contains illegal characters.");
  }
  if (ret.path) {
    if (ret.authority) {
      if (!_singleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
    } else {
      if (_doubleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
  }
}
function _schemeFix(scheme, _strict) {
  if (!scheme && !_strict) {
    return "file";
  }
  return scheme;
}
function _referenceResolution(scheme, path4) {
  switch (scheme) {
    case "https":
    case "http":
    case "file":
      if (!path4) {
        path4 = _slash;
      } else if (path4[0] !== _slash) {
        path4 = _slash + path4;
      }
      break;
  }
  return path4;
}
function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
  let res = void 0;
  let nativeEncodePos = -1;
  for (let pos = 0; pos < uriComponent.length; pos++) {
    const code = uriComponent.charCodeAt(pos);
    if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 95 || code === 126 || isPath && code === 47 || isAuthority && code === 91 || isAuthority && code === 93 || isAuthority && code === 58) {
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
        nativeEncodePos = -1;
      }
      if (res !== void 0) {
        res += uriComponent.charAt(pos);
      }
    } else {
      if (res === void 0) {
        res = uriComponent.substr(0, pos);
      }
      const escaped = encodeTable[code];
      if (escaped !== void 0) {
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        }
        res += escaped;
      } else if (nativeEncodePos === -1) {
        nativeEncodePos = pos;
      }
    }
  }
  if (nativeEncodePos !== -1) {
    res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
  }
  return res !== void 0 ? res : uriComponent;
}
function encodeURIComponentMinimal(path4) {
  let res = void 0;
  for (let pos = 0; pos < path4.length; pos++) {
    const code = path4.charCodeAt(pos);
    if (code === 35 || code === 63) {
      if (res === void 0) {
        res = path4.substr(0, pos);
      }
      res += encodeTable[code];
    } else {
      if (res !== void 0) {
        res += path4[pos];
      }
    }
  }
  return res !== void 0 ? res : path4;
}
function uriToFsPath(uri, keepDriveLetterCasing) {
  let value;
  if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
    value = `//${uri.authority}${uri.path}`;
  } else if (uri.path.charCodeAt(0) === 47 && (uri.path.charCodeAt(1) >= 65 && uri.path.charCodeAt(1) <= 90 || uri.path.charCodeAt(1) >= 97 && uri.path.charCodeAt(1) <= 122) && uri.path.charCodeAt(2) === 58) {
    if (!keepDriveLetterCasing) {
      value = uri.path[1].toLowerCase() + uri.path.substr(2);
    } else {
      value = uri.path.substr(1);
    }
  } else {
    value = uri.path;
  }
  if (isWindows2) {
    value = value.replace(/\//g, "\\");
  }
  return value;
}
function _asFormatted(uri, skipEncoding) {
  const encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
  let res = "";
  let { scheme, authority, path: path4, query, fragment } = uri;
  if (scheme) {
    res += scheme;
    res += ":";
  }
  if (authority || scheme === "file") {
    res += _slash;
    res += _slash;
  }
  if (authority) {
    let idx = authority.indexOf("@");
    if (idx !== -1) {
      const userinfo = authority.substr(0, idx);
      authority = authority.substr(idx + 1);
      idx = userinfo.lastIndexOf(":");
      if (idx === -1) {
        res += encoder(userinfo, false, false);
      } else {
        res += encoder(userinfo.substr(0, idx), false, false);
        res += ":";
        res += encoder(userinfo.substr(idx + 1), false, true);
      }
      res += "@";
    }
    authority = authority.toLowerCase();
    idx = authority.lastIndexOf(":");
    if (idx === -1) {
      res += encoder(authority, false, true);
    } else {
      res += encoder(authority.substr(0, idx), false, true);
      res += authority.substr(idx);
    }
  }
  if (path4) {
    if (path4.length >= 3 && path4.charCodeAt(0) === 47 && path4.charCodeAt(2) === 58) {
      const code = path4.charCodeAt(1);
      if (code >= 65 && code <= 90) {
        path4 = `/${String.fromCharCode(code + 32)}:${path4.substr(3)}`;
      }
    } else if (path4.length >= 2 && path4.charCodeAt(1) === 58) {
      const code = path4.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        path4 = `${String.fromCharCode(code + 32)}:${path4.substr(2)}`;
      }
    }
    res += encoder(path4, true, false);
  }
  if (query) {
    res += "?";
    res += encoder(query, false, false);
  }
  if (fragment) {
    res += "#";
    res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
  }
  return res;
}
function decodeURIComponentGraceful(str) {
  try {
    return decodeURIComponent(str);
  } catch {
    if (str.length > 3) {
      return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
    } else {
      return str;
    }
  }
}
function percentDecode(str) {
  if (!str.match(_rEncodedAsHex)) {
    return str;
  }
  return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
}
var _schemePattern, _singleSlashStart, _doubleSlashStart, _empty, _slash, _regexp, URI, _pathSepMarker, Uri, encodeTable, _rEncodedAsHex;
var init_uri = __esm({
  "out-build/vs/base/common/uri.js"() {
    "use strict";
    init_path();
    init_platform();
    _schemePattern = /^\w[\w\d+.-]*$/;
    _singleSlashStart = /^\//;
    _doubleSlashStart = /^\/\//;
    _empty = "";
    _slash = "/";
    _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    URI = class _URI {
      static isUri(thing) {
        if (thing instanceof _URI) {
          return true;
        }
        if (!thing) {
          return false;
        }
        return typeof thing.authority === "string" && typeof thing.fragment === "string" && typeof thing.path === "string" && typeof thing.query === "string" && typeof thing.scheme === "string" && typeof thing.fsPath === "string" && typeof thing.with === "function" && typeof thing.toString === "function";
      }
      /**
       * @internal
       */
      constructor(schemeOrData, authority, path4, query, fragment, _strict = false) {
        if (typeof schemeOrData === "object") {
          this.scheme = schemeOrData.scheme || _empty;
          this.authority = schemeOrData.authority || _empty;
          this.path = schemeOrData.path || _empty;
          this.query = schemeOrData.query || _empty;
          this.fragment = schemeOrData.fragment || _empty;
        } else {
          this.scheme = _schemeFix(schemeOrData, _strict);
          this.authority = authority || _empty;
          this.path = _referenceResolution(this.scheme, path4 || _empty);
          this.query = query || _empty;
          this.fragment = fragment || _empty;
          _validateUri(this, _strict);
        }
      }
      // ---- filesystem path -----------------------
      /**
       * Returns a string representing the corresponding file system path of this URI.
       * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
       * platform specific path separator.
       *
       * * Will *not* validate the path for invalid characters and semantics.
       * * Will *not* look at the scheme of this URI.
       * * The result shall *not* be used for display purposes but for accessing a file on disk.
       *
       *
       * The *difference* to `URI#path` is the use of the platform specific separator and the handling
       * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
       *
       * ```ts
          const u = URI.parse('file://server/c$/folder/file.txt')
          u.authority === 'server'
          u.path === '/shares/c$/file.txt'
          u.fsPath === '\\server\c$\folder\file.txt'
      ```
       *
       * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
       * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
       * with URIs that represent files on disk (`file` scheme).
       */
      get fsPath() {
        return uriToFsPath(this, false);
      }
      // ---- modify to new -------------------------
      with(change) {
        if (!change) {
          return this;
        }
        let { scheme, authority, path: path4, query, fragment } = change;
        if (scheme === void 0) {
          scheme = this.scheme;
        } else if (scheme === null) {
          scheme = _empty;
        }
        if (authority === void 0) {
          authority = this.authority;
        } else if (authority === null) {
          authority = _empty;
        }
        if (path4 === void 0) {
          path4 = this.path;
        } else if (path4 === null) {
          path4 = _empty;
        }
        if (query === void 0) {
          query = this.query;
        } else if (query === null) {
          query = _empty;
        }
        if (fragment === void 0) {
          fragment = this.fragment;
        } else if (fragment === null) {
          fragment = _empty;
        }
        if (scheme === this.scheme && authority === this.authority && path4 === this.path && query === this.query && fragment === this.fragment) {
          return this;
        }
        return new Uri(scheme, authority, path4, query, fragment);
      }
      // ---- parse & validate ------------------------
      /**
       * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
       * `file:///usr/home`, or `scheme:with/path`.
       *
       * @param value A string which represents an URI (see `URI#toString`).
       */
      static parse(value, _strict = false) {
        const match = _regexp.exec(value);
        if (!match) {
          return new Uri(_empty, _empty, _empty, _empty, _empty);
        }
        return new Uri(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
      }
      /**
       * Creates a new URI from a file system path, e.g. `c:\my\files`,
       * `/usr/home`, or `\\server\share\some\path`.
       *
       * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
       * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
       * `URI.parse('file://' + path)` because the path might contain characters that are
       * interpreted (# and ?). See the following sample:
       * ```ts
      const good = URI.file('/coding/c#/project1');
      good.scheme === 'file';
      good.path === '/coding/c#/project1';
      good.fragment === '';
      const bad = URI.parse('file://' + '/coding/c#/project1');
      bad.scheme === 'file';
      bad.path === '/coding/c'; // path is now broken
      bad.fragment === '/project1';
      ```
       *
       * @param path A file system path (see `URI#fsPath`)
       */
      static file(path4) {
        let authority = _empty;
        if (isWindows2) {
          path4 = path4.replace(/\\/g, _slash);
        }
        if (path4[0] === _slash && path4[1] === _slash) {
          const idx = path4.indexOf(_slash, 2);
          if (idx === -1) {
            authority = path4.substring(2);
            path4 = _slash;
          } else {
            authority = path4.substring(2, idx);
            path4 = path4.substring(idx) || _slash;
          }
        }
        return new Uri("file", authority, path4, _empty, _empty);
      }
      /**
       * Creates new URI from uri components.
       *
       * Unless `strict` is `true` the scheme is defaults to be `file`. This function performs
       * validation and should be used for untrusted uri components retrieved from storage,
       * user input, command arguments etc
       */
      static from(components, strict) {
        const result = new Uri(components.scheme, components.authority, components.path, components.query, components.fragment, strict);
        return result;
      }
      /**
       * Join a URI path with path fragments and normalizes the resulting path.
       *
       * @param uri The input URI.
       * @param pathFragment The path fragment to add to the URI path.
       * @returns The resulting URI.
       */
      static joinPath(uri, ...pathFragment) {
        if (!uri.path) {
          throw new Error(`[UriError]: cannot call joinPath on URI without path`);
        }
        let newPath;
        if (isWindows2 && uri.scheme === "file") {
          newPath = _URI.file(win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
        } else {
          newPath = posix.join(uri.path, ...pathFragment);
        }
        return uri.with({ path: newPath });
      }
      // ---- printing/externalize ---------------------------
      /**
       * Creates a string representation for this URI. It's guaranteed that calling
       * `URI.parse` with the result of this function creates an URI which is equal
       * to this URI.
       *
       * * The result shall *not* be used for display purposes but for externalization or transport.
       * * The result will be encoded using the percentage encoding and encoding happens mostly
       * ignore the scheme-specific encoding rules.
       *
       * @param skipEncoding Do not encode the result, default is `false`
       */
      toString(skipEncoding = false) {
        return _asFormatted(this, skipEncoding);
      }
      toJSON() {
        return this;
      }
      static revive(data) {
        if (!data) {
          return data;
        } else if (data instanceof _URI) {
          return data;
        } else {
          const result = new Uri(data);
          result._formatted = data.external ?? null;
          result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
          return result;
        }
      }
      [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
      }
    };
    _pathSepMarker = isWindows2 ? 1 : void 0;
    Uri = class extends URI {
      constructor() {
        super(...arguments);
        this._formatted = null;
        this._fsPath = null;
      }
      get fsPath() {
        if (!this._fsPath) {
          this._fsPath = uriToFsPath(this, false);
        }
        return this._fsPath;
      }
      toString(skipEncoding = false) {
        if (!skipEncoding) {
          if (!this._formatted) {
            this._formatted = _asFormatted(this, false);
          }
          return this._formatted;
        } else {
          return _asFormatted(this, true);
        }
      }
      toJSON() {
        const res = {
          $mid: 1
          /* MarshalledId.Uri */
        };
        if (this._fsPath) {
          res.fsPath = this._fsPath;
          res._sep = _pathSepMarker;
        }
        if (this._formatted) {
          res.external = this._formatted;
        }
        if (this.path) {
          res.path = this.path;
        }
        if (this.scheme) {
          res.scheme = this.scheme;
        }
        if (this.authority) {
          res.authority = this.authority;
        }
        if (this.query) {
          res.query = this.query;
        }
        if (this.fragment) {
          res.fragment = this.fragment;
        }
        return res;
      }
    };
    encodeTable = {
      [
        58
        /* CharCode.Colon */
      ]: "%3A",
      // gen-delims
      [
        47
        /* CharCode.Slash */
      ]: "%2F",
      [
        63
        /* CharCode.QuestionMark */
      ]: "%3F",
      [
        35
        /* CharCode.Hash */
      ]: "%23",
      [
        91
        /* CharCode.OpenSquareBracket */
      ]: "%5B",
      [
        93
        /* CharCode.CloseSquareBracket */
      ]: "%5D",
      [
        64
        /* CharCode.AtSign */
      ]: "%40",
      [
        33
        /* CharCode.ExclamationMark */
      ]: "%21",
      // sub-delims
      [
        36
        /* CharCode.DollarSign */
      ]: "%24",
      [
        38
        /* CharCode.Ampersand */
      ]: "%26",
      [
        39
        /* CharCode.SingleQuote */
      ]: "%27",
      [
        40
        /* CharCode.OpenParen */
      ]: "%28",
      [
        41
        /* CharCode.CloseParen */
      ]: "%29",
      [
        42
        /* CharCode.Asterisk */
      ]: "%2A",
      [
        43
        /* CharCode.Plus */
      ]: "%2B",
      [
        44
        /* CharCode.Comma */
      ]: "%2C",
      [
        59
        /* CharCode.Semicolon */
      ]: "%3B",
      [
        61
        /* CharCode.Equals */
      ]: "%3D",
      [
        32
        /* CharCode.Space */
      ]: "%20"
    };
    _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  }
});

// out-build/vs/base/common/network.js
function getServerProductSegment(product3) {
  return `${product3.quality ?? "oss"}-${product3.commit ?? "dev"}`;
}
var Schemas, connectionTokenQueryName, RemoteAuthoritiesImpl, RemoteAuthorities, VSCODE_AUTHORITY, FileAccessImpl, FileAccess, CacheControlheaders, COI;
var init_network = __esm({
  "out-build/vs/base/common/network.js"() {
    "use strict";
    init_errors();
    init_platform();
    init_strings();
    init_uri();
    init_path();
    (function(Schemas2) {
      Schemas2.inMemory = "inmemory";
      Schemas2.vscode = "vscode";
      Schemas2.internal = "private";
      Schemas2.walkThrough = "walkThrough";
      Schemas2.walkThroughSnippet = "walkThroughSnippet";
      Schemas2.http = "http";
      Schemas2.https = "https";
      Schemas2.file = "file";
      Schemas2.mailto = "mailto";
      Schemas2.untitled = "untitled";
      Schemas2.data = "data";
      Schemas2.command = "command";
      Schemas2.vscodeRemote = "vscode-remote";
      Schemas2.vscodeRemoteResource = "vscode-remote-resource";
      Schemas2.vscodeManagedRemoteResource = "vscode-managed-remote-resource";
      Schemas2.vscodeUserData = "vscode-userdata";
      Schemas2.vscodeCustomEditor = "vscode-custom-editor";
      Schemas2.vscodeNotebookCell = "vscode-notebook-cell";
      Schemas2.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata";
      Schemas2.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff";
      Schemas2.vscodeNotebookCellOutput = "vscode-notebook-cell-output";
      Schemas2.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff";
      Schemas2.vscodeNotebookMetadata = "vscode-notebook-metadata";
      Schemas2.vscodeInteractiveInput = "vscode-interactive-input";
      Schemas2.vscodeSettings = "vscode-settings";
      Schemas2.vscodeWorkspaceTrust = "vscode-workspace-trust";
      Schemas2.vscodeTerminal = "vscode-terminal";
      Schemas2.vscodeChatCodeBlock = "vscode-chat-code-block";
      Schemas2.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block";
      Schemas2.vscodeChatSesssion = "vscode-chat-editor";
      Schemas2.webviewPanel = "webview-panel";
      Schemas2.vscodeWebview = "vscode-webview";
      Schemas2.extension = "extension";
      Schemas2.vscodeFileResource = "vscode-file";
      Schemas2.tmp = "tmp";
      Schemas2.vsls = "vsls";
      Schemas2.vscodeSourceControl = "vscode-scm";
      Schemas2.commentsInput = "comment";
      Schemas2.codeSetting = "code-setting";
      Schemas2.outputChannel = "output";
      Schemas2.accessibleView = "accessible-view";
    })(Schemas || (Schemas = {}));
    connectionTokenQueryName = "tkn";
    RemoteAuthoritiesImpl = class {
      constructor() {
        this._hosts = /* @__PURE__ */ Object.create(null);
        this._ports = /* @__PURE__ */ Object.create(null);
        this._connectionTokens = /* @__PURE__ */ Object.create(null);
        this._preferredWebSchema = "http";
        this._delegate = null;
        this._serverRootPath = "/";
      }
      setPreferredWebSchema(schema) {
        this._preferredWebSchema = schema;
      }
      setDelegate(delegate) {
        this._delegate = delegate;
      }
      setServerRootPath(product3, serverBasePath) {
        this._serverRootPath = posix.join(serverBasePath ?? "/", getServerProductSegment(product3));
      }
      getServerRootPath() {
        return this._serverRootPath;
      }
      get _remoteResourcesPath() {
        return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
      }
      set(authority, host, port) {
        this._hosts[authority] = host;
        this._ports[authority] = port;
      }
      setConnectionToken(authority, connectionToken) {
        this._connectionTokens[authority] = connectionToken;
      }
      getPreferredWebSchema() {
        return this._preferredWebSchema;
      }
      rewrite(uri) {
        if (this._delegate) {
          try {
            return this._delegate(uri);
          } catch (err) {
            onUnexpectedError(err);
            return uri;
          }
        }
        const authority = uri.authority;
        let host = this._hosts[authority];
        if (host && host.indexOf(":") !== -1 && host.indexOf("[") === -1) {
          host = `[${host}]`;
        }
        const port = this._ports[authority];
        const connectionToken = this._connectionTokens[authority];
        let query = `path=${encodeURIComponent(uri.path)}`;
        if (typeof connectionToken === "string") {
          query += `&${connectionTokenQueryName}=${encodeURIComponent(connectionToken)}`;
        }
        return URI.from({
          scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource,
          authority: `${host}:${port}`,
          path: this._remoteResourcesPath,
          query
        });
      }
    };
    RemoteAuthorities = new RemoteAuthoritiesImpl();
    VSCODE_AUTHORITY = "vscode-app";
    FileAccessImpl = class _FileAccessImpl {
      static {
        this.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
      }
      /**
       * Returns a URI to use in contexts where the browser is responsible
       * for loading (e.g. fetch()) or when used within the DOM.
       *
       * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
       */
      asBrowserUri(resourcePath) {
        const uri = this.toUri(resourcePath);
        return this.uriToBrowserUri(uri);
      }
      /**
       * Returns a URI to use in contexts where the browser is responsible
       * for loading (e.g. fetch()) or when used within the DOM.
       *
       * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
       */
      uriToBrowserUri(uri) {
        if (uri.scheme === Schemas.vscodeRemote) {
          return RemoteAuthorities.rewrite(uri);
        }
        if (
          // ...only ever for `file` resources
          uri.scheme === Schemas.file && // ...and we run in native environments
          (isNative || // ...or web worker extensions on desktop
          webWorkerOrigin === `${Schemas.vscodeFileResource}://${_FileAccessImpl.FALLBACK_AUTHORITY}`)
        ) {
          return uri.with({
            scheme: Schemas.vscodeFileResource,
            // We need to provide an authority here so that it can serve
            // as origin for network and loading matters in chromium.
            // If the URI is not coming with an authority already, we
            // add our own
            authority: uri.authority || _FileAccessImpl.FALLBACK_AUTHORITY,
            query: null,
            fragment: null
          });
        }
        return uri;
      }
      /**
       * Returns the `file` URI to use in contexts where node.js
       * is responsible for loading.
       */
      asFileUri(resourcePath) {
        const uri = this.toUri(resourcePath);
        return this.uriToFileUri(uri);
      }
      /**
       * Returns the `file` URI to use in contexts where node.js
       * is responsible for loading.
       */
      uriToFileUri(uri) {
        if (uri.scheme === Schemas.vscodeFileResource) {
          return uri.with({
            scheme: Schemas.file,
            // Only preserve the `authority` if it is different from
            // our fallback authority. This ensures we properly preserve
            // Windows UNC paths that come with their own authority.
            authority: uri.authority !== _FileAccessImpl.FALLBACK_AUTHORITY ? uri.authority : null,
            query: null,
            fragment: null
          });
        }
        return uri;
      }
      toUri(uriOrModule, moduleIdToUrl) {
        if (URI.isUri(uriOrModule)) {
          return uriOrModule;
        }
        if (globalThis._VSCODE_FILE_ROOT) {
          const rootUriOrPath = globalThis._VSCODE_FILE_ROOT;
          if (/^\w[\w\d+.-]*:\/\//.test(rootUriOrPath)) {
            return URI.joinPath(URI.parse(rootUriOrPath, true), uriOrModule);
          }
          const modulePath = join3(rootUriOrPath, uriOrModule);
          return URI.file(modulePath);
        }
        return URI.parse(moduleIdToUrl.toUrl(uriOrModule));
      }
    };
    FileAccess = new FileAccessImpl();
    CacheControlheaders = Object.freeze({
      "Cache-Control": "no-cache, no-store"
    });
    (function(COI2) {
      const coiHeaders = /* @__PURE__ */ new Map([
        ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
        ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
        ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
      ]);
      COI2.CoopAndCoep = Object.freeze(coiHeaders.get("3"));
      const coiSearchParamName = "vscode-coi";
      function getHeadersFromQuery(url) {
        let params;
        if (typeof url === "string") {
          params = new URL(url).searchParams;
        } else if (url instanceof URL) {
          params = url.searchParams;
        } else if (URI.isUri(url)) {
          params = new URL(url.toString(true)).searchParams;
        }
        const value = params?.get(coiSearchParamName);
        if (!value) {
          return void 0;
        }
        return coiHeaders.get(value);
      }
      COI2.getHeadersFromQuery = getHeadersFromQuery;
      function addSearchParam(urlOrSearch, coop, coep) {
        if (!globalThis.crossOriginIsolated) {
          return;
        }
        const value = coop && coep ? "3" : coep ? "2" : "1";
        if (urlOrSearch instanceof URLSearchParams) {
          urlOrSearch.set(coiSearchParamName, value);
        } else {
          urlOrSearch[coiSearchParamName] = value;
        }
      }
      COI2.addSearchParam = addSearchParam;
    })(COI || (COI = {}));
  }
});

// out-build/vs/base/common/resources.js
function originalFSPath(uri) {
  return uriToFsPath(uri, true);
}
var ExtUri, extUri, extUriBiasedIgnorePathCase, extUriIgnorePathCase, isEqual2, isEqualOrParent2, getComparisonKey, basenameOrAuthority, basename2, extname2, dirname4, joinPath, normalizePath, relativePath, resolvePath, isAbsolutePath, isEqualAuthority, hasTrailingPathSeparator, removeTrailingPathSeparator, addTrailingPathSeparator, DataUri;
var init_resources = __esm({
  "out-build/vs/base/common/resources.js"() {
    "use strict";
    init_extpath();
    init_network();
    init_path();
    init_platform();
    init_strings();
    init_uri();
    ExtUri = class {
      constructor(_ignorePathCasing) {
        this._ignorePathCasing = _ignorePathCasing;
      }
      compare(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
          return 0;
        }
        return compare(this.getComparisonKey(uri1, ignoreFragment), this.getComparisonKey(uri2, ignoreFragment));
      }
      isEqual(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
          return true;
        }
        if (!uri1 || !uri2) {
          return false;
        }
        return this.getComparisonKey(uri1, ignoreFragment) === this.getComparisonKey(uri2, ignoreFragment);
      }
      getComparisonKey(uri, ignoreFragment = false) {
        return uri.with({
          path: this._ignorePathCasing(uri) ? uri.path.toLowerCase() : void 0,
          fragment: ignoreFragment ? null : void 0
        }).toString();
      }
      ignorePathCasing(uri) {
        return this._ignorePathCasing(uri);
      }
      isEqualOrParent(base, parentCandidate, ignoreFragment = false) {
        if (base.scheme === parentCandidate.scheme) {
          if (base.scheme === Schemas.file) {
            return isEqualOrParent(originalFSPath(base), originalFSPath(parentCandidate), this._ignorePathCasing(base)) && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
          }
          if (isEqualAuthority(base.authority, parentCandidate.authority)) {
            return isEqualOrParent(base.path, parentCandidate.path, this._ignorePathCasing(base), "/") && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
          }
        }
        return false;
      }
      // --- path math
      joinPath(resource, ...pathFragment) {
        return URI.joinPath(resource, ...pathFragment);
      }
      basenameOrAuthority(resource) {
        return basename2(resource) || resource.authority;
      }
      basename(resource) {
        return posix.basename(resource.path);
      }
      extname(resource) {
        return posix.extname(resource.path);
      }
      dirname(resource) {
        if (resource.path.length === 0) {
          return resource;
        }
        let dirname6;
        if (resource.scheme === Schemas.file) {
          dirname6 = URI.file(dirname3(originalFSPath(resource))).path;
        } else {
          dirname6 = posix.dirname(resource.path);
          if (resource.authority && dirname6.length && dirname6.charCodeAt(0) !== 47) {
            console.error(`dirname("${resource.toString})) resulted in a relative path`);
            dirname6 = "/";
          }
        }
        return resource.with({
          path: dirname6
        });
      }
      normalizePath(resource) {
        if (!resource.path.length) {
          return resource;
        }
        let normalizedPath;
        if (resource.scheme === Schemas.file) {
          normalizedPath = URI.file(normalize(originalFSPath(resource))).path;
        } else {
          normalizedPath = posix.normalize(resource.path);
        }
        return resource.with({
          path: normalizedPath
        });
      }
      relativePath(from, to) {
        if (from.scheme !== to.scheme || !isEqualAuthority(from.authority, to.authority)) {
          return void 0;
        }
        if (from.scheme === Schemas.file) {
          const relativePath2 = relative2(originalFSPath(from), originalFSPath(to));
          return isWindows2 ? toSlashes(relativePath2) : relativePath2;
        }
        let fromPath = from.path || "/";
        const toPath = to.path || "/";
        if (this._ignorePathCasing(from)) {
          let i = 0;
          for (const len = Math.min(fromPath.length, toPath.length); i < len; i++) {
            if (fromPath.charCodeAt(i) !== toPath.charCodeAt(i)) {
              if (fromPath.charAt(i).toLowerCase() !== toPath.charAt(i).toLowerCase()) {
                break;
              }
            }
          }
          fromPath = toPath.substr(0, i) + fromPath.substr(i);
        }
        return posix.relative(fromPath, toPath);
      }
      resolvePath(base, path4) {
        if (base.scheme === Schemas.file) {
          const newURI = URI.file(resolve(originalFSPath(base), path4));
          return base.with({
            authority: newURI.authority,
            path: newURI.path
          });
        }
        path4 = toPosixPath(path4);
        return base.with({
          path: posix.resolve(base.path, path4)
        });
      }
      // --- misc
      isAbsolutePath(resource) {
        return !!resource.path && resource.path[0] === "/";
      }
      isEqualAuthority(a1, a2) {
        return a1 === a2 || a1 !== void 0 && a2 !== void 0 && equalsIgnoreCase(a1, a2);
      }
      hasTrailingPathSeparator(resource, sep2 = sep) {
        if (resource.scheme === Schemas.file) {
          const fsp = originalFSPath(resource);
          return fsp.length > getRoot(fsp).length && fsp[fsp.length - 1] === sep2;
        } else {
          const p = resource.path;
          return p.length > 1 && p.charCodeAt(p.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(resource.fsPath);
        }
      }
      removeTrailingPathSeparator(resource, sep2 = sep) {
        if (hasTrailingPathSeparator(resource, sep2)) {
          return resource.with({ path: resource.path.substr(0, resource.path.length - 1) });
        }
        return resource;
      }
      addTrailingPathSeparator(resource, sep2 = sep) {
        let isRootSep = false;
        if (resource.scheme === Schemas.file) {
          const fsp = originalFSPath(resource);
          isRootSep = fsp !== void 0 && fsp.length === getRoot(fsp).length && fsp[fsp.length - 1] === sep2;
        } else {
          sep2 = "/";
          const p = resource.path;
          isRootSep = p.length === 1 && p.charCodeAt(p.length - 1) === 47;
        }
        if (!isRootSep && !hasTrailingPathSeparator(resource, sep2)) {
          return resource.with({ path: resource.path + "/" });
        }
        return resource;
      }
    };
    extUri = new ExtUri(() => false);
    extUriBiasedIgnorePathCase = new ExtUri((uri) => {
      return uri.scheme === Schemas.file ? !isLinux : true;
    });
    extUriIgnorePathCase = new ExtUri((_) => true);
    isEqual2 = extUri.isEqual.bind(extUri);
    isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri);
    getComparisonKey = extUri.getComparisonKey.bind(extUri);
    basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri);
    basename2 = extUri.basename.bind(extUri);
    extname2 = extUri.extname.bind(extUri);
    dirname4 = extUri.dirname.bind(extUri);
    joinPath = extUri.joinPath.bind(extUri);
    normalizePath = extUri.normalizePath.bind(extUri);
    relativePath = extUri.relativePath.bind(extUri);
    resolvePath = extUri.resolvePath.bind(extUri);
    isAbsolutePath = extUri.isAbsolutePath.bind(extUri);
    isEqualAuthority = extUri.isEqualAuthority.bind(extUri);
    hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri);
    removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri);
    addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri);
    (function(DataUri2) {
      DataUri2.META_DATA_LABEL = "label";
      DataUri2.META_DATA_DESCRIPTION = "description";
      DataUri2.META_DATA_SIZE = "size";
      DataUri2.META_DATA_MIME = "mime";
      function parseMetaData(dataUri) {
        const metadata = /* @__PURE__ */ new Map();
        const meta = dataUri.path.substring(dataUri.path.indexOf(";") + 1, dataUri.path.lastIndexOf(";"));
        meta.split(";").forEach((property) => {
          const [key, value] = property.split(":");
          if (key && value) {
            metadata.set(key, value);
          }
        });
        const mime = dataUri.path.substring(0, dataUri.path.indexOf(";"));
        if (mime) {
          metadata.set(DataUri2.META_DATA_MIME, mime);
        }
        return metadata;
      }
      DataUri2.parseMetaData = parseMetaData;
    })(DataUri || (DataUri = {}));
  }
});

// out-build/vs/base/common/symbols.js
var MicrotaskDelay;
var init_symbols = __esm({
  "out-build/vs/base/common/symbols.js"() {
    "use strict";
    MicrotaskDelay = Symbol("MicrotaskDelay");
  }
});

// out-build/vs/base/common/async.js
function isThenable(obj) {
  return !!obj && typeof obj.then === "function";
}
function createCancelablePromise(callback) {
  const source = new CancellationTokenSource();
  const thenable = callback(source.token);
  const promise = new Promise((resolve2, reject) => {
    const subscription = source.token.onCancellationRequested(() => {
      subscription.dispose();
      reject(new CancellationError());
    });
    Promise.resolve(thenable).then((value) => {
      subscription.dispose();
      source.dispose();
      resolve2(value);
    }, (err) => {
      subscription.dispose();
      source.dispose();
      reject(err);
    });
  });
  return new class {
    cancel() {
      source.cancel();
      source.dispose();
    }
    then(resolve2, reject) {
      return promise.then(resolve2, reject);
    }
    catch(reject) {
      return this.then(void 0, reject);
    }
    finally(onfinally) {
      return promise.finally(onfinally);
    }
  }();
}
function timeout(millis, token) {
  if (!token) {
    return createCancelablePromise((token2) => timeout(millis, token2));
  }
  return new Promise((resolve2, reject) => {
    const handle = setTimeout(() => {
      disposable.dispose();
      resolve2();
    }, millis);
    const disposable = token.onCancellationRequested(() => {
      clearTimeout(handle);
      disposable.dispose();
      reject(new CancellationError());
    });
  });
}
var Limiter, Queue, ResourceQueue, RunOnceScheduler, RunOnceWorker, ThrottledWorker, runWhenGlobalIdle, _runWhenIdle, DeferredOutcome, DeferredPromise, Promises, AsyncIterableSourceState, AsyncIterableObject;
var init_async = __esm({
  "out-build/vs/base/common/async.js"() {
    "use strict";
    init_cancellation();
    init_errors();
    init_event();
    init_lifecycle();
    init_resources();
    init_platform();
    init_symbols();
    init_lazy();
    Limiter = class {
      constructor(maxDegreeOfParalellism) {
        this._size = 0;
        this._isDisposed = false;
        this.maxDegreeOfParalellism = maxDegreeOfParalellism;
        this.outstandingPromises = [];
        this.runningPromises = 0;
        this._onDrained = new Emitter();
      }
      /**
       *
       * @returns A promise that resolved when all work is done (onDrained) or when
       * there is nothing to do
       */
      whenIdle() {
        return this.size > 0 ? Event.toPromise(this.onDrained) : Promise.resolve();
      }
      get onDrained() {
        return this._onDrained.event;
      }
      get size() {
        return this._size;
      }
      queue(factory) {
        if (this._isDisposed) {
          throw new Error("Object has been disposed");
        }
        this._size++;
        return new Promise((c, e) => {
          this.outstandingPromises.push({ factory, c, e });
          this.consume();
        });
      }
      consume() {
        while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
          const iLimitedTask = this.outstandingPromises.shift();
          this.runningPromises++;
          const promise = iLimitedTask.factory();
          promise.then(iLimitedTask.c, iLimitedTask.e);
          promise.then(() => this.consumed(), () => this.consumed());
        }
      }
      consumed() {
        if (this._isDisposed) {
          return;
        }
        this.runningPromises--;
        if (--this._size === 0) {
          this._onDrained.fire();
        }
        if (this.outstandingPromises.length > 0) {
          this.consume();
        }
      }
      clear() {
        if (this._isDisposed) {
          throw new Error("Object has been disposed");
        }
        this.outstandingPromises.length = 0;
        this._size = this.runningPromises;
      }
      dispose() {
        this._isDisposed = true;
        this.outstandingPromises.length = 0;
        this._size = 0;
        this._onDrained.dispose();
      }
    };
    Queue = class extends Limiter {
      constructor() {
        super(1);
      }
    };
    ResourceQueue = class {
      constructor() {
        this.queues = /* @__PURE__ */ new Map();
        this.drainers = /* @__PURE__ */ new Set();
        this.drainListeners = void 0;
        this.drainListenerCount = 0;
      }
      async whenDrained() {
        if (this.isDrained()) {
          return;
        }
        const promise = new DeferredPromise();
        this.drainers.add(promise);
        return promise.p;
      }
      isDrained() {
        for (const [, queue] of this.queues) {
          if (queue.size > 0) {
            return false;
          }
        }
        return true;
      }
      queueSize(resource, extUri2 = extUri) {
        const key = extUri2.getComparisonKey(resource);
        return this.queues.get(key)?.size ?? 0;
      }
      queueFor(resource, factory, extUri2 = extUri) {
        const key = extUri2.getComparisonKey(resource);
        let queue = this.queues.get(key);
        if (!queue) {
          queue = new Queue();
          const drainListenerId = this.drainListenerCount++;
          const drainListener = Event.once(queue.onDrained)(() => {
            queue?.dispose();
            this.queues.delete(key);
            this.onDidQueueDrain();
            this.drainListeners?.deleteAndDispose(drainListenerId);
            if (this.drainListeners?.size === 0) {
              this.drainListeners.dispose();
              this.drainListeners = void 0;
            }
          });
          if (!this.drainListeners) {
            this.drainListeners = new DisposableMap();
          }
          this.drainListeners.set(drainListenerId, drainListener);
          this.queues.set(key, queue);
        }
        return queue.queue(factory);
      }
      onDidQueueDrain() {
        if (!this.isDrained()) {
          return;
        }
        this.releaseDrainers();
      }
      releaseDrainers() {
        for (const drainer of this.drainers) {
          drainer.complete();
        }
        this.drainers.clear();
      }
      dispose() {
        for (const [, queue] of this.queues) {
          queue.dispose();
        }
        this.queues.clear();
        this.releaseDrainers();
        this.drainListeners?.dispose();
      }
    };
    RunOnceScheduler = class {
      constructor(runner, delay) {
        this.timeoutToken = -1;
        this.runner = runner;
        this.timeout = delay;
        this.timeoutHandler = this.onTimeout.bind(this);
      }
      /**
       * Dispose RunOnceScheduler
       */
      dispose() {
        this.cancel();
        this.runner = null;
      }
      /**
       * Cancel current scheduled runner (if any).
       */
      cancel() {
        if (this.isScheduled()) {
          clearTimeout(this.timeoutToken);
          this.timeoutToken = -1;
        }
      }
      /**
       * Cancel previous runner (if any) & schedule a new runner.
       */
      schedule(delay = this.timeout) {
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
      }
      get delay() {
        return this.timeout;
      }
      set delay(value) {
        this.timeout = value;
      }
      /**
       * Returns true if scheduled.
       */
      isScheduled() {
        return this.timeoutToken !== -1;
      }
      flush() {
        if (this.isScheduled()) {
          this.cancel();
          this.doRun();
        }
      }
      onTimeout() {
        this.timeoutToken = -1;
        if (this.runner) {
          this.doRun();
        }
      }
      doRun() {
        this.runner?.();
      }
    };
    RunOnceWorker = class extends RunOnceScheduler {
      constructor(runner, timeout2) {
        super(runner, timeout2);
        this.units = [];
      }
      work(unit) {
        this.units.push(unit);
        if (!this.isScheduled()) {
          this.schedule();
        }
      }
      doRun() {
        const units = this.units;
        this.units = [];
        this.runner?.(units);
      }
      dispose() {
        this.units = [];
        super.dispose();
      }
    };
    ThrottledWorker = class extends Disposable {
      constructor(options, handler) {
        super();
        this.options = options;
        this.handler = handler;
        this.pendingWork = [];
        this.throttler = this._register(new MutableDisposable());
        this.disposed = false;
        this.lastExecutionTime = 0;
      }
      /**
       * The number of work units that are pending to be processed.
       */
      get pending() {
        return this.pendingWork.length;
      }
      /**
       * Add units to be worked on. Use `pending` to figure out
       * how many units are not yet processed after this method
       * was called.
       *
       * @returns whether the work was accepted or not. If the
       * worker is disposed, it will not accept any more work.
       * If the number of pending units would become larger
       * than `maxPendingWork`, more work will also not be accepted.
       */
      work(units) {
        if (this.disposed) {
          return false;
        }
        if (typeof this.options.maxBufferedWork === "number") {
          if (this.throttler.value) {
            if (this.pending + units.length > this.options.maxBufferedWork) {
              return false;
            }
          } else {
            if (this.pending + units.length - this.options.maxWorkChunkSize > this.options.maxBufferedWork) {
              return false;
            }
          }
        }
        for (const unit of units) {
          this.pendingWork.push(unit);
        }
        const timeSinceLastExecution = Date.now() - this.lastExecutionTime;
        if (!this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || timeSinceLastExecution >= this.options.throttleDelay)) {
          this.doWork();
        } else if (!this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits) {
          this.scheduleThrottler(Math.max(this.options.throttleDelay - timeSinceLastExecution, 0));
        } else {
        }
        return true;
      }
      doWork() {
        this.lastExecutionTime = Date.now();
        this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize));
        if (this.pendingWork.length > 0) {
          this.scheduleThrottler();
        }
      }
      scheduleThrottler(delay = this.options.throttleDelay) {
        this.throttler.value = new RunOnceScheduler(() => {
          this.throttler.clear();
          this.doWork();
        }, delay);
        this.throttler.value.schedule();
      }
      dispose() {
        super.dispose();
        this.disposed = true;
      }
    };
    (function() {
      if (typeof globalThis.requestIdleCallback !== "function" || typeof globalThis.cancelIdleCallback !== "function") {
        _runWhenIdle = (_targetWindow, runner, timeout2) => {
          setTimeout0(() => {
            if (disposed) {
              return;
            }
            const end = Date.now() + 15;
            const deadline = {
              didTimeout: true,
              timeRemaining() {
                return Math.max(0, end - Date.now());
              }
            };
            runner(Object.freeze(deadline));
          });
          let disposed = false;
          return {
            dispose() {
              if (disposed) {
                return;
              }
              disposed = true;
            }
          };
        };
      } else {
        _runWhenIdle = (targetWindow, runner, timeout2) => {
          const handle = targetWindow.requestIdleCallback(runner, typeof timeout2 === "number" ? { timeout: timeout2 } : void 0);
          let disposed = false;
          return {
            dispose() {
              if (disposed) {
                return;
              }
              disposed = true;
              targetWindow.cancelIdleCallback(handle);
            }
          };
        };
      }
      runWhenGlobalIdle = (runner, timeout2) => _runWhenIdle(globalThis, runner, timeout2);
    })();
    (function(DeferredOutcome2) {
      DeferredOutcome2[DeferredOutcome2["Resolved"] = 0] = "Resolved";
      DeferredOutcome2[DeferredOutcome2["Rejected"] = 1] = "Rejected";
    })(DeferredOutcome || (DeferredOutcome = {}));
    DeferredPromise = class {
      get isRejected() {
        return this.outcome?.outcome === 1;
      }
      get isResolved() {
        return this.outcome?.outcome === 0;
      }
      get isSettled() {
        return !!this.outcome;
      }
      get value() {
        return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
      }
      constructor() {
        this.p = new Promise((c, e) => {
          this.completeCallback = c;
          this.errorCallback = e;
        });
      }
      complete(value) {
        return new Promise((resolve2) => {
          this.completeCallback(value);
          this.outcome = { outcome: 0, value };
          resolve2();
        });
      }
      error(err) {
        return new Promise((resolve2) => {
          this.errorCallback(err);
          this.outcome = { outcome: 1, value: err };
          resolve2();
        });
      }
      cancel() {
        return this.error(new CancellationError());
      }
    };
    (function(Promises3) {
      async function settled(promises7) {
        let firstError = void 0;
        const result = await Promise.all(promises7.map((promise) => promise.then((value) => value, (error) => {
          if (!firstError) {
            firstError = error;
          }
          return void 0;
        })));
        if (typeof firstError !== "undefined") {
          throw firstError;
        }
        return result;
      }
      Promises3.settled = settled;
      function withAsyncBody(bodyFn) {
        return new Promise(async (resolve2, reject) => {
          try {
            await bodyFn(resolve2, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      Promises3.withAsyncBody = withAsyncBody;
    })(Promises || (Promises = {}));
    (function(AsyncIterableSourceState2) {
      AsyncIterableSourceState2[AsyncIterableSourceState2["Initial"] = 0] = "Initial";
      AsyncIterableSourceState2[AsyncIterableSourceState2["DoneOK"] = 1] = "DoneOK";
      AsyncIterableSourceState2[AsyncIterableSourceState2["DoneError"] = 2] = "DoneError";
    })(AsyncIterableSourceState || (AsyncIterableSourceState = {}));
    AsyncIterableObject = class _AsyncIterableObject {
      static fromArray(items) {
        return new _AsyncIterableObject((writer) => {
          writer.emitMany(items);
        });
      }
      static fromPromise(promise) {
        return new _AsyncIterableObject(async (emitter) => {
          emitter.emitMany(await promise);
        });
      }
      static fromPromisesResolveOrder(promises7) {
        return new _AsyncIterableObject(async (emitter) => {
          await Promise.all(promises7.map(async (p) => emitter.emitOne(await p)));
        });
      }
      static merge(iterables) {
        return new _AsyncIterableObject(async (emitter) => {
          await Promise.all(iterables.map(async (iterable) => {
            for await (const item of iterable) {
              emitter.emitOne(item);
            }
          }));
        });
      }
      static {
        this.EMPTY = _AsyncIterableObject.fromArray([]);
      }
      constructor(executor, onReturn) {
        this._state = 0;
        this._results = [];
        this._error = null;
        this._onReturn = onReturn;
        this._onStateChanged = new Emitter();
        queueMicrotask(async () => {
          const writer = {
            emitOne: (item) => this.emitOne(item),
            emitMany: (items) => this.emitMany(items),
            reject: (error) => this.reject(error)
          };
          try {
            await Promise.resolve(executor(writer));
            this.resolve();
          } catch (err) {
            this.reject(err);
          } finally {
            writer.emitOne = void 0;
            writer.emitMany = void 0;
            writer.reject = void 0;
          }
        });
      }
      [Symbol.asyncIterator]() {
        let i = 0;
        return {
          next: async () => {
            do {
              if (this._state === 2) {
                throw this._error;
              }
              if (i < this._results.length) {
                return { done: false, value: this._results[i++] };
              }
              if (this._state === 1) {
                return { done: true, value: void 0 };
              }
              await Event.toPromise(this._onStateChanged.event);
            } while (true);
          },
          return: async () => {
            this._onReturn?.();
            return { done: true, value: void 0 };
          }
        };
      }
      static map(iterable, mapFn) {
        return new _AsyncIterableObject(async (emitter) => {
          for await (const item of iterable) {
            emitter.emitOne(mapFn(item));
          }
        });
      }
      map(mapFn) {
        return _AsyncIterableObject.map(this, mapFn);
      }
      static filter(iterable, filterFn) {
        return new _AsyncIterableObject(async (emitter) => {
          for await (const item of iterable) {
            if (filterFn(item)) {
              emitter.emitOne(item);
            }
          }
        });
      }
      filter(filterFn) {
        return _AsyncIterableObject.filter(this, filterFn);
      }
      static coalesce(iterable) {
        return _AsyncIterableObject.filter(iterable, (item) => !!item);
      }
      coalesce() {
        return _AsyncIterableObject.coalesce(this);
      }
      static async toPromise(iterable) {
        const result = [];
        for await (const item of iterable) {
          result.push(item);
        }
        return result;
      }
      toPromise() {
        return _AsyncIterableObject.toPromise(this);
      }
      /**
       * The value will be appended at the end.
       *
       * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
       */
      emitOne(value) {
        if (this._state !== 0) {
          return;
        }
        this._results.push(value);
        this._onStateChanged.fire();
      }
      /**
       * The values will be appended at the end.
       *
       * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
       */
      emitMany(values) {
        if (this._state !== 0) {
          return;
        }
        this._results = this._results.concat(values);
        this._onStateChanged.fire();
      }
      /**
       * Calling `resolve()` will mark the result array as complete.
       *
       * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
       * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
       */
      resolve() {
        if (this._state !== 0) {
          return;
        }
        this._state = 1;
        this._onStateChanged.fire();
      }
      /**
       * Writing an error will permanently invalidate this iterable.
       * The current users will receive an error thrown, as will all future users.
       *
       * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
       */
      reject(error) {
        if (this._state !== 0) {
          return;
        }
        this._state = 2;
        this._error = error;
        this._onStateChanged.fire();
      }
    };
  }
});

// out-build/vs/base/common/normalization.js
function normalizeNFC(str) {
  return normalize2(str, "NFC", nfcCache);
}
function normalize2(str, form, normalizedCache) {
  if (!str) {
    return str;
  }
  const cached = normalizedCache.get(str);
  if (cached) {
    return cached;
  }
  let res;
  if (nonAsciiCharactersPattern.test(str)) {
    res = str.normalize(form);
  } else {
    res = str;
  }
  normalizedCache.set(str, res);
  return res;
}
var nfcCache, nfdCache, nonAsciiCharactersPattern;
var init_normalization = __esm({
  "out-build/vs/base/common/normalization.js"() {
    "use strict";
    init_map();
    nfcCache = new LRUCache(1e4);
    nfdCache = new LRUCache(1e4);
    nonAsciiCharactersPattern = /[^\u0000-\u0080]/;
  }
});

// out-build/vs/base/node/pfs.js
import * as fs4 from "fs";
import { tmpdir } from "os";
import { promisify } from "util";
async function rimraf(path4, mode = RimRafMode.UNLINK, moveToPath) {
  if (isRootOrDriveLetter(path4)) {
    throw new Error("rimraf - will refuse to recursively delete root");
  }
  if (mode === RimRafMode.UNLINK) {
    return rimrafUnlink(path4);
  }
  return rimrafMove(path4, moveToPath);
}
async function rimrafMove(path4, moveToPath = randomPath(tmpdir())) {
  try {
    try {
      await fs4.promises.rename(path4, moveToPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        return;
      }
      return rimrafUnlink(path4);
    }
    rimrafUnlink(moveToPath).catch((error) => {
    });
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
async function rimrafUnlink(path4) {
  return fs4.promises.rm(path4, { recursive: true, force: true, maxRetries: 3 });
}
async function readdir(path4, options) {
  return handleDirectoryChildren(await (options ? safeReaddirWithFileTypes(path4) : fs4.promises.readdir(path4)));
}
async function safeReaddirWithFileTypes(path4) {
  try {
    return await fs4.promises.readdir(path4, { withFileTypes: true });
  } catch (error) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", error);
  }
  const result = [];
  const children = await readdir(path4);
  for (const child of children) {
    let isFile = false;
    let isDirectory = false;
    let isSymbolicLink = false;
    try {
      const lstat = await fs4.promises.lstat(join3(path4, child));
      isFile = lstat.isFile();
      isDirectory = lstat.isDirectory();
      isSymbolicLink = lstat.isSymbolicLink();
    } catch (error) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", error);
    }
    result.push({
      name: child,
      isFile: () => isFile,
      isDirectory: () => isDirectory,
      isSymbolicLink: () => isSymbolicLink
    });
  }
  return result;
}
function handleDirectoryChildren(children) {
  return children.map((child) => {
    if (typeof child === "string") {
      return isMacintosh ? normalizeNFC(child) : child;
    }
    child.name = isMacintosh ? normalizeNFC(child.name) : child.name;
    return child;
  });
}
async function readDirsInDir(dirPath) {
  const children = await readdir(dirPath);
  const directories = [];
  for (const child of children) {
    if (await SymlinkSupport.existsDirectory(join3(dirPath, child))) {
      directories.push(child);
    }
  }
  return directories;
}
function whenDeleted(path4, intervalMs = 1e3) {
  return new Promise((resolve2) => {
    let running = false;
    const interval = setInterval(() => {
      if (!running) {
        running = true;
        fs4.access(path4, (err) => {
          running = false;
          if (err) {
            clearInterval(interval);
            resolve2(void 0);
          }
        });
      }
    }, intervalMs);
  });
}
function writeFile2(path4, data, options) {
  return writeQueues.queueFor(URI.file(path4), () => {
    const ensuredOptions = ensureWriteOptions(options);
    return new Promise((resolve2, reject) => doWriteFileAndFlush(path4, data, ensuredOptions, (error) => error ? reject(error) : resolve2()));
  }, extUriBiasedIgnorePathCase);
}
function configureFlushOnWrite(enabled) {
  canFlush = enabled;
}
function doWriteFileAndFlush(path4, data, options, callback) {
  if (!canFlush) {
    return fs4.writeFile(path4, data, { mode: options.mode, flag: options.flag }, callback);
  }
  fs4.open(path4, options.flag, options.mode, (openError, fd) => {
    if (openError) {
      return callback(openError);
    }
    fs4.writeFile(fd, data, (writeError) => {
      if (writeError) {
        return fs4.close(fd, () => callback(writeError));
      }
      fs4.fdatasync(fd, (syncError) => {
        if (syncError) {
          console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", syncError);
          configureFlushOnWrite(false);
        }
        return fs4.close(fd, (closeError) => callback(closeError));
      });
    });
  });
}
function writeFileSync2(path4, data, options) {
  const ensuredOptions = ensureWriteOptions(options);
  if (!canFlush) {
    return fs4.writeFileSync(path4, data, { mode: ensuredOptions.mode, flag: ensuredOptions.flag });
  }
  const fd = fs4.openSync(path4, ensuredOptions.flag, ensuredOptions.mode);
  try {
    fs4.writeFileSync(fd, data);
    try {
      fs4.fdatasyncSync(fd);
    } catch (syncError) {
      console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", syncError);
      configureFlushOnWrite(false);
    }
  } finally {
    fs4.closeSync(fd);
  }
}
function ensureWriteOptions(options) {
  if (!options) {
    return { mode: 438, flag: "w" };
  }
  return {
    mode: typeof options.mode === "number" ? options.mode : 438,
    flag: typeof options.flag === "string" ? options.flag : "w"
  };
}
async function rename(source, target, windowsRetryTimeout = 6e4) {
  if (source === target) {
    return;
  }
  try {
    if (isWindows2 && typeof windowsRetryTimeout === "number") {
      await renameWithRetry(source, target, Date.now(), windowsRetryTimeout);
    } else {
      await fs4.promises.rename(source, target);
    }
  } catch (error) {
    if (source.toLowerCase() !== target.toLowerCase() && error.code === "EXDEV" || source.endsWith(".")) {
      await copy(source, target, {
        preserveSymlinks: false
        /* copying to another device */
      });
      await rimraf(source, RimRafMode.MOVE);
    } else {
      throw error;
    }
  }
}
async function renameWithRetry(source, target, startTime, retryTimeout, attempt = 0) {
  try {
    return await fs4.promises.rename(source, target);
  } catch (error) {
    if (error.code !== "EACCES" && error.code !== "EPERM" && error.code !== "EBUSY") {
      throw error;
    }
    if (Date.now() - startTime >= retryTimeout) {
      console.error(`[node.js fs] rename failed after ${attempt} retries with error: ${error}`);
      throw error;
    }
    if (attempt === 0) {
      let abortRetry = false;
      try {
        const { stat } = await SymlinkSupport.stat(target);
        if (!stat.isFile()) {
          abortRetry = true;
        }
      } catch (error2) {
      }
      if (abortRetry) {
        throw error;
      }
    }
    await timeout(Math.min(100, attempt * 10));
    return renameWithRetry(source, target, startTime, retryTimeout, attempt + 1);
  }
}
async function copy(source, target, options) {
  return doCopy(source, target, { root: { source, target }, options, handledSourcePaths: /* @__PURE__ */ new Set() });
}
async function doCopy(source, target, payload) {
  if (payload.handledSourcePaths.has(source)) {
    return;
  } else {
    payload.handledSourcePaths.add(source);
  }
  const { stat, symbolicLink } = await SymlinkSupport.stat(source);
  if (symbolicLink) {
    if (payload.options.preserveSymlinks) {
      try {
        return await doCopySymlink(source, target, payload);
      } catch (error) {
      }
    }
    if (symbolicLink.dangling) {
      return;
    }
  }
  if (stat.isDirectory()) {
    return doCopyDirectory(source, target, stat.mode & COPY_MODE_MASK, payload);
  } else {
    return doCopyFile(source, target, stat.mode & COPY_MODE_MASK);
  }
}
async function doCopyDirectory(source, target, mode, payload) {
  await fs4.promises.mkdir(target, { recursive: true, mode });
  const files = await readdir(source);
  for (const file of files) {
    await doCopy(join3(source, file), join3(target, file), payload);
  }
}
async function doCopyFile(source, target, mode) {
  await fs4.promises.copyFile(source, target);
  await fs4.promises.chmod(target, mode);
}
async function doCopySymlink(source, target, payload) {
  let linkTarget = await fs4.promises.readlink(source);
  if (isEqualOrParent(linkTarget, payload.root.source, !isLinux)) {
    linkTarget = join3(payload.root.target, linkTarget.substr(payload.root.source.length + 1));
  }
  await fs4.promises.symlink(linkTarget, target);
}
var RimRafMode, SymlinkSupport, writeQueues, canFlush, COPY_MODE_MASK, Promises2;
var init_pfs = __esm({
  "out-build/vs/base/node/pfs.js"() {
    "use strict";
    init_async();
    init_extpath();
    init_normalization();
    init_path();
    init_platform();
    init_resources();
    init_uri();
    (function(RimRafMode2) {
      RimRafMode2[RimRafMode2["UNLINK"] = 0] = "UNLINK";
      RimRafMode2[RimRafMode2["MOVE"] = 1] = "MOVE";
    })(RimRafMode || (RimRafMode = {}));
    (function(SymlinkSupport2) {
      async function stat(path4) {
        let lstats;
        try {
          lstats = await fs4.promises.lstat(path4);
          if (!lstats.isSymbolicLink()) {
            return { stat: lstats };
          }
        } catch (error) {
        }
        try {
          const stats = await fs4.promises.stat(path4);
          return { stat: stats, symbolicLink: lstats?.isSymbolicLink() ? { dangling: false } : void 0 };
        } catch (error) {
          if (error.code === "ENOENT" && lstats) {
            return { stat: lstats, symbolicLink: { dangling: true } };
          }
          if (isWindows2 && error.code === "EACCES") {
            try {
              const stats = await fs4.promises.stat(await fs4.promises.readlink(path4));
              return { stat: stats, symbolicLink: { dangling: false } };
            } catch (error2) {
              if (error2.code === "ENOENT" && lstats) {
                return { stat: lstats, symbolicLink: { dangling: true } };
              }
              throw error2;
            }
          }
          throw error;
        }
      }
      SymlinkSupport2.stat = stat;
      async function existsFile(path4) {
        try {
          const { stat: stat2, symbolicLink } = await SymlinkSupport2.stat(path4);
          return stat2.isFile() && symbolicLink?.dangling !== true;
        } catch (error) {
        }
        return false;
      }
      SymlinkSupport2.existsFile = existsFile;
      async function existsDirectory(path4) {
        try {
          const { stat: stat2, symbolicLink } = await SymlinkSupport2.stat(path4);
          return stat2.isDirectory() && symbolicLink?.dangling !== true;
        } catch (error) {
        }
        return false;
      }
      SymlinkSupport2.existsDirectory = existsDirectory;
    })(SymlinkSupport || (SymlinkSupport = {}));
    writeQueues = new ResourceQueue();
    canFlush = true;
    COPY_MODE_MASK = 511;
    Promises2 = new class {
      //#region Implemented by node.js
      get read() {
        return (fd, buffer, offset, length, position) => {
          return new Promise((resolve2, reject) => {
            fs4.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
              if (err) {
                return reject(err);
              }
              return resolve2({ bytesRead, buffer: buffer2 });
            });
          });
        };
      }
      get write() {
        return (fd, buffer, offset, length, position) => {
          return new Promise((resolve2, reject) => {
            fs4.write(fd, buffer, offset, length, position, (err, bytesWritten, buffer2) => {
              if (err) {
                return reject(err);
              }
              return resolve2({ bytesWritten, buffer: buffer2 });
            });
          });
        };
      }
      get fdatasync() {
        return promisify(fs4.fdatasync);
      }
      // not exposed as API in 20.x yet
      get open() {
        return promisify(fs4.open);
      }
      // changed to return `FileHandle` in promise API
      get close() {
        return promisify(fs4.close);
      }
      // not exposed as API due to the `FileHandle` return type of `open`
      get realpath() {
        return promisify(fs4.realpath);
      }
      // `fs.promises.realpath` will use `fs.realpath.native` which we do not want
      get ftruncate() {
        return promisify(fs4.ftruncate);
      }
      // not exposed as API in 20.x yet
      //#endregion
      //#region Implemented by us
      async exists(path4) {
        try {
          await fs4.promises.access(path4);
          return true;
        } catch {
          return false;
        }
      }
      get readdir() {
        return readdir;
      }
      get readDirsInDir() {
        return readDirsInDir;
      }
      get writeFile() {
        return writeFile2;
      }
      get rm() {
        return rimraf;
      }
      get rename() {
        return rename;
      }
      get copy() {
        return copy;
      }
    }();
  }
});

// out-build/vs/base/node/ports.js
import * as net from "net";
function findFreePort(startPort, giveUpAfter, timeout2, stride = 1) {
  let done = false;
  return new Promise((resolve2) => {
    const timeoutHandle = setTimeout(() => {
      if (!done) {
        done = true;
        return resolve2(0);
      }
    }, timeout2);
    doFindFreePort(startPort, giveUpAfter, stride, (port) => {
      if (!done) {
        done = true;
        clearTimeout(timeoutHandle);
        return resolve2(port);
      }
    });
  });
}
function doFindFreePort(startPort, giveUpAfter, stride, clb) {
  if (giveUpAfter === 0) {
    return clb(0);
  }
  const client = new net.Socket();
  client.once("connect", () => {
    dispose2(client);
    return doFindFreePort(startPort + stride, giveUpAfter - 1, stride, clb);
  });
  client.once("data", () => {
  });
  client.once("error", (err) => {
    dispose2(client);
    if (err.code !== "ECONNREFUSED") {
      return doFindFreePort(startPort + stride, giveUpAfter - 1, stride, clb);
    }
    return clb(startPort);
  });
  client.connect(startPort, "127.0.0.1");
}
function dispose2(socket) {
  try {
    socket.removeAllListeners("connect");
    socket.removeAllListeners("error");
    socket.end();
    socket.destroy();
    socket.unref();
  } catch (error) {
    console.error(error);
  }
}
var init_ports2 = __esm({
  "out-build/vs/base/node/ports.js"() {
    "use strict";
  }
});

// out-build/vs/base/node/extpath.js
import * as fs5 from "fs";
async function realpath2(path4) {
  try {
    return await Promises2.realpath(path4);
  } catch (error) {
    const normalizedPath = normalizePath2(path4);
    await fs5.promises.access(normalizedPath, fs5.constants.R_OK);
    return normalizedPath;
  }
}
function normalizePath2(path4) {
  return rtrim(normalize(path4), sep);
}
var init_extpath2 = __esm({
  "out-build/vs/base/node/extpath.js"() {
    "use strict";
    init_path();
    init_platform();
    init_strings();
    init_pfs();
  }
});

// out-build/vs/base/common/glob.js
function starsToRegExp(starCount, isLastPattern) {
  switch (starCount) {
    case 0:
      return "";
    case 1:
      return `${NO_PATH_REGEX}*?`;
    // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
    default:
      return `(?:${PATH_REGEX}|${NO_PATH_REGEX}+${PATH_REGEX}${isLastPattern ? `|${PATH_REGEX}${NO_PATH_REGEX}+` : ""})*?`;
  }
}
function splitGlobAware(pattern, splitChar) {
  if (!pattern) {
    return [];
  }
  const segments = [];
  let inBraces = false;
  let inBrackets = false;
  let curVal = "";
  for (const char of pattern) {
    switch (char) {
      case splitChar:
        if (!inBraces && !inBrackets) {
          segments.push(curVal);
          curVal = "";
          continue;
        }
        break;
      case "{":
        inBraces = true;
        break;
      case "}":
        inBraces = false;
        break;
      case "[":
        inBrackets = true;
        break;
      case "]":
        inBrackets = false;
        break;
    }
    curVal += char;
  }
  if (curVal) {
    segments.push(curVal);
  }
  return segments;
}
function parseRegExp(pattern) {
  if (!pattern) {
    return "";
  }
  let regEx = "";
  const segments = splitGlobAware(pattern, GLOB_SPLIT);
  if (segments.every((segment) => segment === GLOBSTAR)) {
    regEx = ".*";
  } else {
    let previousSegmentWasGlobStar = false;
    segments.forEach((segment, index) => {
      if (segment === GLOBSTAR) {
        if (previousSegmentWasGlobStar) {
          return;
        }
        regEx += starsToRegExp(2, index === segments.length - 1);
      } else {
        let inBraces = false;
        let braceVal = "";
        let inBrackets = false;
        let bracketVal = "";
        for (const char of segment) {
          if (char !== "}" && inBraces) {
            braceVal += char;
            continue;
          }
          if (inBrackets && (char !== "]" || !bracketVal)) {
            let res;
            if (char === "-") {
              res = char;
            } else if ((char === "^" || char === "!") && !bracketVal) {
              res = "^";
            } else if (char === GLOB_SPLIT) {
              res = "";
            } else {
              res = escapeRegExpCharacters(char);
            }
            bracketVal += res;
            continue;
          }
          switch (char) {
            case "{":
              inBraces = true;
              continue;
            case "[":
              inBrackets = true;
              continue;
            case "}": {
              const choices = splitGlobAware(braceVal, ",");
              const braceRegExp = `(?:${choices.map((choice) => parseRegExp(choice)).join("|")})`;
              regEx += braceRegExp;
              inBraces = false;
              braceVal = "";
              break;
            }
            case "]": {
              regEx += "[" + bracketVal + "]";
              inBrackets = false;
              bracketVal = "";
              break;
            }
            case "?":
              regEx += NO_PATH_REGEX;
              continue;
            case "*":
              regEx += starsToRegExp(1);
              continue;
            default:
              regEx += escapeRegExpCharacters(char);
          }
        }
        if (index < segments.length - 1 && // more segments to come after this
        (segments[index + 1] !== GLOBSTAR || // next segment is not **, or...
        index + 2 < segments.length)) {
          regEx += PATH_REGEX;
        }
      }
      previousSegmentWasGlobStar = segment === GLOBSTAR;
    });
  }
  return regEx;
}
function parsePattern(arg1, options) {
  if (!arg1) {
    return NULL;
  }
  let pattern;
  if (typeof arg1 !== "string") {
    pattern = arg1.pattern;
  } else {
    pattern = arg1;
  }
  pattern = pattern.trim();
  const patternKey = `${pattern}_${!!options.trimForExclusions}`;
  let parsedPattern = CACHE.get(patternKey);
  if (parsedPattern) {
    return wrapRelativePattern(parsedPattern, arg1);
  }
  let match;
  if (T1.test(pattern)) {
    parsedPattern = trivia1(pattern.substr(4), pattern);
  } else if (match = T2.exec(trimForExclusions(pattern, options))) {
    parsedPattern = trivia2(match[1], pattern);
  } else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) {
    parsedPattern = trivia3(pattern, options);
  } else if (match = T4.exec(trimForExclusions(pattern, options))) {
    parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
  } else if (match = T5.exec(trimForExclusions(pattern, options))) {
    parsedPattern = trivia4and5(match[1], pattern, false);
  } else {
    parsedPattern = toRegExp(pattern);
  }
  CACHE.set(patternKey, parsedPattern);
  return wrapRelativePattern(parsedPattern, arg1);
}
function wrapRelativePattern(parsedPattern, arg2) {
  if (typeof arg2 === "string") {
    return parsedPattern;
  }
  const wrappedPattern = function(path4, basename3) {
    if (!isEqualOrParent(path4, arg2.base, !isLinux)) {
      return null;
    }
    return parsedPattern(ltrim(path4.substr(arg2.base.length), sep), basename3);
  };
  wrappedPattern.allBasenames = parsedPattern.allBasenames;
  wrappedPattern.allPaths = parsedPattern.allPaths;
  wrappedPattern.basenames = parsedPattern.basenames;
  wrappedPattern.patterns = parsedPattern.patterns;
  return wrappedPattern;
}
function trimForExclusions(pattern, options) {
  return options.trimForExclusions && pattern.endsWith("/**") ? pattern.substr(0, pattern.length - 2) : pattern;
}
function trivia1(base, pattern) {
  return function(path4, basename3) {
    return typeof path4 === "string" && path4.endsWith(base) ? pattern : null;
  };
}
function trivia2(base, pattern) {
  const slashBase = `/${base}`;
  const backslashBase = `\\${base}`;
  const parsedPattern = function(path4, basename3) {
    if (typeof path4 !== "string") {
      return null;
    }
    if (basename3) {
      return basename3 === base ? pattern : null;
    }
    return path4 === base || path4.endsWith(slashBase) || path4.endsWith(backslashBase) ? pattern : null;
  };
  const basenames = [base];
  parsedPattern.basenames = basenames;
  parsedPattern.patterns = [pattern];
  parsedPattern.allBasenames = basenames;
  return parsedPattern;
}
function trivia3(pattern, options) {
  const parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(",").map((pattern2) => parsePattern(pattern2, options)).filter((pattern2) => pattern2 !== NULL), pattern);
  const patternsLength = parsedPatterns.length;
  if (!patternsLength) {
    return NULL;
  }
  if (patternsLength === 1) {
    return parsedPatterns[0];
  }
  const parsedPattern = function(path4, basename3) {
    for (let i = 0, n = parsedPatterns.length; i < n; i++) {
      if (parsedPatterns[i](path4, basename3)) {
        return pattern;
      }
    }
    return null;
  };
  const withBasenames = parsedPatterns.find((pattern2) => !!pattern2.allBasenames);
  if (withBasenames) {
    parsedPattern.allBasenames = withBasenames.allBasenames;
  }
  const allPaths = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
  if (allPaths.length) {
    parsedPattern.allPaths = allPaths;
  }
  return parsedPattern;
}
function trivia4and5(targetPath, pattern, matchPathEnds) {
  const usingPosixSep = sep === posix.sep;
  const nativePath = usingPosixSep ? targetPath : targetPath.replace(ALL_FORWARD_SLASHES, sep);
  const nativePathEnd = sep + nativePath;
  const targetPathEnd = posix.sep + targetPath;
  let parsedPattern;
  if (matchPathEnds) {
    parsedPattern = function(path4, basename3) {
      return typeof path4 === "string" && (path4 === nativePath || path4.endsWith(nativePathEnd) || !usingPosixSep && (path4 === targetPath || path4.endsWith(targetPathEnd))) ? pattern : null;
    };
  } else {
    parsedPattern = function(path4, basename3) {
      return typeof path4 === "string" && (path4 === nativePath || !usingPosixSep && path4 === targetPath) ? pattern : null;
    };
  }
  parsedPattern.allPaths = [(matchPathEnds ? "*/" : "./") + targetPath];
  return parsedPattern;
}
function toRegExp(pattern) {
  try {
    const regExp = new RegExp(`^${parseRegExp(pattern)}$`);
    return function(path4) {
      regExp.lastIndex = 0;
      return typeof path4 === "string" && regExp.test(path4) ? pattern : null;
    };
  } catch (error) {
    return NULL;
  }
}
function parse2(arg1, options = {}) {
  if (!arg1) {
    return FALSE;
  }
  if (typeof arg1 === "string" || isRelativePattern(arg1)) {
    const parsedPattern = parsePattern(arg1, options);
    if (parsedPattern === NULL) {
      return FALSE;
    }
    const resultPattern = function(path4, basename3) {
      return !!parsedPattern(path4, basename3);
    };
    if (parsedPattern.allBasenames) {
      resultPattern.allBasenames = parsedPattern.allBasenames;
    }
    if (parsedPattern.allPaths) {
      resultPattern.allPaths = parsedPattern.allPaths;
    }
    return resultPattern;
  }
  return parsedExpression(arg1, options);
}
function isRelativePattern(obj) {
  const rp = obj;
  if (!rp) {
    return false;
  }
  return typeof rp.base === "string" && typeof rp.pattern === "string";
}
function parsedExpression(expression, options) {
  const parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression).map((pattern) => parseExpressionPattern(pattern, expression[pattern], options)).filter((pattern) => pattern !== NULL));
  const patternsLength = parsedPatterns.length;
  if (!patternsLength) {
    return NULL;
  }
  if (!parsedPatterns.some((parsedPattern) => !!parsedPattern.requiresSiblings)) {
    if (patternsLength === 1) {
      return parsedPatterns[0];
    }
    const resultExpression2 = function(path4, basename3) {
      let resultPromises = void 0;
      for (let i = 0, n = parsedPatterns.length; i < n; i++) {
        const result = parsedPatterns[i](path4, basename3);
        if (typeof result === "string") {
          return result;
        }
        if (isThenable(result)) {
          if (!resultPromises) {
            resultPromises = [];
          }
          resultPromises.push(result);
        }
      }
      if (resultPromises) {
        return (async () => {
          for (const resultPromise of resultPromises) {
            const result = await resultPromise;
            if (typeof result === "string") {
              return result;
            }
          }
          return null;
        })();
      }
      return null;
    };
    const withBasenames2 = parsedPatterns.find((pattern) => !!pattern.allBasenames);
    if (withBasenames2) {
      resultExpression2.allBasenames = withBasenames2.allBasenames;
    }
    const allPaths2 = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
    if (allPaths2.length) {
      resultExpression2.allPaths = allPaths2;
    }
    return resultExpression2;
  }
  const resultExpression = function(path4, base, hasSibling) {
    let name = void 0;
    let resultPromises = void 0;
    for (let i = 0, n = parsedPatterns.length; i < n; i++) {
      const parsedPattern = parsedPatterns[i];
      if (parsedPattern.requiresSiblings && hasSibling) {
        if (!base) {
          base = basename(path4);
        }
        if (!name) {
          name = base.substr(0, base.length - extname(path4).length);
        }
      }
      const result = parsedPattern(path4, base, name, hasSibling);
      if (typeof result === "string") {
        return result;
      }
      if (isThenable(result)) {
        if (!resultPromises) {
          resultPromises = [];
        }
        resultPromises.push(result);
      }
    }
    if (resultPromises) {
      return (async () => {
        for (const resultPromise of resultPromises) {
          const result = await resultPromise;
          if (typeof result === "string") {
            return result;
          }
        }
        return null;
      })();
    }
    return null;
  };
  const withBasenames = parsedPatterns.find((pattern) => !!pattern.allBasenames);
  if (withBasenames) {
    resultExpression.allBasenames = withBasenames.allBasenames;
  }
  const allPaths = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
  if (allPaths.length) {
    resultExpression.allPaths = allPaths;
  }
  return resultExpression;
}
function parseExpressionPattern(pattern, value, options) {
  if (value === false) {
    return NULL;
  }
  const parsedPattern = parsePattern(pattern, options);
  if (parsedPattern === NULL) {
    return NULL;
  }
  if (typeof value === "boolean") {
    return parsedPattern;
  }
  if (value) {
    const when = value.when;
    if (typeof when === "string") {
      const result = (path4, basename3, name, hasSibling) => {
        if (!hasSibling || !parsedPattern(path4, basename3)) {
          return null;
        }
        const clausePattern = when.replace("$(basename)", () => name);
        const matched = hasSibling(clausePattern);
        return isThenable(matched) ? matched.then((match) => match ? pattern : null) : matched ? pattern : null;
      };
      result.requiresSiblings = true;
      return result;
    }
  }
  return parsedPattern;
}
function aggregateBasenameMatches(parsedPatterns, result) {
  const basenamePatterns = parsedPatterns.filter((parsedPattern) => !!parsedPattern.basenames);
  if (basenamePatterns.length < 2) {
    return parsedPatterns;
  }
  const basenames = basenamePatterns.reduce((all, current) => {
    const basenames2 = current.basenames;
    return basenames2 ? all.concat(basenames2) : all;
  }, []);
  let patterns;
  if (result) {
    patterns = [];
    for (let i = 0, n = basenames.length; i < n; i++) {
      patterns.push(result);
    }
  } else {
    patterns = basenamePatterns.reduce((all, current) => {
      const patterns2 = current.patterns;
      return patterns2 ? all.concat(patterns2) : all;
    }, []);
  }
  const aggregate = function(path4, basename3) {
    if (typeof path4 !== "string") {
      return null;
    }
    if (!basename3) {
      let i;
      for (i = path4.length; i > 0; i--) {
        const ch = path4.charCodeAt(i - 1);
        if (ch === 47 || ch === 92) {
          break;
        }
      }
      basename3 = path4.substr(i);
    }
    const index = basenames.indexOf(basename3);
    return index !== -1 ? patterns[index] : null;
  };
  aggregate.basenames = basenames;
  aggregate.patterns = patterns;
  aggregate.allBasenames = basenames;
  const aggregatedPatterns = parsedPatterns.filter((parsedPattern) => !parsedPattern.basenames);
  aggregatedPatterns.push(aggregate);
  return aggregatedPatterns;
}
var GLOBSTAR, GLOB_SPLIT, PATH_REGEX, NO_PATH_REGEX, ALL_FORWARD_SLASHES, T1, T2, T3, T3_2, T4, T5, CACHE, FALSE, NULL;
var init_glob = __esm({
  "out-build/vs/base/common/glob.js"() {
    "use strict";
    init_arrays();
    init_async();
    init_extpath();
    init_map();
    init_path();
    init_platform();
    init_strings();
    GLOBSTAR = "**";
    GLOB_SPLIT = "/";
    PATH_REGEX = "[/\\\\]";
    NO_PATH_REGEX = "[^/\\\\]";
    ALL_FORWARD_SLASHES = /\//g;
    T1 = /^\*\*\/\*\.[\w\.-]+$/;
    T2 = /^\*\*\/([\w\.-]+)\/?$/;
    T3 = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/;
    T3_2 = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/;
    T4 = /^\*\*((\/[\w\.-]+)+)\/?$/;
    T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/;
    CACHE = new LRUCache(1e4);
    FALSE = function() {
      return false;
    };
    NULL = function() {
      return null;
    };
  }
});

// out-build/vs/base/common/ternarySearchTree.js
var StringIterator, ConfigKeysIterator, PathIterator, UriIteratorState, UriIterator, Undef, TernarySearchTreeNode, Dir, TernarySearchTree;
var init_ternarySearchTree = __esm({
  "out-build/vs/base/common/ternarySearchTree.js"() {
    "use strict";
    init_arrays();
    init_strings();
    StringIterator = class {
      constructor() {
        this._value = "";
        this._pos = 0;
      }
      reset(key) {
        this._value = key;
        this._pos = 0;
        return this;
      }
      next() {
        this._pos += 1;
        return this;
      }
      hasNext() {
        return this._pos < this._value.length - 1;
      }
      cmp(a) {
        const aCode = a.charCodeAt(0);
        const thisCode = this._value.charCodeAt(this._pos);
        return aCode - thisCode;
      }
      value() {
        return this._value[this._pos];
      }
    };
    ConfigKeysIterator = class {
      constructor(_caseSensitive = true) {
        this._caseSensitive = _caseSensitive;
      }
      reset(key) {
        this._value = key;
        this._from = 0;
        this._to = 0;
        return this.next();
      }
      hasNext() {
        return this._to < this._value.length;
      }
      next() {
        this._from = this._to;
        let justSeps = true;
        for (; this._to < this._value.length; this._to++) {
          const ch = this._value.charCodeAt(this._to);
          if (ch === 46) {
            if (justSeps) {
              this._from++;
            } else {
              break;
            }
          } else {
            justSeps = false;
          }
        }
        return this;
      }
      cmp(a) {
        return this._caseSensitive ? compareSubstring(a, this._value, 0, a.length, this._from, this._to) : compareSubstringIgnoreCase(a, this._value, 0, a.length, this._from, this._to);
      }
      value() {
        return this._value.substring(this._from, this._to);
      }
    };
    PathIterator = class {
      constructor(_splitOnBackslash = true, _caseSensitive = true) {
        this._splitOnBackslash = _splitOnBackslash;
        this._caseSensitive = _caseSensitive;
      }
      reset(key) {
        this._from = 0;
        this._to = 0;
        this._value = key;
        this._valueLen = key.length;
        for (let pos = key.length - 1; pos >= 0; pos--, this._valueLen--) {
          const ch = this._value.charCodeAt(pos);
          if (!(ch === 47 || this._splitOnBackslash && ch === 92)) {
            break;
          }
        }
        return this.next();
      }
      hasNext() {
        return this._to < this._valueLen;
      }
      next() {
        this._from = this._to;
        let justSeps = true;
        for (; this._to < this._valueLen; this._to++) {
          const ch = this._value.charCodeAt(this._to);
          if (ch === 47 || this._splitOnBackslash && ch === 92) {
            if (justSeps) {
              this._from++;
            } else {
              break;
            }
          } else {
            justSeps = false;
          }
        }
        return this;
      }
      cmp(a) {
        return this._caseSensitive ? compareSubstring(a, this._value, 0, a.length, this._from, this._to) : compareSubstringIgnoreCase(a, this._value, 0, a.length, this._from, this._to);
      }
      value() {
        return this._value.substring(this._from, this._to);
      }
    };
    (function(UriIteratorState2) {
      UriIteratorState2[UriIteratorState2["Scheme"] = 1] = "Scheme";
      UriIteratorState2[UriIteratorState2["Authority"] = 2] = "Authority";
      UriIteratorState2[UriIteratorState2["Path"] = 3] = "Path";
      UriIteratorState2[UriIteratorState2["Query"] = 4] = "Query";
      UriIteratorState2[UriIteratorState2["Fragment"] = 5] = "Fragment";
    })(UriIteratorState || (UriIteratorState = {}));
    UriIterator = class {
      constructor(_ignorePathCasing, _ignoreQueryAndFragment) {
        this._ignorePathCasing = _ignorePathCasing;
        this._ignoreQueryAndFragment = _ignoreQueryAndFragment;
        this._states = [];
        this._stateIdx = 0;
      }
      reset(key) {
        this._value = key;
        this._states = [];
        if (this._value.scheme) {
          this._states.push(
            1
            /* UriIteratorState.Scheme */
          );
        }
        if (this._value.authority) {
          this._states.push(
            2
            /* UriIteratorState.Authority */
          );
        }
        if (this._value.path) {
          this._pathIterator = new PathIterator(false, !this._ignorePathCasing(key));
          this._pathIterator.reset(key.path);
          if (this._pathIterator.value()) {
            this._states.push(
              3
              /* UriIteratorState.Path */
            );
          }
        }
        if (!this._ignoreQueryAndFragment(key)) {
          if (this._value.query) {
            this._states.push(
              4
              /* UriIteratorState.Query */
            );
          }
          if (this._value.fragment) {
            this._states.push(
              5
              /* UriIteratorState.Fragment */
            );
          }
        }
        this._stateIdx = 0;
        return this;
      }
      next() {
        if (this._states[this._stateIdx] === 3 && this._pathIterator.hasNext()) {
          this._pathIterator.next();
        } else {
          this._stateIdx += 1;
        }
        return this;
      }
      hasNext() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
      }
      cmp(a) {
        if (this._states[this._stateIdx] === 1) {
          return compareIgnoreCase(a, this._value.scheme);
        } else if (this._states[this._stateIdx] === 2) {
          return compareIgnoreCase(a, this._value.authority);
        } else if (this._states[this._stateIdx] === 3) {
          return this._pathIterator.cmp(a);
        } else if (this._states[this._stateIdx] === 4) {
          return compare(a, this._value.query);
        } else if (this._states[this._stateIdx] === 5) {
          return compare(a, this._value.fragment);
        }
        throw new Error();
      }
      value() {
        if (this._states[this._stateIdx] === 1) {
          return this._value.scheme;
        } else if (this._states[this._stateIdx] === 2) {
          return this._value.authority;
        } else if (this._states[this._stateIdx] === 3) {
          return this._pathIterator.value();
        } else if (this._states[this._stateIdx] === 4) {
          return this._value.query;
        } else if (this._states[this._stateIdx] === 5) {
          return this._value.fragment;
        }
        throw new Error();
      }
    };
    Undef = class _Undef {
      static {
        this.Val = Symbol("undefined_placeholder");
      }
      static wrap(value) {
        return value === void 0 ? _Undef.Val : value;
      }
      static unwrap(value) {
        return value === _Undef.Val ? void 0 : value;
      }
    };
    TernarySearchTreeNode = class {
      constructor() {
        this.height = 1;
      }
      isEmpty() {
        return !this.left && !this.mid && !this.right && this.value === void 0;
      }
      rotateLeft() {
        const tmp = this.right;
        this.right = tmp.left;
        tmp.left = this;
        this.updateHeight();
        tmp.updateHeight();
        return tmp;
      }
      rotateRight() {
        const tmp = this.left;
        this.left = tmp.right;
        tmp.right = this;
        this.updateHeight();
        tmp.updateHeight();
        return tmp;
      }
      updateHeight() {
        this.height = 1 + Math.max(this.heightLeft, this.heightRight);
      }
      balanceFactor() {
        return this.heightRight - this.heightLeft;
      }
      get heightLeft() {
        return this.left?.height ?? 0;
      }
      get heightRight() {
        return this.right?.height ?? 0;
      }
    };
    (function(Dir2) {
      Dir2[Dir2["Left"] = -1] = "Left";
      Dir2[Dir2["Mid"] = 0] = "Mid";
      Dir2[Dir2["Right"] = 1] = "Right";
    })(Dir || (Dir = {}));
    TernarySearchTree = class _TernarySearchTree {
      static forUris(ignorePathCasing = () => false, ignoreQueryAndFragment = () => false) {
        return new _TernarySearchTree(new UriIterator(ignorePathCasing, ignoreQueryAndFragment));
      }
      static forPaths(ignorePathCasing = false) {
        return new _TernarySearchTree(new PathIterator(void 0, !ignorePathCasing));
      }
      static forStrings() {
        return new _TernarySearchTree(new StringIterator());
      }
      static forConfigKeys() {
        return new _TernarySearchTree(new ConfigKeysIterator());
      }
      constructor(segments) {
        this._iter = segments;
      }
      clear() {
        this._root = void 0;
      }
      fill(values, keys) {
        if (keys) {
          const arr = keys.slice(0);
          shuffle(arr);
          for (const k of arr) {
            this.set(k, values);
          }
        } else {
          const arr = values.slice(0);
          shuffle(arr);
          for (const entry of arr) {
            this.set(entry[0], entry[1]);
          }
        }
      }
      set(key, element) {
        const iter = this._iter.reset(key);
        let node;
        if (!this._root) {
          this._root = new TernarySearchTreeNode();
          this._root.segment = iter.value();
        }
        const stack = [];
        node = this._root;
        while (true) {
          const val = iter.cmp(node.segment);
          if (val > 0) {
            if (!node.left) {
              node.left = new TernarySearchTreeNode();
              node.left.segment = iter.value();
            }
            stack.push([-1, node]);
            node = node.left;
          } else if (val < 0) {
            if (!node.right) {
              node.right = new TernarySearchTreeNode();
              node.right.segment = iter.value();
            }
            stack.push([1, node]);
            node = node.right;
          } else if (iter.hasNext()) {
            iter.next();
            if (!node.mid) {
              node.mid = new TernarySearchTreeNode();
              node.mid.segment = iter.value();
            }
            stack.push([0, node]);
            node = node.mid;
          } else {
            break;
          }
        }
        const oldElement = Undef.unwrap(node.value);
        node.value = Undef.wrap(element);
        node.key = key;
        for (let i = stack.length - 1; i >= 0; i--) {
          const node2 = stack[i][1];
          node2.updateHeight();
          const bf = node2.balanceFactor();
          if (bf < -1 || bf > 1) {
            const d1 = stack[i][0];
            const d2 = stack[i + 1][0];
            if (d1 === 1 && d2 === 1) {
              stack[i][1] = node2.rotateLeft();
            } else if (d1 === -1 && d2 === -1) {
              stack[i][1] = node2.rotateRight();
            } else if (d1 === 1 && d2 === -1) {
              node2.right = stack[i + 1][1] = stack[i + 1][1].rotateRight();
              stack[i][1] = node2.rotateLeft();
            } else if (d1 === -1 && d2 === 1) {
              node2.left = stack[i + 1][1] = stack[i + 1][1].rotateLeft();
              stack[i][1] = node2.rotateRight();
            } else {
              throw new Error();
            }
            if (i > 0) {
              switch (stack[i - 1][0]) {
                case -1:
                  stack[i - 1][1].left = stack[i][1];
                  break;
                case 1:
                  stack[i - 1][1].right = stack[i][1];
                  break;
                case 0:
                  stack[i - 1][1].mid = stack[i][1];
                  break;
              }
            } else {
              this._root = stack[0][1];
            }
          }
        }
        return oldElement;
      }
      get(key) {
        return Undef.unwrap(this._getNode(key)?.value);
      }
      _getNode(key) {
        const iter = this._iter.reset(key);
        let node = this._root;
        while (node) {
          const val = iter.cmp(node.segment);
          if (val > 0) {
            node = node.left;
          } else if (val < 0) {
            node = node.right;
          } else if (iter.hasNext()) {
            iter.next();
            node = node.mid;
          } else {
            break;
          }
        }
        return node;
      }
      has(key) {
        const node = this._getNode(key);
        return !(node?.value === void 0 && node?.mid === void 0);
      }
      delete(key) {
        return this._delete(key, false);
      }
      deleteSuperstr(key) {
        return this._delete(key, true);
      }
      _delete(key, superStr) {
        const iter = this._iter.reset(key);
        const stack = [];
        let node = this._root;
        while (node) {
          const val = iter.cmp(node.segment);
          if (val > 0) {
            stack.push([-1, node]);
            node = node.left;
          } else if (val < 0) {
            stack.push([1, node]);
            node = node.right;
          } else if (iter.hasNext()) {
            iter.next();
            stack.push([0, node]);
            node = node.mid;
          } else {
            break;
          }
        }
        if (!node) {
          return;
        }
        if (superStr) {
          node.left = void 0;
          node.mid = void 0;
          node.right = void 0;
          node.height = 1;
        } else {
          node.key = void 0;
          node.value = void 0;
        }
        if (!node.mid && !node.value) {
          if (node.left && node.right) {
            const min = this._min(node.right);
            if (min.key) {
              const { key: key2, value, segment } = min;
              this._delete(min.key, false);
              node.key = key2;
              node.value = value;
              node.segment = segment;
            }
          } else {
            const newChild = node.left ?? node.right;
            if (stack.length > 0) {
              const [dir, parent] = stack[stack.length - 1];
              switch (dir) {
                case -1:
                  parent.left = newChild;
                  break;
                case 0:
                  parent.mid = newChild;
                  break;
                case 1:
                  parent.right = newChild;
                  break;
              }
            } else {
              this._root = newChild;
            }
          }
        }
        for (let i = stack.length - 1; i >= 0; i--) {
          const node2 = stack[i][1];
          node2.updateHeight();
          const bf = node2.balanceFactor();
          if (bf > 1) {
            if (node2.right.balanceFactor() >= 0) {
              stack[i][1] = node2.rotateLeft();
            } else {
              node2.right = node2.right.rotateRight();
              stack[i][1] = node2.rotateLeft();
            }
          } else if (bf < -1) {
            if (node2.left.balanceFactor() <= 0) {
              stack[i][1] = node2.rotateRight();
            } else {
              node2.left = node2.left.rotateLeft();
              stack[i][1] = node2.rotateRight();
            }
          }
          if (i > 0) {
            switch (stack[i - 1][0]) {
              case -1:
                stack[i - 1][1].left = stack[i][1];
                break;
              case 1:
                stack[i - 1][1].right = stack[i][1];
                break;
              case 0:
                stack[i - 1][1].mid = stack[i][1];
                break;
            }
          } else {
            this._root = stack[0][1];
          }
        }
      }
      _min(node) {
        while (node.left) {
          node = node.left;
        }
        return node;
      }
      findSubstr(key) {
        const iter = this._iter.reset(key);
        let node = this._root;
        let candidate = void 0;
        while (node) {
          const val = iter.cmp(node.segment);
          if (val > 0) {
            node = node.left;
          } else if (val < 0) {
            node = node.right;
          } else if (iter.hasNext()) {
            iter.next();
            candidate = Undef.unwrap(node.value) || candidate;
            node = node.mid;
          } else {
            break;
          }
        }
        return node && Undef.unwrap(node.value) || candidate;
      }
      findSuperstr(key) {
        return this._findSuperstrOrElement(key, false);
      }
      _findSuperstrOrElement(key, allowValue) {
        const iter = this._iter.reset(key);
        let node = this._root;
        while (node) {
          const val = iter.cmp(node.segment);
          if (val > 0) {
            node = node.left;
          } else if (val < 0) {
            node = node.right;
          } else if (iter.hasNext()) {
            iter.next();
            node = node.mid;
          } else {
            if (!node.mid) {
              if (allowValue) {
                return Undef.unwrap(node.value);
              } else {
                return void 0;
              }
            } else {
              return this._entries(node.mid);
            }
          }
        }
        return void 0;
      }
      hasElementOrSubtree(key) {
        return this._findSuperstrOrElement(key, true) !== void 0;
      }
      forEach(callback) {
        for (const [key, value] of this) {
          callback(value, key);
        }
      }
      *[Symbol.iterator]() {
        yield* this._entries(this._root);
      }
      _entries(node) {
        const result = [];
        this._dfsEntries(node, result);
        return result[Symbol.iterator]();
      }
      _dfsEntries(node, bucket) {
        if (!node) {
          return;
        }
        if (node.left) {
          this._dfsEntries(node.left, bucket);
        }
        if (node.value !== void 0) {
          bucket.push([node.key, Undef.unwrap(node.value)]);
        }
        if (node.mid) {
          this._dfsEntries(node.mid, bucket);
        }
        if (node.right) {
          this._dfsEntries(node.right, bucket);
        }
      }
      // for debug/testing
      _isBalanced() {
        const nodeIsBalanced = (node) => {
          if (!node) {
            return true;
          }
          const bf = node.balanceFactor();
          if (bf < -1 || bf > 1) {
            return false;
          }
          return nodeIsBalanced(node.left) && nodeIsBalanced(node.right);
        };
        return nodeIsBalanced(this._root);
      }
    };
  }
});

// out-build/vs/platform/instantiation/common/instantiation.js
function storeServiceDependency(id2, target, index) {
  if (target[_util.DI_TARGET] === target) {
    target[_util.DI_DEPENDENCIES].push({ id: id2, index });
  } else {
    target[_util.DI_DEPENDENCIES] = [{ id: id2, index }];
    target[_util.DI_TARGET] = target;
  }
}
function createDecorator(serviceId) {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId);
  }
  const id2 = function(target, key, index) {
    if (arguments.length !== 3) {
      throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    }
    storeServiceDependency(id2, target, index);
  };
  id2.toString = () => serviceId;
  _util.serviceIds.set(serviceId, id2);
  return id2;
}
var _util, IInstantiationService;
var init_instantiation = __esm({
  "out-build/vs/platform/instantiation/common/instantiation.js"() {
    "use strict";
    (function(_util2) {
      _util2.serviceIds = /* @__PURE__ */ new Map();
      _util2.DI_TARGET = "$di$target";
      _util2.DI_DEPENDENCIES = "$di$dependencies";
      function getServiceDependencies(ctor) {
        return ctor[_util2.DI_DEPENDENCIES] || [];
      }
      _util2.getServiceDependencies = getServiceDependencies;
    })(_util || (_util = {}));
    IInstantiationService = createDecorator("instantiationService");
  }
});

// out-build/vs/platform/files/common/files.js
function isParent(path4, candidate, ignoreCase) {
  if (!path4 || !candidate || path4 === candidate) {
    return false;
  }
  if (candidate.length > path4.length) {
    return false;
  }
  if (candidate.charAt(candidate.length - 1) !== sep) {
    candidate += sep;
  }
  if (ignoreCase) {
    return startsWithIgnoreCase(path4, candidate);
  }
  return path4.indexOf(candidate) === 0;
}
var IFileService, FileType, FilePermission, FileChangeFilter, FileSystemProviderCapabilities, FileSystemProviderErrorCode, FileOperation, FileChangeType, FileChangesEvent, FileOperationResult, FileKind, ByteSize;
var init_files = __esm({
  "out-build/vs/platform/files/common/files.js"() {
    "use strict";
    init_ternarySearchTree();
    init_path();
    init_strings();
    init_types();
    init_uri();
    init_nls();
    init_instantiation();
    init_platform();
    init_network();
    init_lazy();
    IFileService = createDecorator("fileService");
    (function(FileType2) {
      FileType2[FileType2["Unknown"] = 0] = "Unknown";
      FileType2[FileType2["File"] = 1] = "File";
      FileType2[FileType2["Directory"] = 2] = "Directory";
      FileType2[FileType2["SymbolicLink"] = 64] = "SymbolicLink";
    })(FileType || (FileType = {}));
    (function(FilePermission2) {
      FilePermission2[FilePermission2["Readonly"] = 1] = "Readonly";
      FilePermission2[FilePermission2["Locked"] = 2] = "Locked";
    })(FilePermission || (FilePermission = {}));
    (function(FileChangeFilter2) {
      FileChangeFilter2[FileChangeFilter2["UPDATED"] = 2] = "UPDATED";
      FileChangeFilter2[FileChangeFilter2["ADDED"] = 4] = "ADDED";
      FileChangeFilter2[FileChangeFilter2["DELETED"] = 8] = "DELETED";
    })(FileChangeFilter || (FileChangeFilter = {}));
    (function(FileSystemProviderCapabilities2) {
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["None"] = 0] = "None";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileReadWrite"] = 2] = "FileReadWrite";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileOpenReadWriteClose"] = 4] = "FileOpenReadWriteClose";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileReadStream"] = 16] = "FileReadStream";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileFolderCopy"] = 8] = "FileFolderCopy";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["PathCaseSensitive"] = 1024] = "PathCaseSensitive";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["Readonly"] = 2048] = "Readonly";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["Trash"] = 4096] = "Trash";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileWriteUnlock"] = 8192] = "FileWriteUnlock";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicRead"] = 16384] = "FileAtomicRead";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicWrite"] = 32768] = "FileAtomicWrite";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicDelete"] = 65536] = "FileAtomicDelete";
      FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileClone"] = 131072] = "FileClone";
    })(FileSystemProviderCapabilities || (FileSystemProviderCapabilities = {}));
    (function(FileSystemProviderErrorCode2) {
      FileSystemProviderErrorCode2["FileExists"] = "EntryExists";
      FileSystemProviderErrorCode2["FileNotFound"] = "EntryNotFound";
      FileSystemProviderErrorCode2["FileNotADirectory"] = "EntryNotADirectory";
      FileSystemProviderErrorCode2["FileIsADirectory"] = "EntryIsADirectory";
      FileSystemProviderErrorCode2["FileExceedsStorageQuota"] = "EntryExceedsStorageQuota";
      FileSystemProviderErrorCode2["FileTooLarge"] = "EntryTooLarge";
      FileSystemProviderErrorCode2["FileWriteLocked"] = "EntryWriteLocked";
      FileSystemProviderErrorCode2["NoPermissions"] = "NoPermissions";
      FileSystemProviderErrorCode2["Unavailable"] = "Unavailable";
      FileSystemProviderErrorCode2["Unknown"] = "Unknown";
    })(FileSystemProviderErrorCode || (FileSystemProviderErrorCode = {}));
    (function(FileOperation2) {
      FileOperation2[FileOperation2["CREATE"] = 0] = "CREATE";
      FileOperation2[FileOperation2["DELETE"] = 1] = "DELETE";
      FileOperation2[FileOperation2["MOVE"] = 2] = "MOVE";
      FileOperation2[FileOperation2["COPY"] = 3] = "COPY";
      FileOperation2[FileOperation2["WRITE"] = 4] = "WRITE";
    })(FileOperation || (FileOperation = {}));
    (function(FileChangeType2) {
      FileChangeType2[FileChangeType2["UPDATED"] = 0] = "UPDATED";
      FileChangeType2[FileChangeType2["ADDED"] = 1] = "ADDED";
      FileChangeType2[FileChangeType2["DELETED"] = 2] = "DELETED";
    })(FileChangeType || (FileChangeType = {}));
    FileChangesEvent = class _FileChangesEvent {
      static {
        this.MIXED_CORRELATION = null;
      }
      constructor(changes, ignorePathCasing) {
        this.ignorePathCasing = ignorePathCasing;
        this.correlationId = void 0;
        this.added = new Lazy(() => {
          const added = TernarySearchTree.forUris(() => this.ignorePathCasing);
          added.fill(this.rawAdded.map((resource) => [resource, true]));
          return added;
        });
        this.updated = new Lazy(() => {
          const updated = TernarySearchTree.forUris(() => this.ignorePathCasing);
          updated.fill(this.rawUpdated.map((resource) => [resource, true]));
          return updated;
        });
        this.deleted = new Lazy(() => {
          const deleted = TernarySearchTree.forUris(() => this.ignorePathCasing);
          deleted.fill(this.rawDeleted.map((resource) => [resource, true]));
          return deleted;
        });
        this.rawAdded = [];
        this.rawUpdated = [];
        this.rawDeleted = [];
        for (const change of changes) {
          switch (change.type) {
            case 1:
              this.rawAdded.push(change.resource);
              break;
            case 0:
              this.rawUpdated.push(change.resource);
              break;
            case 2:
              this.rawDeleted.push(change.resource);
              break;
          }
          if (this.correlationId !== _FileChangesEvent.MIXED_CORRELATION) {
            if (typeof change.cId === "number") {
              if (this.correlationId === void 0) {
                this.correlationId = change.cId;
              } else if (this.correlationId !== change.cId) {
                this.correlationId = _FileChangesEvent.MIXED_CORRELATION;
              }
            } else {
              if (this.correlationId !== void 0) {
                this.correlationId = _FileChangesEvent.MIXED_CORRELATION;
              }
            }
          }
        }
      }
      /**
       * Find out if the file change events match the provided resource.
       *
       * Note: when passing `FileChangeType.DELETED`, we consider a match
       * also when the parent of the resource got deleted.
       */
      contains(resource, ...types) {
        return this.doContains(resource, { includeChildren: false }, ...types);
      }
      /**
       * Find out if the file change events either match the provided
       * resource, or contain a child of this resource.
       */
      affects(resource, ...types) {
        return this.doContains(resource, { includeChildren: true }, ...types);
      }
      doContains(resource, options, ...types) {
        if (!resource) {
          return false;
        }
        const hasTypesFilter = types.length > 0;
        if (!hasTypesFilter || types.includes(
          1
          /* FileChangeType.ADDED */
        )) {
          if (this.added.value.get(resource)) {
            return true;
          }
          if (options.includeChildren && this.added.value.findSuperstr(resource)) {
            return true;
          }
        }
        if (!hasTypesFilter || types.includes(
          0
          /* FileChangeType.UPDATED */
        )) {
          if (this.updated.value.get(resource)) {
            return true;
          }
          if (options.includeChildren && this.updated.value.findSuperstr(resource)) {
            return true;
          }
        }
        if (!hasTypesFilter || types.includes(
          2
          /* FileChangeType.DELETED */
        )) {
          if (this.deleted.value.findSubstr(resource)) {
            return true;
          }
          if (options.includeChildren && this.deleted.value.findSuperstr(resource)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Returns if this event contains added files.
       */
      gotAdded() {
        return this.rawAdded.length > 0;
      }
      /**
       * Returns if this event contains deleted files.
       */
      gotDeleted() {
        return this.rawDeleted.length > 0;
      }
      /**
       * Returns if this event contains updated files.
       */
      gotUpdated() {
        return this.rawUpdated.length > 0;
      }
      /**
       * Returns if this event contains changes that correlate to the
       * provided `correlationId`.
       *
       * File change event correlation is an advanced watch feature that
       * allows to  identify from which watch request the events originate
       * from. This correlation allows to route events specifically
       * only to the requestor and not emit them to all listeners.
       */
      correlates(correlationId) {
        return this.correlationId === correlationId;
      }
      /**
       * Figure out if the event contains changes that correlate to one
       * correlation identifier.
       *
       * File change event correlation is an advanced watch feature that
       * allows to  identify from which watch request the events originate
       * from. This correlation allows to route events specifically
       * only to the requestor and not emit them to all listeners.
       */
      hasCorrelation() {
        return typeof this.correlationId === "number";
      }
    };
    (function(FileOperationResult2) {
      FileOperationResult2[FileOperationResult2["FILE_IS_DIRECTORY"] = 0] = "FILE_IS_DIRECTORY";
      FileOperationResult2[FileOperationResult2["FILE_NOT_FOUND"] = 1] = "FILE_NOT_FOUND";
      FileOperationResult2[FileOperationResult2["FILE_NOT_MODIFIED_SINCE"] = 2] = "FILE_NOT_MODIFIED_SINCE";
      FileOperationResult2[FileOperationResult2["FILE_MODIFIED_SINCE"] = 3] = "FILE_MODIFIED_SINCE";
      FileOperationResult2[FileOperationResult2["FILE_MOVE_CONFLICT"] = 4] = "FILE_MOVE_CONFLICT";
      FileOperationResult2[FileOperationResult2["FILE_WRITE_LOCKED"] = 5] = "FILE_WRITE_LOCKED";
      FileOperationResult2[FileOperationResult2["FILE_PERMISSION_DENIED"] = 6] = "FILE_PERMISSION_DENIED";
      FileOperationResult2[FileOperationResult2["FILE_TOO_LARGE"] = 7] = "FILE_TOO_LARGE";
      FileOperationResult2[FileOperationResult2["FILE_INVALID_PATH"] = 8] = "FILE_INVALID_PATH";
      FileOperationResult2[FileOperationResult2["FILE_NOT_DIRECTORY"] = 9] = "FILE_NOT_DIRECTORY";
      FileOperationResult2[FileOperationResult2["FILE_OTHER_ERROR"] = 10] = "FILE_OTHER_ERROR";
    })(FileOperationResult || (FileOperationResult = {}));
    (function(FileKind2) {
      FileKind2[FileKind2["FILE"] = 0] = "FILE";
      FileKind2[FileKind2["FOLDER"] = 1] = "FOLDER";
      FileKind2[FileKind2["ROOT_FOLDER"] = 2] = "ROOT_FOLDER";
    })(FileKind || (FileKind = {}));
    ByteSize = class _ByteSize {
      static {
        this.KB = 1024;
      }
      static {
        this.MB = _ByteSize.KB * _ByteSize.KB;
      }
      static {
        this.GB = _ByteSize.MB * _ByteSize.KB;
      }
      static {
        this.TB = _ByteSize.GB * _ByteSize.KB;
      }
      static formatSize(size) {
        if (!isNumber(size)) {
          size = 0;
        }
        if (size < _ByteSize.KB) {
          return localize(1968, null, size.toFixed(0));
        }
        if (size < _ByteSize.MB) {
          return localize(1969, null, (size / _ByteSize.KB).toFixed(2));
        }
        if (size < _ByteSize.GB) {
          return localize(1970, null, (size / _ByteSize.MB).toFixed(2));
        }
        if (size < _ByteSize.TB) {
          return localize(1971, null, (size / _ByteSize.GB).toFixed(2));
        }
        return localize(1972, null, (size / _ByteSize.TB).toFixed(2));
      }
    };
  }
});

// out-build/vs/platform/files/common/watcher.js
function isWatchRequestWithCorrelation(request) {
  return typeof request.correlationId === "number";
}
function coalesceEvents(changes) {
  const coalescer = new EventCoalescer();
  for (const event of changes) {
    coalescer.processEvent(event);
  }
  return coalescer.coalesce();
}
function normalizeWatcherPattern(path4, pattern) {
  if (typeof pattern === "string" && !pattern.startsWith(GLOBSTAR) && !isAbsolute(pattern)) {
    return { base: path4, pattern };
  }
  return pattern;
}
function parseWatcherPatterns(path4, patterns) {
  const parsedPatterns = [];
  for (const pattern of patterns) {
    parsedPatterns.push(parse2(normalizeWatcherPattern(path4, pattern)));
  }
  return parsedPatterns;
}
function isFiltered(event, filter) {
  if (typeof filter === "number") {
    switch (event.type) {
      case 1:
        return (filter & 4) === 0;
      case 2:
        return (filter & 8) === 0;
      case 0:
        return (filter & 2) === 0;
    }
  }
  return false;
}
var AbstractWatcherClient, EventCoalescer;
var init_watcher = __esm({
  "out-build/vs/platform/files/common/watcher.js"() {
    "use strict";
    init_glob();
    init_lifecycle();
    init_path();
    init_platform();
    init_uri();
    init_files();
    AbstractWatcherClient = class _AbstractWatcherClient extends Disposable {
      static {
        this.MAX_RESTARTS = 5;
      }
      constructor(onFileChanges, onLogMessage, verboseLogging, options) {
        super();
        this.onFileChanges = onFileChanges;
        this.onLogMessage = onLogMessage;
        this.verboseLogging = verboseLogging;
        this.options = options;
        this.watcherDisposables = this._register(new MutableDisposable());
        this.requests = void 0;
        this.restartCounter = 0;
      }
      init() {
        const disposables = new DisposableStore();
        this.watcherDisposables.value = disposables;
        this.watcher = this.createWatcher(disposables);
        this.watcher.setVerboseLogging(this.verboseLogging);
        disposables.add(this.watcher.onDidChangeFile((changes) => this.onFileChanges(changes)));
        disposables.add(this.watcher.onDidLogMessage((msg) => this.onLogMessage(msg)));
        disposables.add(this.watcher.onDidError((e) => this.onError(e.error, e.request)));
      }
      onError(error, failedRequest) {
        if (this.canRestart(error, failedRequest)) {
          if (this.restartCounter < _AbstractWatcherClient.MAX_RESTARTS && this.requests) {
            this.error(`restarting watcher after unexpected error: ${error}`);
            this.restart(this.requests);
          } else {
            this.error(`gave up attempting to restart watcher after unexpected error: ${error}`);
          }
        } else {
          this.error(error);
        }
      }
      canRestart(error, failedRequest) {
        if (!this.options.restartOnError) {
          return false;
        }
        if (failedRequest) {
          return false;
        }
        if (error.indexOf("No space left on device") !== -1 || error.indexOf("EMFILE") !== -1) {
          return false;
        }
        return true;
      }
      restart(requests) {
        this.restartCounter++;
        this.init();
        this.watch(requests);
      }
      async watch(requests) {
        this.requests = requests;
        await this.watcher?.watch(requests);
      }
      async setVerboseLogging(verboseLogging) {
        this.verboseLogging = verboseLogging;
        await this.watcher?.setVerboseLogging(verboseLogging);
      }
      error(message) {
        this.onLogMessage({ type: "error", message: `[File Watcher (${this.options.type})] ${message}` });
      }
      trace(message) {
        this.onLogMessage({ type: "trace", message: `[File Watcher (${this.options.type})] ${message}` });
      }
      dispose() {
        this.watcher = void 0;
        return super.dispose();
      }
    };
    EventCoalescer = class {
      constructor() {
        this.coalesced = /* @__PURE__ */ new Set();
        this.mapPathToChange = /* @__PURE__ */ new Map();
      }
      toKey(event) {
        if (isLinux) {
          return event.resource.fsPath;
        }
        return event.resource.fsPath.toLowerCase();
      }
      processEvent(event) {
        const existingEvent = this.mapPathToChange.get(this.toKey(event));
        let keepEvent = false;
        if (existingEvent) {
          const currentChangeType = existingEvent.type;
          const newChangeType = event.type;
          if (existingEvent.resource.fsPath !== event.resource.fsPath && (event.type === 2 || event.type === 1)) {
            keepEvent = true;
          } else if (currentChangeType === 1 && newChangeType === 2) {
            this.mapPathToChange.delete(this.toKey(event));
            this.coalesced.delete(existingEvent);
          } else if (currentChangeType === 2 && newChangeType === 1) {
            existingEvent.type = 0;
          } else if (currentChangeType === 1 && newChangeType === 0) {
          } else {
            existingEvent.type = newChangeType;
          }
        } else {
          keepEvent = true;
        }
        if (keepEvent) {
          this.coalesced.add(event);
          this.mapPathToChange.set(this.toKey(event), event);
        }
      }
      coalesce() {
        const addOrChangeEvents = [];
        const deletedPaths = [];
        return Array.from(this.coalesced).filter((e) => {
          if (e.type !== 2) {
            addOrChangeEvents.push(e);
            return false;
          }
          return true;
        }).sort((e1, e2) => {
          return e1.resource.fsPath.length - e2.resource.fsPath.length;
        }).filter((e) => {
          if (deletedPaths.some((deletedPath) => isParent(
            e.resource.fsPath,
            deletedPath,
            !isLinux
            /* ignorecase */
          ))) {
            return false;
          }
          deletedPaths.push(e.resource.fsPath);
          return true;
        }).concat(addOrChangeEvents);
      }
    };
  }
});

// out-build/vs/platform/files/node/watcher/nodejs/nodejsWatcherLib.js
import { watch, promises as promises5 } from "fs";
async function watchFileContents(path4, onData, onReady, token, bufferSize = 512) {
  const handle = await Promises2.open(path4, "r");
  const buffer = Buffer.allocUnsafe(bufferSize);
  const cts = new CancellationTokenSource(token);
  let error = void 0;
  let isReading = false;
  const request = { path: path4, excludes: [], recursive: false };
  const watcher = new NodeJSFileWatcherLibrary(request, void 0, (changes) => {
    (async () => {
      for (const { type } of changes) {
        if (type === 0) {
          if (isReading) {
            return;
          }
          isReading = true;
          try {
            while (!cts.token.isCancellationRequested) {
              const { bytesRead } = await Promises2.read(handle, buffer, 0, bufferSize, null);
              if (!bytesRead || cts.token.isCancellationRequested) {
                break;
              }
              onData(buffer.slice(0, bytesRead));
            }
          } catch (err) {
            error = new Error(err);
            cts.dispose(true);
          } finally {
            isReading = false;
          }
        }
      }
    })();
  });
  await watcher.ready;
  onReady();
  return new Promise((resolve2, reject) => {
    cts.token.onCancellationRequested(async () => {
      watcher.dispose();
      try {
        await Promises2.close(handle);
      } catch (err) {
        error = new Error(err);
      }
      if (error) {
        reject(error);
      } else {
        resolve2();
      }
    });
  });
}
var NodeJSFileWatcherLibrary;
var init_nodejsWatcherLib = __esm({
  "out-build/vs/platform/files/node/watcher/nodejs/nodejsWatcherLib.js"() {
    "use strict";
    init_async();
    init_cancellation();
    init_extpath();
    init_lifecycle();
    init_normalization();
    init_path();
    init_platform();
    init_resources();
    init_uri();
    init_extpath2();
    init_pfs();
    init_watcher();
    init_lazy();
    NodeJSFileWatcherLibrary = class _NodeJSFileWatcherLibrary extends Disposable {
      static {
        this.FILE_DELETE_HANDLER_DELAY = 100;
      }
      static {
        this.FILE_CHANGES_HANDLER_DELAY = 75;
      }
      get isReusingRecursiveWatcher() {
        return this._isReusingRecursiveWatcher;
      }
      get failed() {
        return this.didFail;
      }
      constructor(request, recursiveWatcher, onDidFilesChange, onDidWatchFail, onLogMessage, verboseLogging) {
        super();
        this.request = request;
        this.recursiveWatcher = recursiveWatcher;
        this.onDidFilesChange = onDidFilesChange;
        this.onDidWatchFail = onDidWatchFail;
        this.onLogMessage = onLogMessage;
        this.verboseLogging = verboseLogging;
        this.throttledFileChangesEmitter = this._register(new ThrottledWorker({
          maxWorkChunkSize: 100,
          // only process up to 100 changes at once before...
          throttleDelay: 200,
          // ...resting for 200ms until we process events again...
          maxBufferedWork: 1e4
          // ...but never buffering more than 10000 events in memory
        }, (events) => this.onDidFilesChange(events)));
        this.fileChangesAggregator = this._register(new RunOnceWorker((events) => this.handleFileChanges(events), _NodeJSFileWatcherLibrary.FILE_CHANGES_HANDLER_DELAY));
        this.excludes = parseWatcherPatterns(this.request.path, this.request.excludes);
        this.includes = this.request.includes ? parseWatcherPatterns(this.request.path, this.request.includes) : void 0;
        this.filter = isWatchRequestWithCorrelation(this.request) ? this.request.filter : void 0;
        this.cts = new CancellationTokenSource();
        this.realPath = new Lazy(async () => {
          let result = this.request.path;
          try {
            result = await realpath2(this.request.path);
            if (this.request.path !== result) {
              this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${result})`);
            }
          } catch (error) {
          }
          return result;
        });
        this.ready = this.watch();
        this._isReusingRecursiveWatcher = false;
        this.didFail = false;
      }
      async watch() {
        try {
          const stat = await promises5.stat(this.request.path);
          if (this.cts.token.isCancellationRequested) {
            return;
          }
          this._register(await this.doWatch(stat.isDirectory()));
        } catch (error) {
          if (error.code !== "ENOENT") {
            this.error(error);
          } else {
            this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${error})`);
          }
          this.notifyWatchFailed();
        }
      }
      notifyWatchFailed() {
        this.didFail = true;
        this.onDidWatchFail?.();
      }
      async doWatch(isDirectory) {
        const disposables = new DisposableStore();
        if (this.doWatchWithExistingWatcher(isDirectory, disposables)) {
          this.trace(`reusing an existing recursive watcher for ${this.request.path}`);
          this._isReusingRecursiveWatcher = true;
        } else {
          this._isReusingRecursiveWatcher = false;
          await this.doWatchWithNodeJS(isDirectory, disposables);
        }
        return disposables;
      }
      doWatchWithExistingWatcher(isDirectory, disposables) {
        if (isDirectory) {
          return false;
        }
        const resource = URI.file(this.request.path);
        const subscription = this.recursiveWatcher?.subscribe(this.request.path, async (error, change) => {
          if (disposables.isDisposed) {
            return;
          }
          if (error) {
            const watchDisposable = await this.doWatch(isDirectory);
            if (!disposables.isDisposed) {
              disposables.add(watchDisposable);
            } else {
              watchDisposable.dispose();
            }
          } else if (change) {
            if (typeof change.cId === "number" || typeof this.request.correlationId === "number") {
              this.onFileChange(
                { resource, type: change.type, cId: this.request.correlationId },
                true
                /* skip excludes/includes (file is explicitly watched) */
              );
            }
          }
        });
        if (subscription) {
          disposables.add(subscription);
          return true;
        }
        return false;
      }
      async doWatchWithNodeJS(isDirectory, disposables) {
        const realPath = await this.realPath.value;
        if (isMacintosh && isEqualOrParent(realPath, "/Volumes/", true)) {
          this.error(`Refusing to watch ${realPath} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
          return;
        }
        const cts = new CancellationTokenSource(this.cts.token);
        disposables.add(toDisposable(() => cts.dispose(true)));
        const watcherDisposables = new DisposableStore();
        disposables.add(watcherDisposables);
        try {
          const requestResource = URI.file(this.request.path);
          const pathBasename = basename(realPath);
          const watcher = watch(realPath);
          watcherDisposables.add(toDisposable(() => {
            watcher.removeAllListeners();
            watcher.close();
          }));
          this.trace(`Started watching: '${realPath}'`);
          const folderChildren = /* @__PURE__ */ new Set();
          if (isDirectory) {
            try {
              for (const child of await Promises2.readdir(realPath)) {
                folderChildren.add(child);
              }
            } catch (error) {
              this.error(error);
            }
          }
          if (cts.token.isCancellationRequested) {
            return;
          }
          const mapPathToStatDisposable = /* @__PURE__ */ new Map();
          watcherDisposables.add(toDisposable(() => {
            for (const [, disposable] of mapPathToStatDisposable) {
              disposable.dispose();
            }
            mapPathToStatDisposable.clear();
          }));
          watcher.on("error", (code, signal) => {
            if (cts.token.isCancellationRequested) {
              return;
            }
            this.error(`Failed to watch ${realPath} for changes using fs.watch() (${code}, ${signal})`);
            this.notifyWatchFailed();
          });
          watcher.on("change", (type, raw) => {
            if (cts.token.isCancellationRequested) {
              return;
            }
            if (this.verboseLogging) {
              this.traceWithCorrelation(`[raw] ["${type}"] ${raw}`);
            }
            let changedFileName = "";
            if (raw) {
              changedFileName = raw.toString();
              if (isMacintosh) {
                changedFileName = normalizeNFC(changedFileName);
              }
            }
            if (!changedFileName || type !== "change" && type !== "rename") {
              return;
            }
            if (isDirectory) {
              if (type === "rename") {
                mapPathToStatDisposable.get(changedFileName)?.dispose();
                const timeoutHandle = setTimeout(async () => {
                  mapPathToStatDisposable.delete(changedFileName);
                  if (isEqual(changedFileName, pathBasename, !isLinux) && !await Promises2.exists(realPath)) {
                    this.onWatchedPathDeleted(requestResource);
                    return;
                  }
                  if (cts.token.isCancellationRequested) {
                    return;
                  }
                  const fileExists = await this.existsChildStrictCase(join3(realPath, changedFileName));
                  if (cts.token.isCancellationRequested) {
                    return;
                  }
                  let type2;
                  if (fileExists) {
                    if (folderChildren.has(changedFileName)) {
                      type2 = 0;
                    } else {
                      type2 = 1;
                      folderChildren.add(changedFileName);
                    }
                  } else {
                    folderChildren.delete(changedFileName);
                    type2 = 2;
                  }
                  this.onFileChange({ resource: joinPath(requestResource, changedFileName), type: type2, cId: this.request.correlationId });
                }, _NodeJSFileWatcherLibrary.FILE_DELETE_HANDLER_DELAY);
                mapPathToStatDisposable.set(changedFileName, toDisposable(() => clearTimeout(timeoutHandle)));
              } else {
                let type2;
                if (folderChildren.has(changedFileName)) {
                  type2 = 0;
                } else {
                  type2 = 1;
                  folderChildren.add(changedFileName);
                }
                this.onFileChange({ resource: joinPath(requestResource, changedFileName), type: type2, cId: this.request.correlationId });
              }
            } else {
              if (type === "rename" || !isEqual(changedFileName, pathBasename, !isLinux)) {
                const timeoutHandle = setTimeout(async () => {
                  const fileExists = await Promises2.exists(realPath);
                  if (cts.token.isCancellationRequested) {
                    return;
                  }
                  if (fileExists) {
                    this.onFileChange(
                      { resource: requestResource, type: 0, cId: this.request.correlationId },
                      true
                      /* skip excludes/includes (file is explicitly watched) */
                    );
                    watcherDisposables.add(await this.doWatch(false));
                  } else {
                    this.onWatchedPathDeleted(requestResource);
                  }
                }, _NodeJSFileWatcherLibrary.FILE_DELETE_HANDLER_DELAY);
                watcherDisposables.clear();
                watcherDisposables.add(toDisposable(() => clearTimeout(timeoutHandle)));
              } else {
                this.onFileChange(
                  { resource: requestResource, type: 0, cId: this.request.correlationId },
                  true
                  /* skip excludes/includes (file is explicitly watched) */
                );
              }
            }
          });
        } catch (error) {
          if (!cts.token.isCancellationRequested) {
            this.error(`Failed to watch ${realPath} for changes using fs.watch() (${error.toString()})`);
          }
          this.notifyWatchFailed();
        }
      }
      onWatchedPathDeleted(resource) {
        this.warn("Watcher shutdown because watched path got deleted");
        this.onFileChange(
          { resource, type: 2, cId: this.request.correlationId },
          true
          /* skip excludes/includes (file is explicitly watched) */
        );
        this.fileChangesAggregator.flush();
        this.notifyWatchFailed();
      }
      onFileChange(event, skipIncludeExcludeChecks = false) {
        if (this.cts.token.isCancellationRequested) {
          return;
        }
        if (this.verboseLogging) {
          this.traceWithCorrelation(`${event.type === 1 ? "[ADDED]" : event.type === 2 ? "[DELETED]" : "[CHANGED]"} ${event.resource.fsPath}`);
        }
        if (!skipIncludeExcludeChecks && this.excludes.some((exclude) => exclude(event.resource.fsPath))) {
          if (this.verboseLogging) {
            this.traceWithCorrelation(` >> ignored (excluded) ${event.resource.fsPath}`);
          }
        } else if (!skipIncludeExcludeChecks && this.includes && this.includes.length > 0 && !this.includes.some((include) => include(event.resource.fsPath))) {
          if (this.verboseLogging) {
            this.traceWithCorrelation(` >> ignored (not included) ${event.resource.fsPath}`);
          }
        } else {
          this.fileChangesAggregator.work(event);
        }
      }
      handleFileChanges(fileChanges) {
        const coalescedFileChanges = coalesceEvents(fileChanges);
        const filteredEvents = [];
        for (const event of coalescedFileChanges) {
          if (isFiltered(event, this.filter)) {
            if (this.verboseLogging) {
              this.traceWithCorrelation(` >> ignored (filtered) ${event.resource.fsPath}`);
            }
            continue;
          }
          filteredEvents.push(event);
        }
        if (filteredEvents.length === 0) {
          return;
        }
        if (this.verboseLogging) {
          for (const event of filteredEvents) {
            this.traceWithCorrelation(` >> normalized ${event.type === 1 ? "[ADDED]" : event.type === 2 ? "[DELETED]" : "[CHANGED]"} ${event.resource.fsPath}`);
          }
        }
        const worked = this.throttledFileChangesEmitter.work(filteredEvents);
        if (!worked) {
          this.warn(`started ignoring events due to too many file change events at once (incoming: ${filteredEvents.length}, most recent change: ${filteredEvents[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
        } else {
          if (this.throttledFileChangesEmitter.pending > 0) {
            this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${filteredEvents[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
          }
        }
      }
      async existsChildStrictCase(path4) {
        if (isLinux) {
          return Promises2.exists(path4);
        }
        try {
          const pathBasename = basename(path4);
          const children = await Promises2.readdir(dirname3(path4));
          return children.some((child) => child === pathBasename);
        } catch (error) {
          this.trace(error);
          return false;
        }
      }
      setVerboseLogging(verboseLogging) {
        this.verboseLogging = verboseLogging;
      }
      error(error) {
        if (!this.cts.token.isCancellationRequested) {
          this.onLogMessage?.({ type: "error", message: `[File Watcher (node.js)] ${error}` });
        }
      }
      warn(message) {
        if (!this.cts.token.isCancellationRequested) {
          this.onLogMessage?.({ type: "warn", message: `[File Watcher (node.js)] ${message}` });
        }
      }
      trace(message) {
        if (!this.cts.token.isCancellationRequested && this.verboseLogging) {
          this.onLogMessage?.({ type: "trace", message: `[File Watcher (node.js)] ${message}` });
        }
      }
      traceWithCorrelation(message) {
        if (!this.cts.token.isCancellationRequested && this.verboseLogging) {
          this.trace(`${message}${typeof this.request.correlationId === "number" ? ` <${this.request.correlationId}> ` : ``}`);
        }
      }
      dispose() {
        this.cts.dispose(true);
        super.dispose();
      }
    };
  }
});

// node_modules/minimist/index.js
var require_minimist = __commonJS({
  "node_modules/minimist/index.js"(exports, module) {
    "use strict";
    function hasKey(obj, keys) {
      var o = obj;
      keys.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      var key = keys[keys.length - 1];
      return key in o;
    }
    function isNumber2(x) {
      if (typeof x === "number") {
        return true;
      }
      if (/^0x[0-9a-f]+$/i.test(x)) {
        return true;
      }
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function isConstructorOrProto(obj, key) {
      return key === "constructor" && typeof obj[key] === "function" || key === "__proto__";
    }
    module.exports = function(args, opts) {
      if (!opts) {
        opts = {};
      }
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null
      };
      if (typeof opts.unknown === "function") {
        flags.unknownFn = opts.unknown;
      }
      if (typeof opts.boolean === "boolean" && opts.boolean) {
        flags.allBools = true;
      } else {
        [].concat(opts.boolean).filter(Boolean).forEach(function(key2) {
          flags.bools[key2] = true;
        });
      }
      var aliases = {};
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function(x) {
          return flags.bools[x];
        });
      }
      Object.keys(opts.alias || {}).forEach(function(key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function(x) {
          aliases[x] = [key2].concat(aliases[key2].filter(function(y) {
            return x !== y;
          }));
        });
      });
      [].concat(opts.string).filter(Boolean).forEach(function(key2) {
        flags.strings[key2] = true;
        if (aliases[key2]) {
          [].concat(aliases[key2]).forEach(function(k) {
            flags.strings[k] = true;
          });
        }
      });
      var defaults = opts.default || {};
      var argv = { _: [] };
      function argDefined(key2, arg2) {
        return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setKey(obj, keys, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys.length - 1; i2++) {
          var key2 = keys[i2];
          if (isConstructorOrProto(o, key2)) {
            return;
          }
          if (o[key2] === void 0) {
            o[key2] = {};
          }
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype) {
            o[key2] = {};
          }
          if (o[key2] === Array.prototype) {
            o[key2] = [];
          }
          o = o[key2];
        }
        var lastKey = keys[keys.length - 1];
        if (isConstructorOrProto(o, lastKey)) {
          return;
        }
        if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
          o = {};
        }
        if (o === Array.prototype) {
          o = [];
        }
        if (o[lastKey] === void 0 || flags.bools[lastKey] || typeof o[lastKey] === "boolean") {
          o[lastKey] = value2;
        } else if (Array.isArray(o[lastKey])) {
          o[lastKey].push(value2);
        } else {
          o[lastKey] = [o[lastKey], value2];
        }
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false) {
            return;
          }
        }
        var value2 = !flags.strings[key2] && isNumber2(val) ? Number(val) : val;
        setKey(argv, key2.split("."), value2);
        (aliases[key2] || []).forEach(function(x) {
          setKey(argv, x.split("."), value2);
        });
      }
      Object.keys(flags.bools).forEach(function(key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf("--") !== -1) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var key;
        var next;
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== "false";
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          key = arg.match(/^--(.+)/)[1];
          next = args[i + 1];
          if (next !== void 0 && !/^(-|--)[^-]/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, next, arg);
            i += 1;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === "true", arg);
            i += 1;
          } else {
            setArg(key, flags.strings[key] ? "" : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split("");
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (next === "-") {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
              setArg(letters[j], next.slice(1), arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, args[i + 1], arg);
              i += 1;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === "true", arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv._.push(flags.strings._ || !isNumber2(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv._.push.apply(argv._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function(k) {
        if (!hasKey(argv, k.split("."))) {
          setKey(argv, k.split("."), defaults[k]);
          (aliases[k] || []).forEach(function(x) {
            setKey(argv, x.split("."), defaults[k]);
          });
        }
      });
      if (opts["--"]) {
        argv["--"] = notFlags.slice();
      } else {
        notFlags.forEach(function(k) {
          argv._.push(k);
        });
      }
      return argv;
    };
  }
});

// out-build/vs/platform/environment/node/argv.js
function parseArgs(args, options, errorReporter = ignoringReporter) {
  const firstArg = args.find((a) => a.length > 0 && a[0] !== "-");
  const alias = {};
  const stringOptions = ["_"];
  const booleanOptions = [];
  const globalOptions = {};
  let command = void 0;
  for (const optionId in options) {
    const o = options[optionId];
    if (o.type === "subcommand") {
      if (optionId === firstArg) {
        command = o;
      }
    } else {
      if (o.alias) {
        alias[optionId] = o.alias;
      }
      if (o.type === "string" || o.type === "string[]") {
        stringOptions.push(optionId);
        if (o.deprecates) {
          stringOptions.push(...o.deprecates);
        }
      } else if (o.type === "boolean") {
        booleanOptions.push(optionId);
        if (o.deprecates) {
          booleanOptions.push(...o.deprecates);
        }
      }
      if (o.global) {
        globalOptions[optionId] = o;
      }
    }
  }
  if (command && firstArg) {
    const options2 = globalOptions;
    for (const optionId in command.options) {
      options2[optionId] = command.options[optionId];
    }
    const newArgs = args.filter((a) => a !== firstArg);
    const reporter = errorReporter.getSubcommandReporter ? errorReporter.getSubcommandReporter(firstArg) : void 0;
    const subcommandOptions = parseArgs(newArgs, options2, reporter);
    return {
      [firstArg]: subcommandOptions,
      _: []
    };
  }
  const parsedArgs = (0, import_minimist.default)(args, { string: stringOptions, boolean: booleanOptions, alias });
  const cleanedArgs = {};
  const remainingArgs = parsedArgs;
  cleanedArgs._ = parsedArgs._.map((arg) => String(arg)).filter((arg) => arg.length > 0);
  delete remainingArgs._;
  for (const optionId in options) {
    const o = options[optionId];
    if (o.type === "subcommand") {
      continue;
    }
    if (o.alias) {
      delete remainingArgs[o.alias];
    }
    let val = remainingArgs[optionId];
    if (o.deprecates) {
      for (const deprecatedId of o.deprecates) {
        if (remainingArgs.hasOwnProperty(deprecatedId)) {
          if (!val) {
            val = remainingArgs[deprecatedId];
            if (val) {
              errorReporter.onDeprecatedOption(deprecatedId, o.deprecationMessage || localize(1844, null, optionId));
            }
          }
          delete remainingArgs[deprecatedId];
        }
      }
    }
    if (typeof val !== "undefined") {
      if (o.type === "string[]") {
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (!o.allowEmptyValue) {
          const sanitized = val.filter((v) => v.length > 0);
          if (sanitized.length !== val.length) {
            errorReporter.onEmptyValue(optionId);
            val = sanitized.length > 0 ? sanitized : void 0;
          }
        }
      } else if (o.type === "string") {
        if (Array.isArray(val)) {
          val = val.pop();
          errorReporter.onMultipleValues(optionId, val);
        } else if (!val && !o.allowEmptyValue) {
          errorReporter.onEmptyValue(optionId);
          val = void 0;
        }
      }
      cleanedArgs[optionId] = val;
      if (o.deprecationMessage) {
        errorReporter.onDeprecatedOption(optionId, o.deprecationMessage);
      }
    }
    delete remainingArgs[optionId];
  }
  for (const key in remainingArgs) {
    errorReporter.onUnknownOption(key);
  }
  return cleanedArgs;
}
function formatUsage(optionId, option) {
  let args = "";
  if (option.args) {
    if (Array.isArray(option.args)) {
      args = ` <${option.args.join("> <")}>`;
    } else {
      args = ` <${option.args}>`;
    }
  }
  if (option.alias) {
    return `-${option.alias} --${optionId}${args}`;
  }
  return `--${optionId}${args}`;
}
function formatOptions(options, columns) {
  const usageTexts = [];
  for (const optionId in options) {
    const o = options[optionId];
    const usageText = formatUsage(optionId, o);
    usageTexts.push([usageText, o.description]);
  }
  return formatUsageTexts(usageTexts, columns);
}
function formatUsageTexts(usageTexts, columns) {
  const maxLength = usageTexts.reduce((previous, e) => Math.max(previous, e[0].length), 12);
  const argLength = maxLength + 2 + 1;
  if (columns - argLength < 25) {
    return usageTexts.reduce((r, ut) => r.concat([`  ${ut[0]}`, `      ${ut[1]}`]), []);
  }
  const descriptionColumns = columns - argLength - 1;
  const result = [];
  for (const ut of usageTexts) {
    const usage = ut[0];
    const wrappedDescription = wrapText(ut[1], descriptionColumns);
    const keyPadding = indent(
      argLength - usage.length - 2
      /*left padding*/
    );
    result.push("  " + usage + keyPadding + wrappedDescription[0]);
    for (let i = 1; i < wrappedDescription.length; i++) {
      result.push(indent(argLength) + wrappedDescription[i]);
    }
  }
  return result;
}
function indent(count) {
  return " ".repeat(count);
}
function wrapText(text, columns) {
  const lines = [];
  while (text.length) {
    const index = text.length < columns ? text.length : text.lastIndexOf(" ", columns);
    const line = text.slice(0, index).trim();
    text = text.slice(index);
    lines.push(line);
  }
  return lines;
}
function buildHelpMessage(productName, executableName, version, options, capabilities) {
  const columns = process.stdout.isTTY && process.stdout.columns || 80;
  const inputFiles = capabilities?.noInputFiles !== true ? `[${localize(1845, null)}...]` : "";
  const help = [`${productName} ${version}`];
  help.push("");
  help.push(`${localize(1846, null)}: ${executableName} [${localize(1847, null)}]${inputFiles}`);
  help.push("");
  if (capabilities?.noPipe !== true) {
    if (isWindows2) {
      help.push(localize(1848, null, executableName));
    } else {
      help.push(localize(1849, null, executableName));
    }
    help.push("");
  }
  const optionsByCategory = {};
  const subcommands = [];
  for (const optionId in options) {
    const o = options[optionId];
    if (o.type === "subcommand") {
      if (o.description) {
        subcommands.push({ command: optionId, description: o.description });
      }
    } else if (o.description && o.cat) {
      let optionsByCat = optionsByCategory[o.cat];
      if (!optionsByCat) {
        optionsByCategory[o.cat] = optionsByCat = {};
      }
      optionsByCat[optionId] = o;
    }
  }
  for (const helpCategoryKey in optionsByCategory) {
    const key = helpCategoryKey;
    const categoryOptions = optionsByCategory[key];
    if (categoryOptions) {
      help.push(helpCategories[key]);
      help.push(...formatOptions(categoryOptions, columns));
      help.push("");
    }
  }
  if (subcommands.length) {
    help.push(localize(1850, null));
    help.push(...formatUsageTexts(subcommands.map((s) => [s.command, s.description]), columns));
    help.push("");
  }
  return help.join("\n");
}
function buildVersionMessage(version, commit) {
  return `${version || localize(1851, null)}
${commit || localize(1852, null)}
${process.arch}`;
}
var import_minimist, helpCategories, NATIVE_CLI_COMMANDS, OPTIONS, ignoringReporter;
var init_argv = __esm({
  "out-build/vs/platform/environment/node/argv.js"() {
    "use strict";
    import_minimist = __toESM(require_minimist(), 1);
    init_platform();
    init_nls();
    helpCategories = {
      o: localize(1804, null),
      e: localize(1805, null),
      t: localize(1806, null)
    };
    NATIVE_CLI_COMMANDS = ["tunnel", "serve-web"];
    OPTIONS = {
      "tunnel": {
        type: "subcommand",
        description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel",
        options: {
          "cli-data-dir": { type: "string", args: "dir", description: localize(1807, null) },
          "disable-telemetry": { type: "boolean" },
          "telemetry-level": { type: "string" },
          user: {
            type: "subcommand",
            options: {
              login: {
                type: "subcommand",
                options: {
                  provider: { type: "string" },
                  "access-token": { type: "string" }
                }
              }
            }
          }
        }
      },
      "serve-web": {
        type: "subcommand",
        description: "Run a server that displays the editor UI in browsers.",
        options: {
          "cli-data-dir": { type: "string", args: "dir", description: localize(1808, null) },
          "disable-telemetry": { type: "boolean" },
          "telemetry-level": { type: "string" }
        }
      },
      "diff": { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: localize(1809, null) },
      "merge": { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: localize(1810, null) },
      "add": { type: "boolean", cat: "o", alias: "a", args: "folder", description: localize(1811, null) },
      "remove": { type: "boolean", cat: "o", args: "folder", description: localize(1812, null) },
      "goto": { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: localize(1813, null) },
      "new-window": { type: "boolean", cat: "o", alias: "n", description: localize(1814, null) },
      "reuse-window": { type: "boolean", cat: "o", alias: "r", description: localize(1815, null) },
      "wait": { type: "boolean", cat: "o", alias: "w", description: localize(1816, null) },
      "waitMarkerFilePath": { type: "string" },
      "locale": { type: "string", cat: "o", args: "locale", description: localize(1817, null) },
      "user-data-dir": { type: "string", cat: "o", args: "dir", description: localize(1818, null) },
      "profile": { type: "string", "cat": "o", args: "profileName", description: localize(1819, null) },
      "help": { type: "boolean", cat: "o", alias: "h", description: localize(1820, null) },
      "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: localize(1821, null) },
      "extensions-download-dir": { type: "string" },
      "builtin-extensions-dir": { type: "string" },
      "list-extensions": { type: "boolean", cat: "e", description: localize(1822, null) },
      "show-versions": { type: "boolean", cat: "e", description: localize(1823, null) },
      "category": { type: "string", allowEmptyValue: true, cat: "e", description: localize(1824, null), args: "category" },
      "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: localize(1825, null) },
      "pre-release": { type: "boolean", cat: "e", description: localize(1826, null) },
      "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: localize(1827, null) },
      "update-extensions": { type: "boolean", cat: "e", description: localize(1828, null) },
      "enable-proposed-api": { type: "string[]", allowEmptyValue: true, cat: "e", args: "ext-id", description: localize(1829, null) },
      "version": { type: "boolean", cat: "t", alias: "v", description: localize(1830, null) },
      "verbose": { type: "boolean", cat: "t", global: true, description: localize(1831, null) },
      "log": { type: "string[]", cat: "t", args: "level", global: true, description: localize(1832, null) },
      "status": { type: "boolean", alias: "s", cat: "t", description: localize(1833, null) },
      "prof-startup": { type: "boolean", cat: "t", description: localize(1834, null) },
      "prof-append-timers": { type: "string" },
      "prof-duration-markers": { type: "string[]" },
      "prof-duration-markers-file": { type: "string" },
      "no-cached-data": { type: "boolean" },
      "prof-startup-prefix": { type: "string" },
      "prof-v8-extensions": { type: "boolean" },
      "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: localize(1835, null) },
      "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: localize(1836, null) },
      "sync": { type: "string", cat: "t", description: localize(1837, null), args: ["on | off"] },
      "inspect-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: localize(1838, null) },
      "inspect-brk-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: localize(1839, null) },
      "disable-lcd-text": { type: "boolean", cat: "t", description: localize(1840, null) },
      "disable-gpu": { type: "boolean", cat: "t", description: localize(1841, null) },
      "disable-chromium-sandbox": { type: "boolean", cat: "t", description: localize(1842, null) },
      "sandbox": { type: "boolean" },
      "telemetry": { type: "boolean", cat: "t", description: localize(1843, null) },
      "remote": { type: "string", allowEmptyValue: true },
      "folder-uri": { type: "string[]", cat: "o", args: "uri" },
      "file-uri": { type: "string[]", cat: "o", args: "uri" },
      "locate-extension": { type: "string[]" },
      "extensionDevelopmentPath": { type: "string[]" },
      "extensionDevelopmentKind": { type: "string[]" },
      "extensionTestsPath": { type: "string" },
      "extensionEnvironment": { type: "string" },
      "debugId": { type: "string" },
      "debugRenderer": { type: "boolean" },
      "inspect-ptyhost": { type: "string", allowEmptyValue: true },
      "inspect-brk-ptyhost": { type: "string", allowEmptyValue: true },
      "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: true },
      "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: true },
      "inspect-sharedprocess": { type: "string", allowEmptyValue: true },
      "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: true },
      "export-default-configuration": { type: "string" },
      "install-source": { type: "string" },
      "enable-smoke-test-driver": { type: "boolean" },
      "logExtensionHostCommunication": { type: "boolean" },
      "skip-release-notes": { type: "boolean" },
      "skip-welcome": { type: "boolean" },
      "disable-telemetry": { type: "boolean" },
      "disable-updates": { type: "boolean" },
      "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] },
      "password-store": { type: "string" },
      "disable-workspace-trust": { type: "boolean" },
      "disable-crash-reporter": { type: "boolean" },
      "crash-reporter-directory": { type: "string" },
      "crash-reporter-id": { type: "string" },
      "skip-add-to-recently-opened": { type: "boolean" },
      "open-url": { type: "boolean" },
      "file-write": { type: "boolean" },
      "file-chmod": { type: "boolean" },
      "install-builtin-extension": { type: "string[]" },
      "force": { type: "boolean" },
      "do-not-sync": { type: "boolean" },
      "do-not-include-pack-dependencies": { type: "boolean" },
      "trace": { type: "boolean" },
      "trace-memory-infra": { type: "boolean" },
      "trace-category-filter": { type: "string" },
      "trace-options": { type: "string" },
      "preserve-env": { type: "boolean" },
      "force-user-env": { type: "boolean" },
      "force-disable-user-env": { type: "boolean" },
      "open-devtools": { type: "boolean" },
      "disable-gpu-sandbox": { type: "boolean" },
      "logsPath": { type: "string" },
      "__enable-file-policy": { type: "boolean" },
      "editSessionId": { type: "string" },
      "continueOn": { type: "string" },
      "locate-shell-integration-path": { type: "string", args: ["bash", "pwsh", "zsh", "fish"] },
      "enable-coi": { type: "boolean" },
      // chromium flags
      "no-proxy-server": { type: "boolean" },
      // Minimist incorrectly parses keys that start with `--no`
      // https://github.com/substack/minimist/blob/aeb3e27dae0412de5c0494e9563a5f10c82cc7a9/index.js#L118-L121
      // If --no-sandbox is passed via cli wrapper it will be treated as --sandbox which is incorrect, we use
      // the alias here to make sure --no-sandbox is always respected.
      // For https://github.com/microsoft/vscode/issues/128279
      "no-sandbox": { type: "boolean", alias: "sandbox" },
      "proxy-server": { type: "string" },
      "proxy-bypass-list": { type: "string" },
      "proxy-pac-url": { type: "string" },
      "js-flags": { type: "string" },
      // chrome js flags
      "inspect": { type: "string", allowEmptyValue: true },
      "inspect-brk": { type: "string", allowEmptyValue: true },
      "nolazy": { type: "boolean" },
      // node inspect
      "force-device-scale-factor": { type: "string" },
      "force-renderer-accessibility": { type: "boolean" },
      "ignore-certificate-errors": { type: "boolean" },
      "allow-insecure-localhost": { type: "boolean" },
      "log-net-log": { type: "string" },
      "vmodule": { type: "string" },
      "_urls": { type: "string[]" },
      "disable-dev-shm-usage": { type: "boolean" },
      "profile-temp": { type: "boolean" },
      "ozone-platform": { type: "string" },
      "enable-tracing": { type: "string" },
      "trace-startup-format": { type: "string" },
      "trace-startup-file": { type: "string" },
      "trace-startup-duration": { type: "string" },
      "xdg-portal-required-version": { type: "string" },
      _: { type: "string[]" }
      // main arguments
    };
    ignoringReporter = {
      onUnknownOption: () => {
      },
      onMultipleValues: () => {
      },
      onEmptyValue: () => {
      },
      onDeprecatedOption: () => {
      }
    };
  }
});

// out-build/vs/platform/environment/node/argvHelper.js
import assert2 from "assert";
function parseAndValidate(cmdLineArgs, reportWarnings) {
  const onMultipleValues = (id2, val) => {
    console.warn(localize(1853, null, id2, val));
  };
  const onEmptyValue = (id2) => {
    console.warn(localize(1854, null, id2));
  };
  const onDeprecatedOption = (deprecatedOption, message) => {
    console.warn(localize(1855, null, deprecatedOption, message));
  };
  const getSubcommandReporter = (command) => ({
    onUnknownOption: (id2) => {
      if (!NATIVE_CLI_COMMANDS.includes(command)) {
        console.warn(localize(1856, null, id2, command));
      }
    },
    onMultipleValues,
    onEmptyValue,
    onDeprecatedOption,
    getSubcommandReporter: NATIVE_CLI_COMMANDS.includes(command) ? getSubcommandReporter : void 0
  });
  const errorReporter = {
    onUnknownOption: (id2) => {
      console.warn(localize(1857, null, id2));
    },
    onMultipleValues,
    onEmptyValue,
    onDeprecatedOption,
    getSubcommandReporter
  };
  const args = parseArgs(cmdLineArgs, OPTIONS, reportWarnings ? errorReporter : void 0);
  if (args.goto) {
    args._.forEach((arg) => assert2(/^(\w:)?[^:]+(:\d*){0,2}:?$/.test(arg), localize(1858, null)));
  }
  return args;
}
function stripAppPath(argv) {
  const index = argv.findIndex((a) => !/^-/.test(a));
  if (index > -1) {
    return [...argv.slice(0, index), ...argv.slice(index + 1)];
  }
  return void 0;
}
function parseCLIProcessArgv(processArgv) {
  let [, , ...args] = processArgv;
  if (process.env["VSCODE_DEV"]) {
    args = stripAppPath(args) || [];
  }
  return parseAndValidate(args, true);
}
function addArg(argv, ...args) {
  const endOfArgsMarkerIndex = argv.indexOf("--");
  if (endOfArgsMarkerIndex === -1) {
    argv.push(...args);
  } else {
    argv.splice(endOfArgsMarkerIndex, 0, ...args);
  }
  return argv;
}
var init_argvHelper = __esm({
  "out-build/vs/platform/environment/node/argvHelper.js"() {
    "use strict";
    init_nls();
    init_argv();
  }
});

// out-build/vs/base/node/terminalEncoding.js
import { exec } from "child_process";
function toIconvLiteEncoding(encodingName) {
  const normalizedEncodingName = encodingName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const mapped = JSCHARDET_TO_ICONV_ENCODINGS[normalizedEncodingName];
  return mapped || normalizedEncodingName;
}
async function resolveTerminalEncoding(verbose) {
  let rawEncodingPromise;
  const cliEncodingEnv = process.env["VSCODE_CLI_ENCODING"];
  if (cliEncodingEnv) {
    if (verbose) {
      console.log(`Found VSCODE_CLI_ENCODING variable: ${cliEncodingEnv}`);
    }
    rawEncodingPromise = Promise.resolve(cliEncodingEnv);
  } else if (isWindows2) {
    rawEncodingPromise = new Promise((resolve2) => {
      if (verbose) {
        console.log('Running "chcp" to detect terminal encoding...');
      }
      exec("chcp", (err, stdout, stderr) => {
        if (stdout) {
          if (verbose) {
            console.log(`Output from "chcp" command is: ${stdout}`);
          }
          const windowsTerminalEncodingKeys = Object.keys(windowsTerminalEncodings);
          for (const key of windowsTerminalEncodingKeys) {
            if (stdout.indexOf(key) >= 0) {
              return resolve2(windowsTerminalEncodings[key]);
            }
          }
        }
        return resolve2(void 0);
      });
    });
  } else {
    rawEncodingPromise = new Promise((resolve2) => {
      if (verbose) {
        console.log('Running "locale charmap" to detect terminal encoding...');
      }
      exec("locale charmap", (err, stdout, stderr) => resolve2(stdout));
    });
  }
  const rawEncoding = await rawEncodingPromise;
  if (verbose) {
    console.log(`Detected raw terminal encoding: ${rawEncoding}`);
  }
  if (!rawEncoding || rawEncoding.toLowerCase() === "utf-8" || rawEncoding.toLowerCase() === UTF8) {
    return UTF8;
  }
  return toIconvLiteEncoding(rawEncoding);
}
var windowsTerminalEncodings, JSCHARDET_TO_ICONV_ENCODINGS, UTF8;
var init_terminalEncoding = __esm({
  "out-build/vs/base/node/terminalEncoding.js"() {
    "use strict";
    init_platform();
    windowsTerminalEncodings = {
      "437": "cp437",
      // United States
      "850": "cp850",
      // Multilingual(Latin I)
      "852": "cp852",
      // Slavic(Latin II)
      "855": "cp855",
      // Cyrillic(Russian)
      "857": "cp857",
      // Turkish
      "860": "cp860",
      // Portuguese
      "861": "cp861",
      // Icelandic
      "863": "cp863",
      // Canadian - French
      "865": "cp865",
      // Nordic
      "866": "cp866",
      // Russian
      "869": "cp869",
      // Modern Greek
      "936": "cp936",
      // Simplified Chinese
      "1252": "cp1252"
      // West European Latin
    };
    JSCHARDET_TO_ICONV_ENCODINGS = {
      "ibm866": "cp866",
      "big5": "cp950"
    };
    UTF8 = "utf8";
  }
});

// out-build/vs/platform/environment/node/stdin.js
import * as fs6 from "fs";
import { tmpdir as tmpdir2 } from "os";
function hasStdinWithoutTty() {
  try {
    return !process.stdin.isTTY;
  } catch (error) {
  }
  return false;
}
function stdinDataListener(durationinMs) {
  return new Promise((resolve2) => {
    const dataListener = () => resolve2(true);
    setTimeout(() => {
      process.stdin.removeListener("data", dataListener);
      resolve2(false);
    }, durationinMs);
    process.stdin.once("data", dataListener);
  });
}
function getStdinFilePath() {
  return randomPath(tmpdir2(), "code-stdin", 3);
}
async function createStdInFile(targetPath) {
  await fs6.promises.appendFile(targetPath, "");
  await fs6.promises.chmod(targetPath, 384);
}
async function readFromStdin(targetPath, verbose, onEnd) {
  let [encoding, iconv] = await Promise.all([
    resolveTerminalEncoding(verbose),
    // respect terminal encoding when piping into file
    import("@vscode/iconv-lite-umd"),
    // lazy load encoding module for usage
    createStdInFile(targetPath)
    // make sure file exists right away (https://github.com/microsoft/vscode/issues/155341)
  ]);
  if (!iconv.default.encodingExists(encoding)) {
    console.log(`Unsupported terminal encoding: ${encoding}, falling back to UTF-8.`);
    encoding = "utf8";
  }
  const appendFileQueue = new Queue();
  const decoder = iconv.default.getDecoder(encoding);
  process.stdin.on("data", (chunk) => {
    const chunkStr = decoder.write(chunk);
    appendFileQueue.queue(() => fs6.promises.appendFile(targetPath, chunkStr));
  });
  process.stdin.on("end", () => {
    const end = decoder.end();
    appendFileQueue.queue(async () => {
      try {
        if (typeof end === "string") {
          await fs6.promises.appendFile(targetPath, end);
        }
      } finally {
        onEnd?.();
      }
    });
  });
}
var init_stdin = __esm({
  "out-build/vs/platform/environment/node/stdin.js"() {
    "use strict";
    init_async();
    init_extpath();
    init_terminalEncoding();
  }
});

// out-build/vs/platform/environment/node/wait.js
import { writeFileSync as writeFileSync3 } from "fs";
import { tmpdir as tmpdir3 } from "os";
function createWaitMarkerFileSync(verbose) {
  const randomWaitMarkerPath = randomPath(tmpdir3());
  try {
    writeFileSync3(randomWaitMarkerPath, "");
    if (verbose) {
      console.log(`Marker file for --wait created: ${randomWaitMarkerPath}`);
    }
    return randomWaitMarkerPath;
  } catch (err) {
    if (verbose) {
      console.error(`Failed to create marker file for --wait: ${err}`);
    }
    return void 0;
  }
}
var init_wait = __esm({
  "out-build/vs/platform/environment/node/wait.js"() {
    "use strict";
    init_extpath();
  }
});

// out-build/vs/platform/product/common/product.js
var product2, vscodeGlobal2, product_default;
var init_product = __esm({
  "out-build/vs/platform/product/common/product.js"() {
    "use strict";
    init_process();
    vscodeGlobal2 = globalThis.vscode;
    if (typeof vscodeGlobal2 !== "undefined" && typeof vscodeGlobal2.context !== "undefined") {
      const configuration = vscodeGlobal2.context.configuration();
      if (configuration) {
        product2 = configuration.product;
      } else {
        throw new Error("Sandbox: unable to resolve product configuration from preload script.");
      }
    } else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
      product2 = globalThis._VSCODE_PRODUCT_JSON;
      if (env["VSCODE_DEV"]) {
        Object.assign(product2, {
          nameShort: `${product2.nameShort} Dev`,
          nameLong: `${product2.nameLong} Dev`,
          dataFolderName: `${product2.dataFolderName}-dev`,
          serverDataFolderName: product2.serverDataFolderName ? `${product2.serverDataFolderName}-dev` : void 0
        });
      }
      if (!product2.version) {
        const pkg2 = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(product2, {
          version: pkg2.version
        });
      }
    } else {
      product2 = {
        /*BUILD->INSERT_PRODUCT_CONFIGURATION*/
      };
      if (Object.keys(product2).length === 0) {
        Object.assign(product2, {
          version: "1.95.0-dev",
          nameShort: "Code - OSS Dev",
          nameLong: "Code - OSS Dev",
          applicationName: "code-oss",
          dataFolderName: ".vscode-oss",
          urlProtocol: "code-oss",
          reportIssueUrl: "https://github.com/microsoft/vscode/issues/new",
          licenseName: "MIT",
          licenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt",
          serverLicenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt"
        });
      }
    }
    product_default = product2;
  }
});

// out-build/vs/platform/profiling/common/profiling.js
var IV8InspectProfilingService, Utils;
var init_profiling = __esm({
  "out-build/vs/platform/profiling/common/profiling.js"() {
    "use strict";
    init_path();
    init_instantiation();
    IV8InspectProfilingService = createDecorator("IV8InspectProfilingService");
    (function(Utils2) {
      function isValidProfile(profile) {
        return Boolean(profile.samples && profile.timeDeltas);
      }
      Utils2.isValidProfile = isValidProfile;
      function rewriteAbsolutePaths(profile, replace = "noAbsolutePaths") {
        for (const node of profile.nodes) {
          if (node.callFrame && node.callFrame.url) {
            if (isAbsolute(node.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(node.callFrame.url)) {
              node.callFrame.url = join3(replace, basename(node.callFrame.url));
            }
          }
        }
        return profile;
      }
      Utils2.rewriteAbsolutePaths = rewriteAbsolutePaths;
    })(Utils || (Utils = {}));
  }
});

// out-build/vs/base/node/unc.js
function processUNCHostAllowlist() {
  return process.uncHostAllowlist;
}
function addUNCHostToAllowlist(allowedHost) {
  if (process.platform !== "win32") {
    return;
  }
  const allowlist = processUNCHostAllowlist();
  if (allowlist) {
    if (typeof allowedHost === "string") {
      allowlist.add(allowedHost.toLowerCase());
    } else {
      for (const host of toSafeStringArray(allowedHost)) {
        addUNCHostToAllowlist(host);
      }
    }
  }
}
function toSafeStringArray(arg0) {
  const allowedUNCHosts = /* @__PURE__ */ new Set();
  if (Array.isArray(arg0)) {
    for (const host of arg0) {
      if (typeof host === "string") {
        allowedUNCHosts.add(host);
      }
    }
  }
  return Array.from(allowedUNCHosts);
}
var init_unc = __esm({
  "out-build/vs/base/node/unc.js"() {
    "use strict";
  }
});

// out-build/vs/code/node/cli.js
var cli_exports = {};
__export(cli_exports, {
  main: () => main
});
import { spawn } from "child_process";
import { chmodSync, existsSync as existsSync2, readFileSync, statSync, truncateSync, unlinkSync } from "fs";
import { homedir, release, tmpdir as tmpdir4 } from "os";
function shouldSpawnCliProcess(argv) {
  return !!argv["install-source"] || !!argv["list-extensions"] || !!argv["install-extension"] || !!argv["uninstall-extension"] || !!argv["update-extensions"] || !!argv["locate-extension"] || !!argv["telemetry"];
}
async function main(argv) {
  let args;
  try {
    args = parseCLIProcessArgv(argv);
  } catch (err) {
    console.error(err.message);
    return;
  }
  for (const subcommand of NATIVE_CLI_COMMANDS) {
    if (args[subcommand]) {
      if (!product_default.tunnelApplicationName) {
        console.error(`'${subcommand}' command not supported in ${product_default.applicationName}`);
        return;
      }
      const env2 = {
        ...process.env
      };
      delete env2["ELECTRON_RUN_AS_NODE"];
      const tunnelArgs = argv.slice(argv.indexOf(subcommand) + 1);
      return new Promise((resolve2, reject) => {
        let tunnelProcess;
        const stdio = ["ignore", "pipe", "pipe"];
        if (process.env["VSCODE_DEV"]) {
          tunnelProcess = spawn("cargo", ["run", "--", subcommand, ...tunnelArgs], { cwd: join3(getAppRoot(), "cli"), stdio, env: env2 });
        } else {
          const appPath = process.platform === "darwin" ? join3(dirname3(dirname3(process.execPath)), "Resources", "app") : dirname3(process.execPath);
          const tunnelCommand = join3(appPath, "bin", `${product_default.tunnelApplicationName}${isWindows2 ? ".exe" : ""}`);
          tunnelProcess = spawn(tunnelCommand, [subcommand, ...tunnelArgs], { cwd: cwd(), stdio, env: env2 });
        }
        tunnelProcess.stdout.pipe(process.stdout);
        tunnelProcess.stderr.pipe(process.stderr);
        tunnelProcess.on("exit", resolve2);
        tunnelProcess.on("error", reject);
      });
    }
  }
  if (args.help) {
    const executable = `${product_default.applicationName}${isWindows2 ? ".exe" : ""}`;
    console.log(buildHelpMessage(product_default.nameLong, executable, product_default.version, OPTIONS));
  } else if (args.version) {
    console.log(buildVersionMessage(product_default.version, product_default.commit));
  } else if (args["locate-shell-integration-path"]) {
    let file;
    switch (args["locate-shell-integration-path"]) {
      // Usage: `[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path bash)"`
      case "bash":
        file = "shellIntegration-bash.sh";
        break;
      // Usage: `if ($env:TERM_PROGRAM -eq "vscode") { . "$(code --locate-shell-integration-path pwsh)" }`
      case "pwsh":
        file = "shellIntegration.ps1";
        break;
      // Usage: `[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"`
      case "zsh":
        file = "shellIntegration-rc.zsh";
        break;
      // Usage: `string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)`
      case "fish":
        file = "shellIntegration.fish";
        break;
      default:
        throw new Error("Error using --locate-shell-integration-path: Invalid shell type");
    }
    console.log(join3(getAppRoot(), "out", "vs", "workbench", "contrib", "terminal", "common", "scripts", file));
  } else if (shouldSpawnCliProcess(args)) {
    let cliProcessMain;
    if (process.env["VSCODE_DEV"]) {
      cliProcessMain = "./cliProcessMain.js";
    } else {
      cliProcessMain = "./vs/code/node/cliProcessMain.js";
    }
    const cli = await import(cliProcessMain);
    await cli.main(args);
    return;
  } else if (args["file-write"]) {
    const argsFile = args._[0];
    if (!argsFile || !isAbsolute(argsFile) || !existsSync2(argsFile) || !statSync(argsFile).isFile()) {
      throw new Error("Using --file-write with invalid arguments.");
    }
    let source;
    let target;
    try {
      const argsContents = JSON.parse(readFileSync(argsFile, "utf8"));
      source = argsContents.source;
      target = argsContents.target;
    } catch (error) {
      throw new Error("Using --file-write with invalid arguments.");
    }
    if (isWindows2) {
      for (const path4 of [source, target]) {
        if (typeof path4 === "string" && isUNC(path4)) {
          addUNCHostToAllowlist(URI.file(path4).authority);
        }
      }
    }
    if (!source || !target || source === target || // make sure source and target are provided and are not the same
    !isAbsolute(source) || !isAbsolute(target) || // make sure both source and target are absolute paths
    !existsSync2(source) || !statSync(source).isFile() || // make sure source exists as file
    !existsSync2(target) || !statSync(target).isFile()) {
      throw new Error("Using --file-write with invalid arguments.");
    }
    try {
      let targetMode = 0;
      let restoreMode = false;
      if (!!args["file-chmod"]) {
        targetMode = statSync(target).mode;
        if (!(targetMode & 128)) {
          chmodSync(target, targetMode | 128);
          restoreMode = true;
        }
      }
      const data = readFileSync(source);
      if (isWindows2) {
        truncateSync(target, 0);
        writeFileSync2(target, data, { flag: "r+" });
      } else {
        writeFileSync2(target, data);
      }
      if (restoreMode) {
        chmodSync(target, targetMode);
      }
    } catch (error) {
      error.message = `Error using --file-write: ${error.message}`;
      throw error;
    }
  } else {
    const env2 = {
      ...process.env,
      "ELECTRON_NO_ATTACH_CONSOLE": "1"
    };
    delete env2["ELECTRON_RUN_AS_NODE"];
    const processCallbacks = [];
    if (args.verbose) {
      env2["ELECTRON_ENABLE_LOGGING"] = "1";
    }
    if (args.verbose || args.status) {
      processCallbacks.push(async (child2) => {
        child2.stdout?.on("data", (data) => console.log(data.toString("utf8").trim()));
        child2.stderr?.on("data", (data) => console.log(data.toString("utf8").trim()));
        await Event.toPromise(Event.fromNodeEventEmitter(child2, "exit"));
      });
    }
    const hasReadStdinArg = args._.some((arg) => arg === "-");
    if (hasReadStdinArg) {
      args._ = args._.filter((a) => a !== "-");
      argv = argv.filter((a) => a !== "-");
    }
    let stdinFilePath;
    if (hasStdinWithoutTty()) {
      if (hasReadStdinArg) {
        stdinFilePath = getStdinFilePath();
        try {
          const readFromStdinDone = new DeferredPromise();
          await readFromStdin(stdinFilePath, !!args.verbose, () => readFromStdinDone.complete());
          if (!args.wait) {
            processCallbacks.push(() => readFromStdinDone.p);
          }
          addArg(argv, stdinFilePath);
          addArg(argv, "--skip-add-to-recently-opened");
          console.log(`Reading from stdin via: ${stdinFilePath}`);
        } catch (e) {
          console.log(`Failed to create file to read via stdin: ${e.toString()}`);
          stdinFilePath = void 0;
        }
      } else {
        processCallbacks.push((_) => stdinDataListener(1e3).then((dataReceived) => {
          if (dataReceived) {
            if (isWindows2) {
              console.log(`Run with '${product_default.applicationName} -' to read output from another program (e.g. 'echo Hello World | ${product_default.applicationName} -').`);
            } else {
              console.log(`Run with '${product_default.applicationName} -' to read from stdin (e.g. 'ps aux | grep code | ${product_default.applicationName} -').`);
            }
          }
        }));
      }
    }
    const isMacOSBigSurOrNewer = isMacintosh && release() > "20.0.0";
    let waitMarkerFilePath;
    if (args.wait) {
      waitMarkerFilePath = createWaitMarkerFileSync(args.verbose);
      if (waitMarkerFilePath) {
        addArg(argv, "--waitMarkerFilePath", waitMarkerFilePath);
      }
      processCallbacks.push(async (child2) => {
        let childExitPromise;
        if (isMacOSBigSurOrNewer) {
          childExitPromise = new Promise((resolve2) => {
            child2.on("exit", (code, signal) => {
              if (code !== 0 || signal) {
                resolve2();
              }
            });
          });
        } else {
          childExitPromise = Event.toPromise(Event.fromNodeEventEmitter(child2, "exit"));
        }
        try {
          await Promise.race([
            whenDeleted(waitMarkerFilePath),
            Event.toPromise(Event.fromNodeEventEmitter(child2, "error")),
            childExitPromise
          ]);
        } finally {
          if (stdinFilePath) {
            unlinkSync(stdinFilePath);
          }
        }
      });
    }
    if (args["prof-startup"]) {
      const profileHost = "127.0.0.1";
      const portMain = await findFreePort(randomPort(), 10, 3e3);
      const portRenderer = await findFreePort(portMain + 1, 10, 3e3);
      const portExthost = await findFreePort(portRenderer + 1, 10, 3e3);
      if (portMain * portRenderer * portExthost === 0) {
        throw new Error("Failed to find free ports for profiler. Make sure to shutdown all instances of the editor first.");
      }
      const filenamePrefix = randomPath(homedir(), "prof");
      addArg(argv, `--inspect-brk=${profileHost}:${portMain}`);
      addArg(argv, `--remote-debugging-port=${profileHost}:${portRenderer}`);
      addArg(argv, `--inspect-brk-extensions=${profileHost}:${portExthost}`);
      addArg(argv, `--prof-startup-prefix`, filenamePrefix);
      addArg(argv, `--no-cached-data`);
      writeFileSync2(filenamePrefix, argv.slice(-6).join("|"));
      processCallbacks.push(async (_child) => {
        class Profiler {
          static async start(name, filenamePrefix2, opts) {
            const profiler = await import("v8-inspect-profiler");
            let session;
            try {
              session = await profiler.startProfiling({ ...opts, host: profileHost });
            } catch (err) {
              console.error(`FAILED to start profiling for '${name}' on port '${opts.port}'`);
            }
            return {
              async stop() {
                if (!session) {
                  return;
                }
                let suffix = "";
                const result = await session.stop();
                if (!process.env["VSCODE_DEV"]) {
                  result.profile = Utils.rewriteAbsolutePaths(result.profile, "piiRemoved");
                  suffix = ".txt";
                }
                writeFileSync2(`${filenamePrefix2}.${name}.cpuprofile${suffix}`, JSON.stringify(result.profile, void 0, 4));
              }
            };
          }
        }
        try {
          const mainProfileRequest = Profiler.start("main", filenamePrefix, { port: portMain });
          const extHostProfileRequest = Profiler.start("extHost", filenamePrefix, { port: portExthost, tries: 300 });
          const rendererProfileRequest = Profiler.start("renderer", filenamePrefix, {
            port: portRenderer,
            tries: 200,
            target: function(targets) {
              return targets.filter((target) => {
                if (!target.webSocketDebuggerUrl) {
                  return false;
                }
                if (target.type === "page") {
                  return target.url.indexOf("workbench/workbench.html") > 0 || target.url.indexOf("workbench/workbench-dev.html") > 0;
                } else {
                  return true;
                }
              })[0];
            }
          });
          const main2 = await mainProfileRequest;
          const extHost = await extHostProfileRequest;
          const renderer = await rendererProfileRequest;
          await whenDeleted(filenamePrefix);
          await main2.stop();
          await renderer.stop();
          await extHost.stop();
          writeFileSync2(filenamePrefix, "");
        } catch (e) {
          console.error("Failed to profile startup. Make sure to quit Code first.");
        }
      });
    }
    const options = {
      detached: true,
      env: env2
    };
    if (!args.verbose) {
      options["stdio"] = "ignore";
    }
    let child;
    if (!isMacOSBigSurOrNewer) {
      if (!args.verbose && args.status) {
        options["stdio"] = ["ignore", "pipe", "ignore"];
      }
      child = spawn(process.execPath, argv.slice(2), options);
    } else {
      const spawnArgs = ["-n", "-g"];
      spawnArgs.push("-a", process.execPath);
      if (args.verbose || args.status) {
        spawnArgs.push("--wait-apps");
        for (const outputType of args.verbose ? ["stdout", "stderr"] : ["stdout"]) {
          const tmpName = randomPath(tmpdir4(), `code-${outputType}`);
          writeFileSync2(tmpName, "");
          spawnArgs.push(`--${outputType}`, tmpName);
          processCallbacks.push(async (child2) => {
            try {
              const stream = outputType === "stdout" ? process.stdout : process.stderr;
              const cts = new CancellationTokenSource();
              child2.on("close", () => {
                setTimeout(() => cts.dispose(true), 200);
              });
              await watchFileContents(tmpName, (chunk) => stream.write(chunk), () => {
              }, cts.token);
            } finally {
              unlinkSync(tmpName);
            }
          });
        }
      }
      for (const e in env2) {
        if (e !== "_") {
          spawnArgs.push("--env");
          spawnArgs.push(`${e}=${env2[e]}`);
        }
      }
      spawnArgs.push("--args", ...argv.slice(2));
      if (env2["VSCODE_DEV"]) {
        const curdir = ".";
        const launchDirIndex = spawnArgs.indexOf(curdir);
        if (launchDirIndex !== -1) {
          spawnArgs[launchDirIndex] = resolve(curdir);
        }
      }
      child = spawn("open", spawnArgs, { ...options, env: {} });
    }
    return Promise.all(processCallbacks.map((callback) => callback(child)));
  }
}
function getAppRoot() {
  return dirname3(FileAccess.asFileUri("").fsPath);
}
function eventuallyExit(code) {
  setTimeout(() => process.exit(code), 0);
}
var init_cli = __esm({
  "out-build/vs/code/node/cli.js"() {
    "use strict";
    init_event();
    init_path();
    init_platform();
    init_ports();
    init_pfs();
    init_ports2();
    init_nodejsWatcherLib();
    init_argv();
    init_argvHelper();
    init_stdin();
    init_wait();
    init_product();
    init_cancellation();
    init_extpath();
    init_profiling();
    init_network();
    init_process();
    init_unc();
    init_uri();
    init_async();
    main(process.argv).then(() => eventuallyExit(0)).then(null, (err) => {
      console.error(err.message || err.stack || err);
      eventuallyExit(1);
    });
  }
});

// out-build/bootstrap-cli.js
delete process.env["VSCODE_CWD"];

// out-build/cli.js
import { dirname as dirname5 } from "path";
import { fileURLToPath as fileURLToPath3 } from "url";

// out-build/bootstrap-node.js
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var isWindows = process.platform === "win32";
Error.stackTraceLimit = 100;
if (!process.env["VSCODE_HANDLES_SIGPIPE"]) {
  let didLogAboutSIGPIPE = false;
  process.on("SIGPIPE", () => {
    if (!didLogAboutSIGPIPE) {
      didLogAboutSIGPIPE = true;
      console.error(new Error(`Unexpected SIGPIPE`));
    }
  });
}
function setupCurrentWorkingDirectory() {
  try {
    if (typeof process.env["VSCODE_CWD"] !== "string") {
      process.env["VSCODE_CWD"] = process.cwd();
    }
    if (process.platform === "win32") {
      process.chdir(path.dirname(process.execPath));
    }
  } catch (err) {
    console.error(err);
  }
}
setupCurrentWorkingDirectory();
function configurePortable(product3) {
  const appRoot = path.dirname(__dirname);
  function getApplicationPath() {
    if (process.env["VSCODE_DEV"]) {
      return appRoot;
    }
    if (process.platform === "darwin") {
      return path.dirname(path.dirname(path.dirname(appRoot)));
    }
    return path.dirname(path.dirname(appRoot));
  }
  function getPortableDataPath() {
    if (process.env["VSCODE_PORTABLE"]) {
      return process.env["VSCODE_PORTABLE"];
    }
    if (process.platform === "win32" || process.platform === "linux") {
      return path.join(getApplicationPath(), "data");
    }
    const portableDataName = product3.portable || `${product3.applicationName}-portable-data`;
    return path.join(path.dirname(getApplicationPath()), portableDataName);
  }
  const portableDataPath = getPortableDataPath();
  const isPortable = !("target" in product3) && fs.existsSync(portableDataPath);
  const portableTempPath = path.join(portableDataPath, "tmp");
  const isTempPortable = isPortable && fs.existsSync(portableTempPath);
  if (isPortable) {
    process.env["VSCODE_PORTABLE"] = portableDataPath;
  } else {
    delete process.env["VSCODE_PORTABLE"];
  }
  if (isTempPortable) {
    if (process.platform === "win32") {
      process.env["TMP"] = portableTempPath;
      process.env["TEMP"] = portableTempPath;
    } else {
      process.env["TMPDIR"] = portableTempPath;
    }
  }
  return {
    portableDataPath,
    isPortable
  };
}

// out-build/bootstrap-esm.js
import * as path2 from "path";
import * as fs2 from "fs";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createRequire as createRequire3, register } from "node:module";

// out-build/bootstrap-meta.js
import { createRequire as createRequire2 } from "node:module";
var require3 = createRequire2(import.meta.url);
var productObj = { BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION" };
if (productObj["BUILD_INSERT_PRODUCT_CONFIGURATION"]) {
  productObj = require3("../product.json");
}
var pkgObj = { BUILD_INSERT_PACKAGE_CONFIGURATION: "BUILD_INSERT_PACKAGE_CONFIGURATION" };
if (pkgObj["BUILD_INSERT_PACKAGE_CONFIGURATION"]) {
  pkgObj = require3("../package.json");
}
var product = productObj;
var pkg = pkgObj;

// out-build/vs/base/common/performance.js
function _definePolyfillMarks(timeOrigin) {
  const _data = [];
  if (typeof timeOrigin === "number") {
    _data.push("code/timeOrigin", timeOrigin);
  }
  function mark2(name, markOptions) {
    _data.push(name, markOptions?.startTime ?? Date.now());
  }
  function getMarks2() {
    const result = [];
    for (let i = 0; i < _data.length; i += 2) {
      result.push({
        name: _data[i],
        startTime: _data[i + 1]
      });
    }
    return result;
  }
  return { mark: mark2, getMarks: getMarks2 };
}
function _define() {
  if (typeof performance === "object" && typeof performance.mark === "function" && !performance.nodeTiming) {
    if (typeof performance.timeOrigin !== "number" && !performance.timing) {
      return _definePolyfillMarks();
    } else {
      return {
        mark(name, markOptions) {
          performance.mark(name, markOptions);
        },
        getMarks() {
          let timeOrigin = performance.timeOrigin;
          if (typeof timeOrigin !== "number") {
            timeOrigin = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart;
          }
          const result = [{ name: "code/timeOrigin", startTime: Math.round(timeOrigin) }];
          for (const entry of performance.getEntriesByType("mark")) {
            result.push({
              name: entry.name,
              startTime: Math.round(timeOrigin + entry.startTime)
            });
          }
          return result;
        }
      };
    }
  } else if (typeof process === "object") {
    const timeOrigin = performance?.timeOrigin;
    return _definePolyfillMarks(timeOrigin);
  } else {
    console.trace("perf-util loaded in UNKNOWN environment");
    return _definePolyfillMarks();
  }
}
function _factory(sharedObj) {
  if (!sharedObj.MonacoPerformanceMarks) {
    sharedObj.MonacoPerformanceMarks = _define();
  }
  return sharedObj.MonacoPerformanceMarks;
}
var perf = _factory(globalThis);
var mark = perf.mark;
var getMarks = perf.getMarks;

// out-build/bootstrap-esm.js
var require4 = createRequire3(import.meta.url);
var __dirname2 = path2.dirname(fileURLToPath2(import.meta.url));
if (process.env["ELECTRON_RUN_AS_NODE"] || process.versions["electron"]) {
  const jsCode = `
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`;
  register(`data:text/javascript;base64,${Buffer.from(jsCode).toString("base64")}`, import.meta.url);
}
globalThis._VSCODE_PRODUCT_JSON = { ...product };
if (process.env["VSCODE_DEV"]) {
  try {
    const overrides = require4("../product.overrides.json");
    globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, overrides);
  } catch (error) {
  }
}
globalThis._VSCODE_PACKAGE_JSON = { ...pkg };
globalThis._VSCODE_FILE_ROOT = __dirname2;
var setupNLSResult = void 0;
function setupNLS() {
  if (!setupNLSResult) {
    setupNLSResult = doSetupNLS();
  }
  return setupNLSResult;
}
async function doSetupNLS() {
  mark("code/willLoadNls");
  let nlsConfig = void 0;
  let messagesFile;
  if (process.env["VSCODE_NLS_CONFIG"]) {
    try {
      nlsConfig = JSON.parse(process.env["VSCODE_NLS_CONFIG"]);
      if (nlsConfig?.languagePack?.messagesFile) {
        messagesFile = nlsConfig.languagePack.messagesFile;
      } else if (nlsConfig?.defaultMessagesFile) {
        messagesFile = nlsConfig.defaultMessagesFile;
      }
      globalThis._VSCODE_NLS_LANGUAGE = nlsConfig?.resolvedLanguage;
    } catch (e) {
      console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${e}`);
    }
  }
  if (process.env["VSCODE_DEV"] || // no NLS support in dev mode
  !messagesFile) {
    return void 0;
  }
  try {
    globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await fs2.promises.readFile(messagesFile)).toString());
  } catch (error) {
    console.error(`Error reading NLS messages file ${messagesFile}: ${error}`);
    if (nlsConfig?.languagePack?.corruptMarkerFile) {
      try {
        await fs2.promises.writeFile(nlsConfig.languagePack.corruptMarkerFile, "corrupted");
      } catch (error2) {
        console.error(`Error writing corrupted NLS marker file: ${error2}`);
      }
    }
    if (nlsConfig?.defaultMessagesFile && nlsConfig.defaultMessagesFile !== messagesFile) {
      try {
        globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await fs2.promises.readFile(nlsConfig.defaultMessagesFile)).toString());
      } catch (error2) {
        console.error(`Error reading default NLS messages file ${nlsConfig.defaultMessagesFile}: ${error2}`);
      }
    }
  }
  mark("code/didLoadNls");
  return nlsConfig;
}
async function bootstrapESM() {
  await setupNLS();
}

// out-build/vs/base/node/nls.js
import * as path3 from "path";
import * as fs3 from "fs";
async function resolveNLSConfiguration({ userLocale, osLocale, userDataPath, commit, nlsMetadataPath }) {
  mark("code/willGenerateNls");
  if (process.env["VSCODE_DEV"] || userLocale === "pseudo" || userLocale.startsWith("en") || !commit || !userDataPath) {
    return defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath);
  }
  try {
    const languagePacks = await getLanguagePackConfigurations(userDataPath);
    if (!languagePacks) {
      return defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath);
    }
    const resolvedLanguage = resolveLanguagePackLanguage(languagePacks, userLocale);
    if (!resolvedLanguage) {
      return defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath);
    }
    const languagePack = languagePacks[resolvedLanguage];
    const mainLanguagePackPath = languagePack?.translations?.["vscode"];
    if (!languagePack || typeof languagePack.hash !== "string" || !languagePack.translations || typeof mainLanguagePackPath !== "string" || !await exists(mainLanguagePackPath)) {
      return defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath);
    }
    const languagePackId = `${languagePack.hash}.${resolvedLanguage}`;
    const globalLanguagePackCachePath = path3.join(userDataPath, "clp", languagePackId);
    const commitLanguagePackCachePath = path3.join(globalLanguagePackCachePath, commit);
    const languagePackMessagesFile = path3.join(commitLanguagePackCachePath, "nls.messages.json");
    const translationsConfigFile = path3.join(globalLanguagePackCachePath, "tcf.json");
    const languagePackCorruptMarkerFile = path3.join(globalLanguagePackCachePath, "corrupted.info");
    if (await exists(languagePackCorruptMarkerFile)) {
      await fs3.promises.rm(globalLanguagePackCachePath, { recursive: true, force: true, maxRetries: 3 });
    }
    const result = {
      userLocale,
      osLocale,
      resolvedLanguage,
      defaultMessagesFile: path3.join(nlsMetadataPath, "nls.messages.json"),
      languagePack: {
        translationsConfigFile,
        messagesFile: languagePackMessagesFile,
        corruptMarkerFile: languagePackCorruptMarkerFile
      },
      // NLS: below properties are a relic from old times only used by vscode-nls and deprecated
      locale: userLocale,
      availableLanguages: { "*": resolvedLanguage },
      _languagePackId: languagePackId,
      _languagePackSupport: true,
      _translationsConfigFile: translationsConfigFile,
      _cacheRoot: globalLanguagePackCachePath,
      _resolvedLanguagePackCoreLocation: commitLanguagePackCachePath,
      _corruptedFile: languagePackCorruptMarkerFile
    };
    if (await exists(commitLanguagePackCachePath)) {
      touch(commitLanguagePackCachePath).catch(() => {
      });
      mark("code/didGenerateNls");
      return result;
    }
    const [, nlsDefaultKeys, nlsDefaultMessages, nlsPackdata] = await Promise.all([
      fs3.promises.mkdir(commitLanguagePackCachePath, { recursive: true }),
      JSON.parse(await fs3.promises.readFile(path3.join(nlsMetadataPath, "nls.keys.json"), "utf-8")),
      JSON.parse(await fs3.promises.readFile(path3.join(nlsMetadataPath, "nls.messages.json"), "utf-8")),
      JSON.parse(await fs3.promises.readFile(mainLanguagePackPath, "utf-8"))
    ]);
    const nlsResult = [];
    let nlsIndex = 0;
    for (const [moduleId, nlsKeys] of nlsDefaultKeys) {
      const moduleTranslations = nlsPackdata.contents[moduleId];
      for (const nlsKey of nlsKeys) {
        nlsResult.push(moduleTranslations?.[nlsKey] || nlsDefaultMessages[nlsIndex]);
        nlsIndex++;
      }
    }
    await Promise.all([
      fs3.promises.writeFile(languagePackMessagesFile, JSON.stringify(nlsResult), "utf-8"),
      fs3.promises.writeFile(translationsConfigFile, JSON.stringify(languagePack.translations), "utf-8")
    ]);
    mark("code/didGenerateNls");
    return result;
  } catch (error) {
    console.error("Generating translation files failed.", error);
  }
  return defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath);
}
async function getLanguagePackConfigurations(userDataPath) {
  const configFile = path3.join(userDataPath, "languagepacks.json");
  try {
    return JSON.parse(await fs3.promises.readFile(configFile, "utf-8"));
  } catch (err) {
    return void 0;
  }
}
function resolveLanguagePackLanguage(languagePacks, locale) {
  try {
    while (locale) {
      if (languagePacks[locale]) {
        return locale;
      }
      const index = locale.lastIndexOf("-");
      if (index > 0) {
        locale = locale.substring(0, index);
      } else {
        return void 0;
      }
    }
  } catch (error) {
    console.error("Resolving language pack configuration failed.", error);
  }
  return void 0;
}
function defaultNLSConfiguration(userLocale, osLocale, nlsMetadataPath) {
  mark("code/didGenerateNls");
  return {
    userLocale,
    osLocale,
    resolvedLanguage: "en",
    defaultMessagesFile: path3.join(nlsMetadataPath, "nls.messages.json"),
    // NLS: below 2 are a relic from old times only used by vscode-nls and deprecated
    locale: userLocale,
    availableLanguages: {}
  };
}
async function exists(path4) {
  try {
    await fs3.promises.access(path4);
    return true;
  } catch {
    return false;
  }
}
function touch(path4) {
  const date = /* @__PURE__ */ new Date();
  return fs3.promises.utimes(path4, date, date);
}

// out-build/cli.js
var __dirname3 = dirname5(fileURLToPath3(import.meta.url));
var nlsConfiguration = await resolveNLSConfiguration({ userLocale: "en", osLocale: "en", commit: product.commit, userDataPath: "", nlsMetadataPath: __dirname3 });
process.env["VSCODE_NLS_CONFIG"] = JSON.stringify(nlsConfiguration);
configurePortable(product);
process.env["VSCODE_CLI"] = "1";
await bootstrapESM();
await Promise.resolve().then(() => (init_cli(), cli_exports));

//# sourceMappingURL=cli.js.map
