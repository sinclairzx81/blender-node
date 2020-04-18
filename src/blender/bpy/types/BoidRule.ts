import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BoidRule
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRule.html
 */
export class BoidRule {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['GOAL', 'AVOID', 'AVOID_COLLISION', 'SEPARATE', 'FLOCK', 'FOLLOW_LEADER', 'AVERAGE_SPEED', 'FIGHT'], default 'GOAL', (readonly)
     */
    public get type(): 'GOAL' | 'AVOID' | 'AVOID_COLLISION' | 'SEPARATE' | 'FLOCK' | 'FOLLOW_LEADER' | 'AVERAGE_SPEED' | 'FIGHT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Boid rule name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Use rule when boid is flying
     * @desc boolean, default False
     */
    public get use_in_air(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_in_air`)
    }

    /**
     * Use rule when boid is on land
     * @desc boolean, default False
     */
    public get use_on_land(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_on_land`)
    }

    /**
     * Boid rule name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Use rule when boid is flying
     * @desc boolean, default False
     */
    public set use_in_air(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_in_air`, value)
    }

    /**
     * Use rule when boid is on land
     * @desc boolean, default False
     */
    public set use_on_land(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_on_land`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
