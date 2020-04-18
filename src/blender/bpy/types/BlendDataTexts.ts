import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Text } from './Text'

/**
 * BlendDataTexts
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataTexts.html
 */
export class BlendDataTexts {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new text to the main database
     * @desc Text
     */
    public new(options: { name?: string }): Text {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Text)
    }

    /**
     * Remove a text from the current blendfile
     * @desc void
     */
    public remove(options: { text?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Add a new text to the main database from a file
     * @desc Text
     */
    public load(options: { filepath?: string, internal?: boolean }): Text {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, Text)
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
