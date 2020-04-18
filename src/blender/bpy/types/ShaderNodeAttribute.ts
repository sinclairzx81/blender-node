import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeAttribute
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeAttribute.html
 */
export class ShaderNodeAttribute {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get attribute_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.attribute_name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set attribute_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.attribute_name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
