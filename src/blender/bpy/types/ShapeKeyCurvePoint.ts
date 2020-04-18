import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ShapeKeyCurvePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.ShapeKeyCurvePoint.html
 */
export class ShapeKeyCurvePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Radius for beveling
     * @desc float in [0, inf], default 0.0
     */
    public get radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public get tilt(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tilt`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Radius for beveling
     * @desc float in [0, inf], default 0.0
     */
    public set radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public set tilt(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tilt`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
