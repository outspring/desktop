import "@mantine/core/styles.css";

import "@mantine/code-highlight/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import { Box, createTheme, MantineProvider } from "@mantine/core";
import { Outline } from "./components/other/Outline";

function App() {
	const theme = createTheme({});

	return (
		<MantineProvider theme={theme} forceColorScheme="dark">
			<Box p="lg">
				<Outline />
			</Box>
		</MantineProvider>
	);
}

export default App;
