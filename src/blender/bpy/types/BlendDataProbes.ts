import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { LightProbe } from './LightProbe'

/**
 * BlendDataProbes
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataProbes.html
 */
export class BlendDataProbes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new probe to the main database
     * @desc LightProbe
     */
    public new(options: { name?: string }): LightProbe {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, LightProbe)
    }

    /**
     * Remove a probe from the current blendfile
     * @desc void
     */
    public remove(options: { lightprobe?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
