import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UnifiedPaintSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.UnifiedPaintSettings.html
 */
export class UnifiedPaintSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get secondary_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.secondary_color`, 'number', 3)
    }

    /**
     * Radius of the brush
     * @desc int in [1, 5000], default 0
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    /**
     * How powerful the effect of the brush is when applied
     * @desc float in [0, 10], default 0.5
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Radius of brush in Blender units
     * @desc float in [0.001, inf], default 0.0
     */
    public get unprojected_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.unprojected_radius`)
    }

    /**
     * Measure brush size relative to the view or the scene
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public get use_locked_size(): 'VIEW' | 'SCENE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_locked_size`)
    }

    /**
     * Instead of per-brush color, the color is shared across brushes
     * @desc boolean, default False
     */
    public get use_unified_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_unified_color`)
    }

    /**
     * Instead of per-brush radius, the radius is shared across brushes
     * @desc boolean, default False
     */
    public get use_unified_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_unified_size`)
    }

    /**
     * Instead of per-brush strength, the strength is shared across brushes
     * @desc boolean, default False
     */
    public get use_unified_strength(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_unified_strength`)
    }

    /**
     * Instead of per-brush weight, the weight is shared across brushes
     * @desc boolean, default False
     */
    public get use_unified_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_unified_weight`)
    }

    /**
     * Weight to assign in vertex groups
     * @desc float in [0, 1], default 0.5
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set secondary_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.secondary_color`, value)
    }

    /**
     * Radius of the brush
     * @desc int in [1, 5000], default 0
     */
    public set size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * How powerful the effect of the brush is when applied
     * @desc float in [0, 10], default 0.5
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Radius of brush in Blender units
     * @desc float in [0.001, inf], default 0.0
     */
    public set unprojected_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.unprojected_radius`, value)
    }

    /**
     * Measure brush size relative to the view or the scene
     * @desc enum in ['VIEW', 'SCENE'], default 'VIEW'
     */
    public set use_locked_size(value: 'VIEW' | 'SCENE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_locked_size`, value)
    }

    /**
     * Instead of per-brush color, the color is shared across brushes
     * @desc boolean, default False
     */
    public set use_unified_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_unified_color`, value)
    }

    /**
     * Instead of per-brush radius, the radius is shared across brushes
     * @desc boolean, default False
     */
    public set use_unified_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_unified_size`, value)
    }

    /**
     * Instead of per-brush strength, the strength is shared across brushes
     * @desc boolean, default False
     */
    public set use_unified_strength(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_unified_strength`, value)
    }

    /**
     * Instead of per-brush weight, the weight is shared across brushes
     * @desc boolean, default False
     */
    public set use_unified_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_unified_weight`, value)
    }

    /**
     * Weight to assign in vertex groups
     * @desc float in [0, 1], default 0.5
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
