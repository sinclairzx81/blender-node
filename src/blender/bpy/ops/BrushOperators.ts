import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.brush.html
 */
export class BrushOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add brush by mode type
     * @desc void
     */
    public add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, {})
    }

    /**
     * Add brush for Grease Pencil
     * @desc void
     */
    public add_gpencil(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_gpencil`, {})
    }

    /**
     * Set brush shape
     * @desc void
     */
    public curve_preset(options: { shape?: 'SHARP' | 'SMOOTH' | 'MAX' | 'LINE' | 'ROUND' | 'ROOT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.curve_preset`, options)
    }

    /**
     * Return brush to defaults based on current tool
     * @desc void
     */
    public reset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset`, {})
    }

    /**
     * Change brush size by a scalar
     * @desc void
     */
    public scale_size(options: { scalar?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scale_size`, options)
    }

    /**
     * Control the stencil brush
     * @desc void
     */
    public stencil_control(options: { mode?: 'TRANSLATION' | 'SCALE' | 'ROTATION', texmode?: 'PRIMARY' | 'SECONDARY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stencil_control`, options)
    }

    /**
     * When using an image texture, adjust the stencil size to fit the image aspect ratio
     * @desc void
     */
    public stencil_fit_image_aspect(options: { use_repeat?: boolean, use_scale?: boolean, mask?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stencil_fit_image_aspect`, options)
    }

    /**
     * Reset the stencil transformation to the default
     * @desc void
     */
    public stencil_reset_transform(options: { mask?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stencil_reset_transform`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
