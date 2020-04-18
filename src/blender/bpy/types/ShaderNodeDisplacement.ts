import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeDisplacement
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeDisplacement.html
 */
export class ShaderNodeDisplacement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Space of the input height
     * @desc enum in ['OBJECT', 'WORLD'], default 'OBJECT'
     */
    public get space(): 'OBJECT' | 'WORLD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * Space of the input height
     * @desc enum in ['OBJECT', 'WORLD'], default 'OBJECT'
     */
    public set space(value: 'OBJECT' | 'WORLD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
