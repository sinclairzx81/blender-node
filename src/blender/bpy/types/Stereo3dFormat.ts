import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Stereo3dFormat
 * 
 * https://docs.blender.org/api/current/bpy.types.Stereo3dFormat.html
 */
export class Stereo3dFormat {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['RED_CYAN', 'GREEN_MAGENTA', 'YELLOW_BLUE'], default 'RED_CYAN'
     */
    public get anaglyph_type(): 'RED_CYAN' | 'GREEN_MAGENTA' | 'YELLOW_BLUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.anaglyph_type`)
    }

    /**
     * 
     * @desc enum in ['ANAGLYPH', 'INTERLACE', 'SIDEBYSIDE', 'TOPBOTTOM'], default 'ANAGLYPH'
     */
    public get display_mode(): 'ANAGLYPH' | 'INTERLACE' | 'SIDEBYSIDE' | 'TOPBOTTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_mode`)
    }

    /**
     * 
     * @desc enum in ['ROW_INTERLEAVED', 'COLUMN_INTERLEAVED', 'CHECKERBOARD_INTERLEAVED'], default 'ROW_INTERLEAVED'
     */
    public get interlace_type(): 'ROW_INTERLEAVED' | 'COLUMN_INTERLEAVED' | 'CHECKERBOARD_INTERLEAVED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interlace_type`)
    }

    /**
     * Swap left and right stereo channels
     * @desc boolean, default False
     */
    public get use_interlace_swap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_interlace_swap`)
    }

    /**
     * Right eye should see left image and vice-versa
     * @desc boolean, default False
     */
    public get use_sidebyside_crosseyed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sidebyside_crosseyed`)
    }

    /**
     * Combine both views in a squeezed image
     * @desc boolean, default False
     */
    public get use_squeezed_frame(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_squeezed_frame`)
    }

    /**
     * 
     * @desc enum in ['RED_CYAN', 'GREEN_MAGENTA', 'YELLOW_BLUE'], default 'RED_CYAN'
     */
    public set anaglyph_type(value: 'RED_CYAN' | 'GREEN_MAGENTA' | 'YELLOW_BLUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.anaglyph_type`, value)
    }

    /**
     * 
     * @desc enum in ['ANAGLYPH', 'INTERLACE', 'SIDEBYSIDE', 'TOPBOTTOM'], default 'ANAGLYPH'
     */
    public set display_mode(value: 'ANAGLYPH' | 'INTERLACE' | 'SIDEBYSIDE' | 'TOPBOTTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_mode`, value)
    }

    /**
     * 
     * @desc enum in ['ROW_INTERLEAVED', 'COLUMN_INTERLEAVED', 'CHECKERBOARD_INTERLEAVED'], default 'ROW_INTERLEAVED'
     */
    public set interlace_type(value: 'ROW_INTERLEAVED' | 'COLUMN_INTERLEAVED' | 'CHECKERBOARD_INTERLEAVED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interlace_type`, value)
    }

    /**
     * Swap left and right stereo channels
     * @desc boolean, default False
     */
    public set use_interlace_swap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_interlace_swap`, value)
    }

    /**
     * Right eye should see left image and vice-versa
     * @desc boolean, default False
     */
    public set use_sidebyside_crosseyed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sidebyside_crosseyed`, value)
    }

    /**
     * Combine both views in a squeezed image
     * @desc boolean, default False
     */
    public set use_squeezed_frame(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_squeezed_frame`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
