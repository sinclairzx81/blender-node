import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorRampElement } from './ColorRampElement'

/**
 * ColorRampElements
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorRampElements.html
 */
export class ColorRampElements {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add element to ColorRamp
     * @desc ColorRampElement
     */
    public new(options: { position?: number }): ColorRampElement {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, ColorRampElement)
    }

    /**
     * Delete element from ColorRamp
     * @desc void
     */
    public remove(options: { element?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
