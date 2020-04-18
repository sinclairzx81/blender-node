import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SequenceProxy
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceProxy.html
 */
export class SequenceProxy {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Build 100% proxy resolution
     * @desc boolean, default False
     */
    public get build_100(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_100`)
    }

    /**
     * Build 25% proxy resolution
     * @desc boolean, default False
     */
    public get build_25(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_25`)
    }

    /**
     * Build 50% proxy resolution
     * @desc boolean, default False
     */
    public get build_50(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_50`)
    }

    /**
     * Build 75% proxy resolution
     * @desc boolean, default False
     */
    public get build_75(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_75`)
    }

    /**
     * Build free run time code index
     * @desc boolean, default False
     */
    public get build_free_run(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_free_run`)
    }

    /**
     * Build free run time code index using Record Date/Time
     * @desc boolean, default False
     */
    public get build_free_run_rec_date(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_free_run_rec_date`)
    }

    /**
     * Build record run time code index
     * @desc boolean, default False
     */
    public get build_record_run(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_record_run`)
    }

    /**
     * Location to store the proxy files
     * @desc string, default '', (never None)
     */
    public get directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.directory`)
    }

    /**
     * Location of custom proxy file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * JPEG Quality of proxies to build
     * @desc int in [0, 32767], default 0
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Method for reading the inputs timecode
     * @desc enum in ['NONE', 'RECORD_RUN', 'FREE_RUN', 'FREE_RUN_REC_DATE', 'RECORD_RUN_NO_GAPS'], default 'NONE'
     */
    public get timecode(): 'NONE' | 'RECORD_RUN' | 'FREE_RUN' | 'FREE_RUN_REC_DATE' | 'RECORD_RUN_NO_GAPS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.timecode`)
    }

    /**
     * Overwrite existing proxy files when building
     * @desc boolean, default False
     */
    public get use_overwrite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overwrite`)
    }

    /**
     * Use a custom directory to store data
     * @desc boolean, default False
     */
    public get use_proxy_custom_directory(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proxy_custom_directory`)
    }

    /**
     * Use a custom file to read proxy data from
     * @desc boolean, default False
     */
    public get use_proxy_custom_file(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proxy_custom_file`)
    }

    /**
     * Build 100% proxy resolution
     * @desc boolean, default False
     */
    public set build_100(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_100`, value)
    }

    /**
     * Build 25% proxy resolution
     * @desc boolean, default False
     */
    public set build_25(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_25`, value)
    }

    /**
     * Build 50% proxy resolution
     * @desc boolean, default False
     */
    public set build_50(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_50`, value)
    }

    /**
     * Build 75% proxy resolution
     * @desc boolean, default False
     */
    public set build_75(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_75`, value)
    }

    /**
     * Build free run time code index
     * @desc boolean, default False
     */
    public set build_free_run(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_free_run`, value)
    }

    /**
     * Build free run time code index using Record Date/Time
     * @desc boolean, default False
     */
    public set build_free_run_rec_date(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_free_run_rec_date`, value)
    }

    /**
     * Build record run time code index
     * @desc boolean, default False
     */
    public set build_record_run(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_record_run`, value)
    }

    /**
     * Location to store the proxy files
     * @desc string, default '', (never None)
     */
    public set directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.directory`, value)
    }

    /**
     * Location of custom proxy file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * JPEG Quality of proxies to build
     * @desc int in [0, 32767], default 0
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Method for reading the inputs timecode
     * @desc enum in ['NONE', 'RECORD_RUN', 'FREE_RUN', 'FREE_RUN_REC_DATE', 'RECORD_RUN_NO_GAPS'], default 'NONE'
     */
    public set timecode(value: 'NONE' | 'RECORD_RUN' | 'FREE_RUN' | 'FREE_RUN_REC_DATE' | 'RECORD_RUN_NO_GAPS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.timecode`, value)
    }

    /**
     * Overwrite existing proxy files when building
     * @desc boolean, default False
     */
    public set use_overwrite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overwrite`, value)
    }

    /**
     * Use a custom directory to store data
     * @desc boolean, default False
     */
    public set use_proxy_custom_directory(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proxy_custom_directory`, value)
    }

    /**
     * Use a custom file to read proxy data from
     * @desc boolean, default False
     */
    public set use_proxy_custom_file(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proxy_custom_file`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
