import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * LimitDistanceConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.LimitDistanceConstraint.html
 */
export class LimitDistanceConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Radius of limiting sphere
     * @desc float in [-inf, inf], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public get head_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_tail`)
    }

    /**
     * Distances in relation to sphere of influence to allow
     * @desc enum in ['LIMITDIST_INSIDE', 'LIMITDIST_OUTSIDE', 'LIMITDIST_ONSURFACE'], default 'LIMITDIST_INSIDE'
     */
    public get limit_mode(): 'LIMITDIST_INSIDE' | 'LIMITDIST_OUTSIDE' | 'LIMITDIST_ONSURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_mode`)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public get subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subtarget`)
    }

    /**
     * Target object
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Follow shape of B-Bone segments when calculating Head/Tail position
     * @desc boolean, default False
     */
    public get use_bbone_shape(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bbone_shape`)
    }

    /**
     * Transforms are affected by this constraint as well
     * @desc boolean, default False
     */
    public get use_transform_limit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transform_limit`)
    }

    /**
     * Radius of limiting sphere
     * @desc float in [-inf, inf], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public set head_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_tail`, value)
    }

    /**
     * Distances in relation to sphere of influence to allow
     * @desc enum in ['LIMITDIST_INSIDE', 'LIMITDIST_OUTSIDE', 'LIMITDIST_ONSURFACE'], default 'LIMITDIST_INSIDE'
     */
    public set limit_mode(value: 'LIMITDIST_INSIDE' | 'LIMITDIST_OUTSIDE' | 'LIMITDIST_ONSURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_mode`, value)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public set subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.subtarget`, value)
    }

    /**
     * Target object
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Follow shape of B-Bone segments when calculating Head/Tail position
     * @desc boolean, default False
     */
    public set use_bbone_shape(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bbone_shape`, value)
    }

    /**
     * Transforms are affected by this constraint as well
     * @desc boolean, default False
     */
    public set use_transform_limit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transform_limit`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
