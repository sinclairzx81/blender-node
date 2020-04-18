import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CurvePaintSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CurvePaintSettings.html
 */
export class CurvePaintSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angles above this are considered corners
     * @desc float in [0, 3.14159], default 1.22173
     */
    public get corner_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.corner_angle`)
    }

    /**
     * Type of curve to use for new strokes
     * @desc enum in ['POLY', 'BEZIER'], default 'BEZIER'
     */
    public get curve_type(): 'POLY' | 'BEZIER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.curve_type`)
    }

    /**
     * Method of projecting depth
     * @desc enum in ['CURSOR', 'SURFACE'], default 'CURSOR'
     */
    public get depth_mode(): 'CURSOR' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.depth_mode`)
    }

    /**
     * Allow deviation for a smoother, less precise line
     * @desc int in [1, 100], default 8
     */
    public get error_threshold(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.error_threshold`)
    }

    /**
     * Curve fitting method
     * @desc enum in ['REFIT', 'SPLIT'], default 'REFIT'
     */
    public get fit_method(): 'REFIT' | 'SPLIT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fit_method`)
    }

    /**
     * Radius to use when the maximum pressure is applied (or when a tablet isn’t used)
     * @desc float in [0, 100], default 1.0
     */
    public get radius_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius_max`)
    }

    /**
     * Minimum radius when the minimum pressure is applied (also the minimum when tapering)
     * @desc float in [0, 100], default 0.0
     */
    public get radius_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius_min`)
    }

    /**
     * Taper factor for the radius of each point along the curve
     * @desc float in [0, 10], default 0.0
     */
    public get radius_taper_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius_taper_end`)
    }

    /**
     * Taper factor for the radius of each point along the curve
     * @desc float in [0, 1], default 0.0
     */
    public get radius_taper_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius_taper_start`)
    }

    /**
     * Offset the stroke from the surface
     * @desc float in [-10, 10], default 0.0
     */
    public get surface_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.surface_offset`)
    }

    /**
     * Plane for projected stroke
     * @desc enum in ['NORMAL_VIEW', 'NORMAL_SURFACE', 'VIEW'], default 'NORMAL_VIEW'
     */
    public get surface_plane(): 'NORMAL_VIEW' | 'NORMAL_SURFACE' | 'VIEW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.surface_plane`)
    }

    /**
     * Detect corners and use non-aligned handles
     * @desc boolean, default True
     */
    public get use_corners_detect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_corners_detect`)
    }

    /**
     * Apply a fixed offset (don’t scale by the radius)
     * @desc boolean, default False
     */
    public get use_offset_absolute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_offset_absolute`)
    }

    /**
     * Map tablet pressure to curve radius
     * @desc boolean, default False
     */
    public get use_pressure_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_radius`)
    }

    /**
     * Use the start of the stroke for the depth
     * @desc boolean, default False
     */
    public get use_stroke_endpoints(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stroke_endpoints`)
    }

    /**
     * Angles above this are considered corners
     * @desc float in [0, 3.14159], default 1.22173
     */
    public set corner_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.corner_angle`, value)
    }

    /**
     * Type of curve to use for new strokes
     * @desc enum in ['POLY', 'BEZIER'], default 'BEZIER'
     */
    public set curve_type(value: 'POLY' | 'BEZIER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.curve_type`, value)
    }

    /**
     * Method of projecting depth
     * @desc enum in ['CURSOR', 'SURFACE'], default 'CURSOR'
     */
    public set depth_mode(value: 'CURSOR' | 'SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.depth_mode`, value)
    }

    /**
     * Allow deviation for a smoother, less precise line
     * @desc int in [1, 100], default 8
     */
    public set error_threshold(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.error_threshold`, value)
    }

    /**
     * Curve fitting method
     * @desc enum in ['REFIT', 'SPLIT'], default 'REFIT'
     */
    public set fit_method(value: 'REFIT' | 'SPLIT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fit_method`, value)
    }

    /**
     * Radius to use when the maximum pressure is applied (or when a tablet isn’t used)
     * @desc float in [0, 100], default 1.0
     */
    public set radius_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius_max`, value)
    }

    /**
     * Minimum radius when the minimum pressure is applied (also the minimum when tapering)
     * @desc float in [0, 100], default 0.0
     */
    public set radius_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius_min`, value)
    }

    /**
     * Taper factor for the radius of each point along the curve
     * @desc float in [0, 10], default 0.0
     */
    public set radius_taper_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius_taper_end`, value)
    }

    /**
     * Taper factor for the radius of each point along the curve
     * @desc float in [0, 1], default 0.0
     */
    public set radius_taper_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius_taper_start`, value)
    }

    /**
     * Offset the stroke from the surface
     * @desc float in [-10, 10], default 0.0
     */
    public set surface_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.surface_offset`, value)
    }

    /**
     * Plane for projected stroke
     * @desc enum in ['NORMAL_VIEW', 'NORMAL_SURFACE', 'VIEW'], default 'NORMAL_VIEW'
     */
    public set surface_plane(value: 'NORMAL_VIEW' | 'NORMAL_SURFACE' | 'VIEW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.surface_plane`, value)
    }

    /**
     * Detect corners and use non-aligned handles
     * @desc boolean, default True
     */
    public set use_corners_detect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_corners_detect`, value)
    }

    /**
     * Apply a fixed offset (don’t scale by the radius)
     * @desc boolean, default False
     */
    public set use_offset_absolute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_offset_absolute`, value)
    }

    /**
     * Map tablet pressure to curve radius
     * @desc boolean, default False
     */
    public set use_pressure_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_radius`, value)
    }

    /**
     * Use the start of the stroke for the depth
     * @desc boolean, default False
     */
    public set use_stroke_endpoints(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stroke_endpoints`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
