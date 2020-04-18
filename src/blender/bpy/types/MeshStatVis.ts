import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshStatVis
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshStatVis.html
 */
export class MeshStatVis {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Maximum angle to display
     * @desc float in [0, 3.14159], default 0.785398
     */
    public get distort_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distort_max`)
    }

    /**
     * Minimum angle to display
     * @desc float in [0, 3.14159], default 0.0872665
     */
    public get distort_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distort_min`)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'NEG_Z'
     */
    public get overhang_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.overhang_axis`)
    }

    /**
     * Maximum angle to display
     * @desc float in [0, 3.14159], default 0.785398
     */
    public get overhang_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.overhang_max`)
    }

    /**
     * Minimum angle to display
     * @desc float in [0, 3.14159], default 0.0
     */
    public get overhang_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.overhang_min`)
    }

    /**
     * Maximum angle to display
     * @desc float in [-3.14159, 3.14159], default 3.14159
     */
    public get sharp_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sharp_max`)
    }

    /**
     * Minimum angle to display
     * @desc float in [-3.14159, 3.14159], default 1.5708
     */
    public get sharp_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sharp_min`)
    }

    /**
     * Maximum for measuring thickness
     * @desc float in [0, 1000], default 0.1
     */
    public get thickness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_max`)
    }

    /**
     * Minimum for measuring thickness
     * @desc float in [0, 1000], default 0.0
     */
    public get thickness_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_min`)
    }

    /**
     * Number of samples to test per face
     * @desc int in [1, 32], default 1
     */
    public get thickness_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.thickness_samples`)
    }

    /**
     * Type of data to visualize/check
     * @desc enum in ['OVERHANG', 'THICKNESS', 'INTERSECT', 'DISTORT', 'SHARP'], default 'OVERHANG'
     */
    public get type(): 'OVERHANG' | 'THICKNESS' | 'INTERSECT' | 'DISTORT' | 'SHARP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Maximum angle to display
     * @desc float in [0, 3.14159], default 0.785398
     */
    public set distort_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distort_max`, value)
    }

    /**
     * Minimum angle to display
     * @desc float in [0, 3.14159], default 0.0872665
     */
    public set distort_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distort_min`, value)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'NEG_Z'
     */
    public set overhang_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.overhang_axis`, value)
    }

    /**
     * Maximum angle to display
     * @desc float in [0, 3.14159], default 0.785398
     */
    public set overhang_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.overhang_max`, value)
    }

    /**
     * Minimum angle to display
     * @desc float in [0, 3.14159], default 0.0
     */
    public set overhang_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.overhang_min`, value)
    }

    /**
     * Maximum angle to display
     * @desc float in [-3.14159, 3.14159], default 3.14159
     */
    public set sharp_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sharp_max`, value)
    }

    /**
     * Minimum angle to display
     * @desc float in [-3.14159, 3.14159], default 1.5708
     */
    public set sharp_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sharp_min`, value)
    }

    /**
     * Maximum for measuring thickness
     * @desc float in [0, 1000], default 0.1
     */
    public set thickness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_max`, value)
    }

    /**
     * Minimum for measuring thickness
     * @desc float in [0, 1000], default 0.0
     */
    public set thickness_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_min`, value)
    }

    /**
     * Number of samples to test per face
     * @desc int in [1, 32], default 1
     */
    public set thickness_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.thickness_samples`, value)
    }

    /**
     * Type of data to visualize/check
     * @desc enum in ['OVERHANG', 'THICKNESS', 'INTERSECT', 'DISTORT', 'SHARP'], default 'OVERHANG'
     */
    public set type(value: 'OVERHANG' | 'THICKNESS' | 'INTERSECT' | 'DISTORT' | 'SHARP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
