import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TextCharacterFormat
 * 
 * https://docs.blender.org/api/current/bpy.types.TextCharacterFormat.html
 */
export class TextCharacterFormat {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Spacing between characters
     * @desc int in [0, 32767], default 0
     */
    public get kerning(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.kerning`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_index`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_bold(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bold`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_italic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_italic`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_small_caps(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_small_caps`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_underline(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_underline`)
    }

    /**
     * Spacing between characters
     * @desc int in [0, 32767], default 0
     */
    public set kerning(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.kerning`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set material_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_index`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_bold(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bold`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_italic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_italic`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_small_caps(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_small_caps`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_underline(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_underline`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
