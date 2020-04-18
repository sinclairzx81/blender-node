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

import { Schema, MethodSchema } from '../../generate/schematics/schema'
import { TypeScriptParameter } from './parameter'
import { TypeScriptType } from './type'
import { indent } from './indent'

function methodCall(method: TypeScriptMethod) {
    
}

export class TypeScriptMethod {
    constructor(private global: Schema, private local: MethodSchema) {}

    public comment(): string {
        return this.local.comment.replace(/\n/g, '')
    }

    public name(): string {
        return this.local.name
    }

    public parameters(): TypeScriptParameter[] {
        return this.local.parameters.map(schema => new TypeScriptParameter(this.global, schema))
    }

    public returns(): TypeScriptType {
        return new TypeScriptType(this.global, this.local.returns)
    }

    public toString(): string {
        const buffer = []
        const params  = this.parameters().map(parameter => parameter.toString()).join(', ')
        const options = params.length > 0 ? `options: { ${params} }` : ``
        const param = params.length > 0 ? 'options': '{}'
        buffer.push(`/**`)
        buffer.push(` * ${this.comment()}`)
        buffer.push(` * @desc ${this.returns().info().desc}`)
        buffer.push(` */`)
        buffer.push(`public ${this.name()}(${options}): ${this.returns().toString()} {`)
        const accessor = '`${this.accessor}.' + this.name() + '`'
        switch (this.returns().info().kind) {
            // case 'specialized-collection':
            // case 'generic-collection':
            case 'enum':
                buffer.push(indent(`return PythonInterop.callEnum(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'enum-set':
                buffer.push(indent(`return PythonInterop.callEnumSet(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'multi-dimensional-array':
                buffer.push(indent(`return PythonInterop.callMultiDimensionalArray(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'array':
                buffer.push(indent(`return PythonInterop.callArray(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'iterable':
                buffer.push(indent(`return PythonInterop.callIterable(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'tuple':
                buffer.push(indent(`return PythonInterop.callTuple(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'list':
                buffer.push(indent(`return PythonInterop.callList(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'sequence':
                buffer.push(indent(`return PythonInterop.callSequence(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'set':
                buffer.push(indent(`return PythonInterop.callSet(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'dict':
                buffer.push(indent(`return PythonInterop.callDict(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'object':
                buffer.push(indent(`return PythonInterop.callObject(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'string':
                buffer.push(indent(`return PythonInterop.callString(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'number':
                buffer.push(indent(`return PythonInterop.callNumber(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'integer':
                buffer.push(indent(`return PythonInterop.callInteger(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'float':
                buffer.push(indent(`return PythonInterop.callFloat(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'boolean':
                buffer.push(indent(`return PythonInterop.callBoolean(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'unknown':
                buffer.push(indent(`return PythonInterop.callUnknown(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'undefined':
                buffer.push(indent(`return PythonInterop.callUndefined(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'void':
                buffer.push(indent(`return PythonInterop.callVoid(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'function':
                buffer.push(indent(`return PythonInterop.callFunction(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'union':
                buffer.push(indent(`return PythonInterop.callUnion(this.interop, ${accessor}, ${param})`, 4))
                break
            case 'class':
                buffer.push(indent(`return PythonInterop.callClass(this.interop, ${accessor}, ${param}, ${this.returns().info().type})`, 4))
                break
            default:
                throw Error('Call' + JSON.stringify(this.returns().info()))
        }

        buffer.push(`}`)
        return buffer.join('\n')
    }
}