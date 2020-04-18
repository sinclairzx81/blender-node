import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { BrushCapabilities } from './BrushCapabilities'
import { CurveMapping } from './CurveMapping'
import { BrushGpencilSettings } from './BrushGpencilSettings'
import { ColorRamp } from './ColorRamp'
import { BrushCapabilitiesImagePaint } from './BrushCapabilitiesImagePaint'
import { BrushTextureSlot } from './BrushTextureSlot'
import { BrushCapabilitiesSculpt } from './BrushCapabilitiesSculpt'
import { BrushCapabilitiesVertexPaint } from './BrushCapabilitiesVertexPaint'
import { BrushCapabilitiesWeightPaint } from './BrushCapabilitiesWeightPaint'
import { Image } from './Image'
import { Texture } from './Texture'
import { PaintCurve } from './PaintCurve'

/**
 * Brush
 * 
 * https://docs.blender.org/api/current/bpy.types.Brush.html
 */
export class Brush {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Brush’s capabilities
     * @desc BrushCapabilities, (readonly, never None)
     */
    public get brush_capabilities(): BrushCapabilities {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush_capabilities`, BrushCapabilities)
    }

    /**
     * Editable falloff curve
     * @desc CurveMapping, (readonly, never None)
     */
    public get curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, CurveMapping)
    }

    /**
     * 
     * @desc BrushGpencilSettings, (readonly)
     */
    public get gpencil_settings(): BrushGpencilSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gpencil_settings`, BrushGpencilSettings)
    }

    /**
     * 
     * @desc ColorRamp, (readonly)
     */
    public get gradient(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gradient`, ColorRamp)
    }

    /**
     * 
     * @desc BrushCapabilitiesImagePaint, (readonly, never None)
     */
    public get image_paint_capabilities(): BrushCapabilitiesImagePaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_paint_capabilities`, BrushCapabilitiesImagePaint)
    }

    /**
     * 
     * @desc BrushTextureSlot, (readonly)
     */
    public get mask_texture_slot(): BrushTextureSlot {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask_texture_slot`, BrushTextureSlot)
    }

    /**
     * 
     * @desc BrushCapabilitiesSculpt, (readonly, never None)
     */
    public get sculpt_capabilities(): BrushCapabilitiesSculpt {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sculpt_capabilities`, BrushCapabilitiesSculpt)
    }

    /**
     * 
     * @desc BrushTextureSlot, (readonly)
     */
    public get texture_slot(): BrushTextureSlot {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_slot`, BrushTextureSlot)
    }

    /**
     * 
     * @desc BrushCapabilitiesVertexPaint, (readonly, never None)
     */
    public get vertex_paint_capabilities(): BrushCapabilitiesVertexPaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.vertex_paint_capabilities`, BrushCapabilitiesVertexPaint)
    }

    /**
     * 
     * @desc BrushCapabilitiesWeightPaint, (readonly, never None)
     */
    public get weight_paint_capabilities(): BrushCapabilitiesWeightPaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.weight_paint_capabilities`, BrushCapabilitiesWeightPaint)
    }

    /**
     * Amount of smoothing to automatically apply to each stroke
     * @desc float in [0, 1], default 0.0
     */
    public get auto_smooth_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.auto_smooth_factor`)
    }

    /**
     * Brush blending mode
     * @desc enum in ['MIX', 'DARKEN', 'MUL', 'COLORBURN', 'LINEARBURN', 'LIGHTEN', 'SCREEN', 'COLORDODGE', 'ADD', 'OVERLAY', 'SOFTLIGHT', 'HARDLIGHT', 'VIVIDLIGHT', 'LINEARLIGHT', 'PINLIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUB', 'HUE', 'SATURATION', 'COLOR', 'LUMINOSITY', 'ERASE_ALPHA', 'ADD_ALPHA'], default 'MIX'
     */
    public get blend(): 'MIX' | 'DARKEN' | 'MUL' | 'COLORBURN' | 'LINEARBURN' | 'LIGHTEN' | 'SCREEN' | 'COLORDODGE' | 'ADD' | 'OVERLAY' | 'SOFTLIGHT' | 'HARDLIGHT' | 'VIVIDLIGHT' | 'LINEARLIGHT' | 'PINLIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUB' | 'HUE' | 'SATURATION' | 'COLOR' | 'LUMINOSITY' | 'ERASE_ALPHA' | 'ADD_ALPHA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend`)
    }

    /**
     * Radius of kernel used for soften and sharpen in pixels
     * @desc int in [1, 10000], default 2
     */
    public get blur_kernel_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.blur_kernel_radius`)
    }

    /**
     * 
     * @desc enum in ['BOX', 'GAUSSIAN'], default 'GAUSSIAN'
     */
    public get blur_mode(): 'BOX' | 'GAUSSIAN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blur_mode`)
    }

    /**
     * Opacity of clone image display
     * @desc float in [0, 1], default 0.5
     */
    public get clone_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clone_alpha`)
    }

    /**
     * Image for clone tool
     * @desc Image
     */
    public get clone_image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clone_image`, Image)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get clone_offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.clone_offset`, 'number', 2)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (1.0, 1.0, 1.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Use single color or gradient when painting
     * @desc enum in ['COLOR', 'GRADIENT'], default 'COLOR'
     */
    public get color_type(): 'COLOR' | 'GRADIENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_type`)
    }

    /**
     * How much the crease brush pinches
     * @desc float in [0, 1], default 0.5
     */
    public get crease_pinch_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crease_pinch_factor`)
    }

    /**
     * Color of cursor when adding
     * @desc float array of 4 items in [0, inf], default (1.0, 0.39, 0.39, 0.9)
     */
    public get cursor_color_add(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_color_add`, 'number', 4)
    }

    /**
     * Color of cursor when subtracting
     * @desc float array of 4 items in [0, inf], default (0.39, 0.39, 1.0, 0.9)
     */
    public get cursor_color_subtract(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_color_subtract`, 'number', 4)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public get cursor_overlay_alpha(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.cursor_overlay_alpha`)
    }

    /**
     * 
     * @desc enum in ['CUSTOM', 'SMOOTH', 'SMOOTHER', 'SPHERE', 'ROOT', 'SHARP', 'LIN', 'POW4', 'INVSQUARE', 'CONSTANT'], default 'CUSTOM'
     */
    public get curve_preset(): 'CUSTOM' | 'SMOOTH' | 'SMOOTHER' | 'SPHERE' | 'ROOT' | 'SHARP' | 'LIN' | 'POW4' | 'INVSQUARE' | 'CONSTANT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.curve_preset`)
    }

    /**
     * Ratio of samples in a cycle that the brush is enabled
     * @desc float in [0, 1], default 1.0
     */
    public get dash_ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dash_ratio`)
    }

    /**
     * Length of a dash cycle measured in stroke samples
     * @desc int in [1, 10000], default 20
     */
    public get dash_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dash_samples`)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT'], default 'ADD'
     */
    public get direction(): 'ADD' | 'SUBTRACT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.direction`)
    }

    /**
     * Deformation type that is used in the brush
     * @desc enum in ['GRAB', 'GRAB_BISCALE', 'GRAB_TRISCALE', 'SCALE', 'TWIST'], default 'GRAB'
     */
    public get elastic_deform_type(): 'GRAB' | 'GRAB_BISCALE' | 'GRAB_TRISCALE' | 'SCALE' | 'TWIST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.elastic_deform_type`)
    }

    /**
     * Poisson ratio for elastic deformation. Higher values preserve volume more, but also lead to more bulging
     * @desc float in [0, 0.9], default 0.0
     */
    public get elastic_deform_volume_preservation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.elastic_deform_volume_preservation`)
    }

    /**
     * Paint most on faces pointing towards the view according to this angle
     * @desc float in [0, 1.5708], default 0.0
     */
    public get falloff_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff_angle`)
    }

    /**
     * Use projected or spherical falloff
     * @desc enum in ['SPHERE', 'PROJECTED'], default 'SPHERE'
     */
    public get falloff_shape(): 'SPHERE' | 'PROJECTED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_shape`)
    }

    /**
     * Threshold above which filling is not propagated
     * @desc float in [0, 100], default 0.2
     */
    public get fill_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fill_threshold`)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'FILL', 'ERASE'], default 'DRAW'
     */
    public get gpencil_tool(): 'DRAW' | 'FILL' | 'ERASE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gpencil_tool`)
    }

    /**
     * Spacing before brush gradient goes full circle
     * @desc int in [1, 10000], default 0
     */
    public get grad_spacing(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grad_spacing`)
    }

    /**
     * 
     * @desc enum in ['LINEAR', 'RADIAL'], default 'LINEAR'
     */
    public get gradient_fill_mode(): 'LINEAR' | 'RADIAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gradient_fill_mode`)
    }

    /**
     * 
     * @desc enum in ['PRESSURE', 'SPACING_REPEAT', 'SPACING_CLAMP'], default 'PRESSURE'
     */
    public get gradient_stroke_mode(): 'PRESSURE' | 'SPACING_REPEAT' | 'SPACING_CLAMP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gradient_stroke_mode`)
    }

    /**
     * Affectable height of brush (layer height for layer tool, i.e.)
     * @desc float in [0, 1], default 0.5
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * File path to brush icon
     * @desc string, default '', (never None)
     */
    public get icon_filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.icon_filepath`)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'SOFTEN', 'SMEAR', 'CLONE', 'FILL', 'MASK'], default 'DRAW'
     */
    public get image_tool(): 'DRAW' | 'SOFTEN' | 'SMEAR' | 'CLONE' | 'FILL' | 'MASK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.image_tool`)
    }

    /**
     * Use Scrape or Fill tool when inverting this brush instead of inverting its displacement direction
     * @desc boolean, default False
     */
    public get invert_to_scrape_fill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_to_scrape_fill`)
    }

    /**
     * Jitter the position of the brush while painting
     * @desc float in [0, 1000], default 0.0
     */
    public get jitter(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.jitter`)
    }

    /**
     * Jitter the position of the brush in pixels while painting
     * @desc int in [0, 1000000], default 0
     */
    public get jitter_absolute(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.jitter_absolute`)
    }

    /**
     * Jitter in screen space or relative to brush size
     * @desc enum in ['VIEW', 'BRUSH'], default 'BRUSH'
     */
    public get jitter_unit(): 'VIEW' | 'BRUSH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.jitter_unit`)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public get mask_overlay_alpha(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mask_overlay_alpha`)
    }

    /**
     * Dimensions of mask stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get mask_stencil_dimension(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mask_stencil_dimension`, 'number', 2)
    }

    /**
     * Position of mask stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get mask_stencil_pos(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mask_stencil_pos`, 'number', 2)
    }

    /**
     * 
     * @desc Texture
     */
    public get mask_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask_texture`, Texture)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'SMOOTH'], default 'DRAW'
     */
    public get mask_tool(): 'DRAW' | 'SMOOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_tool`)
    }

    /**
     * Angle between the planes of the crease
     * @desc float in [0, 160], default 0.0
     */
    public get multiplane_scrape_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.multiplane_scrape_angle`)
    }

    /**
     * Ratio between the brush radius and the radius that is going to be used to sample the normal
     * @desc float in [0, 2], default 0.5
     */
    public get normal_radius_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.normal_radius_factor`)
    }

    /**
     * How much grab will pull vertexes out of surface during a grab
     * @desc float in [0, 1], default 0.0
     */
    public get normal_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.normal_weight`)
    }

    /**
     * Active Paint Curve
     * @desc PaintCurve
     */
    public get paint_curve(): PaintCurve {
        return PythonInterop.getClass(this.interop, `${this.accessor}.paint_curve`, PaintCurve)
    }

    /**
     * Adjust plane on which the brush acts towards or away from the object surface
     * @desc float in [-2, 2], default 0.0
     */
    public get plane_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.plane_offset`)
    }

    /**
     * If a vertex is further away from offset plane than this, then it is not affected
     * @desc float in [0, 1], default 0.5
     */
    public get plane_trim(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.plane_trim`)
    }

    /**
     * Number of segments of the inverse kinematics chain that will deform the mesh
     * @desc int in [1, 20], default 1
     */
    public get pose_ik_segments(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pose_ik_segments`)
    }

    /**
     * Offset of the pose origin in relation to the brush radius
     * @desc float in [0, 2], default 0.0
     */
    public get pose_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pose_offset`)
    }

    /**
     * Smooth iterations applied after calculating the pose factor of each vertex
     * @desc int in [0, 100], default 4
     */
    public get pose_smooth_iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pose_smooth_iterations`)
    }

    /**
     * How much grab will follow cursor rotation
     * @desc float in [0, 10], default 0.0
     */
    public get rake_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rake_factor`)
    }

    /**
     * Interval between paints for Airbrush
     * @desc float in [0.0001, 10000], default 0.1
     */
    public get rate(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rate`)
    }

    /**
     * 
     * @desc enum in ['AREA', 'VIEW', 'X', 'Y', 'Z'], default 'AREA'
     */
    public get sculpt_plane(): 'AREA' | 'VIEW' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sculpt_plane`)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'DRAW_SHARP', 'CLAY', 'CLAY_STRIPS', 'LAYER', 'INFLATE', 'BLOB', 'CREASE', 'SMOOTH', 'FLATTEN', 'FILL', 'SCRAPE', 'MULTIPLANE_SCRAPE', 'PINCH', 'GRAB', 'ELASTIC_DEFORM', 'SNAKE_HOOK', 'THUMB', 'POSE', 'NUDGE', 'ROTATE', 'TOPOLOGY', 'SIMPLIFY', 'MASK'], default 'DRAW'
     */
    public get sculpt_tool(): 'DRAW' | 'DRAW_SHARP' | 'CLAY' | 'CLAY_STRIPS' | 'LAYER' | 'INFLATE' | 'BLOB' | 'CREASE' | 'SMOOTH' | 'FLATTEN' | 'FILL' | 'SCRAPE' | 'MULTIPLANE_SCRAPE' | 'PINCH' | 'GRAB' | 'ELASTIC_DEFORM' | 'SNAKE_HOOK' | 'THUMB' | 'POSE' | 'NUDGE' | 'ROTATE' | 'TOPOLOGY' | 'SIMPLIFY' | 'MASK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sculpt_tool`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get secondary_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.secondary_color`, 'number', 3)
    }

    /**
     * Threshold below which, no sharpening is done
     * @desc float in [0, 100], default 0.0
     */
    public get sharp_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sharp_threshold`)
    }

    /**
     * Preview the scrape planes in the cursor during the stroke
     * @desc boolean, default False
     */
    public get show_multiplane_scrape_planes_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_multiplane_scrape_planes_preview`)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 5000], default 35
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    /**
     * Higher values give a smoother stroke
     * @desc float in [0.5, 0.99], default 0.9
     */
    public get smooth_stroke_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.smooth_stroke_factor`)
    }

    /**
     * Minimum distance from last point before stroke continues
     * @desc int in [10, 200], default 75
     */
    public get smooth_stroke_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.smooth_stroke_radius`)
    }

    /**
     * Spacing between brush daubs as a percentage of brush diameter
     * @desc int in [1, 1000], default 10
     */
    public get spacing(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.spacing`)
    }

    /**
     * Dimensions of stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (256.0, 256.0)
     */
    public get stencil_dimension(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.stencil_dimension`, 'number', 2)
    }

    /**
     * Position of stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (256.0, 256.0)
     */
    public get stencil_pos(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.stencil_pos`, 'number', 2)
    }

    /**
     * How powerful the effect of the brush is when applied
     * @desc float in [0, 10], default 1.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * 
     * @desc enum in ['DOTS', 'DRAG_DOT', 'SPACE', 'AIRBRUSH', 'ANCHORED', 'LINE', 'CURVE'], default 'DOTS'
     */
    public get stroke_method(): 'DOTS' | 'DRAG_DOT' | 'SPACE' | 'AIRBRUSH' | 'ANCHORED' | 'LINE' | 'CURVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stroke_method`)
    }

    /**
     * 
     * @desc Texture
     */
    public get texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture`, Texture)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public get texture_overlay_alpha(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.texture_overlay_alpha`)
    }

    /**
     * Value added to texture samples
     * @desc float in [-1, 1], default 0.0
     */
    public get texture_sample_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_sample_bias`)
    }

    /**
     * Automatically align edges to the brush direction to generate cleaner topology and define sharp features. Best used on low-poly meshes as it has a performance impact
     * @desc float in [0, 1], default 0.0
     */
    public get topology_rake_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.topology_rake_factor`)
    }

    /**
     * Radius of brush in Blender units
     * @desc float in [0.001, inf], default 0.0
     */
    public get unprojected_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.unprojected_radius`)
    }

    /**
     * Accumulate stroke daubs on top of each other
     * @desc boolean, default False
     */
    public get use_accumulate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_accumulate`)
    }

    /**
     * Space daubs according to surface orientation instead of screen space
     * @desc boolean, default False
     */
    public get use_adaptive_space(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_adaptive_space`)
    }

    /**
     * Keep applying paint effect while holding mouse (spray)
     * @desc boolean, default False
     */
    public get use_airbrush(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_airbrush`)
    }

    /**
     * When this is disabled, lock alpha while painting
     * @desc boolean, default False
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
    }

    /**
     * Keep the brush anchored to the initial location
     * @desc boolean, default False
     */
    public get use_anchor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_anchor`)
    }

    /**
     * Affect only vertices connected to the active vertex under the brush
     * @desc boolean, default False
     */
    public get use_automasking_topology(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_automasking_topology`)
    }

    /**
     * Show cursor in viewport
     * @desc boolean, default False
     */
    public get use_cursor_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor_overlay`)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public get use_cursor_overlay_override(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor_overlay_override`)
    }

    /**
     * Define the stroke curve with a bezier curve. Dabs are separated according to spacing
     * @desc boolean, default False
     */
    public get use_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curve`)
    }

    /**
     * Set the brush icon from an image file
     * @desc boolean, default False
     */
    public get use_custom_icon(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_icon`)
    }

    /**
     * Drag anchor brush from edge-to-edge
     * @desc boolean, default False
     */
    public get use_edge_to_edge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_to_edge`)
    }

    /**
     * Brush only affects vertexes that face the viewer
     * @desc boolean, default False
     */
    public get use_frontface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_frontface`)
    }

    /**
     * Blend brush influence by how much they face the front
     * @desc boolean, default False
     */
    public get use_frontface_falloff(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_frontface_falloff`)
    }

    /**
     * Apply the maximum grab strength to the active vertex instead of the cursor location
     * @desc boolean, default False
     */
    public get use_grab_active_vertex(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_grab_active_vertex`)
    }

    /**
     * Lighter pressure causes more smoothing to be applied
     * @desc boolean, default False
     */
    public get use_inverse_smooth_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_inverse_smooth_pressure`)
    }

    /**
     * Draw a line with dabs separated according to spacing
     * @desc boolean, default False
     */
    public get use_line(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_line`)
    }

    /**
     * Measure brush size relative to the view or the scene
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public get use_locked_size(): 'VIEW' | 'SCENE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_locked_size`)
    }

    /**
     * The angle between the planes changes during the stroke to fit the surface under the cursor
     * @desc boolean, default False
     */
    public get use_multiplane_scrape_dynamic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiplane_scrape_dynamic`)
    }

    /**
     * Enable tablet pressure sensitivity for offset
     * @desc boolean, default False
     */
    public get use_offset_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_offset_pressure`)
    }

    /**
     * When locked keep using normal of surface where stroke was initiated
     * @desc boolean, default False
     */
    public get use_original_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_original_normal`)
    }

    /**
     * When locked keep using the plane origin of surface where stroke was initiated
     * @desc boolean, default False
     */
    public get use_original_plane(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_original_plane`)
    }

    /**
     * Smooths the edges of the strokes
     * @desc boolean, default True
     */
    public get use_paint_antialiasing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_antialiasing`)
    }

    /**
     * Use this brush in grease pencil drawing mode
     * @desc boolean, default False
     */
    public get use_paint_grease_pencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_grease_pencil`)
    }

    /**
     * Use this brush in texture paint mode
     * @desc boolean, default True
     */
    public get use_paint_image(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_image`)
    }

    /**
     * Use this brush in sculpt mode
     * @desc boolean, default True
     */
    public get use_paint_sculpt(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_sculpt`)
    }

    /**
     * Use this brush in UV sculpt mode
     * @desc boolean, default False
     */
    public get use_paint_uv_sculpt(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_uv_sculpt`)
    }

    /**
     * Use this brush in vertex paint mode
     * @desc boolean, default True
     */
    public get use_paint_vertex(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_vertex`)
    }

    /**
     * Use this brush in weight paint mode
     * @desc boolean, default True
     */
    public get use_paint_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_weight`)
    }

    /**
     * Sculpt on a persistent layer of the mesh
     * @desc boolean, default False
     */
    public get use_persistent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_persistent`)
    }

    /**
     * Enable Plane Trim
     * @desc boolean, default False
     */
    public get use_plane_trim(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_plane_trim`)
    }

    /**
     * Enable tablet pressure sensitivity for jitter
     * @desc boolean, default False
     */
    public get use_pressure_jitter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_jitter`)
    }

    /**
     * Pen pressure makes texture influence smaller
     * @desc enum in ['NONE', 'RAMP', 'CUTOFF'], default 'NONE'
     */
    public get use_pressure_masking(): 'NONE' | 'RAMP' | 'CUTOFF' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_pressure_masking`)
    }

    /**
     * Enable tablet pressure sensitivity for size
     * @desc boolean, default False
     */
    public get use_pressure_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_size`)
    }

    /**
     * Enable tablet pressure sensitivity for spacing
     * @desc boolean, default False
     */
    public get use_pressure_spacing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_spacing`)
    }

    /**
     * Enable tablet pressure sensitivity for strength
     * @desc boolean, default True
     */
    public get use_pressure_strength(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_strength`)
    }

    /**
     * Show texture in viewport
     * @desc boolean, default False
     */
    public get use_primary_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_primary_overlay`)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public get use_primary_overlay_override(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_primary_overlay_override`)
    }

    /**
     * Allow a single dot to be carefully positioned
     * @desc boolean, default False
     */
    public get use_restore_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_restore_mesh`)
    }

    /**
     * Calculate the brush spacing using view or scene distance
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public get use_scene_spacing(): 'VIEW' | 'SCENE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_scene_spacing`)
    }

    /**
     * Show texture in viewport
     * @desc boolean, default False
     */
    public get use_secondary_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_secondary_overlay`)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public get use_secondary_overlay_override(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_secondary_overlay_override`)
    }

    /**
     * Brush lags behind mouse and follows a smoother path
     * @desc boolean, default False
     */
    public get use_smooth_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth_stroke`)
    }

    /**
     * Limit brush application to the distance specified by spacing
     * @desc boolean, default True
     */
    public get use_space(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_space`)
    }

    /**
     * Automatically adjust strength to give consistent results for different spacings
     * @desc boolean, default True
     */
    public get use_space_attenuation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_space_attenuation`)
    }

    /**
     * 
     * @desc enum in ['GRAB', 'RELAX', 'PINCH'], default 'GRAB'
     */
    public get uv_sculpt_tool(): 'GRAB' | 'RELAX' | 'PINCH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.uv_sculpt_tool`)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'BLUR', 'AVERAGE', 'SMEAR'], default 'DRAW'
     */
    public get vertex_tool(): 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vertex_tool`)
    }

    /**
     * Vertex weight when brush is applied
     * @desc float in [0, 1], default 1.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'BLUR', 'AVERAGE', 'SMEAR'], default 'DRAW'
     */
    public get weight_tool(): 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.weight_tool`)
    }

    /**
     * Amount of smoothing to automatically apply to each stroke
     * @desc float in [0, 1], default 0.0
     */
    public set auto_smooth_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.auto_smooth_factor`, value)
    }

    /**
     * Brush blending mode
     * @desc enum in ['MIX', 'DARKEN', 'MUL', 'COLORBURN', 'LINEARBURN', 'LIGHTEN', 'SCREEN', 'COLORDODGE', 'ADD', 'OVERLAY', 'SOFTLIGHT', 'HARDLIGHT', 'VIVIDLIGHT', 'LINEARLIGHT', 'PINLIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUB', 'HUE', 'SATURATION', 'COLOR', 'LUMINOSITY', 'ERASE_ALPHA', 'ADD_ALPHA'], default 'MIX'
     */
    public set blend(value: 'MIX' | 'DARKEN' | 'MUL' | 'COLORBURN' | 'LINEARBURN' | 'LIGHTEN' | 'SCREEN' | 'COLORDODGE' | 'ADD' | 'OVERLAY' | 'SOFTLIGHT' | 'HARDLIGHT' | 'VIVIDLIGHT' | 'LINEARLIGHT' | 'PINLIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUB' | 'HUE' | 'SATURATION' | 'COLOR' | 'LUMINOSITY' | 'ERASE_ALPHA' | 'ADD_ALPHA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend`, value)
    }

    /**
     * Radius of kernel used for soften and sharpen in pixels
     * @desc int in [1, 10000], default 2
     */
    public set blur_kernel_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.blur_kernel_radius`, value)
    }

    /**
     * 
     * @desc enum in ['BOX', 'GAUSSIAN'], default 'GAUSSIAN'
     */
    public set blur_mode(value: 'BOX' | 'GAUSSIAN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blur_mode`, value)
    }

    /**
     * Opacity of clone image display
     * @desc float in [0, 1], default 0.5
     */
    public set clone_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clone_alpha`, value)
    }

    /**
     * Image for clone tool
     * @desc Image
     */
    public set clone_image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clone_image`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set clone_offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.clone_offset`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (1.0, 1.0, 1.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Use single color or gradient when painting
     * @desc enum in ['COLOR', 'GRADIENT'], default 'COLOR'
     */
    public set color_type(value: 'COLOR' | 'GRADIENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_type`, value)
    }

    /**
     * How much the crease brush pinches
     * @desc float in [0, 1], default 0.5
     */
    public set crease_pinch_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crease_pinch_factor`, value)
    }

    /**
     * Color of cursor when adding
     * @desc float array of 4 items in [0, inf], default (1.0, 0.39, 0.39, 0.9)
     */
    public set cursor_color_add(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_color_add`, value)
    }

    /**
     * Color of cursor when subtracting
     * @desc float array of 4 items in [0, inf], default (0.39, 0.39, 1.0, 0.9)
     */
    public set cursor_color_subtract(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_color_subtract`, value)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public set cursor_overlay_alpha(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.cursor_overlay_alpha`, value)
    }

    /**
     * 
     * @desc enum in ['CUSTOM', 'SMOOTH', 'SMOOTHER', 'SPHERE', 'ROOT', 'SHARP', 'LIN', 'POW4', 'INVSQUARE', 'CONSTANT'], default 'CUSTOM'
     */
    public set curve_preset(value: 'CUSTOM' | 'SMOOTH' | 'SMOOTHER' | 'SPHERE' | 'ROOT' | 'SHARP' | 'LIN' | 'POW4' | 'INVSQUARE' | 'CONSTANT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.curve_preset`, value)
    }

    /**
     * Ratio of samples in a cycle that the brush is enabled
     * @desc float in [0, 1], default 1.0
     */
    public set dash_ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dash_ratio`, value)
    }

    /**
     * Length of a dash cycle measured in stroke samples
     * @desc int in [1, 10000], default 20
     */
    public set dash_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dash_samples`, value)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT'], default 'ADD'
     */
    public set direction(value: 'ADD' | 'SUBTRACT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.direction`, value)
    }

    /**
     * Deformation type that is used in the brush
     * @desc enum in ['GRAB', 'GRAB_BISCALE', 'GRAB_TRISCALE', 'SCALE', 'TWIST'], default 'GRAB'
     */
    public set elastic_deform_type(value: 'GRAB' | 'GRAB_BISCALE' | 'GRAB_TRISCALE' | 'SCALE' | 'TWIST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.elastic_deform_type`, value)
    }

    /**
     * Poisson ratio for elastic deformation. Higher values preserve volume more, but also lead to more bulging
     * @desc float in [0, 0.9], default 0.0
     */
    public set elastic_deform_volume_preservation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.elastic_deform_volume_preservation`, value)
    }

    /**
     * Paint most on faces pointing towards the view according to this angle
     * @desc float in [0, 1.5708], default 0.0
     */
    public set falloff_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff_angle`, value)
    }

    /**
     * Use projected or spherical falloff
     * @desc enum in ['SPHERE', 'PROJECTED'], default 'SPHERE'
     */
    public set falloff_shape(value: 'SPHERE' | 'PROJECTED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_shape`, value)
    }

    /**
     * Threshold above which filling is not propagated
     * @desc float in [0, 100], default 0.2
     */
    public set fill_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fill_threshold`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'FILL', 'ERASE'], default 'DRAW'
     */
    public set gpencil_tool(value: 'DRAW' | 'FILL' | 'ERASE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gpencil_tool`, value)
    }

    /**
     * Spacing before brush gradient goes full circle
     * @desc int in [1, 10000], default 0
     */
    public set grad_spacing(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grad_spacing`, value)
    }

    /**
     * 
     * @desc enum in ['LINEAR', 'RADIAL'], default 'LINEAR'
     */
    public set gradient_fill_mode(value: 'LINEAR' | 'RADIAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gradient_fill_mode`, value)
    }

    /**
     * 
     * @desc enum in ['PRESSURE', 'SPACING_REPEAT', 'SPACING_CLAMP'], default 'PRESSURE'
     */
    public set gradient_stroke_mode(value: 'PRESSURE' | 'SPACING_REPEAT' | 'SPACING_CLAMP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gradient_stroke_mode`, value)
    }

    /**
     * Affectable height of brush (layer height for layer tool, i.e.)
     * @desc float in [0, 1], default 0.5
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * File path to brush icon
     * @desc string, default '', (never None)
     */
    public set icon_filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.icon_filepath`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'SOFTEN', 'SMEAR', 'CLONE', 'FILL', 'MASK'], default 'DRAW'
     */
    public set image_tool(value: 'DRAW' | 'SOFTEN' | 'SMEAR' | 'CLONE' | 'FILL' | 'MASK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.image_tool`, value)
    }

    /**
     * Use Scrape or Fill tool when inverting this brush instead of inverting its displacement direction
     * @desc boolean, default False
     */
    public set invert_to_scrape_fill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_to_scrape_fill`, value)
    }

    /**
     * Jitter the position of the brush while painting
     * @desc float in [0, 1000], default 0.0
     */
    public set jitter(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.jitter`, value)
    }

    /**
     * Jitter the position of the brush in pixels while painting
     * @desc int in [0, 1000000], default 0
     */
    public set jitter_absolute(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.jitter_absolute`, value)
    }

    /**
     * Jitter in screen space or relative to brush size
     * @desc enum in ['VIEW', 'BRUSH'], default 'BRUSH'
     */
    public set jitter_unit(value: 'VIEW' | 'BRUSH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.jitter_unit`, value)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public set mask_overlay_alpha(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.mask_overlay_alpha`, value)
    }

    /**
     * Dimensions of mask stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set mask_stencil_dimension(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mask_stencil_dimension`, value)
    }

    /**
     * Position of mask stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set mask_stencil_pos(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mask_stencil_pos`, value)
    }

    /**
     * 
     * @desc Texture
     */
    public set mask_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask_texture`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'SMOOTH'], default 'DRAW'
     */
    public set mask_tool(value: 'DRAW' | 'SMOOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_tool`, value)
    }

    /**
     * Angle between the planes of the crease
     * @desc float in [0, 160], default 0.0
     */
    public set multiplane_scrape_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.multiplane_scrape_angle`, value)
    }

    /**
     * Ratio between the brush radius and the radius that is going to be used to sample the normal
     * @desc float in [0, 2], default 0.5
     */
    public set normal_radius_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.normal_radius_factor`, value)
    }

    /**
     * How much grab will pull vertexes out of surface during a grab
     * @desc float in [0, 1], default 0.0
     */
    public set normal_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.normal_weight`, value)
    }

    /**
     * Active Paint Curve
     * @desc PaintCurve
     */
    public set paint_curve(value: PaintCurve) {
        PythonInterop.setClass(this.interop, `${this.accessor}.paint_curve`, value)
    }

    /**
     * Adjust plane on which the brush acts towards or away from the object surface
     * @desc float in [-2, 2], default 0.0
     */
    public set plane_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.plane_offset`, value)
    }

    /**
     * If a vertex is further away from offset plane than this, then it is not affected
     * @desc float in [0, 1], default 0.5
     */
    public set plane_trim(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.plane_trim`, value)
    }

    /**
     * Number of segments of the inverse kinematics chain that will deform the mesh
     * @desc int in [1, 20], default 1
     */
    public set pose_ik_segments(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pose_ik_segments`, value)
    }

    /**
     * Offset of the pose origin in relation to the brush radius
     * @desc float in [0, 2], default 0.0
     */
    public set pose_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pose_offset`, value)
    }

    /**
     * Smooth iterations applied after calculating the pose factor of each vertex
     * @desc int in [0, 100], default 4
     */
    public set pose_smooth_iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pose_smooth_iterations`, value)
    }

    /**
     * How much grab will follow cursor rotation
     * @desc float in [0, 10], default 0.0
     */
    public set rake_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rake_factor`, value)
    }

    /**
     * Interval between paints for Airbrush
     * @desc float in [0.0001, 10000], default 0.1
     */
    public set rate(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rate`, value)
    }

    /**
     * 
     * @desc enum in ['AREA', 'VIEW', 'X', 'Y', 'Z'], default 'AREA'
     */
    public set sculpt_plane(value: 'AREA' | 'VIEW' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sculpt_plane`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'DRAW_SHARP', 'CLAY', 'CLAY_STRIPS', 'LAYER', 'INFLATE', 'BLOB', 'CREASE', 'SMOOTH', 'FLATTEN', 'FILL', 'SCRAPE', 'MULTIPLANE_SCRAPE', 'PINCH', 'GRAB', 'ELASTIC_DEFORM', 'SNAKE_HOOK', 'THUMB', 'POSE', 'NUDGE', 'ROTATE', 'TOPOLOGY', 'SIMPLIFY', 'MASK'], default 'DRAW'
     */
    public set sculpt_tool(value: 'DRAW' | 'DRAW_SHARP' | 'CLAY' | 'CLAY_STRIPS' | 'LAYER' | 'INFLATE' | 'BLOB' | 'CREASE' | 'SMOOTH' | 'FLATTEN' | 'FILL' | 'SCRAPE' | 'MULTIPLANE_SCRAPE' | 'PINCH' | 'GRAB' | 'ELASTIC_DEFORM' | 'SNAKE_HOOK' | 'THUMB' | 'POSE' | 'NUDGE' | 'ROTATE' | 'TOPOLOGY' | 'SIMPLIFY' | 'MASK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sculpt_tool`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set secondary_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.secondary_color`, value)
    }

    /**
     * Threshold below which, no sharpening is done
     * @desc float in [0, 100], default 0.0
     */
    public set sharp_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sharp_threshold`, value)
    }

    /**
     * Preview the scrape planes in the cursor during the stroke
     * @desc boolean, default False
     */
    public set show_multiplane_scrape_planes_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_multiplane_scrape_planes_preview`, value)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 5000], default 35
     */
    public set size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Higher values give a smoother stroke
     * @desc float in [0.5, 0.99], default 0.9
     */
    public set smooth_stroke_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.smooth_stroke_factor`, value)
    }

    /**
     * Minimum distance from last point before stroke continues
     * @desc int in [10, 200], default 75
     */
    public set smooth_stroke_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.smooth_stroke_radius`, value)
    }

    /**
     * Spacing between brush daubs as a percentage of brush diameter
     * @desc int in [1, 1000], default 10
     */
    public set spacing(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.spacing`, value)
    }

    /**
     * Dimensions of stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (256.0, 256.0)
     */
    public set stencil_dimension(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.stencil_dimension`, value)
    }

    /**
     * Position of stencil in viewport
     * @desc float array of 2 items in [-inf, inf], default (256.0, 256.0)
     */
    public set stencil_pos(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.stencil_pos`, value)
    }

    /**
     * How powerful the effect of the brush is when applied
     * @desc float in [0, 10], default 1.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * 
     * @desc enum in ['DOTS', 'DRAG_DOT', 'SPACE', 'AIRBRUSH', 'ANCHORED', 'LINE', 'CURVE'], default 'DOTS'
     */
    public set stroke_method(value: 'DOTS' | 'DRAG_DOT' | 'SPACE' | 'AIRBRUSH' | 'ANCHORED' | 'LINE' | 'CURVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stroke_method`, value)
    }

    /**
     * 
     * @desc Texture
     */
    public set texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture`, value)
    }

    /**
     * 
     * @desc int in [0, 100], default 33
     */
    public set texture_overlay_alpha(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.texture_overlay_alpha`, value)
    }

    /**
     * Value added to texture samples
     * @desc float in [-1, 1], default 0.0
     */
    public set texture_sample_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_sample_bias`, value)
    }

    /**
     * Automatically align edges to the brush direction to generate cleaner topology and define sharp features. Best used on low-poly meshes as it has a performance impact
     * @desc float in [0, 1], default 0.0
     */
    public set topology_rake_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.topology_rake_factor`, value)
    }

    /**
     * Radius of brush in Blender units
     * @desc float in [0.001, inf], default 0.0
     */
    public set unprojected_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.unprojected_radius`, value)
    }

    /**
     * Accumulate stroke daubs on top of each other
     * @desc boolean, default False
     */
    public set use_accumulate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_accumulate`, value)
    }

    /**
     * Space daubs according to surface orientation instead of screen space
     * @desc boolean, default False
     */
    public set use_adaptive_space(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_adaptive_space`, value)
    }

    /**
     * Keep applying paint effect while holding mouse (spray)
     * @desc boolean, default False
     */
    public set use_airbrush(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_airbrush`, value)
    }

    /**
     * When this is disabled, lock alpha while painting
     * @desc boolean, default False
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
    }

    /**
     * Keep the brush anchored to the initial location
     * @desc boolean, default False
     */
    public set use_anchor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_anchor`, value)
    }

    /**
     * Affect only vertices connected to the active vertex under the brush
     * @desc boolean, default False
     */
    public set use_automasking_topology(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_automasking_topology`, value)
    }

    /**
     * Show cursor in viewport
     * @desc boolean, default False
     */
    public set use_cursor_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor_overlay`, value)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public set use_cursor_overlay_override(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor_overlay_override`, value)
    }

    /**
     * Define the stroke curve with a bezier curve. Dabs are separated according to spacing
     * @desc boolean, default False
     */
    public set use_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curve`, value)
    }

    /**
     * Set the brush icon from an image file
     * @desc boolean, default False
     */
    public set use_custom_icon(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_icon`, value)
    }

    /**
     * Drag anchor brush from edge-to-edge
     * @desc boolean, default False
     */
    public set use_edge_to_edge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_to_edge`, value)
    }

    /**
     * Brush only affects vertexes that face the viewer
     * @desc boolean, default False
     */
    public set use_frontface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_frontface`, value)
    }

    /**
     * Blend brush influence by how much they face the front
     * @desc boolean, default False
     */
    public set use_frontface_falloff(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_frontface_falloff`, value)
    }

    /**
     * Apply the maximum grab strength to the active vertex instead of the cursor location
     * @desc boolean, default False
     */
    public set use_grab_active_vertex(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_grab_active_vertex`, value)
    }

    /**
     * Lighter pressure causes more smoothing to be applied
     * @desc boolean, default False
     */
    public set use_inverse_smooth_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_inverse_smooth_pressure`, value)
    }

    /**
     * Draw a line with dabs separated according to spacing
     * @desc boolean, default False
     */
    public set use_line(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_line`, value)
    }

    /**
     * Measure brush size relative to the view or the scene
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public set use_locked_size(value: 'VIEW' | 'SCENE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_locked_size`, value)
    }

    /**
     * The angle between the planes changes during the stroke to fit the surface under the cursor
     * @desc boolean, default False
     */
    public set use_multiplane_scrape_dynamic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiplane_scrape_dynamic`, value)
    }

    /**
     * Enable tablet pressure sensitivity for offset
     * @desc boolean, default False
     */
    public set use_offset_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_offset_pressure`, value)
    }

    /**
     * When locked keep using normal of surface where stroke was initiated
     * @desc boolean, default False
     */
    public set use_original_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_original_normal`, value)
    }

    /**
     * When locked keep using the plane origin of surface where stroke was initiated
     * @desc boolean, default False
     */
    public set use_original_plane(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_original_plane`, value)
    }

    /**
     * Smooths the edges of the strokes
     * @desc boolean, default True
     */
    public set use_paint_antialiasing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_antialiasing`, value)
    }

    /**
     * Use this brush in grease pencil drawing mode
     * @desc boolean, default False
     */
    public set use_paint_grease_pencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_grease_pencil`, value)
    }

    /**
     * Use this brush in texture paint mode
     * @desc boolean, default True
     */
    public set use_paint_image(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_image`, value)
    }

    /**
     * Use this brush in sculpt mode
     * @desc boolean, default True
     */
    public set use_paint_sculpt(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_sculpt`, value)
    }

    /**
     * Use this brush in UV sculpt mode
     * @desc boolean, default False
     */
    public set use_paint_uv_sculpt(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_uv_sculpt`, value)
    }

    /**
     * Use this brush in vertex paint mode
     * @desc boolean, default True
     */
    public set use_paint_vertex(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_vertex`, value)
    }

    /**
     * Use this brush in weight paint mode
     * @desc boolean, default True
     */
    public set use_paint_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_weight`, value)
    }

    /**
     * Sculpt on a persistent layer of the mesh
     * @desc boolean, default False
     */
    public set use_persistent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_persistent`, value)
    }

    /**
     * Enable Plane Trim
     * @desc boolean, default False
     */
    public set use_plane_trim(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_plane_trim`, value)
    }

    /**
     * Enable tablet pressure sensitivity for jitter
     * @desc boolean, default False
     */
    public set use_pressure_jitter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_jitter`, value)
    }

    /**
     * Pen pressure makes texture influence smaller
     * @desc enum in ['NONE', 'RAMP', 'CUTOFF'], default 'NONE'
     */
    public set use_pressure_masking(value: 'NONE' | 'RAMP' | 'CUTOFF') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_pressure_masking`, value)
    }

    /**
     * Enable tablet pressure sensitivity for size
     * @desc boolean, default False
     */
    public set use_pressure_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_size`, value)
    }

    /**
     * Enable tablet pressure sensitivity for spacing
     * @desc boolean, default False
     */
    public set use_pressure_spacing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_spacing`, value)
    }

    /**
     * Enable tablet pressure sensitivity for strength
     * @desc boolean, default True
     */
    public set use_pressure_strength(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_strength`, value)
    }

    /**
     * Show texture in viewport
     * @desc boolean, default False
     */
    public set use_primary_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_primary_overlay`, value)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public set use_primary_overlay_override(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_primary_overlay_override`, value)
    }

    /**
     * Allow a single dot to be carefully positioned
     * @desc boolean, default False
     */
    public set use_restore_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_restore_mesh`, value)
    }

    /**
     * Calculate the brush spacing using view or scene distance
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public set use_scene_spacing(value: 'VIEW' | 'SCENE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_scene_spacing`, value)
    }

    /**
     * Show texture in viewport
     * @desc boolean, default False
     */
    public set use_secondary_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_secondary_overlay`, value)
    }

    /**
     * Don’t show overlay during a stroke
     * @desc boolean, default False
     */
    public set use_secondary_overlay_override(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_secondary_overlay_override`, value)
    }

    /**
     * Brush lags behind mouse and follows a smoother path
     * @desc boolean, default False
     */
    public set use_smooth_stroke(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth_stroke`, value)
    }

    /**
     * Limit brush application to the distance specified by spacing
     * @desc boolean, default True
     */
    public set use_space(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_space`, value)
    }

    /**
     * Automatically adjust strength to give consistent results for different spacings
     * @desc boolean, default True
     */
    public set use_space_attenuation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_space_attenuation`, value)
    }

    /**
     * 
     * @desc enum in ['GRAB', 'RELAX', 'PINCH'], default 'GRAB'
     */
    public set uv_sculpt_tool(value: 'GRAB' | 'RELAX' | 'PINCH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.uv_sculpt_tool`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'BLUR', 'AVERAGE', 'SMEAR'], default 'DRAW'
     */
    public set vertex_tool(value: 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vertex_tool`, value)
    }

    /**
     * Vertex weight when brush is applied
     * @desc float in [0, 1], default 1.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    /**
     * 
     * @desc enum in ['DRAW', 'BLUR', 'AVERAGE', 'SMEAR'], default 'DRAW'
     */
    public set weight_tool(value: 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.weight_tool`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
