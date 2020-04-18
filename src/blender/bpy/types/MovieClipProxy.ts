import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieClipProxy
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieClipProxy.html
 */
export class MovieClipProxy {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Build proxy resolution 100% of the original footage dimension
     * @desc boolean, default False
     */
    public get build_100(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_100`)
    }

    /**
     * Build proxy resolution 25% of the original footage dimension
     * @desc boolean, default False
     */
    public get build_25(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_25`)
    }

    /**
     * Build proxy resolution 50% of the original footage dimension
     * @desc boolean, default False
     */
    public get build_50(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_50`)
    }

    /**
     * Build proxy resolution 75% of the original footage dimension
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
     * Build proxy resolution 100% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public get build_undistorted_100(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_undistorted_100`)
    }

    /**
     * Build proxy resolution 25% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public get build_undistorted_25(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_undistorted_25`)
    }

    /**
     * Build proxy resolution 50% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public get build_undistorted_50(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_undistorted_50`)
    }

    /**
     * Build proxy resolution 75% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public get build_undistorted_75(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.build_undistorted_75`)
    }

    /**
     * Location to store the proxy files
     * @desc string, default '', (never None)
     */
    public get directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.directory`)
    }

    /**
     * JPEG quality of proxy images
     * @desc int in [0, 32767], default 0
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'RECORD_RUN', 'FREE_RUN', 'FREE_RUN_REC_DATE', 'FREE_RUN_NO_GAPS'], default 'NONE'
     */
    public get timecode(): 'NONE' | 'RECORD_RUN' | 'FREE_RUN' | 'FREE_RUN_REC_DATE' | 'FREE_RUN_NO_GAPS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.timecode`)
    }

    /**
     * Build proxy resolution 100% of the original footage dimension
     * @desc boolean, default False
     */
    public set build_100(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_100`, value)
    }

    /**
     * Build proxy resolution 25% of the original footage dimension
     * @desc boolean, default False
     */
    public set build_25(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_25`, value)
    }

    /**
     * Build proxy resolution 50% of the original footage dimension
     * @desc boolean, default False
     */
    public set build_50(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_50`, value)
    }

    /**
     * Build proxy resolution 75% of the original footage dimension
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
     * Build proxy resolution 100% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public set build_undistorted_100(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_undistorted_100`, value)
    }

    /**
     * Build proxy resolution 25% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public set build_undistorted_25(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_undistorted_25`, value)
    }

    /**
     * Build proxy resolution 50% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public set build_undistorted_50(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_undistorted_50`, value)
    }

    /**
     * Build proxy resolution 75% of the original undistorted footage dimension
     * @desc boolean, default False
     */
    public set build_undistorted_75(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.build_undistorted_75`, value)
    }

    /**
     * Location to store the proxy files
     * @desc string, default '', (never None)
     */
    public set directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.directory`, value)
    }

    /**
     * JPEG quality of proxy images
     * @desc int in [0, 32767], default 0
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'RECORD_RUN', 'FREE_RUN', 'FREE_RUN_REC_DATE', 'FREE_RUN_NO_GAPS'], default 'NONE'
     */
    public set timecode(value: 'NONE' | 'RECORD_RUN' | 'FREE_RUN' | 'FREE_RUN_REC_DATE' | 'FREE_RUN_NO_GAPS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.timecode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
