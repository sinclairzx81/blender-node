import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { ShapeKey } from './ShapeKey'

/**
 * Key
 * 
 * https://docs.blender.org/api/current/bpy.types.Key.html
 */
export class Key {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Shape keys
     * @desc bpy_prop_collection of ShapeKey, (readonly)
     */
    public get key_blocks(): BlenderCollection<ShapeKey> & Indexable<ShapeKey> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.key_blocks`, ShapeKey)
    }

    /**
     * 
     * @desc ShapeKey, (readonly, never None)
     */
    public get reference_key(): ShapeKey {
        return PythonInterop.getClass(this.interop, `${this.accessor}.reference_key`, ShapeKey)
    }

    /**
     * Data-block using these shape keys
     * @desc ID, (readonly, never None)
     */
    public get user(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.user`, ID)
    }

    /**
     * Evaluation time for absolute shape keys
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public get eval_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eval_time`)
    }

    /**
     * Make shape keys relative, otherwise play through shapes as a sequence using the evaluation time
     * @desc boolean, default False
     */
    public get use_relative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative`)
    }

    /**
     * Evaluation time for absolute shape keys
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public set eval_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eval_time`, value)
    }

    /**
     * Make shape keys relative, otherwise play through shapes as a sequence using the evaluation time
     * @desc boolean, default False
     */
    public set use_relative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
