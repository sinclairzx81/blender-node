import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ConsoleLine
 * 
 * https://docs.blender.org/api/current/bpy.types.ConsoleLine.html
 */
export class ConsoleLine {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Text in the line
     * @desc string, default '', (never None)
     */
    public get body(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.body`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get current_character(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.current_character`)
    }

    /**
     * Console line type when used in scrollback
     * @desc enum in ['OUTPUT', 'INPUT', 'INFO', 'ERROR'], default 'OUTPUT'
     */
    public get type(): 'OUTPUT' | 'INPUT' | 'INFO' | 'ERROR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Text in the line
     * @desc string, default '', (never None)
     */
    public set body(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.body`, value)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set current_character(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.current_character`, value)
    }

    /**
     * Console line type when used in scrollback
     * @desc enum in ['OUTPUT', 'INPUT', 'INFO', 'ERROR'], default 'OUTPUT'
     */
    public set type(value: 'OUTPUT' | 'INPUT' | 'INFO' | 'ERROR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
