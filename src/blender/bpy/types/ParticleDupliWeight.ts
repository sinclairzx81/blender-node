import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ParticleDupliWeight
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleDupliWeight.html
 */
export class ParticleDupliWeight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Particle dupliobject name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * The number of times this object is repeated with respect to other objects
     * @desc int in [0, 32767], default 0
     */
    public get count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.count`)
    }

    /**
     * The number of times this object is repeated with respect to other objects
     * @desc int in [0, 32767], default 0
     */
    public set count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.count`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
