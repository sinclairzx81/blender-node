import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveProfilePoints } from './CurveProfilePoints'
import { CurveProfilePoint } from './CurveProfilePoint'

/**
 * CurveProfile
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveProfile.html
 */
export class CurveProfile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Profile control points
     * @desc CurveProfilePoints bpy_prop_collection of CurveProfilePoint, (readonly)
     */
    public get points(): BlenderCollection<CurveProfilePoint> & Indexable<CurveProfilePoint> & CurveProfilePoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.points`, CurveProfilePoints, CurveProfilePoint)
    }

    /**
     * Segments sampled from control points
     * @desc bpy_prop_collection of CurveProfilePoint, (readonly)
     */
    public get segments(): BlenderCollection<CurveProfilePoint> & Indexable<CurveProfilePoint> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.segments`, CurveProfilePoint)
    }

    /**
     * 
     * @desc enum in ['LINE', 'SUPPORTS', 'CORNICE', 'CROWN', 'STEPS'], default 'LINE'
     */
    public get preset(): 'LINE' | 'SUPPORTS' | 'CORNICE' | 'CROWN' | 'STEPS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.preset`)
    }

    /**
     * Force the path view to fit a defined boundary
     * @desc boolean, default False
     */
    public get use_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clip`)
    }

    /**
     * Sample edges with even lengths
     * @desc boolean, default False
     */
    public get use_sample_even_lengths(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sample_even_lengths`)
    }

    /**
     * Sample edges with vector handles
     * @desc boolean, default False
     */
    public get use_sample_straight_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sample_straight_edges`)
    }

    /**
     * 
     * @desc enum in ['LINE', 'SUPPORTS', 'CORNICE', 'CROWN', 'STEPS'], default 'LINE'
     */
    public set preset(value: 'LINE' | 'SUPPORTS' | 'CORNICE' | 'CROWN' | 'STEPS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.preset`, value)
    }

    /**
     * Force the path view to fit a defined boundary
     * @desc boolean, default False
     */
    public set use_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clip`, value)
    }

    /**
     * Sample edges with even lengths
     * @desc boolean, default False
     */
    public set use_sample_even_lengths(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sample_even_lengths`, value)
    }

    /**
     * Sample edges with vector handles
     * @desc boolean, default False
     */
    public set use_sample_straight_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sample_straight_edges`, value)
    }

    /**
     * Update the profile
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Set the number of display segments and fill tables
     * @desc void
     */
    public initialize(options: { totsegments?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.initialize`, options)
    }

    /**
     * Evaluate the at the given portion of the path length
     * @desc float array of 2 items in [-100, 100]
     */
    public evaluate(options: { length_portion?: number }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.evaluate`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
