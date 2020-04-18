import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * ShrinkwrapConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ShrinkwrapConstraint.html
 */
export class ShrinkwrapConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Stop vertices from projecting to a face on the target when facing towards/away
     * @desc enum in ['OFF', 'FRONT', 'BACK'], default 'OFF'
     */
    public get cull_face(): 'OFF' | 'FRONT' | 'BACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.cull_face`)
    }

    /**
     * Distance to Target
     * @desc float in [0, inf], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Axis constrain to
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get project_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.project_axis`)
    }

    /**
     * Space for the projection axis
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public get project_axis_space(): 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.project_axis_space`)
    }

    /**
     * Limit the distance used for projection (zero disables)
     * @desc float in [0, inf], default 0.0
     */
    public get project_limit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.project_limit`)
    }

    /**
     * Select type of shrinkwrap algorithm for target position
     * @desc enum in ['NEAREST_SURFACE', 'PROJECT', 'NEAREST_VERTEX', 'TARGET_PROJECT'], default 'NEAREST_SURFACE'
     */
    public get shrinkwrap_type(): 'NEAREST_SURFACE' | 'PROJECT' | 'NEAREST_VERTEX' | 'TARGET_PROJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shrinkwrap_type`)
    }

    /**
     * Target Mesh object
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Axis that is aligned to the normal
     * @desc enum in ['TRACK_X', 'TRACK_Y', 'TRACK_Z', 'TRACK_NEGATIVE_X', 'TRACK_NEGATIVE_Y', 'TRACK_NEGATIVE_Z'], default 'TRACK_X'
     */
    public get track_axis(): 'TRACK_X' | 'TRACK_Y' | 'TRACK_Z' | 'TRACK_NEGATIVE_X' | 'TRACK_NEGATIVE_Y' | 'TRACK_NEGATIVE_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.track_axis`)
    }

    /**
     * When projecting in the opposite direction invert the face cull mode
     * @desc boolean, default False
     */
    public get use_invert_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_invert_cull`)
    }

    /**
     * Project in both specified and opposite directions
     * @desc boolean, default False
     */
    public get use_project_opposite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_project_opposite`)
    }

    /**
     * Align the specified axis to the surface normal
     * @desc boolean, default False
     */
    public get use_track_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_track_normal`)
    }

    /**
     * Select how to constrain the object to the target surface
     * @desc enum in ['ON_SURFACE', 'INSIDE', 'OUTSIDE', 'OUTSIDE_SURFACE', 'ABOVE_SURFACE'], default 'ON_SURFACE'
     */
    public get wrap_mode(): 'ON_SURFACE' | 'INSIDE' | 'OUTSIDE' | 'OUTSIDE_SURFACE' | 'ABOVE_SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wrap_mode`)
    }

    /**
     * Stop vertices from projecting to a face on the target when facing towards/away
     * @desc enum in ['OFF', 'FRONT', 'BACK'], default 'OFF'
     */
    public set cull_face(value: 'OFF' | 'FRONT' | 'BACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.cull_face`, value)
    }

    /**
     * Distance to Target
     * @desc float in [0, inf], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Axis constrain to
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set project_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.project_axis`, value)
    }

    /**
     * Space for the projection axis
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public set project_axis_space(value: 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.project_axis_space`, value)
    }

    /**
     * Limit the distance used for projection (zero disables)
     * @desc float in [0, inf], default 0.0
     */
    public set project_limit(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.project_limit`, value)
    }

    /**
     * Select type of shrinkwrap algorithm for target position
     * @desc enum in ['NEAREST_SURFACE', 'PROJECT', 'NEAREST_VERTEX', 'TARGET_PROJECT'], default 'NEAREST_SURFACE'
     */
    public set shrinkwrap_type(value: 'NEAREST_SURFACE' | 'PROJECT' | 'NEAREST_VERTEX' | 'TARGET_PROJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shrinkwrap_type`, value)
    }

    /**
     * Target Mesh object
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Axis that is aligned to the normal
     * @desc enum in ['TRACK_X', 'TRACK_Y', 'TRACK_Z', 'TRACK_NEGATIVE_X', 'TRACK_NEGATIVE_Y', 'TRACK_NEGATIVE_Z'], default 'TRACK_X'
     */
    public set track_axis(value: 'TRACK_X' | 'TRACK_Y' | 'TRACK_Z' | 'TRACK_NEGATIVE_X' | 'TRACK_NEGATIVE_Y' | 'TRACK_NEGATIVE_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.track_axis`, value)
    }

    /**
     * When projecting in the opposite direction invert the face cull mode
     * @desc boolean, default False
     */
    public set use_invert_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_invert_cull`, value)
    }

    /**
     * Project in both specified and opposite directions
     * @desc boolean, default False
     */
    public set use_project_opposite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_project_opposite`, value)
    }

    /**
     * Align the specified axis to the surface normal
     * @desc boolean, default False
     */
    public set use_track_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_track_normal`, value)
    }

    /**
     * Select how to constrain the object to the target surface
     * @desc enum in ['ON_SURFACE', 'INSIDE', 'OUTSIDE', 'OUTSIDE_SURFACE', 'ABOVE_SURFACE'], default 'ON_SURFACE'
     */
    public set wrap_mode(value: 'ON_SURFACE' | 'INSIDE' | 'OUTSIDE' | 'OUTSIDE_SURFACE' | 'ABOVE_SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wrap_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
