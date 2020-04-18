import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { World } from './World'

/**
 * BlendDataWorlds
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataWorlds.html
 */
export class BlendDataWorlds {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new world to the main database
     * @desc World
     */
    public new(options: { name?: string }): World {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, World)
    }

    /**
     * Remove a world from the current blendfile
     * @desc void
     */
    public remove(options: { world?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
