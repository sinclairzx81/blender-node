import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SequenceColorBalanceData
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceColorBalanceData.html
 */
export class SequenceColorBalanceData {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color balance gain (highlights)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get gain(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gain`, 'number', 3)
    }

    /**
     * Color balance gamma (midtones)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get gamma(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gamma`, 'number', 3)
    }

    /**
     * Invert the gain color`
     * @desc boolean, default False
     */
    public get invert_gain(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_gain`)
    }

    /**
     * Invert the gamma color
     * @desc boolean, default False
     */
    public get invert_gamma(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_gamma`)
    }

    /**
     * Invert the lift color
     * @desc boolean, default False
     */
    public get invert_lift(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_lift`)
    }

    /**
     * Color balance lift (shadows)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get lift(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lift`, 'number', 3)
    }

    /**
     * Color balance gain (highlights)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set gain(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gain`, value)
    }

    /**
     * Color balance gamma (midtones)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set gamma(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gamma`, value)
    }

    /**
     * Invert the gain color`
     * @desc boolean, default False
     */
    public set invert_gain(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_gain`, value)
    }

    /**
     * Invert the gamma color
     * @desc boolean, default False
     */
    public set invert_gamma(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_gamma`, value)
    }

    /**
     * Invert the lift color
     * @desc boolean, default False
     */
    public set invert_lift(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_lift`, value)
    }

    /**
     * Color balance lift (shadows)
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set lift(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lift`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
