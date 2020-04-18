import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { StudioLight } from './StudioLight'

/**
 * StudioLights
 * 
 * https://docs.blender.org/api/current/bpy.types.StudioLights.html
 */
export class StudioLights {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load studiolight from file
     * @desc StudioLight
     */
    public load(options: { path?: string, type?: 'STUDIO' | 'WORLD' | 'MATCAP' }): StudioLight {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, StudioLight)
    }

    /**
     * Create studiolight from default lighting
     * @desc StudioLight
     */
    public new(options: { path?: string }): StudioLight {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, StudioLight)
    }

    /**
     * Remove a studio light
     * @desc void
     */
    public remove(options: { studio_light?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Refresh Studio Lights from disk
     * @desc void
     */
    public refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
