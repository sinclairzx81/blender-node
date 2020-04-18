import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { AnimViz } from './AnimViz'
import { BoneGroups } from './BoneGroups'
import { BoneGroup } from './BoneGroup'
import { PoseBone } from './PoseBone'
import { IKParam } from './IKParam'

/**
 * Pose
 * 
 * https://docs.blender.org/api/current/bpy.types.Pose.html
 */
export class Pose {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimViz, (readonly, never None)
     */
    public get animation_visualization(): AnimViz {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_visualization`, AnimViz)
    }

    /**
     * Groups of the bones
     * @desc BoneGroups bpy_prop_collection of BoneGroup, (readonly)
     */
    public get bone_groups(): BlenderCollection<BoneGroup> & Indexable<BoneGroup> & BoneGroups {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.bone_groups`, BoneGroups, BoneGroup)
    }

    /**
     * Individual pose bones for the armature
     * @desc bpy_prop_collection of PoseBone, (readonly)
     */
    public get bones(): BlenderCollection<PoseBone> & Indexable<PoseBone> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.bones`, PoseBone)
    }

    /**
     * Parameters for IK solver
     * @desc IKParam, (readonly)
     */
    public get ik_param(): IKParam {
        return PythonInterop.getClass(this.interop, `${this.accessor}.ik_param`, IKParam)
    }

    /**
     * Selection of IK solver for IK chain
     * @desc enum in ['LEGACY', 'ITASC'], default 'LEGACY'
     */
    public get ik_solver(): 'LEGACY' | 'ITASC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ik_solver`)
    }

    /**
     * Add temporary IK constraints while grabbing bones in Pose Mode
     * @desc boolean, default False
     */
    public get use_auto_ik(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_ik`)
    }

    /**
     * Apply relative transformations in X-mirror mode (not supported with Auto IK)
     * @desc boolean, default False
     */
    public get use_mirror_relative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_relative`)
    }

    /**
     * Apply changes to matching bone on opposite side of X-Axis
     * @desc boolean, default False
     */
    public get use_mirror_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_x`)
    }

    /**
     * Selection of IK solver for IK chain
     * @desc enum in ['LEGACY', 'ITASC'], default 'LEGACY'
     */
    public set ik_solver(value: 'LEGACY' | 'ITASC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ik_solver`, value)
    }

    /**
     * Add temporary IK constraints while grabbing bones in Pose Mode
     * @desc boolean, default False
     */
    public set use_auto_ik(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_ik`, value)
    }

    /**
     * Apply relative transformations in X-mirror mode (not supported with Auto IK)
     * @desc boolean, default False
     */
    public set use_mirror_relative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_relative`, value)
    }

    /**
     * Apply changes to matching bone on opposite side of X-Axis
     * @desc boolean, default False
     */
    public set use_mirror_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_x`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
