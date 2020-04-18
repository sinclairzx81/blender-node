import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeNormalMap
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeNormalMap.html
 */
export class ShaderNodeNormalMap {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Space of the input normal
     * @desc enum in ['TANGENT', 'OBJECT', 'WORLD', 'BLENDER_OBJECT', 'BLENDER_WORLD'], default 'TANGENT'
     */
    public get space(): 'TANGENT' | 'OBJECT' | 'WORLD' | 'BLENDER_OBJECT' | 'BLENDER_WORLD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * UV Map for tangent space maps
     * @desc string, default '', (never None)
     */
    public get uv_map(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_map`)
    }

    /**
     * Space of the input normal
     * @desc enum in ['TANGENT', 'OBJECT', 'WORLD', 'BLENDER_OBJECT', 'BLENDER_WORLD'], default 'TANGENT'
     */
    public set space(value: 'TANGENT' | 'OBJECT' | 'WORLD' | 'BLENDER_OBJECT' | 'BLENDER_WORLD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
    }

    /**
     * UV Map for tangent space maps
     * @desc string, default '', (never None)
     */
    public set uv_map(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_map`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
