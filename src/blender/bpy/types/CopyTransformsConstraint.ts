import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * CopyTransformsConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.CopyTransformsConstraint.html
 */
export class CopyTransformsConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public get head_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_tail`)
    }

    /**
     * Specify how the copied and existing transformations are combined
     * @desc enum in ['REPLACE', 'BEFORE', 'AFTER'], default 'REPLACE'
     */
    public get mix_mode(): 'REPLACE' | 'BEFORE' | 'AFTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
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
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public set head_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_tail`, value)
    }

    /**
     * Specify how the copied and existing transformations are combined
     * @desc enum in ['REPLACE', 'BEFORE', 'AFTER'], default 'REPLACE'
     */
    public set mix_mode(value: 'REPLACE' | 'BEFORE' | 'AFTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
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

    [util.inspect.custom]() {
        return this.accessor
    }
}
