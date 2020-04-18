import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ACTION_OT_duplicate } from './ACTION_OT_duplicate'
import { TRANSFORM_OT_transform } from './TRANSFORM_OT_transform'

/**
 * ActionOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.action.html
 */
export class ActionOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Simplify F-Curves by removing closely spaced keyframes
     * @desc void
     */
    public clean(options: { threshold?: number, channels?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clean`, options)
    }

    /**
     * Select keyframes by clicking on them
     * @desc void
     */
    public clickselect(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, deselect_all?: boolean, column?: boolean, channel?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clickselect`, options)
    }

    /**
     * Copy selected keyframes to the copy/paste buffer
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Remove all selected keyframes
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Make a copy of all selected keyframes
     * @desc void
     */
    public duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, {})
    }

    /**
     * Make a copy of all selected keyframes and move them
     * @desc void
     */
    public duplicate_move(options: { ACTION_OT_duplicate?: ACTION_OT_duplicate, TRANSFORM_OT_transform?: TRANSFORM_OT_transform }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Set extrapolation mode for selected F-Curves
     * @desc void
     */
    public extrapolation_type(options: { type?: 'CONSTANT' | 'LINEAR' | 'MAKE_CYCLIC' | 'CLEAR_CYCLIC' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrapolation_type`, options)
    }

    /**
     * Set the current frame to the average frame value of selected keyframes
     * @desc void
     */
    public frame_jump(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_jump`, {})
    }

    /**
     * Set type of handle for selected keyframes
     * @desc void
     */
    public handle_type(options: { type?: 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.handle_type`, options)
    }

    /**
     * Set interpolation mode for the F-Curve segments starting from the selected keyframes
     * @desc void
     */
    public interpolation_type(options: { type?: 'CONSTANT' | 'LINEAR' | 'BEZIER' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.interpolation_type`, options)
    }

    /**
     * Insert keyframes for the specified channels
     * @desc void
     */
    public keyframe_insert(options: { type?: 'ALL' | 'SEL' | 'GROUP' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert`, options)
    }

    /**
     * Set type of keyframe for the selected keyframes
     * @desc void
     */
    public keyframe_type(options: { type?: 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_type`, options)
    }

    /**
     * Switch to editing action in animation layer above the current action in the NLA Stack
     * @desc void
     */
    public layer_next(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_next`, {})
    }

    /**
     * Switch to editing action in animation layer below the current action in the NLA Stack
     * @desc void
     */
    public layer_prev(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_prev`, {})
    }

    /**
     * Move selected scene markers to the active Action as local ‘pose’ markers
     * @desc void
     */
    public markers_make_local(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.markers_make_local`, {})
    }

    /**
     * Flip selected keyframes over the selected mirror line
     * @desc void
     */
    public mirror(options: { type?: 'CFRA' | 'XAXIS' | 'MARKER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mirror`, options)
    }

    /**
     * Create new action
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Paste keyframes from copy/paste buffer for the selected channels, starting on the current frame
     * @desc void
     */
    public paste(options: { offset?: 'START' | 'END' | 'RELATIVE' | 'NONE', merge?: 'MIX' | 'OVER_ALL' | 'OVER_RANGE' | 'OVER_RANGE_ALL', flipped?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, options)
    }

    /**
     * Set Preview Range based on extents of selected Keyframes
     * @desc void
     */
    public previewrange_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previewrange_set`, {})
    }

    /**
     * Push action down on to the NLA stack as a new strip
     * @desc void
     */
    public push_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.push_down`, {})
    }

    /**
     * Add keyframes on every frame between the selected keyframes
     * @desc void
     */
    public sample(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample`, {})
    }

    /**
     * Toggle selection of all keyframes
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select all keyframes within the specified region
     * @desc void
     */
    public select_box(options: { axis_range?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB', tweak?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select keyframe points using circle selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select all keyframes on the specified frame(s)
     * @desc void
     */
    public select_column(options: { mode?: 'KEYS' | 'CFRA' | 'MARKERS_COLUMN' | 'MARKERS_BETWEEN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_column`, options)
    }

    /**
     * Select keyframe points using lasso selection
     * @desc void
     */
    public select_lasso(options: { path?: string, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Select keyframes to the left or the right of the current frame
     * @desc void
     */
    public select_leftright(options: { mode?: 'CHECK' | 'LEFT' | 'RIGHT', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_leftright`, options)
    }

    /**
     * Deselect keyframes on ends of selection islands
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select keyframes occurring in the same F-Curves as selected ones
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * Select keyframes beside already selected ones
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Snap selected keyframes to the times specified
     * @desc void
     */
    public snap(options: { type?: 'CFRA' | 'NEAREST_FRAME' | 'NEAREST_SECOND' | 'NEAREST_MARKER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap`, options)
    }

    /**
     * Store this action in the NLA stack as a non-contributing strip for later use
     * @desc void
     */
    public stash(options: { create_new?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stash`, options)
    }

    /**
     * Store this action in the NLA stack as a non-contributing strip for later use, and create a new action
     * @desc void
     */
    public stash_and_create(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stash_and_create`, {})
    }

    /**
     * Unlink this action from the active action slot (and/or exit Tweak Mode)
     * @desc void
     */
    public unlink(options: { force_delete?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, options)
    }

    /**
     * Reset viewable area to show full keyframe range
     * @desc void
     */
    public view_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, {})
    }

    /**
     * Reset viewable area to show range around current frame
     * @desc void
     */
    public view_frame(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_frame`, {})
    }

    /**
     * Reset viewable area to show selected keyframes range
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
