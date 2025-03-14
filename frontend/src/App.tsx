import "@mantine/core/styles.css";

import "@mantine/code-highlight/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import {
	Anchor,
	Box,
	Breadcrumbs,
	createTheme,
	Group,
	MantineProvider,
	Stack,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconLetterCase, IconPhoto, IconQuote } from "@tabler/icons-react";
import { HomeButton } from "./components/button/Logo";
import { Outline } from "./components/other/Outline";

function App() {
	const theme = createTheme({
		primaryColor: "red",
		scale: 1.2,
	});

	return (
		<MantineProvider theme={theme} forceColorScheme="dark">
			<Box p="lg">
				<Stack>
					<Title order={2}>Hello world</Title>
					<Breadcrumbs>
						<HomeButton />
						<Group gap={5}>
							<ThemeIcon variant="light" size="xs" title="Text">
								<IconLetterCase />
							</ThemeIcon>
							<Anchor c="gray" size="sm">
								Hello world this is...
							</Anchor>
						</Group>
						<Group gap={5}>
							<ThemeIcon variant="light" size="xs" title="Image">
								<IconPhoto />
							</ThemeIcon>
							<Anchor c="gray" size="sm">
								hello.png
							</Anchor>
						</Group>
						<Group gap={5}>
							<ThemeIcon variant="light" size="xs" title="Quote">
								<IconQuote />
							</ThemeIcon>
							<Anchor c="gray" size="sm">
								When something goes...
							</Anchor>
						</Group>
					</Breadcrumbs>
					<Outline />
					<Outline />
				</Stack>
			</Box>
		</MantineProvider>
	);
}

export default App;
