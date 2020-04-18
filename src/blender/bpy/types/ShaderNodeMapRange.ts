import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeMapRange
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeMapRange.html
 */
export class ShaderNodeMapRange {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Clamp the result to the target range [To Min, To Max]
     * @desc boolean, default False
     */
    public get clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.clamp`)
    }

    /**
     * 
     * @desc enum in ['LINEAR', 'STEPPED', 'SMOOTHSTEP', 'SMOOTHERSTEP'], default 'LINEAR'
     */
    public get interpolation_type(): 'LINEAR' | 'STEPPED' | 'SMOOTHSTEP' | 'SMOOTHERSTEP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation_type`)
    }

    /**
     * Clamp the result to the target range [To Min, To Max]
     * @desc boolean, default False
     */
    public set clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.clamp`, value)
    }

    /**
     * 
     * @desc enum in ['LINEAR', 'STEPPED', 'SMOOTHSTEP', 'SMOOTHERSTEP'], default 'LINEAR'
     */
    public set interpolation_type(value: 'LINEAR' | 'STEPPED' | 'SMOOTHSTEP' | 'SMOOTHERSTEP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
