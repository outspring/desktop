import "@mantine/core/styles.css";

import "@mantine/code-highlight/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import {
	Container,
	createTheme,
	Group,
	MantineProvider,
	Textarea,
} from "@mantine/core";
import { OutlineCircle } from "./components/button/OutlineCircle";
import { OutlineExpand } from "./components/button/OutlineExpand";
import { OutlineOptions } from "./components/button/OutlineOptions";

function App() {
	const theme = createTheme({});

	return (
		<MantineProvider theme={theme} forceColorScheme="dark">
			<Container p="md">
				<Group gap={5} align="start" wrap="nowrap">
					<OutlineOptions />
					<OutlineExpand />
					<OutlineCircle />
					<Textarea
						w="100%"
						autosize
						variant="transparent"
						placeholder="Start typing..."
						styles={{
							input: {
								padding: 0,
							},
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
							}
						}}
					/>
				</Group>
			</Container>
		</MantineProvider>
	);
}

export default App;
