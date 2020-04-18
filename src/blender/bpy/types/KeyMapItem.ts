import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { OperatorProperties } from './OperatorProperties'

/**
 * KeyMapItem
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyMapItem.html
 */
export class KeyMapItem {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * ID of the item
     * @desc int in [-32768, 32767], default 0, (readonly)
     */
    public get id(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.id`)
    }

    /**
     * Is this keymap item user defined (doesn’t just replace a builtin item)
     * @desc boolean, default False, (readonly)
     */
    public get is_user_defined(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_user_defined`)
    }

    /**
     * Is this keymap item modified by the user
     * @desc boolean, default False, (readonly)
     */
    public get is_user_modified(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_user_modified`)
    }

    /**
     * Name of operator (translated) to call on input event
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Properties to set when the operator is called
     * @desc OperatorProperties, (readonly)
     */
    public get properties(): OperatorProperties {
        return PythonInterop.getClass(this.interop, `${this.accessor}.properties`, OperatorProperties)
    }

    /**
     * Activate or deactivate item
     * @desc boolean, default False
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * Alt key pressed
     * @desc boolean, default False
     */
    public get alt(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.alt`)
    }

    /**
     * Any modifier keys pressed
     * @desc boolean, default False
     */
    public get any(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.any`)
    }

    /**
     * Control key pressed
     * @desc boolean, default False
     */
    public get ctrl(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.ctrl`)
    }

    /**
     * Identifier of operator to call on input event
     * @desc string, default '', (never None)
     */
    public get idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.idname`)
    }

    /**
     * Regular key pressed as a modifier
     * @desc enum in ['NONE', 'LEFTMOUSE', 'MIDDLEMOUSE', 'RIGHTMOUSE', 'BUTTON4MOUSE', 'BUTTON5MOUSE', 'BUTTON6MOUSE', 'BUTTON7MOUSE', 'PEN', 'ERASER', 'MOUSEMOVE', 'INBETWEEN_MOUSEMOVE', 'TRACKPADPAN', 'TRACKPADZOOM', 'MOUSEROTATE', 'WHEELUPMOUSE', 'WHEELDOWNMOUSE', 'WHEELINMOUSE', 'WHEELOUTMOUSE', 'EVT_TWEAK_L', 'EVT_TWEAK_M', 'EVT_TWEAK_R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'LEFT_CTRL', 'LEFT_ALT', 'LEFT_SHIFT', 'RIGHT_ALT', 'RIGHT_CTRL', 'RIGHT_SHIFT', 'OSKEY', 'APP', 'GRLESS', 'ESC', 'TAB', 'RET', 'SPACE', 'LINE_FEED', 'BACK_SPACE', 'DEL', 'SEMI_COLON', 'PERIOD', 'COMMA', 'QUOTE', 'ACCENT_GRAVE', 'MINUS', 'PLUS', 'SLASH', 'BACK_SLASH', 'EQUAL', 'LEFT_BRACKET', 'RIGHT_BRACKET', 'LEFT_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'NUMPAD_2', 'NUMPAD_4', 'NUMPAD_6', 'NUMPAD_8', 'NUMPAD_1', 'NUMPAD_3', 'NUMPAD_5', 'NUMPAD_7', 'NUMPAD_9', 'NUMPAD_PERIOD', 'NUMPAD_SLASH', 'NUMPAD_ASTERIX', 'NUMPAD_0', 'NUMPAD_MINUS', 'NUMPAD_ENTER', 'NUMPAD_PLUS', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'PAUSE', 'INSERT', 'HOME', 'PAGE_UP', 'PAGE_DOWN', 'END', 'MEDIA_PLAY', 'MEDIA_STOP', 'MEDIA_FIRST', 'MEDIA_LAST', 'TEXTINPUT', 'WINDOW_DEACTIVATE', 'TIMER', 'TIMER0', 'TIMER1', 'TIMER2', 'TIMER_JOBS', 'TIMER_AUTOSAVE', 'TIMER_REPORT', 'TIMERREGION', 'NDOF_MOTION', 'NDOF_BUTTON_MENU', 'NDOF_BUTTON_FIT', 'NDOF_BUTTON_TOP', 'NDOF_BUTTON_BOTTOM', 'NDOF_BUTTON_LEFT', 'NDOF_BUTTON_RIGHT', 'NDOF_BUTTON_FRONT', 'NDOF_BUTTON_BACK', 'NDOF_BUTTON_ISO1', 'NDOF_BUTTON_ISO2', 'NDOF_BUTTON_ROLL_CW', 'NDOF_BUTTON_ROLL_CCW', 'NDOF_BUTTON_SPIN_CW', 'NDOF_BUTTON_SPIN_CCW', 'NDOF_BUTTON_TILT_CW', 'NDOF_BUTTON_TILT_CCW', 'NDOF_BUTTON_ROTATE', 'NDOF_BUTTON_PANZOOM', 'NDOF_BUTTON_DOMINANT', 'NDOF_BUTTON_PLUS', 'NDOF_BUTTON_MINUS', 'NDOF_BUTTON_ESC', 'NDOF_BUTTON_ALT', 'NDOF_BUTTON_SHIFT', 'NDOF_BUTTON_CTRL', 'NDOF_BUTTON_1', 'NDOF_BUTTON_2', 'NDOF_BUTTON_3', 'NDOF_BUTTON_4', 'NDOF_BUTTON_5', 'NDOF_BUTTON_6', 'NDOF_BUTTON_7', 'NDOF_BUTTON_8', 'NDOF_BUTTON_9', 'NDOF_BUTTON_10', 'NDOF_BUTTON_A', 'NDOF_BUTTON_B', 'NDOF_BUTTON_C', 'ACTIONZONE_AREA', 'ACTIONZONE_REGION', 'ACTIONZONE_FULLSCREEN'], default 'NONE'
     */
    public get key_modifier(): 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.key_modifier`)
    }

    /**
     * Type of event mapping
     * @desc enum in ['KEYBOARD', 'TWEAK', 'MOUSE', 'NDOF', 'TEXTINPUT', 'TIMER'], default 'KEYBOARD'
     */
    public get map_type(): 'KEYBOARD' | 'TWEAK' | 'MOUSE' | 'NDOF' | 'TEXTINPUT' | 'TIMER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_type`)
    }

    /**
     * Operating system key pressed
     * @desc boolean, default False
     */
    public get oskey(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.oskey`)
    }

    /**
     * The value this event translates to in a modal keymap
     * @desc enum in ['NONE'], default 'NONE'
     */
    public get propvalue(): 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.propvalue`)
    }

    /**
     * Shift key pressed
     * @desc boolean, default False
     */
    public get shift(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.shift`)
    }

    /**
     * Show key map event and property details in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Type of event
     * @desc enum in ['NONE', 'LEFTMOUSE', 'MIDDLEMOUSE', 'RIGHTMOUSE', 'BUTTON4MOUSE', 'BUTTON5MOUSE', 'BUTTON6MOUSE', 'BUTTON7MOUSE', 'PEN', 'ERASER', 'MOUSEMOVE', 'INBETWEEN_MOUSEMOVE', 'TRACKPADPAN', 'TRACKPADZOOM', 'MOUSEROTATE', 'WHEELUPMOUSE', 'WHEELDOWNMOUSE', 'WHEELINMOUSE', 'WHEELOUTMOUSE', 'EVT_TWEAK_L', 'EVT_TWEAK_M', 'EVT_TWEAK_R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'LEFT_CTRL', 'LEFT_ALT', 'LEFT_SHIFT', 'RIGHT_ALT', 'RIGHT_CTRL', 'RIGHT_SHIFT', 'OSKEY', 'APP', 'GRLESS', 'ESC', 'TAB', 'RET', 'SPACE', 'LINE_FEED', 'BACK_SPACE', 'DEL', 'SEMI_COLON', 'PERIOD', 'COMMA', 'QUOTE', 'ACCENT_GRAVE', 'MINUS', 'PLUS', 'SLASH', 'BACK_SLASH', 'EQUAL', 'LEFT_BRACKET', 'RIGHT_BRACKET', 'LEFT_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'NUMPAD_2', 'NUMPAD_4', 'NUMPAD_6', 'NUMPAD_8', 'NUMPAD_1', 'NUMPAD_3', 'NUMPAD_5', 'NUMPAD_7', 'NUMPAD_9', 'NUMPAD_PERIOD', 'NUMPAD_SLASH', 'NUMPAD_ASTERIX', 'NUMPAD_0', 'NUMPAD_MINUS', 'NUMPAD_ENTER', 'NUMPAD_PLUS', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'PAUSE', 'INSERT', 'HOME', 'PAGE_UP', 'PAGE_DOWN', 'END', 'MEDIA_PLAY', 'MEDIA_STOP', 'MEDIA_FIRST', 'MEDIA_LAST', 'TEXTINPUT', 'WINDOW_DEACTIVATE', 'TIMER', 'TIMER0', 'TIMER1', 'TIMER2', 'TIMER_JOBS', 'TIMER_AUTOSAVE', 'TIMER_REPORT', 'TIMERREGION', 'NDOF_MOTION', 'NDOF_BUTTON_MENU', 'NDOF_BUTTON_FIT', 'NDOF_BUTTON_TOP', 'NDOF_BUTTON_BOTTOM', 'NDOF_BUTTON_LEFT', 'NDOF_BUTTON_RIGHT', 'NDOF_BUTTON_FRONT', 'NDOF_BUTTON_BACK', 'NDOF_BUTTON_ISO1', 'NDOF_BUTTON_ISO2', 'NDOF_BUTTON_ROLL_CW', 'NDOF_BUTTON_ROLL_CCW', 'NDOF_BUTTON_SPIN_CW', 'NDOF_BUTTON_SPIN_CCW', 'NDOF_BUTTON_TILT_CW', 'NDOF_BUTTON_TILT_CCW', 'NDOF_BUTTON_ROTATE', 'NDOF_BUTTON_PANZOOM', 'NDOF_BUTTON_DOMINANT', 'NDOF_BUTTON_PLUS', 'NDOF_BUTTON_MINUS', 'NDOF_BUTTON_ESC', 'NDOF_BUTTON_ALT', 'NDOF_BUTTON_SHIFT', 'NDOF_BUTTON_CTRL', 'NDOF_BUTTON_1', 'NDOF_BUTTON_2', 'NDOF_BUTTON_3', 'NDOF_BUTTON_4', 'NDOF_BUTTON_5', 'NDOF_BUTTON_6', 'NDOF_BUTTON_7', 'NDOF_BUTTON_8', 'NDOF_BUTTON_9', 'NDOF_BUTTON_10', 'NDOF_BUTTON_A', 'NDOF_BUTTON_B', 'NDOF_BUTTON_C', 'ACTIONZONE_AREA', 'ACTIONZONE_REGION', 'ACTIONZONE_FULLSCREEN'], default 'NONE'
     */
    public get type(): 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * 
     * @desc enum in ['ANY', 'PRESS', 'RELEASE', 'CLICK', 'DOUBLE_CLICK', 'CLICK_DRAG', 'NORTH', 'NORTH_EAST', 'EAST', 'SOUTH_EAST', 'SOUTH', 'SOUTH_WEST', 'WEST', 'NORTH_WEST', 'NOTHING'], default 'NOTHING'
     */
    public get value(): 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.value`)
    }

    /**
     * Activate or deactivate item
     * @desc boolean, default False
     */
    public set active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Alt key pressed
     * @desc boolean, default False
     */
    public set alt(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.alt`, value)
    }

    /**
     * Any modifier keys pressed
     * @desc boolean, default False
     */
    public set any(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.any`, value)
    }

    /**
     * Control key pressed
     * @desc boolean, default False
     */
    public set ctrl(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.ctrl`, value)
    }

    /**
     * Identifier of operator to call on input event
     * @desc string, default '', (never None)
     */
    public set idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.idname`, value)
    }

    /**
     * Regular key pressed as a modifier
     * @desc enum in ['NONE', 'LEFTMOUSE', 'MIDDLEMOUSE', 'RIGHTMOUSE', 'BUTTON4MOUSE', 'BUTTON5MOUSE', 'BUTTON6MOUSE', 'BUTTON7MOUSE', 'PEN', 'ERASER', 'MOUSEMOVE', 'INBETWEEN_MOUSEMOVE', 'TRACKPADPAN', 'TRACKPADZOOM', 'MOUSEROTATE', 'WHEELUPMOUSE', 'WHEELDOWNMOUSE', 'WHEELINMOUSE', 'WHEELOUTMOUSE', 'EVT_TWEAK_L', 'EVT_TWEAK_M', 'EVT_TWEAK_R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'LEFT_CTRL', 'LEFT_ALT', 'LEFT_SHIFT', 'RIGHT_ALT', 'RIGHT_CTRL', 'RIGHT_SHIFT', 'OSKEY', 'APP', 'GRLESS', 'ESC', 'TAB', 'RET', 'SPACE', 'LINE_FEED', 'BACK_SPACE', 'DEL', 'SEMI_COLON', 'PERIOD', 'COMMA', 'QUOTE', 'ACCENT_GRAVE', 'MINUS', 'PLUS', 'SLASH', 'BACK_SLASH', 'EQUAL', 'LEFT_BRACKET', 'RIGHT_BRACKET', 'LEFT_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'NUMPAD_2', 'NUMPAD_4', 'NUMPAD_6', 'NUMPAD_8', 'NUMPAD_1', 'NUMPAD_3', 'NUMPAD_5', 'NUMPAD_7', 'NUMPAD_9', 'NUMPAD_PERIOD', 'NUMPAD_SLASH', 'NUMPAD_ASTERIX', 'NUMPAD_0', 'NUMPAD_MINUS', 'NUMPAD_ENTER', 'NUMPAD_PLUS', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'PAUSE', 'INSERT', 'HOME', 'PAGE_UP', 'PAGE_DOWN', 'END', 'MEDIA_PLAY', 'MEDIA_STOP', 'MEDIA_FIRST', 'MEDIA_LAST', 'TEXTINPUT', 'WINDOW_DEACTIVATE', 'TIMER', 'TIMER0', 'TIMER1', 'TIMER2', 'TIMER_JOBS', 'TIMER_AUTOSAVE', 'TIMER_REPORT', 'TIMERREGION', 'NDOF_MOTION', 'NDOF_BUTTON_MENU', 'NDOF_BUTTON_FIT', 'NDOF_BUTTON_TOP', 'NDOF_BUTTON_BOTTOM', 'NDOF_BUTTON_LEFT', 'NDOF_BUTTON_RIGHT', 'NDOF_BUTTON_FRONT', 'NDOF_BUTTON_BACK', 'NDOF_BUTTON_ISO1', 'NDOF_BUTTON_ISO2', 'NDOF_BUTTON_ROLL_CW', 'NDOF_BUTTON_ROLL_CCW', 'NDOF_BUTTON_SPIN_CW', 'NDOF_BUTTON_SPIN_CCW', 'NDOF_BUTTON_TILT_CW', 'NDOF_BUTTON_TILT_CCW', 'NDOF_BUTTON_ROTATE', 'NDOF_BUTTON_PANZOOM', 'NDOF_BUTTON_DOMINANT', 'NDOF_BUTTON_PLUS', 'NDOF_BUTTON_MINUS', 'NDOF_BUTTON_ESC', 'NDOF_BUTTON_ALT', 'NDOF_BUTTON_SHIFT', 'NDOF_BUTTON_CTRL', 'NDOF_BUTTON_1', 'NDOF_BUTTON_2', 'NDOF_BUTTON_3', 'NDOF_BUTTON_4', 'NDOF_BUTTON_5', 'NDOF_BUTTON_6', 'NDOF_BUTTON_7', 'NDOF_BUTTON_8', 'NDOF_BUTTON_9', 'NDOF_BUTTON_10', 'NDOF_BUTTON_A', 'NDOF_BUTTON_B', 'NDOF_BUTTON_C', 'ACTIONZONE_AREA', 'ACTIONZONE_REGION', 'ACTIONZONE_FULLSCREEN'], default 'NONE'
     */
    public set key_modifier(value: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.key_modifier`, value)
    }

    /**
     * Type of event mapping
     * @desc enum in ['KEYBOARD', 'TWEAK', 'MOUSE', 'NDOF', 'TEXTINPUT', 'TIMER'], default 'KEYBOARD'
     */
    public set map_type(value: 'KEYBOARD' | 'TWEAK' | 'MOUSE' | 'NDOF' | 'TEXTINPUT' | 'TIMER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_type`, value)
    }

    /**
     * Operating system key pressed
     * @desc boolean, default False
     */
    public set oskey(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.oskey`, value)
    }

    /**
     * The value this event translates to in a modal keymap
     * @desc enum in ['NONE'], default 'NONE'
     */
    public set propvalue(value: 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.propvalue`, value)
    }

    /**
     * Shift key pressed
     * @desc boolean, default False
     */
    public set shift(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.shift`, value)
    }

    /**
     * Show key map event and property details in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Type of event
     * @desc enum in ['NONE', 'LEFTMOUSE', 'MIDDLEMOUSE', 'RIGHTMOUSE', 'BUTTON4MOUSE', 'BUTTON5MOUSE', 'BUTTON6MOUSE', 'BUTTON7MOUSE', 'PEN', 'ERASER', 'MOUSEMOVE', 'INBETWEEN_MOUSEMOVE', 'TRACKPADPAN', 'TRACKPADZOOM', 'MOUSEROTATE', 'WHEELUPMOUSE', 'WHEELDOWNMOUSE', 'WHEELINMOUSE', 'WHEELOUTMOUSE', 'EVT_TWEAK_L', 'EVT_TWEAK_M', 'EVT_TWEAK_R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'LEFT_CTRL', 'LEFT_ALT', 'LEFT_SHIFT', 'RIGHT_ALT', 'RIGHT_CTRL', 'RIGHT_SHIFT', 'OSKEY', 'APP', 'GRLESS', 'ESC', 'TAB', 'RET', 'SPACE', 'LINE_FEED', 'BACK_SPACE', 'DEL', 'SEMI_COLON', 'PERIOD', 'COMMA', 'QUOTE', 'ACCENT_GRAVE', 'MINUS', 'PLUS', 'SLASH', 'BACK_SLASH', 'EQUAL', 'LEFT_BRACKET', 'RIGHT_BRACKET', 'LEFT_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'NUMPAD_2', 'NUMPAD_4', 'NUMPAD_6', 'NUMPAD_8', 'NUMPAD_1', 'NUMPAD_3', 'NUMPAD_5', 'NUMPAD_7', 'NUMPAD_9', 'NUMPAD_PERIOD', 'NUMPAD_SLASH', 'NUMPAD_ASTERIX', 'NUMPAD_0', 'NUMPAD_MINUS', 'NUMPAD_ENTER', 'NUMPAD_PLUS', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'PAUSE', 'INSERT', 'HOME', 'PAGE_UP', 'PAGE_DOWN', 'END', 'MEDIA_PLAY', 'MEDIA_STOP', 'MEDIA_FIRST', 'MEDIA_LAST', 'TEXTINPUT', 'WINDOW_DEACTIVATE', 'TIMER', 'TIMER0', 'TIMER1', 'TIMER2', 'TIMER_JOBS', 'TIMER_AUTOSAVE', 'TIMER_REPORT', 'TIMERREGION', 'NDOF_MOTION', 'NDOF_BUTTON_MENU', 'NDOF_BUTTON_FIT', 'NDOF_BUTTON_TOP', 'NDOF_BUTTON_BOTTOM', 'NDOF_BUTTON_LEFT', 'NDOF_BUTTON_RIGHT', 'NDOF_BUTTON_FRONT', 'NDOF_BUTTON_BACK', 'NDOF_BUTTON_ISO1', 'NDOF_BUTTON_ISO2', 'NDOF_BUTTON_ROLL_CW', 'NDOF_BUTTON_ROLL_CCW', 'NDOF_BUTTON_SPIN_CW', 'NDOF_BUTTON_SPIN_CCW', 'NDOF_BUTTON_TILT_CW', 'NDOF_BUTTON_TILT_CCW', 'NDOF_BUTTON_ROTATE', 'NDOF_BUTTON_PANZOOM', 'NDOF_BUTTON_DOMINANT', 'NDOF_BUTTON_PLUS', 'NDOF_BUTTON_MINUS', 'NDOF_BUTTON_ESC', 'NDOF_BUTTON_ALT', 'NDOF_BUTTON_SHIFT', 'NDOF_BUTTON_CTRL', 'NDOF_BUTTON_1', 'NDOF_BUTTON_2', 'NDOF_BUTTON_3', 'NDOF_BUTTON_4', 'NDOF_BUTTON_5', 'NDOF_BUTTON_6', 'NDOF_BUTTON_7', 'NDOF_BUTTON_8', 'NDOF_BUTTON_9', 'NDOF_BUTTON_10', 'NDOF_BUTTON_A', 'NDOF_BUTTON_B', 'NDOF_BUTTON_C', 'ACTIONZONE_AREA', 'ACTIONZONE_REGION', 'ACTIONZONE_FULLSCREEN'], default 'NONE'
     */
    public set type(value: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * 
     * @desc enum in ['ANY', 'PRESS', 'RELEASE', 'CLICK', 'DOUBLE_CLICK', 'CLICK_DRAG', 'NORTH', 'NORTH_EAST', 'EAST', 'SOUTH_EAST', 'SOUTH', 'SOUTH_WEST', 'WEST', 'NORTH_WEST', 'NOTHING'], default 'NOTHING'
     */
    public set value(value: 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.value`, value)
    }

    /**
     * compare
     * @desc boolean
     */
    public compare(options: { item?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.compare`, options)
    }

    /**
     * to_string
     * @desc string, (never None)
     */
    public to_string(options: { compact?: boolean }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.to_string`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
