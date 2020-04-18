import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushCapabilities
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushCapabilities.html
 */
export class BrushCapabilities {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_overlay`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_random_texture_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_random_texture_angle`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_smooth_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_smooth_stroke`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_spacing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_spacing`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
