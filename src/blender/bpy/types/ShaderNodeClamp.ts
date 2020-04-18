import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeClamp
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeClamp.html
 */
export class ShaderNodeClamp {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['MINMAX', 'RANGE'], default 'MINMAX'
     */
    public get clamp_type(): 'MINMAX' | 'RANGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.clamp_type`)
    }

    /**
     * 
     * @desc enum in ['MINMAX', 'RANGE'], default 'MINMAX'
     */
    public set clamp_type(value: 'MINMAX' | 'RANGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.clamp_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
