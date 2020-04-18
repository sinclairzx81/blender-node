import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GPencilStrokePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilStrokePoint.html
 */
export class GPencilStrokePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Pressure of tablet at point when drawing it
     * @desc float in [0, inf], default 0.0
     */
    public get pressure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure`)
    }

    /**
     * Point is selected for viewport editing
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Color intensity (alpha factor)
     * @desc float in [0, 1], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Internal UV factor
     * @desc float in [0, 1], default 0.0
     */
    public get uv_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.uv_factor`)
    }

    /**
     * Internal UV factor for dot mode
     * @desc float in [0, 6.28319], default 0.0
     */
    public get uv_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.uv_rotation`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Pressure of tablet at point when drawing it
     * @desc float in [0, inf], default 0.0
     */
    public set pressure(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pressure`, value)
    }

    /**
     * Point is selected for viewport editing
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Color intensity (alpha factor)
     * @desc float in [0, 1], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Internal UV factor
     * @desc float in [0, 1], default 0.0
     */
    public set uv_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.uv_factor`, value)
    }

    /**
     * Internal UV factor for dot mode
     * @desc float in [0, 6.28319], default 0.0
     */
    public set uv_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.uv_rotation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
