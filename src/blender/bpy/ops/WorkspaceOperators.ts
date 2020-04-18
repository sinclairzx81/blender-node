import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WorkspaceOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.workspace.html
 */
export class WorkspaceOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new workspace by duplicating the current one or appending one from the user configuration
     * @desc void
     */
    public add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, {})
    }

    /**
     * Append a workspace and make it the active one in the current window
     * @desc void
     */
    public append_activate(options: { idname?: string, filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.append_activate`, options)
    }

    /**
     * Delete the active workspace
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Add a new workspace
     * @desc void
     */
    public duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, {})
    }

    /**
     * Reorder workspace to be first in the list
     * @desc void
     */
    public reorder_to_back(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reorder_to_back`, {})
    }

    /**
     * Reorder workspace to be first in the list
     * @desc void
     */
    public reorder_to_front(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reorder_to_front`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
