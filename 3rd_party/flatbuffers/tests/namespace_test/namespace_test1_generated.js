// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var NamespaceA = NamespaceA || {};

/**
 * @const
 * @namespace
 */
NamespaceA.NamespaceB = NamespaceA.NamespaceB || {};

/**
 * @enum
 */
NamespaceA.NamespaceB.EnumInNestedNS = {
  A: 0, 0: 'A',
  B: 1, 1: 'B',
  C: 2, 2: 'C'
};

/**
 * @constructor
 */
NamespaceA.NamespaceB.TableInNestedNS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NamespaceA.NamespaceB.TableInNestedNS}
 */
NamespaceA.NamespaceB.TableInNestedNS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NamespaceA.NamespaceB.TableInNestedNS=} obj
 * @returns {NamespaceA.NamespaceB.TableInNestedNS}
 */
NamespaceA.NamespaceB.TableInNestedNS.getRootAsTableInNestedNS = function(bb, obj) {
  return (obj || new NamespaceA.NamespaceB.TableInNestedNS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
NamespaceA.NamespaceB.TableInNestedNS.prototype.foo = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
NamespaceA.NamespaceB.TableInNestedNS.prototype.mutate_foo = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NamespaceA.NamespaceB.TableInNestedNS.startTableInNestedNS = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} foo
 */
NamespaceA.NamespaceB.TableInNestedNS.addFoo = function(builder, foo) {
  builder.addFieldInt32(0, foo, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NamespaceA.NamespaceB.TableInNestedNS.endTableInNestedNS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NamespaceA.NamespaceB.StructInNestedNS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NamespaceA.NamespaceB.StructInNestedNS}
 */
NamespaceA.NamespaceB.StructInNestedNS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
NamespaceA.NamespaceB.StructInNestedNS.prototype.a = function() {
  return this.bb.readInt32(this.bb_pos);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
NamespaceA.NamespaceB.StructInNestedNS.prototype.mutate_a = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
NamespaceA.NamespaceB.StructInNestedNS.prototype.b = function() {
  return this.bb.readInt32(this.bb_pos + 4);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
NamespaceA.NamespaceB.StructInNestedNS.prototype.mutate_b = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} a
 * @param {number} b
 * @returns {flatbuffers.Offset}
 */
NamespaceA.NamespaceB.StructInNestedNS.createStructInNestedNS = function(builder, a, b) {
  builder.prep(4, 8);
  builder.writeInt32(b);
  builder.writeInt32(a);
  return builder.offset();
};

// Exports for Node.js and RequireJS
this.NamespaceA = NamespaceA;
