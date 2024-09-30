import React from 'react';
import Script from 'next/script';

const Analytics = () => (
	<>
		<Script
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
		/>
		<Script
			dangerouslySetInnerHTML={{
				__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}');
        `,
			}}
		/>
	</>
);

export default Analytics;
