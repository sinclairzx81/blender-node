import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * NlaOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.nla.html
 */
export class NlaOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Push action down onto the top of the NLA stack as a new strip
     * @desc void
     */
    public action_pushdown(options: { channel_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.action_pushdown`, options)
    }

    /**
     * Synchronize the length of the referenced Action with the length used in the strip
     * @desc void
     */
    public action_sync_length(options: { active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.action_sync_length`, options)
    }

    /**
     * Unlink this action from the active action slot (and/or exit Tweak Mode)
     * @desc void
     */
    public action_unlink(options: { force_delete?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.action_unlink`, options)
    }

    /**
     * Add an Action-Clip strip (i.e. an NLA Strip referencing an Action) to the active track
     * @desc void
     */
    public actionclip_add(options: { action?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.actionclip_add`, options)
    }

    /**
     * Apply scaling of selected strips to their referenced Actions
     * @desc void
     */
    public apply_scale(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.apply_scale`, {})
    }

    /**
     * Bake all selected objects loc/scale/rotation animation to an action
     * @desc void
     */
    public bake(options: { frame_start?: number, frame_end?: number, step?: number, only_selected?: boolean, visual_keying?: boolean, clear_constraints?: boolean, clear_parents?: boolean, use_current_action?: boolean, bake_types?: ('POSE' | 'OBJECT')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, options)
    }

    /**
     * Handle clicks to select NLA channels
     * @desc void
     */
    public channels_click(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_click`, options)
    }

    /**
     * Reset scaling of selected strips
     * @desc void
     */
    public clear_scale(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_scale`, {})
    }

    /**
     * Handle clicks to select NLA Strips
     * @desc void
     */
    public click_select(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, deselect_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.click_select`, options)
    }

    /**
     * Delete selected strips
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Duplicate selected NLA-Strips, adding the new strips in new tracks above the originals
     * @desc void
     */
    public duplicate(options: { linked?: boolean, mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Add F-Modifier to the active/selected NLA-Strips
     * @desc void
     */
    public fmodifier_add(options: { type?: 'NULL' | 'GENERATOR' | 'FNGENERATOR' | 'ENVELOPE' | 'CYCLES' | 'NOISE' | 'LIMITS' | 'STEPPED', only_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_add`, options)
    }

    /**
     * Copy the F-Modifier(s) of the active NLA-Strip
     * @desc void
     */
    public fmodifier_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_copy`, {})
    }

    /**
     * Add copied F-Modifiers to the selected NLA-Strips
     * @desc void
     */
    public fmodifier_paste(options: { only_active?: boolean, replace?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fmodifier_paste`, options)
    }

    /**
     * Ensure that each action is only used once in the set of strips selected
     * @desc void
     */
    public make_single_user(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_single_user`, {})
    }

    /**
     * Add new meta-strips incorporating the selected strips
     * @desc void
     */
    public meta_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meta_add`, {})
    }

    /**
     * Separate out the strips held by the selected meta-strips
     * @desc void
     */
    public meta_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meta_remove`, {})
    }

    /**
     * Move selected strips down a track if there’s room
     * @desc void
     */
    public move_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_down`, {})
    }

    /**
     * Move selected strips up a track if there’s room
     * @desc void
     */
    public move_up(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_up`, {})
    }

    /**
     * Mute or un-mute selected strips
     * @desc void
     */
    public mute_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mute_toggle`, {})
    }

    /**
     * Automatically set Preview Range based on range of keyframes
     * @desc void
     */
    public previewrange_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previewrange_set`, {})
    }

    /**
     * Select or deselect all NLA-Strips
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Use box selection to grab NLA-Strips
     * @desc void
     */
    public select_box(options: { axis_range?: boolean, tweak?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select strips to the left or the right of the current frame
     * @desc void
     */
    public select_leftright(options: { mode?: 'CHECK' | 'LEFT' | 'RIGHT', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_leftright`, options)
    }

    /**
     * Make selected objects appear in NLA Editor by adding Animation Data
     * @desc void
     */
    public selected_objects_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.selected_objects_add`, {})
    }

    /**
     * Move start of strips to specified time
     * @desc void
     */
    public snap(options: { type?: 'CFRA' | 'NEAREST_FRAME' | 'NEAREST_SECOND' | 'NEAREST_MARKER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap`, options)
    }

    /**
     * Add a strip for controlling when speaker plays its sound clip
     * @desc void
     */
    public soundclip_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.soundclip_add`, {})
    }

    /**
     * Split selected strips at their midpoints
     * @desc void
     */
    public split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split`, {})
    }

    /**
     * Swap order of selected strips within tracks
     * @desc void
     */
    public swap(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.swap`, {})
    }

    /**
     * Add NLA-Tracks above/after the selected tracks
     * @desc void
     */
    public tracks_add(options: { above_selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tracks_add`, options)
    }

    /**
     * Delete selected NLA-Tracks and the strips they contain
     * @desc void
     */
    public tracks_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tracks_delete`, {})
    }

    /**
     * Add a transition strip between two adjacent selected strips
     * @desc void
     */
    public transition_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transition_add`, {})
    }

    /**
     * Enter tweaking mode for the action referenced by the active strip to edit its keyframes
     * @desc void
     */
    public tweakmode_enter(options: { isolate_action?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tweakmode_enter`, options)
    }

    /**
     * Exit tweaking mode for the action referenced by the active strip
     * @desc void
     */
    public tweakmode_exit(options: { isolate_action?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tweakmode_exit`, options)
    }

    /**
     * Reset viewable area to show full strips range
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
     * Reset viewable area to show selected strips range
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
