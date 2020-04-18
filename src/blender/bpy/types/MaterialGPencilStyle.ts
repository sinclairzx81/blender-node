import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Image } from './Image'

/**
 * MaterialGPencilStyle
 * 
 * https://docs.blender.org/api/current/bpy.types.MaterialGPencilStyle.html
 */
export class MaterialGPencilStyle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * True when opacity of fill is set high enough to be visible
     * @desc boolean, default False, (readonly)
     */
    public get is_fill_visible(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_fill_visible`)
    }

    /**
     * True when opacity of stroke is set high enough to be visible
     * @desc boolean, default False, (readonly)
     */
    public get is_stroke_visible(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_stroke_visible`)
    }

    /**
     * Defines how align Dots and Boxes with drawing path and object rotation
     * @desc enum in ['PATH', 'OBJECT', 'FIXED'], default 'PATH'
     */
    public get alignment_mode(): 'PATH' | 'OBJECT' | 'FIXED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alignment_mode`)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 4)
    }

    /**
     * Color for filling region bounded by each stroke
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get fill_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.fill_color`, 'number', 4)
    }

    /**
     * 
     * @desc Image
     */
    public get fill_image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.fill_image`, Image)
    }

    /**
     * Select style used to fill strokes
     * @desc enum in ['SOLID', 'GRADIENT', 'CHECKER', 'TEXTURE'], default 'SOLID'
     */
    public get fill_style(): 'SOLID' | 'GRADIENT' | 'CHECKER' | 'TEXTURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fill_style`)
    }

    /**
     * Flip filling colors
     * @desc boolean, default False
     */
    public get flip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.flip`)
    }

    /**
     * Display strokes using this color when showing onion skins
     * @desc boolean, default False
     */
    public get ghost(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ghost`)
    }

    /**
     * Select type of gradient used to fill strokes
     * @desc enum in ['LINEAR', 'RADIAL'], default 'LINEAR'
     */
    public get gradient_type(): 'LINEAR' | 'RADIAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gradient_type`)
    }

    /**
     * Set color Visibility
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Protect color from further editing and/or frame changes
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Color for mixing with primary filling color
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get mix_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mix_color`, 'number', 4)
    }

    /**
     * Mix Adjustment Factor
     * @desc float in [0, 1], default 0.0
     */
    public get mix_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix_factor`)
    }

    /**
     * Mix Stroke Color
     * @desc float in [0, 1], default 0.0
     */
    public get mix_stroke_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix_stroke_factor`)
    }

    /**
     * Select draw mode for stroke
     * @desc enum in ['LINE', 'DOTS', 'BOX'], default 'LINE'
     */
    public get mode(): 'LINE' | 'DOTS' | 'BOX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Index number for the “Color Index” pass
     * @desc int in [0, 32767], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Pattern Orientation Angle
     * @desc float in [-inf, inf], default 0.0
     */
    public get pattern_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pattern_angle`)
    }

    /**
     * Box Size
     * @desc float in [0.0001, 10], default 0.0
     */
    public get pattern_gridsize(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pattern_gridsize`)
    }

    /**
     * Pattern Radius
     * @desc float in [0.0001, 10], default 0.0
     */
    public get pattern_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pattern_radius`)
    }

    /**
     * Scale Factor for UV coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get pattern_scale(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.pattern_scale`, 'number', 2)
    }

    /**
     * Shift filling pattern in 2d space
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get pattern_shift(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.pattern_shift`, 'number', 2)
    }

    /**
     * Texture Pixel Size factor along the stroke
     * @desc float in [1, 5000], default 0.0
     */
    public get pixel_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_size`)
    }

    /**
     * Show stroke fills of this material
     * @desc boolean, default False
     */
    public get show_fill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_fill`)
    }

    /**
     * Show stroke lines of this material
     * @desc boolean, default False
     */
    public get show_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stroke`)
    }

    /**
     * 
     * @desc Image
     */
    public get stroke_image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stroke_image`, Image)
    }

    /**
     * Select style used to draw strokes
     * @desc enum in ['SOLID', 'TEXTURE'], default 'SOLID'
     */
    public get stroke_style(): 'SOLID' | 'TEXTURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stroke_style`)
    }

    /**
     * Texture Orientation Angle
     * @desc float in [-inf, inf], default 0.0
     */
    public get texture_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_angle`)
    }

    /**
     * Do not repeat texture and clamp to one instance only
     * @desc boolean, default False
     */
    public get texture_clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.texture_clamp`)
    }

    /**
     * Shift Texture in 2d Space
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get texture_offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texture_offset`, 'number', 2)
    }

    /**
     * Texture Opacity
     * @desc float in [0, 1], default 0.0
     */
    public get texture_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_opacity`)
    }

    /**
     * Scale Factor for Texture
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get texture_scale(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texture_scale`, 'number', 2)
    }

    /**
     * Use Fill Texture as a pattern to apply color
     * @desc boolean, default False
     */
    public get use_fill_pattern(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_pattern`)
    }

    /**
     * Mix texture image with filling color
     * @desc boolean, default False
     */
    public get use_fill_texture_mix(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_texture_mix`)
    }

    /**
     * Disable stencil and overlap self intersections with alpha materials
     * @desc boolean, default False
     */
    public get use_overlap_strokes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overlap_strokes`)
    }

    /**
     * Use Stroke Texture as a pattern to apply color
     * @desc boolean, default False
     */
    public get use_stroke_pattern(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stroke_pattern`)
    }

    /**
     * Mix texture image with stroke color
     * @desc boolean, default False
     */
    public get use_stroke_texture_mix(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stroke_texture_mix`)
    }

    /**
     * Defines how align Dots and Boxes with drawing path and object rotation
     * @desc enum in ['PATH', 'OBJECT', 'FIXED'], default 'PATH'
     */
    public set alignment_mode(value: 'PATH' | 'OBJECT' | 'FIXED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.alignment_mode`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Color for filling region bounded by each stroke
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set fill_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.fill_color`, value)
    }

    /**
     * 
     * @desc Image
     */
    public set fill_image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.fill_image`, value)
    }

    /**
     * Select style used to fill strokes
     * @desc enum in ['SOLID', 'GRADIENT', 'CHECKER', 'TEXTURE'], default 'SOLID'
     */
    public set fill_style(value: 'SOLID' | 'GRADIENT' | 'CHECKER' | 'TEXTURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fill_style`, value)
    }

    /**
     * Flip filling colors
     * @desc boolean, default False
     */
    public set flip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.flip`, value)
    }

    /**
     * Display strokes using this color when showing onion skins
     * @desc boolean, default False
     */
    public set ghost(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ghost`, value)
    }

    /**
     * Select type of gradient used to fill strokes
     * @desc enum in ['LINEAR', 'RADIAL'], default 'LINEAR'
     */
    public set gradient_type(value: 'LINEAR' | 'RADIAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gradient_type`, value)
    }

    /**
     * Set color Visibility
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Protect color from further editing and/or frame changes
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Color for mixing with primary filling color
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set mix_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mix_color`, value)
    }

    /**
     * Mix Adjustment Factor
     * @desc float in [0, 1], default 0.0
     */
    public set mix_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix_factor`, value)
    }

    /**
     * Mix Stroke Color
     * @desc float in [0, 1], default 0.0
     */
    public set mix_stroke_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix_stroke_factor`, value)
    }

    /**
     * Select draw mode for stroke
     * @desc enum in ['LINE', 'DOTS', 'BOX'], default 'LINE'
     */
    public set mode(value: 'LINE' | 'DOTS' | 'BOX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Index number for the “Color Index” pass
     * @desc int in [0, 32767], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Pattern Orientation Angle
     * @desc float in [-inf, inf], default 0.0
     */
    public set pattern_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pattern_angle`, value)
    }

    /**
     * Box Size
     * @desc float in [0.0001, 10], default 0.0
     */
    public set pattern_gridsize(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pattern_gridsize`, value)
    }

    /**
     * Pattern Radius
     * @desc float in [0.0001, 10], default 0.0
     */
    public set pattern_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pattern_radius`, value)
    }

    /**
     * Scale Factor for UV coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set pattern_scale(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.pattern_scale`, value)
    }

    /**
     * Shift filling pattern in 2d space
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set pattern_shift(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.pattern_shift`, value)
    }

    /**
     * Texture Pixel Size factor along the stroke
     * @desc float in [1, 5000], default 0.0
     */
    public set pixel_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixel_size`, value)
    }

    /**
     * Show stroke fills of this material
     * @desc boolean, default False
     */
    public set show_fill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_fill`, value)
    }

    /**
     * Show stroke lines of this material
     * @desc boolean, default False
     */
    public set show_stroke(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stroke`, value)
    }

    /**
     * 
     * @desc Image
     */
    public set stroke_image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.stroke_image`, value)
    }

    /**
     * Select style used to draw strokes
     * @desc enum in ['SOLID', 'TEXTURE'], default 'SOLID'
     */
    public set stroke_style(value: 'SOLID' | 'TEXTURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stroke_style`, value)
    }

    /**
     * Texture Orientation Angle
     * @desc float in [-inf, inf], default 0.0
     */
    public set texture_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_angle`, value)
    }

    /**
     * Do not repeat texture and clamp to one instance only
     * @desc boolean, default False
     */
    public set texture_clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.texture_clamp`, value)
    }

    /**
     * Shift Texture in 2d Space
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set texture_offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texture_offset`, value)
    }

    /**
     * Texture Opacity
     * @desc float in [0, 1], default 0.0
     */
    public set texture_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_opacity`, value)
    }

    /**
     * Scale Factor for Texture
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set texture_scale(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texture_scale`, value)
    }

    /**
     * Use Fill Texture as a pattern to apply color
     * @desc boolean, default False
     */
    public set use_fill_pattern(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_pattern`, value)
    }

    /**
     * Mix texture image with filling color
     * @desc boolean, default False
     */
    public set use_fill_texture_mix(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_texture_mix`, value)
    }

    /**
     * Disable stencil and overlap self intersections with alpha materials
     * @desc boolean, default False
     */
    public set use_overlap_strokes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overlap_strokes`, value)
    }

    /**
     * Use Stroke Texture as a pattern to apply color
     * @desc boolean, default False
     */
    public set use_stroke_pattern(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stroke_pattern`, value)
    }

    /**
     * Mix texture image with stroke color
     * @desc boolean, default False
     */
    public set use_stroke_texture_mix(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stroke_texture_mix`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
