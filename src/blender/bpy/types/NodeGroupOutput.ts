import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { PropertyGroup } from './PropertyGroup'

/**
 * NodeGroupOutput
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeGroupOutput.html
 */
export class NodeGroupOutput {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Interface socket data
     * @desc PropertyGroup, (readonly)
     */
    public get interface(): PropertyGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.interface`, PropertyGroup)
    }

    /**
     * True if this node is used as the active group output
     * @desc boolean, default False
     */
    public get is_active_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_active_output`)
    }

    /**
     * True if this node is used as the active group output
     * @desc boolean, default False
     */
    public set is_active_output(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_active_output`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
