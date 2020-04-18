import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { PropertyGroup } from './PropertyGroup'

/**
 * NodeGroupInput
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeGroupInput.html
 */
export class NodeGroupInput {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Interface socket data
     * @desc PropertyGroup, (readonly)
     */
    public get interface(): PropertyGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.interface`, PropertyGroup)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
