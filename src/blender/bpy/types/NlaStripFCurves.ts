import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FCurve } from './FCurve'

/**
 * NlaStripFCurves
 * 
 * https://docs.blender.org/api/current/bpy.types.NlaStripFCurves.html
 */
export class NlaStripFCurves {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Find an F-Curve. Note that this function performs a linear scan of all F-Curves in the NLA strip.
     * @desc FCurve
     */
    public find(options: { data_path?: string, index?: number }): FCurve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find`, options, FCurve)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
