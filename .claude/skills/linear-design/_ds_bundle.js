/* @ds-bundle: {"format":4,"namespace":"LinearDesignSystem_c30597","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"List","sourcePath":"components/data/List.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonRows","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0ee2eb119fb6","components/core/Button.jsx":"ba30af5df8d2","components/core/Card.jsx":"a048f8388eee","components/core/Icon.jsx":"d04abc3ee486","components/core/Kbd.jsx":"5326fb6871d3","components/data/DataTable.jsx":"c4830549254c","components/data/List.jsx":"1bd670fcb544","components/feedback/Banner.jsx":"1ea8e2ee599b","components/feedback/EmptyState.jsx":"3addef31d8e9","components/feedback/Modal.jsx":"a990e87230eb","components/feedback/Skeleton.jsx":"e276abc90550","components/feedback/Toast.jsx":"65fbf0d9507d","components/forms/Input.jsx":"86605bbaa9d4","components/forms/Select.jsx":"cea1f2116934","components/navigation/DropdownMenu.jsx":"bb1aff26d122","components/navigation/Pagination.jsx":"390c98d56e04","components/navigation/Tabs.jsx":"16ed206e3bf0","components/navigation/TopBar.jsx":"2ac0f00ef792","ui_kits/marketing/Home.jsx":"cfcdc45ac07a","ui_kits/marketing/Pages.jsx":"c0bea450098b","ui_kits/marketing/ProductShot.jsx":"1c0787a3c71e","ui_kits/workspace-admin/AdminScreen.jsx":"f037bf59b064","ui_kits/workspace-admin/data.js":"8013b1f21a4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LinearDesignSystem_c30597 = window.LinearDesignSystem_c30597 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  shape = "rect",
  outline,
  strong,
  tone = "neutral",
  className = "",
  children,
  ...rest
}) {
  const cls = ["ds-badge", tone !== "neutral" ? "ds-badge--" + tone : null, shape === "pill" ? "ds-badge--pill" : null, outline ? "ds-badge--outline" : null, strong ? "ds-badge--strong" : null, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: "ds-btn--primary",
  ghost: "ds-btn--ghost",
  pill: "ds-btn--pill",
  white: "ds-btn--white",
  nav: "ds-btn--nav"
};
function Button({
  variant = "ghost",
  as,
  href,
  loading,
  disabled,
  className = "",
  children,
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const cls = ["ds-btn", VARIANTS[variant] || VARIANTS.ghost, className].filter(Boolean).join(" ");
  const extra = Tag === "button" ? {
    type: "button",
    disabled: disabled || loading
  } : {
    href,
    "aria-disabled": disabled || loading ? "true" : undefined
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    "data-loading": loading ? "true" : undefined,
    "aria-busy": loading ? "true" : undefined
  }, extra, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "ds-spinner"
  }) : null, loading ? "Working" : children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "showcase",
  interactive,
  flush,
  as,
  href,
  className = "",
  children,
  ...rest
}) {
  const Tag = as || (href ? "a" : "div");
  const cls = ["ds-card", variant === "subtle" ? "ds-card--subtle" : null, variant === "raised" ? "ds-card--raised" : null, flush ? "ds-card--flush" : null, interactive || href ? "ds-card--interactive" : null, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    "data-surface": variant === "raised" ? "obsidian" : "carbon",
    tabIndex: interactive && !href ? 0 : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Single-color line-art glyph. The SVG is applied as a CSS mask so the glyph always
   paints in currentColor, keeping icons inside the gray ladder. */
function Icon({
  name,
  size = 16,
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: size,
      height: size,
      backgroundColor: "currentColor",
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Kbd({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 4px",
      borderRadius: "var(--radius-xs)",
      border: "1px solid var(--border-default)",
      background: "var(--surface-2)",
      color: "var(--fg-3)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      lineHeight: 1,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = {
  neutral: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-alert"
};
const PREFIX = {
  neutral: "Note.",
  success: "Success.",
  warning: "Warning.",
  danger: "Error."
};
function Banner({
  tone = "neutral",
  title,
  action,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === "danger" ? "alert" : "status",
    className: ["ds-banner", tone !== "neutral" ? "ds-banner--" + tone : null, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ds-banner__icon",
    name: ICON[tone] || ICON.neutral,
    size: 16,
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-banner__title"
  }, title || PREFIX[tone]), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mist)"
    }
  }, children) : null), action);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  tone = "neutral",
  icon,
  title,
  description,
  action,
  align = "start",
  className = "",
  ...rest
}) {
  const fallback = tone === "danger" ? "circle-alert" : tone === "success" ? "circle-check" : "inbox";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ds-empty", align === "center" ? "ds-empty--center" : null, tone !== "neutral" ? "ds-empty--" + tone : null, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ds-empty__icon",
    name: icon || fallback,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-empty__title ds-body-emphasis"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "ds-empty__body"
  }, description) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Modal({
  open = true,
  title,
  description,
  footer,
  onClose,
  labelledBy,
  children,
  className = "",
  ...rest
}) {
  const headingId = React.useId();
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-modal__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledBy || headingId,
    "data-surface": "carbon",
    className: ["ds-modal", className].filter(Boolean).join(" "),
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    id: headingId,
    className: "ds-heading",
    style: {
      color: "var(--paper)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-modal__close",
    "aria-label": "Close dialog",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "ds-modal__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "ds-modal__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Skeleton({
  width = "100%",
  height = 12,
  text,
  radius,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: ["ds-skeleton", text ? "ds-skeleton--text" : null, className].filter(Boolean).join(" "),
    style: {
      width,
      height: text ? undefined : height,
      borderRadius: radius,
      ...style
    }
  }, rest));
}
function SkeletonRows({
  rows = 4,
  gap = 12,
  widths = ["70%", "90%", "55%", "80%"],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    "aria-label": "Loading",
    style: {
      display: "flex",
      flexDirection: "column",
      gap,
      ...style
    }
  }, rest), Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    text: true,
    width: widths[i % widths.length]
  })));
}
Object.assign(__ds_scope, { Skeleton, SkeletonRows });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  state = "ready",
  caption,
  emptyState,
  errorState,
  successMessage,
  className = "",
  ...rest
}) {
  if (state === "loading") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.SkeletonRows, {
      rows: 5,
      widths: ["92%", "78%", "88%", "64%", "80%"]
    }));
  }
  if (state === "error") {
    return errorState || /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
      tone: "danger",
      title: "Could not load this table",
      description: "The request failed. Nothing was changed."
    });
  }
  if (state === "empty" || !rows.length) {
    return emptyState || /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
      title: "Nothing here yet",
      description: "Rows appear once there is data to show."
    });
  }
  return /*#__PURE__*/React.createElement("div", null, successMessage ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-16) var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Banner, {
    tone: "success"
  }, successMessage)) : null, /*#__PURE__*/React.createElement("table", _extends({
    className: ["ds-table", className].filter(Boolean).join(" ")
  }, rest), caption ? /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: "top",
      textAlign: "left",
      padding: "var(--space-12) var(--space-16)",
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    className: c.align === "right" ? "ds-table__num" : undefined,
    style: {
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.align === "right" ? "ds-table__num" : undefined
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/List.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function List({
  items = [],
  state = "ready",
  renderItem,
  emptyState,
  errorState,
  label = "Items",
  className = "",
  ...rest
}) {
  if (state === "loading") return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SkeletonRows, {
    rows: 4
  }));
  if (state === "error") return errorState || /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
    tone: "danger",
    title: "Could not load this list",
    description: "The request failed. Try again."
  });
  if (state === "empty" || !items.length) return emptyState || /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
    title: "Nothing to show",
    description: "Items appear here once there are any."
  });
  return /*#__PURE__*/React.createElement("ul", _extends({
    "aria-label": label,
    className: ["ds-list", className].filter(Boolean).join(" "),
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id || i,
    className: "ds-list__row"
  }, renderItem ? renderItem(it) : it.label)));
}
Object.assign(__ds_scope, { List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/List.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = {
  neutral: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-alert"
};
function Toast({
  tone = "neutral",
  message,
  action,
  onDismiss,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    className: ["ds-toast", tone !== "neutral" ? "ds-toast--" + tone : null, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ds-toast__icon",
    name: ICON[tone] || ICON.neutral,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--paper)"
    }
  }, message), action, onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-modal__close",
    style: {
      width: 24,
      height: 24
    },
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  disabled,
  multiline,
  rows = 4,
  className = "",
  style,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const hintId = fieldId + "-hint";
  const message = error || hint;
  const cls = ["ds-input", error ? "ds-input--error" : null, disabled ? "ds-input--disabled" : null].filter(Boolean).join(" ");
  const control = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    disabled: disabled,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": message ? hintId : undefined
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": message ? hintId : undefined
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: ["ds-field", className].filter(Boolean).join(" "),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: multiline ? {
      alignItems: "stretch"
    } : null
  }, control), message ? /*#__PURE__*/React.createElement("span", {
    id: hintId,
    className: "ds-field__hint" + (error ? " ds-field__hint--error" : "")
  }, error ? "Error. " + error : message) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  id,
  disabled,
  options = [],
  value,
  onChange,
  className = "",
  style,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const hintId = fieldId + "-hint";
  const message = error || hint;
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: ["ds-field", className].filter(Boolean).join(" "),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: ["ds-select", error ? "ds-input--error" : null, disabled ? "ds-input--disabled" : null].filter(Boolean).join(" "),
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    disabled: disabled,
    onChange: onChange,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": message ? hintId : undefined,
    style: {
      appearance: "none",
      flex: 1,
      minWidth: 0,
      padding: "var(--input-padding-y) var(--input-padding-x)",
      border: 0,
      outline: 0,
      background: "transparent",
      color: "inherit",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      letterSpacing: "var(--track-body)"
    }
  }, rest), items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      color: "var(--fog)",
      marginRight: "var(--input-padding-x)"
    }
  })), message ? /*#__PURE__*/React.createElement("span", {
    id: hintId,
    className: "ds-field__hint" + (error ? " ds-field__hint--error" : "")
  }, error ? "Error. " + error : message) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DropdownMenu({
  label = "Actions",
  items = [],
  align = "start",
  onSelect,
  disabled,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const away = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", away);
    window.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      window.removeEventListener("keydown", esc);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ds-menu", className].filter(Boolean).join(" "),
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    disabled: disabled,
    onClick: () => setOpen(!open)
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })), open && !disabled ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    className: "ds-menu__list",
    style: align === "end" ? {
      left: "auto",
      right: 0
    } : null
  }, items.map((it, i) => it === "separator" ? /*#__PURE__*/React.createElement("div", {
    key: "sep" + i,
    className: "ds-menu__sep",
    role: "separator"
  }) : /*#__PURE__*/React.createElement("button", {
    key: it.value || it.label,
    type: "button",
    role: "menuitem",
    className: ["ds-menu__item", it.tone === "danger" ? "ds-menu__item--danger" : null].filter(Boolean).join(" "),
    "aria-disabled": it.disabled ? "true" : undefined,
    onClick: () => {
      if (it.disabled) return;
      setOpen(false);
      onSelect && onSelect(it.value || it.label);
    }
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--fog)"
    }
  }, it.shortcut) : null))) : null);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function pages(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const out = [1];
  const from = Math.max(2, page - 1),
    to = Math.min(total - 1, page + 1);
  if (from > 2) out.push("gap");
  for (let i = from; i <= to; i++) out.push(i);
  if (to < total - 1) out.push("gap");
  out.push(total);
  return out;
}
function Pagination({
  page = 1,
  total = 1,
  onChange,
  summary,
  className = "",
  ...rest
}) {
  const go = p => onChange && onChange(Math.min(total, Math.max(1, p)));
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    className: ["ds-pagination", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-page",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pages(page, total).map((p, i) => p === "gap" ? /*#__PURE__*/React.createElement("span", {
    key: "gap" + i,
    className: "ds-page__gap"
  }, "...") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: "ds-page",
    "aria-current": p === page ? "page" : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-page",
    disabled: page >= total,
    onClick: () => go(page + 1),
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })), summary ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)",
      marginLeft: "var(--space-8)"
    }
  }, summary) : null);
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  label = "Views",
  className = "",
  ...rest
}) {
  const items = tabs.map(t => typeof t === "string" ? {
    value: t,
    label: t
  } : t);
  const active = value ?? (items[0] && items[0].value);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "aria-label": label,
    className: ["ds-tabs", className].filter(Boolean).join(" ")
  }, rest), items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    type: "button",
    role: "tab",
    className: "ds-tab",
    "aria-selected": t.value === active,
    disabled: t.disabled,
    onClick: () => onChange && onChange(t.value)
  }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontVariantNumeric: "tabular-nums"
    }
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  wordmark = "Linear",
  links = [],
  current,
  onNavigate,
  action,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["ds-topbar", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-topbar__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ds-topbar__wordmark",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    }
  }, wordmark), /*#__PURE__*/React.createElement("nav", {
    className: "ds-topbar__links",
    "aria-label": "Main"
  }, links.map(l => {
    const key = typeof l === "string" ? l : l.key;
    const label = typeof l === "string" ? l : l.label;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      className: "ds-topbar__link",
      href: "#" + key,
      "aria-current": current === key ? "page" : undefined,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(key);
      }
    }, label);
  })), action ?? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "white",
    href: "#signup"
  }, "Sign up"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    className: "ds-topbar__menu",
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 16
  }))));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Kbd
} = window.LinearDesignSystem_c30597;
function Wrap({
  children,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ds-container", className].filter(Boolean).join(" "),
    style: style
  }, children);
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-12)",
      marginBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    strong: true
  }, "2.41"), /*#__PURE__*/React.createElement("a", {
    href: "#changelog",
    onClick: e => {
      e.preventDefault();
      onNavigate("changelog");
    },
    style: {
      fontSize: 15
    }
  }, "Saved views are in the API")), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      maxWidth: "13ch"
    }
  }, "Issue tracking that stays out of the way."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--mist)",
      fontSize: "var(--size-body-emphasis)",
      lineHeight: "var(--lh-body-emphasis)",
      letterSpacing: "var(--track-body-emphasis)",
      fontWeight: "var(--weight-regular)",
      maxWidth: "48ch",
      marginTop: "var(--space-24)"
    }
  }, "Plan a cycle, triage in one keystroke, and keep the backlog readable. The interface is a list, a detail view, and a command menu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-16)",
      marginTop: "var(--space-32)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#signup"
  }, "Start free trial"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate("contact")
  }, "Talk to the team"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: 15,
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginLeft: "var(--space-8)"
    }
  }, "Search with ", /*#__PURE__*/React.createElement(Kbd, null, "Cmd"), " ", /*#__PURE__*/React.createElement(Kbd, null, "K")))), /*#__PURE__*/React.createElement("div", {
    className: "ds-bleed",
    style: {
      marginTop: "var(--space-64)"
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    caption: "Placeholder product capture. Replace with a real screenshot of the issue list."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "ds-section"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, "Placeholder customer wordmarks. Replace with permitted marks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-48)",
      marginTop: "var(--space-16)",
      color: "var(--fog)",
      fontSize: 20,
      letterSpacing: "-0.012em"
    }
  }, ["Northwind", "Aster", "Kestrel", "Bramble", "Vector Loom"].map(n => /*#__PURE__*/React.createElement("span", {
    key: n
  }, n))))), /*#__PURE__*/React.createElement("section", {
    className: "ds-section"
  }, /*#__PURE__*/React.createElement(Wrap, {
    className: "ds-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-heading"
  }, "Every action has a keystroke."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "48ch",
      marginTop: "var(--space-16)"
    }
  }, "Status, assignee, labels, cycle. The command menu is the same surface for all of them, and the shortcut sits next to the action instead of inside a help page."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)",
      marginTop: "var(--space-24)",
      maxWidth: 360
    }
  }, [["Open the command menu", "Cmd K"], ["New issue", "C"], ["Change status", "S"], ["Assign", "A"]].map(([a, k]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-12)",
      paddingBottom: "var(--space-12)",
      borderBottom: "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--mist)",
      fontSize: 15
    }
  }, a), k.split(" ").map(part => /*#__PURE__*/React.createElement(Kbd, {
    key: part
  }, part)))))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fog)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "command menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["Change status", "S"], ["Assign to", "A"], ["Add label", "L"], ["Move to cycle", "Shift C"]].map(([l, k], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "var(--space-8)",
      borderRadius: "var(--radius-control)",
      background: i === 0 ? "var(--graphite)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: "var(--fog)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: i === 0 ? "var(--paper)" : "var(--mist)",
      fontSize: 15
    }
  }, l), /*#__PURE__*/React.createElement(Kbd, null, k))))))), /*#__PURE__*/React.createElement("section", {
    className: "ds-section",
    style: {
      borderTop: "var(--hairline-separator)",
      borderBottom: "var(--hairline-separator)",
      background: "var(--carbon)",
      padding: "var(--space-64) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-heading",
    style: {
      maxWidth: "24ch"
    }
  }, "Cycles close themselves out."), /*#__PURE__*/React.createElement("div", {
    className: "ds-split ds-split--panel-text",
    style: {
      marginTop: "var(--space-32)",
      alignItems: "start",
      gap: "var(--space-48)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--mist)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "60ch"
    }
  }, "Unfinished issues roll into the next cycle. Merged pull requests close their issue. Nothing waits for someone to run a Monday ritual. The numbers below are example data, not a customer result."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)"
    }
  }, [["Cycle 24", "18 of 32 issues complete"], ["Carried over", "2 issues"], ["Automations", "3 active"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-16)",
      paddingBottom: "var(--space-12)",
      borderBottom: "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: 15
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--paper)",
      fontSize: 15
    }
  }, v))))))), /*#__PURE__*/React.createElement("section", {
    className: "ds-section"
  }, /*#__PURE__*/React.createElement(Wrap, {
    className: "ds-split ds-split--text-panel"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-heading"
  }, "Move the backlog in an afternoon."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "44ch",
      marginTop: "var(--space-16)"
    }
  }, "Importers read Jira, GitHub Issues and CSV. Ids, comments and attachments come across in one pass."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate("contact")
  }, "Ask about an import"))), /*#__PURE__*/React.createElement(Card, {
    variant: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, ["Jira project export", "GitHub Issues", "CSV with a column map"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center",
      color: "var(--mist)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      color: "var(--fog)"
    }
  }), s)))))), /*#__PURE__*/React.createElement("section", {
    className: "ds-section",
    style: {
      marginBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    className: "ds-card",
    style: {
      padding: "var(--space-48)",
      display: "flex",
      gap: "var(--space-32)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 360px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-subheading"
  }, "Start with one team."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      marginTop: "var(--space-8)",
      maxWidth: "44ch"
    }
  }, "Free while your workspace has ten members or fewer.")), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    href: "#signup"
  }, "Start free trial")))));
}
Object.assign(window, {
  Home,
  Wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pages.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Input,
  Icon,
  Kbd,
  Banner,
  List
} = window.LinearDesignSystem_c30597;
const ENTRIES = [["2.41", "Saved views in the API", ["Views can be created and shared through the API.", "Bulk edit keeps the selection after a status change."]], ["2.40", "Faster issue lists", ["Lists above 500 rows render incrementally.", "The command menu returns focus to the row it came from."]], ["2.39", "Cycle automations", ["Unfinished issues roll into the next cycle."]]];
function Changelog() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: "var(--space-64)",
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-heading"
  }, "Changelog"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      marginTop: "var(--space-16)",
      maxWidth: "60ch"
    }
  }, "Every release, in order. Example entries below."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-48)",
      maxWidth: 820
    }
  }, ENTRIES.map(([v, title, items], i) => /*#__PURE__*/React.createElement("article", {
    key: v,
    style: {
      display: "grid",
      gridTemplateColumns: "96px minmax(0,1fr)",
      gap: "var(--space-24)",
      paddingBottom: "var(--space-32)",
      marginBottom: "var(--space-32)",
      borderBottom: i < ENTRIES.length - 1 ? "var(--hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, v)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ds-heading"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      marginTop: "var(--space-12)"
    }
  }, items.map(x => /*#__PURE__*/React.createElement("p", {
    key: x,
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "70ch"
    }
  }, x)))))))));
}
function Contact() {
  const [state, setState] = React.useState("idle");
  const [email, setEmail] = React.useState("");
  const invalid = state === "error";
  const submit = e => {
    e.preventDefault();
    if (!email.includes("@") || /gmail|outlook|yahoo/.test(email)) {
      setState("error");
      return;
    }
    setState("loading");
    setTimeout(() => setState("done"), 900);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: "var(--space-64)",
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-split ds-split--text-panel",
    style: {
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-heading"
  }, "Talk to the team."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      marginTop: "var(--space-16)",
      maxWidth: "44ch"
    }
  }, "Tell us how your team works today. A person replies, usually within one business day.")), /*#__PURE__*/React.createElement(Card, null, state === "done" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Message sent"
  }, "We reply to ", email, " within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setState("idle");
      setEmail("");
    }
  }, "Send another message"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)"
    }
  }, invalid ? /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "Check one field"
  }, "Work email needs a company address.") : null, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (invalid) setState("idle");
    },
    placeholder: "you@company.com",
    error: invalid ? "Enter a company address." : undefined,
    hint: invalid ? undefined : "We do not use it for marketing."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Team size",
    placeholder: "12 engineers, 3 designers"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 4,
    placeholder: "What are you using today, and what breaks?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "button",
    loading: state === "loading",
    onClick: submit
  }, "Send message"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, "Placeholder form. Nothing is submitted.")))))));
}
function SiteFooter({
  onNavigate
}) {
  const cols = [["Product", ["Features", "Changelog", "Pricing", "Security"]], ["Company", ["About", "Careers", "Brand"]], ["Resources", ["Documentation", "API", "Status"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: "var(--space-48)",
      paddingBottom: "var(--space-32)",
      display: "flex",
      gap: "var(--space-64)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 240px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--paper)",
      fontSize: 16,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.012em"
    }
  }, "Linear"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, "Issue tracking for teams that ship.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("nav", {
    key: h,
    "aria-label": h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)",
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#" + i.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      if (i === "Changelog") onNavigate("changelog");
    },
    style: {
      fontSize: 15
    }
  }, i))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: "var(--space-16)",
      paddingBottom: "var(--space-24)",
      borderTop: "var(--hairline)",
      display: "flex",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)"
    }
  }, "Placeholder site. No real company data."), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "2.41.0")));
}
Object.assign(window, {
  Changelog,
  Contact,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProductShot.jsx
try { (() => {
/* A placeholder product capture, built from the tokens. linear.md is screenshot-first,
   and no real captures were supplied, so this stands in for one. It is not a component
   of the design system and is not exported by the bundle. */
const {
  Badge,
  Kbd
} = window.LinearDesignSystem_c30597;
const SHOT_ROWS = [["ENG-1042", "Command menu keeps focus after Escape", "In Progress", "Ada O."], ["ENG-1039", "Render issue lists above 500 rows incrementally", "In Progress", "Ravi M."], ["ENG-1036", "Shortcut for the cycle switcher", "In Review", "Mira K."], ["ENG-1031", "Webhook retries use a longer backoff", "Todo", "Ravi M."], ["ENG-1028", "Slash commands in the description editor", "Todo", "Ada O."], ["ENG-1019", "Contrast audit for disabled controls", "Backlog", "Mira K."]];
function ProductShot({
  caption
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card ds-card--flush",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "var(--space-12) var(--space-16)",
      borderBottom: "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--fog)"
    }
  }, "northwind / platform / issues"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Badge, null, "32 open"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fog)",
      fontSize: 13,
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Kbd, null, "Cmd"), /*#__PURE__*/React.createElement(Kbd, null, "K"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      borderRight: "var(--hairline)",
      padding: "var(--space-12)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, ["Inbox", "My issues", "Platform", "Cycles", "Projects"].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      padding: "var(--space-8)",
      borderRadius: "var(--radius-control)",
      background: i === 2 ? "var(--obsidian)" : "transparent",
      color: i === 2 ? "var(--paper)" : "var(--fog)",
      fontSize: 15
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, SHOT_ROWS.map(([id, title, status, who]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-12)",
      padding: "var(--space-12) var(--space-16)",
      borderBottom: "1px solid var(--graphite)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--fog)",
      width: 76
    }
  }, id), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      color: "var(--mist)",
      fontSize: 15,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), /*#__PURE__*/React.createElement(Badge, null, status), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ash)",
      fontSize: 15,
      width: 64,
      textAlign: "right"
    }
  }, who)))))), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body-small)",
      marginTop: "var(--space-12)"
    }
  }, caption) : null);
}
Object.assign(window, {
  ProductShot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProductShot.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace-admin/AdminScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Input,
  Select,
  Tabs,
  DataTable,
  List,
  Pagination,
  DropdownMenu,
  Modal,
  Toast,
  Banner,
  EmptyState,
  Skeleton
} = window.LinearDesignSystem_c30597;
const PAGE_SIZE = 6;
function Avatar({
  name
}) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      flex: "0 0 28px",
      borderRadius: "var(--radius-pill)",
      background: "var(--graphite)",
      color: "var(--mist)",
      fontSize: 12
    }
  }, initials);
}

/* Loading placeholder that mirrors the real row: avatar, two text lines, role chip, date, actions. */
function TableSkeleton({
  rows = 5
}) {
  const widths = [["58%", "72%"], ["44%", "64%"], ["66%", "52%"], ["50%", "70%"], ["62%", "58%"]];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Loading members"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-16)",
      padding: "var(--space-12) var(--space-16)",
      borderBottom: "var(--hairline-separator)"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: 72
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: 48
  }), /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: 80
  })), Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-12)",
      padding: "var(--space-12) var(--space-16)",
      borderBottom: "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: 28,
    height: 28,
    radius: "var(--radius-pill)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: widths[i % widths.length][0],
    style: {
      maxWidth: 220
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: widths[i % widths.length][1],
    style: {
      maxWidth: 260
    }
  })), /*#__PURE__*/React.createElement(Skeleton, {
    width: 64,
    height: 20,
    radius: "var(--radius-control)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    text: true,
    width: 120,
    style: {
      flex: "0 0 120px"
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: 88,
    height: 32,
    radius: "var(--radius-control)"
  }))));
}
function SortHeader({
  label,
  active,
  direction,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      border: 0,
      background: "transparent",
      padding: 0,
      color: active ? "var(--paper)" : "var(--fog)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-small)",
      cursor: "pointer"
    }
  }, label, /*#__PURE__*/React.createElement(Icon, {
    name: active && direction === "desc" ? "arrow-down" : "arrow-up",
    size: 14,
    style: {
      opacity: active ? 1 : .4
    }
  }));
}
function AdminScreen({
  initialTab = "members",
  forcedState,
  forcedMembers,
  toastOnLoad,
  minHeight = 820
}) {
  const data = window.ADMIN_DATA;
  const [tab, setTab] = React.useState(initialTab);
  const [query, setQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All roles");
  const [sort, setSort] = React.useState({
    key: "name",
    direction: "asc"
  });
  const [page, setPage] = React.useState(1);
  const [members, setMembers] = React.useState(forcedMembers || data.members);
  const [invitations, setInvitations] = React.useState(data.invitations);
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [removing, setRemoving] = React.useState(null);
  const [toast, setToast] = React.useState(toastOnLoad || null);
  const [invite, setInvite] = React.useState({
    email: "",
    role: "Member",
    message: ""
  });
  const [emailError, setEmailError] = React.useState(null);
  const [sending, setSending] = React.useState(false);
  const flash = (message, tone = "success") => {
    setToast({
      message,
      tone
    });
    window.setTimeout(() => setToast(null), 4000);
  };
  const filtered = members.filter(m => roleFilter === "All roles" || m.role === roleFilter).filter(m => (m.name + " " + m.email).toLowerCase().includes(query.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => {
    const dir = sort.direction === "asc" ? 1 : -1;
    if (sort.key === "name") return a.name.localeCompare(b.name, "nb") * dir;
    return (a.activeMins - b.activeMins) * dir;
  });
  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const shown = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const toggleSort = key => {
    setSort(s => ({
      key,
      direction: s.key === key && s.direction === "asc" ? "desc" : "asc"
    }));
    setPage(1);
  };
  const tableState = forcedState || (sorted.length ? "ready" : "empty");
  const resolved = tableState !== "loading" && tableState !== "error";
  const filtersDisabled = tableState !== "ready";
  const columns = [{
    key: "member",
    label: /*#__PURE__*/React.createElement(SortHeader, {
      label: "Member",
      active: sort.key === "name",
      direction: sort.direction,
      onClick: () => toggleSort("name")
    }),
    render: m => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.name
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--paper)"
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fog)"
      }
    }, m.email)))
  }, {
    key: "role",
    label: "Role",
    width: "140px",
    render: m => /*#__PURE__*/React.createElement(Badge, null, m.role)
  }, {
    key: "active",
    width: "200px",
    label: /*#__PURE__*/React.createElement(SortHeader, {
      label: "Last active",
      active: sort.key === "active",
      direction: sort.direction,
      onClick: () => toggleSort("active")
    }),
    render: m => /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fog)"
      }
    }, m.active)
  }, {
    key: "actions",
    label: "",
    width: "120px",
    align: "right",
    render: m => /*#__PURE__*/React.createElement(DropdownMenu, {
      label: "Actions",
      align: "end",
      items: [{
        value: "role",
        label: "Change role",
        icon: "user-round-cog"
      }, {
        value: "resend",
        label: "Send password reset",
        icon: "mail"
      }, "separator", {
        value: "remove",
        label: "Remove from workspace",
        icon: "user-round-minus",
        tone: "danger"
      }],
      onSelect: v => {
        if (v === "remove") setRemoving(m);else flash(v === "role" ? "Role change is not wired in this prototype" : "Password reset sent to " + m.email, "neutral");
      }
    })
  }];
  const submitInvite = e => {
    if (e) e.preventDefault();
    const value = invite.email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      setEmailError("Enter a valid email address, for example navn@nordveil.no.");
      return;
    }
    setEmailError(null);
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setInviteOpen(false);
      setInvitations(list => [{
        id: "new" + list.length,
        email: value,
        role: invite.role,
        sent: "Sent just now by Ingrid Halvorsen",
        expires: "Expires in 7 days"
      }, ...list]);
      setInvite({
        email: "",
        role: "Member",
        message: ""
      });
      flash("Invitation sent to " + value);
    }, 900);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight,
      background: "var(--void)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      paddingTop: "var(--space-48)",
      paddingBottom: "var(--space-64)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-24)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ds-subheading",
    style: {
      color: "var(--paper)"
    }
  }, "Team"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      marginTop: "var(--space-8)"
    }
  }, resolved ? "Nordveil workspace. " + (members.length === 0 ? "No members yet" : members.length + " members") + ", " + invitations.length + " pending invitations." : "Nordveil workspace.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: inviteOpen || !!removing,
    onClick: () => setInviteOpen(true)
  }, "Invite member")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    label: "Team settings",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "members",
      label: "Members",
      count: resolved ? members.length : undefined
    }, {
      value: "invitations",
      label: "Invitations",
      count: resolved ? invitations.length : undefined
    }, {
      value: "roles",
      label: "Roles"
    }]
  })), tab === "members" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-12)",
      alignItems: "flex-end",
      marginTop: "var(--space-24)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      flex: 1,
      minWidth: 260
    },
    label: "Search members",
    placeholder: "Search by name or email",
    disabled: filtersDisabled,
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setPage(1);
    }
  }), /*#__PURE__*/React.createElement(DropdownMenu, {
    label: roleFilter,
    disabled: filtersDisabled,
    items: ["All roles", "Admin", "Member", "Guest"].map(r => ({
      value: r,
      label: r,
      icon: r === roleFilter ? "check" : "circle"
    })),
    onSelect: v => {
      setRoleFilter(v);
      setPage(1);
    }
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginTop: "var(--space-16)"
    }
  }, tableState === "loading" ? /*#__PURE__*/React.createElement(TableSkeleton, null) : null, tableState === "error" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-24)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "Error. Could not load members",
    style: {
      width: "100%"
    }
  }, "The request to the members service timed out after 30 seconds. Nothing was changed."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => window.location.reload()
  }, "Try again")) : null, tableState === "loading" || tableState === "error" ? null : /*#__PURE__*/React.createElement(DataTable, {
    state: tableState,
    columns: columns,
    rows: shown,
    caption: tableState === "ready" ? "Sorted by " + (sort.key === "name" ? "name" : "last active") + ", " + (sort.direction === "asc" ? "ascending" : "descending") : undefined,
    emptyState: query || roleFilter !== "All roles" ? /*#__PURE__*/React.createElement(EmptyState, {
      align: "center",
      icon: "search-x",
      title: "No members match this search",
      description: "Nothing matches " + (query ? '"' + query + '"' : roleFilter) + ". Clear the filters to see everyone.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => {
          setQuery("");
          setRoleFilter("All roles");
        }
      }, "Clear filters")
    }) : /*#__PURE__*/React.createElement(EmptyState, {
      align: "center",
      icon: "users",
      title: "No members yet",
      description: "Invite a teammate to share issues, cycles and projects with.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setInviteOpen(true)
      }, "Invite member")
    })
  })), tableState === "ready" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-16)",
      marginTop: "var(--space-16)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: pageCount,
    onChange: setPage,
    summary: (page - 1) * PAGE_SIZE + 1 + " to " + Math.min(page * PAGE_SIZE, sorted.length) + " of " + sorted.length
  })) : null) : null, tab === "invitations" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(List, {
    label: "Pending invitations",
    state: invitations.length ? "ready" : "empty",
    items: invitations,
    emptyState: /*#__PURE__*/React.createElement(EmptyState, {
      align: "center",
      icon: "mail",
      title: "No pending invitations",
      description: "Invitations appear here until they are accepted or they expire.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setInviteOpen(true)
      }, "Invite member")
    }),
    renderItem: inv => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16,
      style: {
        color: "var(--fog)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--paper)"
      }
    }, inv.email), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fog)"
      }
    }, inv.sent, ". ", inv.expires, ".")), /*#__PURE__*/React.createElement(Badge, null, inv.role), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => flash("Invitation resent to " + inv.email)
    }, "Resend invitation"), /*#__PURE__*/React.createElement(DropdownMenu, {
      label: "Actions",
      align: "end",
      items: [{
        value: "copy",
        label: "Copy invite link",
        icon: "link"
      }, "separator", {
        value: "cancel",
        label: "Cancel invitation",
        icon: "x",
        tone: "danger"
      }],
      onSelect: v => {
        if (v === "cancel") {
          setInvitations(list => list.filter(i => i.id !== inv.id));
          flash("Invitation to " + inv.email + " cancelled", "neutral");
        } else flash("Invite link copied", "neutral");
      }
    }))
  }))) : null, tab === "roles" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-24)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)"
    }
  }, [["Admin", "Manages members, billing and workspace settings. Can delete the workspace.", 2], ["Member", "Full access to issues, cycles and projects. Cannot change billing.", 8], ["Guest", "Read and comment on the teams they are added to.", 2]].map(([name, desc, count]) => /*#__PURE__*/React.createElement(Card, {
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-emphasis",
    style: {
      color: "var(--paper)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fog)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      marginTop: "var(--space-4)"
    }
  }, desc)), /*#__PURE__*/React.createElement(Badge, null, count, " people"))))) : null), /*#__PURE__*/React.createElement(Modal, {
    open: inviteOpen,
    onClose: () => {
      setInviteOpen(false);
      setEmailError(null);
    },
    title: "Invite member",
    description: "They get access to the Nordveil workspace as soon as they accept.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setInviteOpen(false);
        setEmailError(null);
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      loading: sending,
      onClick: submitInvite
    }, "Send invitation"))
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submitInvite,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    placeholder: "navn@nordveil.no",
    value: invite.email,
    onChange: e => {
      setInvite(v => ({
        ...v,
        email: e.target.value
      }));
      if (emailError) setEmailError(null);
    },
    error: emailError,
    hint: emailError ? undefined : "One address per invitation."
  }), Select ? /*#__PURE__*/React.createElement(Select, {
    id: "invite-role",
    label: "Role",
    options: ["Admin", "Member", "Guest"],
    value: invite.role,
    onChange: e => setInvite(v => ({
      ...v,
      role: e.target.value
    }))
  }) : null, /*#__PURE__*/React.createElement(Input, {
    label: "Message, optional",
    multiline: true,
    rows: 3,
    placeholder: "Tell them which team to start with.",
    value: invite.message,
    onChange: e => setInvite(v => ({
      ...v,
      message: e.target.value
    }))
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: !!removing,
    onClose: () => setRemoving(null),
    title: "Remove from workspace",
    description: removing ? removing.name + " loses access to Nordveil right away." : undefined,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setRemoving(null)
    }, "Keep member"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        const m = removing;
        setMembers(list => list.filter(x => x.id !== m.id));
        setRemoving(null);
        flash(m.name + " was removed from the workspace", "neutral");
      }
    }, "Remove member"))
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "This cannot be undone"
  }, "Issues assigned to ", removing ? removing.name : "this person", " stay in place and become unassigned.")), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-24)",
      bottom: "var(--space-24)",
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone || "success",
    message: toast.message,
    onDismiss: () => setToast(null)
  })) : null);
}
Object.assign(window, {
  AdminScreen,
  Avatar,
  TableSkeleton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace-admin/AdminScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace-admin/data.js
try { (() => {
window.ADMIN_DATA = {
  members: [{
    id: "u1",
    name: "Ingrid Halvorsen",
    email: "ingrid@nordveil.no",
    role: "Admin",
    activeMins: 12,
    active: "12 minutes ago"
  }, {
    id: "u2",
    name: "Mathias Sørensen",
    email: "mathias@nordveil.no",
    role: "Member",
    activeMins: 55,
    active: "55 minutes ago"
  }, {
    id: "u3",
    name: "Aisha Rahman",
    email: "aisha@nordveil.no",
    role: "Member",
    activeMins: 180,
    active: "3 hours ago"
  }, {
    id: "u4",
    name: "Jonas Berg",
    email: "jonas@nordveil.no",
    role: "Admin",
    activeMins: 420,
    active: "7 hours ago"
  }, {
    id: "u5",
    name: "Kari Lundqvist",
    email: "kari@nordveil.no",
    role: "Member",
    activeMins: 1440,
    active: "1 day ago"
  }, {
    id: "u6",
    name: "Emil Dahl",
    email: "emil@nordveil.no",
    role: "Member",
    activeMins: 2880,
    active: "2 days ago"
  }, {
    id: "u7",
    name: "Sofie Nygård",
    email: "sofie@nordveil.no",
    role: "Guest",
    activeMins: 4320,
    active: "3 days ago"
  }, {
    id: "u8",
    name: "Petter Aune",
    email: "petter@nordveil.no",
    role: "Member",
    activeMins: 7200,
    active: "5 days ago"
  }, {
    id: "u9",
    name: "Linnea Fossum",
    email: "linnea@nordveil.no",
    role: "Member",
    activeMins: 10080,
    active: "7 days ago"
  }, {
    id: "u10",
    name: "Tobias Ek",
    email: "tobias@nordveil.no",
    role: "Guest",
    activeMins: 20160,
    active: "14 days ago"
  }, {
    id: "u11",
    name: "Hanne Vikane",
    email: "hanne@nordveil.no",
    role: "Member",
    activeMins: 43200,
    active: "30 days ago"
  }, {
    id: "u12",
    name: "Oskar Lie",
    email: "oskar@nordveil.no",
    role: "Member",
    activeMins: 86400,
    active: "60 days ago"
  }],
  invitations: [{
    id: "i1",
    email: "silje@nordveil.no",
    role: "Member",
    sent: "Sent 2 days ago by Ingrid Halvorsen",
    expires: "Expires in 5 days"
  }, {
    id: "i2",
    email: "marte@aster.no",
    role: "Guest",
    sent: "Sent 6 days ago by Jonas Berg",
    expires: "Expires in 1 day"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace-admin/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.List = __ds_scope.List;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonRows = __ds_scope.SkeletonRows;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
