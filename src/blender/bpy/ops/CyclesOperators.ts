import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CyclesOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.cycles.html
 */
export class CyclesOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add an AOV pass
     * @desc void
     */
    public add_aov(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_aov`, {})
    }

    /**
     * Denoise rendered animation sequence using current scene and view layer settings. Requires denoising data passes and output to OpenEXR multilayer files
     * @desc void
     */
    public denoise_animation(options: { input_filepath?: string, output_filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.denoise_animation`, options)
    }

    /**
     * Combine OpenEXR multilayer images rendered with different sampleranges into one image with reduced noise
     * @desc void
     */
    public merge_images(options: { input_filepath1?: string, input_filepath2?: string, output_filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.merge_images`, options)
    }

    /**
     * Remove an AOV pass
     * @desc void
     */
    public remove_aov(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_aov`, {})
    }

    /**
     * Enable nodes on a material, world or light
     * @desc void
     */
    public use_shading_nodes(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.use_shading_nodes`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
