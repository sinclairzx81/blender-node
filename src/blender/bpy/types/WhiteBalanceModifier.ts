import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { SequenceModifier } from './SequenceModifier'

/**
 * WhiteBalanceModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WhiteBalanceModifier.html
 */
export class WhiteBalanceModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * This color defines white in the strip
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get white_value(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.white_value`, 'number', 3)
    }

    /**
     * This color defines white in the strip
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set white_value(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.white_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
