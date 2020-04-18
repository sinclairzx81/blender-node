import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { UIList } from './UIList'

/**
 * PHYSICS_UL_dynapaint_surfaces
 * 
 * https://docs.blender.org/api/current/bpy.types.PHYSICS_UL_dynapaint_surfaces.html
 */
export class PHYSICS_UL_dynapaint_surfaces {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc void
     */
    public draw_item(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_item`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
