import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesCurveRenderSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesCurveRenderSettings.html
 */
export class CyclesCurveRenderSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Do not test the back-face of each strand
     * @desc boolean, default True
     */
    public get cull_backfacing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cull_backfacing`)
    }

    /**
     * Maximum extension that strand radius can be increased by
     * @desc float in [0, 100], default 0.1
     */
    public get maximum_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.maximum_width`)
    }

    /**
     * Minimal pixel width for strands (0 - deactivated)
     * @desc float in [0, 100], default 0.0
     */
    public get minimum_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.minimum_width`)
    }

    /**
     * Type of primitive used for hair rendering
     * @desc enum in ['TRIANGLES', 'LINE_SEGMENTS', 'CURVE_SEGMENTS'], default 'LINE_SEGMENTS'
     */
    public get primitive(): 'TRIANGLES' | 'LINE_SEGMENTS' | 'CURVE_SEGMENTS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.primitive`)
    }

    /**
     * Resolution of generated mesh
     * @desc int in [3, 64], default 3
     */
    public get resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution`)
    }

    /**
     * Form of hair
     * @desc enum in ['RIBBONS', 'THICK'], default 'THICK'
     */
    public get shape(): 'RIBBONS' | 'THICK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shape`)
    }

    /**
     * Number of subdivisions used in Cardinal curve intersection (power of 2)
     * @desc int in [0, 24], default 4
     */
    public get subdivisions(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subdivisions`)
    }

    /**
     * Activate Cycles hair rendering for particle system
     * @desc boolean, default True
     */
    public get use_curves(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curves`)
    }

    /**
     * Do not test the back-face of each strand
     * @desc boolean, default True
     */
    public set cull_backfacing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cull_backfacing`, value)
    }

    /**
     * Maximum extension that strand radius can be increased by
     * @desc float in [0, 100], default 0.1
     */
    public set maximum_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.maximum_width`, value)
    }

    /**
     * Minimal pixel width for strands (0 - deactivated)
     * @desc float in [0, 100], default 0.0
     */
    public set minimum_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.minimum_width`, value)
    }

    /**
     * Type of primitive used for hair rendering
     * @desc enum in ['TRIANGLES', 'LINE_SEGMENTS', 'CURVE_SEGMENTS'], default 'LINE_SEGMENTS'
     */
    public set primitive(value: 'TRIANGLES' | 'LINE_SEGMENTS' | 'CURVE_SEGMENTS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.primitive`, value)
    }

    /**
     * Resolution of generated mesh
     * @desc int in [3, 64], default 3
     */
    public set resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution`, value)
    }

    /**
     * Form of hair
     * @desc enum in ['RIBBONS', 'THICK'], default 'THICK'
     */
    public set shape(value: 'RIBBONS' | 'THICK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shape`, value)
    }

    /**
     * Number of subdivisions used in Cardinal curve intersection (power of 2)
     * @desc int in [0, 24], default 4
     */
    public set subdivisions(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.subdivisions`, value)
    }

    /**
     * Activate Cycles hair rendering for particle system
     * @desc boolean, default True
     */
    public set use_curves(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curves`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
