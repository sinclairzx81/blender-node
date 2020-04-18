import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesLightSettings } from './CyclesLightSettings'
import { NodeTree } from './NodeTree'

/**
 * Light
 * 
 * https://docs.blender.org/api/current/bpy.types.Light.html
 */
export class Light {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles light settings
     * @desc CyclesLightSettings, (readonly)
     */
    public get cycles(): CyclesLightSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesLightSettings)
    }

    /**
     * Node tree for node based lights
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Light color
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Distance at which the light influence will be set to 0
     * @desc float in [0, inf], default 40.0
     */
    public get cutoff_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cutoff_distance`)
    }

    /**
     * Falloff distance - the light is at half the original intensity at this point
     * @desc float in [0, inf], default 25.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Specular reflection multiplier
     * @desc float in [0, 9999], default 1.0
     */
    public get specular_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.specular_factor`)
    }

    /**
     * Type of Light
     * @desc enum in ['POINT', 'SUN', 'SPOT', 'AREA'], default 'POINT'
     */
    public get type(): 'POINT' | 'SUN' | 'SPOT' | 'AREA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Use custom attenuation distance instead of global light threshold
     * @desc boolean, default False
     */
    public get use_custom_distance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_distance`)
    }

    /**
     * Use shader nodes to render the light
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * Light color
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Distance at which the light influence will be set to 0
     * @desc float in [0, inf], default 40.0
     */
    public set cutoff_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cutoff_distance`, value)
    }

    /**
     * Falloff distance - the light is at half the original intensity at this point
     * @desc float in [0, inf], default 25.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Specular reflection multiplier
     * @desc float in [0, 9999], default 1.0
     */
    public set specular_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.specular_factor`, value)
    }

    /**
     * Type of Light
     * @desc enum in ['POINT', 'SUN', 'SPOT', 'AREA'], default 'POINT'
     */
    public set type(value: 'POINT' | 'SUN' | 'SPOT' | 'AREA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Use custom attenuation distance instead of global light threshold
     * @desc boolean, default False
     */
    public set use_custom_distance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_distance`, value)
    }

    /**
     * Use shader nodes to render the light
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
