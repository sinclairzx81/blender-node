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

import { Schema } from '../../generate/schematics/schema'
import { resolve, TypeInfo } from './resolve'

export class TypeScriptType {

    constructor(private global: Schema, private descriptor: string) { }
    
    public info(): TypeInfo {
        const result = resolve(this.global, this.descriptor)
        if(!result.ok()) throw new Error(`Cannot resolve type descriptor ${this.descriptor}`)
        const info = result.value()
        // Hack: Annoying TypeScript issue where the class
        // cannot be named 'Object' without messing with
        // the esModuleInterop. Downstream processes generate
        // based on this type name, so rename it here.
        switch(info.kind) {
            case 'specialized-collection': {
                if(info.type === 'Object') {
                    return { ...info, type: 'BlenderObject' }
                } else {
                    return { ...info }
                }
            }
            case 'generic-collection':
                if(info.type === 'Object') {
                    return { ...info, type: 'BlenderObject' }
                } else {
                    return { ...info }
                }
            case 'class':
                if(info.type === 'Object') {
                    return { ...info, type: 'BlenderObject' }
                } else {
                    return { ...info }
                }
            default:
                return { ...info }
        }
    }

    public toString(): string {
        const info = this.info()
        // Hack: Annoying TypeScript issue where the class
        // cannot be named 'Object' without messing with
        // the esModuleInterop. Downstream processes generate
        // based on this type name, so rename it here.
        switch(info.kind) {
            case 'specialized-collection': {
                if(info.type === 'Object') {
                    return `BlenderCollection<BlenderObject> & Indexable<BlenderObject> & ${info.spec}`
                } else {
                    return `BlenderCollection<${info.type}> & Indexable<${info.type}> & ${info.spec}`
                }
            }
            case 'generic-collection':
                if(info.type === 'Object') {
                    return `BlenderCollection<BlenderObject> & Indexable<BlenderObject>`
                } else {
                    return `BlenderCollection<${info.type}> & Indexable<${info.type}>`
                }
            case 'class':
                if(info.type === 'Object') {
                    return 'BlenderObject'
                } else {
                    return info.type
                }
            default:
                return info.type

        }
    }
}