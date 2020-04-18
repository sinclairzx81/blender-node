import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NlaStrips } from './NlaStrips'
import { NlaStrip } from './NlaStrip'

/**
 * NlaTrack
 * 
 * https://docs.blender.org/api/current/bpy.types.NlaTrack.html
 */
export class NlaTrack {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * NLA Track is active
     * @desc boolean, default False, (readonly)
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * NLA Strips on this NLA-track
     * @desc NlaStrips bpy_prop_collection of NlaStrip, (readonly)
     */
    public get strips(): BlenderCollection<NlaStrip> & Indexable<NlaStrip> & NlaStrips {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.strips`, NlaStrips, NlaStrip)
    }

    /**
     * NLA Track is evaluated itself (i.e. active Action and all other NLA Tracks in the same AnimData block are disabled)
     * @desc boolean, default False
     */
    public get is_solo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_solo`)
    }

    /**
     * NLA Track is locked
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Disable NLA Track evaluation
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * NLA Track is selected
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * NLA Track is evaluated itself (i.e. active Action and all other NLA Tracks in the same AnimData block are disabled)
     * @desc boolean, default False
     */
    public set is_solo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_solo`, value)
    }

    /**
     * NLA Track is locked
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Disable NLA Track evaluation
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * NLA Track is selected
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
