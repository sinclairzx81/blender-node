import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PointCacheItem
 * 
 * https://docs.blender.org/api/current/bpy.types.PointCacheItem.html
 */
export class PointCacheItem {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Info on current cache status
     * @desc string, default '', (readonly, never None)
     */
    public get info(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.info`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_baked(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_baked`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_baking(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_baking`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_frame_skip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_frame_skip`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_outdated(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_outdated`)
    }

    /**
     * Compression method to be used
     * @desc enum in ['NO', 'LIGHT', 'HEAVY'], default 'NO'
     */
    public get compression(): 'NO' | 'LIGHT' | 'HEAVY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.compression`)
    }

    /**
     * Cache file path
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Frame on which the simulation stops
     * @desc int in [1, 1048574], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Frame on which the simulation starts
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Number of frames between cached frames
     * @desc int in [1, 20], default 0
     */
    public get frame_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_step`)
    }

    /**
     * Index number of cache files
     * @desc int in [-1, 100], default 0
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Cache name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Save cache files to disk (.blend file must be saved first)
     * @desc boolean, default False
     */
    public get use_disk_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_disk_cache`)
    }

    /**
     * Read cache from an external location
     * @desc boolean, default False
     */
    public get use_external(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_external`)
    }

    /**
     * Use this file’s path for the disk cache when library linked into another file (for local bakes per scene file, disable this option)
     * @desc boolean, default False
     */
    public get use_library_path(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_library_path`)
    }

    /**
     * Compression method to be used
     * @desc enum in ['NO', 'LIGHT', 'HEAVY'], default 'NO'
     */
    public set compression(value: 'NO' | 'LIGHT' | 'HEAVY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.compression`, value)
    }

    /**
     * Cache file path
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Frame on which the simulation stops
     * @desc int in [1, 1048574], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Frame on which the simulation starts
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Number of frames between cached frames
     * @desc int in [1, 20], default 0
     */
    public set frame_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_step`, value)
    }

    /**
     * Index number of cache files
     * @desc int in [-1, 100], default 0
     */
    public set index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.index`, value)
    }

    /**
     * Cache name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Save cache files to disk (.blend file must be saved first)
     * @desc boolean, default False
     */
    public set use_disk_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_disk_cache`, value)
    }

    /**
     * Read cache from an external location
     * @desc boolean, default False
     */
    public set use_external(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_external`, value)
    }

    /**
     * Use this file’s path for the disk cache when library linked into another file (for local bakes per scene file, disable this option)
     * @desc boolean, default False
     */
    public set use_library_path(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_library_path`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
