import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * ClampToConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ClampToConstraint.html
 */
export class ClampToConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Main axis of movement
     * @desc enum in ['CLAMPTO_AUTO', 'CLAMPTO_X', 'CLAMPTO_Y', 'CLAMPTO_Z'], default 'CLAMPTO_AUTO'
     */
    public get main_axis(): 'CLAMPTO_AUTO' | 'CLAMPTO_X' | 'CLAMPTO_Y' | 'CLAMPTO_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.main_axis`)
    }

    /**
     * Target Object (Curves only)
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Treat curve as cyclic curve (no clamping to curve bounding box)
     * @desc boolean, default False
     */
    public get use_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic`)
    }

    /**
     * Main axis of movement
     * @desc enum in ['CLAMPTO_AUTO', 'CLAMPTO_X', 'CLAMPTO_Y', 'CLAMPTO_Z'], default 'CLAMPTO_AUTO'
     */
    public set main_axis(value: 'CLAMPTO_AUTO' | 'CLAMPTO_X' | 'CLAMPTO_Y' | 'CLAMPTO_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.main_axis`, value)
    }

    /**
     * Target Object (Curves only)
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Treat curve as cyclic curve (no clamping to curve bounding box)
     * @desc boolean, default False
     */
    public set use_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
