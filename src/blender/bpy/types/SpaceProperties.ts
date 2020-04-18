import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { ID } from './ID'

/**
 * SpaceProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceProperties.html
 */
export class SpaceProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['TOOL', 'SCENE', 'RENDER', 'OUTPUT', 'VIEW_LAYER', 'WORLD', 'OBJECT', 'CONSTRAINT', 'MODIFIER', 'DATA', 'BONE', 'BONE_CONSTRAINT', 'MATERIAL', 'TEXTURE', 'PARTICLES', 'PHYSICS', 'SHADERFX'], default 'RENDER'
     */
    public get context(): 'TOOL' | 'SCENE' | 'RENDER' | 'OUTPUT' | 'VIEW_LAYER' | 'WORLD' | 'OBJECT' | 'CONSTRAINT' | 'MODIFIER' | 'DATA' | 'BONE' | 'BONE_CONSTRAINT' | 'MATERIAL' | 'TEXTURE' | 'PARTICLES' | 'PHYSICS' | 'SHADERFX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.context`)
    }

    /**
     * 
     * @desc ID
     */
    public get pin_id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.pin_id`, ID)
    }

    /**
     * Use the pinned context
     * @desc boolean, default False
     */
    public get use_pin_id(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pin_id`)
    }

    /**
     * 
     * @desc enum in ['TOOL', 'SCENE', 'RENDER', 'OUTPUT', 'VIEW_LAYER', 'WORLD', 'OBJECT', 'CONSTRAINT', 'MODIFIER', 'DATA', 'BONE', 'BONE_CONSTRAINT', 'MATERIAL', 'TEXTURE', 'PARTICLES', 'PHYSICS', 'SHADERFX'], default 'RENDER'
     */
    public set context(value: 'TOOL' | 'SCENE' | 'RENDER' | 'OUTPUT' | 'VIEW_LAYER' | 'WORLD' | 'OBJECT' | 'CONSTRAINT' | 'MODIFIER' | 'DATA' | 'BONE' | 'BONE_CONSTRAINT' | 'MATERIAL' | 'TEXTURE' | 'PARTICLES' | 'PHYSICS' | 'SHADERFX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.context`, value)
    }

    /**
     * 
     * @desc ID
     */
    public set pin_id(value: ID) {
        PythonInterop.setClass(this.interop, `${this.accessor}.pin_id`, value)
    }

    /**
     * Use the pinned context
     * @desc boolean, default False
     */
    public set use_pin_id(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pin_id`, value)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
