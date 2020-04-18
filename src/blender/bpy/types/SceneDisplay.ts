import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { View3DShading } from './View3DShading'

/**
 * SceneDisplay
 * 
 * https://docs.blender.org/api/current/bpy.types.SceneDisplay.html
 */
export class SceneDisplay {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Shading settings for OpenGL render engine
     * @desc View3DShading, (readonly)
     */
    public get shading(): View3DShading {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shading`, View3DShading)
    }

    /**
     * Direction of the light for shadows and highlights
     * @desc float array of 3 items in [-inf, inf], default (0.57735, 0.57735, 0.57735)
     */
    public get light_direction(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.light_direction`, 'number', 3)
    }

    /**
     * Attenuation constant
     * @desc float in [1, 100000], default 1.0
     */
    public get matcap_ssao_attenuation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.matcap_ssao_attenuation`)
    }

    /**
     * Distance of object that contribute to the Cavity/Edge effect
     * @desc float in [0, 100000], default 0.2
     */
    public get matcap_ssao_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.matcap_ssao_distance`)
    }

    /**
     * Number of samples
     * @desc int in [1, 500], default 16
     */
    public get matcap_ssao_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.matcap_ssao_samples`)
    }

    /**
     * Method of anti-aliasing when rendering final image
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default '8'
     */
    public get render_aa(): 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.render_aa`)
    }

    /**
     * Shadow factor hardness
     * @desc float in [0, 1], default 0.0
     */
    public get shadow_focus(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_focus`)
    }

    /**
     * Shadow termination angle
     * @desc float in [0, 1], default 0.1
     */
    public get shadow_shift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_shift`)
    }

    /**
     * Method of anti-aliasing when rendering 3d viewport
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default 'FXAA'
     */
    public get viewport_aa(): 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.viewport_aa`)
    }

    /**
     * Direction of the light for shadows and highlights
     * @desc float array of 3 items in [-inf, inf], default (0.57735, 0.57735, 0.57735)
     */
    public set light_direction(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.light_direction`, value)
    }

    /**
     * Attenuation constant
     * @desc float in [1, 100000], default 1.0
     */
    public set matcap_ssao_attenuation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.matcap_ssao_attenuation`, value)
    }

    /**
     * Distance of object that contribute to the Cavity/Edge effect
     * @desc float in [0, 100000], default 0.2
     */
    public set matcap_ssao_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.matcap_ssao_distance`, value)
    }

    /**
     * Number of samples
     * @desc int in [1, 500], default 16
     */
    public set matcap_ssao_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.matcap_ssao_samples`, value)
    }

    /**
     * Method of anti-aliasing when rendering final image
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default '8'
     */
    public set render_aa(value: 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.render_aa`, value)
    }

    /**
     * Shadow factor hardness
     * @desc float in [0, 1], default 0.0
     */
    public set shadow_focus(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_focus`, value)
    }

    /**
     * Shadow termination angle
     * @desc float in [0, 1], default 0.1
     */
    public set shadow_shift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_shift`, value)
    }

    /**
     * Method of anti-aliasing when rendering 3d viewport
     * @desc enum in ['OFF', 'FXAA', '5', '8', '11', '16', '32'], default 'FXAA'
     */
    public set viewport_aa(value: 'OFF' | 'FXAA' | '5' | '8' | '11' | '16' | '32') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.viewport_aa`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
