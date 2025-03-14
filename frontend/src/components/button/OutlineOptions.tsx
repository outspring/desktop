import { ActionIcon, Tooltip } from "@mantine/core";
import { IconMenu } from "@tabler/icons-react";

export function OutlineOptions() {
	return (
		<Tooltip label="Open outline menu">
			<ActionIcon radius="xl" variant="subtle" size="sm">
				<IconMenu />
			</ActionIcon>
		</Tooltip>
	);
}
