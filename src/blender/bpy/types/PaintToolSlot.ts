import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Brush } from './Brush'

/**
 * PaintToolSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.PaintToolSlot.html
 */
export class PaintToolSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Brush
     */
    public get brush(): Brush {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush`, Brush)
    }

    /**
     * 
     * @desc Brush
     */
    public set brush(value: Brush) {
        PythonInterop.setClass(this.interop, `${this.accessor}.brush`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
