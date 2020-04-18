import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MaskSplinePointUW
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSplinePointUW.html
 */
export class MaskSplinePointUW {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * U coordinate of point along spline segment
     * @desc float in [0, 1], default 0.0
     */
    public get u(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.u`)
    }

    /**
     * Weight of feather point
     * @desc float in [0, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * U coordinate of point along spline segment
     * @desc float in [0, 1], default 0.0
     */
    public set u(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.u`, value)
    }

    /**
     * Weight of feather point
     * @desc float in [0, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
