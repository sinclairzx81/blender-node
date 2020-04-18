import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ScreenOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.screen.html
 */
export class ScreenOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Handle area action zones for mouse actions/gestures
     * @desc void
     */
    public actionzone(options: { modifier?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.actionzone`, options)
    }

    /**
     * Cancel animation, returning to the original frame
     * @desc void
     */
    public animation_cancel(options: { restore_frame?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.animation_cancel`, options)
    }

    /**
     * Play animation
     * @desc void
     */
    public animation_play(options: { reverse?: boolean, sync?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.animation_play`, options)
    }

    /**
     * Step through animation by position
     * @desc void
     */
    public animation_step(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.animation_step`, {})
    }

    /**
     * Duplicate selected area into new window
     * @desc void
     */
    public area_dupli(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_dupli`, {})
    }

    /**
     * Join selected areas into new window
     * @desc void
     */
    public area_join(options: { cursor?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_join`, options)
    }

    /**
     * Move selected area edges
     * @desc void
     */
    public area_move(options: { x?: number, y?: number, delta?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_move`, options)
    }

    /**
     * Operations for splitting and merging
     * @desc void
     */
    public area_options(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_options`, {})
    }

    /**
     * Split selected area into new windows
     * @desc void
     */
    public area_split(options: { direction?: 'HORIZONTAL' | 'VERTICAL', factor?: number, cursor?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_split`, options)
    }

    /**
     * Swap selected areas screen positions
     * @desc void
     */
    public area_swap(options: { cursor?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.area_swap`, options)
    }

    /**
     * Revert back to the original screen layout, before fullscreen area overlay
     * @desc void
     */
    public back_to_previous(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.back_to_previous`, {})
    }

    /**
     * Delete active screen
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Show drivers editor in a separate window
     * @desc void
     */
    public drivers_editor_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drivers_editor_show`, {})
    }

    /**
     * Jump to first/last frame in frame range
     * @desc void
     */
    public frame_jump(options: { end?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_jump`, options)
    }

    /**
     * Move current frame forward/backward by a given number
     * @desc void
     */
    public frame_offset(options: { delta?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_offset`, options)
    }

    /**
     * Expand or collapse the header pulldown menus
     * @desc void
     */
    public header_toggle_menus(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.header_toggle_menus`, {})
    }

    /**
     * Show info log in a separate window
     * @desc void
     */
    public info_log_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.info_log_show`, {})
    }

    /**
     * Jump to previous/next keyframe
     * @desc void
     */
    public keyframe_jump(options: { next?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_jump`, options)
    }

    /**
     * Jump to previous/next marker
     * @desc void
     */
    public marker_jump(options: { next?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.marker_jump`, options)
    }

    /**
     * Add a new screen
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Display parameters for last action performed
     * @desc void
     */
    public redo_last(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.redo_last`, {})
    }

    /**
     * Blend in and out overlapping region
     * @desc void
     */
    public region_blend(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_blend`, {})
    }

    /**
     * Display region context menu
     * @desc void
     */
    public region_context_menu(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_context_menu`, {})
    }

    /**
     * Toggle the region’s alignment (left/right or top/bottom)
     * @desc void
     */
    public region_flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_flip`, {})
    }

    /**
     * Split selected area into camera, front, right & top views
     * @desc void
     */
    public region_quadview(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_quadview`, {})
    }

    /**
     * Scale selected area
     * @desc void
     */
    public region_scale(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_scale`, {})
    }

    /**
     * Hide or unhide the region
     * @desc void
     */
    public region_toggle(options: { region_type?: 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_toggle`, options)
    }

    /**
     * Display menu for previous actions performed
     * @desc void
     */
    public repeat_history(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.repeat_history`, options)
    }

    /**
     * Repeat last action
     * @desc void
     */
    public repeat_last(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.repeat_last`, {})
    }

    /**
     * Toggle display selected area as fullscreen/maximized
     * @desc void
     */
    public screen_full_area(options: { use_hide_panels?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.screen_full_area`, options)
    }

    /**
     * Cycle through available screens
     * @desc void
     */
    public screen_set(options: { delta?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.screen_set`, options)
    }

    /**
     * Capture a picture of the active area or whole Blender window
     * @desc void
     */
    public screenshot(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', full?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.screenshot`, options)
    }

    /**
     * Cycle through the editor context by activating the next/previous one
     * @desc void
     */
    public space_context_cycle(options: { direction?: 'PREV' | 'NEXT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.space_context_cycle`, options)
    }

    /**
     * Set the space type or cycle sub-type
     * @desc void
     */
    public space_type_set_or_cycle(options: { space_type?: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.space_type_set_or_cycle`, options)
    }

    /**
     * Remove unused settings for invisible editors
     * @desc void
     */
    public spacedata_cleanup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.spacedata_cleanup`, {})
    }

    /**
     * Edit user preferences and system settings
     * @desc void
     */
    public userpref_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.userpref_show`, {})
    }

    /**
     * Cycle through workspaces
     * @desc void
     */
    public workspace_cycle(options: { direction?: 'PREV' | 'NEXT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.workspace_cycle`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
