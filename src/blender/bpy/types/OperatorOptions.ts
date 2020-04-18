import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * OperatorOptions
 * 
 * https://docs.blender.org/api/current/bpy.types.OperatorOptions.html
 */
export class OperatorOptions {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * True when the cursor is grabbed
     * @desc boolean, default False, (readonly)
     */
    public get is_grab_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_grab_cursor`)
    }

    /**
     * True when invoked (even if only the execute callbacks available)
     * @desc boolean, default False, (readonly)
     */
    public get is_invoke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_invoke`)
    }

    /**
     * True when run from the ‘Adjust Last Operation’ panel
     * @desc boolean, default False, (readonly)
     */
    public get is_repeat(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_repeat`)
    }

    /**
     * True when run from the operator ‘Repeat Last’
     * @desc boolean, default False, (readonly)
     */
    public get is_repeat_last(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_repeat_last`)
    }

    /**
     * Enable to use the region under the cursor for modal execution
     * @desc boolean, default False
     */
    public get use_cursor_region(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor_region`)
    }

    /**
     * Enable to use the region under the cursor for modal execution
     * @desc boolean, default False
     */
    public set use_cursor_region(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor_region`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
