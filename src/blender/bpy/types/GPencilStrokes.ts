import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilStroke } from './GPencilStroke'

/**
 * GPencilStrokes
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilStrokes.html
 */
export class GPencilStrokes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new grease pencil stroke
     * @desc GPencilStroke
     */
    public new(): GPencilStroke {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, GPencilStroke)
    }

    /**
     * Remove a grease pencil stroke
     * @desc void
     */
    public remove(options: { stroke?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Close a grease pencil stroke adding geometry
     * @desc void
     */
    public close(options: { stroke?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.close`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
