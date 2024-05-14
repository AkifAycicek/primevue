export default {
    handle: {
        borderRadius: '50%',
        size: '1rem',
        background: '{form.field.border.color}',
        hoverBackground: '{form.field.border.color}',
        checkedBackground: '{primary.contrast.color}',
        checkedHoverBackground: '{primary.contrast.color}'
    },
    root: {
        width: '2.5rem',
        height: '1.5rem',
        borderRadius: '30px',
        gap: '0.25rem',
        shadow: '{form.field.shadow}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        borderWidth: '1px',
        borderColor: '{form.field.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        background: '{form.field.background}',
        hoverBackground: '{form.field.background}',
        checkedBackground: '{primary.color}',
        checkedHoverBackground: '{primary.color}'
    }
};
