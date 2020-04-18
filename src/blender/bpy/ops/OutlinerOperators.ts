import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * OutlinerOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.outliner.html
 */
export class OutlinerOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Change the active action used
     * @desc void
     */
    public action_set(options: { action?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.action_set`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public animdata_operation(options: { type?: 'CLEAR_ANIMDATA' | 'SET_ACT' | 'CLEAR_ACT' | 'REFRESH_DRIVERS' | 'CLEAR_DRIVERS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.animdata_operation`, options)
    }

    /**
     * Delete selected collections
     * @desc void
     */
    public collection_delete(options: { hierarchy?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_delete`, options)
    }

    /**
     * Disable viewport drawing in the view layers
     * @desc void
     */
    public collection_disable(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_disable`, {})
    }

    /**
     * Do not render this collection
     * @desc void
     */
    public collection_disable_render(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_disable_render`, {})
    }

    /**
     * Drag to move to collection in Outliner
     * @desc void
     */
    public collection_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_drop`, {})
    }

    /**
     * Recursively duplicate the collection, all its children, objects and object data
     * @desc void
     */
    public collection_duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_duplicate`, {})
    }

    /**
     * Recursively duplicate the collection, all its children and objects, with linked object data
     * @desc void
     */
    public collection_duplicate_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_duplicate_linked`, {})
    }

    /**
     * Enable viewport drawing in the view layers
     * @desc void
     */
    public collection_enable(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_enable`, {})
    }

    /**
     * Render the collection
     * @desc void
     */
    public collection_enable_render(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_enable_render`, {})
    }

    /**
     * Include collection in the active view layer
     * @desc void
     */
    public collection_exclude_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_exclude_clear`, {})
    }

    /**
     * Exclude collection from the active view layer
     * @desc void
     */
    public collection_exclude_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_exclude_set`, {})
    }

    /**
     * Hide the collection in this view layer
     * @desc void
     */
    public collection_hide(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_hide`, {})
    }

    /**
     * Hide all the objects and collections inside the collection
     * @desc void
     */
    public collection_hide_inside(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_hide_inside`, {})
    }

    /**
     * Clear masking of collection in the active view layer
     * @desc void
     */
    public collection_holdout_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_holdout_clear`, {})
    }

    /**
     * Mask collection in the active view layer
     * @desc void
     */
    public collection_holdout_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_holdout_set`, {})
    }

    /**
     * Clear collection contributing only indirectly in the view layer
     * @desc void
     */
    public collection_indirect_only_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_indirect_only_clear`, {})
    }

    /**
     * Set collection to only contribute indirectly (through shadows and reflections) in the view layer
     * @desc void
     */
    public collection_indirect_only_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_indirect_only_set`, {})
    }

    /**
     * Instance selected collections to active scene
     * @desc void
     */
    public collection_instance(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_instance`, {})
    }

    /**
     * Hide all but this collection and its parents
     * @desc void
     */
    public collection_isolate(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_isolate`, options)
    }

    /**
     * Link selected collections to active scene
     * @desc void
     */
    public collection_link(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_link`, {})
    }

    /**
     * Add a new collection inside selected collection
     * @desc void
     */
    public collection_new(options: { nested?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_new`, options)
    }

    /**
     * Deselect objects in collection
     * @desc void
     */
    public collection_objects_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_objects_deselect`, {})
    }

    /**
     * Select objects in collection
     * @desc void
     */
    public collection_objects_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_objects_select`, {})
    }

    /**
     * Show the collection in this view layer
     * @desc void
     */
    public collection_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_show`, {})
    }

    /**
     * Show all the objects and collections inside the collection
     * @desc void
     */
    public collection_show_inside(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_show_inside`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public constraint_operation(options: { type?: 'ENABLE' | 'DISABLE' | 'DELETE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_operation`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public data_operation(options: { type?: 'SELECT' | 'DESELECT' | 'HIDE' | 'UNHIDE' | 'SELECT_LINKED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.data_operation`, options)
    }

    /**
     * Add drivers to selected items
     * @desc void
     */
    public drivers_add_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drivers_add_selected`, {})
    }

    /**
     * Delete drivers assigned to selected items
     * @desc void
     */
    public drivers_delete_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drivers_delete_selected`, {})
    }

    /**
     * Expand/Collapse all items
     * @desc void
     */
    public expanded_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.expanded_toggle`, {})
    }

    /**
     * Hide selected objects and collections
     * @desc void
     */
    public hide(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, {})
    }

    /**
     * Update the item highlight based on the current mouse position
     * @desc void
     */
    public highlight_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.highlight_update`, {})
    }

    /**
     * Selected data-blocks are copied to the clipboard
     * @desc void
     */
    public id_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.id_copy`, {})
    }

    /**
     * Delete the ID under cursor
     * @desc void
     */
    public id_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.id_delete`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public id_operation(options: { type?: 'UNLINK' | 'LOCAL' | 'OVERRIDE_LIBRARY' | 'SINGLE' | 'DELETE' | 'REMAP' | 'COPY' | 'PASTE' | 'ADD_FAKE' | 'CLEAR_FAKE' | 'RENAME' | 'SELECT_LINKED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.id_operation`, options)
    }

    /**
     * Data-blocks from the clipboard are pasted
     * @desc void
     */
    public id_paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.id_paste`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public id_remap(options: { id_type?: 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE', old_id?: string, new_id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.id_remap`, options)
    }

    /**
     * Handle mouse clicks to select and activate items
     * @desc void
     */
    public item_activate(options: { extend?: boolean, extend_range?: boolean, deselect_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.item_activate`, options)
    }

    /**
     * Drag and drop element to another place
     * @desc void
     */
    public item_drag_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.item_drag_drop`, {})
    }

    /**
     * Toggle whether item under cursor is enabled or closed
     * @desc void
     */
    public item_openclose(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.item_openclose`, options)
    }

    /**
     * Rename the active element
     * @desc void
     */
    public item_rename(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.item_rename`, {})
    }

    /**
     * Add selected items (blue-gray rows) to active Keying Set
     * @desc void
     */
    public keyingset_add_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyingset_add_selected`, {})
    }

    /**
     * Remove selected items (blue-gray rows) from active Keying Set
     * @desc void
     */
    public keyingset_remove_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyingset_remove_selected`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public lib_operation(options: { type?: 'RENAME' | 'DELETE' | 'RELOCATE' | 'RELOAD' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lib_operation`, options)
    }

    /**
     * Relocate the library under cursor
     * @desc void
     */
    public lib_relocate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lib_relocate`, {})
    }

    /**
     * Drag material to object in Outliner
     * @desc void
     */
    public material_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_drop`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public modifier_operation(options: { type?: 'TOGVIS' | 'TOGREN' | 'DELETE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_operation`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public object_operation(options: { type?: 'SELECT' | 'DESELECT' | 'SELECT_HIERARCHY' | 'DELETE' | 'DELETE_HIERARCHY' | 'REMAP' | 'RENAME' | 'OBJECT_MODE_ENTER' | 'OBJECT_MODE_EXIT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_operation`, options)
    }

    /**
     * Context menu for item operations
     * @desc void
     */
    public operation(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.operation`, {})
    }

    /**
     * Clear all orphaned data-blocks without any users from the file
     * @desc void
     */
    public orphans_purge(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.orphans_purge`, {})
    }

    /**
     * Drag to clear parent in Outliner
     * @desc void
     */
    public parent_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_clear`, {})
    }

    /**
     * Drag to parent in Outliner
     * @desc void
     */
    public parent_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_drop`, {})
    }

    /**
     * Drag object to scene in Outliner
     * @desc void
     */
    public scene_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scene_drop`, {})
    }

    /**
     * Context menu for scene operations
     * @desc void
     */
    public scene_operation(options: { type?: 'DELETE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scene_operation`, options)
    }

    /**
     * Scroll page up or down
     * @desc void
     */
    public scroll_page(options: { up?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_page`, options)
    }

    /**
     * Toggle the Outliner selection of items
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Use box selection to select tree elements
     * @desc void
     */
    public select_box(options: { tweak?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Use walk navigation to select tree elements
     * @desc void
     */
    public select_walk(options: { direction?: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT', extend?: boolean, toggle_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_walk`, options)
    }

    /**
     * Open up the tree and adjust the view so that the active Object is shown centered
     * @desc void
     */
    public show_active(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.show_active`, {})
    }

    /**
     * Open all object entries and close all others
     * @desc void
     */
    public show_hierarchy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.show_hierarchy`, {})
    }

    /**
     * Expand/collapse all entries by one level
     * @desc void
     */
    public show_one_level(options: { open?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.show_one_level`, options)
    }

    /**
     * Unhide all objects and collections
     * @desc void
     */
    public unhide_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unhide_all`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
