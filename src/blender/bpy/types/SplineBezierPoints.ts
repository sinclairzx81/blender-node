import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SplineBezierPoints
 * 
 * https://docs.blender.org/api/current/bpy.types.SplineBezierPoints.html
 */
export class SplineBezierPoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a number of points to this spline
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
