export function getMoonPhaseIconPath(phase) {

  const basePath = "./svg/moon/";

  if (phase < 0.03 || phase > 0.97) return basePath + "moon-new.svg";               // 🌑
  if (phase < 0.22) return basePath + "moon-waxing-crescent.svg";                  // 🌒
  if (phase < 0.28) return basePath + "moon-first-quarter.svg";                    // 🌓
  if (phase < 0.47) return basePath + "moon-waxing-gibbous.svg";                   // 🌔
  if (phase < 0.53) return basePath + "moon-full.svg";                             // 🌕
  if (phase < 0.72) return basePath + "moon-waning-gibbous.svg";                   // 🌖
  if (phase < 0.78) return basePath + "moon-last-quarter.svg";                     // 🌗
  return basePath + "moon-waning-crescent.svg";                                    // 🌘
}
