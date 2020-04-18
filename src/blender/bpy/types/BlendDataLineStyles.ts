import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FreestyleLineStyle } from './FreestyleLineStyle'

/**
 * BlendDataLineStyles
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataLineStyles.html
 */
export class BlendDataLineStyles {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Add a new line style instance to the main database
     * @desc FreestyleLineStyle
     */
    public new(options: { name?: string }): FreestyleLineStyle {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FreestyleLineStyle)
    }

    /**
     * Remove a line style instance from the current blendfile
     * @desc void
     */
    public remove(options: { linestyle?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
