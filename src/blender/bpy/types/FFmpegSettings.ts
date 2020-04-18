import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FFmpegSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FFmpegSettings.html
 */
export class FFmpegSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Audio bitrate (kb/s)
     * @desc int in [32, 384], default 192
     */
    public get audio_bitrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.audio_bitrate`)
    }

    /**
     * Audio channel count
     * @desc enum in ['MONO', 'STEREO', 'SURROUND4', 'SURROUND51', 'SURROUND71'], default 'STEREO'
     */
    public get audio_channels(): 'MONO' | 'STEREO' | 'SURROUND4' | 'SURROUND51' | 'SURROUND71' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_channels`)
    }

    /**
     * FFmpeg audio codec to use
     * @desc enum in ['NONE', 'AAC', 'AC3', 'FLAC', 'MP2', 'MP3', 'OPUS', 'PCM', 'VORBIS'], default 'NONE'
     */
    public get audio_codec(): 'NONE' | 'AAC' | 'AC3' | 'FLAC' | 'MP2' | 'MP3' | 'OPUS' | 'PCM' | 'VORBIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.audio_codec`)
    }

    /**
     * Audio samplerate(samples/s)
     * @desc int in [8000, 192000], default 48000
     */
    public get audio_mixrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.audio_mixrate`)
    }

    /**
     * Audio volume
     * @desc float in [0, 1], default 1.0
     */
    public get audio_volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.audio_volume`)
    }

    /**
     * Rate control: buffer size (kb)
     * @desc int in [0, 2000], default 0
     */
    public get buffersize(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.buffersize`)
    }

    /**
     * FFmpeg codec to use for video output
     * @desc enum in ['NONE', 'DNXHD', 'DV', 'FFV1', 'FLASH', 'H264', 'HUFFYUV', 'MPEG1', 'MPEG2', 'MPEG4', 'PNG', 'QTRLE', 'THEORA', 'WEBM'], default 'H264'
     */
    public get codec(): 'NONE' | 'DNXHD' | 'DV' | 'FFV1' | 'FLASH' | 'H264' | 'HUFFYUV' | 'MPEG1' | 'MPEG2' | 'MPEG4' | 'PNG' | 'QTRLE' | 'THEORA' | 'WEBM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.codec`)
    }

    /**
     * Constant Rate Factor (CRF); tradeoff between video quality and file size
     * @desc enum in ['NONE', 'LOSSLESS', 'PERC_LOSSLESS', 'HIGH', 'MEDIUM', 'LOW', 'VERYLOW', 'LOWEST'], default 'MEDIUM'
     */
    public get constant_rate_factor(): 'NONE' | 'LOSSLESS' | 'PERC_LOSSLESS' | 'HIGH' | 'MEDIUM' | 'LOW' | 'VERYLOW' | 'LOWEST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.constant_rate_factor`)
    }

    /**
     * Tradeoff between encoding speed and compression ratio
     * @desc enum in ['BEST', 'GOOD', 'REALTIME'], default 'GOOD'
     */
    public get ffmpeg_preset(): 'BEST' | 'GOOD' | 'REALTIME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ffmpeg_preset`)
    }

    /**
     * Output file container
     * @desc enum in ['MPEG1', 'MPEG2', 'MPEG4', 'AVI', 'QUICKTIME', 'DV', 'OGG', 'MKV', 'FLASH', 'WEBM'], default 'MKV'
     */
    public get format(): 'MPEG1' | 'MPEG2' | 'MPEG4' | 'AVI' | 'QUICKTIME' | 'DV' | 'OGG' | 'MKV' | 'FLASH' | 'WEBM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.format`)
    }

    /**
     * Distance between key frames, also known as GOP size; influences file size and seekability
     * @desc int in [0, 500], default 25
     */
    public get gopsize(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gopsize`)
    }

    /**
     * Maximum number of B-frames between non-B-frames; influences file size and seekability
     * @desc int in [0, 16], default 0
     */
    public get max_b_frames(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_b_frames`)
    }

    /**
     * Rate control: max rate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public get maxrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.maxrate`)
    }

    /**
     * Rate control: min rate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public get minrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.minrate`)
    }

    /**
     * Mux rate (bits/s(!))
     * @desc int in [0, inf], default 0
     */
    public get muxrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.muxrate`)
    }

    /**
     * Mux packet size (byte)
     * @desc int in [0, 16384], default 0
     */
    public get packetsize(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.packetsize`)
    }

    /**
     * Autosplit output at 2GB boundary
     * @desc boolean, default False
     */
    public get use_autosplit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_autosplit`)
    }

    /**
     * Use lossless output for video streams
     * @desc boolean, default False
     */
    public get use_lossless_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_lossless_output`)
    }

    /**
     * Set a maximum number of B-frames
     * @desc boolean, default False
     */
    public get use_max_b_frames(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max_b_frames`)
    }

    /**
     * Video bitrate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public get video_bitrate(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.video_bitrate`)
    }

    /**
     * Audio bitrate (kb/s)
     * @desc int in [32, 384], default 192
     */
    public set audio_bitrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.audio_bitrate`, value)
    }

    /**
     * Audio channel count
     * @desc enum in ['MONO', 'STEREO', 'SURROUND4', 'SURROUND51', 'SURROUND71'], default 'STEREO'
     */
    public set audio_channels(value: 'MONO' | 'STEREO' | 'SURROUND4' | 'SURROUND51' | 'SURROUND71') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_channels`, value)
    }

    /**
     * FFmpeg audio codec to use
     * @desc enum in ['NONE', 'AAC', 'AC3', 'FLAC', 'MP2', 'MP3', 'OPUS', 'PCM', 'VORBIS'], default 'NONE'
     */
    public set audio_codec(value: 'NONE' | 'AAC' | 'AC3' | 'FLAC' | 'MP2' | 'MP3' | 'OPUS' | 'PCM' | 'VORBIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.audio_codec`, value)
    }

    /**
     * Audio samplerate(samples/s)
     * @desc int in [8000, 192000], default 48000
     */
    public set audio_mixrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.audio_mixrate`, value)
    }

    /**
     * Audio volume
     * @desc float in [0, 1], default 1.0
     */
    public set audio_volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.audio_volume`, value)
    }

    /**
     * Rate control: buffer size (kb)
     * @desc int in [0, 2000], default 0
     */
    public set buffersize(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.buffersize`, value)
    }

    /**
     * FFmpeg codec to use for video output
     * @desc enum in ['NONE', 'DNXHD', 'DV', 'FFV1', 'FLASH', 'H264', 'HUFFYUV', 'MPEG1', 'MPEG2', 'MPEG4', 'PNG', 'QTRLE', 'THEORA', 'WEBM'], default 'H264'
     */
    public set codec(value: 'NONE' | 'DNXHD' | 'DV' | 'FFV1' | 'FLASH' | 'H264' | 'HUFFYUV' | 'MPEG1' | 'MPEG2' | 'MPEG4' | 'PNG' | 'QTRLE' | 'THEORA' | 'WEBM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.codec`, value)
    }

    /**
     * Constant Rate Factor (CRF); tradeoff between video quality and file size
     * @desc enum in ['NONE', 'LOSSLESS', 'PERC_LOSSLESS', 'HIGH', 'MEDIUM', 'LOW', 'VERYLOW', 'LOWEST'], default 'MEDIUM'
     */
    public set constant_rate_factor(value: 'NONE' | 'LOSSLESS' | 'PERC_LOSSLESS' | 'HIGH' | 'MEDIUM' | 'LOW' | 'VERYLOW' | 'LOWEST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.constant_rate_factor`, value)
    }

    /**
     * Tradeoff between encoding speed and compression ratio
     * @desc enum in ['BEST', 'GOOD', 'REALTIME'], default 'GOOD'
     */
    public set ffmpeg_preset(value: 'BEST' | 'GOOD' | 'REALTIME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ffmpeg_preset`, value)
    }

    /**
     * Output file container
     * @desc enum in ['MPEG1', 'MPEG2', 'MPEG4', 'AVI', 'QUICKTIME', 'DV', 'OGG', 'MKV', 'FLASH', 'WEBM'], default 'MKV'
     */
    public set format(value: 'MPEG1' | 'MPEG2' | 'MPEG4' | 'AVI' | 'QUICKTIME' | 'DV' | 'OGG' | 'MKV' | 'FLASH' | 'WEBM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.format`, value)
    }

    /**
     * Distance between key frames, also known as GOP size; influences file size and seekability
     * @desc int in [0, 500], default 25
     */
    public set gopsize(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gopsize`, value)
    }

    /**
     * Maximum number of B-frames between non-B-frames; influences file size and seekability
     * @desc int in [0, 16], default 0
     */
    public set max_b_frames(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_b_frames`, value)
    }

    /**
     * Rate control: max rate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public set maxrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.maxrate`, value)
    }

    /**
     * Rate control: min rate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public set minrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.minrate`, value)
    }

    /**
     * Mux rate (bits/s(!))
     * @desc int in [0, inf], default 0
     */
    public set muxrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.muxrate`, value)
    }

    /**
     * Mux packet size (byte)
     * @desc int in [0, 16384], default 0
     */
    public set packetsize(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.packetsize`, value)
    }

    /**
     * Autosplit output at 2GB boundary
     * @desc boolean, default False
     */
    public set use_autosplit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_autosplit`, value)
    }

    /**
     * Use lossless output for video streams
     * @desc boolean, default False
     */
    public set use_lossless_output(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_lossless_output`, value)
    }

    /**
     * Set a maximum number of B-frames
     * @desc boolean, default False
     */
    public set use_max_b_frames(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max_b_frames`, value)
    }

    /**
     * Video bitrate (kb/s)
     * @desc int in [-inf, inf], default 0
     */
    public set video_bitrate(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.video_bitrate`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
