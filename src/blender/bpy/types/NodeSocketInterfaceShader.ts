import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'
import { NodeSocketInterfaceStandard } from './NodeSocketInterfaceStandard'

/**
 * NodeSocketInterfaceShader
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceShader.html
 */
export class NodeSocketInterfaceShader {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    [util.inspect.custom]() {
        return this.accessor
    }
}
