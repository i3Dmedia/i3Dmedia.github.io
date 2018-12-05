if (typeof Magi == "undefined") {
    Magi = {}
}
if (!Magi.Stats) {
    Magi.Stats = {
        vec2CreateCount: 0,
        vec3CreateCount: 0,
        vec4CreateCount: 0,
        mat3CreateCount: 0,
        mat4CreateCount: 0,
        quat4CreateCount: 0
    }
}
if (typeof Float32Array != "undefined") {
    glMatrixArrayType = Float32Array
} else {
    glMatrixArrayType = Array
}
var vec3 = {};
vec3.create = function (b, d, c) {
    var a = new glMatrixArrayType(3);
    Magi.Stats.vec3CreateCount++;
    if (d != null) {
        a[0] = b;
        a[1] = d;
        a[2] = c
    } else {
        if (b) {
            a[0] = b[0];
            a[1] = b[1];
            a[2] = b[2]
        }
    }
    return a
};
vec4 = {};
vec4.create = function (c, e, d, a) {
    var b = new glMatrixArrayType(4);
    Magi.Stats.vec4CreateCount++;
    if (e != null) {
        b[0] = c;
        b[1] = e;
        b[2] = d;
        b[3] = a
    } else {
        if (c) {
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3]
        }
    }
    return b
};
vec4.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    return a
};
vec4.setLeft = function (a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    return a
};
vec2 = {};
vec2.create = function (b, c) {
    var a = new glMatrixArrayType(2);
    Magi.Stats.vec2CreateCount++;
    if (c != null) {
        a[0] = b;
        a[1] = c
    } else {
        if (b) {
            a[0] = b[0];
            a[1] = b[1]
        }
    }
    return a
};
vec2.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    return a
};
vec2.setLeft = function (a, b) {
    a[0] = b[0];
    a[1] = b[1];
    return a
};
vec3.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a
};
vec3.setLeft = function (a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a
};
vec3.set3 = function (b, a) {
    a[0] = a[1] = a[2] = b;
    return a
};
vec3.add = function (b, c, a) {
    if (!a || b == a) {
        b[0] += c[0];
        b[1] += c[1];
        b[2] += c[2];
        return b
    }
    a[0] = b[0] + c[0];
    a[1] = b[1] + c[1];
    a[2] = b[2] + c[2];
    return a
};
vec3.subtract = function (b, c, a) {
    if (!a || b == a) {
        b[0] -= c[0];
        b[1] -= c[1];
        b[2] -= c[2];
        return b
    }
    a[0] = b[0] - c[0];
    a[1] = b[1] - c[1];
    a[2] = b[2] - c[2];
    return a
};
vec3.sub = vec3.subtract;
vec3.negate = function (b, a) {
    if (!a) {
        a = b
    }
    a[0] = -b[0];
    a[1] = -b[1];
    a[2] = -b[2];
    return a
};
vec3.scale = function (b, c, a) {
    if (!a || b == a) {
        b[0] *= c;
        b[1] *= c;
        b[2] *= c;
        return b
    }
    a[0] = b[0] * c;
    a[1] = b[1] * c;
    a[2] = b[2] * c;
    return a
};
vec3.multiply = function (b, c, a) {
    if (!a || b == a) {
        b[0] *= c[0];
        b[1] *= c[1];
        b[2] *= c[2];
        return b
    }
    a[0] = b[0] * c[0];
    a[1] = b[1] * c[1];
    a[2] = b[2] * c[2];
    return a
};
vec3.mul = vec3.multiply;
vec3.normalize = function (d, c) {
    if (!c) {
        c = d
    }
    var b = d[0],
        f = d[1],
        e = d[2];
    var a = Math.sqrt(b * b + f * f + e * e);
    if (!a) {
        c[0] = 0;
        c[1] = 0;
        c[2] = 0;
        return c
    } else {
        if (a == 1) {
            c[0] = b;
            c[1] = f;
            c[2] = e;
            return c
        }
    }
    a = 1 / a;
    c[0] = b * a;
    c[1] = f * a;
    c[2] = e * a;
    return c
};
vec3.cross = function (b, d, i) {
    if (!i) {
        i = b
    }
    var h = b[0],
        g = b[1],
        e = b[2];
    var a = d[0],
        f = d[1],
        c = d[2];
    i[0] = g * c - e * f;
    i[1] = e * a - h * c;
    i[2] = h * f - g * a;
    return i
};
vec3.length = function (b) {
    var a = b[0],
        d = b[1],
        c = b[2];
    return Math.sqrt(a * a + d * d + c * c)
};
vec3.lengthSquare = function (b) {
    var a = b[0],
        d = b[1],
        c = b[2];
    return a * a + d * d + c * c
};
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
vec3.direction = function (d, e, c) {
    if (!c) {
        c = d
    }
    var b = d[0] - e[0];
    var g = d[1] - e[1];
    var f = d[2] - e[2];
    var a = Math.sqrt(b * b + g * g + f * f);
    if (!a) {
        c[0] = 0;
        c[1] = 0;
        c[2] = 0;
        return c
    }
    a = 1 / a;
    c[0] = b * a;
    c[1] = g * a;
    c[2] = f * a;
    return c
};
vec3.distance = function (c, d) {
    var b = c[0] - d[0];
    var f = c[1] - d[1];
    var e = c[2] - d[2];
    var a = Math.sqrt(b * b + f * f + e * e);
    return a
};
vec3.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};
var mat3 = {};
mat3.create = function (b) {
    var a = new glMatrixArrayType(9);
    Magi.Stats.mat3CreateCount++;
    if (b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9]
    }
    return a
};
mat3.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    return a
};
mat3.identity = function (a) {
    if (a == null) {
        a = mat3.create()
    }
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;
    return a
};
mat3.toMat4 = function (b, a) {
    if (!a) {
        a = mat4.create()
    }
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = 0;
    a[4] = b[3];
    a[5] = b[4];
    a[6] = b[5];
    a[7] = 0;
    a[8] = b[6];
    a[9] = b[7];
    a[10] = b[8];
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
mat3.transpose = function (d, c) {
    if (!c || d == c) {
        var b = d[1],
            a = d[2],
            e = d[5];
        d[1] = d[3];
        d[2] = d[6];
        d[5] = d[7];
        d[3] = b;
        d[6] = a;
        d[7] = e;
        return d
    }
    c[0] = d[0];
    c[1] = d[3];
    c[2] = d[6];
    c[3] = d[1];
    c[4] = d[4];
    c[5] = d[7];
    c[6] = d[2];
    c[7] = d[5];
    c[8] = d[8];
    return c
};
mat3.multiplyVec3 = function (d, c, b) {
    if (!b) {
        b = c
    }
    var a = c[0],
        f = c[1],
        e = c[2];
    b[0] = d[0] * a + d[3] * f + d[6] * e;
    b[1] = d[1] * a + d[4] * f + d[7] * e;
    b[2] = d[2] * a + d[5] * f + d[8] * e;
    return b
};
mat3.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
var mat4 = {};
mat4.create = function (b) {
    var a = new glMatrixArrayType(16);
    Magi.Stats.mat4CreateCount++;
    if (b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9];
        a[10] = b[10];
        a[11] = b[11];
        a[12] = b[12];
        a[13] = b[13];
        a[14] = b[14];
        a[15] = b[15]
    }
    return a
};
mat4.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15];
    return a
};
mat4.identity = function (a) {
    if (a == null) {
        a = mat4.create()
    }
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
mat4.transpose = function (d, c) {
    if (!c || d == c) {
        var h = d[1],
            f = d[2],
            e = d[3];
        var a = d[6],
            g = d[7];
        var b = d[11];
        d[1] = d[4];
        d[2] = d[8];
        d[3] = d[12];
        d[4] = h;
        d[6] = d[9];
        d[7] = d[13];
        d[8] = f;
        d[9] = a;
        d[11] = d[14];
        d[12] = e;
        d[13] = g;
        d[14] = b;
        return d
    }
    c[0] = d[0];
    c[1] = d[4];
    c[2] = d[8];
    c[3] = d[12];
    c[4] = d[1];
    c[5] = d[5];
    c[6] = d[9];
    c[7] = d[13];
    c[8] = d[2];
    c[9] = d[6];
    c[10] = d[10];
    c[11] = d[14];
    c[12] = d[3];
    c[13] = d[7];
    c[14] = d[11];
    c[15] = d[15];
    return c
};
mat4.determinant = function (p) {
    var h = p[0],
        g = p[1],
        e = p[2],
        c = p[3];
    var q = p[4],
        o = p[5],
        n = p[6],
        m = p[7];
    var l = p[8],
        k = p[9],
        j = p[10],
        i = p[11];
    var f = p[12],
        d = p[13],
        b = p[14],
        a = p[15];
    return f * k * n * c - l * d * n * c - f * o * j * c + q * d * j * c + l * o * b * c - q * k * b * c - f * k * e * m + l * d * e * m + f * g * j * m - h * d * j * m - l * g * b * m + h * k * b * m + f * o * e * i - q * d * e * i - f * g * n * i + h * d * n * i + q * g * b * i - h * o * b * i - l * o * e * a + q * k * e * a + l * g * n * a - h * k * n * a - q * g * j * a + h * o * j * a
};
mat4.inverse = function (v, k) {
    if (!k) {
        k = v
    }
    var D = v[0],
        B = v[1],
        z = v[2],
        x = v[3];
    var d = v[4],
        c = v[5],
        b = v[6],
        a = v[7];
    var s = v[8],
        r = v[9],
        q = v[10],
        p = v[11];
    var F = v[12],
        C = v[13],
        A = v[14],
        y = v[15];
    var o = D * c - B * d;
    var n = D * b - z * d;
    var m = D * a - x * d;
    var l = B * b - z * c;
    var j = B * a - x * c;
    var i = z * a - x * b;
    var h = s * C - r * F;
    var g = s * A - q * F;
    var f = s * y - p * F;
    var e = r * A - q * C;
    var w = r * y - p * C;
    var u = q * y - p * A;
    var t = 1 / (o * u - n * w + m * e + l * f - j * g + i * h);
    k[0] = (c * u - b * w + a * e) * t;
    k[1] = (-B * u + z * w - x * e) * t;
    k[2] = (C * i - A * j + y * l) * t;
    k[3] = (-r * i + q * j - p * l) * t;
    k[4] = (-d * u + b * f - a * g) * t;
    k[5] = (D * u - z * f + x * g) * t;
    k[6] = (-F * i + A * m - y * n) * t;
    k[7] = (s * i - q * m + p * n) * t;
    k[8] = (d * w - c * f + a * h) * t;
    k[9] = (-D * w + B * f - x * h) * t;
    k[10] = (F * j - C * m + y * o) * t;
    k[11] = (-s * j + r * m - p * o) * t;
    k[12] = (-d * e + c * g - b * h) * t;
    k[13] = (D * e - B * g + z * h) * t;
    k[14] = (-F * l + C * n - A * o) * t;
    k[15] = (s * l - r * n + q * o) * t;
    return k
};
mat4.toRotationMat = function (b, a) {
    if (!a) {
        a = mat4.create()
    }
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
mat4.toMat3 = function (b, a) {
    if (!a) {
        a = mat3.create()
    }
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[4];
    a[4] = b[5];
    a[5] = b[6];
    a[6] = b[8];
    a[7] = b[9];
    a[8] = b[10];
    return a
};
mat4.toInverseMat3 = function (p, m) {
    var f = p[0],
        e = p[1],
        c = p[2];
    var q = p[4],
        o = p[5],
        n = p[6];
    var j = p[8],
        i = p[9],
        h = p[10];
    var g = h * o - n * i;
    var b = -h * q + n * j;
    var l = i * q - o * j;
    var k = f * g + e * b + c * l;
    if (!k) {
        return null
    }
    var a = 1 / k;
    if (!m) {
        m = mat3.create()
    }
    m[0] = g * a;
    m[1] = (-h * e + c * i) * a;
    m[2] = (n * e - c * o) * a;
    m[3] = b * a;
    m[4] = (h * f - c * j) * a;
    m[5] = (-n * f + c * q) * a;
    m[6] = l * a;
    m[7] = (-i * f + e * j) * a;
    m[8] = (o * f - e * q) * a;
    return m
};
mat4.multiply = function (z, h, j) {
    if (!j) {
        j = z
    }
    var I = z[0],
        G = z[1],
        D = z[2],
        B = z[3];
    var i = z[4],
        g = z[5],
        f = z[6],
        e = z[7];
    var v = z[8],
        u = z[9],
        t = z[10],
        s = z[11];
    var J = z[12],
        H = z[13],
        F = z[14],
        C = z[15];
    var q = h[0],
        o = h[1],
        m = h[2],
        k = h[3];
    var A = h[4],
        y = h[5],
        x = h[6],
        w = h[7];
    var d = h[8],
        c = h[9],
        b = h[10],
        a = h[11];
    var r = h[12],
        p = h[13],
        n = h[14],
        l = h[15];
    j[0] = q * I + o * i + m * v + k * J;
    j[1] = q * G + o * g + m * u + k * H;
    j[2] = q * D + o * f + m * t + k * F;
    j[3] = q * B + o * e + m * s + k * C;
    j[4] = A * I + y * i + x * v + w * J;
    j[5] = A * G + y * g + x * u + w * H;
    j[6] = A * D + y * f + x * t + w * F;
    j[7] = A * B + y * e + x * s + w * C;
    j[8] = d * I + c * i + b * v + a * J;
    j[9] = d * G + c * g + b * u + a * H;
    j[10] = d * D + c * f + b * t + a * F;
    j[11] = d * B + c * e + b * s + a * C;
    j[12] = r * I + p * i + n * v + l * J;
    j[13] = r * G + p * g + n * u + l * H;
    j[14] = r * D + p * f + n * t + l * F;
    j[15] = r * B + p * e + n * s + l * C;
    return j
};
mat4.multiplyVec3 = function (d, c, b) {
    if (!b) {
        b = c
    }
    var a = c[0],
        f = c[1],
        e = c[2];
    b[0] = d[0] * a + d[4] * f + d[8] * e + d[12];
    b[1] = d[1] * a + d[5] * f + d[9] * e + d[13];
    b[2] = d[2] * a + d[6] * f + d[10] * e + d[14];
    return b
};
mat4.multiplyVec4 = function (e, d, c) {
    if (!c) {
        c = d
    }
    var a = d[0],
        g = d[1],
        f = d[2],
        b = d[3];
    c[0] = e[0] * a + e[4] * g + e[8] * f + e[12] * b;
    c[1] = e[1] * a + e[5] * g + e[9] * f + e[13] * b;
    c[2] = e[2] * a + e[6] * g + e[10] * f + e[14] * b;
    c[3] = e[3] * a + e[7] * g + e[11] * f + e[15] * b;
    return c
};
mat4.translate = function (n, i, h) {
    var g = i[0],
        f = i[1],
        e = i[2];
    if (!h || n == h) {
        n[12] = n[0] * g + n[4] * f + n[8] * e + n[12];
        n[13] = n[1] * g + n[5] * f + n[9] * e + n[13];
        n[14] = n[2] * g + n[6] * f + n[10] * e + n[14];
        n[15] = n[3] * g + n[7] * f + n[11] * e + n[15];
        return n
    }
    var r = n[0],
        q = n[1],
        p = n[2],
        o = n[3];
    var d = n[4],
        c = n[5],
        b = n[6],
        a = n[7];
    var m = n[8],
        l = n[9],
        k = n[10],
        j = n[11];
    h[0] = r;
    h[1] = q;
    h[2] = p;
    h[3] = o;
    h[4] = d;
    h[5] = c;
    h[6] = b;
    h[7] = a;
    h[8] = m;
    h[9] = l;
    h[10] = k;
    h[11] = j;
    h[12] = r * g + d * f + m * e + n[12];
    h[13] = q * g + c * f + l * e + n[13];
    h[14] = p * g + b * f + k * e + n[14];
    h[15] = o * g + a * f + j * e + n[15];
    return h
};
mat4.scale = function (d, c, b) {
    var a = c[0],
        f = c[1],
        e = c[2];
    if (!b || d === b) {
        d[0] *= a;
        d[1] *= a;
        d[2] *= a;
        d[3] *= a;
        d[4] *= f;
        d[5] *= f;
        d[6] *= f;
        d[7] *= f;
        d[8] *= e;
        d[9] *= e;
        d[10] *= e;
        d[11] *= e;
        return d
    }
    b[0] = d[0] * a;
    b[1] = d[1] * a;
    b[2] = d[2] * a;
    b[3] = d[3] * a;
    b[4] = d[4] * f;
    b[5] = d[5] * f;
    b[6] = d[6] * f;
    b[7] = d[7] * f;
    b[8] = d[8] * e;
    b[9] = d[9] * e;
    b[10] = d[10] * e;
    b[11] = d[11] * e;
    b[12] = d[12];
    b[13] = d[13];
    b[14] = d[14];
    b[15] = d[15];
    return b
};
mat4.billboard = function (g, f) {
    var e = g[0],
        d = g[5],
        i = g[10];
    e = e * e;
    d = d * d;
    i = i * i;
    var h = e > d ? e : d;
    h = h > i ? h : i;
    h = Math.sqrt(h);
    if (!f || g === f) {
        g[0] = h;
        g[1] = 0;
        g[2] = 0;
        g[4] = 0;
        g[5] = h;
        g[6] = 0;
        g[8] = 0;
        g[9] = 0;
        g[10] = h;
        return g
    }
    f[0] = h;
    f[1] = 0;
    f[2] = 0;
    f[3] = g[3];
    f[4] = 0;
    f[5] = h;
    f[6] = 0;
    f[7] = g[7];
    f[8] = 0;
    f[9] = 0;
    f[10] = h;
    f[11] = g[11];
    f[12] = g[12];
    f[13] = g[13];
    f[14] = g[14];
    f[15] = g[15];
    return f
};
mat4.rotate = function (G, D, a, m) {
    var l = a[0],
        k = a[1],
        j = a[2];
    var B = Math.sqrt(l * l + k * k + j * j);
    if (!B) {
        return null
    }
    if (B != 1) {
        B = 1 / B;
        l *= B;
        k *= B;
        j *= B
    }
    var r = Math.sin(D);
    var I = Math.cos(D);
    var q = 1 - I;
    var M = G[0],
        L = G[1],
        K = G[2],
        J = G[3];
    var i = G[4],
        h = G[5],
        g = G[6],
        f = G[7];
    var A = G[8],
        w = G[9],
        v = G[10],
        u = G[11];
    var p = l * l * q + I,
        o = k * l * q + j * r,
        n = j * l * q - k * r;
    var H = l * k * q - j * r,
        F = k * k * q + I,
        C = j * k * q + l * r;
    var e = l * j * q + k * r,
        d = k * j * q - l * r,
        b = j * j * q + I;
    if (!m) {
        m = G
    } else {
        if (G != m) {
            m[12] = G[12];
            m[13] = G[13];
            m[14] = G[14];
            m[15] = G[15]
        }
    }
    m[0] = M * p + i * o + A * n;
    m[1] = L * p + h * o + w * n;
    m[2] = K * p + g * o + v * n;
    m[3] = J * p + f * o + u * n;
    m[4] = M * H + i * F + A * C;
    m[5] = L * H + h * F + w * C;
    m[6] = K * H + g * F + v * C;
    m[7] = J * H + f * F + u * C;
    m[8] = M * e + i * d + A * b;
    m[9] = L * e + h * d + w * b;
    m[10] = K * e + g * d + v * b;
    m[11] = J * e + f * d + u * b;
    return m
};
mat4.rotateX = function (l, a, i) {
    var n = Math.sin(a);
    var g = Math.cos(a);
    var m = l[4],
        k = l[5],
        j = l[6],
        h = l[7];
    var f = l[8],
        e = l[9],
        d = l[10],
        b = l[11];
    if (!i) {
        i = l
    } else {
        if (l != i) {
            i[0] = l[0];
            i[1] = l[1];
            i[2] = l[2];
            i[3] = l[3];
            i[12] = l[12];
            i[13] = l[13];
            i[14] = l[14];
            i[15] = l[15]
        }
    }
    i[4] = m * g + f * n;
    i[5] = k * g + e * n;
    i[6] = j * g + d * n;
    i[7] = h * g + b * n;
    i[8] = m * -n + f * g;
    i[9] = k * -n + e * g;
    i[10] = j * -n + d * g;
    i[11] = h * -n + b * g;
    return i
};
mat4.rotateY = function (m, f, l) {
    var n = Math.sin(f);
    var k = Math.cos(f);
    var e = m[0],
        d = m[1],
        b = m[2],
        a = m[3];
    var j = m[8],
        i = m[9],
        h = m[10],
        g = m[11];
    if (!l) {
        l = m
    } else {
        if (m != l) {
            l[4] = m[4];
            l[5] = m[5];
            l[6] = m[6];
            l[7] = m[7];
            l[12] = m[12];
            l[13] = m[13];
            l[14] = m[14];
            l[15] = m[15]
        }
    }
    l[0] = e * k + j * -n;
    l[1] = d * k + i * -n;
    l[2] = b * k + h * -n;
    l[3] = a * k + g * -n;
    l[8] = e * n + j * k;
    l[9] = d * n + i * k;
    l[10] = b * n + h * k;
    l[11] = a * n + g * k;
    return l
};
mat4.rotateZ = function (l, f, i) {
    var n = Math.sin(f);
    var g = Math.cos(f);
    var e = l[0],
        d = l[1],
        b = l[2],
        a = l[3];
    var m = l[4],
        k = l[5],
        j = l[6],
        h = l[7];
    if (!i) {
        i = l
    } else {
        if (l != i) {
            i[8] = l[8];
            i[9] = l[9];
            i[10] = l[10];
            i[11] = l[11];
            i[12] = l[12];
            i[13] = l[13];
            i[14] = l[14];
            i[15] = l[15]
        }
    }
    i[0] = e * g + m * n;
    i[1] = d * g + k * n;
    i[2] = b * g + j * n;
    i[3] = a * g + h * n;
    i[4] = e * -n + m * g;
    i[5] = d * -n + k * g;
    i[6] = b * -n + j * g;
    i[7] = a * -n + h * g;
    return i
};
mat4.frustum = function (a, j, f, h, d, c, i) {
    if (!i) {
        i = mat4.create()
    }
    var e = (j - a);
    var b = (h - f);
    var g = (c - d);
    i[0] = (d * 2) / e;
    i[1] = 0;
    i[2] = 0;
    i[3] = 0;
    i[4] = 0;
    i[5] = (d * 2) / b;
    i[6] = 0;
    i[7] = 0;
    i[8] = (j + a) / e;
    i[9] = (h + f) / b;
    i[10] = -(c + d) / g;
    i[11] = -1;
    i[12] = 0;
    i[13] = 0;
    i[14] = -(c * d * 2) / g;
    i[15] = 0;
    return i
};
mat4.perspective = function (b, f, e, a, c) {
    var g = e * Math.tan(b * Math.PI / 360);
    var d = g * f;
    return mat4.frustum(-d, d, -g, g, e, a, c)
};
mat4.ortho = function (a, j, f, h, d, c, i) {
    if (!i) {
        i = mat4.create()
    }
    var e = (j - a);
    var b = (h - f);
    var g = (c - d);
    i[0] = 2 / e;
    i[1] = 0;
    i[2] = 0;
    i[3] = 0;
    i[4] = 0;
    i[5] = 2 / b;
    i[6] = 0;
    i[7] = 0;
    i[8] = 0;
    i[9] = 0;
    i[10] = -2 / g;
    i[11] = 0;
    i[12] = -(a + j) / e;
    i[13] = -(h + f) / b;
    i[14] = -(c + d) / g;
    i[15] = 1;
    return i
};
mat4.lookAt = function (w, l, g, h) {
    if (!h) {
        h = mat4.create()
    }
    var u = w[0],
        s = w[1],
        p = w[2],
        f = g[0],
        e = g[1],
        d = g[2],
        o = l[0],
        n = l[1],
        m = l[2];
    if (u == o && s == n && p == m) {
        return mat4.identity(h)
    }
    var k, j, i, v, t, r, c, b, a, q;
    k = u - l[0];
    j = s - l[1];
    i = p - l[2];
    q = 1 / Math.sqrt(k * k + j * j + i * i);
    k *= q;
    j *= q;
    i *= q;
    v = e * i - d * j;
    t = d * k - f * i;
    r = f * j - e * k;
    q = Math.sqrt(v * v + t * t + r * r);
    if (!q) {
        v = 0;
        t = 0;
        r = 0
    } else {
        q = 1 / q;
        v *= q;
        t *= q;
        r *= q
    }
    c = j * r - i * t;
    b = i * v - k * r;
    a = k * t - j * v;
    q = Math.sqrt(c * c + b * b + a * a);
    if (!q) {
        c = 0;
        b = 0;
        a = 0
    } else {
        q = 1 / q;
        c *= q;
        b *= q;
        a *= q
    }
    h[0] = v;
    h[1] = c;
    h[2] = k;
    h[3] = 0;
    h[4] = t;
    h[5] = b;
    h[6] = j;
    h[7] = 0;
    h[8] = r;
    h[9] = a;
    h[10] = i;
    h[11] = 0;
    h[12] = -(v * u + t * s + r * p);
    h[13] = -(c * u + b * s + a * p);
    h[14] = -(k * u + j * s + i * p);
    h[15] = 1;
    return h
};
mat4.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
quat4 = {};
quat4.create = function (b) {
    var a = new glMatrixArrayType(4);
    Magi.Stats.quat4CreateCount++;
    if (b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3]
    }
    return a
};
quat4.set = function (b, a) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    return a
};
quat4.calculateW = function (c, b) {
    var a = c[0],
        e = c[1],
        d = c[2];
    if (!b || c == b) {
        c[3] = -Math.sqrt(Math.abs(1 - a * a - e * e - d * d));
        return c
    }
    b[0] = a;
    b[1] = e;
    b[2] = d;
    b[3] = -Math.sqrt(Math.abs(1 - a * a - e * e - d * d));
    return b
};
quat4.inverse = function (b, a) {
    if (!a || b == a) {
        b[0] *= 1;
        b[1] *= 1;
        b[2] *= 1;
        return b
    }
    a[0] = -b[0];
    a[1] = -b[1];
    a[2] = -b[2];
    a[3] = b[3];
    return a
};
quat4.length = function (c) {
    var a = c[0],
        e = c[1],
        d = c[2],
        b = c[3];
    return Math.sqrt(a * a + e * e + d * d + b * b)
};
quat4.normalize = function (e, d) {
    if (!d) {
        d = e
    }
    var b = e[0],
        g = e[1],
        f = e[2],
        c = e[3];
    var a = Math.sqrt(b * b + g * g + f * f + c * c);
    if (a == 0) {
        d[0] = 0;
        d[1] = 0;
        d[2] = 0;
        d[3] = 0;
        return d
    }
    a = 1 / a;
    d[0] = b * a;
    d[1] = g * a;
    d[2] = f * a;
    d[3] = c * a;
    return d
};
quat4.multiply = function (b, d, k) {
    if (!k) {
        k = b
    }
    var i = b[0],
        h = b[1],
        g = b[2],
        j = b[3];
    var e = d[0],
        c = d[1],
        a = d[2],
        f = d[3];
    k[0] = i * f + j * e + h * a - g * c;
    k[1] = h * f + j * c + g * e - i * a;
    k[2] = g * f + j * a + i * c - h * e;
    k[3] = j * f - i * e - h * c - g * a;
    return k
};
quat4.multiplyVec3 = function (b, d, n) {
    if (!n) {
        n = d
    }
    var m = d[0],
        l = d[1],
        k = d[2];
    var i = b[0],
        h = b[1],
        g = b[2],
        j = b[3];
    var e = j * m + h * k - g * l;
    var c = j * l + g * m - i * k;
    var a = j * k + i * l - h * m;
    var f = -i * m - h * l - g * k;
    n[0] = e * j + f * -i + c * -g - a * -h;
    n[1] = c * j + f * -h + a * -i - e * -g;
    n[2] = a * j + f * -g + e * -h - c * -i;
    return n
};
quat4.toMat3 = function (a, i) {
    if (!i) {
        i = mat3.create()
    }
    var h = a[0],
        g = a[1],
        f = a[2],
        k = a[3];
    var n = h + h;
    var b = g + g;
    var j = f + f;
    var e = h * n;
    var d = h * b;
    var c = h * j;
    var m = g * b;
    var l = g * j;
    var p = f * j;
    var r = k * n;
    var q = k * b;
    var o = k * j;
    i[0] = 1 - (m + p);
    i[1] = d - o;
    i[2] = c + q;
    i[3] = d + o;
    i[4] = 1 - (e + p);
    i[5] = l - r;
    i[6] = c - q;
    i[7] = l + r;
    i[8] = 1 - (e + m);
    return i
};
quat4.toMat4 = function (a, i) {
    if (!i) {
        i = mat4.create()
    }
    var h = a[0],
        g = a[1],
        f = a[2],
        k = a[3];
    var n = h + h;
    var b = g + g;
    var j = f + f;
    var e = h * n;
    var d = h * b;
    var c = h * j;
    var m = g * b;
    var l = g * j;
    var p = f * j;
    var r = k * n;
    var q = k * b;
    var o = k * j;
    i[0] = 1 - (m + p);
    i[1] = d - o;
    i[2] = c + q;
    i[3] = 0;
    i[4] = d + o;
    i[5] = 1 - (e + p);
    i[6] = l - r;
    i[7] = 0;
    i[8] = c - q;
    i[9] = l + r;
    i[10] = 1 - (e + m);
    i[11] = 0;
    i[12] = 0;
    i[13] = 0;
    i[14] = 0;
    i[15] = 1;
    return i
};
quat4.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};
if (typeof Magi == "undefined") {
    Magi = {}
}
Magi.Stats = {
    shaderBindCount: 0,
    materialUpdateCount: 0,
    uniformSetCount: 0,
    textureSetCount: 0,
    textureCreationCount: 0,
    vertexAttribPointerCount: 0,
    bindBufferCount: 0,
    drawElementsCount: 0,
    drawArraysCount: 0,
    vec2CreateCount: 0,
    vec3CreateCount: 0,
    vec4CreateCount: 0,
    mat3CreateCount: 0,
    mat4CreateCount: 0,
    quat4CreateCount: 0,
    reset: function () {
        for (var a in this) {
            if (typeof this[a] == "number") {
                this[a] = 0
            }
        }
    },
    print: function (a) {
        a.textContent = "Shader bind count: " + this.shaderBindCount + "\nMaterial update count: " + this.materialUpdateCount + "\nUniform set count: " + this.uniformSetCount + "\nTexture creation count: " + this.textureCreationCount + "\nTexture set count: " + this.textureSetCount + "\nVertexAttribPointer count: " + this.vertexAttribPointerCount + "\nBind buffer count: " + this.bindBufferCount + "\nDraw elements count: " + this.drawElementsCount + "\nDraw arrays count: " + this.drawArraysCount + "\nvec2 create count: " + this.vec2CreateCount + "\nvec3 create count: " + this.vec3CreateCount + "\nvec4 create count: " + this.vec4CreateCount + "\nmat3 create count: " + this.mat3CreateCount + "\nmat4 create count: " + this.mat4CreateCount + "\nquat4 create count: " + this.quat4CreateCount + "\n"
    }
};
if (!window.toArray) {
    toArray = function (d) {
        var b = new Array(d.length);
        for (var c = 0; c < d.length; c++) {
            b[c] = d[c]
        }
        return b
    }
}
Object.forceExtend = function (d, c) {
    for (var a in c) {
        try {
            d[a] = c[a]
        } catch (b) {}
    }
    return d
};
if (!Object.extend) {
    Object.extend = Object.forceExtend
}
Klass = function () {
    var e = function () {
        this.initialize.apply(this, arguments)
    };
    e.ancestors = toArray(arguments);
    e.prototype = {};
    for (var d = 0; d < arguments.length; d++) {
        var b = arguments[d];
        if (b.prototype) {
            Object.extend(e.prototype, b.prototype)
        } else {
            Object.extend(e.prototype, b)
        }
    }
    Object.extend(e, e.prototype);
    return e
};
Magi.Curves = {
    angularDistance: function (e, c) {
        var f = Math.PI * 2;
        var g = (c - e) % f;
        if (g > Math.PI) {
            g -= f
        }
        if (g < -Math.PI) {
            g += f
        }
        return g
    },
    linePoint: function (d, c, f, e) {
        if (!e) {
            e = vec3.create()
        }
        e[0] = d[0] + (c[0] - d[0]) * f;
        e[1] = d[1] + (c[1] - d[1]) * f;
        e[2] = d[2] + (c[2] - d[2]) * f;
        return e
    },
    quadraticPoint: function (l, j, h, p, m) {
        if (!m) {
            m = vec3.create()
        }
        var q = l[0] + (j[0] - l[0]) * p;
        var f = j[0] + (h[0] - j[0]) * p;
        var k = q + (f - q) * p;
        var o = l[1] + (j[1] - l[1]) * p;
        var e = j[1] + (h[1] - j[1]) * p;
        var i = o + (e - o) * p;
        var n = l[2] + (j[2] - l[2]) * p;
        var d = j[2] + (h[2] - j[2]) * p;
        var g = n + (d - n) * p;
        m[0] = k;
        m[1] = i;
        m[2] = g;
        return m
    },
    cubicPoint: function (v, u, s, r, n, l) {
        if (!l) {
            l = vec3.create()
        }
        var i = v[0] * 3;
        var w = u[0] * 3;
        var m = s[0] * 3;
        var p = v[1] * 3;
        var g = u[1] * 3;
        var q = s[1] * 3;
        var e = v[2] * 3;
        var o = u[2] * 3;
        var f = s[2] * 3;
        var k = v[0] + n * (w - i + n * (i - 2 * w + m + n * (w - v[0] - m + r[0])));
        var j = v[1] + n * (g - p + n * (p - 2 * g + q + n * (g - v[1] - q + r[1])));
        var h = v[2] + n * (o - e + n * (e - 2 * o + f + n * (o - v[2] - f + r[2])));
        l[0] = k;
        l[1] = j;
        l[2] = h;
        return l
    },
    linearValue: function (d, c, e) {
        return d + (c - d) * e
    },
    quadraticValue: function (g, f, k, h) {
        var j = g + (f - g) * h;
        var i = f + (k - f) * h;
        return j + (i - j) * h
    },
    cubicValue: function (g, e, l, j, i) {
        var k = g * 3,
            f = e * 3,
            h = l * 3;
        return g + i * (f - k + i * (k - 2 * f + h + i * (f - g - h + j)))
    },
    catmullRomPoint: function (n, k, i, g, q, p) {
        if (p == null) {
            p = vec3.create()
        }
        var o = ((-q + 2) * q - 1) * q * 0.5;
        var f = (((3 * q - 5) * q) * q + 2) * 0.5;
        var e = ((-3 * q + 4) * q + 1) * q * 0.5;
        var m = ((q - 1) * q * q) * 0.5;
        var l = n[0] * o + k[0] * f + i[0] * e + g[0] * m;
        var j = n[1] * o + k[1] * f + i[1] * e + g[1] * m;
        var h = n[2] * o + k[2] * f + i[2] * e + g[2] * m;
        p[0] = l;
        p[1] = j;
        p[2] = h;
        return p
    },
    catmullRomVector: function (i, h, g, e, l, f) {
        var m = 0.5 * (g[0] - i[0] + 2 * l * (2 * i[0] - 5 * h[0] + 4 * g[0] - e[0]) + 3 * l * l * (3 * h[0] + e[0] - i[0] - 3 * g[0]));
        var k = 0.5 * (g[1] - i[1] + 2 * l * (2 * i[1] - 5 * h[1] + 4 * g[1] - e[1]) + 3 * l * l * (3 * h[1] + e[1] - i[1] - 3 * g[1]));
        var j = 0.5 * (g[2] - i[2] + 2 * l * (2 * i[2] - 5 * h[2] + 4 * g[2] - e[2]) + 3 * l * l * (3 * h[2] + e[2] - i[2] - 3 * g[2]));
        if (!f) {
            f = vec3.create()
        }
        f[0] = m;
        f[1] = k;
        f[2] = j;
        vec3.normalize(f);
        return f
    },
    catmullRomPointVector: function (f, e, j, h, g, i) {
        if (i == null) {
            i = {
                point: vec3.create(),
                vector: vec3.create()
            }
        }
        this.catmullRomPoint(f, e, j, h, g, i.point);
        this.catmullRomVector(f, e, j, h, g, i.vector);
        return i
    },
    lineVector: function (d, c, e) {
        if (e == null) {
            e = vec3.create()
        }
        vec3.sub(c, d, e);
        e.normalize();
        return e
    },
    linePointVector: function (d, c, e, f) {
        if (f == null) {
            f = {
                point: vec3.create(),
                vector: vec3.create()
            }
        }
        this.linePoint(d, c, e, f.point);
        this.lineVector(d, c, f.vector);
        return f
    },
    __tmp0: vec3.create(),
    __tmp1: vec3.create(),
    __tmp2: vec3.create(),
    __tmp3: vec3.create(),
    __tmp4: vec3.create(),
    __tmp5: vec3.create(),
    quadraticVector: function (g, f, l, h, k) {
        if (k == null) {
            k = vec3.create()
        }
        var j = this.__tmp0,
            i = this.__tmp1;
        j = this.linePoint(g, f, h, j);
        i = this.linePoint(f, l, h, i);
        return this.lineVector(j, i, k)
    },
    quadraticPointVector: function (e, d, h, f, g) {
        if (g == null) {
            g = {
                point: vec3.create(),
                vector: vec3.create()
            }
        }
        this.quadraticPoint(e, d, f, g.point);
        this.quadraticVector(e, d, f, g.vector);
        return g
    },
    cubicVector: function (h, g, n, l, i, m) {
        if (m == null) {
            m = vec3.create()
        }
        var k = this.__tmp2,
            j = this.__tmp3;
        k = this.quadraticPoint(h, g, n, i, k);
        j = this.quadraticPoint(g, n, l, i, j);
        return this.lineVector(k, j, m)
    },
    cubicPointVector: function (f, e, j, h, g, i) {
        if (i == null) {
            i = {
                point: vec3.create(),
                vector: vec3.create()
            }
        }
        this.cubicPoint(f, e, g, i.point);
        this.cubicVector(f, e, g, i.vector);
        return i
    },
    lineLength: function (e, d) {
        var c = (d[0] - e[0]);
        var g = (d[1] - e[1]);
        var f = (d[2] - e[2]);
        return Math.sqrt(c * c + g * g + f * f)
    },
    squareLineLength: function (e, d) {
        var c = (d[0] - e[0]);
        var g = (d[1] - e[1]);
        var f = (d[2] - e[2]);
        return c * c + g * g + f * f
    },
    quadraticLength: function (e, d, i, f) {
        var h = this.__tmp4,
            g = this.__tmp5;
        h = this.linePoint(e, d, 2 / 3, h);
        g = this.linePoint(d, i, 1 / 3, g);
        return this.cubicLength(e, h, g, i, f)
    },
    cubicLength: (function () {
        var a = function (c) {
            var g = [c.slice(0)];
            for (var f = 1; f < 4; f++) {
                g[f] = [
                    [],
                    [],
                    [],
                    []
                ];
                for (var d = 0; d < 4 - f; d++) {
                    g[f][d][0] = 0.5 * (g[f - 1][d][0] + g[f - 1][d + 1][0]);
                    g[f][d][1] = 0.5 * (g[f - 1][d][1] + g[f - 1][d + 1][1])
                }
            }
            var h = [];
            var e = [];
            for (var d = 0; d < 4; d++) {
                h[d] = g[d][0];
                e[d] = g[3 - d][d]
            }
            return [h, e]
        };
        var b = function (e, f) {
            var c = 0;
            for (var g = 0; g < 3; g++) {
                c += Curves.lineLength(e[g], e[g + 1])
            }
            var h = Curves.lineLength(e[0], e[3]);
            if ((c - h) > f) {
                var d = a(e);
                c = b(d[0], f) + b(d[1], f)
            }
            return c
        };
        return function (f, e, i, h, g) {
            if (!g) {
                g = 1
            }
            return b([f, e, i, h], g)
        }
    })(),
    quadraticLengthPointVector: function (f, e, k, d, g, j) {
        var i = this.__tmp0,
            h = this.__tmp1;
        i = this.linePoint(f, e, 2 / 3, i);
        h = this.linePoint(e, k, 1 / 3, h);
        return this.cubicLengthPointVector(f, i, h, k, g, j)
    },
    cubicLengthPointVector: function (v, u, t, s, g, o, w) {
        if (w == null) {
            w = {
                point: vec3.create(),
                vector: vec3.create()
            }
        }
        var r = this.cubicLength(v, u, t, s, o);
        var n = this.__tmp4;
        vec3.set(v, n);
        var e = this.__tmp5;
        vec3.set(v, e);
        var k = 0;
        var j = 0;
        var f = g * r;
        var m = 20;
        var h = 1 / m;
        for (var q = 1; q <= m; q++) {
            vec3.set(n, e);
            this.cubicPoint(v, u, t, s, h * q, n);
            k = j;
            j += this.lineLength(e, n);
            if (j >= f) {
                if (j == k) {
                    vec3.set(n, w.point);
                    this.lineVector(v, u, w.vector);
                    return w
                }
                var p = j - f;
                var l = p / (j - k);
                this.linePoint(e, n, 1 - l, w.point);
                this.cubicVector(v, u, t, s, h * (q - l), w.vector);
                return w
            }
        }
        vec3.set(s, w.point);
        this.lineVector(t, s, w.vector);
        return w
    }
};
Magi.Colors = {
    hsl2rgb: function (k, t, i) {
        var a, m, o;
        if (t == 0) {
            a = m = o = i
        } else {
            var c = (i < 0.5 ? i * (1 + t) : i + t - (i * t));
            var d = 2 * i - c;
            var f = (k % 360) / 360;
            var n = f + 1 / 3;
            var e = f;
            var j = f - 1 / 3;
            if (n < 0) {
                n++
            }
            if (n > 1) {
                n--
            }
            if (e < 0) {
                e++
            }
            if (e > 1) {
                e--
            }
            if (j < 0) {
                j++
            }
            if (j > 1) {
                j--
            }
            if (n < 1 / 6) {
                a = d + ((c - d) * 6 * n)
            } else {
                if (n < 1 / 2) {
                    a = c
                } else {
                    if (n < 2 / 3) {
                        a = d + ((c - d) * 6 * (2 / 3 - n))
                    } else {
                        a = d
                    }
                }
            } if (e < 1 / 6) {
                m = d + ((c - d) * 6 * e)
            } else {
                if (e < 1 / 2) {
                    m = c
                } else {
                    if (e < 2 / 3) {
                        m = d + ((c - d) * 6 * (2 / 3 - e))
                    } else {
                        m = d
                    }
                }
            } if (j < 1 / 6) {
                o = d + ((c - d) * 6 * j)
            } else {
                if (j < 1 / 2) {
                    o = c
                } else {
                    if (j < 2 / 3) {
                        o = d + ((c - d) * 6 * (2 / 3 - j))
                    } else {
                        o = d
                    }
                }
            }
        }
        return [a, m, o]
    },
    hsv2rgb: function (j, u, n) {
        var a, k, m;
        if (u == 0) {
            a = k = m = n
        } else {
            j = (j % 360) / 60;
            var e = Math.floor(j);
            var l = j - e;
            var d = n * (1 - u);
            var c = n * (1 - u * l);
            var o = n * (1 - u * (1 - l));
            switch (e) {
            case 0:
                a = n;
                k = o;
                m = d;
                break;
            case 1:
                a = c;
                k = n;
                m = d;
                break;
            case 2:
                a = d;
                k = n;
                m = o;
                break;
            case 3:
                a = d;
                k = c;
                m = n;
                break;
            case 4:
                a = o;
                k = d;
                m = n;
                break;
            case 5:
                a = n;
                k = d;
                m = c;
                break
            }
        }
        return [a, k, m]
    }
};
R = function (e, c) {
    var b = [];
    for (var d = e; d < c; d++) {
        b.push(d)
    }
    return b
};
Rg = function (b, a) {
    return R(b, a + 1)
};
Array.prototype.deleteFirst = function (b) {
    for (var a = 0; a < this.length; a++) {
        if (this[a] == b) {
            this.splice(a, 1);
            return true
        }
    }
    return false
};
Array.prototype.stableSort = function (b) {
    for (var a = 0; a < this.length; a++) {
        this[a].__stableSortIndex = a
    }
    this.sort(function (d, c) {
        var e = b(d, c);
        if (e == 0) {
            e = d.__stableSortIndex - c.__stableSortIndex
        }
        return e
    });
    for (var a = 0; a < this.length; a++) {
        delete this[a].__stableSortIndex
    }
};
Array.prototype.all = function (b) {
    for (var a = 0; a < this.length; a++) {
        if (!b(this[a], a, this)) {
            return false
        }
    }
    return true
};
Array.prototype.any = function (b) {
    for (var a = 0; a < this.length; a++) {
        if (b(this[a], a, this)) {
            return true
        }
    }
    return false
};
Array.prototype.allIn = function (a) {
    return this.all(function (b) {
        return a[b] != null
    })
};
Array.prototype.anyIn = function (a) {
    return this.any(function (b) {
        return a[b] != null
    })
};
Array.prototype.equals = function (f) {
    if (!f) {
        return false
    }
    if (this.length != f.length) {
        return false
    }
    for (var e = 0; e < this.length; e++) {
        var d = this[e];
        var c = f[e];
        if (d.equals && typeof (d.equals) == "function") {
            if (!d.equals(c)) {
                return false
            }
        } else {
            if (d != c) {
                return false
            }
        }
    }
    return true
};
Array.prototype.rotate = function (a) {
    if (a) {
        this.unshift(this.pop());
        return this[0]
    } else {
        this.push(this.shift());
        return this[this.length - 1]
    }
};
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
};
Array.prototype.flatten = function () {
    var c = [];
    for (var f = 0; f < this.length; f++) {
        var g = this[f];
        if (g.flatten) {
            var b = g.flatten();
            for (var d = 0; d < b.length; d++) {
                c[c.length] = b[d]
            }
        } else {
            c[c.length] = g
        }
    }
    return c
};
Array.prototype.take = function () {
    var b = [];
    for (var d = 0; d < this.length; d++) {
        var f = [];
        for (var c = 0; c < arguments.length; c++) {
            f[c] = this[d][arguments[c]]
        }
        b[d] = f
    }
    return b
};
if (!Array.prototype.pluck) {
    Array.prototype.pluck = function (d) {
        var b = [];
        for (var c = 0; c < this.length; c++) {
            b[c] = this[c][d]
        }
        return b
    }
}
Array.prototype.setProperty = function (b, c) {
    for (var a = 0; a < this.length; a++) {
        this[a][b] = c
    }
};
Object.match = function (d, a) {
    for (var b in a) {
        var c = a[b];
        if (typeof d[b] == "object" && typeof c == "object") {
            if (!Object.match(d[b], c)) {
                return false
            }
        } else {
            if (d[b] != c) {
                return false
            }
        }
    }
    return
};
Array.prototype.allWith = function () {
    var b = [];
    topLoop: for (var d = 0; d < this.length; d++) {
        var g = this[d];
        for (var c = 0; c < arguments.length; c++) {
            var f = arguments[c];
            if (typeof f == "object") {
                if (!Object.match(this[d], f)) {
                    continue topLoop
                }
            } else {
                if (typeof f == "function") {
                    if (!this[d][f(d)]) {
                        continue topLoop
                    }
                } else {
                    if (!this[d][f]) {
                        continue topLoop
                    }
                }
            }
        }
        b[b.length] = g
    }
    return b
};
Array.prototype.bsearch = function (c) {
    var a = 0;
    var d = this.length - 1;
    while (a <= d) {
        var b = a + ((d - a) >> 1);
        var e = this[b];
        if (e < c) {
            a = b + 1
        } else {
            if (e > c) {
                d = b - 1
            } else {
                return b
            }
        }
    }
    return -1
};
Array.prototype.sortNum = function () {
    return this.sort(function (d, c) {
        return (d > c ? 1 : (d < c ? -1 : 0))
    })
};
Element.prototype.append = function () {
    for (var a = 0; a < arguments.length; a++) {
        if (typeof (arguments[a]) == "string") {
            this.appendChild(T(arguments[a]))
        } else {
            this.appendChild(arguments[a])
        }
    }
};
if (!Function.prototype.bind) {
    Function.prototype.bind = function (b) {
        var a = this;
        return function () {
            return a.apply(b, arguments)
        }
    }
}
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (b) {
        for (var a = 0; a < this.length; a++) {
            if (b == this[a]) {
                return a
            }
        }
        return -1
    }
}
Array.prototype.map = function (c) {
    var a = new Array(this.length);
    if (c) {
        for (var b = 0; b < this.length; b++) {
            a[b] = c(this[b], b, this)
        }
    } else {
        for (var b = 0; b < this.length; b++) {
            a[b] = this[b]
        }
    }
    return a
};
Array.prototype.unique = function () {
    var b = [this[0]];
    for (var c = 1; c < this.length; c++) {
        if (this[c] != this[c - 1]) {
            b.push(this[c])
        }
    }
    return b
};
Array.prototype.forEach = function (b) {
    for (var a = 0; a < this.length; a++) {
        b(this[a], a, this)
    }
};
Array.prototype.set = function (b) {
    this.splice(b.length);
    for (var a = 0; a < b.length; a++) {
        this[a] = b[a]
    }
    return this
};
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (c, b) {
        var a = 0;
        if (arguments.length == 1) {
            b = this[0];
            a++
        }
        for (; a < this.length; a++) {
            b = c(b, this[a], a, this)
        }
        return b
    }
}
if (!Array.prototype.find) {
    Array.prototype.find = function (b) {
        for (var a = 0; a < this.length; a++) {
            if (b(this[a], a, this)) {
                return this[a]
            }
        }
    }
}
if (!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
        return this.replace(/^./, this.slice(0, 1).toUpperCase())
    }
}
if (!String.prototype.escape) {
    String.prototype.escape = function () {
        return '"' + this.replace(/"/g, '\\"') + '"'
    }
}
if (!String.prototype.splice) {
    String.prototype.splice = function (c, b, a) {
        return this.slice(0, c) + a + this.slice(c + b)
    }
}
if (!String.prototype.strip) {
    String.prototype.strip = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
if (!Math.sinh) {
    Math.sinh = function (a) {
        return 0.5 * (Math.exp(a) - Math.exp(-a))
    };
    Math.asinh = function (a) {
        return Math.log(a + Math.sqrt(a * a + 1))
    }
}
if (!Math.cosh) {
    Math.cosh = function (a) {
        return 0.5 * (Math.exp(a) + Math.exp(-a))
    };
    Math.acosh = function (a) {
        return Math.log(a + Math.sqrt(a * a - 1))
    }
}
Math.Ln2 = Math.log(2);
Math.Ln10 = Math.log(10);
Math.log2 = function (a) {
    return Math.log(a) / Math.Ln2
};
Math.log10 = function (a) {
    return Math.log(a) / Math.Ln10
};
Math.isPowerOfTwo = function (a) {
    var b = Math.log2(a);
    return (Math.floor(b) == b)
};
E = function (d) {
    var g = document.createElement(d);
    for (var e = 1; e < arguments.length; e++) {
        var k = arguments[e];
        if (typeof (k) == "string") {
            g.innerHTML += k
        } else {
            if (k.DOCUMENT_NODE) {
                g.appendChild(k)
            } else {
                if (k.length) {
                    for (var c = 0; c < k.length; c++) {
                        var h = k[c];
                        if (k.DOCUMENT_NODE) {
                            g.appendChild(h)
                        } else {
                            g.innerHTML += h
                        }
                    }
                } else {
                    if (k.style) {
                        var f = k.style;
                        k = Object.clone(k);
                        delete k.style;
                        Object.forceExtend(g.style, f)
                    }
                    if (k.content) {
                        if (typeof (k.content) == "string") {
                            g.appendChild(T(k.content))
                        } else {
                            var b = k.content;
                            if (!b.length) {
                                b = [b]
                            }
                            b.forEach(function (a) {
                                g.appendChild(a)
                            })
                        }
                        k = Object.clone(k);
                        delete k.content
                    }
                    Object.forceExtend(g, k)
                }
            }
        }
    }
    return g
};
E.lastCanvasId = 0;
E.canvas = function (a, c, b) {
    var d = "canvas-uuid-" + E.lastCanvasId;
    E.lastCanvasId++;
    if (!b) {
        b = {}
    }
    return E("canvas", Object.extend(b, {
        id: d,
        width: a,
        height: c
    }))
};
E.byId = function (a) {
    return document.getElementById(a)
};
E.byClass = function (a) {
    return toArray(document.getElementsByClassName(a))
};
E.byTag = function (a) {
    return toArray(document.getElementsByTagName(a))
};
if (typeof byId == "undefined") {
    byId = E.byId
}
if (typeof byClass == "undefined") {
    byClass = E.byClass
}
if (typeof byTag == "undefined") {
    byTag = E.byTag
}
E.make = function (a) {
    return (function () {
        var b = [a];
        for (var c = 0; c < arguments.length; c++) {
            b.push(arguments[c])
        }
        return E.apply(E, b)
    })
};
E.tags = "a abbr acronym address area audio b base bdo big blockquote body br button canvas caption center cite code col colgroup dd del dfn div dl dt em fieldset form frame frameset h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins kbd label legend li link map meta noframes noscript object ol optgroup option p param pre q s samp script select small span strike strong style sub sup table tbody td textarea tfoot th thead title tr tt u ul var video".toUpperCase().split(" ");
(function () {
    E.tags.forEach(function (c) {
        window[c] = E[c] = E.make(c)
    });
    var a = function (c) {
        return (function (f) {
            var d = [{
                    type: c
                }
            ];
            var e = 0;
            if (typeof (f) == "string") {
                d[0].value = f;
                e++
            }
            for (; e < arguments.length; e++) {
                d.push(arguments[e])
            }
            return E.INPUT.apply(E, d)
        })
    };
    var b = ["SUBMIT", "TEXT", "RESET", "HIDDEN", "CHECKBOX"];
    b.forEach(function (c) {
        window[c] = E[c] = a(c)
    })
})();
E.cropImage = function (g, a, j, b, d) {
    var c = g.cloneNode(false);
    Object.forceExtend(c.style, {
        position: "relative",
        left: -a + "px",
        top: -j + "px",
        margin: "0px",
        padding: "0px",
        border: "0px"
    });
    var f = E("div", {
        style: {
            display: "block",
            width: b + "px",
            height: d + "px",
            overflow: "hidden"
        }
    });
    f.appendChild(c);
    return f
};
T = function (a) {
    return document.createTextNode(a)
};
Object.conditionalExtend = function (c, b) {
    for (var a in b) {
        if (c[a] == null) {
            c[a] = b[a]
        }
    }
    return c
};
Object.clone = function (src) {
    if (!src || src == true) {
        return src
    }
    switch (typeof (src)) {
    case "string":
        return Object.extend(src + "", src);
        break;
    case "number":
        return src;
        break;
    case "function":
        obj = eval(src.toSource());
        return Object.extend(obj, src);
        break;
    case "object":
        if (src instanceof Array) {
            return Object.extend([], src)
        } else {
            return Object.extend({}, src)
        }
        break
    }
};
Image.load = function (b, c) {
    var a = new Image();
    if (c) {
        a.onload = c
    }
    a.src = b;
    return a
};
Object.isImageLoaded = function (a) {
    if (a.tagName == "CANVAS") {
        return true
    }
    if (a.tagName == "VIDEO") {
        return a.duration > 0
    }
    if (!a.complete) {
        return false
    }
    if (a.naturalWidth != null && a.naturalWidth == 0) {
        return false
    }
    if (a.width == null || a.width == 0) {
        return false
    }
    return true
};
Object.sum = function (d, c) {
    if (d instanceof Array) {
        if (c instanceof Array) {
            var f = [];
            for (var e = 0; e < d.length; e++) {
                f[e] = d[e] + c[e]
            }
            return f
        } else {
            return d.map(function (a) {
                return a + c
            })
        }
    } else {
        if (c instanceof Array) {
            return c.map(function (a) {
                return a + d
            })
        } else {
            return d + c
        }
    }
};
Object.sub = function (d, c) {
    if (d instanceof Array) {
        if (c instanceof Array) {
            var f = [];
            for (var e = 0; e < d.length; e++) {
                f[e] = d[e] - c[e]
            }
            return f
        } else {
            return d.map(function (a) {
                return a - c
            })
        }
    } else {
        if (c instanceof Array) {
            return c.map(function (a) {
                return d - a
            })
        } else {
            return d - c
        }
    }
};
Object.clear = function (b) {
    for (var a in b) {
        delete b[a]
    }
    return b
};
if (!window.Mouse) {
    Mouse = {}
}
Mouse.getRelativeCoords = function (a, c) {
    var e = {
        x: 0,
        y: 0
    };
    var d = 0;
    var f = 0;
    var b = a;
    while (b) {
        d += b.offsetLeft;
        f += b.offsetTop;
        b = b.offsetParent
    }
    e.x = c.pageX - d;
    e.y = c.pageY - f;
    return e
};
Browser = (function () {
    var d = window.navigator.userAgent;
    var e = d.match(/Chrome\/\d+/);
    var a = d.match(/Safari/);
    var c = d.match(/Mobile/);
    var b = d.match(/WebKit\/\d+/);
    var f = d.match(/KHTML/);
    var h = d.match(/Gecko/);
    var g = d.match(/Explorer/);
    if (e) {
        return "Chrome"
    }
    if (c && a) {
        return "Mobile Safari"
    }
    if (a) {
        return "Safari"
    }
    if (b) {
        return "Webkit"
    }
    if (f) {
        return "KHTML"
    }
    if (h) {
        return "Gecko"
    }
    if (g) {
        return "IE"
    }
    return "UNKNOWN"
})();
Mouse.LEFT = 0;
Mouse.MIDDLE = 1;
Mouse.RIGHT = 2;
if (Browser == "IE") {
    Mouse.LEFT = 1;
    Mouse.MIDDLE = 4
}
Mouse.state = {};
window.addEventListener("mousedown", function (a) {
    Mouse.state[a.button] = true
}, true);
window.addEventListener("mouseup", function (a) {
    Mouse.state[a.button] = false
}, true);
Event = {
    cancel: function (a) {
        if (a.preventDefault) {
            a.preventDefault()
        }
    },
    stop: function (a) {
        Event.cancel(a);
        if (a.stopPropagation) {
            a.stopPropagation()
        }
    }
};
Key = {
    matchCode: function (b, a) {
        if (typeof a == "string") {
            var c = a.toLowerCase().charCodeAt(0);
            var d = a.toUpperCase().charCodeAt(0);
            return (b.which == c || b.which == d || b.keyCode == c || b.keyCode == d || b.charCode == c || b.charCode == d)
        } else {
            return (b.which == a || b.keyCode == a || b.charCode == a)
        }
    },
    match: function (e, d) {
        for (var c = 1; c < arguments.length; c++) {
            var a = arguments[c];
            if (a == null) {
                continue
            }
            if (a.length != null && typeof a != "string") {
                for (var b = 0; b < a.length; b++) {
                    if (Key.matchCode(e, a[b])) {
                        return true
                    }
                }
            } else {
                if (Key.matchCode(e, a)) {
                    return true
                }
            }
        }
        return false
    },
    isNumber: function (c, b) {
        var a = c.which || c.keyCode || c.charCode;
        return a >= Key.N_0 && a <= Key.N_9
    },
    number: function (c, b) {
        var a = c.which || c.keyCode || c.charCode;
        if (a < Key.N_0 || a > Key.N_9) {
            return NaN
        }
        return a - Key.N_0
    },
    getString: function (b) {
        var a = b.which || b.keyCode || b.charCode;
        return String.fromCharCode(a)
    },
    N_0: 48,
    N_1: 49,
    N_2: 50,
    N_3: 51,
    N_4: 52,
    N_5: 53,
    N_6: 54,
    N_7: 55,
    N_8: 56,
    N_9: 57,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46
};
if (typeof window.Query == "undefined") {
    window.Query = {}
}
Object.extend(window.Query, {
    parse: function (b) {
        var a = {};
        if (!b) {
            return a
        }
        b.split("&").forEach(function (d) {
            var c = d.replace(/\+/g, " ").split("=").map(decodeURIComponent);
            a[c[0]] = c[1]
        });
        return a
    },
    build: function (d) {
        if (typeof d == "string") {
            return encodeURIComponent(d)
        }
        if (d instanceof Array) {
            b = d
        } else {
            var b = [];
            for (var c in d) {
                if (d[c] != null) {
                    b.push([c, d[c]])
                }
            }
        }
        return b.map(function (a) {
            return a.map(encodeURIComponent).join("=")
        }).join("&")
    }
});
if (typeof window.URL == "undefined") {
    window.URL = {}
}
Object.extend(window.URL, {
    build: function (b, c, a) {
        return b + (c != null ? "?" + Query.build(c) : "") + (a != null ? "#" + Query.build(a) : "")
    },
    parse: function (a) {
        var b = a.split("#");
        var c = b[0].split("?");
        var d = c[0];
        var g = d.split("://");
        var f = g[0];
        var e = g[1] || g[0];
        return {
            base: d,
            path: e,
            protocol: f,
            query: Query.parse(c[1]),
            fragment: b[1],
            build: URL.__build__
        }
    },
    __build__: function () {
        return URL.build(this.base, this.query, this.fragment)
    }
});
Magi.log = function (b) {
    if (window.console) {
        console.log(b)
    }
    if (this.logCanvas) {
        var d = this.logCanvas;
        var a = d.getContext("2d");
        a.font = "14px Sans-serif";
        a.textAlign = "center";
        a.fillStyle = "#c24";
        a.fillText(b, d.width / 2, d.height / 2, d.width - 20)
    }
    if (this.logElement) {
        this.logElement.appendChild(P(T(b)))
    }
};
Magi.GL_CONTEXT_ID = null;
Magi.findGLContextId = function (e, a) {
    var b = function (c, k) {
        for (var h = 0, g; g = c[h], h++ < c.length;) {
            if (k(g)) {
                return g
            }
        }
    };
    var d = b(["webgl", "experimental-webgl"], function (f) {
        try {
            return e.getContext(f, a)
        } catch (c) {}
    });
    return d
};
Magi.getGLContext = function (e, d) {
    if (!this.GL_CONTEXT_ID) {
        this.GL_CONTEXT_ID = Magi.findGLContextId(e, d)
    }
    if (!this.GL_CONTEXT_ID) {
        this.logCanvas = e;
        this.log("No WebGL context found. Click here for more details.");
        var b = document.createElement("a");
        b.href = "http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation";
        e.parentNode.insertBefore(b, e);
        b.appendChild(e)
    } else {
        return e.getContext(this.GL_CONTEXT_ID, d)
    }
};
Magi.errorName = function (e, d) {
    var c = [];
    for (var b in e) {
        if (e[b] == d) {
            c.push(b)
        }
    }
    var a = c.join("|");
    return a
};
Magi.checkError = function (c, b) {
    var a = c.getError();
    if (a != 0) {
        Magi.log("Error " + a + ":" + Magi.errorName(c, a) + " at " + b)
    }
    return a
};
Magi.throwError = function (c, b) {
    var a = c.getError();
    if (a != 0) {
        throw (new Error("Error " + a + ":" + Magi.errorName(c, a) + " at " + b))
    }
};
Magi.AllocatedResources = {
    textures: [],
    vbos: [],
    shaders: [],
    fbos: [],
    deleteAll: function () {
        while (this.textures.length > 0) {
            this.textures[0].permanent = false;
            this.textures[0].destroy()
        }
        while (this.vbos.length > 0) {
            this.vbos[0].destroy()
        }
        while (this.fbos.length > 0) {
            this.fbos[0].destroy()
        }
        while (this.shaders.length > 0) {
            this.shaders[0].destroy()
        }
    },
    addTexture: function (a) {
        if (this.textures.indexOf(a) == -1) {
            this.textures.push(a)
        }
    },
    addShader: function (a) {
        if (this.shaders.indexOf(a) == -1) {
            this.shaders.push(a)
        }
    },
    addVBO: function (a) {
        if (this.vbos.indexOf(a) == -1) {
            this.vbos.push(a)
        }
    },
    addFBO: function (a) {
        if (this.fbos.indexOf(a) == -1) {
            this.fbos.push(a)
        }
    },
    deleteTexture: function (a) {
        var b = this.textures.indexOf(a);
        if (b >= 0) {
            this.textures.splice(b, 1)
        }
    },
    deleteShader: function (a) {
        var b = this.shaders.indexOf(a);
        if (b >= 0) {
            this.shaders.splice(b, 1)
        }
    },
    deleteVBO: function (a) {
        var b = this.vbos.indexOf(a);
        if (b >= 0) {
            this.vbos.splice(b, 1)
        }
    },
    deleteFBO: function (a) {
        var b = this.fbos.indexOf(a);
        if (b >= 0) {
            this.fbos.splice(b, 1)
        }
    }
};
window.addEventListener("unload", function () {
    Magi.AllocatedResources.deleteAll()
}, false);
Magi.Texture = Klass({
    target: "TEXTURE_2D",
    generateMipmaps: true,
    width: null,
    height: null,
    data: null,
    changed: false,
    initialize: function (a) {
        this.gl = a;
        Magi.AllocatedResources.addTexture(this)
    },
    load: function (e, d, c) {
        var b = new Image();
        var a = new Magi.Texture();
        a.generateMipmaps = c;
        b.onload = function () {
            a.changed = true;
            if (d) {
                d(a)
            }
        };
        b.src = e;
        a.image = b;
        return a
    },
    defaultTexCache: {},
    getDefaultTexture: function (b) {
        if (!this.defaultTexCache[b]) {
            var a = new this(b);
            a.image = E.canvas(1, 1);
            a.generateMipmaps = false;
            this.defaultTexCache[b] = a
        }
        return this.defaultTexCache[b]
    },
    upload: function () {
        var b = this.gl;
        var c = b[this.target];
        if (this.image) {
            var a = this.image;
            if (!Object.isImageLoaded(a)) {
                this.changed = true;
                return
            }
            if ((this.image.tagName == "IMG" && (/\.svgz?$/i).test(this.image.src)) || (this.image.tagName == "VIDEO" && (/WebKit\/\d+/).test(window.navigator.userAgent))) {
                if (!this.image.tmpCanvas || this.image.tmpCanvas.width != this.image.width || this.image.tmpCanvas.height != this.image.height) {
                    this.image.tmpCanvas = E.canvas(this.image.width, this.image.height)
                }
                this.image.tmpCanvas.getContext("2d").drawImage(this.image, 0, 0, this.image.width, this.image.height);
                a = this.image.tmpCanvas
            }
            this.width = a.naturalWidth || a.videoWidth || a.width;
            this.height = a.naturalHeight || a.videoHeight || a.height;
            if (this.previousWidth == this.width && this.previousHeight == this.height) {
                b.texSubImage2D(c, 0, 0, 0, b.RGBA, b.UNSIGNED_BYTE, a)
            } else {
                b.texImage2D(c, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a)
            }
        } else {
            if (this.previousWidth == this.width && this.previousHeight == this.height) {
                b.texSubImage2D(c, 0, 0, 0, this.width, this.height, b.RGBA, b.UNSIGNED_BYTE, this.data)
            } else {
                b.texImage2D(c, 0, b.RGBA, this.width, this.height, 0, b.RGBA, b.UNSIGNED_BYTE, this.data)
            }
        }
        this.previousWidth = this.width;
        this.previousHeight = this.height;
        Magi.throwError(b, "Texture.upload")
    },
    regenerateMipmap: function () {
        var f = this.gl;
        var a = f[this.target];
        f.texParameteri(a, f.TEXTURE_MIN_FILTER, f.LINEAR);
        if (this.generateMipmaps) {
            if (this.width == this.height && Math.isPowerOfTwo(this.width)) {
                f.generateMipmap(a);
                Magi.throwError(f, "Texture.regenerateMipmap: generateMipmap");
                f.texParameteri(a, f.TEXTURE_MIN_FILTER, f.LINEAR_MIPMAP_LINEAR)
            } else {
                if (this.image) {
                    var c = this.width,
                        g = this.height;
                    var k = Math.floor(Math.log2(Math.max(c, g)) + 0.1) + 1;
                    var b = this.image;
                    for (var d = 1; d < k; d++) {
                        var l = Math.max(1, Math.floor(c / Math.pow(2, d) + 0.1));
                        var e = Math.max(1, Math.floor(g / Math.pow(2, d) + 0.1));
                        var j = E.canvas(l, e);
                        var m = j.getContext("2d");
                        m.globalCompositeOperation = "copy";
                        m.drawImage(b, 0, 0, l, e);
                        f.texImage2D(a, d, f.RGBA, f.RGBA, f.UNSIGNED_BYTE, j);
                        Magi.throwError(f, "Texture.regenerateMipmap loop: " + [d, l, e].join(","));
                        b = j
                    }
                    f.texParameteri(a, f.TEXTURE_MIN_FILTER, f.LINEAR_MIPMAP_LINEAR)
                }
            }
        }
    },
    compile: function () {
        var a = this.gl;
        var b = a[this.target];
        this.textureObject = a.createTexture();
        Magi.Stats.textureCreationCount++;
        a.bindTexture(b, this.textureObject);
        Magi.throwError(a, "Texture.compile");
        this.upload();
        a.texParameteri(b, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
        a.texParameteri(b, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
        a.texParameteri(b, a.TEXTURE_MAG_FILTER, a.LINEAR);
        this.regenerateMipmap()
    },
    needsUpload: function () {
        if (this.image && this.image.tagName == "VIDEO") {
            if (this.image.currentTime != this.previousVideoTime) {
                this.previousVideoTime = this.image.currentTime;
                return true
            }
        }
        if (this.image && this.image.tagName == "CANVAS" && this.image.changed) {
            return true
        }
        return this.changed
    },
    use: function () {
        if (this.textureObject == null) {
            this.compile()
        }
        this.gl.bindTexture(this.gl[this.target], this.textureObject);
        if (this.needsUpload()) {
            this.changed = false;
            this.upload();
            this.regenerateMipmap()
        }
    },
    clear: function () {
        if (this.permanent == true) {
            return
        }
        if (this.textureObject) {
            this.gl.deleteTexture(this.textureObject)
        }
        this.previousWidth = this.previousHeight = null;
        this.textureObject = null
    },
    destroy: function () {
        if (this.permanent == true) {
            return
        }
        this.clear();
        Magi.AllocatedResources.deleteTexture(this)
    }
});
Magi.Shader = Klass({
    id: null,
    gl: null,
    compiled: false,
    shader: null,
    shaders: [],
    initialize: function (b) {
        this.gl = b;
        this.shaders = [];
        this.uniformLocations = {};
        this.attribLocations = {};
        for (var a = 1; a < arguments.length; a++) {
            this.shaders.push(arguments[a])
        }
        Magi.AllocatedResources.addShader(this)
    },
    destroy: function () {
        if (this.shader != null) {
            Magi.Shader.deleteShader(this.gl, this.shader)
        }
        Magi.AllocatedResources.deleteShader(this)
    },
    compile: function () {
        this.shader = Magi.Shader.getProgramByMixedArray(this.gl, this.shaders)
    },
    use: function () {
        if (this.shader == null) {
            this.compile()
        }
        this.gl.useProgram(this.shader.program)
    },
    getInfoLog: function () {
        if (this.shader == null) {
            this.compile()
        }
        var b = this.gl;
        var c = b.getProgramInfoLog(this.shader.program);
        var a = this.shader.shaders.map(function (d) {
            return b.getShaderInfoLog(d)
        }).join("\n\n");
        return c + "\n\n" + a
    },
    uniform1fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform1fv(c, b)
        }
    },
    uniform2fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform2fv(c, b)
        }
    },
    uniform3fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform3fv(c, b)
        }
    },
    uniform4fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform4fv(c, b)
        }
    },
    uniform1f: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform1f(c, b)
        }
    },
    uniform2f: function (a, d, c) {
        var b = this.uniform(a).index;
        if (b != null) {
            this.gl.uniform2f(b, d, c)
        }
    },
    uniform3f: function (a, e, d, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform3f(c, e, d, b)
        }
    },
    uniform4f: function (a, f, e, c, b) {
        var d = this.uniform(a).index;
        if (d != null) {
            this.gl.uniform4f(d, f, e, c, b)
        }
    },
    uniform1iv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform1iv(c, b)
        }
    },
    uniform2iv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform2iv(c, b)
        }
    },
    uniform3iv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform3iv(c, b)
        }
    },
    uniform4iv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform4iv(c, b)
        }
    },
    uniform1i: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform1i(c, b)
        }
    },
    uniform2i: function (a, d, c) {
        var b = this.uniform(a).index;
        if (b != null) {
            this.gl.uniform2i(b, d, c)
        }
    },
    uniform3i: function (a, e, d, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniform3i(c, e, d, b)
        }
    },
    uniform4i: function (a, f, e, c, b) {
        var d = this.uniform(a).index;
        if (d != null) {
            this.gl.uniform4i(d, f, e, c, b)
        }
    },
    uniformMatrix4fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniformMatrix4fv(c, false, b)
        }
    },
    uniformMatrix3fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniformMatrix3fv(c, false, b)
        }
    },
    uniformMatrix2fv: function (a, b) {
        var c = this.uniform(a).index;
        if (c != null) {
            this.gl.uniformMatrix2fv(c, false, b)
        }
    },
    attrib: function (a) {
        if (this.attribLocations[a] == null) {
            var b = this.gl.getAttribLocation(this.shader.program, a);
            this.attribLocations[a] = {
                index: b,
                current: null
            }
        }
        return this.attribLocations[a]
    },
    uniform: function (a) {
        if (this.uniformLocations[a] == null) {
            var b = this.gl.getUniformLocation(this.shader.program, a);
            this.uniformLocations[a] = {
                index: b,
                current: null
            }
        }
        return this.uniformLocations[a]
    }
});
Magi.Shader.createShader = function (e, c, a) {
    if (typeof c == "string") {
        c = e[c]
    }
    var b = e.createShader(c);
    e.shaderSource(b, a);
    e.compileShader(b);
    if (e.getShaderParameter(b, e.COMPILE_STATUS) != 1) {
        var d = e.getShaderInfoLog(b);
        e.deleteShader(b);
        throw (new Error("Failed to compile shader. Shader info log: " + d + " Shader source: " + a))
    }
    return b
};
Magi.Shader.getShaderById = function (d, e) {
    var c = document.getElementById(e);
    if (!c) {
        throw (new Error("getShaderById: No element has id " + e))
    }
    var b, a = c.getAttribute("type");
    if (a == "text/x-glsl-fs") {
        b = d.FRAGMENT_SHADER
    } else {
        if (a == "text/x-glsl-vs") {
            b = d.VERTEX_SHADER
        } else {
            throw (new Error("getShaderById: Unknown shader type " + a))
        }
    }
    return this.createShader(d, b, c.textContent)
};
Magi.Shader.loadShader = function (e, c, h, b, f) {
    if (!f) {
        var g = c.split(".");
        var d = g[g.length - 1].toLowerCase();
        if (d == "frag") {
            f = e.FRAGMENT_SHADER
        } else {
            if (d == "vert") {
                f = e.VERTEX_SHADER
            } else {
                throw (new Error("loadShader: Unknown shader extension " + d))
            }
        }
    }
    var j = this;
    var i = new XMLHttpRequest;
    i.onsuccess = function (k) {
        var a = j.createShader(e, f, k.responseText);
        h(a, k)
    };
    i.onerror = function (a) {
        if (b) {
            b(a)
        } else {
            throw (new Error("loadShader: Failed to load shader " + a.status))
        }
    };
    i.open("GET", c, true);
    i.send(null);
    return i
};
Magi.Shader.createProgram = function (g, k) {
    var b = g.createProgram();
    var j = [];
    for (var c = 0; c < k.length; ++c) {
        try {
            var f = k[c];
            j.push(f);
            g.attachShader(b, f)
        } catch (h) {
            var a = {
                program: b,
                shaders: j
            };
            this.deleteShader(g, a);
            throw (h)
        }
    }
    var d = {
        program: b,
        shaders: j
    };
    g.linkProgram(b);
    g.validateProgram(b);
    if (g.getProgramParameter(b, g.LINK_STATUS) != 1) {
        this.deleteShader(g, d);
        throw (new Error("Failed to link shader: " + g.getProgramInfoLog(b)))
    }
    if (g.getProgramParameter(b, g.VALIDATE_STATUS) != 1) {
        this.deleteShader(g, d);
        throw (new Error("Failed to validate shader"))
    }
    return d
};
Magi.Shader.loadProgramArray = function (e, f, g, b) {
    var h = this;
    var c = f.slice(0);
    var i = [];
    var d;
    d = function (j) {
        i.push(j);
        if (c.length == 0) {
            try {
                var l = h.createProgram(e, i);
                g(l)
            } catch (k) {
                b(k)
            }
        } else {
            var m = c.shift();
            h.loadShader(e, m, d, b)
        }
    };
    var a = c.shift();
    h.loadShader(e, a, d, b)
};
Magi.Shader.loadProgram = function (d, c) {
    var b = [];
    for (var a = 1; a < arguments.length; ++a) {
        b.push(arguments[a])
    }
    return this.loadProgramArray(d, b, c)
};
Magi.Shader.getProgramBySourceArray = function (d, c) {
    var b = this;
    var a = c.map(function (e) {
        return b.createShader(d, e.type, e.text)
    });
    return this.createProgram(d, a)
};
Magi.Shader.getProgramByIdArray = function (d, c) {
    var b = this;
    var a = c.map(function (e) {
        return b.getShaderById(d, e)
    });
    return this.createProgram(d, a)
};
Magi.Shader.getProgramByMixedArray = function (d, c) {
    var b = this;
    var a = c.map(function (e) {
        if (e.type) {
            return b.createShader(d, e.type, e.text)
        } else {
            return b.getShaderById(d, e)
        }
    });
    return this.createProgram(d, a)
};
Magi.Shader.getProgramByIds = function (c) {
    var b = [];
    for (var a = 1; a < arguments.length; ++a) {
        b.push(arguments[a])
    }
    return this.getProgramByIdArray(c, b)
};
Magi.Shader.deleteShader = function (b, a) {
    b.useProgram(null);
    a.shaders.forEach(function (c) {
        b.detachShader(a.program, c);
        b.deleteShader(c)
    });
    b.deleteProgram(a.program)
};
Magi.Shader.load = function (e, d) {
    var b = [];
    for (var a = 1; a < arguments.length; ++a) {
        b.push(arguments[a])
    }
    var c = new Shader(e);
    Magi.Shader.loadProgramArray(e, b, function (f) {
        c.shader = f;
        c.compile = function () {};
        d(c)
    })
};
Magi.Filter = Klass(Magi.Shader, {
    initialize: function (b, a) {
        Magi.Shader.initialize.apply(this, arguments)
    },
    apply: function (d) {
        this.use();
        var b = this.attrib("Vertex");
        var a = this.attrib("TexCoord");
        var c = Magi.Geometry.Quad.getCachedVBO(this.gl);
        if (d) {
            d(this)
        }
        c.draw(b, null, a)
    }
});
Magi.VBO = Klass({
    initialized: false,
    length: 0,
    vbos: null,
    type: "TRIANGLES",
    elementsVBO: null,
    elements: null,
    initialize: function (b) {
        this.gl = b;
        this.data = [];
        this.elementsVBO = null;
        for (var a = 1; a < arguments.length; a++) {
            if (arguments[a].elements) {
                this.elements = arguments[a]
            } else {
                this.data.push(arguments[a])
            }
        }
        Magi.AllocatedResources.addVBO(this)
    },
    setData: function () {
        this.clear();
        this.data = [];
        for (var a = 0; a < arguments.length; a++) {
            if (arguments[a].elements) {
                this.elements = arguments[a]
            } else {
                this.data.push(arguments[a])
            }
        }
    },
    clear: function () {
        if (this.vbos != null) {
            for (var a = 0; a < this.vbos.length; a++) {
                this.gl.deleteBuffer(this.vbos[a])
            }
        }
        if (this.elementsVBO != null) {
            this.gl.deleteBuffer(this.elementsVBO)
        }
        this.length = this.elementsLength = 0;
        this.vbos = this.elementsVBO = null;
        this.initialized = false
    },
    destroy: function () {
        this.clear();
        Magi.AllocatedResources.deleteVBO(this)
    },
    init: function () {
        this.clear();
        var j = this.gl;
        j.getError();
        var h = [];
        var a = 0;
        for (var b = 0; b < this.data.length; b++) {
            h.push(j.createBuffer())
        }
        if (this.elements != null) {
            this.elementsVBO = j.createBuffer()
        }
        try {
            Magi.throwError(j, "genBuffers");
            for (var b = 0; b < this.data.length; b++) {
                var g = this.data[b];
                if (g.data == null) {
                    continue
                }
                var f = Math.floor(g.data.length / g.size);
                if (b == 0 || f < a) {
                    a = f
                }
                if (!g.typedArray) {
                    switch (g.type) {
                    case j.UNSIGNED_INT:
                        g.typedArray = new Uint32Array(g.data);
                        break;
                    case j.INT:
                        g.typedArray = new Int32Array(g.data);
                        break;
                    case j.UNSIGNED_SHORT:
                        g.typedArray = new Uint16Array(g.data);
                        break;
                    case j.SHORT:
                        g.typedArray = new Int16Array(g.data);
                        break;
                    case j.UNSIGNED_BYTE:
                        g.typedArray = new Uint8Array(g.data);
                        break;
                    case j.BYTE:
                        g.typedArray = new Int8Array(g.data);
                        break;
                    default:
                        g.type = j.FLOAT;
                        g.typedArray = new Float32Array(g.data)
                    }
                }
                j.bindBuffer(j.ARRAY_BUFFER, h[b]);
                Magi.Stats.bindBufferCount++;
                Magi.throwError(j, "bindBuffer");
                j.bufferData(j.ARRAY_BUFFER, g.typedArray, j.STATIC_DRAW);
                Magi.throwError(j, "bufferData")
            }
            if (this.elementsVBO != null) {
                var g = this.elements;
                this.elementsLength = g.data.length;
                this.elementsType = g.type == j.UNSIGNED_BYTE ? j.UNSIGNED_BYTE : j.UNSIGNED_SHORT;
                j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, this.elementsVBO);
                Magi.Stats.bindBufferCount++;
                Magi.throwError(j, "bindBuffer ELEMENT_ARRAY_BUFFER");
                if (!g.typedArray) {
                    if (this.elementsType == j.UNSIGNED_SHORT) {
                        g.typedArray = new Uint16Array(g.data)
                    } else {
                        if (this.elementsType == j.UNSIGNED_BYTE) {
                            g.typedArray = new Uint8Array(g.data)
                        }
                    }
                    j.bufferData(j.ELEMENT_ARRAY_BUFFER, g.typedArray, j.STATIC_DRAW)
                }
                Magi.throwError(j, "bufferData ELEMENT_ARRAY_BUFFER")
            }
        } catch (c) {
            for (var b = 0; b < h.length; b++) {
                j.deleteBuffer(h[b])
            }
            throw (c)
        }
        j.bindBuffer(j.ARRAY_BUFFER, null);
        j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, null);
        Magi.Stats.bindBufferCount++;
        Magi.Stats.bindBufferCount++;
        this.length = a;
        this.vbos = h;
        this.initialized = true
    },
    use: function () {
        if (!this.initialized) {
            this.init()
        }
        var d = this.gl;
        for (var b = 0; b < arguments.length; b++) {
            var a = arguments[b];
            var c = (this.data[b] && this.data[b].data != null) ? this.vbos[b] : null;
            if (a == null || a.index == null || a.index == -1) {
                continue
            }
            if (!c) {
                d.disableVertexAttribArray(a.index);
                continue
            }
            if (Magi.VBO[a.index] !== c) {
                d.bindBuffer(d.ARRAY_BUFFER, c);
                d.vertexAttribPointer(a.index, this.data[b].size, this.data[b].type, false, 0, 0);
                Magi.Stats.bindBufferCount++;
                Magi.Stats.vertexAttribPointerCount++
            }
            d.enableVertexAttribArray(a.index);
            Magi.VBO[a.index] = c
        }
        if (this.elementsVBO != null) {
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.elementsVBO);
            Magi.Stats.bindBufferCount++
        }
    },
    draw: function () {
        var a = [];
        this.use.apply(this, arguments);
        var b = this.gl;
        if (this.elementsVBO != null) {
            b.drawElements(b[this.type], this.elementsLength, this.elementsType, 0);
            Magi.Stats.drawElementsCount++
        } else {
            b.drawArrays(b[this.type], 0, this.length);
            Magi.Stats.drawArraysCount++
        }
    }
});
Magi.FBO = Klass({
    initialized: false,
    useDepth: true,
    fbo: null,
    rbo: null,
    texture: null,
    initialize: function (d, a, c, b) {
        this.gl = d;
        this.width = a;
        this.height = c;
        if (b != null) {
            this.useDepth = b
        }
        Magi.AllocatedResources.addFBO(this)
    },
    destroy: function () {
        if (this.fbo) {
            this.gl.deleteFramebuffer(this.fbo)
        }
        if (this.rbo) {
            this.gl.deleteRenderbuffer(this.rbo)
        }
        if (this.texture) {
            this.texture.permanent = false;
            this.texture.destroy()
        }
        Magi.AllocatedResources.deleteFBO(this)
    },
    setSize: function (a, b) {
        if (a == this.width && b == this.height) {
            return
        }
        this.width = a;
        this.height = b;
        if (!this.initialized) {
            return
        }
        var c = this.gl;
        this.texture.width = this.width;
        this.texture.height = this.height;
        this.texture.changed = true;
        this.texture.use();
        if (this.useDepth) {
            c.bindRenderbuffer(c.RENDERBUFFER, this.rbo);
            Magi.throwError(c, "FBO.resize bindRenderbuffer");
            c.renderbufferStorage(c.RENDERBUFFER, c.stencilWorks ? c.DEPTH_STENCIL : c.DEPTH_COMPONENT16, this.width, this.height);
            Magi.throwError(c, "FBO.resize renderbufferStorage")
        }
    },
    resize: function (a, b) {
        return this.setSize(a, b)
    },
    init: function () {
        var d = this.gl;
        var j = this.width,
            c = this.height;
        var b = this.fbo != null ? this.fbo : d.createFramebuffer();
        var a;
        d.bindFramebuffer(d.FRAMEBUFFER, b);
        Magi.throwError(d, "FBO.init bindFramebuffer");
        var l = this.texture != null ? this.texture : new Magi.Texture(d);
        l.width = j;
        l.height = c;
        l.data = null;
        l.generateMipmaps = false;
        l.permanent = true;
        l.use();
        Magi.throwError(d, "FBO.init tex");
        d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, l.textureObject, 0);
        Magi.throwError(d, "FBO.init bind tex");
        if (this.useDepth) {
            a = this.rbo != null ? this.rbo : d.createRenderbuffer();
            d.bindRenderbuffer(d.RENDERBUFFER, a);
            Magi.throwError(d, "FBO.init bindRenderbuffer");
            try {
                d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_STENCIL, j, c);
                Magi.throwError(d, "FBO.init depth renderbufferStorage");
                d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_STENCIL_ATTACHMENT, d.RENDERBUFFER, a);
                Magi.throwError(d, "FBO.init bind depth buffer");
                d.stencilWorks = true
            } catch (g) {
                d.stencilWorks = false
            }
            if (!d.stencilWorks) {
                d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_COMPONENT16, j, c);
                Magi.throwError(d, "FBO.init depth renderbufferStorage");
                d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.RENDERBUFFER, a);
                Magi.throwError(d, "FBO.init bind depth buffer")
            }
        }
        var f = d.checkFramebufferStatus(d.FRAMEBUFFER);
        if (f != d.FRAMEBUFFER_COMPLETE) {
            var i;
            for (var k in d) {
                try {
                    i = d[k]
                } catch (g) {
                    i = null
                }
                if (i == f) {
                    f = k;
                    break
                }
            }
        }
        Magi.throwError(d, "FBO.init check fbo");
        this.fbo = b;
        this.rbo = a;
        this.texture = l;
        this.initialized = true
    },
    use: function () {
        if (!this.initialized) {
            this.init()
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
        Magi.throwError(this.gl, "FBO.use")
    }
});
Magi.makeGLErrorWrapper = function (a, b) {
    return (function () {
        var d;
        try {
            d = a[b].apply(a, arguments)
        } catch (c) {
            throw (new Error("GL error " + c.name + " in " + b + "\n" + c.message + "\n" + arguments.callee.caller))
        }
        var c = a.getError();
        if (c != 0) {
            throw (new Error("GL error " + c + " in " + b))
        }
        return d
    })
};
Magi.wrapGLContext = function (d) {
    var b = {};
    for (var a in d) {
        try {
            if (typeof d[a] == "function") {
                b[a] = Magi.makeGLErrorWrapper(d, a)
            } else {
                b[a] = d[a]
            }
        } catch (c) {}
    }
    b.getError = function () {
        return d.getError()
    };
    return b
};
Magi.Geometry = {};
Magi.Geometry.Quad = {
    vertices: new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]),
    normals: new Float32Array([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]),
    texcoords: new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]),
    indices: new Float32Array([0, 1, 2, 1, 5, 2]),
    makeVBO: function (a) {
        return new Magi.VBO(a, {
            size: 3,
            data: this.vertices
        }, {
            size: 3,
            data: this.normals
        }, {
            size: 2,
            data: this.texcoords
        })
    },
    cache: {},
    getCachedVBO: function (a) {
        if (!this.cache[a]) {
            this.cache[a] = this.makeVBO(a)
        }
        return this.cache[a]
    }
};
Magi.Geometry.QuadMesh = {
    makeVBO: function (g, b, d) {
        var c = [],
            e = [],
            f = [];
        for (var a = 0; a < b; a++) {
            for (var h = 0; h < d; h++) {
                c.push((a - (b / 2)) / (b / 2), (h - (d / 2)) / (d / 2), 0);
                c.push(((a + 1) - (b / 2)) / (b / 2), (h - (d / 2)) / (d / 2), 0);
                c.push((a - (b / 2)) / (b / 2), ((h + 1) - (d / 2)) / (d / 2), 0);
                c.push(((a + 1) - (b / 2)) / (b / 2), (h - (d / 2)) / (d / 2), 0);
                c.push(((a + 1) - (b / 2)) / (b / 2), ((h + 1) - (d / 2)) / (d / 2), 0);
                c.push((a - (b / 2)) / (b / 2), ((h + 1) - (d / 2)) / (d / 2), 0);
                e.push(0, 0, -1);
                e.push(0, 0, -1);
                e.push(0, 0, -1);
                e.push(0, 0, -1);
                e.push(0, 0, -1);
                e.push(0, 0, -1);
                f.push(a / b, h / d);
                f.push((a + 1) / b, h / d);
                f.push(a / b, (h + 1) / d);
                f.push((a + 1) / b, h / d);
                f.push((a + 1) / b, (h + 1) / d);
                f.push(a / b, (h + 1) / d)
            }
        }
        return new Magi.VBO(g, {
            size: 3,
            data: new Float32Array(c)
        }, {
            size: 3,
            data: new Float32Array(e)
        }, {
            size: 2,
            data: new Float32Array(f)
        })
    },
    cache: {},
    getCachedVBO: function (d, b, c) {
        b = b || 50;
        c = c || 50;
        var a = b + ":" + c;
        if (!this.cache[d]) {
            this.cache[d] = {}
        }
        if (!this.cache[d][a]) {
            this.cache[d][a] = this.makeVBO(d, b, c)
        }
        return this.cache[d][a]
    }
};
Magi.Geometry.Cube = {
    vertices: new Float32Array([0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5]),
    normals: new Float32Array([1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]),
    texcoords: new Float32Array([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
    indices: [],
    create: function () {
        for (var a = 0; a < 6; a++) {
            this.indices.push(a * 4 + 0);
            this.indices.push(a * 4 + 1);
            this.indices.push(a * 4 + 3);
            this.indices.push(a * 4 + 1);
            this.indices.push(a * 4 + 2);
            this.indices.push(a * 4 + 3)
        }
        this.indices = new Float32Array(this.indices)
    },
    makeVBO: function (a) {
        return new Magi.VBO(a, {
            size: 3,
            data: this.vertices
        }, {
            size: 3,
            data: this.normals
        }, {
            size: 2,
            data: this.texcoords
        }, {
            elements: true,
            data: this.indices
        })
    },
    cache: {},
    getCachedVBO: function (a) {
        if (!this.cache[a]) {
            this.cache[a] = this.makeVBO(a)
        }
        return this.cache[a]
    }
};
Magi.Geometry.Cube.create();
Magi.Geometry.CubeArray = {
    pushNormals: function (b, a) {
        b.push(Magi.Geometry.Cube.normals[a * 3 + 0]);
        b.push(Magi.Geometry.Cube.normals[a * 3 + 1]);
        b.push(Magi.Geometry.Cube.normals[a * 3 + 2])
    },
    pushCubeNormals: function (a) {
        for (var b = 0; b < 6; b++) {
            this.pushNormals(a, b * 4 + 0);
            this.pushNormals(a, b * 4 + 1);
            this.pushNormals(a, b * 4 + 3);
            this.pushNormals(a, b * 4 + 1);
            this.pushNormals(a, b * 4 + 2);
            this.pushNormals(a, b * 4 + 3)
        }
    },
    pushCubeVerts: function (f, b, e, c, d, a) {
        f.push((2 * Magi.Geometry.Cube.vertices[a * 3 + 0] + 1 + 2 * b) / c - 1);
        f.push((2 * Magi.Geometry.Cube.vertices[a * 3 + 1] + 1 + 2 * e) / d - 1);
        f.push(Magi.Geometry.Cube.vertices[a * 3 + 2])
    },
    pushCube: function (f, a, e, b, d) {
        for (var c = 0; c < 6; c++) {
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 0);
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 1);
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 3);
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 1);
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 2);
            this.pushCubeVerts(f, a, e, b, d, c * 4 + 3)
        }
    },
    makeVBO: function (d, e, b) {
        var a = [],
            h = [],
            j = [];
        for (var g = 0; g < e; g++) {
            for (var f = 0; f < b; f++) {
                this.pushCube(a, g, f, e, b);
                this.pushCubeNormals(h);
                for (var c = 0; c < 6 * 6; c++) {
                    j.push(g / e, f / b)
                }
            }
        }
        return new Magi.VBO(d, {
            size: 3,
            data: new Float32Array(a)
        }, {
            size: 3,
            data: new Float32Array(h)
        }, {
            size: 2,
            data: new Float32Array(j)
        })
    },
    cache: {},
    getCachedVBO: function (d, b, c) {
        b = b || 50;
        c = c || 50;
        var a = b + ":" + c;
        if (!this.cache[d]) {
            this.cache[d] = {}
        }
        if (!this.cache[d][a]) {
            this.cache[d][a] = this.makeVBO(d, b, c)
        }
        return this.cache[d][a]
    }
};
Magi.Geometry.Sphere = {
    vert: function (b, f, a, j, k, l) {
        var i, h, g, e, d, c;
        e = Math.sin(b) * Math.cos(f);
        c = Math.sin(f);
        d = Math.cos(b) * Math.cos(f);
        j.push(e, d, c);
        i = Math.sin(b) * Math.cos(f);
        g = Math.sin(f);
        h = Math.cos(b) * Math.cos(f);
        a.push(i, h, g);
        k.push(1 - (b / (2 * Math.PI)), l ? ((f + Math.PI / 2) / Math.PI) : 0.5 + 0.5 * Math.sin(f))
    },
    makeVBO: function (e, g, d, m) {
        var a = [],
            k = [],
            l = [];
        var n = this;
        for (var i = 0; i < d; i++) {
            var f = -Math.PI / 2 + Math.PI * i / d;
            var h = f + Math.PI / d;
            for (var j = 0; j < g; j++) {
                var b = 2 * Math.PI * j / g;
                var c = b + 2 * Math.PI / g;
                this.vert(b, f, a, k, l, m);
                this.vert(b, h, a, k, l, m);
                this.vert(c, h, a, k, l, m);
                this.vert(b, f, a, k, l, m);
                this.vert(c, h, a, k, l, m);
                this.vert(c, f, a, k, l, m)
            }
        }
        return new Magi.VBO(e, {
            size: 3,
            data: new Float32Array(a)
        }, {
            size: 3,
            data: new Float32Array(k)
        }, {
            size: 2,
            data: new Float32Array(l)
        })
    },
    cache: {},
    getCachedVBO: function (e, b, c, d) {
        b = b || 10;
        c = c || 10;
        var a = b + ":" + c + ":" + d;
        if (!this.cache[e]) {
            this.cache[e] = {}
        }
        if (!this.cache[e][a]) {
            this.cache[e][a] = this.makeVBO(e, b, c, d)
        }
        return this.cache[e][a]
    }
};
Magi.Geometry.Disk = {
    OUT: 1,
    IN: 2,
    UP: 3,
    DOWN: 4,
    vert: function (e, i, b, d, l, m, f, n, g) {
        var c = Math.sin(e);
        var a = Math.cos(e);
        var k = c * b;
        var j = a * b;
        d.push(k, j, i);
        var h = e / (2 * Math.PI);
        switch (f) {
        case this.OUT:
            l.push(c, a, 0);
            m.push(h, i / n);
            break;
        case this.IN:
            l.push(-c, -a, 0);
            m.push(h, i / n);
            break;
        case this.UP:
            l.push(0, 0, 1);
            m.push(h, g);
            break;
        case this.DOWN:
            l.push(0, 0, -1);
            m.push(h, g);
            break
        }
    },
    makeVBO: function (h, d, c, o, i, f) {
        var a = [],
            n = [],
            m = [];
        var p = this;
        for (var g = 0; g < f; g++) {
            var k = g * o / f;
            var j = k + o / f;
            for (var l = 0; l < i; l++) {
                var b = l * 2 * Math.PI / i;
                var e = b + 2 * Math.PI / i;
                this.vert(b, k, c, a, n, m, this.OUT, o, 0);
                this.vert(b, j, c, a, n, m, this.OUT, o, 0);
                this.vert(e, j, c, a, n, m, this.OUT, o, 0);
                this.vert(b, k, c, a, n, m, this.OUT, o, 0);
                this.vert(e, j, c, a, n, m, this.OUT, o, 0);
                this.vert(e, k, c, a, n, m, this.OUT, o, 0);
                this.vert(e, j, d, a, n, m, this.IN, o, 0);
                this.vert(b, j, d, a, n, m, this.IN, o, 0);
                this.vert(b, k, d, a, n, m, this.IN, o, 0);
                this.vert(e, k, d, a, n, m, this.IN, o, 0);
                this.vert(e, j, d, a, n, m, this.IN, o, 0);
                this.vert(b, k, d, a, n, m, this.IN, o, 0);
                this.vert(b, j, c, a, n, m, this.UP, o, 0);
                this.vert(b, j, d, a, n, m, this.UP, o, 1);
                this.vert(e, j, d, a, n, m, this.UP, o, 1);
                this.vert(b, j, c, a, n, m, this.UP, o, 0);
                this.vert(e, j, d, a, n, m, this.UP, o, 1);
                this.vert(e, j, c, a, n, m, this.UP, o, 0);
                this.vert(e, k, d, a, n, m, this.DOWN, o, 1);
                this.vert(b, k, d, a, n, m, this.DOWN, o, 1);
                this.vert(b, k, c, a, n, m, this.DOWN, o, 0);
                this.vert(e, k, c, a, n, m, this.DOWN, o, 0);
                this.vert(e, k, d, a, n, m, this.DOWN, o, 1);
                this.vert(b, k, c, a, n, m, this.DOWN, o, 0)
            }
        }
        return new Magi.VBO(h, {
            size: 3,
            data: new Float32Array(a)
        }, {
            size: 3,
            data: new Float32Array(n)
        }, {
            size: 2,
            data: new Float32Array(m)
        })
    },
    cache: {},
    getCachedVBO: function (g, c, a, f, d, e) {
        c = c == null ? 0.5 : c;
        a = a == null ? 1 : a;
        f = f == null ? 0.01 : f;
        d = d || 50;
        e = e || 2;
        var b = [c, a, f, d, e].join(":");
        if (!this.cache[g]) {
            this.cache[g] = {}
        }
        if (!this.cache[g][b]) {
            this.cache[g][b] = this.makeVBO(g, c, a, f, d, e)
        }
        return this.cache[g][b]
    }
};
Magi.Geometry.Ring = {
    makeXZQuad: function (a, g, f, b, d, e, c) {
        c.push(a, g, f);
        c.push(b, g, e);
        c.push(a, d, f);
        c.push(b, g, e);
        c.push(b, d, e);
        c.push(a, d, f)
    },
    makeVBO: function (m, t, l, c, q) {
        var f = [],
            k = [],
            p = [];
        for (var j = 0; j < l; j++) {
            var b = j / l;
            var a = (j + 1) / l;
            var u = b * q;
            var r = a * q;
            var o = Math.cos(u);
            var n = Math.cos(r);
            var i = Math.sin(u);
            var h = Math.sin(r);
            for (var g = 0; g < c; g++) {
                var e = 2 * t * (-0.5 + g / c);
                var d = 2 * t * (-0.5 + (g + 1) / c);
                this.makeXZQuad(o, e, i, n, d, h, f);
                k.push(i, 0, -o);
                k.push(h, 0, -n);
                k.push(i, 0, -o);
                k.push(h, 0, -n);
                k.push(h, 0, -n);
                k.push(i, 0, -o);
                p.push(b, e);
                p.push(a, e);
                p.push(b, d);
                p.push(a, e);
                p.push(a, d);
                p.push(b, d)
            }
        }
        return new Magi.VBO(m, {
            size: 3,
            data: new Float32Array(f)
        }, {
            size: 3,
            data: new Float32Array(k)
        }, {
            size: 2,
            data: new Float32Array(p)
        })
    },
    cache: {},
    getCachedVBO: function (f, d, b, c, e) {
        d = d == null ? 0.1 : d;
        b = b || 256;
        c = c || 10;
        e = e == null ? Math.PI * 2 : e;
        var a = b + ":" + c + ":" + e + ":" + d;
        if (!this.cache[f]) {
            this.cache[f] = {}
        }
        if (!this.cache[f][a]) {
            this.cache[f][a] = this.makeVBO(f, d, b, c, e)
        }
        return this.cache[f][a]
    }
};
Magi.Motion = {
    makeBounce: function () {
        this.addFrameListener(function (a, b) {
            var c = 2 * Math.abs(Math.sin(a / 500));
            this.position[1] = c
        });
        return this
    },
    makeRotate: function (a) {
        a = a || 0.2;
        this.addFrameListener(function (b, c) {
            this.rotation.angle = (Math.PI * 2 * b / (1000 / a)) % (Math.PI * 2)
        });
        return this
    }
};
Magi.Node = Klass(Magi.Motion, {
    model: null,
    position: null,
    rotation: null,
    scaling: null,
    polygonOffset: null,
    scaleAfterRotate: false,
    depthMask: null,
    depthTest: null,
    display: true,
    transparent: false,
    id: null,
    parentNode: null,
    initialize: function (a) {
        this.model = a;
        this.absolutePosition = vec3.create();
        this.renderPasses = {
            normal: true
        };
        this.material = new Magi.Material();
        this.matrix = mat4.identity();
        this.normalMatrix = mat3.identity();
        this.rotation = {
            angle: 0,
            axis: vec3.create([0, 1, 0])
        };
        this.position = vec3.create([0, 0, 0]);
        this.scaling = vec3.create([1, 1, 1]);
        this.frameListeners = [];
        this.childNodes = [];
        this.afterTransformListeners = []
    },
    getNodeById: function (a) {
        var b = null;
        try {
            this.filterNodes(function (d) {
                if (d.id == a) {
                    b = d;
                    throw (null)
                }
            })
        } catch (c) {
            return b
        }
    },
    getNodesById: function (a) {
        return this.filterNodes(function (b) {
            return (b.id == a)
        })
    },
    getNodesByKlass: function (a) {
        return this.filterNodes(function (b) {
            return (b instanceof a)
        })
    },
    getNodesByMethod: function (a) {
        return this.filterNodes(function (b) {
            return b[a]
        })
    },
    getNodesByKeyValue: function (a, b) {
        return this.filterNodes(function (c) {
            return c[a] == b
        })
    },
    filterNodes: function (b) {
        var a = [];
        this.forEach(function (c) {
            if (b(c)) {
                a.push(c)
            }
        });
        return a
    },
    forEach: function (a) {
        a.call(this, this);
        this.childNodes.forEach(function (b) {
            b.forEach(a)
        })
    },
    setX: function (a) {
        this.position[0] = a;
        return this
    },
    setY: function (a) {
        this.position[1] = a;
        return this
    },
    setZ: function (a) {
        this.position[2] = a;
        return this
    },
    setPosition: function (a, c, b) {
        if (a.length != null) {
            vec3.set(a, this.position)
        } else {
            if (c == null) {
                vec3.set3(a, this.position)
            } else {
                this.position[0] = a;
                this.position[1] = c;
                if (b != null) {
                    this.position[2] = b
                }
            }
        }
        return this
    },
    setScale: function (a, c, b) {
        if (a.length != null) {
            vec3.set(a, this.scaling)
        } else {
            if (c == null) {
                vec3.set3(a, this.scaling)
            } else {
                this.scaling[0] = a;
                this.scaling[1] = c;
                if (b != null) {
                    this.scaling[2] = b
                }
            }
        }
        return this
    },
    setAngle: function (b) {
        this.rotation.angle = b;
        return this
    },
    setAxis: function (a, c, b) {
        if (a.length != null) {
            vec3.set(a, this.rotation.axis)
        } else {
            if (c == null) {
                vec3.set3(a, this.rotation.axis)
            } else {
                this.rotation.axis[0] = a;
                this.rotation.axis[1] = c;
                if (b != null) {
                    this.rotation.axis[2] = b
                }
            }
        }
        return this
    },
    draw: function (h, b, k) {
        if (!this.model || !this.display) {
            return
        }
        if (this.material) {
            this.material.apply(h, b, k, this.matrix, this.normalMatrix)
        }
        if (this.model.gl == null) {
            this.model.gl = h
        }
        var j = b.blendFuncSrc;
        var g = b.blendFuncDst;
        var f = b.depthMask;
        var c = b.depthTest;
        var a = b.polygonOffset;
        var d = b.blend;
        var l = b.cullFace;
        if (this.polygonOffset) {
            h.polygonOffset(this.polygonOffset.factor, this.polygonOffset.units)
        }
        if (this.depthMask != null && this.depthMask != b.depthMask) {
            h.depthMask(this.depthMask)
        }
        if (this.depthTest != null && this.depthTest != b.depthTest) {
            if (this.depthTest) {
                h.enable(h.DEPTH_TEST)
            } else {
                h.disable(h.DEPTH_TEST)
            }
        }
        if (this.blendFuncSrc && this.blendFuncDst) {
            h.blendFunc(h[this.blendFuncSrc], h[this.blendFuncDst])
        }
        if (this.blend != null && this.blend != b.blend) {
            if (this.blend) {
                h.enable(h.BLEND)
            } else {
                h.disable(h.BLEND)
            }
        }
        if (this.cullFace != null && this.cullFace != b.cullFace) {
            h.enable(h.CULL_FACE);
            h.cullFace(h[this.cullFace])
        }
        if (this.model.attributes) {
            if (!this.model.attributeIdxs) {
                this.model.attributeIdxs = []
            }
            for (var e = 0; e < this.model.attributes.length; e++) {
                this.model.attributeIdxs[e] = b.currentShader.attrib(this.model.attributes[e])
            }
            this.model.draw.apply(this.model, this.model.attributeIdxs)
        } else {
            this.model.draw(b.currentShader.attrib("Vertex"), b.currentShader.attrib("Normal"), b.currentShader.attrib("TexCoord"))
        } if (this.cullFace != null && this.cullFace != b.cullFace) {
            if (l) {
                h.cullFace(h[l])
            } else {
                h.disable(h.CULL_FACE)
            }
        }
        if (this.blend != null && this.blend != b.blend) {
            if (d) {
                h.enable(h.BLEND)
            } else {
                h.disable(h.BLEND)
            }
        }
        if (this.blendFuncSrc && this.blendFuncDst) {
            h.blendFunc(h[j], h[g])
        }
        if (this.depthTest != null && this.depthTest != b.depthTest) {
            if (c) {
                h.enable(h.DEPTH_TEST)
            } else {
                h.disable(h.DEPTH_TEST)
            }
        }
        if (this.depthMask != null && this.depthMask != b.depthMask) {
            h.depthMask(f)
        }
        if (this.polygonOffset) {
            h.polygonOffset(a.factor, a.units)
        }
    },
    addFrameListener: function (a) {
        this.frameListeners.push(a)
    },
    afterTransform: function (a) {
        this.afterTransformListeners.push(a)
    },
    update: function (d, e) {
        var b = [];
        for (var c = 0; c < this.frameListeners.length; c++) {
            b.push(this.frameListeners[c])
        }
        for (var c = 0; c < b.length; c++) {
            if (this.frameListeners.indexOf(b[c]) != -1) {
                b[c].call(this, d, e, this)
            }
        }
        for (var c = 0; c < this.childNodes.length; c++) {
            this.childNodes[c].parentNode = this;
            this.childNodes[c].update(d, e)
        }
    },
    appendChild: function (a) {
        this.childNodes.push(a);
        a.parentNode = this
    },
    removeChild: function (b) {
        var a = this.childNodes.indexOf(b);
        while (a != -1) {
            this.childNodes[a].parentNode = null;
            this.childNodes.splice(a, 1);
            a = this.childNodes.indexOf(b)
        }
        b.parentNode = null
    },
    removeSelf: function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this)
        }
    },
    updateTransform: function (f, d, g) {
        var a = this.matrix;
        mat4.set(f, a);
        var h = this.position;
        var e = this.scaling;
        var c = (e[0] != 1) || (e[1] != 1) || (e[2] != 1);
        if (h[0] || h[1] || h[2]) {
            mat4.translate(a, h)
        }
        if (this.scaleAfterRotate && c) {
            mat4.scale(a, e)
        }
        if (this.rotation.angle != 0) {
            mat4.rotate(a, this.rotation.angle, this.rotation.axis)
        }
        if (!this.scaleAfterRotate && c) {
            mat4.scale(a, e)
        }
        if (this.transform) {
            mat4.multiply(this.transform, a, a)
        }
        if (this.isBillboard) {
            mat4.billboard(a)
        }
        mat4.toInverseMat3(a, this.normalMatrix);
        mat3.transpose(this.normalMatrix);
        this.absolutePosition[0] = a[12];
        this.absolutePosition[1] = a[13];
        this.absolutePosition[2] = a[14];
        for (var b = 0; b < this.afterTransformListeners.length; b++) {
            this.afterTransformListeners[b].call(this, a, d, g)
        }
        for (var b = 0; b < this.childNodes.length; b++) {
            this.childNodes[b].updateTransform(a, d, g)
        }
    },
    getWorldPosition: function (a, b) {
        if (b == null) {
            b = vec3.create()
        }
        return vec3.sub(this.absolutePosition, a, b)
    },
    collectDrawList: function (a) {
        if (!a) {
            a = []
        }
        if (this.display) {
            a.push(this);
            for (var b = 0; b < this.childNodes.length; b++) {
                this.childNodes[b].collectDrawList(a)
            }
        }
        return a
    }
});
Magi.Material = Klass({
    initialize: function (a) {
        this.shader = a;
        this.textures = {};
        for (var b in this.textures) {
            delete this.textures[b]
        }
        this.floats = {};
        for (var b in this.floats) {
            delete this.floats[b]
        }
        this.ints = {};
        for (var b in this.ints) {
            delete this.ints[b]
        }
    },
    copyValue: function (c) {
        if (typeof c == "number") {
            return c
        }
        var b = new c.__proto__.constructor(c.length);
        for (var d = 0; d < c.length; d++) {
            b[d] = c[d]
        }
        return b
    },
    copy: function () {
        var a = new Magi.Material();
        for (var b in this.floats) {
            a.floats[b] = this.copyValue(this.floats[b])
        }
        for (var b in this.ints) {
            a.ints[b] = this.copyValue(this.ints[b])
        }
        for (var b in this.textures) {
            a.textures[b] = this.textures[b]
        }
        a.shader = this.shader;
        return a
    },
    apply: function (f, c, d, b, e) {
        var a = this.shader;
        if (a && a.gl == null) {
            a.gl = f
        }
        if (c.currentShader != a) {
            a.use();
            a.uniformMatrix4fv("PMatrix", d);
            Magi.Stats.uniformSetCount++;
            c.currentShader = this.shader;
            Magi.Stats.shaderBindCount++
        }
        c.currentShader.uniformMatrix4fv("MVMatrix", b);
        c.currentShader.uniformMatrix3fv("NMatrix", e);
        Magi.Stats.uniformSetCount += 2;
        if (c.currentMaterial == this) {
            return
        }
        c.currentMaterial = this;
        Magi.Stats.materialUpdateCount++;
        this.applyTextures(f, c);
        this.applyFloats();
        this.applyInts()
    },
    applyTextures: function (e, d) {
        var a = 0;
        for (var c in this.textures) {
            var b = this.textures[c];
            if (!b) {
                b = Magi.Texture.getDefaultTexture(e)
            }
            if (b.gl == null) {
                b.gl = e
            }
            if (d.textures[a] != b) {
                d.textures[a] = b;
                e.activeTexture(e.TEXTURE0 + a);
                b.use();
                Magi.Stats.textureSetCount++
            }
            this.shader.uniform1i(c, a);
            Magi.Stats.uniformSetCount++;
            ++a
        }
    },
    cmp: function (d, c) {
        var f = false;
        if (d && c && d.length && c.length) {
            if (d.length == c.length) {
                f = true;
                for (var e = 0; e < d.length; e++) {
                    f = f && (d[e] == c[e])
                }
            }
        } else {
            f = d == c
        }
        return f
    },
    cloneVec: function (b, c) {
        if (!c || c.length != b.length) {
            c = new b.constructor(b.length)
        }
        for (var a = 0; a < b.length; a++) {
            c[a] = b[a]
        }
        return c
    },
    applyFloats: function () {
        var a = this.shader;
        for (var b in this.floats) {
            var d = this.floats[b];
            var c = a.uniform(b);
            if (this.cmp(c.current, d)) {
                continue
            }
            if (d.length) {
                c.current = this.cloneVec(d, c.current)
            } else {
                c.current = d
            }
            Magi.Stats.uniformSetCount++;
            if (d.length == null) {
                a.uniform1f(b, d)
            } else {
                switch (d.length) {
                case 4:
                    a.uniform4fv(b, d);
                    break;
                case 3:
                    a.uniform3fv(b, d);
                    break;
                case 16:
                    a.uniformMatrix4fv(b, d);
                    break;
                case 9:
                    a.uniformMatrix3fv(b, d);
                    break;
                case 2:
                    a.uniform2fv(b, d);
                    break;
                default:
                    a.uniform1fv(b, d)
                }
            }
        }
    },
    applyInts: function () {
        var a = this.shader;
        for (var b in this.ints) {
            var d = this.ints[b];
            var c = a.uniform(b);
            if (this.cmp(c.current, d)) {
                continue
            }
            if (d.length) {
                c.current = this.cloneVec(d, c.current)
            } else {
                c.current = d
            }
            Magi.Stats.uniformSetCount++;
            if (d.length == null) {
                a.uniform1i(b, d)
            } else {
                switch (d.length) {
                case 4:
                    a.uniform4iv(b, d);
                    break;
                case 3:
                    a.uniform3iv(b, d);
                    break;
                case 2:
                    a.uniform2iv(b, d);
                    break;
                default:
                    a.uniform1iv(b, d)
                }
            }
        }
    }
});
Magi.GLDrawState = Klass({
    textures: null,
    currentMaterial: null,
    currentShader: null,
    polygonOffset: null,
    blendFuncSrc: "ONE",
    blendFuncDst: "ONE_MINUS_SRC_ALPHA",
    depthMask: true,
    depthTest: true,
    blend: true,
    initialize: function () {
        this.polygonOffset = {
            factor: 0,
            units: 0
        }, this.textures = []
    }
});
Magi.Camera = Klass({
    fov: 30,
    targetFov: 30,
    zNear: 1,
    zFar: 10000,
    useLookAt: true,
    ortho: false,
    stereo: false,
    stereoSeparation: 0.025,
    renderPass: "normal",
    blend: true,
    blendFuncSrc: "ONE",
    blendFuncDst: "ONE_MINUS_SRC_ALPHA",
    useProjectionMatrix: false,
    initialize: function () {
        this.position = vec3.create([0, 0, 10]);
        this.lookAt = vec3.create([0, 0, 0]);
        this.up = vec3.create([0, 1, 0]);
        this.matrix = mat4.create();
        this.perspectiveMatrix = mat4.create();
        this.frameListeners = [];
        this.afterTransformListeners = []
    },
    addFrameListener: Magi.Node.prototype.addFrameListener,
    update: function (d, e) {
        var b = [];
        for (var c = 0; c < this.frameListeners.length; c++) {
            b.push(this.frameListeners[c])
        }
        for (var c = 0; c < b.length; c++) {
            if (this.frameListeners.indexOf(b[c]) != -1) {
                b[c].call(this, d, e, this)
            }
        }
        if (this.targetFov && this.fov != this.targetFov) {
            this.fov += (this.targetFov - this.fov) * (1 - Math.pow(0.7, (e / 30)))
        }
    },
    afterTransform: function (a) {
        this.afterTransformListeners.push(a)
    },
    getLookMatrix: function () {
        if (this.useLookAt && !this.useProjectionMatrix) {
            mat4.lookAt(this.position, this.lookAt, this.up, this.matrix)
        } else {
            mat4.identity(this.matrix)
        }
        return this.matrix
    },
    moveTo: function (a) {
        var b = vec3.create();
        vec3.sub(a, this.lookAt, b);
        vec3.add(this.lookAt, b);
        vec3.add(this.position, b)
    },
    setDistance: function (b) {
        var a = vec3.create();
        vec3.sub(this.position, this.lookAt, a);
        vec3.scale(a, b / vec3.length(a));
        vec3.add(this.lookAt, a, this.position)
    },
    multiplyDistance: function (b) {
        var a = vec3.create();
        vec3.sub(this.position, this.lookAt, a);
        vec3.scale(a, b);
        vec3.add(this.lookAt, a, this.position)
    },
    drawViewport: function (g, l, k, a, m, f, o, c) {
        g.enable(g.SCISSOR_TEST);
        g.viewport(l, k, a, m);
        g.scissor(l, k, a, m);
        f.updateTransform(mat4.identity(), o, c);
        for (var e = 0; e < this.afterTransformListeners.length; e++) {
            this.afterTransformListeners[e].call(this, this.perspectiveMatrix, o, c)
        }
        if (!this.useProjectionMatrix) {
            if (this.ortho) {
                mat4.ortho(l, a, -m, -k, this.zNear, this.zFar, this.perspectiveMatrix)
            } else {
                mat4.perspective(this.fov, a / m, this.zNear, this.zFar, this.perspectiveMatrix)
            }
        }
        mat4.multiply(this.perspectiveMatrix, this.getLookMatrix());
        var n = new Magi.GLDrawState();
        this.resetState(g, n);
        var o = new Date();
        var h = f.collectDrawList();
        var b = [];
        for (var e = 0; e < h.length; e++) {
            var j = h[e];
            if (!j.renderPasses[this.renderPass]) {
                continue
            }
            if (j.transparent) {
                b.push(j)
            } else {
                j.draw(g, n, this.perspectiveMatrix)
            }
        }
        this.normalDrawTime = new Date() - o;
        b.stableSort(function (i, d) {
            return i.matrix[14] - d.matrix[14]
        });
        var n = new Magi.GLDrawState();
        this.resetState(g, n);
        g.depthMask(false);
        n.depthMask = false;
        for (var e = 0; e < b.length; e++) {
            var j = b[e];
            j.draw(g, n, this.perspectiveMatrix)
        }
        g.depthMask(true);
        this.transparentDrawTime = new Date() - o - this.normalDrawTime;
        g.disable(g.SCISSOR_TEST);
        this.drawTime = new Date() - o
    },
    resetState: function (b, a) {
        b.depthFunc(b.LESS);
        b.disable(b.CULL_FACE);
        b.cullFace(b.BACK);
        b.frontFace(b.CCW);
        b.enable(b.DEPTH_TEST);
        a.depthTest = true;
        if (this.blendFuncSrc && this.blendFuncDst) {
            a.blendFuncSrc = this.blendFuncSrc;
            a.blendFuncDst = this.blendFuncDst;
            b.blendFunc(b[this.blendFuncSrc], b[this.blendFuncDst])
        }
        if (this.blend) {
            b.enable(b.BLEND)
        } else {
            b.disable(b.BLEND)
        }
        a.blend = this.blend;
        b.depthMask(true);
        a.depthMask = true
    },
    draw: function (h, c, e, g, b, d) {
        if (this.stereo) {
            var f = vec3.create(this.position);
            var a = vec3.create();
            vec3.subtract(this.lookAt, f, a);
            vec3.cross(this.up, a, a);
            vec3.scale(a, this.stereoSeparation / 2, a);
            vec3.subtract(f, a, this.position);
            this.drawViewport(h, 0, 0, c / 2, e, g, b, d);
            vec3.add(f, a, this.position);
            this.drawViewport(h, c / 2, 0, c / 2, e, g, b, d);
            vec3.set(f, this.position)
        } else {
            this.drawViewport(h, 0, 0, c, e, g, b, d)
        }
    }
});
Magi.Scene = Klass({
    frameDuration: 13,
    time: 0,
    timeDir: 1,
    timeSpeed: 1,
    previousTime: 0,
    frameTimes: [],
    fpsCanvas: null,
    bg: [1, 1, 1, 1],
    clear: true,
    paused: false,
    showStats: false,
    supersample: 2,
    initialize: function (b, d, c, a) {
        if (!d) {
            d = new Magi.Node()
        }
        if (!c) {
            c = Magi.Scene.getDefaultCamera()
        }
        if (b.tagName == "CANVAS") {
            this.canvas = b;
            var e = {
                alpha: true,
                depth: true,
                stencil: true,
                antialias: false,
                premultipliedAlpha: true
            };
            if (a) {
                Object.extend(e, a)
            }
            this.gl = Magi.getGLContext(b, e);
            this.fbo = new Magi.FBO(this.gl, b.width * this.supersample, b.height * this.supersample, true)
        } else {
            this.fbo = b;
            this.gl = this.fbo.gl
        }
        this.idFilter = new Magi.IdFilter();
        this.postFBO1 = new Magi.FBO(this.gl, 1, 1, false);
        this.postFBO2 = new Magi.FBO(this.gl, 1, 1, false);
        this.preEffects = [];
        this.postEffects = [];
        this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT;
        this.scene = d;
        this.root = d;
        this.camera = c;
        this.mouse = {
            x: 0,
            y: 0,
            pressure: 1,
            tiltX: 0,
            tiltY: 0,
            deviceType: 0,
            left: false,
            middle: false,
            right: false
        };
        this.setupEventListeners();
        if (this.canvas) {
            this.startFrameLoop()
        }
    },
    getDefaultCamera: function () {
        var a = new Magi.Camera();
        vec3.set([0, 0, 0], a.lookAt);
        vec3.set([0, 0, 10], a.position);
        a.fov = 45;
        a.angle = 1;
        return a
    },
    startFrameLoop: function () {
        this.previousTime = new Date;
        clearInterval(this.drawInterval);
        var a = this;
        this.drawInterval = setInterval(function () {
            a.draw()
        }, this.frameDuration)
    },
    updateMouse: function (a) {
        this.mouse.deviceType = a.mozDeviceType || 0;
        this.mouse.tiltX = a.mozTiltX || 0;
        this.mouse.tiltY = a.mozTiltY || 0;
        this.mouse.pressure = a.mozPressure || 0;
        this.mouse.x = a.clientX;
        this.mouse.y = a.clientY
    },
    setupEventListeners: function () {
        var a = this;
        window.addEventListener("mousedown", function (b) {
            switch (b.button) {
            case Mouse.LEFT:
                a.mouse.left = true;
                break;
            case Mouse.RIGHT:
                a.mouse.right = true;
                break;
            case Mouse.MIDDLE:
                a.mouse.middle = true;
                break
            }
            a.updateMouse(b)
        }, false);
        window.addEventListener("mouseup", function (b) {
            switch (b.button) {
            case Mouse.LEFT:
                a.mouse.left = false;
                break;
            case Mouse.RIGHT:
                a.mouse.right = false;
                break;
            case Mouse.MIDDLE:
                a.mouse.middle = false;
                break
            }
            a.updateMouse(b)
        }, false);
        window.addEventListener("mousemove", function (b) {
            a.updateMouse(b)
        }, false)
    },
    draw: function (d, g) {
        if (this.paused) {
            return
        }
        d = d == null ? new Date() : d;
        g = g == null ? d - this.previousTime : g;
        var c = this.timeDir * this.timeSpeed * g;
        this.time += c;
        this.previousTime = d;
        this.frameTime = g;
        this.camera.update(this.time, c);
        this.scene.update(this.time, c);
        var b = new Date();
        this.updateTime = b - d;
        if (this.drawOnlyWhenChanged && !this.changed) {
            return
        }
        if (this.canvas) {
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.fbo.resize(this.width * this.supersample, this.height * this.supersample)
        } else {
            this.width = this.fbo.width;
            this.height = this.fbo.height
        }
        this.fbo.use();
        if (this.clear) {
            this.gl.depthMask(true);
            this.gl.clearColor(this.bg[0], this.bg[1], this.bg[2], this.bg[3]);
            this.gl.clear(this.clearBits);
            Magi.throwError(this.gl, "clear")
        }
        if (this.preEffects.length > 0) {
            this.drawEffects(this.fbo, this.preEffects, this.fbo.texture, b, c)
        }
        var e = this.canvas ? this.supersample : 1;
        this.camera.draw(this.gl, this.width * e, this.height * e, this.root, b, c);
        if (this.canvas) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.depthMask(true);
            this.gl.clearColor(0, 0, 0, 0);
            this.gl.clear(this.clearBits);
            Magi.throwError(this.gl, "clear")
        }
        this.drawEffects(this.canvas || this.fbo, this.postEffects, this.fbo.texture, b, c);
        this.drawTime = new Date() - b;
        this.updateFps(this.frameTimes, g);
        if (!this.firstFrameDoneTime) {
            this.firstFrameDoneTime = new Date()
        }
        this.changed = false;
        Magi.throwError(this.gl, "Scene draw loop");
        if (this.showStats) {
            var a = E.byId("stats");
            if (a) {
                Magi.Stats.print(a);
                Magi.Stats.reset()
            }
        }
    },
    drawEffects: function (a, h, j, k, b) {
        if (h.length == 0 && j == a.texture) {
            return
        }
        var c = this.postFBO1;
        var g = this.postFBO2;
        c.resize(a.width, a.height);
        g.resize(a.width, a.height);
        for (var f = 0; f < h.length; f++) {
            g.use();
            var d = h[f];
            d.material.textures.Texture0 = j;
            j = g.texture;
            this.camera.draw(this.gl, g.width, g.height, d, k, b);
            var e = c;
            c = g;
            g = e
        }
        if (a.tagName) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
        } else {
            a.use()
        }
        this.idFilter.material.textures.Texture0 = j;
        this.camera.draw(this.gl, a.width, a.height, this.idFilter)
    },
    updateFps: function (f, e) {
        var d = this.fpsCanvas || document.getElementById("fps");
        if (!d) {
            return
        }
        var a = d.getContext("2d");
        a.clearRect(0, 0, d.width, d.height);
        var c = d.height;
        f.push(1000 / (1 + e));
        if (f.length > 1000) {
            f.splice(200)
        }
        var g = Math.max(0, f.length - 200);
        for (var b = g; b < f.length; b++) {
            a.fillRect(b - g, c, 1, -f[b] / 3)
        }
    },
    useDefaultCameraControls: function (c) {
        var i = this;
        c = c || this.canvas;
        var e = new Magi.Node();
        vec3.set([1, 0, 0], e.rotation.axis);
        var h = new Magi.Node();
        vec3.set([0, 1, 0], h.rotation.axis);
        e.appendChild(h);
        this.root = e;
        this.yRot = e;
        this.xRot = h;
        this.root = this.scene;
        var d = function (j) {
            var k = (j.detail < 0 || j.wheelDelta > 0) ? (1 / 1.25) : 1.25;
            if (j.shiftKey) {
                i.camera.targetFov *= k
            } else {
                i.camera.multiplyDistance(k)
            }
            i.changed = true;
            j.preventDefault()
        };
        i.camera.addFrameListener(function () {
            if (Math.abs(this.targetFov - this.fov) > 0.01) {
                i.changed = true
            }
        });
        c.addEventListener("DOMMouseScroll", d, false);
        c.addEventListener("mousewheel", d, false);
        c.addEventListener("mousedown", function (j) {
            i.dragging = true;
            i.sx = j.clientX;
            i.sy = j.clientY;
            j.preventDefault()
        }, false);
        window.addEventListener("mousemove", function (o) {
            if (i.dragging) {
                var m = o.clientX - i.sx,
                    k = o.clientY - i.sy;
                i.sx = o.clientX, i.sy = o.clientY;
                if (i.mouse.left) {
                    h.rotation.angle += m / 200;
                    e.rotation.angle += k / 200
                } else {
                    if (i.mouse.middle) {
                        e.position[0] += m * 0.01 * (i.camera.fov / 45);
                        e.position[1] -= k * 0.01 * (i.camera.fov / 45)
                    }
                }
                var p = h.rotation.angle;
                var j = e.rotation.angle;
                var n = vec3.distance(i.camera.lookAt, i.camera.position);
                var l = vec3.scale(vec3.normalize(vec3.create(Math.cos(p), Math.sin(j), Math.sin(p))), n);
                vec3.add(l, i.camera.lookAt, i.camera.position);
                o.preventDefault();
                i.changed = true
            }
        }, false);
        window.addEventListener("mouseup", function (j) {
            if (i.dragging) {
                i.dragging = false;
                j.preventDefault()
            }
        }, false);
        var b = h.rotation.angle;
        var f = e.rotation.angle;
        var a = vec3.distance(i.camera.lookAt, i.camera.position);
        var g = vec3.scale(vec3.normalize(vec3.create(Math.cos(b), Math.sin(f), Math.sin(b))), a);
        vec3.add(g, i.camera.lookAt, i.camera.position);
        i.changed = true
    }
});
Magi.UberShader = Klass({
    initialize: function (b, a) {
        this.verts = b;
        this.frags = a;
        this.shaderCache = []
    },
    build: function (m, k) {
        var d = [];
        for (var e in k) {
            d.push("#define " + e + " " + k[e])
        }
        d.sort();
        var c = m.join("�") + "�" + d.join("�");
        if (!this.shaderCache[c]) {
            var a = [];
            var b = [];
            for (var e = 0; e < m.length; e++) {
                var l = this.verts[m[e]];
                if (l) {
                    a.push(l)
                }
                var g = this.frags[m[e]];
                if (g) {
                    b.push(g)
                }
            }
            var j = d.join("\n") + "\n";
            var o = j + a.join("\n");
            var h = j + b.join("\n");
            var n = new Magi.Shader(null, {
                type: "VERTEX_SHADER",
                text: o
            }, {
                type: "FRAGMENT_SHADER",
                text: h
            });
            this.shaderCache[c] = n
        }
        return this.shaderCache[c]
    }
});
Magi.Cube = Klass(Magi.Node, {
    initialize: function () {
        Magi.Node.initialize.call(this, Magi.Geometry.Cube.getCachedVBO());
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.CubeArray = Klass(Magi.Node, {
    initialize: function () {
        Magi.Node.initialize.call(this, Magi.Geometry.CubeArray.getCachedVBO());
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.Ring = Klass(Magi.Node, {
    initialize: function (c, d, a, b) {
        Magi.Node.initialize.call(this, Magi.Geometry.Ring.getCachedVBO(null, c, a, b, d));
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.Sphere = Klass(Magi.Node, {
    initialize: function (a, b, c) {
        Magi.Node.initialize.call(this, Magi.Geometry.Sphere.getCachedVBO(null, a, b, c));
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.Disk = Klass(Magi.Node, {
    initialize: function (b, a, e, c, d) {
        Magi.Node.initialize.call(this, Magi.Geometry.Disk.getCachedVBO(null, b, a, e, c, d));
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.Quad = Klass(Magi.Node, {
    initialize: function (a) {
        Magi.Node.initialize.call(this, Magi.Geometry.Quad.getCachedVBO());
        this.material = Magi.DefaultMaterial.get()
    }
});
Magi.FilterQuad = Klass(Magi.Node, {
    identityTransform: true,
    depthMask: false,
    initialize: function (a) {
        Magi.Node.initialize.call(this, Magi.Geometry.Quad.getCachedVBO());
        this.material = Magi.FilterQuadMaterial.make(null, a)
    }
});
Magi.FlipFilterQuad = Klass(Magi.Node, {
    identityTransform: true,
    depthMask: false,
    initialize: function (a) {
        Magi.Node.initialize.call(this, Magi.Geometry.Quad.getCachedVBO());
        this.material = Magi.FlipFilterQuadMaterial.make(null, a)
    }
});
Magi.ColorQuad = Klass(Magi.Node, {
    initialize: function (f, e, c, d) {
        Magi.Node.initialize.call(this, Magi.Geometry.Quad.getCachedVBO());
        this.material = Magi.ColorQuadMaterial.get(null);
        this.transparent = this.a < 1;
        this.material.floats.Color = vec4.create([f, e, c, d])
    }
});
Magi.RadialGlowFilter = Klass(Magi.FilterQuad, {
    initialize: function () {
        Magi.FilterQuad.initialize.call(this);
        this.material = Magi.RadialGlowMaterial.get()
    }
});
Magi.FlipRadialGlowFilter = Klass(Magi.FilterQuad, {
    initialize: function () {
        Magi.FilterQuad.initialize.call(this);
        this.material = Magi.FlipRadialGlowMaterial.get()
    }
});
Magi.IdFilter = Klass(Magi.FilterQuad, {
    initialize: function () {
        Magi.FilterQuad.initialize.call(this);
        this.material = Magi.IdFilterMaterial.get()
    }
});
Magi.Alignable = {
    leftAlign: 1,
    rightAlign: -1,
    topAlign: -1,
    bottomAlign: 1,
    centerAlign: 0,
    align: 0,
    valign: 0,
    alignQuad: function (c, a, b) {
        c.position[0] = this.align * a / 2;
        c.position[1] = this.valign * b / 2
    },
    updateAlign: function () {
        this.alignQuad(this.alignedNode, this.width, this.height)
    },
    setAlign: function (b, a) {
        this.align = b;
        if (a != null) {
            this.valign = a
        }
        this.updateAlign();
        return this
    },
    setVAlign: function (a) {
        this.valign = a;
        this.updateAlign();
        return this
    }
};
Magi.Image = Klass(Magi.Node, Magi.Alignable, {
    initialize: function (b, a) {
        Magi.Node.initialize.call(this);
        this.alignedNode = new Magi.Node(Magi.Geometry.Quad.getCachedVBO());
        this.alignedNode.material = a ? Magi.FlipFilterMaterial.get() : Magi.FilterMaterial.get();
        this.alignedNode.transparent = true;
        this.appendChild(this.alignedNode);
        this.setTexture(new Magi.Texture());
        this.texture.generateMipmaps = false;
        if (b) {
            this.setImage(b)
        }
    },
    setTexture: function (a) {
        if (a != this.texture) {
            if (this.texture) {
                this.texture.destroy()
            }
            this.texture = a;
            this.alignedNode.material.textures.Texture0 = this.texture
        }
        return this
    },
    setSize: function (a) {
        this.size = a;
        if (this.image && this.image.tagName && Object.isImageLoaded(this.image)) {
            this.reposition()
        }
        return this
    },
    reposition: function () {
        var a = this.image.width,
            b = this.image.height;
        if (this.size != null) {
            var c = Math.min(this.size / a, this.size / b);
            a = (a * c);
            b = (b * c)
        }
        this.width = a;
        this.height = b;
        this.alignedNode.scaling[0] = a / 2;
        this.alignedNode.scaling[1] = b / 2;
        this.updateAlign()
    },
    setImage: function (c) {
        var b = c;
        if (typeof c == "string") {
            b = new Image();
            b.src = c
        }
        if (this.image && this.image.__imageLoadHandler) {
            this.image.removeEventListener("load", this.image.__imageLoadHandler, false)
        }
        this.image = b;
        if (b.tagName && !Object.isImageLoaded(b)) {
            var a = this;
            b.__imageLoadHandler = function () {
                if (a.image == this) {
                    a.setImage(this)
                }
            };
            b.addEventListener("load", b.__imageLoadHandler, false)
        }
        this.image.width;
        this.reposition();
        if (this.image instanceof Magi.Texture) {
            this.setTexture(this.image)
        } else {
            this.texture.image = this.image;
            this.texture.changed = true
        }
        return this
    }
});
Magi.Text = Klass(Magi.Image, Magi.Alignable, {
    fontSize: 24,
    font: "Arial",
    color: "black",
    initialize: function (c, d, b, a) {
        this.canvas = E.canvas(1, 1);
        Magi.Image.initialize.call(this, this.canvas);
        if (d) {
            this.fontSize = d
        }
        if (a) {
            this.font = a
        }
        if (b) {
            this.color = b
        }
        this.setText(c)
    },
    setText: function (d) {
        this.text = d;
        var a = this.canvas.getContext("2d");
        var b = this.fontSize + "px " + this.font;
        a.font = b;
        var c = a.measureText(d);
        this.canvas.width = Math.max(1, Math.min(2048, c.width));
        this.canvas.height = Math.max(1, Math.min(2048, Math.ceil(this.fontSize * 1.2)));
        var a = this.canvas.getContext("2d");
        a.font = b;
        a.clearRect(0, 0, this.canvas.width, this.canvas.height);
        a.fillStyle = this.color;
        a.fillText(this.text, 0, this.fontSize);
        this.setImage(this.canvas);
        return this
    },
    setFontSize: function (a) {
        this.fontSize = a;
        this.setText(this.text);
        return this
    },
    setFont: function (a) {
        this.font = a;
        this.setText(this.text);
        return this
    },
    setColor: function (a) {
        this.color = a;
        this.setText(this.text);
        return this
    },
});
Magi.MeshText = Klass(Magi.Text, {
    initialize: function (c, d, b, a) {
        Magi.Text.initialize.apply(this, arguments);
        this.alignedNode.model = Magi.Geometry.QuadMesh.getCachedVBO(null, 20, 100)
    }
});
Magi.MeshImage = Klass(Magi.Image, {
    initialize: function (a) {
        Magi.Image.initialize.apply(this, arguments);
        this.alignedNode.model = Magi.Geometry.QuadMesh.getCachedVBO()
    }
});
Magi.CubeText = Klass(Magi.Text, {
    initialize: function (c, d, b, a) {
        Magi.Text.initialize.apply(this, arguments);
        this.alignedNode.model = Magi.Geometry.CubeArray.getCachedVBO(null, 200, 24);
        this.alignedNode.material = Magi.CubeArrayMaterial.get();
        this.alignedNode.material.textures.Texture0 = this.texture
    },
    setText: function (a) {
        Magi.Text.setText.apply(this, arguments);
        this.alignedNode.material.floats.width = this.width;
        this.alignedNode.material.floats.height = this.height;
        return this
    }
});
Magi.ShaderLib = {
    defaultTransform: ("precision highp float;attribute vec3 Vertex;attribute vec2 TexCoord;uniform mat4 PMatrix;uniform mat4 MVMatrix;uniform mat3 NMatrix;varying vec2 texCoord0;vec4 transform(){  vec4 v = vec4(Vertex, 1.0);  vec4 worldPos = MVMatrix * v;  return PMatrix * worldPos;}vec2 texCoord(){ return TexCoord.st; }vec2 flipTexCoord(){ return vec2(TexCoord.s, 1.0-TexCoord.t); }void defaultTransform(){  gl_Position = transform();  texCoord0 = texCoord();}void defaultImageTransform(){  gl_Position = transform();  texCoord0 = flipTexCoord();}")
};
Magi.FilterMaterial = {
    vert: {
        type: "VERTEX_SHADER",
        text: (Magi.ShaderLib.defaultTransform + "void main(){  defaultImageTransform();}")
    },
    frag: {
        type: "FRAGMENT_SHADER",
        text: ("precision highp float;uniform sampler2D Texture0;uniform float offsetY;uniform float offsetX;varying vec2 texCoord0;void main(){  vec2 v = vec2(texCoord0.s/(1.0-offsetX), texCoord0.t/(1.0-offsetY));  vec4 c = texture2D(Texture0, v);  if (v.s < 0.0 || v.s > 1.0 || v.t < 0.0 || v.t > 1.0) c = vec4(0.0);  gl_FragColor = c*c.a;}")
    },
    make: function (c, b) {
        var a = new Magi.Filter(null, this.vert, b || this.frag);
        return this.setupMaterial(a)
    },
    get: function (a) {
        if (!this.cached) {
            this.cached = this.make(a)
        }
        return this.cached.copy()
    },
    setupMaterial: function (b) {
        var a = new Magi.Material(b);
        a.textures.Texture0 = null;
        return a
    }
};
Magi.FlipFilterMaterial = Object.clone(Magi.FilterMaterial);
Magi.FlipFilterMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "void main(){  defaultTransform();}")
};
Magi.FilterQuadMaterial = Object.clone(Magi.FilterMaterial);
Magi.FilterQuadMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "void main(){  vec4 v = vec4(Vertex, 1.0);  texCoord0 = texCoord();  gl_Position = v;}")
};
Magi.FlipFilterQuadMaterial = Object.clone(Magi.FilterMaterial);
Magi.FlipFilterQuadMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "void main(){  vec4 v = vec4(Vertex, 1.0);  texCoord0 = flipTexCoord();  gl_Position = v;}")
};
Magi.IdFilterMaterial = Object.clone(Magi.FilterQuadMaterial);
Magi.IdFilterMaterial.frag = {
    type: "FRAGMENT_SHADER",
    text: ("precision highp float;uniform sampler2D Texture0;varying vec2 texCoord0;void main(){  vec4 c = texture2D(Texture0, texCoord0);  gl_FragColor = c;}")
};
Magi.RadialGlowMaterial = Object.clone(Magi.FilterQuadMaterial);
Magi.RadialGlowMaterial.frag = {
    type: "FRAGMENT_SHADER",
    text: ("precision highp float;uniform sampler2D Texture0;varying vec2 texCoord0;uniform vec2 center;uniform float radius;uniform float currentFactor;uniform float intensity;uniform float falloff;void main(){  float samples = 15.0;  float len = length(center - texCoord0);  float rs = min(len,radius)/samples;  vec2 dir = rs * normalize(center - texCoord0);  vec4 c = currentFactor * texture2D(Texture0, texCoord0);  float d = intensity/10.0;  for (float r=1.0; r <= samples; r++) {    vec2 tc = texCoord0 + (r*dir);    vec4 pc = texture2D(Texture0, tc + rs);    c += pc*d;    d *= falloff;  }  gl_FragColor = c*c.a;}")
};
Magi.RadialGlowMaterial.setupMaterial = function (b) {
    var a = new Magi.Material(b);
    a.textures.Texture0 = null;
    a.floats.center = vec2.create(0.5, 0.5);
    a.floats.radius = 0.034;
    a.floats.intensity = 1;
    a.floats.falloff = 0.9;
    a.floats.currentFactor = 1;
    return a
};
Magi.FlipRadialGlowMaterial = Object.clone(Magi.RadialGlowMaterial);
Magi.FlipRadialGlowMaterial.vert = Magi.FlipFilterQuadMaterial.vert;
Magi.CubeArrayMaterial = Object.clone(Magi.FilterMaterial);
Magi.CubeArrayMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "uniform float width;uniform float height;varying vec2 texCoord0;float grid(float c, float sz){  return (0.5+floor(c*sz))/sz;}void main(){  texCoord0 = vec2(grid(TexCoord.s, width), grid(1.0-TexCoord.t, height));  if (texture2D(Texture0, texCoord0).a == 0.0) {    gl_Position = vec4(-3.0, -3.0, -3.0, 1.0);  } else {    gl_Position = transform();  }}")
};
Magi.ColorQuadMaterial = Object.clone(Magi.FilterMaterial);
Magi.ColorQuadMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "void main(){  vec4 v = vec4(Vertex, 1.0);  gl_Position = v;}")
};
Magi.ColorQuadMaterial.frag = {
    type: "FRAGMENT_SHADER",
    text: ("precision highp float;uniform vec4 Color;void main(){  gl_FragColor = Color;}")
};
Magi.ColorMaterial = Object.clone(Magi.FilterMaterial);
Magi.ColorMaterial.vert = {
    type: "VERTEX_SHADER",
    text: (Magi.ShaderLib.defaultTransform + "void main(){  gl_Position = transform();}")
};
Magi.ColorMaterial.frag = {
    type: "FRAGMENT_SHADER",
    text: ("precision highp float;uniform vec4 Color;void main(){  gl_FragColor = Color;}")
};
Magi.DefaultMaterial = {
    vert: {
        type: "VERTEX_SHADER",
        text: ("precision highp float;attribute vec3 Vertex;attribute vec3 Normal;attribute vec2 TexCoord;uniform mat4 PMatrix;uniform mat4 MVMatrix;uniform mat4 LightMatrix;uniform mat3 NMatrix;uniform float LightConstantAtt;uniform float LightLinearAtt;uniform float LightQuadraticAtt;uniform vec4 LightPos;varying vec3 normal, lightDir, eyeVec;varying vec2 texCoord0;varying float attenuation;void main(){  vec3 lightVector;  vec4 v = vec4(Vertex, 1.0);  texCoord0 = vec2(TexCoord.s, 1.0-TexCoord.t);  normal = normalize(NMatrix * Normal);  vec4 worldPos = MVMatrix * v;  vec4 lightWorldPos = LightMatrix * LightPos;  lightVector = vec3(lightWorldPos - worldPos);  lightDir = normalize(lightVector);  float dist = length(lightVector);  eyeVec = -vec3(worldPos);  attenuation = 1.0 / (1.0 + LightConstantAtt + LightLinearAtt*dist + LightQuadraticAtt * dist*dist);  gl_Position = PMatrix * worldPos;}")
    },
    frag: {
        type: "FRAGMENT_SHADER",
        text: ("precision highp float;uniform vec4 LightDiffuse;uniform vec4 LightSpecular;uniform vec4 LightAmbient;uniform vec4 MaterialSpecular;uniform vec4 MaterialDiffuse;uniform vec4 MaterialAmbient;uniform vec4 MaterialEmit;uniform vec4 GlobalAmbient;uniform float MaterialShininess;uniform sampler2D DiffTex, SpecTex, EmitTex;varying vec3 normal, lightDir, eyeVec;varying vec2 texCoord0;varying float attenuation;void main(){  vec4 color = GlobalAmbient * LightAmbient * MaterialAmbient;  vec4 matDiff = MaterialDiffuse + texture2D(DiffTex, texCoord0);  matDiff.a = 1.0 - (1.0-MaterialDiffuse.a) * (1.0-texture2D(DiffTex, texCoord0).a);  vec4 matSpec = MaterialSpecular + texture2D(SpecTex, texCoord0);  matSpec.a = 1.0 - (1.0-MaterialSpecular.a) * (1.0-texture2D(SpecTex, texCoord0).a);  vec4 diffuse = LightDiffuse * matDiff;  float lambertTerm = dot(normal, lightDir);  vec4 lcolor = diffuse * lambertTerm * attenuation;  vec3 E = normalize(eyeVec);  vec3 R = reflect(-lightDir, normal);  float specular = pow( max(dot(R, E), 0.0), MaterialShininess );  lcolor += matSpec * LightSpecular * specular * attenuation;  if (lambertTerm > 0.0) color += lcolor * lambertTerm;  else color += diffuse * attenuation * MaterialAmbient.a * -lambertTerm;  color += MaterialEmit + texture2D(EmitTex, texCoord0);  color *= matDiff.a;  color.a = matDiff.a;  gl_FragColor = color;}")
    },
    get: function (b) {
        if (!this.cached) {
            var a = new Magi.Shader(null, this.vert, this.frag);
            this.cached = this.setupMaterial(a)
        }
        var d = this.cached.copy();
        d.floats.LightMatrix = this.lightMatrix;
        return d
    },
    lightMatrix: mat4.identity(),
    setupMaterial: function (b) {
        var a = new Magi.Material(b);
        a.textures.DiffTex = a.textures.SpecTex = a.textures.EmitTex = null;
        a.floats.MaterialSpecular = vec4.create([1, 1, 1, 0]);
        a.floats.MaterialDiffuse = vec4.create([0.5, 0.5, 0.5, 1]);
        a.floats.MaterialAmbient = vec4.create([1, 1, 1, 0.3]);
        a.floats.MaterialEmit = vec4.create([0, 0, 0, 0]);
        a.floats.MaterialShininess = 1.5;
        a.floats.LightMatrix = this.lightMatrix;
        a.floats.LightPos = vec4.create([1, 1, 1, 1]);
        a.floats.GlobalAmbient = vec4.create([1, 1, 1, 1]);
        a.floats.LightSpecular = vec4.create([0.8, 0.8, 0.95, 1]);
        a.floats.LightDiffuse = vec4.create([0.7, 0.6, 0.9, 1]);
        a.floats.LightAmbient = vec4.create([0.1, 0.1, 0.2, 1]);
        a.floats.LightConstantAtt = 0;
        a.floats.LightLinearAtt = 0;
        a.floats.LightQuadraticAtt = 0;
        return a
    }
};
Magi.MultiMaterial = {
    frag: {
        type: Magi.DefaultMaterial.frag.type,
        text: Magi.DefaultMaterial.frag.text.replace(/uniform (\S+ Material)/g, "varying $1")
    },
    vert: {
        type: "VERTEX_SHADER",
        text: ("#define MAX_MATERIALS 4\nprecision highp float;precision highp int;struct material {  vec4 diffuse; vec4 specular; vec4 ambient; vec4 emit; float shininess;};attribute vec3 Vertex;attribute vec3 Normal;attribute vec2 TexCoord;attribute float MaterialIndex;uniform mat4 PMatrix;uniform mat4 MVMatrix;uniform mat4 LightMatrix;uniform mat3 NMatrix;uniform float LightConstantAtt;uniform float LightLinearAtt;uniform float LightQuadraticAtt;uniform vec4 LightPos;uniform material Material0;uniform material Material1;uniform material Material2;uniform material Material3;varying vec3 normal, lightDir, eyeVec;varying vec2 texCoord0;varying float attenuation;varying vec4 MaterialDiffuse;varying vec4 MaterialSpecular;varying vec4 MaterialAmbient;varying vec4 MaterialEmit;varying float MaterialShininess;void main(){  vec3 lightVector;  vec4 v = vec4(Vertex, 1.0);  texCoord0 = vec2(TexCoord.s, 1.0-TexCoord.t);  normal = normalize(NMatrix * Normal);  vec4 worldPos = MVMatrix * v;  vec4 lightWorldPos = LightMatrix * LightPos;  lightVector = vec3(lightWorldPos - worldPos);  lightDir = normalize(lightVector);  float dist = length(lightVector);  eyeVec = normalize(-vec3(worldPos));  attenuation = 1.0 / (1.0 + LightConstantAtt + LightLinearAtt*dist + LightQuadraticAtt * dist*dist);  gl_Position = PMatrix * worldPos;  float midx = MaterialIndex;  material mat = Material3;  if (midx == 0.0) mat = Material0;  if (midx == 1.0) mat = Material1;  if (midx == 2.0) mat = Material2;  MaterialDiffuse = mat.diffuse;  MaterialSpecular = mat.specular;  MaterialAmbient = mat.ambient;  MaterialEmit = mat.emit;  MaterialShininess = mat.shininess;}")
    },
    get: function (b) {
        if (!this.cached) {
            var a = new Magi.Shader(null, this.vert, this.frag);
            this.cached = this.setupMaterial(a)
        }
        var d = this.cached.copy();
        d.floats.LightMatrix = this.lightMatrix;
        return d
    },
    lightMatrix: mat4.identity(),
    setupMaterial: function (b) {
        var a = new Magi.Material(b);
        a.textures.DiffTex = a.textures.SpecTex = a.textures.EmitTex = null;
        a.floats.LightMatrix = this.lightMatrix;
        a.floats.LightPos = vec4.create([1, 1, 1, 1]);
        a.floats.GlobalAmbient = vec4.create([1, 1, 1, 1]);
        a.floats.LightSpecular = vec4.create([1, 1, 1, 1]);
        a.floats.LightDiffuse = vec4.create([1, 1, 1, 1]);
        a.floats.LightAmbient = vec4.create([0.1, 0.1, 0.1, 1]);
        a.floats.LightConstantAtt = 0;
        a.floats.LightLinearAtt = 0;
        a.floats.LightQuadraticAtt = 0;
        return a
    }
};
Magi.Tar = function () {};
Magi.Tar.load = function (b, e, a, c) {
    var d = new Magi.Tar();
    d.onload = e;
    d.onerror = c;
    d.onstream = a;
    d.load(b);
    return d
};
Magi.Tar.loadGZip = function (b, e, a, c) {
    var d = new Magi.Tar();
    d.onload = e;
    d.onerror = c;
    d.onstream = a;
    d.loadGZip(b);
    return d
};
Magi.Tar.stream = function (b, a, e, c) {
    var d = new Magi.Tar();
    d.onload = e;
    d.onerror = c;
    d.onstream = a;
    d.load(b);
    return d
};
Magi.Tar.streamGZip = function (b, a, e, c) {
    var d = new Tar();
    d.onload = e;
    d.onerror = c;
    d.onstream = a;
    d.loadGZip(b);
    return d
};
Magi.Tar.prototype = {
    onerror: null,
    onload: null,
    onstream: null,
    ondata: null,
    cleanupAfterLoad: true,
    initLoad: function () {
        this.byteOffset = 0;
        this.parseTime = 0;
        this.files = {};
        this.fileArray = []
    },
    onloadHandler: function (a) {
        this.byteOffset = this.processTarChunks(a.data, this.byteOffset, a.outputSize);
        if (this.cleanUpAfterLoad) {
            a.cleanup()
        }
        if (this.onload) {
            this.onload(this.files)
        }
    },
    onprogressHandler: function (a) {
        this.gzip = a;
        if (this.ondata) {
            this.ondata(a)
        }
        this.byteOffset = this.processTarChunks(a.data, this.byteOffset, a.outputSize)
    },
    onerrorHandler: function (c, b, a) {
        if (this.onerror) {
            this.onerror(c, b, a)
        }
    },
    loadGZip: function (b) {
        this.initLoad();
        var a = this;
        GZip.load(b, function (c) {
            a.onloadHandler(c)
        }, function (c) {
            a.onprogressHandler(c)
        }, function (f, d, c) {
            a.onerrorHandler(f, d, c)
        })
    },
    load: function (b) {
        var d = new XMLHttpRequest();
        this.initLoad();
        var a = this;
        var c = {
            data: [],
            inputSize: 0,
            outputSize: 0,
            offset: 0,
            xhr: d,
            cleanup: function () {
                delete this.data;
                delete this.xhr
            }
        };
        d.onload = function () {
            c.data[0] = this.responseText;
            c.inputSize = c.outputSize = c.offset = c.data[0].length;
            try {
                a.onloadHandler(c)
            } catch (f) {
                if (a.onerror) {
                    a.onerror(this, f, c)
                } else {
                    throw (f)
                }
            }
        };
        d.onprogress = function () {
            c.data[0] = this.responseText;
            c.inputSize = c.outputSize = c.offset = c.data[0].length;
            a.onprogressHandler(c)
        };
        d.open("GET", b, true);
        d.overrideMimeType("text/plain; charset=x-user-defined");
        d.setRequestHeader("Content-Type", "text/plain");
        d.send(null)
    },
    cleanHighByte: function (a) {
        return a.replace(/./g, function (b) {
            return String.fromCharCode(b.charCodeAt(0) & 255)
        })
    },
    parseTar: function (a) {
        this.initLoad();
        this.processTarChunks([a], 0, a.length)
    },
    processTarChunks: function (e, f, c) {
        var a = new Date();
        while (c >= f + 512) {
            var d = this.fileArray.length == 0 ? null : this.fileArray[this.fileArray.length - 1];
            if (d && d.data == null) {
                if (f + d.length <= c) {
                    d.data = this.chunkSubstring(e, f, f + d.length);
                    d.toDataURL = this.__toDataURL;
                    f += 512 * Math.ceil(d.length / 512);
                    if (this.onstream) {
                        this.onstream(d, this.gzip)
                    }
                } else {
                    break
                }
            } else {
                var b = this.chunkSubstring(e, f, f + 512);
                var d = this.parseTarHeader(b, 0);
                if (d.length > 0 || d.filename != "") {
                    this.fileArray.push(d);
                    this.files[d.filename] = d;
                    f += 512;
                    d.offset = f
                } else {
                    f = c
                }
            }
        }
        this.parseTime += new Date() - a;
        return f
    },
    parseTarHeader: function (d, c) {
        var a = c || 0;
        var b = {};
        b.filename = this.parseTarField(d, a, a += 100);
        b.mode = this.parseTarNumber(d, a, a += 8);
        b.uid = this.parseTarNumber(d, a, a += 8);
        b.gid = this.parseTarNumber(d, a, a += 8);
        b.length = this.parseTarNumber(d, a, a += 12);
        b.lastModified = this.parseTarNumber(d, a, a += 12);
        b.checkSum = this.parseTarField(d, a, a += 8);
        b.fileType = this.parseTarField(d, a, a += 1);
        b.linkName = this.parseTarField(d, a, a += 100);
        b.ustar = this.parseTarField(d, a, a += 6);
        b.ustarVersion = this.parseTarField(d, a, a += 2);
        b.userName = this.parseTarField(d, a, a += 32);
        b.groupName = this.parseTarField(d, a, a += 32);
        b.deviceMajor = this.parseTarField(d, a, a += 8);
        b.deviceMinor = this.parseTarField(d, a, a += 8);
        b.filenamePrefix = this.parseTarField(d, a, a += 155);
        return b
    },
    parseTarField: function (b, c, a) {
        return b.substring(c, a).split("\0", 1)[0]
    },
    parseTarNumber: function (c, d, a) {
        var b = c.substring(d, a);
        return parseInt("0" + b.replace(/[^\d]+/g, ""))
    },
    chunkSubstring: function (c, a, d) {
        var b = 0,
            h = 0,
            f = 0,
            e = 0;
        for (f = 0; f < c.length; f++) {
            if (b + c[f].length > a) {
                break
            }
            b += c[f].length
        }
        var g = [];
        h = b;
        for (e = f; e < c.length; e++) {
            g.push(c[e]);
            if (h + c[e].length > d) {
                break
            }
            h += c[e].length
        }
        var k = g.join("");
        return k.substring(a - b, a - b + (d - a))
    },
    __toDataURL: function () {
        if (this.data.substring(0, 40).match(/^data:[^\/]+\/[^,]+,/)) {
            return this.data
        } else {
            if (Magi.Tar.prototype.cleanHighByte(this.data.substring(0, 10)).match(/\377\330\377\340..JFIF/)) {
                return "data:image/jpeg;base64," + btoa(Magi.Tar.prototype.cleanHighByte(this.data))
            } else {
                if (Magi.Tar.prototype.cleanHighByte(this.data.substring(0, 6)) == "\211PNG\r\n") {
                    return "data:image/png;base64," + btoa(Magi.Tar.prototype.cleanHighByte(this.data))
                } else {
                    if (Magi.Tar.prototype.cleanHighByte(this.data.substring(0, 6)).match(/GIF8[79]a/)) {
                        return "data:image/gif;base64," + btoa(Magi.Tar.prototype.cleanHighByte(this.data))
                    } else {
                        throw ("toDataURL: I don't know how to handle " + this.filename)
                    }
                }
            }
        }
    }
};
Magi.Obj = function () {};
Magi.Obj.load = function (a) {
    var b = new Magi.Obj();
    b.load(a);
    return b
};
Magi.Obj.prototype = {
    load: function (b) {
        var c = new XMLHttpRequest();
        var a = this;
        a.loadStartTime = new Date();
        c.onreadystatechange = function () {
            if (c.readyState == 4) {
                if (c.status == 200 || c.status == 0) {
                    a.downloadTime = new Date() - a.loadStartTime;
                    a.parse(c.responseText);
                    if (a.onload) {
                        a.onload(c)
                    }
                } else {
                    if (a.onerror) {
                        a.onerror(c)
                    }
                }
            }
        };
        c.open("GET", b, true);
        c.overrideMimeType("text/plain; charset=x-user-defined");
        c.setRequestHeader("Content-Type", "text/plain");
        c.send(null)
    },
    onerror: function (a) {
        alert("Error: " + a.status)
    },
    makeVBO: function (a) {
        if (this.texcoords) {
            return new Magi.VBO(a, {
                size: 3,
                data: this.vertices
            }, {
                size: 3,
                data: this.normals
            }, {
                size: 2,
                data: this.texcoords
            })
        } else {
            return new Magi.VBO(a, {
                size: 3,
                data: this.vertices
            }, {
                size: 3,
                data: this.normals
            })
        }
    },
    cache: {},
    getCachedVBO: function (a) {
        if (!this.cache[a]) {
            this.cache[a] = this.makeVBO(a)
        }
        return this.cache[a]
    },
    parse: function (F) {
        var q = new Date;
        var G = [],
            k = [],
            C = [],
            c = [],
            h = [],
            g = [];
        var d = F.split("\n");
        var s = "#".charCodeAt(0);
        for (var A = 0; A < d.length; A++) {
            var u = d[A];
            var r = u.replace(/^\s+|\s+$/g, "").split(" ");
            if (r.length == 0) {
                continue
            }
            if (r[0].charCodeAt(0) == s) {
                continue
            }
            switch (r[0]) {
            case "g":
                break;
            case "v":
                c.push(parseFloat(r[1]));
                c.push(parseFloat(r[2]));
                c.push(parseFloat(r[3]));
                break;
            case "vn":
                h.push(parseFloat(r[1]));
                h.push(parseFloat(r[2]));
                h.push(parseFloat(r[3]));
                break;
            case "vt":
                g.push(parseFloat(r[1]));
                g.push(parseFloat(r[2]));
                break;
            case "f":
                var e = [];
                for (var w = 1, p; w < r.length; w++) {
                    if (w > 3) {
                        e.push(e[0]);
                        e.push(p)
                    }
                    p = r[w];
                    e.push(p)
                }
                for (var w = 0; w < e.length; w++) {
                    var B = e[w];
                    var D = B.split("/");
                    G.push(parseInt(D[0]) - 1);
                    if (D.length > 1) {
                        C.push(parseInt(D[1]) - 1)
                    }
                    if (D.length > 2) {
                        k.push(parseInt(D[2]) - 1)
                    }
                }
                break
            }
        }
        this.vertices = this.lookup_faces(c, G, 3);
        if (C.length > 0) {
            this.texcoords = this.lookup_faces(g, C, 2)
        }
        if (k.length > 0 && !this.overrideNormals) {
            this.normals = this.lookup_faces(h, k, 3)
        } else {
            this.normals = this.calculate_normals(this.vertices)
        }
        var b = {
            min: [0, 0, 0],
            max: [0, 0, 0]
        };
        for (var A = 0; A < c.length; A += 3) {
            var o = c[A],
                n = c[A + 1],
                m = c[A + 2];
            if (o < b.min[0]) {
                b.min[0] = o
            } else {
                if (o > b.max[0]) {
                    b.max[0] = o
                }
            } if (n < b.min[1]) {
                b.min[1] = n
            } else {
                if (n > b.max[1]) {
                    b.max[1] = n
                }
            } if (m < b.min[2]) {
                b.min[2] = m
            } else {
                if (m > b.max[2]) {
                    b.max[2] = m
                }
            }
        }
        b.width = b.max[0] - b.min[0];
        b.height = b.max[1] - b.min[1];
        b.depth = b.max[2] - b.min[2];
        b.diameter = Math.max(b.width, b.height, b.depth);
        this.boundingBox = b;
        this.parseTime = new Date() - q
    },
    lookup_faces: function (g, a, e) {
        var b = [];
        for (var d = 0; d < a.length; d++) {
            var f = a[d] * e;
            for (var c = 0; c < e; c++) {
                b.push(g[f + c])
            }
        }
        return b
    },
    calculate_normals: function (e) {
        var c = [];
        for (var b = 0; b < e.length; b += 9) {
            var d = this.find_normal(e[b], e[b + 1], e[b + 2], e[b + 3], e[b + 4], e[b + 5], e[b + 6], e[b + 7], e[b + 8]);
            for (var a = 0; a < 3; a++) {
                c.push(d[0]);
                c.push(d[1]);
                c.push(d[2])
            }
        }
        return c
    },
    find_normal: function (c, k, g, b, i, f, a, h, e) {
        var m = [c - b, k - i, g - f];
        var l = [b - a, i - h, f - e];
        var j = [a - c, h - k, e - g];
        var d = Vec3.cross(m, l);
        if (Vec3.lengthSquare(d) == 0) {
            d = Vec3.cross(l, j)
        }
        if (Vec3.lengthSquare(d) == 0) {
            d = Vec3.cross(j, m)
        }
        if (Vec3.lengthSquare(d) == 0) {
            d = [0, 0, 1]
        }
        return Vec3.normalize(d)
    }
};
Magi.Bin = function () {};
Magi.Bin.load = function (a, d, b) {
    var c = new Magi.Bin();
    if (d) {
        c.onload = d
    }
    if (b) {
        c.onerror = b
    }
    c.load(a);
    return c
};
Magi.Bin.prototype = {
    load: function (b) {
        var c = new XMLHttpRequest();
        var a = this;
        a.loadStartTime = new Date();
        c.onreadystatechange = function () {
            if (c.readyState == 4) {
                if (c.status == 200 || c.status == 0) {
                    a.downloadTime = new Date() - a.loadStartTime;
                    a.parse(c.responseText);
                    if (a.onload) {
                        a.onload(a, c)
                    }
                } else {
                    if (a.onerror) {
                        a.onerror(c)
                    }
                }
            }
        };
        c.open("GET", b, true);
        c.overrideMimeType("text/plain; charset=x-user-defined");
        c.setRequestHeader("Content-Type", "text/plain");
        c.send(null)
    },
    onerror: function (a) {
        alert("Error: " + a.status)
    },
    makeVBO: function (a) {
        if (this.texcoords) {
            return new Magi.VBO(a, {
                size: 3,
                data: this.vertices
            }, {
                size: 3,
                data: this.normals
            }, {
                size: 2,
                data: this.texcoords
            })
        } else {
            return new Magi.VBO(a, {
                size: 3,
                data: this.vertices
            }, {
                size: 3,
                data: this.normals
            })
        }
    },
    cache: {},
    getCachedVBO: function (a) {
        if (!this.cache[a]) {
            this.cache[a] = this.makeVBO(a)
        }
        return this.cache[a]
    },
    readFloat32: function (d, c) {
        var h = d.charCodeAt(c) & 255,
            g = d.charCodeAt(c + 1) & 255,
            f = d.charCodeAt(c + 2) & 255,
            e = d.charCodeAt(c + 3) & 255;
        var a = 1 - (2 * (h >> 7));
        var b = (((h << 1) & 255) | (g >> 7)) - 127;
        var i = ((g & 127) << 16) | (f << 8) | e;
        if (i == 0 && b == -127) {
            return 0
        }
        return a * (1 + i * Math.pow(2, -23)) * Math.pow(2, b)
    },
    readUInt32: function (a, b) {
        return ((a.charCodeAt(b) & 255) << 24) + ((a.charCodeAt(b + 1) & 255) << 16) + ((a.charCodeAt(b + 2) & 255) << 8) + (a.charCodeAt(b + 3) & 255)
    },
    readUInt16: function (a, b) {
        return ((a.charCodeAt(b) & 255) << 8) + (a.charCodeAt(b + 1) & 255)
    },
    readNormalizedFixedPoint16: function (a, b) {
        return 2 * (this.readUInt16(a, b) / 65535 - 0.5)
    },
    readNormalizedUFixedPoint16: function (a, b) {
        return this.readUInt16(a, b) / 65535
    },
    readVerts: function (e, c, d, b) {
        for (var a = c + b * 3 * 2; c < a; c += 2) {
            d.push(this.readNormalizedFixedPoint16(e, c))
        }
        return c
    },
    readTexVerts: function (e, c, d, b) {
        for (var a = c + b * 2 * 2; c < a; c += 2) {
            d.push(this.readNormalizedUFixedPoint16(e, c))
        }
        return c
    },
    readTris: function (h, e, f, g, a) {
        var c = [];
        for (var b = e + g * 4 * 2; e < b; e += 2) {
            c.push(this.readUInt16(h, e))
        }
        for (var b = e + a * 3 * 2; e < b; e += 2) {
            f.push(this.readUInt16(h, e))
        }
        for (var d = 0; d < c.length; d += 4) {
            f.push(c[d]);
            f.push(c[d + 1]);
            f.push(c[d + 2]);
            f.push(c[d]);
            f.push(c[d + 2]);
            f.push(c[d + 3])
        }
        return e
    },
    translateAndScaleVertices: function (b, c, f, h, a, e, g) {
        c *= 0.5;
        f *= 0.5;
        h *= 0.5;
        for (var d = 0; d < b.length; d += 3) {
            b[d] = a + c * (b[d] + 1);
            b[d + 1] = e + f * (b[d + 1] + 1);
            b[d + 2] = g + h * (b[d + 2] + 1)
        }
    },
    parse: function (v) {
        var l = new Date();
        var u = [],
            b = [],
            k = [],
            a = [],
            e = [],
            d = [];
        var q = 0;
        var g = this.readUInt32(v, q);
        q += 4;
        var r = this.readUInt32(v, q);
        q += 4;
        var p = this.readUInt32(v, q);
        q += 4;
        var c = this.readUInt32(v, q);
        q += 4;
        var j = this.readUInt32(v, q);
        q += 4;
        var s = this.readFloat32(v, q);
        q += 4;
        var o = this.readFloat32(v, q);
        q += 4;
        var m = this.readFloat32(v, q);
        q += 4;
        var n = this.readFloat32(v, q);
        q += 4;
        var h = this.readFloat32(v, q);
        q += 4;
        var f = this.readFloat32(v, q);
        q += 4;
        q = this.readVerts(v, q, a, g);
        this.translateAndScaleVertices(a, s, o, m, n, h, f);
        q = this.readTris(v, q, u, c, j);
        if (r > 0) {
            q = this.readTexVerts(v, q, d, r);
            q = this.readTris(v, q, b, c, j)
        }
        if (p > 0) {
            q = this.readVerts(v, q, e, p);
            q = this.readTris(v, q, k, c, j)
        }
        this.vertices = this.lookup_faces(a, u, 3);
        if (b.length > 0 && !this.noTexCoords) {
            this.texcoords = this.lookup_faces(d, b, 2)
        }
        if (k.length > 0 && !this.overrideNormals) {
            this.normals = this.lookup_faces(e, k, 3)
        } else {
            this.normals = this.calculate_normals(this.vertices, u, this.flatNormals)
        }
        this.boundingBox = this.calculateBoundingBox(a);
        this.parseTime = new Date() - l
    },
    calculateBoundingBox: function (c) {
        var e = {
            min: [0, 0, 0],
            max: [0, 0, 0]
        };
        for (var b = 0; b < c.length; b += 3) {
            var a = c[b],
                f = c[b + 1],
                d = c[b + 2];
            if (a < e.min[0]) {
                e.min[0] = a
            } else {
                if (a > e.max[0]) {
                    e.max[0] = a
                }
            } if (f < e.min[1]) {
                e.min[1] = f
            } else {
                if (f > e.max[1]) {
                    e.max[1] = f
                }
            } if (d < e.min[2]) {
                e.min[2] = d
            } else {
                if (d > e.max[2]) {
                    e.max[2] = d
                }
            }
        }
        e.width = e.max[0] - e.min[0];
        e.height = e.max[1] - e.min[1];
        e.depth = e.max[2] - e.min[2];
        e.diameter = Math.max(e.width, e.height, e.depth);
        return e
    },
    lookup_faces: function (g, a, e) {
        var b = [];
        for (var d = 0; d < a.length; d++) {
            var f = a[d] * e;
            for (var c = 0; c < e; c++) {
                b.push(g[f + c])
            }
        }
        return b
    },
    calculate_normals: function (h, b, g) {
        var c = [];
        var f = {
            normals: [],
            addNormal: function (i, l) {
                var j = (this.normals[i] || (this.normals[i] = [0, 0, 0]));
                j[0] += l[0];
                j[1] += l[1];
                j[2] += l[2]
            },
            getNormal: function (i) {
                return this.normals[i]
            },
            normalize: function () {
                for (var j = 0; j < this.normals.length; j++) {
                    var m = this.normals[j];
                    if (m) {
                        var l = 1 / Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
                        m[0] *= l;
                        m[1] *= l;
                        m[2] *= l
                    }
                }
            }
        };
        for (var e = 0, k = 0; e < h.length; e += 9, k += 3) {
            var a = this.find_normal(h[e], h[e + 1], h[e + 2], h[e + 3], h[e + 4], h[e + 5], h[e + 6], h[e + 7], h[e + 8]);
            if (g) {
                for (var d = 0; d < 3; d++) {
                    c.push(a[0]);
                    c.push(a[1]);
                    c.push(a[2])
                }
            } else {
                f.addNormal(b[k], a);
                f.addNormal(b[k + 1], a);
                f.addNormal(b[k + 2], a)
            }
        }
        if (!g) {
            f.normalize();
            for (var e = 0; e < b.length; e++) {
                var a = f.getNormal(b[e]);
                c.push(a[0]);
                c.push(a[1]);
                c.push(a[2])
            }
        }
        return c
    },
    find_normal: function (c, k, g, b, i, f, a, h, e) {
        var m = vec3.create([c - b, k - i, g - f]);
        var l = vec3.create([b - a, i - h, f - e]);
        var j = vec3.create([a - c, h - k, e - g]);
        var d = vec3.cross(m, l, vec3.create());
        if (vec3.lengthSquare(d) == 0) {
            vec3.cross(l, j, d)
        }
        if (vec3.lengthSquare(d) == 0) {
            vec3.cross(j, m, d)
        }
        if (vec3.lengthSquare(d) == 0) {
            vec3.set([0, 0, 1], d)
        }
        return vec3.normalize(d)
    }
};

