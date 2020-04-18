import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Area } from './Area'
import { BlendData } from './BlendData'
import { Collection } from './Collection'
import { GizmoGroup } from './GizmoGroup'
import { LayerCollection } from './LayerCollection'
import { Preferences } from './Preferences'
import { Region } from './Region'
import { RegionView3D } from './RegionView3D'
import { Scene } from './Scene'
import { Screen } from './Screen'
import { Space } from './Space'
import { ToolSettings } from './ToolSettings'
import { ViewLayer } from './ViewLayer'
import { Window } from './Window'
import { WindowManager } from './WindowManager'
import { WorkSpace } from './WorkSpace'
import { Depsgraph } from './Depsgraph'

/**
 * Context
 * 
 * https://docs.blender.org/api/current/bpy.types.Context.html
 */
export class Context {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Area, (readonly)
     */
    public get area(): Area {
        return PythonInterop.getClass(this.interop, `${this.accessor}.area`, Area)
    }

    /**
     * 
     * @desc BlendData, (readonly)
     */
    public get blend_data(): BlendData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.blend_data`, BlendData)
    }

    /**
     * 
     * @desc Collection, (readonly)
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get engine(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.engine`)
    }

    /**
     * 
     * @desc GizmoGroup, (readonly)
     */
    public get gizmo_group(): GizmoGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gizmo_group`, GizmoGroup)
    }

    /**
     * 
     * @desc LayerCollection, (readonly)
     */
    public get layer_collection(): LayerCollection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layer_collection`, LayerCollection)
    }

    /**
     * 
     * @desc enum in ['EDIT_MESH', 'EDIT_CURVE', 'EDIT_SURFACE', 'EDIT_TEXT', 'EDIT_ARMATURE', 'EDIT_METABALL', 'EDIT_LATTICE', 'POSE', 'SCULPT', 'PAINT_WEIGHT', 'PAINT_VERTEX', 'PAINT_TEXTURE', 'PARTICLE', 'OBJECT', 'PAINT_GPENCIL', 'EDIT_GPENCIL', 'SCULPT_GPENCIL', 'WEIGHT_GPENCIL'], default 'EDIT_MESH', (readonly)
     */
    public get mode(): 'EDIT_MESH' | 'EDIT_CURVE' | 'EDIT_SURFACE' | 'EDIT_TEXT' | 'EDIT_ARMATURE' | 'EDIT_METABALL' | 'EDIT_LATTICE' | 'POSE' | 'SCULPT' | 'PAINT_WEIGHT' | 'PAINT_VERTEX' | 'PAINT_TEXTURE' | 'PARTICLE' | 'OBJECT' | 'PAINT_GPENCIL' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'WEIGHT_GPENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * 
     * @desc Preferences, (readonly)
     */
    public get preferences(): Preferences {
        return PythonInterop.getClass(this.interop, `${this.accessor}.preferences`, Preferences)
    }

    /**
     * 
     * @desc Region, (readonly)
     */
    public get region(): Region {
        return PythonInterop.getClass(this.interop, `${this.accessor}.region`, Region)
    }

    /**
     * 
     * @desc RegionView3D, (readonly)
     */
    public get region_data(): RegionView3D {
        return PythonInterop.getClass(this.interop, `${this.accessor}.region_data`, RegionView3D)
    }

    /**
     * 
     * @desc Scene, (readonly)
     */
    public get scene(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene`, Scene)
    }

    /**
     * 
     * @desc Screen, (readonly)
     */
    public get screen(): Screen {
        return PythonInterop.getClass(this.interop, `${this.accessor}.screen`, Screen)
    }

    /**
     * 
     * @desc Space, (readonly)
     */
    public get space_data(): Space {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space_data`, Space)
    }

    /**
     * 
     * @desc ToolSettings, (readonly)
     */
    public get tool_settings(): ToolSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.tool_settings`, ToolSettings)
    }

    /**
     * 
     * @desc ViewLayer, (readonly)
     */
    public get view_layer(): ViewLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_layer`, ViewLayer)
    }

    /**
     * 
     * @desc Window, (readonly)
     */
    public get window(): Window {
        return PythonInterop.getClass(this.interop, `${this.accessor}.window`, Window)
    }

    /**
     * 
     * @desc WindowManager, (readonly)
     */
    public get window_manager(): WindowManager {
        return PythonInterop.getClass(this.interop, `${this.accessor}.window_manager`, WindowManager)
    }

    /**
     * 
     * @desc WorkSpace, (readonly)
     */
    public get workspace(): WorkSpace {
        return PythonInterop.getClass(this.interop, `${this.accessor}.workspace`, WorkSpace)
    }

    /**
     * Get the dependency graph for the current scene and view layer, to access to data-blocks with animation and modifiers applied. If any data-blocks have been edited, the dependency graph will be updated. This invalidates all references to evaluated data-blocks from the dependency graph.
     * @desc Depsgraph
     */
    public evaluated_depsgraph_get(): Depsgraph {
        return PythonInterop.callClass(this.interop, `${this.accessor}.evaluated_depsgraph_get`, {}, Depsgraph)
    }

    /**
     * 
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
