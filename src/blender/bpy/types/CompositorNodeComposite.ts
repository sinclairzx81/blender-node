import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeComposite
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeComposite.html
 */
export class CompositorNodeComposite {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Colors are treated alpha premultiplied, or colors output straight (alpha gets set to 1)
     * @desc boolean, default False
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
    }

    /**
     * Colors are treated alpha premultiplied, or colors output straight (alpha gets set to 1)
     * @desc boolean, default False
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
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
