import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_Polygonalization
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_Polygonalization.html
 */
export class LineStyleGeometryModifier_Polygonalization {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Maximum distance between the original stroke and its polygonal approximation
     * @desc float in [-inf, inf], default 0.0
     */
    public get error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.error`)
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
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Maximum distance between the original stroke and its polygonal approximation
     * @desc float in [-inf, inf], default 0.0
     */
    public set error(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.error`, value)
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
