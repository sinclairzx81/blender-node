import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'

/**
 * MaintainVolumeConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.MaintainVolumeConstraint.html
 */
export class MaintainVolumeConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The free scaling axis of the object
     * @desc enum in ['SAMEVOL_X', 'SAMEVOL_Y', 'SAMEVOL_Z'], default 'SAMEVOL_X'
     */
    public get free_axis(): 'SAMEVOL_X' | 'SAMEVOL_Y' | 'SAMEVOL_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.free_axis`)
    }

    /**
     * The way the constraint treats original non-free axis scaling
     * @desc enum in ['STRICT', 'UNIFORM', 'SINGLE_AXIS'], default 'STRICT'
     */
    public get mode(): 'STRICT' | 'UNIFORM' | 'SINGLE_AXIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Volume of the bone at rest
     * @desc float in [0.001, 100], default 0.0
     */
    public get volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume`)
    }

    /**
     * The free scaling axis of the object
     * @desc enum in ['SAMEVOL_X', 'SAMEVOL_Y', 'SAMEVOL_Z'], default 'SAMEVOL_X'
     */
    public set free_axis(value: 'SAMEVOL_X' | 'SAMEVOL_Y' | 'SAMEVOL_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.free_axis`, value)
    }

    /**
     * The way the constraint treats original non-free axis scaling
     * @desc enum in ['STRICT', 'UNIFORM', 'SINGLE_AXIS'], default 'STRICT'
     */
    public set mode(value: 'STRICT' | 'UNIFORM' | 'SINGLE_AXIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Volume of the bone at rest
     * @desc float in [0.001, 100], default 0.0
     */
    public set volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
