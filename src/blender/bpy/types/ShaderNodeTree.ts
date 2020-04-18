import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { NodeTree } from './NodeTree'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeTree
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTree.html
 */
export class ShaderNodeTree {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Return active shader output node for the specified target
     * @desc ShaderNode
     */
    public get_output_node(options: { target?: 'ALL' | 'EEVEE' | 'CYCLES' }): ShaderNode {
        return PythonInterop.callClass(this.interop, `${this.accessor}.get_output_node`, options, ShaderNode)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
