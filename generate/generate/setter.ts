/*--------------------------------------------------------------------------

Blender-Node

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

import { Schema, AttributeSchema } from '../../generate/schematics/schema'
import { TypeScriptType }          from './type'
import { indent } from './indent'

export class TypeScriptSetter {
    constructor(private global: Schema, private local: AttributeSchema) {}
    
    public comment(): string {
        return this.local.comment.replace(/\n/g, '')
    }

    public name(): string {
        return this.local.name
    }

    public type(): TypeScriptType {
        return new TypeScriptType(this.global, this.local.desc)
    }

    public toString(): string {
        const buffer   = []
        const accessor = '`${this.accessor}.' + this.name() + '`'
        buffer.push(`/**`)
        buffer.push(` * ${this.comment()}`)
        buffer.push(` * @desc ${this.type().info().desc}`)
        buffer.push(` */`)
        buffer.push(`public set ${this.name()}(value: ${this.type().toString()}) {`)
        switch (this.type().info().kind) {
            case 'enum':
                buffer.push(indent(`PythonInterop.setEnum(this.interop, ${accessor}, value)`, 4))
                break
            case 'enum-set':
                buffer.push(indent(`PythonInterop.setEnumSet(this.interop, ${accessor}, value)`, 4))
                break
            case 'multi-dimensional-array':
                buffer.push(indent(`PythonInterop.setMultiDimensionalArray(this.interop, ${accessor}, value)`, 4))
                break
            case 'array':
                buffer.push(indent(`PythonInterop.setArray(this.interop, ${accessor}, value)`, 4))
                break
            case 'iterable':
                buffer.push(indent(`PythonInterop.setIterable(this.interop, ${accessor}, value)`, 4))
                break
            case 'tuple':
                buffer.push(indent(`PythonInterop.setTuple(this.interop, ${accessor}, value)`, 4))
                break
            case 'list':
                buffer.push(indent(`PythonInterop.setList(this.interop, ${accessor}, value)`, 4))
                break
            case 'sequence':
                buffer.push(indent(`PythonInterop.setSequence(this.interop, ${accessor}, value)`, 4))
                break
            case 'set':
                buffer.push(indent(`PythonInterop.setSet(this.interop, ${accessor}, value)`, 4))
                break
            case 'dict':
                buffer.push(indent(`PythonInterop.setDict(this.interop, ${accessor}, value)`, 4))
                break
            case 'object':
                buffer.push(indent(`PythonInterop.setObject(this.interop, ${accessor}, value)`, 4))
                break
            case 'string':
                buffer.push(indent(`PythonInterop.setString(this.interop, ${accessor}, value)`, 4))
                break
            case 'number':
                buffer.push(indent(`PythonInterop.setNumber(this.interop, ${accessor}, value)`, 4))
                break
            case 'integer':
                buffer.push(indent(`PythonInterop.setInteger(this.interop, ${accessor}, value)`, 4))
                break
            case 'float':
                buffer.push(indent(`PythonInterop.setFloat(this.interop, ${accessor}, value)`, 4))
                break
            case 'boolean':
                buffer.push(indent(`PythonInterop.setBoolean(this.interop, ${accessor}, value)`, 4))
                break
            case 'unknown':
                buffer.push(indent(`PythonInterop.setUnknown(this.interop, ${accessor}, value)`, 4))
                break
            case 'undefined':
                buffer.push(indent(`PythonInterop.setUndefined(this.interop, ${accessor}, value)`, 4))
                break
            case 'void':
                buffer.push(indent(`PythonInterop.setVoid(this.interop, ${accessor}, value)`, 4))
                break
            case 'function':
                buffer.push(indent(`PythonInterop.setFunction(this.interop, ${accessor}, value)`, 4))
                break
            case 'union':
                buffer.push(indent(`PythonInterop.setUnion(this.interop, ${accessor}, value)`, 4))
                break
            case 'class':
                buffer.push(indent(`PythonInterop.setClass(this.interop, ${accessor}, value)`, 4))
                break
            default:
                throw Error('Getter' + JSON.stringify(this.type().info()))
        }
        buffer.push(`}`)
        return buffer.join('\n')
    }
}