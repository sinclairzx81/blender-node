import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MaskSplinePoints
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSplinePoints.html
 */
export class MaskSplinePoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a number of point to this spline
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    /**
     * Remove a point from a spline
     * @desc void
     */
    public remove(options: { point?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
