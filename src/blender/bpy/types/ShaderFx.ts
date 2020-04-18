import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ShaderFx
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFx.html
 */
export class ShaderFx {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['FX_BLUR', 'FX_COLORIZE', 'FX_FLIP', 'FX_GLOW', 'FX_LIGHT', 'FX_PIXEL', 'FX_RIM', 'FX_SHADOW', 'FX_SWIRL', 'FX_WAVE'], default 'FX_BLUR', (readonly)
     */
    public get type(): 'FX_BLUR' | 'FX_COLORIZE' | 'FX_FLIP' | 'FX_GLOW' | 'FX_LIGHT' | 'FX_PIXEL' | 'FX_RIM' | 'FX_SHADOW' | 'FX_SWIRL' | 'FX_WAVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Effect name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Set effect expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Display effect in Edit mode
     * @desc boolean, default False
     */
    public get show_in_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_in_editmode`)
    }

    /**
     * Use effect during render
     * @desc boolean, default False
     */
    public get show_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_render`)
    }

    /**
     * Display effect in viewport
     * @desc boolean, default False
     */
    public get show_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_viewport`)
    }

    /**
     * Effect name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Set effect expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Display effect in Edit mode
     * @desc boolean, default False
     */
    public set show_in_editmode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_in_editmode`, value)
    }

    /**
     * Use effect during render
     * @desc boolean, default False
     */
    public set show_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_render`, value)
    }

    /**
     * Display effect in viewport
     * @desc boolean, default False
     */
    public set show_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_viewport`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
