import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CurveProfilePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveProfilePoint.html
 */
export class CurveProfilePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Path interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'VECTOR'], default 'AUTO'
     */
    public get handle_type_1(): 'AUTO' | 'VECTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_type_1`)
    }

    /**
     * Path interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'VECTOR'], default 'AUTO'
     */
    public get handle_type_2(): 'AUTO' | 'VECTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_type_2`)
    }

    /**
     * X/Y coordinates of the path point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get location(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 2)
    }

    /**
     * Selection state of the path point
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Path interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'VECTOR'], default 'AUTO'
     */
    public set handle_type_1(value: 'AUTO' | 'VECTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_type_1`, value)
    }

    /**
     * Path interpolation at this point: Bezier or vector
     * @desc enum in ['AUTO', 'VECTOR'], default 'AUTO'
     */
    public set handle_type_2(value: 'AUTO' | 'VECTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_type_2`, value)
    }

    /**
     * X/Y coordinates of the path point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set location(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Selection state of the path point
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
