import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SequenceModifiers } from './SequenceModifiers'
import { SequenceModifier } from './SequenceModifier'
import { SequenceElement } from './SequenceElement'

/**
 * Sequence
 * 
 * https://docs.blender.org/api/current/bpy.types.Sequence.html
 */
export class Sequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The length of the contents of this strip before the handles are applied
     * @desc int in [1, 1048574], default 0, (readonly)
     */
    public get frame_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_duration`)
    }

    /**
     * Modifiers affecting this strip
     * @desc SequenceModifiers bpy_prop_collection of SequenceModifier, (readonly)
     */
    public get modifiers(): BlenderCollection<SequenceModifier> & Indexable<SequenceModifier> & SequenceModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.modifiers`, SequenceModifiers, SequenceModifier)
    }

    /**
     * 
     * @desc enum in ['IMAGE', 'META', 'SCENE', 'MOVIE', 'MOVIECLIP', 'MASK', 'SOUND', 'CROSS', 'ADD', 'SUBTRACT', 'ALPHA_OVER', 'ALPHA_UNDER', 'GAMMA_CROSS', 'MULTIPLY', 'OVER_DROP', 'WIPE', 'GLOW', 'TRANSFORM', 'COLOR', 'SPEED', 'MULTICAM', 'ADJUSTMENT', 'GAUSSIAN_BLUR', 'TEXT', 'COLORMIX'], default 'IMAGE', (readonly)
     */
    public get type(): 'IMAGE' | 'META' | 'SCENE' | 'MOVIE' | 'MOVIECLIP' | 'MASK' | 'SOUND' | 'CROSS' | 'ADD' | 'SUBTRACT' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'MULTIPLY' | 'OVER_DROP' | 'WIPE' | 'GLOW' | 'TRANSFORM' | 'COLOR' | 'SPEED' | 'MULTICAM' | 'ADJUSTMENT' | 'GAUSSIAN_BLUR' | 'TEXT' | 'COLORMIX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Percentage of how much the strip’s colors affect other strips
     * @desc float in [0, 1], default 0.0
     */
    public get blend_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_alpha`)
    }

    /**
     * Method for controlling how the strip combines with other strips
     * @desc enum in ['REPLACE', 'CROSS', 'DARKEN', 'MULTIPLY', 'BURN', 'LINEAR_BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'HARD_LIGHT', 'VIVID_LIGHT', 'LINEAR_LIGHT', 'PIN_LIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUBTRACT', 'HUE', 'SATURATION', 'COLOR', 'VALUE', 'ALPHA_OVER', 'ALPHA_UNDER', 'GAMMA_CROSS', 'OVER_DROP'], default 'REPLACE'
     */
    public get blend_type(): 'REPLACE' | 'CROSS' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LINEAR_BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'VIVID_LIGHT' | 'LINEAR_LIGHT' | 'PIN_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUBTRACT' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'OVER_DROP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * Y position of the sequence strip
     * @desc int in [1, 32], default 0
     */
    public get channel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.channel`)
    }

    /**
     * Custom fade value
     * @desc float in [0, 1], default 0.0
     */
    public get effect_fader(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.effect_fader`)
    }

    /**
     * The length of the contents of this strip after the handles are applied
     * @desc int in [1, 1048574], default 0
     */
    public get frame_final_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_final_duration`)
    }

    /**
     * End frame displayed in the sequence editor after offsets are applied
     * @desc int in [-inf, inf], default 0
     */
    public get frame_final_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_final_end`)
    }

    /**
     * Start frame displayed in the sequence editor after offsets are applied, setting this is equivalent to moving the handle, not the actual start frame
     * @desc int in [-inf, inf], default 0
     */
    public get frame_final_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_final_start`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get frame_offset_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_offset_end`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get frame_offset_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_offset_start`)
    }

    /**
     * X position where the strip begins
     * @desc int in [-inf, inf], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * 
     * @desc int in [0, 1048574], default 0
     */
    public get frame_still_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_still_end`)
    }

    /**
     * 
     * @desc int in [0, 1048574], default 0
     */
    public get frame_still_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_still_start`)
    }

    /**
     * Lock strip so that it cannot be transformed
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Disable strip so that it cannot be viewed in the output
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
     * Override global cache settings
     * @desc boolean, default False
     */
    public get override_cache_settings(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.override_cache_settings`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select_left_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_left_handle`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select_right_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_right_handle`)
    }

    /**
     * Multiply the current speed of the sequence with this number or remap current frame to this frame
     * @desc float in [-inf, inf], default 0.0
     */
    public get speed_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.speed_factor`)
    }

    /**
     * Cache intermediate composited images, for faster tweaking of stacked strips at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_composite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_composite`)
    }

    /**
     * Cache preprocessed images, for faster tweaking of effects at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_preprocessed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_preprocessed`)
    }

    /**
     * Cache raw images read from disk, for faster tweaking of strip parameters at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_raw(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_raw`)
    }

    /**
     * Fade effect using the built-in default (usually make transition as long as effect strip)
     * @desc boolean, default False
     */
    public get use_default_fade(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_fade`)
    }

    /**
     * Calculate modifiers in linear space instead of sequencer’s space
     * @desc boolean, default False
     */
    public get use_linear_modifiers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_linear_modifiers`)
    }

    /**
     * Percentage of how much the strip’s colors affect other strips
     * @desc float in [0, 1], default 0.0
     */
    public set blend_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_alpha`, value)
    }

    /**
     * Method for controlling how the strip combines with other strips
     * @desc enum in ['REPLACE', 'CROSS', 'DARKEN', 'MULTIPLY', 'BURN', 'LINEAR_BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'HARD_LIGHT', 'VIVID_LIGHT', 'LINEAR_LIGHT', 'PIN_LIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUBTRACT', 'HUE', 'SATURATION', 'COLOR', 'VALUE', 'ALPHA_OVER', 'ALPHA_UNDER', 'GAMMA_CROSS', 'OVER_DROP'], default 'REPLACE'
     */
    public set blend_type(value: 'REPLACE' | 'CROSS' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LINEAR_BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'VIVID_LIGHT' | 'LINEAR_LIGHT' | 'PIN_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUBTRACT' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'OVER_DROP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * Y position of the sequence strip
     * @desc int in [1, 32], default 0
     */
    public set channel(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.channel`, value)
    }

    /**
     * Custom fade value
     * @desc float in [0, 1], default 0.0
     */
    public set effect_fader(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.effect_fader`, value)
    }

    /**
     * The length of the contents of this strip after the handles are applied
     * @desc int in [1, 1048574], default 0
     */
    public set frame_final_duration(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_final_duration`, value)
    }

    /**
     * End frame displayed in the sequence editor after offsets are applied
     * @desc int in [-inf, inf], default 0
     */
    public set frame_final_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_final_end`, value)
    }

    /**
     * Start frame displayed in the sequence editor after offsets are applied, setting this is equivalent to moving the handle, not the actual start frame
     * @desc int in [-inf, inf], default 0
     */
    public set frame_final_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_final_start`, value)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set frame_offset_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_offset_end`, value)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set frame_offset_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_offset_start`, value)
    }

    /**
     * X position where the strip begins
     * @desc int in [-inf, inf], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * 
     * @desc int in [0, 1048574], default 0
     */
    public set frame_still_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_still_end`, value)
    }

    /**
     * 
     * @desc int in [0, 1048574], default 0
     */
    public set frame_still_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_still_start`, value)
    }

    /**
     * Lock strip so that it cannot be transformed
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Disable strip so that it cannot be viewed in the output
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
     * Override global cache settings
     * @desc boolean, default False
     */
    public set override_cache_settings(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.override_cache_settings`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select_left_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_left_handle`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select_right_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_right_handle`, value)
    }

    /**
     * Multiply the current speed of the sequence with this number or remap current frame to this frame
     * @desc float in [-inf, inf], default 0.0
     */
    public set speed_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.speed_factor`, value)
    }

    /**
     * Cache intermediate composited images, for faster tweaking of stacked strips at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_composite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_composite`, value)
    }

    /**
     * Cache preprocessed images, for faster tweaking of effects at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_preprocessed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_preprocessed`, value)
    }

    /**
     * Cache raw images read from disk, for faster tweaking of strip parameters at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_raw(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_raw`, value)
    }

    /**
     * Fade effect using the built-in default (usually make transition as long as effect strip)
     * @desc boolean, default False
     */
    public set use_default_fade(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_fade`, value)
    }

    /**
     * Calculate modifiers in linear space instead of sequencer’s space
     * @desc boolean, default False
     */
    public set use_linear_modifiers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_linear_modifiers`, value)
    }

    /**
     * Update the strip dimensions
     * @desc void
     */
    public update(options: { data?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, options)
    }

    /**
     * Return the strip element from a given frame or None
     * @desc SequenceElement
     */
    public strip_elem_from_frame(options: { frame?: number }): SequenceElement {
        return PythonInterop.callClass(this.interop, `${this.accessor}.strip_elem_from_frame`, options, SequenceElement)
    }

    /**
     * swap
     * @desc void
     */
    public swap(options: { other?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.swap`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
