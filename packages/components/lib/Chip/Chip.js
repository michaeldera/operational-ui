"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var utils_1 = require("@operational/utils");
var theme_1 = require("@operational/theme");
var _1 = require("../");
var color_1 = require("../utils/color");
var Container = glamorous_1.default.div(function (_a) {
    var theme = _a.theme, color = _a.color, hasChip = _a.hasChip;
    var backgroundColor = theme_1.expandColor(theme, color) || theme.colors.info;
    var border = color_1.isWhite(backgroundColor) ? "1px solid " + theme.colors.lightGray : "0";
    return {
        backgroundColor: backgroundColor,
        border: border,
        label: "chip",
        position: "relative",
        height: theme.spacing * 1.5,
        display: "inline-flex",
        alignItems: "center",
        boxSizing: "border-box",
        width: "fit-content",
        borderRadius: 2,
        cursor: "pointer",
        overflow: "hidden",
        color: utils_1.readableTextColor(backgroundColor, ["black", "white"]),
        margin: "0px " + theme.spacing / 2 + "px 0px 0px",
    };
});
var Content = glamorous_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0px " + theme.spacing / 2 + "px",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
    });
});
var Action = glamorous_1.default.div(function (_a) {
    var theme = _a.theme, color = _a.color;
    var backgroundColor = theme_1.expandColor(theme, color) || theme.colors.info;
    var borderColor = color_1.isWhite(backgroundColor) ? theme.colors.lightGray : "rgba(255, 255, 255, 0.15)";
    return {
        borderLeft: "1px solid " + borderColor,
        color: utils_1.readableTextColor(backgroundColor, ["black", "white"]),
        width: theme.spacing * 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
    };
});
var Chip = function (props) { return (React.createElement(Container, { id: props.id, className: props.className, css: props.css, color: props.color, hasChip: !!props.onClick },
    React.createElement(Content, { onClick: props.onClick }, props.children),
    props.onIconClick && (React.createElement(Action, { color: props.color, onClick: props.onIconClick }, typeof props.icon === "string" ? React.createElement(_1.Icon, { name: props.icon, size: 12 }) : props.icon)))); };
exports.default = Chip;
//# sourceMappingURL=Chip.js.map