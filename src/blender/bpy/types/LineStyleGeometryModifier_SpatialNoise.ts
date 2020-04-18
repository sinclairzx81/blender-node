import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_SpatialNoise
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_SpatialNoise.html
 */
export class LineStyleGeometryModifier_SpatialNoise {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Amplitude of the spatial noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public get expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.expanded`)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Number of octaves (i.e., the amount of detail of the spatial noise)
     * @desc int in [0, inf], default 0
     */
    public get octaves(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.octaves`)
    }

    /**
     * Scale of the spatial noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * If true, the spatial noise is smooth
     * @desc boolean, default False
     */
    public get smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.smooth`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * If true, the spatial noise does not show any coherence
     * @desc boolean, default False
     */
    public get use_pure_random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pure_random`)
    }

    /**
     * Amplitude of the spatial noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public set expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.expanded`, value)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Number of octaves (i.e., the amount of detail of the spatial noise)
     * @desc int in [0, inf], default 0
     */
    public set octaves(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.octaves`, value)
    }

    /**
     * Scale of the spatial noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * If true, the spatial noise is smooth
     * @desc boolean, default False
     */
    public set smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.smooth`, value)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    /**
     * If true, the spatial noise does not show any coherence
     * @desc boolean, default False
     */
    public set use_pure_random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pure_random`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
