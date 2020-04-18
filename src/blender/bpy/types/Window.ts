import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Stereo3dDisplay } from './Stereo3dDisplay'
import { Scene } from './Scene'
import { Screen } from './Screen'
import { ViewLayer } from './ViewLayer'
import { WorkSpace } from './WorkSpace'
import { Event } from './Event'

/**
 * Window
 * 
 * https://docs.blender.org/api/current/bpy.types.Window.html
 */
export class Window {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Window height
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.height`)
    }

    /**
     * Active workspace and scene follow this window
     * @desc Window, (readonly)
     */
    public get parent(): Window {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, Window)
    }

    /**
     * Settings for stereo 3d display
     * @desc Stereo3dDisplay, (readonly, never None)
     */
    public get stereo_3d_display(): Stereo3dDisplay {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stereo_3d_display`, Stereo3dDisplay)
    }

    /**
     * Window width
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.width`)
    }

    /**
     * Horizontal location of the window
     * @desc int in [-32768, 32767], default 0, (readonly)
     */
    public get x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.x`)
    }

    /**
     * Vertical location of the window
     * @desc int in [-32768, 32767], default 0, (readonly)
     */
    public get y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.y`)
    }

    /**
     * Active scene to be edited in the window
     * @desc Scene, (never None)
     */
    public get scene(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene`, Scene)
    }

    /**
     * Active workspace screen showing in the window
     * @desc Screen, (never None)
     */
    public get screen(): Screen {
        return PythonInterop.getClass(this.interop, `${this.accessor}.screen`, Screen)
    }

    /**
     * The active workspace view layer showing in the window
     * @desc ViewLayer, (never None)
     */
    public get view_layer(): ViewLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_layer`, ViewLayer)
    }

    /**
     * Active workspace showing in the window
     * @desc WorkSpace, (never None)
     */
    public get workspace(): WorkSpace {
        return PythonInterop.getClass(this.interop, `${this.accessor}.workspace`, WorkSpace)
    }

    /**
     * Active scene to be edited in the window
     * @desc Scene, (never None)
     */
    public set scene(value: Scene) {
        PythonInterop.setClass(this.interop, `${this.accessor}.scene`, value)
    }

    /**
     * Active workspace screen showing in the window
     * @desc Screen, (never None)
     */
    public set screen(value: Screen) {
        PythonInterop.setClass(this.interop, `${this.accessor}.screen`, value)
    }

    /**
     * The active workspace view layer showing in the window
     * @desc ViewLayer, (never None)
     */
    public set view_layer(value: ViewLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.view_layer`, value)
    }

    /**
     * Active workspace showing in the window
     * @desc WorkSpace, (never None)
     */
    public set workspace(value: WorkSpace) {
        PythonInterop.setClass(this.interop, `${this.accessor}.workspace`, value)
    }

    /**
     * Set the cursor position
     * @desc void
     */
    public cursor_warp(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_warp`, {})
    }

    /**
     * Set the cursor
     * @desc void
     */
    public cursor_set(options: { cursor?: 'DEFAULT' | 'NONE' | 'WAIT' | 'CROSSHAIR' | 'MOVE_X' | 'MOVE_Y' | 'KNIFE' | 'TEXT' | 'PAINT_BRUSH' | 'PAINT_CROSS' | 'DOT' | 'ERASER' | 'HAND' | 'SCROLL_X' | 'SCROLL_Y' | 'SCROLL_XY' | 'EYEDROPPER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * Restore the previous cursor after calling cursor_modal_set
     * @desc void
     */
    public cursor_modal_set(options: { cursor?: 'DEFAULT' | 'NONE' | 'WAIT' | 'CROSSHAIR' | 'MOVE_X' | 'MOVE_Y' | 'KNIFE' | 'TEXT' | 'PAINT_BRUSH' | 'PAINT_CROSS' | 'DOT' | 'ERASER' | 'HAND' | 'SCROLL_X' | 'SCROLL_Y' | 'SCROLL_XY' | 'EYEDROPPER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_modal_set`, options)
    }

    /**
     * cursor_modal_restore
     * @desc void
     */
    public cursor_modal_restore(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_modal_restore`, {})
    }

    /**
     * event_simulate
     * @desc Event
     */
    public event_simulate(options: { type?: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN', value?: 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING', shift?: boolean, ctrl?: boolean, alt?: boolean, oskey?: boolean }): Event {
        return PythonInterop.callClass(this.interop, `${this.accessor}.event_simulate`, options, Event)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
