import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { WalkNavigation } from './WalkNavigation'

/**
 * PreferencesInput
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesInput.html
 */
export class PreferencesInput {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default True, (readonly)
     */
    public get use_ndof(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ndof`)
    }

    /**
     * Settings for walk navigation mode
     * @desc WalkNavigation, (readonly, never None)
     */
    public get walk_navigation(): WalkNavigation {
        return PythonInterop.getClass(this.interop, `${this.accessor}.walk_navigation`, WalkNavigation)
    }

    /**
     * Number of pixels to drag before a drag event is triggered for keyboard and other non mouse/tablet input (otherwise click events are detected)
     * @desc int in [1, 255], default 30
     */
    public get drag_threshold(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.drag_threshold`)
    }

    /**
     * Number of pixels to drag before a tweak/drag event is triggered for mouse/track-pad input (otherwise click events are detected)
     * @desc int in [1, 255], default 3
     */
    public get drag_threshold_mouse(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.drag_threshold_mouse`)
    }

    /**
     * Number of pixels to drag before a tweak/drag event is triggered for tablet input (otherwise click events are detected)
     * @desc int in [1, 255], default 10
     */
    public get drag_threshold_tablet(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.drag_threshold_tablet`)
    }

    /**
     * Invert the axis of mouse movement for zooming
     * @desc boolean, default False
     */
    public get invert_mouse_zoom(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_mouse_zoom`)
    }

    /**
     * Swap the Mouse Wheel zoom direction
     * @desc boolean, default False
     */
    public get invert_zoom_wheel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_zoom_wheel`)
    }

    /**
     * Time/delay (in ms) for a double click
     * @desc int in [1, 1000], default 350
     */
    public get mouse_double_click_time(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_double_click_time`)
    }

    /**
     * Hold this modifier to emulate the middle mouse button
     * @desc enum in ['ALT', 'OSKEY'], default 'ALT'
     */
    public get mouse_emulate_3_button_modifier(): 'ALT' | 'OSKEY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mouse_emulate_3_button_modifier`)
    }

    /**
     * Number of pixels to before the cursor is considered to have moved (used for cycling selected items on successive clicks)
     * @desc int in [0, 255], default 2
     */
    public get move_threshold(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.move_threshold`)
    }

    /**
     * Which method to use for viewport navigation
     * @desc enum in ['WALK', 'FLY'], default 'WALK'
     */
    public get navigation_mode(): 'WALK' | 'FLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.navigation_mode`)
    }

    /**
     * Threshold of initial movement needed from the device’s rest position
     * @desc float in [0, 1], default 0.1
     */
    public get ndof_deadzone(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ndof_deadzone`)
    }

    /**
     * Device up/down directly controls your Z position
     * @desc boolean, default False
     */
    public get ndof_fly_helicopter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_fly_helicopter`)
    }

    /**
     * Keep horizon level while flying with 3D Mouse
     * @desc boolean, default True
     */
    public get ndof_lock_horizon(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_lock_horizon`)
    }

    /**
     * Overall sensitivity of the 3D Mouse for orbiting
     * @desc float in [0.01, 40], default 4.0
     */
    public get ndof_orbit_sensitivity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ndof_orbit_sensitivity`)
    }

    /**
     * Pan using up/down on the device (otherwise forward/backward)
     * @desc boolean, default False
     */
    public get ndof_pan_yz_swap_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_pan_yz_swap_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_panx_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_panx_invert_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_pany_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_pany_invert_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_panz_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_panz_invert_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_rotx_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_rotx_invert_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_roty_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_roty_invert_axis`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get ndof_rotz_invert_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_rotz_invert_axis`)
    }

    /**
     * Overall sensitivity of the 3D Mouse for panning
     * @desc float in [0.01, 40], default 4.0
     */
    public get ndof_sensitivity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ndof_sensitivity`)
    }

    /**
     * Display the center and axis during rotation
     * @desc boolean, default False
     */
    public get ndof_show_guide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_show_guide`)
    }

    /**
     * Navigation style in the viewport
     * @desc enum in ['FREE', 'ORBIT'], default 'FREE'
     */
    public get ndof_view_navigate_method(): 'FREE' | 'ORBIT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ndof_view_navigate_method`)
    }

    /**
     * Rotation style in the viewport
     * @desc enum in ['TURNTABLE', 'TRACKBALL'], default 'TRACKBALL'
     */
    public get ndof_view_rotate_method(): 'TURNTABLE' | 'TRACKBALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ndof_view_rotate_method`)
    }

    /**
     * Zoom using opposite direction
     * @desc boolean, default True
     */
    public get ndof_zoom_invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ndof_zoom_invert`)
    }

    /**
     * Adjusts softness of the low pressure response onset using a gamma curve
     * @desc float in [-inf, inf], default 0.0
     */
    public get pressure_softness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure_softness`)
    }

    /**
     * Raw input pressure value that is interpreted as 100% by Blender
     * @desc float in [0, 1], default 1.0
     */
    public get pressure_threshold_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure_threshold_max`)
    }

    /**
     * Select the tablet API to use for pressure sensitivity
     * @desc enum in ['AUTOMATIC', 'WINDOWS_INK', 'WINTAB'], default 'AUTOMATIC'
     */
    public get tablet_api(): 'AUTOMATIC' | 'WINDOWS_INK' | 'WINTAB' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tablet_api`)
    }

    /**
     * Automatically switch between orthographic and perspective when changing from top/front/side views
     * @desc boolean, default True
     */
    public get use_auto_perspective(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_perspective`)
    }

    /**
     * When the camera is locked to the view and in fly mode, transform the parent rather than the camera
     * @desc boolean, default False
     */
    public get use_camera_lock_parent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_camera_lock_parent`)
    }

    /**
     * Moving things with a mouse drag confirms when releasing the button
     * @desc boolean, default True
     */
    public get use_drag_immediately(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_drag_immediately`)
    }

    /**
     * Main 1 to 0 keys act as the numpad ones (useful for laptops)
     * @desc boolean, default False
     */
    public get use_emulate_numpad(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_emulate_numpad`)
    }

    /**
     * Allow moving the mouse outside the view on some manipulations (transform, ui control drag)
     * @desc boolean, default True
     */
    public get use_mouse_continuous(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_continuous`)
    }

    /**
     * Use the depth under the mouse to improve view pan/rotate/zoom functionality
     * @desc boolean, default False
     */
    public get use_mouse_depth_navigate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_depth_navigate`)
    }

    /**
     * Emulate Middle Mouse with Alt+Left Mouse
     * @desc boolean, default False
     */
    public get use_mouse_emulate_3_button(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_emulate_3_button`)
    }

    /**
     * When entering numbers while transforming, default to advanced mode for full math expression evaluation
     * @desc boolean, default False
     */
    public get use_numeric_input_advanced(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_numeric_input_advanced`)
    }

    /**
     * Use selection as the pivot point
     * @desc boolean, default False
     */
    public get use_rotate_around_active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotate_around_active`)
    }

    /**
     * If your system uses ‘natural’ scrolling, this option keeps consistent trackpad usage throughout the UI
     * @desc boolean, default False
     */
    public get use_trackpad_natural(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_trackpad_natural`)
    }

    /**
     * Zoom in towards the mouse pointer’s position in the 3D view, rather than the 2D window center
     * @desc boolean, default False
     */
    public get use_zoom_to_mouse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_zoom_to_mouse`)
    }

    /**
     * Orbit method in the viewport
     * @desc enum in ['TURNTABLE', 'TRACKBALL'], default 'TURNTABLE'
     */
    public get view_rotate_method(): 'TURNTABLE' | 'TRACKBALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_rotate_method`)
    }

    /**
     * Scale trackball orbit sensitivity
     * @desc float in [0.1, 10], default 1.0
     */
    public get view_rotate_sensitivity_trackball(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_rotate_sensitivity_trackball`)
    }

    /**
     * Rotation amount per-pixel to control how fast the viewport orbits
     * @desc float in [1.74533e-05, 0.261799], default 0.00698132
     */
    public get view_rotate_sensitivity_turntable(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_rotate_sensitivity_turntable`)
    }

    /**
     * Axis of mouse movement to zoom in or out on
     * @desc enum in ['VERTICAL', 'HORIZONTAL'], default 'VERTICAL'
     */
    public get view_zoom_axis(): 'VERTICAL' | 'HORIZONTAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_zoom_axis`)
    }

    /**
     * Which style to use for viewport scaling
     * @desc enum in ['CONTINUE', 'DOLLY', 'SCALE'], default 'DOLLY'
     */
    public get view_zoom_method(): 'CONTINUE' | 'DOLLY' | 'SCALE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_zoom_method`)
    }

    /**
     * Number of lines scrolled at a time with the mouse wheel
     * @desc int in [0, 32], default 3
     */
    public get wheel_scroll_lines(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.wheel_scroll_lines`)
    }

    /**
     * Number of pixels to drag before a drag event is triggered for keyboard and other non mouse/tablet input (otherwise click events are detected)
     * @desc int in [1, 255], default 30
     */
    public set drag_threshold(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.drag_threshold`, value)
    }

    /**
     * Number of pixels to drag before a tweak/drag event is triggered for mouse/track-pad input (otherwise click events are detected)
     * @desc int in [1, 255], default 3
     */
    public set drag_threshold_mouse(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.drag_threshold_mouse`, value)
    }

    /**
     * Number of pixels to drag before a tweak/drag event is triggered for tablet input (otherwise click events are detected)
     * @desc int in [1, 255], default 10
     */
    public set drag_threshold_tablet(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.drag_threshold_tablet`, value)
    }

    /**
     * Invert the axis of mouse movement for zooming
     * @desc boolean, default False
     */
    public set invert_mouse_zoom(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_mouse_zoom`, value)
    }

    /**
     * Swap the Mouse Wheel zoom direction
     * @desc boolean, default False
     */
    public set invert_zoom_wheel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_zoom_wheel`, value)
    }

    /**
     * Time/delay (in ms) for a double click
     * @desc int in [1, 1000], default 350
     */
    public set mouse_double_click_time(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.mouse_double_click_time`, value)
    }

    /**
     * Hold this modifier to emulate the middle mouse button
     * @desc enum in ['ALT', 'OSKEY'], default 'ALT'
     */
    public set mouse_emulate_3_button_modifier(value: 'ALT' | 'OSKEY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mouse_emulate_3_button_modifier`, value)
    }

    /**
     * Number of pixels to before the cursor is considered to have moved (used for cycling selected items on successive clicks)
     * @desc int in [0, 255], default 2
     */
    public set move_threshold(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.move_threshold`, value)
    }

    /**
     * Which method to use for viewport navigation
     * @desc enum in ['WALK', 'FLY'], default 'WALK'
     */
    public set navigation_mode(value: 'WALK' | 'FLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.navigation_mode`, value)
    }

    /**
     * Threshold of initial movement needed from the device’s rest position
     * @desc float in [0, 1], default 0.1
     */
    public set ndof_deadzone(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ndof_deadzone`, value)
    }

    /**
     * Device up/down directly controls your Z position
     * @desc boolean, default False
     */
    public set ndof_fly_helicopter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_fly_helicopter`, value)
    }

    /**
     * Keep horizon level while flying with 3D Mouse
     * @desc boolean, default True
     */
    public set ndof_lock_horizon(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_lock_horizon`, value)
    }

    /**
     * Overall sensitivity of the 3D Mouse for orbiting
     * @desc float in [0.01, 40], default 4.0
     */
    public set ndof_orbit_sensitivity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ndof_orbit_sensitivity`, value)
    }

    /**
     * Pan using up/down on the device (otherwise forward/backward)
     * @desc boolean, default False
     */
    public set ndof_pan_yz_swap_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_pan_yz_swap_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_panx_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_panx_invert_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_pany_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_pany_invert_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_panz_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_panz_invert_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_rotx_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_rotx_invert_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_roty_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_roty_invert_axis`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set ndof_rotz_invert_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_rotz_invert_axis`, value)
    }

    /**
     * Overall sensitivity of the 3D Mouse for panning
     * @desc float in [0.01, 40], default 4.0
     */
    public set ndof_sensitivity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ndof_sensitivity`, value)
    }

    /**
     * Display the center and axis during rotation
     * @desc boolean, default False
     */
    public set ndof_show_guide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_show_guide`, value)
    }

    /**
     * Navigation style in the viewport
     * @desc enum in ['FREE', 'ORBIT'], default 'FREE'
     */
    public set ndof_view_navigate_method(value: 'FREE' | 'ORBIT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ndof_view_navigate_method`, value)
    }

    /**
     * Rotation style in the viewport
     * @desc enum in ['TURNTABLE', 'TRACKBALL'], default 'TRACKBALL'
     */
    public set ndof_view_rotate_method(value: 'TURNTABLE' | 'TRACKBALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ndof_view_rotate_method`, value)
    }

    /**
     * Zoom using opposite direction
     * @desc boolean, default True
     */
    public set ndof_zoom_invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ndof_zoom_invert`, value)
    }

    /**
     * Adjusts softness of the low pressure response onset using a gamma curve
     * @desc float in [-inf, inf], default 0.0
     */
    public set pressure_softness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pressure_softness`, value)
    }

    /**
     * Raw input pressure value that is interpreted as 100% by Blender
     * @desc float in [0, 1], default 1.0
     */
    public set pressure_threshold_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pressure_threshold_max`, value)
    }

    /**
     * Select the tablet API to use for pressure sensitivity
     * @desc enum in ['AUTOMATIC', 'WINDOWS_INK', 'WINTAB'], default 'AUTOMATIC'
     */
    public set tablet_api(value: 'AUTOMATIC' | 'WINDOWS_INK' | 'WINTAB') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tablet_api`, value)
    }

    /**
     * Automatically switch between orthographic and perspective when changing from top/front/side views
     * @desc boolean, default True
     */
    public set use_auto_perspective(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_perspective`, value)
    }

    /**
     * When the camera is locked to the view and in fly mode, transform the parent rather than the camera
     * @desc boolean, default False
     */
    public set use_camera_lock_parent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_camera_lock_parent`, value)
    }

    /**
     * Moving things with a mouse drag confirms when releasing the button
     * @desc boolean, default True
     */
    public set use_drag_immediately(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_drag_immediately`, value)
    }

    /**
     * Main 1 to 0 keys act as the numpad ones (useful for laptops)
     * @desc boolean, default False
     */
    public set use_emulate_numpad(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_emulate_numpad`, value)
    }

    /**
     * Allow moving the mouse outside the view on some manipulations (transform, ui control drag)
     * @desc boolean, default True
     */
    public set use_mouse_continuous(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_continuous`, value)
    }

    /**
     * Use the depth under the mouse to improve view pan/rotate/zoom functionality
     * @desc boolean, default False
     */
    public set use_mouse_depth_navigate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_depth_navigate`, value)
    }

    /**
     * Emulate Middle Mouse with Alt+Left Mouse
     * @desc boolean, default False
     */
    public set use_mouse_emulate_3_button(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_emulate_3_button`, value)
    }

    /**
     * When entering numbers while transforming, default to advanced mode for full math expression evaluation
     * @desc boolean, default False
     */
    public set use_numeric_input_advanced(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_numeric_input_advanced`, value)
    }

    /**
     * Use selection as the pivot point
     * @desc boolean, default False
     */
    public set use_rotate_around_active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotate_around_active`, value)
    }

    /**
     * If your system uses ‘natural’ scrolling, this option keeps consistent trackpad usage throughout the UI
     * @desc boolean, default False
     */
    public set use_trackpad_natural(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_trackpad_natural`, value)
    }

    /**
     * Zoom in towards the mouse pointer’s position in the 3D view, rather than the 2D window center
     * @desc boolean, default False
     */
    public set use_zoom_to_mouse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_zoom_to_mouse`, value)
    }

    /**
     * Orbit method in the viewport
     * @desc enum in ['TURNTABLE', 'TRACKBALL'], default 'TURNTABLE'
     */
    public set view_rotate_method(value: 'TURNTABLE' | 'TRACKBALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_rotate_method`, value)
    }

    /**
     * Scale trackball orbit sensitivity
     * @desc float in [0.1, 10], default 1.0
     */
    public set view_rotate_sensitivity_trackball(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_rotate_sensitivity_trackball`, value)
    }

    /**
     * Rotation amount per-pixel to control how fast the viewport orbits
     * @desc float in [1.74533e-05, 0.261799], default 0.00698132
     */
    public set view_rotate_sensitivity_turntable(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_rotate_sensitivity_turntable`, value)
    }

    /**
     * Axis of mouse movement to zoom in or out on
     * @desc enum in ['VERTICAL', 'HORIZONTAL'], default 'VERTICAL'
     */
    public set view_zoom_axis(value: 'VERTICAL' | 'HORIZONTAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_zoom_axis`, value)
    }

    /**
     * Which style to use for viewport scaling
     * @desc enum in ['CONTINUE', 'DOLLY', 'SCALE'], default 'DOLLY'
     */
    public set view_zoom_method(value: 'CONTINUE' | 'DOLLY' | 'SCALE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_zoom_method`, value)
    }

    /**
     * Number of lines scrolled at a time with the mouse wheel
     * @desc int in [0, 32], default 3
     */
    public set wheel_scroll_lines(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.wheel_scroll_lines`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
