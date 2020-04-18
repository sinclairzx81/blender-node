import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MESH_OT_duplicate } from './MESH_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'
import { MESH_OT_extrude_context } from './MESH_OT_extrude_context'
import { MESH_OT_extrude_edges_indiv } from './MESH_OT_extrude_edges_indiv'
import { MESH_OT_extrude_faces_indiv } from './MESH_OT_extrude_faces_indiv'
import { TRANSFORM_OT_shrink_fatten } from './TRANSFORM_OT_shrink_fatten'
import { MESH_OT_extrude_region } from './MESH_OT_extrude_region'
import { MESH_OT_extrude_verts_indiv } from './MESH_OT_extrude_verts_indiv'
import { MESH_OT_loopcut } from './MESH_OT_loopcut'
import { TRANSFORM_OT_edge_slide } from './TRANSFORM_OT_edge_slide'
import { MESH_OT_offset_edge_loops } from './MESH_OT_offset_edge_loops'
import { MESH_OT_polybuild_transform_at_cursor } from './MESH_OT_polybuild_transform_at_cursor'
import { MESH_OT_polybuild_face_at_cursor } from './MESH_OT_polybuild_face_at_cursor'
import { MESH_OT_polybuild_split_at_cursor } from './MESH_OT_polybuild_split_at_cursor'
import { MESH_OT_rip_edge } from './MESH_OT_rip_edge'
import { MESH_OT_rip } from './MESH_OT_rip'

/**
 * MeshOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.mesh.html
 */
export class MeshOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Average custom normals of selected vertices
     * @desc void
     */
    public average_normals(options: { average_type?: 'CUSTOM_NORMAL' | 'FACE_AREA' | 'CORNER_ANGLE', weight?: number, threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.average_normals`, options)
    }

    /**
     * Rearrange some faces to try to get less degenerated geometry
     * @desc void
     */
    public beautify_fill(options: { angle_limit?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.beautify_fill`, options)
    }

    /**
     * Cut into selected items at an angle to create bevel or chamfer
     * @desc void
     */
    public bevel(options: { offset_type?: 'OFFSET' | 'WIDTH' | 'DEPTH' | 'PERCENT', offset?: number, offset_pct?: number, segments?: number, profile?: number, vertex_only?: boolean, clamp_overlap?: boolean, loop_slide?: boolean, mark_seam?: boolean, mark_sharp?: boolean, material?: number, harden_normals?: boolean, face_strength_mode?: 'NONE' | 'NEW' | 'AFFECTED' | 'ALL', miter_outer?: 'SHARP' | 'PATCH' | 'ARC', miter_inner?: 'SHARP' | 'ARC', spread?: number, use_custom_profile?: boolean, vmesh_method?: 'ADJ' | 'CUTOFF', release_confirm?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bevel`, options)
    }

    /**
     * Cut geometry along a plane (click-drag to define plane)
     * @desc void
     */
    public bisect(options: { plane_co?: [number, number, number], plane_no?: [number, number, number], use_fill?: boolean, clear_inner?: boolean, clear_outer?: boolean, threshold?: number, xstart?: number, xend?: number, ystart?: number, yend?: number, cursor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bisect`, options)
    }

    /**
     * Blend in shape from a shape key
     * @desc void
     */
    public blend_from_shape(options: { shape?: string, blend?: number, add?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.blend_from_shape`, options)
    }

    /**
     * Create a bridge of faces between two or more selected edge loops
     * @desc void
     */
    public bridge_edge_loops(options: { type?: 'SINGLE' | 'CLOSED' | 'PAIRS', use_merge?: boolean, merge_factor?: number, twist_offset?: number, number_cuts?: number, interpolation?: 'LINEAR' | 'PATH' | 'SURFACE', smoothness?: number, profile_shape_factor?: number, profile_shape?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bridge_edge_loops`, options)
    }

    /**
     * Flip direction of vertex colors inside faces
     * @desc void
     */
    public colors_reverse(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.colors_reverse`, {})
    }

    /**
     * Rotate vertex colors inside faces
     * @desc void
     */
    public colors_rotate(options: { use_ccw?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.colors_rotate`, options)
    }

    /**
     * Enclose selected vertices in a convex polyhedron
     * @desc void
     */
    public convex_hull(options: { delete_unused?: boolean, use_existing_faces?: boolean, make_holes?: boolean, join_triangles?: boolean, face_threshold?: number, shape_threshold?: number, uvs?: boolean, vcols?: boolean, seam?: boolean, sharp?: boolean, materials?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convex_hull`, options)
    }

    /**
     * Add a custom split normals layer, if none exists yet
     * @desc void
     */
    public customdata_custom_splitnormals_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.customdata_custom_splitnormals_add`, {})
    }

    /**
     * Remove the custom split normals layer, if it exists
     * @desc void
     */
    public customdata_custom_splitnormals_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.customdata_custom_splitnormals_clear`, {})
    }

    /**
     * Clear vertex sculpt masking data from the mesh
     * @desc void
     */
    public customdata_mask_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.customdata_mask_clear`, {})
    }

    /**
     * Add a vertex skin layer
     * @desc void
     */
    public customdata_skin_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.customdata_skin_add`, {})
    }

    /**
     * Clear vertex skin layer
     * @desc void
     */
    public customdata_skin_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.customdata_skin_clear`, {})
    }

    /**
     * Simplify geometry by collapsing edges
     * @desc void
     */
    public decimate(options: { ratio?: number, use_vertex_group?: boolean, vertex_group_factor?: number, invert_vertex_group?: boolean, use_symmetry?: boolean, symmetry_axis?: 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.decimate`, options)
    }

    /**
     * Delete selected vertices, edges or faces
     * @desc void
     */
    public delete(options: { type?: 'VERT' | 'EDGE' | 'FACE' | 'EDGE_FACE' | 'ONLY_FACE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Delete an edge loop by merging the faces on each side
     * @desc void
     */
    public delete_edgeloop(options: { use_face_split?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_edgeloop`, options)
    }

    /**
     * Delete loose vertices, edges or faces
     * @desc void
     */
    public delete_loose(options: { use_verts?: boolean, use_edges?: boolean, use_faces?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_loose`, options)
    }

    /**
     * Dissolve zero area faces and zero length edges
     * @desc void
     */
    public dissolve_degenerate(options: { threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_degenerate`, options)
    }

    /**
     * Dissolve edges, merging faces
     * @desc void
     */
    public dissolve_edges(options: { use_verts?: boolean, use_face_split?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_edges`, options)
    }

    /**
     * Dissolve faces
     * @desc void
     */
    public dissolve_faces(options: { use_verts?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_faces`, options)
    }

    /**
     * Dissolve selected edges and verts, limited by the angle of surrounding geometry
     * @desc void
     */
    public dissolve_limited(options: { angle_limit?: number, use_dissolve_boundaries?: boolean, delimit?: ('NORMAL' | 'MATERIAL' | 'SEAM' | 'SHARP' | 'UV')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_limited`, options)
    }

    /**
     * Dissolve geometry based on the selection mode
     * @desc void
     */
    public dissolve_mode(options: { use_verts?: boolean, use_face_split?: boolean, use_boundary_tear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_mode`, options)
    }

    /**
     * Dissolve verts, merge edges and faces
     * @desc void
     */
    public dissolve_verts(options: { use_face_split?: boolean, use_boundary_tear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_verts`, options)
    }

    /**
     * Duplicate and extrude selected vertices, edges or faces towards the mouse cursor
     * @desc void
     */
    public dupli_extrude_cursor(options: { rotate_source?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupli_extrude_cursor`, options)
    }

    /**
     * Duplicate selected vertices, edges or faces
     * @desc void
     */
    public duplicate(options: { mode?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Duplicate mesh and move
     * @desc void
     */
    public duplicate_move(options: { MESH_OT_duplicate?: MESH_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Collapse selected edges
     * @desc void
     */
    public edge_collapse(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_collapse`, {})
    }

    /**
     * Add an edge or face to selected
     * @desc void
     */
    public edge_face_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_face_add`, {})
    }

    /**
     * Rotate selected edge or adjoining faces
     * @desc void
     */
    public edge_rotate(options: { use_ccw?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_rotate`, options)
    }

    /**
     * Split selected edges so that each neighbor face gets its own copy
     * @desc void
     */
    public edge_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_split`, {})
    }

    /**
     * Select an edge ring
     * @desc void
     */
    public edgering_select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, ring?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edgering_select`, options)
    }

    /**
     * Select all sharp-enough edges
     * @desc void
     */
    public edges_select_sharp(options: { sharpness?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edges_select_sharp`, options)
    }

    /**
     * Extrude selection
     * @desc void
     */
    public extrude_context(options: { use_normal_flip?: boolean, mirror?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_context`, options)
    }

    /**
     * Extrude region together along the average normal
     * @desc void
     */
    public extrude_context_move(options: { MESH_OT_extrude_context?: MESH_OT_extrude_context, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_context_move`, options)
    }

    /**
     * Extrude individual edges only
     * @desc void
     */
    public extrude_edges_indiv(options: { use_normal_flip?: boolean, mirror?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_edges_indiv`, options)
    }

    /**
     * Extrude edges and move result
     * @desc void
     */
    public extrude_edges_move(options: { MESH_OT_extrude_edges_indiv?: MESH_OT_extrude_edges_indiv, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_edges_move`, options)
    }

    /**
     * Extrude individual faces only
     * @desc void
     */
    public extrude_faces_indiv(options: { mirror?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_faces_indiv`, options)
    }

    /**
     * Extrude each individual face separately along local normals
     * @desc void
     */
    public extrude_faces_move(options: { MESH_OT_extrude_faces_indiv?: MESH_OT_extrude_faces_indiv, TRANSFORM_OT_shrink_fatten?: TRANSFORM_OT_shrink_fatten }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_faces_move`, options)
    }

    /**
     * Extrude region of faces
     * @desc void
     */
    public extrude_region(options: { use_normal_flip?: boolean, mirror?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_region`, options)
    }

    /**
     * Extrude region and move result
     * @desc void
     */
    public extrude_region_move(options: { MESH_OT_extrude_region?: MESH_OT_extrude_region, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_region_move`, options)
    }

    /**
     * Extrude region together along local normals
     * @desc void
     */
    public extrude_region_shrink_fatten(options: { MESH_OT_extrude_region?: MESH_OT_extrude_region, TRANSFORM_OT_shrink_fatten?: TRANSFORM_OT_shrink_fatten }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_region_shrink_fatten`, options)
    }

    /**
     * Extrude selected vertices, edges or faces repeatedly
     * @desc void
     */
    public extrude_repeat(options: { offset?: number, steps?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_repeat`, options)
    }

    /**
     * Extrude vertices and move result
     * @desc void
     */
    public extrude_vertices_move(options: { MESH_OT_extrude_verts_indiv?: MESH_OT_extrude_verts_indiv, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_vertices_move`, options)
    }

    /**
     * Extrude individual vertices only
     * @desc void
     */
    public extrude_verts_indiv(options: { mirror?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_verts_indiv`, options)
    }

    /**
     * Flatten selected faces
     * @desc void
     */
    public face_make_planar(options: { factor?: number, repeat?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_make_planar`, options)
    }

    /**
     * Weld loose edges into faces (splitting them into new faces)
     * @desc void
     */
    public face_split_by_edges(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_split_by_edges`, {})
    }

    /**
     * Copy mirror UV coordinates on the X axis based on a mirrored mesh
     * @desc void
     */
    public faces_mirror_uv(options: { direction?: 'POSITIVE' | 'NEGATIVE', precision?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.faces_mirror_uv`, options)
    }

    /**
     * Select linked faces by angle
     * @desc void
     */
    public faces_select_linked_flat(options: { sharpness?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.faces_select_linked_flat`, options)
    }

    /**
     * Display faces flat
     * @desc void
     */
    public faces_shade_flat(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.faces_shade_flat`, {})
    }

    /**
     * Display faces smooth (using vertex normals)
     * @desc void
     */
    public faces_shade_smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.faces_shade_smooth`, {})
    }

    /**
     * Fill a selected edge loop with faces
     * @desc void
     */
    public fill(options: { use_beauty?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fill`, options)
    }

    /**
     * Fill grid from two loops
     * @desc void
     */
    public fill_grid(options: { span?: number, offset?: number, use_interp_simple?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fill_grid`, options)
    }

    /**
     * Fill in holes (boundary edge loops)
     * @desc void
     */
    public fill_holes(options: { sides?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fill_holes`, options)
    }

    /**
     * Flip the direction of selected faces’ normals (and of their vertices)
     * @desc void
     */
    public flip_normals(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip_normals`, {})
    }

    /**
     * Hide (un)selected vertices, edges or faces
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Inset new faces into selected faces
     * @desc void
     */
    public inset(options: { use_boundary?: boolean, use_even_offset?: boolean, use_relative_offset?: boolean, use_edge_rail?: boolean, thickness?: number, depth?: number, use_outset?: boolean, use_select_inset?: boolean, use_individual?: boolean, use_interpolate?: boolean, release_confirm?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.inset`, options)
    }

    /**
     * Cut an intersection into faces
     * @desc void
     */
    public intersect(options: { mode?: 'SELECT' | 'SELECT_UNSELECT', separate_mode?: 'ALL' | 'CUT' | 'NONE', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.intersect`, options)
    }

    /**
     * Cut solid geometry from selected to unselected
     * @desc void
     */
    public intersect_boolean(options: { operation?: 'INTERSECT' | 'UNION' | 'DIFFERENCE', use_swap?: boolean, threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.intersect_boolean`, options)
    }

    /**
     * Use other objects outlines & boundaries to project knife cuts
     * @desc void
     */
    public knife_project(options: { cut_through?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.knife_project`, options)
    }

    /**
     * Cut new topology
     * @desc void
     */
    public knife_tool(options: { use_occlude_geometry?: boolean, only_selected?: boolean, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.knife_tool`, options)
    }

    /**
     * Select a loop of connected edges by connection type
     * @desc void
     */
    public loop_multi_select(options: { ring?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loop_multi_select`, options)
    }

    /**
     * Select a loop of connected edges
     * @desc void
     */
    public loop_select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, ring?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loop_select`, options)
    }

    /**
     * Select region of faces inside of a selected loop of edges
     * @desc void
     */
    public loop_to_region(options: { select_bigger?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loop_to_region`, options)
    }

    /**
     * Add a new loop between existing loops
     * @desc void
     */
    public loopcut(options: { number_cuts?: number, smoothness?: number, falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR', object_index?: number, edge_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loopcut`, options)
    }

    /**
     * Cut mesh loop and slide it
     * @desc void
     */
    public loopcut_slide(options: { MESH_OT_loopcut?: MESH_OT_loopcut, TRANSFORM_OT_edge_slide?: TRANSFORM_OT_edge_slide }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loopcut_slide`, options)
    }

    /**
     * (Un)mark selected edges as Freestyle feature edges
     * @desc void
     */
    public mark_freestyle_edge(options: { clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mark_freestyle_edge`, options)
    }

    /**
     * (Un)mark selected faces for exclusion from Freestyle feature edge detection
     * @desc void
     */
    public mark_freestyle_face(options: { clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mark_freestyle_face`, options)
    }

    /**
     * (Un)mark selected edges as a seam
     * @desc void
     */
    public mark_seam(options: { clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mark_seam`, options)
    }

    /**
     * (Un)mark selected edges as sharp
     * @desc void
     */
    public mark_sharp(options: { clear?: boolean, use_verts?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mark_sharp`, options)
    }

    /**
     * Merge selected vertices
     * @desc void
     */
    public merge(options: { type?: 'FIRST' | 'LAST' | 'CENTER' | 'CURSOR' | 'COLLAPSE', uvs?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.merge`, options)
    }

    /**
     * Merge custom normals of selected vertices
     * @desc void
     */
    public merge_normals(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.merge_normals`, {})
    }

    /**
     * Set/Get strength of face (used in Weighted Normal modifier)
     * @desc void
     */
    public mod_weighted_strength(options: { set?: boolean, face_strength?: 'WEAK' | 'MEDIUM' | 'STRONG' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mod_weighted_strength`, options)
    }

    /**
     * Make face and vertex normals point either outside or inside the mesh
     * @desc void
     */
    public normals_make_consistent(options: { inside?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_make_consistent`, options)
    }

    /**
     * Custom normals tools using Normal Vector of UI
     * @desc void
     */
    public normals_tools(options: { mode?: 'COPY' | 'PASTE' | 'ADD' | 'MULTIPLY' | 'RESET', absolute?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_tools`, options)
    }

    /**
     * Create offset edge loop from the current selection
     * @desc void
     */
    public offset_edge_loops(options: { use_cap_endpoint?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.offset_edge_loops`, options)
    }

    /**
     * Offset edge loop slide
     * @desc void
     */
    public offset_edge_loops_slide(options: { MESH_OT_offset_edge_loops?: MESH_OT_offset_edge_loops, TRANSFORM_OT_edge_slide?: TRANSFORM_OT_edge_slide }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.offset_edge_loops_slide`, options)
    }

    /**
     * Create a new mesh object from the current paint mask
     * @desc void
     */
    public paint_mask_extract(options: { mask_threshold?: number, add_boundary_loop?: boolean, smooth_iterations?: number, apply_shrinkwrap?: boolean, add_solidify?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paint_mask_extract`, options)
    }

    /**
     * Slices the paint mask from the mesh
     * @desc void
     */
    public paint_mask_slice(options: { mask_threshold?: number, fill_holes?: boolean, new_object?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paint_mask_slice`, options)
    }

    /**
     * Point selected custom normals to specified Target
     * @desc void
     */
    public point_normals(options: { mode?: 'COORDINATES' | 'MOUSE', invert?: boolean, align?: boolean, target_location?: [number, number, number], spherize?: boolean, spherize_strength?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.point_normals`, options)
    }

    /**
     * Split a face into a fan
     * @desc void
     */
    public poke(options: { offset?: number, use_relative_offset?: boolean, center_mode?: 'MEDIAN_WEIGHTED' | 'MEDIAN' | 'BOUNDS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.poke`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_delete_at_cursor(options: { mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_delete_at_cursor`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_dissolve_at_cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_dissolve_at_cursor`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_extrude_at_cursor_move(options: { MESH_OT_polybuild_transform_at_cursor?: MESH_OT_polybuild_transform_at_cursor, MESH_OT_extrude_edges_indiv?: MESH_OT_extrude_edges_indiv, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_extrude_at_cursor_move`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_face_at_cursor(options: { create_quads?: boolean, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_face_at_cursor`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_face_at_cursor_move(options: { MESH_OT_polybuild_face_at_cursor?: MESH_OT_polybuild_face_at_cursor, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_face_at_cursor_move`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_split_at_cursor(options: { mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_split_at_cursor`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_split_at_cursor_move(options: { MESH_OT_polybuild_split_at_cursor?: MESH_OT_polybuild_split_at_cursor, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_split_at_cursor_move`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_transform_at_cursor(options: { mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_transform_at_cursor`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public polybuild_transform_at_cursor_move(options: { MESH_OT_polybuild_transform_at_cursor?: MESH_OT_polybuild_transform_at_cursor, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.polybuild_transform_at_cursor_move`, options)
    }

    /**
     * Construct a circle mesh
     * @desc void
     */
    public primitive_circle_add(options: { vertices?: number, radius?: number, fill_type?: 'NOTHING' | 'NGON' | 'TRIFAN', calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_circle_add`, options)
    }

    /**
     * Construct a conic mesh
     * @desc void
     */
    public primitive_cone_add(options: { vertices?: number, radius1?: number, radius2?: number, depth?: number, end_fill_type?: 'NOTHING' | 'NGON' | 'TRIFAN', calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_cone_add`, options)
    }

    /**
     * Construct a cube mesh
     * @desc void
     */
    public primitive_cube_add(options: { size?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_cube_add`, options)
    }

    /**
     * Construct a cube mesh
     * @desc void
     */
    public primitive_cube_add_gizmo(options: { calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number], matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_cube_add_gizmo`, options)
    }

    /**
     * Construct a cylinder mesh
     * @desc void
     */
    public primitive_cylinder_add(options: { vertices?: number, radius?: number, depth?: number, end_fill_type?: 'NOTHING' | 'NGON' | 'TRIFAN', calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_cylinder_add`, options)
    }

    /**
     * Construct a grid mesh
     * @desc void
     */
    public primitive_grid_add(options: { x_subdivisions?: number, y_subdivisions?: number, size?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_grid_add`, options)
    }

    /**
     * Construct an Icosphere mesh
     * @desc void
     */
    public primitive_ico_sphere_add(options: { subdivisions?: number, radius?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_ico_sphere_add`, options)
    }

    /**
     * Construct a Suzanne mesh
     * @desc void
     */
    public primitive_monkey_add(options: { size?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_monkey_add`, options)
    }

    /**
     * Construct a filled planar mesh with 4 vertices
     * @desc void
     */
    public primitive_plane_add(options: { size?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_plane_add`, options)
    }

    /**
     * Construct a torus mesh
     * @desc void
     */
    public primitive_torus_add(options: { align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number], major_segments?: number, minor_segments?: number, mode?: 'MAJOR_MINOR' | 'EXT_INT', major_radius?: number, minor_radius?: number, abso_major_rad?: number, abso_minor_rad?: number, generate_uvs?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_torus_add`, options)
    }

    /**
     * Construct a UV sphere mesh
     * @desc void
     */
    public primitive_uv_sphere_add(options: { segments?: number, ring_count?: number, radius?: number, calc_uvs?: boolean, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_uv_sphere_add`, options)
    }

    /**
     * Triangulate selected faces
     * @desc void
     */
    public quads_convert_to_tris(options: { quad_method?: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL', ngon_method?: 'BEAUTY' | 'CLIP' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quads_convert_to_tris`, options)
    }

    /**
     * Select boundary edges around the selected faces
     * @desc void
     */
    public region_to_loop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.region_to_loop`, {})
    }

    /**
     * Merge vertices based on their proximity
     * @desc void
     */
    public remove_doubles(options: { threshold?: number, use_unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_doubles`, options)
    }

    /**
     * Reveal all hidden vertices, edges and faces
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * Disconnect vertex or edges from connected geometry
     * @desc void
     */
    public rip(options: { mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean, use_fill?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rip`, options)
    }

    /**
     * Extend vertices along the edge closest to the cursor
     * @desc void
     */
    public rip_edge(options: { mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rip_edge`, options)
    }

    /**
     * Extend vertices and move the result
     * @desc void
     */
    public rip_edge_move(options: { MESH_OT_rip_edge?: MESH_OT_rip_edge, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rip_edge_move`, options)
    }

    /**
     * Rip polygons and move the result
     * @desc void
     */
    public rip_move(options: { MESH_OT_rip?: MESH_OT_rip, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rip_move`, options)
    }

    /**
     * Extrude selected vertices in screw-shaped rotation around the cursor in indicated viewport
     * @desc void
     */
    public screw(options: { steps?: number, turns?: number, center?: [number, number, number], axis?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.screw`, options)
    }

    /**
     * (De)select all vertices, edges or faces
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select all data in the mesh on a single axis
     * @desc void
     */
    public select_axis(options: { orientation?: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR', sign?: 'POS' | 'NEG' | 'ALIGN', axis?: 'X' | 'Y' | 'Z', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_axis`, options)
    }

    /**
     * Select vertices or faces by the number of polygon sides
     * @desc void
     */
    public select_face_by_sides(options: { number?: number, type?: 'LESS' | 'EQUAL' | 'GREATER' | 'NOTEQUAL', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_face_by_sides`, options)
    }

    /**
     * Select faces where all edges have more than 2 face users
     * @desc void
     */
    public select_interior_faces(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_interior_faces`, {})
    }

    /**
     * Deselect vertices, edges or faces at the boundary of each selection region
     * @desc void
     */
    public select_less(options: { use_face_step?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, options)
    }

    /**
     * Select all vertices connected to the current selection
     * @desc void
     */
    public select_linked(options: { delimit?: ('NORMAL' | 'MATERIAL' | 'SEAM' | 'SHARP' | 'UV')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, options)
    }

    /**
     * (De)select all vertices linked to the edge under the mouse cursor
     * @desc void
     */
    public select_linked_pick(options: { deselect?: boolean, delimit?: ('NORMAL' | 'MATERIAL' | 'SEAM' | 'SHARP' | 'UV')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_pick`, options)
    }

    /**
     * Select loose geometry based on the selection mode
     * @desc void
     */
    public select_loose(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_loose`, options)
    }

    /**
     * Select mesh items at mirrored locations
     * @desc void
     */
    public select_mirror(options: { axis?: ('X' | 'Y' | 'Z')[], extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_mirror`, options)
    }

    /**
     * Change selection mode
     * @desc void
     */
    public select_mode(options: { use_extend?: boolean, use_expand?: boolean, type?: 'VERT' | 'EDGE' | 'FACE', action?: 'DISABLE' | 'ENABLE' | 'TOGGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_mode`, options)
    }

    /**
     * Select more vertices, edges or faces connected to initial selection
     * @desc void
     */
    public select_more(options: { use_face_step?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, options)
    }

    /**
     * Select the next element (using selection order)
     * @desc void
     */
    public select_next_item(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_next_item`, {})
    }

    /**
     * Select all non-manifold vertices or edges
     * @desc void
     */
    public select_non_manifold(options: { extend?: boolean, use_wire?: boolean, use_boundary?: boolean, use_multi_face?: boolean, use_non_contiguous?: boolean, use_verts?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_non_manifold`, options)
    }

    /**
     * Deselect every Nth element starting from the active vertex, edge or face
     * @desc void
     */
    public select_nth(options: { skip?: number, nth?: number, offset?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_nth`, options)
    }

    /**
     * Select the previous element (using selection order)
     * @desc void
     */
    public select_prev_item(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_prev_item`, {})
    }

    /**
     * Randomly select vertices
     * @desc void
     */
    public select_random(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random`, options)
    }

    /**
     * Select similar vertices, edges or faces by property types
     * @desc void
     */
    public select_similar(options: { type?: 'NORMAL' | 'FACE' | 'VGROUP' | 'EDGE' | 'LENGTH' | 'DIR' | 'FACE' | 'FACE_ANGLE' | 'CREASE' | 'BEVEL' | 'SEAM' | 'SHARP' | 'FREESTYLE_EDGE' | 'MATERIAL' | 'AREA' | 'SIDES' | 'PERIMETER' | 'NORMAL' | 'COPLANAR' | 'SMOOTH' | 'FACE_MAP' | 'FREESTYLE_FACE', compare?: 'EQUAL' | 'GREATER' | 'LESS', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_similar`, options)
    }

    /**
     * Select similar face regions to the current selection
     * @desc void
     */
    public select_similar_region(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_similar_region`, {})
    }

    /**
     * Select vertices without a group
     * @desc void
     */
    public select_ungrouped(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_ungrouped`, options)
    }

    /**
     * Separate selected geometry into a new mesh
     * @desc void
     */
    public separate(options: { type?: 'SELECTED' | 'MATERIAL' | 'LOOSE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.separate`, options)
    }

    /**
     * Set the custom normals from the selected faces ones
     * @desc void
     */
    public set_normals_from_faces(options: { keep_sharp?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_normals_from_faces`, options)
    }

    /**
     * Apply selected vertex locations to all other shape keys
     * @desc void
     */
    public shape_propagate_to_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_propagate_to_all`, {})
    }

    /**
     * Select shortest path between two selections
     * @desc void
     */
    public shortest_path_pick(options: { edge_mode?: 'SELECT' | 'SEAM' | 'SHARP' | 'CREASE' | 'BEVEL' | 'FREESTYLE', use_face_step?: boolean, use_topology_distance?: boolean, use_fill?: boolean, skip?: number, nth?: number, offset?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shortest_path_pick`, options)
    }

    /**
     * Selected shortest path between two vertices/edges/faces
     * @desc void
     */
    public shortest_path_select(options: { edge_mode?: 'SELECT' | 'SEAM' | 'SHARP' | 'CREASE' | 'BEVEL' | 'FREESTYLE', use_face_step?: boolean, use_topology_distance?: boolean, use_fill?: boolean, skip?: number, nth?: number, offset?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shortest_path_select`, options)
    }

    /**
     * Smoothen custom normals based on adjacent vertex normals
     * @desc void
     */
    public smoothen_normals(options: { factor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smoothen_normals`, options)
    }

    /**
     * Create a solid skin by extruding, compensating for sharp angles
     * @desc void
     */
    public solidify(options: { thickness?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.solidify`, options)
    }

    /**
     * The order of selected vertices/edges/faces is modified, based on a given method
     * @desc void
     */
    public sort_elements(options: { type?: 'VIEW_ZAXIS' | 'VIEW_XAXIS' | 'CURSOR_DISTANCE' | 'MATERIAL' | 'SELECTED' | 'RANDOMIZE' | 'REVERSE', elements?: ('VERT' | 'EDGE' | 'FACE')[], reverse?: boolean, seed?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sort_elements`, options)
    }

    /**
     * Extrude selected vertices in a circle around the cursor in indicated viewport
     * @desc void
     */
    public spin(options: { steps?: number, dupli?: boolean, angle?: number, use_auto_merge?: boolean, use_normal_flip?: boolean, center?: [number, number, number], axis?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.spin`, options)
    }

    /**
     * Split off selected geometry from connected unselected geometry
     * @desc void
     */
    public split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split`, {})
    }

    /**
     * Split custom normals of selected vertices
     * @desc void
     */
    public split_normals(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split_normals`, {})
    }

    /**
     * Subdivide selected edges
     * @desc void
     */
    public subdivide(options: { number_cuts?: number, smoothness?: number, ngon?: boolean, quadcorner?: 'INNERVERT' | 'PATH' | 'STRAIGHT_CUT' | 'FAN', fractal?: number, fractal_along_normal?: number, seed?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivide`, options)
    }

    /**
     * Subdivide perpendicular edges to the selected edge ring
     * @desc void
     */
    public subdivide_edgering(options: { number_cuts?: number, interpolation?: 'LINEAR' | 'PATH' | 'SURFACE', smoothness?: number, profile_shape_factor?: number, profile_shape?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivide_edgering`, options)
    }

    /**
     * Enforce symmetry (both form and topological) across an axis
     * @desc void
     */
    public symmetrize(options: { direction?: 'NEGATIVE_X' | 'POSITIVE_X' | 'NEGATIVE_Y' | 'POSITIVE_Y' | 'NEGATIVE_Z' | 'POSITIVE_Z', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.symmetrize`, options)
    }

    /**
     * Snap vertex pairs to their mirrored locations
     * @desc void
     */
    public symmetry_snap(options: { direction?: 'NEGATIVE_X' | 'POSITIVE_X' | 'NEGATIVE_Y' | 'POSITIVE_Y' | 'NEGATIVE_Z' | 'POSITIVE_Z', threshold?: number, factor?: number, use_center?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.symmetry_snap`, options)
    }

    /**
     * Join triangles into quads
     * @desc void
     */
    public tris_convert_to_quads(options: { face_threshold?: number, shape_threshold?: number, uvs?: boolean, vcols?: boolean, seam?: boolean, sharp?: boolean, materials?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tris_convert_to_quads`, options)
    }

    /**
     * UnSubdivide selected edges & faces
     * @desc void
     */
    public unsubdivide(options: { iterations?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unsubdivide`, options)
    }

    /**
     * Add UV Map
     * @desc void
     */
    public uv_texture_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.uv_texture_add`, {})
    }

    /**
     * Remove UV Map
     * @desc void
     */
    public uv_texture_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.uv_texture_remove`, {})
    }

    /**
     * Flip direction of UV coordinates inside faces
     * @desc void
     */
    public uvs_reverse(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.uvs_reverse`, {})
    }

    /**
     * Rotate UV coordinates inside faces
     * @desc void
     */
    public uvs_rotate(options: { use_ccw?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.uvs_rotate`, options)
    }

    /**
     * Connect selected vertices of faces, splitting the face
     * @desc void
     */
    public vert_connect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_connect`, {})
    }

    /**
     * Make all faces convex
     * @desc void
     */
    public vert_connect_concave(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_connect_concave`, {})
    }

    /**
     * Split non-planar faces that exceed the angle threshold
     * @desc void
     */
    public vert_connect_nonplanar(options: { angle_limit?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_connect_nonplanar`, options)
    }

    /**
     * Connect vertices by their selection order, creating edges, splitting faces
     * @desc void
     */
    public vert_connect_path(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_connect_path`, {})
    }

    /**
     * Add vertex color layer
     * @desc void
     */
    public vertex_color_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_add`, {})
    }

    /**
     * Remove vertex color layer
     * @desc void
     */
    public vertex_color_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_remove`, {})
    }

    /**
     * Flatten angles of selected vertices
     * @desc void
     */
    public vertices_smooth(options: { factor?: number, repeat?: number, xaxis?: boolean, yaxis?: boolean, zaxis?: boolean, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertices_smooth`, options)
    }

    /**
     * Laplacian smooth of selected vertices
     * @desc void
     */
    public vertices_smooth_laplacian(options: { repeat?: number, lambda_factor?: number, lambda_border?: number, use_x?: boolean, use_y?: boolean, use_z?: boolean, preserve_volume?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertices_smooth_laplacian`, options)
    }

    /**
     * Create a solid wire-frame from faces
     * @desc void
     */
    public wireframe(options: { use_boundary?: boolean, use_even_offset?: boolean, use_relative_offset?: boolean, use_replace?: boolean, thickness?: number, offset?: number, use_crease?: boolean, crease_weight?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.wireframe`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
