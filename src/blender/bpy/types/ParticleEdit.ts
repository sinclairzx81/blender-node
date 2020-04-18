import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ParticleBrush } from './ParticleBrush'
import { BlenderObject } from './BlenderObject'

/**
 * ParticleEdit
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleEdit.html
 */
export class ParticleEdit {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ParticleBrush, (readonly)
     */
    public get brush(): ParticleBrush {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush`, ParticleBrush)
    }

    /**
     * A valid edit mode exists
     * @desc boolean, default False, (readonly)
     */
    public get is_editable(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editable`)
    }

    /**
     * Editing hair
     * @desc boolean, default False, (readonly)
     */
    public get is_hair(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_hair`)
    }

    /**
     * The edited object
     * @desc Object, (readonly)
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * How many keys to make new particles with
     * @desc int in [2, 32767], default 5
     */
    public get default_key_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_key_count`)
    }

    /**
     * How many steps to display the path with
     * @desc int in [1, 10], default 2
     */
    public get display_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.display_step`)
    }

    /**
     * Distance to keep particles away from the emitter
     * @desc float in [-inf, inf], default 0.25
     */
    public get emitter_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.emitter_distance`)
    }

    /**
     * How many frames to fade
     * @desc int in [1, 100], default 2
     */
    public get fade_frames(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fade_frames`)
    }

    /**
     * Particle select and display mode
     * @desc enum in ['PATH', 'POINT', 'TIP'], default 'PATH'
     */
    public get select_mode(): 'PATH' | 'POINT' | 'TIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.select_mode`)
    }

    /**
     * Outer shape to use for tools
     * @desc Object
     */
    public get shape_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shape_object`, BlenderObject)
    }

    /**
     * Display actual particles
     * @desc boolean, default False
     */
    public get show_particles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_particles`)
    }

    /**
     * 
     * @desc enum in ['COMB', 'SMOOTH', 'ADD', 'LENGTH', 'PUFF', 'CUT', 'WEIGHT'], default 'COMB'
     */
    public get tool(): 'COMB' | 'SMOOTH' | 'ADD' | 'LENGTH' | 'PUFF' | 'CUT' | 'WEIGHT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tool`)
    }

    /**
     * 
     * @desc enum in ['PARTICLES', 'SOFT_BODY', 'CLOTH'], default 'PARTICLES'
     */
    public get type(): 'PARTICLES' | 'SOFT_BODY' | 'CLOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Calculate point velocities automatically
     * @desc boolean, default True
     */
    public get use_auto_velocity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_velocity`)
    }

    /**
     * Interpolate new particles from the existing ones
     * @desc boolean, default False
     */
    public get use_default_interpolate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_interpolate`)
    }

    /**
     * Keep paths from intersecting the emitter
     * @desc boolean, default True
     */
    public get use_emitter_deflect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_emitter_deflect`)
    }

    /**
     * Fade paths and keys further away from current frame
     * @desc boolean, default False
     */
    public get use_fade_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fade_time`)
    }

    /**
     * Keep path lengths constant
     * @desc boolean, default True
     */
    public get use_preserve_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preserve_length`)
    }

    /**
     * Keep root keys unmodified
     * @desc boolean, default True
     */
    public get use_preserve_root(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preserve_root`)
    }

    /**
     * How many keys to make new particles with
     * @desc int in [2, 32767], default 5
     */
    public set default_key_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_key_count`, value)
    }

    /**
     * How many steps to display the path with
     * @desc int in [1, 10], default 2
     */
    public set display_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.display_step`, value)
    }

    /**
     * Distance to keep particles away from the emitter
     * @desc float in [-inf, inf], default 0.25
     */
    public set emitter_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.emitter_distance`, value)
    }

    /**
     * How many frames to fade
     * @desc int in [1, 100], default 2
     */
    public set fade_frames(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fade_frames`, value)
    }

    /**
     * Particle select and display mode
     * @desc enum in ['PATH', 'POINT', 'TIP'], default 'PATH'
     */
    public set select_mode(value: 'PATH' | 'POINT' | 'TIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.select_mode`, value)
    }

    /**
     * Outer shape to use for tools
     * @desc Object
     */
    public set shape_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.shape_object`, value)
    }

    /**
     * Display actual particles
     * @desc boolean, default False
     */
    public set show_particles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_particles`, value)
    }

    /**
     * 
     * @desc enum in ['COMB', 'SMOOTH', 'ADD', 'LENGTH', 'PUFF', 'CUT', 'WEIGHT'], default 'COMB'
     */
    public set tool(value: 'COMB' | 'SMOOTH' | 'ADD' | 'LENGTH' | 'PUFF' | 'CUT' | 'WEIGHT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tool`, value)
    }

    /**
     * 
     * @desc enum in ['PARTICLES', 'SOFT_BODY', 'CLOTH'], default 'PARTICLES'
     */
    public set type(value: 'PARTICLES' | 'SOFT_BODY' | 'CLOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Calculate point velocities automatically
     * @desc boolean, default True
     */
    public set use_auto_velocity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_velocity`, value)
    }

    /**
     * Interpolate new particles from the existing ones
     * @desc boolean, default False
     */
    public set use_default_interpolate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_interpolate`, value)
    }

    /**
     * Keep paths from intersecting the emitter
     * @desc boolean, default True
     */
    public set use_emitter_deflect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_emitter_deflect`, value)
    }

    /**
     * Fade paths and keys further away from current frame
     * @desc boolean, default False
     */
    public set use_fade_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fade_time`, value)
    }

    /**
     * Keep path lengths constant
     * @desc boolean, default True
     */
    public set use_preserve_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preserve_length`, value)
    }

    /**
     * Keep root keys unmodified
     * @desc boolean, default True
     */
    public set use_preserve_root(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preserve_root`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
