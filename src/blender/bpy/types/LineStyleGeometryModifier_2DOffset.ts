import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_2DOffset
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_2DOffset.html
 */
export class LineStyleGeometryModifier_2DOffset {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Displacement that is applied from the end of the stroke
     * @desc float in [-inf, inf], default 0.0
     */
    public get end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.end`)
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
     * Displacement that is applied from the beginning of the stroke
     * @desc float in [-inf, inf], default 0.0
     */
    public get start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.start`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Displacement that is applied to the X coordinates of stroke vertices
     * @desc float in [-inf, inf], default 0.0
     */
    public get x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.x`)
    }

    /**
     * Displacement that is applied to the Y coordinates of stroke vertices
     * @desc float in [-inf, inf], default 0.0
     */
    public get y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.y`)
    }

    /**
     * Displacement that is applied from the end of the stroke
     * @desc float in [-inf, inf], default 0.0
     */
    public set end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.end`, value)
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
     * Displacement that is applied from the beginning of the stroke
     * @desc float in [-inf, inf], default 0.0
     */
    public set start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.start`, value)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    /**
     * Displacement that is applied to the X coordinates of stroke vertices
     * @desc float in [-inf, inf], default 0.0
     */
    public set x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.x`, value)
    }

    /**
     * Displacement that is applied to the Y coordinates of stroke vertices
     * @desc float in [-inf, inf], default 0.0
     */
    public set y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
