import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GpencilVertexGroupElement } from './GpencilVertexGroupElement'
import { GPencilStrokePoints } from './GPencilStrokePoints'
import { GPencilStrokePoint } from './GPencilStrokePoint'
import { GPencilTriangle } from './GPencilTriangle'

/**
 * GPencilStroke
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilStroke.html
 */
export class GPencilStroke {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Weights for the vertex groups this vertex is member of
     * @desc bpy_prop_collection of GpencilVertexGroupElement, (readonly)
     */
    public get groups(): BlenderCollection<GpencilVertexGroupElement> & Indexable<GpencilVertexGroupElement> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.groups`, GpencilVertexGroupElement)
    }

    /**
     * Special stroke to use as boundary for filling areas
     * @desc boolean, default False, (readonly)
     */
    public get is_nofill_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_nofill_stroke`)
    }

    /**
     * Stroke data points
     * @desc GPencilStrokePoints bpy_prop_collection of GPencilStrokePoint, (readonly)
     */
    public get points(): BlenderCollection<GPencilStrokePoint> & Indexable<GPencilStrokePoint> & GPencilStrokePoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.points`, GPencilStrokePoints, GPencilStrokePoint)
    }

    /**
     * Triangulation data for HQ fill
     * @desc bpy_prop_collection of GPencilTriangle, (readonly)
     */
    public get triangles(): BlenderCollection<GPencilTriangle> & Indexable<GPencilTriangle> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.triangles`, GPencilTriangle)
    }

    /**
     * Coordinate space that stroke is in
     * @desc enum in ['SCREEN', '3DSPACE', '2DSPACE', '2DIMAGE'], default 'SCREEN'
     */
    public get display_mode(): 'SCREEN' | '3DSPACE' | '2DSPACE' | '2DIMAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_mode`)
    }

    /**
     * Enable cyclic drawing, closing the stroke
     * @desc boolean, default False
     */
    public get draw_cyclic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.draw_cyclic`)
    }

    /**
     * Stroke end extreme cap style
     * @desc enum in ['ROUND', 'FLAT'], default 'ROUND'
     */
    public get end_cap_mode(): 'ROUND' | 'FLAT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.end_cap_mode`)
    }

    /**
     * Amount of gradient along section of stroke
     * @desc float in [0.001, 1], default 1.0
     */
    public get gradient_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gradient_factor`)
    }

    /**
     * 
     * @desc float array of 2 items in [0.01, 1], default (1.0, 1.0)
     */
    public get gradient_shape(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gradient_shape`, 'number', 2)
    }

    /**
     * Thickness of stroke (in pixels)
     * @desc int in [1, 1000], default 0
     */
    public get line_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.line_width`)
    }

    /**
     * Index of material used in this stroke
     * @desc int in [-inf, inf], default 0
     */
    public get material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_index`)
    }

    /**
     * Stroke is selected for viewport editing
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Stroke start extreme cap style
     * @desc enum in ['ROUND', 'FLAT'], default 'ROUND'
     */
    public get start_cap_mode(): 'ROUND' | 'FLAT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.start_cap_mode`)
    }

    /**
     * Coordinate space that stroke is in
     * @desc enum in ['SCREEN', '3DSPACE', '2DSPACE', '2DIMAGE'], default 'SCREEN'
     */
    public set display_mode(value: 'SCREEN' | '3DSPACE' | '2DSPACE' | '2DIMAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_mode`, value)
    }

    /**
     * Enable cyclic drawing, closing the stroke
     * @desc boolean, default False
     */
    public set draw_cyclic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.draw_cyclic`, value)
    }

    /**
     * Stroke end extreme cap style
     * @desc enum in ['ROUND', 'FLAT'], default 'ROUND'
     */
    public set end_cap_mode(value: 'ROUND' | 'FLAT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.end_cap_mode`, value)
    }

    /**
     * Amount of gradient along section of stroke
     * @desc float in [0.001, 1], default 1.0
     */
    public set gradient_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gradient_factor`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [0.01, 1], default (1.0, 1.0)
     */
    public set gradient_shape(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gradient_shape`, value)
    }

    /**
     * Thickness of stroke (in pixels)
     * @desc int in [1, 1000], default 0
     */
    public set line_width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.line_width`, value)
    }

    /**
     * Index of material used in this stroke
     * @desc int in [-inf, inf], default 0
     */
    public set material_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_index`, value)
    }

    /**
     * Stroke is selected for viewport editing
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Stroke start extreme cap style
     * @desc enum in ['ROUND', 'FLAT'], default 'ROUND'
     */
    public set start_cap_mode(value: 'ROUND' | 'FLAT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.start_cap_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
