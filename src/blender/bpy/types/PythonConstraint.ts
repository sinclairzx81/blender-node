import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { ConstraintTarget } from './ConstraintTarget'
import { Text } from './Text'

/**
 * PythonConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.PythonConstraint.html
 */
export class PythonConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The linked Python script has thrown an error
     * @desc boolean, default False, (readonly)
     */
    public get has_script_error(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_script_error`)
    }

    /**
     * Target Objects
     * @desc bpy_prop_collection of ConstraintTarget, (readonly)
     */
    public get targets(): BlenderCollection<ConstraintTarget> & Indexable<ConstraintTarget> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.targets`, ConstraintTarget)
    }

    /**
     * Usually only 1-3 are needed
     * @desc int in [-inf, inf], default 0
     */
    public get target_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.target_count`)
    }

    /**
     * The text object that contains the Python script
     * @desc Text
     */
    public get text(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.text`, Text)
    }

    /**
     * Use the targets indicated in the constraint panel
     * @desc boolean, default False
     */
    public get use_targets(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_targets`)
    }

    /**
     * Usually only 1-3 are needed
     * @desc int in [-inf, inf], default 0
     */
    public set target_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.target_count`, value)
    }

    /**
     * The text object that contains the Python script
     * @desc Text
     */
    public set text(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.text`, value)
    }

    /**
     * Use the targets indicated in the constraint panel
     * @desc boolean, default False
     */
    public set use_targets(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_targets`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
