import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Sequence } from './Sequence'
import { Sequences } from './Sequences'

/**
 * SequenceEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceEditor.html
 */
export class SequenceEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Meta strip stack, last is currently edited meta strip
     * @desc bpy_prop_collection of Sequence, (readonly)
     */
    public get meta_stack(): BlenderCollection<Sequence> & Indexable<Sequence> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.meta_stack`, Sequence)
    }

    /**
     * Top-level strips only
     * @desc Sequences bpy_prop_collection of Sequence, (readonly)
     */
    public get sequences(): BlenderCollection<Sequence> & Indexable<Sequence> & Sequences {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.sequences`, Sequences, Sequence)
    }

    /**
     * All strips, recursively including those inside metastrips
     * @desc bpy_prop_collection of Sequence, (readonly)
     */
    public get sequences_all(): BlenderCollection<Sequence> & Indexable<Sequence> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.sequences_all`, Sequence)
    }

    /**
     * Sequencer’s active strip
     * @desc Sequence
     */
    public get active_strip(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_strip`, Sequence)
    }

    /**
     * Number of frames to offset
     * @desc int in [-inf, inf], default 0
     */
    public get overlay_frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.overlay_frame`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get proxy_dir(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.proxy_dir`)
    }

    /**
     * How to store proxies for this project
     * @desc enum in ['PER_STRIP', 'PROJECT'], default 'PER_STRIP'
     */
    public get proxy_storage(): 'PER_STRIP' | 'PROJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proxy_storage`)
    }

    /**
     * Only frames with cost lower than this value will be recycled
     * @desc float in [0, 10], default 0.0
     */
    public get recycle_max_cost(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.recycle_max_cost`)
    }

    /**
     * Visualize cached images on the timeline
     * @desc boolean, default False
     */
    public get show_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache`)
    }

    /**
     * Visualize cached composite images
     * @desc boolean, default False
     */
    public get show_cache_composite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache_composite`)
    }

    /**
     * Visualize cached complete frames
     * @desc boolean, default False
     */
    public get show_cache_final_out(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache_final_out`)
    }

    /**
     * Visualize cached preprocessed images
     * @desc boolean, default False
     */
    public get show_cache_preprocessed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache_preprocessed`)
    }

    /**
     * Visualize cached raw images
     * @desc boolean, default False
     */
    public get show_cache_raw(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache_raw`)
    }

    /**
     * Partial overlay on top of the sequencer with a frame offset
     * @desc boolean, default False
     */
    public get show_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_overlay`)
    }

    /**
     * Cache intermediate composited images, for faster tweaking of stacked strips at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_composite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_composite`)
    }

    /**
     * Cache final image for each frame
     * @desc boolean, default False
     */
    public get use_cache_final(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_final`)
    }

    /**
     * Cache preprocessed images, for faster tweaking of effects at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_preprocessed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_preprocessed`)
    }

    /**
     * Cache raw images read from disk, for faster tweaking of strip parameters at the cost of memory usage
     * @desc boolean, default False
     */
    public get use_cache_raw(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cache_raw`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_overlay_lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overlay_lock`)
    }

    /**
     * Render frames ahead of playhead in background for faster playback
     * @desc boolean, default False
     */
    public get use_prefetch(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_prefetch`)
    }

    /**
     * Sequencer’s active strip
     * @desc Sequence
     */
    public set active_strip(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_strip`, value)
    }

    /**
     * Number of frames to offset
     * @desc int in [-inf, inf], default 0
     */
    public set overlay_frame(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.overlay_frame`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set proxy_dir(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.proxy_dir`, value)
    }

    /**
     * How to store proxies for this project
     * @desc enum in ['PER_STRIP', 'PROJECT'], default 'PER_STRIP'
     */
    public set proxy_storage(value: 'PER_STRIP' | 'PROJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proxy_storage`, value)
    }

    /**
     * Only frames with cost lower than this value will be recycled
     * @desc float in [0, 10], default 0.0
     */
    public set recycle_max_cost(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.recycle_max_cost`, value)
    }

    /**
     * Visualize cached images on the timeline
     * @desc boolean, default False
     */
    public set show_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache`, value)
    }

    /**
     * Visualize cached composite images
     * @desc boolean, default False
     */
    public set show_cache_composite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache_composite`, value)
    }

    /**
     * Visualize cached complete frames
     * @desc boolean, default False
     */
    public set show_cache_final_out(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache_final_out`, value)
    }

    /**
     * Visualize cached preprocessed images
     * @desc boolean, default False
     */
    public set show_cache_preprocessed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache_preprocessed`, value)
    }

    /**
     * Visualize cached raw images
     * @desc boolean, default False
     */
    public set show_cache_raw(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache_raw`, value)
    }

    /**
     * Partial overlay on top of the sequencer with a frame offset
     * @desc boolean, default False
     */
    public set show_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_overlay`, value)
    }

    /**
     * Cache intermediate composited images, for faster tweaking of stacked strips at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_composite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_composite`, value)
    }

    /**
     * Cache final image for each frame
     * @desc boolean, default False
     */
    public set use_cache_final(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_final`, value)
    }

    /**
     * Cache preprocessed images, for faster tweaking of effects at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_preprocessed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_preprocessed`, value)
    }

    /**
     * Cache raw images read from disk, for faster tweaking of strip parameters at the cost of memory usage
     * @desc boolean, default False
     */
    public set use_cache_raw(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cache_raw`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_overlay_lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overlay_lock`, value)
    }

    /**
     * Render frames ahead of playhead in background for faster playback
     * @desc boolean, default False
     */
    public set use_prefetch(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_prefetch`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
