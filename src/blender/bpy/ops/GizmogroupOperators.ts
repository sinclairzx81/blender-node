import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GizmogroupOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.gizmogroup.html
 */
export class GizmogroupOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Select the currently highlighted gizmo
     * @desc void
     */
    public gizmo_select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, deselect_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gizmo_select`, options)
    }

    /**
     * Tweak the active gizmo
     * @desc void
     */
    public gizmo_tweak(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gizmo_tweak`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
