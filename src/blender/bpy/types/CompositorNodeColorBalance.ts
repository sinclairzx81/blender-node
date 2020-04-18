import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeColorBalance
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeColorBalance.html
 */
export class CompositorNodeColorBalance {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['LIFT_GAMMA_GAIN', 'OFFSET_POWER_SLOPE'], default 'LIFT_GAMMA_GAIN'
     */
    public get correction_method(): 'LIFT_GAMMA_GAIN' | 'OFFSET_POWER_SLOPE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.correction_method`)
    }

    /**
     * Correction for Highlights
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get gain(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gain`, 'number', 3)
    }

    /**
     * Correction for Midtones
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get gamma(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gamma`, 'number', 3)
    }

    /**
     * Correction for Shadows
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get lift(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lift`, 'number', 3)
    }

    /**
     * Correction for entire tonal range
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 3)
    }

    /**
     * Support negative color by using this as the RGB basis
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset_basis(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_basis`)
    }

    /**
     * Correction for Midtones
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get power(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.power`, 'number', 3)
    }

    /**
     * Correction for Highlights
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get slope(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.slope`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['LIFT_GAMMA_GAIN', 'OFFSET_POWER_SLOPE'], default 'LIFT_GAMMA_GAIN'
     */
    public set correction_method(value: 'LIFT_GAMMA_GAIN' | 'OFFSET_POWER_SLOPE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.correction_method`, value)
    }

    /**
     * Correction for Highlights
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set gain(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gain`, value)
    }

    /**
     * Correction for Midtones
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set gamma(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gamma`, value)
    }

    /**
     * Correction for Shadows
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set lift(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lift`, value)
    }

    /**
     * Correction for entire tonal range
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Support negative color by using this as the RGB basis
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset_basis(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_basis`, value)
    }

    /**
     * Correction for Midtones
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set power(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.power`, value)
    }

    /**
     * Correction for Highlights
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set slope(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.slope`, value)
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
