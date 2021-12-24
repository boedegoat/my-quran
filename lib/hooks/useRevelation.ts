export function useRevelation(revelationArab: string) {
  // 🕋 => Makkiyah
  // 🕌 => Madaniyyah
  return revelationArab === 'مكة' ? '🕋' : '🕌'
}
