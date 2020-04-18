import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'
import { BlenderObject } from './BlenderObject'

/**
 * BoidRuleAvoid
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleAvoid.html
 */
export class BoidRuleAvoid {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Avoid object if danger from it is above this threshold
     * @desc float in [0, 100], default 0.0
     */
    public get fear_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fear_factor`)
    }

    /**
     * Object to avoid
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
     * Avoid object if danger from it is above this threshold
     * @desc float in [0, 100], default 0.0
     */
    public set fear_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fear_factor`, value)
    }

    /**
     * Object to avoid
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
