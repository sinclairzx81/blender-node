import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { DynamicPaintBrushSettings } from './DynamicPaintBrushSettings'
import { DynamicPaintCanvasSettings } from './DynamicPaintCanvasSettings'

/**
 * DynamicPaintModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.DynamicPaintModifier.html
 */
export class DynamicPaintModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc DynamicPaintBrushSettings, (readonly)
     */
    public get brush_settings(): DynamicPaintBrushSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush_settings`, DynamicPaintBrushSettings)
    }

    /**
     * 
     * @desc DynamicPaintCanvasSettings, (readonly)
     */
    public get canvas_settings(): DynamicPaintCanvasSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.canvas_settings`, DynamicPaintCanvasSettings)
    }

    /**
     * 
     * @desc enum in ['CANVAS', 'BRUSH'], default 'CANVAS'
     */
    public get ui_type(): 'CANVAS' | 'BRUSH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ui_type`)
    }

    /**
     * 
     * @desc enum in ['CANVAS', 'BRUSH'], default 'CANVAS'
     */
    public set ui_type(value: 'CANVAS' | 'BRUSH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ui_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
