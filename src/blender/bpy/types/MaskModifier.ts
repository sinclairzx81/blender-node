import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * MaskModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskModifier.html
 */
export class MaskModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Armature to use as source of bones to mask
     * @desc Object
     */
    public get armature(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.armature`, BlenderObject)
    }

    /**
     * Use vertices that are not part of region defined
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * 
     * @desc enum in ['VERTEX_GROUP', 'ARMATURE'], default 'VERTEX_GROUP'
     */
    public get mode(): 'VERTEX_GROUP' | 'ARMATURE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Weights over this threshold remain
     * @desc float in [0, 1], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Armature to use as source of bones to mask
     * @desc Object
     */
    public set armature(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.armature`, value)
    }

    /**
     * Use vertices that are not part of region defined
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * 
     * @desc enum in ['VERTEX_GROUP', 'ARMATURE'], default 'VERTEX_GROUP'
     */
    public set mode(value: 'VERTEX_GROUP' | 'ARMATURE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Weights over this threshold remain
     * @desc float in [0, 1], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
