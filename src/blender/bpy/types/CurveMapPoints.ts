import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapPoint } from './CurveMapPoint'

/**
 * CurveMapPoints
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveMapPoints.html
 */
export class CurveMapPoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add point to CurveMap
     * @desc CurveMapPoint
     */
    public new(options: { position?: number, value?: number }): CurveMapPoint {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, CurveMapPoint)
    }

    /**
     * Delete point from CurveMap
     * @desc void
     */
    public remove(options: { point?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
