import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Mesh } from './Mesh'

/**
 * BlendDataMeshes
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataMeshes.html
 */
export class BlendDataMeshes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new mesh to the main database
     * @desc Mesh
     */
    public new(options: { name?: string }): Mesh {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Mesh)
    }

    /**
     * Add a new mesh created from given object (undeformed geometry if object is original, and final evaluated geometry, with all modifiers etc., if object is evaluated)
     * @desc Mesh
     */
    public new_from_object(options: { object?: unknown, preserve_all_data_layers?: boolean, depsgraph?: unknown }): Mesh {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_from_object`, options, Mesh)
    }

    /**
     * Remove a mesh from the current blendfile
     * @desc void
     */
    public remove(options: { mesh?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
