import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NlaTrack } from './NlaTrack'

/**
 * NlaTracks
 * 
 * https://docs.blender.org/api/current/bpy.types.NlaTracks.html
 */
export class NlaTracks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Object constraint
     * @desc NlaTrack
     */
    public get active(): NlaTrack {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, NlaTrack)
    }

    /**
     * Active Object constraint
     * @desc NlaTrack
     */
    public set active(value: NlaTrack) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a new NLA Track
     * @desc NlaTrack
     */
    public new(options: { prev?: unknown }): NlaTrack {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NlaTrack)
    }

    /**
     * Remove a NLA Track
     * @desc void
     */
    public remove(options: { track?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
