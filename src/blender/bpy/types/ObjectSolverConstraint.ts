import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'
import { MovieClip } from './MovieClip'

/**
 * ObjectSolverConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectSolverConstraint.html
 */
export class ObjectSolverConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Camera to which motion is parented (if empty active scene camera is used)
     * @desc Object
     */
    public get camera(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera`, BlenderObject)
    }

    /**
     * Movie Clip to get tracking data from
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Movie tracking object to follow
     * @desc string, default '', (never None)
     */
    public get object(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.object`)
    }

    /**
     * Use active clip defined in scene
     * @desc boolean, default False
     */
    public get use_active_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_active_clip`)
    }

    /**
     * Camera to which motion is parented (if empty active scene camera is used)
     * @desc Object
     */
    public set camera(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * Movie Clip to get tracking data from
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Movie tracking object to follow
     * @desc string, default '', (never None)
     */
    public set object(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.object`, value)
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
