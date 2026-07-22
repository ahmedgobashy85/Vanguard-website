/* @ds-bundle: {"format":4,"namespace":"VanguardBusinessSolutionsDesignSystem_cde2a3","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ef9232e42ec5","components/core/Badge.jsx":"b77975140849","components/core/Card.jsx":"3df1519b9f55","components/core/Tag.jsx":"97e71c118c8e","components/data/Table.jsx":"0e0c47ea7fce","components/feedback/Dialog.jsx":"1e9c07d494ba","components/feedback/ProgressBar.jsx":"53bd018832ba","components/feedback/Toast.jsx":"d7b7a93d23d6","components/feedback/Tooltip.jsx":"5d00eac3b87d","components/forms/Button.jsx":"b65e33cc352d","components/forms/Checkbox.jsx":"3c660d7dda1f","components/forms/IconButton.jsx":"0cd2c5a4fe8b","components/forms/Input.jsx":"c2df76929581","components/forms/Radio.jsx":"a5c4c7c5791c","components/forms/Select.jsx":"de976efc64da","components/forms/Switch.jsx":"da606ce35ac7","components/forms/Textarea.jsx":"57c70597934b","components/icons/Icon.jsx":"ae9dd0a457e4","components/navigation/Sidebar.jsx":"0e75f5048b86","components/navigation/Tabs.jsx":"76a53f31cb77","ui_kits/dashboard/AppShell.jsx":"b9d44d2a4b2e","ui_kits/dashboard/CohortsScreen.jsx":"11acf4cea184","ui_kits/dashboard/HomeScreen.jsx":"a3b733a2284b","ui_kits/dashboard/OtherScreens.jsx":"4ab055e567c8","ui_kits/marketing/AboutSection.jsx":"9415dbe591d0","ui_kits/marketing/CTAFooter.jsx":"c5a494203017","ui_kits/marketing/Hero.jsx":"eaf394c8d2aa","ui_kits/marketing/MarketingHeader.jsx":"a6f57c0ca5ad","ui_kits/marketing/ProgramsSection.jsx":"a2f43b90c53a","ui_kits/marketing/ResultsApproach.jsx":"a26e6fa117bb","ui_kits/portal/PortalShell.jsx":"bdbf9b30483c","ui_kits/portal/PortalTabs.jsx":"3289b5aea7e8","ui_kits/slides/AgendaSlide.jsx":"12bef4dc9f88","ui_kits/slides/BigQuoteSlide.jsx":"c14000ac402d","ui_kits/slides/StatsSlide.jsx":"1e41d0bfbf95","ui_kits/slides/TitleSlide.jsx":"9724f8117a1d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VanguardBusinessSolutionsDesignSystem_cde2a3 = window.VanguardBusinessSolutionsDesignSystem_cde2a3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48
};
function initials(name = '') {
  return name.split(' ').filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase();
}
function Avatar({
  name,
  src,
  size = 'md',
  style
}) {
  const dim = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-700)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: dim * 0.38,
      overflow: 'hidden',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--gray-150)',
    fg: 'var(--gray-700)'
  },
  navy: {
    bg: 'var(--navy-100)',
    fg: 'var(--navy-800)'
  },
  gold: {
    bg: 'var(--gold-100)',
    fg: 'var(--gold-800)'
  },
  success: {
    bg: 'var(--feedback-success-bg)',
    fg: 'var(--feedback-success-fg)'
  },
  warning: {
    bg: 'var(--feedback-warning-bg)',
    fg: 'var(--feedback-warning-fg)'
  },
  danger: {
    bg: 'var(--feedback-danger-bg)',
    fg: 'var(--feedback-danger-fg)'
  },
  info: {
    bg: 'var(--feedback-info-bg)',
    fg: 'var(--feedback-info-fg)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      background: t.bg,
      color: t.fg,
      lineHeight: 1.4,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'var(--space-7)',
  hover = false,
  style,
  ...rest
}) {
  const [isHover, setIsHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setIsHover(true),
    onMouseLeave: () => hover && setIsHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: isHover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: isHover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px 4px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 12.5,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0,
      display: 'flex',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '10px 14px',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      borderBottom: '1.5px solid var(--border-default)',
      background: 'var(--surface-sunken)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: '12px 14px',
      textAlign: c.align || 'left',
      color: 'var(--text-primary)'
    }
  }, c.render ? c.render(row) : row[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label,
  tone = 'navy',
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const color = tone === 'gold' ? 'var(--brand-gold)' : tone === 'success' ? 'var(--success-500)' : 'var(--brand-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gray-150)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--navy-950)',
      color: '#fff',
      fontSize: 12,
      fontFamily: 'var(--font-body)',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 40,
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: 13,
    gap: 6,
    height: 32
  },
  md: {
    padding: '9px 16px',
    fontSize: 14,
    gap: 7,
    height: 40
  },
  lg: {
    padding: '12px 22px',
    fontSize: 15,
    gap: 8,
    height: 48
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      base: {
        background: 'var(--gray-150)',
        color: 'var(--gray-400)',
        border: '1px solid transparent'
      },
      hover: {}
    };
  }
  switch (variant) {
    case 'primary':
      return {
        base: {
          background: 'var(--brand-primary)',
          color: 'var(--text-inverse)',
          border: '1px solid transparent'
        },
        hover: {
          background: 'var(--brand-primary-hover)'
        },
        active: {
          background: 'var(--brand-primary-active)'
        }
      };
    case 'gold':
      return {
        base: {
          background: 'var(--brand-gold)',
          color: 'var(--text-on-gold)',
          border: '1px solid transparent'
        },
        hover: {
          background: 'var(--brand-gold-hover)'
        },
        active: {
          background: 'var(--brand-gold-active)'
        }
      };
    case 'secondary':
      return {
        base: {
          background: 'var(--surface-card)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-strong)'
        },
        hover: {
          background: 'var(--gray-100)'
        },
        active: {
          background: 'var(--gray-150)'
        }
      };
    case 'ghost':
      return {
        base: {
          background: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid transparent'
        },
        hover: {
          background: 'var(--gray-100)'
        },
        active: {
          background: 'var(--gray-150)'
        }
      };
    case 'danger':
      return {
        base: {
          background: 'var(--danger-500)',
          color: '#fff',
          border: '1px solid transparent'
        },
        hover: {
          background: 'var(--danger-700)'
        },
        active: {
          background: 'var(--danger-700)'
        }
      };
    default:
      return variantStyle('primary', disabled);
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [state, setState] = React.useState('idle');
  const sizeStyle = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, disabled);
  const current = disabled ? v.base : state === 'active' ? {
    ...v.base,
    ...v.hover,
    ...v.active
  } : state === 'hover' ? {
    ...v.base,
    ...v.hover
  } : v.base;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeStyle.gap,
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : undefined,
      transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      outline: 'none',
      boxShadow: state === 'focus' ? 'var(--focus-ring)' : 'none',
      ...current,
      ...style
    },
    onFocus: () => setState('focus'),
    onBlur: () => setState('idle')
  }, rest), icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 34,
  lg: 40
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  active = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  let background = 'transparent';
  let color = 'var(--text-secondary)';
  if (variant === 'solid') {
    background = 'var(--brand-primary)';
    color = 'var(--text-inverse)';
  }
  if (active) {
    background = 'var(--navy-100)';
    color = 'var(--navy-900)';
  }
  if (hover && !disabled) {
    background = variant === 'solid' ? 'var(--brand-primary-hover)' : 'var(--gray-150)';
  }
  if (disabled) {
    color = 'var(--gray-400)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background,
      color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const height = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      height,
      boxSizing: 'border-box',
      padding: icon ? '0 12px 0 34px' : '0 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      ...inputStyle
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: error ? 'var(--danger-700)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flexShrink: 0,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: disabled ? 'var(--gray-300)' : 'var(--brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      flexShrink: 0,
      background: disabled ? 'var(--gray-200)' : checked ? 'var(--brand-primary)' : 'var(--gray-300)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  style,
  textareaStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...textareaStyle
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: error ? 'var(--danger-700)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vanguard Icon — thin wrapper around a small curated Lucide icon set.
   Icons are inlined (stroke-based, 24x24, round joins) from the open-source
   Lucide library (ISC license) since this authoring sandbox cannot fetch a
   CDN at build time. In a consuming project you may instead link Lucide
   directly: <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"> */

const PATHS = {
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
  'chevron-left': 'm15 18-6-6 6-6',
  search: 'm21 21-4.34-4.34M18.667 10.667a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
  bell: 'M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326Z',
  user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 9v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  settings: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  plus: 'M5 12h14M12 5v14',
  menu: 'M4 12h16M4 6h16M4 18h16',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  'file-text': 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 3',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 0 8 9 8-9',
  'alert-circle': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 8v4m0 4h.01',
  'check-circle': 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14h.01M11 12h1v5h1',
  'more-horizontal': 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  'trash-2': 'M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16ZM10 11v6M14 11v6',
  edit: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z',
  'log-out': 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  'book-open': 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z',
  'bar-chart-2': 'M18 20V10M12 20V4M6 20v-6',
  'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  'external-link': 'M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  star: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z',
  lock: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2ZM7 11V7a5 5 0 0 1 10 0v4',
  home: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z M9 22V12h6v10'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Icon.iconNames = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 460
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '90%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x",
      size: 16
    }),
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '14px 20px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE_ICON = {
  success: 'check-circle',
  danger: 'alert-circle',
  info: 'info',
  warning: 'alert-circle'
};
const TONE_COLOR = {
  success: 'var(--feedback-success-fg)',
  danger: 'var(--feedback-danger-fg)',
  info: 'var(--feedback-info-fg)',
  warning: 'var(--feedback-warning-fg)'
};
function Toast({
  tone = 'info',
  title,
  description,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 16px',
      width: 320,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TONE_COLOR[tone] || TONE_COLOR.info,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE_ICON[tone] || 'info',
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? disabled ? 'var(--gray-300)' : 'var(--brand-primary)' : 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'transparent' : 'var(--border-strong)'}`,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    color: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 38,
      boxSizing: 'border-box',
      padding: '0 34px 0 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: value ? 'var(--text-primary)' : 'var(--text-muted)',
      background: 'var(--surface-card)',
      appearance: 'none',
      border: `1px solid ${error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: error ? 'var(--danger-700)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  items = [],
  activeValue,
  onSelect,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 232,
      height: '100%',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box',
      padding: '20px 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, items.map(it => {
    const active = it.value === activeValue;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onSelect && onSelect(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        border: 'none',
        cursor: 'pointer',
        padding: '9px 12px',
        borderRadius: 'var(--radius-md)',
        textAlign: 'left',
        fontSize: 13.5,
        fontWeight: 500,
        background: active ? 'var(--surface-inverse-sunken)' : 'transparent',
        color: active ? '#fff' : 'var(--text-inverse-muted)',
        borderLeft: active ? '3px solid var(--brand-gold)' : '3px solid transparent'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), it.label);
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)',
      paddingTop: 12
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px 4px',
        marginRight: 22,
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        color: active ? 'var(--navy-900)' : 'var(--text-muted)',
        borderBottom: `2px solid ${active ? 'var(--brand-gold)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
function AppShell({
  activeValue,
  onSelect,
  children
}) {
  const {
    Sidebar,
    Avatar,
    IconButton,
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    items: [{
      value: 'home',
      label: 'Home',
      icon: 'home'
    }, {
      value: 'cohorts',
      label: 'Engagements',
      icon: 'users'
    }, {
      value: 'library',
      label: 'Library',
      icon: 'book-open'
    }, {
      value: 'reports',
      label: 'Reports',
      icon: 'bar-chart-2'
    }, {
      value: 'settings',
      label: 'Settings',
      icon: 'settings'
    }],
    activeValue: activeValue,
    onSelect: onSelect,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Maria Chen",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Maria Chen"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--navy-300)',
        fontSize: 11
      }
    }, "Program Director"))),
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--navy-900)',
      textTransform: 'capitalize'
    }
  }, activeValue === 'cohorts' ? 'Engagements' : activeValue), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    label: "Search"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 16
    }),
    label: "Notifications"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 28
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/CohortsScreen.jsx
try { (() => {
function CohortsScreen() {
  const {
    Table,
    Badge,
    Avatar,
    Tabs,
    Button,
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const [tab, setTab] = React.useState('active');
  const rows = [{
    name: 'AI Integration — Nile Foods',
    lead: 'Omar Hassan',
    mode: 'On-site',
    status: 'Active',
    tone: 'success'
  }, {
    name: 'Sales — Cairo Logistics Co.',
    lead: 'Yara Mostafa',
    mode: 'In-house',
    status: 'Active',
    tone: 'success'
  }, {
    name: 'English for Business — Delta Retail Group',
    lead: 'Omar Hassan',
    mode: 'Remote',
    status: 'At risk',
    tone: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'active',
      label: 'Active'
    }, {
      value: 'archived',
      label: 'Archived'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })
  }, "New engagement")), /*#__PURE__*/React.createElement(window.VanguardBusinessSolutionsDesignSystem_cde2a3.Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'name',
      label: 'Engagement'
    }, {
      key: 'lead',
      label: 'Trainer',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.lead,
        size: "sm"
      }), r.lead)
    }, {
      key: 'mode',
      label: 'Delivery'
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: rows
  })));
}
window.CohortsScreen = CohortsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/CohortsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/HomeScreen.jsx
try { (() => {
function HomeScreen() {
  const {
    Card,
    ProgressBar,
    Badge,
    Icon,
    Table
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const stats = [{
    label: 'Active engagements',
    value: '5',
    icon: 'users',
    tone: 'navy'
  }, {
    label: 'Sessions this month',
    value: '14',
    icon: 'calendar',
    tone: 'gold'
  }, {
    label: 'Contracted (quarter)',
    value: 'EGP 640K',
    icon: 'dollar-sign',
    tone: 'navy'
  }];
  const rows = [{
    name: 'AI Integration — Nile Foods',
    progress: 80,
    status: 'On track',
    tone: 'success'
  }, {
    name: 'Sales — Cairo Logistics Co.',
    progress: 55,
    status: 'On track',
    tone: 'success'
  }, {
    name: 'English for Business — Delta Retail Group',
    progress: 30,
    status: 'Needs attention',
    tone: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: s.tone === 'gold' ? 'var(--gold-100)' : 'var(--navy-100)',
      color: s.tone === 'gold' ? 'var(--gold-800)' : 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--navy-900)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, s.label))))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--navy-900)'
    }
  }, "Engagement progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    style: {
      flexShrink: 0
    }
  }, r.status)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: r.progress,
    tone: r.tone === 'warning' ? 'gold' : 'navy'
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OtherScreens.jsx
try { (() => {
function ReportsScreen() {
  const {
    Card,
    ProgressBar,
    Select,
    Button,
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Engagement",
    options: ['All engagements', 'AI Integration — Nile Foods', 'Sales — Cairo Logistics Co.'],
    value: "All engagements",
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Export report")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--navy-900)',
      marginBottom: 16
    }
  }, "Session completion by program"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['AI Integration', 80], ['Sales', 55], ['Customer Service & Retention', 68], ['English for Business', 30]].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement(ProgressBar, {
    value: val,
    tone: "navy"
  }))))));
}
function LibraryScreen() {
  const {
    Card,
    Icon,
    Badge
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const items = [{
    title: 'AI Integration — Facilitator Kit',
    type: 'PDF',
    icon: 'file-text'
  }, {
    title: 'Sales Playbook Deck',
    type: 'Slides',
    icon: 'bar-chart-2'
  }, {
    title: 'English for Business — Workbook',
    type: 'PDF',
    icon: 'file-text'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    hover: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-100)',
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, it.title), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      alignSelf: 'flex-start'
    }
  }, it.type))));
}
function SettingsScreen() {
  const {
    Card,
    Switch,
    Input
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      maxWidth: 480,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Company name",
    defaultValue: "Nile Foods"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Weekly progress email digest",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Notify trainers on at-risk engagements",
    checked: true,
    onChange: () => {}
  }));
}
window.ReportsScreen = ReportsScreen;
window.LibraryScreen = LibraryScreen;
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OtherScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/AboutSection.jsx
try { (() => {
function AboutSection() {
  const {
    Avatar
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const team = ['Elena Marsh', 'Tomás Reyes', 'Nadia Okoro', 'Sam Whitfield'];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '88px 48px',
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, "ABOUT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--navy-900)',
      margin: '0 0 16px'
    }
  }, "A focused team, built to deliver"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      margin: '0 0 40px'
    }
  }, "Vanguard Business Solutions is a Cairo-based corporate training company delivering seven customizable programs through full-time, in-house trainers. We keep the team small and senior on purpose \u2014 so every engagement is designed and delivered by people accountable for the outcome, not handed off to subcontractors."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 28
    }
  }, team.map(name => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: name,
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, name)))));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CTAFooter.jsx
try { (() => {
function CTASection() {
  const {
    Button
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: '72px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      margin: '0 0 16px'
    }
  }, "Ready to see if we're a fit?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--navy-100)',
      margin: '0 0 28px'
    }
  }, "30-minute call with a Vanguard program director \u2014 no deck, just questions."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg"
  }, "Book a consultation"));
}
function MarketingFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 48px',
      background: 'var(--navy-950)',
      color: 'var(--navy-300)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vanguard-mark-on-navy.svg",
    style: {
      height: 20
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Vanguard Business Solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Contact")));
}
window.CTASection = CTASection;
window.MarketingFooter = MarketingFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTAFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: '96px 48px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid var(--border-inverse)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--gold-300)',
      marginBottom: 28,
      letterSpacing: '0.03em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 13
  }), " ENGINEERED TO SOLVE REAL-WORLD OPERATIONAL CHALLENGES"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
      margin: '0 0 22px'
    }
  }, "Corporate training built to solve real operational problems"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--navy-100)',
      margin: '0 0 36px'
    }
  }, "Vanguard designs and delivers seven customizable training programs for Egyptian companies \u2014 in-house, on-site, or remotely, under contract, by full-time in-house trainers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg"
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      borderColor: 'var(--border-inverse)',
      color: '#fff'
    }
  }, "See our programs"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingHeader.jsx
try { (() => {
function MarketingHeader({
  onNavigate,
  active
}) {
  const {
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const links = [{
    id: 'programs',
    label: 'Programs'
  }, {
    id: 'approach',
    label: 'Approach'
  }, {
    id: 'results',
    label: 'Results'
  }, {
    id: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vanguard-mark.svg",
    style: {
      height: 26
    },
    alt: "Vanguard mark"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 1,
      color: 'var(--navy-900)'
    }
  }, "VANGUARD")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: () => onNavigate(l.id),
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: active === l.id ? 'var(--navy-900)' : 'var(--text-secondary)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(window.VanguardBusinessSolutionsDesignSystem_cde2a3.Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(window.VanguardBusinessSolutionsDesignSystem_cde2a3.Button, {
    variant: "gold",
    size: "sm"
  }, "Book a consultation")));
}
window.MarketingHeader = MarketingHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProgramsSection.jsx
try { (() => {
function ProgramsSection() {
  const {
    Card,
    Icon,
    Badge
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const programs = [{
    icon: 'dollar-sign',
    tag: null,
    title: 'Sales',
    desc: 'Prospecting, qualification, and closing frameworks your team applies on live deals — not role-play theory.'
  }, {
    icon: 'users',
    tag: null,
    title: 'Customer Service & Retention',
    desc: 'Turn support interactions into retention: handling complaints, de-escalation, and follow-through.'
  }, {
    icon: 'star',
    tag: null,
    title: 'Leadership',
    desc: 'Practical people-management for team leads and managers: feedback, delegation, and running 1:1s.'
  }, {
    icon: 'clock',
    tag: null,
    title: 'Time Management',
    desc: 'Prioritization and focus systems that survive a real inbox and a full calendar.'
  }, {
    icon: 'bar-chart-2',
    tag: null,
    title: 'Marketing',
    desc: 'Positioning, campaigns, and channel fundamentals for teams that own their own growth.'
  }, {
    icon: 'settings',
    tag: 'Start here',
    title: 'AI Integration',
    desc: 'Get your team productive with AI tools — practical, role-specific workflows, not hype.'
  }, {
    icon: 'book-open',
    tag: null,
    title: 'English for Business',
    desc: 'Confident business English for client calls, emails, and presentations.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "programs",
    style: {
      padding: '88px 48px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, "PROGRAMS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--navy-900)',
      margin: '0 0 14px'
    }
  }, "Seven programs, customized to your team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, "Every program is tailored to your team's real work and delivered in-house, on-site, or remotely under contract.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, programs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    hover: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-100)',
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 20
  })), p.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    style: {
      alignSelf: 'flex-start'
    }
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--navy-900)',
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.55,
      margin: 0,
      flex: 1
    }
  }, p.desc)))));
}
window.ProgramsSection = ProgramsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProgramsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ResultsApproach.jsx
try { (() => {
function ResultsSection() {
  const {
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const points = [{
    icon: 'users',
    value: 'In-house trainers',
    label: 'Delivered by full-time Vanguard trainers \u2014 no rotating freelancers or unknown subcontractors.'
  }, {
    icon: 'settings',
    value: 'Tailored, not templated',
    label: 'Every program is customized to your team\u2019s real operational challenges before we deliver it.'
  }, {
    icon: 'arrow-right',
    value: 'On your terms',
    label: 'In-house, on-site, or remote \u2014 scheduled around your team under a clear contract.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    style: {
      background: 'var(--surface-sunken)',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--gold-700)',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "WHY VANGUARD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32,
      marginTop: 24
    }
  }, points.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.value,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-100)',
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--navy-900)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, s.label))))));
}
function ApproachSection() {
  const {
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const steps = [{
    n: '01',
    title: 'Diagnose',
    desc: 'We start with your team\u2019s real operational challenges \u2014 not a generic syllabus.'
  }, {
    n: '02',
    title: 'Design',
    desc: 'The program is tailored to those challenges, your industry, and your team\u2019s level.'
  }, {
    n: '03',
    title: 'Deliver',
    desc: 'Full-time Vanguard trainers run the sessions in-house, on-site, or remotely.'
  }, {
    n: '04',
    title: 'Follow through',
    desc: 'Practical tools and follow-up so the training holds up back on the job.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    style: {
      padding: '88px 48px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, "APPROACH"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--navy-900)',
      margin: 0
    }
  }, "A method, not a workshop")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--gold-500)',
      marginBottom: 10
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--navy-900)',
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, s.desc)))));
}
window.ResultsSection = ResultsSection;
window.ApproachSection = ApproachSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ResultsApproach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalShell.jsx
try { (() => {
function PortalShell({
  tab,
  onTab,
  children
}) {
  const {
    Icon,
    Avatar
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 68,
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vanguard-mark-on-navy.svg",
    style: {
      height: 24
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: 0.5
    }
  }, "CLIENT PORTAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--navy-200)'
    }
  }, "Nile Foods"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Jordan Blake",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement(window.VanguardBusinessSolutionsDesignSystem_cde2a3.Tabs, {
    tabs: [{
      value: 'documents',
      label: 'Documents'
    }, {
      value: 'invoices',
      label: 'Invoices'
    }, {
      value: 'reports',
      label: 'Reports'
    }],
    value: tab,
    onChange: onTab,
    style: {
      marginBottom: 24
    }
  }), children));
}
window.PortalShell = PortalShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalTabs.jsx
try { (() => {
function DocumentsTab({
  onView
}) {
  const {
    Card,
    Icon,
    Badge,
    IconButton
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const docs = [{
    name: 'Master Services Agreement.pdf',
    date: 'Jun 2, 2026',
    tone: 'neutral',
    tag: 'Contract'
  }, {
    name: 'AI Integration — Program Outline.pdf',
    date: 'May 18, 2026',
    tone: 'navy',
    tag: 'Program'
  }, {
    name: 'Q2 Training Summary Report.pdf',
    date: 'Apr 30, 2026',
    tone: 'gold',
    tag: 'Report'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, docs.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.name,
    padding: "16px 20px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-100)',
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Uploaded ", d.date)), /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.tag), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }),
    label: "Download",
    onClick: () => onView && onView(d)
  }))));
}
function InvoicesTab() {
  const {
    Table,
    Badge,
    Button,
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const rows = [{
    id: 'INV-1042',
    desc: 'AI Integration — Q2 delivery',
    amount: 'EGP 180,000',
    status: 'Paid',
    tone: 'success'
  }, {
    id: 'INV-1051',
    desc: 'Sales — Q3 delivery',
    amount: 'EGP 120,000',
    status: 'Due Aug 4',
    tone: 'warning'
  }, {
    id: 'INV-1038',
    desc: 'English for Business — Q2 delivery',
    amount: 'EGP 96,000',
    status: 'Paid',
    tone: 'success'
  }];
  return /*#__PURE__*/React.createElement(window.VanguardBusinessSolutionsDesignSystem_cde2a3.Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'id',
      label: 'Invoice'
    }, {
      key: 'desc',
      label: 'Description'
    }, {
      key: 'amount',
      label: 'Amount',
      align: 'right'
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }, {
      key: 'action',
      label: '',
      align: 'right',
      render: () => /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 14
        })
      }, "PDF")
    }],
    rows: rows
  }));
}
function ReportsTab() {
  const {
    Card,
    ProgressBar
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--navy-900)',
      marginBottom: 16
    }
  }, "Training completion \u2014 Nile Foods"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['AI Integration', 80], ['Customer Service & Retention', 62]].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement(ProgressBar, {
    value: val,
    tone: "gold"
  })))));
}
window.DocumentsTab = DocumentsTab;
window.InvoicesTab = InvoicesTab;
window.ReportsTab = ReportsTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/AgendaSlide.jsx
try { (() => {
function AgendaSlide() {
  const {
    Icon
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const items = [{
    n: '01',
    label: 'Your operational challenge',
    icon: 'search'
  }, {
    n: '02',
    label: 'Recommended program & scope',
    icon: 'book-open'
  }, {
    n: '03',
    label: 'Delivery plan & schedule',
    icon: 'calendar'
  }, {
    n: '04',
    label: 'Investment & next steps',
    icon: 'check-circle'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '64px 80px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, "AGENDA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--navy-900)',
      margin: '0 0 48px'
    }
  }, "What this proposal covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--gold-500)',
      width: 50
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-100)',
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--navy-900)'
    }
  }, it.label)))));
}
window.AgendaSlide = AgendaSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/AgendaSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/BigQuoteSlide.jsx
try { (() => {
function BigQuoteSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '64px 120px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: 'var(--gold-300)',
      marginBottom: 24
    }
  }, "OUR PROMISE"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1.25,
      margin: '0 0 32px',
      maxWidth: 980,
      letterSpacing: '-0.01em'
    }
  }, "Engineered to solve real-world operational challenges."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--navy-200)',
      margin: 0,
      maxWidth: 760,
      lineHeight: 1.6
    }
  }, "Every Vanguard program starts from your team's actual work and is delivered by trainers accountable for the outcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      width: 120,
      background: 'var(--brand-gold)',
      marginTop: 40
    }
  }));
}
window.BigQuoteSlide = BigQuoteSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/BigQuoteSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/StatsSlide.jsx
try { (() => {
function StatsSlide() {
  const {
    ProgressBar
  } = window.VanguardBusinessSolutionsDesignSystem_cde2a3;
  const stats = [{
    value: '7',
    label: 'Customizable programs to choose from'
  }, {
    value: '2',
    label: 'Full-time in-house trainers — no freelancers'
  }, {
    value: '3',
    label: 'Delivery modes: in-house, on-site, remote'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: 'var(--surface-sunken)',
      display: 'flex',
      flexDirection: 'column',
      padding: '64px 80px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, "PROPOSED PLAN"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--navy-900)',
      margin: '0 0 48px'
    }
  }, "AI Integration \u2014 at a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32,
      marginBottom: 56
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 48,
      color: 'var(--navy-900)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 10,
      lineHeight: 1.4
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--navy-900)',
      marginBottom: 18
    }
  }, "Proposed delivery schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Discovery & tailoring', 100], ['Live sessions (6 days)', 60], ['Follow-up & tools', 20]].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement(ProgressBar, {
    value: val,
    tone: "gold"
  }))))));
}
window.StatsSlide = StatsSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/StatsSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/TitleSlide.jsx
try { (() => {
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 80px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vanguard-mark-on-navy.svg",
    style: {
      height: 30
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 2
    }
  }, "VANGUARD")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: 'var(--gold-300)',
      marginBottom: 20
    }
  }, "TRAINING PROPOSAL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.1,
      margin: '0 0 16px',
      maxWidth: 900
    }
  }, "AI Integration Program \u2014 Nile Foods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--navy-200)',
      margin: 0
    }
  }, "Engineered to solve real-world operational challenges \xB7 July 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      width: 120,
      background: 'var(--brand-gold)'
    }
  }));
}
window.TitleSlide = TitleSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/TitleSlide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
