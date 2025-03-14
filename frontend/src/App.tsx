import "@mantine/core/styles.css";

import "@mantine/code-highlight/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { OutlineCircle } from "./components/button/OutlineCircle";

function App() {
	const theme = createTheme({});

	return (
		<MantineProvider theme={theme} forceColorScheme="dark">
			<OutlineCircle />
		</MantineProvider>
	);
}

export default App;
