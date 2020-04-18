import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Material } from './Material'

/**
 * MaterialSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.MaterialSlot.html
 */
export class MaterialSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Material slot name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Link material to object or the object’s data
     * @desc enum in ['OBJECT', 'DATA'], default 'DATA'
     */
    public get link(): 'OBJECT' | 'DATA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.link`)
    }

    /**
     * Material data-block used by this material slot
     * @desc Material
     */
    public get material(): Material {
        return PythonInterop.getClass(this.interop, `${this.accessor}.material`, Material)
    }

    /**
     * Link material to object or the object’s data
     * @desc enum in ['OBJECT', 'DATA'], default 'DATA'
     */
    public set link(value: 'OBJECT' | 'DATA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.link`, value)
    }

    /**
     * Material data-block used by this material slot
     * @desc Material
     */
    public set material(value: Material) {
        PythonInterop.setClass(this.interop, `${this.accessor}.material`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
