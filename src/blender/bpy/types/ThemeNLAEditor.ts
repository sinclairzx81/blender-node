import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'
import { ThemeSpaceListGeneric } from './ThemeSpaceListGeneric'

/**
 * ThemeNLAEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeNLAEditor.html
 */
export class ThemeNLAEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    /**
     * Settings for space list
     * @desc ThemeSpaceListGeneric, (readonly, never None)
     */
    public get space_list(): ThemeSpaceListGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space_list`, ThemeSpaceListGeneric)
    }

    /**
     * Animation data-block has active action
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get active_action(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_action`, 'number', 4)
    }

    /**
     * Animation data-block doesn’t have active action
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get active_action_unset(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_action_unset`, 'number', 4)
    }

    /**
     * Nonlinear Animation Channel
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get dopesheet_channel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dopesheet_channel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get frame_current(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.frame_current`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get grid(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.grid`, 'number', 3)
    }

    /**
     * Color of keyframe border
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get keyframe_border(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_border`, 'number', 4)
    }

    /**
     * Color of selected keyframe border
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get keyframe_border_selected(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_border_selected`, 'number', 4)
    }

    /**
     * Meta Strip - Unselected (for grouping related strips)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get meta_strips(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.meta_strips`, 'number', 3)
    }

    /**
     * Meta Strip - Selected (for grouping related strips)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get meta_strips_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.meta_strips_selected`, 'number', 3)
    }

    /**
     * Nonlinear Animation Track
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get nla_track(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.nla_track`, 'number', 3)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_range(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_range`, 'number', 4)
    }

    /**
     * Sound Strip - Unselected (for timing speaker sounds)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get sound_strips(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.sound_strips`, 'number', 3)
    }

    /**
     * Sound Strip - Selected (for timing speaker sounds)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get sound_strips_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.sound_strips_selected`, 'number', 3)
    }

    /**
     * Action-Clip Strip - Unselected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get strips(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.strips`, 'number', 3)
    }

    /**
     * Action-Clip Strip - Selected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get strips_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.strips_selected`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get time_scrub_background(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.time_scrub_background`, 'number', 4)
    }

    /**
     * Transition Strip - Unselected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get transition_strips(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.transition_strips`, 'number', 3)
    }

    /**
     * Transition Strip - Selected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get transition_strips_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.transition_strips_selected`, 'number', 3)
    }

    /**
     * Color for strip/action being ‘tweaked’ or edited
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tweak(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tweak`, 'number', 3)
    }

    /**
     * Warning/error indicator color for strips referencing the strip being tweaked
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tweak_duplicate(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tweak_duplicate`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get view_sliders(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_sliders`, 'number', 3)
    }

    /**
     * Animation data-block has active action
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set active_action(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_action`, value)
    }

    /**
     * Animation data-block doesn’t have active action
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set active_action_unset(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_action_unset`, value)
    }

    /**
     * Nonlinear Animation Channel
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set dopesheet_channel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dopesheet_channel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set frame_current(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.frame_current`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set grid(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.grid`, value)
    }

    /**
     * Color of keyframe border
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set keyframe_border(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_border`, value)
    }

    /**
     * Color of selected keyframe border
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set keyframe_border_selected(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_border_selected`, value)
    }

    /**
     * Meta Strip - Unselected (for grouping related strips)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set meta_strips(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.meta_strips`, value)
    }

    /**
     * Meta Strip - Selected (for grouping related strips)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set meta_strips_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.meta_strips_selected`, value)
    }

    /**
     * Nonlinear Animation Track
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set nla_track(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.nla_track`, value)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_range(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_range`, value)
    }

    /**
     * Sound Strip - Unselected (for timing speaker sounds)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set sound_strips(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.sound_strips`, value)
    }

    /**
     * Sound Strip - Selected (for timing speaker sounds)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set sound_strips_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.sound_strips_selected`, value)
    }

    /**
     * Action-Clip Strip - Unselected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set strips(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.strips`, value)
    }

    /**
     * Action-Clip Strip - Selected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set strips_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.strips_selected`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set time_scrub_background(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.time_scrub_background`, value)
    }

    /**
     * Transition Strip - Unselected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set transition_strips(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.transition_strips`, value)
    }

    /**
     * Transition Strip - Selected
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set transition_strips_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.transition_strips_selected`, value)
    }

    /**
     * Color for strip/action being ‘tweaked’ or edited
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tweak(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tweak`, value)
    }

    /**
     * Warning/error indicator color for strips referencing the strip being tweaked
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tweak_duplicate(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tweak_duplicate`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set view_sliders(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.view_sliders`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
