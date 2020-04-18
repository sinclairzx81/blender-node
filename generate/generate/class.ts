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

import { Schema, ClassSchema } from '../../generate/schematics/schema'

import { TypeScriptMethod } from './method'
import { TypeScriptGetter } from './getter'
import { TypeScriptSetter } from './setter'
import { indent } from './indent'

export class TypeScriptClass {
    constructor(private global: Schema, private local: ClassSchema) { }



    public extends(): TypeScriptClass[] {
        return this.local.extends.map(name => {
            const schema = this.global.classes.find(x => x.name === name)!
            return new TypeScriptClass(this.global, schema)
        })
    }

    public requires(): string[] {
        const required = new Set<string>()
        for (const extend of this.extends()) {
            required.add(extend.name())
        }
        for (const property of this.getters()) {
            const info = property.type().info()
            if (info.kind === 'specialized-collection') {
                required.add(info.spec)
                required.add(info.type)
            }
            if (info.kind === 'generic-collection') {
                required.add(info.type)
            }
            if (info.kind === 'class') {
                required.add(info.type)
            }
        }
        for (const property of this.setters()) {
            const info = property.type().info()
            if (info.kind === 'specialized-collection') {
                required.add(info.spec)
                required.add(info.type)
            }
            if (info.kind === 'generic-collection') {
                required.add(info.type)
            }
            if (info.kind === 'class') {
                required.add(info.type)
            }
        }
        for (const method of this.methods()) {
            const info = method.returns().info()
            if (info.kind === 'specialized-collection') {
                required.add(info.spec)
                required.add(info.type)
            }
            if (info.kind === 'generic-collection') {
                required.add(info.type)
            }
            if (info.kind === 'class') {
                required.add(info.type)
            }
            for (const parameter of method.parameters()) {
                const info = parameter.type().info()
                if (info.kind === 'specialized-collection') {
                    required.add(info.spec)
                    required.add(info.type)
                }
                if (info.kind === 'generic-collection') {
                    required.add(info.type)
                }
                if (info.kind === 'class') {
                    required.add(info.type)
                }
            }
        }
        return [...required].filter(name => name !== this.name())
    }

    public getters(): TypeScriptGetter[] {
        const properties = [...this.local.readonly_attributes, ...this.local.attributes]
        return properties.map(schema => new TypeScriptGetter(this.global, schema))
    }

    public setters(): TypeScriptSetter[] {
        const properties = [...this.local.attributes]
        return properties.map(schema => new TypeScriptSetter(this.global, schema))
    }

    public methods(): TypeScriptMethod[] {
        return this.local.methods.map(schema => new TypeScriptMethod(this.global, schema))
    }

    public href(): string {
        return this.local.href
    }

    public comment(): string {
        return this.local.comment.replace(/\n/g, '')
    }

    public qualifier(): string {
        return this.local.qualifier
    }

    public name(): string {
        return this.local.name === 'Object'
            ? 'BlenderObject'
            : this.local.name
    }

    public fullname(): string {
        return [this.qualifier(), this.name()].join('')
    }

    public toString(): string {
        const buffer: string[] = []
        buffer.push(`import * as util from 'util'`)
        buffer.push(`import { BlenderCollection, Indexable } from '../../collection'`)
        buffer.push(`import { BlenderInterop } from '../../../worker/interop'`)
        buffer.push(`import { PythonInterop } from '../../../python/interop'`)
        
        for (const required of this.requires()) {
            buffer.push(`import { ${required} } from './${required}'`)
        }
        if (this.name() === 'bpy_struct') {
            buffer.push(`import { FCurve } from './FCurve'`)
        }
        if (this.name() === 'Gizmo' || this.name() === 'EditBone') {
            buffer.push(`import { Matrix } from '../../matrix'`)
        }
        buffer.push(``)

        buffer.push(`/**`)
        buffer.push(` * ${this.name()}`)
        buffer.push(` * `)
        buffer.push(` * ${this.href()}`)
        buffer.push(` */`)
        buffer.push(`export class ${this.name()} {`)
        buffer.push('')
        buffer.push(indent(`constructor(public interop: BlenderInterop, public accessor: string) { }`, 4))
        buffer.push('')
        // getters
        for (const getter of this.getters()) {
            buffer.push(indent(getter.toString(), 4))
            buffer.push('')
        }
        // setters
        for (const setter of this.setters()) {
            buffer.push(indent(setter.toString(), 4))
            buffer.push('')
        }
        // methods
        for (const method of this.methods()) {
            buffer.push(indent(method.toString(), 4))
            buffer.push('')
        }
        // inspect
        buffer.push(indent(`[util.inspect.custom]() {`, 4))
        buffer.push(indent('return this.accessor', 8))
        buffer.push(indent(`}`, 4))

        buffer.push(`}`)
        buffer.push('')

        return buffer.join('\n')
    }
}