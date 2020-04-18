import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Gizmo } from './Gizmo'

/**
 * Gizmos
 * 
 * https://docs.blender.org/api/current/bpy.types.Gizmos.html
 */
export class Gizmos {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add gizmo
     * @desc Gizmo
     */
    public new(options: { type?: string }): Gizmo {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Gizmo)
    }

    /**
     * Delete gizmo
     * @desc void
     */
    public remove(options: { gizmo?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Delete all gizmos
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
