import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBlur
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBlur.html
 */
export class CompositorNodeBlur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of aspect correction to use
     * @desc enum in ['NONE', 'Y', 'X'], default 'NONE'
     */
    public get aspect_correction(): 'NONE' | 'Y' | 'X' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.aspect_correction`)
    }

    /**
     * 
     * @desc float in [0, 2], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public get factor_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_x`)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public get factor_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_y`)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'TENT', 'QUAD', 'CUBIC', 'GAUSS', 'FAST_GAUSS', 'CATROM', 'MITCH'], default 'FLAT'
     */
    public get filter_type(): 'FLAT' | 'TENT' | 'QUAD' | 'CUBIC' | 'GAUSS' | 'FAST_GAUSS' | 'CATROM' | 'MITCH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * 
     * @desc int in [0, 2048], default 0
     */
    public get size_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size_x`)
    }

    /**
     * 
     * @desc int in [0, 2048], default 0
     */
    public get size_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size_y`)
    }

    /**
     * Use circular filter (slower)
     * @desc boolean, default False
     */
    public get use_bokeh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bokeh`)
    }

    /**
     * Extend bounds of the input image to fully fit blurred image
     * @desc boolean, default False
     */
    public get use_extended_bounds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_extended_bounds`)
    }

    /**
     * Apply filter on gamma corrected values
     * @desc boolean, default False
     */
    public get use_gamma_correction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gamma_correction`)
    }

    /**
     * Use relative (percent) values to define blur radius
     * @desc boolean, default False
     */
    public get use_relative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative`)
    }

    /**
     * Support variable blur per-pixel when using an image for size input
     * @desc boolean, default False
     */
    public get use_variable_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_variable_size`)
    }

    /**
     * Type of aspect correction to use
     * @desc enum in ['NONE', 'Y', 'X'], default 'NONE'
     */
    public set aspect_correction(value: 'NONE' | 'Y' | 'X') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.aspect_correction`, value)
    }

    /**
     * 
     * @desc float in [0, 2], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public set factor_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_x`, value)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public set factor_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_y`, value)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'TENT', 'QUAD', 'CUBIC', 'GAUSS', 'FAST_GAUSS', 'CATROM', 'MITCH'], default 'FLAT'
     */
    public set filter_type(value: 'FLAT' | 'TENT' | 'QUAD' | 'CUBIC' | 'GAUSS' | 'FAST_GAUSS' | 'CATROM' | 'MITCH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * 
     * @desc int in [0, 2048], default 0
     */
    public set size_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size_x`, value)
    }

    /**
     * 
     * @desc int in [0, 2048], default 0
     */
    public set size_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size_y`, value)
    }

    /**
     * Use circular filter (slower)
     * @desc boolean, default False
     */
    public set use_bokeh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bokeh`, value)
    }

    /**
     * Extend bounds of the input image to fully fit blurred image
     * @desc boolean, default False
     */
    public set use_extended_bounds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_extended_bounds`, value)
    }

    /**
     * Apply filter on gamma corrected values
     * @desc boolean, default False
     */
    public set use_gamma_correction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gamma_correction`, value)
    }

    /**
     * Use relative (percent) values to define blur radius
     * @desc boolean, default False
     */
    public set use_relative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative`, value)
    }

    /**
     * Support variable blur per-pixel when using an image for size input
     * @desc boolean, default False
     */
    public set use_variable_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_variable_size`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
