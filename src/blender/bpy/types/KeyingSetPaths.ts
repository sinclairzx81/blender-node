import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyingSetPath } from './KeyingSetPath'

/**
 * KeyingSetPaths
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyingSetPaths.html
 */
export class KeyingSetPaths {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Keying Set used to insert/delete keyframes
     * @desc KeyingSetPath
     */
    public get active(): KeyingSetPath {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, KeyingSetPath)
    }

    /**
     * Current Keying Set index
     * @desc int in [-inf, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active Keying Set used to insert/delete keyframes
     * @desc KeyingSetPath
     */
    public set active(value: KeyingSetPath) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Current Keying Set index
     * @desc int in [-inf, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a new path for the Keying Set
     * @desc KeyingSetPath
     */
    public add(options: { target_id?: unknown, data_path?: string, index?: number, group_method?: 'NAMED' | 'NONE' | 'KEYINGSET', group_name?: string }): KeyingSetPath {
        return PythonInterop.callClass(this.interop, `${this.accessor}.add`, options, KeyingSetPath)
    }

    /**
     * Remove the given path from the Keying Set
     * @desc void
     */
    public remove(options: { path?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all the paths from the Keying Set
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
