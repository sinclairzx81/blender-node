import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushCapabilitiesWeightPaint
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushCapabilitiesWeightPaint.html
 */
export class BrushCapabilitiesWeightPaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_weight`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
