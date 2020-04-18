import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SplineBezierPoints } from './SplineBezierPoints'
import { BezierSplinePoint } from './BezierSplinePoint'
import { SplinePoints } from './SplinePoints'
import { SplinePoint } from './SplinePoint'

/**
 * Spline
 * 
 * https://docs.blender.org/api/current/bpy.types.Spline.html
 */
export class Spline {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Collection of points for Bezier curves only
     * @desc SplineBezierPoints bpy_prop_collection of BezierSplinePoint, (readonly)
     */
    public get bezier_points(): BlenderCollection<BezierSplinePoint> & Indexable<BezierSplinePoint> & SplineBezierPoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.bezier_points`, SplineBezierPoints, BezierSplinePoint)
    }

    /**
     * Location of this character in the text data (only for text curves)
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get character_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.character_index`)
    }

    /**
     * Total number points for the curve or surface in the U direction
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get point_count_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.point_count_u`)
    }

    /**
     * Total number points for the surface on the V direction
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get point_count_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.point_count_v`)
    }

    /**
     * Collection of points that make up this poly or nurbs spline
     * @desc SplinePoints bpy_prop_collection of SplinePoint, (readonly)
     */
    public get points(): BlenderCollection<SplinePoint> & Indexable<SplinePoint> & SplinePoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.points`, SplinePoints, SplinePoint)
    }

    /**
     * Hide this curve in Edit mode
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public get material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_index`)
    }

    /**
     * NURBS order in the U direction (for splines and surfaces, higher values let points influence a greater area)
     * @desc int in [2, 6], default 0
     */
    public get order_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.order_u`)
    }

    /**
     * NURBS order in the V direction (for surfaces only, higher values let points influence a greater area)
     * @desc int in [2, 6], default 0
     */
    public get order_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.order_v`)
    }

    /**
     * The type of radius interpolation for Bezier curves
     * @desc enum in ['LINEAR', 'CARDINAL', 'BSPLINE', 'EASE'], default 'LINEAR'
     */
    public get radius_interpolation(): 'LINEAR' | 'CARDINAL' | 'BSPLINE' | 'EASE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.radius_interpolation`)
    }

    /**
     * Curve or Surface subdivisions per segment
     * @desc int in [1, 1024], default 0
     */
    public get resolution_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_u`)
    }

    /**
     * Surface subdivisions per segment
     * @desc int in [1, 1024], default 0
     */
    public get resolution_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_v`)
    }

    /**
     * The type of tilt interpolation for 3D, Bezier curves
     * @desc enum in ['LINEAR', 'CARDINAL', 'BSPLINE', 'EASE'], default 'LINEAR'
     */
    public get tilt_interpolation(): 'LINEAR' | 'CARDINAL' | 'BSPLINE' | 'EASE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tilt_interpolation`)
    }

    /**
     * The interpolation type for this curve element
     * @desc enum in ['POLY', 'BEZIER', 'BSPLINE', 'CARDINAL', 'NURBS'], default 'POLY'
     */
    public get type(): 'POLY' | 'BEZIER' | 'BSPLINE' | 'CARDINAL' | 'NURBS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Make this nurbs curve or surface act like a Bezier spline in the U direction (Order U must be 3 or 4, Cyclic U must be disabled)
     * @desc boolean, default False
     */
    public get use_bezier_u(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bezier_u`)
    }

    /**
     * Make this nurbs surface act like a Bezier spline in the V direction (Order V must be 3 or 4, Cyclic V must be disabled)
     * @desc boolean, default False
     */
    public get use_bezier_v(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bezier_v`)
    }

    /**
     * Make this curve or surface a closed loop in the U direction
     * @desc boolean, default False
     */
    public get use_cyclic_u(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic_u`)
    }

    /**
     * Make this surface a closed loop in the V direction
     * @desc boolean, default False
     */
    public get use_cyclic_v(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic_v`)
    }

    /**
     * Make this nurbs curve or surface meet the endpoints in the U direction (Cyclic U must be disabled)
     * @desc boolean, default False
     */
    public get use_endpoint_u(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_endpoint_u`)
    }

    /**
     * Make this nurbs surface meet the endpoints in the V direction (Cyclic V must be disabled)
     * @desc boolean, default False
     */
    public get use_endpoint_v(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_endpoint_v`)
    }

    /**
     * Smooth the normals of the surface or beveled curve
     * @desc boolean, default False
     */
    public get use_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth`)
    }

    /**
     * Hide this curve in Edit mode
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public set material_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_index`, value)
    }

    /**
     * NURBS order in the U direction (for splines and surfaces, higher values let points influence a greater area)
     * @desc int in [2, 6], default 0
     */
    public set order_u(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.order_u`, value)
    }

    /**
     * NURBS order in the V direction (for surfaces only, higher values let points influence a greater area)
     * @desc int in [2, 6], default 0
     */
    public set order_v(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.order_v`, value)
    }

    /**
     * The type of radius interpolation for Bezier curves
     * @desc enum in ['LINEAR', 'CARDINAL', 'BSPLINE', 'EASE'], default 'LINEAR'
     */
    public set radius_interpolation(value: 'LINEAR' | 'CARDINAL' | 'BSPLINE' | 'EASE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.radius_interpolation`, value)
    }

    /**
     * Curve or Surface subdivisions per segment
     * @desc int in [1, 1024], default 0
     */
    public set resolution_u(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_u`, value)
    }

    /**
     * Surface subdivisions per segment
     * @desc int in [1, 1024], default 0
     */
    public set resolution_v(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_v`, value)
    }

    /**
     * The type of tilt interpolation for 3D, Bezier curves
     * @desc enum in ['LINEAR', 'CARDINAL', 'BSPLINE', 'EASE'], default 'LINEAR'
     */
    public set tilt_interpolation(value: 'LINEAR' | 'CARDINAL' | 'BSPLINE' | 'EASE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tilt_interpolation`, value)
    }

    /**
     * The interpolation type for this curve element
     * @desc enum in ['POLY', 'BEZIER', 'BSPLINE', 'CARDINAL', 'NURBS'], default 'POLY'
     */
    public set type(value: 'POLY' | 'BEZIER' | 'BSPLINE' | 'CARDINAL' | 'NURBS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Make this nurbs curve or surface act like a Bezier spline in the U direction (Order U must be 3 or 4, Cyclic U must be disabled)
     * @desc boolean, default False
     */
    public set use_bezier_u(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bezier_u`, value)
    }

    /**
     * Make this nurbs surface act like a Bezier spline in the V direction (Order V must be 3 or 4, Cyclic V must be disabled)
     * @desc boolean, default False
     */
    public set use_bezier_v(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bezier_v`, value)
    }

    /**
     * Make this curve or surface a closed loop in the U direction
     * @desc boolean, default False
     */
    public set use_cyclic_u(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic_u`, value)
    }

    /**
     * Make this surface a closed loop in the V direction
     * @desc boolean, default False
     */
    public set use_cyclic_v(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic_v`, value)
    }

    /**
     * Make this nurbs curve or surface meet the endpoints in the U direction (Cyclic U must be disabled)
     * @desc boolean, default False
     */
    public set use_endpoint_u(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_endpoint_u`, value)
    }

    /**
     * Make this nurbs surface meet the endpoints in the V direction (Cyclic V must be disabled)
     * @desc boolean, default False
     */
    public set use_endpoint_v(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_endpoint_v`, value)
    }

    /**
     * Smooth the normals of the surface or beveled curve
     * @desc boolean, default False
     */
    public set use_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth`, value)
    }

    /**
     * Calculate spline length
     * @desc float in [0, inf]
     */
    public calc_length(options: { resolution?: number }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.calc_length`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
