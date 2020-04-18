import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MaskSpline } from './MaskSpline'
import { MaskSplinePoint } from './MaskSplinePoint'

/**
 * MaskSplines
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSplines.html
 */
export class MaskSplines {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active spline of masking layer
     * @desc MaskSpline
     */
    public get active(): MaskSpline {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MaskSpline)
    }

    /**
     * Active spline of masking layer
     * @desc MaskSplinePoint
     */
    public get active_point(): MaskSplinePoint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_point`, MaskSplinePoint)
    }

    /**
     * Active spline of masking layer
     * @desc MaskSpline
     */
    public set active(value: MaskSpline) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active spline of masking layer
     * @desc MaskSplinePoint
     */
    public set active_point(value: MaskSplinePoint) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_point`, value)
    }

    /**
     * Add a new spline to the layer
     * @desc MaskSpline
     */
    public new(): MaskSpline {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, MaskSpline)
    }

    /**
     * Remove a spline from a layer
     * @desc void
     */
    public remove(options: { spline?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
