import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { TransformOrientation } from './TransformOrientation'

/**
 * TransformOrientationSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.TransformOrientationSlot.html
 */
export class TransformOrientationSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc TransformOrientation, (readonly)
     */
    public get custom_orientation(): TransformOrientation {
        return PythonInterop.getClass(this.interop, `${this.accessor}.custom_orientation`, TransformOrientation)
    }

    /**
     * Transformation orientation
     * @desc enum in ['GLOBAL', 'LOCAL', 'NORMAL', 'GIMBAL', 'VIEW', 'CURSOR'], default 'GLOBAL'
     */
    public get type(): 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Use scene orientation instead of a custom setting
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Transformation orientation
     * @desc enum in ['GLOBAL', 'LOCAL', 'NORMAL', 'GIMBAL', 'VIEW', 'CURSOR'], default 'GLOBAL'
     */
    public set type(value: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Use scene orientation instead of a custom setting
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
