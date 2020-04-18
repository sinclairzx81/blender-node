import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { Sound } from './Sound'

/**
 * Speaker
 * 
 * https://docs.blender.org/api/current/bpy.types.Speaker.html
 */
export class Speaker {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * How strong the distance affects volume, depending on distance model
     * @desc float in [0, inf], default 1.0
     */
    public get attenuation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.attenuation`)
    }

    /**
     * Angle of the inner cone, in degrees, inside the cone the volume is 100 %
     * @desc float in [0, 360], default 360.0
     */
    public get cone_angle_inner(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cone_angle_inner`)
    }

    /**
     * Angle of the outer cone, in degrees, outside this cone the volume is the outer cone volume, between inner and outer cone the volume is interpolated
     * @desc float in [0, 360], default 360.0
     */
    public get cone_angle_outer(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cone_angle_outer`)
    }

    /**
     * Volume outside the outer cone
     * @desc float in [0, 1], default 1.0
     */
    public get cone_volume_outer(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cone_volume_outer`)
    }

    /**
     * Maximum distance for volume calculation, no matter how far away the object is
     * @desc float in [0, inf], default 3.40282e+38
     */
    public get distance_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_max`)
    }

    /**
     * Reference distance at which volume is 100 %
     * @desc float in [0, inf], default 1.0
     */
    public get distance_reference(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_reference`)
    }

    /**
     * Mute the speaker
     * @desc boolean, default False
     */
    public get muted(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.muted`)
    }

    /**
     * Playback pitch of the sound
     * @desc float in [0.1, 10], default 1.0
     */
    public get pitch(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pitch`)
    }

    /**
     * Sound data-block used by this speaker
     * @desc Sound
     */
    public get sound(): Sound {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sound`, Sound)
    }

    /**
     * How loud the sound is
     * @desc float in [0, 1], default 1.0
     */
    public get volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume`)
    }

    /**
     * Maximum volume, no matter how near the object is
     * @desc float in [0, 1], default 1.0
     */
    public get volume_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume_max`)
    }

    /**
     * Minimum volume, no matter how far away the object is
     * @desc float in [0, 1], default 0.0
     */
    public get volume_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume_min`)
    }

    /**
     * How strong the distance affects volume, depending on distance model
     * @desc float in [0, inf], default 1.0
     */
    public set attenuation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.attenuation`, value)
    }

    /**
     * Angle of the inner cone, in degrees, inside the cone the volume is 100 %
     * @desc float in [0, 360], default 360.0
     */
    public set cone_angle_inner(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cone_angle_inner`, value)
    }

    /**
     * Angle of the outer cone, in degrees, outside this cone the volume is the outer cone volume, between inner and outer cone the volume is interpolated
     * @desc float in [0, 360], default 360.0
     */
    public set cone_angle_outer(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cone_angle_outer`, value)
    }

    /**
     * Volume outside the outer cone
     * @desc float in [0, 1], default 1.0
     */
    public set cone_volume_outer(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cone_volume_outer`, value)
    }

    /**
     * Maximum distance for volume calculation, no matter how far away the object is
     * @desc float in [0, inf], default 3.40282e+38
     */
    public set distance_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_max`, value)
    }

    /**
     * Reference distance at which volume is 100 %
     * @desc float in [0, inf], default 1.0
     */
    public set distance_reference(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_reference`, value)
    }

    /**
     * Mute the speaker
     * @desc boolean, default False
     */
    public set muted(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.muted`, value)
    }

    /**
     * Playback pitch of the sound
     * @desc float in [0.1, 10], default 1.0
     */
    public set pitch(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pitch`, value)
    }

    /**
     * Sound data-block used by this speaker
     * @desc Sound
     */
    public set sound(value: Sound) {
        PythonInterop.setClass(this.interop, `${this.accessor}.sound`, value)
    }

    /**
     * How loud the sound is
     * @desc float in [0, 1], default 1.0
     */
    public set volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume`, value)
    }

    /**
     * Maximum volume, no matter how near the object is
     * @desc float in [0, 1], default 1.0
     */
    public set volume_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume_max`, value)
    }

    /**
     * Minimum volume, no matter how far away the object is
     * @desc float in [0, 1], default 0.0
     */
    public set volume_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume_min`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
