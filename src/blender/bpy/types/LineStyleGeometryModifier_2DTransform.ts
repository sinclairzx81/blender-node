import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_2DTransform
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_2DTransform.html
 */
export class LineStyleGeometryModifier_2DTransform {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Rotation angle
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
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Pivot of scaling and rotation operations
     * @desc enum in ['CENTER', 'START', 'END', 'PARAM', 'ABSOLUTE'], default 'CENTER'
     */
    public get pivot(): 'CENTER' | 'START' | 'END' | 'PARAM' | 'ABSOLUTE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pivot`)
    }

    /**
     * Pivot in terms of the stroke point parameter u (0 <= u <= 1)
     * @desc float in [0, 1], default 0.0
     */
    public get pivot_u(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pivot_u`)
    }

    /**
     * 2D X coordinate of the absolute pivot
     * @desc float in [-inf, inf], default 0.0
     */
    public get pivot_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pivot_x`)
    }

    /**
     * 2D Y coordinate of the absolute pivot
     * @desc float in [-inf, inf], default 0.0
     */
    public get pivot_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pivot_y`)
    }

    /**
     * Scaling factor that is applied along the X axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get scale_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_x`)
    }

    /**
     * Scaling factor that is applied along the Y axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get scale_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_y`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Rotation angle
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
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Pivot of scaling and rotation operations
     * @desc enum in ['CENTER', 'START', 'END', 'PARAM', 'ABSOLUTE'], default 'CENTER'
     */
    public set pivot(value: 'CENTER' | 'START' | 'END' | 'PARAM' | 'ABSOLUTE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pivot`, value)
    }

    /**
     * Pivot in terms of the stroke point parameter u (0 <= u <= 1)
     * @desc float in [0, 1], default 0.0
     */
    public set pivot_u(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pivot_u`, value)
    }

    /**
     * 2D X coordinate of the absolute pivot
     * @desc float in [-inf, inf], default 0.0
     */
    public set pivot_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pivot_x`, value)
    }

    /**
     * 2D Y coordinate of the absolute pivot
     * @desc float in [-inf, inf], default 0.0
     */
    public set pivot_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pivot_y`, value)
    }

    /**
     * Scaling factor that is applied along the X axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set scale_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_x`, value)
    }

    /**
     * Scaling factor that is applied along the Y axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set scale_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_y`, value)
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
