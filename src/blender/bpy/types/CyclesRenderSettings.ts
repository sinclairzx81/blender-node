import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesRenderSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesRenderSettings.html
 */
export class CyclesRenderSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of antialiasing samples to render for each pixel
     * @desc int in [1, 2097151], default 4
     */
    public get aa_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.aa_samples`)
    }

    /**
     * Approximate indirect light with background tinted ambient occlusion at the specified bounce, 0 disables this feature
     * @desc int in [0, 1024], default 0
     */
    public get ao_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.ao_bounces`)
    }

    /**
     * Approximate indirect light with background tinted ambient occlusion at the specified bounce, 0 disables this feature
     * @desc int in [0, 1024], default 0
     */
    public get ao_bounces_render(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.ao_bounces_render`)
    }

    /**
     * Number of ambient occlusion samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get ao_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.ao_samples`)
    }

    /**
     * Type of pass to bake
     * @desc enum in ['COMBINED', 'AO', 'SHADOW', 'NORMAL', 'UV', 'EMIT', 'ENVIRONMENT', 'DIFFUSE', 'GLOSSY', 'TRANSMISSION', 'SUBSURFACE'], default 'COMBINED'
     */
    public get bake_type(): 'COMBINED' | 'AO' | 'SHADOW' | 'NORMAL' | 'UV' | 'EMIT' | 'ENVIRONMENT' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bake_type`)
    }

    /**
     * Adaptively blur glossy shaders after blurry bounces, to reduce noise at the cost of accuracy
     * @desc float in [0, 10], default 0.0
     */
    public get blur_glossy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blur_glossy`)
    }

    /**
     * Margin for the camera space culling
     * @desc float in [0, 5], default 0.1
     */
    public get camera_cull_margin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.camera_cull_margin`)
    }

    /**
     * Use reflective caustics, resulting in a brighter image (more noise but added realism)
     * @desc boolean, default True
     */
    public get caustics_reflective(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.caustics_reflective`)
    }

    /**
     * Use refractive caustics, resulting in a brighter image (more noise but added realism)
     * @desc boolean, default True
     */
    public get caustics_refractive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.caustics_refractive`)
    }

    /**
     * Split BVH primitives by this number of time steps to speed up render time in cost of memory
     * @desc int in [0, 16], default 0
     */
    public get debug_bvh_time_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.debug_bvh_time_steps`)
    }

    /**
     * Choose between faster updates, or faster render
     * @desc enum in ['DYNAMIC_BVH', 'STATIC_BVH'], default 'DYNAMIC_BVH'
     */
    public get debug_bvh_type(): 'DYNAMIC_BVH' | 'STATIC_BVH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.debug_bvh_type`)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 0.1
     */
    public get debug_cancel_timeout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.debug_cancel_timeout`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ALL', 'DEFAULT', 'CPU', 'GPU', 'ACCELERATOR'], default 'ALL'
     */
    public get debug_opencl_device_type(): 'NONE' | 'ALL' | 'DEFAULT' | 'CPU' | 'GPU' | 'ACCELERATOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.debug_opencl_device_type`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_opencl_kernel_single_program(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_opencl_kernel_single_program`)
    }

    /**
     * 
     * @desc enum in ['DEFAULT', 'MEGA', 'SPLIT'], default 'DEFAULT'
     */
    public get debug_opencl_kernel_type(): 'DEFAULT' | 'MEGA' | 'SPLIT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.debug_opencl_kernel_type`)
    }

    /**
     * Artificial limit on OpenCL memory usage in MB (0 to disable limit)
     * @desc int in [-inf, inf], default 0
     */
    public get debug_opencl_mem_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.debug_opencl_mem_limit`)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 0.1
     */
    public get debug_reset_timeout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.debug_reset_timeout`)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 1.0
     */
    public get debug_text_timeout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.debug_text_timeout`)
    }

    /**
     * 
     * @desc int in [1, 4096], default 1024
     */
    public get debug_tile_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.debug_tile_size`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_cpu_avx(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_avx`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_cpu_avx2(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_avx2`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get debug_use_cpu_split_kernel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_split_kernel`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_cpu_sse2(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse2`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_cpu_sse3(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse3`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_cpu_sse41(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse41`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get debug_use_cuda_adaptive_compile(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cuda_adaptive_compile`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get debug_use_cuda_split_kernel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_cuda_split_kernel`)
    }

    /**
     * Use special type BVH optimized for hair (uses more ram but renders faster)
     * @desc boolean, default True
     */
    public get debug_use_hair_bvh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_hair_bvh`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get debug_use_opencl_debug(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_opencl_debug`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get debug_use_qbvh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_qbvh`)
    }

    /**
     * Use BVH spatial splits: longer builder time, faster render
     * @desc boolean, default False
     */
    public get debug_use_spatial_splits(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.debug_use_spatial_splits`)
    }

    /**
     * Device to use for rendering
     * @desc enum in ['CPU', 'GPU'], default 'CPU'
     */
    public get device(): 'CPU' | 'GPU' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.device`)
    }

    /**
     * Size of a micropolygon in pixels
     * @desc float in [0.1, 1000], default 1.0
     */
    public get dicing_rate(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dicing_rate`)
    }

    /**
     * Maximum number of diffuse reflection bounces, bounded by total maximum
     * @desc int in [0, 1024], default 4
     */
    public get diffuse_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.diffuse_bounces`)
    }

    /**
     * Number of diffuse bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get diffuse_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.diffuse_samples`)
    }

    /**
     * Cull objects which are further away from camera than this distance
     * @desc float in [0, inf], default 50.0
     */
    public get distance_cull_margin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_cull_margin`)
    }

    /**
     * Feature set to use for rendering
     * @desc enum in ['SUPPORTED', 'EXPERIMENTAL'], default 'SUPPORTED'
     */
    public get feature_set(): 'SUPPORTED' | 'EXPERIMENTAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.feature_set`)
    }

    /**
     * Image brightness scale
     * @desc float in [0, 10], default 1.0
     */
    public get film_exposure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.film_exposure`)
    }

    /**
     * World background is transparent with premultiplied alpha
     * @desc boolean, default False
     */
    public get film_transparent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.film_transparent`)
    }

    /**
     * Pixel filter type
     * @desc enum in ['BOX', 'GAUSSIAN', 'BLACKMAN_HARRIS'], default 'BLACKMAN_HARRIS'
     */
    public get filter_type(): 'BOX' | 'GAUSSIAN' | 'BLACKMAN_HARRIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * Pixel filter width
     * @desc float in [0.01, 10], default 1.5
     */
    public get filter_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.filter_width`)
    }

    /**
     * Maximum number of glossy reflection bounces, bounded by total maximum
     * @desc int in [0, 1024], default 4
     */
    public get glossy_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.glossy_bounces`)
    }

    /**
     * Number of glossy bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get glossy_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.glossy_samples`)
    }

    /**
     * Probabilistically terminate light samples when the light contribution is below this threshold (more noise but faster rendering). Zero disables the test and never ignores lights
     * @desc float in [0, 1], default 0.01
     */
    public get light_sampling_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.light_sampling_threshold`)
    }

    /**
     * Total maximum number of bounces
     * @desc int in [0, 1024], default 12
     */
    public get max_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_bounces`)
    }

    /**
     * Stop subdividing when this level is reached even if the dice rate would produce finer tessellation
     * @desc int in [0, 16], default 12
     */
    public get max_subdivisions(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_subdivisions`)
    }

    /**
     * Number of mesh emission light samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get mesh_light_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.mesh_light_samples`)
    }

    /**
     * Minimum number of bounces, setting this lower than the maximum enables probabilistic path termination (faster but noisier)
     * @desc int in [0, 1024], default 3
     */
    public get min_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_bounces`)
    }

    /**
     * Offset for the shutter’s time interval, allows to change the motion blur trails
     * @desc enum in ['START', 'CENTER', 'END'], default 'CENTER'
     */
    public get motion_blur_position(): 'START' | 'CENTER' | 'END' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.motion_blur_position`)
    }

    /**
     * Pixel filter type
     * @desc enum in ['BOX', 'GAUSSIAN', 'BLACKMAN_HARRIS'], default 'BLACKMAN_HARRIS'
     */
    public get pixel_filter_type(): 'BOX' | 'GAUSSIAN' | 'BLACKMAN_HARRIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pixel_filter_type`)
    }

    /**
     * Number of antialiasing samples to render in the viewport, unlimited if 0
     * @desc int in [0, 2097151], default 4
     */
    public get preview_aa_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.preview_aa_samples`)
    }

    /**
     * Preview active render layer in viewport
     * @desc boolean, default False
     */
    public get preview_active_layer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.preview_active_layer`)
    }

    /**
     * Size of a micropolygon in pixels during preview render
     * @desc float in [0.1, 1000], default 8.0
     */
    public get preview_dicing_rate(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.preview_dicing_rate`)
    }

    /**
     * Pause all viewport preview renders
     * @desc boolean, default False
     */
    public get preview_pause(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.preview_pause`)
    }

    /**
     * Number of samples to render in the viewport, unlimited if 0
     * @desc int in [0, inf], default 32
     */
    public get preview_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.preview_samples`)
    }

    /**
     * Resolution to start rendering preview at, progressively increasing it to the full viewport size
     * @desc int in [8, 16384], default 64
     */
    public get preview_start_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.preview_start_resolution`)
    }

    /**
     * Method to sample lights and materials
     * @desc enum in ['BRANCHED_PATH', 'PATH'], default 'PATH'
     */
    public get progressive(): 'BRANCHED_PATH' | 'PATH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.progressive`)
    }

    /**
     * Scanline “exposure” time for the rolling shutter effect
     * @desc float in [0, 1], default 0.1
     */
    public get rolling_shutter_duration(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rolling_shutter_duration`)
    }

    /**
     * Type of rolling shutter effect matching CMOS-based cameras
     * @desc enum in ['NONE', 'TOP'], default 'NONE'
     */
    public get rolling_shutter_type(): 'NONE' | 'TOP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rolling_shutter_type`)
    }

    /**
     * Sample all lights (for direct samples), rather than randomly picking one
     * @desc boolean, default True
     */
    public get sample_all_lights_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.sample_all_lights_direct`)
    }

    /**
     * Sample all lights (for indirect samples), rather than randomly picking one
     * @desc boolean, default True
     */
    public get sample_all_lights_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.sample_all_lights_indirect`)
    }

    /**
     * If non-zero, the maximum value for a direct sample, higher values will be scaled down to avoid too much noise and slow convergence at the cost of accuracy
     * @desc float in [0, inf], default 0.0
     */
    public get sample_clamp_direct(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sample_clamp_direct`)
    }

    /**
     * If non-zero, the maximum value for an indirect sample, higher values will be scaled down to avoid too much noise and slow convergence at the cost of accuracy
     * @desc float in [0, inf], default 0.0
     */
    public get sample_clamp_indirect(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sample_clamp_indirect`)
    }

    /**
     * Number of samples to render for each pixel
     * @desc int in [1, inf], default 128
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Random sampling pattern used by the integrator
     * @desc enum in ['SOBOL', 'CORRELATED_MUTI_JITTER'], default 'SOBOL'
     */
    public get sampling_pattern(): 'SOBOL' | 'CORRELATED_MUTI_JITTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sampling_pattern`)
    }

    /**
     * Seed value for integrator to get different noise patterns
     * @desc int in [0, inf], default 0
     */
    public get seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seed`)
    }

    /**
     * Use Open Shading Language (CPU rendering only)
     * @desc boolean, default False
     */
    public get shading_system(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.shading_system`)
    }

    /**
     * Number of subsurface scattering samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get subsurface_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subsurface_samples`)
    }

    /**
     * Limit texture size used by viewport rendering
     * @desc enum in ['OFF', '128', '256', '512', '1024', '2048', '4096', '8192'], default 'OFF'
     */
    public get texture_limit(): 'OFF' | '128' | '256' | '512' | '1024' | '2048' | '4096' | '8192' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_limit`)
    }

    /**
     * Limit texture size used by final rendering
     * @desc enum in ['OFF', '128', '256', '512', '1024', '2048', '4096', '8192'], default 'OFF'
     */
    public get texture_limit_render(): 'OFF' | '128' | '256' | '512' | '1024' | '2048' | '4096' | '8192' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_limit_render`)
    }

    /**
     * Tile order for rendering
     * @desc enum in ['CENTER', 'RIGHT_TO_LEFT', 'LEFT_TO_RIGHT', 'TOP_TO_BOTTOM', 'BOTTOM_TO_TOP', 'HILBERT_SPIRAL'], default 'HILBERT_SPIRAL'
     */
    public get tile_order(): 'CENTER' | 'RIGHT_TO_LEFT' | 'LEFT_TO_RIGHT' | 'TOP_TO_BOTTOM' | 'BOTTOM_TO_TOP' | 'HILBERT_SPIRAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tile_order`)
    }

    /**
     * Maximum number of transmission bounces, bounded by total maximum
     * @desc int in [0, 1024], default 12
     */
    public get transmission_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.transmission_bounces`)
    }

    /**
     * Number of transmission bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get transmission_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.transmission_samples`)
    }

    /**
     * Maximum number of transparent bounces
     * @desc int in [0, 1024], default 8
     */
    public get transparent_max_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.transparent_max_bounces`)
    }

    /**
     * Minimum number of transparent bounces, setting this lower than the maximum enables probabilistic path termination (faster but noisier)
     * @desc int in [0, 1024], default 8
     */
    public get transparent_min_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.transparent_min_bounces`)
    }

    /**
     * Use different seed values (and hence noise patterns) at different frames
     * @desc boolean, default False
     */
    public get use_animated_seed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_animated_seed`)
    }

    /**
     * Allow objects to be culled based on the camera frustum
     * @desc boolean, default False
     */
    public get use_camera_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_camera_cull`)
    }

    /**
     * Allow objects to be culled based on the distance from camera
     * @desc boolean, default False
     */
    public get use_distance_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_distance_cull`)
    }

    /**
     * How to use per render layer sample settings
     * @desc enum in ['USE', 'BOUNDED', 'IGNORE'], default 'USE'
     */
    public get use_layer_samples(): 'USE' | 'BOUNDED' | 'IGNORE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_layer_samples`)
    }

    /**
     * Instead of rendering each tile until it is finished, refine the whole image progressively (this renders somewhat slower, but time can be saved by manually stopping the render when the noise is low enough)
     * @desc boolean, default False
     */
    public get use_progressive_refine(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_progressive_refine`)
    }

    /**
     * Square sampling values for easier artist control
     * @desc boolean, default False
     */
    public get use_square_samples(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_square_samples`)
    }

    /**
     * Use transparency of surfaces for rendering shadows
     * @desc boolean, default True
     */
    public get use_transparent_shadows(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transparent_shadows`)
    }

    /**
     * Maximum number of volumetric scattering events
     * @desc int in [0, 1024], default 0
     */
    public get volume_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.volume_bounces`)
    }

    /**
     * Maximum number of steps through the volume before giving up, to avoid extremely long render times with big objects or small step sizes
     * @desc int in [2, 65536], default 1024
     */
    public get volume_max_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.volume_max_steps`)
    }

    /**
     * Number of volume scattering samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public get volume_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.volume_samples`)
    }

    /**
     * Distance between volume shader samples when rendering the volume (lower values give more accurate and detailed results, but also increased render time)
     * @desc float in [1e-07, 100000], default 0.1
     */
    public get volume_step_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume_step_size`)
    }

    /**
     * Number of antialiasing samples to render for each pixel
     * @desc int in [1, 2097151], default 4
     */
    public set aa_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.aa_samples`, value)
    }

    /**
     * Approximate indirect light with background tinted ambient occlusion at the specified bounce, 0 disables this feature
     * @desc int in [0, 1024], default 0
     */
    public set ao_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.ao_bounces`, value)
    }

    /**
     * Approximate indirect light with background tinted ambient occlusion at the specified bounce, 0 disables this feature
     * @desc int in [0, 1024], default 0
     */
    public set ao_bounces_render(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.ao_bounces_render`, value)
    }

    /**
     * Number of ambient occlusion samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set ao_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.ao_samples`, value)
    }

    /**
     * Type of pass to bake
     * @desc enum in ['COMBINED', 'AO', 'SHADOW', 'NORMAL', 'UV', 'EMIT', 'ENVIRONMENT', 'DIFFUSE', 'GLOSSY', 'TRANSMISSION', 'SUBSURFACE'], default 'COMBINED'
     */
    public set bake_type(value: 'COMBINED' | 'AO' | 'SHADOW' | 'NORMAL' | 'UV' | 'EMIT' | 'ENVIRONMENT' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bake_type`, value)
    }

    /**
     * Adaptively blur glossy shaders after blurry bounces, to reduce noise at the cost of accuracy
     * @desc float in [0, 10], default 0.0
     */
    public set blur_glossy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blur_glossy`, value)
    }

    /**
     * Margin for the camera space culling
     * @desc float in [0, 5], default 0.1
     */
    public set camera_cull_margin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.camera_cull_margin`, value)
    }

    /**
     * Use reflective caustics, resulting in a brighter image (more noise but added realism)
     * @desc boolean, default True
     */
    public set caustics_reflective(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.caustics_reflective`, value)
    }

    /**
     * Use refractive caustics, resulting in a brighter image (more noise but added realism)
     * @desc boolean, default True
     */
    public set caustics_refractive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.caustics_refractive`, value)
    }

    /**
     * Split BVH primitives by this number of time steps to speed up render time in cost of memory
     * @desc int in [0, 16], default 0
     */
    public set debug_bvh_time_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.debug_bvh_time_steps`, value)
    }

    /**
     * Choose between faster updates, or faster render
     * @desc enum in ['DYNAMIC_BVH', 'STATIC_BVH'], default 'DYNAMIC_BVH'
     */
    public set debug_bvh_type(value: 'DYNAMIC_BVH' | 'STATIC_BVH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.debug_bvh_type`, value)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 0.1
     */
    public set debug_cancel_timeout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.debug_cancel_timeout`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ALL', 'DEFAULT', 'CPU', 'GPU', 'ACCELERATOR'], default 'ALL'
     */
    public set debug_opencl_device_type(value: 'NONE' | 'ALL' | 'DEFAULT' | 'CPU' | 'GPU' | 'ACCELERATOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.debug_opencl_device_type`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_opencl_kernel_single_program(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_opencl_kernel_single_program`, value)
    }

    /**
     * 
     * @desc enum in ['DEFAULT', 'MEGA', 'SPLIT'], default 'DEFAULT'
     */
    public set debug_opencl_kernel_type(value: 'DEFAULT' | 'MEGA' | 'SPLIT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.debug_opencl_kernel_type`, value)
    }

    /**
     * Artificial limit on OpenCL memory usage in MB (0 to disable limit)
     * @desc int in [-inf, inf], default 0
     */
    public set debug_opencl_mem_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.debug_opencl_mem_limit`, value)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 0.1
     */
    public set debug_reset_timeout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.debug_reset_timeout`, value)
    }

    /**
     * 
     * @desc float in [0.01, 10], default 1.0
     */
    public set debug_text_timeout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.debug_text_timeout`, value)
    }

    /**
     * 
     * @desc int in [1, 4096], default 1024
     */
    public set debug_tile_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.debug_tile_size`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_cpu_avx(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_avx`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_cpu_avx2(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_avx2`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set debug_use_cpu_split_kernel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_split_kernel`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_cpu_sse2(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse2`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_cpu_sse3(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse3`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_cpu_sse41(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cpu_sse41`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set debug_use_cuda_adaptive_compile(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cuda_adaptive_compile`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set debug_use_cuda_split_kernel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_cuda_split_kernel`, value)
    }

    /**
     * Use special type BVH optimized for hair (uses more ram but renders faster)
     * @desc boolean, default True
     */
    public set debug_use_hair_bvh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_hair_bvh`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set debug_use_opencl_debug(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_opencl_debug`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set debug_use_qbvh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_qbvh`, value)
    }

    /**
     * Use BVH spatial splits: longer builder time, faster render
     * @desc boolean, default False
     */
    public set debug_use_spatial_splits(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.debug_use_spatial_splits`, value)
    }

    /**
     * Device to use for rendering
     * @desc enum in ['CPU', 'GPU'], default 'CPU'
     */
    public set device(value: 'CPU' | 'GPU') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.device`, value)
    }

    /**
     * Size of a micropolygon in pixels
     * @desc float in [0.1, 1000], default 1.0
     */
    public set dicing_rate(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dicing_rate`, value)
    }

    /**
     * Maximum number of diffuse reflection bounces, bounded by total maximum
     * @desc int in [0, 1024], default 4
     */
    public set diffuse_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.diffuse_bounces`, value)
    }

    /**
     * Number of diffuse bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set diffuse_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.diffuse_samples`, value)
    }

    /**
     * Cull objects which are further away from camera than this distance
     * @desc float in [0, inf], default 50.0
     */
    public set distance_cull_margin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_cull_margin`, value)
    }

    /**
     * Feature set to use for rendering
     * @desc enum in ['SUPPORTED', 'EXPERIMENTAL'], default 'SUPPORTED'
     */
    public set feature_set(value: 'SUPPORTED' | 'EXPERIMENTAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.feature_set`, value)
    }

    /**
     * Image brightness scale
     * @desc float in [0, 10], default 1.0
     */
    public set film_exposure(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.film_exposure`, value)
    }

    /**
     * World background is transparent with premultiplied alpha
     * @desc boolean, default False
     */
    public set film_transparent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.film_transparent`, value)
    }

    /**
     * Pixel filter type
     * @desc enum in ['BOX', 'GAUSSIAN', 'BLACKMAN_HARRIS'], default 'BLACKMAN_HARRIS'
     */
    public set filter_type(value: 'BOX' | 'GAUSSIAN' | 'BLACKMAN_HARRIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * Pixel filter width
     * @desc float in [0.01, 10], default 1.5
     */
    public set filter_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.filter_width`, value)
    }

    /**
     * Maximum number of glossy reflection bounces, bounded by total maximum
     * @desc int in [0, 1024], default 4
     */
    public set glossy_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.glossy_bounces`, value)
    }

    /**
     * Number of glossy bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set glossy_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.glossy_samples`, value)
    }

    /**
     * Probabilistically terminate light samples when the light contribution is below this threshold (more noise but faster rendering). Zero disables the test and never ignores lights
     * @desc float in [0, 1], default 0.01
     */
    public set light_sampling_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.light_sampling_threshold`, value)
    }

    /**
     * Total maximum number of bounces
     * @desc int in [0, 1024], default 12
     */
    public set max_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_bounces`, value)
    }

    /**
     * Stop subdividing when this level is reached even if the dice rate would produce finer tessellation
     * @desc int in [0, 16], default 12
     */
    public set max_subdivisions(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_subdivisions`, value)
    }

    /**
     * Number of mesh emission light samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set mesh_light_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.mesh_light_samples`, value)
    }

    /**
     * Minimum number of bounces, setting this lower than the maximum enables probabilistic path termination (faster but noisier)
     * @desc int in [0, 1024], default 3
     */
    public set min_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_bounces`, value)
    }

    /**
     * Offset for the shutter’s time interval, allows to change the motion blur trails
     * @desc enum in ['START', 'CENTER', 'END'], default 'CENTER'
     */
    public set motion_blur_position(value: 'START' | 'CENTER' | 'END') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.motion_blur_position`, value)
    }

    /**
     * Pixel filter type
     * @desc enum in ['BOX', 'GAUSSIAN', 'BLACKMAN_HARRIS'], default 'BLACKMAN_HARRIS'
     */
    public set pixel_filter_type(value: 'BOX' | 'GAUSSIAN' | 'BLACKMAN_HARRIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pixel_filter_type`, value)
    }

    /**
     * Number of antialiasing samples to render in the viewport, unlimited if 0
     * @desc int in [0, 2097151], default 4
     */
    public set preview_aa_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.preview_aa_samples`, value)
    }

    /**
     * Preview active render layer in viewport
     * @desc boolean, default False
     */
    public set preview_active_layer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.preview_active_layer`, value)
    }

    /**
     * Size of a micropolygon in pixels during preview render
     * @desc float in [0.1, 1000], default 8.0
     */
    public set preview_dicing_rate(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.preview_dicing_rate`, value)
    }

    /**
     * Pause all viewport preview renders
     * @desc boolean, default False
     */
    public set preview_pause(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.preview_pause`, value)
    }

    /**
     * Number of samples to render in the viewport, unlimited if 0
     * @desc int in [0, inf], default 32
     */
    public set preview_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.preview_samples`, value)
    }

    /**
     * Resolution to start rendering preview at, progressively increasing it to the full viewport size
     * @desc int in [8, 16384], default 64
     */
    public set preview_start_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.preview_start_resolution`, value)
    }

    /**
     * Method to sample lights and materials
     * @desc enum in ['BRANCHED_PATH', 'PATH'], default 'PATH'
     */
    public set progressive(value: 'BRANCHED_PATH' | 'PATH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.progressive`, value)
    }

    /**
     * Scanline “exposure” time for the rolling shutter effect
     * @desc float in [0, 1], default 0.1
     */
    public set rolling_shutter_duration(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rolling_shutter_duration`, value)
    }

    /**
     * Type of rolling shutter effect matching CMOS-based cameras
     * @desc enum in ['NONE', 'TOP'], default 'NONE'
     */
    public set rolling_shutter_type(value: 'NONE' | 'TOP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rolling_shutter_type`, value)
    }

    /**
     * Sample all lights (for direct samples), rather than randomly picking one
     * @desc boolean, default True
     */
    public set sample_all_lights_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.sample_all_lights_direct`, value)
    }

    /**
     * Sample all lights (for indirect samples), rather than randomly picking one
     * @desc boolean, default True
     */
    public set sample_all_lights_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.sample_all_lights_indirect`, value)
    }

    /**
     * If non-zero, the maximum value for a direct sample, higher values will be scaled down to avoid too much noise and slow convergence at the cost of accuracy
     * @desc float in [0, inf], default 0.0
     */
    public set sample_clamp_direct(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sample_clamp_direct`, value)
    }

    /**
     * If non-zero, the maximum value for an indirect sample, higher values will be scaled down to avoid too much noise and slow convergence at the cost of accuracy
     * @desc float in [0, inf], default 0.0
     */
    public set sample_clamp_indirect(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sample_clamp_indirect`, value)
    }

    /**
     * Number of samples to render for each pixel
     * @desc int in [1, inf], default 128
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Random sampling pattern used by the integrator
     * @desc enum in ['SOBOL', 'CORRELATED_MUTI_JITTER'], default 'SOBOL'
     */
    public set sampling_pattern(value: 'SOBOL' | 'CORRELATED_MUTI_JITTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sampling_pattern`, value)
    }

    /**
     * Seed value for integrator to get different noise patterns
     * @desc int in [0, inf], default 0
     */
    public set seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seed`, value)
    }

    /**
     * Use Open Shading Language (CPU rendering only)
     * @desc boolean, default False
     */
    public set shading_system(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.shading_system`, value)
    }

    /**
     * Number of subsurface scattering samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set subsurface_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.subsurface_samples`, value)
    }

    /**
     * Limit texture size used by viewport rendering
     * @desc enum in ['OFF', '128', '256', '512', '1024', '2048', '4096', '8192'], default 'OFF'
     */
    public set texture_limit(value: 'OFF' | '128' | '256' | '512' | '1024' | '2048' | '4096' | '8192') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_limit`, value)
    }

    /**
     * Limit texture size used by final rendering
     * @desc enum in ['OFF', '128', '256', '512', '1024', '2048', '4096', '8192'], default 'OFF'
     */
    public set texture_limit_render(value: 'OFF' | '128' | '256' | '512' | '1024' | '2048' | '4096' | '8192') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_limit_render`, value)
    }

    /**
     * Tile order for rendering
     * @desc enum in ['CENTER', 'RIGHT_TO_LEFT', 'LEFT_TO_RIGHT', 'TOP_TO_BOTTOM', 'BOTTOM_TO_TOP', 'HILBERT_SPIRAL'], default 'HILBERT_SPIRAL'
     */
    public set tile_order(value: 'CENTER' | 'RIGHT_TO_LEFT' | 'LEFT_TO_RIGHT' | 'TOP_TO_BOTTOM' | 'BOTTOM_TO_TOP' | 'HILBERT_SPIRAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tile_order`, value)
    }

    /**
     * Maximum number of transmission bounces, bounded by total maximum
     * @desc int in [0, 1024], default 12
     */
    public set transmission_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.transmission_bounces`, value)
    }

    /**
     * Number of transmission bounce samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set transmission_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.transmission_samples`, value)
    }

    /**
     * Maximum number of transparent bounces
     * @desc int in [0, 1024], default 8
     */
    public set transparent_max_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.transparent_max_bounces`, value)
    }

    /**
     * Minimum number of transparent bounces, setting this lower than the maximum enables probabilistic path termination (faster but noisier)
     * @desc int in [0, 1024], default 8
     */
    public set transparent_min_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.transparent_min_bounces`, value)
    }

    /**
     * Use different seed values (and hence noise patterns) at different frames
     * @desc boolean, default False
     */
    public set use_animated_seed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_animated_seed`, value)
    }

    /**
     * Allow objects to be culled based on the camera frustum
     * @desc boolean, default False
     */
    public set use_camera_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_camera_cull`, value)
    }

    /**
     * Allow objects to be culled based on the distance from camera
     * @desc boolean, default False
     */
    public set use_distance_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_distance_cull`, value)
    }

    /**
     * How to use per render layer sample settings
     * @desc enum in ['USE', 'BOUNDED', 'IGNORE'], default 'USE'
     */
    public set use_layer_samples(value: 'USE' | 'BOUNDED' | 'IGNORE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_layer_samples`, value)
    }

    /**
     * Instead of rendering each tile until it is finished, refine the whole image progressively (this renders somewhat slower, but time can be saved by manually stopping the render when the noise is low enough)
     * @desc boolean, default False
     */
    public set use_progressive_refine(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_progressive_refine`, value)
    }

    /**
     * Square sampling values for easier artist control
     * @desc boolean, default False
     */
    public set use_square_samples(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_square_samples`, value)
    }

    /**
     * Use transparency of surfaces for rendering shadows
     * @desc boolean, default True
     */
    public set use_transparent_shadows(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transparent_shadows`, value)
    }

    /**
     * Maximum number of volumetric scattering events
     * @desc int in [0, 1024], default 0
     */
    public set volume_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.volume_bounces`, value)
    }

    /**
     * Maximum number of steps through the volume before giving up, to avoid extremely long render times with big objects or small step sizes
     * @desc int in [2, 65536], default 1024
     */
    public set volume_max_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.volume_max_steps`, value)
    }

    /**
     * Number of volume scattering samples to render for each AA sample
     * @desc int in [1, 1024], default 1
     */
    public set volume_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.volume_samples`, value)
    }

    /**
     * Distance between volume shader samples when rendering the volume (lower values give more accurate and detailed results, but also increased render time)
     * @desc float in [1e-07, 100000], default 0.1
     */
    public set volume_step_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume_step_size`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
