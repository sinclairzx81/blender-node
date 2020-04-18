import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleThicknessModifier } from './LineStyleThicknessModifier'
import { CurveMapping } from './CurveMapping'

/**
 * LineStyleThicknessModifier_Tangent
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleThicknessModifier_Tangent.html
 */
export class LineStyleThicknessModifier_Tangent {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Curve used for the curve mapping
     * @desc CurveMapping, (readonly)
     */
    public get curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, CurveMapping)
    }

    /**
     * Type of the modifier
     * @desc enum in ['ALONG_STROKE', 'CALLIGRAPHY', 'CREASE_ANGLE', 'CURVATURE_3D', 'DISTANCE_FROM_CAMERA', 'DISTANCE_FROM_OBJECT', 'MATERIAL', 'NOISE', 'TANGENT'], default 'ALONG_STROKE', (readonly)
     */
    public get type(): 'ALONG_STROKE' | 'CALLIGRAPHY' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Specify how the modifier value is blended into the base value
     * @desc enum in ['MIX', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'DIFFERENCE', 'MINIMUM', 'MAXIMUM'], default 'MIX'
     */
    public get blend(): 'MIX' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'DIFFERENCE' | 'MINIMUM' | 'MAXIMUM' {
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
     * Invert the fade-out direction of the linear mapping
     * @desc boolean, default False
     */
    public get invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert`)
    }

    /**
     * Select the mapping type
     * @desc enum in ['LINEAR', 'CURVE'], default 'LINEAR'
     */
    public get mapping(): 'LINEAR' | 'CURVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping`)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Maximum thickness
     * @desc float in [0, 10000], default 0.0
     */
    public get thickness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_max`)
    }

    /**
     * Minimum thickness
     * @desc float in [0, 10000], default 0.0
     */
    public get thickness_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_min`)
    }

    /**
     * Enable or disable this modifier during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Specify how the modifier value is blended into the base value
     * @desc enum in ['MIX', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'DIFFERENCE', 'MINIMUM', 'MAXIMUM'], default 'MIX'
     */
    public set blend(value: 'MIX' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'DIFFERENCE' | 'MINIMUM' | 'MAXIMUM') {
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
     * Invert the fade-out direction of the linear mapping
     * @desc boolean, default False
     */
    public set invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert`, value)
    }

    /**
     * Select the mapping type
     * @desc enum in ['LINEAR', 'CURVE'], default 'LINEAR'
     */
    public set mapping(value: 'LINEAR' | 'CURVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping`, value)
    }

    /**
     * Name of the modifier
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Maximum thickness
     * @desc float in [0, 10000], default 0.0
     */
    public set thickness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_max`, value)
    }

    /**
     * Minimum thickness
     * @desc float in [0, 10000], default 0.0
     */
    public set thickness_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_min`, value)
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
