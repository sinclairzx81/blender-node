import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeWidgetColors } from './ThemeWidgetColors'
import { ThemeWidgetStateColors } from './ThemeWidgetStateColors'

/**
 * ThemeUserInterface
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeUserInterface.html
 */
export class ThemeUserInterface {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_box(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_box`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_list_item(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_list_item`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_menu(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_menu`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_menu_back(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_menu_back`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_menu_item(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_menu_item`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_num(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_num`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_numslider(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_numslider`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_option(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_option`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_pie_menu(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_pie_menu`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_progress(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_progress`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_pulldown(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_pulldown`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_radio(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_radio`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_regular(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_regular`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_scroll(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_scroll`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetStateColors, (readonly, never None)
     */
    public get wcol_state(): ThemeWidgetStateColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_state`, ThemeWidgetStateColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_tab(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_tab`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_text(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_text`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_toggle(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_toggle`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_tool(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_tool`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_toolbar_item(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_toolbar_item`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc ThemeWidgetColors, (readonly, never None)
     */
    public get wcol_tooltip(): ThemeWidgetColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.wcol_tooltip`, ThemeWidgetColors)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get axis_x(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.axis_x`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get axis_y(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.axis_y`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get axis_z(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.axis_z`, 'number', 3)
    }

    /**
     * Color of the outline of the editors and their round corners
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get editor_outline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.editor_outline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gizmo_a(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gizmo_a`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gizmo_b(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gizmo_b`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gizmo_hi(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gizmo_hi`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gizmo_primary(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gizmo_primary`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gizmo_secondary(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gizmo_secondary`, 'number', 3)
    }

    /**
     * Transparency of icons in the interface, to reduce contrast
     * @desc float in [0, 1], default 0.0
     */
    public get icon_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.icon_alpha`)
    }

    /**
     * Control the intensity of the border around themes icons
     * @desc float in [0, 1], default 0.0
     */
    public get icon_border_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.icon_border_intensity`)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_collection(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_collection`, 'number', 4)
    }

    /**
     * Color of folders in the file browser
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_folder(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_folder`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_modifier(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_modifier`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_object(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_object`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_object_data(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_object_data`, 'number', 4)
    }

    /**
     * Saturation of icons in the interface
     * @desc float in [0, 1], default 0.0
     */
    public get icon_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.icon_saturation`)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_scene(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_scene`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get icon_shading(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.icon_shading`, 'number', 4)
    }

    /**
     * Blending factor for menu shadows
     * @desc float in [0.01, 1], default 0.0
     */
    public get menu_shadow_fac(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.menu_shadow_fac`)
    }

    /**
     * Width of menu shadows, set to zero to disable
     * @desc int in [0, 24], default 0
     */
    public get menu_shadow_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.menu_shadow_width`)
    }

    /**
     * Color of the 1px shadow line underlying widgets
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get widget_emboss(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.widget_emboss`, 'number', 4)
    }

    /**
     * Color of the interface widgets text insertion cursor (caret)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get widget_text_cursor(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.widget_text_cursor`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set axis_x(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.axis_x`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set axis_y(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.axis_y`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set axis_z(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.axis_z`, value)
    }

    /**
     * Color of the outline of the editors and their round corners
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set editor_outline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.editor_outline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gizmo_a(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gizmo_a`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gizmo_b(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gizmo_b`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gizmo_hi(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gizmo_hi`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gizmo_primary(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gizmo_primary`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gizmo_secondary(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gizmo_secondary`, value)
    }

    /**
     * Transparency of icons in the interface, to reduce contrast
     * @desc float in [0, 1], default 0.0
     */
    public set icon_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.icon_alpha`, value)
    }

    /**
     * Control the intensity of the border around themes icons
     * @desc float in [0, 1], default 0.0
     */
    public set icon_border_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.icon_border_intensity`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_collection(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_collection`, value)
    }

    /**
     * Color of folders in the file browser
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_folder(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_folder`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_modifier(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_modifier`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_object(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_object`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_object_data(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_object_data`, value)
    }

    /**
     * Saturation of icons in the interface
     * @desc float in [0, 1], default 0.0
     */
    public set icon_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.icon_saturation`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_scene(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_scene`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set icon_shading(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.icon_shading`, value)
    }

    /**
     * Blending factor for menu shadows
     * @desc float in [0.01, 1], default 0.0
     */
    public set menu_shadow_fac(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.menu_shadow_fac`, value)
    }

    /**
     * Width of menu shadows, set to zero to disable
     * @desc int in [0, 24], default 0
     */
    public set menu_shadow_width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.menu_shadow_width`, value)
    }

    /**
     * Color of the 1px shadow line underlying widgets
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set widget_emboss(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.widget_emboss`, value)
    }

    /**
     * Color of the interface widgets text insertion cursor (caret)
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set widget_text_cursor(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.widget_text_cursor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
