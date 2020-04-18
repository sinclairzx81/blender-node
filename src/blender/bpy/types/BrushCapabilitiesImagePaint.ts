import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushCapabilitiesImagePaint
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushCapabilitiesImagePaint.html
 */
export class BrushCapabilitiesImagePaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_accumulate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_accumulate`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_color`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_radius`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_space_attenuation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_space_attenuation`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
