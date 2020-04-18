import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ParticleHairKey } from './ParticleHairKey'
import { ParticleKey } from './ParticleKey'

/**
 * Particle
 * 
 * https://docs.blender.org/api/current/bpy.types.Particle.html
 */
export class Particle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of ParticleHairKey, (readonly)
     */
    public get hair_keys(): BlenderCollection<ParticleHairKey> & Indexable<ParticleHairKey> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.hair_keys`, ParticleHairKey)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_exist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_exist`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_visible(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_visible`)
    }

    /**
     * 
     * @desc bpy_prop_collection of ParticleKey, (readonly)
     */
    public get particle_keys(): BlenderCollection<ParticleKey> & Indexable<ParticleKey> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.particle_keys`, ParticleKey)
    }

    /**
     * 
     * @desc enum in ['DEAD', 'UNBORN', 'ALIVE', 'DYING'], default 'DEAD'
     */
    public get alive_state(): 'DEAD' | 'UNBORN' | 'ALIVE' | 'DYING' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alive_state`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get angular_velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.angular_velocity`, 'number', 3)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get birth_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.birth_time`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get die_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.die_time`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get lifetime(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lifetime`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get prev_angular_velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.prev_angular_velocity`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get prev_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.prev_location`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get prev_rotation(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.prev_rotation`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get prev_velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.prev_velocity`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get rotation(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation`, 'number', 4)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.velocity`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['DEAD', 'UNBORN', 'ALIVE', 'DYING'], default 'DEAD'
     */
    public set alive_state(value: 'DEAD' | 'UNBORN' | 'ALIVE' | 'DYING') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.alive_state`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set angular_velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.angular_velocity`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set birth_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.birth_time`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set die_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.die_time`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set lifetime(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lifetime`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set prev_angular_velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.prev_angular_velocity`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set prev_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.prev_location`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set prev_rotation(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.prev_rotation`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set prev_velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.prev_velocity`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set rotation(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.velocity`, value)
    }

    /**
     * Obtain UV coordinates for a particle on an evaluated mesh.
     * @desc float array of 2 items in [-inf, inf]
     */
    public uv_on_emitter(options: { modifier?: unknown }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.uv_on_emitter`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
