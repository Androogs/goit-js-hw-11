var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {};
function e(t) {
  return t && t.__esModule ? t.default : t;
}
function o(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: n } = Object.prototype,
  { getPrototypeOf: i } = Object,
  r =
    ((s = Object.create(null)),
    (t) => {
      const e = n.call(t);
      return s[e] || (s[e] = e.slice(8, -1).toLowerCase());
    });
var s;
const a = (t) => ((t = t.toLowerCase()), (e) => r(e) === t),
  l = (t) => (e) => typeof e === t,
  { isArray: c } = Array,
  f = l("undefined");
const d = a("ArrayBuffer");
const u = l("string"),
  h = l("function"),
  p = l("number"),
  m = (t) => null !== t && "object" == typeof t,
  g = (t) => {
    if ("object" !== r(t)) return !1;
    const e = i(t);
    return !(
      (null !== e &&
        e !== Object.prototype &&
        null !== Object.getPrototypeOf(e)) ||
      Symbol.toStringTag in t ||
      Symbol.iterator in t
    );
  },
  y = a("Date"),
  v = a("File"),
  w = a("Blob"),
  b = a("FileList"),
  C = a("URLSearchParams");
function x(t, e, { allOwnKeys: o = !1 } = {}) {
  if (null == t) return;
  let n, i;
  if (("object" != typeof t && (t = [t]), c(t)))
    for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
  else {
    const i = o ? Object.getOwnPropertyNames(t) : Object.keys(t),
      r = i.length;
    let s;
    for (n = 0; n < r; n++) (s = i[n]), e.call(null, t[s], s, t);
  }
}
function N(t, e) {
  e = e.toLowerCase();
  const o = Object.keys(t);
  let n,
    i = o.length;
  for (; i-- > 0; ) if (((n = o[i]), e === n.toLowerCase())) return n;
  return null;
}
const E =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : t,
  O = (t) => !f(t) && t !== E;
const S =
  ((I = "undefined" != typeof Uint8Array && i(Uint8Array)),
  (t) => I && t instanceof I);
var I;
const A = a("HTMLFormElement"),
  k = (
    ({ hasOwnProperty: t }) =>
    (e, o) =>
      t.call(e, o)
  )(Object.prototype),
  T = a("RegExp"),
  L = (t, e) => {
    const o = Object.getOwnPropertyDescriptors(t),
      n = {};
    x(o, (o, i) => {
      !1 !== e(o, i, t) && (n[i] = o);
    }),
      Object.defineProperties(t, n);
  },
  R = {
    DIGIT: "0123456789",
    ALPHA: "abcdefghijklmnopqrstuvwxyz",
    ALPHA_DIGIT:
      "abcdefghijklmnopqrstuvwxyz" +
      "abcdefghijklmnopqrstuvwxyz".toUpperCase() +
      "0123456789",
  };
var B = {
  isArray: c,
  isArrayBuffer: d,
  isBuffer: function (t) {
    return (
      null !== t &&
      !f(t) &&
      null !== t.constructor &&
      !f(t.constructor) &&
      h(t.constructor.isBuffer) &&
      t.constructor.isBuffer(t)
    );
  },
  isFormData: (t) => {
    const e = "[object FormData]";
    return (
      t &&
      (("function" == typeof FormData && t instanceof FormData) ||
        n.call(t) === e ||
        (h(t.toString) && t.toString() === e))
    );
  },
  isArrayBufferView: function (t) {
    let e;
    return (
      (e =
        "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && d(t.buffer)),
      e
    );
  },
  isString: u,
  isNumber: p,
  isBoolean: (t) => !0 === t || !1 === t,
  isObject: m,
  isPlainObject: g,
  isUndefined: f,
  isDate: y,
  isFile: v,
  isBlob: w,
  isRegExp: T,
  isFunction: h,
  isStream: (t) => m(t) && h(t.pipe),
  isURLSearchParams: C,
  isTypedArray: S,
  isFileList: b,
  forEach: x,
  merge: function t() {
    const { caseless: e } = (O(this) && this) || {},
      o = {},
      n = (n, i) => {
        const r = (e && N(o, i)) || i;
        g(o[r]) && g(n)
          ? (o[r] = t(o[r], n))
          : g(n)
          ? (o[r] = t({}, n))
          : c(n)
          ? (o[r] = n.slice())
          : (o[r] = n);
      };
    for (let t = 0, e = arguments.length; t < e; t++)
      arguments[t] && x(arguments[t], n);
    return o;
  },
  extend: (t, e, n, { allOwnKeys: i } = {}) => (
    x(
      e,
      (e, i) => {
        n && h(e) ? (t[i] = o(e, n)) : (t[i] = e);
      },
      { allOwnKeys: i }
    ),
    t
  ),
  trim: (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
  stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
  inherits: (t, e, o, n) => {
    (t.prototype = Object.create(e.prototype, n)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      o && Object.assign(t.prototype, o);
  },
  toFlatObject: (t, e, o, n) => {
    let r, s, a;
    const l = {};
    if (((e = e || {}), null == t)) return e;
    do {
      for (r = Object.getOwnPropertyNames(t), s = r.length; s-- > 0; )
        (a = r[s]), (n && !n(a, t, e)) || l[a] || ((e[a] = t[a]), (l[a] = !0));
      t = !1 !== o && i(t);
    } while (t && (!o || o(t, e)) && t !== Object.prototype);
    return e;
  },
  kindOf: r,
  kindOfTest: a,
  endsWith: (t, e, o) => {
    (t = String(t)),
      (void 0 === o || o > t.length) && (o = t.length),
      (o -= e.length);
    const n = t.indexOf(e, o);
    return -1 !== n && n === o;
  },
  toArray: (t) => {
    if (!t) return null;
    if (c(t)) return t;
    let e = t.length;
    if (!p(e)) return null;
    const o = new Array(e);
    for (; e-- > 0; ) o[e] = t[e];
    return o;
  },
  forEachEntry: (t, e) => {
    const o = (t && t[Symbol.iterator]).call(t);
    let n;
    for (; (n = o.next()) && !n.done; ) {
      const o = n.value;
      e.call(t, o[0], o[1]);
    }
  },
  matchAll: (t, e) => {
    let o;
    const n = [];
    for (; null !== (o = t.exec(e)); ) n.push(o);
    return n;
  },
  isHTMLForm: A,
  hasOwnProperty: k,
  hasOwnProp: k,
  reduceDescriptors: L,
  freezeMethods: (t) => {
    L(t, (e, o) => {
      if (h(t) && -1 !== ["arguments", "caller", "callee"].indexOf(o))
        return !1;
      const n = t[o];
      h(n) &&
        ((e.enumerable = !1),
        "writable" in e
          ? (e.writable = !1)
          : e.set ||
            (e.set = () => {
              throw Error("Can not rewrite read-only method '" + o + "'");
            }));
    });
  },
  toObjectSet: (t, e) => {
    const o = {},
      n = (t) => {
        t.forEach((t) => {
          o[t] = !0;
        });
      };
    return c(t) ? n(t) : n(String(t).split(e)), o;
  },
  toCamelCase: (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, o) {
      return e.toUpperCase() + o;
    }),
  noop: () => {},
  toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  findKey: N,
  global: E,
  isContextDefined: O,
  ALPHABET: R,
  generateString: (t = 16, e = R.ALPHA_DIGIT) => {
    let o = "";
    const { length: n } = e;
    for (; t--; ) o += e[(Math.random() * n) | 0];
    return o;
  },
  isSpecCompliantForm: function (t) {
    return !!(
      t &&
      h(t.append) &&
      "FormData" === t[Symbol.toStringTag] &&
      t[Symbol.iterator]
    );
  },
  toJSONObject: (t) => {
    const e = new Array(10),
      o = (t, n) => {
        if (m(t)) {
          if (e.indexOf(t) >= 0) return;
          if (!("toJSON" in t)) {
            e[n] = t;
            const i = c(t) ? [] : {};
            return (
              x(t, (t, e) => {
                const r = o(t, n + 1);
                !f(r) && (i[e] = r);
              }),
              (e[n] = void 0),
              i
            );
          }
        }
        return t;
      };
    return o(t, 0);
  },
};
function P(t, e, o, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    o && (this.config = o),
    n && (this.request = n),
    i && (this.response = i);
}
B.inherits(P, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const D = P.prototype,
  U = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  U[t] = { value: t };
}),
  Object.defineProperties(P, U),
  Object.defineProperty(D, "isAxiosError", { value: !0 }),
  (P.from = (t, e, o, n, i, r) => {
    const s = Object.create(D);
    return (
      B.toFlatObject(
        t,
        s,
        function (t) {
          return t !== Error.prototype;
        },
        (t) => "isAxiosError" !== t
      ),
      P.call(s, t.message, e, o, n, i),
      (s.cause = t),
      (s.name = t.name),
      r && Object.assign(s, r),
      s
    );
  });
var M,
  j,
  Y,
  F = P;
(j = function (t) {
  var e,
    o,
    n = J(t),
    i = n[0],
    r = n[1],
    s = new _(
      (function (t, e, o) {
        return (3 * (e + o)) / 4 - o;
      })(0, i, r)
    ),
    a = 0,
    l = r > 0 ? i - 4 : i;
  for (o = 0; o < l; o += 4)
    (e =
      (W[t.charCodeAt(o)] << 18) |
      (W[t.charCodeAt(o + 1)] << 12) |
      (W[t.charCodeAt(o + 2)] << 6) |
      W[t.charCodeAt(o + 3)]),
      (s[a++] = (e >> 16) & 255),
      (s[a++] = (e >> 8) & 255),
      (s[a++] = 255 & e);
  2 === r &&
    ((e = (W[t.charCodeAt(o)] << 2) | (W[t.charCodeAt(o + 1)] >> 4)),
    (s[a++] = 255 & e));
  1 === r &&
    ((e =
      (W[t.charCodeAt(o)] << 10) |
      (W[t.charCodeAt(o + 1)] << 4) |
      (W[t.charCodeAt(o + 2)] >> 2)),
    (s[a++] = (e >> 8) & 255),
    (s[a++] = 255 & e));
  return s;
}),
  (Y = function (t) {
    for (
      var e, o = t.length, n = o % 3, i = [], r = 16383, s = 0, a = o - n;
      s < a;
      s += r
    )
      i.push(Z(t, s, s + r > a ? a : s + r));
    1 === n
      ? ((e = t[o - 1]), i.push(H[e >> 2] + H[(e << 4) & 63] + "=="))
      : 2 === n &&
        ((e = (t[o - 2] << 8) + t[o - 1]),
        i.push(H[e >> 10] + H[(e >> 4) & 63] + H[(e << 2) & 63] + "="));
    return i.join("");
  });
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
for (
  var X,
    z,
    H = [],
    W = [],
    _ = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    $ = 0,
    V = q.length;
  $ < V;
  ++$
)
  (H[$] = q[$]), (W[q.charCodeAt($)] = $);
function J(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var o = t.indexOf("=");
  return -1 === o && (o = e), [o, o === e ? 0 : 4 - (o % 4)];
}
function Z(t, e, o) {
  for (var n, i, r = [], s = e; s < o; s += 3)
    (n =
      ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])),
      r.push(
        H[((i = n) >> 18) & 63] +
          H[(i >> 12) & 63] +
          H[(i >> 6) & 63] +
          H[63 & i]
      );
  return r.join("");
}
(W["-".charCodeAt(0)] = 62),
  (W["_".charCodeAt(0)] = 63),
  (X = function (t, e, o, n, i) {
    var r,
      s,
      a = 8 * i - n - 1,
      l = (1 << a) - 1,
      c = l >> 1,
      f = -7,
      d = o ? i - 1 : 0,
      u = o ? -1 : 1,
      h = t[e + d];
    for (
      d += u, r = h & ((1 << -f) - 1), h >>= -f, f += a;
      f > 0;
      r = 256 * r + t[e + d], d += u, f -= 8
    );
    for (
      s = r & ((1 << -f) - 1), r >>= -f, f += n;
      f > 0;
      s = 256 * s + t[e + d], d += u, f -= 8
    );
    if (0 === r) r = 1 - c;
    else {
      if (r === l) return s ? NaN : (1 / 0) * (h ? -1 : 1);
      (s += Math.pow(2, n)), (r -= c);
    }
    return (h ? -1 : 1) * s * Math.pow(2, r - n);
  }),
  (z = function (t, e, o, n, i, r) {
    var s,
      a,
      l,
      c = 8 * r - i - 1,
      f = (1 << c) - 1,
      d = f >> 1,
      u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      h = n ? 0 : r - 1,
      p = n ? 1 : -1,
      m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((a = isNaN(e) ? 1 : 0), (s = f))
          : ((s = Math.floor(Math.log(e) / Math.LN2)),
            e * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
            (e += s + d >= 1 ? u / l : u * Math.pow(2, 1 - d)) * l >= 2 &&
              (s++, (l /= 2)),
            s + d >= f
              ? ((a = 0), (s = f))
              : s + d >= 1
              ? ((a = (e * l - 1) * Math.pow(2, i)), (s += d))
              : ((a = e * Math.pow(2, d - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      t[o + h] = 255 & a, h += p, a /= 256, i -= 8
    );
    for (
      s = (s << i) | a, c += i;
      c > 0;
      t[o + h] = 255 & s, h += p, s /= 256, c -= 8
    );
    t[o + h - p] |= 128 * m;
  });
const G =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
M = Q;
function K(t) {
  if (t > 2147483647)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
  const e = new Uint8Array(t);
  return Object.setPrototypeOf(e, Q.prototype), e;
}
function Q(t, e, o) {
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    return ot(t);
  }
  return tt(t, e, o);
}
function tt(t, e, o) {
  if ("string" == typeof t)
    return (function (t, e) {
      ("string" == typeof e && "" !== e) || (e = "utf8");
      if (!Q.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      const o = 0 | st(t, e);
      let n = K(o);
      const i = n.write(t, e);
      i !== o && (n = n.slice(0, i));
      return n;
    })(t, e);
  if (ArrayBuffer.isView(t))
    return (function (t) {
      if (Yt(t, Uint8Array)) {
        const e = new Uint8Array(t);
        return it(e.buffer, e.byteOffset, e.byteLength);
      }
      return nt(t);
    })(t);
  if (null == t)
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof t
    );
  if (Yt(t, ArrayBuffer) || (t && Yt(t.buffer, ArrayBuffer)))
    return it(t, e, o);
  if (
    "undefined" != typeof SharedArrayBuffer &&
    (Yt(t, SharedArrayBuffer) || (t && Yt(t.buffer, SharedArrayBuffer)))
  )
    return it(t, e, o);
  if ("number" == typeof t)
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  const n = t.valueOf && t.valueOf();
  if (null != n && n !== t) return Q.from(n, e, o);
  const i = (function (t) {
    if (Q.isBuffer(t)) {
      const e = 0 | rt(t.length),
        o = K(e);
      return 0 === o.length || t.copy(o, 0, 0, e), o;
    }
    if (void 0 !== t.length)
      return "number" != typeof t.length || Ft(t.length) ? K(0) : nt(t);
    if ("Buffer" === t.type && Array.isArray(t.data)) return nt(t.data);
  })(t);
  if (i) return i;
  if (
    "undefined" != typeof Symbol &&
    null != Symbol.toPrimitive &&
    "function" == typeof t[Symbol.toPrimitive]
  )
    return Q.from(t[Symbol.toPrimitive]("string"), e, o);
  throw new TypeError(
    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
      typeof t
  );
}
function et(t) {
  if ("number" != typeof t)
    throw new TypeError('"size" argument must be of type number');
  if (t < 0)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
}
function ot(t) {
  return et(t), K(t < 0 ? 0 : 0 | rt(t));
}
function nt(t) {
  const e = t.length < 0 ? 0 : 0 | rt(t.length),
    o = K(e);
  for (let n = 0; n < e; n += 1) o[n] = 255 & t[n];
  return o;
}
function it(t, e, o) {
  if (e < 0 || t.byteLength < e)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < e + (o || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n;
  return (
    (n =
      void 0 === e && void 0 === o
        ? new Uint8Array(t)
        : void 0 === o
        ? new Uint8Array(t, e)
        : new Uint8Array(t, e, o)),
    Object.setPrototypeOf(n, Q.prototype),
    n
  );
}
function rt(t) {
  if (t >= 2147483647)
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        (2147483647).toString(16) +
        " bytes"
    );
  return 0 | t;
}
function st(t, e) {
  if (Q.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || Yt(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t)
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof t
    );
  const o = t.length,
    n = arguments.length > 2 && !0 === arguments[2];
  if (!n && 0 === o) return 0;
  let i = !1;
  for (;;)
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return o;
      case "utf8":
      case "utf-8":
        return Ut(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * o;
      case "hex":
        return o >>> 1;
      case "base64":
        return Mt(t).length;
      default:
        if (i) return n ? -1 : Ut(t).length;
        (e = ("" + e).toLowerCase()), (i = !0);
    }
}
function at(t, e, o) {
  let n = !1;
  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
  if (((void 0 === o || o > this.length) && (o = this.length), o <= 0))
    return "";
  if ((o >>>= 0) <= (e >>>= 0)) return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return bt(this, e, o);
      case "utf8":
      case "utf-8":
        return yt(this, e, o);
      case "ascii":
        return vt(this, e, o);
      case "latin1":
      case "binary":
        return wt(this, e, o);
      case "base64":
        return gt(this, e, o);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ct(this, e, o);
      default:
        if (n) throw new TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (n = !0);
    }
}
function lt(t, e, o) {
  const n = t[e];
  (t[e] = t[o]), (t[o] = n);
}
function ct(t, e, o, n, i) {
  if (0 === t.length) return -1;
  if (
    ("string" == typeof o
      ? ((n = o), (o = 0))
      : o > 2147483647
      ? (o = 2147483647)
      : o < -2147483648 && (o = -2147483648),
    Ft((o = +o)) && (o = i ? 0 : t.length - 1),
    o < 0 && (o = t.length + o),
    o >= t.length)
  ) {
    if (i) return -1;
    o = t.length - 1;
  } else if (o < 0) {
    if (!i) return -1;
    o = 0;
  }
  if (("string" == typeof e && (e = Q.from(e, n)), Q.isBuffer(e)))
    return 0 === e.length ? -1 : ft(t, e, o, n, i);
  if ("number" == typeof e)
    return (
      (e &= 255),
      "function" == typeof Uint8Array.prototype.indexOf
        ? i
          ? Uint8Array.prototype.indexOf.call(t, e, o)
          : Uint8Array.prototype.lastIndexOf.call(t, e, o)
        : ft(t, [e], o, n, i)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function ft(t, e, o, n, i) {
  let r,
    s = 1,
    a = t.length,
    l = e.length;
  if (
    void 0 !== n &&
    ("ucs2" === (n = String(n).toLowerCase()) ||
      "ucs-2" === n ||
      "utf16le" === n ||
      "utf-16le" === n)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (s = 2), (a /= 2), (l /= 2), (o /= 2);
  }
  function c(t, e) {
    return 1 === s ? t[e] : t.readUInt16BE(e * s);
  }
  if (i) {
    let n = -1;
    for (r = o; r < a; r++)
      if (c(t, r) === c(e, -1 === n ? 0 : r - n)) {
        if ((-1 === n && (n = r), r - n + 1 === l)) return n * s;
      } else -1 !== n && (r -= r - n), (n = -1);
  } else
    for (o + l > a && (o = a - l), r = o; r >= 0; r--) {
      let o = !0;
      for (let n = 0; n < l; n++)
        if (c(t, r + n) !== c(e, n)) {
          o = !1;
          break;
        }
      if (o) return r;
    }
  return -1;
}
function dt(t, e, o, n) {
  o = Number(o) || 0;
  const i = t.length - o;
  n ? (n = Number(n)) > i && (n = i) : (n = i);
  const r = e.length;
  let s;
  for (n > r / 2 && (n = r / 2), s = 0; s < n; ++s) {
    const n = parseInt(e.substr(2 * s, 2), 16);
    if (Ft(n)) return s;
    t[o + s] = n;
  }
  return s;
}
function ut(t, e, o, n) {
  return jt(Ut(e, t.length - o), t, o, n);
}
function ht(t, e, o, n) {
  return jt(
    (function (t) {
      const e = [];
      for (let o = 0; o < t.length; ++o) e.push(255 & t.charCodeAt(o));
      return e;
    })(e),
    t,
    o,
    n
  );
}
function pt(t, e, o, n) {
  return jt(Mt(e), t, o, n);
}
function mt(t, e, o, n) {
  return jt(
    (function (t, e) {
      let o, n, i;
      const r = [];
      for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
        (o = t.charCodeAt(s)),
          (n = o >> 8),
          (i = o % 256),
          r.push(i),
          r.push(n);
      return r;
    })(e, t.length - o),
    t,
    o,
    n
  );
}
function gt(t, e, o) {
  return 0 === e && o === t.length ? Y(t) : Y(t.slice(e, o));
}
function yt(t, e, o) {
  o = Math.min(t.length, o);
  const n = [];
  let i = e;
  for (; i < o; ) {
    const e = t[i];
    let r = null,
      s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
    if (i + s <= o) {
      let o, n, a, l;
      switch (s) {
        case 1:
          e < 128 && (r = e);
          break;
        case 2:
          (o = t[i + 1]),
            128 == (192 & o) &&
              ((l = ((31 & e) << 6) | (63 & o)), l > 127 && (r = l));
          break;
        case 3:
          (o = t[i + 1]),
            (n = t[i + 2]),
            128 == (192 & o) &&
              128 == (192 & n) &&
              ((l = ((15 & e) << 12) | ((63 & o) << 6) | (63 & n)),
              l > 2047 && (l < 55296 || l > 57343) && (r = l));
          break;
        case 4:
          (o = t[i + 1]),
            (n = t[i + 2]),
            (a = t[i + 3]),
            128 == (192 & o) &&
              128 == (192 & n) &&
              128 == (192 & a) &&
              ((l =
                ((15 & e) << 18) |
                ((63 & o) << 12) |
                ((63 & n) << 6) |
                (63 & a)),
              l > 65535 && l < 1114112 && (r = l));
      }
    }
    null === r
      ? ((r = 65533), (s = 1))
      : r > 65535 &&
        ((r -= 65536),
        n.push(((r >>> 10) & 1023) | 55296),
        (r = 56320 | (1023 & r))),
      n.push(r),
      (i += s);
  }
  return (function (t) {
    const e = t.length;
    if (e <= 4096) return String.fromCharCode.apply(String, t);
    let o = "",
      n = 0;
    for (; n < e; )
      o += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
    return o;
  })(n);
}
(Q.TYPED_ARRAY_SUPPORT = (function () {
  try {
    const t = new Uint8Array(1),
      e = {
        foo: function () {
          return 42;
        },
      };
    return (
      Object.setPrototypeOf(e, Uint8Array.prototype),
      Object.setPrototypeOf(t, e),
      42 === t.foo()
    );
  } catch (t) {
    return !1;
  }
})()),
  Q.TYPED_ARRAY_SUPPORT ||
    "undefined" == typeof console ||
    "function" != typeof console.error ||
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    ),
  Object.defineProperty(Q.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.buffer;
    },
  }),
  Object.defineProperty(Q.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.byteOffset;
    },
  }),
  (Q.poolSize = 8192),
  (Q.from = function (t, e, o) {
    return tt(t, e, o);
  }),
  Object.setPrototypeOf(Q.prototype, Uint8Array.prototype),
  Object.setPrototypeOf(Q, Uint8Array),
  (Q.alloc = function (t, e, o) {
    return (function (t, e, o) {
      return (
        et(t),
        t <= 0
          ? K(t)
          : void 0 !== e
          ? "string" == typeof o
            ? K(t).fill(e, o)
            : K(t).fill(e)
          : K(t)
      );
    })(t, e, o);
  }),
  (Q.allocUnsafe = function (t) {
    return ot(t);
  }),
  (Q.allocUnsafeSlow = function (t) {
    return ot(t);
  }),
  (Q.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== Q.prototype;
  }),
  (Q.compare = function (t, e) {
    if (
      (Yt(t, Uint8Array) && (t = Q.from(t, t.offset, t.byteLength)),
      Yt(e, Uint8Array) && (e = Q.from(e, e.offset, e.byteLength)),
      !Q.isBuffer(t) || !Q.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let o = t.length,
      n = e.length;
    for (let i = 0, r = Math.min(o, n); i < r; ++i)
      if (t[i] !== e[i]) {
        (o = t[i]), (n = e[i]);
        break;
      }
    return o < n ? -1 : n < o ? 1 : 0;
  }),
  (Q.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (Q.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return Q.alloc(0);
    let o;
    if (void 0 === e) for (e = 0, o = 0; o < t.length; ++o) e += t[o].length;
    const n = Q.allocUnsafe(e);
    let i = 0;
    for (o = 0; o < t.length; ++o) {
      let e = t[o];
      if (Yt(e, Uint8Array))
        i + e.length > n.length
          ? (Q.isBuffer(e) || (e = Q.from(e)), e.copy(n, i))
          : Uint8Array.prototype.set.call(n, e, i);
      else {
        if (!Q.isBuffer(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(n, i);
      }
      i += e.length;
    }
    return n;
  }),
  (Q.byteLength = st),
  (Q.prototype._isBuffer = !0),
  (Q.prototype.swap16 = function () {
    const t = this.length;
    if (t % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) lt(this, e, e + 1);
    return this;
  }),
  (Q.prototype.swap32 = function () {
    const t = this.length;
    if (t % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) lt(this, e, e + 3), lt(this, e + 1, e + 2);
    return this;
  }),
  (Q.prototype.swap64 = function () {
    const t = this.length;
    if (t % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      lt(this, e, e + 7),
        lt(this, e + 1, e + 6),
        lt(this, e + 2, e + 5),
        lt(this, e + 3, e + 4);
    return this;
  }),
  (Q.prototype.toString = function () {
    const t = this.length;
    return 0 === t
      ? ""
      : 0 === arguments.length
      ? yt(this, 0, t)
      : at.apply(this, arguments);
  }),
  (Q.prototype.toLocaleString = Q.prototype.toString),
  (Q.prototype.equals = function (t) {
    if (!Q.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === Q.compare(this, t);
  }),
  (Q.prototype.inspect = function () {
    let t = "";
    return (
      (t = this.toString("hex", 0, 50)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > 50 && (t += " ... "),
      "<Buffer " + t + ">"
    );
  }),
  G && (Q.prototype[G] = Q.prototype.inspect),
  (Q.prototype.compare = function (t, e, o, n, i) {
    if (
      (Yt(t, Uint8Array) && (t = Q.from(t, t.offset, t.byteLength)),
      !Q.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (void 0 === e && (e = 0),
      void 0 === o && (o = t ? t.length : 0),
      void 0 === n && (n = 0),
      void 0 === i && (i = this.length),
      e < 0 || o > t.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && e >= o) return 0;
    if (n >= i) return -1;
    if (e >= o) return 1;
    if (this === t) return 0;
    let r = (i >>>= 0) - (n >>>= 0),
      s = (o >>>= 0) - (e >>>= 0);
    const a = Math.min(r, s),
      l = this.slice(n, i),
      c = t.slice(e, o);
    for (let t = 0; t < a; ++t)
      if (l[t] !== c[t]) {
        (r = l[t]), (s = c[t]);
        break;
      }
    return r < s ? -1 : s < r ? 1 : 0;
  }),
  (Q.prototype.includes = function (t, e, o) {
    return -1 !== this.indexOf(t, e, o);
  }),
  (Q.prototype.indexOf = function (t, e, o) {
    return ct(this, t, e, o, !0);
  }),
  (Q.prototype.lastIndexOf = function (t, e, o) {
    return ct(this, t, e, o, !1);
  }),
  (Q.prototype.write = function (t, e, o, n) {
    if (void 0 === e) (n = "utf8"), (o = this.length), (e = 0);
    else if (void 0 === o && "string" == typeof e)
      (n = e), (o = this.length), (e = 0);
    else {
      if (!isFinite(e))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      (e >>>= 0),
        isFinite(o)
          ? ((o >>>= 0), void 0 === n && (n = "utf8"))
          : ((n = o), (o = void 0));
    }
    const i = this.length - e;
    if (
      ((void 0 === o || o > i) && (o = i),
      (t.length > 0 && (o < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let r = !1;
    for (;;)
      switch (n) {
        case "hex":
          return dt(this, t, e, o);
        case "utf8":
        case "utf-8":
          return ut(this, t, e, o);
        case "ascii":
        case "latin1":
        case "binary":
          return ht(this, t, e, o);
        case "base64":
          return pt(this, t, e, o);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return mt(this, t, e, o);
        default:
          if (r) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (r = !0);
      }
  }),
  (Q.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  });
function vt(t, e, o) {
  let n = "";
  o = Math.min(t.length, o);
  for (let i = e; i < o; ++i) n += String.fromCharCode(127 & t[i]);
  return n;
}
function wt(t, e, o) {
  let n = "";
  o = Math.min(t.length, o);
  for (let i = e; i < o; ++i) n += String.fromCharCode(t[i]);
  return n;
}
function bt(t, e, o) {
  const n = t.length;
  (!e || e < 0) && (e = 0), (!o || o < 0 || o > n) && (o = n);
  let i = "";
  for (let n = e; n < o; ++n) i += Xt[t[n]];
  return i;
}
function Ct(t, e, o) {
  const n = t.slice(e, o);
  let i = "";
  for (let t = 0; t < n.length - 1; t += 2)
    i += String.fromCharCode(n[t] + 256 * n[t + 1]);
  return i;
}
function xt(t, e, o) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + e > o) throw new RangeError("Trying to access beyond buffer length");
}
function Nt(t, e, o, n, i, r) {
  if (!Q.isBuffer(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < r) throw new RangeError('"value" argument is out of bounds');
  if (o + n > t.length) throw new RangeError("Index out of range");
}
function Et(t, e, o, n, i) {
  Rt(e, n, i, t, o, 7);
  let r = Number(e & BigInt(4294967295));
  (t[o++] = r),
    (r >>= 8),
    (t[o++] = r),
    (r >>= 8),
    (t[o++] = r),
    (r >>= 8),
    (t[o++] = r);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[o++] = s),
    (s >>= 8),
    (t[o++] = s),
    (s >>= 8),
    (t[o++] = s),
    (s >>= 8),
    (t[o++] = s),
    o
  );
}
function Ot(t, e, o, n, i) {
  Rt(e, n, i, t, o, 7);
  let r = Number(e & BigInt(4294967295));
  (t[o + 7] = r),
    (r >>= 8),
    (t[o + 6] = r),
    (r >>= 8),
    (t[o + 5] = r),
    (r >>= 8),
    (t[o + 4] = r);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[o + 3] = s),
    (s >>= 8),
    (t[o + 2] = s),
    (s >>= 8),
    (t[o + 1] = s),
    (s >>= 8),
    (t[o] = s),
    o + 8
  );
}
function St(t, e, o, n, i, r) {
  if (o + n > t.length) throw new RangeError("Index out of range");
  if (o < 0) throw new RangeError("Index out of range");
}
function It(t, e, o, n, i) {
  return (e = +e), (o >>>= 0), i || St(t, 0, o, 4), z(t, e, o, n, 23, 4), o + 4;
}
function At(t, e, o, n, i) {
  return (e = +e), (o >>>= 0), i || St(t, 0, o, 8), z(t, e, o, n, 52, 8), o + 8;
}
(Q.prototype.slice = function (t, e) {
  const o = this.length;
  (t = ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o),
    (e = void 0 === e ? o : ~~e) < 0
      ? (e += o) < 0 && (e = 0)
      : e > o && (e = o),
    e < t && (e = t);
  const n = this.subarray(t, e);
  return Object.setPrototypeOf(n, Q.prototype), n;
}),
  (Q.prototype.readUintLE = Q.prototype.readUIntLE =
    function (t, e, o) {
      (t >>>= 0), (e >>>= 0), o || xt(t, e, this.length);
      let n = this[t],
        i = 1,
        r = 0;
      for (; ++r < e && (i *= 256); ) n += this[t + r] * i;
      return n;
    }),
  (Q.prototype.readUintBE = Q.prototype.readUIntBE =
    function (t, e, o) {
      (t >>>= 0), (e >>>= 0), o || xt(t, e, this.length);
      let n = this[t + --e],
        i = 1;
      for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
      return n;
    }),
  (Q.prototype.readUint8 = Q.prototype.readUInt8 =
    function (t, e) {
      return (t >>>= 0), e || xt(t, 1, this.length), this[t];
    }),
  (Q.prototype.readUint16LE = Q.prototype.readUInt16LE =
    function (t, e) {
      return (
        (t >>>= 0), e || xt(t, 2, this.length), this[t] | (this[t + 1] << 8)
      );
    }),
  (Q.prototype.readUint16BE = Q.prototype.readUInt16BE =
    function (t, e) {
      return (
        (t >>>= 0), e || xt(t, 2, this.length), (this[t] << 8) | this[t + 1]
      );
    }),
  (Q.prototype.readUint32LE = Q.prototype.readUInt32LE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || xt(t, 4, this.length),
        (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
          16777216 * this[t + 3]
      );
    }),
  (Q.prototype.readUint32BE = Q.prototype.readUInt32BE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || xt(t, 4, this.length),
        16777216 * this[t] +
          ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
      );
    }),
  (Q.prototype.readBigUInt64LE = zt(function (t) {
    Bt((t >>>= 0), "offset");
    const e = this[t],
      o = this[t + 7];
    (void 0 !== e && void 0 !== o) || Pt(t, this.length - 8);
    const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
      i = this[++t] + 256 * this[++t] + 65536 * this[++t] + o * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  })),
  (Q.prototype.readBigUInt64BE = zt(function (t) {
    Bt((t >>>= 0), "offset");
    const e = this[t],
      o = this[t + 7];
    (void 0 !== e && void 0 !== o) || Pt(t, this.length - 8);
    const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
      i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + o;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  })),
  (Q.prototype.readIntLE = function (t, e, o) {
    (t >>>= 0), (e >>>= 0), o || xt(t, e, this.length);
    let n = this[t],
      i = 1,
      r = 0;
    for (; ++r < e && (i *= 256); ) n += this[t + r] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
  }),
  (Q.prototype.readIntBE = function (t, e, o) {
    (t >>>= 0), (e >>>= 0), o || xt(t, e, this.length);
    let n = e,
      i = 1,
      r = this[t + --n];
    for (; n > 0 && (i *= 256); ) r += this[t + --n] * i;
    return (i *= 128), r >= i && (r -= Math.pow(2, 8 * e)), r;
  }),
  (Q.prototype.readInt8 = function (t, e) {
    return (
      (t >>>= 0),
      e || xt(t, 1, this.length),
      128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    );
  }),
  (Q.prototype.readInt16LE = function (t, e) {
    (t >>>= 0), e || xt(t, 2, this.length);
    const o = this[t] | (this[t + 1] << 8);
    return 32768 & o ? 4294901760 | o : o;
  }),
  (Q.prototype.readInt16BE = function (t, e) {
    (t >>>= 0), e || xt(t, 2, this.length);
    const o = this[t + 1] | (this[t] << 8);
    return 32768 & o ? 4294901760 | o : o;
  }),
  (Q.prototype.readInt32LE = function (t, e) {
    return (
      (t >>>= 0),
      e || xt(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (Q.prototype.readInt32BE = function (t, e) {
    return (
      (t >>>= 0),
      e || xt(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (Q.prototype.readBigInt64LE = zt(function (t) {
    Bt((t >>>= 0), "offset");
    const e = this[t],
      o = this[t + 7];
    (void 0 !== e && void 0 !== o) || Pt(t, this.length - 8);
    const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (o << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
    );
  })),
  (Q.prototype.readBigInt64BE = zt(function (t) {
    Bt((t >>>= 0), "offset");
    const e = this[t],
      o = this[t + 7];
    (void 0 !== e && void 0 !== o) || Pt(t, this.length - 8);
    const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + o)
    );
  })),
  (Q.prototype.readFloatLE = function (t, e) {
    return (t >>>= 0), e || xt(t, 4, this.length), X(this, t, !0, 23, 4);
  }),
  (Q.prototype.readFloatBE = function (t, e) {
    return (t >>>= 0), e || xt(t, 4, this.length), X(this, t, !1, 23, 4);
  }),
  (Q.prototype.readDoubleLE = function (t, e) {
    return (t >>>= 0), e || xt(t, 8, this.length), X(this, t, !0, 52, 8);
  }),
  (Q.prototype.readDoubleBE = function (t, e) {
    return (t >>>= 0), e || xt(t, 8, this.length), X(this, t, !1, 52, 8);
  }),
  (Q.prototype.writeUintLE = Q.prototype.writeUIntLE =
    function (t, e, o, n) {
      if (((t = +t), (e >>>= 0), (o >>>= 0), !n)) {
        Nt(this, t, e, o, Math.pow(2, 8 * o) - 1, 0);
      }
      let i = 1,
        r = 0;
      for (this[e] = 255 & t; ++r < o && (i *= 256); )
        this[e + r] = (t / i) & 255;
      return e + o;
    }),
  (Q.prototype.writeUintBE = Q.prototype.writeUIntBE =
    function (t, e, o, n) {
      if (((t = +t), (e >>>= 0), (o >>>= 0), !n)) {
        Nt(this, t, e, o, Math.pow(2, 8 * o) - 1, 0);
      }
      let i = o - 1,
        r = 1;
      for (this[e + i] = 255 & t; --i >= 0 && (r *= 256); )
        this[e + i] = (t / r) & 255;
      return e + o;
    }),
  (Q.prototype.writeUint8 = Q.prototype.writeUInt8 =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || Nt(this, t, e, 1, 255, 0),
        (this[e] = 255 & t),
        e + 1
      );
    }),
  (Q.prototype.writeUint16LE = Q.prototype.writeUInt16LE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || Nt(this, t, e, 2, 65535, 0),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
  (Q.prototype.writeUint16BE = Q.prototype.writeUInt16BE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || Nt(this, t, e, 2, 65535, 0),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
  (Q.prototype.writeUint32LE = Q.prototype.writeUInt32LE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || Nt(this, t, e, 4, 4294967295, 0),
        (this[e + 3] = t >>> 24),
        (this[e + 2] = t >>> 16),
        (this[e + 1] = t >>> 8),
        (this[e] = 255 & t),
        e + 4
      );
    }),
  (Q.prototype.writeUint32BE = Q.prototype.writeUInt32BE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || Nt(this, t, e, 4, 4294967295, 0),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
  (Q.prototype.writeBigUInt64LE = zt(function (t, e = 0) {
    return Et(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Q.prototype.writeBigUInt64BE = zt(function (t, e = 0) {
    return Ot(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Q.prototype.writeIntLE = function (t, e, o, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      const n = Math.pow(2, 8 * o - 1);
      Nt(this, t, e, o, n - 1, -n);
    }
    let i = 0,
      r = 1,
      s = 0;
    for (this[e] = 255 & t; ++i < o && (r *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
        (this[e + i] = (((t / r) >> 0) - s) & 255);
    return e + o;
  }),
  (Q.prototype.writeIntBE = function (t, e, o, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      const n = Math.pow(2, 8 * o - 1);
      Nt(this, t, e, o, n - 1, -n);
    }
    let i = o - 1,
      r = 1,
      s = 0;
    for (this[e + i] = 255 & t; --i >= 0 && (r *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
        (this[e + i] = (((t / r) >> 0) - s) & 255);
    return e + o;
  }),
  (Q.prototype.writeInt8 = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || Nt(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (Q.prototype.writeInt16LE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || Nt(this, t, e, 2, 32767, -32768),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  }),
  (Q.prototype.writeInt16BE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || Nt(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = 255 & t),
      e + 2
    );
  }),
  (Q.prototype.writeInt32LE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || Nt(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  }),
  (Q.prototype.writeInt32BE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || Nt(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = 255 & t),
      e + 4
    );
  }),
  (Q.prototype.writeBigInt64LE = zt(function (t, e = 0) {
    return Et(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Q.prototype.writeBigInt64BE = zt(function (t, e = 0) {
    return Ot(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Q.prototype.writeFloatLE = function (t, e, o) {
    return It(this, t, e, !0, o);
  }),
  (Q.prototype.writeFloatBE = function (t, e, o) {
    return It(this, t, e, !1, o);
  }),
  (Q.prototype.writeDoubleLE = function (t, e, o) {
    return At(this, t, e, !0, o);
  }),
  (Q.prototype.writeDoubleBE = function (t, e, o) {
    return At(this, t, e, !1, o);
  }),
  (Q.prototype.copy = function (t, e, o, n) {
    if (!Q.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (o || (o = 0),
      n || 0 === n || (n = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      n > 0 && n < o && (n = o),
      n === o)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (o < 0 || o >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      t.length - e < n - o && (n = t.length - e + o);
    const i = n - o;
    return (
      this === t && "function" == typeof Uint8Array.prototype.copyWithin
        ? this.copyWithin(e, o, n)
        : Uint8Array.prototype.set.call(t, this.subarray(o, n), e),
      i
    );
  }),
  (Q.prototype.fill = function (t, e, o, n) {
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((n = e), (e = 0), (o = this.length))
          : "string" == typeof o && ((n = o), (o = this.length)),
        void 0 !== n && "string" != typeof n)
      )
        throw new TypeError("encoding must be a string");
      if ("string" == typeof n && !Q.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (1 === t.length) {
        const e = t.charCodeAt(0);
        (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
      }
    } else
      "number" == typeof t
        ? (t &= 255)
        : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < o)
      throw new RangeError("Out of range index");
    if (o <= e) return this;
    let i;
    if (
      ((e >>>= 0),
      (o = void 0 === o ? this.length : o >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (i = e; i < o; ++i) this[i] = t;
    else {
      const r = Q.isBuffer(t) ? t : Q.from(t, n),
        s = r.length;
      if (0 === s)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (i = 0; i < o - e; ++i) this[i + e] = r[i % s];
    }
    return this;
  });
const kt = {};
function Tt(t, e, o) {
  kt[t] = class extends o {
    get code() {
      return t;
    }
    set code(t) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      });
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
    constructor() {
      super(),
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0,
        }),
        (this.name = `${this.name} [${t}]`),
        this.stack,
        delete this.name;
    }
  };
}
function Lt(t) {
  let e = "",
    o = t.length;
  const n = "-" === t[0] ? 1 : 0;
  for (; o >= n + 4; o -= 3) e = `_${t.slice(o - 3, o)}${e}`;
  return `${t.slice(0, o)}${e}`;
}
function Rt(t, e, o, n, i, r) {
  if (t > o || t < e) {
    const n = "bigint" == typeof e ? "n" : "";
    let i;
    throw (
      ((i =
        r > 3
          ? 0 === e || e === BigInt(0)
            ? `>= 0${n} and < 2${n} ** ${8 * (r + 1)}${n}`
            : `>= -(2${n} ** ${8 * (r + 1) - 1}${n}) and < 2 ** ${
                8 * (r + 1) - 1
              }${n}`
          : `>= ${e}${n} and <= ${o}${n}`),
      new kt.ERR_OUT_OF_RANGE("value", i, t))
    );
  }
  !(function (t, e, o) {
    Bt(e, "offset"),
      (void 0 !== t[e] && void 0 !== t[e + o]) || Pt(e, t.length - (o + 1));
  })(n, i, r);
}
function Bt(t, e) {
  if ("number" != typeof t) throw new kt.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function Pt(t, e, o) {
  if (Math.floor(t) !== t)
    throw (Bt(t, o), new kt.ERR_OUT_OF_RANGE(o || "offset", "an integer", t));
  if (e < 0) throw new kt.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new kt.ERR_OUT_OF_RANGE(
    o || "offset",
    `>= ${o ? 1 : 0} and <= ${e}`,
    t
  );
}
Tt(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (t) {
    return t
      ? `${t} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  },
  RangeError
),
  Tt(
    "ERR_INVALID_ARG_TYPE",
    function (t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ),
  Tt(
    "ERR_OUT_OF_RANGE",
    function (t, e, o) {
      let n = `The value of "${t}" is out of range.`,
        i = o;
      return (
        Number.isInteger(o) && Math.abs(o) > 2 ** 32
          ? (i = Lt(String(o)))
          : "bigint" == typeof o &&
            ((i = String(o)),
            (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) &&
              (i = Lt(i)),
            (i += "n")),
        (n += ` It must be ${e}. Received ${i}`),
        n
      );
    },
    RangeError
  );
const Dt = /[^+/0-9A-Za-z-_]/g;
function Ut(t, e) {
  let o;
  e = e || 1 / 0;
  const n = t.length;
  let i = null;
  const r = [];
  for (let s = 0; s < n; ++s) {
    if (((o = t.charCodeAt(s)), o > 55295 && o < 57344)) {
      if (!i) {
        if (o > 56319) {
          (e -= 3) > -1 && r.push(239, 191, 189);
          continue;
        }
        if (s + 1 === n) {
          (e -= 3) > -1 && r.push(239, 191, 189);
          continue;
        }
        i = o;
        continue;
      }
      if (o < 56320) {
        (e -= 3) > -1 && r.push(239, 191, 189), (i = o);
        continue;
      }
      o = 65536 + (((i - 55296) << 10) | (o - 56320));
    } else i && (e -= 3) > -1 && r.push(239, 191, 189);
    if (((i = null), o < 128)) {
      if ((e -= 1) < 0) break;
      r.push(o);
    } else if (o < 2048) {
      if ((e -= 2) < 0) break;
      r.push((o >> 6) | 192, (63 & o) | 128);
    } else if (o < 65536) {
      if ((e -= 3) < 0) break;
      r.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
    } else {
      if (!(o < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      r.push(
        (o >> 18) | 240,
        ((o >> 12) & 63) | 128,
        ((o >> 6) & 63) | 128,
        (63 & o) | 128
      );
    }
  }
  return r;
}
function Mt(t) {
  return j(
    (function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(Dt, "")).length < 2)
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t)
  );
}
function jt(t, e, o, n) {
  let i;
  for (i = 0; i < n && !(i + o >= e.length || i >= t.length); ++i)
    e[i + o] = t[i];
  return i;
}
function Yt(t, e) {
  return (
    t instanceof e ||
    (null != t &&
      null != t.constructor &&
      null != t.constructor.name &&
      t.constructor.name === e.name)
  );
}
function Ft(t) {
  return t != t;
}
const Xt = (function () {
  const t = "0123456789abcdef",
    e = new Array(256);
  for (let o = 0; o < 16; ++o) {
    const n = 16 * o;
    for (let i = 0; i < 16; ++i) e[n + i] = t[o] + t[i];
  }
  return e;
})();
function zt(t) {
  return "undefined" == typeof BigInt ? Ht : t;
}
function Ht() {
  throw new Error("BigInt not supported");
}
var Wt = M;
function _t(t) {
  return B.isPlainObject(t) || B.isArray(t);
}
function qt(t) {
  return B.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function $t(t, e, o) {
  return t
    ? t
        .concat(e)
        .map(function (t, e) {
          return (t = qt(t)), !o && e ? "[" + t + "]" : t;
        })
        .join(o ? "." : "")
    : e;
}
const Vt = B.toFlatObject(B, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
var Jt = function (t, e, o) {
  if (!B.isObject(t)) throw new TypeError("target must be an object");
  e = e || new FormData();
  const n = (o = B.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (t, e) {
        return !B.isUndefined(e[t]);
      }
    )).metaTokens,
    i = o.visitor || c,
    r = o.dots,
    s = o.indexes,
    a =
      (o.Blob || ("undefined" != typeof Blob && Blob)) &&
      B.isSpecCompliantForm(e);
  if (!B.isFunction(i)) throw new TypeError("visitor must be a function");
  function l(t) {
    if (null === t) return "";
    if (B.isDate(t)) return t.toISOString();
    if (!a && B.isBlob(t))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(t) || B.isTypedArray(t)
      ? a && "function" == typeof Blob
        ? new Blob([t])
        : Wt.from(t)
      : t;
  }
  function c(t, o, i) {
    let a = t;
    if (t && !i && "object" == typeof t)
      if (B.endsWith(o, "{}"))
        (o = n ? o : o.slice(0, -2)), (t = JSON.stringify(t));
      else if (
        (B.isArray(t) &&
          (function (t) {
            return B.isArray(t) && !t.some(_t);
          })(t)) ||
        ((B.isFileList(t) || B.endsWith(o, "[]")) && (a = B.toArray(t)))
      )
        return (
          (o = qt(o)),
          a.forEach(function (t, n) {
            !B.isUndefined(t) &&
              null !== t &&
              e.append(
                !0 === s ? $t([o], n, r) : null === s ? o : o + "[]",
                l(t)
              );
          }),
          !1
        );
    return !!_t(t) || (e.append($t(i, o, r), l(t)), !1);
  }
  const f = [],
    d = Object.assign(Vt, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: _t,
    });
  if (!B.isObject(t)) throw new TypeError("data must be an object");
  return (
    (function t(o, n) {
      if (!B.isUndefined(o)) {
        if (-1 !== f.indexOf(o))
          throw Error("Circular reference detected in " + n.join("."));
        f.push(o),
          B.forEach(o, function (o, r) {
            !0 ===
              (!(B.isUndefined(o) || null === o) &&
                i.call(e, o, B.isString(r) ? r.trim() : r, n, d)) &&
              t(o, n ? n.concat(r) : [r]);
          }),
          f.pop();
      }
    })(t),
    e
  );
};
function Zt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
    return e[t];
  });
}
function Gt(t, e) {
  (this._pairs = []), t && Jt(t, this, e);
}
const Kt = Gt.prototype;
(Kt.append = function (t, e) {
  this._pairs.push([t, e]);
}),
  (Kt.toString = function (t) {
    const e = t
      ? function (e) {
          return t.call(this, e, Zt);
        }
      : Zt;
    return this._pairs
      .map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "")
      .join("&");
  });
var Qt = Gt;
function te(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ee(t, e, o) {
  if (!e) return t;
  const n = (o && o.encode) || te,
    i = o && o.serialize;
  let r;
  if (
    ((r = i
      ? i(e, o)
      : B.isURLSearchParams(e)
      ? e.toString()
      : new Qt(e, o).toString(n)),
    r)
  ) {
    const e = t.indexOf("#");
    -1 !== e && (t = t.slice(0, e)),
      (t += (-1 === t.indexOf("?") ? "?" : "&") + r);
  }
  return t;
}
var oe = class {
    use(t, e, o) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: e,
          synchronous: !!o && o.synchronous,
          runWhen: o ? o.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      B.forEach(this.handlers, function (e) {
        null !== e && t(e);
      });
    }
    constructor() {
      this.handlers = [];
    }
  },
  ne = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
var ie = {
  isBrowser: !0,
  classes: {
    URLSearchParams:
      "undefined" != typeof URLSearchParams ? URLSearchParams : Qt,
    FormData: "undefined" != typeof FormData ? FormData : null,
    Blob: "undefined" != typeof Blob ? Blob : null,
  },
  isStandardBrowserEnv: (() => {
    let t;
    return (
      ("undefined" == typeof navigator ||
        ("ReactNative" !== (t = navigator.product) &&
          "NativeScript" !== t &&
          "NS" !== t)) &&
      "undefined" != typeof window &&
      "undefined" != typeof document
    );
  })(),
  isStandardBrowserWebWorkerEnv:
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts,
  protocols: ["http", "https", "file", "blob", "url", "data"],
};
function re(t, e) {
  return Jt(
    t,
    new ie.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, e, o, n) {
          return ie.isNode && B.isBuffer(t)
            ? (this.append(e, t.toString("base64")), !1)
            : n.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
var se = function (t) {
  function e(t, o, n, i) {
    let r = t[i++];
    const s = Number.isFinite(+r),
      a = i >= t.length;
    if (((r = !r && B.isArray(n) ? n.length : r), a))
      return B.hasOwnProp(n, r) ? (n[r] = [n[r], o]) : (n[r] = o), !s;
    (n[r] && B.isObject(n[r])) || (n[r] = []);
    return (
      e(t, o, n[r], i) &&
        B.isArray(n[r]) &&
        (n[r] = (function (t) {
          const e = {},
            o = Object.keys(t);
          let n;
          const i = o.length;
          let r;
          for (n = 0; n < i; n++) (r = o[n]), (e[r] = t[r]);
          return e;
        })(n[r])),
      !s
    );
  }
  if (B.isFormData(t) && B.isFunction(t.entries)) {
    const o = {};
    return (
      B.forEachEntry(t, (t, n) => {
        e(
          (function (t) {
            return B.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
              "[]" === t[0] ? "" : t[1] || t[0]
            );
          })(t),
          n,
          o,
          0
        );
      }),
      o
    );
  }
  return null;
};
const ae = { "Content-Type": void 0 };
const le = {
  transitional: ne,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, e) {
      const o = e.getContentType() || "",
        n = o.indexOf("application/json") > -1,
        i = B.isObject(t);
      i && B.isHTMLForm(t) && (t = new FormData(t));
      if (B.isFormData(t)) return n && n ? JSON.stringify(se(t)) : t;
      if (
        B.isArrayBuffer(t) ||
        B.isBuffer(t) ||
        B.isStream(t) ||
        B.isFile(t) ||
        B.isBlob(t)
      )
        return t;
      if (B.isArrayBufferView(t)) return t.buffer;
      if (B.isURLSearchParams(t))
        return (
          e.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let r;
      if (i) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return re(t, this.formSerializer).toString();
        if ((r = B.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
          const e = this.env && this.env.FormData;
          return Jt(
            r ? { "files[]": t } : t,
            e && new e(),
            this.formSerializer
          );
        }
      }
      return i || n
        ? (e.setContentType("application/json", !1),
          (function (t, e, o) {
            if (B.isString(t))
              try {
                return (e || JSON.parse)(t), B.trim(t);
              } catch (t) {
                if ("SyntaxError" !== t.name) throw t;
              }
            return (o || JSON.stringify)(t);
          })(t))
        : t;
    },
  ],
  transformResponse: [
    function (t) {
      const e = this.transitional || le.transitional,
        o = e && e.forcedJSONParsing,
        n = "json" === this.responseType;
      if (t && B.isString(t) && ((o && !this.responseType) || n)) {
        const o = !(e && e.silentJSONParsing) && n;
        try {
          return JSON.parse(t);
        } catch (t) {
          if (o) {
            if ("SyntaxError" === t.name)
              throw F.from(t, F.ERR_BAD_RESPONSE, this, null, this.response);
            throw t;
          }
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ie.classes.FormData, Blob: ie.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
B.forEach(["delete", "get", "head"], function (t) {
  le.headers[t] = {};
}),
  B.forEach(["post", "put", "patch"], function (t) {
    le.headers[t] = B.merge(ae);
  });
var ce = le;
const fe = B.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
var de = (t) => {
  const e = {};
  let o, n, i;
  return (
    t &&
      t.split("\n").forEach(function (t) {
        (i = t.indexOf(":")),
          (o = t.substring(0, i).trim().toLowerCase()),
          (n = t.substring(i + 1).trim()),
          !o ||
            (e[o] && fe[o]) ||
            ("set-cookie" === o
              ? e[o]
                ? e[o].push(n)
                : (e[o] = [n])
              : (e[o] = e[o] ? e[o] + ", " + n : n));
      }),
    e
  );
};
const ue = Symbol("internals");
function he(t) {
  return t && String(t).trim().toLowerCase();
}
function pe(t) {
  return !1 === t || null == t ? t : B.isArray(t) ? t.map(pe) : String(t);
}
function me(t, e, o, n, i) {
  return B.isFunction(n)
    ? n.call(this, e, o)
    : (i && (e = o),
      B.isString(e)
        ? B.isString(n)
          ? -1 !== e.indexOf(n)
          : B.isRegExp(n)
          ? n.test(e)
          : void 0
        : void 0);
}
let ge = Symbol.iterator,
  ye = Symbol.toStringTag;
class ve {
  set(t, e, o) {
    const n = this;
    function i(t, e, o) {
      const i = he(e);
      if (!i) throw new Error("header name must be a non-empty string");
      const r = B.findKey(n, i);
      (!r || void 0 === n[r] || !0 === o || (void 0 === o && !1 !== n[r])) &&
        (n[r || e] = pe(t));
    }
    const r = (t, e) => B.forEach(t, (t, o) => i(t, o, e));
    return (
      B.isPlainObject(t) || t instanceof this.constructor
        ? r(t, e)
        : B.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z]+$/.test(t.trim())
        ? r(de(t), e)
        : null != t && i(e, t, o),
      this
    );
  }
  get(t, e) {
    if ((t = he(t))) {
      const o = B.findKey(this, t);
      if (o) {
        const t = this[o];
        if (!e) return t;
        if (!0 === e)
          return (function (t) {
            const e = Object.create(null),
              o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let n;
            for (; (n = o.exec(t)); ) e[n[1]] = n[2];
            return e;
          })(t);
        if (B.isFunction(e)) return e.call(this, t, o);
        if (B.isRegExp(e)) return e.exec(t);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if ((t = he(t))) {
      const o = B.findKey(this, t);
      return !(!o || void 0 === this[o] || (e && !me(0, this[o], o, e)));
    }
    return !1;
  }
  delete(t, e) {
    const o = this;
    let n = !1;
    function i(t) {
      if ((t = he(t))) {
        const i = B.findKey(o, t);
        !i || (e && !me(0, o[i], i, e)) || (delete o[i], (n = !0));
      }
    }
    return B.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const e = Object.keys(this);
    let o = e.length,
      n = !1;
    for (; o--; ) {
      const i = e[o];
      (t && !me(0, this[i], i, t, !0)) || (delete this[i], (n = !0));
    }
    return n;
  }
  normalize(t) {
    const e = this,
      o = {};
    return (
      B.forEach(this, (n, i) => {
        const r = B.findKey(o, i);
        if (r) return (e[r] = pe(n)), void delete e[i];
        const s = t
          ? (function (t) {
              return t
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (t, e, o) => e.toUpperCase() + o);
            })(i)
          : String(i).trim();
        s !== i && delete e[i], (e[s] = pe(n)), (o[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = Object.create(null);
    return (
      B.forEach(this, (o, n) => {
        null != o && !1 !== o && (e[n] = t && B.isArray(o) ? o.join(", ") : o);
      }),
      e
    );
  }
  [ge]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, e]) => t + ": " + e)
      .join("\n");
  }
  get [ye]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    const o = new this(t);
    return e.forEach((t) => o.set(t)), o;
  }
  static accessor(t) {
    const e = (this[ue] = this[ue] = { accessors: {} }).accessors,
      o = this.prototype;
    function n(t) {
      const n = he(t);
      e[n] ||
        (!(function (t, e) {
          const o = B.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((n) => {
            Object.defineProperty(t, n + o, {
              value: function (t, o, i) {
                return this[n].call(this, e, t, o, i);
              },
              configurable: !0,
            });
          });
        })(o, t),
        (e[n] = !0));
    }
    return B.isArray(t) ? t.forEach(n) : n(t), this;
  }
  constructor(t) {
    t && this.set(t);
  }
}
ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  B.freezeMethods(ve.prototype),
  B.freezeMethods(ve);
var we = ve;
function be(t, e) {
  const o = this || ce,
    n = e || o,
    i = we.from(n.headers);
  let r = n.data;
  return (
    B.forEach(t, function (t) {
      r = t.call(o, r, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    r
  );
}
function Ce(t) {
  return !(!t || !t.__CANCEL__);
}
function xe(t, e, o) {
  F.call(this, null == t ? "canceled" : t, F.ERR_CANCELED, e, o),
    (this.name = "CanceledError");
}
B.inherits(xe, F, { __CANCEL__: !0 });
var Ne = xe;
function Ee(t, e, o) {
  const n = o.config.validateStatus;
  o.status && n && !n(o.status)
    ? e(
        new F(
          "Request failed with status code " + o.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o
        )
      )
    : t(o);
}
var Oe = ie.isStandardBrowserEnv
  ? {
      write: function (t, e, o, n, i, r) {
        const s = [];
        s.push(t + "=" + encodeURIComponent(e)),
          B.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()),
          B.isString(n) && s.push("path=" + n),
          B.isString(i) && s.push("domain=" + i),
          !0 === r && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read: function (t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function Se(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ie(t, e) {
  return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? Se(t, e) : e;
}
var Ae = ie.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        e = document.createElement("a");
      let o;
      function n(o) {
        let n = o;
        return (
          t && (e.setAttribute("href", n), (n = e.href)),
          e.setAttribute("href", n),
          {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            host: e.host,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : "",
            hostname: e.hostname,
            port: e.port,
            pathname:
              "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
          }
        );
      }
      return (
        (o = n(window.location.href)),
        function (t) {
          const e = B.isString(t) ? n(t) : t;
          return e.protocol === o.protocol && e.host === o.host;
        }
      );
    })()
  : function () {
      return !0;
    };
function ke(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
var Te = function (t, e) {
  t = t || 10;
  const o = new Array(t),
    n = new Array(t);
  let i,
    r = 0,
    s = 0;
  return (
    (e = void 0 !== e ? e : 1e3),
    function (a) {
      const l = Date.now(),
        c = n[s];
      i || (i = l), (o[r] = a), (n[r] = l);
      let f = s,
        d = 0;
      for (; f !== r; ) (d += o[f++]), (f %= t);
      if (((r = (r + 1) % t), r === s && (s = (s + 1) % t), l - i < e)) return;
      const u = c && l - c;
      return u ? Math.round((1e3 * d) / u) : void 0;
    }
  );
};
function Le(t, e) {
  let o = 0;
  const n = Te(50, 250);
  return (i) => {
    const r = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      a = r - o,
      l = n(a);
    o = r;
    const c = {
      loaded: r,
      total: s,
      progress: s ? r / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && r <= s ? (s - r) / l : void 0,
      event: i,
    };
    (c[e ? "download" : "upload"] = !0), t(c);
  };
}
const Re = {
  http: null,
  xhr:
    "undefined" != typeof XMLHttpRequest &&
    function (t) {
      return new Promise(function (e, o) {
        let n = t.data;
        const i = we.from(t.headers).normalize(),
          r = t.responseType;
        let s;
        function a() {
          t.cancelToken && t.cancelToken.unsubscribe(s),
            t.signal && t.signal.removeEventListener("abort", s);
        }
        B.isFormData(n) &&
          (ie.isStandardBrowserEnv || ie.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let l = new XMLHttpRequest();
        if (t.auth) {
          const e = t.auth.username || "",
            o = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(e + ":" + o));
        }
        const c = Ie(t.baseURL, t.url);
        function f() {
          if (!l) return;
          const n = we.from(
            "getAllResponseHeaders" in l && l.getAllResponseHeaders()
          );
          Ee(
            function (t) {
              e(t), a();
            },
            function (t) {
              o(t), a();
            },
            {
              data:
                r && "text" !== r && "json" !== r ? l.response : l.responseText,
              status: l.status,
              statusText: l.statusText,
              headers: n,
              config: t,
              request: l,
            }
          ),
            (l = null);
        }
        if (
          (l.open(
            t.method.toUpperCase(),
            ee(c, t.params, t.paramsSerializer),
            !0
          ),
          (l.timeout = t.timeout),
          "onloadend" in l
            ? (l.onloadend = f)
            : (l.onreadystatechange = function () {
                l &&
                  4 === l.readyState &&
                  (0 !== l.status ||
                    (l.responseURL && 0 === l.responseURL.indexOf("file:"))) &&
                  setTimeout(f);
              }),
          (l.onabort = function () {
            l &&
              (o(new F("Request aborted", F.ECONNABORTED, t, l)), (l = null));
          }),
          (l.onerror = function () {
            o(new F("Network Error", F.ERR_NETWORK, t, l)), (l = null);
          }),
          (l.ontimeout = function () {
            let e = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const n = t.transitional || ne;
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
              o(
                new F(
                  e,
                  n.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  t,
                  l
                )
              ),
              (l = null);
          }),
          ie.isStandardBrowserEnv)
        ) {
          const e =
            (t.withCredentials || Ae(c)) &&
            t.xsrfCookieName &&
            Oe.read(t.xsrfCookieName);
          e && i.set(t.xsrfHeaderName, e);
        }
        void 0 === n && i.setContentType(null),
          "setRequestHeader" in l &&
            B.forEach(i.toJSON(), function (t, e) {
              l.setRequestHeader(e, t);
            }),
          B.isUndefined(t.withCredentials) ||
            (l.withCredentials = !!t.withCredentials),
          r && "json" !== r && (l.responseType = t.responseType),
          "function" == typeof t.onDownloadProgress &&
            l.addEventListener("progress", Le(t.onDownloadProgress, !0)),
          "function" == typeof t.onUploadProgress &&
            l.upload &&
            l.upload.addEventListener("progress", Le(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((s = (e) => {
              l &&
                (o(!e || e.type ? new Ne(null, t, l) : e),
                l.abort(),
                (l = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(s),
            t.signal &&
              (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
        const d = ke(c);
        d && -1 === ie.protocols.indexOf(d)
          ? o(new F("Unsupported protocol " + d + ":", F.ERR_BAD_REQUEST, t))
          : l.send(n || null);
      });
    },
};
B.forEach(Re, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (t) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
var Be = {
  getAdapter: (t) => {
    t = B.isArray(t) ? t : [t];
    const { length: e } = t;
    let o, n;
    for (
      let i = 0;
      i < e && ((o = t[i]), !(n = B.isString(o) ? Re[o.toLowerCase()] : o));
      i++
    );
    if (!n) {
      if (!1 === n)
        throw new F(
          `Adapter ${o} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      throw new Error(
        B.hasOwnProp(Re, o)
          ? `Adapter '${o}' is not available in the build`
          : `Unknown adapter '${o}'`
      );
    }
    if (!B.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Re,
};
function Pe(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Ne(null, t);
}
function De(t) {
  Pe(t),
    (t.headers = we.from(t.headers)),
    (t.data = be.call(t, t.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
  return Be.getAdapter(t.adapter || ce.adapter)(t).then(
    function (e) {
      return (
        Pe(t),
        (e.data = be.call(t, t.transformResponse, e)),
        (e.headers = we.from(e.headers)),
        e
      );
    },
    function (e) {
      return (
        Ce(e) ||
          (Pe(t),
          e &&
            e.response &&
            ((e.response.data = be.call(t, t.transformResponse, e.response)),
            (e.response.headers = we.from(e.response.headers)))),
        Promise.reject(e)
      );
    }
  );
}
const Ue = (t) => (t instanceof we ? t.toJSON() : t);
function Me(t, e) {
  e = e || {};
  const o = {};
  function n(t, e, o) {
    return B.isPlainObject(t) && B.isPlainObject(e)
      ? B.merge.call({ caseless: o }, t, e)
      : B.isPlainObject(e)
      ? B.merge({}, e)
      : B.isArray(e)
      ? e.slice()
      : e;
  }
  function i(t, e, o) {
    return B.isUndefined(e)
      ? B.isUndefined(t)
        ? void 0
        : n(void 0, t, o)
      : n(t, e, o);
  }
  function r(t, e) {
    if (!B.isUndefined(e)) return n(void 0, e);
  }
  function s(t, e) {
    return B.isUndefined(e)
      ? B.isUndefined(t)
        ? void 0
        : n(void 0, t)
      : n(void 0, e);
  }
  function a(o, i, r) {
    return r in e ? n(o, i) : r in t ? n(void 0, o) : void 0;
  }
  const l = {
    url: r,
    method: r,
    data: r,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (t, e) => i(Ue(t), Ue(e), !0),
  };
  return (
    B.forEach(Object.keys(t).concat(Object.keys(e)), function (n) {
      const r = l[n] || i,
        s = r(t[n], e[n], n);
      (B.isUndefined(s) && r !== a) || (o[n] = s);
    }),
    o
  );
}
const je = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    je[t] = function (o) {
      return typeof o === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const Ye = {};
je.transitional = function (t, e, o) {
  function n(t, e) {
    return (
      "[Axios v1.3.4] Transitional option '" + t + "'" + e + (o ? ". " + o : "")
    );
  }
  return (o, i, r) => {
    if (!1 === t)
      throw new F(
        n(i, " has been removed" + (e ? " in " + e : "")),
        F.ERR_DEPRECATED
      );
    return (
      e &&
        !Ye[i] &&
        ((Ye[i] = !0),
        console.warn(
          n(
            i,
            " has been deprecated since v" +
              e +
              " and will be removed in the near future"
          )
        )),
      !t || t(o, i, r)
    );
  };
};
var Fe = {
  assertOptions: function (t, e, o) {
    if ("object" != typeof t)
      throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(t);
    let i = n.length;
    for (; i-- > 0; ) {
      const r = n[i],
        s = e[r];
      if (s) {
        const e = t[r],
          o = void 0 === e || s(e, r, t);
        if (!0 !== o)
          throw new F("option " + r + " must be " + o, F.ERR_BAD_OPTION_VALUE);
      } else if (!0 !== o) throw new F("Unknown option " + r, F.ERR_BAD_OPTION);
    }
  },
  validators: je,
};
const Xe = Fe.validators;
class ze {
  request(t, e) {
    "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
      (e = Me(this.defaults, e));
    const { transitional: o, paramsSerializer: n, headers: i } = e;
    let r;
    void 0 !== o &&
      Fe.assertOptions(
        o,
        {
          silentJSONParsing: Xe.transitional(Xe.boolean),
          forcedJSONParsing: Xe.transitional(Xe.boolean),
          clarifyTimeoutError: Xe.transitional(Xe.boolean),
        },
        !1
      ),
      void 0 !== n &&
        Fe.assertOptions(
          n,
          { encode: Xe.function, serialize: Xe.function },
          !0
        ),
      (e.method = (e.method || this.defaults.method || "get").toLowerCase()),
      (r = i && B.merge(i.common, i[e.method])),
      r &&
        B.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (t) => {
            delete i[t];
          }
        ),
      (e.headers = we.concat(r, i));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (t) {
      ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
        ((a = a && t.synchronous), s.unshift(t.fulfilled, t.rejected));
    });
    const l = [];
    let c;
    this.interceptors.response.forEach(function (t) {
      l.push(t.fulfilled, t.rejected);
    });
    let f,
      d = 0;
    if (!a) {
      const t = [De.bind(this), void 0];
      for (
        t.unshift.apply(t, s),
          t.push.apply(t, l),
          f = t.length,
          c = Promise.resolve(e);
        d < f;

      )
        c = c.then(t[d++], t[d++]);
      return c;
    }
    f = s.length;
    let u = e;
    for (d = 0; d < f; ) {
      const t = s[d++],
        e = s[d++];
      try {
        u = t(u);
      } catch (t) {
        e.call(this, t);
        break;
      }
    }
    try {
      c = De.call(this, u);
    } catch (t) {
      return Promise.reject(t);
    }
    for (d = 0, f = l.length; d < f; ) c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(t) {
    return ee(
      Ie((t = Me(this.defaults, t)).baseURL, t.url),
      t.params,
      t.paramsSerializer
    );
  }
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new oe(), response: new oe() });
  }
}
B.forEach(["delete", "get", "head", "options"], function (t) {
  ze.prototype[t] = function (e, o) {
    return this.request(
      Me(o || {}, { method: t, url: e, data: (o || {}).data })
    );
  };
}),
  B.forEach(["post", "put", "patch"], function (t) {
    function e(e) {
      return function (o, n, i) {
        return this.request(
          Me(i || {}, {
            method: t,
            headers: e ? { "Content-Type": "multipart/form-data" } : {},
            url: o,
            data: n,
          })
        );
      };
    }
    (ze.prototype[t] = e()), (ze.prototype[t + "Form"] = e(!0));
  });
var He = ze;
class We {
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    this.reason
      ? t(this.reason)
      : this._listeners
      ? this._listeners.push(t)
      : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const e = this._listeners.indexOf(t);
    -1 !== e && this._listeners.splice(e, 1);
  }
  static source() {
    let t;
    return {
      token: new We(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
  constructor(t) {
    if ("function" != typeof t)
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function (t) {
      e = t;
    });
    const o = this;
    this.promise.then((t) => {
      if (!o._listeners) return;
      let e = o._listeners.length;
      for (; e-- > 0; ) o._listeners[e](t);
      o._listeners = null;
    }),
      (this.promise.then = (t) => {
        let e;
        const n = new Promise((t) => {
          o.subscribe(t), (e = t);
        }).then(t);
        return (
          (n.cancel = function () {
            o.unsubscribe(e);
          }),
          n
        );
      }),
      t(function (t, n, i) {
        o.reason || ((o.reason = new Ne(t, n, i)), e(o.reason));
      });
  }
}
var _e = We;
const qe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(qe).forEach(([t, e]) => {
  qe[e] = t;
});
var $e = qe;
const Ve = (function t(e) {
  const n = new He(e),
    i = o(He.prototype.request, n);
  return (
    B.extend(i, He.prototype, n, { allOwnKeys: !0 }),
    B.extend(i, n, null, { allOwnKeys: !0 }),
    (i.create = function (o) {
      return t(Me(e, o));
    }),
    i
  );
})(ce);
(Ve.Axios = He),
  (Ve.CanceledError = Ne),
  (Ve.CancelToken = _e),
  (Ve.isCancel = Ce),
  (Ve.VERSION = "1.3.4"),
  (Ve.toFormData = Jt),
  (Ve.AxiosError = F),
  (Ve.Cancel = Ve.CanceledError),
  (Ve.all = function (t) {
    return Promise.all(t);
  }),
  (Ve.spread = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  }),
  (Ve.isAxiosError = function (t) {
    return B.isObject(t) && !0 === t.isAxiosError;
  }),
  (Ve.mergeConfig = Me),
  (Ve.AxiosHeaders = we),
  (Ve.formToJSON = (t) => se(B.isHTMLForm(t) ? new FormData(t) : t)),
  (Ve.HttpStatusCode = $e),
  (Ve.default = Ve);
var Je = Ve;
const {
  Axios: Ze,
  AxiosError: Ge,
  CanceledError: Ke,
  isCancel: Qe,
  CancelToken: to,
  VERSION: eo,
  all: oo,
  Cancel: no,
  isAxiosError: io,
  spread: ro,
  toFormData: so,
  AxiosHeaders: ao,
  HttpStatusCode: lo,
  formToJSON: co,
  mergeConfig: fo,
} = Je;
var uo = {};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.12.1
*/ function ho(t) {
  return (ho =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
function po(t, e) {
  var o =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!o) {
    if (
      Array.isArray(t) ||
      (o = go(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      o && (t = o);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (t) {
          throw t;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var r,
    s = !0,
    a = !1;
  return {
    s: function () {
      o = o.call(t);
    },
    n: function () {
      var t = o.next();
      return (s = t.done), t;
    },
    e: function (t) {
      (a = !0), (r = t);
    },
    f: function () {
      try {
        s || null == o.return || o.return();
      } finally {
        if (a) throw r;
      }
    },
  };
}
function mo(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return yo(t);
    })(t) ||
    (function (t) {
      if (
        ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t["@@iterator"]
      )
        return Array.from(t);
    })(t) ||
    go(t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function go(t, e) {
  if (t) {
    if ("string" == typeof t) return yo(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === o && t.constructor && (o = t.constructor.name),
      "Map" === o || "Set" === o
        ? Array.from(t)
        : "Arguments" === o ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? yo(t, e)
        : void 0
    );
  }
}
function yo(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
  return n;
}
function vo(t, e) {
  for (var o = 0; o < e.length; o++) {
    var n = e[o];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function wo(t, e, o) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = o),
    t
  );
}
Object.defineProperty(uo, "__esModule", { value: !0 }), (uo.default = void 0);
var bo = (function () {
    function t(e, o) {
      var n = this;
      if (
        ((function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
        wo(this, "defaultOptions", {
          sourceAttr: "href",
          overlay: !0,
          overlayOpacity: 0.7,
          spinner: !0,
          nav: !0,
          navText: ["&lsaquo;", "&rsaquo;"],
          captions: !0,
          captionDelay: 0,
          captionSelector: "img",
          captionType: "attr",
          captionsData: "title",
          captionPosition: "bottom",
          captionClass: "",
          close: !0,
          closeText: "&times;",
          swipeClose: !0,
          showCounter: !0,
          fileExt: "png|jpg|jpeg|gif|webp",
          animationSlide: !0,
          animationSpeed: 250,
          preloading: !0,
          enableKeyboard: !0,
          loop: !0,
          rel: !1,
          docClose: !0,
          swipeTolerance: 50,
          className: "simple-lightbox",
          widthRatio: 0.8,
          heightRatio: 0.9,
          scaleImageToRatio: !1,
          disableRightClick: !1,
          disableScroll: !0,
          alertError: !0,
          alertErrorMessage: "Image not found, next image will be loaded",
          additionalHtml: !1,
          history: !0,
          throttleInterval: 0,
          doubleTapZoom: 2,
          maxZoom: 10,
          htmlClass: "has-lightbox",
          rtl: !1,
          fixedClass: "sl-fixed",
          fadeSpeed: 300,
          uniqueImages: !0,
          focus: !0,
          scrollZoom: !0,
          scrollZoomFactor: 0.5,
          download: !1,
        }),
        wo(this, "transitionPrefix", void 0),
        wo(this, "isPassiveEventsSupported", void 0),
        wo(this, "transitionCapable", !1),
        wo(this, "isTouchDevice", "ontouchstart" in window),
        wo(
          this,
          "isAppleDevice",
          /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
        ),
        wo(this, "initialLocationHash", void 0),
        wo(this, "pushStateSupport", "pushState" in history),
        wo(this, "isOpen", !1),
        wo(this, "isAnimating", !1),
        wo(this, "isClosing", !1),
        wo(this, "isFadeIn", !1),
        wo(this, "urlChangedOnce", !1),
        wo(this, "hashReseted", !1),
        wo(this, "historyHasChanges", !1),
        wo(this, "historyUpdateTimeout", null),
        wo(this, "currentImage", void 0),
        wo(this, "eventNamespace", "simplelightbox"),
        wo(this, "domNodes", {}),
        wo(this, "loadedImages", []),
        wo(this, "initialImageIndex", 0),
        wo(this, "currentImageIndex", 0),
        wo(this, "initialSelector", null),
        wo(this, "globalScrollbarWidth", 0),
        wo(this, "controlCoordinates", {
          swipeDiff: 0,
          swipeYDiff: 0,
          swipeStart: 0,
          swipeEnd: 0,
          swipeYStart: 0,
          swipeYEnd: 0,
          mousedown: !1,
          imageLeft: 0,
          zoomed: !1,
          containerHeight: 0,
          containerWidth: 0,
          containerOffsetX: 0,
          containerOffsetY: 0,
          imgHeight: 0,
          imgWidth: 0,
          capture: !1,
          initialOffsetX: 0,
          initialOffsetY: 0,
          initialPointerOffsetX: 0,
          initialPointerOffsetY: 0,
          initialPointerOffsetX2: 0,
          initialPointerOffsetY2: 0,
          initialScale: 1,
          initialPinchDistance: 0,
          pointerOffsetX: 0,
          pointerOffsetY: 0,
          pointerOffsetX2: 0,
          pointerOffsetY2: 0,
          targetOffsetX: 0,
          targetOffsetY: 0,
          targetScale: 0,
          pinchOffsetX: 0,
          pinchOffsetY: 0,
          limitOffsetX: 0,
          limitOffsetY: 0,
          scaleDifference: 0,
          targetPinchDistance: 0,
          touchCount: 0,
          doubleTapped: !1,
          touchmoveCount: 0,
        }),
        (this.options = Object.assign(this.defaultOptions, o)),
        (this.isPassiveEventsSupported = this.checkPassiveEventsSupport()),
        "string" == typeof e
          ? ((this.initialSelector = e),
            (this.elements = Array.from(document.querySelectorAll(e))))
          : (this.elements =
              void 0 !== e.length && e.length > 0 ? Array.from(e) : [e]),
        (this.relatedElements = []),
        (this.transitionPrefix = this.calculateTransitionPrefix()),
        (this.transitionCapable = !1 !== this.transitionPrefix),
        (this.initialLocationHash = this.hash),
        this.options.rel && (this.elements = this.getRelated(this.options.rel)),
        this.options.uniqueImages)
      ) {
        var i = [];
        this.elements = Array.from(this.elements).filter(function (t) {
          var e = t.getAttribute(n.options.sourceAttr);
          return -1 === i.indexOf(e) && (i.push(e), !0);
        });
      }
      this.createDomNodes(),
        this.options.close &&
          this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
        this.options.nav &&
          this.domNodes.wrapper.appendChild(this.domNodes.navigation),
        this.options.spinner &&
          this.domNodes.wrapper.appendChild(this.domNodes.spinner),
        this.addEventListener(
          this.elements,
          "click." + this.eventNamespace,
          function (t) {
            if (n.isValidLink(t.currentTarget)) {
              if ((t.preventDefault(), n.isAnimating)) return !1;
              (n.initialImageIndex = n.elements.indexOf(t.currentTarget)),
                n.openImage(t.currentTarget);
            }
          }
        ),
        this.options.docClose &&
          this.addEventListener(
            this.domNodes.wrapper,
            [
              "click." + this.eventNamespace,
              "touchstart." + this.eventNamespace,
            ],
            function (t) {
              n.isOpen && t.target === t.currentTarget && n.close();
            }
          ),
        this.options.disableRightClick &&
          this.addEventListener(
            document.body,
            "contextmenu." + this.eventNamespace,
            function (t) {
              t.target.parentElement.classList.contains("sl-image") &&
                t.preventDefault();
            }
          ),
        this.options.enableKeyboard &&
          this.addEventListener(
            document.body,
            "keyup." + this.eventNamespace,
            this.throttle(function (t) {
              if (
                ((n.controlCoordinates.swipeDiff = 0),
                n.isAnimating && "Escape" === t.key)
              )
                return (
                  n.currentImage.setAttribute("src", ""),
                  (n.isAnimating = !1),
                  n.close()
                );
              n.isOpen &&
                (t.preventDefault(),
                "Escape" === t.key && n.close(),
                !n.isAnimating &&
                  ["ArrowLeft", "ArrowRight"].indexOf(t.key) > -1 &&
                  n.loadImage("ArrowRight" === t.key ? 1 : -1));
            }, this.options.throttleInterval)
          ),
        this.addEvents();
    }
    var e, o, n;
    return (
      (e = t),
      (o = [
        {
          key: "checkPassiveEventsSupport",
          value: function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
              window.addEventListener("testPassive", null, e),
                window.removeEventListener("testPassive", null, e);
            } catch (t) {}
            return t;
          },
        },
        {
          key: "generateQuerySelector",
          value: function (t) {
            var e = t.tagName,
              o = t.id,
              n = t.className,
              i = t.parentNode;
            if ("HTML" === e) return "HTML";
            var r = e;
            if (((r += "" !== o ? "#".concat(o) : ""), n))
              for (var s = n.trim().split(/\s/), a = 0; a < s.length; a++)
                r += ".".concat(s[a]);
            for (
              var l = 1, c = t;
              c.previousElementSibling;
              c = c.previousElementSibling
            )
              l += 1;
            return (
              (r += ":nth-child(".concat(l, ")")),
              "".concat(this.generateQuerySelector(i), " > ").concat(r)
            );
          },
        },
        {
          key: "createDomNodes",
          value: function () {
            if (
              ((this.domNodes.overlay = document.createElement("div")),
              this.domNodes.overlay.classList.add("sl-overlay"),
              (this.domNodes.overlay.dataset.opacityTarget =
                this.options.overlayOpacity),
              (this.domNodes.closeButton = document.createElement("button")),
              this.domNodes.closeButton.classList.add("sl-close"),
              (this.domNodes.closeButton.innerHTML = this.options.closeText),
              (this.domNodes.spinner = document.createElement("div")),
              this.domNodes.spinner.classList.add("sl-spinner"),
              (this.domNodes.spinner.innerHTML = "<div></div>"),
              (this.domNodes.navigation = document.createElement("div")),
              this.domNodes.navigation.classList.add("sl-navigation"),
              (this.domNodes.navigation.innerHTML = '<button class="sl-prev">'
                .concat(
                  this.options.navText[0],
                  '</button><button class="sl-next">'
                )
                .concat(this.options.navText[1], "</button>")),
              (this.domNodes.counter = document.createElement("div")),
              this.domNodes.counter.classList.add("sl-counter"),
              (this.domNodes.counter.innerHTML =
                '<span class="sl-current"></span>/<span class="sl-total"></span>'),
              (this.domNodes.download = document.createElement("div")),
              this.domNodes.download.classList.add("sl-download"),
              (this.domNodes.downloadLink = document.createElement("a")),
              this.domNodes.downloadLink.setAttribute("download", ""),
              (this.domNodes.downloadLink.textContent = this.options.download),
              this.domNodes.download.appendChild(this.domNodes.downloadLink),
              (this.domNodes.caption = document.createElement("div")),
              this.domNodes.caption.classList.add(
                "sl-caption",
                "pos-" + this.options.captionPosition
              ),
              this.options.captionClass)
            ) {
              var t,
                e = this.options.captionClass.split(/[\s,]+/);
              (t = this.domNodes.caption.classList).add.apply(t, mo(e));
            }
            (this.domNodes.image = document.createElement("div")),
              this.domNodes.image.classList.add("sl-image"),
              (this.domNodes.wrapper = document.createElement("div")),
              this.domNodes.wrapper.classList.add("sl-wrapper"),
              this.domNodes.wrapper.setAttribute("tabindex", -1),
              this.domNodes.wrapper.setAttribute("role", "dialog"),
              this.domNodes.wrapper.setAttribute("aria-hidden", !1),
              this.options.className &&
                this.domNodes.wrapper.classList.add(this.options.className),
              this.options.rtl &&
                this.domNodes.wrapper.classList.add("sl-dir-rtl");
          },
        },
        {
          key: "throttle",
          value: function (t, e) {
            var o;
            return function () {
              o ||
                (t.apply(this, arguments),
                (o = !0),
                setTimeout(function () {
                  return (o = !1);
                }, e));
            };
          },
        },
        {
          key: "isValidLink",
          value: function (t) {
            return (
              !this.options.fileExt ||
              (t.getAttribute(this.options.sourceAttr) &&
                new RegExp(
                  "(" + this.options.fileExt + ")($|\\?.*$)",
                  "i"
                ).test(t.getAttribute(this.options.sourceAttr)))
            );
          },
        },
        {
          key: "calculateTransitionPrefix",
          value: function () {
            var t = (document.body || document.documentElement).style;
            return "transition" in t
              ? ""
              : "WebkitTransition" in t
              ? "-webkit-"
              : "MozTransition" in t
              ? "-moz-"
              : "OTransition" in t && "-o";
          },
        },
        {
          key: "getScrollbarWidth",
          value: function () {
            var t,
              e = document.createElement("div");
            return (
              e.classList.add("sl-scrollbar-measure"),
              document.body.appendChild(e),
              (t = e.offsetWidth - e.clientWidth),
              document.body.removeChild(e),
              t
            );
          },
        },
        {
          key: "toggleScrollbar",
          value: function (t) {
            var e = 0,
              o = [].slice.call(
                document.querySelectorAll("." + this.options.fixedClass)
              );
            if ("hide" === t) {
              var n = window.innerWidth;
              if (!n) {
                var i = document.documentElement.getBoundingClientRect();
                n = i.right - Math.abs(i.left);
              }
              if (document.body.clientWidth < n || this.isAppleDevice) {
                var r = parseInt(document.body.style.paddingRight || 0, 10);
                (e = this.getScrollbarWidth()),
                  (document.body.dataset.originalPaddingRight = r),
                  (e > 0 || (0 == e && this.isAppleDevice)) &&
                    (document.body.classList.add("hidden-scroll"),
                    (document.body.style.paddingRight = r + e + "px"),
                    o.forEach(function (t) {
                      var o = t.style.paddingRight,
                        n = window.getComputedStyle(t)["padding-right"];
                      (t.dataset.originalPaddingRight = o),
                        (t.style.paddingRight = "".concat(
                          parseFloat(n) + e,
                          "px"
                        ));
                    }));
              }
            } else
              document.body.classList.remove("hidden-scroll"),
                (document.body.style.paddingRight =
                  document.body.dataset.originalPaddingRight),
                o.forEach(function (t) {
                  var e = t.dataset.originalPaddingRight;
                  void 0 !== e && (t.style.paddingRight = e);
                });
            return e;
          },
        },
        {
          key: "close",
          value: function () {
            var t = this;
            if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
            this.isClosing = !0;
            var e = this.relatedElements[this.currentImageIndex];
            for (var o in (e.dispatchEvent(new Event("close.simplelightbox")),
            this.options.history &&
              ((this.historyHasChanges = !1),
              this.hashReseted || this.resetHash()),
            this.removeEventListener(
              document,
              "focusin." + this.eventNamespace
            ),
            this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
            this.fadeOut(
              document.querySelectorAll(
                ".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"
              ),
              this.options.fadeSpeed,
              function () {
                t.options.disableScroll && t.toggleScrollbar("show"),
                  t.options.htmlClass &&
                    "" !== t.options.htmlClass &&
                    document
                      .querySelector("html")
                      .classList.remove(t.options.htmlClass),
                  document.body.removeChild(t.domNodes.wrapper),
                  document.body.removeChild(t.domNodes.overlay),
                  (t.domNodes.additionalHtml = null),
                  (t.domNodes.download = null),
                  e.dispatchEvent(new Event("closed.simplelightbox")),
                  (t.isClosing = !1);
              }
            ),
            (this.currentImage = null),
            (this.isOpen = !1),
            (this.isAnimating = !1),
            this.controlCoordinates))
              this.controlCoordinates[o] = 0;
            (this.controlCoordinates.mousedown = !1),
              (this.controlCoordinates.zoomed = !1),
              (this.controlCoordinates.capture = !1),
              (this.controlCoordinates.initialScale = this.minMax(
                1,
                1,
                this.options.maxZoom
              )),
              (this.controlCoordinates.doubleTapped = !1);
          },
        },
        {
          key: "hash",
          get: function () {
            return window.location.hash.substring(1);
          },
        },
        {
          key: "preload",
          value: function () {
            var t = this,
              e = this.currentImageIndex,
              o = this.relatedElements.length,
              n = e + 1 < 0 ? o - 1 : e + 1 >= o - 1 ? 0 : e + 1,
              i = e - 1 < 0 ? o - 1 : e - 1 >= o - 1 ? 0 : e - 1,
              r = new Image(),
              s = new Image();
            r.addEventListener("load", function (o) {
              var n = o.target.getAttribute("src");
              -1 === t.loadedImages.indexOf(n) && t.loadedImages.push(n),
                t.relatedElements[e].dispatchEvent(
                  new Event("nextImageLoaded." + t.eventNamespace)
                );
            }),
              r.setAttribute(
                "src",
                this.relatedElements[n].getAttribute(this.options.sourceAttr)
              ),
              s.addEventListener("load", function (o) {
                var n = o.target.getAttribute("src");
                -1 === t.loadedImages.indexOf(n) && t.loadedImages.push(n),
                  t.relatedElements[e].dispatchEvent(
                    new Event("prevImageLoaded." + t.eventNamespace)
                  );
              }),
              s.setAttribute(
                "src",
                this.relatedElements[i].getAttribute(this.options.sourceAttr)
              );
          },
        },
        {
          key: "loadImage",
          value: function (t) {
            var e = this,
              o = t;
            this.options.rtl && (t = -t),
              this.relatedElements[this.currentImageIndex].dispatchEvent(
                new Event("change." + this.eventNamespace)
              ),
              this.relatedElements[this.currentImageIndex].dispatchEvent(
                new Event(
                  (1 === t ? "next" : "prev") + "." + this.eventNamespace
                )
              );
            var n = this.currentImageIndex + t;
            if (
              this.isAnimating ||
              ((n < 0 || n >= this.relatedElements.length) &&
                !1 === this.options.loop)
            )
              return !1;
            (this.currentImageIndex =
              n < 0
                ? this.relatedElements.length - 1
                : n > this.relatedElements.length - 1
                ? 0
                : n),
              (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                this.currentImageIndex + 1),
              this.options.animationSlide &&
                this.slide(
                  this.options.animationSpeed / 1e3,
                  -100 * o - this.controlCoordinates.swipeDiff + "px"
                ),
              this.fadeOut(
                this.domNodes.image,
                this.options.fadeSpeed,
                function () {
                  (e.isAnimating = !0),
                    e.isClosing
                      ? (e.isAnimating = !1)
                      : setTimeout(function () {
                          var t = e.relatedElements[e.currentImageIndex];
                          e.currentImage.setAttribute(
                            "src",
                            t.getAttribute(e.options.sourceAttr)
                          ),
                            -1 ===
                              e.loadedImages.indexOf(
                                t.getAttribute(e.options.sourceAttr)
                              ) && e.show(e.domNodes.spinner),
                            e.domNodes.image.contains(e.domNodes.caption) &&
                              e.domNodes.image.removeChild(e.domNodes.caption),
                            e.adjustImage(o),
                            e.options.preloading && e.preload();
                        }, 100);
                }
              );
          },
        },
        {
          key: "adjustImage",
          value: function (t) {
            var e = this;
            if (!this.currentImage) return !1;
            var o = new Image(),
              n = window.innerWidth * this.options.widthRatio,
              i = window.innerHeight * this.options.heightRatio;
            o.setAttribute("src", this.currentImage.getAttribute("src")),
              (this.currentImage.dataset.scale = 1),
              (this.currentImage.dataset.translateX = 0),
              (this.currentImage.dataset.translateY = 0),
              this.zoomPanElement(0, 0, 1),
              o.addEventListener("error", function (o) {
                e.relatedElements[e.currentImageIndex].dispatchEvent(
                  new Event("error." + e.eventNamespace)
                ),
                  (e.isAnimating = !1),
                  (e.isOpen = !0),
                  (e.domNodes.spinner.style.display = "none");
                var n = 1 === t || -1 === t;
                if (e.initialImageIndex === e.currentImageIndex && n)
                  return e.close();
                e.options.alertError && alert(e.options.alertErrorMessage),
                  e.loadImage(n ? t : 1);
              }),
              o.addEventListener("load", function (o) {
                void 0 !== t &&
                  (e.relatedElements[e.currentImageIndex].dispatchEvent(
                    new Event("changed." + e.eventNamespace)
                  ),
                  e.relatedElements[e.currentImageIndex].dispatchEvent(
                    new Event(
                      (1 === t ? "nextDone" : "prevDone") +
                        "." +
                        e.eventNamespace
                    )
                  )),
                  e.options.history && e.updateURL(),
                  -1 ===
                    e.loadedImages.indexOf(
                      e.currentImage.getAttribute("src")
                    ) &&
                    e.loadedImages.push(e.currentImage.getAttribute("src"));
                var r,
                  s,
                  a = o.target.width,
                  l = o.target.height;
                if (e.options.scaleImageToRatio || a > n || l > i) {
                  var c = a / l > n / i ? a / n : l / i;
                  (a /= c), (l /= c);
                }
                (e.domNodes.image.style.top =
                  (window.innerHeight - l) / 2 + "px"),
                  (e.domNodes.image.style.left =
                    (window.innerWidth - a - e.globalScrollbarWidth) / 2 +
                    "px"),
                  (e.domNodes.image.style.width = a + "px"),
                  (e.domNodes.image.style.height = l + "px"),
                  (e.domNodes.spinner.style.display = "none"),
                  e.options.focus && e.forceFocus(),
                  e.fadeIn(e.currentImage, e.options.fadeSpeed, function () {
                    e.options.focus && e.domNodes.wrapper.focus();
                  }),
                  (e.isOpen = !0),
                  "string" == typeof e.options.captionSelector
                    ? (r =
                        "self" === e.options.captionSelector
                          ? e.relatedElements[e.currentImageIndex]
                          : document.querySelector(
                              e.generateQuerySelector(
                                e.relatedElements[e.currentImageIndex]
                              ) +
                                " " +
                                e.options.captionSelector
                            ))
                    : "function" == typeof e.options.captionSelector &&
                      (r = e.options.captionSelector(
                        e.relatedElements[e.currentImageIndex]
                      )),
                  e.options.captions &&
                    r &&
                    (s =
                      "data" === e.options.captionType
                        ? r.dataset[e.options.captionsData]
                        : "text" === e.options.captionType
                        ? r.innerHTML
                        : r.getAttribute(e.options.captionsData)),
                  e.options.loop
                    ? 1 === e.relatedElements.length
                      ? e.hide(
                          e.domNodes.navigation.querySelectorAll(
                            ".sl-prev, .sl-next"
                          )
                        )
                      : e.show(
                          e.domNodes.navigation.querySelectorAll(
                            ".sl-prev, .sl-next"
                          )
                        )
                    : (0 === e.currentImageIndex &&
                        e.hide(e.domNodes.navigation.querySelector(".sl-prev")),
                      e.currentImageIndex >= e.relatedElements.length - 1 &&
                        e.hide(e.domNodes.navigation.querySelector(".sl-next")),
                      e.currentImageIndex > 0 &&
                        e.show(e.domNodes.navigation.querySelector(".sl-prev")),
                      e.currentImageIndex < e.relatedElements.length - 1 &&
                        e.show(
                          e.domNodes.navigation.querySelector(".sl-next")
                        )),
                  1 === t || -1 === t
                    ? (e.options.animationSlide &&
                        (e.slide(0, 100 * t + "px"),
                        setTimeout(function () {
                          e.slide(e.options.animationSpeed / 1e3, "0px");
                        }, 50)),
                      e.fadeIn(
                        e.domNodes.image,
                        e.options.fadeSpeed,
                        function () {
                          (e.isAnimating = !1), e.setCaption(s, a);
                        }
                      ))
                    : ((e.isAnimating = !1), e.setCaption(s, a)),
                  e.options.additionalHtml &&
                    !e.domNodes.additionalHtml &&
                    ((e.domNodes.additionalHtml =
                      document.createElement("div")),
                    e.domNodes.additionalHtml.classList.add(
                      "sl-additional-html"
                    ),
                    (e.domNodes.additionalHtml.innerHTML =
                      e.options.additionalHtml),
                    e.domNodes.image.appendChild(e.domNodes.additionalHtml)),
                  e.options.download &&
                    e.domNodes.downloadLink.setAttribute(
                      "href",
                      e.currentImage.getAttribute("src")
                    );
              });
          },
        },
        {
          key: "zoomPanElement",
          value: function (t, e, o) {
            this.currentImage.style[this.transitionPrefix + "transform"] =
              "translate(" + t + "," + e + ") scale(" + o + ")";
          },
        },
        {
          key: "minMax",
          value: function (t, e, o) {
            return t < e ? e : t > o ? o : t;
          },
        },
        {
          key: "setZoomData",
          value: function (t, e, o) {
            (this.currentImage.dataset.scale = t),
              (this.currentImage.dataset.translateX = e),
              (this.currentImage.dataset.translateY = o);
          },
        },
        {
          key: "hashchangeHandler",
          value: function () {
            this.isOpen &&
              this.hash === this.initialLocationHash &&
              ((this.hashReseted = !0), this.close());
          },
        },
        {
          key: "addEvents",
          value: function () {
            var t = this;
            if (
              (this.addEventListener(
                window,
                "resize." + this.eventNamespace,
                function (e) {
                  t.isOpen && t.adjustImage();
                }
              ),
              this.addEventListener(
                this.domNodes.closeButton,
                [
                  "click." + this.eventNamespace,
                  "touchstart." + this.eventNamespace,
                ],
                this.close.bind(this)
              ),
              this.options.history &&
                setTimeout(function () {
                  t.addEventListener(
                    window,
                    "hashchange." + t.eventNamespace,
                    function (e) {
                      t.isOpen && t.hashchangeHandler();
                    }
                  );
                }, 40),
              this.addEventListener(
                this.domNodes.navigation.getElementsByTagName("button"),
                "click." + this.eventNamespace,
                function (e) {
                  if (!e.currentTarget.tagName.match(/button/i)) return !0;
                  e.preventDefault(),
                    (t.controlCoordinates.swipeDiff = 0),
                    t.loadImage(
                      e.currentTarget.classList.contains("sl-next") ? 1 : -1
                    );
                }
              ),
              this.options.scrollZoom)
            ) {
              var e = 1;
              this.addEventListener(
                this.domNodes.image,
                ["mousewheel", "DOMMouseScroll"],
                function (o) {
                  if (
                    t.controlCoordinates.mousedown ||
                    t.isAnimating ||
                    t.isClosing ||
                    !t.isOpen
                  )
                    return !0;
                  0 == t.controlCoordinates.containerHeight &&
                    ((t.controlCoordinates.containerHeight = t.getDimensions(
                      t.domNodes.image
                    ).height),
                    (t.controlCoordinates.containerWidth = t.getDimensions(
                      t.domNodes.image
                    ).width),
                    (t.controlCoordinates.imgHeight = t.getDimensions(
                      t.currentImage
                    ).height),
                    (t.controlCoordinates.imgWidth = t.getDimensions(
                      t.currentImage
                    ).width),
                    (t.controlCoordinates.containerOffsetX =
                      t.domNodes.image.offsetLeft),
                    (t.controlCoordinates.containerOffsetY =
                      t.domNodes.image.offsetTop),
                    (t.controlCoordinates.initialOffsetX = parseFloat(
                      t.currentImage.dataset.translateX
                    )),
                    (t.controlCoordinates.initialOffsetY = parseFloat(
                      t.currentImage.dataset.translateY
                    ))),
                    o.preventDefault();
                  var n = o.delta || o.wheelDelta;
                  void 0 === n && (n = o.detail),
                    (n = Math.max(-1, Math.min(1, n))),
                    (e += n * t.options.scrollZoomFactor * e),
                    (e = Math.max(1, Math.min(t.options.maxZoom, e))),
                    (t.controlCoordinates.targetScale = e);
                  var i =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                  (t.controlCoordinates.pinchOffsetX = o.pageX),
                    (t.controlCoordinates.pinchOffsetY = o.pageY - i || 0),
                    (t.controlCoordinates.limitOffsetX =
                      (t.controlCoordinates.imgWidth *
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.containerWidth) /
                      2),
                    (t.controlCoordinates.limitOffsetY =
                      (t.controlCoordinates.imgHeight *
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.containerHeight) /
                      2),
                    (t.controlCoordinates.scaleDifference =
                      t.controlCoordinates.targetScale -
                      t.controlCoordinates.initialScale),
                    (t.controlCoordinates.targetOffsetX =
                      t.controlCoordinates.imgWidth *
                        t.controlCoordinates.targetScale <=
                      t.controlCoordinates.containerWidth
                        ? 0
                        : t.minMax(
                            t.controlCoordinates.initialOffsetX -
                              ((t.controlCoordinates.pinchOffsetX -
                                t.controlCoordinates.containerOffsetX -
                                t.controlCoordinates.containerWidth / 2 -
                                t.controlCoordinates.initialOffsetX) /
                                (t.controlCoordinates.targetScale -
                                  t.controlCoordinates.scaleDifference)) *
                                t.controlCoordinates.scaleDifference,
                            -1 * t.controlCoordinates.limitOffsetX,
                            t.controlCoordinates.limitOffsetX
                          )),
                    (t.controlCoordinates.targetOffsetY =
                      t.controlCoordinates.imgHeight *
                        t.controlCoordinates.targetScale <=
                      t.controlCoordinates.containerHeight
                        ? 0
                        : t.minMax(
                            t.controlCoordinates.initialOffsetY -
                              ((t.controlCoordinates.pinchOffsetY -
                                t.controlCoordinates.containerOffsetY -
                                t.controlCoordinates.containerHeight / 2 -
                                t.controlCoordinates.initialOffsetY) /
                                (t.controlCoordinates.targetScale -
                                  t.controlCoordinates.scaleDifference)) *
                                t.controlCoordinates.scaleDifference,
                            -1 * t.controlCoordinates.limitOffsetY,
                            t.controlCoordinates.limitOffsetY
                          )),
                    t.zoomPanElement(
                      t.controlCoordinates.targetOffsetX + "px",
                      t.controlCoordinates.targetOffsetY + "px",
                      t.controlCoordinates.targetScale
                    ),
                    t.controlCoordinates.targetScale > 1
                      ? ((t.controlCoordinates.zoomed = !0),
                        (!t.domNodes.caption.style.opacity ||
                          t.domNodes.caption.style.opacity > 0) &&
                          "none" !== t.domNodes.caption.style.display &&
                          t.fadeOut(t.domNodes.caption, t.options.fadeSpeed))
                      : (1 === t.controlCoordinates.initialScale &&
                          ((t.controlCoordinates.zoomed = !1),
                          "none" === t.domNodes.caption.style.display &&
                            t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                        (t.controlCoordinates.initialPinchDistance = null),
                        (t.controlCoordinates.capture = !1)),
                    (t.controlCoordinates.initialPinchDistance =
                      t.controlCoordinates.targetPinchDistance),
                    (t.controlCoordinates.initialScale =
                      t.controlCoordinates.targetScale),
                    (t.controlCoordinates.initialOffsetX =
                      t.controlCoordinates.targetOffsetX),
                    (t.controlCoordinates.initialOffsetY =
                      t.controlCoordinates.targetOffsetY),
                    t.setZoomData(
                      t.controlCoordinates.targetScale,
                      t.controlCoordinates.targetOffsetX,
                      t.controlCoordinates.targetOffsetY
                    ),
                    t.zoomPanElement(
                      t.controlCoordinates.targetOffsetX + "px",
                      t.controlCoordinates.targetOffsetY + "px",
                      t.controlCoordinates.targetScale
                    );
                }
              );
            }
            this.addEventListener(
              this.domNodes.image,
              [
                "touchstart." + this.eventNamespace,
                "mousedown." + this.eventNamespace,
              ],
              function (e) {
                if ("A" === e.target.tagName && "touchstart" === e.type)
                  return !0;
                if ("mousedown" === e.type)
                  e.preventDefault(),
                    (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                    (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                    (t.controlCoordinates.containerHeight = t.getDimensions(
                      t.domNodes.image
                    ).height),
                    (t.controlCoordinates.containerWidth = t.getDimensions(
                      t.domNodes.image
                    ).width),
                    (t.controlCoordinates.imgHeight = t.getDimensions(
                      t.currentImage
                    ).height),
                    (t.controlCoordinates.imgWidth = t.getDimensions(
                      t.currentImage
                    ).width),
                    (t.controlCoordinates.containerOffsetX =
                      t.domNodes.image.offsetLeft),
                    (t.controlCoordinates.containerOffsetY =
                      t.domNodes.image.offsetTop),
                    (t.controlCoordinates.initialOffsetX = parseFloat(
                      t.currentImage.dataset.translateX
                    )),
                    (t.controlCoordinates.initialOffsetY = parseFloat(
                      t.currentImage.dataset.translateY
                    )),
                    (t.controlCoordinates.capture = !0);
                else {
                  if (
                    ((t.controlCoordinates.touchCount = e.touches.length),
                    (t.controlCoordinates.initialPointerOffsetX =
                      e.touches[0].clientX),
                    (t.controlCoordinates.initialPointerOffsetY =
                      e.touches[0].clientY),
                    (t.controlCoordinates.containerHeight = t.getDimensions(
                      t.domNodes.image
                    ).height),
                    (t.controlCoordinates.containerWidth = t.getDimensions(
                      t.domNodes.image
                    ).width),
                    (t.controlCoordinates.imgHeight = t.getDimensions(
                      t.currentImage
                    ).height),
                    (t.controlCoordinates.imgWidth = t.getDimensions(
                      t.currentImage
                    ).width),
                    (t.controlCoordinates.containerOffsetX =
                      t.domNodes.image.offsetLeft),
                    (t.controlCoordinates.containerOffsetY =
                      t.domNodes.image.offsetTop),
                    1 === t.controlCoordinates.touchCount)
                  ) {
                    if (t.controlCoordinates.doubleTapped)
                      return (
                        t.currentImage.classList.add("sl-transition"),
                        t.controlCoordinates.zoomed
                          ? ((t.controlCoordinates.initialScale = 1),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (t.controlCoordinates.zoomed = !1))
                          : ((t.controlCoordinates.initialScale =
                              t.options.doubleTapZoom),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (!t.domNodes.caption.style.opacity ||
                              t.domNodes.caption.style.opacity > 0) &&
                              "none" !== t.domNodes.caption.style.display &&
                              t.fadeOut(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              ),
                            (t.controlCoordinates.zoomed = !0)),
                        setTimeout(function () {
                          t.currentImage &&
                            t.currentImage.classList.remove("sl-transition");
                        }, 200),
                        !1
                      );
                    (t.controlCoordinates.doubleTapped = !0),
                      setTimeout(function () {
                        t.controlCoordinates.doubleTapped = !1;
                      }, 300),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      ));
                  } else
                    2 === t.controlCoordinates.touchCount &&
                      ((t.controlCoordinates.initialPointerOffsetX2 =
                        e.touches[1].clientX),
                      (t.controlCoordinates.initialPointerOffsetY2 =
                        e.touches[1].clientY),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      )),
                      (t.controlCoordinates.pinchOffsetX =
                        (t.controlCoordinates.initialPointerOffsetX +
                          t.controlCoordinates.initialPointerOffsetX2) /
                        2),
                      (t.controlCoordinates.pinchOffsetY =
                        (t.controlCoordinates.initialPointerOffsetY +
                          t.controlCoordinates.initialPointerOffsetY2) /
                        2),
                      (t.controlCoordinates.initialPinchDistance = Math.sqrt(
                        (t.controlCoordinates.initialPointerOffsetX -
                          t.controlCoordinates.initialPointerOffsetX2) *
                          (t.controlCoordinates.initialPointerOffsetX -
                            t.controlCoordinates.initialPointerOffsetX2) +
                          (t.controlCoordinates.initialPointerOffsetY -
                            t.controlCoordinates.initialPointerOffsetY2) *
                            (t.controlCoordinates.initialPointerOffsetY -
                              t.controlCoordinates.initialPointerOffsetY2)
                      )));
                  t.controlCoordinates.capture = !0;
                }
                return (
                  !!t.controlCoordinates.mousedown ||
                  (t.transitionCapable &&
                    (t.controlCoordinates.imageLeft = parseInt(
                      t.domNodes.image.style.left,
                      10
                    )),
                  (t.controlCoordinates.mousedown = !0),
                  (t.controlCoordinates.swipeDiff = 0),
                  (t.controlCoordinates.swipeYDiff = 0),
                  (t.controlCoordinates.swipeStart =
                    e.pageX || e.touches[0].pageX),
                  (t.controlCoordinates.swipeYStart =
                    e.pageY || e.touches[0].pageY),
                  !1)
                );
              }
            ),
              this.addEventListener(
                this.domNodes.image,
                [
                  "touchmove." + this.eventNamespace,
                  "mousemove." + this.eventNamespace,
                  "MSPointerMove",
                ],
                function (e) {
                  if (!t.controlCoordinates.mousedown) return !0;
                  if ("touchmove" === e.type) {
                    if (!1 === t.controlCoordinates.capture) return !1;
                    (t.controlCoordinates.pointerOffsetX =
                      e.touches[0].clientX),
                      (t.controlCoordinates.pointerOffsetY =
                        e.touches[0].clientY),
                      (t.controlCoordinates.touchCount = e.touches.length),
                      t.controlCoordinates.touchmoveCount++,
                      t.controlCoordinates.touchCount > 1
                        ? ((t.controlCoordinates.pointerOffsetX2 =
                            e.touches[1].clientX),
                          (t.controlCoordinates.pointerOffsetY2 =
                            e.touches[1].clientY),
                          (t.controlCoordinates.targetPinchDistance = Math.sqrt(
                            (t.controlCoordinates.pointerOffsetX -
                              t.controlCoordinates.pointerOffsetX2) *
                              (t.controlCoordinates.pointerOffsetX -
                                t.controlCoordinates.pointerOffsetX2) +
                              (t.controlCoordinates.pointerOffsetY -
                                t.controlCoordinates.pointerOffsetY2) *
                                (t.controlCoordinates.pointerOffsetY -
                                  t.controlCoordinates.pointerOffsetY2)
                          )),
                          null === t.controlCoordinates.initialPinchDistance &&
                            (t.controlCoordinates.initialPinchDistance =
                              t.controlCoordinates.targetPinchDistance),
                          Math.abs(
                            t.controlCoordinates.initialPinchDistance -
                              t.controlCoordinates.targetPinchDistance
                          ) >= 1 &&
                            ((t.controlCoordinates.targetScale = t.minMax(
                              (t.controlCoordinates.targetPinchDistance /
                                t.controlCoordinates.initialPinchDistance) *
                                t.controlCoordinates.initialScale,
                              1,
                              t.options.maxZoom
                            )),
                            (t.controlCoordinates.limitOffsetX =
                              (t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerWidth) /
                              2),
                            (t.controlCoordinates.limitOffsetY =
                              (t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerHeight) /
                              2),
                            (t.controlCoordinates.scaleDifference =
                              t.controlCoordinates.targetScale -
                              t.controlCoordinates.initialScale),
                            (t.controlCoordinates.targetOffsetX =
                              t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerWidth
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.initialOffsetX -
                                      ((t.controlCoordinates.pinchOffsetX -
                                        t.controlCoordinates.containerOffsetX -
                                        t.controlCoordinates.containerWidth /
                                          2 -
                                        t.controlCoordinates.initialOffsetX) /
                                        (t.controlCoordinates.targetScale -
                                          t.controlCoordinates
                                            .scaleDifference)) *
                                        t.controlCoordinates.scaleDifference,
                                    -1 * t.controlCoordinates.limitOffsetX,
                                    t.controlCoordinates.limitOffsetX
                                  )),
                            (t.controlCoordinates.targetOffsetY =
                              t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerHeight
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.initialOffsetY -
                                      ((t.controlCoordinates.pinchOffsetY -
                                        t.controlCoordinates.containerOffsetY -
                                        t.controlCoordinates.containerHeight /
                                          2 -
                                        t.controlCoordinates.initialOffsetY) /
                                        (t.controlCoordinates.targetScale -
                                          t.controlCoordinates
                                            .scaleDifference)) *
                                        t.controlCoordinates.scaleDifference,
                                    -1 * t.controlCoordinates.limitOffsetY,
                                    t.controlCoordinates.limitOffsetY
                                  )),
                            t.zoomPanElement(
                              t.controlCoordinates.targetOffsetX + "px",
                              t.controlCoordinates.targetOffsetY + "px",
                              t.controlCoordinates.targetScale
                            ),
                            t.controlCoordinates.targetScale > 1 &&
                              ((t.controlCoordinates.zoomed = !0),
                              (!t.domNodes.caption.style.opacity ||
                                t.domNodes.caption.style.opacity > 0) &&
                                "none" !== t.domNodes.caption.style.display &&
                                t.fadeOut(
                                  t.domNodes.caption,
                                  t.options.fadeSpeed
                                )),
                            (t.controlCoordinates.initialPinchDistance =
                              t.controlCoordinates.targetPinchDistance),
                            (t.controlCoordinates.initialScale =
                              t.controlCoordinates.targetScale),
                            (t.controlCoordinates.initialOffsetX =
                              t.controlCoordinates.targetOffsetX),
                            (t.controlCoordinates.initialOffsetY =
                              t.controlCoordinates.targetOffsetY)))
                        : ((t.controlCoordinates.targetScale =
                            t.controlCoordinates.initialScale),
                          (t.controlCoordinates.limitOffsetX =
                            (t.controlCoordinates.imgWidth *
                              t.controlCoordinates.targetScale -
                              t.controlCoordinates.containerWidth) /
                            2),
                          (t.controlCoordinates.limitOffsetY =
                            (t.controlCoordinates.imgHeight *
                              t.controlCoordinates.targetScale -
                              t.controlCoordinates.containerHeight) /
                            2),
                          (t.controlCoordinates.targetOffsetX =
                            t.controlCoordinates.imgWidth *
                              t.controlCoordinates.targetScale <=
                            t.controlCoordinates.containerWidth
                              ? 0
                              : t.minMax(
                                  t.controlCoordinates.pointerOffsetX -
                                    (t.controlCoordinates
                                      .initialPointerOffsetX -
                                      t.controlCoordinates.initialOffsetX),
                                  -1 * t.controlCoordinates.limitOffsetX,
                                  t.controlCoordinates.limitOffsetX
                                )),
                          (t.controlCoordinates.targetOffsetY =
                            t.controlCoordinates.imgHeight *
                              t.controlCoordinates.targetScale <=
                            t.controlCoordinates.containerHeight
                              ? 0
                              : t.minMax(
                                  t.controlCoordinates.pointerOffsetY -
                                    (t.controlCoordinates
                                      .initialPointerOffsetY -
                                      t.controlCoordinates.initialOffsetY),
                                  -1 * t.controlCoordinates.limitOffsetY,
                                  t.controlCoordinates.limitOffsetY
                                )),
                          Math.abs(t.controlCoordinates.targetOffsetX) ===
                            Math.abs(t.controlCoordinates.limitOffsetX) &&
                            ((t.controlCoordinates.initialOffsetX =
                              t.controlCoordinates.targetOffsetX),
                            (t.controlCoordinates.initialPointerOffsetX =
                              t.controlCoordinates.pointerOffsetX)),
                          Math.abs(t.controlCoordinates.targetOffsetY) ===
                            Math.abs(t.controlCoordinates.limitOffsetY) &&
                            ((t.controlCoordinates.initialOffsetY =
                              t.controlCoordinates.targetOffsetY),
                            (t.controlCoordinates.initialPointerOffsetY =
                              t.controlCoordinates.pointerOffsetY)),
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            t.controlCoordinates.targetOffsetX,
                            t.controlCoordinates.targetOffsetY
                          ),
                          t.zoomPanElement(
                            t.controlCoordinates.targetOffsetX + "px",
                            t.controlCoordinates.targetOffsetY + "px",
                            t.controlCoordinates.targetScale
                          ));
                  }
                  if (
                    "mousemove" === e.type &&
                    t.controlCoordinates.mousedown
                  ) {
                    if ("touchmove" == e.type) return !0;
                    if (
                      (e.preventDefault(), !1 === t.controlCoordinates.capture)
                    )
                      return !1;
                    (t.controlCoordinates.pointerOffsetX = e.clientX),
                      (t.controlCoordinates.pointerOffsetY = e.clientY),
                      (t.controlCoordinates.targetScale =
                        t.controlCoordinates.initialScale),
                      (t.controlCoordinates.limitOffsetX =
                        (t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerWidth) /
                        2),
                      (t.controlCoordinates.limitOffsetY =
                        (t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerHeight) /
                        2),
                      (t.controlCoordinates.targetOffsetX =
                        t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerWidth
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.pointerOffsetX -
                                (t.controlCoordinates.initialPointerOffsetX -
                                  t.controlCoordinates.initialOffsetX),
                              -1 * t.controlCoordinates.limitOffsetX,
                              t.controlCoordinates.limitOffsetX
                            )),
                      (t.controlCoordinates.targetOffsetY =
                        t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerHeight
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.pointerOffsetY -
                                (t.controlCoordinates.initialPointerOffsetY -
                                  t.controlCoordinates.initialOffsetY),
                              -1 * t.controlCoordinates.limitOffsetY,
                              t.controlCoordinates.limitOffsetY
                            )),
                      Math.abs(t.controlCoordinates.targetOffsetX) ===
                        Math.abs(t.controlCoordinates.limitOffsetX) &&
                        ((t.controlCoordinates.initialOffsetX =
                          t.controlCoordinates.targetOffsetX),
                        (t.controlCoordinates.initialPointerOffsetX =
                          t.controlCoordinates.pointerOffsetX)),
                      Math.abs(t.controlCoordinates.targetOffsetY) ===
                        Math.abs(t.controlCoordinates.limitOffsetY) &&
                        ((t.controlCoordinates.initialOffsetY =
                          t.controlCoordinates.targetOffsetY),
                        (t.controlCoordinates.initialPointerOffsetY =
                          t.controlCoordinates.pointerOffsetY)),
                      t.setZoomData(
                        t.controlCoordinates.initialScale,
                        t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.targetOffsetY
                      ),
                      t.zoomPanElement(
                        t.controlCoordinates.targetOffsetX + "px",
                        t.controlCoordinates.targetOffsetY + "px",
                        t.controlCoordinates.targetScale
                      );
                  }
                  t.controlCoordinates.zoomed ||
                    ((t.controlCoordinates.swipeEnd =
                      e.pageX || e.touches[0].pageX),
                    (t.controlCoordinates.swipeYEnd =
                      e.pageY || e.touches[0].pageY),
                    (t.controlCoordinates.swipeDiff =
                      t.controlCoordinates.swipeStart -
                      t.controlCoordinates.swipeEnd),
                    (t.controlCoordinates.swipeYDiff =
                      t.controlCoordinates.swipeYStart -
                      t.controlCoordinates.swipeYEnd),
                    t.options.animationSlide &&
                      t.slide(0, -t.controlCoordinates.swipeDiff + "px"));
                }
              ),
              this.addEventListener(
                this.domNodes.image,
                [
                  "touchend." + this.eventNamespace,
                  "mouseup." + this.eventNamespace,
                  "touchcancel." + this.eventNamespace,
                  "mouseleave." + this.eventNamespace,
                  "pointerup",
                  "pointercancel",
                  "MSPointerUp",
                  "MSPointerCancel",
                ],
                function (e) {
                  if (
                    (t.isTouchDevice &&
                      "touchend" === e.type &&
                      ((t.controlCoordinates.touchCount = e.touches.length),
                      0 === t.controlCoordinates.touchCount
                        ? (t.currentImage &&
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              t.controlCoordinates.targetOffsetX,
                              t.controlCoordinates.targetOffsetY
                            ),
                          1 === t.controlCoordinates.initialScale &&
                            ((t.controlCoordinates.zoomed = !1),
                            "none" === t.domNodes.caption.style.display &&
                              t.fadeIn(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              )),
                          (t.controlCoordinates.initialPinchDistance = null),
                          (t.controlCoordinates.capture = !1))
                        : 1 === t.controlCoordinates.touchCount
                        ? ((t.controlCoordinates.initialPointerOffsetX =
                            e.touches[0].clientX),
                          (t.controlCoordinates.initialPointerOffsetY =
                            e.touches[0].clientY))
                        : t.controlCoordinates.touchCount > 1 &&
                          (t.controlCoordinates.initialPinchDistance = null)),
                    t.controlCoordinates.mousedown)
                  ) {
                    t.controlCoordinates.mousedown = !1;
                    var o = !0;
                    t.options.loop ||
                      (0 === t.currentImageIndex &&
                        t.controlCoordinates.swipeDiff < 0 &&
                        (o = !1),
                      t.currentImageIndex >= t.relatedElements.length - 1 &&
                        t.controlCoordinates.swipeDiff > 0 &&
                        (o = !1)),
                      Math.abs(t.controlCoordinates.swipeDiff) >
                        t.options.swipeTolerance && o
                        ? t.loadImage(
                            t.controlCoordinates.swipeDiff > 0 ? 1 : -1
                          )
                        : t.options.animationSlide &&
                          t.slide(t.options.animationSpeed / 1e3, "0px"),
                      t.options.swipeClose &&
                        Math.abs(t.controlCoordinates.swipeYDiff) > 50 &&
                        Math.abs(t.controlCoordinates.swipeDiff) <
                          t.options.swipeTolerance &&
                        t.close();
                  }
                }
              ),
              this.addEventListener(
                this.domNodes.image,
                ["dblclick"],
                function (e) {
                  if (!t.isTouchDevice)
                    return (
                      (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                      (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                      (t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      t.currentImage.classList.add("sl-transition"),
                      t.controlCoordinates.zoomed
                        ? ((t.controlCoordinates.initialScale = 1),
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            0,
                            0
                          ),
                          t.zoomPanElement(
                            "0px",
                            "0px",
                            t.controlCoordinates.initialScale
                          ),
                          (t.controlCoordinates.zoomed = !1),
                          "none" === t.domNodes.caption.style.display &&
                            t.fadeIn(t.domNodes.caption, t.options.fadeSpeed))
                        : ((t.controlCoordinates.initialScale =
                            t.options.doubleTapZoom),
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            0,
                            0
                          ),
                          t.zoomPanElement(
                            "0px",
                            "0px",
                            t.controlCoordinates.initialScale
                          ),
                          (!t.domNodes.caption.style.opacity ||
                            t.domNodes.caption.style.opacity > 0) &&
                            "none" !== t.domNodes.caption.style.display &&
                            t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                          (t.controlCoordinates.zoomed = !0)),
                      setTimeout(function () {
                        t.currentImage &&
                          (t.currentImage.classList.remove("sl-transition"),
                          (t.currentImage.style[
                            t.transitionPrefix + "transform-origin"
                          ] = null));
                      }, 200),
                      (t.controlCoordinates.capture = !0),
                      !1
                    );
                }
              );
          },
        },
        {
          key: "getDimensions",
          value: function (t) {
            var e = window.getComputedStyle(t),
              o = t.offsetHeight,
              n = t.offsetWidth,
              i = parseFloat(e.borderTopWidth);
            return {
              height:
                o -
                parseFloat(e.borderBottomWidth) -
                i -
                parseFloat(e.paddingTop) -
                parseFloat(e.paddingBottom),
              width:
                n -
                parseFloat(e.borderLeftWidth) -
                parseFloat(e.borderRightWidth) -
                parseFloat(e.paddingLeft) -
                parseFloat(e.paddingRight),
            };
          },
        },
        {
          key: "updateHash",
          value: function () {
            var t = "pid=" + (this.currentImageIndex + 1),
              e = window.location.href.split("#")[0] + "#" + t;
            (this.hashReseted = !1),
              this.pushStateSupport
                ? window.history[
                    this.historyHasChanges ? "replaceState" : "pushState"
                  ]("", document.title, e)
                : this.historyHasChanges
                ? window.location.replace(e)
                : (window.location.hash = t),
              this.historyHasChanges || (this.urlChangedOnce = !0),
              (this.historyHasChanges = !0);
          },
        },
        {
          key: "resetHash",
          value: function () {
            (this.hashReseted = !0),
              this.urlChangedOnce
                ? history.back()
                : this.pushStateSupport
                ? history.pushState(
                    "",
                    document.title,
                    window.location.pathname + window.location.search
                  )
                : (window.location.hash = ""),
              clearTimeout(this.historyUpdateTimeout);
          },
        },
        {
          key: "updateURL",
          value: function () {
            clearTimeout(this.historyUpdateTimeout),
              this.historyHasChanges
                ? (this.historyUpdateTimeout = setTimeout(
                    this.updateHash.bind(this),
                    800
                  ))
                : this.updateHash();
          },
        },
        {
          key: "setCaption",
          value: function (t, e) {
            var o = this;
            this.options.captions &&
              t &&
              "" !== t &&
              void 0 !== t &&
              (this.hide(this.domNodes.caption),
              (this.domNodes.caption.style.width = e + "px"),
              (this.domNodes.caption.innerHTML = t),
              this.domNodes.image.appendChild(this.domNodes.caption),
              setTimeout(function () {
                o.fadeIn(o.domNodes.caption, o.options.fadeSpeed);
              }, this.options.captionDelay));
          },
        },
        {
          key: "slide",
          value: function (t, e) {
            if (!this.transitionCapable)
              return (this.domNodes.image.style.left = e);
            (this.domNodes.image.style[this.transitionPrefix + "transform"] =
              "translateX(" + e + ")"),
              (this.domNodes.image.style[this.transitionPrefix + "transition"] =
                this.transitionPrefix + "transform " + t + "s linear");
          },
        },
        {
          key: "getRelated",
          value: function (t) {
            return t && !1 !== t && "nofollow" !== t
              ? Array.from(this.elements).filter(function (e) {
                  return e.getAttribute("rel") === t;
                })
              : this.elements;
          },
        },
        {
          key: "openImage",
          value: function (t) {
            var e = this;
            t.dispatchEvent(new Event("show." + this.eventNamespace)),
              (this.globalScrollbarWidth = this.getScrollbarWidth()),
              this.options.disableScroll &&
                (this.toggleScrollbar("hide"), (this.globalScrollbarWidth = 0)),
              this.options.htmlClass &&
                "" !== this.options.htmlClass &&
                document
                  .querySelector("html")
                  .classList.add(this.options.htmlClass),
              document.body.appendChild(this.domNodes.wrapper),
              this.domNodes.wrapper.appendChild(this.domNodes.image),
              this.options.overlay &&
                document.body.appendChild(this.domNodes.overlay),
              (this.relatedElements = this.getRelated(t.rel)),
              this.options.showCounter &&
                (1 == this.relatedElements.length &&
                this.domNodes.wrapper.contains(this.domNodes.counter)
                  ? this.domNodes.wrapper.removeChild(this.domNodes.counter)
                  : this.relatedElements.length > 1 &&
                    !this.domNodes.wrapper.contains(this.domNodes.counter) &&
                    this.domNodes.wrapper.appendChild(this.domNodes.counter)),
              this.options.download &&
                this.domNodes.wrapper.appendChild(this.domNodes.download),
              (this.isAnimating = !0),
              (this.currentImageIndex = this.relatedElements.indexOf(t));
            var o = t.getAttribute(this.options.sourceAttr);
            (this.currentImage = document.createElement("img")),
              (this.currentImage.style.display = "none"),
              this.currentImage.setAttribute("src", o),
              (this.currentImage.dataset.scale = 1),
              (this.currentImage.dataset.translateX = 0),
              (this.currentImage.dataset.translateY = 0),
              -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o),
              (this.domNodes.image.innerHTML = ""),
              this.domNodes.image.setAttribute("style", ""),
              this.domNodes.image.appendChild(this.currentImage),
              this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
              this.fadeIn(
                [
                  this.domNodes.counter,
                  this.domNodes.navigation,
                  this.domNodes.closeButton,
                  this.domNodes.download,
                ],
                this.options.fadeSpeed
              ),
              this.show(this.domNodes.spinner),
              (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                this.currentImageIndex + 1),
              (this.domNodes.counter.querySelector(".sl-total").innerHTML =
                this.relatedElements.length),
              this.adjustImage(),
              this.options.preloading && this.preload(),
              setTimeout(function () {
                t.dispatchEvent(new Event("shown." + e.eventNamespace));
              }, this.options.animationSpeed);
          },
        },
        {
          key: "forceFocus",
          value: function () {
            var t = this;
            this.removeEventListener(
              document,
              "focusin." + this.eventNamespace
            ),
              this.addEventListener(
                document,
                "focusin." + this.eventNamespace,
                function (e) {
                  document === e.target ||
                    t.domNodes.wrapper === e.target ||
                    t.domNodes.wrapper.contains(e.target) ||
                    t.domNodes.wrapper.focus();
                }
              );
          },
        },
        {
          key: "addEventListener",
          value: function (t, e, o, n) {
            (t = this.wrap(t)), (e = this.wrap(e));
            var i,
              r = po(t);
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var s = i.value;
                s.namespaces || (s.namespaces = {});
                var a,
                  l = po(e);
                try {
                  for (l.s(); !(a = l.n()).done; ) {
                    var c = a.value,
                      f = n || !1;
                    [
                      "touchstart",
                      "touchmove",
                      "mousewheel",
                      "DOMMouseScroll",
                    ].indexOf(c.split(".")[0]) >= 0 &&
                      this.isPassiveEventsSupported &&
                      ("object" === ho(f)
                        ? (f.passive = !0)
                        : (f = { passive: !0 })),
                      (s.namespaces[c] = o),
                      s.addEventListener(c.split(".")[0], o, f);
                  }
                } catch (t) {
                  l.e(t);
                } finally {
                  l.f();
                }
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
          },
        },
        {
          key: "removeEventListener",
          value: function (t, e) {
            (t = this.wrap(t)), (e = this.wrap(e));
            var o,
              n = po(t);
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var i,
                  r = o.value,
                  s = po(e);
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    var a = i.value;
                    r.namespaces &&
                      r.namespaces[a] &&
                      (r.removeEventListener(a.split(".")[0], r.namespaces[a]),
                      delete r.namespaces[a]);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
          },
        },
        {
          key: "fadeOut",
          value: function (t, e, o) {
            var n,
              i = this,
              r = po((t = this.wrap(t)));
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var s = n.value;
                s.style.opacity =
                  parseFloat(s) ||
                  window.getComputedStyle(s).getPropertyValue("opacity");
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
            this.isFadeIn = !1;
            var a = 16.66666 / (e || this.options.fadeSpeed);
            !(function e() {
              var n = parseFloat(t[0].style.opacity);
              if ((n -= a) < 0) {
                var r,
                  s = po(t);
                try {
                  for (s.s(); !(r = s.n()).done; ) {
                    var l = r.value;
                    (l.style.display = "none"), (l.style.opacity = 1);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
                o && o.call(i, t);
              } else {
                var c,
                  f = po(t);
                try {
                  for (f.s(); !(c = f.n()).done; ) c.value.style.opacity = n;
                } catch (t) {
                  f.e(t);
                } finally {
                  f.f();
                }
                requestAnimationFrame(e);
              }
            })();
          },
        },
        {
          key: "fadeIn",
          value: function (t, e, o, n) {
            var i,
              r = this,
              s = po((t = this.wrap(t)));
            try {
              for (s.s(); !(i = s.n()).done; ) {
                var a = i.value;
                a && ((a.style.opacity = 0), (a.style.display = n || "block"));
              }
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
            this.isFadeIn = !0;
            var l = parseFloat(t[0].dataset.opacityTarget || 1),
              c = (16.66666 * l) / (e || this.options.fadeSpeed);
            !(function e() {
              var n = parseFloat(t[0].style.opacity);
              if ((n += c) > l) {
                var i,
                  s = po(t);
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    var a = i.value;
                    a && (a.style.opacity = l);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
                o && o.call(r, t);
              } else {
                var f,
                  d = po(t);
                try {
                  for (d.s(); !(f = d.n()).done; ) {
                    var u = f.value;
                    u && (u.style.opacity = n);
                  }
                } catch (t) {
                  d.e(t);
                } finally {
                  d.f();
                }
                if (!r.isFadeIn) return;
                requestAnimationFrame(e);
              }
            })();
          },
        },
        {
          key: "hide",
          value: function (t) {
            var e,
              o = po((t = this.wrap(t)));
            try {
              for (o.s(); !(e = o.n()).done; ) {
                var n = e.value;
                "none" != n.style.display &&
                  (n.dataset.initialDisplay = n.style.display),
                  (n.style.display = "none");
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
          },
        },
        {
          key: "show",
          value: function (t, e) {
            var o,
              n = po((t = this.wrap(t)));
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var i = o.value;
                i.style.display = i.dataset.initialDisplay || e || "block";
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
          },
        },
        {
          key: "wrap",
          value: function (t) {
            return "function" == typeof t[Symbol.iterator] &&
              "string" != typeof t
              ? t
              : [t];
          },
        },
        {
          key: "on",
          value: function (t, e) {
            t = this.wrap(t);
            var o,
              n = po(this.elements);
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var i = o.value;
                i.fullyNamespacedEvents || (i.fullyNamespacedEvents = {});
                var r,
                  s = po(t);
                try {
                  for (s.s(); !(r = s.n()).done; ) {
                    var a = r.value;
                    (i.fullyNamespacedEvents[a] = e), i.addEventListener(a, e);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
            return this;
          },
        },
        {
          key: "off",
          value: function (t) {
            t = this.wrap(t);
            var e,
              o = po(this.elements);
            try {
              for (o.s(); !(e = o.n()).done; ) {
                var n,
                  i = e.value,
                  r = po(t);
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var s = n.value;
                    void 0 !== i.fullyNamespacedEvents &&
                      s in i.fullyNamespacedEvents &&
                      i.removeEventListener(s, i.fullyNamespacedEvents[s]);
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            return this;
          },
        },
        {
          key: "open",
          value: function (t) {
            (t = t || this.elements[0]),
              "undefined" != typeof jQuery &&
                t instanceof jQuery &&
                (t = t.get(0)),
              (this.initialImageIndex = this.elements.indexOf(t)),
              this.initialImageIndex > -1 && this.openImage(t);
          },
        },
        {
          key: "next",
          value: function () {
            this.loadImage(1);
          },
        },
        {
          key: "prev",
          value: function () {
            this.loadImage(-1);
          },
        },
        {
          key: "getLighboxData",
          value: function () {
            return {
              currentImageIndex: this.currentImageIndex,
              currentImage: this.currentImage,
              globalScrollbarWidth: this.globalScrollbarWidth,
            };
          },
        },
        {
          key: "destroy",
          value: function () {
            this.off([
              "close." + this.eventNamespace,
              "closed." + this.eventNamespace,
              "nextImageLoaded." + this.eventNamespace,
              "prevImageLoaded." + this.eventNamespace,
              "change." + this.eventNamespace,
              "nextDone." + this.eventNamespace,
              "prevDone." + this.eventNamespace,
              "error." + this.eventNamespace,
              "changed." + this.eventNamespace,
              "next." + this.eventNamespace,
              "prev." + this.eventNamespace,
              "show." + this.eventNamespace,
              "shown." + this.eventNamespace,
            ]),
              this.removeEventListener(
                this.elements,
                "click." + this.eventNamespace
              ),
              this.removeEventListener(
                document,
                "focusin." + this.eventNamespace
              ),
              this.removeEventListener(
                document.body,
                "contextmenu." + this.eventNamespace
              ),
              this.removeEventListener(
                document.body,
                "keyup." + this.eventNamespace
              ),
              this.removeEventListener(
                this.domNodes.navigation.getElementsByTagName("button"),
                "click." + this.eventNamespace
              ),
              this.removeEventListener(
                this.domNodes.closeButton,
                "click." + this.eventNamespace
              ),
              this.removeEventListener(window, "resize." + this.eventNamespace),
              this.removeEventListener(
                window,
                "hashchange." + this.eventNamespace
              ),
              this.close(),
              this.isOpen &&
                (document.body.removeChild(this.domNodes.wrapper),
                document.body.removeChild(this.domNodes.overlay)),
              (this.elements = null);
          },
        },
        {
          key: "refresh",
          value: function () {
            if (!this.initialSelector)
              throw "refreshing only works when you initialize using a selector!";
            var t = this.options,
              e = this.initialSelector;
            return this.destroy(), this.constructor(e, t), this;
          },
        },
      ]),
      o && vo(e.prototype, o),
      n && vo(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t
    );
  })(),
  Co = bo;
(uo.default = Co), (t.SimpleLightbox = bo);
let xo = new (e(uo))(".photo-card a", {
  captions: !0,
  captionsData: "alt",
  captionDelay: 250,
});
var No,
  Eo,
  Oo = {};
(No = void 0 !== t ? t : "undefined" != typeof window ? window : Oo),
  (Eo = function (t) {
    if (void 0 === t && void 0 === t.document) return !1;
    var e,
      o = "Success",
      n = "Failure",
      i = "Warning",
      r = "Info",
      s = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
          background: "#32c682",
          textColor: "#fff",
          childClassName: "notiflix-notify-success",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-check-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(50,198,130,0.2)",
        },
        failure: {
          background: "#ff5549",
          textColor: "#fff",
          childClassName: "notiflix-notify-failure",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-times-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(255,85,73,0.2)",
        },
        warning: {
          background: "#eebf31",
          textColor: "#fff",
          childClassName: "notiflix-notify-warning",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-exclamation-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(238,191,49,0.2)",
        },
        info: {
          background: "#26c0d3",
          textColor: "#fff",
          childClassName: "notiflix-notify-info",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-info-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(38,192,211,0.2)",
        },
      },
      a = function (t) {
        return console.error(
          "%c Notiflix Error ",
          "padding:2px;border-radius:20px;color:#fff;background:#ff5549",
          "\n" +
            t +
            "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation"
        );
      },
      l = function (e) {
        return (
          e || (e = "head"),
          null !== t.document[e] ||
            (a(
              '\nNotiflix needs to be appended to the "<' +
                e +
                '>" element, but you called it before the "<' +
                e +
                '>" element has been created.'
            ),
            !1)
        );
      },
      c = function () {
        var t = {},
          e = !1,
          o = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
          ((e = arguments[0]), o++);
        for (
          var n = function (o) {
            for (var n in o)
              Object.prototype.hasOwnProperty.call(o, n) &&
                (e && "[object Object]" === Object.prototype.toString.call(o[n])
                  ? (t[n] = c(t[n], o[n]))
                  : (t[n] = o[n]));
          };
          o < arguments.length;
          o++
        )
          n(arguments[o]);
        return t;
      },
      f = function () {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
      },
      d = 0,
      u = function (a, f, u, p) {
        if (!l("body")) return !1;
        e || h.Notify.init({});
        var m = c(!0, e, {});
        if (
          ("object" == typeof u && !Array.isArray(u)) ||
          ("object" == typeof p && !Array.isArray(p))
        ) {
          var g = {};
          "object" == typeof u ? (g = u) : "object" == typeof p && (g = p),
            (e = c(!0, e, g));
        }
        var y,
          v,
          w = e[a.toLocaleLowerCase("en")];
        d++,
          "string" != typeof f && (f = "Notiflix " + a),
          e.plainText &&
            ((y = f),
            ((v = t.document.createElement("div")).innerHTML = y),
            (f = v.textContent || v.innerText || "")),
          !e.plainText &&
            f.length > e.messageMaxLength &&
            ((e = c(!0, e, { closeButton: !0, messageMaxLength: 150 })),
            (f =
              'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.')),
          f.length > e.messageMaxLength &&
            (f = f.substring(0, e.messageMaxLength) + "..."),
          "shadow" === e.fontAwesomeIconStyle &&
            (w.fontAwesomeIconColor = w.background),
          e.cssAnimation || (e.cssAnimationDuration = 0);
        var b =
          t.document.getElementById(s.wrapID) ||
          t.document.createElement("div");
        if (
          ((b.id = s.wrapID),
          (b.style.width = e.width),
          (b.style.zIndex = e.zindex),
          (b.style.opacity = e.opacity),
          "center-center" === e.position
            ? ((b.style.left = e.distance),
              (b.style.top = e.distance),
              (b.style.right = e.distance),
              (b.style.bottom = e.distance),
              (b.style.margin = "auto"),
              b.classList.add("nx-flex-center-center"),
              (b.style.maxHeight =
                "calc((100vh - " + e.distance + ") - " + e.distance + ")"),
              (b.style.display = "flex"),
              (b.style.flexWrap = "wrap"),
              (b.style.flexDirection = "column"),
              (b.style.justifyContent = "center"),
              (b.style.alignItems = "center"),
              (b.style.pointerEvents = "none"))
            : "center-top" === e.position
            ? ((b.style.left = e.distance),
              (b.style.right = e.distance),
              (b.style.top = e.distance),
              (b.style.bottom = "auto"),
              (b.style.margin = "auto"))
            : "center-bottom" === e.position
            ? ((b.style.left = e.distance),
              (b.style.right = e.distance),
              (b.style.bottom = e.distance),
              (b.style.top = "auto"),
              (b.style.margin = "auto"))
            : "right-bottom" === e.position
            ? ((b.style.right = e.distance),
              (b.style.bottom = e.distance),
              (b.style.top = "auto"),
              (b.style.left = "auto"))
            : "left-top" === e.position
            ? ((b.style.left = e.distance),
              (b.style.top = e.distance),
              (b.style.right = "auto"),
              (b.style.bottom = "auto"))
            : "left-bottom" === e.position
            ? ((b.style.left = e.distance),
              (b.style.bottom = e.distance),
              (b.style.top = "auto"),
              (b.style.right = "auto"))
            : ((b.style.right = e.distance),
              (b.style.top = e.distance),
              (b.style.left = "auto"),
              (b.style.bottom = "auto")),
          e.backOverlay)
        ) {
          var C =
            t.document.getElementById(s.overlayID) ||
            t.document.createElement("div");
          (C.id = s.overlayID),
            (C.style.width = "100%"),
            (C.style.height = "100%"),
            (C.style.position = "fixed"),
            (C.style.zIndex = e.zindex - 1),
            (C.style.left = 0),
            (C.style.top = 0),
            (C.style.right = 0),
            (C.style.bottom = 0),
            (C.style.background = w.backOverlayColor || e.backOverlayColor),
            (C.className = e.cssAnimation ? "nx-with-animation" : ""),
            (C.style.animationDuration = e.cssAnimation
              ? e.cssAnimationDuration + "ms"
              : ""),
            t.document.getElementById(s.overlayID) ||
              t.document.body.appendChild(C);
        }
        t.document.getElementById(s.wrapID) || t.document.body.appendChild(b);
        var x = t.document.createElement("div");
        (x.id = e.ID + "-" + d),
          (x.className =
            e.className +
            " " +
            w.childClassName +
            " " +
            (e.cssAnimation ? "nx-with-animation" : "") +
            " " +
            (e.useIcon ? "nx-with-icon" : "") +
            " nx-" +
            e.cssAnimationStyle +
            " " +
            (e.closeButton && "function" != typeof u
              ? "nx-with-close-button"
              : "") +
            " " +
            ("function" == typeof u ? "nx-with-callback" : "") +
            " " +
            (e.clickToClose ? "nx-notify-click-to-close" : "")),
          (x.style.fontSize = e.fontSize),
          (x.style.color = w.textColor),
          (x.style.background = w.background),
          (x.style.borderRadius = e.borderRadius),
          (x.style.pointerEvents = "all"),
          e.rtl && (x.setAttribute("dir", "rtl"), x.classList.add("nx-rtl-on")),
          (x.style.fontFamily =
            '"' +
            e.fontFamily +
            '", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'),
          e.cssAnimation &&
            (x.style.animationDuration = e.cssAnimationDuration + "ms");
        var N = "";
        if (
          (e.closeButton &&
            "function" != typeof u &&
            (N =
              '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' +
              w.notiflixIconColor +
              '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),
          e.useIcon)
        )
          if (e.useFontAwesome)
            x.innerHTML =
              '<i style="color:' +
              w.fontAwesomeIconColor +
              "; font-size:" +
              e.fontAwesomeIconSize +
              ';" class="nx-message-icon nx-message-icon-fa ' +
              w.fontAwesomeClassName +
              " " +
              ("shadow" === e.fontAwesomeIconStyle
                ? "nx-message-icon-fa-shadow"
                : "nx-message-icon-fa-basic") +
              '"></i><span class="nx-message nx-with-icon">' +
              f +
              "</span>" +
              (e.closeButton ? N : "");
          else {
            var E = "";
            a === o
              ? (E =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  w.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>')
              : a === n
              ? (E =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  w.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>')
              : a === i
              ? (E =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  w.notiflixIconColor +
                  '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>')
              : a === r &&
                (E =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  w.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),
              (x.innerHTML =
                E +
                '<span class="nx-message nx-with-icon">' +
                f +
                "</span>" +
                (e.closeButton ? N : ""));
          }
        else
          x.innerHTML =
            '<span class="nx-message">' +
            f +
            "</span>" +
            (e.closeButton ? N : "");
        if ("left-bottom" === e.position || "right-bottom" === e.position) {
          var O = t.document.getElementById(s.wrapID);
          O.insertBefore(x, O.firstChild);
        } else t.document.getElementById(s.wrapID).appendChild(x);
        var S = t.document.getElementById(x.id);
        if (S) {
          var I,
            A,
            k = function () {
              S.classList.add("nx-remove");
              var e = t.document.getElementById(s.overlayID);
              e && b.childElementCount <= 0 && e.classList.add("nx-remove"),
                clearTimeout(I);
            },
            T = function () {
              if (
                (S && null !== S.parentNode && S.parentNode.removeChild(S),
                b.childElementCount <= 0 && null !== b.parentNode)
              ) {
                b.parentNode.removeChild(b);
                var e = t.document.getElementById(s.overlayID);
                e && null !== e.parentNode && e.parentNode.removeChild(e);
              }
              clearTimeout(A);
            };
          if (
            (e.closeButton &&
              "function" != typeof u &&
              t.document
                .getElementById(x.id)
                .querySelector("span.nx-close-button")
                .addEventListener("click", function () {
                  k();
                  var t = setTimeout(function () {
                    T(), clearTimeout(t);
                  }, e.cssAnimationDuration);
                }),
            ("function" == typeof u || e.clickToClose) &&
              S.addEventListener("click", function () {
                "function" == typeof u && u(), k();
                var t = setTimeout(function () {
                  T(), clearTimeout(t);
                }, e.cssAnimationDuration);
              }),
            !e.closeButton && "function" != typeof u)
          ) {
            var L = function () {
              (I = setTimeout(function () {
                k();
              }, e.timeout)),
                (A = setTimeout(function () {
                  T();
                }, e.timeout + e.cssAnimationDuration));
            };
            L(),
              e.pauseOnHover &&
                (S.addEventListener("mouseenter", function () {
                  S.classList.add("nx-paused"),
                    clearTimeout(I),
                    clearTimeout(A);
                }),
                S.addEventListener("mouseleave", function () {
                  S.classList.remove("nx-paused"), L();
                }));
          }
        }
        if (e.showOnlyTheLastOne && d > 0)
          for (
            var R = t.document.querySelectorAll(
                "[id^=" + e.ID + "-]:not([id=" + e.ID + "-" + d + "])"
              ),
              B = 0;
            B < R.length;
            B++
          ) {
            var P = R[B];
            null !== P.parentNode && P.parentNode.removeChild(P);
          }
        e = c(!0, e, m);
      },
      h = {
        Notify: {
          init: function (o) {
            (e = c(!0, s, o)),
              (function (e, o) {
                if (!l("head")) return !1;
                if (null !== e() && !t.document.getElementById(o)) {
                  var n = t.document.createElement("style");
                  (n.id = o),
                    (n.innerHTML = e()),
                    t.document.head.appendChild(n);
                }
              })(f, "NotiflixNotifyInternalCSS");
          },
          merge: function (t) {
            if (!e)
              return (
                a(
                  "You have to initialize the Notify module before call Merge function."
                ),
                !1
              );
            e = c(!0, e, t);
          },
          success: function (t, e, n) {
            u(o, t, e, n);
          },
          failure: function (t, e, o) {
            u(n, t, e, o);
          },
          warning: function (t, e, o) {
            u(i, t, e, o);
          },
          info: function (t, e, o) {
            u(r, t, e, o);
          },
        },
      };
    return "object" == typeof t.Notiflix
      ? c(!0, t.Notiflix, { Notify: h.Notify })
      : { Notify: h.Notify };
  }),
  "function" == typeof define && define.amd
    ? define([], function () {
        return Eo(No);
      })
    : "object" == typeof Oo
    ? (Oo = Eo(No))
    : (No.Notiflix = Eo(No));
const So = {
  searchForm: document.querySelector(".search-form"),
  galleryContainer: document.querySelector(".gallery"),
  loadMoreBtn: document.querySelector(".load-more"),
};
let Io = 0;
const Ao = new (class {
  async fetchGallery() {
    const t = {
      method: "get",
      url: "https://pixabay.com/api/",
      params: {
        key: "34523545-f21683fd59bfc3e4e2549fe07",
        q: `${this.searchQuery}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: !0,
        page: `${this.page}`,
        per_page: `${this.PER_PAGE}`,
      },
    };
    try {
      const e = (await Je(t)).data;
      return this.incrementPage(), e;
    } catch (t) {
      console.error(t);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  resetEndOfHits() {
    this.endOfHits = !1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(t) {
    this.searchQuery = t;
  }
  constructor() {
    (this.searchQuery = ""), (this.page = 1), (this.PER_PAGE = 40);
  }
})();
So.searchForm.addEventListener("submit", function (t) {
  if (
    (t.preventDefault(),
    (So.galleryContainer.innerHTML = ""),
    (Ao.query = t.currentTarget.elements.searchQuery.value.trim()),
    Ao.resetPage(),
    "" === Ao.query)
  )
    return void Oo.Notify.warning("Please, fill the main field");
  (Io = 0), To(), Lo(hits);
}),
  So.loadMoreBtn.addEventListener("click", ko);
new IntersectionObserver(ko, {
  rootMargin: "50px",
  root: null,
  threshold: 0.3,
});
function ko() {
  Ao.incrementPage(), To();
}
async function To() {
  So.loadMoreBtn.classList.add("is-hidden");
  const t = await Ao.fetchGallery(),
    { hits: e, total: o } = t;
  if (((Io += e.length), !e.length))
    return (
      Oo.Notify.failure(
        "Sorry, there are no images matching your search query. Please try again."
      ),
      void So.loadMoreBtn.classList.add("is-hidden")
    );
  Lo(e),
    (Io += e.length),
    Io < o &&
      (Oo.Notify.success(`Hooray! We found ${o} images !!!`),
      So.loadMoreBtn.classList.remove("is-hidden")),
    Io >= o &&
      Oo.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
}
function Lo(t) {
  const e = t
    .map(
      ({
        webformatURL: t,
        largeImageURL: e,
        tags: o,
        likes: n,
        views: i,
        comments: r,
        downloads: s,
      }) =>
        `<div class="photo-card">\n    <a href="${e}">\n      <img class="photo-img" src="${t}" alt="${o}" loading="lazy" />\n    </a>\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b>\n        ${n}\n      </p>\n      <p class="info-item">\n        <b>Views</b>\n        ${i}\n      </p>\n      <p class="info-item">\n        <b>Comments</b>\n        ${r}\n      </p>\n      <p class="info-item">\n        <b>Downloads</b>\n        ${s}\n      </p>\n    </div>\n    </div>`
    )
    .join("");
  So.galleryContainer.insertAdjacentHTML("beforeend", e), xo.refresh();
}
//# sourceMappingURL=index.415688b9.js.map
