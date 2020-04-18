import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'

/**
 * NodeInternal
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeInternal.html
 */
export class NodeInternal {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * If non-null output is returned, the node can be added to the tree
     * @desc boolean
     */
    public poll_instance(options: { node_tree?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.poll_instance`, options)
    }

    /**
     * Update on editor changes
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Draw node buttons
     * @desc void
     */
    public draw_buttons(options: { layout?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_buttons`, options)
    }

    /**
     * Draw node buttons in the sidebar
     * @desc void
     */
    public draw_buttons_ext(options: { layout?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_buttons_ext`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
