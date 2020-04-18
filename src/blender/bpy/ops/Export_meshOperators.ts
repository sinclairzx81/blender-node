import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Export_meshOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.export_mesh.html
 */
export class Export_meshOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Export as a Stanford PLY with normals, vertex colors and texture coordinates
     * @desc void
     */
    public ply(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, use_selection?: boolean, use_mesh_modifiers?: boolean, use_normals?: boolean, use_uv_coords?: boolean, use_colors?: boolean, global_scale?: number, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ply`, options)
    }

    /**
     * Save STL triangle mesh data
     * @desc void
     */
    public stl(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, use_selection?: boolean, global_scale?: number, use_scene_unit?: boolean, ascii?: boolean, use_mesh_modifiers?: boolean, batch_mode?: 'OFF' | 'OBJECT', axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stl`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
