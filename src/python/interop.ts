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

import { BlenderInterop } from '../worker/interop'

export class PythonEncodeError extends Error {
    constructor(received: string, message: string) {
        super(`Cannot encode '${received}'. ${message}`)
    }
}

export class PythonDecodeError extends Error {
    constructor(received: string, expected: string) {
        super(`Cannot decode value. Received '${received}' but expected a '${expected}'`)
    }
}

export class PythonInterop {

    // #region Setters

    public static setEnum(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeEnum(value)}`)
    }

    public static setEnumSet(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeEnumSet(value)}`)
    }

    public static setMultiDimensionalArray(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeMultiDimensionalArray(value)}`)
    }

    public static setArray(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeArray(value)}`)
    }

    public static setIterable(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeIterable(value)}`)
    }
    public static setTuple(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeTuple(value)}`)
    }

    public static setList(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeList(value)}`)
    }

    public static setSequence(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeSequence(value)}`)
    }

    public static setSet(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeSet(value)}`)
    }

    public static setDict(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeDict(value)}`)
    }

    public static setObject(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeObject(value)}`)
    }

    public static setString(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeString(value)}`)
    }

    public static setNumber(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeNumber(value)}`)
    }

    public static setInteger(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeInteger(value)}`)
    }

    public static setFloat(interop: BlenderInterop, accessor: string, value: number) {
        interop.execute(`${accessor} = ${this.encodeFloat(value)}`)
    }

    public static setBoolean(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeBoolean(value)}`)
    }

    public static setUnknown(interop: BlenderInterop, accessor: string, value: boolean) {
        interop.execute(`${accessor} = ${this.encodeUnknown(value)}`)
    }

    public static setUndefined(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeUndefined(value)}`)
    }

    public static setNull(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeNull(value)}`)
    }

    public static setVoid(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeVoid(value)}`)
    }

    public static setFunction(interop: BlenderInterop, accessor: string, value: any) {
        throw new PythonEncodeError(value, 'Cannot encode for functions')
    }

    public static setUnion(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeUnion(value)}`)
    }

    public static setClass(interop: BlenderInterop, accessor: string, value: any) {
        interop.execute(`${accessor} = ${this.encodeClass(value)}`)
    }

    // #endregion

    // #region Getters

    public static getEnum(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeEnum(result)
    }

    public static getEnumSet(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeEnumSet(result)
    }

    public static getMultiDimensionalArray(interop: BlenderInterop, accessor: string, type: string, rank0: number, rank1: number): any {
        const outer = Array.from({ length: rank0 })
        for(let i = 0; i < outer.length; i++) {
            const inner = Array.from({ length: rank1 })
            for(let j = 0; j < inner.length; j++) {
                const result = interop.execute(`${accessor}[${i}][${j}]`)
                inner[j] = this.decodeAny(result)
            }
            outer[i] = inner
        }
        return outer
    }

    public static getArray(interop: BlenderInterop, accessor: string, type: string, length: number): any {
        const array = Array.from({ length })
        for(let i = 0; i < array.length; i++) {
            const result = interop.execute(`${accessor}[${i}]`)
            array[i] = this.decodeAny(result)
        }
        return array
    }

    public static getIterable(interop: BlenderInterop, accessor: string): any {
        const result = interop.execute(`${accessor}`)
        return this.decodeIterable(result)
    }
    public static getTuple(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeTuple(result)
    }

    public static getList(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeList(result)
    }

    public static getSequence(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeSequence(result)
    }

    public static getSet(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeSet(result)
    }

    public static getDict(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeDict(result)
    }

    public static getObject(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeObject(result)
    }

    public static getString(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeString(result)
    }

    public static getNumber(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeNumber(result)
    }

    public static getInteger(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeInteger(result)
    }

    public static getFloat(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeFloat(result)
    }

    public static getBoolean(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeBoolean(result)
    }

    public static getUnknown(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeUnknown(result)
    }

    public static getUndefined(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeUndefined(result)
    }

    public static getNull(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeNull(result)
    }

    public static getVoid(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeVoid(result)
    }

    public static getFunction(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeFunction(result)
    }

    public static getUnion(interop: BlenderInterop, accessor: string) {
        const result = interop.execute(`${accessor}`)
        return this.decodeUnion(result)
    }

    public static getClass(interop: BlenderInterop, accessor: string, constructor: new (interop: BlenderInterop, accessor: string) => any) {
        return new constructor(interop, accessor)
    }

    // #endregion

    // #region Calls

    public static callEnum(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeEnum(result)
    }

    public static callEnumSet(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeEnumSet(result)
    }

    public static callMultiDimensionalArray(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeMultiDimensionalArray(result)
    }

    public static callArray(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeArray(result)
    }

    public static callIterable(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeIterable(result)
    }
    public static callTuple(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeTuple(result)
    }

    public static callList(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeList(result)
    }

    public static callSequence(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeSequence(result)
    }

    public static callSet(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeSet(result)
    }

    public static callDict(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeDict(result)
    }

    public static callObject(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeObject(result)
    }

    public static callString(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeString(result)
    }

    public static callNumber(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeNumber(result)
    }

    public static callInteger(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeInteger(result)
    }

    public static callFloat(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeFloat(result)
    }

    public static callBoolean(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeBoolean(result)
    }

    public static callUnknown(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeUnknown(result)
    }

    public static callUndefined(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeUndefined(result)
    }

    public static callNull(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeNull(result)
    }

    public static callVoid(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeVoid(result)
    }

    public static callFunction(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeFunction(result)
    }

    public static callUnion(interop: BlenderInterop, accessor: string, options: any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return this.decodeUnion(result)
    }

    public static callClass(interop: BlenderInterop, accessor: string, options: any, constructor: new (interop: BlenderInterop, accessor: string) => any) {
        const params = this.encodeArgumentList(options)
        const result = interop.execute(`${accessor}(${params})`)
        return new constructor(interop, result)
    }

    // #endregion

    // #region Reflect

    public static isNull(obj: any): boolean {
        return obj === null
    }
    public static isUndefined(obj: any): boolean {
        return obj === undefined
    }
    public static isString(obj: any): boolean {
        return typeof obj === 'string'
    }
    public static isNumber(obj: any): boolean {
        return typeof obj === 'number'
    }
    public static isBoolean(obj: any): boolean {
        return typeof obj === 'boolean'
    }
    public static isArray(obj: any): boolean {
        return typeof obj === 'object' && Array.isArray(obj)
    }
    public static isObject(obj: any): boolean {
        return typeof obj === 'object' && !Array.isArray(obj)
    }
    public static isBlenderObject(obj: any): boolean {
        return typeof obj === 'object' 
            && !Array.isArray(obj) 
            && typeof obj.accessor === 'string'
            && typeof obj.interop === 'object' 
    }
    // #endregion
    
    // #region Encode

    public static encodeAny(value: any): string {
        if (PythonInterop.isNull(value)) {
            return PythonInterop.encodeNull(value)
        }
        if (PythonInterop.isUndefined(value)) {
            return PythonInterop.encodeUndefined(value)
        }
        if (PythonInterop.isString(value)) {
            return PythonInterop.encodeString(value)
        }
        if (PythonInterop.isNumber(value)) {
            return PythonInterop.encodeFloat(value)
        }
        if (PythonInterop.isBoolean(value)) {
            return PythonInterop.encodeBoolean(value)
        }
        if(PythonInterop.isBlenderObject(value)) {
            return value.accessor
        }
        if (PythonInterop.isArray(value)) {
            const values = value.map((value: any) => PythonInterop.encodeAny(value))
            return `[${values.join(', ')}]`
        }
        if (PythonInterop.isObject(value)) {
            const properties: string[] = Object.entries(value).map(([key, value]) => `"${key}": ${PythonInterop.encodeAny(value)}`)
            return `{${properties.join(', ')}}`
        }
        return 'None'
    }

    public static encodeEnum(value: any): string {
        return PythonInterop.encodeString(value)
    }

    public static encodeEnumSet(value: any): string {
        return '{' + value.map((x: any) => `"${x}"`).join(', ') + '}'
    }

    public static encodeMultiDimensionalArray(value: any) {
        return PythonInterop.encodeAny(value)
    }

    public static encodeArray(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeIterable(value: any): string {
        return PythonInterop.encodeAny(value)
    }
    public static encodeTuple(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeList(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeSequence(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeSet(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeDict(value: any[]): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeObject(value: any[]): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeString(value: string): string {
        return `"${value}"`
    }

    public static encodeNumber(value: number): string {
        return value.toString()
    }

    public static encodeInteger(value: number): string {
        return (value | 0).toString()
    }

    public static encodeFloat(value: number): string {
        return PythonInterop.encodeNumber(value)
    }

    public static encodeBoolean(value: boolean): string {
        return value ? 'True' : 'False'
    }

    public static encodeUnknown(value: boolean): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeUndefined(value: any): string {
        return 'None'
    }

    public static encodeNull(value: any): string {
        return 'None'
    }

    public static encodeVoid(value: any): string {
        return 'None'
    }

    public static encodeFunction(value: any): string {
        throw new PythonEncodeError(value, 'Cannot encode for functions')
    }

    public static encodeUnion(value: any): string {
        return PythonInterop.encodeAny(value)
    }

    public static encodeClass(value: any): string {
        if(typeof value.accessor !== 'string') {
            throw new PythonEncodeError(value, 'Cannot encode class instance. No accessor.')
        }
        return value.accessor
    }

    /** Encodes an argument list */
    public static encodeArgumentList(value: any): string {
        const buffer = []
        for (const key of Object.keys(value)) {
            buffer.push(`${key}=${PythonInterop.encodeAny(value[key])}`)
        }
        return buffer.join(', ')
    }

    // #endregion

    // #region Decode

    public static decodeAny(value: string): any {
        try {
            // todo: need checks and balances here.
            // being able to identify the appropriate
            // type from python string. Or, need to
            // to have arrays with known types.
            if(value === 'True')  return true
            if(value === 'False') return false
            const f = new Function(`return ${value}`)
            return f()
        } catch (error) {
            throw new PythonDecodeError(value, 'Any')
        }
    }

    public static decodeEnum(value: string): any {
        return PythonInterop.decodeString(value)
    }

    public static decodeEnumSet(value: string): any {
        const unwrapped = value.slice(1, value.length - 1)
        return unwrapped.split(',').map(x => x.trim()).map(x => x.slice(1, x.length - 1))
    }

    public static decodeMultiDimensionalArray(value: string): any  {
        if(value.indexOf('Matrix') === 0) {
            value = value.replace('Matrix(', '')
            value = value.slice(0, value.length - 1)
            value = value.replace(/\(/g, '[')
            value = value.replace(/\)/g, ']')
            return PythonInterop.decodeAny(value)
        }
        
        return PythonInterop.decodeAny(value)
    }

    public static decodeArray(value: string): any {
        if(value.indexOf('Vector') === 0) {
            value = value.replace('Vector(', '')
            value = value.slice(0, value.length - 1)
            value = value.replace(/\(/g, '[')
            value = value.replace(/\)/g, ']')
            return PythonInterop.decodeAny(value)
        }
        if(value.indexOf('[') === 0 && value.indexOf('bpy.data.') !== -1) {
            value = value.slice(1, value.length - 1) // trim []
            return value.split(',').map(item => item.trim())
        }
        return PythonInterop.decodeAny(value)
    }

    public static decodeIterable(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeTuple(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeList(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeSequence(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeSet(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeDict(value: string): any  {
        return this.decodeAny(value)
    }

    public static decodeObject(value: string): any  {
        return this.decodeAny(value)
    }

    public static decodeString(value: string): any  {
        return value.slice(1, value.length - 1)
    }

    public static decodeNumber(value: string): any  {
        if (isNaN(value as any)) {
            throw new PythonDecodeError(value, 'Number')
        }
        return parseFloat(value)
    }

    public static decodeInteger(value: string): any  {
        if (isNaN(value as any)) {
            throw new PythonDecodeError(value, 'Number')
        }
        return parseInt(value)
    }

    public static decodeFloat(value: string): any  {
        if (isNaN(value as any)) {
            throw new PythonDecodeError(value, 'Number')
        }
        return parseFloat(value)
    }

    public static decodeBoolean(value: string): any  {
        if (value !== 'True' && value !== 'False') {
            throw new PythonDecodeError(value, 'True | False')
        }
        return value === 'True'
    }

    public static decodeUnknown(value: string): any  {
        return PythonInterop.decodeAny(value)
    }

    public static decodeUndefined(value: string): any  {
        return undefined
    }

    public static decodeNull(value: string): any  {
        return null
    }

    public static decodeVoid(value: string): any  {
        return void 0
    }

    public static decodeFunction(value: string): any  {
        throw new PythonDecodeError(value, 'Function')
    }

    public static decodeUnion(value: string): any {
        return PythonInterop.decodeAny(value)
    }

    //#endregion
}