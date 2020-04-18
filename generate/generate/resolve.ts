/*--------------------------------------------------------------------------

blender-node

The MIT License (MIT)

Copyright (c) 2020 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import { Schema, ClassSchema } from '../../generate/schematics/schema'

export interface SpecializedCollection {
    kind: 'specialized-collection'
    spec: string,
    type: string
    desc: string
}
export interface GenericCollection {
    kind: 'generic-collection'
    type: string
    desc: string
}
export interface Enum {
    kind: 'enum',
    type: string
    desc: string
}
export interface EnumSet {
    kind: 'enum-set',
    type: string
    desc: string
}
export interface MultiDimensionalArray {
    kind:  'multi-dimensional-array',
    item:  string
    type:  string
    desc:  string
    rank0: number
    rank1: number
}
export interface Array {
    kind:   'array',
    item:   string
    type:   string
    desc:   string
    length: number
}
export interface Iterable {
    kind:   'iterable',
    type:   string
    desc:   string
}
export interface Tuple {
    kind: 'tuple'
    type: string
    desc: string
}
export interface List {
    kind: 'list'
    type: string
    desc: string
}
export interface Sequence {
    kind: 'sequence'
    type: string
    desc: string
}
export interface Set {
    kind: 'set'
    type: string
    desc: string
}
export interface Dict {
    kind: 'dict'
    type: string
    desc: string
}
export interface Object {
    kind: 'object'
    type: string
    desc: string
}
export interface String {
    kind: 'string'
    type: string
    desc: string
}
export interface Number {
    kind: 'number'
    type: string
    desc: string
}
export interface Integer {
    kind: 'integer'
    type: string,
    desc: string,
}
export interface Float {
    kind: 'float'
    type: string
    desc: string
}
export interface Boolean {
    kind: 'boolean'
    type: string
    desc: string
}
export interface Unknown {
    kind: 'unknown'
    type: string
    desc: string
}
export interface Undefined {
    kind: 'undefined'
    type: string
    desc: string
}
export interface Void {
    kind: 'void'
    type: string
    desc: string
}
export interface Function {
    kind: 'function'
    type: string
    desc: string
}
export interface Matrix {
    kind: 'matrix'
    type: string
    desc: string
}
export interface Class {
    kind: 'class'
    type: string
    desc: string
    schema: ClassSchema
}
export interface Union {
    kind: 'union'
    type: string
    desc: string
}
export type TypeInfo =
    | GenericCollection
    | SpecializedCollection
    | Enum
    | EnumSet
    | MultiDimensionalArray
    | Array
    | Iterable
    | Tuple
    | List
    | Sequence
    | Set
    | Dict
    | Object
    | String
    | Integer
    | Float
    | Number
    | Boolean
    | Unknown
    | Undefined
    | Void
    | Function
    | Matrix
    | Class
    | Union

export class Result<T> {
    constructor(private _ok: boolean, private _value: T | undefined) { }
    public ok(): boolean { return this._ok }
    public value(): T { return this._value! }
    public static ok<T>(value: T): Result<T> {
        return new Result<T>(true, value)
    }
    public static fail<T>(): Result<T> {
        return new Result<T>(false, undefined)
    }
}

export function parse_specialized_collection(schema: Schema, desc: string): Result<SpecializedCollection> {
    const match = desc.match(/^([a-z|A-Z|0-9]*) bpy_prop_collection of ([a-z|A-Z|0-9]*),/)
    if (match) {
        const kind = 'specialized-collection'
        const spec = match[1]
        const type = match[2]
        return Result.ok({ kind, spec, type, desc })
    }
    return Result.fail()
}

export function parse_generic_collection(schema: Schema, desc: string): Result<GenericCollection> {
    const match = desc.match(/^bpy_prop_collection of ([a-z|A-Z|0-9]*),/)
    if (match) {
        const kind = 'generic-collection'
        const type = match[1]
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_enum(schema: Schema, desc: string): Result<Enum> {
    const match = desc.match(/^enum in \[(.*)\],*/)
    if (match) {
        const kind = 'enum'
        const type = match[1].split(',').map(x => x.trim()).join(' | ').trim()
        if(type.length > 0) {
            return Result.ok({ kind, type, desc })
        } else {
            // sometimes ... enum in [] so just make a string
            return Result.ok({kind, type: 'string', desc})
        }
    }
    return Result.fail()
}

export function parse_enum_set(schema: Schema, desc: string): Result<EnumSet> {
    const match_0 = desc.match(/^enum set in \{(.*)\}, default/)
    if (match_0) {
        const kind = 'enum-set'
        const mapped = match_0[1].split(',').map(x => x.trim()).join(' | ').trim()
        const type = mapped.length > 0 ? `(${mapped})[]` : `string[]`
        return Result.ok({ kind, type, desc })
    }
    const match_1 = desc.match(/^enum set in \{(.*)\}/)
    if (match_1) {
        const kind = 'enum-set'
        const mapped = match_1[1].split(',').map(x => x.trim()).join(' | ').trim()
        const type = mapped.length > 0 ? `(${mapped})[]` : `string[]`
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_multi_dimensional_array(schema: Schema, desc: string): Result<MultiDimensionalArray> {
    const match = desc.match(/^([a-z|A-Z|0-9]*) multi-dimensional array of ([0-9]*) \* ([0-9]*) items in/)
    if (match) {
        const result = resolve(schema, match[1])
        const item  = result.value().type
        const rank0 = parseInt(match[2]) // outer rank
        const rank1 = parseInt(match[3]) // inner rank first
        const inner = `[${Array.from({ length: rank1 }).map(_ => result.value().type).join(', ')}]`
        const outer = `[${Array.from({ length: rank0 }).map(_ => inner).join(', ')}]`
        const kind = 'multi-dimensional-array'
        const type = outer
        return Result.ok({ kind, type, item, desc, rank0, rank1 })
    }
    return Result.fail()
}

export function parse_array(schema: Schema, desc: string): Result<Array> {
    const match = desc.match(/^([a-z|A-Z|0-9]*) array of ([0-9]*) items/)
    if (match && !desc.includes('multi-dimensional')) {
        const result = resolve(schema, match[1])
        const item  = result.value().type
        const length = parseInt(match[2])
        const kind = 'array'
        const type = `[${Array.from({ length }).map(_ => result.value().type).join(', ')}]`
        return Result.ok({ kind, type, item, desc, length })
    }
    return Result.fail()
}
export function parse_iterable(schema: Schema, desc: string): Result<Iterable> {
    if (desc === 'iterable objectvertices') {
        const kind = 'iterable'
        const type = 'any'
        return Result.ok({ kind, type, desc,  })
    }
    return Result.fail()
}
export function parse_tuple(schema: Schema, desc: string): Result<Tuple> {
    if (desc === 'tuple pair' || desc === 'tuple') {
        const kind = 'tuple'
        const type = 'any[]'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_list(schema: Schema, desc: string): Result<List> {
    if (desc === 'list of key, value tuples' ||
        desc === 'list of strings' ||
        desc === 'list of tuples' ||
        desc === 'list') {
        const kind = 'list'
        const type = 'any[]'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_sequence(schema: Schema, desc: string): Result<Sequence> {
    if (desc === 'sequence of strings' ||
        desc === 'sequence') {
        const kind = 'sequence'
        const type = 'any[]'
        return Result.ok({ type, kind, desc })
    }
    return Result.fail()
}

export function parse_set(schema: Schema, desc: string): Result<Set> {
    if (desc === 'set of strings' ||
        desc === 'set') {
        const kind = 'set'
        const type = 'any[]'
        return Result.ok({ type, kind, desc })
    }
    return Result.fail()
}

export function parse_dict(schema: Schema, desc: string): Result<Dict> {
    if (desc === 'dict') {
        const kind = 'dict'
        const type = `{ [key: string]: any }`
        return Result.ok({ type, kind, desc })
    }
    return Result.fail()
}

export function parse_object(schema: Schema, desc: string): Result<Object> {
    if (desc === 'iterable object' || desc === 'object') {
        const kind = 'object'
        const type = `{ [key: string]: any }`
        return Result.ok({ type, kind, desc })
    }
    return Result.fail()
}

export function parse_string(schema: Schema, desc: string): Result<String> {
    const match_0 = desc.match(/^string,*/)
    const match_1 = desc.match(/^str,*/)
    if (match_0 || match_1) {
        const kind = 'string'
        const type = 'string'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_integer(schema: Schema, desc: string): Result<Integer> {
    const match_0 = desc.match(/^int in \[(.*)\],*/)
    const match_1 = desc.match(/^int/)
    if (match_0 || match_1) {
        const kind = 'integer'
        const type = 'number'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_float(schema: Schema, desc: string): Result<Float> {
    const match_0 = desc.match(/^float in \[(.*)\],*/)
    const match_1 = desc.match(/^float*/)
    if (match_0 || match_1) {
        const kind = 'float'
        const type = 'number'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_boolean(schema: Schema, desc: string): Result<Boolean> {
    const match_0 = desc.match(/^boolean,*/)
    const match_1 = desc.match(/^bool,*/)
    if (match_0 || match_1) {
        const kind = 'boolean'
        const type = 'boolean'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}
export function parse_unknown(schema: Schema, desc: string): Result<Unknown> {
    if (desc === 'unknown') {
        const kind = 'unknown'
        const type = 'unknown'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}
export function parse_undefined(schema: Schema, desc: string): Result<Undefined> {
    if (desc === 'Undefined') {
        const kind = 'undefined'
        const type = 'undefined'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}
export function parse_void(schema: Schema, desc: string): Result<Void> {
    if (desc === 'void') {
        const kind = 'void'
        const type = 'void'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_function(schema: Schema, desc: string): Result<Function> {
    if (desc === 'Callable that takes a string and returns a bool' ||
        desc === 'Callable that takes a string and returns a string' ||
        desc === 'function') {
        const kind = 'function'
        const type = 'Function'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_matrix(schema: Schema, desc: string): Result<Matrix> {
    if (desc === 'mathutils.Matrix') {
        const kind = 'matrix'
        const type = 'Matrix'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function parse_class(schema: Schema, desc: string): Result<Class> {
    if (desc === 'subclass of bpy_struct' || desc === 'subclass of bpy.types.bpy_struct') {
        const class_schema = schema.classes.find(_class => _class.name === 'bpy_struct')!
        if (class_schema !== undefined) {
            const kind = 'class'
            const type = 'bpy_struct'
            const schema = class_schema
            return Result.ok({ kind, type, schema, desc })
        }
    }
    const match_0 = desc.match(/^([a-z|A-Z|0-9|_]*),*/)
    if (match_0) {
        const class_schema = schema.classes.find(_class => _class.name === match_0[1])
        if (class_schema !== undefined) {
            const kind = 'class'
            const type = match_0[1]
            const schema = class_schema
            return Result.ok({ kind, type, schema, desc })
        }
    }
    return Result.fail()
}

// Parses outlier descriptors from the schematics listings.
export function parse_outliers(schema: Schema, desc: string): Result<TypeInfo> {
    if (desc === 'Single value or array based on the target type') {
        const kind = 'union'
        const type = 'number | number[]'
        return Result.ok({ kind, type, desc })
    }
    // from bpy.ops.
    if (desc === 'Undefinedkey') {
        const kind = 'undefined'
        const type = 'undefined'
        return Result.ok({ kind, type, desc })
    }
    if (desc === 'path') {
        const kind = 'string'
        const type = 'string'
        return Result.ok({ kind, type, desc })
    }
    if (desc === 'bpy.types.FCurve or list if index is -1 with an array property.') {
        const kind = 'object'
        const type = 'any'
        return Result.ok({ kind, type, desc })
    }
    if (
        desc === 'actions' ||
        desc === 'bpy.types.FCurve or list if index is -1 with an array property.' ||
        desc === 'files' ||
        desc === 'selection' ||
        desc === 'settings') {
        const kind = 'object'
        const type = 'any'
        return Result.ok({ kind, type, desc })
    }
    return Result.fail()
}

export function resolve(schema: Schema, desc: string): Result<TypeInfo> {
    const parsers = [
        parse_specialized_collection,
        parse_generic_collection,
        parse_enum,
        parse_enum_set,
        parse_multi_dimensional_array,
        parse_list,
        parse_sequence,
        parse_set,
        parse_dict,
        parse_array,
        parse_iterable,
        parse_tuple,
        parse_object,
        parse_string,
        parse_integer,
        parse_float,
        parse_boolean,
        parse_unknown,
        parse_undefined,
        parse_void,
        parse_function,
        parse_matrix,
        parse_class,
        parse_outliers
    ]
    for (const parser of parsers) {
        const result = parser(schema, desc)
        if (result.ok()) {
            return result
        }
    }
    return Result.fail()
}
