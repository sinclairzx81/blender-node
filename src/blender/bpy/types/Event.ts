import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Event
 * 
 * https://docs.blender.org/api/current/bpy.types.Event.html
 */
export class Event {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * True when the Alt/Option key is held
     * @desc boolean, default False, (readonly)
     */
    public get alt(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.alt`)
    }

    /**
     * Single ASCII character for this event
     * @desc string, default '', (readonly, never None)
     */
    public get ascii(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.ascii`)
    }

    /**
     * True when the Ctrl key is held
     * @desc boolean, default False, (readonly)
     */
    public get ctrl(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ctrl`)
    }

    /**
     * The last motion event was an absolute input
     * @desc boolean, default False, (readonly)
     */
    public get is_mouse_absolute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_mouse_absolute`)
    }

    /**
     * The event has tablet data
     * @desc boolean, default False, (readonly)
     */
    public get is_tablet(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_tablet`)
    }

    /**
     * The window relative horizontal location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_prev_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_prev_x`)
    }

    /**
     * The window relative vertical location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_prev_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_prev_y`)
    }

    /**
     * The region relative horizontal location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_region_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_region_x`)
    }

    /**
     * The region relative vertical location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_region_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_region_y`)
    }

    /**
     * The window relative horizontal location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_x`)
    }

    /**
     * The window relative vertical location of the mouse
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get mouse_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mouse_y`)
    }

    /**
     * True when the Cmd key is held
     * @desc boolean, default False, (readonly)
     */
    public get oskey(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.oskey`)
    }

    /**
     * The pressure of the tablet or 1.0 if no tablet present
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get pressure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure`)
    }

    /**
     * True when the Shift key is held
     * @desc boolean, default False, (readonly)
     */
    public get shift(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.shift`)
    }

    /**
     * The pressure of the tablet or zeroes if no tablet present
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get tilt(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tilt`, 'number', 2)
    }

    /**
     * 
     * @desc enum in ['NONE', 'LEFTMOUSE', 'MIDDLEMOUSE', 'RIGHTMOUSE', 'BUTTON4MOUSE', 'BUTTON5MOUSE', 'BUTTON6MOUSE', 'BUTTON7MOUSE', 'PEN', 'ERASER', 'MOUSEMOVE', 'INBETWEEN_MOUSEMOVE', 'TRACKPADPAN', 'TRACKPADZOOM', 'MOUSEROTATE', 'WHEELUPMOUSE', 'WHEELDOWNMOUSE', 'WHEELINMOUSE', 'WHEELOUTMOUSE', 'EVT_TWEAK_L', 'EVT_TWEAK_M', 'EVT_TWEAK_R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'LEFT_CTRL', 'LEFT_ALT', 'LEFT_SHIFT', 'RIGHT_ALT', 'RIGHT_CTRL', 'RIGHT_SHIFT', 'OSKEY', 'APP', 'GRLESS', 'ESC', 'TAB', 'RET', 'SPACE', 'LINE_FEED', 'BACK_SPACE', 'DEL', 'SEMI_COLON', 'PERIOD', 'COMMA', 'QUOTE', 'ACCENT_GRAVE', 'MINUS', 'PLUS', 'SLASH', 'BACK_SLASH', 'EQUAL', 'LEFT_BRACKET', 'RIGHT_BRACKET', 'LEFT_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'NUMPAD_2', 'NUMPAD_4', 'NUMPAD_6', 'NUMPAD_8', 'NUMPAD_1', 'NUMPAD_3', 'NUMPAD_5', 'NUMPAD_7', 'NUMPAD_9', 'NUMPAD_PERIOD', 'NUMPAD_SLASH', 'NUMPAD_ASTERIX', 'NUMPAD_0', 'NUMPAD_MINUS', 'NUMPAD_ENTER', 'NUMPAD_PLUS', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'PAUSE', 'INSERT', 'HOME', 'PAGE_UP', 'PAGE_DOWN', 'END', 'MEDIA_PLAY', 'MEDIA_STOP', 'MEDIA_FIRST', 'MEDIA_LAST', 'TEXTINPUT', 'WINDOW_DEACTIVATE', 'TIMER', 'TIMER0', 'TIMER1', 'TIMER2', 'TIMER_JOBS', 'TIMER_AUTOSAVE', 'TIMER_REPORT', 'TIMERREGION', 'NDOF_MOTION', 'NDOF_BUTTON_MENU', 'NDOF_BUTTON_FIT', 'NDOF_BUTTON_TOP', 'NDOF_BUTTON_BOTTOM', 'NDOF_BUTTON_LEFT', 'NDOF_BUTTON_RIGHT', 'NDOF_BUTTON_FRONT', 'NDOF_BUTTON_BACK', 'NDOF_BUTTON_ISO1', 'NDOF_BUTTON_ISO2', 'NDOF_BUTTON_ROLL_CW', 'NDOF_BUTTON_ROLL_CCW', 'NDOF_BUTTON_SPIN_CW', 'NDOF_BUTTON_SPIN_CCW', 'NDOF_BUTTON_TILT_CW', 'NDOF_BUTTON_TILT_CCW', 'NDOF_BUTTON_ROTATE', 'NDOF_BUTTON_PANZOOM', 'NDOF_BUTTON_DOMINANT', 'NDOF_BUTTON_PLUS', 'NDOF_BUTTON_MINUS', 'NDOF_BUTTON_ESC', 'NDOF_BUTTON_ALT', 'NDOF_BUTTON_SHIFT', 'NDOF_BUTTON_CTRL', 'NDOF_BUTTON_1', 'NDOF_BUTTON_2', 'NDOF_BUTTON_3', 'NDOF_BUTTON_4', 'NDOF_BUTTON_5', 'NDOF_BUTTON_6', 'NDOF_BUTTON_7', 'NDOF_BUTTON_8', 'NDOF_BUTTON_9', 'NDOF_BUTTON_10', 'NDOF_BUTTON_A', 'NDOF_BUTTON_B', 'NDOF_BUTTON_C', 'ACTIONZONE_AREA', 'ACTIONZONE_REGION', 'ACTIONZONE_FULLSCREEN'], default 'NONE', (readonly)
     */
    public get type(): 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Single unicode character for this event
     * @desc string, default '', (readonly, never None)
     */
    public get unicode(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.unicode`)
    }

    /**
     * The type of event, only applies to some
     * @desc enum in ['ANY', 'PRESS', 'RELEASE', 'CLICK', 'DOUBLE_CLICK', 'CLICK_DRAG', 'NORTH', 'NORTH_EAST', 'EAST', 'SOUTH_EAST', 'SOUTH', 'SOUTH_WEST', 'WEST', 'NORTH_WEST', 'NOTHING'], default 'NOTHING', (readonly)
     */
    public get value(): 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.value`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
