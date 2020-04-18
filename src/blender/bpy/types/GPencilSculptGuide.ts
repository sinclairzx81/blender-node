import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * GPencilSculptGuide
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilSculptGuide.html
 */
export class GPencilSculptGuide {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Direction of lines
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Angle snapping
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public get angle_snap(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_snap`)
    }

    /**
     * Custom reference point for guides
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * Object used for reference point
     * @desc Object
     */
    public get reference_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.reference_object`, BlenderObject)
    }

    /**
     * Type of speed guide
     * @desc enum in ['CURSOR', 'CUSTOM', 'OBJECT'], default 'CURSOR'
     */
    public get reference_point(): 'CURSOR' | 'CUSTOM' | 'OBJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.reference_point`)
    }

    /**
     * Guide spacing
     * @desc float in [0, inf], default 20.0
     */
    public get spacing(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spacing`)
    }

    /**
     * Type of speed guide
     * @desc enum in ['CIRCULAR', 'RADIAL', 'PARALLEL', 'GRID', 'ISO'], default 'CIRCULAR'
     */
    public get type(): 'CIRCULAR' | 'RADIAL' | 'PARALLEL' | 'GRID' | 'ISO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Enable speed guides
     * @desc boolean, default False
     */
    public get use_guide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_guide`)
    }

    /**
     * Enable snapping to guides angle or spacing options
     * @desc boolean, default False
     */
    public get use_snapping(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snapping`)
    }

    /**
     * Direction of lines
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Angle snapping
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public set angle_snap(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_snap`, value)
    }

    /**
     * Custom reference point for guides
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Object used for reference point
     * @desc Object
     */
    public set reference_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.reference_object`, value)
    }

    /**
     * Type of speed guide
     * @desc enum in ['CURSOR', 'CUSTOM', 'OBJECT'], default 'CURSOR'
     */
    public set reference_point(value: 'CURSOR' | 'CUSTOM' | 'OBJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.reference_point`, value)
    }

    /**
     * Guide spacing
     * @desc float in [0, inf], default 20.0
     */
    public set spacing(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spacing`, value)
    }

    /**
     * Type of speed guide
     * @desc enum in ['CIRCULAR', 'RADIAL', 'PARALLEL', 'GRID', 'ISO'], default 'CIRCULAR'
     */
    public set type(value: 'CIRCULAR' | 'RADIAL' | 'PARALLEL' | 'GRID' | 'ISO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Enable speed guides
     * @desc boolean, default False
     */
    public set use_guide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_guide`, value)
    }

    /**
     * Enable snapping to guides angle or spacing options
     * @desc boolean, default False
     */
    public set use_snapping(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snapping`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
