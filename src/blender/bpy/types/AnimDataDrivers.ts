import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FCurve } from './FCurve'

/**
 * AnimDataDrivers
 * 
 * https://docs.blender.org/api/current/bpy.types.AnimDataDrivers.html
 */
export class AnimDataDrivers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * new
     * @desc FCurve
     */
    public new(options: { data_path?: string, index?: number }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FCurve)
    }

    /**
     * remove
     * @desc void
     */
    public remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, {})
    }

    /**
     * Add a new driver given an existing one
     * @desc FCurve
     */
    public from_existing(options: { src_driver?: unknown }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.from_existing`, options, FCurve)
    }

    /**
     * Find a driver F-Curve. Note that this function performs a linear scan of all driver F-Curves.
     * @desc FCurve
     */
    public find(options: { data_path?: string, index?: number }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find`, options, FCurve)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
