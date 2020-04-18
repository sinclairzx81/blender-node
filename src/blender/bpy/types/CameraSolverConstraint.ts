import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { MovieClip } from './MovieClip'

/**
 * CameraSolverConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.CameraSolverConstraint.html
 */
export class CameraSolverConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Movie Clip to get tracking data from
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Use active clip defined in scene
     * @desc boolean, default False
     */
    public get use_active_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_active_clip`)
    }

    /**
     * Movie Clip to get tracking data from
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Use active clip defined in scene
     * @desc boolean, default False
     */
    public set use_active_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_active_clip`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
