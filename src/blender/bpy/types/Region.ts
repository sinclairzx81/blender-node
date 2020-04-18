import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { View2D } from './View2D'

/**
 * Region
 * 
 * https://docs.blender.org/api/current/bpy.types.Region.html
 */
export class Region {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Alignment of the region within the area
     * @desc enum in ['NONE', 'TOP', 'BOTTOM', 'LEFT', 'RIGHT', 'HORIZONTAL_SPLIT', 'VERTICAL_SPLIT', 'FLOAT', 'QUAD_SPLIT'], default 'NONE', (readonly)
     */
    public get alignment(): 'NONE' | 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'HORIZONTAL_SPLIT' | 'VERTICAL_SPLIT' | 'FLOAT' | 'QUAD_SPLIT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alignment`)
    }

    /**
     * Region height
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.height`)
    }

    /**
     * Type of this region
     * @desc enum in ['WINDOW', 'HEADER', 'CHANNELS', 'TEMPORARY', 'UI', 'TOOLS', 'TOOL_PROPS', 'PREVIEW', 'HUD', 'NAVIGATION_BAR', 'EXECUTE', 'FOOTER', 'TOOL_HEADER'], default 'WINDOW', (readonly)
     */
    public get type(): 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * 2D view of the region
     * @desc View2D, (readonly, never None)
     */
    public get view2d(): View2D {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view2d`, View2D)
    }

    /**
     * Region width
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.width`)
    }

    /**
     * The window relative vertical location of the region
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.x`)
    }

    /**
     * The window relative horizontal location of the region
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.y`)
    }

    /**
     * tag_redraw
     * @desc void
     */
    public tag_redraw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag_redraw`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
