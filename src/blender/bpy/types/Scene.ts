import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { Collection } from './Collection'
import { View3DCursor } from './View3DCursor'
import { CyclesRenderSettings } from './CyclesRenderSettings'
import { CyclesCurveRenderSettings } from './CyclesCurveRenderSettings'
import { SceneDisplay } from './SceneDisplay'
import { ColorManagedDisplaySettings } from './ColorManagedDisplaySettings'
import { SceneEEVEE } from './SceneEEVEE'
import { KeyingSets } from './KeyingSets'
import { KeyingSet } from './KeyingSet'
import { KeyingSetsAll } from './KeyingSetsAll'
import { NodeTree } from './NodeTree'
import { SceneObjects } from './SceneObjects'
import { BlenderObject } from './BlenderObject'
import { RenderSettings } from './RenderSettings'
import { RigidBodyWorld } from './RigidBodyWorld'
import { DisplaySafeAreas } from './DisplaySafeAreas'
import { SequenceEditor } from './SequenceEditor'
import { ColorManagedSequencerColorspaceSettings } from './ColorManagedSequencerColorspaceSettings'
import { TimelineMarkers } from './TimelineMarkers'
import { TimelineMarker } from './TimelineMarker'
import { ToolSettings } from './ToolSettings'
import { TransformOrientationSlot } from './TransformOrientationSlot'
import { UnitSettings } from './UnitSettings'
import { ViewLayers } from './ViewLayers'
import { ViewLayer } from './ViewLayer'
import { ColorManagedViewSettings } from './ColorManagedViewSettings'
import { MovieClip } from './MovieClip'
import { GreasePencil } from './GreasePencil'
import { World } from './World'

/**
 * Scene
 * 
 * https://docs.blender.org/api/current/bpy.types.Scene.html
 */
export class Scene {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Scene master collection that objects and other collections in the scene
     * @desc Collection, (readonly, never None)
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * 
     * @desc View3DCursor, (readonly, never None)
     */
    public get cursor(): View3DCursor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cursor`, View3DCursor)
    }

    /**
     * Cycles render settings
     * @desc CyclesRenderSettings, (readonly)
     */
    public get cycles(): CyclesRenderSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesRenderSettings)
    }

    /**
     * Cycles hair rendering settings
     * @desc CyclesCurveRenderSettings, (readonly)
     */
    public get cycles_curves(): CyclesCurveRenderSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles_curves`, CyclesCurveRenderSettings)
    }

    /**
     * Scene display settings for 3d viewport
     * @desc SceneDisplay, (readonly)
     */
    public get display(): SceneDisplay {
        return PythonInterop.getClass(this.interop, `${this.accessor}.display`, SceneDisplay)
    }

    /**
     * Settings of device saved image would be displayed on
     * @desc ColorManagedDisplaySettings, (readonly)
     */
    public get display_settings(): ColorManagedDisplaySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.display_settings`, ColorManagedDisplaySettings)
    }

    /**
     * EEVEE settings for the scene
     * @desc SceneEEVEE, (readonly)
     */
    public get eevee(): SceneEEVEE {
        return PythonInterop.getClass(this.interop, `${this.accessor}.eevee`, SceneEEVEE)
    }

    /**
     * Current frame with subframe and time remapping applied
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0, (readonly)
     */
    public get frame_current_final(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_current_final`)
    }

    /**
     * Whether there is any action referenced by NLA being edited (strictly read-only)
     * @desc boolean, default False, (readonly)
     */
    public get is_nla_tweakmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_nla_tweakmode`)
    }

    /**
     * Absolute Keying Sets for this Scene
     * @desc KeyingSets bpy_prop_collection of KeyingSet, (readonly)
     */
    public get keying_sets(): BlenderCollection<KeyingSet> & Indexable<KeyingSet> & KeyingSets {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keying_sets`, KeyingSets, KeyingSet)
    }

    /**
     * All Keying Sets available for use (Builtins and Absolute Keying Sets for this Scene)
     * @desc KeyingSetsAll bpy_prop_collection of KeyingSet, (readonly)
     */
    public get keying_sets_all(): BlenderCollection<KeyingSet> & Indexable<KeyingSet> & KeyingSetsAll {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keying_sets_all`, KeyingSetsAll, KeyingSet)
    }

    /**
     * Compositing node tree
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * 
     * @desc SceneObjects bpy_prop_collection of Object, (readonly)
     */
    public get objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> & SceneObjects {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.objects`, SceneObjects, BlenderObject)
    }

    /**
     * 
     * @desc RenderSettings, (readonly, never None)
     */
    public get render(): RenderSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.render`, RenderSettings)
    }

    /**
     * 
     * @desc RigidBodyWorld, (readonly)
     */
    public get rigidbody_world(): RigidBodyWorld {
        return PythonInterop.getClass(this.interop, `${this.accessor}.rigidbody_world`, RigidBodyWorld)
    }

    /**
     * 
     * @desc DisplaySafeAreas, (readonly, never None)
     */
    public get safe_areas(): DisplaySafeAreas {
        return PythonInterop.getClass(this.interop, `${this.accessor}.safe_areas`, DisplaySafeAreas)
    }

    /**
     * 
     * @desc SequenceEditor, (readonly)
     */
    public get sequence_editor(): SequenceEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sequence_editor`, SequenceEditor)
    }

    /**
     * Settings of color space sequencer is working in
     * @desc ColorManagedSequencerColorspaceSettings, (readonly)
     */
    public get sequencer_colorspace_settings(): ColorManagedSequencerColorspaceSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sequencer_colorspace_settings`, ColorManagedSequencerColorspaceSettings)
    }

    /**
     * Markers used in all timelines for the current scene
     * @desc TimelineMarkers bpy_prop_collection of TimelineMarker, (readonly)
     */
    public get timeline_markers(): BlenderCollection<TimelineMarker> & Indexable<TimelineMarker> & TimelineMarkers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.timeline_markers`, TimelineMarkers, TimelineMarker)
    }

    /**
     * 
     * @desc ToolSettings, (readonly, never None)
     */
    public get tool_settings(): ToolSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.tool_settings`, ToolSettings)
    }

    /**
     * 
     * @desc bpy_prop_collection of TransformOrientationSlot, (readonly)
     */
    public get transform_orientation_slots(): BlenderCollection<TransformOrientationSlot> & Indexable<TransformOrientationSlot> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.transform_orientation_slots`, TransformOrientationSlot)
    }

    /**
     * Unit editing settings
     * @desc UnitSettings, (readonly, never None)
     */
    public get unit_settings(): UnitSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.unit_settings`, UnitSettings)
    }

    /**
     * 
     * @desc ViewLayers bpy_prop_collection of ViewLayer, (readonly)
     */
    public get view_layers(): BlenderCollection<ViewLayer> & Indexable<ViewLayer> & ViewLayers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.view_layers`, ViewLayers, ViewLayer)
    }

    /**
     * Color management settings applied on image before saving
     * @desc ColorManagedViewSettings, (readonly)
     */
    public get view_settings(): ColorManagedViewSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_settings`, ColorManagedViewSettings)
    }

    /**
     * Active movie clip used for constraints and viewport drawing
     * @desc MovieClip
     */
    public get active_clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_clip`, MovieClip)
    }

    /**
     * Distance model for distance attenuation calculation
     * @desc enum in ['NONE', 'INVERSE', 'INVERSE_CLAMPED', 'LINEAR', 'LINEAR_CLAMPED', 'EXPONENT', 'EXPONENT_CLAMPED'], default 'NONE'
     */
    public get audio_distance_model(): 'NONE' | 'INVERSE' | 'INVERSE_CLAMPED' | 'LINEAR' | 'LINEAR_CLAMPED' | 'EXPONENT' | 'EXPONENT_CLAMPED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_distance_model`)
    }

    /**
     * Pitch factor for Doppler effect calculation
     * @desc float in [0, inf], default 1.0
     */
    public get audio_doppler_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.audio_doppler_factor`)
    }

    /**
     * Speed of sound for Doppler effect calculation
     * @desc float in [0.01, inf], default 343.3
     */
    public get audio_doppler_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.audio_doppler_speed`)
    }

    /**
     * Audio volume
     * @desc float in [0, 100], default 1.0
     */
    public get audio_volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.audio_volume`)
    }

    /**
     * Background set scene
     * @desc Scene
     */
    public get background_set(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.background_set`, Scene)
    }

    /**
     * Active camera, used for rendering the scene
     * @desc Object
     */
    public get camera(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera`, BlenderObject)
    }

    /**
     * Current Frame, to update animation data from python frame_set() instead
     * @desc int in [-1048574, 1048574], default 1
     */
    public get frame_current(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_current`)
    }

    /**
     * Final frame of the playback/rendering range
     * @desc int in [0, 1048574], default 250
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * 
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_float(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_float`)
    }

    /**
     * Alternative end frame for UI playback
     * @desc int in [-inf, inf], default 0
     */
    public get frame_preview_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_preview_end`)
    }

    /**
     * Alternative start frame for UI playback
     * @desc int in [-inf, inf], default 0
     */
    public get frame_preview_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_preview_start`)
    }

    /**
     * First frame of the playback/rendering range
     * @desc int in [0, 1048574], default 1
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Number of frames to skip forward while rendering/playing back each frame
     * @desc int in [0, 1048574], default 1
     */
    public get frame_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_step`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get frame_subframe(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_subframe`)
    }

    /**
     * Constant acceleration in a given direction
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, -9.81)
     */
    public get gravity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gravity`, 'number', 3)
    }

    /**
     * Grease Pencil data-block used for annotations in the 3D view
     * @desc GreasePencil
     */
    public get grease_pencil(): GreasePencil {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, GreasePencil)
    }

    /**
     * Don’t allow frame to be selected with mouse outside of frame range
     * @desc boolean, default False
     */
    public get lock_frame_selection_to_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_frame_selection_to_range`)
    }

    /**
     * Consider keyframes for active Object and/or its selected bones only (in timeline and when jumping between keyframes)
     * @desc boolean, default False
     */
    public get show_keys_from_selected_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_keys_from_selected_only`)
    }

    /**
     * Show current scene subframe and allow set it using interface tools
     * @desc boolean, default False
     */
    public get show_subframe(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_subframe`)
    }

    /**
     * How to sync playback
     * @desc enum in ['NONE', 'FRAME_DROP', 'AUDIO_SYNC'], default 'AUDIO_SYNC'
     */
    public get sync_mode(): 'NONE' | 'FRAME_DROP' | 'AUDIO_SYNC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sync_mode`)
    }

    /**
     * Play back of audio from Sequence Editor will be muted
     * @desc boolean, default False
     */
    public get use_audio(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_audio`)
    }

    /**
     * Play audio from Sequence Editor while scrubbing
     * @desc boolean, default False
     */
    public get use_audio_scrub(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_audio_scrub`)
    }

    /**
     * Use global gravity for all dynamics
     * @desc boolean, default True
     */
    public get use_gravity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gravity`)
    }

    /**
     * Enable the compositing node tree
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * Use an alternative start/end frame range for animation playback and view renders
     * @desc boolean, default False
     */
    public get use_preview_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preview_range`)
    }

    /**
     * User defined note for the render stamping
     * @desc string, default '', (never None)
     */
    public get use_stamp_note(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.use_stamp_note`)
    }

    /**
     * World used for rendering the scene
     * @desc World
     */
    public get world(): World {
        return PythonInterop.getClass(this.interop, `${this.accessor}.world`, World)
    }

    /**
     * Active movie clip used for constraints and viewport drawing
     * @desc MovieClip
     */
    public set active_clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_clip`, value)
    }

    /**
     * Distance model for distance attenuation calculation
     * @desc enum in ['NONE', 'INVERSE', 'INVERSE_CLAMPED', 'LINEAR', 'LINEAR_CLAMPED', 'EXPONENT', 'EXPONENT_CLAMPED'], default 'NONE'
     */
    public set audio_distance_model(value: 'NONE' | 'INVERSE' | 'INVERSE_CLAMPED' | 'LINEAR' | 'LINEAR_CLAMPED' | 'EXPONENT' | 'EXPONENT_CLAMPED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_distance_model`, value)
    }

    /**
     * Pitch factor for Doppler effect calculation
     * @desc float in [0, inf], default 1.0
     */
    public set audio_doppler_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.audio_doppler_factor`, value)
    }

    /**
     * Speed of sound for Doppler effect calculation
     * @desc float in [0.01, inf], default 343.3
     */
    public set audio_doppler_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.audio_doppler_speed`, value)
    }

    /**
     * Audio volume
     * @desc float in [0, 100], default 1.0
     */
    public set audio_volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.audio_volume`, value)
    }

    /**
     * Background set scene
     * @desc Scene
     */
    public set background_set(value: Scene) {
        PythonInterop.setClass(this.interop, `${this.accessor}.background_set`, value)
    }

    /**
     * Active camera, used for rendering the scene
     * @desc Object
     */
    public set camera(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * Current Frame, to update animation data from python frame_set() instead
     * @desc int in [-1048574, 1048574], default 1
     */
    public set frame_current(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_current`, value)
    }

    /**
     * Final frame of the playback/rendering range
     * @desc int in [0, 1048574], default 250
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * 
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_float(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_float`, value)
    }

    /**
     * Alternative end frame for UI playback
     * @desc int in [-inf, inf], default 0
     */
    public set frame_preview_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_preview_end`, value)
    }

    /**
     * Alternative start frame for UI playback
     * @desc int in [-inf, inf], default 0
     */
    public set frame_preview_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_preview_start`, value)
    }

    /**
     * First frame of the playback/rendering range
     * @desc int in [0, 1048574], default 1
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Number of frames to skip forward while rendering/playing back each frame
     * @desc int in [0, 1048574], default 1
     */
    public set frame_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_step`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set frame_subframe(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_subframe`, value)
    }

    /**
     * Constant acceleration in a given direction
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, -9.81)
     */
    public set gravity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gravity`, value)
    }

    /**
     * Grease Pencil data-block used for annotations in the 3D view
     * @desc GreasePencil
     */
    public set grease_pencil(value: GreasePencil) {
        PythonInterop.setClass(this.interop, `${this.accessor}.grease_pencil`, value)
    }

    /**
     * Don’t allow frame to be selected with mouse outside of frame range
     * @desc boolean, default False
     */
    public set lock_frame_selection_to_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_frame_selection_to_range`, value)
    }

    /**
     * Consider keyframes for active Object and/or its selected bones only (in timeline and when jumping between keyframes)
     * @desc boolean, default False
     */
    public set show_keys_from_selected_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_keys_from_selected_only`, value)
    }

    /**
     * Show current scene subframe and allow set it using interface tools
     * @desc boolean, default False
     */
    public set show_subframe(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_subframe`, value)
    }

    /**
     * How to sync playback
     * @desc enum in ['NONE', 'FRAME_DROP', 'AUDIO_SYNC'], default 'AUDIO_SYNC'
     */
    public set sync_mode(value: 'NONE' | 'FRAME_DROP' | 'AUDIO_SYNC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sync_mode`, value)
    }

    /**
     * Play back of audio from Sequence Editor will be muted
     * @desc boolean, default False
     */
    public set use_audio(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_audio`, value)
    }

    /**
     * Play audio from Sequence Editor while scrubbing
     * @desc boolean, default False
     */
    public set use_audio_scrub(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_audio_scrub`, value)
    }

    /**
     * Use global gravity for all dynamics
     * @desc boolean, default True
     */
    public set use_gravity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gravity`, value)
    }

    /**
     * Enable the compositing node tree
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    /**
     * Use an alternative start/end frame range for animation playback and view renders
     * @desc boolean, default False
     */
    public set use_preview_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preview_range`, value)
    }

    /**
     * User defined note for the render stamping
     * @desc string, default '', (never None)
     */
    public set use_stamp_note(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.use_stamp_note`, value)
    }

    /**
     * World used for rendering the scene
     * @desc World
     */
    public set world(value: World) {
        PythonInterop.setClass(this.interop, `${this.accessor}.world`, value)
    }

    /**
     * statistics
     * @desc string, (never None)
     */
    public statistics(options: { view_layer?: unknown }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.statistics`, options)
    }

    /**
     * Set scene frame updating all objects immediately
     * @desc void
     */
    public frame_set(options: { frame?: number, subframe?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_set`, options)
    }

    /**
     * Get uv aspect for current object
     * @desc float array of 2 items in [0, inf]
     */
    public uvedit_aspect(options: { object?: unknown }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.uvedit_aspect`, options)
    }

    /**
     * Cast a ray onto in object space
     * @desc void
     */
    public ray_cast(options: { view_layer?: unknown, distance?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ray_cast`, options)
    }

    /**
     * Ensure sequence editor is valid in this scene
     * @desc SequenceEditor
     */
    public sequence_editor_create(): SequenceEditor {
        return PythonInterop.callClass(this.interop, `${this.accessor}.sequence_editor_create`, {}, SequenceEditor)
    }

    /**
     * Clear sequence editor in this scene
     * @desc void
     */
    public sequence_editor_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sequence_editor_clear`, {})
    }

    /**
     * Export to Alembic file (deprecated, use the Alembic export operator)
     * @desc void
     */
    public alembic_export(options: { filepath?: string, frame_start?: number, frame_end?: number, xform_samples?: number, geom_samples?: number, shutter_open?: number, shutter_close?: number, selected_only?: boolean, uvs?: boolean, normals?: boolean, vcolors?: boolean, apply_subdiv?: boolean, flatten?: boolean, visible_objects_only?: boolean, renderable_only?: boolean, face_sets?: boolean, subdiv_schema?: boolean, export_hair?: boolean, export_particles?: boolean, compression_type?: 'OGAWA' | 'HDF5', packuv?: boolean, scale?: number, triangulate?: boolean, quad_method?: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL', ngon_method?: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.alembic_export`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
