import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesWorldSettings } from './CyclesWorldSettings'
import { CyclesVisibilitySettings } from './CyclesVisibilitySettings'
import { WorldLighting } from './WorldLighting'
import { WorldMistSettings } from './WorldMistSettings'
import { NodeTree } from './NodeTree'

/**
 * World
 * 
 * https://docs.blender.org/api/current/bpy.types.World.html
 */
export class World {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles world settings
     * @desc CyclesWorldSettings, (readonly)
     */
    public get cycles(): CyclesWorldSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesWorldSettings)
    }

    /**
     * Cycles visibility settings
     * @desc CyclesVisibilitySettings, (readonly)
     */
    public get cycles_visibility(): CyclesVisibilitySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles_visibility`, CyclesVisibilitySettings)
    }

    /**
     * World lighting settings
     * @desc WorldLighting, (readonly, never None)
     */
    public get light_settings(): WorldLighting {
        return PythonInterop.getClass(this.interop, `${this.accessor}.light_settings`, WorldLighting)
    }

    /**
     * World mist settings
     * @desc WorldMistSettings, (readonly, never None)
     */
    public get mist_settings(): WorldMistSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mist_settings`, WorldMistSettings)
    }

    /**
     * Node tree for node based worlds
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Color of the background
     * @desc float array of 3 items in [0, inf], default (0.05, 0.05, 0.05)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Use shader nodes to render the world
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * Color of the background
     * @desc float array of 3 items in [0, inf], default (0.05, 0.05, 0.05)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Use shader nodes to render the world
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
