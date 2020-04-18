import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RenderOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.render.html
 */
export class RenderOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add an Integrator Preset
     * @desc void
     */
    public cycles_integrator_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cycles_integrator_preset_add`, options)
    }

    /**
     * Add a Sampling Preset
     * @desc void
     */
    public cycles_sampling_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cycles_sampling_preset_add`, options)
    }

    /**
     * Take a snapshot of the active viewport
     * @desc void
     */
    public opengl(options: { animation?: boolean, render_keyed_only?: boolean, sequencer?: boolean, write_still?: boolean, view_context?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.opengl`, options)
    }

    /**
     * Play back rendered frames/movies using an external player
     * @desc void
     */
    public play_rendered_anim(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.play_rendered_anim`, {})
    }

    /**
     * Add or remove a Render Preset
     * @desc void
     */
    public preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preset_add`, options)
    }

    /**
     * Render active scene
     * @desc void
     */
    public render(options: { animation?: boolean, write_still?: boolean, use_viewport?: boolean, layer?: string, scene?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render`, options)
    }

    /**
     * Set shutter curve
     * @desc void
     */
    public shutter_curve_preset(options: { shape?: 'SHARP' | 'SMOOTH' | 'MAX' | 'LINE' | 'ROUND' | 'ROOT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shutter_curve_preset`, options)
    }

    /**
     * Cancel show render view
     * @desc void
     */
    public view_cancel(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_cancel`, {})
    }

    /**
     * Toggle show render view
     * @desc void
     */
    public view_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_show`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
