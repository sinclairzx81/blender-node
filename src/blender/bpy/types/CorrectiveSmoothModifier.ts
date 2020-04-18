import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * CorrectiveSmoothModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.CorrectiveSmoothModifier.html
 */
export class CorrectiveSmoothModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_bind(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_bind`)
    }

    /**
     * Smooth factor effect
     * @desc float in [-inf, inf], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Select the source of rest positions
     * @desc enum in ['ORCO', 'BIND'], default 'ORCO'
     */
    public get rest_source(): 'ORCO' | 'BIND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rest_source`)
    }

    /**
     * Method used for smoothing
     * @desc enum in ['SIMPLE', 'LENGTH_WEIGHTED'], default 'SIMPLE'
     */
    public get smooth_type(): 'SIMPLE' | 'LENGTH_WEIGHTED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.smooth_type`)
    }

    /**
     * Apply smoothing without reconstructing the surface
     * @desc boolean, default False
     */
    public get use_only_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_only_smooth`)
    }

    /**
     * Excludes boundary vertices from being smoothed
     * @desc boolean, default False
     */
    public get use_pin_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pin_boundary`)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Smooth factor effect
     * @desc float in [-inf, inf], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Select the source of rest positions
     * @desc enum in ['ORCO', 'BIND'], default 'ORCO'
     */
    public set rest_source(value: 'ORCO' | 'BIND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rest_source`, value)
    }

    /**
     * Method used for smoothing
     * @desc enum in ['SIMPLE', 'LENGTH_WEIGHTED'], default 'SIMPLE'
     */
    public set smooth_type(value: 'SIMPLE' | 'LENGTH_WEIGHTED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.smooth_type`, value)
    }

    /**
     * Apply smoothing without reconstructing the surface
     * @desc boolean, default False
     */
    public set use_only_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_only_smooth`, value)
    }

    /**
     * Excludes boundary vertices from being smoothed
     * @desc boolean, default False
     */
    public set use_pin_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pin_boundary`, value)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
