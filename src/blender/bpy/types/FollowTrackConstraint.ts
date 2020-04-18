import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'
import { MovieClip } from './MovieClip'

/**
 * FollowTrackConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.FollowTrackConstraint.html
 */
export class FollowTrackConstraint {

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
     * Object used to define depth in camera space by projecting onto surface of this object
     * @desc Object
     */
    public get depth_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.depth_object`, BlenderObject)
    }

    /**
     * How the footage fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public get frame_method(): 'STRETCH' | 'FIT' | 'CROP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.frame_method`)
    }

    /**
     * Movie tracking object to follow (if empty, camera object is used)
     * @desc string, default '', (never None)
     */
    public get object(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.object`)
    }

    /**
     * Movie tracking track to follow
     * @desc string, default '', (never None)
     */
    public get track(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.track`)
    }

    /**
     * Use 3D position of track to parent to
     * @desc boolean, default False
     */
    public get use_3d_position(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_3d_position`)
    }

    /**
     * Use active clip defined in scene
     * @desc boolean, default False
     */
    public get use_active_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_active_clip`)
    }

    /**
     * Parent to undistorted position of 2D track
     * @desc boolean, default False
     */
    public get use_undistorted_position(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_undistorted_position`)
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
     * Object used to define depth in camera space by projecting onto surface of this object
     * @desc Object
     */
    public set depth_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.depth_object`, value)
    }

    /**
     * How the footage fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public set frame_method(value: 'STRETCH' | 'FIT' | 'CROP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.frame_method`, value)
    }

    /**
     * Movie tracking object to follow (if empty, camera object is used)
     * @desc string, default '', (never None)
     */
    public set object(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Movie tracking track to follow
     * @desc string, default '', (never None)
     */
    public set track(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.track`, value)
    }

    /**
     * Use 3D position of track to parent to
     * @desc boolean, default False
     */
    public set use_3d_position(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_3d_position`, value)
    }

    /**
     * Use active clip defined in scene
     * @desc boolean, default False
     */
    public set use_active_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_active_clip`, value)
    }

    /**
     * Parent to undistorted position of 2D track
     * @desc boolean, default False
     */
    public set use_undistorted_position(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_undistorted_position`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
