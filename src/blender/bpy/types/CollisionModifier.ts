import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CollisionSettings } from './CollisionSettings'

/**
 * CollisionModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.CollisionModifier.html
 */
export class CollisionModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CollisionSettings, (readonly, never None)
     */
    public get settings(): CollisionSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.settings`, CollisionSettings)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
