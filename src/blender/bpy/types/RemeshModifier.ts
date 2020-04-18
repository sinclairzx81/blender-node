import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * RemeshModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.RemeshModifier.html
 */
export class RemeshModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['BLOCKS', 'SMOOTH', 'SHARP'], default 'BLOCKS'
     */
    public get mode(): 'BLOCKS' | 'SMOOTH' | 'SHARP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Resolution of the octree; higher values give finer details
     * @desc int in [1, 12], default 0
     */
    public get octree_depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.octree_depth`)
    }

    /**
     * The ratio of the largest dimension of the model over the size of the grid
     * @desc float in [0, 0.99], default 0.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * Tolerance for outliers; lower values filter noise while higher values will reproduce edges closer to the input
     * @desc float in [-inf, inf], default 0.0
     */
    public get sharpness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sharpness`)
    }

    /**
     * If removing disconnected pieces, minimum size of components to preserve as a ratio of the number of polygons in the largest component
     * @desc float in [0, 1], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_remove_disconnected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remove_disconnected`)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public get use_smooth_shade(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth_shade`)
    }

    /**
     * 
     * @desc enum in ['BLOCKS', 'SMOOTH', 'SHARP'], default 'BLOCKS'
     */
    public set mode(value: 'BLOCKS' | 'SMOOTH' | 'SHARP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Resolution of the octree; higher values give finer details
     * @desc int in [1, 12], default 0
     */
    public set octree_depth(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.octree_depth`, value)
    }

    /**
     * The ratio of the largest dimension of the model over the size of the grid
     * @desc float in [0, 0.99], default 0.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Tolerance for outliers; lower values filter noise while higher values will reproduce edges closer to the input
     * @desc float in [-inf, inf], default 0.0
     */
    public set sharpness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sharpness`, value)
    }

    /**
     * If removing disconnected pieces, minimum size of components to preserve as a ratio of the number of polygons in the largest component
     * @desc float in [0, 1], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_remove_disconnected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remove_disconnected`, value)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public set use_smooth_shade(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth_shade`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
