import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeStatusBar
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeStatusBar.html
 */
export class ThemeStatusBar {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
