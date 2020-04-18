import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { View3DOverlay } from './View3DOverlay'
import { RegionView3D } from './RegionView3D'
import { View3DShading } from './View3DShading'
import { BlenderObject } from './BlenderObject'

/**
 * SpaceView3D
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceView3D.html
 */
export class SpaceView3D {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get icon_from_show_object_viewport(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.icon_from_show_object_viewport`)
    }

    /**
     * Display an isolated sub-set of objects, apart from the scene visibility
     * @desc SpaceView3D, (readonly)
     */
    public get local_view(): SpaceView3D {
        return PythonInterop.getClass(this.interop, `${this.accessor}.local_view`, SpaceView3D)
    }

    /**
     * Settings for display of overlays in the 3D viewport
     * @desc View3DOverlay, (readonly, never None)
     */
    public get overlay(): View3DOverlay {
        return PythonInterop.getClass(this.interop, `${this.accessor}.overlay`, View3DOverlay)
    }

    /**
     * 3D region in this space, in case of quad view the camera region
     * @desc RegionView3D, (readonly)
     */
    public get region_3d(): RegionView3D {
        return PythonInterop.getClass(this.interop, `${this.accessor}.region_3d`, RegionView3D)
    }

    /**
     * 3D regions (the third one defines quad view settings, the fourth one is same as ‘region_3d’)
     * @desc bpy_prop_collection of RegionView3D, (readonly)
     */
    public get region_quadviews(): BlenderCollection<RegionView3D> & Indexable<RegionView3D> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.region_quadviews`, RegionView3D)
    }

    /**
     * Settings for shading in the 3D viewport
     * @desc View3DShading, (readonly, never None)
     */
    public get shading(): View3DShading {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shading`, View3DShading)
    }

    /**
     * Current stereo eye being drawn
     * @desc enum in ['LEFT_EYE', 'RIGHT_EYE'], default 'LEFT_EYE', (readonly)
     */
    public get stereo_3d_eye(): 'LEFT_EYE' | 'RIGHT_EYE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stereo_3d_eye`)
    }

    /**
     * Active camera used in this view (when unlocked from the scene’s active camera)
     * @desc Object
     */
    public get camera(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera`, BlenderObject)
    }

    /**
     * 3D View far clipping distance
     * @desc float in [1e-06, inf], default 1000.0
     */
    public get clip_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_end`)
    }

    /**
     * 3D View near clipping distance (perspective view only)
     * @desc float in [1e-06, inf], default 0.01
     */
    public get clip_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_start`)
    }

    /**
     * Viewport lens angle
     * @desc float in [1, 250], default 50.0
     */
    public get lens(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lens`)
    }

    /**
     * 3D View center is locked to this bone’s position
     * @desc string, default '', (never None)
     */
    public get lock_bone(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.lock_bone`)
    }

    /**
     * Enable view navigation within the camera view
     * @desc boolean, default False
     */
    public get lock_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_camera`)
    }

    /**
     * 3D View center is locked to the cursor’s position
     * @desc boolean, default False
     */
    public get lock_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_cursor`)
    }

    /**
     * 3D View center is locked to this object’s position
     * @desc Object
     */
    public get lock_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.lock_object`, BlenderObject)
    }

    /**
     * Maximum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get render_border_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.render_border_max_x`)
    }

    /**
     * Maximum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get render_border_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.render_border_max_y`)
    }

    /**
     * Minimum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get render_border_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.render_border_min_x`)
    }

    /**
     * Minimum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get render_border_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.render_border_min_y`)
    }

    /**
     * Show names for reconstructed tracks objects
     * @desc boolean, default False
     */
    public get show_bundle_names(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_bundle_names`)
    }

    /**
     * Show reconstructed camera path
     * @desc boolean, default False
     */
    public get show_camera_path(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_camera_path`)
    }

    /**
     * Show gizmos of all types
     * @desc boolean, default False
     */
    public get show_gizmo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo`)
    }

    /**
     * Gizmo to adjust camera focus distance (depends on limits display)
     * @desc boolean, default False
     */
    public get show_gizmo_camera_dof_distance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_camera_dof_distance`)
    }

    /**
     * Gizmo to adjust camera lens & ortho size
     * @desc boolean, default False
     */
    public get show_gizmo_camera_lens(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_camera_lens`)
    }

    /**
     * Context sensitive gizmos for the active item
     * @desc boolean, default False
     */
    public get show_gizmo_context(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_context`)
    }

    /**
     * Gizmo to adjust the force field
     * @desc boolean, default False
     */
    public get show_gizmo_empty_force_field(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_empty_force_field`)
    }

    /**
     * Gizmo to adjust image size and position
     * @desc boolean, default False
     */
    public get show_gizmo_empty_image(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_empty_image`)
    }

    /**
     * Gizmo to adjust the direction of the light
     * @desc boolean, default False
     */
    public get show_gizmo_light_look_at(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_light_look_at`)
    }

    /**
     * Gizmo to adjust spot and area size
     * @desc boolean, default False
     */
    public get show_gizmo_light_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_light_size`)
    }

    /**
     * Viewport navigation gizmo
     * @desc boolean, default False
     */
    public get show_gizmo_navigate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_navigate`)
    }

    /**
     * Gizmo to adjust rotation
     * @desc boolean, default False
     */
    public get show_gizmo_object_rotate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_object_rotate`)
    }

    /**
     * Gizmo to adjust scale
     * @desc boolean, default False
     */
    public get show_gizmo_object_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_object_scale`)
    }

    /**
     * Gizmo to adjust location
     * @desc boolean, default False
     */
    public get show_gizmo_object_translate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_object_translate`)
    }

    /**
     * Active tool gizmo
     * @desc boolean, default False
     */
    public get show_gizmo_tool(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gizmo_tool`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_armature(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_armature`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_camera`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_curve`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_empty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_empty`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_font(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_font`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_grease_pencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_grease_pencil`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_lattice(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_lattice`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_light`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_light_probe(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_light_probe`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_mesh`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_meta(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_meta`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_speaker(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_speaker`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_select_surf(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_select_surf`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_armature(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_armature`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_camera`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_curve`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_empty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_empty`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_font(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_font`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_grease_pencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_grease_pencil`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_lattice(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_lattice`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_light`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_light_probe(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_light_probe`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_mesh`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_meta(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_meta`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_speaker(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_speaker`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_object_viewport_surf(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_object_viewport_surf`)
    }

    /**
     * Display reconstruction data from active movie clip
     * @desc boolean, default True
     */
    public get show_reconstruction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_reconstruction`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_hud(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_hud`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_tool_header(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_tool_header`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_toolbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_toolbar`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Show the left and right cameras
     * @desc boolean, default False
     */
    public get show_stereo_3d_cameras(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stereo_3d_cameras`)
    }

    /**
     * Show the stereo 3d convergence plane
     * @desc boolean, default True
     */
    public get show_stereo_3d_convergence_plane(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stereo_3d_convergence_plane`)
    }

    /**
     * Show the stereo 3d frustum volume
     * @desc boolean, default False
     */
    public get show_stereo_3d_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stereo_3d_volume`)
    }

    /**
     * 
     * @desc enum in ['LEFT', 'RIGHT', 'S3D'], default 'S3D'
     */
    public get stereo_3d_camera(): 'LEFT' | 'RIGHT' | 'S3D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stereo_3d_camera`)
    }

    /**
     * Opacity (alpha) of the convergence plane
     * @desc float in [0, 1], default 0.15
     */
    public get stereo_3d_convergence_plane_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stereo_3d_convergence_plane_alpha`)
    }

    /**
     * Opacity (alpha) of the cameras’ frustum volume
     * @desc float in [0, 1], default 0.05
     */
    public get stereo_3d_volume_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stereo_3d_volume_alpha`)
    }

    /**
     * Display size of tracks from reconstructed data
     * @desc float in [0, inf], default 0.2
     */
    public get tracks_display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tracks_display_size`)
    }

    /**
     * Viewport display style for tracks
     * @desc enum in ['PLAIN_AXES', 'ARROWS', 'SINGLE_ARROW', 'CIRCLE', 'CUBE', 'SPHERE', 'CONE'], default 'PLAIN_AXES'
     */
    public get tracks_display_type(): 'PLAIN_AXES' | 'ARROWS' | 'SINGLE_ARROW' | 'CIRCLE' | 'CUBE' | 'SPHERE' | 'CONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tracks_display_type`)
    }

    /**
     * Use a local camera in this view, rather than scene’s active camera
     * @desc boolean, default True
     */
    public get use_local_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_local_camera`)
    }

    /**
     * Display a different set of collections in this viewport
     * @desc boolean, default False
     */
    public get use_local_collections(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_local_collections`)
    }

    /**
     * Use a region within the frame size for rendered viewport(when not viewing through the camera)
     * @desc boolean, default False
     */
    public get use_render_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_render_border`)
    }

    /**
     * Active camera used in this view (when unlocked from the scene’s active camera)
     * @desc Object
     */
    public set camera(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * 3D View far clipping distance
     * @desc float in [1e-06, inf], default 1000.0
     */
    public set clip_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_end`, value)
    }

    /**
     * 3D View near clipping distance (perspective view only)
     * @desc float in [1e-06, inf], default 0.01
     */
    public set clip_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_start`, value)
    }

    /**
     * Viewport lens angle
     * @desc float in [1, 250], default 50.0
     */
    public set lens(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lens`, value)
    }

    /**
     * 3D View center is locked to this bone’s position
     * @desc string, default '', (never None)
     */
    public set lock_bone(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.lock_bone`, value)
    }

    /**
     * Enable view navigation within the camera view
     * @desc boolean, default False
     */
    public set lock_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_camera`, value)
    }

    /**
     * 3D View center is locked to the cursor’s position
     * @desc boolean, default False
     */
    public set lock_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_cursor`, value)
    }

    /**
     * 3D View center is locked to this object’s position
     * @desc Object
     */
    public set lock_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.lock_object`, value)
    }

    /**
     * Maximum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set render_border_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.render_border_max_x`, value)
    }

    /**
     * Maximum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set render_border_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.render_border_max_y`, value)
    }

    /**
     * Minimum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set render_border_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.render_border_min_x`, value)
    }

    /**
     * Minimum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set render_border_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.render_border_min_y`, value)
    }

    /**
     * Show names for reconstructed tracks objects
     * @desc boolean, default False
     */
    public set show_bundle_names(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_bundle_names`, value)
    }

    /**
     * Show reconstructed camera path
     * @desc boolean, default False
     */
    public set show_camera_path(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_camera_path`, value)
    }

    /**
     * Show gizmos of all types
     * @desc boolean, default False
     */
    public set show_gizmo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo`, value)
    }

    /**
     * Gizmo to adjust camera focus distance (depends on limits display)
     * @desc boolean, default False
     */
    public set show_gizmo_camera_dof_distance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_camera_dof_distance`, value)
    }

    /**
     * Gizmo to adjust camera lens & ortho size
     * @desc boolean, default False
     */
    public set show_gizmo_camera_lens(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_camera_lens`, value)
    }

    /**
     * Context sensitive gizmos for the active item
     * @desc boolean, default False
     */
    public set show_gizmo_context(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_context`, value)
    }

    /**
     * Gizmo to adjust the force field
     * @desc boolean, default False
     */
    public set show_gizmo_empty_force_field(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_empty_force_field`, value)
    }

    /**
     * Gizmo to adjust image size and position
     * @desc boolean, default False
     */
    public set show_gizmo_empty_image(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_empty_image`, value)
    }

    /**
     * Gizmo to adjust the direction of the light
     * @desc boolean, default False
     */
    public set show_gizmo_light_look_at(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_light_look_at`, value)
    }

    /**
     * Gizmo to adjust spot and area size
     * @desc boolean, default False
     */
    public set show_gizmo_light_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_light_size`, value)
    }

    /**
     * Viewport navigation gizmo
     * @desc boolean, default False
     */
    public set show_gizmo_navigate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_navigate`, value)
    }

    /**
     * Gizmo to adjust rotation
     * @desc boolean, default False
     */
    public set show_gizmo_object_rotate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_object_rotate`, value)
    }

    /**
     * Gizmo to adjust scale
     * @desc boolean, default False
     */
    public set show_gizmo_object_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_object_scale`, value)
    }

    /**
     * Gizmo to adjust location
     * @desc boolean, default False
     */
    public set show_gizmo_object_translate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_object_translate`, value)
    }

    /**
     * Active tool gizmo
     * @desc boolean, default False
     */
    public set show_gizmo_tool(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gizmo_tool`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_armature(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_armature`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_camera`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_curve`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_empty(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_empty`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_font(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_font`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_grease_pencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_grease_pencil`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_lattice(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_lattice`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_light`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_light_probe(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_light_probe`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_mesh`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_meta(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_meta`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_speaker(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_speaker`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_select_surf(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_select_surf`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_armature(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_armature`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_camera`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_curve`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_empty(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_empty`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_font(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_font`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_grease_pencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_grease_pencil`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_lattice(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_lattice`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_light`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_light_probe(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_light_probe`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_mesh`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_meta(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_meta`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_speaker(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_speaker`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_object_viewport_surf(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_object_viewport_surf`, value)
    }

    /**
     * Display reconstruction data from active movie clip
     * @desc boolean, default True
     */
    public set show_reconstruction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_reconstruction`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_hud(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_hud`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_tool_header(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_tool_header`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_toolbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_toolbar`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Show the left and right cameras
     * @desc boolean, default False
     */
    public set show_stereo_3d_cameras(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stereo_3d_cameras`, value)
    }

    /**
     * Show the stereo 3d convergence plane
     * @desc boolean, default True
     */
    public set show_stereo_3d_convergence_plane(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stereo_3d_convergence_plane`, value)
    }

    /**
     * Show the stereo 3d frustum volume
     * @desc boolean, default False
     */
    public set show_stereo_3d_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stereo_3d_volume`, value)
    }

    /**
     * 
     * @desc enum in ['LEFT', 'RIGHT', 'S3D'], default 'S3D'
     */
    public set stereo_3d_camera(value: 'LEFT' | 'RIGHT' | 'S3D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stereo_3d_camera`, value)
    }

    /**
     * Opacity (alpha) of the convergence plane
     * @desc float in [0, 1], default 0.15
     */
    public set stereo_3d_convergence_plane_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stereo_3d_convergence_plane_alpha`, value)
    }

    /**
     * Opacity (alpha) of the cameras’ frustum volume
     * @desc float in [0, 1], default 0.05
     */
    public set stereo_3d_volume_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stereo_3d_volume_alpha`, value)
    }

    /**
     * Display size of tracks from reconstructed data
     * @desc float in [0, inf], default 0.2
     */
    public set tracks_display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tracks_display_size`, value)
    }

    /**
     * Viewport display style for tracks
     * @desc enum in ['PLAIN_AXES', 'ARROWS', 'SINGLE_ARROW', 'CIRCLE', 'CUBE', 'SPHERE', 'CONE'], default 'PLAIN_AXES'
     */
    public set tracks_display_type(value: 'PLAIN_AXES' | 'ARROWS' | 'SINGLE_ARROW' | 'CIRCLE' | 'CUBE' | 'SPHERE' | 'CONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tracks_display_type`, value)
    }

    /**
     * Use a local camera in this view, rather than scene’s active camera
     * @desc boolean, default True
     */
    public set use_local_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_local_camera`, value)
    }

    /**
     * Display a different set of collections in this viewport
     * @desc boolean, default False
     */
    public set use_local_collections(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_local_collections`, value)
    }

    /**
     * Use a region within the frame size for rendered viewport(when not viewing through the camera)
     * @desc boolean, default False
     */
    public set use_render_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_render_border`, value)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
