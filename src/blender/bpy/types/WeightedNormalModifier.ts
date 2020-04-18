import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * WeightedNormalModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WeightedNormalModifier.html
 */
export class WeightedNormalModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use influence of face for weighting
     * @desc boolean, default False
     */
    public get face_influence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.face_influence`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Keep sharp edges as computed for default split normals, instead of setting a single weighted normal for each vertex
     * @desc boolean, default False
     */
    public get keep_sharp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.keep_sharp`)
    }

    /**
     * Weighted vertex normal mode to use
     * @desc enum in ['FACE_AREA', 'CORNER_ANGLE', 'FACE_AREA_WITH_ANGLE'], default 'FACE_AREA'
     */
    public get mode(): 'FACE_AREA' | 'CORNER_ANGLE' | 'FACE_AREA_WITH_ANGLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Threshold value for different weights to be considered equal
     * @desc float in [0, 10], default 0.0
     */
    public get thresh(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thresh`)
    }

    /**
     * Vertex group name for modifying the selected areas
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Corrective factor applied to faces’ weights, 50 is neutral, lower values increase weight of weak faces, higher values increase weight of strong faces
     * @desc int in [1, 100], default 0
     */
    public get weight(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Use influence of face for weighting
     * @desc boolean, default False
     */
    public set face_influence(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.face_influence`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Keep sharp edges as computed for default split normals, instead of setting a single weighted normal for each vertex
     * @desc boolean, default False
     */
    public set keep_sharp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.keep_sharp`, value)
    }

    /**
     * Weighted vertex normal mode to use
     * @desc enum in ['FACE_AREA', 'CORNER_ANGLE', 'FACE_AREA_WITH_ANGLE'], default 'FACE_AREA'
     */
    public set mode(value: 'FACE_AREA' | 'CORNER_ANGLE' | 'FACE_AREA_WITH_ANGLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Threshold value for different weights to be considered equal
     * @desc float in [0, 10], default 0.0
     */
    public set thresh(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thresh`, value)
    }

    /**
     * Vertex group name for modifying the selected areas
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Corrective factor applied to faces’ weights, 50 is neutral, lower values increase weight of weak faces, higher values increase weight of strong faces
     * @desc int in [1, 100], default 0
     */
    public set weight(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
