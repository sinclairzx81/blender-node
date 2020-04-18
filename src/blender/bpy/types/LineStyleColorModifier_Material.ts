import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleColorModifier } from './LineStyleColorModifier'
import { ColorRamp } from './ColorRamp'

/**
 * LineStyleColorModifier_Material
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleColorModifier_Material.html
 */
export class LineStyleColorModifier_Material {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color ramp used to change line color
     * @desc ColorRamp, (readonly)
     */
    public get color_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_ramp`, ColorRamp)
    }

    /**
     * Type of the modifier
     * @desc enum in ['ALONG_STROKE', 'CREASE_ANGLE', 'CURVATURE_3D', 'DISTANCE_FROM_CAMERA', 'DISTANCE_FROM_OBJECT', 'MATERIAL', 'NOISE', 'TANGENT'], default 'ALONG_STROKE', (readonly)
     */
    public get type(): 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Specify how the modifier value is blended into the base value
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public get blend(): 'MIX' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend`)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public get expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.expanded`)
    }

    /**
     * Influence factor by which the modifier changes the property
     * @desc float in [0, 1], default 0.0
     */
    public get influence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence`)
    }

    /**
     * Specify which material attribute is used
     * @desc enum in ['LINE', 'LINE_R', 'LINE_G', 'LINE_B', 'LINE_A', 'DIFF', 'DIFF_R', 'DIFF_G', 'DIFF_B', 'SPEC', 'SPEC_R', 'SPEC_G', 'SPEC_B', 'SPEC_HARD', 'ALPHA'], default 'LINE'
     */
    public get material_attribute(): 'LINE' | 'LINE_R' | 'LINE_G' | 'LINE_B' | 'LINE_A' | 'DIFF' | 'DIFF_R' | 'DIFF_G' | 'DIFF_B' | 'SPEC' | 'SPEC_R' | 'SPEC_G' | 'SPEC_B' | 'SPEC_HARD' | 'ALPHA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.material_attribute`)
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
     * Use color ramp to map the BW average into an RGB color
     * @desc boolean, default False
     */
    public get use_ramp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ramp`)
    }

    /**
     * Specify how the modifier value is blended into the base value
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public set blend(value: 'MIX' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend`, value)
    }

    /**
     * True if the modifier tab is expanded
     * @desc boolean, default False
     */
    public set expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.expanded`, value)
    }

    /**
     * Influence factor by which the modifier changes the property
     * @desc float in [0, 1], default 0.0
     */
    public set influence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence`, value)
    }

    /**
     * Specify which material attribute is used
     * @desc enum in ['LINE', 'LINE_R', 'LINE_G', 'LINE_B', 'LINE_A', 'DIFF', 'DIFF_R', 'DIFF_G', 'DIFF_B', 'SPEC', 'SPEC_R', 'SPEC_G', 'SPEC_B', 'SPEC_HARD', 'ALPHA'], default 'LINE'
     */
    public set material_attribute(value: 'LINE' | 'LINE_R' | 'LINE_G' | 'LINE_B' | 'LINE_A' | 'DIFF' | 'DIFF_R' | 'DIFF_G' | 'DIFF_B' | 'SPEC' | 'SPEC_R' | 'SPEC_G' | 'SPEC_B' | 'SPEC_HARD' | 'ALPHA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.material_attribute`, value)
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

    /**
     * Use color ramp to map the BW average into an RGB color
     * @desc boolean, default False
     */
    public set use_ramp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ramp`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
