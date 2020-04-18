import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CyclesRenderLayerSettings } from './CyclesRenderLayerSettings'
import { Depsgraph } from './Depsgraph'
import { FreestyleSettings } from './FreestyleSettings'
import { LayerCollection } from './LayerCollection'
import { LayerObjects } from './LayerObjects'
import { BlenderObject } from './BlenderObject'
import { Material } from './Material'

/**
 * ViewLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.ViewLayer.html
 */
export class ViewLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Cycles ViewLayer Settings
     * @desc CyclesRenderLayerSettings, (readonly)
     */
    public get cycles(): CyclesRenderLayerSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesRenderLayerSettings)
    }

    /**
     * Dependencies in the scene data
     * @desc Depsgraph, (readonly)
     */
    public get depsgraph(): Depsgraph {
        return PythonInterop.getClass(this.interop, `${this.accessor}.depsgraph`, Depsgraph)
    }

    /**
     * 
     * @desc FreestyleSettings, (readonly, never None)
     */
    public get freestyle_settings(): FreestyleSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.freestyle_settings`, FreestyleSettings)
    }

    /**
     * Root of collections hierarchy of this view layer,its ‘collection’ pointer property is the same as the scene’s master collection
     * @desc LayerCollection, (readonly, never None)
     */
    public get layer_collection(): LayerCollection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layer_collection`, LayerCollection)
    }

    /**
     * All the objects in this layer
     * @desc LayerObjects bpy_prop_collection of Object, (readonly)
     */
    public get objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> & LayerObjects {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.objects`, LayerObjects, BlenderObject)
    }

    /**
     * Active layer collection in this view layer’s hierarchy
     * @desc LayerCollection, (never None)
     */
    public get active_layer_collection(): LayerCollection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_layer_collection`, LayerCollection)
    }

    /**
     * For Zmask, only render what is behind solid z values instead of in front
     * @desc boolean, default False
     */
    public get invert_zmask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_zmask`)
    }

    /**
     * Material to override all other materials in this view layer
     * @desc Material
     */
    public get material_override(): Material {
        return PythonInterop.getClass(this.interop, `${this.accessor}.material_override`, Material)
    }

    /**
     * View layer name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Z, Index, normal, UV and vector passes are only affected by surfaces with alpha transparency equal to or higher than this threshold
     * @desc float in [0, 1], default 0.0
     */
    public get pass_alpha_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pass_alpha_threshold`)
    }

    /**
     * Override number of render samples for this view layer, 0 will use the scene setting
     * @desc int in [0, inf], default 0
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Enable or disable rendering of this View Layer
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Fill in Z values for solid faces in invisible layers, for masking
     * @desc boolean, default False
     */
    public get use_all_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_all_z`)
    }

    /**
     * Render Ambient Occlusion in this Layer
     * @desc boolean, default False
     */
    public get use_ao(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ao`)
    }

    /**
     * Render Edge-enhance in this Layer (only works for Solid faces)
     * @desc boolean, default False
     */
    public get use_edge_enhance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_enhance`)
    }

    /**
     * Render stylized strokes in this Layer
     * @desc boolean, default False
     */
    public get use_freestyle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_freestyle`)
    }

    /**
     * Render Halos in this Layer (on top of Solid)
     * @desc boolean, default False
     */
    public get use_halo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_halo`)
    }

    /**
     * Deliver Ambient Occlusion pass
     * @desc boolean, default False
     */
    public get use_pass_ambient_occlusion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_ambient_occlusion`)
    }

    /**
     * Deliver full combined RGBA buffer
     * @desc boolean, default False
     */
    public get use_pass_combined(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_combined`)
    }

    /**
     * Deliver diffuse color pass
     * @desc boolean, default False
     */
    public get use_pass_diffuse_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_color`)
    }

    /**
     * Deliver diffuse direct pass
     * @desc boolean, default False
     */
    public get use_pass_diffuse_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_direct`)
    }

    /**
     * Deliver diffuse indirect pass
     * @desc boolean, default False
     */
    public get use_pass_diffuse_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse_indirect`)
    }

    /**
     * Deliver emission pass
     * @desc boolean, default False
     */
    public get use_pass_emit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_emit`)
    }

    /**
     * Deliver environment lighting pass
     * @desc boolean, default False
     */
    public get use_pass_environment(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_environment`)
    }

    /**
     * Deliver glossy color pass
     * @desc boolean, default False
     */
    public get use_pass_glossy_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_color`)
    }

    /**
     * Deliver glossy direct pass
     * @desc boolean, default False
     */
    public get use_pass_glossy_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_direct`)
    }

    /**
     * Deliver glossy indirect pass
     * @desc boolean, default False
     */
    public get use_pass_glossy_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy_indirect`)
    }

    /**
     * Deliver material index pass
     * @desc boolean, default False
     */
    public get use_pass_material_index(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_material_index`)
    }

    /**
     * Deliver mist factor pass (0.0-1.0)
     * @desc boolean, default False
     */
    public get use_pass_mist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_mist`)
    }

    /**
     * Deliver normal pass
     * @desc boolean, default False
     */
    public get use_pass_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_normal`)
    }

    /**
     * Deliver object index pass
     * @desc boolean, default False
     */
    public get use_pass_object_index(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_object_index`)
    }

    /**
     * Deliver shadow pass
     * @desc boolean, default False
     */
    public get use_pass_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_shadow`)
    }

    /**
     * Deliver subsurface color pass
     * @desc boolean, default False
     */
    public get use_pass_subsurface_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_color`)
    }

    /**
     * Deliver subsurface direct pass
     * @desc boolean, default False
     */
    public get use_pass_subsurface_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_direct`)
    }

    /**
     * Deliver subsurface indirect pass
     * @desc boolean, default False
     */
    public get use_pass_subsurface_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface_indirect`)
    }

    /**
     * Deliver transmission color pass
     * @desc boolean, default False
     */
    public get use_pass_transmission_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_color`)
    }

    /**
     * Deliver transmission direct pass
     * @desc boolean, default False
     */
    public get use_pass_transmission_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_direct`)
    }

    /**
     * Deliver transmission indirect pass
     * @desc boolean, default False
     */
    public get use_pass_transmission_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission_indirect`)
    }

    /**
     * Deliver texture UV pass
     * @desc boolean, default False
     */
    public get use_pass_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_uv`)
    }

    /**
     * Deliver speed vector pass
     * @desc boolean, default False
     */
    public get use_pass_vector(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_vector`)
    }

    /**
     * Deliver Z values pass
     * @desc boolean, default False
     */
    public get use_pass_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_z`)
    }

    /**
     * Render Sky in this Layer
     * @desc boolean, default False
     */
    public get use_sky(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sky`)
    }

    /**
     * Render Solid faces in this Layer
     * @desc boolean, default False
     */
    public get use_solid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_solid`)
    }

    /**
     * Render Strands in this Layer
     * @desc boolean, default False
     */
    public get use_strand(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_strand`)
    }

    /**
     * Only render what’s in front of the solid z values
     * @desc boolean, default False
     */
    public get use_zmask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_zmask`)
    }

    /**
     * Render Z-Transparent faces in this Layer (on top of Solid and Halos)
     * @desc boolean, default False
     */
    public get use_ztransp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ztransp`)
    }

    /**
     * Active layer collection in this view layer’s hierarchy
     * @desc LayerCollection, (never None)
     */
    public set active_layer_collection(value: LayerCollection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_layer_collection`, value)
    }

    /**
     * For Zmask, only render what is behind solid z values instead of in front
     * @desc boolean, default False
     */
    public set invert_zmask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_zmask`, value)
    }

    /**
     * Material to override all other materials in this view layer
     * @desc Material
     */
    public set material_override(value: Material) {
        PythonInterop.setClass(this.interop, `${this.accessor}.material_override`, value)
    }

    /**
     * View layer name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Z, Index, normal, UV and vector passes are only affected by surfaces with alpha transparency equal to or higher than this threshold
     * @desc float in [0, 1], default 0.0
     */
    public set pass_alpha_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pass_alpha_threshold`, value)
    }

    /**
     * Override number of render samples for this view layer, 0 will use the scene setting
     * @desc int in [0, inf], default 0
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Enable or disable rendering of this View Layer
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    /**
     * Fill in Z values for solid faces in invisible layers, for masking
     * @desc boolean, default False
     */
    public set use_all_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_all_z`, value)
    }

    /**
     * Render Ambient Occlusion in this Layer
     * @desc boolean, default False
     */
    public set use_ao(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ao`, value)
    }

    /**
     * Render Edge-enhance in this Layer (only works for Solid faces)
     * @desc boolean, default False
     */
    public set use_edge_enhance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_enhance`, value)
    }

    /**
     * Render stylized strokes in this Layer
     * @desc boolean, default False
     */
    public set use_freestyle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_freestyle`, value)
    }

    /**
     * Render Halos in this Layer (on top of Solid)
     * @desc boolean, default False
     */
    public set use_halo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_halo`, value)
    }

    /**
     * Deliver Ambient Occlusion pass
     * @desc boolean, default False
     */
    public set use_pass_ambient_occlusion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_ambient_occlusion`, value)
    }

    /**
     * Deliver full combined RGBA buffer
     * @desc boolean, default False
     */
    public set use_pass_combined(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_combined`, value)
    }

    /**
     * Deliver diffuse color pass
     * @desc boolean, default False
     */
    public set use_pass_diffuse_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_diffuse_color`, value)
    }

    /**
     * Deliver diffuse direct pass
     * @desc boolean, default False
     */
    public set use_pass_diffuse_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_diffuse_direct`, value)
    }

    /**
     * Deliver diffuse indirect pass
     * @desc boolean, default False
     */
    public set use_pass_diffuse_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_diffuse_indirect`, value)
    }

    /**
     * Deliver emission pass
     * @desc boolean, default False
     */
    public set use_pass_emit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_emit`, value)
    }

    /**
     * Deliver environment lighting pass
     * @desc boolean, default False
     */
    public set use_pass_environment(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_environment`, value)
    }

    /**
     * Deliver glossy color pass
     * @desc boolean, default False
     */
    public set use_pass_glossy_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_glossy_color`, value)
    }

    /**
     * Deliver glossy direct pass
     * @desc boolean, default False
     */
    public set use_pass_glossy_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_glossy_direct`, value)
    }

    /**
     * Deliver glossy indirect pass
     * @desc boolean, default False
     */
    public set use_pass_glossy_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_glossy_indirect`, value)
    }

    /**
     * Deliver material index pass
     * @desc boolean, default False
     */
    public set use_pass_material_index(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_material_index`, value)
    }

    /**
     * Deliver mist factor pass (0.0-1.0)
     * @desc boolean, default False
     */
    public set use_pass_mist(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_mist`, value)
    }

    /**
     * Deliver normal pass
     * @desc boolean, default False
     */
    public set use_pass_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_normal`, value)
    }

    /**
     * Deliver object index pass
     * @desc boolean, default False
     */
    public set use_pass_object_index(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_object_index`, value)
    }

    /**
     * Deliver shadow pass
     * @desc boolean, default False
     */
    public set use_pass_shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_shadow`, value)
    }

    /**
     * Deliver subsurface color pass
     * @desc boolean, default False
     */
    public set use_pass_subsurface_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_subsurface_color`, value)
    }

    /**
     * Deliver subsurface direct pass
     * @desc boolean, default False
     */
    public set use_pass_subsurface_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_subsurface_direct`, value)
    }

    /**
     * Deliver subsurface indirect pass
     * @desc boolean, default False
     */
    public set use_pass_subsurface_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_subsurface_indirect`, value)
    }

    /**
     * Deliver transmission color pass
     * @desc boolean, default False
     */
    public set use_pass_transmission_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_transmission_color`, value)
    }

    /**
     * Deliver transmission direct pass
     * @desc boolean, default False
     */
    public set use_pass_transmission_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_transmission_direct`, value)
    }

    /**
     * Deliver transmission indirect pass
     * @desc boolean, default False
     */
    public set use_pass_transmission_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_transmission_indirect`, value)
    }

    /**
     * Deliver texture UV pass
     * @desc boolean, default False
     */
    public set use_pass_uv(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_uv`, value)
    }

    /**
     * Deliver speed vector pass
     * @desc boolean, default False
     */
    public set use_pass_vector(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_vector`, value)
    }

    /**
     * Deliver Z values pass
     * @desc boolean, default False
     */
    public set use_pass_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_z`, value)
    }

    /**
     * Render Sky in this Layer
     * @desc boolean, default False
     */
    public set use_sky(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sky`, value)
    }

    /**
     * Render Solid faces in this Layer
     * @desc boolean, default False
     */
    public set use_solid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_solid`, value)
    }

    /**
     * Render Strands in this Layer
     * @desc boolean, default False
     */
    public set use_strand(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_strand`, value)
    }

    /**
     * Only render what’s in front of the solid z values
     * @desc boolean, default False
     */
    public set use_zmask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_zmask`, value)
    }

    /**
     * Render Z-Transparent faces in this Layer (on top of Solid and Halos)
     * @desc boolean, default False
     */
    public set use_ztransp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ztransp`, value)
    }

    /**
     * Update data tagged to be updated from previous access to data or operators
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
