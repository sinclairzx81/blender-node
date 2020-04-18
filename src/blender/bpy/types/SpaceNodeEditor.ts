import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { NodeTree } from './NodeTree'
import { ID } from './ID'
import { SpaceNodeEditorPath } from './SpaceNodeEditorPath'
import { NodeTreePath } from './NodeTreePath'

/**
 * SpaceNodeEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceNodeEditor.html
 */
export class SpaceNodeEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Node tree being displayed and edited
     * @desc NodeTree, (readonly)
     */
    public get edit_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.edit_tree`, NodeTree)
    }

    /**
     * Data-block whose nodes are being edited
     * @desc ID, (readonly)
     */
    public get id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id`, ID)
    }

    /**
     * Data-block from which the edited data-block is linked
     * @desc ID, (readonly)
     */
    public get id_from(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id_from`, ID)
    }

    /**
     * Path from the data-block to the currently edited node tree
     * @desc SpaceNodeEditorPath bpy_prop_collection of NodeTreePath, (readonly)
     */
    public get path(): BlenderCollection<NodeTreePath> & Indexable<NodeTreePath> & SpaceNodeEditorPath {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.path`, SpaceNodeEditorPath, NodeTreePath)
    }

    /**
     * Channels of the image to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR', 'ALPHA', 'RED', 'GREEN', 'BLUE'], default 'COLOR'
     */
    public get backdrop_channels(): 'COLOR_ALPHA' | 'COLOR' | 'ALPHA' | 'RED' | 'GREEN' | 'BLUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.backdrop_channels`)
    }

    /**
     * Backdrop offset
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get backdrop_offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.backdrop_offset`, 'number', 2)
    }

    /**
     * Backdrop zoom factor
     * @desc float in [0.01, inf], default 1.0
     */
    public get backdrop_zoom(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.backdrop_zoom`)
    }

    /**
     * Location for adding new nodes
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get cursor_location(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_location`, 'number', 2)
    }

    /**
     * Direction to offset nodes on insertion
     * @desc enum in ['RIGHT', 'LEFT'], default 'RIGHT'
     */
    public get insert_offset_direction(): 'RIGHT' | 'LEFT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.insert_offset_direction`)
    }

    /**
     * Base node tree from context
     * @desc NodeTree
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Use the pinned node tree
     * @desc boolean, default False
     */
    public get pin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pin`)
    }

    /**
     * Type of data to take shader from
     * @desc enum in ['OBJECT', 'WORLD', 'LINESTYLE'], default 'OBJECT'
     */
    public get shader_type(): 'OBJECT' | 'WORLD' | 'LINESTYLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shader_type`)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public get show_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_annotation`)
    }

    /**
     * Use active Viewer Node output as backdrop for compositing nodes
     * @desc boolean, default False
     */
    public get show_backdrop(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_backdrop`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_toolbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_toolbar`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Type of data to take texture from
     * @desc enum in ['WORLD', 'BRUSH', 'LINESTYLE'], default 'WORLD'
     */
    public get texture_type(): 'WORLD' | 'BRUSH' | 'LINESTYLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_type`)
    }

    /**
     * Node tree type to display and edit
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public get tree_type(): 'DUMMY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tree_type`)
    }

    /**
     * Re-render and composite changed layers on 3D edits
     * @desc boolean, default False
     */
    public get use_auto_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_render`)
    }

    /**
     * Automatically offset the following or previous nodes in a chain when inserting a new node
     * @desc boolean, default False
     */
    public get use_insert_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insert_offset`)
    }

    /**
     * Channels of the image to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR', 'ALPHA', 'RED', 'GREEN', 'BLUE'], default 'COLOR'
     */
    public set backdrop_channels(value: 'COLOR_ALPHA' | 'COLOR' | 'ALPHA' | 'RED' | 'GREEN' | 'BLUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.backdrop_channels`, value)
    }

    /**
     * Backdrop offset
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set backdrop_offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.backdrop_offset`, value)
    }

    /**
     * Backdrop zoom factor
     * @desc float in [0.01, inf], default 1.0
     */
    public set backdrop_zoom(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.backdrop_zoom`, value)
    }

    /**
     * Location for adding new nodes
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set cursor_location(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_location`, value)
    }

    /**
     * Direction to offset nodes on insertion
     * @desc enum in ['RIGHT', 'LEFT'], default 'RIGHT'
     */
    public set insert_offset_direction(value: 'RIGHT' | 'LEFT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.insert_offset_direction`, value)
    }

    /**
     * Base node tree from context
     * @desc NodeTree
     */
    public set node_tree(value: NodeTree) {
        PythonInterop.setClass(this.interop, `${this.accessor}.node_tree`, value)
    }

    /**
     * Use the pinned node tree
     * @desc boolean, default False
     */
    public set pin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pin`, value)
    }

    /**
     * Type of data to take shader from
     * @desc enum in ['OBJECT', 'WORLD', 'LINESTYLE'], default 'OBJECT'
     */
    public set shader_type(value: 'OBJECT' | 'WORLD' | 'LINESTYLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shader_type`, value)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public set show_annotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_annotation`, value)
    }

    /**
     * Use active Viewer Node output as backdrop for compositing nodes
     * @desc boolean, default False
     */
    public set show_backdrop(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_backdrop`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_toolbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_toolbar`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Type of data to take texture from
     * @desc enum in ['WORLD', 'BRUSH', 'LINESTYLE'], default 'WORLD'
     */
    public set texture_type(value: 'WORLD' | 'BRUSH' | 'LINESTYLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_type`, value)
    }

    /**
     * Node tree type to display and edit
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public set tree_type(value: 'DUMMY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tree_type`, value)
    }

    /**
     * Re-render and composite changed layers on 3D edits
     * @desc boolean, default False
     */
    public set use_auto_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_render`, value)
    }

    /**
     * Automatically offset the following or previous nodes in a chain when inserting a new node
     * @desc boolean, default False
     */
    public set use_insert_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insert_offset`, value)
    }

    /**
     * Set the cursor location using region coordinates
     * @desc void
     */
    public cursor_location_from_region(options: { x?: number, y?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_location_from_region`, options)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
