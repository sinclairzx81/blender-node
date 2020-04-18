import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeCrop
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeCrop.html
 */
export class CompositorNodeCrop {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public get max_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_x`)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public get max_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_y`)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public get min_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_x`)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public get min_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_y`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get rel_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rel_max_x`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get rel_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rel_max_y`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get rel_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rel_min_x`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get rel_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rel_min_y`)
    }

    /**
     * Use relative values to crop image
     * @desc boolean, default False
     */
    public get relative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.relative`)
    }

    /**
     * Whether to crop the size of the input image
     * @desc boolean, default False
     */
    public get use_crop_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_crop_size`)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public set max_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_x`, value)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public set max_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_y`, value)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public set min_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_x`, value)
    }

    /**
     * 
     * @desc int in [0, 10000], default 0
     */
    public set min_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_y`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set rel_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rel_max_x`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set rel_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rel_max_y`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set rel_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rel_min_x`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set rel_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rel_min_y`, value)
    }

    /**
     * Use relative values to crop image
     * @desc boolean, default False
     */
    public set relative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.relative`, value)
    }

    /**
     * Whether to crop the size of the input image
     * @desc boolean, default False
     */
    public set use_crop_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_crop_size`, value)
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
