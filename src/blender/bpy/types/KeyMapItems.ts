import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyMapItem } from './KeyMapItem'

/**
 * KeyMapItems
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyMapItems.html
 */
export class KeyMapItems {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * new
     * @desc KeyMapItem
     */
    public new(options: { idname?: string, type?: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN', value?: 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING', any?: boolean, shift?: boolean, ctrl?: boolean, alt?: boolean, oskey?: boolean, key_modifier?: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN', head?: boolean }): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, KeyMapItem)
    }

    /**
     * new_modal
     * @desc KeyMapItem
     */
    public new_modal(options: { propvalue?: string, type?: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN', value?: 'ANY' | 'PRESS' | 'RELEASE' | 'CLICK' | 'DOUBLE_CLICK' | 'CLICK_DRAG' | 'NORTH' | 'NORTH_EAST' | 'EAST' | 'SOUTH_EAST' | 'SOUTH' | 'SOUTH_WEST' | 'WEST' | 'NORTH_WEST' | 'NOTHING', any?: boolean, shift?: boolean, ctrl?: boolean, alt?: boolean, oskey?: boolean, key_modifier?: 'NONE' | 'LEFTMOUSE' | 'MIDDLEMOUSE' | 'RIGHTMOUSE' | 'BUTTON4MOUSE' | 'BUTTON5MOUSE' | 'BUTTON6MOUSE' | 'BUTTON7MOUSE' | 'PEN' | 'ERASER' | 'MOUSEMOVE' | 'INBETWEEN_MOUSEMOVE' | 'TRACKPADPAN' | 'TRACKPADZOOM' | 'MOUSEROTATE' | 'WHEELUPMOUSE' | 'WHEELDOWNMOUSE' | 'WHEELINMOUSE' | 'WHEELOUTMOUSE' | 'EVT_TWEAK_L' | 'EVT_TWEAK_M' | 'EVT_TWEAK_R' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ZERO' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX' | 'SEVEN' | 'EIGHT' | 'NINE' | 'LEFT_CTRL' | 'LEFT_ALT' | 'LEFT_SHIFT' | 'RIGHT_ALT' | 'RIGHT_CTRL' | 'RIGHT_SHIFT' | 'OSKEY' | 'APP' | 'GRLESS' | 'ESC' | 'TAB' | 'RET' | 'SPACE' | 'LINE_FEED' | 'BACK_SPACE' | 'DEL' | 'SEMI_COLON' | 'PERIOD' | 'COMMA' | 'QUOTE' | 'ACCENT_GRAVE' | 'MINUS' | 'PLUS' | 'SLASH' | 'BACK_SLASH' | 'EQUAL' | 'LEFT_BRACKET' | 'RIGHT_BRACKET' | 'LEFT_ARROW' | 'DOWN_ARROW' | 'RIGHT_ARROW' | 'UP_ARROW' | 'NUMPAD_2' | 'NUMPAD_4' | 'NUMPAD_6' | 'NUMPAD_8' | 'NUMPAD_1' | 'NUMPAD_3' | 'NUMPAD_5' | 'NUMPAD_7' | 'NUMPAD_9' | 'NUMPAD_PERIOD' | 'NUMPAD_SLASH' | 'NUMPAD_ASTERIX' | 'NUMPAD_0' | 'NUMPAD_MINUS' | 'NUMPAD_ENTER' | 'NUMPAD_PLUS' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'PAUSE' | 'INSERT' | 'HOME' | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'MEDIA_PLAY' | 'MEDIA_STOP' | 'MEDIA_FIRST' | 'MEDIA_LAST' | 'TEXTINPUT' | 'WINDOW_DEACTIVATE' | 'TIMER' | 'TIMER0' | 'TIMER1' | 'TIMER2' | 'TIMER_JOBS' | 'TIMER_AUTOSAVE' | 'TIMER_REPORT' | 'TIMERREGION' | 'NDOF_MOTION' | 'NDOF_BUTTON_MENU' | 'NDOF_BUTTON_FIT' | 'NDOF_BUTTON_TOP' | 'NDOF_BUTTON_BOTTOM' | 'NDOF_BUTTON_LEFT' | 'NDOF_BUTTON_RIGHT' | 'NDOF_BUTTON_FRONT' | 'NDOF_BUTTON_BACK' | 'NDOF_BUTTON_ISO1' | 'NDOF_BUTTON_ISO2' | 'NDOF_BUTTON_ROLL_CW' | 'NDOF_BUTTON_ROLL_CCW' | 'NDOF_BUTTON_SPIN_CW' | 'NDOF_BUTTON_SPIN_CCW' | 'NDOF_BUTTON_TILT_CW' | 'NDOF_BUTTON_TILT_CCW' | 'NDOF_BUTTON_ROTATE' | 'NDOF_BUTTON_PANZOOM' | 'NDOF_BUTTON_DOMINANT' | 'NDOF_BUTTON_PLUS' | 'NDOF_BUTTON_MINUS' | 'NDOF_BUTTON_ESC' | 'NDOF_BUTTON_ALT' | 'NDOF_BUTTON_SHIFT' | 'NDOF_BUTTON_CTRL' | 'NDOF_BUTTON_1' | 'NDOF_BUTTON_2' | 'NDOF_BUTTON_3' | 'NDOF_BUTTON_4' | 'NDOF_BUTTON_5' | 'NDOF_BUTTON_6' | 'NDOF_BUTTON_7' | 'NDOF_BUTTON_8' | 'NDOF_BUTTON_9' | 'NDOF_BUTTON_10' | 'NDOF_BUTTON_A' | 'NDOF_BUTTON_B' | 'NDOF_BUTTON_C' | 'ACTIONZONE_AREA' | 'ACTIONZONE_REGION' | 'ACTIONZONE_FULLSCREEN' }): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_modal`, options, KeyMapItem)
    }

    /**
     * new_from_item
     * @desc KeyMapItem
     */
    public new_from_item(options: { item?: unknown, head?: boolean }): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_from_item`, options, KeyMapItem)
    }

    /**
     * remove
     * @desc void
     */
    public remove(options: { item?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * from_id
     * @desc KeyMapItem
     */
    public from_id(options: { id?: number }): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.from_id`, options, KeyMapItem)
    }

    /**
     * find_from_operator
     * @desc KeyMapItem
     */
    public find_from_operator(options: { idname?: string, include?: ('KEYBOARD_MODIFIER' | 'KEYBOARD' | 'MOUSE_WHEEL' | 'MOUSE_GESTURE' | 'MOUSE_BUTTON' | 'MOUSE' | 'NDOF' | 'TWEAK' | 'ACTIONZONE')[], exclude?: ('KEYBOARD_MODIFIER' | 'KEYBOARD' | 'MOUSE_WHEEL' | 'MOUSE_GESTURE' | 'MOUSE_BUTTON' | 'MOUSE' | 'NDOF' | 'TWEAK' | 'ACTIONZONE')[] }): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_from_operator`, options, KeyMapItem)
    }

    /**
     * match_event
     * @desc KeyMapItem
     */
    public match_event(): KeyMapItem {
        return PythonInterop.callClass(this.interop, `${this.accessor}.match_event`, {}, KeyMapItem)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
