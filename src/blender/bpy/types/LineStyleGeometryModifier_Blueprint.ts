import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifier_Blueprint
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifier_Blueprint.html
 */
export class LineStyleGeometryModifier_Blueprint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of the modifier
     * @desc enum in ['2D_OFFSET', '2D_TRANSFORM', 'BACKBONE_STRETCHER', 'BEZIER_CURVE', 'BLUEPRINT', 'GUIDING_LINES', 'PERLIN_NOISE_1D', 'PERLIN_NOISE_2D', 'POLYGONIZATION', 'SAMPLING', 'SIMPLIFICATION', 'SINUS_DISPLACEMENT', 'SPATIAL_NOISE', 'TIP_REMOVER'], default '2D_OFFSET', (readonly)
     */
    public get type(): '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Amount of backbone stretching
     * @desc float in [-inf, inf], default 0.0
     */
    public get backbone_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.backbone_length`)
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
     * Randomness of the backbone stretching
     * @desc int in [0, inf], default 0
     */
    public get random_backbone(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.random_backbone`)
    }

    /**
     * Randomness of the center
     * @desc int in [0, inf], default 0
     */
    public get random_center(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.random_center`)
    }

    /**
     * Randomness of the radius
     * @desc int in [0, inf], default 0
     */
    public get random_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.random_radius`)
    }

    /**
     * Number of rounds in contour strokes
     * @desc int in [1, 1000], default 0
     */
    public get rounds(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.rounds`)
    }

    /**
     * Select the shape of blueprint contour strokes
     * @desc enum in ['CIRCLES', 'ELLIPSES', 'SQUARES'], default 'CIRCLES'
     */
    public get shape(): 'CIRCLES' | 'ELLIPSES' | 'SQUARES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shape`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Amount of backbone stretching
     * @desc float in [-inf, inf], default 0.0
     */
    public set backbone_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.backbone_length`, value)
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
     * Randomness of the backbone stretching
     * @desc int in [0, inf], default 0
     */
    public set random_backbone(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.random_backbone`, value)
    }

    /**
     * Randomness of the center
     * @desc int in [0, inf], default 0
     */
    public set random_center(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.random_center`, value)
    }

    /**
     * Randomness of the radius
     * @desc int in [0, inf], default 0
     */
    public set random_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.random_radius`, value)
    }

    /**
     * Number of rounds in contour strokes
     * @desc int in [1, 1000], default 0
     */
    public set rounds(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.rounds`, value)
    }

    /**
     * Select the shape of blueprint contour strokes
     * @desc enum in ['CIRCLES', 'ELLIPSES', 'SQUARES'], default 'CIRCLES'
     */
    public set shape(value: 'CIRCLES' | 'ELLIPSES' | 'SQUARES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shape`, value)
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
