import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PaletteOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.palette.html
 */
export class PaletteOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add new color to active palette
     * @desc void
     */
    public color_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_add`, {})
    }

    /**
     * Remove active color from palette
     * @desc void
     */
    public color_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_delete`, {})
    }

    /**
     * Add new palette
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
