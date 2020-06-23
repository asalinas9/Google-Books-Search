import React from 'react';

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({fluid, children}) {
	return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// This Row component
export function Row({fluid, children}) {
	return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns
export function Col({size, children}) {
	return (
		<div
			className={size
				.split(' ')
				.map((size) => 'col-' + size)
				.join(' ')}
		>
			{children}
		</div>
	);
}
