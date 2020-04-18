import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BakeSettings } from './BakeSettings'
import { FFmpegSettings } from './FFmpegSettings'
import { ImageFormatSettings } from './ImageFormatSettings'
import { CurveMapping } from './CurveMapping'
import { SceneRenderView } from './SceneRenderView'
import { RenderViews } from './RenderViews'

/**
 * RenderSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderSettings.html
 */
export class RenderSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc BakeSettings, (readonly, never None)
     */
    public get bake(): BakeSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bake`, BakeSettings)
    }

    /**
     * FFmpeg related settings for the scene
     * @desc FFmpegSettings, (readonly)
     */
    public get ffmpeg(): FFmpegSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.ffmpeg`, FFmpegSettings)
    }

    /**
     * The file extension used for saving renders
     * @desc string, default '', (readonly, never None)
     */
    public get file_extension(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.file_extension`)
    }

    /**
     * More than one rendering engine is available
     * @desc boolean, default False, (readonly)
     */
    public get has_multiple_engines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_multiple_engines`)
    }

    /**
     * 
     * @desc ImageFormatSettings, (readonly, never None)
     */
    public get image_settings(): ImageFormatSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_settings`, ImageFormatSettings)
    }

    /**
     * When true the format is a movie
     * @desc boolean, default False, (readonly)
     */
    public get is_movie_format(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_movie_format`)
    }

    /**
     * Curve defining the shutter’s openness over time
     * @desc CurveMapping, (readonly)
     */
    public get motion_blur_shutter_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.motion_blur_shutter_curve`, CurveMapping)
    }

    /**
     * 
     * @desc bpy_prop_collection of SceneRenderView, (readonly)
     */
    public get stereo_views(): BlenderCollection<SceneRenderView> & Indexable<SceneRenderView> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.stereo_views`, SceneRenderView)
    }

    /**
     * Active render engine supports spherical stereo rendering
     * @desc boolean, default False, (readonly)
     */
    public get use_spherical_stereo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spherical_stereo`)
    }

    /**
     * 
     * @desc RenderViews bpy_prop_collection of SceneRenderView, (readonly)
     */
    public get views(): BlenderCollection<SceneRenderView> & Indexable<SceneRenderView> & RenderViews {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.views`, RenderViews, SceneRenderView)
    }

    /**
     * Bias towards faces further away from the object (in blender units)
     * @desc float in [0, 1000], default 0.001
     */
    public get bake_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bake_bias`)
    }

    /**
     * Extends the baked result as a post process filter
     * @desc int in [0, 64], default 16
     */
    public get bake_margin(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bake_margin`)
    }

    /**
     * Number of samples used for ambient occlusion baking from multires
     * @desc int in [64, 1024], default 256
     */
    public get bake_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bake_samples`)
    }

    /**
     * Choose shading information to bake into the image
     * @desc enum in ['NORMALS', 'DISPLACEMENT'], default 'NORMALS'
     */
    public get bake_type(): 'NORMALS' | 'DISPLACEMENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bake_type`)
    }

    /**
     * Instead of automatically normalizing to 0..1, apply a user scale to the derivative map
     * @desc float in [0, 1000], default 0.0
     */
    public get bake_user_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bake_user_scale`)
    }

    /**
     * Maximum X value for the render region
     * @desc float in [0, 1], default 1.0
     */
    public get border_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.border_max_x`)
    }

    /**
     * Maximum Y value for the render region
     * @desc float in [0, 1], default 1.0
     */
    public get border_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.border_max_y`)
    }

    /**
     * Minimum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get border_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.border_min_x`)
    }

    /**
     * Minimum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public get border_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.border_min_y`)
    }

    /**
     * Amount of dithering noise added to the rendered image to break up banding
     * @desc float in [0, 2], default 1.0
     */
    public get dither_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dither_intensity`)
    }

    /**
     * Engine to use for rendering
     * @desc enum in ['BLENDER_EEVEE'], default 'BLENDER_EEVEE'
     */
    public get engine(): 'BLENDER_EEVEE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.engine`)
    }

    /**
     * Directory/name to save animations, # characters defines the position and length of frame numbers
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * World background is transparent, for compositing the render over another background
     * @desc boolean, default False
     */
    public get film_transparent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.film_transparent`)
    }

    /**
     * Width over which the reconstruction filter combines samples
     * @desc float in [0, 500], default 1.5
     */
    public get filter_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.filter_size`)
    }

    /**
     * Framerate, expressed in frames per second
     * @desc int in [1, 32767], default 24
     */
    public get fps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fps`)
    }

    /**
     * Framerate base
     * @desc float in [1e-05, 1e+06], default 1.0
     */
    public get fps_base(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fps_base`)
    }

    /**
     * How many frames the Map Old will last
     * @desc int in [1, 900], default 100
     */
    public get frame_map_new(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_map_new`)
    }

    /**
     * Old mapping value in frames
     * @desc int in [1, 900], default 100
     */
    public get frame_map_old(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_map_old`)
    }

    /**
     * Additional subdivision along the hair
     * @desc int in [0, 3], default 0
     */
    public get hair_subdiv(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.hair_subdiv`)
    }

    /**
     * Hair shape type
     * @desc enum in ['STRAND', 'STRIP'], default 'STRAND'
     */
    public get hair_type(): 'STRAND' | 'STRIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.hair_type`)
    }

    /**
     * Line thickness in pixels
     * @desc float in [0, 10000], default 1.0
     */
    public get line_thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.line_thickness`)
    }

    /**
     * Line thickness mode for Freestyle line drawing
     * @desc enum in ['ABSOLUTE', 'RELATIVE'], default 'ABSOLUTE'
     */
    public get line_thickness_mode(): 'ABSOLUTE' | 'RELATIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.line_thickness_mode`)
    }

    /**
     * Time taken in frames between shutter open and close
     * @desc float in [0, inf], default 0.5
     */
    public get motion_blur_shutter(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motion_blur_shutter`)
    }

    /**
     * Horizontal aspect ratio - for anamorphic or non-square pixel output
     * @desc float in [1, 200], default 1.0
     */
    public get pixel_aspect_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_aspect_x`)
    }

    /**
     * Vertical aspect ratio - for anamorphic or non-square pixel output
     * @desc float in [1, 200], default 1.0
     */
    public get pixel_aspect_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_aspect_y`)
    }

    /**
     * Pixel size for viewport rendering
     * @desc enum in ['AUTO', '1', '2', '4', '8'], default 'AUTO'
     */
    public get preview_pixel_size(): 'AUTO' | '1' | '2' | '4' | '8' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.preview_pixel_size`)
    }

    /**
     * Resolution to start rendering preview at, progressively increasing it to the full viewport size
     * @desc int in [8, 16384], default 64
     */
    public get preview_start_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.preview_start_resolution`)
    }

    /**
     * Percentage scale for render resolution
     * @desc int in [1, 32767], default 100
     */
    public get resolution_percentage(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_percentage`)
    }

    /**
     * Number of horizontal pixels in the rendered image
     * @desc int in [4, 65536], default 1920
     */
    public get resolution_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_x`)
    }

    /**
     * Number of vertical pixels in the rendered image
     * @desc int in [4, 65536], default 1080
     */
    public get resolution_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_y`)
    }

    /**
     * Method to draw in the sequencer view
     * @desc enum in ['WIREFRAME', 'SOLID', 'MATERIAL', 'RENDERED'], default 'SOLID'
     */
    public get sequencer_gl_preview(): 'WIREFRAME' | 'SOLID' | 'MATERIAL' | 'RENDERED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sequencer_gl_preview`)
    }

    /**
     * Global child particles percentage
     * @desc float in [0, 1], default 1.0
     */
    public get simplify_child_particles(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.simplify_child_particles`)
    }

    /**
     * Global child particles percentage during rendering
     * @desc float in [0, 1], default 0.0
     */
    public get simplify_child_particles_render(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.simplify_child_particles_render`)
    }

    /**
     * Simplify Grease Pencil drawing
     * @desc boolean, default False
     */
    public get simplify_gpencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil`)
    }

    /**
     * Display blend layers
     * @desc boolean, default False
     */
    public get simplify_gpencil_blend(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_blend`)
    }

    /**
     * Simplify Grease Pencil only during animation playback
     * @desc boolean, default False
     */
    public get simplify_gpencil_onplay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_onplay`)
    }

    /**
     * Display external lines of fill strokes
     * @desc boolean, default False
     */
    public get simplify_gpencil_remove_lines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_remove_lines`)
    }

    /**
     * Display Shader FX
     * @desc boolean, default False
     */
    public get simplify_gpencil_shader_fx(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_shader_fx`)
    }

    /**
     * Display layer tint
     * @desc boolean, default False
     */
    public get simplify_gpencil_tint(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_tint`)
    }

    /**
     * Display fill strokes in the viewport
     * @desc boolean, default False
     */
    public get simplify_gpencil_view_fill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_view_fill`)
    }

    /**
     * Display modifiers in the viewport
     * @desc boolean, default False
     */
    public get simplify_gpencil_view_modifier(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.simplify_gpencil_view_modifier`)
    }

    /**
     * Global maximum subdivision level
     * @desc int in [0, 32767], default 6
     */
    public get simplify_subdivision(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.simplify_subdivision`)
    }

    /**
     * Global maximum subdivision level during rendering
     * @desc int in [0, 32767], default 0
     */
    public get simplify_subdivision_render(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.simplify_subdivision_render`)
    }

    /**
     * Color to use behind stamp text
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.25)
     */
    public get stamp_background(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.stamp_background`, 'number', 4)
    }

    /**
     * Size of the font used when rendering stamp text
     * @desc int in [8, 64], default 12
     */
    public get stamp_font_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.stamp_font_size`)
    }

    /**
     * Color to use for stamp text
     * @desc float array of 4 items in [0, 1], default (0.8, 0.8, 0.8, 1.0)
     */
    public get stamp_foreground(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.stamp_foreground`, 'number', 4)
    }

    /**
     * Custom text to appear in the stamp note
     * @desc string, default '', (never None)
     */
    public get stamp_note_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.stamp_note_text`)
    }

    /**
     * Number of CPU threads to use simultaneously while rendering (for multi-core/CPU systems)
     * @desc int in [1, 1024], default 1
     */
    public get threads(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.threads`)
    }

    /**
     * Determine the amount of render threads used
     * @desc enum in ['AUTO', 'FIXED'], default 'AUTO'
     */
    public get threads_mode(): 'AUTO' | 'FIXED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.threads_mode`)
    }

    /**
     * Horizontal tile size to use while rendering
     * @desc int in [8, 65536], default 256
     */
    public get tile_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tile_x`)
    }

    /**
     * Vertical tile size to use while rendering
     * @desc int in [8, 65536], default 256
     */
    public get tile_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tile_y`)
    }

    /**
     * Clear Images before baking
     * @desc boolean, default True
     */
    public get use_bake_clear(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bake_clear`)
    }

    /**
     * Calculate heights against unsubdivided low resolution mesh
     * @desc boolean, default False
     */
    public get use_bake_lores_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bake_lores_mesh`)
    }

    /**
     * Bake directly from multires object
     * @desc boolean, default False
     */
    public get use_bake_multires(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bake_multires`)
    }

    /**
     * Bake shading on the surface of selected objects to the active object
     * @desc boolean, default False
     */
    public get use_bake_selected_to_active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bake_selected_to_active`)
    }

    /**
     * Use a user scale for the derivative map
     * @desc boolean, default False
     */
    public get use_bake_user_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bake_user_scale`)
    }

    /**
     * Render a user-defined render region, within the frame size
     * @desc boolean, default False
     */
    public get use_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_border`)
    }

    /**
     * Process the render result through the compositing pipeline, if compositing nodes are enabled
     * @desc boolean, default True
     */
    public get use_compositing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_compositing`)
    }

    /**
     * Crop the rendered frame to the defined render region size
     * @desc boolean, default False
     */
    public get use_crop_to_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_crop_to_border`)
    }

    /**
     * Add the file format extensions to the rendered file name (eg: filename + .jpg)
     * @desc boolean, default True
     */
    public get use_file_extension(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_file_extension`)
    }

    /**
     * Draw stylized strokes using Freestyle
     * @desc boolean, default False
     */
    public get use_freestyle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_freestyle`)
    }

    /**
     * Save for every anti-aliasing sample the entire RenderLayer results (this solves anti-aliasing issues with compositing)
     * @desc boolean, default False
     */
    public get use_full_sample(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_full_sample`)
    }

    /**
     * Lock interface during rendering in favor of giving more memory to the renderer
     * @desc boolean, default False
     */
    public get use_lock_interface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_lock_interface`)
    }

    /**
     * Use multi-sampled 3D scene motion blur
     * @desc boolean, default False
     */
    public get use_motion_blur(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motion_blur`)
    }

    /**
     * Use multiple views in the scene
     * @desc boolean, default False
     */
    public get use_multiview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiview`)
    }

    /**
     * Overwrite existing files while rendering
     * @desc boolean, default False
     */
    public get use_overwrite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overwrite`)
    }

    /**
     * Keep render data around for faster re-renders
     * @desc boolean, default False
     */
    public get use_persistent_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_persistent_data`)
    }

    /**
     * Create empty placeholder files while rendering frames (similar to Unix ‘touch’)
     * @desc boolean, default False
     */
    public get use_placeholder(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_placeholder`)
    }

    /**
     * Save render cache to EXR files (useful for heavy compositing, Note: affects indirectly rendered scenes)
     * @desc boolean, default False
     */
    public get use_render_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_render_cache`)
    }

    /**
     * Save tiles for all RenderLayers and SceneNodes to files in the temp directory (saves memory, required for Full Sample)
     * @desc boolean, default False
     */
    public get use_save_buffers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_save_buffers`)
    }

    /**
     * Process the render (and composited) result through the video sequence editor pipeline, if sequencer strips exist
     * @desc boolean, default True
     */
    public get use_sequencer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sequencer`)
    }

    /**
     * Use workbench render settings from the sequencer scene, instead of each individual scene used in the strip
     * @desc boolean, default False
     */
    public get use_sequencer_override_scene_strip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sequencer_override_scene_strip`)
    }

    /**
     * Enable simplification of scene for quicker preview renders
     * @desc boolean, default False
     */
    public get use_simplify(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_simplify`)
    }

    /**
     * Display high-resolution smoke in the viewport
     * @desc boolean, default False
     */
    public get use_simplify_smoke_highres(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_simplify_smoke_highres`)
    }

    /**
     * Only render the active layer. Only affects rendering from the interface, ignored for rendering from command line
     * @desc boolean, default False
     */
    public get use_single_layer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_single_layer`)
    }

    /**
     * Render the stamp info text in the rendered image
     * @desc boolean, default False
     */
    public get use_stamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp`)
    }

    /**
     * Include the name of the active camera in image metadata
     * @desc boolean, default True
     */
    public get use_stamp_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_camera`)
    }

    /**
     * Include the current date in image/video metadata
     * @desc boolean, default True
     */
    public get use_stamp_date(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_date`)
    }

    /**
     * Include the .blend filename in image/video metadata
     * @desc boolean, default True
     */
    public get use_stamp_filename(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_filename`)
    }

    /**
     * Include the frame number in image metadata
     * @desc boolean, default True
     */
    public get use_stamp_frame(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_frame`)
    }

    /**
     * Include the rendered frame range in image/video metadata
     * @desc boolean, default False
     */
    public get use_stamp_frame_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_frame_range`)
    }

    /**
     * Include the hostname of the machine that rendered the frame
     * @desc boolean, default False
     */
    public get use_stamp_hostname(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_hostname`)
    }

    /**
     * Display stamp labels (“Camera” in front of camera name, etc.)
     * @desc boolean, default False
     */
    public get use_stamp_labels(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_labels`)
    }

    /**
     * Include the active camera’s lens in image metadata
     * @desc boolean, default False
     */
    public get use_stamp_lens(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_lens`)
    }

    /**
     * Include the name of the last marker in image metadata
     * @desc boolean, default False
     */
    public get use_stamp_marker(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_marker`)
    }

    /**
     * Include the peak memory usage in image metadata
     * @desc boolean, default True
     */
    public get use_stamp_memory(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_memory`)
    }

    /**
     * Include a custom note in image/video metadata
     * @desc boolean, default False
     */
    public get use_stamp_note(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_note`)
    }

    /**
     * Include the render time in image metadata
     * @desc boolean, default True
     */
    public get use_stamp_render_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_render_time`)
    }

    /**
     * Include the name of the active scene in image/video metadata
     * @desc boolean, default True
     */
    public get use_stamp_scene(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_scene`)
    }

    /**
     * Include the name of the foreground sequence strip in image metadata
     * @desc boolean, default False
     */
    public get use_stamp_sequencer_strip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_sequencer_strip`)
    }

    /**
     * Use metadata from the strips in the sequencer
     * @desc boolean, default False
     */
    public get use_stamp_strip_meta(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_strip_meta`)
    }

    /**
     * Include the rendered frame timecode as HH:MM:SS.FF in image metadata
     * @desc boolean, default True
     */
    public get use_stamp_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stamp_time`)
    }

    /**
     * 
     * @desc enum in ['STEREO_3D', 'MULTIVIEW'], default 'STEREO_3D'
     */
    public get views_format(): 'STEREO_3D' | 'MULTIVIEW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.views_format`)
    }

    /**
     * Bias towards faces further away from the object (in blender units)
     * @desc float in [0, 1000], default 0.001
     */
    public set bake_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bake_bias`, value)
    }

    /**
     * Extends the baked result as a post process filter
     * @desc int in [0, 64], default 16
     */
    public set bake_margin(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bake_margin`, value)
    }

    /**
     * Number of samples used for ambient occlusion baking from multires
     * @desc int in [64, 1024], default 256
     */
    public set bake_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bake_samples`, value)
    }

    /**
     * Choose shading information to bake into the image
     * @desc enum in ['NORMALS', 'DISPLACEMENT'], default 'NORMALS'
     */
    public set bake_type(value: 'NORMALS' | 'DISPLACEMENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bake_type`, value)
    }

    /**
     * Instead of automatically normalizing to 0..1, apply a user scale to the derivative map
     * @desc float in [0, 1000], default 0.0
     */
    public set bake_user_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bake_user_scale`, value)
    }

    /**
     * Maximum X value for the render region
     * @desc float in [0, 1], default 1.0
     */
    public set border_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.border_max_x`, value)
    }

    /**
     * Maximum Y value for the render region
     * @desc float in [0, 1], default 1.0
     */
    public set border_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.border_max_y`, value)
    }

    /**
     * Minimum X value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set border_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.border_min_x`, value)
    }

    /**
     * Minimum Y value for the render region
     * @desc float in [0, 1], default 0.0
     */
    public set border_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.border_min_y`, value)
    }

    /**
     * Amount of dithering noise added to the rendered image to break up banding
     * @desc float in [0, 2], default 1.0
     */
    public set dither_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dither_intensity`, value)
    }

    /**
     * Engine to use for rendering
     * @desc enum in ['BLENDER_EEVEE'], default 'BLENDER_EEVEE'
     */
    public set engine(value: 'BLENDER_EEVEE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.engine`, value)
    }

    /**
     * Directory/name to save animations, # characters defines the position and length of frame numbers
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * World background is transparent, for compositing the render over another background
     * @desc boolean, default False
     */
    public set film_transparent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.film_transparent`, value)
    }

    /**
     * Width over which the reconstruction filter combines samples
     * @desc float in [0, 500], default 1.5
     */
    public set filter_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.filter_size`, value)
    }

    /**
     * Framerate, expressed in frames per second
     * @desc int in [1, 32767], default 24
     */
    public set fps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fps`, value)
    }

    /**
     * Framerate base
     * @desc float in [1e-05, 1e+06], default 1.0
     */
    public set fps_base(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fps_base`, value)
    }

    /**
     * How many frames the Map Old will last
     * @desc int in [1, 900], default 100
     */
    public set frame_map_new(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_map_new`, value)
    }

    /**
     * Old mapping value in frames
     * @desc int in [1, 900], default 100
     */
    public set frame_map_old(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_map_old`, value)
    }

    /**
     * Additional subdivision along the hair
     * @desc int in [0, 3], default 0
     */
    public set hair_subdiv(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.hair_subdiv`, value)
    }

    /**
     * Hair shape type
     * @desc enum in ['STRAND', 'STRIP'], default 'STRAND'
     */
    public set hair_type(value: 'STRAND' | 'STRIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.hair_type`, value)
    }

    /**
     * Line thickness in pixels
     * @desc float in [0, 10000], default 1.0
     */
    public set line_thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.line_thickness`, value)
    }

    /**
     * Line thickness mode for Freestyle line drawing
     * @desc enum in ['ABSOLUTE', 'RELATIVE'], default 'ABSOLUTE'
     */
    public set line_thickness_mode(value: 'ABSOLUTE' | 'RELATIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.line_thickness_mode`, value)
    }

    /**
     * Time taken in frames between shutter open and close
     * @desc float in [0, inf], default 0.5
     */
    public set motion_blur_shutter(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motion_blur_shutter`, value)
    }

    /**
     * Horizontal aspect ratio - for anamorphic or non-square pixel output
     * @desc float in [1, 200], default 1.0
     */
    public set pixel_aspect_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixel_aspect_x`, value)
    }

    /**
     * Vertical aspect ratio - for anamorphic or non-square pixel output
     * @desc float in [1, 200], default 1.0
     */
    public set pixel_aspect_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixel_aspect_y`, value)
    }

    /**
     * Pixel size for viewport rendering
     * @desc enum in ['AUTO', '1', '2', '4', '8'], default 'AUTO'
     */
    public set preview_pixel_size(value: 'AUTO' | '1' | '2' | '4' | '8') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.preview_pixel_size`, value)
    }

    /**
     * Resolution to start rendering preview at, progressively increasing it to the full viewport size
     * @desc int in [8, 16384], default 64
     */
    public set preview_start_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.preview_start_resolution`, value)
    }

    /**
     * Percentage scale for render resolution
     * @desc int in [1, 32767], default 100
     */
    public set resolution_percentage(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_percentage`, value)
    }

    /**
     * Number of horizontal pixels in the rendered image
     * @desc int in [4, 65536], default 1920
     */
    public set resolution_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_x`, value)
    }

    /**
     * Number of vertical pixels in the rendered image
     * @desc int in [4, 65536], default 1080
     */
    public set resolution_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution_y`, value)
    }

    /**
     * Method to draw in the sequencer view
     * @desc enum in ['WIREFRAME', 'SOLID', 'MATERIAL', 'RENDERED'], default 'SOLID'
     */
    public set sequencer_gl_preview(value: 'WIREFRAME' | 'SOLID' | 'MATERIAL' | 'RENDERED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sequencer_gl_preview`, value)
    }

    /**
     * Global child particles percentage
     * @desc float in [0, 1], default 1.0
     */
    public set simplify_child_particles(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.simplify_child_particles`, value)
    }

    /**
     * Global child particles percentage during rendering
     * @desc float in [0, 1], default 0.0
     */
    public set simplify_child_particles_render(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.simplify_child_particles_render`, value)
    }

    /**
     * Simplify Grease Pencil drawing
     * @desc boolean, default False
     */
    public set simplify_gpencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil`, value)
    }

    /**
     * Display blend layers
     * @desc boolean, default False
     */
    public set simplify_gpencil_blend(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_blend`, value)
    }

    /**
     * Simplify Grease Pencil only during animation playback
     * @desc boolean, default False
     */
    public set simplify_gpencil_onplay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_onplay`, value)
    }

    /**
     * Display external lines of fill strokes
     * @desc boolean, default False
     */
    public set simplify_gpencil_remove_lines(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_remove_lines`, value)
    }

    /**
     * Display Shader FX
     * @desc boolean, default False
     */
    public set simplify_gpencil_shader_fx(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_shader_fx`, value)
    }

    /**
     * Display layer tint
     * @desc boolean, default False
     */
    public set simplify_gpencil_tint(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_tint`, value)
    }

    /**
     * Display fill strokes in the viewport
     * @desc boolean, default False
     */
    public set simplify_gpencil_view_fill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_view_fill`, value)
    }

    /**
     * Display modifiers in the viewport
     * @desc boolean, default False
     */
    public set simplify_gpencil_view_modifier(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.simplify_gpencil_view_modifier`, value)
    }

    /**
     * Global maximum subdivision level
     * @desc int in [0, 32767], default 6
     */
    public set simplify_subdivision(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.simplify_subdivision`, value)
    }

    /**
     * Global maximum subdivision level during rendering
     * @desc int in [0, 32767], default 0
     */
    public set simplify_subdivision_render(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.simplify_subdivision_render`, value)
    }

    /**
     * Color to use behind stamp text
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.25)
     */
    public set stamp_background(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.stamp_background`, value)
    }

    /**
     * Size of the font used when rendering stamp text
     * @desc int in [8, 64], default 12
     */
    public set stamp_font_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.stamp_font_size`, value)
    }

    /**
     * Color to use for stamp text
     * @desc float array of 4 items in [0, 1], default (0.8, 0.8, 0.8, 1.0)
     */
    public set stamp_foreground(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.stamp_foreground`, value)
    }

    /**
     * Custom text to appear in the stamp note
     * @desc string, default '', (never None)
     */
    public set stamp_note_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.stamp_note_text`, value)
    }

    /**
     * Number of CPU threads to use simultaneously while rendering (for multi-core/CPU systems)
     * @desc int in [1, 1024], default 1
     */
    public set threads(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.threads`, value)
    }

    /**
     * Determine the amount of render threads used
     * @desc enum in ['AUTO', 'FIXED'], default 'AUTO'
     */
    public set threads_mode(value: 'AUTO' | 'FIXED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.threads_mode`, value)
    }

    /**
     * Horizontal tile size to use while rendering
     * @desc int in [8, 65536], default 256
     */
    public set tile_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tile_x`, value)
    }

    /**
     * Vertical tile size to use while rendering
     * @desc int in [8, 65536], default 256
     */
    public set tile_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tile_y`, value)
    }

    /**
     * Clear Images before baking
     * @desc boolean, default True
     */
    public set use_bake_clear(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bake_clear`, value)
    }

    /**
     * Calculate heights against unsubdivided low resolution mesh
     * @desc boolean, default False
     */
    public set use_bake_lores_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bake_lores_mesh`, value)
    }

    /**
     * Bake directly from multires object
     * @desc boolean, default False
     */
    public set use_bake_multires(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bake_multires`, value)
    }

    /**
     * Bake shading on the surface of selected objects to the active object
     * @desc boolean, default False
     */
    public set use_bake_selected_to_active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bake_selected_to_active`, value)
    }

    /**
     * Use a user scale for the derivative map
     * @desc boolean, default False
     */
    public set use_bake_user_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bake_user_scale`, value)
    }

    /**
     * Render a user-defined render region, within the frame size
     * @desc boolean, default False
     */
    public set use_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_border`, value)
    }

    /**
     * Process the render result through the compositing pipeline, if compositing nodes are enabled
     * @desc boolean, default True
     */
    public set use_compositing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_compositing`, value)
    }

    /**
     * Crop the rendered frame to the defined render region size
     * @desc boolean, default False
     */
    public set use_crop_to_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_crop_to_border`, value)
    }

    /**
     * Add the file format extensions to the rendered file name (eg: filename + .jpg)
     * @desc boolean, default True
     */
    public set use_file_extension(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_file_extension`, value)
    }

    /**
     * Draw stylized strokes using Freestyle
     * @desc boolean, default False
     */
    public set use_freestyle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_freestyle`, value)
    }

    /**
     * Save for every anti-aliasing sample the entire RenderLayer results (this solves anti-aliasing issues with compositing)
     * @desc boolean, default False
     */
    public set use_full_sample(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_full_sample`, value)
    }

    /**
     * Lock interface during rendering in favor of giving more memory to the renderer
     * @desc boolean, default False
     */
    public set use_lock_interface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_lock_interface`, value)
    }

    /**
     * Use multi-sampled 3D scene motion blur
     * @desc boolean, default False
     */
    public set use_motion_blur(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motion_blur`, value)
    }

    /**
     * Use multiple views in the scene
     * @desc boolean, default False
     */
    public set use_multiview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiview`, value)
    }

    /**
     * Overwrite existing files while rendering
     * @desc boolean, default False
     */
    public set use_overwrite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overwrite`, value)
    }

    /**
     * Keep render data around for faster re-renders
     * @desc boolean, default False
     */
    public set use_persistent_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_persistent_data`, value)
    }

    /**
     * Create empty placeholder files while rendering frames (similar to Unix ‘touch’)
     * @desc boolean, default False
     */
    public set use_placeholder(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_placeholder`, value)
    }

    /**
     * Save render cache to EXR files (useful for heavy compositing, Note: affects indirectly rendered scenes)
     * @desc boolean, default False
     */
    public set use_render_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_render_cache`, value)
    }

    /**
     * Save tiles for all RenderLayers and SceneNodes to files in the temp directory (saves memory, required for Full Sample)
     * @desc boolean, default False
     */
    public set use_save_buffers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_save_buffers`, value)
    }

    /**
     * Process the render (and composited) result through the video sequence editor pipeline, if sequencer strips exist
     * @desc boolean, default True
     */
    public set use_sequencer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sequencer`, value)
    }

    /**
     * Use workbench render settings from the sequencer scene, instead of each individual scene used in the strip
     * @desc boolean, default False
     */
    public set use_sequencer_override_scene_strip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sequencer_override_scene_strip`, value)
    }

    /**
     * Enable simplification of scene for quicker preview renders
     * @desc boolean, default False
     */
    public set use_simplify(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_simplify`, value)
    }

    /**
     * Display high-resolution smoke in the viewport
     * @desc boolean, default False
     */
    public set use_simplify_smoke_highres(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_simplify_smoke_highres`, value)
    }

    /**
     * Only render the active layer. Only affects rendering from the interface, ignored for rendering from command line
     * @desc boolean, default False
     */
    public set use_single_layer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_single_layer`, value)
    }

    /**
     * Render the stamp info text in the rendered image
     * @desc boolean, default False
     */
    public set use_stamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp`, value)
    }

    /**
     * Include the name of the active camera in image metadata
     * @desc boolean, default True
     */
    public set use_stamp_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_camera`, value)
    }

    /**
     * Include the current date in image/video metadata
     * @desc boolean, default True
     */
    public set use_stamp_date(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_date`, value)
    }

    /**
     * Include the .blend filename in image/video metadata
     * @desc boolean, default True
     */
    public set use_stamp_filename(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_filename`, value)
    }

    /**
     * Include the frame number in image metadata
     * @desc boolean, default True
     */
    public set use_stamp_frame(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_frame`, value)
    }

    /**
     * Include the rendered frame range in image/video metadata
     * @desc boolean, default False
     */
    public set use_stamp_frame_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_frame_range`, value)
    }

    /**
     * Include the hostname of the machine that rendered the frame
     * @desc boolean, default False
     */
    public set use_stamp_hostname(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_hostname`, value)
    }

    /**
     * Display stamp labels (“Camera” in front of camera name, etc.)
     * @desc boolean, default False
     */
    public set use_stamp_labels(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_labels`, value)
    }

    /**
     * Include the active camera’s lens in image metadata
     * @desc boolean, default False
     */
    public set use_stamp_lens(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_lens`, value)
    }

    /**
     * Include the name of the last marker in image metadata
     * @desc boolean, default False
     */
    public set use_stamp_marker(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_marker`, value)
    }

    /**
     * Include the peak memory usage in image metadata
     * @desc boolean, default True
     */
    public set use_stamp_memory(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_memory`, value)
    }

    /**
     * Include a custom note in image/video metadata
     * @desc boolean, default False
     */
    public set use_stamp_note(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_note`, value)
    }

    /**
     * Include the render time in image metadata
     * @desc boolean, default True
     */
    public set use_stamp_render_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_render_time`, value)
    }

    /**
     * Include the name of the active scene in image/video metadata
     * @desc boolean, default True
     */
    public set use_stamp_scene(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_scene`, value)
    }

    /**
     * Include the name of the foreground sequence strip in image metadata
     * @desc boolean, default False
     */
    public set use_stamp_sequencer_strip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_sequencer_strip`, value)
    }

    /**
     * Use metadata from the strips in the sequencer
     * @desc boolean, default False
     */
    public set use_stamp_strip_meta(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_strip_meta`, value)
    }

    /**
     * Include the rendered frame timecode as HH:MM:SS.FF in image metadata
     * @desc boolean, default True
     */
    public set use_stamp_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stamp_time`, value)
    }

    /**
     * 
     * @desc enum in ['STEREO_3D', 'MULTIVIEW'], default 'STEREO_3D'
     */
    public set views_format(value: 'STEREO_3D' | 'MULTIVIEW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.views_format`, value)
    }

    /**
     * Return the absolute path to the filename to be written for a given frame
     * @desc string, (never None)
     */
    public frame_path(options: { frame?: number, preview?: boolean, view?: string }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.frame_path`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
