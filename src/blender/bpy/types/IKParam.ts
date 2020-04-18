import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * IKParam
 * 
 * https://docs.blender.org/api/current/bpy.types.IKParam.html
 */
export class IKParam {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * IK solver for which these parameters are defined
     * @desc enum in ['LEGACY', 'ITASC'], default 'LEGACY', (readonly)
     */
    public get ik_solver(): 'LEGACY' | 'ITASC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ik_solver`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
