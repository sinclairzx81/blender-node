import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Sound } from './Sound'

/**
 * BlendDataSounds
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataSounds.html
 */
export class BlendDataSounds {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new sound to the main database from a file
     * @desc Sound
     */
    public load(options: { filepath?: string, check_existing?: boolean }): Sound {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, Sound)
    }

    /**
     * Remove a sound from the current blendfile
     * @desc void
     */
    public remove(options: { sound?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
