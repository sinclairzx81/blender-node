import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBokehImage
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBokehImage.html
 */
export class CompositorNodeBokehImage {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angle of the bokeh
     * @desc float in [-12.5664, 12.5664], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Level of catadioptric of the bokeh
     * @desc float in [-0, 1], default 0.0
     */
    public get catadioptric(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.catadioptric`)
    }

    /**
     * Number of flaps
     * @desc int in [3, 24], default 5
     */
    public get flaps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.flaps`)
    }

    /**
     * Level of rounding of the bokeh
     * @desc float in [-0, 1], default 0.0
     */
    public get rounding(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rounding`)
    }

    /**
     * Shift of the lens components
     * @desc float in [-1, 1], default 0.0
     */
    public get shift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shift`)
    }

    /**
     * Angle of the bokeh
     * @desc float in [-12.5664, 12.5664], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Level of catadioptric of the bokeh
     * @desc float in [-0, 1], default 0.0
     */
    public set catadioptric(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.catadioptric`, value)
    }

    /**
     * Number of flaps
     * @desc int in [3, 24], default 5
     */
    public set flaps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.flaps`, value)
    }

    /**
     * Level of rounding of the bokeh
     * @desc float in [-0, 1], default 0.0
     */
    public set rounding(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rounding`, value)
    }

    /**
     * Shift of the lens components
     * @desc float in [-1, 1], default 0.0
     */
    public set shift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shift`, value)
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
