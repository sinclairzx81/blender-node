import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SEQUENCER_OT_duplicate } from './SEQUENCER_OT_duplicate'
import { TRANSFORM_OT_seq_slide } from './TRANSFORM_OT_seq_slide'

/**
 * SequencerOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.sequencer.html
 */
export class SequencerOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public change_effect_input(options: { swap?: 'A_B' | 'B_C' | 'A_C' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_effect_input`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public change_effect_type(options: { type?: 'CROSS' | 'ADD' | 'SUBTRACT' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'MULTIPLY' | 'OVER_DROP' | 'WIPE' | 'GLOW' | 'TRANSFORM' | 'COLOR' | 'SPEED' | 'MULTICAM' | 'ADJUSTMENT' | 'GAUSSIAN_BLUR' | 'TEXT' | 'COLORMIX' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_effect_type`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public change_path(options: { filepath?: string, directory?: string, files?: any, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', use_placeholders?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_path`, options)
    }

    /**
     * Copy selected strips to clipboard
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Do cross-fading volume animation of two selected sound strips
     * @desc void
     */
    public crossfade_sounds(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.crossfade_sounds`, {})
    }

    /**
     * Cut the selected strips
     * @desc void
     */
    public cut(options: { frame?: number, type?: 'SOFT' | 'HARD', side?: 'MOUSE' | 'LEFT' | 'RIGHT' | 'BOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cut`, options)
    }

    /**
     * Cut multi-cam strip and select camera
     * @desc void
     */
    public cut_multicam(options: { camera?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cut_multicam`, options)
    }

    /**
     * Deinterlace all selected movie sources
     * @desc void
     */
    public deinterlace_selected_movies(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.deinterlace_selected_movies`, {})
    }

    /**
     * Erase selected strips from the sequencer
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Duplicate the selected strips
     * @desc void
     */
    public duplicate(options: { mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Duplicate selected strips and move them
     * @desc void
     */
    public duplicate_move(options: { SEQUENCER_OT_duplicate?: SEQUENCER_OT_duplicate, TRANSFORM_OT_seq_slide?: TRANSFORM_OT_seq_slide }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Add an effect to the sequencer, most are applied on top of existing strips
     * @desc void
     */
    public effect_strip_add(options: { frame_start?: number, frame_end?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, type?: 'CROSS' | 'ADD' | 'SUBTRACT' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'MULTIPLY' | 'OVER_DROP' | 'WIPE' | 'GLOW' | 'TRANSFORM' | 'COLOR' | 'SPEED' | 'MULTICAM' | 'ADJUSTMENT' | 'GAUSSIAN_BLUR' | 'TEXT' | 'COLORMIX', color?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.effect_strip_add`, options)
    }

    /**
     * Enable selected proxies on all selected Movie, Image and Meta strips
     * @desc void
     */
    public enable_proxies(options: { proxy_25?: boolean, proxy_50?: boolean, proxy_75?: boolean, proxy_100?: boolean, overwrite?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.enable_proxies`, options)
    }

    /**
     * Export .srt file containing text strips
     * @desc void
     */
    public export_subtitles(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.export_subtitles`, options)
    }

    /**
     * Adds or updates a fade animation for either visual or audio strips
     * @desc void
     */
    public fades_add(options: { duration_seconds?: number, type?: 'IN_OUT' | 'IN' | 'OUT' | 'CURSOR_FROM' | 'CURSOR_TO' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fades_add`, options)
    }

    /**
     * Removes fade animation from selected sequences
     * @desc void
     */
    public fades_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fades_clear`, {})
    }

    /**
     * Insert gap at current frame to first strips at the right, independent of selection or locked state of strips
     * @desc void
     */
    public gap_insert(options: { frames?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gap_insert`, options)
    }

    /**
     * Remove gap at current frame to first strip at the right, independent of selection or locked state of strips
     * @desc void
     */
    public gap_remove(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gap_remove`, options)
    }

    /**
     * Add an image or image sequence to the sequencer
     * @desc void
     */
    public image_strip_add(options: { directory?: string, files?: any, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', frame_start?: number, frame_end?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, use_placeholders?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.image_strip_add`, options)
    }

    /**
     * On image sequence strips, it returns a strip for each image
     * @desc void
     */
    public images_separate(options: { length?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.images_separate`, options)
    }

    /**
     * Lock strips so they can’t be transformed
     * @desc void
     */
    public lock(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lock`, {})
    }

    /**
     * Add a mask strip to the sequencer
     * @desc void
     */
    public mask_strip_add(options: { frame_start?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, mask?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mask_strip_add`, options)
    }

    /**
     * Group selected strips into a metastrip
     * @desc void
     */
    public meta_make(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meta_make`, {})
    }

    /**
     * Put the contents of a metastrip back in the sequencer
     * @desc void
     */
    public meta_separate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meta_separate`, {})
    }

    /**
     * Toggle a metastrip (to edit enclosed strips)
     * @desc void
     */
    public meta_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meta_toggle`, {})
    }

    /**
     * Add a movie strip to the sequencer
     * @desc void
     */
    public movie_strip_add(options: { filepath?: string, files?: any, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', frame_start?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, sound?: boolean, use_framerate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.movie_strip_add`, options)
    }

    /**
     * Add a movieclip strip to the sequencer
     * @desc void
     */
    public movieclip_strip_add(options: { frame_start?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, clip?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.movieclip_strip_add`, options)
    }

    /**
     * Mute (un)selected strips
     * @desc void
     */
    public mute(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mute`, options)
    }

    /**
     * Clear strip offsets from the start and end frames
     * @desc void
     */
    public offset_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.offset_clear`, {})
    }

    /**
     * Paste strips from clipboard
     * @desc void
     */
    public paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, {})
    }

    /**
     * Reassign the inputs for the effect strip
     * @desc void
     */
    public reassign_inputs(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reassign_inputs`, {})
    }

    /**
     * Rebuild all selected proxies and timecode indices using the job system
     * @desc void
     */
    public rebuild_proxy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rebuild_proxy`, {})
    }

    /**
     * Refresh the sequencer editor
     * @desc void
     */
    public refresh_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh_all`, {})
    }

    /**
     * Reload strips in the sequencer
     * @desc void
     */
    public reload(options: { adjust_length?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, options)
    }

    /**
     * Set render size and aspect from active sequence
     * @desc void
     */
    public rendersize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rendersize`, {})
    }

    /**
     * Use mouse to sample color in current frame
     * @desc void
     */
    public sample(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample`, {})
    }

    /**
     * Add a strip to the sequencer using a blender scene as a source
     * @desc void
     */
    public scene_strip_add(options: { frame_start?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, scene?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scene_strip_add`, options)
    }

    /**
     * Select a strip (last selected becomes the “active strip”)
     * @desc void
     */
    public select(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, deselect_all?: boolean, linked_handle?: boolean, left_right?: 'NONE' | 'MOUSE' | 'LEFT' | 'RIGHT', linked_time?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Select or deselect all strips
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select strips using box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB', tweak?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select all strips grouped by various properties
     * @desc void
     */
    public select_grouped(options: { type?: 'TYPE' | 'TYPE_BASIC' | 'TYPE_EFFECT' | 'DATA' | 'EFFECT' | 'EFFECT_LINK' | 'OVERLAP', extend?: boolean, use_active_channel?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select gizmo handles on the sides of the selected strip
     * @desc void
     */
    public select_handles(options: { side?: 'MOUSE' | 'LEFT' | 'RIGHT' | 'BOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_handles`, options)
    }

    /**
     * Shrink the current selection of adjacent selected strips
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all strips adjacent to the current selection
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * Select a chain of linked strips nearest to the mouse pointer
     * @desc void
     */
    public select_linked_pick(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_pick`, options)
    }

    /**
     * Select more strips adjacent to the current selection
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select strips on the nominated side of the selected strips
     * @desc void
     */
    public select_side(options: { side?: 'MOUSE' | 'LEFT' | 'RIGHT' | 'BOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_side`, options)
    }

    /**
     * Set the frame range to the selected strips start and end
     * @desc void
     */
    public set_range_to_strips(options: { preview?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_range_to_strips`, options)
    }

    /**
     * Trim the contents of the active strip
     * @desc void
     */
    public slip(options: { offset?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slip`, options)
    }

    /**
     * Frame where selected strips will be snapped
     * @desc void
     */
    public snap(options: { frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap`, options)
    }

    /**
     * Add a sound strip to the sequencer
     * @desc void
     */
    public sound_strip_add(options: { filepath?: string, files?: any, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', frame_start?: number, channel?: number, replace_sel?: boolean, overlap?: boolean, cache?: boolean, mono?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sound_strip_add`, options)
    }

    /**
     * Move frame to previous edit point
     * @desc void
     */
    public strip_jump(options: { next?: boolean, center?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.strip_jump`, options)
    }

    /**
     * Add a modifier to the strip
     * @desc void
     */
    public strip_modifier_add(options: { type?: 'COLOR_BALANCE' | 'CURVES' | 'HUE_CORRECT' | 'BRIGHT_CONTRAST' | 'MASK' | 'WHITE_BALANCE' | 'TONEMAP' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.strip_modifier_add`, options)
    }

    /**
     * Copy modifiers of the active strip to all selected strips
     * @desc void
     */
    public strip_modifier_copy(options: { type?: 'REPLACE' | 'APPEND' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.strip_modifier_copy`, options)
    }

    /**
     * Move modifier up and down in the stack
     * @desc void
     */
    public strip_modifier_move(options: { name?: string, direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.strip_modifier_move`, options)
    }

    /**
     * Remove a modifier from the strip
     * @desc void
     */
    public strip_modifier_remove(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.strip_modifier_remove`, options)
    }

    /**
     * Swap active strip with strip to the right or left
     * @desc void
     */
    public swap(options: { side?: 'LEFT' | 'RIGHT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.swap`, options)
    }

    /**
     * Swap 2 sequencer strips
     * @desc void
     */
    public swap_data(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.swap_data`, {})
    }

    /**
     * Swap the first two inputs for the effect strip
     * @desc void
     */
    public swap_inputs(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.swap_inputs`, {})
    }

    /**
     * Unlock strips so they can be transformed
     * @desc void
     */
    public unlock(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlock`, {})
    }

    /**
     * Unmute (un)selected strips
     * @desc void
     */
    public unmute(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unmute`, options)
    }

    /**
     * View all the strips in the sequencer
     * @desc void
     */
    public view_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, {})
    }

    /**
     * Zoom preview to fit in the area
     * @desc void
     */
    public view_all_preview(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all_preview`, {})
    }

    /**
     * Reset viewable area to show range around current frame
     * @desc void
     */
    public view_frame(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_frame`, {})
    }

    /**
     * Set the boundaries of the border used for offset-view
     * @desc void
     */
    public view_ghost_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_ghost_border`, options)
    }

    /**
     * Zoom the sequencer on the selected strips
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    /**
     * Toggle between sequencer views (sequence, preview, both)
     * @desc void
     */
    public view_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_toggle`, {})
    }

    /**
     * Change zoom ratio of sequencer preview
     * @desc void
     */
    public view_zoom_ratio(options: { ratio?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_ratio`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
