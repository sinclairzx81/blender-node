import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SequenceModifier } from './SequenceModifier'

/**
 * SequenceModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceModifiers.html
 */
export class SequenceModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new modifier
     * @desc SequenceModifier
     */
    public new(options: { name?: string, type?: 'COLOR_BALANCE' | 'CURVES' | 'HUE_CORRECT' | 'BRIGHT_CONTRAST' | 'MASK' | 'WHITE_BALANCE' | 'TONEMAP' }): SequenceModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, SequenceModifier)
    }

    /**
     * Remove an existing modifier from the sequence
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all modifiers from the sequence
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
