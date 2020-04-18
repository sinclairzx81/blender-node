import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FluidOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.fluid.html
 */
export class FluidOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bake Entire Fluid Simulation
     * @desc void
     */
    public bake_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_all`, {})
    }

    /**
     * Bake Fluid Data
     * @desc void
     */
    public bake_data(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_data`, {})
    }

    /**
     * Bake Fluid Guiding
     * @desc void
     */
    public bake_guides(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_guides`, {})
    }

    /**
     * Bake Fluid Mesh
     * @desc void
     */
    public bake_mesh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_mesh`, {})
    }

    /**
     * Bake Fluid Noise
     * @desc void
     */
    public bake_noise(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_noise`, {})
    }

    /**
     * Bake Fluid Particles
     * @desc void
     */
    public bake_particles(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_particles`, {})
    }

    /**
     * Free Entire Fluid Simulation
     * @desc void
     */
    public free_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_all`, {})
    }

    /**
     * Free Fluid Data
     * @desc void
     */
    public free_data(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_data`, {})
    }

    /**
     * Free Fluid Guiding
     * @desc void
     */
    public free_guides(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_guides`, {})
    }

    /**
     * Free Fluid Mesh
     * @desc void
     */
    public free_mesh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_mesh`, {})
    }

    /**
     * Free Fluid Noise
     * @desc void
     */
    public free_noise(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_noise`, {})
    }

    /**
     * Free Fluid Particles
     * @desc void
     */
    public free_particles(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_particles`, {})
    }

    /**
     * Pause Bake
     * @desc void
     */
    public pause_bake(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pause_bake`, {})
    }

    /**
     * Add or remove a Fluid Preset
     * @desc void
     */
    public preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preset_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
