import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeFontStyle } from './ThemeFontStyle'

/**
 * ThemeStyle
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeStyle.html
 */
export class ThemeStyle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ThemeFontStyle, (readonly, never None)
     */
    public get panel_title(): ThemeFontStyle {
        return PythonInterop.getClass(this.interop, `${this.accessor}.panel_title`, ThemeFontStyle)
    }

    /**
     * 
     * @desc ThemeFontStyle, (readonly, never None)
     */
    public get widget(): ThemeFontStyle {
        return PythonInterop.getClass(this.interop, `${this.accessor}.widget`, ThemeFontStyle)
    }

    /**
     * 
     * @desc ThemeFontStyle, (readonly, never None)
     */
    public get widget_label(): ThemeFontStyle {
        return PythonInterop.getClass(this.interop, `${this.accessor}.widget_label`, ThemeFontStyle)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
