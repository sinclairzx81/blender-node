import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * DpaintOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.dpaint.html
 */
export class DpaintOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bake dynamic paint image sequence surface
     * @desc void
     */
    public bake(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, {})
    }

    /**
     * Add or remove Dynamic Paint output data layer
     * @desc void
     */
    public output_toggle(options: { output?: 'A' | 'B' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.output_toggle`, options)
    }

    /**
     * Add a new Dynamic Paint surface slot
     * @desc void
     */
    public surface_slot_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.surface_slot_add`, {})
    }

    /**
     * Remove the selected surface slot
     * @desc void
     */
    public surface_slot_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.surface_slot_remove`, {})
    }

    /**
     * Toggle whether given type is active or not
     * @desc void
     */
    public type_toggle(options: { type?: 'CANVAS' | 'BRUSH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.type_toggle`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
