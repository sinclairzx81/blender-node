import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { AnimDataDrivers } from './AnimDataDrivers'
import { FCurve } from './FCurve'
import { NlaTracks } from './NlaTracks'
import { NlaTrack } from './NlaTrack'
import { Action } from './Action'

/**
 * AnimData
 * 
 * https://docs.blender.org/api/current/bpy.types.AnimData.html
 */
export class AnimData {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The Drivers/Expressions for this data-block
     * @desc AnimDataDrivers bpy_prop_collection of FCurve, (readonly)
     */
    public get drivers(): BlenderCollection<FCurve> & Indexable<FCurve> & AnimDataDrivers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.drivers`, AnimDataDrivers, FCurve)
    }

    /**
     * NLA Tracks (i.e. Animation Layers)
     * @desc NlaTracks bpy_prop_collection of NlaTrack, (readonly)
     */
    public get nla_tracks(): BlenderCollection<NlaTrack> & Indexable<NlaTrack> & NlaTracks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.nla_tracks`, NlaTracks, NlaTrack)
    }

    /**
     * Active Action for this data-block
     * @desc Action
     */
    public get action(): Action {
        return PythonInterop.getClass(this.interop, `${this.accessor}.action`, Action)
    }

    /**
     * Method used for combining Active Action’s result with result of NLA stack
     * @desc enum in ['REPLACE', 'COMBINE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public get action_blend_type(): 'REPLACE' | 'COMBINE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.action_blend_type`)
    }

    /**
     * Action to take for gaps past the Active Action’s range (when evaluating with NLA)
     * @desc enum in ['NOTHING', 'HOLD', 'HOLD_FORWARD'], default 'HOLD'
     */
    public get action_extrapolation(): 'NOTHING' | 'HOLD' | 'HOLD_FORWARD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.action_extrapolation`)
    }

    /**
     * Amount the Active Action contributes to the result of the NLA stack
     * @desc float in [0, 1], default 1.0
     */
    public get action_influence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.action_influence`)
    }

    /**
     * NLA stack is evaluated when evaluating this block
     * @desc boolean, default False
     */
    public get use_nla(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nla`)
    }

    /**
     * Whether to enable or disable tweak mode in NLA
     * @desc boolean, default False
     */
    public get use_tweak_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_tweak_mode`)
    }

    /**
     * Active Action for this data-block
     * @desc Action
     */
    public set action(value: Action) {
        PythonInterop.setClass(this.interop, `${this.accessor}.action`, value)
    }

    /**
     * Method used for combining Active Action’s result with result of NLA stack
     * @desc enum in ['REPLACE', 'COMBINE', 'ADD', 'SUBTRACT', 'MULTIPLY'], default 'REPLACE'
     */
    public set action_blend_type(value: 'REPLACE' | 'COMBINE' | 'ADD' | 'SUBTRACT' | 'MULTIPLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.action_blend_type`, value)
    }

    /**
     * Action to take for gaps past the Active Action’s range (when evaluating with NLA)
     * @desc enum in ['NOTHING', 'HOLD', 'HOLD_FORWARD'], default 'HOLD'
     */
    public set action_extrapolation(value: 'NOTHING' | 'HOLD' | 'HOLD_FORWARD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.action_extrapolation`, value)
    }

    /**
     * Amount the Active Action contributes to the result of the NLA stack
     * @desc float in [0, 1], default 1.0
     */
    public set action_influence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.action_influence`, value)
    }

    /**
     * NLA stack is evaluated when evaluating this block
     * @desc boolean, default False
     */
    public set use_nla(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nla`, value)
    }

    /**
     * Whether to enable or disable tweak mode in NLA
     * @desc boolean, default False
     */
    public set use_tweak_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_tweak_mode`, value)
    }

    /**
     * Convert a time value from the local time of the tweaked strip to scene time, exactly as done by built-in key editing tools. Returns the input time unchanged if not tweaking.
     * @desc float in [-1.04857e+06, 1.04857e+06]
     */
    public nla_tweak_strip_time_to_scene(options: { frame?: number, invert?: boolean }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.nla_tweak_strip_time_to_scene`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
