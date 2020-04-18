import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { VectorFont } from './VectorFont'

/**
 * BlendDataFonts
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataFonts.html
 */
export class BlendDataFonts {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a new font into the main database
     * @desc VectorFont
     */
    public load(options: { filepath?: string, check_existing?: boolean }): VectorFont {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, VectorFont)
    }

    /**
     * Remove a font from the current blendfile
     * @desc void
     */
    public remove(options: { vfont?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
