import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FCurveSample
 * 
 * https://docs.blender.org/api/current/bpy.types.FCurveSample.html
 */
export class FCurveSample {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Point coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get co(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 2)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Point coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set co(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
