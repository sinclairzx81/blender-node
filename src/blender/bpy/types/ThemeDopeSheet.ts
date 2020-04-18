import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'
import { ThemeSpaceListGeneric } from './ThemeSpaceListGeneric'

/**
 * ThemeDopeSheet
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeDopeSheet.html
 */
export class ThemeDopeSheet {

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
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get active_channels_group(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_channels_group`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get channel_group(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channel_group`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get channels(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channels`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get channels_selected(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channels_selected`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get dopesheet_channel(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dopesheet_channel`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get dopesheet_subchannel(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dopesheet_subchannel`, 'number', 4)
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
     * Color of lines showing non-bezier interpolation modes
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get interpolation_line(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.interpolation_line`, 'number', 4)
    }

    /**
     * Color of Keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe`, 'number', 3)
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
     * Color of breakdown keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_breakdown(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_breakdown`, 'number', 3)
    }

    /**
     * Color of selected breakdown keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_breakdown_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_breakdown_selected`, 'number', 3)
    }

    /**
     * Color of extreme keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_extreme(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_extreme`, 'number', 3)
    }

    /**
     * Color of selected extreme keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_extreme_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_extreme_selected`, 'number', 3)
    }

    /**
     * Color of jitter keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_jitter(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_jitter`, 'number', 3)
    }

    /**
     * Color of selected jitter keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_jitter_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_jitter_selected`, 'number', 3)
    }

    /**
     * Color of moving hold keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_movehold(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_movehold`, 'number', 3)
    }

    /**
     * Color of selected moving hold keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_movehold_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_movehold_selected`, 'number', 3)
    }

    /**
     * Scale factor for adjusting the height of keyframes
     * @desc float in [0.8, 5], default 1.0
     */
    public get keyframe_scale_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.keyframe_scale_factor`)
    }

    /**
     * Color of selected keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe_selected`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get long_key(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.long_key`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get long_key_selected(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.long_key_selected`, 'number', 4)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_range(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_range`, 'number', 4)
    }

    /**
     * Color of summary channel
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get summary(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.summary`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get time_scrub_background(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.time_scrub_background`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get value_sliders(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.value_sliders`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get view_sliders(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_sliders`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set active_channels_group(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_channels_group`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set channel_group(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channel_group`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set channels(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channels`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set channels_selected(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channels_selected`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set dopesheet_channel(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dopesheet_channel`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set dopesheet_subchannel(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dopesheet_subchannel`, value)
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
     * Color of lines showing non-bezier interpolation modes
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set interpolation_line(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.interpolation_line`, value)
    }

    /**
     * Color of Keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe`, value)
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
     * Color of breakdown keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_breakdown(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_breakdown`, value)
    }

    /**
     * Color of selected breakdown keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_breakdown_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_breakdown_selected`, value)
    }

    /**
     * Color of extreme keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_extreme(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_extreme`, value)
    }

    /**
     * Color of selected extreme keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_extreme_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_extreme_selected`, value)
    }

    /**
     * Color of jitter keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_jitter(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_jitter`, value)
    }

    /**
     * Color of selected jitter keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_jitter_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_jitter_selected`, value)
    }

    /**
     * Color of moving hold keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_movehold(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_movehold`, value)
    }

    /**
     * Color of selected moving hold keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_movehold_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_movehold_selected`, value)
    }

    /**
     * Scale factor for adjusting the height of keyframes
     * @desc float in [0.8, 5], default 1.0
     */
    public set keyframe_scale_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.keyframe_scale_factor`, value)
    }

    /**
     * Color of selected keyframe
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe_selected`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set long_key(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.long_key`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set long_key_selected(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.long_key_selected`, value)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_range(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_range`, value)
    }

    /**
     * Color of summary channel
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set summary(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.summary`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set time_scrub_background(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.time_scrub_background`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set value_sliders(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.value_sliders`, value)
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
