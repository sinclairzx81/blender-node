import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { PointCache } from './PointCache'
import { SoftBodySettings } from './SoftBodySettings'

/**
 * SoftBodyModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SoftBodyModifier.html
 */
export class SoftBodyModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc PointCache, (readonly, never None)
     */
    public get point_cache(): PointCache {
        return PythonInterop.getClass(this.interop, `${this.accessor}.point_cache`, PointCache)
    }

    /**
     * 
     * @desc SoftBodySettings, (readonly, never None)
     */
    public get settings(): SoftBodySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.settings`, SoftBodySettings)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
