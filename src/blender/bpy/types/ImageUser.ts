import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ImageUser
 * 
 * https://docs.blender.org/api/current/bpy.types.ImageUser.html
 */
export class ImageUser {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Layer in multilayer image
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get multilayer_layer(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.multilayer_layer`)
    }

    /**
     * Pass in multilayer image
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get multilayer_pass(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.multilayer_pass`)
    }

    /**
     * View in multilayer image
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get multilayer_view(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.multilayer_view`)
    }

    /**
     * Current frame number in image sequence or movie
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_current(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_current`)
    }

    /**
     * Number of images of a movie to use
     * @desc int in [0, 1048574], default 0
     */
    public get frame_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_duration`)
    }

    /**
     * Offset the number of the frame to use in the animation
     * @desc int in [-inf, inf], default 0
     */
    public get frame_offset(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_offset`)
    }

    /**
     * Global starting frame of the movie/sequence, assuming first picture has a #1
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Tile in tiled image
     * @desc int in [0, inf], default 0
     */
    public get tile(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tile`)
    }

    /**
     * Always refresh image on frame changes
     * @desc boolean, default False
     */
    public get use_auto_refresh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_refresh`)
    }

    /**
     * Cycle the images in the movie
     * @desc boolean, default False
     */
    public get use_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic`)
    }

    /**
     * Current frame number in image sequence or movie
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_current(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_current`, value)
    }

    /**
     * Number of images of a movie to use
     * @desc int in [0, 1048574], default 0
     */
    public set frame_duration(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_duration`, value)
    }

    /**
     * Offset the number of the frame to use in the animation
     * @desc int in [-inf, inf], default 0
     */
    public set frame_offset(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_offset`, value)
    }

    /**
     * Global starting frame of the movie/sequence, assuming first picture has a #1
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Tile in tiled image
     * @desc int in [0, inf], default 0
     */
    public set tile(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tile`, value)
    }

    /**
     * Always refresh image on frame changes
     * @desc boolean, default False
     */
    public set use_auto_refresh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_refresh`, value)
    }

    /**
     * Cycle the images in the movie
     * @desc boolean, default False
     */
    public set use_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
