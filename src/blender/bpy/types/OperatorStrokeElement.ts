import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * OperatorStrokeElement
 * 
 * https://docs.blender.org/api/current/bpy.types.OperatorStrokeElement.html
 */
export class OperatorStrokeElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False
     */
    public get is_start(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_start`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get mouse(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mouse`, 'number', 2)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get pen_flip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pen_flip`)
    }

    /**
     * Tablet pressure
     * @desc float in [0, 1], default 0.0
     */
    public get pressure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure`)
    }

    /**
     * Brush size in screen space
     * @desc float in [0, inf], default 0.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set is_start(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_start`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set mouse(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mouse`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set pen_flip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pen_flip`, value)
    }

    /**
     * Tablet pressure
     * @desc float in [0, 1], default 0.0
     */
    public set pressure(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pressure`, value)
    }

    /**
     * Brush size in screen space
     * @desc float in [0, inf], default 0.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
