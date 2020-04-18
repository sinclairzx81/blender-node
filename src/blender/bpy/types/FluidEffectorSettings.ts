import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FluidEffectorSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FluidEffectorSettings.html
 */
export class FluidEffectorSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Change type of effector in the simulation
     * @desc enum in ['COLLISION', 'GUIDE'], default 'COLLISION'
     */
    public get effector_type(): 'COLLISION' | 'GUIDE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.effector_type`)
    }

    /**
     * How to create guiding velocities
     * @desc enum in ['MAXIMUM', 'MINIMUM', 'OVERRIDE', 'AVERAGED'], default 'MAXIMUM'
     */
    public get guide_mode(): 'MAXIMUM' | 'MINIMUM' | 'OVERRIDE' | 'AVERAGED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.guide_mode`)
    }

    /**
     * Distance around mesh surface to consider as effector
     * @desc float in [0, 10], default 0.0
     */
    public get surface_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.surface_distance`)
    }

    /**
     * Treat this object as a planar, unclosed mesh
     * @desc boolean, default False
     */
    public get use_plane_init(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_plane_init`)
    }

    /**
     * Multiplier of obstacle velocity
     * @desc float in [-100, 100], default 0.0
     */
    public get velocity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_factor`)
    }

    /**
     * Change type of effector in the simulation
     * @desc enum in ['COLLISION', 'GUIDE'], default 'COLLISION'
     */
    public set effector_type(value: 'COLLISION' | 'GUIDE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.effector_type`, value)
    }

    /**
     * How to create guiding velocities
     * @desc enum in ['MAXIMUM', 'MINIMUM', 'OVERRIDE', 'AVERAGED'], default 'MAXIMUM'
     */
    public set guide_mode(value: 'MAXIMUM' | 'MINIMUM' | 'OVERRIDE' | 'AVERAGED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.guide_mode`, value)
    }

    /**
     * Distance around mesh surface to consider as effector
     * @desc float in [0, 10], default 0.0
     */
    public set surface_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.surface_distance`, value)
    }

    /**
     * Treat this object as a planar, unclosed mesh
     * @desc boolean, default False
     */
    public set use_plane_init(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_plane_init`, value)
    }

    /**
     * Multiplier of obstacle velocity
     * @desc float in [-100, 100], default 0.0
     */
    public set velocity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_factor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
