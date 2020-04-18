import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MaskLayer } from './MaskLayer'

/**
 * MaskLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskLayers.html
 */
export class MaskLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active layer in this mask
     * @desc MaskLayer
     */
    public get active(): MaskLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MaskLayer)
    }

    /**
     * Active layer in this mask
     * @desc MaskLayer
     */
    public set active(value: MaskLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add layer to this mask
     * @desc MaskLayer
     */
    public new(options: { name?: string }): MaskLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MaskLayer)
    }

    /**
     * Remove layer from this mask
     * @desc void
     */
    public remove(options: { layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all mask layers
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
