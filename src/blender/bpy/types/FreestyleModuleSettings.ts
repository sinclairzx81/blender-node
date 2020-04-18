import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Text } from './Text'

/**
 * FreestyleModuleSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FreestyleModuleSettings.html
 */
export class FreestyleModuleSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Python script to define a style module
     * @desc Text
     */
    public get script(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.script`, Text)
    }

    /**
     * Enable or disable this style module during stroke rendering
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Python script to define a style module
     * @desc Text
     */
    public set script(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.script`, value)
    }

    /**
     * Enable or disable this style module during stroke rendering
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
