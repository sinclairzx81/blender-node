import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { Image } from './Image'

/**
 * CompositorNodeImage
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeImage.html
 */
export class CompositorNodeImage {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * True if this image has any named layer
     * @desc boolean, default False, (readonly)
     */
    public get has_layers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_layers`)
    }

    /**
     * True if this image has multiple views
     * @desc boolean, default False, (readonly)
     */
    public get has_views(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_views`)
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
     * @desc int in [-1048574, 1048574], default 0
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
     * 
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * 
     * @desc enum in ['PLACEHOLDER'], default 'PLACEHOLDER'
     */
    public get layer(): 'PLACEHOLDER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layer`)
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
     * Put Node output buffer to straight alpha instead of premultiplied
     * @desc boolean, default False
     */
    public get use_straight_alpha_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_straight_alpha_output`)
    }

    /**
     * 
     * @desc enum in ['ALL'], default 'ALL'
     */
    public get view(): 'ALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view`)
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
     * @desc int in [-1048574, 1048574], default 0
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
     * 
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * 
     * @desc enum in ['PLACEHOLDER'], default 'PLACEHOLDER'
     */
    public set layer(value: 'PLACEHOLDER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layer`, value)
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

    /**
     * Put Node output buffer to straight alpha instead of premultiplied
     * @desc boolean, default False
     */
    public set use_straight_alpha_output(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_straight_alpha_output`, value)
    }

    /**
     * 
     * @desc enum in ['ALL'], default 'ALL'
     */
    public set view(value: 'ALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
