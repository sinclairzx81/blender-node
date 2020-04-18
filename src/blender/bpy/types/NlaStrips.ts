import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NlaStrip } from './NlaStrip'

/**
 * NlaStrips
 * 
 * https://docs.blender.org/api/current/bpy.types.NlaStrips.html
 */
export class NlaStrips {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new Action-Clip strip to the track
     * @desc NlaStrip
     */
    public new(options: { name?: string, start?: number, action?: unknown }): NlaStrip {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NlaStrip)
    }

    /**
     * Remove a NLA Strip
     * @desc void
     */
    public remove(options: { strip?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
