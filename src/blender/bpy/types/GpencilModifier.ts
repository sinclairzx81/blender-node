import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.GpencilModifier.html
 */
export class GpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['GP_ARRAY', 'GP_BUILD', 'GP_MIRROR', 'GP_SIMPLIFY', 'GP_SUBDIV', 'GP_MULTIPLY', 'GP_ARMATURE', 'GP_HOOK', 'GP_LATTICE', 'GP_NOISE', 'GP_OFFSET', 'GP_SMOOTH', 'GP_THICK', 'GP_TIME', 'GP_COLOR', 'GP_OPACITY', 'GP_TINT'], default 'GP_ARRAY', (readonly)
     */
    public get type(): 'GP_ARRAY' | 'GP_BUILD' | 'GP_MIRROR' | 'GP_SIMPLIFY' | 'GP_SUBDIV' | 'GP_MULTIPLY' | 'GP_ARMATURE' | 'GP_HOOK' | 'GP_LATTICE' | 'GP_NOISE' | 'GP_OFFSET' | 'GP_SMOOTH' | 'GP_THICK' | 'GP_TIME' | 'GP_COLOR' | 'GP_OPACITY' | 'GP_TINT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Modifier name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Set modifier expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Display modifier in Edit mode
     * @desc boolean, default False
     */
    public get show_in_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_in_editmode`)
    }

    /**
     * Use modifier during render
     * @desc boolean, default False
     */
    public get show_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_render`)
    }

    /**
     * Display modifier in viewport
     * @desc boolean, default False
     */
    public get show_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_viewport`)
    }

    /**
     * Modifier name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Set modifier expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Display modifier in Edit mode
     * @desc boolean, default False
     */
    public set show_in_editmode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_in_editmode`, value)
    }

    /**
     * Use modifier during render
     * @desc boolean, default False
     */
    public set show_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_render`, value)
    }

    /**
     * Display modifier in viewport
     * @desc boolean, default False
     */
    public set show_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_viewport`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
