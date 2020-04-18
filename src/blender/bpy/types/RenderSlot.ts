import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RenderSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderSlot.html
 */
export class RenderSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Render slot name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Render slot name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Clear the render slot
     * @desc void
     */
    public clear(options: { iuser?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
