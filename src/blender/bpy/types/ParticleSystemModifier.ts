import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { ParticleSystem } from './ParticleSystem'

/**
 * ParticleSystemModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleSystemModifier.html
 */
export class ParticleSystemModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Particle System that this modifier controls
     * @desc ParticleSystem, (readonly, never None)
     */
    public get particle_system(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_system`, ParticleSystem)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
