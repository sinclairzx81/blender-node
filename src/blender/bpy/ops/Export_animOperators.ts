import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Export_animOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.export_anim.html
 */
export class Export_animOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Save a BVH motion capture file from an armature
     * @desc void
     */
    public bvh(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, global_scale?: number, frame_start?: number, frame_end?: number, rotate_mode?: 'NATIVE' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX', root_transform_only?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bvh`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
