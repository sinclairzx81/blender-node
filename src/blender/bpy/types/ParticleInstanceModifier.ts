import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'
import { ParticleSystem } from './ParticleSystem'

/**
 * ParticleInstanceModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleInstanceModifier.html
 */
export class ParticleInstanceModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis`)
    }

    /**
     * Custom data layer name for the index
     * @desc string, default '', (never None)
     */
    public get index_layer_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.index_layer_name`)
    }

    /**
     * Object that has the particle system
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Amount of particles to use for instancing
     * @desc float in [0, 1], default 1.0
     */
    public get particle_amount(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.particle_amount`)
    }

    /**
     * Relative offset of particles to use for instancing, to avoid overlap of multiple instances
     * @desc float in [0, 1], default 0.0
     */
    public get particle_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.particle_offset`)
    }

    /**
     * 
     * @desc ParticleSystem
     */
    public get particle_system(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_system`, ParticleSystem)
    }

    /**
     * 
     * @desc int in [1, 32767], default 0
     */
    public get particle_system_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.particle_system_index`)
    }

    /**
     * Position along path
     * @desc float in [0, 1], default 0.0
     */
    public get position(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.position`)
    }

    /**
     * Randomize position along path
     * @desc float in [0, 1], default 0.0
     */
    public get random_position(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_position`)
    }

    /**
     * Randomize rotation around path
     * @desc float in [0, 1], default 0.0
     */
    public get random_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_rotation`)
    }

    /**
     * Rotation around path
     * @desc float in [0, 1], default 0.0
     */
    public get rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation`)
    }

    /**
     * Show instances when particles are alive
     * @desc boolean, default False
     */
    public get show_alive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_alive`)
    }

    /**
     * Show instances when particles are dead
     * @desc boolean, default False
     */
    public get show_dead(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_dead`)
    }

    /**
     * Show instances when particles are unborn
     * @desc boolean, default False
     */
    public get show_unborn(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_unborn`)
    }

    /**
     * Space to use for copying mesh data
     * @desc enum in ['LOCAL', 'WORLD'], default 'WORLD'
     */
    public get space(): 'LOCAL' | 'WORLD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * Create instances from child particles
     * @desc boolean, default False
     */
    public get use_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_children`)
    }

    /**
     * Create instances from normal particles
     * @desc boolean, default False
     */
    public get use_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal`)
    }

    /**
     * Create instances along particle paths
     * @desc boolean, default False
     */
    public get use_path(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_path`)
    }

    /**
     * Don’t stretch the object
     * @desc boolean, default False
     */
    public get use_preserve_shape(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preserve_shape`)
    }

    /**
     * Use particle size to scale the instances
     * @desc boolean, default False
     */
    public get use_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_size`)
    }

    /**
     * Custom data layer name for the randomized value
     * @desc string, default '', (never None)
     */
    public get value_layer_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.value_layer_name`)
    }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis`, value)
    }

    /**
     * Custom data layer name for the index
     * @desc string, default '', (never None)
     */
    public set index_layer_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.index_layer_name`, value)
    }

    /**
     * Object that has the particle system
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Amount of particles to use for instancing
     * @desc float in [0, 1], default 1.0
     */
    public set particle_amount(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.particle_amount`, value)
    }

    /**
     * Relative offset of particles to use for instancing, to avoid overlap of multiple instances
     * @desc float in [0, 1], default 0.0
     */
    public set particle_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.particle_offset`, value)
    }

    /**
     * 
     * @desc ParticleSystem
     */
    public set particle_system(value: ParticleSystem) {
        PythonInterop.setClass(this.interop, `${this.accessor}.particle_system`, value)
    }

    /**
     * 
     * @desc int in [1, 32767], default 0
     */
    public set particle_system_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.particle_system_index`, value)
    }

    /**
     * Position along path
     * @desc float in [0, 1], default 0.0
     */
    public set position(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.position`, value)
    }

    /**
     * Randomize position along path
     * @desc float in [0, 1], default 0.0
     */
    public set random_position(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_position`, value)
    }

    /**
     * Randomize rotation around path
     * @desc float in [0, 1], default 0.0
     */
    public set random_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_rotation`, value)
    }

    /**
     * Rotation around path
     * @desc float in [0, 1], default 0.0
     */
    public set rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Show instances when particles are alive
     * @desc boolean, default False
     */
    public set show_alive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_alive`, value)
    }

    /**
     * Show instances when particles are dead
     * @desc boolean, default False
     */
    public set show_dead(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_dead`, value)
    }

    /**
     * Show instances when particles are unborn
     * @desc boolean, default False
     */
    public set show_unborn(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_unborn`, value)
    }

    /**
     * Space to use for copying mesh data
     * @desc enum in ['LOCAL', 'WORLD'], default 'WORLD'
     */
    public set space(value: 'LOCAL' | 'WORLD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
    }

    /**
     * Create instances from child particles
     * @desc boolean, default False
     */
    public set use_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_children`, value)
    }

    /**
     * Create instances from normal particles
     * @desc boolean, default False
     */
    public set use_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal`, value)
    }

    /**
     * Create instances along particle paths
     * @desc boolean, default False
     */
    public set use_path(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_path`, value)
    }

    /**
     * Don’t stretch the object
     * @desc boolean, default False
     */
    public set use_preserve_shape(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preserve_shape`, value)
    }

    /**
     * Use particle size to scale the instances
     * @desc boolean, default False
     */
    public set use_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_size`, value)
    }

    /**
     * Custom data layer name for the randomized value
     * @desc string, default '', (never None)
     */
    public set value_layer_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.value_layer_name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
