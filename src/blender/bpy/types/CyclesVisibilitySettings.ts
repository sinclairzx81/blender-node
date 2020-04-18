import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesVisibilitySettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesVisibilitySettings.html
 */
export class CyclesVisibilitySettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object visibility for camera rays
     * @desc boolean, default True
     */
    public get camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.camera`)
    }

    /**
     * Object visibility for diffuse reflection rays
     * @desc boolean, default True
     */
    public get diffuse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.diffuse`)
    }

    /**
     * Object visibility for glossy reflection rays
     * @desc boolean, default True
     */
    public get glossy(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.glossy`)
    }

    /**
     * Object visibility for volume scatter rays
     * @desc boolean, default True
     */
    public get scatter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.scatter`)
    }

    /**
     * Object visibility for shadow rays
     * @desc boolean, default True
     */
    public get shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.shadow`)
    }

    /**
     * Object visibility for transmission rays
     * @desc boolean, default True
     */
    public get transmission(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.transmission`)
    }

    /**
     * Object visibility for camera rays
     * @desc boolean, default True
     */
    public set camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * Object visibility for diffuse reflection rays
     * @desc boolean, default True
     */
    public set diffuse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.diffuse`, value)
    }

    /**
     * Object visibility for glossy reflection rays
     * @desc boolean, default True
     */
    public set glossy(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.glossy`, value)
    }

    /**
     * Object visibility for volume scatter rays
     * @desc boolean, default True
     */
    public set scatter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.scatter`, value)
    }

    /**
     * Object visibility for shadow rays
     * @desc boolean, default True
     */
    public set shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.shadow`, value)
    }

    /**
     * Object visibility for transmission rays
     * @desc boolean, default True
     */
    public set transmission(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.transmission`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
