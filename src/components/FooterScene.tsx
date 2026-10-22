/**
 * Decorative farm scene behind the footer: cow, buffalo and poultry in soft silhouette.
 * Pure SVG (no image request). Colours come from `currentColor`, which the CSS sets to the brand teal at low opacity,
 * so the footer reads as transparent glass with the animals showing through.
 * Two compositions: a wide one for tablets/desktops and a compact one for phones (see .footer__scene in globals.css).
 */
export default function FooterScene() {
  return (
    <div className="footer__scene" aria-hidden="true">
      <svg width="0" height="0" style={{ position: "absolute" }} focusable="false">
        <defs>
          {/* Cow, facing right. Box 300 x 200, hooves on y=200. */}
          <g id="fs-cow">
            <path d="M52 62 Q26 84 33 140" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="32" cy="146" rx="7" ry="13" />
            <rect x="48" y="44" width="176" height="92" rx="42" />
            <rect x="62" y="110" width="17" height="90" rx="7" />
            <rect x="90" y="116" width="17" height="84" rx="7" />
            <rect x="170" y="116" width="17" height="84" rx="7" />
            <rect x="198" y="110" width="17" height="90" rx="7" />
            <ellipse cx="150" cy="138" rx="19" ry="11" />
            <path d="M200 58 Q236 40 252 62 L258 112 Q226 128 202 116 Z" />
            <ellipse cx="256" cy="86" rx="31" ry="25" transform="rotate(14 256 86)" />
            <ellipse cx="282" cy="104" rx="19" ry="15" transform="rotate(14 282 104)" />
            <ellipse cx="230" cy="64" rx="19" ry="8" transform="rotate(-28 230 64)" />
            <path d="M246 66 Q238 46 252 40 Q252 54 258 64 Z" />
          </g>
          {/* Buffalo, facing left, heavy body and swept-back horns. Box 320 x 200. */}
          <g id="fs-buffalo">
            <path d="M270 70 Q300 96 292 146" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
            <ellipse cx="292" cy="152" rx="8" ry="14" />
            <path d="M70 70 Q120 18 190 38 Q262 40 276 92 Q282 138 246 142 L96 142 Q66 120 70 70 Z" />
            <rect x="84" y="112" width="24" height="88" rx="9" />
            <rect x="116" y="118" width="24" height="82" rx="9" />
            <rect x="214" y="118" width="24" height="82" rx="9" />
            <rect x="244" y="112" width="24" height="88" rx="9" />
            <path d="M92 66 Q56 78 46 112 L52 146 Q84 150 104 122 Z" />
            <ellipse cx="44" cy="124" rx="32" ry="27" transform="rotate(-12 44 124)" />
            <ellipse cx="22" cy="142" rx="21" ry="16" transform="rotate(-12 22 142)" />
            <path d="M66 100 C28 104 2 78 6 44 C24 74 48 82 84 82 Z" />
            <path d="M80 98 C64 80 74 58 96 50 C90 66 94 82 98 98 Z" />
            <ellipse cx="82" cy="104" rx="17" ry="7" transform="rotate(24 82 104)" />
          </g>
          {/* Hen, facing right. Box 130 x 120. */}
          <g id="fs-hen">
            <path d="M26 66 Q-2 52 6 18 Q26 30 34 54 Z" />
            <path d="M28 74 Q-6 76 -2 44 Q22 52 34 66 Z" />
            <ellipse cx="62" cy="76" rx="42" ry="31" transform="rotate(8 62 76)" />
            <path d="M88 70 Q92 40 104 32 L116 40 Q112 66 108 88 Z" />
            <circle cx="104" cy="32" r="15" />
            <circle cx="96" cy="14" r="6" />
            <circle cx="105" cy="11" r="6.5" />
            <circle cx="113" cy="15" r="5.5" />
            <path d="M117 28 L132 34 L117 41 Z" />
            <ellipse cx="113" cy="48" rx="5" ry="8" />
            <path d="M58 104 L54 120 M70 105 L72 120 M46 120 H62 M64 120 H80" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g id="fs-chick">
            <circle cx="22" cy="26" r="14" />
            <circle cx="38" cy="14" r="9" />
            <path d="M45 12 L56 16 L45 20 Z" />
            <path d="M18 40 L16 52 M28 40 L30 52" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g id="fs-tuft">
            <path d="M0 24 Q4 8 2 0 Q10 10 12 24 Z M8 24 Q16 12 22 4 Q22 16 20 24 Z M-2 24 Q-10 14 -16 8 Q-8 10 0 24 Z" />
          </g>
        </defs>
      </svg>

      {/* Wide composition */}
      <svg className="footer__scene-svg footer__scene-svg--wide" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMax meet" focusable="false">
        <path d="M0 250 Q150 214 300 238 T600 232 T900 238 T1200 226 V260 H0 Z" opacity=".55" />
        <use href="#fs-cow" transform="translate(40 52) scale(.95)" />
        <use href="#fs-hen" transform="translate(372 130) scale(.72)" />
        <use href="#fs-chick" transform="translate(462 198) scale(.6)" />
        <use href="#fs-buffalo" transform="translate(560 44) scale(1.02)" />
        <use href="#fs-cow" transform="translate(870 90) scale(.62)" />
        <use href="#fs-hen" transform="translate(1086 150) scale(.58)" />
        <use href="#fs-tuft" transform="translate(340 232)" />
        <use href="#fs-tuft" transform="translate(900 236) scale(.8)" />
        <use href="#fs-tuft" transform="translate(1180 224) scale(.7)" />
        <rect x="0" y="244" width="1200" height="16" />
      </svg>

      {/* Compact composition (phones) */}
      <svg className="footer__scene-svg footer__scene-svg--tall" viewBox="0 0 420 300" preserveAspectRatio="xMidYMax meet" focusable="false">
        <path d="M0 290 Q110 262 210 280 T420 270 V300 H0 Z" opacity=".55" />
        <use href="#fs-cow" transform="translate(0 182) scale(.5)" />
        <use href="#fs-hen" transform="translate(160 216) scale(.55)" />
        <use href="#fs-buffalo" transform="translate(226 164) scale(.6)" />
        <use href="#fs-tuft" transform="translate(150 282)" />
        <use href="#fs-tuft" transform="translate(410 280) scale(.8)" />
        <rect x="0" y="284" width="420" height="16" />
      </svg>
    </div>
  );
}
