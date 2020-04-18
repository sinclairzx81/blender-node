import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeUVMap
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeUVMap.html
 */
export class ShaderNodeUVMap {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use the parent of the dupli object if possible
     * @desc boolean, default False
     */
    public get from_instancer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.from_instancer`)
    }

    /**
     * UV coordinates to be used for mapping
     * @desc string, default '', (never None)
     */
    public get uv_map(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_map`)
    }

    /**
     * Use the parent of the dupli object if possible
     * @desc boolean, default False
     */
    public set from_instancer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.from_instancer`, value)
    }

    /**
     * UV coordinates to be used for mapping
     * @desc string, default '', (never None)
     */
    public set uv_map(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_map`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
