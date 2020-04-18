import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WalkNavigation
 * 
 * https://docs.blender.org/api/current/bpy.types.WalkNavigation.html
 */
export class WalkNavigation {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Maximum height of a jump
     * @desc float in [0.1, 100], default 0.4
     */
    public get jump_height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.jump_height`)
    }

    /**
     * Speed factor for when looking around, high values mean faster mouse movement
     * @desc float in [0.01, 10], default 1.0
     */
    public get mouse_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mouse_speed`)
    }

    /**
     * Interval of time warp when teleporting in navigation mode
     * @desc float in [0, 10], default 0.2
     */
    public get teleport_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.teleport_time`)
    }

    /**
     * Walk with gravity, or free navigate
     * @desc boolean, default False
     */
    public get use_gravity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gravity`)
    }

    /**
     * Reverse the vertical movement of the mouse
     * @desc boolean, default False
     */
    public get use_mouse_reverse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_reverse`)
    }

    /**
     * View distance from the floor when walking
     * @desc float in [0, 1000], default 1.6
     */
    public get view_height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_height`)
    }

    /**
     * Base speed for walking and flying
     * @desc float in [0.01, 100], default 2.5
     */
    public get walk_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.walk_speed`)
    }

    /**
     * Multiplication factor when using the fast or slow modifiers
     * @desc float in [0.01, 10], default 5.0
     */
    public get walk_speed_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.walk_speed_factor`)
    }

    /**
     * Maximum height of a jump
     * @desc float in [0.1, 100], default 0.4
     */
    public set jump_height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.jump_height`, value)
    }

    /**
     * Speed factor for when looking around, high values mean faster mouse movement
     * @desc float in [0.01, 10], default 1.0
     */
    public set mouse_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mouse_speed`, value)
    }

    /**
     * Interval of time warp when teleporting in navigation mode
     * @desc float in [0, 10], default 0.2
     */
    public set teleport_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.teleport_time`, value)
    }

    /**
     * Walk with gravity, or free navigate
     * @desc boolean, default False
     */
    public set use_gravity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gravity`, value)
    }

    /**
     * Reverse the vertical movement of the mouse
     * @desc boolean, default False
     */
    public set use_mouse_reverse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_reverse`, value)
    }

    /**
     * View distance from the floor when walking
     * @desc float in [0, 1000], default 1.6
     */
    public set view_height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_height`, value)
    }

    /**
     * Base speed for walking and flying
     * @desc float in [0.01, 100], default 2.5
     */
    public set walk_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.walk_speed`, value)
    }

    /**
     * Multiplication factor when using the fast or slow modifiers
     * @desc float in [0.01, 10], default 5.0
     */
    public set walk_speed_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.walk_speed_factor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
