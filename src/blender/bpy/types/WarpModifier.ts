import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CurveMapping } from './CurveMapping'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * WarpModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WarpModifier.html
 */
export class WarpModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom falloff curve
     * @desc CurveMapping, (readonly)
     */
    public get falloff_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.falloff_curve`, CurveMapping)
    }

    /**
     * Radius to apply
     * @desc float in [-inf, inf], default 0.0
     */
    public get falloff_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff_radius`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'CURVE', 'SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT'], default 'NONE'
     */
    public get falloff_type(): 'NONE' | 'CURVE' | 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_type`)
    }

    /**
     * Object to transform from
     * @desc Object
     */
    public get object_from(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object_from`, BlenderObject)
    }

    /**
     * Object to transform to
     * @desc Object
     */
    public get object_to(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object_to`, BlenderObject)
    }

    /**
     * 
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
     * Preserve volume when rotations are used
     * @desc boolean, default False
     */
    public get use_volume_preserve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_volume_preserve`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Radius to apply
     * @desc float in [-inf, inf], default 0.0
     */
    public set falloff_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff_radius`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'CURVE', 'SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT'], default 'NONE'
     */
    public set falloff_type(value: 'NONE' | 'CURVE' | 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_type`, value)
    }

    /**
     * Object to transform from
     * @desc Object
     */
    public set object_from(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object_from`, value)
    }

    /**
     * Object to transform to
     * @desc Object
     */
    public set object_to(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object_to`, value)
    }

    /**
     * 
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
     * Preserve volume when rotations are used
     * @desc boolean, default False
     */
    public set use_volume_preserve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_volume_preserve`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
