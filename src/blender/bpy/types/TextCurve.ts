import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Curve } from './Curve'
import { TextCharacterFormat } from './TextCharacterFormat'
import { TextBox } from './TextBox'
import { BlenderObject } from './BlenderObject'
import { VectorFont } from './VectorFont'

/**
 * TextCurve
 * 
 * https://docs.blender.org/api/current/bpy.types.TextCurve.html
 */
export class TextCurve {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Stores the style of each character
     * @desc bpy_prop_collection of TextCharacterFormat, (readonly)
     */
    public get body_format(): BlenderCollection<TextCharacterFormat> & Indexable<TextCharacterFormat> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.body_format`, TextCharacterFormat)
    }

    /**
     * Editing settings character formatting
     * @desc TextCharacterFormat, (readonly)
     */
    public get edit_format(): TextCharacterFormat {
        return PythonInterop.getClass(this.interop, `${this.accessor}.edit_format`, TextCharacterFormat)
    }

    /**
     * 
     * @desc bpy_prop_collection of TextBox, (readonly)
     */
    public get text_boxes(): BlenderCollection<TextBox> & Indexable<TextBox> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.text_boxes`, TextBox)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get active_textbox(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_textbox`)
    }

    /**
     * Text horizontal align from the object center
     * @desc enum in ['LEFT', 'CENTER', 'RIGHT', 'JUSTIFY', 'FLUSH'], default 'LEFT'
     */
    public get align_x(): 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFY' | 'FLUSH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.align_x`)
    }

    /**
     * Text vertical align from the object center
     * @desc enum in ['TOP_BASELINE', 'TOP', 'CENTER', 'BOTTOM', 'BOTTOM_BASELINE'], default 'TOP_BASELINE'
     */
    public get align_y(): 'TOP_BASELINE' | 'TOP' | 'CENTER' | 'BOTTOM' | 'BOTTOM_BASELINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.align_y`)
    }

    /**
     * Content of this text object
     * @desc string, default '', (never None)
     */
    public get body(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.body`)
    }

    /**
     * Use Objects as font characters (give font objects a common name followed by the character they represent, eg. ‘family-a’, ‘family-b’, etc, set this setting to ‘family-‘, and turn on Vertex Duplication)
     * @desc string, default '', (never None)
     */
    public get family(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.family`)
    }

    /**
     * Curve deforming text object
     * @desc Object
     */
    public get follow_curve(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.follow_curve`, BlenderObject)
    }

    /**
     * 
     * @desc VectorFont
     */
    public get font(): VectorFont {
        return PythonInterop.getClass(this.interop, `${this.accessor}.font`, VectorFont)
    }

    /**
     * 
     * @desc VectorFont
     */
    public get font_bold(): VectorFont {
        return PythonInterop.getClass(this.interop, `${this.accessor}.font_bold`, VectorFont)
    }

    /**
     * 
     * @desc VectorFont
     */
    public get font_bold_italic(): VectorFont {
        return PythonInterop.getClass(this.interop, `${this.accessor}.font_bold_italic`, VectorFont)
    }

    /**
     * 
     * @desc VectorFont
     */
    public get font_italic(): VectorFont {
        return PythonInterop.getClass(this.interop, `${this.accessor}.font_italic`, VectorFont)
    }

    /**
     * Horizontal offset from the object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_x`)
    }

    /**
     * Vertical offset from the object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_y`)
    }

    /**
     * Handle the text behavior when it doesn’t fit in the text boxes
     * @desc enum in ['NONE', 'SCALE', 'TRUNCATE'], default 'NONE'
     */
    public get overflow(): 'NONE' | 'SCALE' | 'TRUNCATE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.overflow`)
    }

    /**
     * Italic angle of the characters
     * @desc float in [-1, 1], default 0.0
     */
    public get shear(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shear`)
    }

    /**
     * 
     * @desc float in [0.0001, 10000], default 1.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * Scale of small capitals
     * @desc float in [-inf, inf], default 0.75
     */
    public get small_caps_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.small_caps_scale`)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public get space_character(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.space_character`)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public get space_line(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.space_line`)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public get space_word(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.space_word`)
    }

    /**
     * 
     * @desc float in [0, 0.8], default 0.05
     */
    public get underline_height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.underline_height`)
    }

    /**
     * Vertical position of underline
     * @desc float in [-0.2, 0.8], default 0.0
     */
    public get underline_position(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.underline_position`)
    }

    /**
     * Don’t fill polygons while editing
     * @desc boolean, default False
     */
    public get use_fast_edit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fast_edit`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set active_textbox(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_textbox`, value)
    }

    /**
     * Text horizontal align from the object center
     * @desc enum in ['LEFT', 'CENTER', 'RIGHT', 'JUSTIFY', 'FLUSH'], default 'LEFT'
     */
    public set align_x(value: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFY' | 'FLUSH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.align_x`, value)
    }

    /**
     * Text vertical align from the object center
     * @desc enum in ['TOP_BASELINE', 'TOP', 'CENTER', 'BOTTOM', 'BOTTOM_BASELINE'], default 'TOP_BASELINE'
     */
    public set align_y(value: 'TOP_BASELINE' | 'TOP' | 'CENTER' | 'BOTTOM' | 'BOTTOM_BASELINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.align_y`, value)
    }

    /**
     * Content of this text object
     * @desc string, default '', (never None)
     */
    public set body(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.body`, value)
    }

    /**
     * Use Objects as font characters (give font objects a common name followed by the character they represent, eg. ‘family-a’, ‘family-b’, etc, set this setting to ‘family-‘, and turn on Vertex Duplication)
     * @desc string, default '', (never None)
     */
    public set family(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.family`, value)
    }

    /**
     * Curve deforming text object
     * @desc Object
     */
    public set follow_curve(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.follow_curve`, value)
    }

    /**
     * 
     * @desc VectorFont
     */
    public set font(value: VectorFont) {
        PythonInterop.setClass(this.interop, `${this.accessor}.font`, value)
    }

    /**
     * 
     * @desc VectorFont
     */
    public set font_bold(value: VectorFont) {
        PythonInterop.setClass(this.interop, `${this.accessor}.font_bold`, value)
    }

    /**
     * 
     * @desc VectorFont
     */
    public set font_bold_italic(value: VectorFont) {
        PythonInterop.setClass(this.interop, `${this.accessor}.font_bold_italic`, value)
    }

    /**
     * 
     * @desc VectorFont
     */
    public set font_italic(value: VectorFont) {
        PythonInterop.setClass(this.interop, `${this.accessor}.font_italic`, value)
    }

    /**
     * Horizontal offset from the object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_x`, value)
    }

    /**
     * Vertical offset from the object origin
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_y`, value)
    }

    /**
     * Handle the text behavior when it doesn’t fit in the text boxes
     * @desc enum in ['NONE', 'SCALE', 'TRUNCATE'], default 'NONE'
     */
    public set overflow(value: 'NONE' | 'SCALE' | 'TRUNCATE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.overflow`, value)
    }

    /**
     * Italic angle of the characters
     * @desc float in [-1, 1], default 0.0
     */
    public set shear(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shear`, value)
    }

    /**
     * 
     * @desc float in [0.0001, 10000], default 1.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Scale of small capitals
     * @desc float in [-inf, inf], default 0.75
     */
    public set small_caps_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.small_caps_scale`, value)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public set space_character(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.space_character`, value)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public set space_line(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.space_line`, value)
    }

    /**
     * 
     * @desc float in [0, 10], default 1.0
     */
    public set space_word(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.space_word`, value)
    }

    /**
     * 
     * @desc float in [0, 0.8], default 0.05
     */
    public set underline_height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.underline_height`, value)
    }

    /**
     * Vertical position of underline
     * @desc float in [-0.2, 0.8], default 0.0
     */
    public set underline_position(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.underline_position`, value)
    }

    /**
     * Don’t fill polygons while editing
     * @desc boolean, default False
     */
    public set use_fast_edit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fast_edit`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
