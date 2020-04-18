import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { Sound } from './Sound'

/**
 * SoundSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.SoundSequence.html
 */
export class SoundSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_end`)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_start`)
    }

    /**
     * Playback panning of the sound (only for Mono sources)
     * @desc float in [-2, 2], default 0.0
     */
    public get pan(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pan`)
    }

    /**
     * Playback pitch of the sound
     * @desc float in [0.1, 10], default 0.0
     */
    public get pitch(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pitch`)
    }

    /**
     * Display the audio waveform inside the strip
     * @desc boolean, default False
     */
    public get show_waveform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_waveform`)
    }

    /**
     * Sound data-block used by this sequence
     * @desc Sound
     */
    public get sound(): Sound {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sound`, Sound)
    }

    /**
     * Playback volume of the sound
     * @desc float in [0, 100], default 0.0
     */
    public get volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume`)
    }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_end`, value)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_start`, value)
    }

    /**
     * Playback panning of the sound (only for Mono sources)
     * @desc float in [-2, 2], default 0.0
     */
    public set pan(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pan`, value)
    }

    /**
     * Playback pitch of the sound
     * @desc float in [0.1, 10], default 0.0
     */
    public set pitch(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pitch`, value)
    }

    /**
     * Display the audio waveform inside the strip
     * @desc boolean, default False
     */
    public set show_waveform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_waveform`, value)
    }

    /**
     * Sound data-block used by this sequence
     * @desc Sound
     */
    public set sound(value: Sound) {
        PythonInterop.setClass(this.interop, `${this.accessor}.sound`, value)
    }

    /**
     * Playback volume of the sound
     * @desc float in [0, 100], default 0.0
     */
    public set volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
