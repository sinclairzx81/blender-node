import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FreestyleModuleSettings } from './FreestyleModuleSettings'

/**
 * FreestyleModules
 * 
 * https://docs.blender.org/api/current/bpy.types.FreestyleModules.html
 */
export class FreestyleModules {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a style module to scene render layer Freestyle settings
     * @desc FreestyleModuleSettings
     */
    public new(): FreestyleModuleSettings {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, FreestyleModuleSettings)
    }

    /**
     * Remove a style module from scene render layer Freestyle settings
     * @desc void
     */
    public remove(options: { module?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
