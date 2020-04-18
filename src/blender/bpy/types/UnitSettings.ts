import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UnitSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.UnitSettings.html
 */
export class UnitSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Unit that will be used to display length values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get length_unit(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.length_unit`)
    }

    /**
     * Unit that will be used to display mass values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get mass_unit(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mass_unit`)
    }

    /**
     * Scale to use when converting between blender units and dimensions. When working at microscopic or astronomical scale, a small or large unit scale respectively can be used to avoid numerical precision problems
     * @desc float in [1e-05, 100000], default 0.0
     */
    public get scale_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_length`)
    }

    /**
     * The unit system to use for user interface controls
     * @desc enum in ['NONE', 'METRIC', 'IMPERIAL'], default 'NONE'
     */
    public get system(): 'NONE' | 'METRIC' | 'IMPERIAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.system`)
    }

    /**
     * Unit to use for displaying/editing rotation values
     * @desc enum in ['DEGREES', 'RADIANS'], default 'DEGREES'
     */
    public get system_rotation(): 'DEGREES' | 'RADIANS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.system_rotation`)
    }

    /**
     * Unit that will be used to display time values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get time_unit(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.time_unit`)
    }

    /**
     * Display units in pairs (e.g. 1m 0cm)
     * @desc boolean, default False
     */
    public get use_separate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_separate`)
    }

    /**
     * Unit that will be used to display length values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set length_unit(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.length_unit`, value)
    }

    /**
     * Unit that will be used to display mass values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set mass_unit(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mass_unit`, value)
    }

    /**
     * Scale to use when converting between blender units and dimensions. When working at microscopic or astronomical scale, a small or large unit scale respectively can be used to avoid numerical precision problems
     * @desc float in [1e-05, 100000], default 0.0
     */
    public set scale_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_length`, value)
    }

    /**
     * The unit system to use for user interface controls
     * @desc enum in ['NONE', 'METRIC', 'IMPERIAL'], default 'NONE'
     */
    public set system(value: 'NONE' | 'METRIC' | 'IMPERIAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.system`, value)
    }

    /**
     * Unit to use for displaying/editing rotation values
     * @desc enum in ['DEGREES', 'RADIANS'], default 'DEGREES'
     */
    public set system_rotation(value: 'DEGREES' | 'RADIANS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.system_rotation`, value)
    }

    /**
     * Unit that will be used to display time values
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set time_unit(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.time_unit`, value)
    }

    /**
     * Display units in pairs (e.g. 1m 0cm)
     * @desc boolean, default False
     */
    public set use_separate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_separate`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
