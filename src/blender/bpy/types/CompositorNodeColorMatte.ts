import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeColorMatte
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeColorMatte.html
 */
export class CompositorNodeColorMatte {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Hue tolerance for colors to be considered a keying color
     * @desc float in [0, 1], default 0.0
     */
    public get color_hue(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_hue`)
    }

    /**
     * Saturation Tolerance for the color
     * @desc float in [0, 1], default 0.0
     */
    public get color_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_saturation`)
    }

    /**
     * Value Tolerance for the color
     * @desc float in [0, 1], default 0.0
     */
    public get color_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_value`)
    }

    /**
     * Hue tolerance for colors to be considered a keying color
     * @desc float in [0, 1], default 0.0
     */
    public set color_hue(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_hue`, value)
    }

    /**
     * Saturation Tolerance for the color
     * @desc float in [0, 1], default 0.0
     */
    public set color_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_saturation`, value)
    }

    /**
     * Value Tolerance for the color
     * @desc float in [0, 1], default 0.0
     */
    public set color_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_value`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
