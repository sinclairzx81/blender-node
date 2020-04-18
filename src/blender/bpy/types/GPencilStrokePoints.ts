import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GPencilStrokePoints
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilStrokePoints.html
 */
export class GPencilStrokePoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new grease pencil stroke point
     * @desc void
     */
    public add(options: { count?: number, pressure?: number, strength?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    /**
     * Remove a grease pencil stroke point
     * @desc void
     */
    public pop(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pop`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
