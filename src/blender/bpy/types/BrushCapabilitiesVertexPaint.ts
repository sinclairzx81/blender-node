import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushCapabilitiesVertexPaint
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushCapabilitiesVertexPaint.html
 */
export class BrushCapabilitiesVertexPaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_color`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
