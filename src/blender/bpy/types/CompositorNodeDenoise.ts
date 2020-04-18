import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeDenoise
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDenoise.html
 */
export class CompositorNodeDenoise {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Process HDR images
     * @desc boolean, default False
     */
    public get use_hdr(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_hdr`)
    }

    /**
     * Process HDR images
     * @desc boolean, default False
     */
    public set use_hdr(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_hdr`, value)
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
