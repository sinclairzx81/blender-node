import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Palette } from './Palette'

/**
 * BlendDataPalettes
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataPalettes.html
 */
export class BlendDataPalettes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new palette to the main database
     * @desc Palette
     */
    public new(options: { name?: string }): Palette {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Palette)
    }

    /**
     * Remove a palette from the current blendfile
     * @desc void
     */
    public remove(options: { palette?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
