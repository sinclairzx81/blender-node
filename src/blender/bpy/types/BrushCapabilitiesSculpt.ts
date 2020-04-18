import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BrushCapabilitiesSculpt
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushCapabilitiesSculpt.html
 */
export class BrushCapabilitiesSculpt {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_accumulate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_accumulate`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_auto_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_auto_smooth`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_direction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_direction`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_gravity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_gravity`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_height(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_height`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_jitter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_jitter`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_normal_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_normal_weight`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_persistence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_persistence`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_pinch_factor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_pinch_factor`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_plane_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_plane_offset`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_rake_factor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_rake_factor`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_random_texture_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_random_texture_angle`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_sculpt_plane(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_sculpt_plane`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_secondary_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_secondary_color`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_smooth_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_smooth_stroke`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_space_attenuation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_space_attenuation`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_strength_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_strength_pressure`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_topology_rake(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_topology_rake`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
