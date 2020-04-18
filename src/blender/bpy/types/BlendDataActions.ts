import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Action } from './Action'

/**
 * BlendDataActions
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataActions.html
 */
export class BlendDataActions {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new action to the main database
     * @desc Action
     */
    public new(options: { name?: string }): Action {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Action)
    }

    /**
     * Remove a action from the current blendfile
     * @desc void
     */
    public remove(options: { action?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
