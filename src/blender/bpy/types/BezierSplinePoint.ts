import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BezierSplinePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.BezierSplinePoint.html
 */
export class BezierSplinePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Coordinates of the control point
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Coordinates of the first handle
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get handle_left(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_left`, 'number', 3)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'VECTOR', 'ALIGNED', 'AUTO'], default 'FREE'
     */
    public get handle_left_type(): 'FREE' | 'VECTOR' | 'ALIGNED' | 'AUTO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_left_type`)
    }

    /**
     * Coordinates of the second handle
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get handle_right(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_right`, 'number', 3)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'VECTOR', 'ALIGNED', 'AUTO'], default 'FREE'
     */
    public get handle_right_type(): 'FREE' | 'VECTOR' | 'ALIGNED' | 'AUTO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_right_type`)
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
     * Control point selection status
     * @desc boolean, default False
     */
    public get select_control_point(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_control_point`)
    }

    /**
     * Handle 1 selection status
     * @desc boolean, default False
     */
    public get select_left_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_left_handle`)
    }

    /**
     * Handle 2 selection status
     * @desc boolean, default False
     */
    public get select_right_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_right_handle`)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public get tilt(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tilt`)
    }

    /**
     * Softbody goal weight
     * @desc float in [0.01, 100], default 0.0
     */
    public get weight_softbody(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_softbody`)
    }

    /**
     * Coordinates of the control point
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Coordinates of the first handle
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set handle_left(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_left`, value)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'VECTOR', 'ALIGNED', 'AUTO'], default 'FREE'
     */
    public set handle_left_type(value: 'FREE' | 'VECTOR' | 'ALIGNED' | 'AUTO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_left_type`, value)
    }

    /**
     * Coordinates of the second handle
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set handle_right(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_right`, value)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'VECTOR', 'ALIGNED', 'AUTO'], default 'FREE'
     */
    public set handle_right_type(value: 'FREE' | 'VECTOR' | 'ALIGNED' | 'AUTO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_right_type`, value)
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
     * Control point selection status
     * @desc boolean, default False
     */
    public set select_control_point(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_control_point`, value)
    }

    /**
     * Handle 1 selection status
     * @desc boolean, default False
     */
    public set select_left_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_left_handle`, value)
    }

    /**
     * Handle 2 selection status
     * @desc boolean, default False
     */
    public set select_right_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_right_handle`, value)
    }

    /**
     * Tilt in 3D View
     * @desc float in [-376.991, 376.991], default 0.0
     */
    public set tilt(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tilt`, value)
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
