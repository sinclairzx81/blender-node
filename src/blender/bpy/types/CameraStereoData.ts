import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CameraStereoData
 * 
 * https://docs.blender.org/api/current/bpy.types.CameraStereoData.html
 */
export class CameraStereoData {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The converge point for the stereo cameras (often the distance between a projector and the projection screen)
     * @desc float in [1e-05, inf], default 1.95
     */
    public get convergence_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.convergence_distance`)
    }

    /**
     * 
     * @desc enum in ['OFFAXIS', 'PARALLEL', 'TOE'], default 'OFFAXIS'
     */
    public get convergence_mode(): 'OFFAXIS' | 'PARALLEL' | 'TOE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.convergence_mode`)
    }

    /**
     * Set the distance between the eyes - the stereo plane distance / 30 should be fine
     * @desc float in [0, inf], default 0.065
     */
    public get interocular_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.interocular_distance`)
    }

    /**
     * 
     * @desc enum in ['LEFT', 'RIGHT', 'CENTER'], default 'LEFT'
     */
    public get pivot(): 'LEFT' | 'RIGHT' | 'CENTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pivot`)
    }

    /**
     * Angle at which interocular distance starts to fade to 0
     * @desc float in [0, 1.5708], default 1.0472
     */
    public get pole_merge_angle_from(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pole_merge_angle_from`)
    }

    /**
     * Angle at which interocular distance is 0
     * @desc float in [0, 1.5708], default 1.309
     */
    public get pole_merge_angle_to(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pole_merge_angle_to`)
    }

    /**
     * Fade interocular distance to 0 after the given cutoff angle
     * @desc boolean, default False
     */
    public get use_pole_merge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pole_merge`)
    }

    /**
     * Render every pixel rotating the camera around the middle of the interocular distance
     * @desc boolean, default False
     */
    public get use_spherical_stereo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spherical_stereo`)
    }

    /**
     * The converge point for the stereo cameras (often the distance between a projector and the projection screen)
     * @desc float in [1e-05, inf], default 1.95
     */
    public set convergence_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.convergence_distance`, value)
    }

    /**
     * 
     * @desc enum in ['OFFAXIS', 'PARALLEL', 'TOE'], default 'OFFAXIS'
     */
    public set convergence_mode(value: 'OFFAXIS' | 'PARALLEL' | 'TOE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.convergence_mode`, value)
    }

    /**
     * Set the distance between the eyes - the stereo plane distance / 30 should be fine
     * @desc float in [0, inf], default 0.065
     */
    public set interocular_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.interocular_distance`, value)
    }

    /**
     * 
     * @desc enum in ['LEFT', 'RIGHT', 'CENTER'], default 'LEFT'
     */
    public set pivot(value: 'LEFT' | 'RIGHT' | 'CENTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pivot`, value)
    }

    /**
     * Angle at which interocular distance starts to fade to 0
     * @desc float in [0, 1.5708], default 1.0472
     */
    public set pole_merge_angle_from(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pole_merge_angle_from`, value)
    }

    /**
     * Angle at which interocular distance is 0
     * @desc float in [0, 1.5708], default 1.309
     */
    public set pole_merge_angle_to(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pole_merge_angle_to`, value)
    }

    /**
     * Fade interocular distance to 0 after the given cutoff angle
     * @desc boolean, default False
     */
    public set use_pole_merge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pole_merge`, value)
    }

    /**
     * Render every pixel rotating the camera around the middle of the interocular distance
     * @desc boolean, default False
     */
    public set use_spherical_stereo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spherical_stereo`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
