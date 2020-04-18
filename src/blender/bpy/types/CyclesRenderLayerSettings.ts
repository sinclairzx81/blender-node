import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesRenderLayerSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesRenderLayerSettings.html
 */
export class CyclesRenderLayerSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Denoise the direct diffuse lighting
     * @desc boolean, default True
     */
    public get denoising_diffuse_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_diffuse_direct`)
    }

    /**
     * Denoise the indirect diffuse lighting
     * @desc boolean, default True
     */
    public get denoising_diffuse_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_diffuse_indirect`)
    }

    /**
     * Controls removal of noisy image feature passes (lower values preserve more detail, but aren’t as smooth)
     * @desc float in [0, 1], default 0.5
     */
    public get denoising_feature_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.denoising_feature_strength`)
    }

    /**
     * Denoise the direct glossy lighting
     * @desc boolean, default True
     */
    public get denoising_glossy_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_glossy_direct`)
    }

    /**
     * Denoise the indirect glossy lighting
     * @desc boolean, default True
     */
    public get denoising_glossy_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_glossy_indirect`)
    }

    /**
     * Size of the image area that’s used to denoise a pixel (higher values are smoother, but might lose detail and are slower)
     * @desc int in [1, 25], default 8
     */
    public get denoising_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.denoising_radius`)
    }

    /**
     * When removing pixels that don’t carry information, use a relative threshold instead of an absolute one (can help to reduce artifacts, but might cause detail loss around edges)
     * @desc boolean, default False
     */
    public get denoising_relative_pca(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_relative_pca`)
    }

    /**
     * Store the denoising feature passes and the noisy image
     * @desc boolean, default False
     */
    public get denoising_store_passes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_store_passes`)
    }

    /**
     * Controls neighbor pixel weighting for the denoising filter (lower values preserve more detail, but aren’t as smooth)
     * @desc float in [0, 1], default 0.5
     */
    public get denoising_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.denoising_strength`)
    }

    /**
     * Denoise the direct subsurface lighting
     * @desc boolean, default True
     */
    public get denoising_subsurface_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_subsurface_direct`)
    }

    /**
     * Denoise the indirect subsurface lighting
     * @desc boolean, default True
     */
    public get denoising_subsurface_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_subsurface_indirect`)
    }

    /**
     * Denoise the direct transmission lighting
     * @desc boolean, default True
     */
    public get denoising_transmission_direct(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_transmission_direct`)
    }

    /**
     * Denoise the indirect transmission lighting
     * @desc boolean, default True
     */
    public get denoising_transmission_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.denoising_transmission_indirect`)
    }

    /**
     * Store Debug BVH Intersections
     * @desc boolean, default False
     */
    public get pass_debug_bvh_intersections(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pass_debug_bvh_intersections`)
    }

    /**
     * Store Debug BVH Traversed Instances pass
     * @desc boolean, default False
     */
    public get pass_debug_bvh_traversed_instances(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pass_debug_bvh_traversed_instances`)
    }

    /**
     * Store Debug BVH Traversed Nodes pass
     * @desc boolean, default False
     */
    public get pass_debug_bvh_traversed_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pass_debug_bvh_traversed_nodes`)
    }

    /**
     * Store Debug Ray Bounces pass
     * @desc boolean, default False
     */
    public get pass_debug_ray_bounces(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pass_debug_ray_bounces`)
    }

    /**
     * Denoise the rendered image
     * @desc boolean, default False
     */
    public get use_denoising(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_denoising`)
    }

    /**
     * Denoise the direct diffuse lighting
     * @desc boolean, default True
     */
    public set denoising_diffuse_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_diffuse_direct`, value)
    }

    /**
     * Denoise the indirect diffuse lighting
     * @desc boolean, default True
     */
    public set denoising_diffuse_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_diffuse_indirect`, value)
    }

    /**
     * Controls removal of noisy image feature passes (lower values preserve more detail, but aren’t as smooth)
     * @desc float in [0, 1], default 0.5
     */
    public set denoising_feature_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.denoising_feature_strength`, value)
    }

    /**
     * Denoise the direct glossy lighting
     * @desc boolean, default True
     */
    public set denoising_glossy_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_glossy_direct`, value)
    }

    /**
     * Denoise the indirect glossy lighting
     * @desc boolean, default True
     */
    public set denoising_glossy_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_glossy_indirect`, value)
    }

    /**
     * Size of the image area that’s used to denoise a pixel (higher values are smoother, but might lose detail and are slower)
     * @desc int in [1, 25], default 8
     */
    public set denoising_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.denoising_radius`, value)
    }

    /**
     * When removing pixels that don’t carry information, use a relative threshold instead of an absolute one (can help to reduce artifacts, but might cause detail loss around edges)
     * @desc boolean, default False
     */
    public set denoising_relative_pca(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_relative_pca`, value)
    }

    /**
     * Store the denoising feature passes and the noisy image
     * @desc boolean, default False
     */
    public set denoising_store_passes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_store_passes`, value)
    }

    /**
     * Controls neighbor pixel weighting for the denoising filter (lower values preserve more detail, but aren’t as smooth)
     * @desc float in [0, 1], default 0.5
     */
    public set denoising_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.denoising_strength`, value)
    }

    /**
     * Denoise the direct subsurface lighting
     * @desc boolean, default True
     */
    public set denoising_subsurface_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_subsurface_direct`, value)
    }

    /**
     * Denoise the indirect subsurface lighting
     * @desc boolean, default True
     */
    public set denoising_subsurface_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_subsurface_indirect`, value)
    }

    /**
     * Denoise the direct transmission lighting
     * @desc boolean, default True
     */
    public set denoising_transmission_direct(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_transmission_direct`, value)
    }

    /**
     * Denoise the indirect transmission lighting
     * @desc boolean, default True
     */
    public set denoising_transmission_indirect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.denoising_transmission_indirect`, value)
    }

    /**
     * Store Debug BVH Intersections
     * @desc boolean, default False
     */
    public set pass_debug_bvh_intersections(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pass_debug_bvh_intersections`, value)
    }

    /**
     * Store Debug BVH Traversed Instances pass
     * @desc boolean, default False
     */
    public set pass_debug_bvh_traversed_instances(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pass_debug_bvh_traversed_instances`, value)
    }

    /**
     * Store Debug BVH Traversed Nodes pass
     * @desc boolean, default False
     */
    public set pass_debug_bvh_traversed_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pass_debug_bvh_traversed_nodes`, value)
    }

    /**
     * Store Debug Ray Bounces pass
     * @desc boolean, default False
     */
    public set pass_debug_ray_bounces(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pass_debug_ray_bounces`, value)
    }

    /**
     * Denoise the rendered image
     * @desc boolean, default False
     */
    public set use_denoising(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_denoising`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
