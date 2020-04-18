import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { PAINTCURVE_OT_add_point } from './PAINTCURVE_OT_add_point'
import { PAINTCURVE_OT_slide } from './PAINTCURVE_OT_slide'

/**
 * PaintcurveOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.paintcurve.html
 */
export class PaintcurveOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add New Paint Curve Point
     * @desc void
     */
    public add_point(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_point`, options)
    }

    /**
     * Add new curve point and slide it
     * @desc void
     */
    public add_point_slide(options: { PAINTCURVE_OT_add_point?: PAINTCURVE_OT_add_point, PAINTCURVE_OT_slide?: PAINTCURVE_OT_slide }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_point_slide`, options)
    }

    /**
     * Place cursor
     * @desc void
     */
    public cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor`, {})
    }

    /**
     * Remove Paint Curve Point
     * @desc void
     */
    public delete_point(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_point`, {})
    }

    /**
     * Draw curve
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    /**
     * Add new paint curve
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Select a paint curve point
     * @desc void
     */
    public select(options: { location?: [number, number], toggle?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Select and slide paint curve point
     * @desc void
     */
    public slide(options: { align?: boolean, select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slide`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
