import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { DriverTarget } from './DriverTarget'

/**
 * DriverVariable
 * 
 * https://docs.blender.org/api/current/bpy.types.DriverVariable.html
 */
export class DriverVariable {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Is this a valid name for a driver variable
     * @desc boolean, default False, (readonly)
     */
    public get is_name_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_name_valid`)
    }

    /**
     * Sources of input data for evaluating this variable
     * @desc bpy_prop_collection of DriverTarget, (readonly)
     */
    public get targets(): BlenderCollection<DriverTarget> & Indexable<DriverTarget> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.targets`, DriverTarget)
    }

    /**
     * Name to use in scripted expressions/functions (no spaces or dots are allowed, and must start with a letter)
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Driver variable type
     * @desc enum in ['SINGLE_PROP', 'TRANSFORMS', 'ROTATION_DIFF', 'LOC_DIFF'], default 'SINGLE_PROP'
     */
    public get type(): 'SINGLE_PROP' | 'TRANSFORMS' | 'ROTATION_DIFF' | 'LOC_DIFF' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Name to use in scripted expressions/functions (no spaces or dots are allowed, and must start with a letter)
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Driver variable type
     * @desc enum in ['SINGLE_PROP', 'TRANSFORMS', 'ROTATION_DIFF', 'LOC_DIFF'], default 'SINGLE_PROP'
     */
    public set type(value: 'SINGLE_PROP' | 'TRANSFORMS' | 'ROTATION_DIFF' | 'LOC_DIFF') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
