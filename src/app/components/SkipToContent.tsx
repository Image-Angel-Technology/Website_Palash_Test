/**
 * ACCESSIBILITY: Skip-to-content link
 * First focusable element on every page
 * Visible only on keyboard focus
 */

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 9999,
        padding: '12px 24px',
        backgroundColor: '#221f1f',
        color: '#ffffff',
        textDecoration: 'none',
        fontFamily: "'Aktiv Grotesk', sans-serif",
        fontSize: '14px',
        fontWeight: 400,
        borderRadius: '4px',
        border: '2px solid #f85838',
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = '12px';
        e.currentTarget.style.top = '12px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = '-9999px';
      }}
    >
      Skip to main content
    </a>
  );
}
