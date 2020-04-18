import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeSeparateHSV
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeSeparateHSV.html
 */
export class ShaderNodeSeparateHSV {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    [util.inspect.custom]() {
        return this.accessor
    }
}