import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TexPaintSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.TexPaintSlot.html
 */
export class TexPaintSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Slot has a valid image and UV map
     * @desc boolean, default False, (readonly)
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * Name of UV map
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Name of UV map
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
