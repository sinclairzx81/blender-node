import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TexMapping
 * 
 * https://docs.blender.org/api/current/bpy.types.TexMapping.html
 */
export class TexMapping {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public get mapping(): 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public get mapping_x(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_x`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public get mapping_y(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_y`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public get mapping_z(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_z`)
    }

    /**
     * Maximum value for clipping
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get max(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.max`, 'number', 3)
    }

    /**
     * Minimum value for clipping
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get min(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.min`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get rotation(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get translation(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.translation`, 'number', 3)
    }

    /**
     * Whether to use maximum clipping value
     * @desc boolean, default False
     */
    public get use_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max`)
    }

    /**
     * Whether to use minimum clipping value
     * @desc boolean, default False
     */
    public get use_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_min`)
    }

    /**
     * Type of vector that the mapping transforms
     * @desc enum in ['POINT', 'TEXTURE', 'VECTOR', 'NORMAL'], default 'POINT'
     */
    public get vector_type(): 'POINT' | 'TEXTURE' | 'VECTOR' | 'NORMAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vector_type`)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public set mapping(value: 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public set mapping_x(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_x`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public set mapping_y(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_y`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'NONE'
     */
    public set mapping_z(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_z`, value)
    }

    /**
     * Maximum value for clipping
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set max(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.max`, value)
    }

    /**
     * Minimum value for clipping
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set min(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.min`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set rotation(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set translation(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.translation`, value)
    }

    /**
     * Whether to use maximum clipping value
     * @desc boolean, default False
     */
    public set use_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max`, value)
    }

    /**
     * Whether to use minimum clipping value
     * @desc boolean, default False
     */
    public set use_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_min`, value)
    }

    /**
     * Type of vector that the mapping transforms
     * @desc enum in ['POINT', 'TEXTURE', 'VECTOR', 'NORMAL'], default 'POINT'
     */
    public set vector_type(value: 'POINT' | 'TEXTURE' | 'VECTOR' | 'NORMAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vector_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
