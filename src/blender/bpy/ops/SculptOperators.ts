import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SculptOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.sculpt.html
 */
export class SculptOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Sculpt a stroke into the geometry
     * @desc void
     */
    public brush_stroke(options: { stroke?: string, mode?: 'NORMAL' | 'INVERT' | 'SMOOTH', ignore_background_click?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.brush_stroke`, options)
    }

    /**
     * Flood fill the mesh with the selected detail setting
     * @desc void
     */
    public detail_flood_fill(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.detail_flood_fill`, {})
    }

    /**
     * Generates a mask based on the geometry cavity and pointiness
     * @desc void
     */
    public dirty_mask(options: { dirty_only?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dirty_mask`, options)
    }

    /**
     * Dynamic topology alters the mesh topology while sculpting
     * @desc void
     */
    public dynamic_topology_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dynamic_topology_toggle`, {})
    }

    /**
     * Expands a mask from the initial active vertex under the cursor
     * @desc void
     */
    public mask_expand(options: { invert?: boolean, use_cursor?: boolean, update_pivot?: boolean, smooth_iterations?: number, mask_speed?: number, use_normals?: boolean, keep_previous_mask?: boolean, edge_sensitivity?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mask_expand`, options)
    }

    /**
     * Applies a filter to modify the current mask
     * @desc void
     */
    public mask_filter(options: { filter_type?: 'SMOOTH' | 'SHARPEN' | 'GROW' | 'SHRINK' | 'CONTRAST_INCREASE' | 'CONTRAST_DECREASE', iterations?: number, auto_iteration_count?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mask_filter`, options)
    }

    /**
     * Applies a filter to modify the current mesh
     * @desc void
     */
    public mesh_filter(options: { type?: 'SMOOTH' | 'SCALE' | 'INFLATE' | 'SPHERE' | 'RANDOM' | 'RELAX', strength?: number, deform_axis?: ('X' | 'Y' | 'Z')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mesh_filter`, options)
    }

    /**
     * Recalculate the sculpt BVH to improve performance
     * @desc void
     */
    public optimize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.optimize`, {})
    }

    /**
     * Sample the mesh detail on clicked point
     * @desc void
     */
    public sample_detail_size(options: { location?: [number, number], mode?: 'DYNTOPO' | 'VOXEL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample_detail_size`, options)
    }

    /**
     * Toggle sculpt mode in 3D view
     * @desc void
     */
    public sculptmode_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sculptmode_toggle`, {})
    }

    /**
     * Set the mesh detail (either relative or constant one, depending on current dyntopo mode)
     * @desc void
     */
    public set_detail_size(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_detail_size`, {})
    }

    /**
     * Reset the copy of the mesh that is being sculpted on
     * @desc void
     */
    public set_persistent_base(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_persistent_base`, {})
    }

    /**
     * Sets the sculpt transform pivot position
     * @desc void
     */
    public set_pivot_position(options: { mode?: 'ORIGIN' | 'UNMASKED' | 'BORDER' | 'ACTIVE' | 'SURFACE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_pivot_position`, options)
    }

    /**
     * Symmetrize the topology modifications
     * @desc void
     */
    public symmetrize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.symmetrize`, {})
    }

    /**
     * Sculpt UVs using a brush
     * @desc void
     */
    public uv_sculpt_stroke(options: { mode?: 'NORMAL' | 'INVERT' | 'RELAX' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.uv_sculpt_stroke`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
