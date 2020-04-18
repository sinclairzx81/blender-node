import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Import_animOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.import_anim.html
 */
export class Import_animOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a BVH motion capture file
     * @desc void
     */
    public bvh(options: { filepath?: string, filter_glob?: string, target?: 'ARMATURE' | 'OBJECT', global_scale?: number, frame_start?: number, use_fps_scale?: boolean, update_scene_fps?: boolean, update_scene_duration?: boolean, use_cyclic?: boolean, rotate_mode?: 'QUATERNION' | 'NATIVE' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX', axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bvh`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
