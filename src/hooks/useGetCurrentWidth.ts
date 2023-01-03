import { useState, useEffect } from 'react';

export const useGetCurrentWidth = (): number => {
	const [width, setQuery] = useState(window.screen.width);

	useEffect(() => {
		window.addEventListener('resize', handleScroll);
		return () => window.removeEventListener('resize', handleScroll);
	}, []);

	function handleScroll(): void {
		setQuery(window.screen.width);
	}

	return width;
};
