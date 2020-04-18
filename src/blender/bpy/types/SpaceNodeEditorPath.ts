import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SpaceNodeEditorPath
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceNodeEditorPath.html
 */
export class SpaceNodeEditorPath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get to_string(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.to_string`)
    }

    /**
     * Reset the node tree path
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    /**
     * Set the root node tree
     * @desc void
     */
    public start(options: { node_tree?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.start`, options)
    }

    /**
     * Append a node group tree to the path
     * @desc void
     */
    public append(options: { node_tree?: unknown, node?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.append`, options)
    }

    /**
     * Remove the last node tree from the path
     * @desc void
     */
    public pop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pop`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
