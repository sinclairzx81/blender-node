import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifier.html
 */
export class FModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * F-Curve Modifier has invalid settings and will not be evaluated
     * @desc boolean, default False, (readonly)
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * F-Curve Modifier Type
     * @desc enum in ['NULL', 'GENERATOR', 'FNGENERATOR', 'ENVELOPE', 'CYCLES', 'NOISE', 'LIMITS', 'STEPPED'], default 'NULL', (readonly)
     */
    public get type(): 'NULL' | 'GENERATOR' | 'FNGENERATOR' | 'ENVELOPE' | 'CYCLES' | 'NOISE' | 'LIMITS' | 'STEPPED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * F-Curve Modifier is the one being edited
     * @desc boolean, default False
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * Number of frames from start frame for influence to take effect
     * @desc float in [-inf, inf], default 0.0
     */
    public get blend_in(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_in`)
    }

    /**
     * Number of frames from end frame for influence to fade out
     * @desc float in [-inf, inf], default 0.0
     */
    public get blend_out(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_out`)
    }

    /**
     * Frame that modifier’s influence ends (if Restrict Frame Range is in use)
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Frame that modifier’s influence starts (if Restrict Frame Range is in use)
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Amount of influence F-Curve Modifier will have when not fading in/out
     * @desc float in [0, 1], default 1.0
     */
    public get influence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence`)
    }

    /**
     * Disable F-Curve Modifier evaluation
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * F-Curve Modifier’s panel is expanded in UI
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * F-Curve Modifier’s effects will be tempered by a default factor
     * @desc boolean, default False
     */
    public get use_influence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_influence`)
    }

    /**
     * F-Curve Modifier is only applied for the specified frame range to help mask off effects in order to chain them
     * @desc boolean, default False
     */
    public get use_restricted_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_restricted_range`)
    }

    /**
     * F-Curve Modifier is the one being edited
     * @desc boolean, default False
     */
    public set active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Number of frames from start frame for influence to take effect
     * @desc float in [-inf, inf], default 0.0
     */
    public set blend_in(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_in`, value)
    }

    /**
     * Number of frames from end frame for influence to fade out
     * @desc float in [-inf, inf], default 0.0
     */
    public set blend_out(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_out`, value)
    }

    /**
     * Frame that modifier’s influence ends (if Restrict Frame Range is in use)
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Frame that modifier’s influence starts (if Restrict Frame Range is in use)
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Amount of influence F-Curve Modifier will have when not fading in/out
     * @desc float in [0, 1], default 1.0
     */
    public set influence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence`, value)
    }

    /**
     * Disable F-Curve Modifier evaluation
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * F-Curve Modifier’s panel is expanded in UI
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * F-Curve Modifier’s effects will be tempered by a default factor
     * @desc boolean, default False
     */
    public set use_influence(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_influence`, value)
    }

    /**
     * F-Curve Modifier is only applied for the specified frame range to help mask off effects in order to chain them
     * @desc boolean, default False
     */
    public set use_restricted_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_restricted_range`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
