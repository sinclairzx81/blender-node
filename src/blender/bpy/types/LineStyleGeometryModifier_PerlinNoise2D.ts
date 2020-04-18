import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_PerlinNoise2D
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_PerlinNoise2D.html
 */
export class LineStyleGeometryModifier_PerlinNoise2D {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Amplitude of the Perlin noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
    }

    /**
     * Displacement direction
     * @desc float in [-inf, inf], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public get expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.expanded`)
    }

    /**
     * Frequency of the Perlin noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get frequency(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frequency`)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Number of octaves (i.e., the amount of detail of the Perlin noise)
     * @desc int in [0, inf], default 0
     */
    public get octaves(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.octaves`)
    }

    /**
     * Seed for random number generation (if negative, time is used as a seed instead)
     * @desc int in [-inf, inf], default 0
     */
    public get seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seed`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Amplitude of the Perlin noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
    }

    /**
     * Displacement direction
     * @desc float in [-inf, inf], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public set expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.expanded`, value)
    }

    /**
     * Frequency of the Perlin noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set frequency(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frequency`, value)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Number of octaves (i.e., the amount of detail of the Perlin noise)
     * @desc int in [0, inf], default 0
     */
    public set octaves(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.octaves`, value)
    }

    /**
     * Seed for random number generation (if negative, time is used as a seed instead)
     * @desc int in [-inf, inf], default 0
     */
    public set seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seed`, value)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
