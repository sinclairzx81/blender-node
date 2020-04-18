import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MaskSplinePoints } from './MaskSplinePoints'
import { MaskSplinePoint } from './MaskSplinePoint'

/**
 * MaskSpline
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSpline.html
 */
export class MaskSpline {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Collection of points
     * @desc MaskSplinePoints bpy_prop_collection of MaskSplinePoint, (readonly)
     */
    public get points(): BlenderCollection<MaskSplinePoint> & Indexable<MaskSplinePoint> & MaskSplinePoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.points`, MaskSplinePoints, MaskSplinePoint)
    }

    /**
     * The method used for calculating the feather offset
     * @desc enum in ['EVEN', 'SMOOTH'], default 'EVEN'
     */
    public get offset_mode(): 'EVEN' | 'SMOOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.offset_mode`)
    }

    /**
     * Make this spline a closed loop
     * @desc boolean, default False
     */
    public get use_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic`)
    }

    /**
     * Make this spline filled
     * @desc boolean, default False
     */
    public get use_fill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill`)
    }

    /**
     * Prevent feather from self-intersections
     * @desc boolean, default False
     */
    public get use_self_intersection_check(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self_intersection_check`)
    }

    /**
     * The type of weight interpolation for spline
     * @desc enum in ['LINEAR', 'EASE'], default 'LINEAR'
     */
    public get weight_interpolation(): 'LINEAR' | 'EASE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.weight_interpolation`)
    }

    /**
     * The method used for calculating the feather offset
     * @desc enum in ['EVEN', 'SMOOTH'], default 'EVEN'
     */
    public set offset_mode(value: 'EVEN' | 'SMOOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.offset_mode`, value)
    }

    /**
     * Make this spline a closed loop
     * @desc boolean, default False
     */
    public set use_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic`, value)
    }

    /**
     * Make this spline filled
     * @desc boolean, default False
     */
    public set use_fill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill`, value)
    }

    /**
     * Prevent feather from self-intersections
     * @desc boolean, default False
     */
    public set use_self_intersection_check(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_self_intersection_check`, value)
    }

    /**
     * The type of weight interpolation for spline
     * @desc enum in ['LINEAR', 'EASE'], default 'LINEAR'
     */
    public set weight_interpolation(value: 'LINEAR' | 'EASE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.weight_interpolation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
