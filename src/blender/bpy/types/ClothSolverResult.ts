import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ClothSolverResult
 * 
 * https://docs.blender.org/api/current/bpy.types.ClothSolverResult.html
 */
export class ClothSolverResult {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Average error during substeps
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get avg_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.avg_error`)
    }

    /**
     * Average iterations during substeps
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get avg_iterations(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.avg_iterations`)
    }

    /**
     * Maximum error during substeps
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get max_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_error`)
    }

    /**
     * Maximum iterations during substeps
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get max_iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_iterations`)
    }

    /**
     * Minimum error during substeps
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get min_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min_error`)
    }

    /**
     * Minimum iterations during substeps
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get min_iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_iterations`)
    }

    /**
     * Status of the solver iteration
     * @desc enum set in {'SUCCESS', 'NUMERICAL_ISSUE', 'NO_CONVERGENCE', 'INVALID_INPUT'}, default {'SUCCESS'}, (readonly)
     */
    public get status(): ('SUCCESS' | 'NUMERICAL_ISSUE' | 'NO_CONVERGENCE' | 'INVALID_INPUT')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.status`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
