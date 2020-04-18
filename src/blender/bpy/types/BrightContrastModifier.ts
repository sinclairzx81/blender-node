import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { SequenceModifier } from './SequenceModifier'

/**
 * BrightContrastModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.BrightContrastModifier.html
 */
export class BrightContrastModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Adjust the luminosity of the colors
     * @desc float in [-inf, inf], default 0.0
     */
    public get bright(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bright`)
    }

    /**
     * Adjust the difference in luminosity between pixels
     * @desc float in [-100, 100], default 0.0
     */
    public get contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contrast`)
    }

    /**
     * Adjust the luminosity of the colors
     * @desc float in [-inf, inf], default 0.0
     */
    public set bright(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bright`, value)
    }

    /**
     * Adjust the difference in luminosity between pixels
     * @desc float in [-100, 100], default 0.0
     */
    public set contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contrast`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
