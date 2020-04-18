import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CyclesView3DShadingSettings } from './CyclesView3DShadingSettings'
import { StudioLight } from './StudioLight'

/**
 * View3DShading
 * 
 * https://docs.blender.org/api/current/bpy.types.View3DShading.html
 */
export class View3DShading {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CyclesView3DShadingSettings, (readonly)
     */
    public get cycles(): CyclesView3DShadingSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesView3DShadingSettings)
    }

    /**
     * Selected StudioLight
     * @desc StudioLight, (readonly)
     */
    public get selected_studio_light(): StudioLight {
        return PythonInterop.getClass(this.interop, `${this.accessor}.selected_studio_light`, StudioLight)
    }

    /**
     * Color for custom background color
     * @desc float array of 3 items in [0, 1], default (0.05, 0.05, 0.05)
     */
    public get background_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.background_color`, 'number', 3)
    }

    /**
     * Way to draw the background
     * @desc enum in ['THEME', 'WORLD', 'VIEWPORT'], default 'THEME'
     */
    public get background_type(): 'THEME' | 'WORLD' | 'VIEWPORT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.background_type`)
    }

    /**
     * Factor for the cavity ridges
     * @desc float in [0, 250], default 1.0
     */
    public get cavity_ridge_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cavity_ridge_factor`)
    }

    /**
     * Way to draw the cavity shading
     * @desc enum in ['WORLD', 'SCREEN', 'BOTH'], default 'SCREEN'
     */
    public get cavity_type(): 'WORLD' | 'SCREEN' | 'BOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.cavity_type`)
    }

    /**
     * Factor for the cavity valleys
     * @desc float in [0, 250], default 1.0
     */
    public get cavity_valley_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cavity_valley_factor`)
    }

    /**
     * Color Type
     * @desc enum in ['MATERIAL', 'SINGLE', 'OBJECT', 'RANDOM', 'VERTEX', 'TEXTURE'], default 'MATERIAL'
     */
    public get color_type(): 'MATERIAL' | 'SINGLE' | 'OBJECT' | 'RANDOM' | 'VERTEX' | 'TEXTURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_type`)
    }

    /**
     * Factor for the curvature ridges
     * @desc float in [0, 2], default 1.0
     */
    public get curvature_ridge_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.curvature_ridge_factor`)
    }

    /**
     * Factor for the curvature valleys
     * @desc float in [0, 2], default 1.0
     */
    public get curvature_valley_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.curvature_valley_factor`)
    }

    /**
     * Lighting Method for Solid/Texture Viewport Shading
     * @desc enum in ['STUDIO', 'MATCAP', 'FLAT'], default 'STUDIO'
     */
    public get light(): 'STUDIO' | 'MATCAP' | 'FLAT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.light`)
    }

    /**
     * Color for object outline
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get object_outline_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.object_outline_color`, 'number', 3)
    }

    /**
     * Render Pass to show in the viewport
     * @desc enum in ['COMBINED', 'AO', 'NORMAL', 'MIST', 'SUBSURFACE_DIRECT', 'SUBSURFACE_COLOR'], default 'COMBINED'
     */
    public get render_pass(): 'COMBINED' | 'AO' | 'NORMAL' | 'MIST' | 'SUBSURFACE_DIRECT' | 'SUBSURFACE_COLOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.render_pass`)
    }

    /**
     * Darkness of shadows
     * @desc float in [0, 1], default 0.5
     */
    public get shadow_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_intensity`)
    }

    /**
     * Use back face culling to hide the back side of faces
     * @desc boolean, default False
     */
    public get show_backface_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_backface_culling`)
    }

    /**
     * Show Cavity
     * @desc boolean, default False
     */
    public get show_cavity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cavity`)
    }

    /**
     * Show Object Outline
     * @desc boolean, default False
     */
    public get show_object_outline(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_outline`)
    }

    /**
     * Show Shadow
     * @desc boolean, default False
     */
    public get show_shadows(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_shadows`)
    }

    /**
     * Render specular highlights
     * @desc boolean, default True
     */
    public get show_specular_highlight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_specular_highlight`)
    }

    /**
     * Show whole scene transparent
     * @desc boolean, default False
     */
    public get show_xray(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_xray`)
    }

    /**
     * Show whole scene transparent
     * @desc boolean, default True
     */
    public get show_xray_wireframe(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_xray_wireframe`)
    }

    /**
     * Color for single color mode
     * @desc float array of 3 items in [0, 1], default (0.8, 0.8, 0.8)
     */
    public get single_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.single_color`, 'number', 3)
    }

    /**
     * Studio lighting setup
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get studio_light(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.studio_light`)
    }

    /**
     * Show the studiolight in the background
     * @desc float in [0, 1], default 0.0
     */
    public get studiolight_background_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.studiolight_background_alpha`)
    }

    /**
     * Strength of the studiolight
     * @desc float in [0, inf], default 1.0
     */
    public get studiolight_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.studiolight_intensity`)
    }

    /**
     * Rotation of the studiolight around the Z-Axis
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public get studiolight_rotate_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.studiolight_rotate_z`)
    }

    /**
     * Method to display/shade objects in the 3D View
     * @desc enum in ['WIREFRAME', 'SOLID', 'MATERIAL', 'RENDERED'], default 'SOLID'
     */
    public get type(): 'WIREFRAME' | 'SOLID' | 'MATERIAL' | 'RENDERED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Use depth of field on viewport using the values from the active camera
     * @desc boolean, default False
     */
    public get use_dof(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dof`)
    }

    /**
     * Render lights and light probes of the scene
     * @desc boolean, default False
     */
    public get use_scene_lights(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scene_lights`)
    }

    /**
     * Render lights and light probes of the scene
     * @desc boolean, default True
     */
    public get use_scene_lights_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scene_lights_render`)
    }

    /**
     * Use scene world for lighting
     * @desc boolean, default False
     */
    public get use_scene_world(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scene_world`)
    }

    /**
     * Use scene world for lighting
     * @desc boolean, default True
     */
    public get use_scene_world_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scene_world_render`)
    }

    /**
     * Make the lighting fixed and not follow the camera
     * @desc boolean, default False
     */
    public get use_world_space_lighting(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_world_space_lighting`)
    }

    /**
     * Color Type
     * @desc enum in ['MATERIAL', 'SINGLE', 'OBJECT', 'RANDOM', 'VERTEX', 'TEXTURE'], default 'MATERIAL'
     */
    public get wireframe_color_type(): 'MATERIAL' | 'SINGLE' | 'OBJECT' | 'RANDOM' | 'VERTEX' | 'TEXTURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wireframe_color_type`)
    }

    /**
     * Amount of alpha to use
     * @desc float in [0, 1], default 0.5
     */
    public get xray_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.xray_alpha`)
    }

    /**
     * Amount of alpha to use
     * @desc float in [0, 1], default 0.5
     */
    public get xray_alpha_wireframe(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.xray_alpha_wireframe`)
    }

    /**
     * Color for custom background color
     * @desc float array of 3 items in [0, 1], default (0.05, 0.05, 0.05)
     */
    public set background_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.background_color`, value)
    }

    /**
     * Way to draw the background
     * @desc enum in ['THEME', 'WORLD', 'VIEWPORT'], default 'THEME'
     */
    public set background_type(value: 'THEME' | 'WORLD' | 'VIEWPORT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.background_type`, value)
    }

    /**
     * Factor for the cavity ridges
     * @desc float in [0, 250], default 1.0
     */
    public set cavity_ridge_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cavity_ridge_factor`, value)
    }

    /**
     * Way to draw the cavity shading
     * @desc enum in ['WORLD', 'SCREEN', 'BOTH'], default 'SCREEN'
     */
    public set cavity_type(value: 'WORLD' | 'SCREEN' | 'BOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.cavity_type`, value)
    }

    /**
     * Factor for the cavity valleys
     * @desc float in [0, 250], default 1.0
     */
    public set cavity_valley_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cavity_valley_factor`, value)
    }

    /**
     * Color Type
     * @desc enum in ['MATERIAL', 'SINGLE', 'OBJECT', 'RANDOM', 'VERTEX', 'TEXTURE'], default 'MATERIAL'
     */
    public set color_type(value: 'MATERIAL' | 'SINGLE' | 'OBJECT' | 'RANDOM' | 'VERTEX' | 'TEXTURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_type`, value)
    }

    /**
     * Factor for the curvature ridges
     * @desc float in [0, 2], default 1.0
     */
    public set curvature_ridge_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.curvature_ridge_factor`, value)
    }

    /**
     * Factor for the curvature valleys
     * @desc float in [0, 2], default 1.0
     */
    public set curvature_valley_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.curvature_valley_factor`, value)
    }

    /**
     * Lighting Method for Solid/Texture Viewport Shading
     * @desc enum in ['STUDIO', 'MATCAP', 'FLAT'], default 'STUDIO'
     */
    public set light(value: 'STUDIO' | 'MATCAP' | 'FLAT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.light`, value)
    }

    /**
     * Color for object outline
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set object_outline_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.object_outline_color`, value)
    }

    /**
     * Render Pass to show in the viewport
     * @desc enum in ['COMBINED', 'AO', 'NORMAL', 'MIST', 'SUBSURFACE_DIRECT', 'SUBSURFACE_COLOR'], default 'COMBINED'
     */
    public set render_pass(value: 'COMBINED' | 'AO' | 'NORMAL' | 'MIST' | 'SUBSURFACE_DIRECT' | 'SUBSURFACE_COLOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.render_pass`, value)
    }

    /**
     * Darkness of shadows
     * @desc float in [0, 1], default 0.5
     */
    public set shadow_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_intensity`, value)
    }

    /**
     * Use back face culling to hide the back side of faces
     * @desc boolean, default False
     */
    public set show_backface_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_backface_culling`, value)
    }

    /**
     * Show Cavity
     * @desc boolean, default False
     */
    public set show_cavity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cavity`, value)
    }

    /**
     * Show Object Outline
     * @desc boolean, default False
     */
    public set show_object_outline(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_outline`, value)
    }

    /**
     * Show Shadow
     * @desc boolean, default False
     */
    public set show_shadows(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_shadows`, value)
    }

    /**
     * Render specular highlights
     * @desc boolean, default True
     */
    public set show_specular_highlight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_specular_highlight`, value)
    }

    /**
     * Show whole scene transparent
     * @desc boolean, default False
     */
    public set show_xray(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_xray`, value)
    }

    /**
     * Show whole scene transparent
     * @desc boolean, default True
     */
    public set show_xray_wireframe(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_xray_wireframe`, value)
    }

    /**
     * Color for single color mode
     * @desc float array of 3 items in [0, 1], default (0.8, 0.8, 0.8)
     */
    public set single_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.single_color`, value)
    }

    /**
     * Studio lighting setup
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set studio_light(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.studio_light`, value)
    }

    /**
     * Show the studiolight in the background
     * @desc float in [0, 1], default 0.0
     */
    public set studiolight_background_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.studiolight_background_alpha`, value)
    }

    /**
     * Strength of the studiolight
     * @desc float in [0, inf], default 1.0
     */
    public set studiolight_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.studiolight_intensity`, value)
    }

    /**
     * Rotation of the studiolight around the Z-Axis
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public set studiolight_rotate_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.studiolight_rotate_z`, value)
    }

    /**
     * Method to display/shade objects in the 3D View
     * @desc enum in ['WIREFRAME', 'SOLID', 'MATERIAL', 'RENDERED'], default 'SOLID'
     */
    public set type(value: 'WIREFRAME' | 'SOLID' | 'MATERIAL' | 'RENDERED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Use depth of field on viewport using the values from the active camera
     * @desc boolean, default False
     */
    public set use_dof(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dof`, value)
    }

    /**
     * Render lights and light probes of the scene
     * @desc boolean, default False
     */
    public set use_scene_lights(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scene_lights`, value)
    }

    /**
     * Render lights and light probes of the scene
     * @desc boolean, default True
     */
    public set use_scene_lights_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scene_lights_render`, value)
    }

    /**
     * Use scene world for lighting
     * @desc boolean, default False
     */
    public set use_scene_world(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scene_world`, value)
    }

    /**
     * Use scene world for lighting
     * @desc boolean, default True
     */
    public set use_scene_world_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scene_world_render`, value)
    }

    /**
     * Make the lighting fixed and not follow the camera
     * @desc boolean, default False
     */
    public set use_world_space_lighting(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_world_space_lighting`, value)
    }

    /**
     * Color Type
     * @desc enum in ['MATERIAL', 'SINGLE', 'OBJECT', 'RANDOM', 'VERTEX', 'TEXTURE'], default 'MATERIAL'
     */
    public set wireframe_color_type(value: 'MATERIAL' | 'SINGLE' | 'OBJECT' | 'RANDOM' | 'VERTEX' | 'TEXTURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wireframe_color_type`, value)
    }

    /**
     * Amount of alpha to use
     * @desc float in [0, 1], default 0.5
     */
    public set xray_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.xray_alpha`, value)
    }

    /**
     * Amount of alpha to use
     * @desc float in [0, 1], default 0.5
     */
    public set xray_alpha_wireframe(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.xray_alpha_wireframe`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
