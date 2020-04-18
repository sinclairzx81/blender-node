import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NODE_OT_detach } from './NODE_OT_detach'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'
import { NODE_OT_attach } from './NODE_OT_attach'
import { NODE_OT_duplicate } from './NODE_OT_duplicate'
import { NODE_OT_translate_attach } from './NODE_OT_translate_attach'
import { NODE_OT_links_detach } from './NODE_OT_links_detach'
import { NODE_OT_insert_offset } from './NODE_OT_insert_offset'
import { NODE_OT_select } from './NODE_OT_select'
import { NODE_OT_link_viewer } from './NODE_OT_link_viewer'

/**
 * NodeOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.node.html
 */
export class NodeOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a node to the active tree and link to an existing socket
     * @desc void
     */
    public add_and_link_node(options: { type?: string, use_transform?: boolean, settings?: any, link_socket_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_and_link_node`, options)
    }

    /**
     * Add a file node to the current node editor
     * @desc void
     */
    public add_file(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_file`, options)
    }

    /**
     * Add a mask node to the current node editor
     * @desc void
     */
    public add_mask(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_mask`, options)
    }

    /**
     * Add a node to the active tree
     * @desc void
     */
    public add_node(options: { type?: string, use_transform?: boolean, settings?: any }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_node`, options)
    }

    /**
     * Add a reroute node
     * @desc void
     */
    public add_reroute(options: { path?: string, cursor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_reroute`, options)
    }

    /**
     * Add a node to the active tree
     * @desc void
     */
    public add_search(options: { type?: string, use_transform?: boolean, settings?: any, node_item?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_search`, options)
    }

    /**
     * Attach active node to a frame
     * @desc void
     */
    public attach(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.attach`, {})
    }

    /**
     * Fit the background image to the view
     * @desc void
     */
    public backimage_fit(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.backimage_fit`, {})
    }

    /**
     * Move Node backdrop
     * @desc void
     */
    public backimage_move(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.backimage_move`, {})
    }

    /**
     * Use mouse to sample background image
     * @desc void
     */
    public backimage_sample(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.backimage_sample`, {})
    }

    /**
     * Zoom in/out the background image
     * @desc void
     */
    public backimage_zoom(options: { factor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.backimage_zoom`, options)
    }

    /**
     * Clear the boundaries for viewer operations
     * @desc void
     */
    public clear_viewer_border(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_viewer_border`, {})
    }

    /**
     * Copies selected nodes to the clipboard
     * @desc void
     */
    public clipboard_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clipboard_copy`, {})
    }

    /**
     * Pastes nodes from the clipboard to the active node tree
     * @desc void
     */
    public clipboard_paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clipboard_paste`, {})
    }

    /**
     * Toggle collapsed nodes and hide unused sockets
     * @desc void
     */
    public collapse_hide_unused_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collapse_hide_unused_toggle`, {})
    }

    /**
     * Add a new input layer to a Cryptomatte node
     * @desc void
     */
    public cryptomatte_layer_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cryptomatte_layer_add`, {})
    }

    /**
     * Remove layer from a Cryptomatte node
     * @desc void
     */
    public cryptomatte_layer_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cryptomatte_layer_remove`, {})
    }

    /**
     * Delete selected nodes
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Delete nodes; will reconnect nodes as if deletion was muted
     * @desc void
     */
    public delete_reconnect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_reconnect`, {})
    }

    /**
     * Detach selected nodes from parents
     * @desc void
     */
    public detach(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.detach`, {})
    }

    /**
     * Detach nodes, move and attach to frame
     * @desc void
     */
    public detach_translate_attach(options: { NODE_OT_detach?: NODE_OT_detach, TRANSFORM_OT_translate?: TRANSFORM_OT_translate, NODE_OT_attach?: NODE_OT_attach }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.detach_translate_attach`, options)
    }

    /**
     * Duplicate selected nodes
     * @desc void
     */
    public duplicate(options: { keep_inputs?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Duplicate selected nodes and move them
     * @desc void
     */
    public duplicate_move(options: { NODE_OT_duplicate?: NODE_OT_duplicate, NODE_OT_translate_attach?: NODE_OT_translate_attach }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Duplicate selected nodes keeping input links and move them
     * @desc void
     */
    public duplicate_move_keep_inputs(options: { NODE_OT_duplicate?: NODE_OT_duplicate, NODE_OT_translate_attach?: NODE_OT_translate_attach }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move_keep_inputs`, options)
    }

    /**
     * Search for named node and allow to select and activate it
     * @desc void
     */
    public find_node(options: { prev?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.find_node`, options)
    }

    /**
     * Edit node group
     * @desc void
     */
    public group_edit(options: { exit?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_edit`, options)
    }

    /**
     * Insert selected nodes into a node group
     * @desc void
     */
    public group_insert(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_insert`, {})
    }

    /**
     * Make group from selected nodes
     * @desc void
     */
    public group_make(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_make`, {})
    }

    /**
     * Separate selected nodes from the node group
     * @desc void
     */
    public group_separate(options: { type?: 'COPY' | 'MOVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_separate`, options)
    }

    /**
     * Ungroup selected nodes
     * @desc void
     */
    public group_ungroup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_ungroup`, {})
    }

    /**
     * Toggle unused node socket display
     * @desc void
     */
    public hide_socket_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_socket_toggle`, {})
    }

    /**
     * Toggle hiding of selected nodes
     * @desc void
     */
    public hide_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_toggle`, {})
    }

    /**
     * Automatically offset nodes on insertion
     * @desc void
     */
    public insert_offset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.insert_offset`, {})
    }

    /**
     * Attach selected nodes to a new common frame
     * @desc void
     */
    public join(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.join`, {})
    }

    /**
     * Use the mouse to create a link between two nodes
     * @desc void
     */
    public link(options: { detach?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link`, options)
    }

    /**
     * Makes a link between selected output in input sockets
     * @desc void
     */
    public link_make(options: { replace?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link_make`, options)
    }

    /**
     * Link to viewer node
     * @desc void
     */
    public link_viewer(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link_viewer`, {})
    }

    /**
     * Use the mouse to cut (remove) some links
     * @desc void
     */
    public links_cut(options: { path?: string, cursor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.links_cut`, options)
    }

    /**
     * Remove all links to selected nodes, and try to connect neighbor nodes together
     * @desc void
     */
    public links_detach(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.links_detach`, {})
    }

    /**
     * Move a node to detach links
     * @desc void
     */
    public move_detach_links(options: { NODE_OT_links_detach?: NODE_OT_links_detach, TRANSFORM_OT_translate?: TRANSFORM_OT_translate, NODE_OT_insert_offset?: NODE_OT_insert_offset }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_detach_links`, options)
    }

    /**
     * Move a node to detach links
     * @desc void
     */
    public move_detach_links_release(options: { NODE_OT_links_detach?: NODE_OT_links_detach, NODE_OT_translate_attach?: NODE_OT_translate_attach }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_detach_links_release`, options)
    }

    /**
     * Toggle muting of the nodes
     * @desc void
     */
    public mute_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mute_toggle`, {})
    }

    /**
     * Create a new node tree
     * @desc void
     */
    public new_node_tree(options: { type?: string, name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new_node_tree`, options)
    }

    /**
     * Add or remove a Node Color Preset
     * @desc void
     */
    public node_color_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.node_color_preset_add`, options)
    }

    /**
     * Copy color to all selected nodes
     * @desc void
     */
    public node_copy_color(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.node_copy_color`, {})
    }

    /**
     * Toggle option buttons display for selected nodes
     * @desc void
     */
    public options_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.options_toggle`, {})
    }

    /**
     * Add a new input to a file output node
     * @desc void
     */
    public output_file_add_socket(options: { file_path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.output_file_add_socket`, options)
    }

    /**
     * Move the active input of a file output node up or down the list
     * @desc void
     */
    public output_file_move_active_socket(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.output_file_move_active_socket`, options)
    }

    /**
     * Remove active input from a file output node
     * @desc void
     */
    public output_file_remove_active_socket(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.output_file_remove_active_socket`, {})
    }

    /**
     * Attach selected nodes
     * @desc void
     */
    public parent_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_set`, {})
    }

    /**
     * Toggle preview display for selected nodes
     * @desc void
     */
    public preview_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preview_toggle`, {})
    }

    /**
     * Read all render layers of all used scenes
     * @desc void
     */
    public read_viewlayers(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_viewlayers`, {})
    }

    /**
     * Render current scene, when input node’s layer has been changed
     * @desc void
     */
    public render_changed(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render_changed`, {})
    }

    /**
     * Resize a node
     * @desc void
     */
    public resize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.resize`, {})
    }

    /**
     * Select the node under the cursor
     * @desc void
     */
    public select(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, socket_select?: boolean, deselect_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * (De)select all nodes
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Use box selection to select nodes
     * @desc void
     */
    public select_box(options: { tweak?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Use circle selection to select nodes
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select nodes with similar properties
     * @desc void
     */
    public select_grouped(options: { extend?: boolean, type?: 'TYPE' | 'COLOR' | 'PREFIX' | 'SUFFIX' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select nodes using lasso selection
     * @desc void
     */
    public select_lasso(options: { tweak?: boolean, path?: string, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Select node and link it to a viewer node
     * @desc void
     */
    public select_link_viewer(options: { NODE_OT_select?: NODE_OT_select, NODE_OT_link_viewer?: NODE_OT_link_viewer }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_link_viewer`, options)
    }

    /**
     * Select nodes linked from the selected ones
     * @desc void
     */
    public select_linked_from(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_from`, {})
    }

    /**
     * Select nodes linked to the selected ones
     * @desc void
     */
    public select_linked_to(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_to`, {})
    }

    /**
     * Activate and view same node type, step by step
     * @desc void
     */
    public select_same_type_step(options: { prev?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_same_type_step`, options)
    }

    /**
     * Update shader script node with new sockets and options from the script
     * @desc void
     */
    public shader_script_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shader_script_update`, {})
    }

    /**
     * Update views of selected node
     * @desc void
     */
    public switch_view_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.switch_view_update`, {})
    }

    /**
     * Move nodes and attach to frame
     * @desc void
     */
    public translate_attach(options: { TRANSFORM_OT_translate?: TRANSFORM_OT_translate, NODE_OT_attach?: NODE_OT_attach, NODE_OT_insert_offset?: NODE_OT_insert_offset }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.translate_attach`, options)
    }

    /**
     * Move nodes and attach to frame
     * @desc void
     */
    public translate_attach_remove_on_cancel(options: { TRANSFORM_OT_translate?: TRANSFORM_OT_translate, NODE_OT_attach?: NODE_OT_attach, NODE_OT_insert_offset?: NODE_OT_insert_offset }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.translate_attach_remove_on_cancel`, options)
    }

    /**
     * Go to parent node tree
     * @desc void
     */
    public tree_path_parent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tree_path_parent`, {})
    }

    /**
     * Add an input or output socket to the current node tree
     * @desc void
     */
    public tree_socket_add(options: { in_out?: 'IN' | 'OUT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tree_socket_add`, options)
    }

    /**
     * Move a socket up or down in the current node tree’s sockets stack
     * @desc void
     */
    public tree_socket_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tree_socket_move`, options)
    }

    /**
     * Remove an input or output socket to the current node tree
     * @desc void
     */
    public tree_socket_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tree_socket_remove`, {})
    }

    /**
     * Resize view so you can see all nodes
     * @desc void
     */
    public view_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, {})
    }

    /**
     * Resize view so you can see selected nodes
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    /**
     * Set the boundaries for viewer operations
     * @desc void
     */
    public viewer_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, deselect?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.viewer_border`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
