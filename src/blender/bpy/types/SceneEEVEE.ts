import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SceneEEVEE
 * 
 * https://docs.blender.org/api/current/bpy.types.SceneEEVEE.html
 */
export class SceneEEVEE {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Info on current cache status
     * @desc string, default '', (readonly, never None)
     */
    public get gi_cache_info(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.gi_cache_info`)
    }

    /**
     * Maximum intensity a bloom pixel can have (0 to disabled)
     * @desc float in [0, 100000], default 0.0
     */
    public get bloom_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bloom_clamp`)
    }

    /**
     * Color applied to the bloom effect
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get bloom_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bloom_color`, 'number', 3)
    }

    /**
     * Blend factor
     * @desc float in [0, 10000], default 0.05
     */
    public get bloom_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bloom_intensity`)
    }

    /**
     * Makes transition between under/over-threshold gradual
     * @desc float in [0, 1], default 0.5
     */
    public get bloom_knee(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bloom_knee`)
    }

    /**
     * Bloom spread distance
     * @desc float in [0, 100], default 6.5
     */
    public get bloom_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bloom_radius`)
    }

    /**
     * Filters out pixels under this level of brightness
     * @desc float in [0, 100000], default 0.8
     */
    public get bloom_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bloom_threshold`)
    }

    /**
     * Max size of the bokeh shape for the depth of field (lower is faster)
     * @desc float in [0, 2000], default 100.0
     */
    public get bokeh_max_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bokeh_max_size`)
    }

    /**
     * Brightness threshold for using sprite base depth of field
     * @desc float in [0, 100000], default 1.0
     */
    public get bokeh_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bokeh_threshold`)
    }

    /**
     * Auto bake indirect lighting when editing probes
     * @desc boolean, default False
     */
    public get gi_auto_bake(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.gi_auto_bake`)
    }

    /**
     * Size of the cubemap spheres to debug captured light
     * @desc float in [0.05, 10], default 0.3
     */
    public get gi_cubemap_display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gi_cubemap_display_size`)
    }

    /**
     * Size of every cubemaps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '512'
     */
    public get gi_cubemap_resolution(): '64' | '128' | '256' | '512' | '1024' | '2048' | '4096' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gi_cubemap_resolution`)
    }

    /**
     * Number of time the light is reinjected inside light grids, 0 disable indirect diffuse light
     * @desc int in [0, inf], default 3
     */
    public get gi_diffuse_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gi_diffuse_bounces`)
    }

    /**
     * Take more samples during cubemap filtering to remove artifacts
     * @desc float in [1, 8], default 3.0
     */
    public get gi_filter_quality(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gi_filter_quality`)
    }

    /**
     * Clamp pixel intensity to reduce noise inside glossy reflections from reflection cubemaps (0 to disabled)
     * @desc float in [0, inf], default 0.0
     */
    public get gi_glossy_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gi_glossy_clamp`)
    }

    /**
     * Size of the irradiance sample spheres to debug captured light
     * @desc float in [0.05, 10], default 0.1
     */
    public get gi_irradiance_display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gi_irradiance_display_size`)
    }

    /**
     * Smoother irradiance interpolation but introduce light bleeding
     * @desc float in [0, inf], default 0.1
     */
    public get gi_irradiance_smoothing(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gi_irradiance_smoothing`)
    }

    /**
     * Display captured cubemaps in the viewport
     * @desc boolean, default False
     */
    public get gi_show_cubemaps(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.gi_show_cubemaps`)
    }

    /**
     * Display irradiance samples in the viewport
     * @desc boolean, default False
     */
    public get gi_show_irradiance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.gi_show_irradiance`)
    }

    /**
     * Size of the shadow map applied to each irradiance sample
     * @desc enum in ['8', '16', '32', '64'], default '32'
     */
    public get gi_visibility_resolution(): '8' | '16' | '32' | '64' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gi_visibility_resolution`)
    }

    /**
     * Distance of object that contribute to the ambient occlusion effect
     * @desc float in [0, 100000], default 0.2
     */
    public get gtao_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gtao_distance`)
    }

    /**
     * Factor for ambient occlusion blending
     * @desc float in [0, inf], default 1.0
     */
    public get gtao_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gtao_factor`)
    }

    /**
     * Precision of the horizon search
     * @desc float in [0, 1], default 0.25
     */
    public get gtao_quality(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gtao_quality`)
    }

    /**
     * Minimum light intensity for a light to contribute to the lighting
     * @desc float in [0, inf], default 0.01
     */
    public get light_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.light_threshold`)
    }

    /**
     * Number of samples to take with motion blur
     * @desc int in [1, 64], default 8
     */
    public get motion_blur_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.motion_blur_samples`)
    }

    /**
     * Time taken in frames between shutter open and close
     * @desc float in [0, inf], default 0.5
     */
    public get motion_blur_shutter(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motion_blur_shutter`)
    }

    /**
     * Percentage of render size to add as overscan to the internal render buffers
     * @desc float in [0, 50], default 3.0
     */
    public get overscan_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.overscan_size`)
    }

    /**
     * Size of sun light shadow maps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '1024'
     */
    public get shadow_cascade_size(): '64' | '128' | '256' | '512' | '1024' | '2048' | '4096' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shadow_cascade_size`)
    }

    /**
     * Size of point and area light shadow maps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '512'
     */
    public get shadow_cube_size(): '64' | '128' | '256' | '512' | '1024' | '2048' | '4096' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shadow_cube_size`)
    }

    /**
     * Screen percentage used to fade the SSR
     * @desc float in [0, 0.5], default 0.075
     */
    public get ssr_border_fade(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ssr_border_fade`)
    }

    /**
     * Clamp pixel intensity to remove noise (0 to disabled)
     * @desc float in [0, inf], default 10.0
     */
    public get ssr_firefly_fac(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ssr_firefly_fac`)
    }

    /**
     * Do not raytrace reflections for roughness above this value
     * @desc float in [0, 1], default 0.5
     */
    public get ssr_max_roughness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ssr_max_roughness`)
    }

    /**
     * Precision of the screen space raytracing
     * @desc float in [0, 1], default 0.25
     */
    public get ssr_quality(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ssr_quality`)
    }

    /**
     * Pixel thickness used to detect intersection
     * @desc float in [1e-06, inf], default 0.2
     */
    public get ssr_thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ssr_thickness`)
    }

    /**
     * Rotate samples that are below this threshold
     * @desc float in [0, 1], default 0.3
     */
    public get sss_jitter_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sss_jitter_threshold`)
    }

    /**
     * Number of samples to compute the scattering effect
     * @desc int in [1, 32], default 7
     */
    public get sss_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.sss_samples`)
    }

    /**
     * Number of samples per pixels for rendering
     * @desc int in [1, inf], default 64
     */
    public get taa_render_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.taa_render_samples`)
    }

    /**
     * Number of samples, unlimited if 0
     * @desc int in [0, inf], default 16
     */
    public get taa_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.taa_samples`)
    }

    /**
     * High brightness pixels generate a glowing effect
     * @desc boolean, default False
     */
    public get use_bloom(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bloom`)
    }

    /**
     * Enable ambient occlusion to simulate medium scale indirect shadowing
     * @desc boolean, default False
     */
    public get use_gtao(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gtao`)
    }

    /**
     * Compute main non occluded direction to sample the environment
     * @desc boolean, default True
     */
    public get use_gtao_bent_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gtao_bent_normals`)
    }

    /**
     * An approximation to simulate light bounces giving less occlusion on brighter objects
     * @desc boolean, default True
     */
    public get use_gtao_bounce(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gtao_bounce`)
    }

    /**
     * Enable motion blur effect (only in camera view)
     * @desc boolean, default False
     */
    public get use_motion_blur(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motion_blur`)
    }

    /**
     * Internally render past the image border to avoid screen-space effects disappearing
     * @desc boolean, default False
     */
    public get use_overscan(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overscan`)
    }

    /**
     * Use 32bit shadows
     * @desc boolean, default False
     */
    public get use_shadow_high_bitdepth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_shadow_high_bitdepth`)
    }

    /**
     * Randomize shadowmaps origin to create soft shadows
     * @desc boolean, default True
     */
    public get use_soft_shadows(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_soft_shadows`)
    }

    /**
     * Enable screen space reflection
     * @desc boolean, default False
     */
    public get use_ssr(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ssr`)
    }

    /**
     * Raytrace at a lower resolution
     * @desc boolean, default True
     */
    public get use_ssr_halfres(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ssr_halfres`)
    }

    /**
     * Enable screen space Refractions
     * @desc boolean, default False
     */
    public get use_ssr_refraction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ssr_refraction`)
    }

    /**
     * Denoise image using temporal reprojection (can leave some ghosting)
     * @desc boolean, default True
     */
    public get use_taa_reprojection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_taa_reprojection`)
    }

    /**
     * Enable scene light interactions with volumetrics
     * @desc boolean, default True
     */
    public get use_volumetric_lights(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_volumetric_lights`)
    }

    /**
     * Generate shadows from volumetric material (Very expensive)
     * @desc boolean, default False
     */
    public get use_volumetric_shadows(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_volumetric_shadows`)
    }

    /**
     * End distance of the volumetric effect
     * @desc float in [1e-06, inf], default 100.0
     */
    public get volumetric_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volumetric_end`)
    }

    /**
     * Maximum light contribution, reducing noise
     * @desc float in [0, inf], default 0.0
     */
    public get volumetric_light_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volumetric_light_clamp`)
    }

    /**
     * Distribute more samples closer to the camera
     * @desc float in [0, 1], default 0.8
     */
    public get volumetric_sample_distribution(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volumetric_sample_distribution`)
    }

    /**
     * Number of samples to compute volumetric effects
     * @desc int in [1, 256], default 64
     */
    public get volumetric_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.volumetric_samples`)
    }

    /**
     * Number of samples to compute volumetric shadowing
     * @desc int in [1, 128], default 16
     */
    public get volumetric_shadow_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.volumetric_shadow_samples`)
    }

    /**
     * Start distance of the volumetric effect
     * @desc float in [1e-06, inf], default 0.1
     */
    public get volumetric_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volumetric_start`)
    }

    /**
     * Control the quality of the volumetric effects (lower size increase vram usage and quality)
     * @desc enum in ['2', '4', '8', '16'], default '8'
     */
    public get volumetric_tile_size(): '2' | '4' | '8' | '16' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volumetric_tile_size`)
    }

    /**
     * Maximum intensity a bloom pixel can have (0 to disabled)
     * @desc float in [0, 100000], default 0.0
     */
    public set bloom_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bloom_clamp`, value)
    }

    /**
     * Color applied to the bloom effect
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set bloom_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.bloom_color`, value)
    }

    /**
     * Blend factor
     * @desc float in [0, 10000], default 0.05
     */
    public set bloom_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bloom_intensity`, value)
    }

    /**
     * Makes transition between under/over-threshold gradual
     * @desc float in [0, 1], default 0.5
     */
    public set bloom_knee(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bloom_knee`, value)
    }

    /**
     * Bloom spread distance
     * @desc float in [0, 100], default 6.5
     */
    public set bloom_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bloom_radius`, value)
    }

    /**
     * Filters out pixels under this level of brightness
     * @desc float in [0, 100000], default 0.8
     */
    public set bloom_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bloom_threshold`, value)
    }

    /**
     * Max size of the bokeh shape for the depth of field (lower is faster)
     * @desc float in [0, 2000], default 100.0
     */
    public set bokeh_max_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bokeh_max_size`, value)
    }

    /**
     * Brightness threshold for using sprite base depth of field
     * @desc float in [0, 100000], default 1.0
     */
    public set bokeh_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bokeh_threshold`, value)
    }

    /**
     * Auto bake indirect lighting when editing probes
     * @desc boolean, default False
     */
    public set gi_auto_bake(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.gi_auto_bake`, value)
    }

    /**
     * Size of the cubemap spheres to debug captured light
     * @desc float in [0.05, 10], default 0.3
     */
    public set gi_cubemap_display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gi_cubemap_display_size`, value)
    }

    /**
     * Size of every cubemaps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '512'
     */
    public set gi_cubemap_resolution(value: '64' | '128' | '256' | '512' | '1024' | '2048' | '4096') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gi_cubemap_resolution`, value)
    }

    /**
     * Number of time the light is reinjected inside light grids, 0 disable indirect diffuse light
     * @desc int in [0, inf], default 3
     */
    public set gi_diffuse_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gi_diffuse_bounces`, value)
    }

    /**
     * Take more samples during cubemap filtering to remove artifacts
     * @desc float in [1, 8], default 3.0
     */
    public set gi_filter_quality(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gi_filter_quality`, value)
    }

    /**
     * Clamp pixel intensity to reduce noise inside glossy reflections from reflection cubemaps (0 to disabled)
     * @desc float in [0, inf], default 0.0
     */
    public set gi_glossy_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gi_glossy_clamp`, value)
    }

    /**
     * Size of the irradiance sample spheres to debug captured light
     * @desc float in [0.05, 10], default 0.1
     */
    public set gi_irradiance_display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gi_irradiance_display_size`, value)
    }

    /**
     * Smoother irradiance interpolation but introduce light bleeding
     * @desc float in [0, inf], default 0.1
     */
    public set gi_irradiance_smoothing(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gi_irradiance_smoothing`, value)
    }

    /**
     * Display captured cubemaps in the viewport
     * @desc boolean, default False
     */
    public set gi_show_cubemaps(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.gi_show_cubemaps`, value)
    }

    /**
     * Display irradiance samples in the viewport
     * @desc boolean, default False
     */
    public set gi_show_irradiance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.gi_show_irradiance`, value)
    }

    /**
     * Size of the shadow map applied to each irradiance sample
     * @desc enum in ['8', '16', '32', '64'], default '32'
     */
    public set gi_visibility_resolution(value: '8' | '16' | '32' | '64') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gi_visibility_resolution`, value)
    }

    /**
     * Distance of object that contribute to the ambient occlusion effect
     * @desc float in [0, 100000], default 0.2
     */
    public set gtao_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gtao_distance`, value)
    }

    /**
     * Factor for ambient occlusion blending
     * @desc float in [0, inf], default 1.0
     */
    public set gtao_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gtao_factor`, value)
    }

    /**
     * Precision of the horizon search
     * @desc float in [0, 1], default 0.25
     */
    public set gtao_quality(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gtao_quality`, value)
    }

    /**
     * Minimum light intensity for a light to contribute to the lighting
     * @desc float in [0, inf], default 0.01
     */
    public set light_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.light_threshold`, value)
    }

    /**
     * Number of samples to take with motion blur
     * @desc int in [1, 64], default 8
     */
    public set motion_blur_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.motion_blur_samples`, value)
    }

    /**
     * Time taken in frames between shutter open and close
     * @desc float in [0, inf], default 0.5
     */
    public set motion_blur_shutter(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motion_blur_shutter`, value)
    }

    /**
     * Percentage of render size to add as overscan to the internal render buffers
     * @desc float in [0, 50], default 3.0
     */
    public set overscan_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.overscan_size`, value)
    }

    /**
     * Size of sun light shadow maps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '1024'
     */
    public set shadow_cascade_size(value: '64' | '128' | '256' | '512' | '1024' | '2048' | '4096') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shadow_cascade_size`, value)
    }

    /**
     * Size of point and area light shadow maps
     * @desc enum in ['64', '128', '256', '512', '1024', '2048', '4096'], default '512'
     */
    public set shadow_cube_size(value: '64' | '128' | '256' | '512' | '1024' | '2048' | '4096') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shadow_cube_size`, value)
    }

    /**
     * Screen percentage used to fade the SSR
     * @desc float in [0, 0.5], default 0.075
     */
    public set ssr_border_fade(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ssr_border_fade`, value)
    }

    /**
     * Clamp pixel intensity to remove noise (0 to disabled)
     * @desc float in [0, inf], default 10.0
     */
    public set ssr_firefly_fac(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ssr_firefly_fac`, value)
    }

    /**
     * Do not raytrace reflections for roughness above this value
     * @desc float in [0, 1], default 0.5
     */
    public set ssr_max_roughness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ssr_max_roughness`, value)
    }

    /**
     * Precision of the screen space raytracing
     * @desc float in [0, 1], default 0.25
     */
    public set ssr_quality(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ssr_quality`, value)
    }

    /**
     * Pixel thickness used to detect intersection
     * @desc float in [1e-06, inf], default 0.2
     */
    public set ssr_thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ssr_thickness`, value)
    }

    /**
     * Rotate samples that are below this threshold
     * @desc float in [0, 1], default 0.3
     */
    public set sss_jitter_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sss_jitter_threshold`, value)
    }

    /**
     * Number of samples to compute the scattering effect
     * @desc int in [1, 32], default 7
     */
    public set sss_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.sss_samples`, value)
    }

    /**
     * Number of samples per pixels for rendering
     * @desc int in [1, inf], default 64
     */
    public set taa_render_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.taa_render_samples`, value)
    }

    /**
     * Number of samples, unlimited if 0
     * @desc int in [0, inf], default 16
     */
    public set taa_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.taa_samples`, value)
    }

    /**
     * High brightness pixels generate a glowing effect
     * @desc boolean, default False
     */
    public set use_bloom(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bloom`, value)
    }

    /**
     * Enable ambient occlusion to simulate medium scale indirect shadowing
     * @desc boolean, default False
     */
    public set use_gtao(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gtao`, value)
    }

    /**
     * Compute main non occluded direction to sample the environment
     * @desc boolean, default True
     */
    public set use_gtao_bent_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gtao_bent_normals`, value)
    }

    /**
     * An approximation to simulate light bounces giving less occlusion on brighter objects
     * @desc boolean, default True
     */
    public set use_gtao_bounce(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gtao_bounce`, value)
    }

    /**
     * Enable motion blur effect (only in camera view)
     * @desc boolean, default False
     */
    public set use_motion_blur(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motion_blur`, value)
    }

    /**
     * Internally render past the image border to avoid screen-space effects disappearing
     * @desc boolean, default False
     */
    public set use_overscan(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overscan`, value)
    }

    /**
     * Use 32bit shadows
     * @desc boolean, default False
     */
    public set use_shadow_high_bitdepth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_shadow_high_bitdepth`, value)
    }

    /**
     * Randomize shadowmaps origin to create soft shadows
     * @desc boolean, default True
     */
    public set use_soft_shadows(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_soft_shadows`, value)
    }

    /**
     * Enable screen space reflection
     * @desc boolean, default False
     */
    public set use_ssr(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ssr`, value)
    }

    /**
     * Raytrace at a lower resolution
     * @desc boolean, default True
     */
    public set use_ssr_halfres(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ssr_halfres`, value)
    }

    /**
     * Enable screen space Refractions
     * @desc boolean, default False
     */
    public set use_ssr_refraction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ssr_refraction`, value)
    }

    /**
     * Denoise image using temporal reprojection (can leave some ghosting)
     * @desc boolean, default True
     */
    public set use_taa_reprojection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_taa_reprojection`, value)
    }

    /**
     * Enable scene light interactions with volumetrics
     * @desc boolean, default True
     */
    public set use_volumetric_lights(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_volumetric_lights`, value)
    }

    /**
     * Generate shadows from volumetric material (Very expensive)
     * @desc boolean, default False
     */
    public set use_volumetric_shadows(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_volumetric_shadows`, value)
    }

    /**
     * End distance of the volumetric effect
     * @desc float in [1e-06, inf], default 100.0
     */
    public set volumetric_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volumetric_end`, value)
    }

    /**
     * Maximum light contribution, reducing noise
     * @desc float in [0, inf], default 0.0
     */
    public set volumetric_light_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volumetric_light_clamp`, value)
    }

    /**
     * Distribute more samples closer to the camera
     * @desc float in [0, 1], default 0.8
     */
    public set volumetric_sample_distribution(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volumetric_sample_distribution`, value)
    }

    /**
     * Number of samples to compute volumetric effects
     * @desc int in [1, 256], default 64
     */
    public set volumetric_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.volumetric_samples`, value)
    }

    /**
     * Number of samples to compute volumetric shadowing
     * @desc int in [1, 128], default 16
     */
    public set volumetric_shadow_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.volumetric_shadow_samples`, value)
    }

    /**
     * Start distance of the volumetric effect
     * @desc float in [1e-06, inf], default 0.1
     */
    public set volumetric_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volumetric_start`, value)
    }

    /**
     * Control the quality of the volumetric effects (lower size increase vram usage and quality)
     * @desc enum in ['2', '4', '8', '16'], default '8'
     */
    public set volumetric_tile_size(value: '2' | '4' | '8' | '16') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volumetric_tile_size`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
