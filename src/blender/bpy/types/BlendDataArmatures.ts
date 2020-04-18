import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Armature } from './Armature'

/**
 * BlendDataArmatures
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataArmatures.html
 */
export class BlendDataArmatures {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new armature to the main database
     * @desc Armature
     */
    public new(options: { name?: string }): Armature {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Armature)
    }

    /**
     * Remove a armature from the current blendfile
     * @desc void
     */
    public remove(options: { armature?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
