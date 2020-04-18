import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Linesets } from './Linesets'
import { FreestyleLineSet } from './FreestyleLineSet'
import { FreestyleModules } from './FreestyleModules'
import { FreestyleModuleSettings } from './FreestyleModuleSettings'

/**
 * FreestyleSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FreestyleSettings.html
 */
export class FreestyleSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Linesets bpy_prop_collection of FreestyleLineSet, (readonly)
     */
    public get linesets(): BlenderCollection<FreestyleLineSet> & Indexable<FreestyleLineSet> & Linesets {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.linesets`, Linesets, FreestyleLineSet)
    }

    /**
     * A list of style modules (to be applied from top to bottom)
     * @desc FreestyleModules bpy_prop_collection of FreestyleModuleSettings, (readonly)
     */
    public get modules(): BlenderCollection<FreestyleModuleSettings> & Indexable<FreestyleModuleSettings> & FreestyleModules {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.modules`, FreestyleModules, FreestyleModuleSettings)
    }

    /**
     * Angular threshold for detecting crease edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public get crease_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crease_angle`)
    }

    /**
     * Kr derivative epsilon for computing suggestive contours
     * @desc float in [-1000, 1000], default 0.0
     */
    public get kr_derivative_epsilon(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kr_derivative_epsilon`)
    }

    /**
     * Select the Freestyle control mode
     * @desc enum in ['SCRIPT', 'EDITOR'], default 'SCRIPT'
     */
    public get mode(): 'SCRIPT' | 'EDITOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Sphere radius for computing curvatures
     * @desc float in [0, 1000], default 0.0
     */
    public get sphere_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sphere_radius`)
    }

    /**
     * Enable advanced edge detection options (sphere radius and Kr derivative epsilon)
     * @desc boolean, default False
     */
    public get use_advanced_options(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_advanced_options`)
    }

    /**
     * If enabled, out-of-view edges are ignored
     * @desc boolean, default False
     */
    public get use_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_culling`)
    }

    /**
     * Enable material boundaries
     * @desc boolean, default False
     */
    public get use_material_boundaries(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_material_boundaries`)
    }

    /**
     * Enable ridges and valleys
     * @desc boolean, default False
     */
    public get use_ridges_and_valleys(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ridges_and_valleys`)
    }

    /**
     * Take face smoothness into account in view map calculation
     * @desc boolean, default False
     */
    public get use_smoothness(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smoothness`)
    }

    /**
     * Enable suggestive contours
     * @desc boolean, default False
     */
    public get use_suggestive_contours(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_suggestive_contours`)
    }

    /**
     * Keep the computed view map and avoid re-calculating it if mesh geometry is unchanged
     * @desc boolean, default False
     */
    public get use_view_map_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_view_map_cache`)
    }

    /**
     * Angular threshold for detecting crease edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public set crease_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crease_angle`, value)
    }

    /**
     * Kr derivative epsilon for computing suggestive contours
     * @desc float in [-1000, 1000], default 0.0
     */
    public set kr_derivative_epsilon(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kr_derivative_epsilon`, value)
    }

    /**
     * Select the Freestyle control mode
     * @desc enum in ['SCRIPT', 'EDITOR'], default 'SCRIPT'
     */
    public set mode(value: 'SCRIPT' | 'EDITOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Sphere radius for computing curvatures
     * @desc float in [0, 1000], default 0.0
     */
    public set sphere_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sphere_radius`, value)
    }

    /**
     * Enable advanced edge detection options (sphere radius and Kr derivative epsilon)
     * @desc boolean, default False
     */
    public set use_advanced_options(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_advanced_options`, value)
    }

    /**
     * If enabled, out-of-view edges are ignored
     * @desc boolean, default False
     */
    public set use_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_culling`, value)
    }

    /**
     * Enable material boundaries
     * @desc boolean, default False
     */
    public set use_material_boundaries(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_material_boundaries`, value)
    }

    /**
     * Enable ridges and valleys
     * @desc boolean, default False
     */
    public set use_ridges_and_valleys(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ridges_and_valleys`, value)
    }

    /**
     * Take face smoothness into account in view map calculation
     * @desc boolean, default False
     */
    public set use_smoothness(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smoothness`, value)
    }

    /**
     * Enable suggestive contours
     * @desc boolean, default False
     */
    public set use_suggestive_contours(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_suggestive_contours`, value)
    }

    /**
     * Keep the computed view map and avoid re-calculating it if mesh geometry is unchanged
     * @desc boolean, default False
     */
    public set use_view_map_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_view_map_cache`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
