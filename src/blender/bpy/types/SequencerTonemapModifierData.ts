import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { SequenceModifier } from './SequenceModifier'

/**
 * SequencerTonemapModifierData
 * 
 * https://docs.blender.org/api/current/bpy.types.SequencerTonemapModifierData.html
 */
export class SequencerTonemapModifierData {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * If 0, global; if 1, based on pixel intensity
     * @desc float in [0, 1], default 0.0
     */
    public get adaptation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.adaptation`)
    }

    /**
     * Set to 0 to use estimate from input image
     * @desc float in [0, 1], default 0.0
     */
    public get contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contrast`)
    }

    /**
     * If 0, same for all channels; if 1, each independent
     * @desc float in [0, 1], default 0.0
     */
    public get correction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.correction`)
    }

    /**
     * If not used, set to 1
     * @desc float in [0.001, 3], default 0.0
     */
    public get gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gamma`)
    }

    /**
     * If less than zero, darkens image; otherwise, makes it brighter
     * @desc float in [-8, 8], default 0.0
     */
    public get intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.intensity`)
    }

    /**
     * The value the average luminance is mapped to
     * @desc float in [0, 1], default 0.0
     */
    public get key(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.key`)
    }

    /**
     * Normally always 1, but can be used as an extra control to alter the brightness curve
     * @desc float in [0.001, 10], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Tone mapping algorithm
     * @desc enum in ['RD_PHOTORECEPTOR', 'RH_SIMPLE'], default 'RH_SIMPLE'
     */
    public get tonemap_type(): 'RD_PHOTORECEPTOR' | 'RH_SIMPLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tonemap_type`)
    }

    /**
     * If 0, global; if 1, based on pixel intensity
     * @desc float in [0, 1], default 0.0
     */
    public set adaptation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.adaptation`, value)
    }

    /**
     * Set to 0 to use estimate from input image
     * @desc float in [0, 1], default 0.0
     */
    public set contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contrast`, value)
    }

    /**
     * If 0, same for all channels; if 1, each independent
     * @desc float in [0, 1], default 0.0
     */
    public set correction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.correction`, value)
    }

    /**
     * If not used, set to 1
     * @desc float in [0.001, 3], default 0.0
     */
    public set gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gamma`, value)
    }

    /**
     * If less than zero, darkens image; otherwise, makes it brighter
     * @desc float in [-8, 8], default 0.0
     */
    public set intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.intensity`, value)
    }

    /**
     * The value the average luminance is mapped to
     * @desc float in [0, 1], default 0.0
     */
    public set key(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.key`, value)
    }

    /**
     * Normally always 1, but can be used as an extra control to alter the brightness curve
     * @desc float in [0.001, 10], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Tone mapping algorithm
     * @desc enum in ['RD_PHOTORECEPTOR', 'RH_SIMPLE'], default 'RH_SIMPLE'
     */
    public set tonemap_type(value: 'RD_PHOTORECEPTOR' | 'RH_SIMPLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tonemap_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
