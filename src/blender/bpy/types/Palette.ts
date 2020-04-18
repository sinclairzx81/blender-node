import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { PaletteColors } from './PaletteColors'
import { PaletteColor } from './PaletteColor'

/**
 * Palette
 * 
 * https://docs.blender.org/api/current/bpy.types.Palette.html
 */
export class Palette {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc PaletteColors bpy_prop_collection of PaletteColor, (readonly)
     */
    public get colors(): BlenderCollection<PaletteColor> & Indexable<PaletteColor> & PaletteColors {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.colors`, PaletteColors, PaletteColor)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
