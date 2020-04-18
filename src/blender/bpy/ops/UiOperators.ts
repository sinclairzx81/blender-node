import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UiOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.ui.html
 */
export class UiOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Set this property’s current value as the new default
     * @desc void
     */
    public assign_default_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.assign_default_button`, {})
    }

    /**
     * Presses active button
     * @desc void
     */
    public button_execute(options: { skip_depressed?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.button_execute`, options)
    }

    /**
     * Unsets the text of the active button
     * @desc void
     */
    public button_string_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.button_string_clear`, {})
    }

    /**
     * Create a new driver with this property as input, and copy it to the clipboard. Use Paste Driver to add it to the target property, or Paste Driver Variables to extend an existing driver
     * @desc void
     */
    public copy_as_driver_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_as_driver_button`, {})
    }

    /**
     * Copy the RNA data path for this property to the clipboard
     * @desc void
     */
    public copy_data_path_button(options: { full_path?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_data_path_button`, options)
    }

    /**
     * Copy the Python command matching this button
     * @desc void
     */
    public copy_python_command_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_python_command_button`, {})
    }

    /**
     * Copy property from this object to selected objects or bones
     * @desc void
     */
    public copy_to_selected_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_to_selected_button`, options)
    }

    /**
     * Drop colors to buttons
     * @desc void
     */
    public drop_color(options: { color?: [number, number, number], gamma?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drop_color`, options)
    }

    /**
     * Edit UI source code of the active button
     * @desc void
     */
    public editsource(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.editsource`, {})
    }

    /**
     * Edit i18n in current language for the active button
     * @desc void
     */
    public edittranslation_init(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edittranslation_init`, {})
    }

    /**
     * Sample a color from the Blender window to store in a property
     * @desc void
     */
    public eyedropper_color(options: { use_accumulate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_color`, options)
    }

    /**
     * Sample a color band
     * @desc void
     */
    public eyedropper_colorramp(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_colorramp`, {})
    }

    /**
     * Point-sample a color band
     * @desc void
     */
    public eyedropper_colorramp_point(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_colorramp_point`, {})
    }

    /**
     * Sample depth from the 3D view
     * @desc void
     */
    public eyedropper_depth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_depth`, {})
    }

    /**
     * Pick a property to use as a driver target
     * @desc void
     */
    public eyedropper_driver(options: { mapping_type?: 'SINGLE_MANY' | 'DIRECT' | 'MATCH' | 'NONE_ALL' | 'NONE_SINGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_driver`, options)
    }

    /**
     * Sample a color from the Blender Window and create Grease Pencil material
     * @desc void
     */
    public eyedropper_gpencil_color(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_gpencil_color`, {})
    }

    /**
     * Sample a data-block from the 3D View to store in a property
     * @desc void
     */
    public eyedropper_id(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.eyedropper_id`, {})
    }

    /**
     * Switch to the target object or bone
     * @desc void
     */
    public jump_to_target_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.jump_to_target_button`, {})
    }

    /**
     * Remove an override operation
     * @desc void
     */
    public override_remove_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.override_remove_button`, options)
    }

    /**
     * Create an override operation, or set the type of an existing one
     * @desc void
     */
    public override_type_set_button(options: { all?: boolean, type?: 'NOOP' | 'REPLACE' | 'DIFFERENCE' | 'FACTOR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.override_type_set_button`, options)
    }

    /**
     * Force a full reload of UI translation
     * @desc void
     */
    public reloadtranslation(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reloadtranslation`, {})
    }

    /**
     * Reset this property’s value to its default value
     * @desc void
     */
    public reset_default_button(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset_default_button`, options)
    }

    /**
     * Clear the property and use default or generated value in operators
     * @desc void
     */
    public unset_property_button(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unset_property_button`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
