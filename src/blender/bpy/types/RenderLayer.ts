import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { RenderPasses } from './RenderPasses'
import { RenderPass } from './RenderPass'

/**
 * RenderLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderLayer.html
 */
export class RenderLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * For Zmask, only render what is behind solid z values instead of in front
     * @desc boolean, default False, (readonly)
     */
    public get invert_zmask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_zmask`)
    }

    /**
     * View layer name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc RenderPasses bpy_prop_collection of RenderPass, (readonly)
     */
    public get passes(): BlenderCollection<RenderPass> & Indexable<RenderPass> & RenderPasses {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.passes`, RenderPasses, RenderPass)
    }

    /**
     * Fill in Z values for solid faces in invisible layers, for masking
     * @desc boolean, default False, (readonly)
     */
    public get use_all_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_all_z`)
    }

    /**
     * Render Ambient Occlusion in this Layer
     * @desc boolean, default False, (readonly)
     */
    public get use_ao(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ao`)
    }

    /**
     * Render Edge-enhance in this Layer (only works for Solid faces)
     * @desc boolean, default False, (readonly)
     */
    public get use_edge_enhance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_enhance`)
    }

    /**
     * Render Halos in this Layer (on top of Solid)
     * @desc boolean, default False, (readonly)
     */
    public get use_halo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_halo`)
    }

    /**
     * Deliver Ambient Occlusion pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_ambient_occlusion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_ambient_occlusion`)
    }

    /**
     * Deliver full combined RGBA buffer
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_combined(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_combined`)
    }

    /**
     * Deliver diffuse color pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_diffuse_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_color`)
    }

    /**
     * Deliver diffuse direct pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_diffuse_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_direct`)
    }

    /**
     * Deliver diffuse indirect pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_diffuse_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_indirect`)
    }

    /**
     * Deliver emission pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_emit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_emit`)
    }

    /**
     * Deliver environment lighting pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_environment(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_environment`)
    }

    /**
     * Deliver glossy color pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_glossy_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_color`)
    }

    /**
     * Deliver glossy direct pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_glossy_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_direct`)
    }

    /**
     * Deliver glossy indirect pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_glossy_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_indirect`)
    }

    /**
     * Deliver material index pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_material_index(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_material_index`)
    }

    /**
     * Deliver mist factor pass (0.0-1.0)
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_mist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_mist`)
    }

    /**
     * Deliver normal pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_normal`)
    }

    /**
     * Deliver object index pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_object_index(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_object_index`)
    }

    /**
     * Deliver shadow pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_shadow`)
    }

    /**
     * Deliver subsurface color pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_subsurface_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_color`)
    }

    /**
     * Deliver subsurface direct pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_subsurface_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_direct`)
    }

    /**
     * Deliver subsurface indirect pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_subsurface_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_indirect`)
    }

    /**
     * Deliver transmission color pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_transmission_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_color`)
    }

    /**
     * Deliver transmission direct pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_transmission_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_direct`)
    }

    /**
     * Deliver transmission indirect pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_transmission_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_indirect`)
    }

    /**
     * Deliver texture UV pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_uv`)
    }

    /**
     * Deliver speed vector pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_vector(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_vector`)
    }

    /**
     * Deliver Z values pass
     * @desc boolean, default False, (readonly)
     */
    public get use_pass_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_z`)
    }

    /**
     * Render Sky in this Layer
     * @desc boolean, default False, (readonly)
     */
    public get use_sky(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sky`)
    }

    /**
     * Render Solid faces in this Layer
     * @desc boolean, default False, (readonly)
     */
    public get use_solid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_solid`)
    }

    /**
     * Render Strands in this Layer
     * @desc boolean, default False, (readonly)
     */
    public get use_strand(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_strand`)
    }

    /**
     * Only render what’s in front of the solid z values
     * @desc boolean, default False, (readonly)
     */
    public get use_zmask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_zmask`)
    }

    /**
     * Render Z-Transparent faces in this Layer (on top of Solid and Halos)
     * @desc boolean, default False, (readonly)
     */
    public get use_ztransp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ztransp`)
    }

    /**
     * Copies the pixels of this renderlayer from an image file
     * @desc void
     */
    public load_from_file(options: { filename?: string, x?: number, y?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.load_from_file`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
