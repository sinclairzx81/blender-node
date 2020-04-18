import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBump
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBump.html
 */
export class ShaderNodeBump {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Invert the bump mapping direction to push into the surface instead of out
     * @desc boolean, default False
     */
    public get invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert`)
    }

    /**
     * Invert the bump mapping direction to push into the surface instead of out
     * @desc boolean, default False
     */
    public set invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
