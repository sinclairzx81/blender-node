import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { LineStyleAlphaModifiers } from './LineStyleAlphaModifiers'
import { LineStyleAlphaModifier } from './LineStyleAlphaModifier'
import { AnimData } from './AnimData'
import { LineStyleColorModifiers } from './LineStyleColorModifiers'
import { LineStyleColorModifier } from './LineStyleColorModifier'
import { LineStyleGeometryModifiers } from './LineStyleGeometryModifiers'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'
import { NodeTree } from './NodeTree'
import { LineStyleTextureSlots } from './LineStyleTextureSlots'
import { LineStyleTextureSlot } from './LineStyleTextureSlot'
import { LineStyleThicknessModifiers } from './LineStyleThicknessModifiers'
import { LineStyleThicknessModifier } from './LineStyleThicknessModifier'
import { Texture } from './Texture'

/**
 * FreestyleLineStyle
 * 
 * https://docs.blender.org/api/current/bpy.types.FreestyleLineStyle.html
 */
export class FreestyleLineStyle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of alpha transparency modifiers
     * @desc LineStyleAlphaModifiers bpy_prop_collection of LineStyleAlphaModifier, (readonly)
     */
    public get alpha_modifiers(): BlenderCollection<LineStyleAlphaModifier> & Indexable<LineStyleAlphaModifier> & LineStyleAlphaModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.alpha_modifiers`, LineStyleAlphaModifiers, LineStyleAlphaModifier)
    }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * List of line color modifiers
     * @desc LineStyleColorModifiers bpy_prop_collection of LineStyleColorModifier, (readonly)
     */
    public get color_modifiers(): BlenderCollection<LineStyleColorModifier> & Indexable<LineStyleColorModifier> & LineStyleColorModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.color_modifiers`, LineStyleColorModifiers, LineStyleColorModifier)
    }

    /**
     * List of stroke geometry modifiers
     * @desc LineStyleGeometryModifiers bpy_prop_collection of LineStyleGeometryModifier, (readonly)
     */
    public get geometry_modifiers(): BlenderCollection<LineStyleGeometryModifier> & Indexable<LineStyleGeometryModifier> & LineStyleGeometryModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.geometry_modifiers`, LineStyleGeometryModifiers, LineStyleGeometryModifier)
    }

    /**
     * Node tree for node-based shaders
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Texture slots defining the mapping and influence of textures
     * @desc LineStyleTextureSlots bpy_prop_collection of LineStyleTextureSlot, (readonly)
     */
    public get texture_slots(): BlenderCollection<LineStyleTextureSlot> & Indexable<LineStyleTextureSlot> & LineStyleTextureSlots {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.texture_slots`, LineStyleTextureSlots, LineStyleTextureSlot)
    }

    /**
     * List of line thickness modifiers
     * @desc LineStyleThicknessModifiers bpy_prop_collection of LineStyleThicknessModifier, (readonly)
     */
    public get thickness_modifiers(): BlenderCollection<LineStyleThicknessModifier> & Indexable<LineStyleThicknessModifier> & LineStyleThicknessModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.thickness_modifiers`, LineStyleThicknessModifiers, LineStyleThicknessModifier)
    }

    /**
     * Active texture slot being displayed
     * @desc Texture
     */
    public get active_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_texture`, Texture)
    }

    /**
     * Index of active texture slot
     * @desc int in [0, 17], default 0
     */
    public get active_texture_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_texture_index`)
    }

    /**
     * Base alpha transparency, possibly modified by alpha transparency modifiers
     * @desc float in [0, 1], default 1.0
     */
    public get alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * Maximum 2D angle for splitting chains
     * @desc float in [0, 3.14159], default 0.0
     */
    public get angle_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_max`)
    }

    /**
     * Minimum 2D angle for splitting chains
     * @desc float in [0, 3.14159], default 0.0
     */
    public get angle_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_min`)
    }

    /**
     * Select the shape of both ends of strokes
     * @desc enum in ['BUTT', 'ROUND', 'SQUARE'], default 'BUTT'
     */
    public get caps(): 'BUTT' | 'ROUND' | 'SQUARE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.caps`)
    }

    /**
     * Chain count for the selection of first N chains
     * @desc int in [0, inf], default 10
     */
    public get chain_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.chain_count`)
    }

    /**
     * Select the way how feature edges are jointed to form chains
     * @desc enum in ['PLAIN', 'SKETCHY'], default 'PLAIN'
     */
    public get chaining(): 'PLAIN' | 'SKETCHY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.chaining`)
    }

    /**
     * Base line color, possibly modified by line color modifiers
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Length of the 1st dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get dash1(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dash1`)
    }

    /**
     * Length of the 2nd dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get dash2(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dash2`)
    }

    /**
     * Length of the 3rd dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get dash3(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dash3`)
    }

    /**
     * Length of the 1st gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get gap1(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gap1`)
    }

    /**
     * Length of the 2nd gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get gap2(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gap2`)
    }

    /**
     * Length of the 3rd gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public get gap3(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gap3`)
    }

    /**
     * Select the way how the sort key is computed for each chain
     * @desc enum in ['MEAN', 'MIN', 'MAX', 'FIRST', 'LAST'], default 'MEAN'
     */
    public get integration_type(): 'MEAN' | 'MIN' | 'MAX' | 'FIRST' | 'LAST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.integration_type`)
    }

    /**
     * Maximum curvilinear 2D length for the selection of chains
     * @desc float in [0, 10000], default 10000.0
     */
    public get length_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length_max`)
    }

    /**
     * Minimum curvilinear 2D length for the selection of chains
     * @desc float in [0, 10000], default 0.0
     */
    public get length_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length_min`)
    }

    /**
     * If true, chains of feature edges are split at material boundaries
     * @desc boolean, default False
     */
    public get material_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.material_boundary`)
    }

    /**
     * Select the property panel to be shown
     * @desc enum in ['STROKES', 'COLOR', 'ALPHA', 'THICKNESS', 'GEOMETRY', 'TEXTURE'], default 'STROKES'
     */
    public get panel(): 'STROKES' | 'COLOR' | 'ALPHA' | 'THICKNESS' | 'GEOMETRY' | 'TEXTURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.panel`)
    }

    /**
     * Number of rounds in a sketchy multiple touch
     * @desc int in [1, 1000], default 3
     */
    public get rounds(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.rounds`)
    }

    /**
     * Select the sort key to determine the stacking order of chains
     * @desc enum in ['DISTANCE_FROM_CAMERA', '2D_LENGTH', 'PROJECTED_X', 'PROJECTED_Y'], default 'DISTANCE_FROM_CAMERA'
     */
    public get sort_key(): 'DISTANCE_FROM_CAMERA' | '2D_LENGTH' | 'PROJECTED_X' | 'PROJECTED_Y' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sort_key`)
    }

    /**
     * Select the sort order
     * @desc enum in ['DEFAULT', 'REVERSE'], default 'DEFAULT'
     */
    public get sort_order(): 'DEFAULT' | 'REVERSE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sort_order`)
    }

    /**
     * Length of the 1st dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_dash1(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_dash1`)
    }

    /**
     * Length of the 2nd dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_dash2(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_dash2`)
    }

    /**
     * Length of the 3rd dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_dash3(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_dash3`)
    }

    /**
     * Length of the 1st gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_gap1(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_gap1`)
    }

    /**
     * Length of the 2nd gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_gap2(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_gap2`)
    }

    /**
     * Length of the 3rd gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public get split_gap3(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.split_gap3`)
    }

    /**
     * Curvilinear 2D length for chain splitting
     * @desc float in [0, 10000], default 100.0
     */
    public get split_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.split_length`)
    }

    /**
     * Spacing for textures along stroke length
     * @desc float in [0.01, 100], default 1.0
     */
    public get texture_spacing(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_spacing`)
    }

    /**
     * Base line thickness, possibly modified by line thickness modifiers
     * @desc float in [0, 10000], default 3.0
     */
    public get thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness`)
    }

    /**
     * Thickness position of silhouettes and border edges (applicable when plain chaining is used with the Same Object option)
     * @desc enum in ['CENTER', 'INSIDE', 'OUTSIDE', 'RELATIVE'], default 'CENTER'
     */
    public get thickness_position(): 'CENTER' | 'INSIDE' | 'OUTSIDE' | 'RELATIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.thickness_position`)
    }

    /**
     * A number between 0 (inside) and 1 (outside) specifying the relative position of stroke thickness
     * @desc float in [0, 1], default 0.5
     */
    public get thickness_ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_ratio`)
    }

    /**
     * Split chains at points with angles larger than the maximum 2D angle
     * @desc boolean, default False
     */
    public get use_angle_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_angle_max`)
    }

    /**
     * Split chains at points with angles smaller than the minimum 2D angle
     * @desc boolean, default False
     */
    public get use_angle_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_angle_min`)
    }

    /**
     * Enable the selection of first N chains
     * @desc boolean, default False
     */
    public get use_chain_count(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_chain_count`)
    }

    /**
     * Enable chaining of feature edges
     * @desc boolean, default False
     */
    public get use_chaining(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_chaining`)
    }

    /**
     * Enable or disable dashed line
     * @desc boolean, default False
     */
    public get use_dashed_line(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dashed_line`)
    }

    /**
     * Enable the selection of chains by a maximum 2D length
     * @desc boolean, default False
     */
    public get use_length_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_length_max`)
    }

    /**
     * Enable the selection of chains by a minimum 2D length
     * @desc boolean, default False
     */
    public get use_length_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_length_min`)
    }

    /**
     * Use shader nodes for the line style
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * If true, only feature edges of the same object are joined
     * @desc boolean, default True
     */
    public get use_same_object(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_same_object`)
    }

    /**
     * Arrange the stacking order of strokes
     * @desc boolean, default True
     */
    public get use_sorting(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sorting`)
    }

    /**
     * Enable chain splitting by curvilinear 2D length
     * @desc boolean, default False
     */
    public get use_split_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_split_length`)
    }

    /**
     * Enable chain splitting by dashed line patterns
     * @desc boolean, default False
     */
    public get use_split_pattern(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_split_pattern`)
    }

    /**
     * Enable or disable textured strokes
     * @desc boolean, default True
     */
    public get use_texture(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_texture`)
    }

    /**
     * Active texture slot being displayed
     * @desc Texture
     */
    public set active_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_texture`, value)
    }

    /**
     * Index of active texture slot
     * @desc int in [0, 17], default 0
     */
    public set active_texture_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_texture_index`, value)
    }

    /**
     * Base alpha transparency, possibly modified by alpha transparency modifiers
     * @desc float in [0, 1], default 1.0
     */
    public set alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * Maximum 2D angle for splitting chains
     * @desc float in [0, 3.14159], default 0.0
     */
    public set angle_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_max`, value)
    }

    /**
     * Minimum 2D angle for splitting chains
     * @desc float in [0, 3.14159], default 0.0
     */
    public set angle_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_min`, value)
    }

    /**
     * Select the shape of both ends of strokes
     * @desc enum in ['BUTT', 'ROUND', 'SQUARE'], default 'BUTT'
     */
    public set caps(value: 'BUTT' | 'ROUND' | 'SQUARE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.caps`, value)
    }

    /**
     * Chain count for the selection of first N chains
     * @desc int in [0, inf], default 10
     */
    public set chain_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.chain_count`, value)
    }

    /**
     * Select the way how feature edges are jointed to form chains
     * @desc enum in ['PLAIN', 'SKETCHY'], default 'PLAIN'
     */
    public set chaining(value: 'PLAIN' | 'SKETCHY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.chaining`, value)
    }

    /**
     * Base line color, possibly modified by line color modifiers
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Length of the 1st dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set dash1(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dash1`, value)
    }

    /**
     * Length of the 2nd dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set dash2(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dash2`, value)
    }

    /**
     * Length of the 3rd dash for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set dash3(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dash3`, value)
    }

    /**
     * Length of the 1st gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set gap1(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gap1`, value)
    }

    /**
     * Length of the 2nd gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set gap2(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gap2`, value)
    }

    /**
     * Length of the 3rd gap for dashed lines
     * @desc int in [0, 65535], default 0
     */
    public set gap3(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gap3`, value)
    }

    /**
     * Select the way how the sort key is computed for each chain
     * @desc enum in ['MEAN', 'MIN', 'MAX', 'FIRST', 'LAST'], default 'MEAN'
     */
    public set integration_type(value: 'MEAN' | 'MIN' | 'MAX' | 'FIRST' | 'LAST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.integration_type`, value)
    }

    /**
     * Maximum curvilinear 2D length for the selection of chains
     * @desc float in [0, 10000], default 10000.0
     */
    public set length_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length_max`, value)
    }

    /**
     * Minimum curvilinear 2D length for the selection of chains
     * @desc float in [0, 10000], default 0.0
     */
    public set length_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length_min`, value)
    }

    /**
     * If true, chains of feature edges are split at material boundaries
     * @desc boolean, default False
     */
    public set material_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.material_boundary`, value)
    }

    /**
     * Select the property panel to be shown
     * @desc enum in ['STROKES', 'COLOR', 'ALPHA', 'THICKNESS', 'GEOMETRY', 'TEXTURE'], default 'STROKES'
     */
    public set panel(value: 'STROKES' | 'COLOR' | 'ALPHA' | 'THICKNESS' | 'GEOMETRY' | 'TEXTURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.panel`, value)
    }

    /**
     * Number of rounds in a sketchy multiple touch
     * @desc int in [1, 1000], default 3
     */
    public set rounds(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.rounds`, value)
    }

    /**
     * Select the sort key to determine the stacking order of chains
     * @desc enum in ['DISTANCE_FROM_CAMERA', '2D_LENGTH', 'PROJECTED_X', 'PROJECTED_Y'], default 'DISTANCE_FROM_CAMERA'
     */
    public set sort_key(value: 'DISTANCE_FROM_CAMERA' | '2D_LENGTH' | 'PROJECTED_X' | 'PROJECTED_Y') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sort_key`, value)
    }

    /**
     * Select the sort order
     * @desc enum in ['DEFAULT', 'REVERSE'], default 'DEFAULT'
     */
    public set sort_order(value: 'DEFAULT' | 'REVERSE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sort_order`, value)
    }

    /**
     * Length of the 1st dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_dash1(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_dash1`, value)
    }

    /**
     * Length of the 2nd dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_dash2(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_dash2`, value)
    }

    /**
     * Length of the 3rd dash for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_dash3(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_dash3`, value)
    }

    /**
     * Length of the 1st gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_gap1(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_gap1`, value)
    }

    /**
     * Length of the 2nd gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_gap2(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_gap2`, value)
    }

    /**
     * Length of the 3rd gap for splitting
     * @desc int in [0, 65535], default 0
     */
    public set split_gap3(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.split_gap3`, value)
    }

    /**
     * Curvilinear 2D length for chain splitting
     * @desc float in [0, 10000], default 100.0
     */
    public set split_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.split_length`, value)
    }

    /**
     * Spacing for textures along stroke length
     * @desc float in [0.01, 100], default 1.0
     */
    public set texture_spacing(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_spacing`, value)
    }

    /**
     * Base line thickness, possibly modified by line thickness modifiers
     * @desc float in [0, 10000], default 3.0
     */
    public set thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness`, value)
    }

    /**
     * Thickness position of silhouettes and border edges (applicable when plain chaining is used with the Same Object option)
     * @desc enum in ['CENTER', 'INSIDE', 'OUTSIDE', 'RELATIVE'], default 'CENTER'
     */
    public set thickness_position(value: 'CENTER' | 'INSIDE' | 'OUTSIDE' | 'RELATIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.thickness_position`, value)
    }

    /**
     * A number between 0 (inside) and 1 (outside) specifying the relative position of stroke thickness
     * @desc float in [0, 1], default 0.5
     */
    public set thickness_ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_ratio`, value)
    }

    /**
     * Split chains at points with angles larger than the maximum 2D angle
     * @desc boolean, default False
     */
    public set use_angle_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_angle_max`, value)
    }

    /**
     * Split chains at points with angles smaller than the minimum 2D angle
     * @desc boolean, default False
     */
    public set use_angle_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_angle_min`, value)
    }

    /**
     * Enable the selection of first N chains
     * @desc boolean, default False
     */
    public set use_chain_count(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_chain_count`, value)
    }

    /**
     * Enable chaining of feature edges
     * @desc boolean, default False
     */
    public set use_chaining(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_chaining`, value)
    }

    /**
     * Enable or disable dashed line
     * @desc boolean, default False
     */
    public set use_dashed_line(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dashed_line`, value)
    }

    /**
     * Enable the selection of chains by a maximum 2D length
     * @desc boolean, default False
     */
    public set use_length_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_length_max`, value)
    }

    /**
     * Enable the selection of chains by a minimum 2D length
     * @desc boolean, default False
     */
    public set use_length_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_length_min`, value)
    }

    /**
     * Use shader nodes for the line style
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    /**
     * If true, only feature edges of the same object are joined
     * @desc boolean, default True
     */
    public set use_same_object(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_same_object`, value)
    }

    /**
     * Arrange the stacking order of strokes
     * @desc boolean, default True
     */
    public set use_sorting(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sorting`, value)
    }

    /**
     * Enable chain splitting by curvilinear 2D length
     * @desc boolean, default False
     */
    public set use_split_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_split_length`, value)
    }

    /**
     * Enable chain splitting by dashed line patterns
     * @desc boolean, default False
     */
    public set use_split_pattern(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_split_pattern`, value)
    }

    /**
     * Enable or disable textured strokes
     * @desc boolean, default True
     */
    public set use_texture(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_texture`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
