import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBrightContrast
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBrightContrast.html
 */
export class CompositorNodeBrightContrast {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Keep output image premultiplied alpha
     * @desc boolean, default False
     */
    public get use_premultiply(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_premultiply`)
    }

    /**
     * Keep output image premultiplied alpha
     * @desc boolean, default False
     */
    public set use_premultiply(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_premultiply`, value)
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
