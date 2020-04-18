import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ParticleSettings } from './ParticleSettings'

/**
 * BlendDataParticles
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataParticles.html
 */
export class BlendDataParticles {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new particle settings instance to the main database
     * @desc ParticleSettings
     */
    public new(options: { name?: string }): ParticleSettings {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, ParticleSettings)
    }

    /**
     * Remove a particle settings instance from the current blendfile
     * @desc void
     */
    public remove(options: { particle?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
