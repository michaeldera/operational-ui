"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var _1 = require("../");
var mixins_1 = require("../utils/mixins");
var constants_1 = require("../constants");
var InputField = glamorous_1.default.input(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, isStandalone = _a.isStandalone, isError = _a.isError;
    return (__assign({}, theme.typography.body, isStandalone ? {} : { display: "block" }, { label: "input", minWidth: constants_1.inputDefaultWidth, padding: theme.spacing / 2 + "px " + theme.spacing * 2 / 3 + "px", border: "1px solid", opacity: disabled ? 0.6 : 1.0, borderColor: isError ? theme.colors.error : theme.colors.inputBorder, font: "inherit", borderRadius: theme.borderRadius, WebkitAppearance: "none", "&:focus": mixins_1.inputFocus({ theme: theme, isError: isError }) }));
});
var Input = function (props) {
    var forAttributeId = props.label && props.labelId;
    var commonInputProps = {
        innerRef: props.inputRef,
        name: props.name,
        disabled: Boolean(props.disabled),
        value: props.value || "",
        isStandalone: !Boolean(props.label),
        type: props.type,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        placeholder: props.placeholder,
        isError: Boolean(props.error),
        onChange: function (e) {
            props.onChange && props.onChange(e.target.value);
        },
    };
    if (props.label) {
        return (React.createElement(mixins_1.Label, { id: props.id, htmlFor: forAttributeId, css: props.css, className: props.className },
            React.createElement(mixins_1.LabelText, null, props.label),
            React.createElement(mixins_1.FormFieldControls, null,
                props.hint ? (React.createElement(mixins_1.FormFieldControl, null,
                    React.createElement(_1.Icon, { name: "HelpCircle", size: 14 }),
                    React.createElement(_1.Tooltip, { right: true, css: { minWidth: 100, width: "fit-content" } }, props.hint))) : null,
                props.onToggle ? (React.createElement(mixins_1.FormFieldControl, { onClick: function () {
                        props.onToggle();
                    } },
                    React.createElement(_1.Icon, { name: props.disabled ? "Lock" : "Unlock", size: 12 }))) : null),
            React.createElement(InputField, __assign({}, commonInputProps, { id: forAttributeId, autoComplete: props.autoComplete, css: { display: "block", width: "100%" } })),
            props.error ? React.createElement(mixins_1.FormFieldError, null, props.error) : null));
    }
    return (React.createElement(InputField, __assign({}, commonInputProps, { id: props.id, css: props.css, className: props.className, autoComplete: props.autoComplete })));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map