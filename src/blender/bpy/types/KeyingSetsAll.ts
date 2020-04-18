import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyingSet } from './KeyingSet'

/**
 * KeyingSetsAll
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyingSetsAll.html
 */
export class KeyingSetsAll {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Keying Set used to insert/delete keyframes
     * @desc KeyingSet
     */
    public get active(): KeyingSet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, KeyingSet)
    }

    /**
     * Current Keying Set index (negative for ‘builtin’ and positive for ‘absolute’)
     * @desc int in [-inf, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active Keying Set used to insert/delete keyframes
     * @desc KeyingSet
     */
    public set active(value: KeyingSet) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Current Keying Set index (negative for ‘builtin’ and positive for ‘absolute’)
     * @desc int in [-inf, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
