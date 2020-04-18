import { ActionOperators } from './ActionOperators'
import { AnimOperators } from './AnimOperators'
import { ArmatureOperators } from './ArmatureOperators'
import { BoidOperators } from './BoidOperators'
import { BrushOperators } from './BrushOperators'
import { ButtonsOperators } from './ButtonsOperators'
import { CachefileOperators } from './CachefileOperators'
import { CameraOperators } from './CameraOperators'
import { ClipOperators } from './ClipOperators'
import { ClothOperators } from './ClothOperators'
import { CollectionOperators } from './CollectionOperators'
import { ConsoleOperators } from './ConsoleOperators'
import { ConstraintOperators } from './ConstraintOperators'
import { CurveOperators } from './CurveOperators'
import { CyclesOperators } from './CyclesOperators'
import { DpaintOperators } from './DpaintOperators'
import { EdOperators } from './EdOperators'
import { Export_animOperators } from './Export_animOperators'
import { Export_meshOperators } from './Export_meshOperators'
import { Export_sceneOperators } from './Export_sceneOperators'
import { FileOperators } from './FileOperators'
import { FluidOperators } from './FluidOperators'
import { FontOperators } from './FontOperators'
import { GizmogroupOperators } from './GizmogroupOperators'
import { GpencilOperators } from './GpencilOperators'
import { GraphOperators } from './GraphOperators'
import { ImageOperators } from './ImageOperators'
import { Import_animOperators } from './Import_animOperators'
import { Import_curveOperators } from './Import_curveOperators'
import { Import_meshOperators } from './Import_meshOperators'
import { Import_sceneOperators } from './Import_sceneOperators'
import { InfoOperators } from './InfoOperators'
import { LatticeOperators } from './LatticeOperators'
import { MarkerOperators } from './MarkerOperators'
import { MaskOperators } from './MaskOperators'
import { MaterialOperators } from './MaterialOperators'
import { MballOperators } from './MballOperators'
import { MeshOperators } from './MeshOperators'
import { NlaOperators } from './NlaOperators'
import { NodeOperators } from './NodeOperators'
import { ObjectOperators } from './ObjectOperators'
import { OutlinerOperators } from './OutlinerOperators'
import { PaintOperators } from './PaintOperators'
import { PaintcurveOperators } from './PaintcurveOperators'
import { PaletteOperators } from './PaletteOperators'
import { ParticleOperators } from './ParticleOperators'
import { PoseOperators } from './PoseOperators'
import { PoselibOperators } from './PoselibOperators'
import { PreferencesOperators } from './PreferencesOperators'
import { PtcacheOperators } from './PtcacheOperators'
import { RenderOperators } from './RenderOperators'
import { RigidbodyOperators } from './RigidbodyOperators'
import { Safe_areasOperators } from './Safe_areasOperators'
import { SceneOperators } from './SceneOperators'
import { ScreenOperators } from './ScreenOperators'
import { ScriptOperators } from './ScriptOperators'
import { SculptOperators } from './SculptOperators'
import { SequencerOperators } from './SequencerOperators'
import { SoundOperators } from './SoundOperators'
import { SurfaceOperators } from './SurfaceOperators'
import { TextOperators } from './TextOperators'
import { TextureOperators } from './TextureOperators'
import { TransformOperators } from './TransformOperators'
import { UiOperators } from './UiOperators'
import { UvOperators } from './UvOperators'
import { View2dOperators } from './View2dOperators'
import { View3dOperators } from './View3dOperators'
import { WmOperators } from './WmOperators'
import { WorkspaceOperators } from './WorkspaceOperators'
import { WorldOperators } from './WorldOperators'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop }  from '../../../python/interop'
export class Ops {
    constructor(private interop: BlenderInterop, private accessor: string) {
    }
    /** href() {
                return this.local.href;
            } */
    public get action(): ActionOperators {
        return new ActionOperators(this.interop, `${this.accessor}.action`)
    }
    /** href() {
                return this.local.href;
            } */
    public get anim(): AnimOperators {
        return new AnimOperators(this.interop, `${this.accessor}.anim`)
    }
    /** href() {
                return this.local.href;
            } */
    public get armature(): ArmatureOperators {
        return new ArmatureOperators(this.interop, `${this.accessor}.armature`)
    }
    /** href() {
                return this.local.href;
            } */
    public get boid(): BoidOperators {
        return new BoidOperators(this.interop, `${this.accessor}.boid`)
    }
    /** href() {
                return this.local.href;
            } */
    public get brush(): BrushOperators {
        return new BrushOperators(this.interop, `${this.accessor}.brush`)
    }
    /** href() {
                return this.local.href;
            } */
    public get buttons(): ButtonsOperators {
        return new ButtonsOperators(this.interop, `${this.accessor}.buttons`)
    }
    /** href() {
                return this.local.href;
            } */
    public get cachefile(): CachefileOperators {
        return new CachefileOperators(this.interop, `${this.accessor}.cachefile`)
    }
    /** href() {
                return this.local.href;
            } */
    public get camera(): CameraOperators {
        return new CameraOperators(this.interop, `${this.accessor}.camera`)
    }
    /** href() {
                return this.local.href;
            } */
    public get clip(): ClipOperators {
        return new ClipOperators(this.interop, `${this.accessor}.clip`)
    }
    /** href() {
                return this.local.href;
            } */
    public get cloth(): ClothOperators {
        return new ClothOperators(this.interop, `${this.accessor}.cloth`)
    }
    /** href() {
                return this.local.href;
            } */
    public get collection(): CollectionOperators {
        return new CollectionOperators(this.interop, `${this.accessor}.collection`)
    }
    /** href() {
                return this.local.href;
            } */
    public get console(): ConsoleOperators {
        return new ConsoleOperators(this.interop, `${this.accessor}.console`)
    }
    /** href() {
                return this.local.href;
            } */
    public get constraint(): ConstraintOperators {
        return new ConstraintOperators(this.interop, `${this.accessor}.constraint`)
    }
    /** href() {
                return this.local.href;
            } */
    public get curve(): CurveOperators {
        return new CurveOperators(this.interop, `${this.accessor}.curve`)
    }
    /** href() {
                return this.local.href;
            } */
    public get cycles(): CyclesOperators {
        return new CyclesOperators(this.interop, `${this.accessor}.cycles`)
    }
    /** href() {
                return this.local.href;
            } */
    public get dpaint(): DpaintOperators {
        return new DpaintOperators(this.interop, `${this.accessor}.dpaint`)
    }
    /** href() {
                return this.local.href;
            } */
    public get ed(): EdOperators {
        return new EdOperators(this.interop, `${this.accessor}.ed`)
    }
    /** href() {
                return this.local.href;
            } */
    public get export_anim(): Export_animOperators {
        return new Export_animOperators(this.interop, `${this.accessor}.export_anim`)
    }
    /** href() {
                return this.local.href;
            } */
    public get export_mesh(): Export_meshOperators {
        return new Export_meshOperators(this.interop, `${this.accessor}.export_mesh`)
    }
    /** href() {
                return this.local.href;
            } */
    public get export_scene(): Export_sceneOperators {
        return new Export_sceneOperators(this.interop, `${this.accessor}.export_scene`)
    }
    /** href() {
                return this.local.href;
            } */
    public get file(): FileOperators {
        return new FileOperators(this.interop, `${this.accessor}.file`)
    }
    /** href() {
                return this.local.href;
            } */
    public get fluid(): FluidOperators {
        return new FluidOperators(this.interop, `${this.accessor}.fluid`)
    }
    /** href() {
                return this.local.href;
            } */
    public get font(): FontOperators {
        return new FontOperators(this.interop, `${this.accessor}.font`)
    }
    /** href() {
                return this.local.href;
            } */
    public get gizmogroup(): GizmogroupOperators {
        return new GizmogroupOperators(this.interop, `${this.accessor}.gizmogroup`)
    }
    /** href() {
                return this.local.href;
            } */
    public get gpencil(): GpencilOperators {
        return new GpencilOperators(this.interop, `${this.accessor}.gpencil`)
    }
    /** href() {
                return this.local.href;
            } */
    public get graph(): GraphOperators {
        return new GraphOperators(this.interop, `${this.accessor}.graph`)
    }
    /** href() {
                return this.local.href;
            } */
    public get image(): ImageOperators {
        return new ImageOperators(this.interop, `${this.accessor}.image`)
    }
    /** href() {
                return this.local.href;
            } */
    public get import_anim(): Import_animOperators {
        return new Import_animOperators(this.interop, `${this.accessor}.import_anim`)
    }
    /** href() {
                return this.local.href;
            } */
    public get import_curve(): Import_curveOperators {
        return new Import_curveOperators(this.interop, `${this.accessor}.import_curve`)
    }
    /** href() {
                return this.local.href;
            } */
    public get import_mesh(): Import_meshOperators {
        return new Import_meshOperators(this.interop, `${this.accessor}.import_mesh`)
    }
    /** href() {
                return this.local.href;
            } */
    public get import_scene(): Import_sceneOperators {
        return new Import_sceneOperators(this.interop, `${this.accessor}.import_scene`)
    }
    /** href() {
                return this.local.href;
            } */
    public get info(): InfoOperators {
        return new InfoOperators(this.interop, `${this.accessor}.info`)
    }
    /** href() {
                return this.local.href;
            } */
    public get lattice(): LatticeOperators {
        return new LatticeOperators(this.interop, `${this.accessor}.lattice`)
    }
    /** href() {
                return this.local.href;
            } */
    public get marker(): MarkerOperators {
        return new MarkerOperators(this.interop, `${this.accessor}.marker`)
    }
    /** href() {
                return this.local.href;
            } */
    public get mask(): MaskOperators {
        return new MaskOperators(this.interop, `${this.accessor}.mask`)
    }
    /** href() {
                return this.local.href;
            } */
    public get material(): MaterialOperators {
        return new MaterialOperators(this.interop, `${this.accessor}.material`)
    }
    /** href() {
                return this.local.href;
            } */
    public get mball(): MballOperators {
        return new MballOperators(this.interop, `${this.accessor}.mball`)
    }
    /** href() {
                return this.local.href;
            } */
    public get mesh(): MeshOperators {
        return new MeshOperators(this.interop, `${this.accessor}.mesh`)
    }
    /** href() {
                return this.local.href;
            } */
    public get nla(): NlaOperators {
        return new NlaOperators(this.interop, `${this.accessor}.nla`)
    }
    /** href() {
                return this.local.href;
            } */
    public get node(): NodeOperators {
        return new NodeOperators(this.interop, `${this.accessor}.node`)
    }
    /** href() {
                return this.local.href;
            } */
    public get object(): ObjectOperators {
        return new ObjectOperators(this.interop, `${this.accessor}.object`)
    }
    /** href() {
                return this.local.href;
            } */
    public get outliner(): OutlinerOperators {
        return new OutlinerOperators(this.interop, `${this.accessor}.outliner`)
    }
    /** href() {
                return this.local.href;
            } */
    public get paint(): PaintOperators {
        return new PaintOperators(this.interop, `${this.accessor}.paint`)
    }
    /** href() {
                return this.local.href;
            } */
    public get paintcurve(): PaintcurveOperators {
        return new PaintcurveOperators(this.interop, `${this.accessor}.paintcurve`)
    }
    /** href() {
                return this.local.href;
            } */
    public get palette(): PaletteOperators {
        return new PaletteOperators(this.interop, `${this.accessor}.palette`)
    }
    /** href() {
                return this.local.href;
            } */
    public get particle(): ParticleOperators {
        return new ParticleOperators(this.interop, `${this.accessor}.particle`)
    }
    /** href() {
                return this.local.href;
            } */
    public get pose(): PoseOperators {
        return new PoseOperators(this.interop, `${this.accessor}.pose`)
    }
    /** href() {
                return this.local.href;
            } */
    public get poselib(): PoselibOperators {
        return new PoselibOperators(this.interop, `${this.accessor}.poselib`)
    }
    /** href() {
                return this.local.href;
            } */
    public get preferences(): PreferencesOperators {
        return new PreferencesOperators(this.interop, `${this.accessor}.preferences`)
    }
    /** href() {
                return this.local.href;
            } */
    public get ptcache(): PtcacheOperators {
        return new PtcacheOperators(this.interop, `${this.accessor}.ptcache`)
    }
    /** href() {
                return this.local.href;
            } */
    public get render(): RenderOperators {
        return new RenderOperators(this.interop, `${this.accessor}.render`)
    }
    /** href() {
                return this.local.href;
            } */
    public get rigidbody(): RigidbodyOperators {
        return new RigidbodyOperators(this.interop, `${this.accessor}.rigidbody`)
    }
    /** href() {
                return this.local.href;
            } */
    public get safe_areas(): Safe_areasOperators {
        return new Safe_areasOperators(this.interop, `${this.accessor}.safe_areas`)
    }
    /** href() {
                return this.local.href;
            } */
    public get scene(): SceneOperators {
        return new SceneOperators(this.interop, `${this.accessor}.scene`)
    }
    /** href() {
                return this.local.href;
            } */
    public get screen(): ScreenOperators {
        return new ScreenOperators(this.interop, `${this.accessor}.screen`)
    }
    /** href() {
                return this.local.href;
            } */
    public get script(): ScriptOperators {
        return new ScriptOperators(this.interop, `${this.accessor}.script`)
    }
    /** href() {
                return this.local.href;
            } */
    public get sculpt(): SculptOperators {
        return new SculptOperators(this.interop, `${this.accessor}.sculpt`)
    }
    /** href() {
                return this.local.href;
            } */
    public get sequencer(): SequencerOperators {
        return new SequencerOperators(this.interop, `${this.accessor}.sequencer`)
    }
    /** href() {
                return this.local.href;
            } */
    public get sound(): SoundOperators {
        return new SoundOperators(this.interop, `${this.accessor}.sound`)
    }
    /** href() {
                return this.local.href;
            } */
    public get surface(): SurfaceOperators {
        return new SurfaceOperators(this.interop, `${this.accessor}.surface`)
    }
    /** href() {
                return this.local.href;
            } */
    public get text(): TextOperators {
        return new TextOperators(this.interop, `${this.accessor}.text`)
    }
    /** href() {
                return this.local.href;
            } */
    public get texture(): TextureOperators {
        return new TextureOperators(this.interop, `${this.accessor}.texture`)
    }
    /** href() {
                return this.local.href;
            } */
    public get transform(): TransformOperators {
        return new TransformOperators(this.interop, `${this.accessor}.transform`)
    }
    /** href() {
                return this.local.href;
            } */
    public get ui(): UiOperators {
        return new UiOperators(this.interop, `${this.accessor}.ui`)
    }
    /** href() {
                return this.local.href;
            } */
    public get uv(): UvOperators {
        return new UvOperators(this.interop, `${this.accessor}.uv`)
    }
    /** href() {
                return this.local.href;
            } */
    public get view2d(): View2dOperators {
        return new View2dOperators(this.interop, `${this.accessor}.view2d`)
    }
    /** href() {
                return this.local.href;
            } */
    public get view3d(): View3dOperators {
        return new View3dOperators(this.interop, `${this.accessor}.view3d`)
    }
    /** href() {
                return this.local.href;
            } */
    public get wm(): WmOperators {
        return new WmOperators(this.interop, `${this.accessor}.wm`)
    }
    /** href() {
                return this.local.href;
            } */
    public get workspace(): WorkspaceOperators {
        return new WorkspaceOperators(this.interop, `${this.accessor}.workspace`)
    }
    /** href() {
                return this.local.href;
            } */
    public get world(): WorldOperators {
        return new WorldOperators(this.interop, `${this.accessor}.world`)
    }
}