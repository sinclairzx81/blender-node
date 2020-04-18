import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Modifier
 * 
 * https://docs.blender.org/api/current/bpy.types.Modifier.html
 */
export class Modifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['DATA_TRANSFER', 'MESH_CACHE', 'MESH_SEQUENCE_CACHE', 'NORMAL_EDIT', 'WEIGHTED_NORMAL', 'UV_PROJECT', 'UV_WARP', 'VERTEX_WEIGHT_EDIT', 'VERTEX_WEIGHT_MIX', 'VERTEX_WEIGHT_PROXIMITY', 'ARRAY', 'BEVEL', 'BOOLEAN', 'BUILD', 'DECIMATE', 'EDGE_SPLIT', 'MASK', 'MIRROR', 'MULTIRES', 'REMESH', 'SCREW', 'SKIN', 'SOLIDIFY', 'SUBSURF', 'TRIANGULATE', 'WIREFRAME', 'WELD', 'ARMATURE', 'CAST', 'CURVE', 'DISPLACE', 'HOOK', 'LAPLACIANDEFORM', 'LATTICE', 'MESH_DEFORM', 'SHRINKWRAP', 'SIMPLE_DEFORM', 'SMOOTH', 'CORRECTIVE_SMOOTH', 'LAPLACIANSMOOTH', 'SURFACE_DEFORM', 'WARP', 'WAVE', 'CLOTH', 'COLLISION', 'DYNAMIC_PAINT', 'EXPLODE', 'OCEAN', 'PARTICLE_INSTANCE', 'PARTICLE_SYSTEM', 'FLUID', 'SOFT_BODY', 'SURFACE'], default 'DATA_TRANSFER', (readonly)
     */
    public get type(): 'DATA_TRANSFER' | 'MESH_CACHE' | 'MESH_SEQUENCE_CACHE' | 'NORMAL_EDIT' | 'WEIGHTED_NORMAL' | 'UV_PROJECT' | 'UV_WARP' | 'VERTEX_WEIGHT_EDIT' | 'VERTEX_WEIGHT_MIX' | 'VERTEX_WEIGHT_PROXIMITY' | 'ARRAY' | 'BEVEL' | 'BOOLEAN' | 'BUILD' | 'DECIMATE' | 'EDGE_SPLIT' | 'MASK' | 'MIRROR' | 'MULTIRES' | 'REMESH' | 'SCREW' | 'SKIN' | 'SOLIDIFY' | 'SUBSURF' | 'TRIANGULATE' | 'WIREFRAME' | 'WELD' | 'ARMATURE' | 'CAST' | 'CURVE' | 'DISPLACE' | 'HOOK' | 'LAPLACIANDEFORM' | 'LATTICE' | 'MESH_DEFORM' | 'SHRINKWRAP' | 'SIMPLE_DEFORM' | 'SMOOTH' | 'CORRECTIVE_SMOOTH' | 'LAPLACIANSMOOTH' | 'SURFACE_DEFORM' | 'WARP' | 'WAVE' | 'CLOTH' | 'COLLISION' | 'DYNAMIC_PAINT' | 'EXPLODE' | 'OCEAN' | 'PARTICLE_INSTANCE' | 'PARTICLE_SYSTEM' | 'FLUID' | 'SOFT_BODY' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Modifier name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Set modifier expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Display modifier in Edit mode
     * @desc boolean, default False
     */
    public get show_in_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_in_editmode`)
    }

    /**
     * Adjust edit cage to modifier result
     * @desc boolean, default False
     */
    public get show_on_cage(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_on_cage`)
    }

    /**
     * Use modifier during render
     * @desc boolean, default False
     */
    public get show_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_render`)
    }

    /**
     * Display modifier in viewport
     * @desc boolean, default False
     */
    public get show_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_viewport`)
    }

    /**
     * Apply this and all preceding deformation modifiers on splines’ points rather than on filled curve/surface
     * @desc boolean, default False
     */
    public get use_apply_on_spline(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_apply_on_spline`)
    }

    /**
     * Modifier name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Set modifier expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Display modifier in Edit mode
     * @desc boolean, default False
     */
    public set show_in_editmode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_in_editmode`, value)
    }

    /**
     * Adjust edit cage to modifier result
     * @desc boolean, default False
     */
    public set show_on_cage(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_on_cage`, value)
    }

    /**
     * Use modifier during render
     * @desc boolean, default False
     */
    public set show_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_render`, value)
    }

    /**
     * Display modifier in viewport
     * @desc boolean, default False
     */
    public set show_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_viewport`, value)
    }

    /**
     * Apply this and all preceding deformation modifiers on splines’ points rather than on filled curve/surface
     * @desc boolean, default False
     */
    public set use_apply_on_spline(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_apply_on_spline`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
