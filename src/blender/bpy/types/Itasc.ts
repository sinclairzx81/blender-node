import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { IKParam } from './IKParam'

/**
 * Itasc
 * 
 * https://docs.blender.org/api/current/bpy.types.Itasc.html
 */
export class Itasc {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Singular value under which damping is progressively applied (higher values=more stability, less reactivity - default=0.1)
     * @desc float in [0, 1], default 0.0
     */
    public get damping_epsilon(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping_epsilon`)
    }

    /**
     * Maximum damping coefficient when singular value is nearly 0 (higher values=more stability, less reactivity - default=0.5)
     * @desc float in [0, 1], default 0.0
     */
    public get damping_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping_max`)
    }

    /**
     * Feedback coefficient for error correction, average response time is 1/feedback (default=20)
     * @desc float in [0, 100], default 0.0
     */
    public get feedback(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.feedback`)
    }

    /**
     * Maximum number of iterations for convergence in case of reiteration
     * @desc int in [0, 1000], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * 
     * @desc enum in ['ANIMATION', 'SIMULATION'], default 'ANIMATION'
     */
    public get mode(): 'ANIMATION' | 'SIMULATION' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Precision of convergence in case of reiteration
     * @desc float in [0, 0.1], default 0.0
     */
    public get precision(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.precision`)
    }

    /**
     * Defines if the solver is allowed to reiterate (converge until precision is met) on none, first or all frames
     * @desc enum in ['NEVER', 'INITIAL', 'ALWAYS'], default 'NEVER'
     */
    public get reiteration_method(): 'NEVER' | 'INITIAL' | 'ALWAYS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.reiteration_method`)
    }

    /**
     * Solving method selection: automatic damping or manual damping
     * @desc enum in ['SDLS', 'DLS'], default 'SDLS'
     */
    public get solver(): 'SDLS' | 'DLS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.solver`)
    }

    /**
     * Divide the frame interval into this many steps
     * @desc int in [1, 50], default 0
     */
    public get step_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.step_count`)
    }

    /**
     * Higher bound for timestep in second in case of automatic substeps
     * @desc float in [0, 1], default 0.0
     */
    public get step_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.step_max`)
    }

    /**
     * Lower bound for timestep in second in case of automatic substeps
     * @desc float in [0, 0.1], default 0.0
     */
    public get step_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.step_min`)
    }

    /**
     * Automatically determine the optimal number of steps for best performance/accuracy trade off
     * @desc boolean, default False
     */
    public get use_auto_step(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_step`)
    }

    /**
     * Maximum joint velocity in rad/s (default=50)
     * @desc float in [0, 100], default 0.0
     */
    public get velocity_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_max`)
    }

    /**
     * Singular value under which damping is progressively applied (higher values=more stability, less reactivity - default=0.1)
     * @desc float in [0, 1], default 0.0
     */
    public set damping_epsilon(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping_epsilon`, value)
    }

    /**
     * Maximum damping coefficient when singular value is nearly 0 (higher values=more stability, less reactivity - default=0.5)
     * @desc float in [0, 1], default 0.0
     */
    public set damping_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping_max`, value)
    }

    /**
     * Feedback coefficient for error correction, average response time is 1/feedback (default=20)
     * @desc float in [0, 100], default 0.0
     */
    public set feedback(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.feedback`, value)
    }

    /**
     * Maximum number of iterations for convergence in case of reiteration
     * @desc int in [0, 1000], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * 
     * @desc enum in ['ANIMATION', 'SIMULATION'], default 'ANIMATION'
     */
    public set mode(value: 'ANIMATION' | 'SIMULATION') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Precision of convergence in case of reiteration
     * @desc float in [0, 0.1], default 0.0
     */
    public set precision(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.precision`, value)
    }

    /**
     * Defines if the solver is allowed to reiterate (converge until precision is met) on none, first or all frames
     * @desc enum in ['NEVER', 'INITIAL', 'ALWAYS'], default 'NEVER'
     */
    public set reiteration_method(value: 'NEVER' | 'INITIAL' | 'ALWAYS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.reiteration_method`, value)
    }

    /**
     * Solving method selection: automatic damping or manual damping
     * @desc enum in ['SDLS', 'DLS'], default 'SDLS'
     */
    public set solver(value: 'SDLS' | 'DLS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.solver`, value)
    }

    /**
     * Divide the frame interval into this many steps
     * @desc int in [1, 50], default 0
     */
    public set step_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.step_count`, value)
    }

    /**
     * Higher bound for timestep in second in case of automatic substeps
     * @desc float in [0, 1], default 0.0
     */
    public set step_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.step_max`, value)
    }

    /**
     * Lower bound for timestep in second in case of automatic substeps
     * @desc float in [0, 0.1], default 0.0
     */
    public set step_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.step_min`, value)
    }

    /**
     * Automatically determine the optimal number of steps for best performance/accuracy trade off
     * @desc boolean, default False
     */
    public set use_auto_step(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_step`, value)
    }

    /**
     * Maximum joint velocity in rad/s (default=50)
     * @desc float in [0, 100], default 0.0
     */
    public set velocity_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_max`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
