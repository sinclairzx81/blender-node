import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeSequenceEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeSequenceEditor.html
 */
export class ThemeSequenceEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get audio_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.audio_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get draw_action(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.draw_action`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get effect_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.effect_strip`, 'number', 3)
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
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get image_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.image_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get keyframe(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.keyframe`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get meta_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.meta_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get metadatabg(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.metadatabg`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get metadatatext(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.metadatatext`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get movie_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.movie_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get movieclip_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.movieclip_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get preview_back(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_back`, 'number', 3)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_range(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_range`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get scene_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scene_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get text_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text_strip`, 'number', 3)
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
    public get transition_strip(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.transition_strip`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get window_sliders(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.window_sliders`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set audio_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.audio_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set draw_action(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.draw_action`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set effect_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.effect_strip`, value)
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
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set image_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.image_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set keyframe(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.keyframe`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set meta_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.meta_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set metadatabg(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.metadatabg`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set metadatatext(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.metadatatext`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set movie_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.movie_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set movieclip_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.movieclip_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set preview_back(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_back`, value)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_range(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_range`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set scene_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scene_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set text_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text_strip`, value)
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
    public set transition_strip(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.transition_strip`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set window_sliders(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.window_sliders`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
