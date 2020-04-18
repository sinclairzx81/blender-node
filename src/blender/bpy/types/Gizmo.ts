import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GizmoGroup } from './GizmoGroup'
import { GizmoProperties } from './GizmoProperties'
import { BlenderObject } from './BlenderObject'
import { OperatorProperties } from './OperatorProperties'
import { Matrix } from '../../matrix'

/**
 * Gizmo
 * 
 * https://docs.blender.org/api/current/bpy.types.Gizmo.html
 */
export class Gizmo {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Gizmo group this gizmo is a member of
     * @desc GizmoGroup, (readonly)
     */
    public get group(): GizmoGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.group`, GizmoGroup)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_highlight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_highlight`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_modal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_modal`)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get matrix_world(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_world`, 'number', 4, 4)
    }

    /**
     * 
     * @desc GizmoProperties, (readonly, never None)
     */
    public get properties(): GizmoProperties {
        return PythonInterop.getClass(this.interop, `${this.accessor}.properties`, GizmoProperties)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get alpha_highlight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha_highlight`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get color_highlight(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color_highlight`, 'number', 3)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get hide_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_select`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get line_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.line_width`)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_basis(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, 'number', 4, 4)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_offset(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_offset`, 'number', 4, 4)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_space(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_space`, 'number', 4, 4)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get scale_basis(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_basis`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Depth bias used for selection
     * @desc float in [-inf, inf], default 0.0
     */
    public get select_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.select_bias`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_draw_hover(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_draw_hover`)
    }

    /**
     * Draw while dragging
     * @desc boolean, default False
     */
    public get use_draw_modal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_draw_modal`)
    }

    /**
     * Scale the offset matrix (use to apply screen-space offset)
     * @desc boolean, default False
     */
    public get use_draw_offset_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_draw_offset_scale`)
    }

    /**
     * Use scale when calculating the matrix
     * @desc boolean, default False
     */
    public get use_draw_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_draw_scale`)
    }

    /**
     * Show an indicator for the current value while dragging
     * @desc boolean, default False
     */
    public get use_draw_value(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_draw_value`)
    }

    /**
     * When highlighted, do not pass events through to be handled by other keymaps
     * @desc boolean, default False
     */
    public get use_event_handle_all(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_event_handle_all`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_grab_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_grab_cursor`)
    }

    /**
     * Merge active tool properties on activation (does not overwrite existing)
     * @desc boolean, default False
     */
    public get use_operator_tool_properties(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_operator_tool_properties`)
    }

    /**
     * Don’t write into the depth buffer
     * @desc boolean, default False
     */
    public get use_select_background(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_select_background`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set alpha_highlight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha_highlight`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set color_highlight(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color_highlight`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set hide_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_select`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set line_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.line_width`, value)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_basis(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, value)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_offset(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_offset`, value)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_space(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_space`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set scale_basis(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_basis`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Depth bias used for selection
     * @desc float in [-inf, inf], default 0.0
     */
    public set select_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.select_bias`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_draw_hover(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_draw_hover`, value)
    }

    /**
     * Draw while dragging
     * @desc boolean, default False
     */
    public set use_draw_modal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_draw_modal`, value)
    }

    /**
     * Scale the offset matrix (use to apply screen-space offset)
     * @desc boolean, default False
     */
    public set use_draw_offset_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_draw_offset_scale`, value)
    }

    /**
     * Use scale when calculating the matrix
     * @desc boolean, default False
     */
    public set use_draw_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_draw_scale`, value)
    }

    /**
     * Show an indicator for the current value while dragging
     * @desc boolean, default False
     */
    public set use_draw_value(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_draw_value`, value)
    }

    /**
     * When highlighted, do not pass events through to be handled by other keymaps
     * @desc boolean, default False
     */
    public set use_event_handle_all(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_event_handle_all`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_grab_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_grab_cursor`, value)
    }

    /**
     * Merge active tool properties on activation (does not overwrite existing)
     * @desc boolean, default False
     */
    public set use_operator_tool_properties(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_operator_tool_properties`, value)
    }

    /**
     * Don’t write into the depth buffer
     * @desc boolean, default False
     */
    public set use_select_background(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_select_background`, value)
    }

    /**
     * 
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    /**
     * 
     * @desc void
     */
    public draw_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_select`, {})
    }

    /**
     * 
     * @desc int in [-1, inf]
     */
    public test_select(options: { location?: [number, number] }): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.test_select`, options)
    }

    /**
     * 
     * @desc enum set in {'RUNNING_MODAL', 'CANCELLED', 'FINISHED', 'PASS_THROUGH', 'INTERFACE'}
     */
    public modal(options: { tweak?: ('PRECISE' | 'SNAP')[] }): ('RUNNING_MODAL' | 'CANCELLED' | 'FINISHED' | 'PASS_THROUGH' | 'INTERFACE')[] {
        return PythonInterop.callEnumSet(this.interop, `${this.accessor}.modal`, options)
    }

    /**
     * 
     * @desc void
     */
    public setup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.setup`, {})
    }

    /**
     * 
     * @desc enum set in {'RUNNING_MODAL', 'CANCELLED', 'FINISHED', 'PASS_THROUGH', 'INTERFACE'}
     */
    public invoke(): ('RUNNING_MODAL' | 'CANCELLED' | 'FINISHED' | 'PASS_THROUGH' | 'INTERFACE')[] {
        return PythonInterop.callEnumSet(this.interop, `${this.accessor}.invoke`, {})
    }

    /**
     * 
     * @desc void
     */
    public exit(options: { cancel?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.exit`, options)
    }

    /**
     * 
     * @desc void
     */
    public select_refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_refresh`, {})
    }

    /**
     * Draw a box
     * @desc void
     */
    public draw_preset_box(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], select_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_preset_box`, options)
    }

    /**
     * Draw a box
     * @desc void
     */
    public draw_preset_arrow(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], axis?: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z', select_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_preset_arrow`, options)
    }

    /**
     * Draw a box
     * @desc void
     */
    public draw_preset_circle(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], axis?: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z', select_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_preset_circle`, options)
    }

    /**
     * Draw the face-map of a mesh object
     * @desc void
     */
    public draw_preset_facemap(options: { object?: BlenderObject, face_map?: number, select_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_preset_facemap`, options)
    }

    /**
     * 
     * @desc void
     */
    public target_set_prop(options: { target?: string, data?: unknown, property?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_set_prop`, options)
    }

    /**
     * Operator to run when activating the gizmo (overrides property targets)
     * @desc OperatorProperties
     */
    public target_set_operator(options: { operator?: string, index?: number }): OperatorProperties {
        return PythonInterop.callClass(this.interop, `${this.accessor}.target_set_operator`, options, OperatorProperties)
    }

    /**
     * 
     * @desc boolean
     */
    public target_is_valid(options: { property?: string }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.target_is_valid`, options)
    }

    /**
     * Draw a shape created form bpy.types.Gizmo.draw_custom_shape.
     * @desc void
     */
    public draw_custom_shape(options: { shape?: undefined, matrix?: unknown, select_id?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_custom_shape`, options)
    }

    /**
     * Get the range for this target property.
     * @desc tuple pair
     */
    public target_get_range(options: { target?: string }): any[] {
        return PythonInterop.callTuple(this.interop, `${this.accessor}.target_get_range`, options)
    }

    /**
     * Get the value of this target property.
     * @desc Single value or array based on the target type
     */
    public target_get_value(options: { target?: string }): number | number[] {
        return PythonInterop.callUnion(this.interop, `${this.accessor}.target_get_value`, options)
    }

    /**
     * Assigns callbacks to a gizmos property.
     * @desc void
     */
    public target_set_handler(options: { get?: Function, set?: Function, range?: Function }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_set_handler`, options)
    }

    /**
     * Set the value of this target property.
     * @desc void
     */
    public target_set_value(options: { target?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_set_value`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
