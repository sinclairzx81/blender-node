import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveProfilePoint } from './CurveProfilePoint'

/**
 * CurveProfilePoints
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveProfilePoints.html
 */
export class CurveProfilePoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add point to the profile
     * @desc CurveProfilePoint
     */
    public add(options: { x?: number, y?: number }): CurveProfilePoint {
        return PythonInterop.callClass(this.interop, `${this.accessor}.add`, options, CurveProfilePoint)
    }

    /**
     * Delete point from the profile
     * @desc void
     */
    public remove(options: { point?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
