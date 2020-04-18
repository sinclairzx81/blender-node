import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * View3DOverlay
 * 
 * https://docs.blender.org/api/current/bpy.types.View3DOverlay.html
 */
export class View3DOverlay {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Grid cell size scaled by scene unit system settings
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get grid_scale_unit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.grid_scale_unit`)
    }

    /**
     * Opacity when rendering transparent wires
     * @desc float in [0, 1], default 0.0
     */
    public get backwire_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.backwire_opacity`)
    }

    /**
     * Fade layer opacity for Grease Pencil layers except the active one
     * @desc float in [0, 1], default 0.5
     */
    public get gpencil_fade_layer(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gpencil_fade_layer`)
    }

    /**
     * Canvas grid opacity
     * @desc float in [0.1, 1], default 0.9
     */
    public get gpencil_grid_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gpencil_grid_opacity`)
    }

    /**
     * Fade factor
     * @desc float in [0, 1], default 0.5
     */
    public get gpencil_paper_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gpencil_paper_opacity`)
    }

    /**
     * Number of grid lines to display in perspective view
     * @desc int in [0, 1024], default 16
     */
    public get grid_lines(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_lines`)
    }

    /**
     * Distance between 3D View grid lines
     * @desc float in [0, inf], default 1.0
     */
    public get grid_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.grid_scale`)
    }

    /**
     * Number of subdivisions between grid lines
     * @desc int in [1, 1024], default 10
     */
    public get grid_subdivisions(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_subdivisions`)
    }

    /**
     * Display size for normals in the 3D view
     * @desc float in [1e-05, 100000], default 0.02
     */
    public get normals_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.normals_length`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.75
     */
    public get sculpt_mode_mask_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sculpt_mode_mask_opacity`)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default True
     */
    public get show_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_annotation`)
    }

    /**
     * Show the X axis line
     * @desc boolean, default True
     */
    public get show_axis_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_axis_x`)
    }

    /**
     * Show the Y axis line
     * @desc boolean, default True
     */
    public get show_axis_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_axis_y`)
    }

    /**
     * Show the Z axis line
     * @desc boolean, default False
     */
    public get show_axis_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_axis_z`)
    }

    /**
     * Display bones (disable to show motion paths only)
     * @desc boolean, default False
     */
    public get show_bones(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_bones`)
    }

    /**
     * Display 3D Cursor Overlay
     * @desc boolean, default False
     */
    public get show_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cursor`)
    }

    /**
     * Display Bezier handles in editmode
     * @desc boolean, default True
     */
    public get show_curve_handles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_curve_handles`)
    }

    /**
     * Display 3D curve normals in editmode
     * @desc boolean, default True
     */
    public get show_curve_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_curve_normals`)
    }

    /**
     * Display weights created for the Bevel modifier
     * @desc boolean, default True
     */
    public get show_edge_bevel_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_edge_bevel_weight`)
    }

    /**
     * Display creases created for Subdivision Surface modifier
     * @desc boolean, default True
     */
    public get show_edge_crease(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_edge_crease`)
    }

    /**
     * Display UV unwrapping seams
     * @desc boolean, default True
     */
    public get show_edge_seams(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_edge_seams`)
    }

    /**
     * Display sharp edges, used with the Edge Split modifier
     * @desc boolean, default True
     */
    public get show_edge_sharp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_edge_sharp`)
    }

    /**
     * Highlight selected edges
     * @desc boolean, default True
     */
    public get show_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_edges`)
    }

    /**
     * Display selected edge angle, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public get show_extra_edge_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_edge_angle`)
    }

    /**
     * Display selected edge lengths, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public get show_extra_edge_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_edge_length`)
    }

    /**
     * Display the angles in the selected edges, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public get show_extra_face_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_face_angle`)
    }

    /**
     * Display the area of selected faces, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public get show_extra_face_area(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_face_area`)
    }

    /**
     * Display the index numbers of selected vertices, edges, and faces
     * @desc boolean, default False
     */
    public get show_extra_indices(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_indices`)
    }

    /**
     * Object details, including empty wire, cameras and other visual guides
     * @desc boolean, default False
     */
    public get show_extras(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extras`)
    }

    /**
     * Display face center
     * @desc boolean, default False
     */
    public get show_face_center(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_face_center`)
    }

    /**
     * Display face normals as lines
     * @desc boolean, default False
     */
    public get show_face_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_face_normals`)
    }

    /**
     * Show the Face Orientation Overlay
     * @desc boolean, default False
     */
    public get show_face_orientation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_face_orientation`)
    }

    /**
     * Highlight selected faces
     * @desc boolean, default True
     */
    public get show_faces(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_faces`)
    }

    /**
     * Show the ground plane grid
     * @desc boolean, default True
     */
    public get show_floor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_floor`)
    }

    /**
     * Display Freestyle edge marks, used with the Freestyle renderer
     * @desc boolean, default True
     */
    public get show_freestyle_edge_marks(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_freestyle_edge_marks`)
    }

    /**
     * Display Freestyle face marks, used with the Freestyle renderer
     * @desc boolean, default True
     */
    public get show_freestyle_face_marks(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_freestyle_face_marks`)
    }

    /**
     * Show HDRI preview spheres
     * @desc boolean, default False
     */
    public get show_look_dev(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_look_dev`)
    }

    /**
     * Show the Motion Paths Overlay
     * @desc boolean, default False
     */
    public get show_motion_paths(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_motion_paths`)
    }

    /**
     * Show object center dots
     * @desc boolean, default False
     */
    public get show_object_origins(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_origins`)
    }

    /**
     * Show the object origin center dot for all (selected and unselected) objects
     * @desc boolean, default False
     */
    public get show_object_origins_all(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_origins_all`)
    }

    /**
     * Use hidden wireframe display
     * @desc boolean, default False
     */
    public get show_occlude_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_occlude_wire`)
    }

    /**
     * Show the Onion Skinning Overlay
     * @desc boolean, default False
     */
    public get show_onion_skins(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_onion_skins`)
    }

    /**
     * Show grid in othographic side view
     * @desc boolean, default True
     */
    public get show_ortho_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_ortho_grid`)
    }

    /**
     * Show an outline highlight around selected objects
     * @desc boolean, default True
     */
    public get show_outline_selected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_outline_selected`)
    }

    /**
     * Display overlays like gizmos and outlines
     * @desc boolean, default False
     */
    public get show_overlays(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_overlays`)
    }

    /**
     * Use wireframe display in painting modes
     * @desc boolean, default False
     */
    public get show_paint_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_paint_wire`)
    }

    /**
     * Show dashed lines indicating parent or constraint relationships
     * @desc boolean, default False
     */
    public get show_relationship_lines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_relationship_lines`)
    }

    /**
     * Display vertex-per-face normals as lines
     * @desc boolean, default False
     */
    public get show_split_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_split_normals`)
    }

    /**
     * Display statistical information about the mesh
     * @desc boolean, default False
     */
    public get show_statvis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_statvis`)
    }

    /**
     * Display overlay text
     * @desc boolean, default False
     */
    public get show_text(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_text`)
    }

    /**
     * Display vertex normals as lines
     * @desc boolean, default False
     */
    public get show_vertex_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_vertex_normals`)
    }

    /**
     * Display weights in editmode
     * @desc boolean, default False
     */
    public get show_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_weight`)
    }

    /**
     * Show face edges wires
     * @desc boolean, default False
     */
    public get show_wireframes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_wireframes`)
    }

    /**
     * Show contour lines formed by points with the same interpolated weight
     * @desc boolean, default False
     */
    public get show_wpaint_contours(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_wpaint_contours`)
    }

    /**
     * Show the bone selection overlay
     * @desc boolean, default False
     */
    public get show_xray_bone(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_xray_bone`)
    }

    /**
     * Opacity of the texture paint mode stencil mask overlay
     * @desc float in [0, 1], default 1.0
     */
    public get texture_paint_mode_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_paint_mode_opacity`)
    }

    /**
     * Show edit lines when editing strokes
     * @desc boolean, default True
     */
    public get use_gpencil_edit_lines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_edit_lines`)
    }

    /**
     * Toggle fading of Grease Pencil layers except the active one
     * @desc boolean, default False
     */
    public get use_gpencil_fade_layers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_fade_layers`)
    }

    /**
     * Fade Grease Pencil Objects, except the active one
     * @desc boolean, default False
     */
    public get use_gpencil_fade_objects(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_fade_objects`)
    }

    /**
     * Display a grid over grease pencil paper
     * @desc boolean, default False
     */
    public get use_gpencil_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_grid`)
    }

    /**
     * Only show edit lines for additional frames
     * @desc boolean, default False
     */
    public get use_gpencil_multiedit_line_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_multiedit_line_only`)
    }

    /**
     * Show ghosts of the keyframes before and after the current frame
     * @desc boolean, default False
     */
    public get use_gpencil_onion_skin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_onion_skin`)
    }

    /**
     * Fade all viewport objects with a full color layer to improve visibility
     * @desc boolean, default False
     */
    public get use_gpencil_paper(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gpencil_paper`)
    }

    /**
     * Opacity for edit vertices
     * @desc float in [0, 1], default 1.0
     */
    public get vertex_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vertex_opacity`)
    }

    /**
     * Opacity of the texture paint mode stencil mask overlay
     * @desc float in [0, 1], default 1.0
     */
    public get vertex_paint_mode_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vertex_paint_mode_opacity`)
    }

    /**
     * Opacity of the weight paint mode overlay
     * @desc float in [0, 1], default 1.0
     */
    public get weight_paint_mode_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_paint_mode_opacity`)
    }

    /**
     * Adjust the angle threshold for displaying edges (1.0 for all)
     * @desc float in [0, 1], default 1.0
     */
    public get wireframe_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wireframe_threshold`)
    }

    /**
     * Opacity to use for bone selection
     * @desc float in [0, 1], default 0.5
     */
    public get xray_alpha_bone(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.xray_alpha_bone`)
    }

    /**
     * Opacity when rendering transparent wires
     * @desc float in [0, 1], default 0.0
     */
    public set backwire_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.backwire_opacity`, value)
    }

    /**
     * Fade layer opacity for Grease Pencil layers except the active one
     * @desc float in [0, 1], default 0.5
     */
    public set gpencil_fade_layer(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gpencil_fade_layer`, value)
    }

    /**
     * Canvas grid opacity
     * @desc float in [0.1, 1], default 0.9
     */
    public set gpencil_grid_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gpencil_grid_opacity`, value)
    }

    /**
     * Fade factor
     * @desc float in [0, 1], default 0.5
     */
    public set gpencil_paper_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gpencil_paper_opacity`, value)
    }

    /**
     * Number of grid lines to display in perspective view
     * @desc int in [0, 1024], default 16
     */
    public set grid_lines(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_lines`, value)
    }

    /**
     * Distance between 3D View grid lines
     * @desc float in [0, inf], default 1.0
     */
    public set grid_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.grid_scale`, value)
    }

    /**
     * Number of subdivisions between grid lines
     * @desc int in [1, 1024], default 10
     */
    public set grid_subdivisions(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_subdivisions`, value)
    }

    /**
     * Display size for normals in the 3D view
     * @desc float in [1e-05, 100000], default 0.02
     */
    public set normals_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.normals_length`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.75
     */
    public set sculpt_mode_mask_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sculpt_mode_mask_opacity`, value)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default True
     */
    public set show_annotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_annotation`, value)
    }

    /**
     * Show the X axis line
     * @desc boolean, default True
     */
    public set show_axis_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_axis_x`, value)
    }

    /**
     * Show the Y axis line
     * @desc boolean, default True
     */
    public set show_axis_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_axis_y`, value)
    }

    /**
     * Show the Z axis line
     * @desc boolean, default False
     */
    public set show_axis_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_axis_z`, value)
    }

    /**
     * Display bones (disable to show motion paths only)
     * @desc boolean, default False
     */
    public set show_bones(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_bones`, value)
    }

    /**
     * Display 3D Cursor Overlay
     * @desc boolean, default False
     */
    public set show_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cursor`, value)
    }

    /**
     * Display Bezier handles in editmode
     * @desc boolean, default True
     */
    public set show_curve_handles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_curve_handles`, value)
    }

    /**
     * Display 3D curve normals in editmode
     * @desc boolean, default True
     */
    public set show_curve_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_curve_normals`, value)
    }

    /**
     * Display weights created for the Bevel modifier
     * @desc boolean, default True
     */
    public set show_edge_bevel_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_edge_bevel_weight`, value)
    }

    /**
     * Display creases created for Subdivision Surface modifier
     * @desc boolean, default True
     */
    public set show_edge_crease(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_edge_crease`, value)
    }

    /**
     * Display UV unwrapping seams
     * @desc boolean, default True
     */
    public set show_edge_seams(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_edge_seams`, value)
    }

    /**
     * Display sharp edges, used with the Edge Split modifier
     * @desc boolean, default True
     */
    public set show_edge_sharp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_edge_sharp`, value)
    }

    /**
     * Highlight selected edges
     * @desc boolean, default True
     */
    public set show_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_edges`, value)
    }

    /**
     * Display selected edge angle, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public set show_extra_edge_angle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_edge_angle`, value)
    }

    /**
     * Display selected edge lengths, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public set show_extra_edge_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_edge_length`, value)
    }

    /**
     * Display the angles in the selected edges, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public set show_extra_face_angle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_face_angle`, value)
    }

    /**
     * Display the area of selected faces, using global values when set in the transform panel
     * @desc boolean, default False
     */
    public set show_extra_face_area(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_face_area`, value)
    }

    /**
     * Display the index numbers of selected vertices, edges, and faces
     * @desc boolean, default False
     */
    public set show_extra_indices(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_indices`, value)
    }

    /**
     * Object details, including empty wire, cameras and other visual guides
     * @desc boolean, default False
     */
    public set show_extras(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extras`, value)
    }

    /**
     * Display face center
     * @desc boolean, default False
     */
    public set show_face_center(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_face_center`, value)
    }

    /**
     * Display face normals as lines
     * @desc boolean, default False
     */
    public set show_face_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_face_normals`, value)
    }

    /**
     * Show the Face Orientation Overlay
     * @desc boolean, default False
     */
    public set show_face_orientation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_face_orientation`, value)
    }

    /**
     * Highlight selected faces
     * @desc boolean, default True
     */
    public set show_faces(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_faces`, value)
    }

    /**
     * Show the ground plane grid
     * @desc boolean, default True
     */
    public set show_floor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_floor`, value)
    }

    /**
     * Display Freestyle edge marks, used with the Freestyle renderer
     * @desc boolean, default True
     */
    public set show_freestyle_edge_marks(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_freestyle_edge_marks`, value)
    }

    /**
     * Display Freestyle face marks, used with the Freestyle renderer
     * @desc boolean, default True
     */
    public set show_freestyle_face_marks(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_freestyle_face_marks`, value)
    }

    /**
     * Show HDRI preview spheres
     * @desc boolean, default False
     */
    public set show_look_dev(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_look_dev`, value)
    }

    /**
     * Show the Motion Paths Overlay
     * @desc boolean, default False
     */
    public set show_motion_paths(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_motion_paths`, value)
    }

    /**
     * Show object center dots
     * @desc boolean, default False
     */
    public set show_object_origins(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_origins`, value)
    }

    /**
     * Show the object origin center dot for all (selected and unselected) objects
     * @desc boolean, default False
     */
    public set show_object_origins_all(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_origins_all`, value)
    }

    /**
     * Use hidden wireframe display
     * @desc boolean, default False
     */
    public set show_occlude_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_occlude_wire`, value)
    }

    /**
     * Show the Onion Skinning Overlay
     * @desc boolean, default False
     */
    public set show_onion_skins(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_onion_skins`, value)
    }

    /**
     * Show grid in othographic side view
     * @desc boolean, default True
     */
    public set show_ortho_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_ortho_grid`, value)
    }

    /**
     * Show an outline highlight around selected objects
     * @desc boolean, default True
     */
    public set show_outline_selected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_outline_selected`, value)
    }

    /**
     * Display overlays like gizmos and outlines
     * @desc boolean, default False
     */
    public set show_overlays(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_overlays`, value)
    }

    /**
     * Use wireframe display in painting modes
     * @desc boolean, default False
     */
    public set show_paint_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_paint_wire`, value)
    }

    /**
     * Show dashed lines indicating parent or constraint relationships
     * @desc boolean, default False
     */
    public set show_relationship_lines(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_relationship_lines`, value)
    }

    /**
     * Display vertex-per-face normals as lines
     * @desc boolean, default False
     */
    public set show_split_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_split_normals`, value)
    }

    /**
     * Display statistical information about the mesh
     * @desc boolean, default False
     */
    public set show_statvis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_statvis`, value)
    }

    /**
     * Display overlay text
     * @desc boolean, default False
     */
    public set show_text(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_text`, value)
    }

    /**
     * Display vertex normals as lines
     * @desc boolean, default False
     */
    public set show_vertex_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_vertex_normals`, value)
    }

    /**
     * Display weights in editmode
     * @desc boolean, default False
     */
    public set show_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_weight`, value)
    }

    /**
     * Show face edges wires
     * @desc boolean, default False
     */
    public set show_wireframes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_wireframes`, value)
    }

    /**
     * Show contour lines formed by points with the same interpolated weight
     * @desc boolean, default False
     */
    public set show_wpaint_contours(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_wpaint_contours`, value)
    }

    /**
     * Show the bone selection overlay
     * @desc boolean, default False
     */
    public set show_xray_bone(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_xray_bone`, value)
    }

    /**
     * Opacity of the texture paint mode stencil mask overlay
     * @desc float in [0, 1], default 1.0
     */
    public set texture_paint_mode_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_paint_mode_opacity`, value)
    }

    /**
     * Show edit lines when editing strokes
     * @desc boolean, default True
     */
    public set use_gpencil_edit_lines(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_edit_lines`, value)
    }

    /**
     * Toggle fading of Grease Pencil layers except the active one
     * @desc boolean, default False
     */
    public set use_gpencil_fade_layers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_fade_layers`, value)
    }

    /**
     * Fade Grease Pencil Objects, except the active one
     * @desc boolean, default False
     */
    public set use_gpencil_fade_objects(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_fade_objects`, value)
    }

    /**
     * Display a grid over grease pencil paper
     * @desc boolean, default False
     */
    public set use_gpencil_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_grid`, value)
    }

    /**
     * Only show edit lines for additional frames
     * @desc boolean, default False
     */
    public set use_gpencil_multiedit_line_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_multiedit_line_only`, value)
    }

    /**
     * Show ghosts of the keyframes before and after the current frame
     * @desc boolean, default False
     */
    public set use_gpencil_onion_skin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_onion_skin`, value)
    }

    /**
     * Fade all viewport objects with a full color layer to improve visibility
     * @desc boolean, default False
     */
    public set use_gpencil_paper(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gpencil_paper`, value)
    }

    /**
     * Opacity for edit vertices
     * @desc float in [0, 1], default 1.0
     */
    public set vertex_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vertex_opacity`, value)
    }

    /**
     * Opacity of the texture paint mode stencil mask overlay
     * @desc float in [0, 1], default 1.0
     */
    public set vertex_paint_mode_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vertex_paint_mode_opacity`, value)
    }

    /**
     * Opacity of the weight paint mode overlay
     * @desc float in [0, 1], default 1.0
     */
    public set weight_paint_mode_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_paint_mode_opacity`, value)
    }

    /**
     * Adjust the angle threshold for displaying edges (1.0 for all)
     * @desc float in [0, 1], default 1.0
     */
    public set wireframe_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wireframe_threshold`, value)
    }

    /**
     * Opacity to use for bone selection
     * @desc float in [0, 1], default 0.5
     */
    public set xray_alpha_bone(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.xray_alpha_bone`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
