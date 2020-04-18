import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeDilateErode
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDilateErode.html
 */
export class CompositorNodeDilateErode {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance to grow/shrink (number of iterations)
     * @desc int in [-5000, 5000], default 0
     */
    public get distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Edge to inset
     * @desc float in [-100, 100], default 0.0
     */
    public get edge(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.edge`)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public get falloff(): 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Growing/shrinking mode
     * @desc enum in ['STEP', 'THRESHOLD', 'DISTANCE', 'FEATHER'], default 'STEP'
     */
    public get mode(): 'STEP' | 'THRESHOLD' | 'DISTANCE' | 'FEATHER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Distance to grow/shrink (number of iterations)
     * @desc int in [-5000, 5000], default 0
     */
    public set distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Edge to inset
     * @desc float in [-100, 100], default 0.0
     */
    public set edge(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.edge`, value)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public set falloff(value: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Growing/shrinking mode
     * @desc enum in ['STEP', 'THRESHOLD', 'DISTANCE', 'FEATHER'], default 'STEP'
     */
    public set mode(value: 'STEP' | 'THRESHOLD' | 'DISTANCE' | 'FEATHER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
