import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'

/**
 * TextureNodeBricks
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeBricks.html
 */
export class TextureNodeBricks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Offset every N rows
     * @desc int in [2, 99], default 0
     */
    public get offset_frequency(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.offset_frequency`)
    }

    /**
     * 
     * @desc float in [0, 99], default 0.0
     */
    public get squash(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.squash`)
    }

    /**
     * Squash every N rows
     * @desc int in [2, 99], default 0
     */
    public get squash_frequency(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.squash_frequency`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Offset every N rows
     * @desc int in [2, 99], default 0
     */
    public set offset_frequency(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.offset_frequency`, value)
    }

    /**
     * 
     * @desc float in [0, 99], default 0.0
     */
    public set squash(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.squash`, value)
    }

    /**
     * Squash every N rows
     * @desc int in [2, 99], default 0
     */
    public set squash_frequency(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.squash_frequency`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
