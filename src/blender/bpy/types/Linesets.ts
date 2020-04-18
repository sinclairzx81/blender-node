import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FreestyleLineSet } from './FreestyleLineSet'

/**
 * Linesets
 * 
 * https://docs.blender.org/api/current/bpy.types.Linesets.html
 */
export class Linesets {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active line set being displayed
     * @desc FreestyleLineSet, (readonly)
     */
    public get active(): FreestyleLineSet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, FreestyleLineSet)
    }

    /**
     * Index of active line set slot
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Index of active line set slot
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a line set to scene render layer Freestyle settings
     * @desc FreestyleLineSet
     */
    public new(options: { name?: string }): FreestyleLineSet {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FreestyleLineSet)
    }

    /**
     * Remove a line set from scene render layer Freestyle settings
     * @desc void
     */
    public remove(options: { lineset?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
