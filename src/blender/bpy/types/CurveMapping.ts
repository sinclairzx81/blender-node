import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMap } from './CurveMap'

/**
 * CurveMapping
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveMapping.html
 */
export class CurveMapping {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of CurveMap, (readonly)
     */
    public get curves(): BlenderCollection<CurveMap> & Indexable<CurveMap> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.curves`, CurveMap)
    }

    /**
     * For RGB curves, the color that black is mapped to
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get black_level(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.black_level`, 'number', 3)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public get clip_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_max_x`)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public get clip_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_max_y`)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public get clip_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_min_x`)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public get clip_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_min_y`)
    }

    /**
     * Extrapolate the curve or extend it horizontally
     * @desc enum in ['HORIZONTAL', 'EXTRAPOLATED'], default 'HORIZONTAL'
     */
    public get extend(): 'HORIZONTAL' | 'EXTRAPOLATED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.extend`)
    }

    /**
     * Tone of the curve
     * @desc enum in ['STANDARD', 'FILMLIKE'], default 'STANDARD'
     */
    public get tone(): 'STANDARD' | 'FILMLIKE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tone`)
    }

    /**
     * Force the curve view to fit a defined boundary
     * @desc boolean, default False
     */
    public get use_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clip`)
    }

    /**
     * For RGB curves, the color that white is mapped to
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get white_level(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.white_level`, 'number', 3)
    }

    /**
     * For RGB curves, the color that black is mapped to
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set black_level(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.black_level`, value)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public set clip_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_max_x`, value)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public set clip_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_max_y`, value)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public set clip_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_min_x`, value)
    }

    /**
     * 
     * @desc float in [-100, 100], default 0.0
     */
    public set clip_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_min_y`, value)
    }

    /**
     * Extrapolate the curve or extend it horizontally
     * @desc enum in ['HORIZONTAL', 'EXTRAPOLATED'], default 'HORIZONTAL'
     */
    public set extend(value: 'HORIZONTAL' | 'EXTRAPOLATED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.extend`, value)
    }

    /**
     * Tone of the curve
     * @desc enum in ['STANDARD', 'FILMLIKE'], default 'STANDARD'
     */
    public set tone(value: 'STANDARD' | 'FILMLIKE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tone`, value)
    }

    /**
     * Force the curve view to fit a defined boundary
     * @desc boolean, default False
     */
    public set use_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clip`, value)
    }

    /**
     * For RGB curves, the color that white is mapped to
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set white_level(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.white_level`, value)
    }

    /**
     * Update curve mapping after making changes
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Initialize curve
     * @desc void
     */
    public initialize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.initialize`, {})
    }

    /**
     * Evaluate curve at given location
     * @desc float in [-inf, inf]
     */
    public evaluate(options: { curve?: unknown, position?: number }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.evaluate`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
