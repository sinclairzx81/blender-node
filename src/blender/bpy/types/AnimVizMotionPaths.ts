import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * AnimVizMotionPaths
 * 
 * https://docs.blender.org/api/current/bpy.types.AnimVizMotionPaths.html
 */
export class AnimVizMotionPaths {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Are there any bone paths that will need updating (read-only)
     * @desc boolean, default False, (readonly)
     */
    public get has_motion_paths(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_motion_paths`)
    }

    /**
     * When calculating Bone Paths, use Head or Tips
     * @desc enum in ['HEADS', 'TAILS'], default 'TAILS'
     */
    public get bake_location(): 'HEADS' | 'TAILS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bake_location`)
    }

    /**
     * Number of frames to show after the current frame (only for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [1, 524287], default 0
     */
    public get frame_after(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_after`)
    }

    /**
     * Number of frames to show before the current frame (only for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [1, 524287], default 0
     */
    public get frame_before(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_before`)
    }

    /**
     * End frame of range of paths to display/calculate (not for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [-inf, inf], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Starting frame of range of paths to display/calculate (not for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [-inf, inf], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Number of frames between paths shown (not for ‘On Keyframes’ Onion-skinning method)
     * @desc int in [1, 100], default 0
     */
    public get frame_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_step`)
    }

    /**
     * Show frame numbers on Motion Paths
     * @desc boolean, default False
     */
    public get show_frame_numbers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_frame_numbers`)
    }

    /**
     * For bone motion paths, search whole Action for keyframes instead of in group with matching name only (is slower)
     * @desc boolean, default False
     */
    public get show_keyframe_action_all(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_keyframe_action_all`)
    }

    /**
     * Emphasize position of keyframes on Motion Paths
     * @desc boolean, default False
     */
    public get show_keyframe_highlight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_keyframe_highlight`)
    }

    /**
     * Show frame numbers of Keyframes on Motion Paths
     * @desc boolean, default False
     */
    public get show_keyframe_numbers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_keyframe_numbers`)
    }

    /**
     * Type of range to show for Motion Paths
     * @desc enum in ['CURRENT_FRAME', 'RANGE'], default 'RANGE'
     */
    public get type(): 'CURRENT_FRAME' | 'RANGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * When calculating Bone Paths, use Head or Tips
     * @desc enum in ['HEADS', 'TAILS'], default 'TAILS'
     */
    public set bake_location(value: 'HEADS' | 'TAILS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bake_location`, value)
    }

    /**
     * Number of frames to show after the current frame (only for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [1, 524287], default 0
     */
    public set frame_after(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_after`, value)
    }

    /**
     * Number of frames to show before the current frame (only for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [1, 524287], default 0
     */
    public set frame_before(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_before`, value)
    }

    /**
     * End frame of range of paths to display/calculate (not for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [-inf, inf], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Starting frame of range of paths to display/calculate (not for ‘Around Current Frame’ Onion-skinning method)
     * @desc int in [-inf, inf], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Number of frames between paths shown (not for ‘On Keyframes’ Onion-skinning method)
     * @desc int in [1, 100], default 0
     */
    public set frame_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_step`, value)
    }

    /**
     * Show frame numbers on Motion Paths
     * @desc boolean, default False
     */
    public set show_frame_numbers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_frame_numbers`, value)
    }

    /**
     * For bone motion paths, search whole Action for keyframes instead of in group with matching name only (is slower)
     * @desc boolean, default False
     */
    public set show_keyframe_action_all(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_keyframe_action_all`, value)
    }

    /**
     * Emphasize position of keyframes on Motion Paths
     * @desc boolean, default False
     */
    public set show_keyframe_highlight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_keyframe_highlight`, value)
    }

    /**
     * Show frame numbers of Keyframes on Motion Paths
     * @desc boolean, default False
     */
    public set show_keyframe_numbers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_keyframe_numbers`, value)
    }

    /**
     * Type of range to show for Motion Paths
     * @desc enum in ['CURRENT_FRAME', 'RANGE'], default 'RANGE'
     */
    public set type(value: 'CURRENT_FRAME' | 'RANGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
