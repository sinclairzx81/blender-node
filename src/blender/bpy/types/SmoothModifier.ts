import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * SmoothModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SmoothModifier.html
 */
export class SmoothModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Strength of modifier effect
     * @desc float in [-inf, inf], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Smooth object along X axis
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * Smooth object along Y axis
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * Smooth object along Z axis
     * @desc boolean, default False
     */
    public get use_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z`)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Strength of modifier effect
     * @desc float in [-inf, inf], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Smooth object along X axis
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * Smooth object along Y axis
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * Smooth object along Z axis
     * @desc boolean, default False
     */
    public set use_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z`, value)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
