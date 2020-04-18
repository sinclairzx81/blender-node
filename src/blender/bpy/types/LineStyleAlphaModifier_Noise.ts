import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'
import { LineStyleAlphaModifier } from './LineStyleAlphaModifier'
import { CurveMapping } from './CurveMapping'

/**
 * LineStyleAlphaModifier_Noise
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleAlphaModifier_Noise.html
 */
export class LineStyleAlphaModifier_Noise {

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
     * @desc enum in ['ALONG_STROKE', 'CREASE_ANGLE', 'CURVATURE_3D', 'DISTANCE_FROM_CAMERA', 'DISTANCE_FROM_OBJECT', 'MATERIAL', 'NOISE', 'TANGENT'], default 'ALONG_STROKE', (readonly)
     */
    public get type(): 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Amplitude of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
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
     * Period of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get period(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.period`)
    }

    /**
     * Seed for the noise generation
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
     * Amplitude of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
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
     * Period of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set period(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.period`, value)
    }

    /**
     * Seed for the noise generation
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
