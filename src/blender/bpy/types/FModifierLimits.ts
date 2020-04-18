import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { FModifier } from './FModifier'

/**
 * FModifierLimits
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierLimits.html
 */
export class FModifierLimits {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Highest X value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public get max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_x`)
    }

    /**
     * Highest Y value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public get max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_y`)
    }

    /**
     * Lowest X value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public get min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min_x`)
    }

    /**
     * Lowest Y value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public get min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min_y`)
    }

    /**
     * Use the maximum X value
     * @desc boolean, default False
     */
    public get use_max_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max_x`)
    }

    /**
     * Use the maximum Y value
     * @desc boolean, default False
     */
    public get use_max_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max_y`)
    }

    /**
     * Use the minimum X value
     * @desc boolean, default False
     */
    public get use_min_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_min_x`)
    }

    /**
     * Use the minimum Y value
     * @desc boolean, default False
     */
    public get use_min_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_min_y`)
    }

    /**
     * Highest X value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public set max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max_x`, value)
    }

    /**
     * Highest Y value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public set max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max_y`, value)
    }

    /**
     * Lowest X value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public set min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min_x`, value)
    }

    /**
     * Lowest Y value to allow
     * @desc float in [-inf, inf], default 0.0
     */
    public set min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min_y`, value)
    }

    /**
     * Use the maximum X value
     * @desc boolean, default False
     */
    public set use_max_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max_x`, value)
    }

    /**
     * Use the maximum Y value
     * @desc boolean, default False
     */
    public set use_max_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max_y`, value)
    }

    /**
     * Use the minimum X value
     * @desc boolean, default False
     */
    public set use_min_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_min_x`, value)
    }

    /**
     * Use the minimum Y value
     * @desc boolean, default False
     */
    public set use_min_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_min_y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
