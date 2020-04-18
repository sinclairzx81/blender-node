import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UILayout } from './UILayout'

/**
 * UIPopupMenu
 * 
 * https://docs.blender.org/api/current/bpy.types.UIPopupMenu.html
 */
export class UIPopupMenu {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc UILayout, (readonly)
     */
    public get layout(): UILayout {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layout`, UILayout)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
