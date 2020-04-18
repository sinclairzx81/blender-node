import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesMaterialSettings } from './CyclesMaterialSettings'
import { MaterialGPencilStyle } from './MaterialGPencilStyle'
import { NodeTree } from './NodeTree'
import { Image } from './Image'
import { TexPaintSlot } from './TexPaintSlot'

/**
 * Material
 * 
 * https://docs.blender.org/api/current/bpy.types.Material.html
 */
export class Material {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles material settings
     * @desc CyclesMaterialSettings, (readonly)
     */
    public get cycles(): CyclesMaterialSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesMaterialSettings)
    }

    /**
     * Grease pencil color settings for material
     * @desc MaterialGPencilStyle, (readonly)
     */
    public get grease_pencil(): MaterialGPencilStyle {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, MaterialGPencilStyle)
    }

    /**
     * True if this material has grease pencil data
     * @desc boolean, default False, (readonly)
     */
    public get is_grease_pencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_grease_pencil`)
    }

    /**
     * Node tree for node based materials
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Texture images used for texture painting
     * @desc bpy_prop_collection of Image, (readonly)
     */
    public get texture_paint_images(): BlenderCollection<Image> & Indexable<Image> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.texture_paint_images`, Image)
    }

    /**
     * Texture slots defining the mapping and influence of textures
     * @desc bpy_prop_collection of TexPaintSlot, (readonly)
     */
    public get texture_paint_slots(): BlenderCollection<TexPaintSlot> & Indexable<TexPaintSlot> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.texture_paint_slots`, TexPaintSlot)
    }

    /**
     * A pixel is rendered only if its alpha value is above this threshold
     * @desc float in [0, 1], default 0.5
     */
    public get alpha_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha_threshold`)
    }

    /**
     * Blend Mode for Transparent Faces
     * @desc enum in ['OPAQUE', 'CLIP', 'HASHED', 'BLEND'], default 'OPAQUE'
     */
    public get blend_method(): 'OPAQUE' | 'CLIP' | 'HASHED' | 'BLEND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_method`)
    }

    /**
     * Diffuse color of the material
     * @desc float array of 4 items in [0, inf], default (0.8, 0.8, 0.8, 0.8)
     */
    public get diffuse_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.diffuse_color`, 'number', 4)
    }

    /**
     * Line color used for Freestyle line rendering
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get line_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_color`, 'number', 4)
    }

    /**
     * The line color of a higher priority is used at material boundaries
     * @desc int in [0, 32767], default 0
     */
    public get line_priority(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.line_priority`)
    }

    /**
     * Amount of mirror reflection for raytrace
     * @desc float in [0, 1], default 0.0
     */
    public get metallic(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.metallic`)
    }

    /**
     * Index of active texture paint slot
     * @desc int in [0, 32767], default 0
     */
    public get paint_active_slot(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.paint_active_slot`)
    }

    /**
     * Index of clone texture paint slot
     * @desc int in [0, 32767], default 0
     */
    public get paint_clone_slot(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.paint_clone_slot`)
    }

    /**
     * Index number for the “Material Index” render pass
     * @desc int in [0, 32767], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Type of preview render
     * @desc enum in ['FLAT', 'SPHERE', 'CUBE', 'HAIR', 'SHADERBALL', 'CLOTH', 'FLUID'], default 'SPHERE'
     */
    public get preview_render_type(): 'FLAT' | 'SPHERE' | 'CUBE' | 'HAIR' | 'SHADERBALL' | 'CLOTH' | 'FLUID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.preview_render_type`)
    }

    /**
     * Approximate the thickness of the object to compute two refraction event (0 is disabled)
     * @desc float in [0, inf], default 0.0
     */
    public get refraction_depth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.refraction_depth`)
    }

    /**
     * Roughness of the material
     * @desc float in [0, 1], default 0.4
     */
    public get roughness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness`)
    }

    /**
     * Shadow mapping method
     * @desc enum in ['NONE', 'OPAQUE', 'CLIP', 'HASHED'], default 'OPAQUE'
     */
    public get shadow_method(): 'NONE' | 'OPAQUE' | 'CLIP' | 'HASHED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shadow_method`)
    }

    /**
     * Limit transparency to a single layer (avoids transparency sorting problems)
     * @desc boolean, default False
     */
    public get show_transparent_back(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_transparent_back`)
    }

    /**
     * Specular color of the material
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get specular_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.specular_color`, 'number', 3)
    }

    /**
     * How intense (bright) the specular reflection is
     * @desc float in [0, 1], default 0.5
     */
    public get specular_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.specular_intensity`)
    }

    /**
     * Use back face culling to hide the back side of faces
     * @desc boolean, default False
     */
    public get use_backface_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_backface_culling`)
    }

    /**
     * Use shader nodes to render the material
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * Use the current world background to light the preview render
     * @desc boolean, default False
     */
    public get use_preview_world(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preview_world`)
    }

    /**
     * Use raytraced screen space refractions
     * @desc boolean, default False
     */
    public get use_screen_refraction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_screen_refraction`)
    }

    /**
     * Add translucency effect to subsurface
     * @desc boolean, default False
     */
    public get use_sss_translucency(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sss_translucency`)
    }

    /**
     * A pixel is rendered only if its alpha value is above this threshold
     * @desc float in [0, 1], default 0.5
     */
    public set alpha_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha_threshold`, value)
    }

    /**
     * Blend Mode for Transparent Faces
     * @desc enum in ['OPAQUE', 'CLIP', 'HASHED', 'BLEND'], default 'OPAQUE'
     */
    public set blend_method(value: 'OPAQUE' | 'CLIP' | 'HASHED' | 'BLEND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_method`, value)
    }

    /**
     * Diffuse color of the material
     * @desc float array of 4 items in [0, inf], default (0.8, 0.8, 0.8, 0.8)
     */
    public set diffuse_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.diffuse_color`, value)
    }

    /**
     * Line color used for Freestyle line rendering
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set line_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_color`, value)
    }

    /**
     * The line color of a higher priority is used at material boundaries
     * @desc int in [0, 32767], default 0
     */
    public set line_priority(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.line_priority`, value)
    }

    /**
     * Amount of mirror reflection for raytrace
     * @desc float in [0, 1], default 0.0
     */
    public set metallic(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.metallic`, value)
    }

    /**
     * Index of active texture paint slot
     * @desc int in [0, 32767], default 0
     */
    public set paint_active_slot(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.paint_active_slot`, value)
    }

    /**
     * Index of clone texture paint slot
     * @desc int in [0, 32767], default 0
     */
    public set paint_clone_slot(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.paint_clone_slot`, value)
    }

    /**
     * Index number for the “Material Index” render pass
     * @desc int in [0, 32767], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Type of preview render
     * @desc enum in ['FLAT', 'SPHERE', 'CUBE', 'HAIR', 'SHADERBALL', 'CLOTH', 'FLUID'], default 'SPHERE'
     */
    public set preview_render_type(value: 'FLAT' | 'SPHERE' | 'CUBE' | 'HAIR' | 'SHADERBALL' | 'CLOTH' | 'FLUID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.preview_render_type`, value)
    }

    /**
     * Approximate the thickness of the object to compute two refraction event (0 is disabled)
     * @desc float in [0, inf], default 0.0
     */
    public set refraction_depth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.refraction_depth`, value)
    }

    /**
     * Roughness of the material
     * @desc float in [0, 1], default 0.4
     */
    public set roughness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness`, value)
    }

    /**
     * Shadow mapping method
     * @desc enum in ['NONE', 'OPAQUE', 'CLIP', 'HASHED'], default 'OPAQUE'
     */
    public set shadow_method(value: 'NONE' | 'OPAQUE' | 'CLIP' | 'HASHED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shadow_method`, value)
    }

    /**
     * Limit transparency to a single layer (avoids transparency sorting problems)
     * @desc boolean, default False
     */
    public set show_transparent_back(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_transparent_back`, value)
    }

    /**
     * Specular color of the material
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set specular_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.specular_color`, value)
    }

    /**
     * How intense (bright) the specular reflection is
     * @desc float in [0, 1], default 0.5
     */
    public set specular_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.specular_intensity`, value)
    }

    /**
     * Use back face culling to hide the back side of faces
     * @desc boolean, default False
     */
    public set use_backface_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_backface_culling`, value)
    }

    /**
     * Use shader nodes to render the material
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    /**
     * Use the current world background to light the preview render
     * @desc boolean, default False
     */
    public set use_preview_world(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preview_world`, value)
    }

    /**
     * Use raytraced screen space refractions
     * @desc boolean, default False
     */
    public set use_screen_refraction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_screen_refraction`, value)
    }

    /**
     * Add translucency effect to subsurface
     * @desc boolean, default False
     */
    public set use_sss_translucency(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sss_translucency`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
