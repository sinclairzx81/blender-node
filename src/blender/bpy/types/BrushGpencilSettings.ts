import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapping } from './CurveMapping'
import { Material } from './Material'

/**
 * BrushGpencilSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushGpencilSettings.html
 */
export class BrushGpencilSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Curve used for the jitter effect
     * @desc CurveMapping, (readonly)
     */
    public get curve_jitter(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_jitter`, CurveMapping)
    }

    /**
     * Curve used for the sensitivity
     * @desc CurveMapping, (readonly)
     */
    public get curve_sensitivity(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_sensitivity`, CurveMapping)
    }

    /**
     * Curve used for the strength
     * @desc CurveMapping, (readonly)
     */
    public get curve_strength(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_strength`, CurveMapping)
    }

    /**
     * Amount of smoothing while drawing
     * @desc float in [0, 1], default 0.0
     */
    public get active_smooth_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.active_smooth_factor`)
    }

    /**
     * Direction of the stroke at which brush gives maximal thickness (0° for horizontal)
     * @desc float in [-1.5708, 1.5708], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Reduce brush thickness by this factor when stroke is perpendicular to ‘Angle’ direction
     * @desc float in [0, 1], default 0.0
     */
    public get angle_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_factor`)
    }

    /**
     * Eraser Mode
     * @desc enum in ['SOFT', 'HARD', 'STROKE'], default 'SOFT'
     */
    public get eraser_mode(): 'SOFT' | 'HARD' | 'STROKE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.eraser_mode`)
    }

    /**
     * Amount of erasing for strength
     * @desc float in [0, 100], default 0.0
     */
    public get eraser_strength_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eraser_strength_factor`)
    }

    /**
     * Amount of erasing for thickness
     * @desc float in [0, 100], default 0.0
     */
    public get eraser_thickness_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eraser_thickness_factor`)
    }

    /**
     * Mode to draw boundary limits
     * @desc enum in ['BOTH', 'STROKE', 'CONTROL'], default 'BOTH'
     */
    public get fill_draw_mode(): 'BOTH' | 'STROKE' | 'CONTROL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fill_draw_mode`)
    }

    /**
     * Multiplier for fill resolution, higher resolution is more accurate but slower
     * @desc int in [1, 8], default 0
     */
    public get fill_factor(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fill_factor`)
    }

    /**
     * Size in pixels to consider the leak closed
     * @desc int in [0, 100], default 0
     */
    public get fill_leak(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fill_leak`)
    }

    /**
     * Number of simplify steps (large values reduce fill accuracy)
     * @desc int in [0, 10], default 0
     */
    public get fill_simplify_level(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fill_simplify_level`)
    }

    /**
     * Threshold to consider color transparent for filling
     * @desc float in [0, 1], default 0.0
     */
    public get fill_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fill_threshold`)
    }

    /**
     * 
     * @desc enum in ['PENCIL', 'PEN', 'INK', 'INKNOISE', 'BLOCK', 'MARKER', 'AIRBRUSH', 'CHISEL', 'FILL', 'SOFT', 'HARD', 'STROKE'], default 'PENCIL'
     */
    public get gp_icon(): 'PENCIL' | 'PEN' | 'INK' | 'INKNOISE' | 'BLOCK' | 'MARKER' | 'AIRBRUSH' | 'CHISEL' | 'FILL' | 'SOFT' | 'HARD' | 'STROKE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gp_icon`)
    }

    /**
     * Amount of gradient for Dot and Box strokes (set to 1 for full solid)
     * @desc float in [0.001, 1], default 1.0
     */
    public get gradient_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gradient_factor`)
    }

    /**
     * 
     * @desc float array of 2 items in [0.01, 1], default (1.0, 1.0)
     */
    public get gradient_shape(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gradient_shape`, 'number', 2)
    }

    /**
     * Generate intermediate points for very fast mouse movements. Set to 0 to disable
     * @desc int in [0, 10], default 0
     */
    public get input_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_samples`)
    }

    /**
     * Material used for strokes drawn using this brush
     * @desc Material
     */
    public get material(): Material {
        return PythonInterop.getClass(this.interop, `${this.accessor}.material`, Material)
    }

    /**
     * Jitter factor for new strokes
     * @desc float in [0, 1], default 0.0
     */
    public get pen_jitter(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pen_jitter`)
    }

    /**
     * Pressure sensitivity factor for new strokes
     * @desc float in [0.1, 3], default 0.0
     */
    public get pen_sensitivity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pen_sensitivity_factor`)
    }

    /**
     * Amount of smoothing to apply after finish newly created strokes, to reduce jitter/noise
     * @desc float in [0, 2], default 0.0
     */
    public get pen_smooth_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pen_smooth_factor`)
    }

    /**
     * Number of times to smooth newly created strokes
     * @desc int in [1, 3], default 0
     */
    public get pen_smooth_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pen_smooth_steps`)
    }

    /**
     * Color strength for new strokes (affect alpha factor of color)
     * @desc float in [0, 1], default 0.0
     */
    public get pen_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pen_strength`)
    }

    /**
     * Number of times to subdivide newly created strokes, for less jagged strokes
     * @desc int in [0, 3], default 0
     */
    public get pen_subdivision_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pen_subdivision_steps`)
    }

    /**
     * Amount of thickness smoothing to apply after finish newly created strokes, to reduce jitter/noise
     * @desc float in [0, 2], default 0.0
     */
    public get pen_thick_smooth_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pen_thick_smooth_factor`)
    }

    /**
     * Number of times to smooth thickness for newly created strokes
     * @desc int in [1, 3], default 0
     */
    public get pen_thick_smooth_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pen_thick_smooth_steps`)
    }

    /**
     * Randomness factor for pressure in new strokes
     * @desc float in [0, 1], default 0.0
     */
    public get random_pressure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_pressure`)
    }

    /**
     * Randomness factor strength in new strokes
     * @desc float in [0, 1], default 0.0
     */
    public get random_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_strength`)
    }

    /**
     * Randomness factor for new strokes after subdivision
     * @desc float in [0, 1], default 0.0
     */
    public get random_subdiv(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_subdiv`)
    }

    /**
     * Show transparent lines to use as boundary for filling
     * @desc boolean, default True
     */
    public get show_fill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_fill`)
    }

    /**
     * Show help lines for filling to see boundaries
     * @desc boolean, default True
     */
    public get show_fill_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_fill_boundary`)
    }

    /**
     * Do not draw fill color while drawing the stroke
     * @desc boolean, default False
     */
    public get show_lasso(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_lasso`)
    }

    /**
     * Factor of Simplify using adaptive algorithm
     * @desc float in [0, 100], default 0.0
     */
    public get simplify_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.simplify_factor`)
    }

    /**
     * Trim intersecting stroke ends
     * @desc boolean, default False
     */
    public get trim(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.trim`)
    }

    /**
     * Enable cursor on screen
     * @desc boolean, default True
     */
    public get use_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor`)
    }

    /**
     * Use this brush when enable eraser with fast switch key
     * @desc boolean, default True
     */
    public get use_default_eraser(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_eraser`)
    }

    /**
     * Use tablet pressure for jitter
     * @desc boolean, default False
     */
    public get use_jitter_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_jitter_pressure`)
    }

    /**
     * Keep material assigned to brush
     * @desc boolean, default False
     */
    public get use_material_pin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_material_pin`)
    }

    /**
     * Erase only strokes visible and not occluded
     * @desc boolean, default False
     */
    public get use_occlude_eraser(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_occlude_eraser`)
    }

    /**
     * Use tablet pressure
     * @desc boolean, default False
     */
    public get use_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure`)
    }

    /**
     * Additional post processing options for new strokes
     * @desc boolean, default False
     */
    public get use_settings_postprocess(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_settings_postprocess`)
    }

    /**
     * Random brush settings
     * @desc boolean, default False
     */
    public get use_settings_random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_settings_random`)
    }

    /**
     * Draw lines with a delay to allow smooth strokes. Press Shift key to override while drawing
     * @desc boolean, default True
     */
    public get use_settings_stabilizer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_settings_stabilizer`)
    }

    /**
     * Use tablet pressure for color strength
     * @desc boolean, default False
     */
    public get use_strength_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_strength_pressure`)
    }

    /**
     * Random factor for autogenerated UV rotation
     * @desc float in [0, 1], default 0.0
     */
    public get uv_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.uv_random`)
    }

    /**
     * Amount of smoothing while drawing
     * @desc float in [0, 1], default 0.0
     */
    public set active_smooth_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.active_smooth_factor`, value)
    }

    /**
     * Direction of the stroke at which brush gives maximal thickness (0° for horizontal)
     * @desc float in [-1.5708, 1.5708], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Reduce brush thickness by this factor when stroke is perpendicular to ‘Angle’ direction
     * @desc float in [0, 1], default 0.0
     */
    public set angle_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_factor`, value)
    }

    /**
     * Eraser Mode
     * @desc enum in ['SOFT', 'HARD', 'STROKE'], default 'SOFT'
     */
    public set eraser_mode(value: 'SOFT' | 'HARD' | 'STROKE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.eraser_mode`, value)
    }

    /**
     * Amount of erasing for strength
     * @desc float in [0, 100], default 0.0
     */
    public set eraser_strength_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eraser_strength_factor`, value)
    }

    /**
     * Amount of erasing for thickness
     * @desc float in [0, 100], default 0.0
     */
    public set eraser_thickness_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eraser_thickness_factor`, value)
    }

    /**
     * Mode to draw boundary limits
     * @desc enum in ['BOTH', 'STROKE', 'CONTROL'], default 'BOTH'
     */
    public set fill_draw_mode(value: 'BOTH' | 'STROKE' | 'CONTROL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fill_draw_mode`, value)
    }

    /**
     * Multiplier for fill resolution, higher resolution is more accurate but slower
     * @desc int in [1, 8], default 0
     */
    public set fill_factor(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fill_factor`, value)
    }

    /**
     * Size in pixels to consider the leak closed
     * @desc int in [0, 100], default 0
     */
    public set fill_leak(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fill_leak`, value)
    }

    /**
     * Number of simplify steps (large values reduce fill accuracy)
     * @desc int in [0, 10], default 0
     */
    public set fill_simplify_level(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fill_simplify_level`, value)
    }

    /**
     * Threshold to consider color transparent for filling
     * @desc float in [0, 1], default 0.0
     */
    public set fill_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fill_threshold`, value)
    }

    /**
     * 
     * @desc enum in ['PENCIL', 'PEN', 'INK', 'INKNOISE', 'BLOCK', 'MARKER', 'AIRBRUSH', 'CHISEL', 'FILL', 'SOFT', 'HARD', 'STROKE'], default 'PENCIL'
     */
    public set gp_icon(value: 'PENCIL' | 'PEN' | 'INK' | 'INKNOISE' | 'BLOCK' | 'MARKER' | 'AIRBRUSH' | 'CHISEL' | 'FILL' | 'SOFT' | 'HARD' | 'STROKE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gp_icon`, value)
    }

    /**
     * Amount of gradient for Dot and Box strokes (set to 1 for full solid)
     * @desc float in [0.001, 1], default 1.0
     */
    public set gradient_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gradient_factor`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [0.01, 1], default (1.0, 1.0)
     */
    public set gradient_shape(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gradient_shape`, value)
    }

    /**
     * Generate intermediate points for very fast mouse movements. Set to 0 to disable
     * @desc int in [0, 10], default 0
     */
    public set input_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.input_samples`, value)
    }

    /**
     * Material used for strokes drawn using this brush
     * @desc Material
     */
    public set material(value: Material) {
        PythonInterop.setClass(this.interop, `${this.accessor}.material`, value)
    }

    /**
     * Jitter factor for new strokes
     * @desc float in [0, 1], default 0.0
     */
    public set pen_jitter(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pen_jitter`, value)
    }

    /**
     * Pressure sensitivity factor for new strokes
     * @desc float in [0.1, 3], default 0.0
     */
    public set pen_sensitivity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pen_sensitivity_factor`, value)
    }

    /**
     * Amount of smoothing to apply after finish newly created strokes, to reduce jitter/noise
     * @desc float in [0, 2], default 0.0
     */
    public set pen_smooth_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pen_smooth_factor`, value)
    }

    /**
     * Number of times to smooth newly created strokes
     * @desc int in [1, 3], default 0
     */
    public set pen_smooth_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pen_smooth_steps`, value)
    }

    /**
     * Color strength for new strokes (affect alpha factor of color)
     * @desc float in [0, 1], default 0.0
     */
    public set pen_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pen_strength`, value)
    }

    /**
     * Number of times to subdivide newly created strokes, for less jagged strokes
     * @desc int in [0, 3], default 0
     */
    public set pen_subdivision_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pen_subdivision_steps`, value)
    }

    /**
     * Amount of thickness smoothing to apply after finish newly created strokes, to reduce jitter/noise
     * @desc float in [0, 2], default 0.0
     */
    public set pen_thick_smooth_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pen_thick_smooth_factor`, value)
    }

    /**
     * Number of times to smooth thickness for newly created strokes
     * @desc int in [1, 3], default 0
     */
    public set pen_thick_smooth_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pen_thick_smooth_steps`, value)
    }

    /**
     * Randomness factor for pressure in new strokes
     * @desc float in [0, 1], default 0.0
     */
    public set random_pressure(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_pressure`, value)
    }

    /**
     * Randomness factor strength in new strokes
     * @desc float in [0, 1], default 0.0
     */
    public set random_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_strength`, value)
    }

    /**
     * Randomness factor for new strokes after subdivision
     * @desc float in [0, 1], default 0.0
     */
    public set random_subdiv(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_subdiv`, value)
    }

    /**
     * Show transparent lines to use as boundary for filling
     * @desc boolean, default True
     */
    public set show_fill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_fill`, value)
    }

    /**
     * Show help lines for filling to see boundaries
     * @desc boolean, default True
     */
    public set show_fill_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_fill_boundary`, value)
    }

    /**
     * Do not draw fill color while drawing the stroke
     * @desc boolean, default False
     */
    public set show_lasso(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_lasso`, value)
    }

    /**
     * Factor of Simplify using adaptive algorithm
     * @desc float in [0, 100], default 0.0
     */
    public set simplify_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.simplify_factor`, value)
    }

    /**
     * Trim intersecting stroke ends
     * @desc boolean, default False
     */
    public set trim(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.trim`, value)
    }

    /**
     * Enable cursor on screen
     * @desc boolean, default True
     */
    public set use_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor`, value)
    }

    /**
     * Use this brush when enable eraser with fast switch key
     * @desc boolean, default True
     */
    public set use_default_eraser(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_eraser`, value)
    }

    /**
     * Use tablet pressure for jitter
     * @desc boolean, default False
     */
    public set use_jitter_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_jitter_pressure`, value)
    }

    /**
     * Keep material assigned to brush
     * @desc boolean, default False
     */
    public set use_material_pin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_material_pin`, value)
    }

    /**
     * Erase only strokes visible and not occluded
     * @desc boolean, default False
     */
    public set use_occlude_eraser(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_occlude_eraser`, value)
    }

    /**
     * Use tablet pressure
     * @desc boolean, default False
     */
    public set use_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure`, value)
    }

    /**
     * Additional post processing options for new strokes
     * @desc boolean, default False
     */
    public set use_settings_postprocess(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_settings_postprocess`, value)
    }

    /**
     * Random brush settings
     * @desc boolean, default False
     */
    public set use_settings_random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_settings_random`, value)
    }

    /**
     * Draw lines with a delay to allow smooth strokes. Press Shift key to override while drawing
     * @desc boolean, default True
     */
    public set use_settings_stabilizer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_settings_stabilizer`, value)
    }

    /**
     * Use tablet pressure for color strength
     * @desc boolean, default False
     */
    public set use_strength_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_strength_pressure`, value)
    }

    /**
     * Random factor for autogenerated UV rotation
     * @desc float in [0, 1], default 0.0
     */
    public set uv_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.uv_random`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
