import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GreasePencil } from './GreasePencil'

/**
 * BlendDataGreasePencils
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataGreasePencils.html
 */
export class BlendDataGreasePencils {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Add a new grease pencil datablock to the main database
     * @desc GreasePencil
     */
    public new(options: { name?: string }): GreasePencil {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, GreasePencil)
    }

    /**
     * Remove a grease pencil instance from the current blendfile
     * @desc void
     */
    public remove(options: { grease_pencil?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
