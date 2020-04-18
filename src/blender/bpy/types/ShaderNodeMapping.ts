import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeMapping
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeMapping.html
 */
export class ShaderNodeMapping {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of vector that the mapping transforms
     * @desc enum in ['POINT', 'TEXTURE', 'VECTOR', 'NORMAL'], default 'POINT'
     */
    public get vector_type(): 'POINT' | 'TEXTURE' | 'VECTOR' | 'NORMAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vector_type`)
    }

    /**
     * Type of vector that the mapping transforms
     * @desc enum in ['POINT', 'TEXTURE', 'VECTOR', 'NORMAL'], default 'POINT'
     */
    public set vector_type(value: 'POINT' | 'TEXTURE' | 'VECTOR' | 'NORMAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vector_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
