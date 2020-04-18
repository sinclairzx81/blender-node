import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeVertexColor
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeVertexColor.html
 */
export class ShaderNodeVertexColor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Vertex Color
     * @desc string, default '', (never None)
     */
    public get layer_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.layer_name`)
    }

    /**
     * Vertex Color
     * @desc string, default '', (never None)
     */
    public set layer_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.layer_name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
