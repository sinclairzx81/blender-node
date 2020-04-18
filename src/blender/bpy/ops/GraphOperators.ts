import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GRAPH_OT_duplicate } from './GRAPH_OT_duplicate'
import { TRANSFORM_OT_transform } from './TRANSFORM_OT_transform'

/**
 * GraphOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.graph.html
 */
export class GraphOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bake selected F-Curves to a set of sampled points defining a similar curve
     * @desc void
     */
    public bake(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, {})
    }

    /**
     * Simplify F-Curves by removing closely spaced keyframes
     * @desc void
     */
    public clean(options: { threshold?: number, channels?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clean`, options)
    }

    /**
     * Insert new keyframe at the cursor position for the active F-Curve
     * @desc void
     */
    public click_insert(options: { frame?: number, value?: number, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.click_insert`, options)
    }

    /**
     * Select keyframes by clicking on them
     * @desc void
     */
    public clickselect(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, deselect_all?: boolean, column?: boolean, curves?: boolean }): void {
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
     * Interactively set the current frame and value cursor
     * @desc void
     */
    public cursor_set(options: { frame?: number, value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * Decimate F-Curves by removing keyframes that influence the curve shape the least
     * @desc void
     */
    public decimate(options: { mode?: 'RATIO' | 'ERROR', remove_ratio?: number, remove_error_margin?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.decimate`, options)
    }

    /**
     * Remove all selected keyframes
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Delete all visible drivers considered invalid
     * @desc void
     */
    public driver_delete_invalid(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_delete_invalid`, {})
    }

    /**
     * Copy the driver variables of the active driver
     * @desc void
     */
    public driver_variables_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_variables_copy`, {})
    }

    /**
     * Add copied driver variables to the active driver
     * @desc void
     */
    public driver_variables_paste(options: { replace?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_variables_paste`, options)
    }

    /**
     * Make a copy of all selected keyframes
     * @desc void
     */
    public duplicate(options: { mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Make a copy of all selected keyframes and move them
     * @desc void
     */
    public duplicate_move(options: { GRAPH_OT_duplicate?: GRAPH_OT_duplicate, TRANSFORM_OT_transform?: TRANSFORM_OT_transform }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Set easing type for the F-Curve segments starting from the selected keyframes
     * @desc void
     */
    public easing_type(options: { type?: 'AUTO' | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_OUT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.easing_type`, options)
    }

    /**
     * Fix large jumps and flips in the selected Euler Rotation F-Curves arising from rotation values being clipped when baking physics
     * @desc void
     */
    public euler_filter(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.euler_filter`, {})
    }

    /**
     * Set extrapolation mode for selected F-Curves
     * @desc void
     */
    public extrapolation_type(options: { type?: 'CONSTANT' | 'LINEAR' | 'MAKE_CYCLIC' | 'CLEAR_CYCLIC' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrapolation_type`, options)
    }

    /**
     * Add F-Modifier to the active/selected F-Curves
     * @desc void
     */
    public fmodifier_add(options: { type?: 'NULL' | 'GENERATOR' | 'FNGENERATOR' | 'ENVELOPE' | 'CYCLES' | 'NOISE' | 'LIMITS' | 'STEPPED', only_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_add`, options)
    }

    /**
     * Copy the F-Modifier(s) of the active F-Curve
     * @desc void
     */
    public fmodifier_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_copy`, {})
    }

    /**
     * Add copied F-Modifiers to the selected F-Curves
     * @desc void
     */
    public fmodifier_paste(options: { only_active?: boolean, replace?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_paste`, options)
    }

    /**
     * Place the cursor on the midpoint of selected keyframes
     * @desc void
     */
    public frame_jump(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_jump`, {})
    }

    /**
     * Clear F-Curve snapshots (Ghosts) for active Graph Editor
     * @desc void
     */
    public ghost_curves_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ghost_curves_clear`, {})
    }

    /**
     * Create snapshot (Ghosts) of selected F-Curves as background aid for active Graph Editor
     * @desc void
     */
    public ghost_curves_create(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ghost_curves_create`, {})
    }

    /**
     * Set type of handle for selected keyframes
     * @desc void
     */
    public handle_type(options: { type?: 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.handle_type`, options)
    }

    /**
     * Hide selected curves from Graph Editor view
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
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
    public keyframe_insert(options: { type?: 'ALL' | 'SEL' | 'CURSOR_ACTIVE' | 'CURSOR_SEL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert`, options)
    }

    /**
     * Flip selected keyframes over the selected mirror line
     * @desc void
     */
    public mirror(options: { type?: 'CFRA' | 'VALUE' | 'YAXIS' | 'XAXIS' | 'MARKER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mirror`, options)
    }

    /**
     * Paste keyframes from copy/paste buffer for the selected channels, starting on the current frame
     * @desc void
     */
    public paste(options: { offset?: 'START' | 'END' | 'RELATIVE' | 'NONE', merge?: 'MIX' | 'OVER_ALL' | 'OVER_RANGE' | 'OVER_RANGE_ALL', flipped?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, options)
    }

    /**
     * Automatically set Preview Range based on range of keyframes
     * @desc void
     */
    public previewrange_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previewrange_set`, {})
    }

    /**
     * Make previously hidden curves visible again in Graph Editor view
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
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
    public select_box(options: { axis_range?: boolean, include_handles?: boolean, tweak?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
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
     * Apply weighted moving means to make selected F-Curves less bumpy
     * @desc void
     */
    public smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smooth`, {})
    }

    /**
     * Snap selected keyframes to the chosen times/values
     * @desc void
     */
    public snap(options: { type?: 'CFRA' | 'VALUE' | 'NEAREST_FRAME' | 'NEAREST_SECOND' | 'NEAREST_MARKER' | 'HORIZONTAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap`, options)
    }

    /**
     * Bakes a sound wave to selected F-Curves
     * @desc void
     */
    public sound_bake(options: { filepath?: string, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', low?: number, high?: number, attack?: number, release?: number, threshold?: number, use_accumulate?: boolean, use_additive?: boolean, use_square?: boolean, sthreshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sound_bake`, options)
    }

    /**
     * Reset viewable area to show full keyframe range
     * @desc void
     */
    public view_all(options: { include_handles?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, options)
    }

    /**
     * Reset viewable area to show range around current frame
     * @desc void
     */
    public view_frame(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_frame`, {})
    }

    /**
     * Reset viewable area to show selected keyframe range
     * @desc void
     */
    public view_selected(options: { include_handles?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
