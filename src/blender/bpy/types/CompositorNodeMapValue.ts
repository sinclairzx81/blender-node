import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeMapValue
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeMapValue.html
 */
export class CompositorNodeMapValue {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public get max(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.max`, 'number', 1)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public get min(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.min`, 'number', 1)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public get offset(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 1)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public get size(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.size`, 'number', 1)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_min`)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public set max(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.max`, value)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public set min(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.min`, value)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public set offset(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * 
     * @desc float array of 1 items in [-1000, 1000], default (0.0)
     */
    public set size(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_min`, value)
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
