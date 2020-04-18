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
import { indent }                  from './indent'

export class TypeScriptGetter {
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
        buffer.push(`public get ${this.name()}(): ${this.type().toString()} {`)
        const info = this.type().info()
        switch (info.kind) {
            case 'specialized-collection':
                buffer.push(indent(`return BlenderCollection.createSpecialized(this.interop, ${accessor}, ${info.spec}, ${info.type})`, 4))
                break
            case 'generic-collection':
                buffer.push(indent(`return BlenderCollection.createGeneric(this.interop, ${accessor}, ${info.type})`, 4))
                break
            case 'enum':
                buffer.push(indent(`return PythonInterop.getEnum(this.interop, ${accessor})`, 4))
                break
            case 'enum-set':
                buffer.push(indent(`return PythonInterop.getEnumSet(this.interop, ${accessor})`, 4))
                break
            case 'multi-dimensional-array':
                buffer.push(indent(`return PythonInterop.getMultiDimensionalArray(this.interop, ${accessor}, '${info.item}', ${info.rank0}, ${info.rank1})`, 4))
                break
            case 'array':
                buffer.push(indent(`return PythonInterop.getArray(this.interop, ${accessor}, '${info.item}', ${info.length})`, 4))
                break
            case 'iterable':
                buffer.push(indent(`return PythonInterop.getIterable(this.interop, ${accessor})`, 4))
                break
            case 'tuple':
                buffer.push(indent(`return PythonInterop.getTuple(this.interop, ${accessor})`, 4))
                break
            case 'list':
                buffer.push(indent(`return PythonInterop.getList(this.interop, ${accessor})`, 4))
                break
            case 'sequence':
                buffer.push(indent(`return PythonInterop.getSequence(this.interop, ${accessor})`, 4))
                break
            case 'set':
                buffer.push(indent(`return PythonInterop.getSet(this.interop, ${accessor})`, 4))
                break
            case 'dict':
                buffer.push(indent(`return PythonInterop.getDict(this.interop, ${accessor})`, 4))
                break
            case 'object':
                buffer.push(indent(`return PythonInterop.getObject(this.interop, ${accessor})`, 4))
                break
            case 'string':
                buffer.push(indent(`return PythonInterop.getString(this.interop, ${accessor})`, 4))
                break
            case 'number':
                buffer.push(indent(`return PythonInterop.getNumber(this.interop, ${accessor})`, 4))
                break
            case 'integer':
                buffer.push(indent(`return PythonInterop.getInteger(this.interop, ${accessor})`, 4))
                break
            case 'float':
                buffer.push(indent(`return PythonInterop.getFloat(this.interop, ${accessor})`, 4))
                break
            case 'boolean':
                buffer.push(indent(`return PythonInterop.getBoolean(this.interop, ${accessor})`, 4))
                break
            case 'unknown':
                buffer.push(indent(`return PythonInterop.getUnknown(this.interop, ${accessor})`, 4))
                break
            case 'undefined':
                buffer.push(indent(`return PythonInterop.getUndefined(this.interop, ${accessor})`, 4))
                break
            case 'void':
                buffer.push(indent(`return PythonInterop.getVoid(this.interop, ${accessor})`, 4))
                break
            case 'function':
                buffer.push(indent(`return PythonInterop.getFunction(this.interop, ${accessor})`, 4))
                break
            case 'union':
                buffer.push(indent(`return PythonInterop.getUnion(this.interop, ${accessor})`, 4))
                break
            case 'class':
                buffer.push(indent(`return PythonInterop.getClass(this.interop, ${accessor}, ${this.type().info().type})`, 4))
                break
            default:
                throw Error('Getter' + JSON.stringify(this.type().info()))
        }
        buffer.push(`}`)
        return buffer.join('\n')
    }
}