import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { PaletteColor } from './PaletteColor'

/**
 * PaletteColors
 * 
 * https://docs.blender.org/api/current/bpy.types.PaletteColors.html
 */
export class PaletteColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc PaletteColor
     */
    public get active(): PaletteColor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, PaletteColor)
    }

    /**
     * 
     * @desc PaletteColor
     */
    public set active(value: PaletteColor) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a new color to the palette
     * @desc PaletteColor
     */
    public new(): PaletteColor {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, PaletteColor)
    }

    /**
     * Remove a color from the palette
     * @desc void
     */
    public remove(options: { color?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all colors from the palette
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
