import { ActionIcon, Image } from "@mantine/core";

export function HomeButton() {
	return (
		<ActionIcon variant="subtle" size="xl" radius="xl" color="gray">
			<Image src="/assets/images/logo.svg" w={35} />
		</ActionIcon>
	);
}
