import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * ExplodeModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ExplodeModifier.html
 */
export class ExplodeModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * UV map to change with particle age
     * @desc string, default '', (never None)
     */
    public get particle_uv(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.particle_uv`)
    }

    /**
     * Clean vertex group edges
     * @desc float in [0, 1], default 0.0
     */
    public get protect(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.protect`)
    }

    /**
     * Show mesh when particles are alive
     * @desc boolean, default False
     */
    public get show_alive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_alive`)
    }

    /**
     * Show mesh when particles are dead
     * @desc boolean, default False
     */
    public get show_dead(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_dead`)
    }

    /**
     * Show mesh when particles are unborn
     * @desc boolean, default False
     */
    public get show_unborn(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_unborn`)
    }

    /**
     * Cut face edges for nicer shrapnel
     * @desc boolean, default False
     */
    public get use_edge_cut(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_cut`)
    }

    /**
     * Use particle size for the shrapnel
     * @desc boolean, default False
     */
    public get use_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_size`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * UV map to change with particle age
     * @desc string, default '', (never None)
     */
    public set particle_uv(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.particle_uv`, value)
    }

    /**
     * Clean vertex group edges
     * @desc float in [0, 1], default 0.0
     */
    public set protect(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.protect`, value)
    }

    /**
     * Show mesh when particles are alive
     * @desc boolean, default False
     */
    public set show_alive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_alive`, value)
    }

    /**
     * Show mesh when particles are dead
     * @desc boolean, default False
     */
    public set show_dead(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_dead`, value)
    }

    /**
     * Show mesh when particles are unborn
     * @desc boolean, default False
     */
    public set show_unborn(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_unborn`, value)
    }

    /**
     * Cut face edges for nicer shrapnel
     * @desc boolean, default False
     */
    public set use_edge_cut(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_cut`, value)
    }

    /**
     * Use particle size for the shrapnel
     * @desc boolean, default False
     */
    public set use_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_size`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
