import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ImageFormatSettings } from './ImageFormatSettings'
import { BlenderObject } from './BlenderObject'

/**
 * BakeSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.BakeSettings.html
 */
export class BakeSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ImageFormatSettings, (readonly, never None)
     */
    public get image_settings(): ImageFormatSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_settings`, ImageFormatSettings)
    }

    /**
     * Passes to include in the active baking pass
     * @desc enum set in {'NONE', 'AO', 'EMIT', 'DIRECT', 'INDIRECT', 'COLOR', 'DIFFUSE', 'GLOSSY', 'TRANSMISSION', 'SUBSURFACE'}, default {}, (readonly)
     */
    public get pass_filter(): ('NONE' | 'AO' | 'EMIT' | 'DIRECT' | 'INDIRECT' | 'COLOR' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.pass_filter`)
    }

    /**
     * Distance to use for the inward ray cast when using selected to active
     * @desc float in [0, inf], default 0.0
     */
    public get cage_extrusion(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cage_extrusion`)
    }

    /**
     * Object to use as cage instead of calculating the cage from the active object with cage extrusion
     * @desc Object
     */
    public get cage_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cage_object`, BlenderObject)
    }

    /**
     * Image filepath to use when saving externally
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Vertical dimension of the baking map
     * @desc int in [4, 10000], default 512
     */
    public get height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.height`)
    }

    /**
     * Extends the baked result as a post process filter
     * @desc int in [0, 32767], default 16
     */
    public get margin(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.margin`)
    }

    /**
     * Axis to bake in blue channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get normal_b(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.normal_b`)
    }

    /**
     * Axis to bake in green channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get normal_g(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.normal_g`)
    }

    /**
     * Axis to bake in red channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get normal_r(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.normal_r`)
    }

    /**
     * Choose normal space for baking
     * @desc enum in ['OBJECT', 'TANGENT'], default 'OBJECT'
     */
    public get normal_space(): 'OBJECT' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.normal_space`)
    }

    /**
     * Choose how to save the baking map
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public get save_mode(): 'INTERNAL' | 'EXTERNAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.save_mode`)
    }

    /**
     * Automatically name the output file with the pass type (external only)
     * @desc boolean, default False
     */
    public get use_automatic_name(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_automatic_name`)
    }

    /**
     * Cast rays to active object from a cage
     * @desc boolean, default False
     */
    public get use_cage(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cage`)
    }

    /**
     * Clear Images before baking (internal only)
     * @desc boolean, default True
     */
    public get use_clear(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clear`)
    }

    /**
     * Add ambient occlusion contribution
     * @desc boolean, default True
     */
    public get use_pass_ambient_occlusion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_ambient_occlusion`)
    }

    /**
     * Color the pass
     * @desc boolean, default True
     */
    public get use_pass_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_color`)
    }

    /**
     * Add diffuse contribution
     * @desc boolean, default True
     */
    public get use_pass_diffuse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_diffuse`)
    }

    /**
     * Add direct lighting contribution
     * @desc boolean, default True
     */
    public get use_pass_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_direct`)
    }

    /**
     * Add emission contribution
     * @desc boolean, default True
     */
    public get use_pass_emit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_emit`)
    }

    /**
     * Add glossy contribution
     * @desc boolean, default True
     */
    public get use_pass_glossy(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_glossy`)
    }

    /**
     * Add indirect lighting contribution
     * @desc boolean, default True
     */
    public get use_pass_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_indirect`)
    }

    /**
     * Add subsurface contribution
     * @desc boolean, default True
     */
    public get use_pass_subsurface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_subsurface`)
    }

    /**
     * Add transmission contribution
     * @desc boolean, default True
     */
    public get use_pass_transmission(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pass_transmission`)
    }

    /**
     * Bake shading on the surface of selected objects to the active object
     * @desc boolean, default False
     */
    public get use_selected_to_active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_selected_to_active`)
    }

    /**
     * Split external images per material (external only)
     * @desc boolean, default False
     */
    public get use_split_materials(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_split_materials`)
    }

    /**
     * Horizontal dimension of the baking map
     * @desc int in [4, 10000], default 512
     */
    public get width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.width`)
    }

    /**
     * Distance to use for the inward ray cast when using selected to active
     * @desc float in [0, inf], default 0.0
     */
    public set cage_extrusion(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cage_extrusion`, value)
    }

    /**
     * Object to use as cage instead of calculating the cage from the active object with cage extrusion
     * @desc Object
     */
    public set cage_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.cage_object`, value)
    }

    /**
     * Image filepath to use when saving externally
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Vertical dimension of the baking map
     * @desc int in [4, 10000], default 512
     */
    public set height(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * Extends the baked result as a post process filter
     * @desc int in [0, 32767], default 16
     */
    public set margin(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.margin`, value)
    }

    /**
     * Axis to bake in blue channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set normal_b(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.normal_b`, value)
    }

    /**
     * Axis to bake in green channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set normal_g(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.normal_g`, value)
    }

    /**
     * Axis to bake in red channel
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set normal_r(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.normal_r`, value)
    }

    /**
     * Choose normal space for baking
     * @desc enum in ['OBJECT', 'TANGENT'], default 'OBJECT'
     */
    public set normal_space(value: 'OBJECT' | 'TANGENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.normal_space`, value)
    }

    /**
     * Choose how to save the baking map
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public set save_mode(value: 'INTERNAL' | 'EXTERNAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.save_mode`, value)
    }

    /**
     * Automatically name the output file with the pass type (external only)
     * @desc boolean, default False
     */
    public set use_automatic_name(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_automatic_name`, value)
    }

    /**
     * Cast rays to active object from a cage
     * @desc boolean, default False
     */
    public set use_cage(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cage`, value)
    }

    /**
     * Clear Images before baking (internal only)
     * @desc boolean, default True
     */
    public set use_clear(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clear`, value)
    }

    /**
     * Add ambient occlusion contribution
     * @desc boolean, default True
     */
    public set use_pass_ambient_occlusion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_ambient_occlusion`, value)
    }

    /**
     * Color the pass
     * @desc boolean, default True
     */
    public set use_pass_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_color`, value)
    }

    /**
     * Add diffuse contribution
     * @desc boolean, default True
     */
    public set use_pass_diffuse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_diffuse`, value)
    }

    /**
     * Add direct lighting contribution
     * @desc boolean, default True
     */
    public set use_pass_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_direct`, value)
    }

    /**
     * Add emission contribution
     * @desc boolean, default True
     */
    public set use_pass_emit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_emit`, value)
    }

    /**
     * Add glossy contribution
     * @desc boolean, default True
     */
    public set use_pass_glossy(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_glossy`, value)
    }

    /**
     * Add indirect lighting contribution
     * @desc boolean, default True
     */
    public set use_pass_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_indirect`, value)
    }

    /**
     * Add subsurface contribution
     * @desc boolean, default True
     */
    public set use_pass_subsurface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_subsurface`, value)
    }

    /**
     * Add transmission contribution
     * @desc boolean, default True
     */
    public set use_pass_transmission(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pass_transmission`, value)
    }

    /**
     * Bake shading on the surface of selected objects to the active object
     * @desc boolean, default False
     */
    public set use_selected_to_active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_selected_to_active`, value)
    }

    /**
     * Split external images per material (external only)
     * @desc boolean, default False
     */
    public set use_split_materials(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_split_materials`, value)
    }

    /**
     * Horizontal dimension of the baking map
     * @desc int in [4, 10000], default 512
     */
    public set width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.width`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
