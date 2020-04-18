import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * SelectedUvElement
 * 
 * https://docs.blender.org/api/current/bpy.types.SelectedUvElement.html
 */
export class SelectedUvElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get element_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.element_index`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get face_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.face_index`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set element_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.element_index`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set face_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.face_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
