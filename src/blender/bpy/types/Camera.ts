import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CameraBackgroundImages } from './CameraBackgroundImages'
import { CameraBackgroundImage } from './CameraBackgroundImage'
import { CyclesCameraSettings } from './CyclesCameraSettings'
import { CameraDOFSettings } from './CameraDOFSettings'
import { CameraStereoData } from './CameraStereoData'

/**
 * Camera
 * 
 * https://docs.blender.org/api/current/bpy.types.Camera.html
 */
export class Camera {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * List of background images
     * @desc CameraBackgroundImages bpy_prop_collection of CameraBackgroundImage, (readonly)
     */
    public get background_images(): BlenderCollection<CameraBackgroundImage> & Indexable<CameraBackgroundImage> & CameraBackgroundImages {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.background_images`, CameraBackgroundImages, CameraBackgroundImage)
    }

    /**
     * Cycles camera settings
     * @desc CyclesCameraSettings, (readonly)
     */
    public get cycles(): CyclesCameraSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesCameraSettings)
    }

    /**
     * 
     * @desc CameraDOFSettings, (readonly)
     */
    public get dof(): CameraDOFSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dof`, CameraDOFSettings)
    }

    /**
     * 
     * @desc CameraStereoData, (readonly, never None)
     */
    public get stereo(): CameraStereoData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stereo`, CameraStereoData)
    }

    /**
     * Camera lens field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Camera lens horizontal field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public get angle_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_x`)
    }

    /**
     * Camera lens vertical field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public get angle_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_y`)
    }

    /**
     * Camera far clipping distance
     * @desc float in [1e-06, inf], default 1000.0
     */
    public get clip_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_end`)
    }

    /**
     * Camera near clipping distance
     * @desc float in [1e-06, inf], default 0.1
     */
    public get clip_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_start`)
    }

    /**
     * Apparent size of the Camera object in the 3D View
     * @desc float in [0.01, 1000], default 1.0
     */
    public get display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.display_size`)
    }

    /**
     * Perspective Camera lens value in millimeters
     * @desc float in [1, inf], default 50.0
     */
    public get lens(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lens`)
    }

    /**
     * Unit to edit lens in for the user interface
     * @desc enum in ['MILLIMETERS', 'FOV'], default 'MILLIMETERS'
     */
    public get lens_unit(): 'MILLIMETERS' | 'FOV' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.lens_unit`)
    }

    /**
     * Orthographic Camera scale (similar to zoom)
     * @desc float in [0, inf], default 6.0
     */
    public get ortho_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ortho_scale`)
    }

    /**
     * Opacity (alpha) of the darkened overlay in Camera view
     * @desc float in [0, 1], default 0.5
     */
    public get passepartout_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.passepartout_alpha`)
    }

    /**
     * Method to fit image and field of view angle inside the sensor
     * @desc enum in ['AUTO', 'HORIZONTAL', 'VERTICAL'], default 'AUTO'
     */
    public get sensor_fit(): 'AUTO' | 'HORIZONTAL' | 'VERTICAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sensor_fit`)
    }

    /**
     * Vertical size of the image sensor area in millimeters
     * @desc float in [1, inf], default 24.0
     */
    public get sensor_height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sensor_height`)
    }

    /**
     * Horizontal size of the image sensor area in millimeters
     * @desc float in [1, inf], default 36.0
     */
    public get sensor_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sensor_width`)
    }

    /**
     * Camera horizontal shift
     * @desc float in [-10, 10], default 0.0
     */
    public get shift_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shift_x`)
    }

    /**
     * Camera vertical shift
     * @desc float in [-10, 10], default 0.0
     */
    public get shift_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shift_y`)
    }

    /**
     * Display reference images behind objects in the 3D View
     * @desc boolean, default False
     */
    public get show_background_images(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_background_images`)
    }

    /**
     * Display center composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_center(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_center`)
    }

    /**
     * Display diagonal center composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_center_diagonal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_center_diagonal`)
    }

    /**
     * Display golden ratio composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_golden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_golden`)
    }

    /**
     * Display golden triangle A composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_golden_tria_a(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_golden_tria_a`)
    }

    /**
     * Display golden triangle B composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_golden_tria_b(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_golden_tria_b`)
    }

    /**
     * Display harmony A composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_harmony_tri_a(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_harmony_tri_a`)
    }

    /**
     * Display harmony B composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_harmony_tri_b(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_harmony_tri_b`)
    }

    /**
     * Display rule of thirds composition guide inside the camera view
     * @desc boolean, default False
     */
    public get show_composition_thirds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_composition_thirds`)
    }

    /**
     * Display the clipping range and focus point on the camera
     * @desc boolean, default False
     */
    public get show_limits(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_limits`)
    }

    /**
     * Display a line from the Camera to indicate the mist area
     * @desc boolean, default False
     */
    public get show_mist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mist`)
    }

    /**
     * Show the active Camera’s name in Camera view
     * @desc boolean, default False
     */
    public get show_name(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_name`)
    }

    /**
     * Show a darkened overlay outside the image area in Camera view
     * @desc boolean, default True
     */
    public get show_passepartout(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_passepartout`)
    }

    /**
     * Show TV title safe and action safe areas in Camera view
     * @desc boolean, default False
     */
    public get show_safe_areas(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_safe_areas`)
    }

    /**
     * Show safe areas to fit content in a different aspect ratio
     * @desc boolean, default False
     */
    public get show_safe_center(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_safe_center`)
    }

    /**
     * Show sensor size (film gate) in Camera view
     * @desc boolean, default False
     */
    public get show_sensor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_sensor`)
    }

    /**
     * Camera types
     * @desc enum in ['PERSP', 'ORTHO', 'PANO'], default 'PERSP'
     */
    public get type(): 'PERSP' | 'ORTHO' | 'PANO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Camera lens field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Camera lens horizontal field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public set angle_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_x`, value)
    }

    /**
     * Camera lens vertical field of view
     * @desc float in [0.00640536, 3.01675], default 0.0
     */
    public set angle_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_y`, value)
    }

    /**
     * Camera far clipping distance
     * @desc float in [1e-06, inf], default 1000.0
     */
    public set clip_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_end`, value)
    }

    /**
     * Camera near clipping distance
     * @desc float in [1e-06, inf], default 0.1
     */
    public set clip_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_start`, value)
    }

    /**
     * Apparent size of the Camera object in the 3D View
     * @desc float in [0.01, 1000], default 1.0
     */
    public set display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.display_size`, value)
    }

    /**
     * Perspective Camera lens value in millimeters
     * @desc float in [1, inf], default 50.0
     */
    public set lens(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lens`, value)
    }

    /**
     * Unit to edit lens in for the user interface
     * @desc enum in ['MILLIMETERS', 'FOV'], default 'MILLIMETERS'
     */
    public set lens_unit(value: 'MILLIMETERS' | 'FOV') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.lens_unit`, value)
    }

    /**
     * Orthographic Camera scale (similar to zoom)
     * @desc float in [0, inf], default 6.0
     */
    public set ortho_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ortho_scale`, value)
    }

    /**
     * Opacity (alpha) of the darkened overlay in Camera view
     * @desc float in [0, 1], default 0.5
     */
    public set passepartout_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.passepartout_alpha`, value)
    }

    /**
     * Method to fit image and field of view angle inside the sensor
     * @desc enum in ['AUTO', 'HORIZONTAL', 'VERTICAL'], default 'AUTO'
     */
    public set sensor_fit(value: 'AUTO' | 'HORIZONTAL' | 'VERTICAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sensor_fit`, value)
    }

    /**
     * Vertical size of the image sensor area in millimeters
     * @desc float in [1, inf], default 24.0
     */
    public set sensor_height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sensor_height`, value)
    }

    /**
     * Horizontal size of the image sensor area in millimeters
     * @desc float in [1, inf], default 36.0
     */
    public set sensor_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sensor_width`, value)
    }

    /**
     * Camera horizontal shift
     * @desc float in [-10, 10], default 0.0
     */
    public set shift_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shift_x`, value)
    }

    /**
     * Camera vertical shift
     * @desc float in [-10, 10], default 0.0
     */
    public set shift_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shift_y`, value)
    }

    /**
     * Display reference images behind objects in the 3D View
     * @desc boolean, default False
     */
    public set show_background_images(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_background_images`, value)
    }

    /**
     * Display center composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_center(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_center`, value)
    }

    /**
     * Display diagonal center composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_center_diagonal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_center_diagonal`, value)
    }

    /**
     * Display golden ratio composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_golden(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_golden`, value)
    }

    /**
     * Display golden triangle A composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_golden_tria_a(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_golden_tria_a`, value)
    }

    /**
     * Display golden triangle B composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_golden_tria_b(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_golden_tria_b`, value)
    }

    /**
     * Display harmony A composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_harmony_tri_a(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_harmony_tri_a`, value)
    }

    /**
     * Display harmony B composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_harmony_tri_b(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_harmony_tri_b`, value)
    }

    /**
     * Display rule of thirds composition guide inside the camera view
     * @desc boolean, default False
     */
    public set show_composition_thirds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_composition_thirds`, value)
    }

    /**
     * Display the clipping range and focus point on the camera
     * @desc boolean, default False
     */
    public set show_limits(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_limits`, value)
    }

    /**
     * Display a line from the Camera to indicate the mist area
     * @desc boolean, default False
     */
    public set show_mist(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mist`, value)
    }

    /**
     * Show the active Camera’s name in Camera view
     * @desc boolean, default False
     */
    public set show_name(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_name`, value)
    }

    /**
     * Show a darkened overlay outside the image area in Camera view
     * @desc boolean, default True
     */
    public set show_passepartout(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_passepartout`, value)
    }

    /**
     * Show TV title safe and action safe areas in Camera view
     * @desc boolean, default False
     */
    public set show_safe_areas(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_safe_areas`, value)
    }

    /**
     * Show safe areas to fit content in a different aspect ratio
     * @desc boolean, default False
     */
    public set show_safe_center(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_safe_center`, value)
    }

    /**
     * Show sensor size (film gate) in Camera view
     * @desc boolean, default False
     */
    public set show_sensor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_sensor`, value)
    }

    /**
     * Camera types
     * @desc enum in ['PERSP', 'ORTHO', 'PANO'], default 'PERSP'
     */
    public set type(value: 'PERSP' | 'ORTHO' | 'PANO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Return 4 points for the cameras frame (before object transformation)
     * @desc void
     */
    public view_frame(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_frame`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
