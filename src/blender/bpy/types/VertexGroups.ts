import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { VertexGroup } from './VertexGroup'

/**
 * VertexGroups
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexGroups.html
 */
export class VertexGroups {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Vertex groups of the object
     * @desc VertexGroup, (readonly)
     */
    public get active(): VertexGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, VertexGroup)
    }

    /**
     * Active index in vertex group array
     * @desc int in [0, 32767], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active index in vertex group array
     * @desc int in [0, 32767], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add vertex group to object
     * @desc VertexGroup
     */
    public new(options: { name?: string }): VertexGroup {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, VertexGroup)
    }

    /**
     * Delete vertex group from object
     * @desc void
     */
    public remove(options: { group?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Delete all vertex groups from object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
