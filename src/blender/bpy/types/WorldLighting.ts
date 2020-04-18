import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WorldLighting
 * 
 * https://docs.blender.org/api/current/bpy.types.WorldLighting.html
 */
export class WorldLighting {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Factor for ambient occlusion blending
     * @desc float in [0, inf], default 1.0
     */
    public get ao_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ao_factor`)
    }

    /**
     * Length of rays, defines how far away other faces give occlusion effect
     * @desc float in [-inf, inf], default 10.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Use Ambient Occlusion to add shadowing based on distance between objects
     * @desc boolean, default False
     */
    public get use_ambient_occlusion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ambient_occlusion`)
    }

    /**
     * Factor for ambient occlusion blending
     * @desc float in [0, inf], default 1.0
     */
    public set ao_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ao_factor`, value)
    }

    /**
     * Length of rays, defines how far away other faces give occlusion effect
     * @desc float in [-inf, inf], default 10.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Use Ambient Occlusion to add shadowing based on distance between objects
     * @desc boolean, default False
     */
    public set use_ambient_occlusion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ambient_occlusion`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
