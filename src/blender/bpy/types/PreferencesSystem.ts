import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UserSolidLight } from './UserSolidLight'

/**
 * PreferencesSystem
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesSystem.html
 */
export class PreferencesSystem {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get dpi(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dpi`)
    }

    /**
     * For backwards compatibility only
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get legacy_compute_device_type(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.legacy_compute_device_type`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 1.0, (readonly)
     */
    public get pixel_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_size`)
    }

    /**
     * Lights user to display objects in solid draw mode
     * @desc bpy_prop_collection of UserSolidLight, (readonly)
     */
    public get solid_lights(): BlenderCollection<UserSolidLight> & Indexable<UserSolidLight> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.solid_lights`, UserSolidLight)
    }

    /**
     * Suggested line thickness and point size in pixels, for add-ons drawing custom user interface elements, based on operating system settings and Blender UI scale
     * @desc float in [-inf, inf], default 1.0, (readonly)
     */
    public get ui_line_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ui_line_width`)
    }

    /**
     * Size multiplier to use when drawing custom user interface elements, so that they are scaled correctly on screens with different DPI. This value is based on operating system DPI settings and Blender display scale
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get ui_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ui_scale`)
    }

    /**
     * Quality of the anisotropic filtering (values greater than 1.0 enable anisotropic filtering)
     * @desc enum in ['FILTER_0', 'FILTER_2', 'FILTER_4', 'FILTER_8', 'FILTER_16'], default 'FILTER_0'
     */
    public get anisotropic_filter(): 'FILTER_0' | 'FILTER_2' | 'FILTER_4' | 'FILTER_8' | 'FILTER_16' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.anisotropic_filter`)
    }

    /**
     * Audio channel count
     * @desc enum in ['MONO', 'STEREO', 'SURROUND4', 'SURROUND51', 'SURROUND71'], default 'STEREO'
     */
    public get audio_channels(): 'MONO' | 'STEREO' | 'SURROUND4' | 'SURROUND51' | 'SURROUND71' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_channels`)
    }

    /**
     * Audio output device
     * @desc enum in ['Null'], default 'Null'
     */
    public get audio_device(): 'Null' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_device`)
    }

    /**
     * Number of samples used by the audio mixing buffer
     * @desc enum in ['SAMPLES_256', 'SAMPLES_512', 'SAMPLES_1024', 'SAMPLES_2048', 'SAMPLES_4096', 'SAMPLES_8192', 'SAMPLES_16384', 'SAMPLES_32768'], default 'SAMPLES_2048'
     */
    public get audio_mixing_buffer(): 'SAMPLES_256' | 'SAMPLES_512' | 'SAMPLES_1024' | 'SAMPLES_2048' | 'SAMPLES_4096' | 'SAMPLES_8192' | 'SAMPLES_16384' | 'SAMPLES_32768' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_mixing_buffer`)
    }

    /**
     * Audio sample format
     * @desc enum in ['U8', 'S16', 'S24', 'S32', 'FLOAT', 'DOUBLE'], default 'FLOAT'
     */
    public get audio_sample_format(): 'U8' | 'S16' | 'S24' | 'S32' | 'FLOAT' | 'DOUBLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_sample_format`)
    }

    /**
     * Audio sample rate
     * @desc enum in ['RATE_44100', 'RATE_48000', 'RATE_96000', 'RATE_192000'], default 'RATE_48000'
     */
    public get audio_sample_rate(): 'RATE_44100' | 'RATE_48000' | 'RATE_96000' | 'RATE_192000' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_sample_rate`)
    }

    /**
     * Clip alpha below this threshold in the 3D textured view
     * @desc float in [0, 1], default 0.004
     */
    public get gl_clip_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gl_clip_alpha`)
    }

    /**
     * Limit the texture size to save graphics memory
     * @desc enum in ['CLAMP_OFF', 'CLAMP_8192', 'CLAMP_4096', 'CLAMP_2048', 'CLAMP_1024', 'CLAMP_512', 'CLAMP_256', 'CLAMP_128'], default 'CLAMP_OFF'
     */
    public get gl_texture_limit(): 'CLAMP_OFF' | 'CLAMP_8192' | 'CLAMP_4096' | 'CLAMP_2048' | 'CLAMP_1024' | 'CLAMP_512' | 'CLAMP_256' | 'CLAMP_128' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gl_texture_limit`)
    }

    /**
     * Enable Grease Pencil OpenGL multi-sampling, only for systems that support it
     * @desc enum in ['NONE', '2', '4', '8', '16'], default 'NONE'
     */
    public get gpencil_multi_sample(): 'NONE' | '2' | '4' | '8' | '16' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gpencil_multi_sample`)
    }

    /**
     * Method used for displaying images on the screen
     * @desc enum in ['AUTO', '2DTEXTURE', 'GLSL'], default 'AUTO'
     */
    public get image_draw_method(): 'AUTO' | '2DTEXTURE' | 'GLSL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.image_draw_method`)
    }

    /**
     * Color of the ambient light that uniformly lit the scene
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get light_ambient(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.light_ambient`, 'number', 3)
    }

    /**
     * Memory cache limit (in megabytes)
     * @desc int in [0, inf], default 4096
     */
    public get memory_cache_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.memory_cache_limit`)
    }

    /**
     * Type of computer back-end used with OpenSubdiv
     * @desc enum in ['NONE', 'CPU', 'OPENMP'], default 'NONE'
     */
    public get opensubdiv_compute_type(): 'NONE' | 'CPU' | 'OPENMP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.opensubdiv_compute_type`)
    }

    /**
     * Number of frames to render ahead during playback (sequencer only)
     * @desc int in [0, inf], default 0
     */
    public get prefetch_frames(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.prefetch_frames`)
    }

    /**
     * Maximum number of lines to store for the console buffer
     * @desc int in [32, 32768], default 256
     */
    public get scrollback(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.scrollback`)
    }

    /**
     * Number of seconds between each run of the GL texture garbage collector
     * @desc int in [1, 3600], default 60
     */
    public get texture_collection_rate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.texture_collection_rate`)
    }

    /**
     * Time since last access of a GL texture in seconds after which it is freed (set to 0 to keep textures allocated)
     * @desc int in [0, 3600], default 120
     */
    public get texture_time_out(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.texture_time_out`)
    }

    /**
     * Enable Edit-Mode edge smoothing, reducing aliasing, requires restart
     * @desc boolean, default False
     */
    public get use_edit_mode_smooth_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_mode_smooth_wire`)
    }

    /**
     * Enable overlay smooth wires, reducing aliasing
     * @desc boolean, default True
     */
    public get use_overlay_smooth_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overlay_smooth_wire`)
    }

    /**
     * Draw tool/property regions over the main region
     * @desc boolean, default True
     */
    public get use_region_overlap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_region_overlap`)
    }

    /**
     * Use the depth buffer for picking 3D View selection (without this the front most object may not be selected first)
     * @desc boolean, default False
     */
    public get use_select_pick_depth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_select_pick_depth`)
    }

    /**
     * View the result of the studio light editor in the viewport
     * @desc boolean, default False
     */
    public get use_studio_light_edit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_studio_light_edit`)
    }

    /**
     * Number of seconds between each run of the GL Vertex buffer object garbage collector
     * @desc int in [1, 3600], default 60
     */
    public get vbo_collection_rate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.vbo_collection_rate`)
    }

    /**
     * Time since last access of a GL Vertex buffer object in seconds after which it is freed (set to 0 to keep vbo allocated)
     * @desc int in [0, 3600], default 120
     */
    public get vbo_time_out(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.vbo_time_out`)
    }

    /**
     * Method of anti-aliasing in 3d viewport
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default '8'
     */
    public get viewport_aa(): 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.viewport_aa`)
    }

    /**
     * Quality of the anisotropic filtering (values greater than 1.0 enable anisotropic filtering)
     * @desc enum in ['FILTER_0', 'FILTER_2', 'FILTER_4', 'FILTER_8', 'FILTER_16'], default 'FILTER_0'
     */
    public set anisotropic_filter(value: 'FILTER_0' | 'FILTER_2' | 'FILTER_4' | 'FILTER_8' | 'FILTER_16') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.anisotropic_filter`, value)
    }

    /**
     * Audio channel count
     * @desc enum in ['MONO', 'STEREO', 'SURROUND4', 'SURROUND51', 'SURROUND71'], default 'STEREO'
     */
    public set audio_channels(value: 'MONO' | 'STEREO' | 'SURROUND4' | 'SURROUND51' | 'SURROUND71') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_channels`, value)
    }

    /**
     * Audio output device
     * @desc enum in ['Null'], default 'Null'
     */
    public set audio_device(value: 'Null') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_device`, value)
    }

    /**
     * Number of samples used by the audio mixing buffer
     * @desc enum in ['SAMPLES_256', 'SAMPLES_512', 'SAMPLES_1024', 'SAMPLES_2048', 'SAMPLES_4096', 'SAMPLES_8192', 'SAMPLES_16384', 'SAMPLES_32768'], default 'SAMPLES_2048'
     */
    public set audio_mixing_buffer(value: 'SAMPLES_256' | 'SAMPLES_512' | 'SAMPLES_1024' | 'SAMPLES_2048' | 'SAMPLES_4096' | 'SAMPLES_8192' | 'SAMPLES_16384' | 'SAMPLES_32768') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_mixing_buffer`, value)
    }

    /**
     * Audio sample format
     * @desc enum in ['U8', 'S16', 'S24', 'S32', 'FLOAT', 'DOUBLE'], default 'FLOAT'
     */
    public set audio_sample_format(value: 'U8' | 'S16' | 'S24' | 'S32' | 'FLOAT' | 'DOUBLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_sample_format`, value)
    }

    /**
     * Audio sample rate
     * @desc enum in ['RATE_44100', 'RATE_48000', 'RATE_96000', 'RATE_192000'], default 'RATE_48000'
     */
    public set audio_sample_rate(value: 'RATE_44100' | 'RATE_48000' | 'RATE_96000' | 'RATE_192000') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_sample_rate`, value)
    }

    /**
     * Clip alpha below this threshold in the 3D textured view
     * @desc float in [0, 1], default 0.004
     */
    public set gl_clip_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gl_clip_alpha`, value)
    }

    /**
     * Limit the texture size to save graphics memory
     * @desc enum in ['CLAMP_OFF', 'CLAMP_8192', 'CLAMP_4096', 'CLAMP_2048', 'CLAMP_1024', 'CLAMP_512', 'CLAMP_256', 'CLAMP_128'], default 'CLAMP_OFF'
     */
    public set gl_texture_limit(value: 'CLAMP_OFF' | 'CLAMP_8192' | 'CLAMP_4096' | 'CLAMP_2048' | 'CLAMP_1024' | 'CLAMP_512' | 'CLAMP_256' | 'CLAMP_128') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gl_texture_limit`, value)
    }

    /**
     * Enable Grease Pencil OpenGL multi-sampling, only for systems that support it
     * @desc enum in ['NONE', '2', '4', '8', '16'], default 'NONE'
     */
    public set gpencil_multi_sample(value: 'NONE' | '2' | '4' | '8' | '16') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gpencil_multi_sample`, value)
    }

    /**
     * Method used for displaying images on the screen
     * @desc enum in ['AUTO', '2DTEXTURE', 'GLSL'], default 'AUTO'
     */
    public set image_draw_method(value: 'AUTO' | '2DTEXTURE' | 'GLSL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.image_draw_method`, value)
    }

    /**
     * Color of the ambient light that uniformly lit the scene
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set light_ambient(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.light_ambient`, value)
    }

    /**
     * Memory cache limit (in megabytes)
     * @desc int in [0, inf], default 4096
     */
    public set memory_cache_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.memory_cache_limit`, value)
    }

    /**
     * Type of computer back-end used with OpenSubdiv
     * @desc enum in ['NONE', 'CPU', 'OPENMP'], default 'NONE'
     */
    public set opensubdiv_compute_type(value: 'NONE' | 'CPU' | 'OPENMP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.opensubdiv_compute_type`, value)
    }

    /**
     * Number of frames to render ahead during playback (sequencer only)
     * @desc int in [0, inf], default 0
     */
    public set prefetch_frames(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.prefetch_frames`, value)
    }

    /**
     * Maximum number of lines to store for the console buffer
     * @desc int in [32, 32768], default 256
     */
    public set scrollback(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.scrollback`, value)
    }

    /**
     * Number of seconds between each run of the GL texture garbage collector
     * @desc int in [1, 3600], default 60
     */
    public set texture_collection_rate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.texture_collection_rate`, value)
    }

    /**
     * Time since last access of a GL texture in seconds after which it is freed (set to 0 to keep textures allocated)
     * @desc int in [0, 3600], default 120
     */
    public set texture_time_out(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.texture_time_out`, value)
    }

    /**
     * Enable Edit-Mode edge smoothing, reducing aliasing, requires restart
     * @desc boolean, default False
     */
    public set use_edit_mode_smooth_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_mode_smooth_wire`, value)
    }

    /**
     * Enable overlay smooth wires, reducing aliasing
     * @desc boolean, default True
     */
    public set use_overlay_smooth_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overlay_smooth_wire`, value)
    }

    /**
     * Draw tool/property regions over the main region
     * @desc boolean, default True
     */
    public set use_region_overlap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_region_overlap`, value)
    }

    /**
     * Use the depth buffer for picking 3D View selection (without this the front most object may not be selected first)
     * @desc boolean, default False
     */
    public set use_select_pick_depth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_select_pick_depth`, value)
    }

    /**
     * View the result of the studio light editor in the viewport
     * @desc boolean, default False
     */
    public set use_studio_light_edit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_studio_light_edit`, value)
    }

    /**
     * Number of seconds between each run of the GL Vertex buffer object garbage collector
     * @desc int in [1, 3600], default 60
     */
    public set vbo_collection_rate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.vbo_collection_rate`, value)
    }

    /**
     * Time since last access of a GL Vertex buffer object in seconds after which it is freed (set to 0 to keep vbo allocated)
     * @desc int in [0, 3600], default 120
     */
    public set vbo_time_out(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.vbo_time_out`, value)
    }

    /**
     * Method of anti-aliasing in 3d viewport
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default '8'
     */
    public set viewport_aa(value: 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.viewport_aa`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
