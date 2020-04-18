import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'
import { Collection } from './Collection'

/**
 * DopeSheet
 * 
 * https://docs.blender.org/api/current/bpy.types.DopeSheet.html
 */
export class DopeSheet {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * ID-Block representing source data, usually ID_SCE (i.e. Scene)
     * @desc ID, (readonly)
     */
    public get source(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.source`, ID)
    }

    /**
     * Collection that included object should be a member of
     * @desc Collection
     */
    public get filter_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.filter_collection`, Collection)
    }

    /**
     * F-Curve live filtering string
     * @desc string, default '', (never None)
     */
    public get filter_fcurve_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_fcurve_name`)
    }

    /**
     * Live filtering string
     * @desc string, default '', (never None)
     */
    public get filter_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_text`)
    }

    /**
     * Include visualization of armature related animation data
     * @desc boolean, default False
     */
    public get show_armatures(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_armatures`)
    }

    /**
     * Include visualization of cache file related animation data
     * @desc boolean, default False
     */
    public get show_cache_files(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache_files`)
    }

    /**
     * Include visualization of camera related animation data
     * @desc boolean, default False
     */
    public get show_cameras(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cameras`)
    }

    /**
     * Include visualization of curve related animation data
     * @desc boolean, default False
     */
    public get show_curves(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_curves`)
    }

    /**
     * Show options for whether channels related to certain types of data are included
     * @desc boolean, default False
     */
    public get show_datablock_filters(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_datablock_filters`)
    }

    /**
     * Collapse summary when shown, so all other channels get hidden (Dope Sheet editors only)
     * @desc boolean, default False
     */
    public get show_expanded_summary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded_summary`)
    }

    /**
     * Include visualization of Grease Pencil related animation data and frames
     * @desc boolean, default False
     */
    public get show_gpencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gpencil`)
    }

    /**
     * Only show Grease Pencil data-blocks used as part of the active scene
     * @desc boolean, default False
     */
    public get show_gpencil_3d_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_gpencil_3d_only`)
    }

    /**
     * Include channels from objects/bone that are not visible
     * @desc boolean, default False
     */
    public get show_hidden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_hidden`)
    }

    /**
     * Include visualization of lattice related animation data
     * @desc boolean, default False
     */
    public get show_lattices(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_lattices`)
    }

    /**
     * Include visualization of light related animation data
     * @desc boolean, default False
     */
    public get show_lights(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_lights`)
    }

    /**
     * Include visualization of Line Style related Animation data
     * @desc boolean, default False
     */
    public get show_linestyles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_linestyles`)
    }

    /**
     * Include visualization of material related animation data
     * @desc boolean, default False
     */
    public get show_materials(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_materials`)
    }

    /**
     * Include visualization of mesh related animation data
     * @desc boolean, default False
     */
    public get show_meshes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_meshes`)
    }

    /**
     * Include visualization of metaball related animation data
     * @desc boolean, default False
     */
    public get show_metaballs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_metaballs`)
    }

    /**
     * Include animation data-blocks with no NLA data (NLA editor only)
     * @desc boolean, default False
     */
    public get show_missing_nla(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_missing_nla`)
    }

    /**
     * Include visualization of animation data related to data-blocks linked to modifiers
     * @desc boolean, default False
     */
    public get show_modifiers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_modifiers`)
    }

    /**
     * Include visualization of movie clip related animation data
     * @desc boolean, default False
     */
    public get show_movieclips(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_movieclips`)
    }

    /**
     * Include visualization of node related animation data
     * @desc boolean, default False
     */
    public get show_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_nodes`)
    }

    /**
     * Only include F-Curves and drivers that are disabled or have errors
     * @desc boolean, default False
     */
    public get show_only_errors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_only_errors`)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public get show_only_selected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_only_selected`)
    }

    /**
     * Include visualization of particle related animation data
     * @desc boolean, default False
     */
    public get show_particles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_particles`)
    }

    /**
     * Include visualization of scene related animation data
     * @desc boolean, default False
     */
    public get show_scenes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_scenes`)
    }

    /**
     * Include visualization of shape key related animation data
     * @desc boolean, default False
     */
    public get show_shapekeys(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_shapekeys`)
    }

    /**
     * Include visualization of speaker related animation data
     * @desc boolean, default False
     */
    public get show_speakers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_speakers`)
    }

    /**
     * Display an additional ‘summary’ line (Dope Sheet editors only)
     * @desc boolean, default False
     */
    public get show_summary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_summary`)
    }

    /**
     * Include visualization of texture related animation data
     * @desc boolean, default False
     */
    public get show_textures(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_textures`)
    }

    /**
     * Include visualization of object-level animation data (mostly transforms)
     * @desc boolean, default False
     */
    public get show_transforms(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_transforms`)
    }

    /**
     * Include visualization of world related animation data
     * @desc boolean, default False
     */
    public get show_worlds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_worlds`)
    }

    /**
     * Alphabetically sorts data-blocks - mainly objects in the scene (disable to increase viewport speed)
     * @desc boolean, default False
     */
    public get use_datablock_sort(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_datablock_sort`)
    }

    /**
     * Perform fuzzy/multi-word matching (WARNING: May be slow)
     * @desc boolean, default False
     */
    public get use_multi_word_filter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multi_word_filter`)
    }

    /**
     * Collection that included object should be a member of
     * @desc Collection
     */
    public set filter_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.filter_collection`, value)
    }

    /**
     * F-Curve live filtering string
     * @desc string, default '', (never None)
     */
    public set filter_fcurve_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_fcurve_name`, value)
    }

    /**
     * Live filtering string
     * @desc string, default '', (never None)
     */
    public set filter_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_text`, value)
    }

    /**
     * Include visualization of armature related animation data
     * @desc boolean, default False
     */
    public set show_armatures(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_armatures`, value)
    }

    /**
     * Include visualization of cache file related animation data
     * @desc boolean, default False
     */
    public set show_cache_files(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache_files`, value)
    }

    /**
     * Include visualization of camera related animation data
     * @desc boolean, default False
     */
    public set show_cameras(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cameras`, value)
    }

    /**
     * Include visualization of curve related animation data
     * @desc boolean, default False
     */
    public set show_curves(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_curves`, value)
    }

    /**
     * Show options for whether channels related to certain types of data are included
     * @desc boolean, default False
     */
    public set show_datablock_filters(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_datablock_filters`, value)
    }

    /**
     * Collapse summary when shown, so all other channels get hidden (Dope Sheet editors only)
     * @desc boolean, default False
     */
    public set show_expanded_summary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded_summary`, value)
    }

    /**
     * Include visualization of Grease Pencil related animation data and frames
     * @desc boolean, default False
     */
    public set show_gpencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gpencil`, value)
    }

    /**
     * Only show Grease Pencil data-blocks used as part of the active scene
     * @desc boolean, default False
     */
    public set show_gpencil_3d_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_gpencil_3d_only`, value)
    }

    /**
     * Include channels from objects/bone that are not visible
     * @desc boolean, default False
     */
    public set show_hidden(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_hidden`, value)
    }

    /**
     * Include visualization of lattice related animation data
     * @desc boolean, default False
     */
    public set show_lattices(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_lattices`, value)
    }

    /**
     * Include visualization of light related animation data
     * @desc boolean, default False
     */
    public set show_lights(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_lights`, value)
    }

    /**
     * Include visualization of Line Style related Animation data
     * @desc boolean, default False
     */
    public set show_linestyles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_linestyles`, value)
    }

    /**
     * Include visualization of material related animation data
     * @desc boolean, default False
     */
    public set show_materials(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_materials`, value)
    }

    /**
     * Include visualization of mesh related animation data
     * @desc boolean, default False
     */
    public set show_meshes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_meshes`, value)
    }

    /**
     * Include visualization of metaball related animation data
     * @desc boolean, default False
     */
    public set show_metaballs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_metaballs`, value)
    }

    /**
     * Include animation data-blocks with no NLA data (NLA editor only)
     * @desc boolean, default False
     */
    public set show_missing_nla(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_missing_nla`, value)
    }

    /**
     * Include visualization of animation data related to data-blocks linked to modifiers
     * @desc boolean, default False
     */
    public set show_modifiers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_modifiers`, value)
    }

    /**
     * Include visualization of movie clip related animation data
     * @desc boolean, default False
     */
    public set show_movieclips(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_movieclips`, value)
    }

    /**
     * Include visualization of node related animation data
     * @desc boolean, default False
     */
    public set show_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_nodes`, value)
    }

    /**
     * Only include F-Curves and drivers that are disabled or have errors
     * @desc boolean, default False
     */
    public set show_only_errors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_only_errors`, value)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public set show_only_selected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_only_selected`, value)
    }

    /**
     * Include visualization of particle related animation data
     * @desc boolean, default False
     */
    public set show_particles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_particles`, value)
    }

    /**
     * Include visualization of scene related animation data
     * @desc boolean, default False
     */
    public set show_scenes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_scenes`, value)
    }

    /**
     * Include visualization of shape key related animation data
     * @desc boolean, default False
     */
    public set show_shapekeys(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_shapekeys`, value)
    }

    /**
     * Include visualization of speaker related animation data
     * @desc boolean, default False
     */
    public set show_speakers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_speakers`, value)
    }

    /**
     * Display an additional ‘summary’ line (Dope Sheet editors only)
     * @desc boolean, default False
     */
    public set show_summary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_summary`, value)
    }

    /**
     * Include visualization of texture related animation data
     * @desc boolean, default False
     */
    public set show_textures(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_textures`, value)
    }

    /**
     * Include visualization of object-level animation data (mostly transforms)
     * @desc boolean, default False
     */
    public set show_transforms(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_transforms`, value)
    }

    /**
     * Include visualization of world related animation data
     * @desc boolean, default False
     */
    public set show_worlds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_worlds`, value)
    }

    /**
     * Alphabetically sorts data-blocks - mainly objects in the scene (disable to increase viewport speed)
     * @desc boolean, default False
     */
    public set use_datablock_sort(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_datablock_sort`, value)
    }

    /**
     * Perform fuzzy/multi-word matching (WARNING: May be slow)
     * @desc boolean, default False
     */
    public set use_multi_word_filter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multi_word_filter`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
