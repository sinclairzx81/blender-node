import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ParticleSystem } from './ParticleSystem'

/**
 * ParticleSystems
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleSystems.html
 */
export class ParticleSystems {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active particle system being displayed
     * @desc ParticleSystem, (readonly)
     */
    public get active(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, ParticleSystem)
    }

    /**
     * Index of active particle system slot
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Index of active particle system slot
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
