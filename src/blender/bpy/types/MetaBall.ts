import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesMeshSettings } from './CyclesMeshSettings'
import { MetaBallElements } from './MetaBallElements'
import { MetaElement } from './MetaElement'
import { IDMaterials } from './IDMaterials'
import { Material } from './Material'

/**
 * MetaBall
 * 
 * https://docs.blender.org/api/current/bpy.types.MetaBall.html
 */
export class MetaBall {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles mesh settings
     * @desc CyclesMeshSettings, (readonly)
     */
    public get cycles(): CyclesMeshSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesMeshSettings)
    }

    /**
     * Meta elements
     * @desc MetaBallElements bpy_prop_collection of MetaElement, (readonly)
     */
    public get elements(): BlenderCollection<MetaElement> & Indexable<MetaElement> & MetaBallElements {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.elements`, MetaBallElements, MetaElement)
    }

    /**
     * True when used in editmode
     * @desc boolean, default False, (readonly)
     */
    public get is_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editmode`)
    }

    /**
     * 
     * @desc IDMaterials bpy_prop_collection of Material, (readonly)
     */
    public get materials(): BlenderCollection<Material> & Indexable<Material> & IDMaterials {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.materials`, IDMaterials, Material)
    }

    /**
     * Polygonization resolution in rendering
     * @desc float in [0.005, 10000], default 0.2
     */
    public get render_resolution(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.render_resolution`)
    }

    /**
     * Polygonization resolution in the 3D viewport
     * @desc float in [0.005, 10000], default 0.4
     */
    public get resolution(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.resolution`)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get texspace_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_location`, 'number', 3)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get texspace_size(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_size`, 'number', 3)
    }

    /**
     * Influence of meta elements
     * @desc float in [0, 5], default 0.6
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Metaball edit update behavior
     * @desc enum in ['UPDATE_ALWAYS', 'HALFRES', 'FAST', 'NEVER'], default 'UPDATE_ALWAYS'
     */
    public get update_method(): 'UPDATE_ALWAYS' | 'HALFRES' | 'FAST' | 'NEVER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.update_method`)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public get use_auto_texspace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_texspace`)
    }

    /**
     * Polygonization resolution in rendering
     * @desc float in [0.005, 10000], default 0.2
     */
    public set render_resolution(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.render_resolution`, value)
    }

    /**
     * Polygonization resolution in the 3D viewport
     * @desc float in [0.005, 10000], default 0.4
     */
    public set resolution(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.resolution`, value)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set texspace_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_location`, value)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set texspace_size(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_size`, value)
    }

    /**
     * Influence of meta elements
     * @desc float in [0, 5], default 0.6
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Metaball edit update behavior
     * @desc enum in ['UPDATE_ALWAYS', 'HALFRES', 'FAST', 'NEVER'], default 'UPDATE_ALWAYS'
     */
    public set update_method(value: 'UPDATE_ALWAYS' | 'HALFRES' | 'FAST' | 'NEVER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.update_method`, value)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public set use_auto_texspace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_texspace`, value)
    }

    /**
     * Transform meta elements by a matrix
     * @desc void
     */
    public transform(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    /**
     * update_gpu_tag
     * @desc void
     */
    public update_gpu_tag(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_gpu_tag`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
