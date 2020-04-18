import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeBoneColorSet } from './ThemeBoneColorSet'
import { ThemeClipEditor } from './ThemeClipEditor'
import { ThemeConsole } from './ThemeConsole'
import { ThemeDopeSheet } from './ThemeDopeSheet'
import { ThemeFileBrowser } from './ThemeFileBrowser'
import { ThemeGraphEditor } from './ThemeGraphEditor'
import { ThemeImageEditor } from './ThemeImageEditor'
import { ThemeInfo } from './ThemeInfo'
import { ThemeNLAEditor } from './ThemeNLAEditor'
import { ThemeNodeEditor } from './ThemeNodeEditor'
import { ThemeOutliner } from './ThemeOutliner'
import { ThemePreferences } from './ThemePreferences'
import { ThemeProperties } from './ThemeProperties'
import { ThemeSequenceEditor } from './ThemeSequenceEditor'
import { ThemeStatusBar } from './ThemeStatusBar'
import { ThemeTextEditor } from './ThemeTextEditor'
import { ThemeTopBar } from './ThemeTopBar'
import { ThemeUserInterface } from './ThemeUserInterface'
import { ThemeView3D } from './ThemeView3D'

/**
 * Theme
 * 
 * https://docs.blender.org/api/current/bpy.types.Theme.html
 */
export class Theme {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of ThemeBoneColorSet, (readonly, never None)
     */
    public get bone_color_sets(): BlenderCollection<ThemeBoneColorSet> & Indexable<ThemeBoneColorSet> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.bone_color_sets`, ThemeBoneColorSet)
    }

    /**
     * 
     * @desc ThemeClipEditor, (readonly, never None)
     */
    public get clip_editor(): ThemeClipEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip_editor`, ThemeClipEditor)
    }

    /**
     * 
     * @desc ThemeConsole, (readonly, never None)
     */
    public get console(): ThemeConsole {
        return PythonInterop.getClass(this.interop, `${this.accessor}.console`, ThemeConsole)
    }

    /**
     * 
     * @desc ThemeDopeSheet, (readonly, never None)
     */
    public get dopesheet_editor(): ThemeDopeSheet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dopesheet_editor`, ThemeDopeSheet)
    }

    /**
     * 
     * @desc ThemeFileBrowser, (readonly, never None)
     */
    public get file_browser(): ThemeFileBrowser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.file_browser`, ThemeFileBrowser)
    }

    /**
     * 
     * @desc ThemeGraphEditor, (readonly, never None)
     */
    public get graph_editor(): ThemeGraphEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.graph_editor`, ThemeGraphEditor)
    }

    /**
     * 
     * @desc ThemeImageEditor, (readonly, never None)
     */
    public get image_editor(): ThemeImageEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_editor`, ThemeImageEditor)
    }

    /**
     * 
     * @desc ThemeInfo, (readonly, never None)
     */
    public get info(): ThemeInfo {
        return PythonInterop.getClass(this.interop, `${this.accessor}.info`, ThemeInfo)
    }

    /**
     * 
     * @desc ThemeNLAEditor, (readonly, never None)
     */
    public get nla_editor(): ThemeNLAEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.nla_editor`, ThemeNLAEditor)
    }

    /**
     * 
     * @desc ThemeNodeEditor, (readonly, never None)
     */
    public get node_editor(): ThemeNodeEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_editor`, ThemeNodeEditor)
    }

    /**
     * 
     * @desc ThemeOutliner, (readonly, never None)
     */
    public get outliner(): ThemeOutliner {
        return PythonInterop.getClass(this.interop, `${this.accessor}.outliner`, ThemeOutliner)
    }

    /**
     * 
     * @desc ThemePreferences, (readonly, never None)
     */
    public get preferences(): ThemePreferences {
        return PythonInterop.getClass(this.interop, `${this.accessor}.preferences`, ThemePreferences)
    }

    /**
     * 
     * @desc ThemeProperties, (readonly, never None)
     */
    public get properties(): ThemeProperties {
        return PythonInterop.getClass(this.interop, `${this.accessor}.properties`, ThemeProperties)
    }

    /**
     * 
     * @desc ThemeSequenceEditor, (readonly, never None)
     */
    public get sequence_editor(): ThemeSequenceEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sequence_editor`, ThemeSequenceEditor)
    }

    /**
     * 
     * @desc ThemeStatusBar, (readonly, never None)
     */
    public get statusbar(): ThemeStatusBar {
        return PythonInterop.getClass(this.interop, `${this.accessor}.statusbar`, ThemeStatusBar)
    }

    /**
     * 
     * @desc ThemeTextEditor, (readonly, never None)
     */
    public get text_editor(): ThemeTextEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.text_editor`, ThemeTextEditor)
    }

    /**
     * 
     * @desc ThemeTopBar, (readonly, never None)
     */
    public get topbar(): ThemeTopBar {
        return PythonInterop.getClass(this.interop, `${this.accessor}.topbar`, ThemeTopBar)
    }

    /**
     * 
     * @desc ThemeUserInterface, (readonly, never None)
     */
    public get user_interface(): ThemeUserInterface {
        return PythonInterop.getClass(this.interop, `${this.accessor}.user_interface`, ThemeUserInterface)
    }

    /**
     * 
     * @desc ThemeView3D, (readonly, never None)
     */
    public get view_3d(): ThemeView3D {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_3d`, ThemeView3D)
    }

    /**
     * Name of the theme
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc enum in ['USER_INTERFACE', 'STYLE', 'BONE_COLOR_SETS', 'VIEW_3D', 'GRAPH_EDITOR', 'DOPESHEET_EDITOR', 'NLA_EDITOR', 'IMAGE_EDITOR', 'SEQUENCE_EDITOR', 'TEXT_EDITOR', 'NODE_EDITOR', 'PROPERTIES', 'OUTLINER', 'PREFERENCES', 'INFO', 'FILE_BROWSER', 'CONSOLE', 'CLIP_EDITOR', 'TOPBAR', 'STATUSBAR'], default 'USER_INTERFACE'
     */
    public get theme_area(): 'USER_INTERFACE' | 'STYLE' | 'BONE_COLOR_SETS' | 'VIEW_3D' | 'GRAPH_EDITOR' | 'DOPESHEET_EDITOR' | 'NLA_EDITOR' | 'IMAGE_EDITOR' | 'SEQUENCE_EDITOR' | 'TEXT_EDITOR' | 'NODE_EDITOR' | 'PROPERTIES' | 'OUTLINER' | 'PREFERENCES' | 'INFO' | 'FILE_BROWSER' | 'CONSOLE' | 'CLIP_EDITOR' | 'TOPBAR' | 'STATUSBAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.theme_area`)
    }

    /**
     * Name of the theme
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * 
     * @desc enum in ['USER_INTERFACE', 'STYLE', 'BONE_COLOR_SETS', 'VIEW_3D', 'GRAPH_EDITOR', 'DOPESHEET_EDITOR', 'NLA_EDITOR', 'IMAGE_EDITOR', 'SEQUENCE_EDITOR', 'TEXT_EDITOR', 'NODE_EDITOR', 'PROPERTIES', 'OUTLINER', 'PREFERENCES', 'INFO', 'FILE_BROWSER', 'CONSOLE', 'CLIP_EDITOR', 'TOPBAR', 'STATUSBAR'], default 'USER_INTERFACE'
     */
    public set theme_area(value: 'USER_INTERFACE' | 'STYLE' | 'BONE_COLOR_SETS' | 'VIEW_3D' | 'GRAPH_EDITOR' | 'DOPESHEET_EDITOR' | 'NLA_EDITOR' | 'IMAGE_EDITOR' | 'SEQUENCE_EDITOR' | 'TEXT_EDITOR' | 'NODE_EDITOR' | 'PROPERTIES' | 'OUTLINER' | 'PREFERENCES' | 'INFO' | 'FILE_BROWSER' | 'CONSOLE' | 'CLIP_EDITOR' | 'TOPBAR' | 'STATUSBAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.theme_area`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
