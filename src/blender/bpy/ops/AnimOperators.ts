import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * AnimOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.anim.html
 */
export class AnimOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Interactively change the current frame number
     * @desc void
     */
    public change_frame(options: { frame?: number, snap?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_frame`, options)
    }

    /**
     * Select all keyframes of channel under mouse
     * @desc void
     */
    public channel_select_keys(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channel_select_keys`, options)
    }

    /**
     * Delete all empty animation data containers from visible data-blocks
     * @desc void
     */
    public channels_clean_empty(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_clean_empty`, {})
    }

    /**
     * Handle mouse-clicks over animation channels
     * @desc void
     */
    public channels_click(options: { extend?: boolean, children_only?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_click`, options)
    }

    /**
     * Collapse (i.e. close) all selected expandable animation channels
     * @desc void
     */
    public channels_collapse(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_collapse`, options)
    }

    /**
     * Delete all selected animation channels
     * @desc void
     */
    public channels_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_delete`, {})
    }

    /**
     * Toggle editability of selected channels
     * @desc void
     */
    public channels_editable_toggle(options: { mode?: 'TOGGLE' | 'DISABLE' | 'ENABLE' | 'INVERT', type?: 'PROTECT' | 'MUTE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_editable_toggle`, options)
    }

    /**
     * Expand (i.e. open) all selected expandable animation channels
     * @desc void
     */
    public channels_expand(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_expand`, options)
    }

    /**
     * Clears ‘disabled’ tag from all F-Curves to get broken F-Curves working again
     * @desc void
     */
    public channels_fcurves_enable(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_fcurves_enable`, {})
    }

    /**
     * Filter the set of channels shown to only include those with matching names
     * @desc void
     */
    public channels_find(options: { query?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_find`, options)
    }

    /**
     * Add selected F-Curves to a new group
     * @desc void
     */
    public channels_group(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_group`, options)
    }

    /**
     * Rearrange selected animation channels
     * @desc void
     */
    public channels_move(options: { direction?: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_move`, options)
    }

    /**
     * Rename animation channel under mouse
     * @desc void
     */
    public channels_rename(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_rename`, {})
    }

    /**
     * Toggle selection of all animation channels
     * @desc void
     */
    public channels_select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_select_all`, options)
    }

    /**
     * Select all animation channels within the specified region
     * @desc void
     */
    public channels_select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, deselect?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_select_box`, options)
    }

    /**
     * Disable specified setting on all selected animation channels
     * @desc void
     */
    public channels_setting_disable(options: { mode?: 'TOGGLE' | 'DISABLE' | 'ENABLE' | 'INVERT', type?: 'PROTECT' | 'MUTE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_setting_disable`, options)
    }

    /**
     * Enable specified setting on all selected animation channels
     * @desc void
     */
    public channels_setting_enable(options: { mode?: 'TOGGLE' | 'DISABLE' | 'ENABLE' | 'INVERT', type?: 'PROTECT' | 'MUTE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_setting_enable`, options)
    }

    /**
     * Toggle specified setting on all selected animation channels
     * @desc void
     */
    public channels_setting_toggle(options: { mode?: 'TOGGLE' | 'DISABLE' | 'ENABLE' | 'INVERT', type?: 'PROTECT' | 'MUTE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_setting_toggle`, options)
    }

    /**
     * Remove selected F-Curves from their current groups
     * @desc void
     */
    public channels_ungroup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.channels_ungroup`, {})
    }

    /**
     * Mark actions with no F-Curves for deletion after save & reload of file preserving “action libraries”
     * @desc void
     */
    public clear_useless_actions(options: { only_unused?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_useless_actions`, options)
    }

    /**
     * Copy the driver for the highlighted button
     * @desc void
     */
    public copy_driver_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_driver_button`, {})
    }

    /**
     * Add driver for the property under the cursor
     * @desc void
     */
    public driver_button_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_button_add`, {})
    }

    /**
     * Edit the drivers for the property connected represented by the highlighted button
     * @desc void
     */
    public driver_button_edit(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_button_edit`, {})
    }

    /**
     * Remove the driver(s) for the property(s) connected represented by the highlighted button
     * @desc void
     */
    public driver_button_remove(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.driver_button_remove`, options)
    }

    /**
     * Set the current frame as the preview or scene end frame
     * @desc void
     */
    public end_frame_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.end_frame_set`, {})
    }

    /**
     * Clear all keyframes on the currently active property
     * @desc void
     */
    public keyframe_clear_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_clear_button`, options)
    }

    /**
     * Remove all keyframe animation for selected objects
     * @desc void
     */
    public keyframe_clear_v3d(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_clear_v3d`, {})
    }

    /**
     * Delete keyframes on the current frame for all properties in the specified Keying Set
     * @desc void
     */
    public keyframe_delete(options: { type?: 'DEFAULT', confirm_success?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_delete`, options)
    }

    /**
     * Delete current keyframe of current UI-active property
     * @desc void
     */
    public keyframe_delete_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_delete_button`, options)
    }

    /**
     * Alternate access to ‘Delete Keyframe’ for keymaps to use
     * @desc void
     */
    public keyframe_delete_by_name(options: { confirm_success?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_delete_by_name`, options)
    }

    /**
     * Remove keyframes on current frame for selected objects and bones
     * @desc void
     */
    public keyframe_delete_v3d(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_delete_v3d`, {})
    }

    /**
     * Insert keyframes on the current frame for all properties in the specified Keying Set
     * @desc void
     */
    public keyframe_insert(options: { type?: 'DEFAULT', confirm_success?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert`, options)
    }

    /**
     * Insert a keyframe for current UI-active property
     * @desc void
     */
    public keyframe_insert_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert_button`, options)
    }

    /**
     * Alternate access to ‘Insert Keyframe’ for keymaps to use
     * @desc void
     */
    public keyframe_insert_by_name(options: { confirm_success?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert_by_name`, options)
    }

    /**
     * Insert Keyframes for specified Keying Set, with menu of available Keying Sets if undefined
     * @desc void
     */
    public keyframe_insert_menu(options: { type?: 'DEFAULT', confirm_success?: boolean, always_prompt?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert_menu`, options)
    }

    /**
     * Select a new keying set as the active one
     * @desc void
     */
    public keying_set_active_set(options: { type?: 'DEFAULT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_active_set`, options)
    }

    /**
     * Add a new (empty) Keying Set to the active Scene
     * @desc void
     */
    public keying_set_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_add`, {})
    }

    /**
     * Export Keying Set to a python script
     * @desc void
     */
    public keying_set_export(options: { filepath?: string, filter_folder?: boolean, filter_text?: boolean, filter_python?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_export`, options)
    }

    /**
     * Add empty path to active Keying Set
     * @desc void
     */
    public keying_set_path_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_path_add`, {})
    }

    /**
     * Remove active Path from active Keying Set
     * @desc void
     */
    public keying_set_path_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_path_remove`, {})
    }

    /**
     * Remove the active Keying Set
     * @desc void
     */
    public keying_set_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keying_set_remove`, {})
    }

    /**
     * Add current UI-active property to current keying set
     * @desc void
     */
    public keyingset_button_add(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyingset_button_add`, options)
    }

    /**
     * Remove current UI-active property from current keying set
     * @desc void
     */
    public keyingset_button_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyingset_button_remove`, {})
    }

    /**
     * Paste the driver in the copy/paste buffer for the highlighted button
     * @desc void
     */
    public paste_driver_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste_driver_button`, {})
    }

    /**
     * Clear Preview Range
     * @desc void
     */
    public previewrange_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previewrange_clear`, {})
    }

    /**
     * Interactively define frame range used for playback
     * @desc void
     */
    public previewrange_set(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previewrange_set`, options)
    }

    /**
     * Set the current frame as the preview or scene start frame
     * @desc void
     */
    public start_frame_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.start_frame_set`, {})
    }

    /**
     * Update fcurves/drivers affecting Transform constraints (use it with files from 2.70 and earlier)
     * @desc void
     */
    public update_animated_transform_constraints(options: { use_convert_to_radians?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_animated_transform_constraints`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
