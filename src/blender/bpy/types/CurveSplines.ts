import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Spline } from './Spline'

/**
 * CurveSplines
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveSplines.html
 */
export class CurveSplines {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active curve spline
     * @desc Spline
     */
    public get active(): Spline {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, Spline)
    }

    /**
     * Active curve spline
     * @desc Spline
     */
    public set active(value: Spline) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a new spline to the curve
     * @desc Spline
     */
    public new(options: { type?: 'POLY' | 'BEZIER' | 'BSPLINE' | 'CARDINAL' | 'NURBS' }): Spline {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Spline)
    }

    /**
     * Remove a spline from a curve
     * @desc void
     */
    public remove(options: { spline?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all splines from a curve
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
