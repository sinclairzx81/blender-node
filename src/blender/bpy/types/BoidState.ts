import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BoidRule } from './BoidRule'

/**
 * BoidState
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidState.html
 */
export class BoidState {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc BoidRule, (readonly)
     */
    public get active_boid_rule(): BoidRule {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_boid_rule`, BoidRule)
    }

    /**
     * 
     * @desc bpy_prop_collection of BoidRule, (readonly)
     */
    public get rules(): BlenderCollection<BoidRule> & Indexable<BoidRule> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.rules`, BoidRule)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get active_boid_rule_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_boid_rule_index`)
    }

    /**
     * 
     * @desc float in [0, 10], default 0.0
     */
    public get falloff(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Boid state name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get rule_fuzzy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rule_fuzzy`)
    }

    /**
     * How the rules in the list are evaluated
     * @desc enum in ['FUZZY', 'RANDOM', 'AVERAGE'], default 'FUZZY'
     */
    public get ruleset_type(): 'FUZZY' | 'RANDOM' | 'AVERAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ruleset_type`)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public get volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set active_boid_rule_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_boid_rule_index`, value)
    }

    /**
     * 
     * @desc float in [0, 10], default 0.0
     */
    public set falloff(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Boid state name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set rule_fuzzy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rule_fuzzy`, value)
    }

    /**
     * How the rules in the list are evaluated
     * @desc enum in ['FUZZY', 'RANDOM', 'AVERAGE'], default 'FUZZY'
     */
    public set ruleset_type(value: 'FUZZY' | 'RANDOM' | 'AVERAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ruleset_type`, value)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public set volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
