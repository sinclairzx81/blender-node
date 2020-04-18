import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MaskSplinePointUW } from './MaskSplinePointUW'
import { MaskParent } from './MaskParent'

/**
 * MaskSplinePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSplinePoint.html
 */
export class MaskSplinePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Points defining feather
     * @desc bpy_prop_collection of MaskSplinePointUW, (readonly)
     */
    public get feather_points(): BlenderCollection<MaskSplinePointUW> & Indexable<MaskSplinePointUW> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.feather_points`, MaskSplinePointUW)
    }

    /**
     * 
     * @desc MaskParent, (readonly)
     */
    public get parent(): MaskParent {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, MaskParent)
    }

    /**
     * Coordinates of the control point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get co(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 2)
    }

    /**
     * Coordinates of the first handle
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get handle_left(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_left`, 'number', 2)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public get handle_left_type(): 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_left_type`)
    }

    /**
     * Coordinates of the second handle
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get handle_right(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_right`, 'number', 2)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public get handle_right_type(): 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_right_type`)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public get handle_type(): 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_type`)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Weight of the point
     * @desc float in [0, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Coordinates of the control point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set co(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Coordinates of the first handle
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set handle_left(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_left`, value)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public set handle_left_type(value: 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_left_type`, value)
    }

    /**
     * Coordinates of the second handle
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set handle_right(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_right`, value)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public set handle_right_type(value: 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_right_type`, value)
    }

    /**
     * Handle type
     * @desc enum in ['AUTO', 'VECTOR', 'ALIGNED', 'ALIGNED_DOUBLESIDE', 'FREE'], default 'FREE'
     */
    public set handle_type(value: 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_type`, value)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Weight of the point
     * @desc float in [0, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
