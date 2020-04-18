import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesMeshSettings } from './CyclesMeshSettings'
import { IDMaterials } from './IDMaterials'
import { Material } from './Material'
import { Key } from './Key'
import { CurveSplines } from './CurveSplines'
import { Spline } from './Spline'
import { BlenderObject } from './BlenderObject'

/**
 * Curve
 * 
 * https://docs.blender.org/api/current/bpy.types.Curve.html
 */
export class Curve {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles mesh settings
     * @desc CyclesMeshSettings, (readonly)
     */
    public get cycles(): CyclesMeshSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesMeshSettings)
    }

    /**
     * True when used in editmode
     * @desc boolean, default False, (readonly)
     */
    public get is_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editmode`)
    }

    /**
     * 
     * @desc IDMaterials bpy_prop_collection of Material, (readonly)
     */
    public get materials(): BlenderCollection<Material> & Indexable<Material> & IDMaterials {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.materials`, IDMaterials, Material)
    }

    /**
     * 
     * @desc Key, (readonly)
     */
    public get shape_keys(): Key {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shape_keys`, Key)
    }

    /**
     * Collection of splines in this curve data object
     * @desc CurveSplines bpy_prop_collection of Spline, (readonly)
     */
    public get splines(): BlenderCollection<Spline> & Indexable<Spline> & CurveSplines {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.splines`, CurveSplines, Spline)
    }

    /**
     * Bevel depth when not using a bevel object
     * @desc float in [-inf, inf], default 0.0
     */
    public get bevel_depth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bevel_depth`)
    }

    /**
     * Factor that defines to where beveling of spline happens (0=to the very beginning, 1=to the very end)
     * @desc float in [0, 1], default 1.0
     */
    public get bevel_factor_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bevel_factor_end`)
    }

    /**
     * Determines how the end bevel factor is mapped to a spline
     * @desc enum in ['RESOLUTION', 'SEGMENTS', 'SPLINE'], default 'RESOLUTION'
     */
    public get bevel_factor_mapping_end(): 'RESOLUTION' | 'SEGMENTS' | 'SPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bevel_factor_mapping_end`)
    }

    /**
     * Determines how the start bevel factor is mapped to a spline
     * @desc enum in ['RESOLUTION', 'SEGMENTS', 'SPLINE'], default 'RESOLUTION'
     */
    public get bevel_factor_mapping_start(): 'RESOLUTION' | 'SEGMENTS' | 'SPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bevel_factor_mapping_start`)
    }

    /**
     * Factor that defines from where beveling of spline happens (0=from the very beginning, 1=from the very end)
     * @desc float in [0, 1], default 0.0
     */
    public get bevel_factor_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bevel_factor_start`)
    }

    /**
     * Curve object name that defines the bevel shape
     * @desc Object
     */
    public get bevel_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bevel_object`, BlenderObject)
    }

    /**
     * Bevel resolution when depth is non-zero and no specific bevel object has been defined
     * @desc int in [0, 32], default 4
     */
    public get bevel_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bevel_resolution`)
    }

    /**
     * Select 2D or 3D curve type
     * @desc enum in ['2D', '3D'], default '2D'
     */
    public get dimensions(): '2D' | '3D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.dimensions`)
    }

    /**
     * Parametric position along the length of the curve that Objects ‘following’ it should be at (position is evaluated by dividing by the ‘Path Length’ value)
     * @desc float in [-inf, inf], default 0.0
     */
    public get eval_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eval_time`)
    }

    /**
     * Amount of curve extrusion when not using a bevel object
     * @desc float in [0, inf], default 0.0
     */
    public get extrude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.extrude`)
    }

    /**
     * Mode of filling curve
     * @desc enum in ['FULL', 'BACK', 'FRONT', 'HALF'], default 'FULL'
     */
    public get fill_mode(): 'FULL' | 'BACK' | 'FRONT' | 'HALF' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fill_mode`)
    }

    /**
     * Offset the curve to adjust the width of a text
     * @desc float in [-inf, inf], default 1.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * The number of frames that are needed to traverse the path, defining the maximum value for the ‘Evaluation Time’ setting
     * @desc int in [1, 1048574], default 100
     */
    public get path_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.path_duration`)
    }

    /**
     * Surface resolution in U direction used while rendering (zero uses preview resolution)
     * @desc int in [0, 1024], default 0
     */
    public get render_resolution_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.render_resolution_u`)
    }

    /**
     * Surface resolution in V direction used while rendering (zero uses preview resolution)
     * @desc int in [0, 1024], default 0
     */
    public get render_resolution_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.render_resolution_v`)
    }

    /**
     * Surface resolution in U direction
     * @desc int in [1, 1024], default 12
     */
    public get resolution_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_u`)
    }

    /**
     * Surface resolution in V direction
     * @desc int in [1, 1024], default 12
     */
    public get resolution_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_v`)
    }

    /**
     * Curve object name that defines the taper (width)
     * @desc Object
     */
    public get taper_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.taper_object`, BlenderObject)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get texspace_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_location`, 'number', 3)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get texspace_size(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_size`, 'number', 3)
    }

    /**
     * The type of tilt calculation for 3D Curves
     * @desc enum in ['Z_UP', 'MINIMUM', 'TANGENT'], default 'MINIMUM'
     */
    public get twist_mode(): 'Z_UP' | 'MINIMUM' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.twist_mode`)
    }

    /**
     * Smoothing iteration for tangents
     * @desc float in [-inf, inf], default 0.0
     */
    public get twist_smooth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.twist_smooth`)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public get use_auto_texspace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_texspace`)
    }

    /**
     * Option for curve-deform: Use the mesh bounds to clamp the deformation
     * @desc boolean, default True
     */
    public get use_deform_bounds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform_bounds`)
    }

    /**
     * Fill caps for beveled curves
     * @desc boolean, default False
     */
    public get use_fill_caps(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_caps`)
    }

    /**
     * Fill curve after applying shape keys and all modifiers
     * @desc boolean, default False
     */
    public get use_fill_deform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_deform`)
    }

    /**
     * Map effect of the taper object to the beveled part of the curve
     * @desc boolean, default False
     */
    public get use_map_taper(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_taper`)
    }

    /**
     * Enable the curve to become a translation path
     * @desc boolean, default False
     */
    public get use_path(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_path`)
    }

    /**
     * Make curve path children to rotate along the path
     * @desc boolean, default False
     */
    public get use_path_follow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_path_follow`)
    }

    /**
     * Option for paths and curve-deform: apply the curve radius with path following it and deforming
     * @desc boolean, default True
     */
    public get use_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_radius`)
    }

    /**
     * Option for curve-deform: make deformed child to stretch along entire path
     * @desc boolean, default False
     */
    public get use_stretch(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stretch`)
    }

    /**
     * Bevel depth when not using a bevel object
     * @desc float in [-inf, inf], default 0.0
     */
    public set bevel_depth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bevel_depth`, value)
    }

    /**
     * Factor that defines to where beveling of spline happens (0=to the very beginning, 1=to the very end)
     * @desc float in [0, 1], default 1.0
     */
    public set bevel_factor_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bevel_factor_end`, value)
    }

    /**
     * Determines how the end bevel factor is mapped to a spline
     * @desc enum in ['RESOLUTION', 'SEGMENTS', 'SPLINE'], default 'RESOLUTION'
     */
    public set bevel_factor_mapping_end(value: 'RESOLUTION' | 'SEGMENTS' | 'SPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bevel_factor_mapping_end`, value)
    }

    /**
     * Determines how the start bevel factor is mapped to a spline
     * @desc enum in ['RESOLUTION', 'SEGMENTS', 'SPLINE'], default 'RESOLUTION'
     */
    public set bevel_factor_mapping_start(value: 'RESOLUTION' | 'SEGMENTS' | 'SPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bevel_factor_mapping_start`, value)
    }

    /**
     * Factor that defines from where beveling of spline happens (0=from the very beginning, 1=from the very end)
     * @desc float in [0, 1], default 0.0
     */
    public set bevel_factor_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bevel_factor_start`, value)
    }

    /**
     * Curve object name that defines the bevel shape
     * @desc Object
     */
    public set bevel_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.bevel_object`, value)
    }

    /**
     * Bevel resolution when depth is non-zero and no specific bevel object has been defined
     * @desc int in [0, 32], default 4
     */
    public set bevel_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bevel_resolution`, value)
    }

    /**
     * Select 2D or 3D curve type
     * @desc enum in ['2D', '3D'], default '2D'
     */
    public set dimensions(value: '2D' | '3D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.dimensions`, value)
    }

    /**
     * Parametric position along the length of the curve that Objects ‘following’ it should be at (position is evaluated by dividing by the ‘Path Length’ value)
     * @desc float in [-inf, inf], default 0.0
     */
    public set eval_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eval_time`, value)
    }

    /**
     * Amount of curve extrusion when not using a bevel object
     * @desc float in [0, inf], default 0.0
     */
    public set extrude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.extrude`, value)
    }

    /**
     * Mode of filling curve
     * @desc enum in ['FULL', 'BACK', 'FRONT', 'HALF'], default 'FULL'
     */
    public set fill_mode(value: 'FULL' | 'BACK' | 'FRONT' | 'HALF') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fill_mode`, value)
    }

    /**
     * Offset the curve to adjust the width of a text
     * @desc float in [-inf, inf], default 1.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * The number of frames that are needed to traverse the path, defining the maximum value for the ‘Evaluation Time’ setting
     * @desc int in [1, 1048574], default 100
     */
    public set path_duration(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.path_duration`, value)
    }

    /**
     * Surface resolution in U direction used while rendering (zero uses preview resolution)
     * @desc int in [0, 1024], default 0
     */
    public set render_resolution_u(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.render_resolution_u`, value)
    }

    /**
     * Surface resolution in V direction used while rendering (zero uses preview resolution)
     * @desc int in [0, 1024], default 0
     */
    public set render_resolution_v(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.render_resolution_v`, value)
    }

    /**
     * Surface resolution in U direction
     * @desc int in [1, 1024], default 12
     */
    public set resolution_u(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_u`, value)
    }

    /**
     * Surface resolution in V direction
     * @desc int in [1, 1024], default 12
     */
    public set resolution_v(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_v`, value)
    }

    /**
     * Curve object name that defines the taper (width)
     * @desc Object
     */
    public set taper_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.taper_object`, value)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set texspace_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_location`, value)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set texspace_size(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_size`, value)
    }

    /**
     * The type of tilt calculation for 3D Curves
     * @desc enum in ['Z_UP', 'MINIMUM', 'TANGENT'], default 'MINIMUM'
     */
    public set twist_mode(value: 'Z_UP' | 'MINIMUM' | 'TANGENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.twist_mode`, value)
    }

    /**
     * Smoothing iteration for tangents
     * @desc float in [-inf, inf], default 0.0
     */
    public set twist_smooth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.twist_smooth`, value)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public set use_auto_texspace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_texspace`, value)
    }

    /**
     * Option for curve-deform: Use the mesh bounds to clamp the deformation
     * @desc boolean, default True
     */
    public set use_deform_bounds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform_bounds`, value)
    }

    /**
     * Fill caps for beveled curves
     * @desc boolean, default False
     */
    public set use_fill_caps(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_caps`, value)
    }

    /**
     * Fill curve after applying shape keys and all modifiers
     * @desc boolean, default False
     */
    public set use_fill_deform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_deform`, value)
    }

    /**
     * Map effect of the taper object to the beveled part of the curve
     * @desc boolean, default False
     */
    public set use_map_taper(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_taper`, value)
    }

    /**
     * Enable the curve to become a translation path
     * @desc boolean, default False
     */
    public set use_path(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_path`, value)
    }

    /**
     * Make curve path children to rotate along the path
     * @desc boolean, default False
     */
    public set use_path_follow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_path_follow`, value)
    }

    /**
     * Option for paths and curve-deform: apply the curve radius with path following it and deforming
     * @desc boolean, default True
     */
    public set use_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_radius`, value)
    }

    /**
     * Option for curve-deform: make deformed child to stretch along entire path
     * @desc boolean, default False
     */
    public set use_stretch(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stretch`, value)
    }

    /**
     * Transform curve by a matrix
     * @desc void
     */
    public transform(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], shape_keys?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    /**
     * Validate material indices of splines or letters, return True when the curve has had invalid indices corrected (to default 0)
     * @desc boolean
     */
    public validate_material_indices(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.validate_material_indices`, {})
    }

    /**
     * update_gpu_tag
     * @desc void
     */
    public update_gpu_tag(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_gpu_tag`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
