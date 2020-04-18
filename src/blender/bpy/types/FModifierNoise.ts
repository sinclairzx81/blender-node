import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { FModifier } from './FModifier'

/**
 * FModifierNoise
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierNoise.html
 */
export class FModifierNoise {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Method of modifying the existing F-Curve
     * @desc enum in ['REPLACE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public get blend_type(): 'REPLACE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * Amount of fine level detail present in the noise
     * @desc int in [0, 32767], default 0
     */
    public get depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.depth`)
    }

    /**
     * Time offset for the noise effect
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * A random seed for the noise effect
     * @desc float in [-inf, inf], default 0.0
     */
    public get phase(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.phase`)
    }

    /**
     * Scaling (in time) of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * Amplitude of the noise - the amount that it modifies the underlying curve
     * @desc float in [-inf, inf], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Method of modifying the existing F-Curve
     * @desc enum in ['REPLACE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public set blend_type(value: 'REPLACE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * Amount of fine level detail present in the noise
     * @desc int in [0, 32767], default 0
     */
    public set depth(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.depth`, value)
    }

    /**
     * Time offset for the noise effect
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * A random seed for the noise effect
     * @desc float in [-inf, inf], default 0.0
     */
    public set phase(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.phase`, value)
    }

    /**
     * Scaling (in time) of the noise
     * @desc float in [-inf, inf], default 0.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Amplitude of the noise - the amount that it modifies the underlying curve
     * @desc float in [-inf, inf], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
