import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * VertexGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexGroup.html
 */
export class VertexGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Index number of the vertex group
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Maintain the relative weights for the group
     * @desc boolean, default False
     */
    public get lock_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_weight`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Maintain the relative weights for the group
     * @desc boolean, default False
     */
    public set lock_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_weight`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Add vertices to the group
     * @desc void
     */
    public add(options: { index?: [number], weight?: number, type?: 'REPLACE' | 'ADD' | 'SUBTRACT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    /**
     * Remove a vertex from the group
     * @desc void
     */
    public remove(options: { index?: [number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Get a vertex weight from the group
     * @desc float in [0, 1]
     */
    public weight(options: { index?: number }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.weight`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
