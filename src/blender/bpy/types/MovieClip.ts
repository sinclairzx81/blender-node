import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { ColorManagedInputColorspaceSettings } from './ColorManagedInputColorspaceSettings'
import { MovieClipProxy } from './MovieClipProxy'
import { MovieTracking } from './MovieTracking'
import { GreasePencil } from './GreasePencil'
import { IDPropertyWrapPtr } from './IDPropertyWrapPtr'

/**
 * MovieClip
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieClip.html
 */
export class MovieClip {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Input color space settings
     * @desc ColorManagedInputColorspaceSettings, (readonly)
     */
    public get colorspace_settings(): ColorManagedInputColorspaceSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.colorspace_settings`, ColorManagedInputColorspaceSettings)
    }

    /**
     * Detected frame rate of the movie clip in frames per second
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get fps(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fps`)
    }

    /**
     * Detected duration of movie clip in frames
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get frame_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_duration`)
    }

    /**
     * 
     * @desc MovieClipProxy, (readonly)
     */
    public get proxy(): MovieClipProxy {
        return PythonInterop.getClass(this.interop, `${this.accessor}.proxy`, MovieClipProxy)
    }

    /**
     * Width and height in pixels, zero when image data cant be loaded
     * @desc int array of 2 items in [-inf, inf], default (0, 0), (readonly)
     */
    public get size(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.size`, 'number', 2)
    }

    /**
     * Where the clip comes from
     * @desc enum in ['SEQUENCE', 'MOVIE'], default 'SEQUENCE', (readonly)
     */
    public get source(): 'SEQUENCE' | 'MOVIE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.source`)
    }

    /**
     * 
     * @desc MovieTracking, (readonly)
     */
    public get tracking(): MovieTracking {
        return PythonInterop.getClass(this.interop, `${this.accessor}.tracking`, MovieTracking)
    }

    /**
     * Display Aspect for this clip, does not affect rendering
     * @desc float array of 2 items in [0.1, inf], default (0.0, 0.0)
     */
    public get display_aspect(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.display_aspect`, 'number', 2)
    }

    /**
     * Filename of the movie or sequence file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Offset of footage first frame relative to it’s file name (affects only how footage is loading, does not change data associated with a clip)
     * @desc int in [-inf, inf], default 0
     */
    public get frame_offset(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_offset`)
    }

    /**
     * Global scene frame number at which this movie starts playing (affects all data associated with a clip)
     * @desc int in [-inf, inf], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Grease pencil data for this movie clip
     * @desc GreasePencil
     */
    public get grease_pencil(): GreasePencil {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, GreasePencil)
    }

    /**
     * Use a preview proxy and/or timecode index for this clip
     * @desc boolean, default False
     */
    public get use_proxy(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proxy`)
    }

    /**
     * Create proxy images in a custom directory (default is movie location)
     * @desc boolean, default False
     */
    public get use_proxy_custom_directory(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proxy_custom_directory`)
    }

    /**
     * Display Aspect for this clip, does not affect rendering
     * @desc float array of 2 items in [0.1, inf], default (0.0, 0.0)
     */
    public set display_aspect(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.display_aspect`, value)
    }

    /**
     * Filename of the movie or sequence file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Offset of footage first frame relative to it’s file name (affects only how footage is loading, does not change data associated with a clip)
     * @desc int in [-inf, inf], default 0
     */
    public set frame_offset(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_offset`, value)
    }

    /**
     * Global scene frame number at which this movie starts playing (affects all data associated with a clip)
     * @desc int in [-inf, inf], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Grease pencil data for this movie clip
     * @desc GreasePencil
     */
    public set grease_pencil(value: GreasePencil) {
        PythonInterop.setClass(this.interop, `${this.accessor}.grease_pencil`, value)
    }

    /**
     * Use a preview proxy and/or timecode index for this clip
     * @desc boolean, default False
     */
    public set use_proxy(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proxy`, value)
    }

    /**
     * Create proxy images in a custom directory (default is movie location)
     * @desc boolean, default False
     */
    public set use_proxy_custom_directory(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proxy_custom_directory`, value)
    }

    /**
     * Retrieve metadata of the movie file
     * @desc IDPropertyWrapPtr
     */
    public metadata(): IDPropertyWrapPtr {
        return PythonInterop.callClass(this.interop, `${this.accessor}.metadata`, {}, IDPropertyWrapPtr)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
