import { ActionIcon, Tooltip } from "@mantine/core";
import { IconMaximize } from "@tabler/icons-react";

export function OutlineExpand() {
	return (
		<Tooltip label="Expand outline">
			<ActionIcon radius="xl" variant="subtle" size="sm">
				<IconMaximize />
			</ActionIcon>
		</Tooltip>
	);
}
