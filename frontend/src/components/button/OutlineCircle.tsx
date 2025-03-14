import { ActionIcon } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";

export function OutlineCircle() {
	return (
		<ActionIcon radius="xl" variant="subtle" size="sm" color="gray">
			<IconCircleFilled size={10} />
		</ActionIcon>
	);
}
