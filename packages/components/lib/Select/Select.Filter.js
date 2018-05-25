"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var theme_1 = require("@operational/theme");
var Container = glamorous_1.default.div(function (_a) {
    var theme = _a.theme, color = _a.color;
    var backgroundColor = theme_1.expandColor(theme, color) || theme.colors.white;
    return {
        label: "selectfilter",
        "& > input": {
            width: "100%",
            padding: theme.spacing / 2 + "px " + theme.spacing * 3 / 4 + "px",
            border: 0,
            outline: "none",
            font: "inherit",
        },
    };
});
var SelectFilter = function (props) { return (React.createElement(Container, { key: props.id, css: props.css, className: props.className },
    React.createElement("input", { onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) {
            props.onChange(e.target.value);
        }, placeholder: props.placeholder || "Filter ..." }))); };
exports.default = SelectFilter;
//# sourceMappingURL=Select.Filter.js.map