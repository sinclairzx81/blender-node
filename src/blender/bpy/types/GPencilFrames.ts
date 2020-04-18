import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilFrame } from './GPencilFrame'

/**
 * GPencilFrames
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilFrames.html
 */
export class GPencilFrames {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new grease pencil frame
     * @desc GPencilFrame
     */
    public new(options: { frame_number?: number, active?: boolean }): GPencilFrame {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, GPencilFrame)
    }

    /**
     * Remove a grease pencil frame
     * @desc void
     */
    public remove(options: { frame?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Copy a grease pencil frame
     * @desc GPencilFrame
     */
    public copy(options: { source?: unknown }): GPencilFrame {
        return PythonInterop.callClass(this.interop, `${this.accessor}.copy`, options, GPencilFrame)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
