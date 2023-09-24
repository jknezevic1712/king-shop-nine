/**
 * @summary hook that returns true or false based on the string provided
 */
export default function useThemeModeValue(themeMode: 'light' | 'dark') {
	if (themeMode === 'light') return false;
	return true;
}
