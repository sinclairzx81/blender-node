import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NlaStripFCurves } from './NlaStripFCurves'
import { FCurve } from './FCurve'
import { FModifier } from './FModifier'
import { Action } from './Action'

/**
 * NlaStrip
 * 
 * https://docs.blender.org/api/current/bpy.types.NlaStrip.html
 */
export class NlaStrip {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * NLA Strip is active
     * @desc boolean, default False, (readonly)
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * F-Curves for controlling the strip’s influence and timing
     * @desc NlaStripFCurves bpy_prop_collection of FCurve, (readonly)
     */
    public get fcurves(): BlenderCollection<FCurve> & Indexable<FCurve> & NlaStripFCurves {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.fcurves`, NlaStripFCurves, FCurve)
    }

    /**
     * Modifiers affecting all the F-Curves in the referenced Action
     * @desc bpy_prop_collection of FModifier, (readonly)
     */
    public get modifiers(): BlenderCollection<FModifier> & Indexable<FModifier> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.modifiers`, FModifier)
    }

    /**
     * NLA Strips that this strip acts as a container for (if it is of type Meta)
     * @desc bpy_prop_collection of NlaStrip, (readonly)
     */
    public get strips(): BlenderCollection<NlaStrip> & Indexable<NlaStrip> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.strips`, NlaStrip)
    }

    /**
     * Type of NLA Strip
     * @desc enum in ['CLIP', 'TRANSITION', 'META', 'SOUND'], default 'CLIP', (readonly)
     */
    public get type(): 'CLIP' | 'TRANSITION' | 'META' | 'SOUND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Action referenced by this strip
     * @desc Action
     */
    public get action(): Action {
        return PythonInterop.getClass(this.interop, `${this.accessor}.action`, Action)
    }

    /**
     * Last frame from action to use
     * @desc float in [-inf, inf], default 0.0
     */
    public get action_frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.action_frame_end`)
    }

    /**
     * First frame from action to use
     * @desc float in [-inf, inf], default 0.0
     */
    public get action_frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.action_frame_start`)
    }

    /**
     * Number of frames at start of strip to fade in influence
     * @desc float in [-inf, inf], default 0.0
     */
    public get blend_in(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_in`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get blend_out(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_out`)
    }

    /**
     * Method used for combining strip’s result with accumulated result
     * @desc enum in ['REPLACE', 'COMBINE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public get blend_type(): 'REPLACE' | 'COMBINE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * Action to take for gaps past the strip extents
     * @desc enum in ['NOTHING', 'HOLD', 'HOLD_FORWARD'], default 'HOLD'
     */
    public get extrapolation(): 'NOTHING' | 'HOLD' | 'HOLD_FORWARD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.extrapolation`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Amount the strip contributes to the current result
     * @desc float in [0, 1], default 0.0
     */
    public get influence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence`)
    }

    /**
     * Disable NLA Strip evaluation
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
     * Number of times to repeat the action range
     * @desc float in [0.1, 1000], default 0.0
     */
    public get repeat(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.repeat`)
    }

    /**
     * Scaling factor for action
     * @desc float in [0.0001, 1000], default 0.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * NLA Strip is selected
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Frame of referenced Action to evaluate
     * @desc float in [-inf, inf], default 0.0
     */
    public get strip_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strip_time`)
    }

    /**
     * Influence setting is controlled by an F-Curve rather than automatically determined
     * @desc boolean, default False
     */
    public get use_animated_influence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_animated_influence`)
    }

    /**
     * Strip time is controlled by an F-Curve rather than automatically determined
     * @desc boolean, default False
     */
    public get use_animated_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_animated_time`)
    }

    /**
     * Cycle the animated time within the action start & end
     * @desc boolean, default False
     */
    public get use_animated_time_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_animated_time_cyclic`)
    }

    /**
     * Number of frames for Blending In/Out is automatically determined from overlapping strips
     * @desc boolean, default False
     */
    public get use_auto_blend(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_blend`)
    }

    /**
     * NLA Strip is played back in reverse order (only when timing is automatically determined)
     * @desc boolean, default False
     */
    public get use_reverse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_reverse`)
    }

    /**
     * Update range of frames referenced from action after tweaking strip and its keyframes
     * @desc boolean, default False
     */
    public get use_sync_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sync_length`)
    }

    /**
     * Action referenced by this strip
     * @desc Action
     */
    public set action(value: Action) {
        PythonInterop.setClass(this.interop, `${this.accessor}.action`, value)
    }

    /**
     * Last frame from action to use
     * @desc float in [-inf, inf], default 0.0
     */
    public set action_frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.action_frame_end`, value)
    }

    /**
     * First frame from action to use
     * @desc float in [-inf, inf], default 0.0
     */
    public set action_frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.action_frame_start`, value)
    }

    /**
     * Number of frames at start of strip to fade in influence
     * @desc float in [-inf, inf], default 0.0
     */
    public set blend_in(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_in`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set blend_out(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_out`, value)
    }

    /**
     * Method used for combining strip’s result with accumulated result
     * @desc enum in ['REPLACE', 'COMBINE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public set blend_type(value: 'REPLACE' | 'COMBINE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * Action to take for gaps past the strip extents
     * @desc enum in ['NOTHING', 'HOLD', 'HOLD_FORWARD'], default 'HOLD'
     */
    public set extrapolation(value: 'NOTHING' | 'HOLD' | 'HOLD_FORWARD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.extrapolation`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Amount the strip contributes to the current result
     * @desc float in [0, 1], default 0.0
     */
    public set influence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence`, value)
    }

    /**
     * Disable NLA Strip evaluation
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
     * Number of times to repeat the action range
     * @desc float in [0.1, 1000], default 0.0
     */
    public set repeat(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.repeat`, value)
    }

    /**
     * Scaling factor for action
     * @desc float in [0.0001, 1000], default 0.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * NLA Strip is selected
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Frame of referenced Action to evaluate
     * @desc float in [-inf, inf], default 0.0
     */
    public set strip_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strip_time`, value)
    }

    /**
     * Influence setting is controlled by an F-Curve rather than automatically determined
     * @desc boolean, default False
     */
    public set use_animated_influence(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_animated_influence`, value)
    }

    /**
     * Strip time is controlled by an F-Curve rather than automatically determined
     * @desc boolean, default False
     */
    public set use_animated_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_animated_time`, value)
    }

    /**
     * Cycle the animated time within the action start & end
     * @desc boolean, default False
     */
    public set use_animated_time_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_animated_time_cyclic`, value)
    }

    /**
     * Number of frames for Blending In/Out is automatically determined from overlapping strips
     * @desc boolean, default False
     */
    public set use_auto_blend(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_blend`, value)
    }

    /**
     * NLA Strip is played back in reverse order (only when timing is automatically determined)
     * @desc boolean, default False
     */
    public set use_reverse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_reverse`, value)
    }

    /**
     * Update range of frames referenced from action after tweaking strip and its keyframes
     * @desc boolean, default False
     */
    public set use_sync_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sync_length`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
