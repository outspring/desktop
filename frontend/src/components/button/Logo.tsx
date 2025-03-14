import { ActionIcon, Image } from "@mantine/core";

export function HomeButton() {
	return (
		<ActionIcon variant="subtle" radius="xl" size="lg" color="gray">
			<Image src="/assets/images/logo.svg" w={30} />
		</ActionIcon>
	);
}
