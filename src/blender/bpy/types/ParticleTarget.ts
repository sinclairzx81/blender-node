import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * ParticleTarget
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleTarget.html
 */
export class ParticleTarget {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Particle target name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc enum in ['FRIEND', 'NEUTRAL', 'ENEMY'], default 'NEUTRAL'
     */
    public get alliance(): 'FRIEND' | 'NEUTRAL' | 'ENEMY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alliance`)
    }

    /**
     * 
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public get duration(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.duration`)
    }

    /**
     * Keyed particles target is valid
     * @desc boolean, default False
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * The object that has the target particle system (empty if same object)
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * The index of particle system on the target object
     * @desc int in [1, inf], default 0
     */
    public get system(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.system`)
    }

    /**
     * 
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * 
     * @desc enum in ['FRIEND', 'NEUTRAL', 'ENEMY'], default 'NEUTRAL'
     */
    public set alliance(value: 'FRIEND' | 'NEUTRAL' | 'ENEMY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.alliance`, value)
    }

    /**
     * 
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public set duration(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.duration`, value)
    }

    /**
     * Keyed particles target is valid
     * @desc boolean, default False
     */
    public set is_valid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_valid`, value)
    }

    /**
     * The object that has the target particle system (empty if same object)
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * The index of particle system on the target object
     * @desc int in [1, inf], default 0
     */
    public set system(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.system`, value)
    }

    /**
     * 
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
