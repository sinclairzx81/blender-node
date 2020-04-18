import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Import_meshOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.import_mesh.html
 */
export class Import_meshOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a PLY geometry file
     * @desc void
     */
    public ply(options: { filepath?: string, files?: any, directory?: string, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ply`, options)
    }

    /**
     * Load STL triangle mesh data
     * @desc void
     */
    public stl(options: { filepath?: string, filter_glob?: string, files?: any, directory?: string, global_scale?: number, use_scene_unit?: boolean, use_facet_normal?: boolean, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stl`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
