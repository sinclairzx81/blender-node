import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ScriptOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.script.html
 */
export class ScriptOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Execute a preset
     * @desc void
     */
    public execute_preset(options: { filepath?: string, menu_idname?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.execute_preset`, options)
    }

    /**
     * Run Python file
     * @desc void
     */
    public python_file_run(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.python_file_run`, options)
    }

    /**
     * Reload Scripts
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
