/// <reference path="Edit.ts" />

/** class for old Deltarealm base64 prototype keys code */
class B64Key {
  static VER = "v.0.1.64T11";

  constructor() {
    throw new TypeError("Illegal constructor");
  }

  static i = 0;
  static j = 0;
  static buffer = new Uint8Array(0);
  /** @function base64ToUint8array */
  static b64ToU8arr(base64: string) {
    var uint8array = [], buffer = 0, i = 0, p = 0, c;
    for (; i < base64.length; i++) {
      c = base64.charCodeAt(i);
      if (c > 64)
        (c & 223) < 91 ? c -= c & 32 ? 71 : 65 : c = 128;
      else if (c < 58)
        c > 46 ? c === 47 ? c = 63 : c += 4 : c === 43 ? c = 62 : c = 128;
      else if (c === 61) {
        if (i & 2) {
          i & 1 ?
            i + 1 === base64.length ?
              p = 0 :
              c = 129 :
              i + 2 === base64.length && base64.charAt(i + 1) === "=" ?
                p = +!(i += 2) :
                c = 137;
          buffer !== 0 ? c = 145 : 0;
        } else
          c = 130;
      } else
        c = 128;
      if (c & 128)
        throw new Error(["char", "padding", "padding char"][c & 7] +
          " error " + (c >> 3 & 3 ) + " : " + buffer + " pos.: " + i);
      buffer = (buffer << 6) | c;
      if (p) {
        uint8array.push(buffer >> (p -= 2) & 255);
        buffer &= 63 >> (i << 1 & 6);
      } else
        p = 6;
    }
    return new Uint8Array(uint8array);
  };
  /** @function uint8arrayToBase64 */
  static u8arrToB64(uint8array: Uint8Array) {
    var string = "", buffer = 0, i = 0, p = 0, c: number;
    function codeChar() {
      return c < 52 ? c < 26 ? 65 : 71 : c < 62 ? -4 : c < 63 ? -19 : -16;
    }
    for (; i < uint8array.length; i++) {
      buffer = buffer << 8 | (c = uint8array[i]);
      if (p == 4) {
        c = buffer >> 6;
        string += String.fromCharCode(c + codeChar());
        c = buffer & 63;
        buffer = p = 0;
      } else {
        c = buffer >> (p += 2);
        buffer &= 15 >> (p & 2);
      }
      string += String.fromCharCode(c += codeChar());
    }
    if (p) {
      c = buffer << 6 - p;
      c += codeChar();
      string += String.fromCharCode(c) + (p & 4 ? "=" : "==");
    }
    return string;
  };

  // the initial source used can be found here:
  // https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/index.html#LC827
  static rotateBlock(r: [number, number, number]): Rotation {
    /** rotation, (angle -> of axis) */
    var rot = Rot.Up, i = 3, angle = 0, tmp: number[] = [];
    /** other/mirored side */
    var face  = Face.Y, order, o_side = !1;
    r.forEach(function (el) {
      el = Math.round((el % 360) / 90);
      if (el < 0)
        el += 4;
      tmp.push(el);
    });
    r = [tmp[0], tmp[1], tmp[2]];
    switch (r[0]) {
      case 1:
        return [2, !0, r[1] + 4 - r[2] & 3];
      case 2:
        r[0] = 0;
        r[1] = r[1] + 2 & 3;
        r[2] = r[2] + 2 & 3;
        break;
      case 3:
        return [2, !1, r[1] + r[2] & 3];
    }
    while (i-- > 0)
      if (r[i]) {
        angle = r[i];
        if (i === 1)
          rot = (rot + angle) & 3;
        else {
          order = face === +!i;
          if (angle & 1)
            face = order ? 2 : 0;
          if (angle + +order > 1 && angle + +order < 4)
            o_side = !o_side;
          switch (i) {
            case 1:
              if (angle !== 2)
                rot = rot + angle & 3;
            case 2:
              if (o_side === !0)
                rot = 2;
              break;
          }
        }
      }
    return [face, o_side, rot];
  };
  // sorts blocks by position x than y than z
  static sortShip() {
    var i, l, n = 0, vals, refs: number[], b = ship.blocks, _b = [];
    if ((l = ship.blocks.length) > 0x7fffffff)
      return er("too much blocks");
    vals = new Uint32Array(l);
    while (l-- > 0)
      for (i = 0; i < 3; i++) {
        n = b[l].position[i] + 511;
        if (n < 0 || n > 1023)
          return er("block too far in axis " + "xyz"[i] + ", l: " + l);
        vals[l] = (vals[l] << 10) + n;
      }
    i = 0;
    refs = [];
    for (var u, d; i < vals.length; i++) {
      u = i;
      d = 0;
      while (u !== d) {
        n = u + d >> 1;
        if (vals[refs[n]] > vals[i])
          u = n;
        else if (vals[refs[n]] < vals[i])
          d = ++n;
        else
          break;
      }
      if (u === d) {
        for (d = refs.length; d > n; d--)
          refs[d] = refs[d - 1];
        refs[d] = i;
      }
    }
    for (i = refs.length; i-- > 0;)
      _b[i] = b[refs[i]];
    ship.blocks = _b;
    return ship;
  };
  static wBit(b: 0 | 1 | boolean) {
    if (b)
      B64Key.buffer[B64Key.i] |= 1 << B64Key.j;
    else
      B64Key.buffer[B64Key.i] &= 255 - (1 << B64Key.j);
    if (++B64Key.j > 7) {
      B64Key.i++;
      B64Key.j = 0;
    }
  };
  static wBitsMSBfFast(l: number, n: number) {
    var buffer = B64Key.buffer;
    buffer[B64Key.i] |= n << B64Key.j;
    n >>= 8 - B64Key.j;
    if (l + B64Key.j > 8) {
      l -= 8 - B64Key.j;
      B64Key.j = 0;
      B64Key.i++;
      while (l > 7) {
        buffer[B64Key.i++] |= n;
        n >>= 8;
        l -= 8;
      }
      buffer[B64Key.i] |= n;
      n >>= l;
    }
    B64Key.j += l;
    buffer[B64Key.i] &= 255 >> 8 - B64Key.j;
    if (B64Key.j > 7) {
      B64Key.i++;
      B64Key.j = 0;
    }
    // value of spare bits
    return n;
  };
  static wMSBfirst(l: number, n: number) {
    for (var i1 = B64Key.i += l, buffer = B64Key.buffer; l-- > 0; n >>= 8)
      buffer[--i1] = n & 255;
    return n;
  };
  static wVersion(arr: number[]) {
    for (var l = 0, m = 0, n = 64, buffer = B64Key.buffer; !0;) {
      while (arr[l] >= n--)
        n = 64 << (m += 6);
      buffer[B64Key.i++] = arr[l] >> m;
      while (m) {
        buffer[B64Key.i - 1] |= 64;
        m -= 6;
        n >>= 6;
        buffer[B64Key.i++] = (arr[l] & n) >> m;
      }
      if (++l < arr.length)
        buffer[B64Key.i - 1] |= 128;
      else
        break;
    }
  };

  /** @function encodeCmprsShip base64 key prototype */
  static encode(ship: Ship) {
    type num3 = [number, number, number];
    // version 0.0.significantVersion
    // versions 16 and further will significantVersion of Db Vehicle editor
    if (ship.getMode().mode !== "Ship")
      console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
    var l: number, n, id, p_i: number, chunkEnd: number;
    var c: number | boolean | string, propertiesStr = "";
    var min: num3, max: num3, prev, size = [], sizeB = [];
    var propertiesRef: number[] = [], arr: number[] | Uint8Array;
    // id length
    // changed to 10 from 4
    var IDLEN = 10;
    B64Key.i = B64Key.j = 0;
    var buffer = B64Key.buffer = new Uint8Array(1040), b: ShipBlock[];
    // array of pointers to arrays with kBs of file (1024 + buffer of 16 bytes)
    /** @type {number[]} */
    var rotations: number[] = [], kB = [buffer];
    // data block: compression version
    B64Key.wVersion([0, 0, Ship.VERSION]);
    // data block: name
    buffer[B64Key.i++] = l = ship.name.length;
    if (l > 255)
      console.warn("too long name (" + l + ") set to: " + (l = 255));
    for (n = 0; n < l;) {
      c = ship.name.charCodeAt(n++);
      buffer[B64Key.i++] = c > 31 && c < 127 || c > 8 && c < 11 ? c : 63;
    }
    // data block: game version
    arr = ship.gameVersion;
    B64Key.wVersion(arr);
    for (l = 0; l < 3 && arr.length; l++)
      if (arr[l] > [0, 1, 2][l])
        console.warn("unknown game version");
    // data block: date and time (seconds from  26.1.2022 16:48 UTC)
    B64Key.wMSBfirst(4, Date.now() / 1e3 - 1643215695);
    // data block: blocks
    B64Key.sortShip();
    b = ship.blocks;
    // blocks length
    B64Key.wBit(n = (l = b.length) > 8191);
    B64Key.wBitsMSBfFast(n ? 21 : 13, l);
    if (!l) {
      console.log("empty ship (no blocks)");
      if (B64Key.j)
        B64Key.i++;
      arr = new Uint8Array(B64Key.i);
      while (B64Key.i-- > 0)
        arr[B64Key.i] = buffer[B64Key.i];
      return arr;
    }
    // ID bit length (3 bits) + 4 (IDLEN)
    B64Key.wBitsMSBfFast(3, IDLEN - 4);
    arr = b[--l].position;
    min = [arr[0], arr[1], arr[2]];
    max = [arr[0], arr[1], arr[2]];
    while (l-- > 0) {
      arr = b[l].position;
      for (n = 0; n < 3; n++)
        if (arr[n] > max[n])
          max[n] = arr[n];
        else if (arr[n] < min[n])
          min[n] = arr[n];
    }
    // pairs min and max blocks positions in each axis - xyz
    for (n = 0, l = 6; n < 3; ++n > 1 ? l = 8 : 0) {
      if (B64Key.wBitsMSBfFast(l, min[n] + (1 << l - 1) - 1))
        return er("ship too far in axis: " + "xyz"[n]);
      if (B64Key.wBitsMSBfFast(l, max[n] + (1 << l - 1) - 1))
        return er("ship too far in axis: " + "xyz"[n]);
    }
    /** @param {Block} block */
    function fixedBlock(block: Block) {
      // ID
      B64Key.wBitsMSBfFast(IDLEN, id = Block.ID[block.internalName]);
      // position
      B64Key.wBitsMSBfFast(8, block.position[2] + 127);
      B64Key.wBitsMSBfFast(6, block.position[1] + 31);
      B64Key.wBitsMSBfFast(6, block.position[0] + 31);
      /** rotation @type {number|Rotation} */
      var r: number | Rotation = block.rotation;
      B64Key.wBitsMSBfFast(5, r = r[2] | +r[1] << 2 | r[0] << 3);
      // are properties?
      checkProperties(block.properties);
      rotations[id] = r;
      if (B64Key.j) {
        B64Key.i++;
        B64Key.j = 0;
      }
    }
    function endings() {
      // handles chunk endings, kB borders or both
      if (B64Key.i > chunkEnd) {
        prev = [B64Key.i, B64Key.j, 0];
        n = B64Key.i = chunkEnd + 8;
        B64Key.j = 0;
        // six bits after chunkending
        B64Key.wBitsMSBfFast(6, (chunkEnd << 3) + 7 - p_i);
        fixedBlock(b[l]);
        n = B64Key.i - n;
        B64Key.i = chunkEnd + 1;
        B64Key.j = B64Key.i + n;
        chunkEnd += n + 512;
        while(B64Key.i < B64Key.j) {
          buffer[B64Key.i + n] = buffer[B64Key.i];
          buffer[B64Key.i] = buffer[B64Key.i + 7];
          buffer[B64Key.i + 7] = 0;
          B64Key.i++;
        }
        B64Key.i = prev[0] + n;
        B64Key.j = prev[1];
        for (n = 1 << IDLEN; n-- > 0;)
          rotations[n] = 8;
      }
      if (B64Key.i > 1023) {
        prev = buffer;
        buffer = new Uint8Array(1040);
        p_i -= 1024;
        chunkEnd -= 1024;
        B64Key.i -= 1024;
        for (n = 0; n < 16; n++)
          buffer[n] = prev[n | 1024];
        kB.push(buffer);
      }
    }
    function checkProperties(prpt: ShipProperties) {
      var p, s = JSON.stringify(prpt);
      // Has properties
      B64Key.wBit(s !== "{}");
      if (s !== "{}")
        if (p = propertiesStr.indexOf(s) + 1)
          // stores properties for later
          // debug by adding " - 1"
          propertiesRef.push(p - 1, s.length);
        else {
          propertiesRef.push(propertiesStr.length, s.length);
          propertiesStr += s;
        }
    }
    // sets up ship sizes and relative rotations
    for (n = 3; n-- > 0; sizeB[n] = l) {
      size[n] = max[n] - min[n] + 1;
      for (l = 8, c = 128; size[n] < c; --l)
        c >>= 1;
    }
    for (n = 1 << IDLEN; n-- > 0;)
      rotations[n] = 8;
    // first block (fixed)
    fixedBlock(b[0]);
    // previous i
    p_i = B64Key.i << 3;
    chunkEnd = B64Key.i + 511;
    // relative blocks string
    for (l = 1, arr = b[0].position; l < b.length; l++) {
      p_i = (B64Key.i << 3) + B64Key.j;
      // ID
      B64Key.wBitsMSBfFast(IDLEN, id = Block.ID[b[l].internalName]);
      // relative position
      prev = [arr[0], arr[1], arr[2]];
      arr = b[l].position;
      n = 2;
      c = arr[n] - prev[n] - 1;
      if (c < 0) {
        c += size[n];
        prev[1]++;
      }
      B64Key.wBit(!!c);
      if (c)
        B64Key.wBitsMSBfFast(sizeB[n], c - 1);
      while (n-- > 0) {
        // relative y and x position
        if (arr[n] < prev[n]) {
          if (n < 1)
            return er("weird error");
          else
            c = arr[n] + size[n] - prev[n];
          prev[0]++;
        } else
          c = arr[n] - prev[n];
        B64Key.wBit(!!c);
        if (c)
          B64Key.wBitsMSBfFast(sizeB[n], c - 1);
      }
      // optionaly relative rotation
      var rot = b[l].rotation;
      n = rot[2] | +rot[1] << 2 | rot[0] << 3;
      B64Key.wBit(c = rotations[id] !== n);
      if (c)
        B64Key.wBitsMSBfFast(5, n);
      rotations[id] = n;
      checkProperties(b[l].properties);
      endings();
    }
    if (B64Key.j)
      B64Key.i++;
    chunkEnd = B64Key.i - 1;
    // last/ending chunk
    // only if proceeding relative chunk??! unsure
    --l && endings();
    // data block: properties
    if (propertiesRef.length) {
      // just indexes and lengths of JSON strings
      c = JSON.stringify([propertiesRef, propertiesStr]);
      for (n = 0; n < c.length;) {
        buffer[B64Key.i++] = c.charCodeAt(n++);
        if (B64Key.i > 1023) {
          kB.push(B64Key.buffer = buffer = new Uint8Array(1040));
          B64Key.i = 0;
        }
      }
    }
    // joins binary data of required length to one file
    B64Key.buffer = buffer =
      new Uint8Array((kB.length - 1 << 10) + B64Key.i);
    // How did it with new Uint8Array(), zero length Uint8Array?
    B64Key.j = l = 0;
    for (; l < buffer.length; kB[B64Key.j++] = new Uint8Array(1040)) {
      (n = buffer.length - l) > 1023 ? n = 1024 : 0;
      arr = kB[B64Key.j];
      for (B64Key.i = 0; B64Key.i < n;)
        buffer[l++] = arr[B64Key.i++];
    }
    return buffer;
  };
  static gBit() {
    var b_int = (B64Key.buffer[B64Key.i] & 1 << B64Key.j) >> B64Key.j;
    if (++B64Key.j > 7) {
      B64Key.j = 0;
      B64Key.i++;
    }
    return b_int;
  };
  static gMSBfirst(l: number) {
    var n = 0, buffer = B64Key.buffer;
    while (l-- > 0)
      n = n * 256 + buffer[B64Key.i++];
    return n;
  };
  static gBitsMSBfFast(l: number) {
    var mj = B64Key.j, b_int = 0, buffer = B64Key.buffer;
    if (l + B64Key.j > 8) {
      b_int = buffer[B64Key.i++] & 255 << B64Key.j;
      l -= 8 - B64Key.j;
      B64Key.j = 8;
      while (l > 8) {
        b_int += (buffer[B64Key.i++] << B64Key.j);
        l -= 8;
        B64Key.j += 8;
      }
      b_int += (buffer[B64Key.i] & 255 >> (8 - l)) << B64Key.j;
    } else
      b_int += buffer[B64Key.i] & 255 >> (8 - l) << B64Key.j;
    b_int >>= mj;
    if ((B64Key.j = (B64Key.j & 7) + l) > 7) {
      B64Key.i++;
      B64Key.j = 0;
    }
    return b_int;
  };
  static gVersion() {
    var version = [], n = 0, buffer = B64Key.buffer;
    B64Key.i--;
    do {
      version.push(0);
      do {
        version[n] = (version[n] << 6) + (buffer[++B64Key.i] & 63);
      } while (buffer[B64Key.i] & 64);
      n++;
    } while (buffer[B64Key.i] & 128);
    B64Key.i++;
    return version;
  };
  /** rotation by 5 bit index @returns dr rotation */
  static gBlockRotation(n: number) {
    if (n > 23)
      return er("invalid input");
    var arr = [0, 0, 0];
    arr[+(n < 8) << 1] = [90, 270, 0, 180, 270, 90][n >> 2];
    arr[n & 16 ? 2 : 1] = (
      n & 4 && (n & 16 ? n & 1 : !(n & 8)) ?
        n + 2 & 3 :
        n & 3
    ) * 90;
    return arr;
  };
  /** @function decodeCmprsShip */
  static decode(cmprsShip?: Uint8Array | undefined) {
    // version 0.0.1! the existing prototype specification is for v.0.0
    var n = 0, l: number, pl: number, chunkEnd: number, id: number;
    var IDLEN: number, BLEN: number, s = "", arr = [], prev = [0, 0, 0];
    var b: safe[] = [], min = [0], max = [0], size = [0], sizeB = [0];
    var rot: number[] = [], properties: number[] = [], obj: any;
    var ship: safe = {}, p_i: number, num = 0;
    B64Key.i = B64Key.j = 0;
    var buffer = B64Key.buffer;
    if (cmprsShip !== UDF)
      B64Key.buffer = buffer = cmprsShip;
    // data block: compression version (and check)
    arr = B64Key.gVersion();
    while (n < 2)
      if (arr[n++] > 0)
        return er("unknown file vesrion");
    if (arr.length > 2 && arr[2] > 15)
      ship.significantVersion = arr[2];
    // data block: name
    l = buffer[B64Key.i++];
    while (l-- > 0)
      s += String.fromCharCode(buffer[B64Key.i++]);
    ship.name = s;
    // data block: game version
    ship.gameVersion = B64Key.gVersion();
    // data block: date and time
    // ...of compression as I don't have date and time parse
    s = Ship.dateTime(B64Key.gMSBfirst(4) + 1643215695);
    ship.dateTime = "compressed: " + s + " UTC";
    // data block: blocks
    // blocks length
    BLEN = B64Key.gBitsMSBfFast(B64Key.gBit() ? 21 : 13);
    ship.blocks = b;
    if (!BLEN) {
      if (B64Key.i > buffer.length)
        return er("unexpected end of data");
      console.log("read empty ship (no blocks)");
      return ship;
    }
    // ID bit length
    IDLEN = B64Key.gBitsMSBfFast(3) + 4;
    // min max positions
    for (n = 0, l = 6; n < 3; ++n > 1 ? l = 8 : 0) {
      min[n] = B64Key.gBitsMSBfFast(l);
      max[n] = B64Key.gBitsMSBfFast(l);
      min[n] -= (1 << l - 1) - 1;
      max[n] -= (1 << l - 1) - 1;
    }
    /** @param {boolean} [b=!0] first block */
    function fixedBlock(b?: boolean) {
      if (b === UDF)
        b = !0;
      var obj: any = {}, num = 0;
      // ID
      obj.internalName = Block.NAME[id = B64Key.gBitsMSBfFast(IDLEN)];
      // position
      obj.position = arr = [];
      arr[2] = B64Key.gBitsMSBfFast(8) - 127;
      arr[1] = B64Key.gBitsMSBfFast(6) - 31;
      arr[0] = B64Key.gBitsMSBfFast(6) - 31;
      // rotation
      num = B64Key.gBitsMSBfFast(5);
      // !!!not tested rotation index to Rotation type
      obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
      obj.properties = {};
      // has properties
      if (B64Key.gBit() && b)
        properties.push(0);
      if (b) {
        prev = arr;
        rot[id] = num;
      }
      if (B64Key.j) {
        B64Key.i++;
        B64Key.j = 0;
      }
      return obj;
    }
    function relativeBlock() {
      p_i = (B64Key.i << 3) + B64Key.j;
      var obj: any = {}, num = 0;
      // ID
      obj.internalName = Block.NAME[id = B64Key.gBitsMSBfFast(IDLEN)];
      // relative x position
      obj.position = arr = [prev[0], prev[1], prev[2]];
      arr[2] += B64Key.gBit() ? B64Key.gBitsMSBfFast(sizeB[2]) + 2 : 1;
      if (arr[n = 2] > max[2]) {
        arr[2] -= size[2];
        arr[1]++;
      }
      while (n-- > 0) {
        // relative y and z positions
        arr[n] += B64Key.gBit() ? B64Key.gBitsMSBfFast(sizeB[n]) + 1 : 0;
        if (arr[n] > max[n]) {
          if (n < 1)
            return er("blocks doesn't fit in box");
          arr[1] -= size[1];
          arr[0]++;
        }
      }
      // optionaly relative rotation
      num = B64Key.gBit() ? B64Key.gBitsMSBfFast(5) : rot[id];
      // !!!not tested rotation index to Rotation type
      obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
      obj.properties = {};
      // has properties
      if (B64Key.gBit() && B64Key.i < chunkEnd)
        properties.push(l);
      if (B64Key.i + +!!B64Key.j > chunkEnd)
        return "";
      prev = arr;
      rot[id] = num;
      b[l] = obj;
      return "";
    }
    function chunkEnding() {
    // handles chunk ends
      var n_0, n_1, buf_0;
      if (n_0 = B64Key.i + +!!B64Key.j > chunkEnd) {
        B64Key.i = chunkEnd;
        B64Key.j = 0;
      }
      if ((--chunkEnd << 3) + 7 - p_i !== B64Key.gBitsMSBfFast(6)) {
        b[l = b.length = ++pl] = obj = fixedBlock();
        console.warn("corrupted chunk: " + (p_i >> 13));
      } else
        obj = fixedBlock(!1);
      var r = obj.rotation;
      //@ts-ignore
      B64Key.gBlockRotation(r[2] | +r[1] << 2 | r[0] << 3);
      n_1 = B64Key.i;
      if (n_0) {
        buf_0 = buffer;
        B64Key.buffer = buffer = new Uint8Array(16);
        B64Key.i = n_0 = p_i >> 3;
        B64Key.j = p_i & 7;
        for (n = 0; B64Key.i <= chunkEnd;)
          buffer[n++] = buf_0[B64Key.i++];
        for (B64Key.i = n_1; n < 8;)
          buffer[n++] = buf_0[B64Key.i++];
        B64Key.i = 0;
        relativeBlock();
        B64Key.i += n_0 + n_1 - chunkEnd - 1;
        B64Key.buffer = buffer = buf_0;
      }
      chunkEnd = n_1 + 512;
      if (JSON.stringify(obj) !== JSON.stringify(b[l])) {
        BLEN -= l - ++pl;
        b[l = b.length = pl] = obj;
        console.warn("corrupted chunk: " + (p_i >> 13));
        prev = obj.position;
      }
      for (n = 1 << IDLEN; n-- > 0;)
        rot[n] = 8;
    }
    // sets up ship sizes and relative values
    for (n = 3; n-- > 0; sizeB[n] = l) {
      size[n] = max[n] - min[n] + 1;
      for (l = 8, num = 128; size[n] < num; --l)
        num >>= 1;
    }
    for (n = 1 << IDLEN; n-- > 0;)
      rot[n] = 8;
    // first block
    b[pl = l = 0] = fixedBlock();
    p_i = B64Key.i << 3;
    chunkEnd = B64Key.i + 512;
    var v;
    while (++l < BLEN) {
      if (+(v = relativeBlock()) && B64Key.i < chunkEnd)
        return v;
      if (B64Key.i >= chunkEnd)
        chunkEnding();
    }
    if (B64Key.j) {
      B64Key.i++;
      B64Key.j = 0;
    }
    chunkEnd = B64Key.i;
    l--;
    // last/ending chunk
    chunkEnding();
    // data block: properties
    if (l = properties.length) {
      if (buffer[buffer.length - 1] !== 93)
        return er("unexpected end of data");
      for (s = ""; B64Key.i < buffer.length;)
        s += String.fromCharCode(buffer[B64Key.i++]);
      try {
        arr = JSON.parse(s);
      } catch (err) {
        if (err) {
          console.error(err);
          return ship;
        }
      }
      if (typeof arr[2] == "string")
        "Parse the compressed properties.";
      s = arr[1];
      arr = arr[0];
      for (B64Key.i = l - 1 << 1; l-- > 0; B64Key.i -= 2) {
        obj = JSON.parse(s.slice(arr[B64Key.i],
          arr[B64Key.i] + arr[B64Key.i | 1]));
        b[properties[l]].properties = obj;
        // (v.0.1.55) compatibility with old keys for control property
        if ("control" in obj && !("customParameter" in obj))
          obj.customParameter = obj.control;
      }
    }
    return ship;
  }
  // just converts Uint8Array to string with binary numbers in DevTools
  /** function used for debugging encode/decode */
  static binaryData($help: boolean | any, ...arg: any[]) {
    if (typeof $help === "boolean")
      return "args: ArrayBuffer | Array (data), ?[?from, to] (slice), ?b\
  ytesize, ?isMSBF=false :displays data in bits(for viewing data)";
    var i = 1, j = 0, l, bs = 0, bit = 1, s, slice = [0], a = arguments;
    if (a[1] instanceof Array && a[1].length) {
      i++;
      if (a[1].length > 1)
        slice[0] = a[1].shift();
      slice.push(a[1][0]);
    }
    if (typeof a[0].BYTES_PER_ELEMENT === "number")
      bs = a[0].BYTES_PER_ELEMENT << 3;
    else if (!(a[0] instanceof Array) || typeof a[i] !== "number")
      throw new TypeError("requires ArrayBuffer or Array and bytesize");
    if (slice.length < 2)
      slice.push(a[0].length);
    if (typeof a[i] === "number")
      bs = a[i++] << 3;
    if (typeof a[i] === "boolean" && a[i])
      for (i = slice[0], l = slice[1], s = "BigEndian " + i + ":"; 1;) {
        for (j = 0; j < bs; s += j & 7 ? "" : " ")
          s += a[0][i] & 1 << bs - ++j ? "1" : "0";
        if (++i >= l)
          return s;
        s += i + ":";
      }
    // bits are ordered as they are read be decoding
    for (i = slice[0], l = slice[1], s = "LSbitF+LE! " + i + ":"; 1;) {
      for (j = 0, bit = 1; j++ < bs; bit <<= 1)
        s += (a[0][i] & bit ? "1" : "0") + (j & 7 ? "" : " ");
      if (++i >= l)
        return s;
      s += i + ":";
    }
  }
  /** function for manual use to check rotations or/and rotation index */
  static rotationIndex (arr: [number, number, number]) {
    var rot = B64Key.rotateBlock(arr);
    var num = rot[2] | +rot[1] << 2 | rot[0] << 3;
    var r = B64Key.gBlockRotation(num);
    if (typeof r == "string")
      throw new Error(r);
    return [r[0], r[1], r[2], num];
  }
}
