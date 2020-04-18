import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ShapeKeyBezierPoint
 * 
 * https://docs.blender.org/api/current/bpy.types.ShapeKeyBezierPoint.html
 */
export class ShapeKeyBezierPoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get handle_left(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_left`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get handle_right(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_right`, 'number', 3)
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
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set handle_left(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_left`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set handle_right(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_right`, value)
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
