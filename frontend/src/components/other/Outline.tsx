import classes from "./Outline.module.css";

import { Box, Group, Textarea } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { OutlineCircle } from "../button/OutlineCircle";
import { OutlineExpand } from "../button/OutlineExpand";
import { OutlineOptions } from "../button/OutlineOptions";

export function Outline() {
	const { hovered, ref } = useHover();

	return (
		<Box ref={ref}>
			<Group gap={5} align="start" wrap="nowrap">
				<Box
					style={{
						display: "contents",
						visibility: hovered ? "visible" : "hidden",
					}}
				>
					<OutlineOptions />
					<OutlineExpand />
				</Box>
				<OutlineCircle />
				<TextOutline />
			</Group>
		</Box>
	);
}

function TextOutline() {
	return (
		<Textarea
			w="100%"
			autosize
			variant="transparent"
			placeholder="Start typing..."
			classNames={{
				input: classes.textOutline,
			}}
			styles={{
				input: {
					padding: 0,
					height: "fit-content",
				},
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					e.preventDefault();
				}
			}}
		/>
	);
}
