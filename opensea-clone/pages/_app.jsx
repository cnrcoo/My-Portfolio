import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			desiredChainId={ChainId.Rinkeby}
			chainRpc={{
				[ChainId.Rinkeby]:
					'https://rinkeby.infura.io/v3/7c252cf72e75458788fa8da81e324dd8',
			}}
		>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;
