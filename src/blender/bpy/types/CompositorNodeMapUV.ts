import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeMapUV
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeMapUV.html
 */
export class CompositorNodeMapUV {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, 100], default 0
     */
    public get alpha(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * 
     * @desc int in [0, 100], default 0
     */
    public set alpha(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
