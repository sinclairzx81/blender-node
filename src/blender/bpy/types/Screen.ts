import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Area } from './Area'

/**
 * Screen
 * 
 * https://docs.blender.org/api/current/bpy.types.Screen.html
 */
export class Screen {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Areas the screen is subdivided into
     * @desc bpy_prop_collection of Area, (readonly)
     */
    public get areas(): BlenderCollection<Area> & Indexable<Area> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.areas`, Area)
    }

    /**
     * Animation playback is active
     * @desc boolean, default False, (readonly)
     */
    public get is_animation_playing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_animation_playing`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_temporary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_temporary`)
    }

    /**
     * An area is maximized, filling this screen
     * @desc boolean, default False, (readonly)
     */
    public get show_fullscreen(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_fullscreen`)
    }

    /**
     * Show status bar
     * @desc boolean, default False
     */
    public get show_statusbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_statusbar`)
    }

    /**
     * Follow current frame in editors
     * @desc boolean, default False
     */
    public get use_follow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_follow`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_3d_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_3d_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_animation_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_animation_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_clip_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_clip_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_image_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_image_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_node_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_node_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_properties_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_properties_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_sequence_editors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_sequence_editors`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_play_top_left_3d_editor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_play_top_left_3d_editor`)
    }

    /**
     * Show status bar
     * @desc boolean, default False
     */
    public set show_statusbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_statusbar`, value)
    }

    /**
     * Follow current frame in editors
     * @desc boolean, default False
     */
    public set use_follow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_follow`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_3d_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_3d_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_animation_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_animation_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_clip_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_clip_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_image_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_image_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_node_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_node_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_properties_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_properties_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_sequence_editors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_sequence_editors`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_play_top_left_3d_editor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_play_top_left_3d_editor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
