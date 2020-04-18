import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * BooleanModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.BooleanModifier.html
 */
export class BooleanModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Debugging options, only when started with ‘-d’
     * @desc enum set in {'SEPARATE', 'NO_DISSOLVE', 'NO_CONNECT_REGIONS'}, default {'SEPARATE'}
     */
    public get debug_options(): ('SEPARATE' | 'NO_DISSOLVE' | 'NO_CONNECT_REGIONS')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.debug_options`)
    }

    /**
     * Threshold for checking overlapping geometry
     * @desc float in [0, 1], default 0.0
     */
    public get double_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.double_threshold`)
    }

    /**
     * Mesh object to use for Boolean operation
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * 
     * @desc enum in ['INTERSECT', 'UNION', 'DIFFERENCE'], default 'DIFFERENCE'
     */
    public get operation(): 'INTERSECT' | 'UNION' | 'DIFFERENCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.operation`)
    }

    /**
     * Debugging options, only when started with ‘-d’
     * @desc enum set in {'SEPARATE', 'NO_DISSOLVE', 'NO_CONNECT_REGIONS'}, default {'SEPARATE'}
     */
    public set debug_options(value: ('SEPARATE' | 'NO_DISSOLVE' | 'NO_CONNECT_REGIONS')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.debug_options`, value)
    }

    /**
     * Threshold for checking overlapping geometry
     * @desc float in [0, 1], default 0.0
     */
    public set double_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.double_threshold`, value)
    }

    /**
     * Mesh object to use for Boolean operation
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * 
     * @desc enum in ['INTERSECT', 'UNION', 'DIFFERENCE'], default 'DIFFERENCE'
     */
    public set operation(value: 'INTERSECT' | 'UNION' | 'DIFFERENCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.operation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
