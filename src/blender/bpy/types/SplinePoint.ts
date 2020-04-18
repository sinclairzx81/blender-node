import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SplinePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.SplinePoint.html
 */
export class SplinePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Point coordinates
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 4)
    }

    /**
     * Visibility status
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Radius for beveling
     * @desc float in [0, inf], default 0.0
     */
    public get radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public get tilt(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tilt`)
    }

    /**
     * NURBS weight
     * @desc float in [-inf, inf], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Softbody goal weight
     * @desc float in [0.01, 100], default 0.0
     */
    public get weight_softbody(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_softbody`)
    }

    /**
     * Point coordinates
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Visibility status
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Radius for beveling
     * @desc float in [0, inf], default 0.0
     */
    public set radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public set tilt(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tilt`, value)
    }

    /**
     * NURBS weight
     * @desc float in [-inf, inf], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    /**
     * Softbody goal weight
     * @desc float in [0.01, 100], default 0.0
     */
    public set weight_softbody(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_softbody`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
