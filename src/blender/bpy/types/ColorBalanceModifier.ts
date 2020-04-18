import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { SequenceModifier } from './SequenceModifier'
import { SequenceColorBalanceData } from './SequenceColorBalanceData'

/**
 * ColorBalanceModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorBalanceModifier.html
 */
export class ColorBalanceModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc SequenceColorBalanceData, (readonly)
     */
    public get color_balance(): SequenceColorBalanceData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_balance`, SequenceColorBalanceData)
    }

    /**
     * Multiply the intensity of each pixel
     * @desc float in [0, 20], default 1.0
     */
    public get color_multiply(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_multiply`)
    }

    /**
     * Multiply the intensity of each pixel
     * @desc float in [0, 20], default 1.0
     */
    public set color_multiply(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_multiply`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
