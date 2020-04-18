import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Mask } from './Mask'
import { Sequence } from './Sequence'

/**
 * SequenceModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceModifier.html
 */
export class SequenceModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['COLOR_BALANCE', 'CURVES', 'HUE_CORRECT', 'BRIGHT_CONTRAST', 'MASK', 'WHITE_BALANCE', 'TONEMAP'], default 'COLOR_BALANCE', (readonly)
     */
    public get type(): 'COLOR_BALANCE' | 'CURVES' | 'HUE_CORRECT' | 'BRIGHT_CONTRAST' | 'MASK' | 'WHITE_BALANCE' | 'TONEMAP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Mask ID used as mask input for the modifier
     * @desc Mask
     */
    public get input_mask_id(): Mask {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_mask_id`, Mask)
    }

    /**
     * Strip used as mask input for the modifier
     * @desc Sequence
     */
    public get input_mask_strip(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_mask_strip`, Sequence)
    }

    /**
     * Type of input data used for mask
     * @desc enum in ['STRIP', 'ID'], default 'STRIP'
     */
    public get input_mask_type(): 'STRIP' | 'ID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.input_mask_type`)
    }

    /**
     * Time to use for the Mask animation
     * @desc enum in ['RELATIVE', 'ABSOLUTE'], default 'RELATIVE'
     */
    public get mask_time(): 'RELATIVE' | 'ABSOLUTE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_time`)
    }

    /**
     * Mute this modifier
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Mute expanded settings for the modifier
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Mask ID used as mask input for the modifier
     * @desc Mask
     */
    public set input_mask_id(value: Mask) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_mask_id`, value)
    }

    /**
     * Strip used as mask input for the modifier
     * @desc Sequence
     */
    public set input_mask_strip(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_mask_strip`, value)
    }

    /**
     * Type of input data used for mask
     * @desc enum in ['STRIP', 'ID'], default 'STRIP'
     */
    public set input_mask_type(value: 'STRIP' | 'ID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.input_mask_type`, value)
    }

    /**
     * Time to use for the Mask animation
     * @desc enum in ['RELATIVE', 'ABSOLUTE'], default 'RELATIVE'
     */
    public set mask_time(value: 'RELATIVE' | 'ABSOLUTE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_time`, value)
    }

    /**
     * Mute this modifier
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Mute expanded settings for the modifier
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
