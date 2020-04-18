import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FCurve } from './FCurve'

/**
 * ActionFCurves
 * 
 * https://docs.blender.org/api/current/bpy.types.ActionFCurves.html
 */
export class ActionFCurves {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add an F-Curve to the action
     * @desc FCurve
     */
    public new(options: { data_path?: string, index?: number, action_group?: string }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FCurve)
    }

    /**
     * Find an F-Curve. Note that this function performs a linear scan of all F-Curves in the action.
     * @desc FCurve
     */
    public find(options: { data_path?: string, index?: number }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find`, options, FCurve)
    }

    /**
     * Remove action group
     * @desc void
     */
    public remove(options: { fcurve?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
