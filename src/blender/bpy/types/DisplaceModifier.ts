import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { Texture } from './Texture'
import { BlenderObject } from './BlenderObject'

/**
 * DisplaceModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.DisplaceModifier.html
 */
export class DisplaceModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['X', 'Y', 'Z', 'NORMAL', 'CUSTOM_NORMAL', 'RGB_TO_XYZ'], default 'X'
     */
    public get direction(): 'X' | 'Y' | 'Z' | 'NORMAL' | 'CUSTOM_NORMAL' | 'RGB_TO_XYZ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.direction`)
    }

    /**
     * Material value that gives no displacement
     * @desc float in [-inf, inf], default 0.0
     */
    public get mid_level(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mid_level`)
    }

    /**
     * 
     * @desc enum in ['LOCAL', 'GLOBAL'], default 'LOCAL'
     */
    public get space(): 'LOCAL' | 'GLOBAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * Amount to displace geometry
     * @desc float in [-inf, inf], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * 
     * @desc Texture
     */
    public get texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture`, Texture)
    }

    /**
     * 
     * @desc enum in ['LOCAL', 'GLOBAL', 'OBJECT', 'UV'], default 'LOCAL'
     */
    public get texture_coords(): 'LOCAL' | 'GLOBAL' | 'OBJECT' | 'UV' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_coords`)
    }

    /**
     * Object to set the texture coordinates
     * @desc Object
     */
    public get texture_coords_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_coords_object`, BlenderObject)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * 
     * @desc enum in ['X', 'Y', 'Z', 'NORMAL', 'CUSTOM_NORMAL', 'RGB_TO_XYZ'], default 'X'
     */
    public set direction(value: 'X' | 'Y' | 'Z' | 'NORMAL' | 'CUSTOM_NORMAL' | 'RGB_TO_XYZ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.direction`, value)
    }

    /**
     * Material value that gives no displacement
     * @desc float in [-inf, inf], default 0.0
     */
    public set mid_level(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mid_level`, value)
    }

    /**
     * 
     * @desc enum in ['LOCAL', 'GLOBAL'], default 'LOCAL'
     */
    public set space(value: 'LOCAL' | 'GLOBAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
    }

    /**
     * Amount to displace geometry
     * @desc float in [-inf, inf], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * 
     * @desc Texture
     */
    public set texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture`, value)
    }

    /**
     * 
     * @desc enum in ['LOCAL', 'GLOBAL', 'OBJECT', 'UV'], default 'LOCAL'
     */
    public set texture_coords(value: 'LOCAL' | 'GLOBAL' | 'OBJECT' | 'UV') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_coords`, value)
    }

    /**
     * Object to set the texture coordinates
     * @desc Object
     */
    public set texture_coords_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture_coords_object`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
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
