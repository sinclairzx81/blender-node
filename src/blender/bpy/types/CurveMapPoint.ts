import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CurveMapPoint
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveMapPoint.html
 */
export class CurveMapPoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Curve interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'AUTO_CLAMPED', 'VECTOR'], default 'AUTO'
     */
    public get handle_type(): 'AUTO' | 'AUTO_CLAMPED' | 'VECTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_type`)
    }

    /**
     * X/Y coordinates of the curve point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get location(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 2)
    }

    /**
     * Selection state of the curve point
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Curve interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'AUTO_CLAMPED', 'VECTOR'], default 'AUTO'
     */
    public set handle_type(value: 'AUTO' | 'AUTO_CLAMPED' | 'VECTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_type`, value)
    }

    /**
     * X/Y coordinates of the curve point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set location(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Selection state of the curve point
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
