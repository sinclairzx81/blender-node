import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Collection } from './Collection'
import { FreestyleLineStyle } from './FreestyleLineStyle'

/**
 * FreestyleLineSet
 * 
 * https://docs.blender.org/api/current/bpy.types.FreestyleLineSet.html
 */
export class FreestyleLineSet {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * A collection of objects based on which feature edges are selected
     * @desc Collection
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * Specify either inclusion or exclusion of feature edges belonging to a collection of objects
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public get collection_negation(): 'INCLUSIVE' | 'EXCLUSIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.collection_negation`)
    }

    /**
     * Specify a logical combination of selection conditions on feature edge types
     * @desc enum in ['OR', 'AND'], default 'OR'
     */
    public get edge_type_combination(): 'OR' | 'AND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edge_type_combination`)
    }

    /**
     * Specify either inclusion or exclusion of feature edges selected by edge types
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public get edge_type_negation(): 'INCLUSIVE' | 'EXCLUSIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edge_type_negation`)
    }

    /**
     * Exclude border edges
     * @desc boolean, default False
     */
    public get exclude_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_border`)
    }

    /**
     * Exclude contours
     * @desc boolean, default False
     */
    public get exclude_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_contour`)
    }

    /**
     * Exclude crease edges
     * @desc boolean, default False
     */
    public get exclude_crease(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_crease`)
    }

    /**
     * Exclude edge marks
     * @desc boolean, default False
     */
    public get exclude_edge_mark(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_edge_mark`)
    }

    /**
     * Exclude external contours
     * @desc boolean, default False
     */
    public get exclude_external_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_external_contour`)
    }

    /**
     * Exclude edges at material boundaries
     * @desc boolean, default False
     */
    public get exclude_material_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_material_boundary`)
    }

    /**
     * Exclude ridges and valleys
     * @desc boolean, default False
     */
    public get exclude_ridge_valley(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_ridge_valley`)
    }

    /**
     * Exclude silhouette edges
     * @desc boolean, default False
     */
    public get exclude_silhouette(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_silhouette`)
    }

    /**
     * Exclude suggestive contours
     * @desc boolean, default False
     */
    public get exclude_suggestive_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude_suggestive_contour`)
    }

    /**
     * Specify a feature edge selection condition based on face marks
     * @desc enum in ['ONE', 'BOTH'], default 'ONE'
     */
    public get face_mark_condition(): 'ONE' | 'BOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.face_mark_condition`)
    }

    /**
     * Specify either inclusion or exclusion of feature edges selected by face marks
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public get face_mark_negation(): 'INCLUSIVE' | 'EXCLUSIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.face_mark_negation`)
    }

    /**
     * Line style settings
     * @desc FreestyleLineStyle, (never None)
     */
    public get linestyle(): FreestyleLineStyle {
        return PythonInterop.getClass(this.interop, `${this.accessor}.linestyle`, FreestyleLineStyle)
    }

    /**
     * Line set name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Last QI value of the QI range
     * @desc int in [0, inf], default 0
     */
    public get qi_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.qi_end`)
    }

    /**
     * First QI value of the QI range
     * @desc int in [0, inf], default 0
     */
    public get qi_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.qi_start`)
    }

    /**
     * Select border edges (open mesh edges)
     * @desc boolean, default False
     */
    public get select_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_border`)
    }

    /**
     * Select feature edges based on a collection of objects
     * @desc boolean, default False
     */
    public get select_by_collection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_by_collection`)
    }

    /**
     * Select feature edges based on edge types
     * @desc boolean, default False
     */
    public get select_by_edge_types(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_by_edge_types`)
    }

    /**
     * Select feature edges by face marks
     * @desc boolean, default False
     */
    public get select_by_face_marks(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_by_face_marks`)
    }

    /**
     * Select feature edges by image border (less memory consumption)
     * @desc boolean, default False
     */
    public get select_by_image_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_by_image_border`)
    }

    /**
     * Select feature edges based on visibility
     * @desc boolean, default False
     */
    public get select_by_visibility(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_by_visibility`)
    }

    /**
     * Select contours (outer silhouettes of each object)
     * @desc boolean, default False
     */
    public get select_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_contour`)
    }

    /**
     * Select crease edges (those between two faces making an angle smaller than the Crease Angle)
     * @desc boolean, default False
     */
    public get select_crease(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_crease`)
    }

    /**
     * Select edge marks (edges annotated by Freestyle edge marks)
     * @desc boolean, default False
     */
    public get select_edge_mark(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_edge_mark`)
    }

    /**
     * Select external contours (outer silhouettes of occluding and occluded objects)
     * @desc boolean, default False
     */
    public get select_external_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_external_contour`)
    }

    /**
     * Select edges at material boundaries
     * @desc boolean, default False
     */
    public get select_material_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_material_boundary`)
    }

    /**
     * Select ridges and valleys (boundary lines between convex and concave areas of surface)
     * @desc boolean, default False
     */
    public get select_ridge_valley(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_ridge_valley`)
    }

    /**
     * Select silhouettes (edges at the boundary of visible and hidden faces)
     * @desc boolean, default False
     */
    public get select_silhouette(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_silhouette`)
    }

    /**
     * Select suggestive contours (almost silhouette/contour edges)
     * @desc boolean, default False
     */
    public get select_suggestive_contour(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_suggestive_contour`)
    }

    /**
     * Enable or disable this line set during stroke rendering
     * @desc boolean, default False
     */
    public get show_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_render`)
    }

    /**
     * Determine how to use visibility for feature edge selection
     * @desc enum in ['VISIBLE', 'HIDDEN', 'RANGE'], default 'VISIBLE'
     */
    public get visibility(): 'VISIBLE' | 'HIDDEN' | 'RANGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.visibility`)
    }

    /**
     * A collection of objects based on which feature edges are selected
     * @desc Collection
     */
    public set collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collection`, value)
    }

    /**
     * Specify either inclusion or exclusion of feature edges belonging to a collection of objects
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public set collection_negation(value: 'INCLUSIVE' | 'EXCLUSIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.collection_negation`, value)
    }

    /**
     * Specify a logical combination of selection conditions on feature edge types
     * @desc enum in ['OR', 'AND'], default 'OR'
     */
    public set edge_type_combination(value: 'OR' | 'AND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edge_type_combination`, value)
    }

    /**
     * Specify either inclusion or exclusion of feature edges selected by edge types
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public set edge_type_negation(value: 'INCLUSIVE' | 'EXCLUSIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edge_type_negation`, value)
    }

    /**
     * Exclude border edges
     * @desc boolean, default False
     */
    public set exclude_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_border`, value)
    }

    /**
     * Exclude contours
     * @desc boolean, default False
     */
    public set exclude_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_contour`, value)
    }

    /**
     * Exclude crease edges
     * @desc boolean, default False
     */
    public set exclude_crease(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_crease`, value)
    }

    /**
     * Exclude edge marks
     * @desc boolean, default False
     */
    public set exclude_edge_mark(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_edge_mark`, value)
    }

    /**
     * Exclude external contours
     * @desc boolean, default False
     */
    public set exclude_external_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_external_contour`, value)
    }

    /**
     * Exclude edges at material boundaries
     * @desc boolean, default False
     */
    public set exclude_material_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_material_boundary`, value)
    }

    /**
     * Exclude ridges and valleys
     * @desc boolean, default False
     */
    public set exclude_ridge_valley(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_ridge_valley`, value)
    }

    /**
     * Exclude silhouette edges
     * @desc boolean, default False
     */
    public set exclude_silhouette(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_silhouette`, value)
    }

    /**
     * Exclude suggestive contours
     * @desc boolean, default False
     */
    public set exclude_suggestive_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude_suggestive_contour`, value)
    }

    /**
     * Specify a feature edge selection condition based on face marks
     * @desc enum in ['ONE', 'BOTH'], default 'ONE'
     */
    public set face_mark_condition(value: 'ONE' | 'BOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.face_mark_condition`, value)
    }

    /**
     * Specify either inclusion or exclusion of feature edges selected by face marks
     * @desc enum in ['INCLUSIVE', 'EXCLUSIVE'], default 'INCLUSIVE'
     */
    public set face_mark_negation(value: 'INCLUSIVE' | 'EXCLUSIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.face_mark_negation`, value)
    }

    /**
     * Line style settings
     * @desc FreestyleLineStyle, (never None)
     */
    public set linestyle(value: FreestyleLineStyle) {
        PythonInterop.setClass(this.interop, `${this.accessor}.linestyle`, value)
    }

    /**
     * Line set name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Last QI value of the QI range
     * @desc int in [0, inf], default 0
     */
    public set qi_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.qi_end`, value)
    }

    /**
     * First QI value of the QI range
     * @desc int in [0, inf], default 0
     */
    public set qi_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.qi_start`, value)
    }

    /**
     * Select border edges (open mesh edges)
     * @desc boolean, default False
     */
    public set select_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_border`, value)
    }

    /**
     * Select feature edges based on a collection of objects
     * @desc boolean, default False
     */
    public set select_by_collection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_by_collection`, value)
    }

    /**
     * Select feature edges based on edge types
     * @desc boolean, default False
     */
    public set select_by_edge_types(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_by_edge_types`, value)
    }

    /**
     * Select feature edges by face marks
     * @desc boolean, default False
     */
    public set select_by_face_marks(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_by_face_marks`, value)
    }

    /**
     * Select feature edges by image border (less memory consumption)
     * @desc boolean, default False
     */
    public set select_by_image_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_by_image_border`, value)
    }

    /**
     * Select feature edges based on visibility
     * @desc boolean, default False
     */
    public set select_by_visibility(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_by_visibility`, value)
    }

    /**
     * Select contours (outer silhouettes of each object)
     * @desc boolean, default False
     */
    public set select_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_contour`, value)
    }

    /**
     * Select crease edges (those between two faces making an angle smaller than the Crease Angle)
     * @desc boolean, default False
     */
    public set select_crease(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_crease`, value)
    }

    /**
     * Select edge marks (edges annotated by Freestyle edge marks)
     * @desc boolean, default False
     */
    public set select_edge_mark(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_edge_mark`, value)
    }

    /**
     * Select external contours (outer silhouettes of occluding and occluded objects)
     * @desc boolean, default False
     */
    public set select_external_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_external_contour`, value)
    }

    /**
     * Select edges at material boundaries
     * @desc boolean, default False
     */
    public set select_material_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_material_boundary`, value)
    }

    /**
     * Select ridges and valleys (boundary lines between convex and concave areas of surface)
     * @desc boolean, default False
     */
    public set select_ridge_valley(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_ridge_valley`, value)
    }

    /**
     * Select silhouettes (edges at the boundary of visible and hidden faces)
     * @desc boolean, default False
     */
    public set select_silhouette(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_silhouette`, value)
    }

    /**
     * Select suggestive contours (almost silhouette/contour edges)
     * @desc boolean, default False
     */
    public set select_suggestive_contour(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_suggestive_contour`, value)
    }

    /**
     * Enable or disable this line set during stroke rendering
     * @desc boolean, default False
     */
    public set show_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_render`, value)
    }

    /**
     * Determine how to use visibility for feature edge selection
     * @desc enum in ['VISIBLE', 'HIDDEN', 'RANGE'], default 'VISIBLE'
     */
    public set visibility(value: 'VISIBLE' | 'HIDDEN' | 'RANGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.visibility`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
