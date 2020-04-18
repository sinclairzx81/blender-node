import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * NormalEditModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.NormalEditModifier.html
 */
export class NormalEditModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * How much of generated normals to mix with exiting ones
     * @desc float in [0, 1], default 1.0
     */
    public get mix_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix_factor`)
    }

    /**
     * Maximum angle between old and new normals
     * @desc float in [0, 3.14159], default 1.0
     */
    public get mix_limit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix_limit`)
    }

    /**
     * How to mix generated normals with existing ones
     * @desc enum in ['COPY', 'ADD', 'SUB', 'MUL'], default 'COPY'
     */
    public get mix_mode(): 'COPY' | 'ADD' | 'SUB' | 'MUL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
    }

    /**
     * How to affect (generate) normals
     * @desc enum in ['RADIAL', 'DIRECTIONAL'], default 'RADIAL'
     */
    public get mode(): 'RADIAL' | 'DIRECTIONAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Do not flip polygons when their normals are not consistent with their newly computed custom vertex normals
     * @desc boolean, default False
     */
    public get no_polynors_fix(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.no_polynors_fix`)
    }

    /**
     * Offset from object’s center
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 3)
    }

    /**
     * Target object used to affect normals
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Use same direction for all normals, from origin to target’s center (Directional mode only)
     * @desc boolean, default True
     */
    public get use_direction_parallel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_direction_parallel`)
    }

    /**
     * Vertex group name for selecting/weighting the affected areas
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * How much of generated normals to mix with exiting ones
     * @desc float in [0, 1], default 1.0
     */
    public set mix_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix_factor`, value)
    }

    /**
     * Maximum angle between old and new normals
     * @desc float in [0, 3.14159], default 1.0
     */
    public set mix_limit(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix_limit`, value)
    }

    /**
     * How to mix generated normals with existing ones
     * @desc enum in ['COPY', 'ADD', 'SUB', 'MUL'], default 'COPY'
     */
    public set mix_mode(value: 'COPY' | 'ADD' | 'SUB' | 'MUL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
    }

    /**
     * How to affect (generate) normals
     * @desc enum in ['RADIAL', 'DIRECTIONAL'], default 'RADIAL'
     */
    public set mode(value: 'RADIAL' | 'DIRECTIONAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Do not flip polygons when their normals are not consistent with their newly computed custom vertex normals
     * @desc boolean, default False
     */
    public set no_polynors_fix(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.no_polynors_fix`, value)
    }

    /**
     * Offset from object’s center
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Target object used to affect normals
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Use same direction for all normals, from origin to target’s center (Directional mode only)
     * @desc boolean, default True
     */
    public set use_direction_parallel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_direction_parallel`, value)
    }

    /**
     * Vertex group name for selecting/weighting the affected areas
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
