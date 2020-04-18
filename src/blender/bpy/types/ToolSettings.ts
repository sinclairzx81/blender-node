import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurvePaintSettings } from './CurvePaintSettings'
import { CurveProfile } from './CurveProfile'
import { GPencilInterpolateSettings } from './GPencilInterpolateSettings'
import { GpPaint } from './GpPaint'
import { GPencilSculptSettings } from './GPencilSculptSettings'
import { ImagePaint } from './ImagePaint'
import { ParticleEdit } from './ParticleEdit'
import { Sculpt } from './Sculpt'
import { MeshStatVis } from './MeshStatVis'
import { UnifiedPaintSettings } from './UnifiedPaintSettings'
import { UvSculpt } from './UvSculpt'
import { VertexPaint } from './VertexPaint'

/**
 * ToolSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ToolSettings.html
 */
export class ToolSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurvePaintSettings, (readonly, never None)
     */
    public get curve_paint_settings(): CurvePaintSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_paint_settings`, CurvePaintSettings)
    }

    /**
     * Used for defining a profile’s path
     * @desc CurveProfile, (readonly)
     */
    public get custom_bevel_profile_preset(): CurveProfile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.custom_bevel_profile_preset`, CurveProfile)
    }

    /**
     * Settings for Grease Pencil Interpolation tools
     * @desc GPencilInterpolateSettings, (readonly)
     */
    public get gpencil_interpolate(): GPencilInterpolateSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gpencil_interpolate`, GPencilInterpolateSettings)
    }

    /**
     * 
     * @desc GpPaint, (readonly)
     */
    public get gpencil_paint(): GpPaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gpencil_paint`, GpPaint)
    }

    /**
     * Settings for stroke sculpting tools and brushes
     * @desc GPencilSculptSettings, (readonly)
     */
    public get gpencil_sculpt(): GPencilSculptSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gpencil_sculpt`, GPencilSculptSettings)
    }

    /**
     * 
     * @desc ImagePaint, (readonly)
     */
    public get image_paint(): ImagePaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_paint`, ImagePaint)
    }

    /**
     * 
     * @desc ParticleEdit, (readonly)
     */
    public get particle_edit(): ParticleEdit {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_edit`, ParticleEdit)
    }

    /**
     * 
     * @desc Sculpt, (readonly)
     */
    public get sculpt(): Sculpt {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sculpt`, Sculpt)
    }

    /**
     * 
     * @desc MeshStatVis, (readonly, never None)
     */
    public get statvis(): MeshStatVis {
        return PythonInterop.getClass(this.interop, `${this.accessor}.statvis`, MeshStatVis)
    }

    /**
     * 
     * @desc UnifiedPaintSettings, (readonly, never None)
     */
    public get unified_paint_settings(): UnifiedPaintSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.unified_paint_settings`, UnifiedPaintSettings)
    }

    /**
     * 
     * @desc UvSculpt, (readonly)
     */
    public get uv_sculpt(): UvSculpt {
        return PythonInterop.getClass(this.interop, `${this.accessor}.uv_sculpt`, UvSculpt)
    }

    /**
     * 
     * @desc VertexPaint, (readonly)
     */
    public get vertex_paint(): VertexPaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.vertex_paint`, VertexPaint)
    }

    /**
     * 
     * @desc VertexPaint, (readonly)
     */
    public get weight_paint(): VertexPaint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.weight_paint`, VertexPaint)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public get annotation_stroke_placement_image_editor(): 'CURSOR' | 'VIEW' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.annotation_stroke_placement_image_editor`)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public get annotation_stroke_placement_sequencer_preview(): 'CURSOR' | 'VIEW' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.annotation_stroke_placement_sequencer_preview`)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public get annotation_stroke_placement_view2d(): 'CURSOR' | 'VIEW' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.annotation_stroke_placement_view2d`)
    }

    /**
     * How annotation strokes are orientated in 3D space
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'CURSOR'
     */
    public get annotation_stroke_placement_view3d(): 'CURSOR' | 'VIEW' | 'SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.annotation_stroke_placement_view3d`)
    }

    /**
     * Thickness of annotation strokes
     * @desc int in [1, 10], default 3
     */
    public get annotation_thickness(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.annotation_thickness`)
    }

    /**
     * Mode of automatic keyframe insertion for Objects and Bones
     * @desc enum in ['ADD_REPLACE_KEYS', 'REPLACE_KEYS'], default 'ADD_REPLACE_KEYS'
     */
    public get auto_keying_mode(): 'ADD_REPLACE_KEYS' | 'REPLACE_KEYS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_keying_mode`)
    }

    /**
     * Threshold distance for Auto Merge
     * @desc float in [0, 1], default 0.001
     */
    public get double_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.double_threshold`)
    }

    /**
     * 
     * @desc enum in ['POINT', 'STROKE', 'SEGMENT'], default 'POINT'
     */
    public get gpencil_selectmode_edit(): 'POINT' | 'STROKE' | 'SEGMENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gpencil_selectmode_edit`)
    }

    /**
     * 
     * @desc enum in ['ORIGIN', 'CURSOR', 'SURFACE', 'STROKE'], default 'ORIGIN'
     */
    public get gpencil_stroke_placement_view3d(): 'ORIGIN' | 'CURSOR' | 'SURFACE' | 'STROKE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gpencil_stroke_placement_view3d`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ENDS', 'FIRST'], default 'NONE'
     */
    public get gpencil_stroke_snap_mode(): 'NONE' | 'ENDS' | 'FIRST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gpencil_stroke_snap_mode`)
    }

    /**
     * Type of keyframes to create when inserting keyframes
     * @desc enum in ['KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public get keyframe_type(): 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.keyframe_type`)
    }

    /**
     * Prevent marker editing
     * @desc boolean, default False
     */
    public get lock_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_markers`)
    }

    /**
     * Restrict select to the current mode
     * @desc boolean, default True
     */
    public get lock_object_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_object_mode`)
    }

    /**
     * Which mesh elements selection works on
     * @desc boolean array of 3 items, default (True, True, True)
     */
    public get mesh_select_mode(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mesh_select_mode`, 'boolean', 3)
    }

    /**
     * Normal Vector used to copy, add or multiply
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get normal_vector(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal_vector`, 'number', 3)
    }

    /**
     * Falloff type for proportional editing mode
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT', 'RANDOM'], default 'SMOOTH'
     */
    public get proportional_edit_falloff(): 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proportional_edit_falloff`)
    }

    /**
     * Display size for proportional editing circle
     * @desc float in [1e-05, 5000], default 1.0
     */
    public get proportional_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.proportional_size`)
    }

    /**
     * Display only faces with the currently displayed image assigned
     * @desc boolean, default False
     */
    public get show_uv_local_view(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_uv_local_view`)
    }

    /**
     * Type of element to snap to
     * @desc enum set in {'INCREMENT', 'VERTEX', 'EDGE', 'FACE', 'VOLUME', 'EDGE_MIDPOINT', 'EDGE_PERPENDICULAR'}, default {'INCREMENT'}
     */
    public get snap_elements(): ('INCREMENT' | 'VERTEX' | 'EDGE' | 'FACE' | 'VOLUME' | 'EDGE_MIDPOINT' | 'EDGE_PERPENDICULAR')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.snap_elements`)
    }

    /**
     * Type of element to snap to
     * @desc enum in ['GRID', 'NODE_X', 'NODE_Y', 'NODE_XY'], default 'GRID'
     */
    public get snap_node_element(): 'GRID' | 'NODE_X' | 'NODE_Y' | 'NODE_XY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.snap_node_element`)
    }

    /**
     * Which part to snap onto the target
     * @desc enum in ['CLOSEST', 'CENTER', 'MEDIAN', 'ACTIVE'], default 'CLOSEST'
     */
    public get snap_target(): 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.snap_target`)
    }

    /**
     * Type of element to snap to
     * @desc enum in ['INCREMENT', 'VERTEX'], default 'INCREMENT'
     */
    public get snap_uv_element(): 'INCREMENT' | 'VERTEX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.snap_uv_element`)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT', 'ACTIVE_ELEMENT'], default 'MEDIAN_POINT'
     */
    public get transform_pivot_point(): 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT' | 'ACTIVE_ELEMENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transform_pivot_point`)
    }

    /**
     * Ensure all bone-deforming vertex groups add up to 1.0 while weight painting
     * @desc boolean, default False
     */
    public get use_auto_normalize(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_normalize`)
    }

    /**
     * Changing edges seam re-calculates UV unwrap
     * @desc boolean, default False
     */
    public get use_edge_path_live_unwrap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_path_live_unwrap`)
    }

    /**
     * When creating new frames, the strokes from the previous/active frame are included as the basis for the new one
     * @desc boolean, default False
     */
    public get use_gpencil_draw_additive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_draw_additive`)
    }

    /**
     * When draw new strokes, the new stroke is drawn below of all strokes in the layer
     * @desc boolean, default False
     */
    public get use_gpencil_draw_onback(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_draw_onback`)
    }

    /**
     * Only sculpt selected stroke points
     * @desc boolean, default False
     */
    public get use_gpencil_select_mask_point(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_point`)
    }

    /**
     * Only sculpt selected stroke points between other strokes
     * @desc boolean, default False
     */
    public get use_gpencil_select_mask_segment(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_segment`)
    }

    /**
     * Only sculpt selected stroke
     * @desc boolean, default False
     */
    public get use_gpencil_select_mask_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_stroke`)
    }

    /**
     * Only use the first and last parts of the stroke for snapping
     * @desc boolean, default False
     */
    public get use_gpencil_stroke_endpoints(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_stroke_endpoints`)
    }

    /**
     * Show compact list of color instead of thumbnails
     * @desc boolean, default False
     */
    public get use_gpencil_thumbnail_list(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_thumbnail_list`)
    }

    /**
     * When creating new strokes, the weight data is added according to the current vertex group and weight, if no vertex group selected, weight is not added
     * @desc boolean, default False
     */
    public get use_gpencil_weight_data_add(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_weight_data_add`)
    }

    /**
     * For channels with cyclic extrapolation, keyframe insertion is automatically remapped inside the cycle time range, and keeps ends in sync
     * @desc boolean, default False
     */
    public get use_keyframe_cycle_aware(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_cycle_aware`)
    }

    /**
     * Automatic keyframe insertion for Objects and Bones
     * @desc boolean, default True
     */
    public get use_keyframe_insert_auto(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_insert_auto`)
    }

    /**
     * Automatic keyframe insertion using active Keying Set only
     * @desc boolean, default False
     */
    public get use_keyframe_insert_keyingset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_insert_keyingset`)
    }

    /**
     * Automatically merge vertices moved to the same location
     * @desc boolean, default False
     */
    public get use_mesh_automerge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mesh_automerge`)
    }

    /**
     * Automatically split edges and faces
     * @desc boolean, default False
     */
    public get use_mesh_automerge_and_split(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mesh_automerge_and_split`)
    }

    /**
     * Paint across the weights of all selected bones, maintaining their relative influence
     * @desc boolean, default False
     */
    public get use_multipaint(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multipaint`)
    }

    /**
     * Proportional editing in action editor
     * @desc boolean, default False
     */
    public get use_proportional_action(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_action`)
    }

    /**
     * Proportional Editing using connected geometry only
     * @desc boolean, default False
     */
    public get use_proportional_connected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_connected`)
    }

    /**
     * Proportional edit mode
     * @desc boolean, default False
     */
    public get use_proportional_edit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_edit`)
    }

    /**
     * Proportional editing mask mode
     * @desc boolean, default False
     */
    public get use_proportional_edit_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_edit_mask`)
    }

    /**
     * Proportional editing object mode
     * @desc boolean, default False
     */
    public get use_proportional_edit_objects(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_edit_objects`)
    }

    /**
     * Proportional editing in FCurve editor
     * @desc boolean, default False
     */
    public get use_proportional_fcurve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_fcurve`)
    }

    /**
     * Proportional Editing using screen space locations
     * @desc boolean, default False
     */
    public get use_proportional_projected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proportional_projected`)
    }

    /**
     * Add a new NLA Track + Strip for every loop/pass made over the animation to allow non-destructive tweaking
     * @desc boolean, default False
     */
    public get use_record_with_nla(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_record_with_nla`)
    }

    /**
     * Snap during transform
     * @desc boolean, default False
     */
    public get use_snap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap`)
    }

    /**
     * Align rotation with the snapping target
     * @desc boolean, default False
     */
    public get use_snap_align_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_align_rotation`)
    }

    /**
     * Exclude back facing geometry from snapping
     * @desc boolean, default False
     */
    public get use_snap_backface_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_backface_culling`)
    }

    /**
     * Absolute grid alignment while translating (based on the pivot center)
     * @desc boolean, default False
     */
    public get use_snap_grid_absolute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_grid_absolute`)
    }

    /**
     * Consider objects as whole when finding volume center
     * @desc boolean, default False
     */
    public get use_snap_peel_object(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_peel_object`)
    }

    /**
     * Project individual elements on the surface of other objects
     * @desc boolean, default False
     */
    public get use_snap_project(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_project`)
    }

    /**
     * Rotate is affected by the snapping settings
     * @desc boolean, default False
     */
    public get use_snap_rotate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_rotate`)
    }

    /**
     * Scale is affected by snapping settings
     * @desc boolean, default False
     */
    public get use_snap_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_scale`)
    }

    /**
     * Snap onto itself (Edit Mode Only)
     * @desc boolean, default False
     */
    public get use_snap_self(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_self`)
    }

    /**
     * Move is affected by snapping settings
     * @desc boolean, default True
     */
    public get use_snap_translate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_snap_translate`)
    }

    /**
     * Manipulate object data
     * @desc boolean, default False
     */
    public get use_transform_data_origin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transform_data_origin`)
    }

    /**
     * Manipulate origins (object, pose and weight paint mode only)
     * @desc boolean, default False
     */
    public get use_transform_pivot_point_align(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transform_pivot_point_align`)
    }

    /**
     * Don’t transform children
     * @desc boolean, default False
     */
    public get use_transform_skip_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transform_skip_children`)
    }

    /**
     * Keep UV and edit mode mesh selection in sync
     * @desc boolean, default False
     */
    public get use_uv_select_sync(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_uv_select_sync`)
    }

    /**
     * Algorithm used for UV relaxation
     * @desc enum in ['LAPLACIAN', 'HC'], default 'LAPLACIAN'
     */
    public get uv_relax_method(): 'LAPLACIAN' | 'HC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.uv_relax_method`)
    }

    /**
     * Brush operates on all islands
     * @desc boolean, default False
     */
    public get uv_sculpt_all_islands(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.uv_sculpt_all_islands`)
    }

    /**
     * Disable editing of boundary edges
     * @desc boolean, default False
     */
    public get uv_sculpt_lock_borders(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.uv_sculpt_lock_borders`)
    }

    /**
     * UV selection and display mode
     * @desc enum in ['VERTEX', 'EDGE', 'FACE', 'ISLAND'], default 'VERTEX'
     */
    public get uv_select_mode(): 'VERTEX' | 'EDGE' | 'FACE' | 'ISLAND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.uv_select_mode`)
    }

    /**
     * Filter Vertex groups for Display
     * @desc enum in ['ALL', 'BONE_DEFORM', 'OTHER_DEFORM'], default 'ALL'
     */
    public get vertex_group_subset(): 'ALL' | 'BONE_DEFORM' | 'OTHER_DEFORM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vertex_group_subset`)
    }

    /**
     * Display unweighted vertices
     * @desc enum in ['NONE', 'ACTIVE', 'ALL'], default 'NONE'
     */
    public get vertex_group_user(): 'NONE' | 'ACTIVE' | 'ALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vertex_group_user`)
    }

    /**
     * Weight to assign in vertex groups
     * @desc float in [0, 1], default 1.0
     */
    public get vertex_group_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vertex_group_weight`)
    }

    /**
     * Action when dragging in the viewport
     * @desc enum in ['DEFAULT', 'FALLBACK'], default 'FALLBACK'
     */
    public get workspace_tool_type(): 'DEFAULT' | 'FALLBACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.workspace_tool_type`)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public set annotation_stroke_placement_image_editor(value: 'CURSOR' | 'VIEW' | 'SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.annotation_stroke_placement_image_editor`, value)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public set annotation_stroke_placement_sequencer_preview(value: 'CURSOR' | 'VIEW' | 'SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.annotation_stroke_placement_sequencer_preview`, value)
    }

    /**
     * 
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'VIEW'
     */
    public set annotation_stroke_placement_view2d(value: 'CURSOR' | 'VIEW' | 'SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.annotation_stroke_placement_view2d`, value)
    }

    /**
     * How annotation strokes are orientated in 3D space
     * @desc enum in ['CURSOR', 'VIEW', 'SURFACE'], default 'CURSOR'
     */
    public set annotation_stroke_placement_view3d(value: 'CURSOR' | 'VIEW' | 'SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.annotation_stroke_placement_view3d`, value)
    }

    /**
     * Thickness of annotation strokes
     * @desc int in [1, 10], default 3
     */
    public set annotation_thickness(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.annotation_thickness`, value)
    }

    /**
     * Mode of automatic keyframe insertion for Objects and Bones
     * @desc enum in ['ADD_REPLACE_KEYS', 'REPLACE_KEYS'], default 'ADD_REPLACE_KEYS'
     */
    public set auto_keying_mode(value: 'ADD_REPLACE_KEYS' | 'REPLACE_KEYS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_keying_mode`, value)
    }

    /**
     * Threshold distance for Auto Merge
     * @desc float in [0, 1], default 0.001
     */
    public set double_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.double_threshold`, value)
    }

    /**
     * 
     * @desc enum in ['POINT', 'STROKE', 'SEGMENT'], default 'POINT'
     */
    public set gpencil_selectmode_edit(value: 'POINT' | 'STROKE' | 'SEGMENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gpencil_selectmode_edit`, value)
    }

    /**
     * 
     * @desc enum in ['ORIGIN', 'CURSOR', 'SURFACE', 'STROKE'], default 'ORIGIN'
     */
    public set gpencil_stroke_placement_view3d(value: 'ORIGIN' | 'CURSOR' | 'SURFACE' | 'STROKE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gpencil_stroke_placement_view3d`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ENDS', 'FIRST'], default 'NONE'
     */
    public set gpencil_stroke_snap_mode(value: 'NONE' | 'ENDS' | 'FIRST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gpencil_stroke_snap_mode`, value)
    }

    /**
     * Type of keyframes to create when inserting keyframes
     * @desc enum in ['KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public set keyframe_type(value: 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.keyframe_type`, value)
    }

    /**
     * Prevent marker editing
     * @desc boolean, default False
     */
    public set lock_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_markers`, value)
    }

    /**
     * Restrict select to the current mode
     * @desc boolean, default True
     */
    public set lock_object_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_object_mode`, value)
    }

    /**
     * Which mesh elements selection works on
     * @desc boolean array of 3 items, default (True, True, True)
     */
    public set mesh_select_mode(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mesh_select_mode`, value)
    }

    /**
     * Normal Vector used to copy, add or multiply
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set normal_vector(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.normal_vector`, value)
    }

    /**
     * Falloff type for proportional editing mode
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT', 'RANDOM'], default 'SMOOTH'
     */
    public set proportional_edit_falloff(value: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proportional_edit_falloff`, value)
    }

    /**
     * Display size for proportional editing circle
     * @desc float in [1e-05, 5000], default 1.0
     */
    public set proportional_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.proportional_size`, value)
    }

    /**
     * Display only faces with the currently displayed image assigned
     * @desc boolean, default False
     */
    public set show_uv_local_view(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_uv_local_view`, value)
    }

    /**
     * Type of element to snap to
     * @desc enum set in {'INCREMENT', 'VERTEX', 'EDGE', 'FACE', 'VOLUME', 'EDGE_MIDPOINT', 'EDGE_PERPENDICULAR'}, default {'INCREMENT'}
     */
    public set snap_elements(value: ('INCREMENT' | 'VERTEX' | 'EDGE' | 'FACE' | 'VOLUME' | 'EDGE_MIDPOINT' | 'EDGE_PERPENDICULAR')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.snap_elements`, value)
    }

    /**
     * Type of element to snap to
     * @desc enum in ['GRID', 'NODE_X', 'NODE_Y', 'NODE_XY'], default 'GRID'
     */
    public set snap_node_element(value: 'GRID' | 'NODE_X' | 'NODE_Y' | 'NODE_XY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.snap_node_element`, value)
    }

    /**
     * Which part to snap onto the target
     * @desc enum in ['CLOSEST', 'CENTER', 'MEDIAN', 'ACTIVE'], default 'CLOSEST'
     */
    public set snap_target(value: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.snap_target`, value)
    }

    /**
     * Type of element to snap to
     * @desc enum in ['INCREMENT', 'VERTEX'], default 'INCREMENT'
     */
    public set snap_uv_element(value: 'INCREMENT' | 'VERTEX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.snap_uv_element`, value)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT', 'ACTIVE_ELEMENT'], default 'MEDIAN_POINT'
     */
    public set transform_pivot_point(value: 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT' | 'ACTIVE_ELEMENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transform_pivot_point`, value)
    }

    /**
     * Ensure all bone-deforming vertex groups add up to 1.0 while weight painting
     * @desc boolean, default False
     */
    public set use_auto_normalize(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_normalize`, value)
    }

    /**
     * Changing edges seam re-calculates UV unwrap
     * @desc boolean, default False
     */
    public set use_edge_path_live_unwrap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_path_live_unwrap`, value)
    }

    /**
     * When creating new frames, the strokes from the previous/active frame are included as the basis for the new one
     * @desc boolean, default False
     */
    public set use_gpencil_draw_additive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_draw_additive`, value)
    }

    /**
     * When draw new strokes, the new stroke is drawn below of all strokes in the layer
     * @desc boolean, default False
     */
    public set use_gpencil_draw_onback(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_draw_onback`, value)
    }

    /**
     * Only sculpt selected stroke points
     * @desc boolean, default False
     */
    public set use_gpencil_select_mask_point(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_point`, value)
    }

    /**
     * Only sculpt selected stroke points between other strokes
     * @desc boolean, default False
     */
    public set use_gpencil_select_mask_segment(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_segment`, value)
    }

    /**
     * Only sculpt selected stroke
     * @desc boolean, default False
     */
    public set use_gpencil_select_mask_stroke(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_select_mask_stroke`, value)
    }

    /**
     * Only use the first and last parts of the stroke for snapping
     * @desc boolean, default False
     */
    public set use_gpencil_stroke_endpoints(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_stroke_endpoints`, value)
    }

    /**
     * Show compact list of color instead of thumbnails
     * @desc boolean, default False
     */
    public set use_gpencil_thumbnail_list(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_thumbnail_list`, value)
    }

    /**
     * When creating new strokes, the weight data is added according to the current vertex group and weight, if no vertex group selected, weight is not added
     * @desc boolean, default False
     */
    public set use_gpencil_weight_data_add(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_weight_data_add`, value)
    }

    /**
     * For channels with cyclic extrapolation, keyframe insertion is automatically remapped inside the cycle time range, and keeps ends in sync
     * @desc boolean, default False
     */
    public set use_keyframe_cycle_aware(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_cycle_aware`, value)
    }

    /**
     * Automatic keyframe insertion for Objects and Bones
     * @desc boolean, default True
     */
    public set use_keyframe_insert_auto(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_insert_auto`, value)
    }

    /**
     * Automatic keyframe insertion using active Keying Set only
     * @desc boolean, default False
     */
    public set use_keyframe_insert_keyingset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_insert_keyingset`, value)
    }

    /**
     * Automatically merge vertices moved to the same location
     * @desc boolean, default False
     */
    public set use_mesh_automerge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mesh_automerge`, value)
    }

    /**
     * Automatically split edges and faces
     * @desc boolean, default False
     */
    public set use_mesh_automerge_and_split(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mesh_automerge_and_split`, value)
    }

    /**
     * Paint across the weights of all selected bones, maintaining their relative influence
     * @desc boolean, default False
     */
    public set use_multipaint(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multipaint`, value)
    }

    /**
     * Proportional editing in action editor
     * @desc boolean, default False
     */
    public set use_proportional_action(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_action`, value)
    }

    /**
     * Proportional Editing using connected geometry only
     * @desc boolean, default False
     */
    public set use_proportional_connected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_connected`, value)
    }

    /**
     * Proportional edit mode
     * @desc boolean, default False
     */
    public set use_proportional_edit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_edit`, value)
    }

    /**
     * Proportional editing mask mode
     * @desc boolean, default False
     */
    public set use_proportional_edit_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_edit_mask`, value)
    }

    /**
     * Proportional editing object mode
     * @desc boolean, default False
     */
    public set use_proportional_edit_objects(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_edit_objects`, value)
    }

    /**
     * Proportional editing in FCurve editor
     * @desc boolean, default False
     */
    public set use_proportional_fcurve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_fcurve`, value)
    }

    /**
     * Proportional Editing using screen space locations
     * @desc boolean, default False
     */
    public set use_proportional_projected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proportional_projected`, value)
    }

    /**
     * Add a new NLA Track + Strip for every loop/pass made over the animation to allow non-destructive tweaking
     * @desc boolean, default False
     */
    public set use_record_with_nla(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_record_with_nla`, value)
    }

    /**
     * Snap during transform
     * @desc boolean, default False
     */
    public set use_snap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap`, value)
    }

    /**
     * Align rotation with the snapping target
     * @desc boolean, default False
     */
    public set use_snap_align_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_align_rotation`, value)
    }

    /**
     * Exclude back facing geometry from snapping
     * @desc boolean, default False
     */
    public set use_snap_backface_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_backface_culling`, value)
    }

    /**
     * Absolute grid alignment while translating (based on the pivot center)
     * @desc boolean, default False
     */
    public set use_snap_grid_absolute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_grid_absolute`, value)
    }

    /**
     * Consider objects as whole when finding volume center
     * @desc boolean, default False
     */
    public set use_snap_peel_object(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_peel_object`, value)
    }

    /**
     * Project individual elements on the surface of other objects
     * @desc boolean, default False
     */
    public set use_snap_project(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_project`, value)
    }

    /**
     * Rotate is affected by the snapping settings
     * @desc boolean, default False
     */
    public set use_snap_rotate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_rotate`, value)
    }

    /**
     * Scale is affected by snapping settings
     * @desc boolean, default False
     */
    public set use_snap_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_scale`, value)
    }

    /**
     * Snap onto itself (Edit Mode Only)
     * @desc boolean, default False
     */
    public set use_snap_self(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_self`, value)
    }

    /**
     * Move is affected by snapping settings
     * @desc boolean, default True
     */
    public set use_snap_translate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_snap_translate`, value)
    }

    /**
     * Manipulate object data
     * @desc boolean, default False
     */
    public set use_transform_data_origin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transform_data_origin`, value)
    }

    /**
     * Manipulate origins (object, pose and weight paint mode only)
     * @desc boolean, default False
     */
    public set use_transform_pivot_point_align(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transform_pivot_point_align`, value)
    }

    /**
     * Don’t transform children
     * @desc boolean, default False
     */
    public set use_transform_skip_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transform_skip_children`, value)
    }

    /**
     * Keep UV and edit mode mesh selection in sync
     * @desc boolean, default False
     */
    public set use_uv_select_sync(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_uv_select_sync`, value)
    }

    /**
     * Algorithm used for UV relaxation
     * @desc enum in ['LAPLACIAN', 'HC'], default 'LAPLACIAN'
     */
    public set uv_relax_method(value: 'LAPLACIAN' | 'HC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.uv_relax_method`, value)
    }

    /**
     * Brush operates on all islands
     * @desc boolean, default False
     */
    public set uv_sculpt_all_islands(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.uv_sculpt_all_islands`, value)
    }

    /**
     * Disable editing of boundary edges
     * @desc boolean, default False
     */
    public set uv_sculpt_lock_borders(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.uv_sculpt_lock_borders`, value)
    }

    /**
     * UV selection and display mode
     * @desc enum in ['VERTEX', 'EDGE', 'FACE', 'ISLAND'], default 'VERTEX'
     */
    public set uv_select_mode(value: 'VERTEX' | 'EDGE' | 'FACE' | 'ISLAND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.uv_select_mode`, value)
    }

    /**
     * Filter Vertex groups for Display
     * @desc enum in ['ALL', 'BONE_DEFORM', 'OTHER_DEFORM'], default 'ALL'
     */
    public set vertex_group_subset(value: 'ALL' | 'BONE_DEFORM' | 'OTHER_DEFORM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vertex_group_subset`, value)
    }

    /**
     * Display unweighted vertices
     * @desc enum in ['NONE', 'ACTIVE', 'ALL'], default 'NONE'
     */
    public set vertex_group_user(value: 'NONE' | 'ACTIVE' | 'ALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vertex_group_user`, value)
    }

    /**
     * Weight to assign in vertex groups
     * @desc float in [0, 1], default 1.0
     */
    public set vertex_group_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vertex_group_weight`, value)
    }

    /**
     * Action when dragging in the viewport
     * @desc enum in ['DEFAULT', 'FALLBACK'], default 'FALLBACK'
     */
    public set workspace_tool_type(value: 'DEFAULT' | 'FALLBACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.workspace_tool_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
