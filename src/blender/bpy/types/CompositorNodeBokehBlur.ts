import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBokehBlur
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBokehBlur.html
 */
export class CompositorNodeBokehBlur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Blur limit, maximum CoC radius
     * @desc float in [0, 10000], default 0.0
     */
    public get blur_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blur_max`)
    }

    /**
     * Extend bounds of the input image to fully fit blurred image
     * @desc boolean, default False
     */
    public get use_extended_bounds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_extended_bounds`)
    }

    /**
     * Support variable blur per-pixel when using an image for size input
     * @desc boolean, default False
     */
    public get use_variable_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_variable_size`)
    }

    /**
     * Blur limit, maximum CoC radius
     * @desc float in [0, 10000], default 0.0
     */
    public set blur_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blur_max`, value)
    }

    /**
     * Extend bounds of the input image to fully fit blurred image
     * @desc boolean, default False
     */
    public set use_extended_bounds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_extended_bounds`, value)
    }

    /**
     * Support variable blur per-pixel when using an image for size input
     * @desc boolean, default False
     */
    public set use_variable_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_variable_size`, value)
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
