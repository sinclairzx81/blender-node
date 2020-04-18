import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * IDOverrideLibraryPropertyOperation
 * 
 * https://docs.blender.org/api/current/bpy.types.IDOverrideLibraryPropertyOperation.html
 */
export class IDOverrideLibraryPropertyOperation {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Optional flags (NOT USED)
     * @desc enum in ['MANDATORY', 'LOCKED'], default 'MANDATORY', (readonly)
     */
    public get flag(): 'MANDATORY' | 'LOCKED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.flag`)
    }

    /**
     * What override operation is performed
     * @desc enum in ['NOOP', 'REPLACE', 'DIFF_ADD', 'DIFF_SUB', 'FACT_MULTIPLY', 'INSERT_AFTER', 'INSERT_BEFORE'], default 'REPLACE', (readonly)
     */
    public get operation(): 'NOOP' | 'REPLACE' | 'DIFF_ADD' | 'DIFF_SUB' | 'FACT_MULTIPLY' | 'INSERT_AFTER' | 'INSERT_BEFORE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.operation`)
    }

    /**
     * Used to handle insertions into collection
     * @desc int in [-1, inf], default -1, (readonly)
     */
    public get subitem_local_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subitem_local_index`)
    }

    /**
     * Used to handle insertions into collection
     * @desc string, default '', (readonly, never None)
     */
    public get subitem_local_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subitem_local_name`)
    }

    /**
     * Used to handle insertions into collection
     * @desc int in [-1, inf], default -1, (readonly)
     */
    public get subitem_reference_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subitem_reference_index`)
    }

    /**
     * Used to handle insertions into collection
     * @desc string, default '', (readonly, never None)
     */
    public get subitem_reference_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subitem_reference_name`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
