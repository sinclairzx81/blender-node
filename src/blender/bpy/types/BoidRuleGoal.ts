import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'
import { BlenderObject } from './BlenderObject'

/**
 * BoidRuleGoal
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleGoal.html
 */
export class BoidRuleGoal {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Goal object
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Predict target movement
     * @desc boolean, default False
     */
    public get use_predict(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_predict`)
    }

    /**
     * Goal object
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Predict target movement
     * @desc boolean, default False
     */
    public set use_predict(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_predict`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
