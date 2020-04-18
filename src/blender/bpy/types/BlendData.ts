import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlendDataActions } from './BlendDataActions'
import { Action } from './Action'
import { BlendDataArmatures } from './BlendDataArmatures'
import { Armature } from './Armature'
import { BlendDataBrushes } from './BlendDataBrushes'
import { Brush } from './Brush'
import { BlendDataCacheFiles } from './BlendDataCacheFiles'
import { CacheFile } from './CacheFile'
import { BlendDataCameras } from './BlendDataCameras'
import { Camera } from './Camera'
import { BlendDataCollections } from './BlendDataCollections'
import { Collection } from './Collection'
import { BlendDataCurves } from './BlendDataCurves'
import { Curve } from './Curve'
import { BlendDataFonts } from './BlendDataFonts'
import { VectorFont } from './VectorFont'
import { BlendDataGreasePencils } from './BlendDataGreasePencils'
import { GreasePencil } from './GreasePencil'
import { BlendDataImages } from './BlendDataImages'
import { Image } from './Image'
import { BlendDataLattices } from './BlendDataLattices'
import { Lattice } from './Lattice'
import { BlendDataLibraries } from './BlendDataLibraries'
import { Library } from './Library'
import { BlendDataProbes } from './BlendDataProbes'
import { LightProbe } from './LightProbe'
import { BlendDataLights } from './BlendDataLights'
import { Light } from './Light'
import { BlendDataLineStyles } from './BlendDataLineStyles'
import { FreestyleLineStyle } from './FreestyleLineStyle'
import { BlendDataMasks } from './BlendDataMasks'
import { Mask } from './Mask'
import { BlendDataMaterials } from './BlendDataMaterials'
import { Material } from './Material'
import { BlendDataMeshes } from './BlendDataMeshes'
import { Mesh } from './Mesh'
import { BlendDataMetaBalls } from './BlendDataMetaBalls'
import { MetaBall } from './MetaBall'
import { BlendDataMovieClips } from './BlendDataMovieClips'
import { MovieClip } from './MovieClip'
import { BlendDataNodeTrees } from './BlendDataNodeTrees'
import { NodeTree } from './NodeTree'
import { BlendDataObjects } from './BlendDataObjects'
import { BlenderObject } from './BlenderObject'
import { BlendDataPaintCurves } from './BlendDataPaintCurves'
import { PaintCurve } from './PaintCurve'
import { BlendDataPalettes } from './BlendDataPalettes'
import { Palette } from './Palette'
import { BlendDataParticles } from './BlendDataParticles'
import { ParticleSettings } from './ParticleSettings'
import { BlendDataScenes } from './BlendDataScenes'
import { Scene } from './Scene'
import { BlendDataScreens } from './BlendDataScreens'
import { Screen } from './Screen'
import { Key } from './Key'
import { BlendDataSounds } from './BlendDataSounds'
import { Sound } from './Sound'
import { BlendDataSpeakers } from './BlendDataSpeakers'
import { Speaker } from './Speaker'
import { BlendDataTexts } from './BlendDataTexts'
import { Text } from './Text'
import { BlendDataTextures } from './BlendDataTextures'
import { Texture } from './Texture'
import { BlendDataWindowManagers } from './BlendDataWindowManagers'
import { WindowManager } from './WindowManager'
import { BlendDataWorkSpaces } from './BlendDataWorkSpaces'
import { WorkSpace } from './WorkSpace'
import { BlendDataWorlds } from './BlendDataWorlds'
import { World } from './World'

/**
 * BlendData
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendData.html
 */
export class BlendData {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Action data-blocks
     * @desc BlendDataActions bpy_prop_collection of Action, (readonly)
     */
    public get actions(): BlenderCollection<Action> & Indexable<Action> & BlendDataActions {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.actions`, BlendDataActions, Action)
    }

    /**
     * Armature data-blocks
     * @desc BlendDataArmatures bpy_prop_collection of Armature, (readonly)
     */
    public get armatures(): BlenderCollection<Armature> & Indexable<Armature> & BlendDataArmatures {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.armatures`, BlendDataArmatures, Armature)
    }

    /**
     * Brush data-blocks
     * @desc BlendDataBrushes bpy_prop_collection of Brush, (readonly)
     */
    public get brushes(): BlenderCollection<Brush> & Indexable<Brush> & BlendDataBrushes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.brushes`, BlendDataBrushes, Brush)
    }

    /**
     * Cache Files data-blocks
     * @desc BlendDataCacheFiles bpy_prop_collection of CacheFile, (readonly)
     */
    public get cache_files(): BlenderCollection<CacheFile> & Indexable<CacheFile> & BlendDataCacheFiles {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.cache_files`, BlendDataCacheFiles, CacheFile)
    }

    /**
     * Camera data-blocks
     * @desc BlendDataCameras bpy_prop_collection of Camera, (readonly)
     */
    public get cameras(): BlenderCollection<Camera> & Indexable<Camera> & BlendDataCameras {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.cameras`, BlendDataCameras, Camera)
    }

    /**
     * Collection data-blocks
     * @desc BlendDataCollections bpy_prop_collection of Collection, (readonly)
     */
    public get collections(): BlenderCollection<Collection> & Indexable<Collection> & BlendDataCollections {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.collections`, BlendDataCollections, Collection)
    }

    /**
     * Curve data-blocks
     * @desc BlendDataCurves bpy_prop_collection of Curve, (readonly)
     */
    public get curves(): BlenderCollection<Curve> & Indexable<Curve> & BlendDataCurves {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.curves`, BlendDataCurves, Curve)
    }

    /**
     * Path to the .blend file
     * @desc string, default '', (readonly, never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Vector font data-blocks
     * @desc BlendDataFonts bpy_prop_collection of VectorFont, (readonly)
     */
    public get fonts(): BlenderCollection<VectorFont> & Indexable<VectorFont> & BlendDataFonts {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.fonts`, BlendDataFonts, VectorFont)
    }

    /**
     * Grease Pencil data-blocks
     * @desc BlendDataGreasePencils bpy_prop_collection of GreasePencil, (readonly)
     */
    public get grease_pencils(): BlenderCollection<GreasePencil> & Indexable<GreasePencil> & BlendDataGreasePencils {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.grease_pencils`, BlendDataGreasePencils, GreasePencil)
    }

    /**
     * Image data-blocks
     * @desc BlendDataImages bpy_prop_collection of Image, (readonly)
     */
    public get images(): BlenderCollection<Image> & Indexable<Image> & BlendDataImages {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.images`, BlendDataImages, Image)
    }

    /**
     * Have recent edits been saved to disk
     * @desc boolean, default False, (readonly)
     */
    public get is_dirty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_dirty`)
    }

    /**
     * Has the current session been saved to disk as a .blend file
     * @desc boolean, default False, (readonly)
     */
    public get is_saved(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_saved`)
    }

    /**
     * Lattice data-blocks
     * @desc BlendDataLattices bpy_prop_collection of Lattice, (readonly)
     */
    public get lattices(): BlenderCollection<Lattice> & Indexable<Lattice> & BlendDataLattices {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.lattices`, BlendDataLattices, Lattice)
    }

    /**
     * Library data-blocks
     * @desc BlendDataLibraries bpy_prop_collection of Library, (readonly)
     */
    public get libraries(): BlenderCollection<Library> & Indexable<Library> & BlendDataLibraries {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.libraries`, BlendDataLibraries, Library)
    }

    /**
     * LightProbe data-blocks
     * @desc BlendDataProbes bpy_prop_collection of LightProbe, (readonly)
     */
    public get lightprobes(): BlenderCollection<LightProbe> & Indexable<LightProbe> & BlendDataProbes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.lightprobes`, BlendDataProbes, LightProbe)
    }

    /**
     * Light data-blocks
     * @desc BlendDataLights bpy_prop_collection of Light, (readonly)
     */
    public get lights(): BlenderCollection<Light> & Indexable<Light> & BlendDataLights {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.lights`, BlendDataLights, Light)
    }

    /**
     * Line Style data-blocks
     * @desc BlendDataLineStyles bpy_prop_collection of FreestyleLineStyle, (readonly)
     */
    public get linestyles(): BlenderCollection<FreestyleLineStyle> & Indexable<FreestyleLineStyle> & BlendDataLineStyles {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.linestyles`, BlendDataLineStyles, FreestyleLineStyle)
    }

    /**
     * Masks data-blocks
     * @desc BlendDataMasks bpy_prop_collection of Mask, (readonly)
     */
    public get masks(): BlenderCollection<Mask> & Indexable<Mask> & BlendDataMasks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.masks`, BlendDataMasks, Mask)
    }

    /**
     * Material data-blocks
     * @desc BlendDataMaterials bpy_prop_collection of Material, (readonly)
     */
    public get materials(): BlenderCollection<Material> & Indexable<Material> & BlendDataMaterials {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.materials`, BlendDataMaterials, Material)
    }

    /**
     * Mesh data-blocks
     * @desc BlendDataMeshes bpy_prop_collection of Mesh, (readonly)
     */
    public get meshes(): BlenderCollection<Mesh> & Indexable<Mesh> & BlendDataMeshes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.meshes`, BlendDataMeshes, Mesh)
    }

    /**
     * Metaball data-blocks
     * @desc BlendDataMetaBalls bpy_prop_collection of MetaBall, (readonly)
     */
    public get metaballs(): BlenderCollection<MetaBall> & Indexable<MetaBall> & BlendDataMetaBalls {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.metaballs`, BlendDataMetaBalls, MetaBall)
    }

    /**
     * Movie Clip data-blocks
     * @desc BlendDataMovieClips bpy_prop_collection of MovieClip, (readonly)
     */
    public get movieclips(): BlenderCollection<MovieClip> & Indexable<MovieClip> & BlendDataMovieClips {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.movieclips`, BlendDataMovieClips, MovieClip)
    }

    /**
     * Node group data-blocks
     * @desc BlendDataNodeTrees bpy_prop_collection of NodeTree, (readonly)
     */
    public get node_groups(): BlenderCollection<NodeTree> & Indexable<NodeTree> & BlendDataNodeTrees {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.node_groups`, BlendDataNodeTrees, NodeTree)
    }

    /**
     * Object data-blocks
     * @desc BlendDataObjects bpy_prop_collection of Object, (readonly)
     */
    public get objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> & BlendDataObjects {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.objects`, BlendDataObjects, BlenderObject)
    }

    /**
     * Paint Curves data-blocks
     * @desc BlendDataPaintCurves bpy_prop_collection of PaintCurve, (readonly)
     */
    public get paint_curves(): BlenderCollection<PaintCurve> & Indexable<PaintCurve> & BlendDataPaintCurves {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.paint_curves`, BlendDataPaintCurves, PaintCurve)
    }

    /**
     * Palette data-blocks
     * @desc BlendDataPalettes bpy_prop_collection of Palette, (readonly)
     */
    public get palettes(): BlenderCollection<Palette> & Indexable<Palette> & BlendDataPalettes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.palettes`, BlendDataPalettes, Palette)
    }

    /**
     * Particle data-blocks
     * @desc BlendDataParticles bpy_prop_collection of ParticleSettings, (readonly)
     */
    public get particles(): BlenderCollection<ParticleSettings> & Indexable<ParticleSettings> & BlendDataParticles {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.particles`, BlendDataParticles, ParticleSettings)
    }

    /**
     * Scene data-blocks
     * @desc BlendDataScenes bpy_prop_collection of Scene, (readonly)
     */
    public get scenes(): BlenderCollection<Scene> & Indexable<Scene> & BlendDataScenes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.scenes`, BlendDataScenes, Scene)
    }

    /**
     * Screen data-blocks
     * @desc BlendDataScreens bpy_prop_collection of Screen, (readonly)
     */
    public get screens(): BlenderCollection<Screen> & Indexable<Screen> & BlendDataScreens {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.screens`, BlendDataScreens, Screen)
    }

    /**
     * Shape Key data-blocks
     * @desc bpy_prop_collection of Key, (readonly)
     */
    public get shape_keys(): BlenderCollection<Key> & Indexable<Key> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.shape_keys`, Key)
    }

    /**
     * Sound data-blocks
     * @desc BlendDataSounds bpy_prop_collection of Sound, (readonly)
     */
    public get sounds(): BlenderCollection<Sound> & Indexable<Sound> & BlendDataSounds {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.sounds`, BlendDataSounds, Sound)
    }

    /**
     * Speaker data-blocks
     * @desc BlendDataSpeakers bpy_prop_collection of Speaker, (readonly)
     */
    public get speakers(): BlenderCollection<Speaker> & Indexable<Speaker> & BlendDataSpeakers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.speakers`, BlendDataSpeakers, Speaker)
    }

    /**
     * Text data-blocks
     * @desc BlendDataTexts bpy_prop_collection of Text, (readonly)
     */
    public get texts(): BlenderCollection<Text> & Indexable<Text> & BlendDataTexts {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.texts`, BlendDataTexts, Text)
    }

    /**
     * Texture data-blocks
     * @desc BlendDataTextures bpy_prop_collection of Texture, (readonly)
     */
    public get textures(): BlenderCollection<Texture> & Indexable<Texture> & BlendDataTextures {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.textures`, BlendDataTextures, Texture)
    }

    /**
     * Version of Blender the .blend was saved with
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get version(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.version`, 'number', 3)
    }

    /**
     * Window manager data-blocks
     * @desc BlendDataWindowManagers bpy_prop_collection of WindowManager, (readonly)
     */
    public get window_managers(): BlenderCollection<WindowManager> & Indexable<WindowManager> & BlendDataWindowManagers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.window_managers`, BlendDataWindowManagers, WindowManager)
    }

    /**
     * Workspace data-blocks
     * @desc BlendDataWorkSpaces bpy_prop_collection of WorkSpace, (readonly)
     */
    public get workspaces(): BlenderCollection<WorkSpace> & Indexable<WorkSpace> & BlendDataWorkSpaces {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.workspaces`, BlendDataWorkSpaces, WorkSpace)
    }

    /**
     * World data-blocks
     * @desc BlendDataWorlds bpy_prop_collection of World, (readonly)
     */
    public get worlds(): BlenderCollection<World> & Indexable<World> & BlendDataWorlds {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.worlds`, BlendDataWorlds, World)
    }

    /**
     * Automatically pack all external data into .blend file
     * @desc boolean, default False
     */
    public get use_autopack(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_autopack`)
    }

    /**
     * Automatically pack all external data into .blend file
     * @desc boolean, default False
     */
    public set use_autopack(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_autopack`, value)
    }

    /**
     * Remove (delete) several IDs at once.
     * @desc void
     */
    public batch_remove(options: { ids?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.batch_remove`, options)
    }

    /**
     * Returns a mapping of all ID datablocks in current bpy.data to a set of all datablocks using them.
     * @desc dict
     */
    public user_map(options: { subset?: any[], key_types?: any[], value_types?: any[] }): { [key: string]: any } {
        return PythonInterop.callDict(this.interop, `${this.accessor}.user_map`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
