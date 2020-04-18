import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * WaveModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WaveModifier.html
 */
export class WaveModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of frames in which the wave damps out after it dies
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get damping_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping_time`)
    }

    /**
     * Distance after which it fades out
     * @desc float in [0, inf], default 0.0
     */
    public get falloff_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff_radius`)
    }

    /**
     * Height of the wave
     * @desc float in [-inf, inf], default 0.0
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * Lifetime of the wave in frames, zero means infinite
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get lifetime(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lifetime`)
    }

    /**
     * Distance between the top and the base of a wave, the higher the value, the more narrow the wave
     * @desc float in [0, inf], default 0.0
     */
    public get narrowness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.narrowness`)
    }

    /**
     * Speed of the wave, towards the starting point when negative
     * @desc float in [-inf, inf], default 0.0
     */
    public get speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.speed`)
    }

    /**
     * Object which defines the wave center
     * @desc Object
     */
    public get start_position_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.start_position_object`, BlenderObject)
    }

    /**
     * X coordinate of the start position
     * @desc float in [-inf, inf], default 0.0
     */
    public get start_position_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.start_position_x`)
    }

    /**
     * Y coordinate of the start position
     * @desc float in [-inf, inf], default 0.0
     */
    public get start_position_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.start_position_y`)
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
     * Either the starting frame (for positive speed) or ending frame (for negative speed.)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get time_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_offset`)
    }

    /**
     * Cyclic wave effect
     * @desc boolean, default False
     */
    public get use_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic`)
    }

    /**
     * Displace along normals
     * @desc boolean, default False
     */
    public get use_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal`)
    }

    /**
     * Enable displacement along the X normal
     * @desc boolean, default False
     */
    public get use_normal_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_x`)
    }

    /**
     * Enable displacement along the Y normal
     * @desc boolean, default False
     */
    public get use_normal_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_y`)
    }

    /**
     * Enable displacement along the Z normal
     * @desc boolean, default False
     */
    public get use_normal_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_z`)
    }

    /**
     * X axis motion
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * Y axis motion
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Vertex group name for modulating the wave
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Distance between the waves
     * @desc float in [0, inf], default 0.0
     */
    public get width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.width`)
    }

    /**
     * Number of frames in which the wave damps out after it dies
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set damping_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping_time`, value)
    }

    /**
     * Distance after which it fades out
     * @desc float in [0, inf], default 0.0
     */
    public set falloff_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff_radius`, value)
    }

    /**
     * Height of the wave
     * @desc float in [-inf, inf], default 0.0
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * Lifetime of the wave in frames, zero means infinite
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set lifetime(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lifetime`, value)
    }

    /**
     * Distance between the top and the base of a wave, the higher the value, the more narrow the wave
     * @desc float in [0, inf], default 0.0
     */
    public set narrowness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.narrowness`, value)
    }

    /**
     * Speed of the wave, towards the starting point when negative
     * @desc float in [-inf, inf], default 0.0
     */
    public set speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.speed`, value)
    }

    /**
     * Object which defines the wave center
     * @desc Object
     */
    public set start_position_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.start_position_object`, value)
    }

    /**
     * X coordinate of the start position
     * @desc float in [-inf, inf], default 0.0
     */
    public set start_position_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.start_position_x`, value)
    }

    /**
     * Y coordinate of the start position
     * @desc float in [-inf, inf], default 0.0
     */
    public set start_position_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.start_position_y`, value)
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
     * Either the starting frame (for positive speed) or ending frame (for negative speed.)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set time_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time_offset`, value)
    }

    /**
     * Cyclic wave effect
     * @desc boolean, default False
     */
    public set use_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic`, value)
    }

    /**
     * Displace along normals
     * @desc boolean, default False
     */
    public set use_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal`, value)
    }

    /**
     * Enable displacement along the X normal
     * @desc boolean, default False
     */
    public set use_normal_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_x`, value)
    }

    /**
     * Enable displacement along the Y normal
     * @desc boolean, default False
     */
    public set use_normal_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_y`, value)
    }

    /**
     * Enable displacement along the Z normal
     * @desc boolean, default False
     */
    public set use_normal_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_z`, value)
    }

    /**
     * X axis motion
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * Y axis motion
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    /**
     * Vertex group name for modulating the wave
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Distance between the waves
     * @desc float in [0, inf], default 0.0
     */
    public set width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.width`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
