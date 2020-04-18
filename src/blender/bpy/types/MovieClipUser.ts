import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieClipUser
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieClipUser.html
 */
export class MovieClipUser {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Current frame number in movie or image sequence
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_current(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_current`)
    }

    /**
     * Draw preview using full resolution or different proxy resolutions
     * @desc enum in ['PROXY_25', 'PROXY_50', 'PROXY_75', 'PROXY_100', 'FULL'], default 'FULL'
     */
    public get proxy_render_size(): 'PROXY_25' | 'PROXY_50' | 'PROXY_75' | 'PROXY_100' | 'FULL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proxy_render_size`)
    }

    /**
     * Render preview using undistorted proxy
     * @desc boolean, default False
     */
    public get use_render_undistorted(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_render_undistorted`)
    }

    /**
     * Current frame number in movie or image sequence
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_current(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_current`, value)
    }

    /**
     * Draw preview using full resolution or different proxy resolutions
     * @desc enum in ['PROXY_25', 'PROXY_50', 'PROXY_75', 'PROXY_100', 'FULL'], default 'FULL'
     */
    public set proxy_render_size(value: 'PROXY_25' | 'PROXY_50' | 'PROXY_75' | 'PROXY_100' | 'FULL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proxy_render_size`, value)
    }

    /**
     * Render preview using undistorted proxy
     * @desc boolean, default False
     */
    public set use_render_undistorted(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_render_undistorted`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
