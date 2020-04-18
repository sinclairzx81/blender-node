import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * FloorConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.FloorConstraint.html
 */
export class FloorConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Location of target that object will not pass through
     * @desc enum in ['FLOOR_X', 'FLOOR_Y', 'FLOOR_Z', 'FLOOR_NEGATIVE_X', 'FLOOR_NEGATIVE_Y', 'FLOOR_NEGATIVE_Z'], default 'FLOOR_X'
     */
    public get floor_location(): 'FLOOR_X' | 'FLOOR_Y' | 'FLOOR_Z' | 'FLOOR_NEGATIVE_X' | 'FLOOR_NEGATIVE_Y' | 'FLOOR_NEGATIVE_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.floor_location`)
    }

    /**
     * Offset of floor from object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
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
     * Use the target’s rotation to determine floor
     * @desc boolean, default False
     */
    public get use_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation`)
    }

    /**
     * Location of target that object will not pass through
     * @desc enum in ['FLOOR_X', 'FLOOR_Y', 'FLOOR_Z', 'FLOOR_NEGATIVE_X', 'FLOOR_NEGATIVE_Y', 'FLOOR_NEGATIVE_Z'], default 'FLOOR_X'
     */
    public set floor_location(value: 'FLOOR_X' | 'FLOOR_Y' | 'FLOOR_Z' | 'FLOOR_NEGATIVE_X' | 'FLOOR_NEGATIVE_Y' | 'FLOOR_NEGATIVE_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.floor_location`, value)
    }

    /**
     * Offset of floor from object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
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
     * Use the target’s rotation to determine floor
     * @desc boolean, default False
     */
    public set use_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
