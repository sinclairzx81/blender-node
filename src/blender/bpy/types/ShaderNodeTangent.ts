import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeTangent
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTangent.html
 */
export class ShaderNodeTangent {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Axis for radial tangents
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis`)
    }

    /**
     * Method to use for the tangent
     * @desc enum in ['RADIAL', 'UV_MAP'], default 'RADIAL'
     */
    public get direction_type(): 'RADIAL' | 'UV_MAP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.direction_type`)
    }

    /**
     * UV Map for tangent generated from UV
     * @desc string, default '', (never None)
     */
    public get uv_map(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_map`)
    }

    /**
     * Axis for radial tangents
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis`, value)
    }

    /**
     * Method to use for the tangent
     * @desc enum in ['RADIAL', 'UV_MAP'], default 'RADIAL'
     */
    public set direction_type(value: 'RADIAL' | 'UV_MAP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.direction_type`, value)
    }

    /**
     * UV Map for tangent generated from UV
     * @desc string, default '', (never None)
     */
    public set uv_map(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_map`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
