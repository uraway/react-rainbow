/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Input from '../Input/pickerInput';
import DateTimeIcon from './icon';
import DateTimePickerModal from './pickerModal';
import formatDateTime from './helpers/formatDateTime';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';

function PickerComponent(props, ref) {
    const {
        placeholder,
        hideLabel,
        required,
        name,
        label,
        error,
        readOnly,
        disabled,
        tabIndex,
        onClick,
        onChange,
        onFocus,
        onBlur,
        id,
        className,
        style,
        value,
        minDate,
        maxDate,
        formatStyle,
        okLabel,
        cancelLabel,
        isCentered,
        bottomHelpText,
    } = props;

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    const [isOpen, setIsOpen] = useState(false);
    const [formattedDatetime, setFormattedDatetime] = useState(formatDateTime(value, formatStyle));
    useEffect(() => {
        setFormattedDatetime(formatDateTime(value, formatStyle));
    }, [value, formatStyle]);

    const openModal = event => {
        if (!readOnly) {
            setIsOpen(true);
            onClick(event);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleFocus = () => {
        onFocus(value);
    };

    const handleBlur = () => {
        onBlur(value);
    };

    const handleKeyDown = ({ keyCode }) => {
        const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
        if (shouldOpenModal) {
            setIsOpen(true);
        }
    };

    const handleChange = (...args) => {
        closeModal();
        onChange(...args);
    };

    const icon = readOnly ? null : <DateTimeIcon />;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Input
                ref={inputRef}
                label={label}
                placeholder={placeholder}
                icon={icon}
                iconPosition="right"
                required={required}
                value={formattedDatetime}
                onKeyDown={handleKeyDown}
                onClick={openModal}
                onFocus={handleFocus}
                onBlur={handleBlur}
                hideLabel={hideLabel}
                name={name}
                bottomHelpText={bottomHelpText}
                isCentered={isCentered}
                error={error}
                readOnly={readOnly}
                disabled={disabled}
                tabIndex={tabIndex}
                autoComplete="off"
            />
            <DateTimePickerModal
                isOpen={isOpen}
                title={formattedDatetime}
                onRequestClose={closeModal}
                formatStyle={formatStyle}
                value={value}
                onChange={handleChange}
                minDate={minDate}
                maxDate={maxDate}
                okLabel={okLabel}
                cancelLabel={cancelLabel}
            />
        </StyledContainer>
    );
}

const DateTimePicker = React.forwardRef(PickerComponent);

DateTimePicker.propTypes = {
    /** Sets the date for the DateTimePicker programmatically. */
    value: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /**  The date time format style to display in the input field.
     * Valid values are small, medium, and large. */
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The name of the DateTimePicker. */
    name: PropTypes.string,
    /** Text label for the DateTimePicker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the DateTimePicker label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the DateTimePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the DateTimePicker field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Shows the help message below the DateTimePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DateTimePicker text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the DateTimePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DateTimePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the DateTimePicker element should be disabled.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Text label for the OK button in the modal dialog. */
    okLabel: PropTypes.string,
    /** Text label for the CANCEL button in the modal dialog. */
    cancelLabel: PropTypes.string,
};

DateTimePicker.defaultProps = {
    placeholder: null,
    hideLabel: false,
    required: false,
    name: undefined,
    error: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
    okLabel: 'Ok',
    cancelLabel: 'Cancel',
    bottomHelpText: '',
    isCentered: false,
};

// export default DateTimePicker;
export default withReduxForm(DateTimePicker);