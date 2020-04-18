import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorRamp } from './ColorRamp'

/**
 * PreferencesView
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesView.html
 */
export class PreferencesView {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color range used for weight visualization in weight painting mode
     * @desc ColorRamp, (readonly, never None)
     */
    public get weight_color_range(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.weight_color_range`, ColorRamp)
    }

    /**
     * Different styles of displaying the color picker widget
     * @desc enum in ['CIRCLE_HSV', 'CIRCLE_HSL', 'SQUARE_SV', 'SQUARE_HS', 'SQUARE_HV'], default 'CIRCLE_HSV'
     */
    public get color_picker_type(): 'CIRCLE_HSV' | 'CIRCLE_HSL' | 'SQUARE_SV' | 'SQUARE_HS' | 'SQUARE_HV' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_picker_type`)
    }

    /**
     * How factor values are displayed
     * @desc enum in ['FACTOR', 'PERCENTAGE'], default 'FACTOR'
     */
    public get factor_display_type(): 'FACTOR' | 'PERCENTAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.factor_display_type`)
    }

    /**
     * Default location where the File Editor will be displayed in
     * @desc enum in ['SCREEN', 'WINDOW'], default 'WINDOW'
     */
    public get filebrowser_display_type(): 'SCREEN' | 'WINDOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filebrowser_display_type`)
    }

    /**
     * Path to interface font
     * @desc string, default '', (never None)
     */
    public get font_path_ui(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.font_path_ui`)
    }

    /**
     * Path to interface mono-space Font
     * @desc string, default '', (never None)
     */
    public get font_path_ui_mono(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.font_path_ui_mono`)
    }

    /**
     * Diameter of the gizmo
     * @desc int in [10, 200], default 75
     */
    public get gizmo_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gizmo_size`)
    }

    /**
     * Default header position for new space-types
     * @desc enum in ['NONE', 'TOP', 'BOTTOM'], default 'NONE'
     */
    public get header_align(): 'NONE' | 'TOP' | 'BOTTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.header_align`)
    }

    /**
     * Language used for translation
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get language(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.language`)
    }

    /**
     * Diameter of the HDRI preview spheres
     * @desc int in [50, 400], default 150
     */
    public get lookdev_sphere_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.lookdev_sphere_size`)
    }

    /**
     * Brightness of the icon
     * @desc int in [0, 10], default 8
     */
    public get mini_axis_brightness(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mini_axis_brightness`)
    }

    /**
     * The axes icon’s size
     * @desc int in [10, 64], default 25
     */
    public get mini_axis_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mini_axis_size`)
    }

    /**
     * Show a small rotating 3D axes in the top right corner of the 3D View
     * @desc enum in ['NONE', 'MINIMAL', 'GIZMO'], default 'GIZMO'
     */
    public get mini_axis_type(): 'NONE' | 'MINIMAL' | 'GIZMO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mini_axis_type`)
    }

    /**
     * Time delay in 1/10 seconds before automatically opening sub level menus
     * @desc int in [1, 40], default 2
     */
    public get open_sublevel_delay(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.open_sublevel_delay`)
    }

    /**
     * Time delay in 1/10 seconds before automatically opening top level menus
     * @desc int in [1, 40], default 5
     */
    public get open_toplevel_delay(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.open_toplevel_delay`)
    }

    /**
     * Time needed to fully animate the pie to unfolded state (in 1/100ths of sec)
     * @desc int in [0, 1000], default 6
     */
    public get pie_animation_timeout(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_animation_timeout`)
    }

    /**
     * Pie menus will use the initial mouse position as center for this amount of time (in 1/100ths of sec)
     * @desc int in [0, 1000], default 0
     */
    public get pie_initial_timeout(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_initial_timeout`)
    }

    /**
     * Distance threshold after which selection is made (zero to disable)
     * @desc int in [0, 1000], default 0
     */
    public get pie_menu_confirm(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_menu_confirm`)
    }

    /**
     * Pie menu size in pixels
     * @desc int in [0, 1000], default 100
     */
    public get pie_menu_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_menu_radius`)
    }

    /**
     * Distance from center needed before a selection can be made
     * @desc int in [0, 1000], default 12
     */
    public get pie_menu_threshold(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_menu_threshold`)
    }

    /**
     * Pie menu button held longer than this will dismiss menu on release.(in 1/100ths of sec)
     * @desc int in [0, 1000], default 20
     */
    public get pie_tap_timeout(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pie_tap_timeout`)
    }

    /**
     * Default location where rendered images will be displayed in
     * @desc enum in ['NONE', 'SCREEN', 'AREA', 'WINDOW'], default 'WINDOW'
     */
    public get render_display_type(): 'NONE' | 'SCREEN' | 'AREA' | 'WINDOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.render_display_type`)
    }

    /**
     * Rotation step for numerical pad keys (2 4 6 8)
     * @desc float in [0, 90], default 15.0
     */
    public get rotation_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation_angle`)
    }

    /**
     * Only show enabled add-ons. Un-check to see all installed add-ons
     * @desc boolean, default False
     */
    public get show_addons_enabled_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_addons_enabled_only`)
    }

    /**
     * Use a column layout for toolbox
     * @desc boolean, default True
     */
    public get show_column_layout(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_column_layout`)
    }

    /**
     * Show options for developers (edit source in context menu, geometry indices)
     * @desc boolean, default False
     */
    public get show_developer_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_developer_ui`)
    }

    /**
     * Use transform gizmos by default
     * @desc boolean, default True
     */
    public get show_gizmo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo`)
    }

    /**
     * Use large mouse cursors when available
     * @desc boolean, default False
     */
    public get show_large_cursors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_large_cursors`)
    }

    /**
     * Split and join editors by dragging from corners
     * @desc boolean, default False
     */
    public get show_layout_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_layout_ui`)
    }

    /**
     * Show navigation controls in 2D & 3D views which do not have scroll bars
     * @desc boolean, default True
     */
    public get show_navigate_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_navigate_ui`)
    }

    /**
     * Display objects name and frame number in 3D view
     * @desc boolean, default True
     */
    public get show_object_info(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_info`)
    }

    /**
     * Show the frames per second screen refresh rate, while animation is played back
     * @desc boolean, default True
     */
    public get show_playback_fps(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_playback_fps`)
    }

    /**
     * Display splash screen on startup
     * @desc boolean, default False
     */
    public get show_splash(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_splash`)
    }

    /**
     * Display tooltips (when off hold Alt to force display)
     * @desc boolean, default True
     */
    public get show_tooltips(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_tooltips`)
    }

    /**
     * Show Python references in tooltips
     * @desc boolean, default False
     */
    public get show_tooltips_python(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_tooltips_python`)
    }

    /**
     * Show the name of the view’s direction in each 3D View
     * @desc boolean, default True
     */
    public get show_view_name(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_view_name`)
    }

    /**
     * Time to animate the view in milliseconds, zero to disable
     * @desc int in [0, 1000], default 200
     */
    public get smooth_view(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.smooth_view`)
    }

    /**
     * Method for making user interface text render sharp
     * @desc enum in ['AUTO', 'NONE', 'SLIGHT', 'FULL'], default 'AUTO'
     */
    public get text_hinting(): 'AUTO' | 'NONE' | 'SLIGHT' | 'FULL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.text_hinting`)
    }

    /**
     * Format of Time Codes displayed when not displaying timing in terms of frames
     * @desc enum in ['MINIMAL', 'SMPTE', 'SMPTE_COMPACT', 'MILLISECONDS', 'SECONDS_ONLY'], default 'MINIMAL'
     */
    public get timecode_style(): 'MINIMAL' | 'SMPTE' | 'SMPTE_COMPACT' | 'MILLISECONDS' | 'SECONDS_ONLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.timecode_style`)
    }

    /**
     * Changes the thickness of widget outlines, lines and points in the interface, for high DPI displays
     * @desc enum in ['THIN', 'AUTO', 'THICK'], default 'AUTO'
     */
    public get ui_line_width(): 'THIN' | 'AUTO' | 'THICK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ui_line_width`)
    }

    /**
     * Changes the size of the fonts and widgets in the interface
     * @desc float in [0.25, 4], default 1.0
     */
    public get ui_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ui_scale`)
    }

    /**
     * Otherwise menus, etc will always be top to bottom, left to right, no matter opening direction
     * @desc boolean, default False
     */
    public get use_directional_menus(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_directional_menus`)
    }

    /**
     * Enable UI translation and use international fonts
     * @desc boolean, default False
     */
    public get use_international_fonts(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_international_fonts`)
    }

    /**
     * Open menu buttons and pulldowns automatically when the mouse is hovering
     * @desc boolean, default False
     */
    public get use_mouse_over_open(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_over_open`)
    }

    /**
     * Ask for confirmation when quitting with unsaved changes
     * @desc boolean, default True
     */
    public get use_save_prompt(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_save_prompt`)
    }

    /**
     * Draw user interface text anti-aliased
     * @desc boolean, default False
     */
    public get use_text_antialiasing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_text_antialiasing`)
    }

    /**
     * Translate all labels in menus, buttons and panels (note that this might make it hard to follow tutorials or the manual)
     * @desc boolean, default False
     */
    public get use_translate_interface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_translate_interface`)
    }

    /**
     * Translate the names of new data-blocks (objects, materials…)
     * @desc boolean, default False
     */
    public get use_translate_new_dataname(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_translate_new_dataname`)
    }

    /**
     * Translate the descriptions when hovering UI elements (recommended)
     * @desc boolean, default True
     */
    public get use_translate_tooltips(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_translate_tooltips`)
    }

    /**
     * Enable color range used for weight visualization in weight painting mode
     * @desc boolean, default False
     */
    public get use_weight_color_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_weight_color_range`)
    }

    /**
     * Minimum number of pixels between each gridline in 2D Viewports
     * @desc int in [1, 500], default 45
     */
    public get view2d_grid_spacing_min(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.view2d_grid_spacing_min`)
    }

    /**
     * Keyframes around cursor that we zoom around
     * @desc int in [1, 500], default 0
     */
    public get view_frame_keyframes(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.view_frame_keyframes`)
    }

    /**
     * Seconds around cursor that we zoom around
     * @desc float in [0, 10000], default 0.0
     */
    public get view_frame_seconds(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_frame_seconds`)
    }

    /**
     * How zooming to frame focuses around current frame
     * @desc enum in ['KEEP_RANGE', 'SECONDS', 'KEYFRAMES'], default 'KEEP_RANGE'
     */
    public get view_frame_type(): 'KEEP_RANGE' | 'SECONDS' | 'KEYFRAMES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_frame_type`)
    }

    /**
     * Different styles of displaying the color picker widget
     * @desc enum in ['CIRCLE_HSV', 'CIRCLE_HSL', 'SQUARE_SV', 'SQUARE_HS', 'SQUARE_HV'], default 'CIRCLE_HSV'
     */
    public set color_picker_type(value: 'CIRCLE_HSV' | 'CIRCLE_HSL' | 'SQUARE_SV' | 'SQUARE_HS' | 'SQUARE_HV') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_picker_type`, value)
    }

    /**
     * How factor values are displayed
     * @desc enum in ['FACTOR', 'PERCENTAGE'], default 'FACTOR'
     */
    public set factor_display_type(value: 'FACTOR' | 'PERCENTAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.factor_display_type`, value)
    }

    /**
     * Default location where the File Editor will be displayed in
     * @desc enum in ['SCREEN', 'WINDOW'], default 'WINDOW'
     */
    public set filebrowser_display_type(value: 'SCREEN' | 'WINDOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filebrowser_display_type`, value)
    }

    /**
     * Path to interface font
     * @desc string, default '', (never None)
     */
    public set font_path_ui(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.font_path_ui`, value)
    }

    /**
     * Path to interface mono-space Font
     * @desc string, default '', (never None)
     */
    public set font_path_ui_mono(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.font_path_ui_mono`, value)
    }

    /**
     * Diameter of the gizmo
     * @desc int in [10, 200], default 75
     */
    public set gizmo_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gizmo_size`, value)
    }

    /**
     * Default header position for new space-types
     * @desc enum in ['NONE', 'TOP', 'BOTTOM'], default 'NONE'
     */
    public set header_align(value: 'NONE' | 'TOP' | 'BOTTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.header_align`, value)
    }

    /**
     * Language used for translation
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set language(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.language`, value)
    }

    /**
     * Diameter of the HDRI preview spheres
     * @desc int in [50, 400], default 150
     */
    public set lookdev_sphere_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.lookdev_sphere_size`, value)
    }

    /**
     * Brightness of the icon
     * @desc int in [0, 10], default 8
     */
    public set mini_axis_brightness(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.mini_axis_brightness`, value)
    }

    /**
     * The axes icon’s size
     * @desc int in [10, 64], default 25
     */
    public set mini_axis_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.mini_axis_size`, value)
    }

    /**
     * Show a small rotating 3D axes in the top right corner of the 3D View
     * @desc enum in ['NONE', 'MINIMAL', 'GIZMO'], default 'GIZMO'
     */
    public set mini_axis_type(value: 'NONE' | 'MINIMAL' | 'GIZMO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mini_axis_type`, value)
    }

    /**
     * Time delay in 1/10 seconds before automatically opening sub level menus
     * @desc int in [1, 40], default 2
     */
    public set open_sublevel_delay(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.open_sublevel_delay`, value)
    }

    /**
     * Time delay in 1/10 seconds before automatically opening top level menus
     * @desc int in [1, 40], default 5
     */
    public set open_toplevel_delay(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.open_toplevel_delay`, value)
    }

    /**
     * Time needed to fully animate the pie to unfolded state (in 1/100ths of sec)
     * @desc int in [0, 1000], default 6
     */
    public set pie_animation_timeout(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_animation_timeout`, value)
    }

    /**
     * Pie menus will use the initial mouse position as center for this amount of time (in 1/100ths of sec)
     * @desc int in [0, 1000], default 0
     */
    public set pie_initial_timeout(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_initial_timeout`, value)
    }

    /**
     * Distance threshold after which selection is made (zero to disable)
     * @desc int in [0, 1000], default 0
     */
    public set pie_menu_confirm(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_menu_confirm`, value)
    }

    /**
     * Pie menu size in pixels
     * @desc int in [0, 1000], default 100
     */
    public set pie_menu_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_menu_radius`, value)
    }

    /**
     * Distance from center needed before a selection can be made
     * @desc int in [0, 1000], default 12
     */
    public set pie_menu_threshold(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_menu_threshold`, value)
    }

    /**
     * Pie menu button held longer than this will dismiss menu on release.(in 1/100ths of sec)
     * @desc int in [0, 1000], default 20
     */
    public set pie_tap_timeout(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pie_tap_timeout`, value)
    }

    /**
     * Default location where rendered images will be displayed in
     * @desc enum in ['NONE', 'SCREEN', 'AREA', 'WINDOW'], default 'WINDOW'
     */
    public set render_display_type(value: 'NONE' | 'SCREEN' | 'AREA' | 'WINDOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.render_display_type`, value)
    }

    /**
     * Rotation step for numerical pad keys (2 4 6 8)
     * @desc float in [0, 90], default 15.0
     */
    public set rotation_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation_angle`, value)
    }

    /**
     * Only show enabled add-ons. Un-check to see all installed add-ons
     * @desc boolean, default False
     */
    public set show_addons_enabled_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_addons_enabled_only`, value)
    }

    /**
     * Use a column layout for toolbox
     * @desc boolean, default True
     */
    public set show_column_layout(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_column_layout`, value)
    }

    /**
     * Show options for developers (edit source in context menu, geometry indices)
     * @desc boolean, default False
     */
    public set show_developer_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_developer_ui`, value)
    }

    /**
     * Use transform gizmos by default
     * @desc boolean, default True
     */
    public set show_gizmo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo`, value)
    }

    /**
     * Use large mouse cursors when available
     * @desc boolean, default False
     */
    public set show_large_cursors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_large_cursors`, value)
    }

    /**
     * Split and join editors by dragging from corners
     * @desc boolean, default False
     */
    public set show_layout_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_layout_ui`, value)
    }

    /**
     * Show navigation controls in 2D & 3D views which do not have scroll bars
     * @desc boolean, default True
     */
    public set show_navigate_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_navigate_ui`, value)
    }

    /**
     * Display objects name and frame number in 3D view
     * @desc boolean, default True
     */
    public set show_object_info(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_info`, value)
    }

    /**
     * Show the frames per second screen refresh rate, while animation is played back
     * @desc boolean, default True
     */
    public set show_playback_fps(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_playback_fps`, value)
    }

    /**
     * Display splash screen on startup
     * @desc boolean, default False
     */
    public set show_splash(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_splash`, value)
    }

    /**
     * Display tooltips (when off hold Alt to force display)
     * @desc boolean, default True
     */
    public set show_tooltips(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_tooltips`, value)
    }

    /**
     * Show Python references in tooltips
     * @desc boolean, default False
     */
    public set show_tooltips_python(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_tooltips_python`, value)
    }

    /**
     * Show the name of the view’s direction in each 3D View
     * @desc boolean, default True
     */
    public set show_view_name(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_view_name`, value)
    }

    /**
     * Time to animate the view in milliseconds, zero to disable
     * @desc int in [0, 1000], default 200
     */
    public set smooth_view(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.smooth_view`, value)
    }

    /**
     * Method for making user interface text render sharp
     * @desc enum in ['AUTO', 'NONE', 'SLIGHT', 'FULL'], default 'AUTO'
     */
    public set text_hinting(value: 'AUTO' | 'NONE' | 'SLIGHT' | 'FULL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.text_hinting`, value)
    }

    /**
     * Format of Time Codes displayed when not displaying timing in terms of frames
     * @desc enum in ['MINIMAL', 'SMPTE', 'SMPTE_COMPACT', 'MILLISECONDS', 'SECONDS_ONLY'], default 'MINIMAL'
     */
    public set timecode_style(value: 'MINIMAL' | 'SMPTE' | 'SMPTE_COMPACT' | 'MILLISECONDS' | 'SECONDS_ONLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.timecode_style`, value)
    }

    /**
     * Changes the thickness of widget outlines, lines and points in the interface, for high DPI displays
     * @desc enum in ['THIN', 'AUTO', 'THICK'], default 'AUTO'
     */
    public set ui_line_width(value: 'THIN' | 'AUTO' | 'THICK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ui_line_width`, value)
    }

    /**
     * Changes the size of the fonts and widgets in the interface
     * @desc float in [0.25, 4], default 1.0
     */
    public set ui_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ui_scale`, value)
    }

    /**
     * Otherwise menus, etc will always be top to bottom, left to right, no matter opening direction
     * @desc boolean, default False
     */
    public set use_directional_menus(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_directional_menus`, value)
    }

    /**
     * Enable UI translation and use international fonts
     * @desc boolean, default False
     */
    public set use_international_fonts(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_international_fonts`, value)
    }

    /**
     * Open menu buttons and pulldowns automatically when the mouse is hovering
     * @desc boolean, default False
     */
    public set use_mouse_over_open(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_over_open`, value)
    }

    /**
     * Ask for confirmation when quitting with unsaved changes
     * @desc boolean, default True
     */
    public set use_save_prompt(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_save_prompt`, value)
    }

    /**
     * Draw user interface text anti-aliased
     * @desc boolean, default False
     */
    public set use_text_antialiasing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_text_antialiasing`, value)
    }

    /**
     * Translate all labels in menus, buttons and panels (note that this might make it hard to follow tutorials or the manual)
     * @desc boolean, default False
     */
    public set use_translate_interface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_translate_interface`, value)
    }

    /**
     * Translate the names of new data-blocks (objects, materials…)
     * @desc boolean, default False
     */
    public set use_translate_new_dataname(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_translate_new_dataname`, value)
    }

    /**
     * Translate the descriptions when hovering UI elements (recommended)
     * @desc boolean, default True
     */
    public set use_translate_tooltips(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_translate_tooltips`, value)
    }

    /**
     * Enable color range used for weight visualization in weight painting mode
     * @desc boolean, default False
     */
    public set use_weight_color_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_weight_color_range`, value)
    }

    /**
     * Minimum number of pixels between each gridline in 2D Viewports
     * @desc int in [1, 500], default 45
     */
    public set view2d_grid_spacing_min(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.view2d_grid_spacing_min`, value)
    }

    /**
     * Keyframes around cursor that we zoom around
     * @desc int in [1, 500], default 0
     */
    public set view_frame_keyframes(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.view_frame_keyframes`, value)
    }

    /**
     * Seconds around cursor that we zoom around
     * @desc float in [0, 10000], default 0.0
     */
    public set view_frame_seconds(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_frame_seconds`, value)
    }

    /**
     * How zooming to frame focuses around current frame
     * @desc enum in ['KEEP_RANGE', 'SECONDS', 'KEYFRAMES'], default 'KEEP_RANGE'
     */
    public set view_frame_type(value: 'KEEP_RANGE' | 'SECONDS' | 'KEYFRAMES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_frame_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
